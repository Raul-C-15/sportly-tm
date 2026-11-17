import React, { useEffect, useMemo, useState } from 'react';
import {
  Sparkles,
  MapPin,
  Calendar,
  Clock,
  Users,
  Wallet,
  Award,
  CheckCircle2,
  AlertCircle,
  Minus,
  Plus,
  Info,
} from 'lucide-react';
import { useSportly } from '../context/SportlyContext';
import type { SkillLevel, SportCategory } from '../types';
import {
  SKILL_LEVELS,
  SKILL_STYLE,
  SPORT_CATEGORIES,
  SPORT_CONFIG,
  TIMISOARA_NEIGHBORHOODS,
  calculateCostPerPlayer,
  formatRON,
  getRelativeOffsetISO,
} from '../utils/sportConfig';

const CUSTOM_VENUE_VALUE = '__custom__';

const QUICK_TITLE_SUGGESTIONS: Record<SportCategory, string[]> = {
  'Fotbal Sintetic': [
    'Sintetic 5v5 – mai avem nevoie de 2 oameni',
    'Miuță amicală de seară după birou',
  ],
  Baschet: [
    'Baschet 3x3 relaxat la panou',
    'Meci 4x4 pe tartan – voie bună',
  ],
  Padel: [
    'Meci de padel la dublu, nivel mediu',
    'Padel de seară – căutăm al 4-lea jucător',
  ],
  Tenis: [
    'Tenis la dublu – 2 seturi dinamice',
    'Partener de schimb & set amical',
  ],
  'Ping Pong': [
    'Ping Pong la dublu în parc – am palete de rezervă',
    'Meciuri rotative de tenis de masă',
  ],
  Alergat: [
    'Alergare ușoară 5K pe Malul Begăi',
    'Alergare de grup prin Pădurea Verde',
  ],
  Bicicletă: [
    'Tură de seară pe Pista Begăi (25 km)',
    'Ieșire MTB lejeră prin Pădurea Verde',
  ],
  'Volei & Fitness': [
    'Volei amical în aer liber',
    'Antrenament Street Workout & Calisthenics în parc',
  ],
};

