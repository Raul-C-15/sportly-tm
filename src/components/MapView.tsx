import React, { useEffect, useMemo, useState } from 'react';
import {
  Map as MapIcon,
  List,
  Sparkles,
  MapPin,
  SunMedium,
  Car,
  Shirt,
  Layers,
  Plus,
  ExternalLink,
  RotateCcw,
  X,
  CalendarCheck2,
  RefreshCw,
  Crosshair,
  Check,
  AlertCircle,
  Search,
} from 'lucide-react';
import { useSportly } from '../context/SportlyContext';
import type { SportCategory, Venue, VenueCostFilter } from '../types';
import {
  SPORT_CATEGORIES,
  SPORT_CONFIG,
  TIMISOARA_NEIGHBORHOODS,
  detectNearestNeighborhood,
  formatMatchDateTime,
} from '../utils/sportConfig';
import { TimisoaraMap } from './TimisoaraMap';

const SURFACE_PRESETS = [
  'Gazon sintetic',
  'Suprafață tartan',
  'Bitum / Asfalt',
  'Zgură',
  'Teren padel sticlă',
  'Masă outdoor ping pong',
];

function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export const MapView: React.FC = () => {
  const {
    venues,
    matches,
    isFetchingVenues,
    refreshVenuesFromMap,
    addVenueOnMap,
    focusedVenueId,
    setFocusedVenueId,
    startCreateMatchAtVenue,
    openMatchDetails,
  } = useSportly();

  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  const [costFilter, setCostFilter] = useState<VenueCostFilter>('all');
  const [sportFilter, setSportFilter] = useState<'Toate' | SportCategory>(
    'Toate'
  );
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedVenueId, setSelectedVenueId] = useState<string | null>(
    venues[0]?.id ?? null
  );
  const [flyToSignal, setFlyToSignal] = useState<number>(0);
  const [mobileSheetOpen, setMobileSheetOpen] = useState<boolean>(false);

  // "+ Adaugă teren nou" Interactive Pin-Drop State
  const [isAddingVenueMode, setIsAddingVenueMode] = useState<boolean>(false);
  const [draftPinCoords, setDraftPinCoords] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [newVenueName, setNewVenueName] = useState<string>('');
  const [newVenueNeighborhood, setNewVenueNeighborhood] = useState<string>(
    TIMISOARA_NEIGHBORHOODS[0]
  );
  const [newVenueSports, setNewVenueSports] = useState<SportCategory[]>([
    'Fotbal Sintetic',
  ]);
  const [newVenueIsFree, setNewVenueIsFree] = useState<boolean>(true);
  const [newVenueRateInput, setNewVenueRateInput] = useState<string>('150');
  const [newVenueSurface, setNewVenueSurface] =
    useState<string>('Gazon sintetic');
  const [addFormError, setAddFormError] = useState<string>('');
  const [mobileAddSheetOpen, setMobileAddSheetOpen] = useState<boolean>(false);

  // When navigating from "Vezi terenul pe hartă" in MatchDetailsModal
  useEffect(() => {
    if (focusedVenueId) {
      setIsAddingVenueMode(false);
      setDraftPinCoords(null);
      setCostFilter('all');
      setSportFilter('Toate');
      setSearchQuery('');
      setViewMode('map');
      setSelectedVenueId(focusedVenueId);
      setFlyToSignal((n) => n + 1);
      setMobileSheetOpen(true);
      setFocusedVenueId(null);
    }
  }, [focusedVenueId, setFocusedVenueId]);

  // Close mobile sheets on Escape key
  useEffect(() => {
    if (!mobileSheetOpen && !mobileAddSheetOpen && !isAddingVenueMode) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (mobileAddSheetOpen) {
          setMobileAddSheetOpen(false);
        } else if (isAddingVenueMode) {
          setIsAddingVenueMode(false);
          setDraftPinCoords(null);
        } else {
          setMobileSheetOpen(false);
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [mobileSheetOpen, mobileAddSheetOpen, isAddingVenueMode]);

  const filteredVenues = useMemo(() => {
    const q = normalizeText(searchQuery.trim());
    return venues.filter((venue) => {
      if (costFilter === 'free' && !venue.isFree) return false;
      if (costFilter === 'paid' && venue.isFree) return false;
      if (sportFilter !== 'Toate' && !venue.sports.includes(sportFilter)) {
        return false;
      }
      if (q) {
        const haystack = normalizeText(
          `${venue.name} ${venue.neighborhood} ${venue.address} ${venue.sports.join(
            ' '
          )} ${venue.surface}`
        );
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [venues, costFilter, sportFilter, searchQuery]);

  useEffect(() => {
    if (filteredVenues.length === 0) {
      setSelectedVenueId(null);
      setMobileSheetOpen(false);
      return;
    }
    if (
      !selectedVenueId ||
      !filteredVenues.some((v) => v.id === selectedVenueId)
    ) {
      setSelectedVenueId(filteredVenues[0].id);
    }
  }, [filteredVenues, selectedVenueId]);

  const selectedVenue: Venue | undefined = filteredVenues.find(
    (v) => v.id === selectedVenueId
  );

  const hasActiveFilters =
    costFilter !== 'all' ||
    sportFilter !== 'Toate' ||
    searchQuery.trim().length > 0;

  const resetFilters = () => {
    setCostFilter('all');
    setSportFilter('Toate');
    setSearchQuery('');
  };

  const handleStartAddVenueMode = () => {
    setViewMode('map');
    setMobileSheetOpen(false);
    setAddFormError('');
    if (isAddingVenueMode) {
      setIsAddingVenueMode(false);
      setDraftPinCoords(null);
      setMobileAddSheetOpen(false);
      return;
    }
    setIsAddingVenueMode(true);
    setDraftPinCoords(null);
    setNewVenueName('');
    setNewVenueIsFree(true);
    setNewVenueRateInput('150');
  };

  const handleMapClickForNewVenue = (lat: number, lng: number) => {
    const detectedZone = detectNearestNeighborhood(lat, lng);
    setDraftPinCoords({ lat, lng });
    setNewVenueNeighborhood(detectedZone);
    setAddFormError('');
    setMobileAddSheetOpen(true);
  };

  const toggleNewVenueSport = (sp: SportCategory) => {
    setNewVenueSports((prev) =>
      prev.includes(sp) ? prev.filter((s) => s !== sp) : [...prev, sp]
    );
  };

  const handleSaveNewVenue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draftPinCoords) {
      setAddFormError(
        'Apasă mai întâi pe hartă pe locul exact al terenului pentru a plasa pin-ul.'
      );
      return;
    }
    if (newVenueName.trim().length < 3) {
      setAddFormError(
        'Introdu numele terenului (minim 3 caractere, ex: Teren Baschet Parc).'
      );
      return;
    }
    if (newVenueSports.length === 0) {
      setAddFormError('Selectează cel puțin un sport disponibil pe acest teren.');
      return;
    }

    const parsedRate = Number(newVenueRateInput);
    if (!newVenueIsFree && (Number.isNaN(parsedRate) || parsedRate <= 0)) {
      setAddFormError('Introdu un tarif orar valid în RON (ex: 150).');
      return;
    }

    const saved = addVenueOnMap({
      name: newVenueName,
      lat: draftPinCoords.lat,
      lng: draftPinCoords.lng,
      neighborhood: newVenueNeighborhood,
      sports: newVenueSports,
      isFree: newVenueIsFree,
      hourlyRate: newVenueIsFree ? 0 : parsedRate,
      surface: newVenueSurface,
    });

    setCostFilter('all');
    setSportFilter('Toate');
    setSearchQuery('');
    setIsAddingVenueMode(false);
    setDraftPinCoords(null);
    setMobileAddSheetOpen(false);
    setSelectedVenueId(saved.id);
    setFlyToSignal((n) => n + 1);
  };

  const handlePinOrCardSelect = (
    venueId: string,
    openMobileDrawer = true,
    zoomToCourt = true
  ) => {
    setSelectedVenueId(venueId);
    if (zoomToCourt) {
      setFlyToSignal((n) => n + 1);
    }
    if (openMobileDrawer) {
      setMobileSheetOpen(true);
    }
  };

  const renderAddVenueForm = (onClose?: () => void) => (
    <form onSubmit={handleSaveNewVenue} noValidate className="space-y-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-amber-100 text-amber-900 border border-amber-300 mb-1">
            <Crosshair className="w-3 h-3" />
            Pin nou pe harta Timișoarei
          </span>
          <h3 className="text-lg font-extrabold text-[#064E3B]">
            Adaugă teren nou
          </h3>
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Închide formularul"
            className="min-h-[40px] min-w-[40px] rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-500 inline-flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Coordinates Pill */}
      {draftPinCoords ? (
        <div className="p-3 rounded-2xl bg-[#ECFDF5] border border-emerald-200 text-xs flex items-center justify-between gap-2">
          <div className="font-bold text-[#064E3B] flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              GPS: {draftPinCoords.lat.toFixed(5)},{' '}
              {draftPinCoords.lng.toFixed(5)}
            </span>
          </div>
          <span className="text-[11px] font-semibold text-emerald-700">
            Poți muta pin-ul
          </span>
        </div>
      ) : (
        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-950">
          Apasă direct pe harta din stânga (sau comută pe Satelit) exact pe
          terenul pe care vrei să-l adaugi!
        </div>
      )}

      {addFormError && (
        <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs font-bold text-rose-700 flex items-start gap-1.5">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{addFormError}</span>
        </div>
      )}

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">
          Numele terenului *
        </label>
        <input
          type="text"
          value={newVenueName}
          onChange={(e) => setNewVenueName(e.target.value)}
          placeholder="Ex: Teren Sintetic Școala 24 / Masă Ping Pong Parc"
          className="w-full min-h-[44px] px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">
          Cartier / Zonă
        </label>
        <select
          value={newVenueNeighborhood}
          onChange={(e) => setNewVenueNeighborhood(e.target.value)}
          className="w-full min-h-[44px] px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          {TIMISOARA_NEIGHBORHOODS.map((z) => (
            <option key={z} value={z}>
              {z}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1.5">
          Sporturi disponibile *
        </label>
        <div className="flex flex-wrap gap-1.5">
          {SPORT_CATEGORIES.map((sp) => {
            const active = newVenueSports.includes(sp);
            const Icon = SPORT_CONFIG[sp].icon;
            return (
              <button
                key={sp}
                type="button"
                onClick={() => toggleNewVenueSport(sp)}
                className={`min-h-[36px] px-2.5 py-1 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 border transition-all ${
                  active
                    ? 'bg-[#064E3B] text-white border-[#064E3B]'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{sp}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1.5">
          Tip acces *
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setNewVenueIsFree(true)}
            className={`min-h-[42px] px-3 py-2 rounded-xl text-xs font-extrabold border transition-all ${
              newVenueIsFree
                ? 'bg-[#84CC16]/35 border-[#84CC16] text-[#064E3B]'
                : 'bg-white border-slate-200 text-slate-600'
            }`}
          >
            Gratis (Acces liber)
          </button>
          <button
            type="button"
            onClick={() => setNewVenueIsFree(false)}
            className={`min-h-[42px] px-3 py-2 rounded-xl text-xs font-extrabold border transition-all ${
              !newVenueIsFree
                ? 'bg-[#064E3B] border-[#064E3B] text-white'
                : 'bg-white border-slate-200 text-slate-600'
            }`}
          >
            Cu plată (De închiriat)
          </button>
        </div>
      </div>

      {!newVenueIsFree && (
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Tarif estimativ (RON / oră)
          </label>
          <input
            type="number"
            min={10}
            max={1000}
            step={10}
            value={newVenueRateInput}
            onChange={(e) => setNewVenueRateInput(e.target.value)}
            className="w-full min-h-[44px] px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm font-extrabold focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      )}

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">
          Suprafață
        </label>
        <select
          value={newVenueSurface}
          onChange={(e) => setNewVenueSurface(e.target.value)}
          className="w-full min-h-[42px] px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          {SURFACE_PRESETS.map((surf) => (
            <option key={surf} value={surf}>
              {surf}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
        <button
          type="button"
          onClick={() => {
            setIsAddingVenueMode(false);
            setDraftPinCoords(null);
            setMobileAddSheetOpen(false);
          }}
          className="min-h-[44px] px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50"
        >
          Anulează
        </button>
        <button
          type="submit"
          className="flex-1 min-h-[44px] px-4 py-2.5 rounded-xl bg-[#10B981] hover:bg-emerald-600 text-white text-xs sm:text-sm font-extrabold inline-flex items-center justify-center gap-1.5 shadow-sm transition-all"
        >
          <Check className="w-4 h-4 stroke-[2.75]" />
          <span>Salvează terenul</span>
        </button>
      </div>
    </form>
  );

  const renderVenueDetailsContent = (
    venue: Venue,
    showCloseBtn?: () => void,
    inListView = false
  ) => {
    const venueMatches = matches.filter((m) => m.venueId === venue.id);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${venue.lat},${venue.lng}`;

    return (
      <div className="flex flex-col h-full justify-between">
        <div className="space-y-4">
          {/* Header + Badges */}
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-1.5">
                {venue.isFree ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-extrabold uppercase bg-[#84CC16]/30 text-[#064E3B] border border-[#84CC16]/70">
                    <Sparkles className="w-3.5 h-3.5 text-lime-700" />
                    Teren Gratis
                  </span>
                ) : (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-xl text-xs font-extrabold uppercase bg-[#064E3B] text-white">
                    De Închiriat • {venue.hourlyRate} RON/oră
                  </span>
                )}

                {(venue.sportLabels || venue.sports).map((label) => (
                  <span
                    key={label}
                    className="px-2.5 py-1 rounded-xl text-xs font-semibold bg-[#ECFDF5] text-[#064E3B] border border-emerald-200"
                  >
                    {label}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-extrabold text-[#064E3B] leading-snug">
                {venue.name}
              </h3>

              <div className="flex items-start gap-1.5 text-xs sm:text-sm text-slate-600">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800">
                    {venue.neighborhood}
                  </span>
                  <span className="mx-1.5 text-slate-300">•</span>
                  <span>{venue.address}</span>
                </div>
              </div>
            </div>

            {showCloseBtn && (
              <button
                type="button"
                onClick={showCloseBtn}
                aria-label="Închide detaliile terenului"
                className="min-h-[44px] min-w-[44px] rounded-2xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-800 inline-flex items-center justify-center shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {venue.description}
          </p>

          {/* Practical Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/80 flex items-start gap-2.5">
              <Layers className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wide text-slate-400">
                  Suprafață
                </span>
                <span className="text-xs font-bold text-slate-800">
                  {venue.surface}
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/80 flex items-start gap-2.5">
              <SunMedium className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wide text-slate-400">
                  Nocturnă / Iluminat
                </span>
                <span className="text-xs font-bold text-slate-800">
                  {venue.lightingNote}
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/80 flex items-start gap-2.5">
              <Car className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wide text-slate-400">
                  Parcare
                </span>
                <span className="text-xs font-bold text-slate-800">
                  {venue.parkingNote}
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/80 flex items-start gap-2.5">
              <Shirt className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wide text-slate-400">
                  Vestiare &amp; Dușuri
                </span>
                <span className="text-xs font-bold text-slate-800">
                  {venue.lockerNote}
                </span>
              </div>
            </div>
          </div>

          {/* Active Matches at This Venue */}
          {venueMatches.length > 0 && (
            <div className="rounded-2xl bg-[#ECFDF5]/70 border border-emerald-200 p-3.5">
              <p className="text-xs font-extrabold text-[#064E3B] uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <CalendarCheck2 className="w-4 h-4 text-emerald-600" />
                <span>Meciuri deschise aici ({venueMatches.length})</span>
              </p>
              <div className="space-y-1.5">
                {venueMatches.map((m) => {
                  const count = m.playerIds.length + m.guestFriendsCount;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => {
                        setMobileSheetOpen(false);
                        openMatchDetails(m.id);
                      }}
                      className="w-full p-2.5 rounded-xl bg-white hover:bg-emerald-50 border border-emerald-200/80 flex items-center justify-between gap-2 text-left transition-colors"
                    >
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-slate-900 truncate">
                          {m.title}
                        </p>
                        <p className="text-[11px] text-slate-500">
                          {formatMatchDateTime(
                            m.dateISO,
                            m.time,
                            m.displayDayHint
                          )}{' '}
                          • {count}/{m.totalSpots} jucători
                        </p>
                      </div>
                      <span className="text-xs font-extrabold text-emerald-700 shrink-0">
                        Vezi →
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-4 mt-4 border-t border-slate-200">
          {inListView && (
            <button
              type="button"
              onClick={() => {
                setViewMode('map');
                handlePinOrCardSelect(venue.id, false, true);
              }}
              className="w-full min-h-[44px] px-4 py-2 rounded-xl bg-[#ECFDF5] hover:bg-emerald-100 text-[#064E3B] border border-emerald-300 font-extrabold text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 transition-colors"
            >
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>Focalizează pe hartă (Zoom pe teren)</span>
            </button>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileSheetOpen(false);
                startCreateMatchAtVenue(venue.id);
              }}
              className="min-h-[46px] px-4 py-2.5 rounded-xl bg-[#10B981] hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 shadow-sm transition-all"
            >
              <Plus className="w-4 h-4 stroke-[2.75]" />
              <span>Creează meci aici</span>
            </button>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[46px] px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-[#064E3B] border border-slate-300 font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-emerald-600" />
              <span>Indicații Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-5 pb-28 md:pb-12">
      {/* Page Title + Live Counter + Actions */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3.5 mb-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFDF5] border border-emerald-200 text-xs font-extrabold text-[#064E3B]">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>
                {hasActiveFilters
                  ? `${filteredVenues.length} din ${venues.length} locații sportive în Timișoara`
                  : `${venues.length} locații sportive verificate în Timișoara`}
              </span>
            </span>

            {isFetchingVenues && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-600" />
                <span>Se sincronizează terenurile din Timișoara...</span>
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#064E3B] tracking-tight">
            Harta Terenurilor – Timișoara
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Toate terenurile de fotbal sintetic, baschet, padel, tenis, mese de
            ping pong, piste de alergare, trasee de bicicletă și calisthenics
            poziționate exact pe teren.
          </p>
        </div>

        {/* Action Toolbar: + Adaugă teren nou, Reîncarcă din hartă, Hartă/Listă */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleStartAddVenueMode}
            className={`min-h-[44px] px-4 py-2 rounded-2xl text-xs sm:text-sm font-extrabold inline-flex items-center gap-1.5 transition-all shadow-sm ${
              isAddingVenueMode
                ? 'bg-amber-500 hover:bg-amber-600 text-white ring-2 ring-amber-300'
                : 'bg-[#10B981] hover:bg-emerald-600 text-white'
            }`}
          >
            {isAddingVenueMode ? (
              <>
                <X className="w-4 h-4 stroke-[2.75]" />
                <span>Ieși din adăugare</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 stroke-[2.75]" />
                <span>+ Adaugă teren nou</span>
              </>
            )}
          </button>

          <button
            type="button"
            disabled={isFetchingVenues}
            onClick={() => void refreshVenuesFromMap()}
            className="min-h-[44px] px-3.5 py-2 rounded-2xl bg-white hover:bg-[#ECFDF5] disabled:opacity-60 text-[#064E3B] border border-slate-200 text-xs sm:text-sm font-bold inline-flex items-center gap-1.5 shadow-sm transition-colors"
          >
            <RefreshCw
              className={`w-4 h-4 text-emerald-600 ${
                isFetchingVenues ? 'animate-spin' : ''
              }`}
            />
            <span>Reîncarcă din hartă</span>
          </button>

          <div className="inline-flex items-center bg-white p-1 rounded-2xl border border-slate-200 shadow-sm">
            <button
              type="button"
              onClick={() => setViewMode('map')}
              className={`min-h-[36px] px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold inline-flex items-center gap-1.5 transition-all ${
                viewMode === 'map'
                  ? 'bg-[#064E3B] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#064E3B]'
              }`}
            >
              <MapIcon className="w-4 h-4" />
              <span>Hartă</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setIsAddingVenueMode(false);
                setDraftPinCoords(null);
                setViewMode('list');
              }}
              className={`min-h-[36px] px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold inline-flex items-center gap-1.5 transition-all ${
                viewMode === 'list'
                  ? 'bg-[#064E3B] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#064E3B]'
              }`}
            >
              <List className="w-4 h-4" />
              <span>Listă ({filteredVenues.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Add-Court Mode Interactive Banner */}
      {isAddingVenueMode && (
        <div className="mb-4 p-3.5 sm:px-5 rounded-2xl bg-amber-50 border border-amber-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div className="flex items-start sm:items-center gap-2.5 text-xs sm:text-sm font-bold text-amber-950">
            <Crosshair className="w-5 h-5 text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
            <span>
              {draftPinCoords
                ? 'Pin plasat! Completează numele și sportul terenului pentru a-l salva permanent (sau apasă în alt loc pe hartă pentru a repoziționa).'
                : 'Mod adăugare teren activ: Comută pe „Satelit” în colțul hărții dacă vrei să vezi terenul de sus și apasă exact pe el pentru a plasa pin-ul!'}
            </span>
          </div>
          {draftPinCoords && (
            <button
              type="button"
              onClick={() => setMobileAddSheetOpen(true)}
              className="lg:hidden self-start min-h-[40px] px-3.5 py-1.5 rounded-xl bg-[#064E3B] text-white text-xs font-extrabold"
            >
              Completează detaliile →
            </button>
          )}
        </div>
      )}

      {/* Venue Filter & Instant Search Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/85 p-3.5 sm:p-4 mb-5 shadow-sm space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setCostFilter('all')}
              className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                costFilter === 'all'
                  ? 'bg-[#064E3B] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200/70'
              }`}
            >
              Toate terenurile ({venues.length})
            </button>
            <button
              type="button"
              onClick={() => setCostFilter('free')}
              className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold inline-flex items-center gap-1.5 transition-all border ${
                costFilter === 'free'
                  ? 'bg-[#84CC16]/30 text-[#064E3B] border-[#84CC16] ring-1 ring-[#84CC16]'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-lime-50'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#84CC16] border border-[#064E3B]" />
              <span>
                Doar Gratis ({venues.filter((v) => v.isFree).length})
              </span>
            </button>
            <button
              type="button"
              onClick={() => setCostFilter('paid')}
              className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold inline-flex items-center gap-1.5 transition-all border ${
                costFilter === 'paid'
                  ? 'bg-[#ECFDF5] text-[#064E3B] border-emerald-400 ring-1 ring-emerald-300'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-emerald-50/60'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#059669]" />
              <span>
                De Închiriat ({venues.filter((v) => !v.isFree).length})
              </span>
            </button>
          </div>

          {/* Search Court or Neighborhood */}
          <div className="flex items-center gap-2 flex-1 md:max-w-xs">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Caută bază, parc sau cartier..."
                aria-label="Caută teren sau cartier în Timișoara"
                className="w-full min-h-[42px] pl-9 pr-8 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs sm:text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Șterge căutarea"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-lg text-slate-400 hover:text-slate-700"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="min-h-[42px] px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-700 hover:bg-[#ECFDF5] inline-flex items-center gap-1.5 shrink-0 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Resetează filtrele</span>
              </button>
            )}
          </div>
        </div>

        {/* Sport Type Scrollable Pills (All 8 Sports) */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-2 border-t border-slate-100">
          <button
            type="button"
            onClick={() => setSportFilter('Toate')}
            className={`min-h-[40px] px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition-colors ${
              sportFilter === 'Toate'
                ? 'bg-[#ECFDF5] text-[#064E3B] border border-emerald-300'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            Toate sporturile
          </button>
          {SPORT_CATEGORIES.map((sport) => {
            const Icon = SPORT_CONFIG[sport].icon;
            const active = sportFilter === sport;
            return (
              <button
                key={sport}
                type="button"
                onClick={() => setSportFilter(sport)}
                className={`min-h-[40px] px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 transition-colors border ${
                  active
                    ? 'bg-[#ECFDF5] text-[#064E3B] border-emerald-400'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-emerald-600" />
                <span>{sport}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Empty State if 0 Venues Match Filters (unless adding a new venue) */}
      {filteredVenues.length === 0 && !isAddingVenueMode ? (
        <div className="bg-white rounded-3xl border border-dashed border-emerald-300 p-10 text-center max-w-lg mx-auto my-6 shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-[#ECFDF5] border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-3">
            <MapPin className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-extrabold text-[#064E3B] mb-2">
            Niciun teren găsit pentru aceste filtre
          </h3>
          <p className="text-sm text-slate-600 mb-5">
            Nu am găsit terenuri în Timișoara care să corespundă exact
            combinației alese. Resetează filtrele sau adaugă chiar tu terenul pe
            hartă!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <button
              type="button"
              onClick={resetFilters}
              className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#10B981] hover:bg-emerald-600 text-white font-bold text-sm inline-flex items-center gap-2 shadow-sm transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Resetează filtrele</span>
            </button>
            <button
              type="button"
              onClick={handleStartAddVenueMode}
              className="min-h-[44px] px-4 py-2.5 rounded-xl bg-[#ECFDF5] hover:bg-emerald-100 text-[#064E3B] border border-emerald-200 font-bold text-sm inline-flex items-center gap-1.5 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Adaugă teren nou</span>
            </button>
          </div>
        </div>
      ) : viewMode === 'map' ? (
        /* MAP VIEW + Desktop Side Panel */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          <div className="lg:col-span-7 xl:col-span-8 space-y-3">
            <TimisoaraMap
              venues={filteredVenues}
              selectedVenueId={selectedVenueId}
              flyToSignal={flyToSignal}
              onSelectVenue={(id) => handlePinOrCardSelect(id, true, true)}
              isAddingVenueMode={isAddingVenueMode}
              draftPinCoords={draftPinCoords}
              onMapClickForNewVenue={handleMapClickForNewVenue}
            />

            {/* Quick Strip under Map on Mobile/Tablet */}
            {!isAddingVenueMode && (
              <div className="lg:hidden flex items-center gap-2.5 overflow-x-auto no-scrollbar py-1">
                {filteredVenues.slice(0, 35).map((venue) => {
                  const isSelected = venue.id === selectedVenueId;
                  return (
                    <button
                      key={venue.id}
                      type="button"
                      onClick={() =>
                        handlePinOrCardSelect(venue.id, true, true)
                      }
                      className={`min-h-[52px] px-3.5 py-2 rounded-2xl border text-left shrink-0 transition-all max-w-[240px] ${
                        isSelected
                          ? 'bg-[#ECFDF5] border-emerald-400 shadow-sm'
                          : 'bg-white border-slate-200'
                      }`}
                    >
                      <p className="text-xs font-extrabold text-[#064E3B] truncate">
                        {venue.name}
                      </p>
                      <p className="text-[11px] text-slate-500 truncate">
                        {venue.isFree
                          ? 'Gratis'
                          : `${venue.hourlyRate} RON/oră`}{' '}
                        • {venue.neighborhood}
                      </p>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Desktop Right Panel: Add New Court Form OR Selected Venue Details */}
          <aside className="hidden lg:block lg:col-span-5 xl:col-span-4 bg-white rounded-3xl border border-slate-200 p-5 shadow-sport sticky top-20">
            {isAddingVenueMode
              ? renderAddVenueForm()
              : selectedVenue && renderVenueDetailsContent(selectedVenue)}
          </aside>
        </div>
      ) : (
        /* DIRECTORY LIST VIEW */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredVenues.map((venue) => (
            <div
              key={venue.id}
              className="bg-white rounded-3xl border border-slate-200/90 hover:border-emerald-300 p-5 sm:p-6 shadow-sport transition-all"
            >
              {renderVenueDetailsContent(venue, undefined, true)}
            </div>
          ))}
        </div>
      )}

      {/* Mobile Bottom Sheet for Selected Venue Details (z-50 strictly above z-10 map) */}
      {mobileSheetOpen &&
        !isAddingVenueMode &&
        selectedVenue &&
        viewMode === 'map' && (
          <div
            className="lg:hidden fixed inset-0 z-50 flex items-end justify-center bg-slate-950/50 backdrop-blur-sm"
            onClick={() => setMobileSheetOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`Detalii teren ${selectedVenue.name}`}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-h-[86dvh] bg-white rounded-t-3xl p-5 overflow-y-auto shadow-2xl border-t border-slate-200"
            >
              <div className="w-12 h-1.5 rounded-full bg-slate-200 mx-auto mb-4" />
              {renderVenueDetailsContent(selectedVenue, () =>
                setMobileSheetOpen(false)
              )}
            </div>
          </div>
        )}

      {/* Mobile Bottom Sheet for Saving Newly Dropped Pin (z-50) */}
      {mobileAddSheetOpen && isAddingVenueMode && viewMode === 'map' && (
        <div
          className="lg:hidden fixed inset-0 z-50 flex items-end justify-center bg-slate-950/50 backdrop-blur-sm"
          onClick={() => setMobileAddSheetOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Adaugă teren nou pe hartă"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-h-[88dvh] bg-white rounded-t-3xl p-5 overflow-y-auto shadow-2xl border-t border-slate-200"
          >
            <div className="w-12 h-1.5 rounded-full bg-slate-200 mx-auto mb-3" />
            {renderAddVenueForm(() => setMobileAddSheetOpen(false))}
          </div>
        </div>
      )}
    </div>
  );
};
