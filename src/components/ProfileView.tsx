import React, { useMemo, useState } from 'react';
import {
  MapPin,
  Edit3,
  Check,
  X,
  Clock,
  Trophy,
  Sparkles,
  CalendarCheck2,
  RotateCcw,
  Plus,
  AlertCircle,
  HeartHandshake,
} from 'lucide-react';
import { useSportly } from '../context/SportlyContext';
import type {
  AvatarColor,
  PlayerSportSkill,
  SkillLevel,
  SportCategory,
} from '../types';
import {
  AVATAR_PALETTE,
  SKILL_LEVELS,
  SKILL_STYLE,
  SPORT_CATEGORIES,
  SPORT_CONFIG,
  TIMISOARA_NEIGHBORHOODS,
  formatMatchDateTime,
  formatRON,
  calculateCostPerPlayer,
} from '../utils/sportConfig';
import { Avatar } from './Avatar';

export const ProfileView: React.FC = () => {
  const {
    currentUser,
    currentUserId,
    matches,
    updateCurrentUserProfile,
    openMatchDetails,
    setActiveTab,
    resetDemoData,
  } = useSportly();

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [confirmReset, setConfirmReset] = useState<boolean>(false);
  const [myMatchesFilter, setMyMatchesFilter] = useState<
    'all' | 'hosted' | 'joined'
  >('all');

  // Edit Form State
  const [name, setName] = useState<string>(currentUser.name);
  const [ageInput, setAgeInput] = useState<string>(String(currentUser.age));
  const [neighborhood, setNeighborhood] = useState<string>(
    currentUser.neighborhood
  );
  const [avatarColor, setAvatarColor] = useState<AvatarColor>(
    currentUser.avatarColor
  );
  const [bio, setBio] = useState<string>(currentUser.bio);
  const [availability, setAvailability] = useState<string>(
    currentUser.availability
  );
  const [vibeTag, setVibeTag] = useState<string>(currentUser.vibeTag);
  const [preferredSports, setPreferredSports] = useState<PlayerSportSkill[]>(
    currentUser.preferredSports
  );
  const [formError, setFormError] = useState<string>('');

  const startEditing = () => {
    setName(currentUser.name);
    setAgeInput(String(currentUser.age));
    setNeighborhood(currentUser.neighborhood);
    setAvatarColor(currentUser.avatarColor);
    setBio(currentUser.bio);
    setAvailability(currentUser.availability);
    setVibeTag(currentUser.vibeTag);
    setPreferredSports(structuredClone(currentUser.preferredSports));
    setFormError('');
    setIsEditing(true);
  };

  const toggleSportPreference = (sport: SportCategory) => {
    setPreferredSports((prev) => {
      const exists = prev.some((s) => s.sport === sport);
      if (exists) {
        return prev.filter((s) => s.sport !== sport);
      }
      return [...prev, { sport, level: 'Relaxat / Începător' }];
    });
  };

  const changeSportSkill = (sport: SportCategory, level: SkillLevel) => {
    setPreferredSports((prev) =>
      prev.map((item) => (item.sport === sport ? { ...item, level } : item))
    );
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedAge = Number(ageInput);

    if (name.trim().length < 2) {
      setFormError('Numele trebuie să conțină cel puțin 2 caractere.');
      return;
    }
    if (!Number.isInteger(parsedAge) || parsedAge < 14 || parsedAge > 90) {
      setFormError('Vârsta trebuie să fie un număr întreg între 14 și 90 ani.');
      return;
    }
    if (bio.trim().length < 10) {
      setFormError(
        'Scrie câteva cuvinte în secțiunea „Despre mine” (minim 10 caractere).'
      );
      return;
    }
    if (preferredSports.length === 0) {
      setFormError('Selectează cel puțin un sport preferat.');
      return;
    }

    updateCurrentUserProfile({
      name: name.trim(),
      age: parsedAge,
      neighborhood,
      avatarColor,
      bio: bio.trim(),
      availability:
        availability.trim() || 'În cursul săptămânii după 18:00 & Weekend',
      vibeTag: vibeTag.trim() || 'Fair-play & voie bună',
      preferredSports,
      favoriteSport:
        preferredSports[0]?.customLabel || preferredSports[0]?.sport || 'Sport',
    });

    setIsEditing(false);
    setFormError('');
  };

  const myMatches = useMemo(() => {
    return matches.filter(
      (m) => m.playerIds.includes(currentUserId) || m.hostId === currentUserId
    );
  }, [matches, currentUserId]);

  const filteredMyMatches = useMemo(() => {
    if (myMatchesFilter === 'hosted') {
      return myMatches.filter((m) => m.hostId === currentUserId);
    }
    if (myMatchesFilter === 'joined') {
      return myMatches.filter(
        (m) => m.playerIds.includes(currentUserId) && m.hostId !== currentUserId
      );
    }
    return myMatches;
  }, [myMatches, myMatchesFilter, currentUserId]);

  const totalMatchesPlayed = currentUser.matchesPlayedBase + myMatches.length;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-5 pb-28 md:pb-14 space-y-6">
      {/* Profile Hero Header Card */}
      <section className="bg-white rounded-3xl border border-slate-200/90 shadow-sport overflow-hidden">
        <div className="h-24 sm:h-28 bg-gradient-to-r from-[#064E3B] via-emerald-700 to-[#10B981] relative">
          <div
            aria-hidden="true"
            className="absolute right-8 -top-6 w-32 h-32 rounded-full bg-[#84CC16]/25 blur-xl"
          />
        </div>

        <div className="px-5 sm:px-7 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 -mt-10 sm:-mt-12 mb-5">
            <div className="flex items-end gap-4">
              <Avatar
                name={isEditing ? name || 'TM' : currentUser.name}
                color={isEditing ? avatarColor : currentUser.avatarColor}
                size="xl"
                className="ring-4 ring-white shadow-md"
              />
              <div className="pb-1">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-[#ECFDF5] text-[#064E3B] border border-emerald-200 mb-1">
                  <HeartHandshake className="w-3 h-3 text-emerald-600" />
                  {currentUser.vibeTag}
                </span>
                <h1 className="text-xl sm:text-2xl font-extrabold text-[#064E3B] leading-tight">
                  {currentUser.name}, {currentUser.age} ani
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{currentUser.neighborhood}, Timișoara</span>
                </p>
              </div>
            </div>

            {!isEditing && (
              <button
                type="button"
                onClick={startEditing}
                className="self-start sm:self-auto min-h-[44px] px-4 py-2.5 rounded-xl bg-[#ECFDF5] hover:bg-emerald-100 text-[#064E3B] border border-emerald-300 font-extrabold text-xs sm:text-sm inline-flex items-center gap-2 transition-colors"
              >
                <Edit3 className="w-4 h-4 text-emerald-700" />
                <span>Editează Profilul</span>
              </button>
            )}
          </div>

          {isEditing ? (
            /* Interactive Edit Profile Form */
            <form
              onSubmit={handleSaveProfile}
              noValidate
              className="pt-4 border-t border-slate-100 space-y-5"
            >
              {formError && (
                <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {/* Avatar Color Picker */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                  Culoare Avatar Inițiale
                </label>
                <div className="flex flex-wrap items-center gap-2.5">
                  {(Object.keys(AVATAR_PALETTE) as AvatarColor[]).map((col) => {
                    const pal = AVATAR_PALETTE[col];
                    const selected = avatarColor === col;
                    return (
                      <button
                        key={col}
                        type="button"
                        onClick={() => setAvatarColor(col)}
                        title={pal.label}
                        aria-label={`Culoare avatar ${pal.label}`}
                        className={`w-9 h-9 rounded-full ${pal.bg} flex items-center justify-center text-white transition-transform ${
                          selected
                            ? 'ring-2 ring-offset-2 ring-[#064E3B] scale-110'
                            : 'opacity-80 hover:opacity-100'
                        }`}
                      >
                        {selected && <Check className="w-4 h-4 stroke-[3]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="sm:col-span-1">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nume și prenume *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full min-h-[44px] px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Vârstă *
                  </label>
                  <input
                    type="number"
                    min={14}
                    max={90}
                    value={ageInput}
                    onChange={(e) => setAgeInput(e.target.value)}
                    className="w-full min-h-[44px] px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Cartier Timișoara
                  </label>
                  <select
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    className="w-full min-h-[44px] px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    {TIMISOARA_NEIGHBORHOODS.map((z) => (
                      <option key={z} value={z}>
                        {z}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Despre mine (Bio &amp; stil de joc) *
                </label>
                <textarea
                  rows={3}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Disponibilitate preferată
                  </label>
                  <input
                    type="text"
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                    placeholder="Ex: După 18:30 în timpul săptămânii & Weekend"
                    className="w-full min-h-[44px] px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Motto / Vibe pe teren
                  </label>
                  <input
                    type="text"
                    value={vibeTag}
                    onChange={(e) => setVibeTag(e.target.value)}
                    placeholder="Ex: Fair-play & spirit de echipă"
                    className="w-full min-h-[44px] px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Interactive Sports & Skill Selector */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                  Sporturi preferate &amp; Nivelul tău *
                </label>
                <div className="space-y-2.5">
                  {SPORT_CATEGORIES.map((sportCat) => {
                    const chosen = preferredSports.find(
                      (s) => s.sport === sportCat
                    );
                    const Icon = SPORT_CONFIG[sportCat].icon;
                    return (
                      <div
                        key={sportCat}
                        className={`p-3 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 transition-colors ${
                          chosen
                            ? 'bg-[#ECFDF5]/60 border-emerald-300'
                            : 'bg-slate-50/60 border-slate-200'
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => toggleSportPreference(sportCat)}
                          className="min-h-[38px] flex items-center gap-2.5 text-left"
                        >
                          <span
                            className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                              chosen
                                ? 'bg-emerald-600 border-emerald-600 text-white'
                                : 'bg-white border-slate-300'
                            }`}
                          >
                            {chosen && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </span>
                          <Icon className="w-4 h-4 text-emerald-700" />
                          <span className="text-sm font-bold text-[#064E3B]">
                            {sportCat}
                          </span>
                        </button>

                        {chosen && (
                          <div className="flex flex-wrap items-center gap-1.5">
                            {SKILL_LEVELS.map((lvl) => (
                              <button
                                key={lvl}
                                type="button"
                                onClick={() => changeSportSkill(sportCat, lvl)}
                                className={`min-h-[34px] px-2.5 py-1 rounded-xl text-xs font-bold transition-colors ${
                                  chosen.level === lvl
                                    ? 'bg-[#064E3B] text-white'
                                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-emerald-50'
                                }`}
                              >
                                {lvl}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setFormError('');
                  }}
                  className="min-h-[44px] px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs sm:text-sm font-bold inline-flex items-center gap-1.5"
                >
                  <X className="w-4 h-4" />
                  <span>Anulează</span>
                </button>
                <button
                  type="submit"
                  className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#10B981] hover:bg-emerald-600 text-white text-xs sm:text-sm font-extrabold inline-flex items-center gap-1.5 shadow-sm"
                >
                  <Check className="w-4 h-4 stroke-[2.75]" />
                  <span>Salvează Profilul</span>
                </button>
              </div>
            </form>
          ) : (
            /* Read-Only Rich Profile Details */
            <div className="space-y-6 pt-2 border-t border-slate-100">
              {/* Quick Stats Row */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 text-center">
                  <span className="block text-xl sm:text-2xl font-extrabold text-[#064E3B]">
                    {totalMatchesPlayed}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    Meciuri jucate
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#ECFDF5]/80 border border-emerald-200 text-center">
                  <span className="block text-xl sm:text-2xl font-extrabold text-emerald-700">
                    {myMatches.length}
                  </span>
                  <span className="text-xs font-semibold text-emerald-900">
                    Meciuri active
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 text-center flex flex-col justify-center">
                  <span className="block text-xs sm:text-sm font-extrabold text-[#064E3B] truncate">
                    {currentUser.favoriteSport}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 mt-0.5">
                    Sport preferat
                  </span>
                </div>
              </div>

              {/* Despre mine (Bio) */}
              <div>
                <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                  Despre mine
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-[#F8FAFC] rounded-2xl p-4 border border-slate-100">
                  {currentUser.bio}
                </p>
              </div>

              {/* Sporturi preferate & Nivel */}
              <div>
                <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Sporturi preferate &amp; Nivel</span>
                </h2>
                <div className="flex flex-wrap gap-2">
                  {currentUser.preferredSports.map((item) => {
                    const meta = SPORT_CONFIG[item.sport];
                    const Icon = meta.icon;
                    const lvlStyle = SKILL_STYLE[item.level];
                    return (
                      <div
                        key={`${item.sport}-${item.customLabel || ''}`}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-slate-200 shadow-sm"
                      >
                        <Icon className={`w-4 h-4 ${meta.iconColor}`} />
                        <span className="text-xs sm:text-sm font-extrabold text-[#064E3B]">
                          {item.customLabel || item.sport}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-lg text-[11px] font-bold border ${lvlStyle.bg} ${lvlStyle.text} ${lvlStyle.border}`}
                        >
                          {item.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Disponibilitate */}
              <div className="p-4 rounded-2xl bg-[#ECFDF5]/60 border border-emerald-200/80 flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xs font-extrabold uppercase tracking-wider text-emerald-900">
                    Disponibilitate &amp; Preferințe
                  </h2>
                  <p className="text-sm font-semibold text-[#064E3B] mt-0.5">
                    {currentUser.availability}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Meciurile mele Section */}
      <section className="bg-white rounded-3xl border border-slate-200/90 shadow-sport p-5 sm:p-7">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-[#064E3B] flex items-center gap-2">
              <CalendarCheck2 className="w-5 h-5 text-emerald-600" />
              <span>Meciurile mele ({myMatches.length})</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Jocurile pe care le-ai creat sau la care te-ai înscris în Timișoara
            </p>
          </div>

          <div className="inline-flex items-center bg-slate-100 p-1 rounded-xl self-start sm:self-auto">
            {[
              { id: 'all', label: 'Toate' },
              { id: 'hosted', label: 'Organizate' },
              { id: 'joined', label: 'Înscris' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() =>
                  setMyMatchesFilter(tab.id as 'all' | 'hosted' | 'joined')
                }
                className={`min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  myMatchesFilter === tab.id
                    ? 'bg-white text-[#064E3B] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {filteredMyMatches.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/70 p-8 text-center">
            <Sparkles className="w-7 h-7 text-emerald-600 mx-auto mb-2" />
            <p className="text-sm font-extrabold text-[#064E3B]">
              Nu ai niciun meci în această categorie momentan
            </p>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Explorează meciurile deschise din Timișoara sau organizează tu o
              ieșire pe teren!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <button
                type="button"
                onClick={() => setActiveTab('feed')}
                className="min-h-[44px] px-4 py-2 rounded-xl bg-[#10B981] hover:bg-emerald-600 text-white text-xs font-bold transition-colors"
              >
                Explorează meciuri deschise
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('create')}
                className="min-h-[44px] px-4 py-2 rounded-xl bg-white hover:bg-[#ECFDF5] text-[#064E3B] border border-emerald-300 text-xs font-bold inline-flex items-center gap-1.5 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Creează un meci</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredMyMatches.map((match) => {
              const isHost = match.hostId === currentUserId;
              const count = match.playerIds.length + match.guestFriendsCount;
              const perPlayer = calculateCostPerPlayer(
                match.totalCost,
                Math.max(1, count)
              );
              const Icon = SPORT_CONFIG[match.sport].icon;

              return (
                <button
                  key={match.id}
                  type="button"
                  onClick={() => openMatchDetails(match.id)}
                  className="w-full p-4 rounded-2xl border border-slate-200 hover:border-emerald-300 bg-[#F8FAFC] hover:bg-[#ECFDF5]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left transition-all group"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                        <span
                          className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase ${
                            isHost
                              ? 'bg-amber-100 text-amber-900'
                              : 'bg-emerald-100 text-[#064E3B]'
                          }`}
                        >
                          {isHost ? 'Organizator' : 'Înscris ✓'}
                        </span>
                        <span className="text-xs font-semibold text-emerald-700">
                          {formatMatchDateTime(
                            match.dateISO,
                            match.time,
                            match.displayDayHint
                          )}
                        </span>
                      </div>
                      <p className="font-extrabold text-sm sm:text-base text-[#064E3B] group-hover:text-emerald-700 truncate">
                        {match.title}
                      </p>
                      <p className="text-xs text-slate-600 truncate mt-0.5">
                        {match.venueName} ({match.neighborhood}) • {count}/
                        {match.totalSpots} jucători •{' '}
                        {match.isFree
                          ? 'Gratis'
                          : `${formatRON(perPlayer)} / pers.`}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-extrabold text-emerald-700 shrink-0 self-end sm:self-center">
                    Detalii meci →
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </section>

      {/* Subtle Demo Data Reset Card (Rule 3) */}
      <section className="rounded-2xl border border-slate-200/80 bg-white/75 p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold text-slate-700">
            Setări Date Prototip (LocalStorage)
          </p>
          <p className="text-xs text-slate-500">
            Toate meciurile create, înscrierile și editările de profil sunt
            salvate local în browser.
          </p>
        </div>

        {!confirmReset ? (
          <button
            type="button"
            onClick={() => setConfirmReset(true)}
            className="self-start sm:self-auto min-h-[44px] px-3.5 py-2 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 text-xs font-bold inline-flex items-center gap-1.5 transition-colors shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Resetează datele demo</span>
          </button>
        ) : (
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => {
                resetDemoData();
                setConfirmReset(false);
                setIsEditing(false);
              }}
              className="min-h-[44px] px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-extrabold transition-colors"
            >
              Confirmă resetarea
            </button>
            <button
              type="button"
              onClick={() => setConfirmReset(false)}
              className="min-h-[44px] px-3 py-2 rounded-xl border border-slate-200 bg-white text-slate-600 text-xs font-bold"
            >
              Anulează
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