export const CreateMatchView: React.FC = () => {
  const {
    venues,
    prefilledVenueId,
    clearPrefilledVenue,
    createMatch,
    setActiveTab,
  } = useSportly();

  const defaultVenue = venues[0];

  const [sport, setSport] = useState<SportCategory>('Fotbal Sintetic');
  const [title, setTitle] = useState<string>('');
  const [venueId, setVenueId] = useState<string>(defaultVenue?.id ?? CUSTOM_VENUE_VALUE);

  // Custom spot state
  const [customVenueName, setCustomVenueName] = useState<string>('');
  const [customNeighborhood, setCustomNeighborhood] = useState<string>(
    TIMISOARA_NEIGHBORHOODS[0]
  );
  const [customAddress, setCustomAddress] = useState<string>('');
  const [customIsFree, setCustomIsFree] = useState<boolean>(true);

  // Schedule & capacity state
  const [dateISO, setDateISO] = useState<string>(getRelativeOffsetISO(0));
  const [time, setTime] = useState<string>('19:30');
  const [totalSpots, setTotalSpots] = useState<number>(10);
  const [alreadyIn, setAlreadyIn] = useState<number>(8);
  const [totalCostInput, setTotalCostInput] = useState<string>(
    defaultVenue && !defaultVenue.isFree ? String(defaultVenue.hourlyRate) : '180'
  );
  const [skillLevel, setSkillLevel] = useState<SkillLevel>('Intermediar');
  const [hostNote, setHostNote] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Apply prefilled venue when user clicked "Creează meci aici" from Map/Directory
  useEffect(() => {
    if (!prefilledVenueId) return;
    const found = venues.find((v) => v.id === prefilledVenueId);
    if (found) {
      setVenueId(found.id);
      if (found.sports.length > 0) {
        const primarySport = found.sports[0];
        setSport(primarySport);
        const defaults = SPORT_CONFIG[primarySport];
        setTotalSpots(defaults.defaultSpots);
        setAlreadyIn(defaults.defaultAlreadyIn);
      }
      if (!found.isFree) {
        setTotalCostInput(String(found.hourlyRate));
      }
    }
    clearPrefilledVenue();
  }, [prefilledVenueId, venues, clearPrefilledVenue]);

  const selectedVenue = useMemo(
    () =>
      venueId === CUSTOM_VENUE_VALUE
        ? undefined
        : venues.find((v) => v.id === venueId),
    [venueId, venues]
  );

  const isFreeMatch =
    venueId === CUSTOM_VENUE_VALUE
      ? customIsFree
      : selectedVenue
      ? selectedVenue.isFree
      : false;

  const parsedCost = Number(totalCostInput);
  const validNumericCost =
    !Number.isNaN(parsedCost) && parsedCost > 0 ? parsedCost : 0;

  const handleSportChange = (nextSport: SportCategory) => {
    setSport(nextSport);
    const meta = SPORT_CONFIG[nextSport];
    setTotalSpots(meta.defaultSpots);
    setAlreadyIn(meta.defaultAlreadyIn);

    // If current venue doesn't support this sport, keep user's selection if custom, or suggest a matching venue
    if (
      venueId !== CUSTOM_VENUE_VALUE &&
      selectedVenue &&
      !selectedVenue.sports.includes(nextSport)
    ) {
      const matchingVenue = venues.find((v) => v.sports.includes(nextSport));
      if (matchingVenue) {
        setVenueId(matchingVenue.id);
        if (!matchingVenue.isFree) {
          setTotalCostInput(String(matchingVenue.hourlyRate));
        }
      }
    }
  };

  const handleVenueChange = (nextVenueId: string) => {
    setVenueId(nextVenueId);
    if (nextVenueId !== CUSTOM_VENUE_VALUE) {
      const found = venues.find((v) => v.id === nextVenueId);
      if (found && !found.isFree) {
        setTotalCostInput(String(found.hourlyRate));
      }
    }
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy.customVenueName;
      delete copy.totalCost;
      return copy;
    });
  };

  const adjustTotalSpots = (delta: number) => {
    setTotalSpots((prev) => {
      const next = Math.min(30, Math.max(2, prev + delta));
      if (alreadyIn >= next) {
        setAlreadyIn(Math.max(1, next - 1));
      }
      return next;
    });
  };

  const adjustAlreadyIn = (delta: number) => {
    setAlreadyIn((prev) => Math.min(totalSpots - 1, Math.max(1, prev + delta)));
  };

  const validateForm = (): boolean => {
    const nextErrors: Record<string, string> = {};

    if (title.trim().length < 4) {
      nextErrors.title =
        'Te rugăm să introduci un titlu clar (minim 4 caractere).';
    }

    if (venueId === CUSTOM_VENUE_VALUE && customVenueName.trim().length < 3) {
      nextErrors.customVenueName =
        'Introdu numele terenului sau al parcului (minim 3 caractere).';
    }

    if (!dateISO) {
      nextErrors.dateISO = 'Selectează data meciului.';
    }

    if (!time) {
      nextErrors.time = 'Selectează ora de începere.';
    }

    if (
      !Number.isInteger(totalSpots) ||
      totalSpots < 2 ||
      totalSpots > 30
    ) {
      nextErrors.spots =
        'Numărul total de jucători trebuie să fie între 2 și 30.';
    } else if (
      !Number.isInteger(alreadyIn) ||
      alreadyIn < 1 ||
      alreadyIn >= totalSpots
    ) {
      nextErrors.spots =
        'Numărul jucătorilor deja înscriși trebuie să fie cel puțin 1 și mai mic decât totalul locurilor.';
    }

    if (!isFreeMatch) {
      if (
        totalCostInput.trim() === '' ||
        Number.isNaN(parsedCost) ||
        parsedCost <= 0 ||
        parsedCost > 5000
      ) {
        nextErrors.totalCost =
          'Introdu un cost total pozitiv valid în RON (ex: 180).';
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    createMatch({
      sport,
      skillLevel,
      title,
      venueId,
      customVenue:
        venueId === CUSTOM_VENUE_VALUE
          ? {
              name: customVenueName,
              neighborhood: customNeighborhood,
              address: customAddress,
              isFree: customIsFree,
            }
          : undefined,
      isFree: isFreeMatch,
      totalCost: isFreeMatch ? 0 : Math.round(parsedCost),
      dateISO,
      time,
      totalSpots,
      alreadyJoinedCount: alreadyIn,
      hostNote,
    });
  };

  const spotsOpen = Math.max(1, totalSpots - alreadyIn);
  const pricePerPersonFull = calculateCostPerPlayer(validNumericCost, totalSpots);
  const pricePerPersonCurrent = calculateCostPerPlayer(validNumericCost, alreadyIn);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-5 pb-28 md:pb-14">
      <div className="mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFDF5] border border-emerald-200 text-xs font-extrabold text-[#064E3B] mb-2">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          Organizează rapid în Timișoara
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#064E3B] tracking-tight">
          Creează un Meci Deschis
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          Completează detaliile de mai jos și publică anunțul instant în Feed-ul
          jucătorilor din Timișoara.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="bg-white rounded-3xl border border-slate-200/90 shadow-sport p-5 sm:p-7 space-y-6"
      >
        {/* 1. Sport Visual Icon Grid */}
        <div>
          <label className="block text-sm font-extrabold text-[#064E3B] mb-2.5">
            1. Ce sport jucați?
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {SPORT_CATEGORIES.map((cat) => {
              const meta = SPORT_CONFIG[cat];
              const Icon = meta.icon;
              const isSelected = sport === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleSportChange(cat)}
                  className={`min-h-[68px] p-3 rounded-2xl border flex flex-col items-center justify-center gap-1.5 text-center transition-all ${
                    isSelected
                      ? 'bg-[#ECFDF5] border-emerald-500 ring-2 ring-emerald-300 text-[#064E3B] shadow-sm'
                      : 'bg-slate-50/70 hover:bg-white border-slate-200 text-slate-700'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      isSelected ? 'text-emerald-600' : meta.iconColor
                    }`}
                  />
                  <span className="text-xs font-extrabold leading-tight">
                    {cat}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Match Title & Description */}
        <div className="space-y-4 pt-2 border-t border-slate-100">
          <div>
            <label
              htmlFor="match-title"
              className="block text-sm font-extrabold text-[#064E3B] mb-1.5"
            >
              2. Titlul meciului *
            </label>
            <input
              id="match-title"
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (errors.title) {
                  setErrors((prev) => ({ ...prev, title: '' }));
                }
              }}
              placeholder="Ex: Sintetic 5v5 – mai avem nevoie de 2 oameni"
              className={`w-full min-h-[46px] px-4 py-2.5 rounded-xl border text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.title
                  ? 'border-rose-400 bg-rose-50/40 focus:ring-rose-400'
                  : 'border-slate-200 bg-slate-50/60 focus:bg-white focus:ring-emerald-500'
              }`}
            />
            {errors.title && (
              <p className="mt-1.5 text-xs font-semibold text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.title}</span>
              </p>
            )}

            {/* Quick Suggestion Chips */}
            <div className="flex flex-wrap items-center gap-1.5 mt-2">
              <span className="text-[11px] font-semibold text-slate-400">
                Idei rapide:
              </span>
              {QUICK_TITLE_SUGGESTIONS[sport].map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => {
                    setTitle(suggestion);
                    setErrors((prev) => ({ ...prev, title: '' }));
                  }}
                  className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-[#ECFDF5] text-slate-600 hover:text-[#064E3B] transition-colors"
                >
                  + {suggestion}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="match-note"
              className="block text-sm font-bold text-slate-700 mb-1.5"
            >
              Scurtă descriere / Reguli &amp; detalii organizatorice
            </label>
            <textarea
              id="match-note"
              rows={3}
              value={hostNote}
              onChange={(e) => setHostNote(e.target.value)}
              placeholder="Ex: Aduc eu mingea, luați tricou alb sau negru. Plata pe Revolut sau cash la teren."
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            />
          </div>
        </div>

        {/* 3. Venue Selector Dropdown with Automatic Free/Paid Detection */}
        <div className="space-y-3 pt-2 border-t border-slate-100">
          <label
            htmlFor="venue-select"
            className="block text-sm font-extrabold text-[#064E3B]"
          >
            3. Unde jucați în Timișoara? *
          </label>

          <select
            id="venue-select"
            value={venueId}
            onChange={(e) => handleVenueChange(e.target.value)}
            className="w-full min-h-[46px] px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
          >
            {venues.map((v) => (
              <option key={v.id} value={v.id}>
                {v.name} ({v.neighborhood}) —{' '}
                {v.isFree ? 'GRATIS' : `Cu plată (~${v.hourlyRate} RON/oră)`}
              </option>
            ))}
            <option value={CUSTOM_VENUE_VALUE}>
              + Adaugă o locație nouă / personalizată în Timișoara...
            </option>
          </select>

          {/* Auto-detected Venue Status Pill */}
          {selectedVenue && (
            <div
              className={`rounded-2xl p-3.5 border flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                selectedVenue.isFree
                  ? 'bg-[#ECFDF5] border-emerald-200'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-extrabold text-[#064E3B]">
                    {selectedVenue.neighborhood} • {selectedVenue.surface}
                  </p>
                  <p className="text-[11px] text-slate-600">
                    {selectedVenue.address}
                  </p>
                </div>
              </div>
              <span
                className={`self-start sm:self-auto px-2.5 py-1 rounded-xl text-[11px] font-extrabold uppercase shrink-0 ${
                  selectedVenue.isFree
                    ? 'bg-[#84CC16]/35 text-[#064E3B] border border-[#84CC16]'
                    : 'bg-[#064E3B] text-white'
                }`}
              >
                {selectedVenue.isFree
                  ? 'Detectat: Teren Gratis'
                  : 'Detectat: Teren cu plată'}
              </span>
            </div>
          )}

          {/* Custom Venue Sub-Form */}
          {venueId === CUSTOM_VENUE_VALUE && (
            <div className="rounded-2xl bg-[#F8FAFC] border border-emerald-200 p-4 space-y-3">
              <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                Detalii locație personalizată (va fi salvată și pe hartă)
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nume teren / parc *
                  </label>
                  <input
                    type="text"
                    value={customVenueName}
                    onChange={(e) => setCustomVenueName(e.target.value)}
                    placeholder="Ex: Teren Sintetic Baza 1 Politehnica"
                    className={`w-full min-h-[44px] px-3.5 py-2 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 ${
                      errors.customVenueName
                        ? 'border-rose-400 focus:ring-rose-400'
                        : 'border-slate-200 focus:ring-emerald-500'
                    }`}
                  />
                  {errors.customVenueName && (
                    <p className="mt-1 text-xs font-semibold text-rose-600">
                      {errors.customVenueName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Cartier / Zonă Timișoara
                  </label>
                  <select
                    value={customNeighborhood}
                    onChange={(e) => setCustomNeighborhood(e.target.value)}
                    className="w-full min-h-[44px] px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    {TIMISOARA_NEIGHBORHOODS.map((zone) => (
                      <option key={zone} value={zone}>
                        {zone}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Adresă sau reper (opțional)
                </label>
                <input
                  type="text"
                  value={customAddress}
                  onChange={(e) => setCustomAddress(e.target.value)}
                  placeholder="Ex: Lângă Sala Olimpia, intrarea dinspre alee"
                  className="w-full min-h-[44px] px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setCustomIsFree(true)}
                  className={`flex-1 min-h-[44px] rounded-xl text-xs font-extrabold border transition-all ${
                    customIsFree
                      ? 'bg-[#84CC16]/35 border-[#84CC16] text-[#064E3B]'
                      : 'bg-white border-slate-200 text-slate-600'
                  }`}
                >
                  Teren Gratis (Acces liber)
                </button>
                <button
                  type="button"
                  onClick={() => setCustomIsFree(false)}
                  className={`flex-1 min-h-[44px] rounded-xl text-xs font-extrabold border transition-all ${
                    !customIsFree
                      ? 'bg-[#064E3B] border-[#064E3B] text-white'
                      : 'bg-white border-slate-200 text-slate-600'
                  }`}
                >
                  Teren cu Plată (Închiriat)
                </button>
              </div>
            </div>
          )}
        </div>

        {/* 4. Date & Time Picker */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
          <div>
            <label
              htmlFor="match-date"
              className="block text-sm font-extrabold text-[#064E3B] mb-1.5 flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4 text-emerald-600" />
              <span>4. Data meciului *</span>
            </label>
            <input
              id="match-date"
              type="date"
              min={getRelativeOffsetISO(0)}
              value={dateISO}
              onChange={(e) => setDateISO(e.target.value)}
              className="w-full min-h-[46px] px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <div className="flex items-center gap-1.5 mt-2">
              {[
                { label: 'Azi', offset: 0 },
                { label: 'Mâine', offset: 1 },
                { label: 'Peste 2 zile', offset: 2 },
              ].map((d) => {
                const targetISO = getRelativeOffsetISO(d.offset);
                return (
                  <button
                    key={d.label}
                    type="button"
                    onClick={() => setDateISO(targetISO)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors ${
                      dateISO === targetISO
                        ? 'bg-[#064E3B] text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-emerald-50'
                    }`}
                  >
                    {d.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label
              htmlFor="match-time"
              className="block text-sm font-extrabold text-[#064E3B] mb-1.5 flex items-center gap-1.5"
            >
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>Ora de start *</span>
            </label>
            <input
              id="match-time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full min-h-[46px] px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <div className="flex flex-wrap items-center gap-1.5 mt-2">
              {['18:00', '19:00', '20:00', '21:00', '10:00'].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setTime(preset)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors ${
                    time === preset
                      ? 'bg-[#064E3B] text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-emerald-50'
                  }`}
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Player Spots & Already Joined Stepper */}
        <div className="pt-2 border-t border-slate-100 space-y-3">
          <label className="block text-sm font-extrabold text-[#064E3B] flex items-center gap-1.5">
            <Users className="w-4 h-4 text-emerald-600" />
            <span>5. Locuri și jucători deja strânși</span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200">
              <span className="block text-xs font-bold text-slate-500 mb-2">
                Număr total de jucători (ex: 10 la 5v5)
              </span>
              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => adjustTotalSpots(-1)}
                  disabled={totalSpots <= 2}
                  aria-label="Scade numărul total de locuri"
                  className="min-h-[44px] min-w-[44px] rounded-xl bg-white border border-slate-200 hover:border-emerald-300 disabled:opacity-40 flex items-center justify-center text-slate-700"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-2xl font-extrabold text-[#064E3B]">
                  {totalSpots}
                </span>
                <button
                  type="button"
                  onClick={() => adjustTotalSpots(1)}
                  disabled={totalSpots >= 30}
                  aria-label="Crește numărul total de locuri"
                  className="min-h-[44px] min-w-[44px] rounded-xl bg-white border border-slate-200 hover:border-emerald-300 disabled:opacity-40 flex items-center justify-center text-slate-700"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200">
              <span className="block text-xs font-bold text-slate-500 mb-2">
                Câți sunteți deja (inclusiv tu)?
              </span>
              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => adjustAlreadyIn(-1)}
                  disabled={alreadyIn <= 1}
                  aria-label="Scade numărul jucătorilor deja înscriși"
                  className="min-h-[44px] min-w-[44px] rounded-xl bg-white border border-slate-200 hover:border-emerald-300 disabled:opacity-40 flex items-center justify-center text-slate-700"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-2xl font-extrabold text-emerald-700">
                  {alreadyIn}
                </span>
                <button
                  type="button"
                  onClick={() => adjustAlreadyIn(1)}
                  disabled={alreadyIn >= totalSpots - 1}
                  aria-label="Crește numărul jucătorilor deja înscriși"
                  className="min-h-[44px] min-w-[44px] rounded-xl bg-white border border-slate-200 hover:border-emerald-300 disabled:opacity-40 flex items-center justify-center text-slate-700"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="px-3.5 py-2.5 rounded-xl bg-[#ECFDF5] border border-emerald-200 text-xs font-bold text-[#064E3B] flex items-center justify-between">
            <span>
              Status inițial în Feed: {alreadyIn} / {totalSpots} jucători
            </span>
            <span className="text-emerald-700">
              Căutați încă {spotsOpen} {spotsOpen === 1 ? 'om' : 'oameni'}
            </span>
          </div>

          {errors.spots && (
            <p className="text-xs font-semibold text-rose-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.spots}</span>
            </p>
          )}
        </div>

        {/* 6. Live Cost Preview & Court Cost Input */}
        <div className="pt-2 border-t border-slate-100 space-y-3">
          <label className="block text-sm font-extrabold text-[#064E3B] flex items-center gap-1.5">
            <Wallet className="w-4 h-4 text-emerald-600" />
            <span>6. Costul terenului &amp; calcul automat per jucător</span>
          </label>

          {isFreeMatch ? (
            <div className="rounded-2xl bg-[#84CC16]/20 border border-[#84CC16]/60 p-4 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-lime-700 shrink-0" />
              <div>
                <p className="text-sm font-extrabold text-[#064E3B]">
                  Teren cu acces GRATUIT • 0 RON / persoană
                </p>
                <p className="text-xs text-slate-700">
                  Meciul va apărea în Feed cu insigna verde „GRATIS”.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-stretch">
              <div className="sm:col-span-5">
                <label
                  htmlFor="total-cost-input"
                  className="block text-xs font-bold text-slate-600 mb-1"
                >
                  Cost total închiriere teren (RON) *
                </label>
                <div className="relative">
                  <input
                    id="total-cost-input"
                    type="number"
                    min={1}
                    max={5000}
                    step={5}
                    value={totalCostInput}
                    onChange={(e) => {
                      setTotalCostInput(e.target.value);
                      if (errors.totalCost) {
                        setErrors((prev) => ({ ...prev, totalCost: '' }));
                      }
                    }}
                    className={`w-full min-h-[46px] pl-4 pr-14 py-2 rounded-xl border text-base font-extrabold text-slate-900 focus:outline-none focus:ring-2 ${
                      errors.totalCost
                        ? 'border-rose-400 bg-rose-50/40 focus:ring-rose-400'
                        : 'border-slate-200 bg-slate-50/60 focus:bg-white focus:ring-emerald-500'
                    }`}
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-extrabold text-slate-400">
                    RON
                  </span>
                </div>
                {errors.totalCost && (
                  <p className="mt-1.5 text-xs font-semibold text-rose-600">
                    {errors.totalCost}
                  </p>
                )}
              </div>

              <div className="sm:col-span-7 rounded-2xl bg-[#ECFDF5]/80 border border-emerald-200 p-3.5 flex flex-col justify-center">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 flex items-center gap-1">
                  <Info className="w-3.5 h-3.5 text-emerald-600" />
                  Previzualizare live preț / persoană
                </span>
                <div className="flex items-baseline justify-between gap-2 mt-1">
                  <div>
                    <span className="text-xl font-extrabold text-[#064E3B]">
                      {formatRON(pricePerPersonFull)}
                    </span>
                    <span className="text-xs font-semibold text-slate-600 ml-1">
                      / pers. (la {totalSpots}/{totalSpots} complet)
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Cu cei {alreadyIn} jucători actuali:{' '}
                  <strong>{formatRON(pricePerPersonCurrent)} / persoană</strong>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* 7. Skill Level Selector */}
        <div className="pt-2 border-t border-slate-100">
          <label className="block text-sm font-extrabold text-[#064E3B] mb-2.5 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>7. Nivelul de joc recomandat</span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {SKILL_LEVELS.map((lvl) => {
              const active = skillLevel === lvl;
              const style = SKILL_STYLE[lvl];
              return (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setSkillLevel(lvl)}
                  className={`min-h-[76px] p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                    active
                      ? 'bg-[#ECFDF5] border-emerald-500 ring-2 ring-emerald-300 shadow-sm'
                      : 'bg-white hover:bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2.5 h-2.5 rounded-full shrink-0 ${style.dot}`}
                    />
                    <span className="text-xs sm:text-sm font-extrabold text-[#064E3B]">
                      {lvl}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1.5 leading-snug">
                    {style.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Submit / Cancel Row */}
        <div className="pt-4 border-t border-slate-200 flex flex-col-reverse sm:flex-row items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => setActiveTab('feed')}
            className="w-full sm:w-auto min-h-[48px] px-5 py-2.5 rounded-2xl border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-sm transition-colors"
          >
            Renunță
          </button>
          <button
            type="submit"
            className="w-full sm:w-auto min-h-[48px] px-7 py-3 rounded-2xl bg-[#10B981] hover:bg-emerald-600 active:scale-[0.99] text-white font-extrabold text-sm sm:text-base inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>Publică Meciul în Timișoara</span>
          </button>
        </div>
      </form>
    </div>
  );
};
