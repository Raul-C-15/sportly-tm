import React, { useEffect, useMemo, useState } from 'react';
import {
  Search,
  RotateCcw,
  Sparkles,
  MapPin,
  Plus,
  SlidersHorizontal,
  Users,
  X,
} from 'lucide-react';
import { useSportly } from '../context/SportlyContext';
import type { CostFilter, SkillLevel, SportCategory } from '../types';
import {
  SKILL_LEVELS,
  SPORT_CATEGORIES,
  SPORT_CONFIG,
} from '../utils/sportConfig';
import { MatchCard } from './MatchCard';

export const FeedView: React.FC = () => {
  const { matches, venues, setActiveTab, feedResetSignal } = useSportly();

  const [selectedSport, setSelectedSport] = useState<'Toate' | SportCategory>(
    'Toate'
  );
  const [selectedSkill, setSelectedSkill] = useState<
    'Toate nivelurile' | SkillLevel
  >('Toate nivelurile');
  const [selectedCost, setSelectedCost] = useState<CostFilter>('Toate');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (feedResetSignal > 0) {
      setSelectedSport('Toate');
      setSelectedSkill('Toate nivelurile');
      setSelectedCost('Toate');
      setSearchQuery('');
    }
  }, [feedResetSignal]);

  const hasActiveFilters =
    selectedSport !== 'Toate' ||
    selectedSkill !== 'Toate nivelurile' ||
    selectedCost !== 'Toate' ||
    searchQuery.trim() !== '';

  const resetAllFilters = () => {
    setSelectedSport('Toate');
    setSelectedSkill('Toate nivelurile');
    setSelectedCost('Toate');
    setSearchQuery('');
  };

  const filteredMatches = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return matches.filter((match) => {
      if (selectedSport !== 'Toate' && match.sport !== selectedSport) {
        return false;
      }
      if (
        selectedSkill !== 'Toate nivelurile' &&
        match.skillLevel !== selectedSkill
      ) {
        return false;
      }
      if (selectedCost === 'Gratis' && !match.isFree) {
        return false;
      }
      if (selectedCost === 'Cu plată' && match.isFree) {
        return false;
      }
      if (q) {
        const haystack = `${match.title} ${match.venueName} ${
          match.neighborhood
        } ${match.sport} ${match.sportSubLabel || ''}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [matches, selectedSport, selectedSkill, selectedCost, searchQuery]);

  const totalOpenSpots = useMemo(() => {
    return matches.reduce((sum, m) => {
      const joined = m.playerIds.length + m.guestFriendsCount;
      return sum + Math.max(0, m.totalSpots - joined);
    }, 0);
  }, [matches]);

  const freeVenuesCount = useMemo(
    () => venues.filter((v) => v.isFree).length,
    [venues]
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-5 pb-28 md:pb-12">
      {/* Energetic Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#064E3B] via-emerald-800 to-emerald-600 text-white p-5 sm:p-7 mb-6 shadow-sport">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-12 w-56 h-56 rounded-full bg-[#84CC16]/20 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-24 -bottom-16 w-48 h-48 rounded-full bg-emerald-400/20 blur-2xl"
        />

        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-xs font-bold text-lime-200 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#84CC16]" />
              <span>Comunitatea de sport amator din Timișoara</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
              Nu mai anula meciul din lipsă de oameni.{' '}
              <span className="text-[#84CC16]">Ieși pe teren azi!</span>
            </h1>
            <p className="text-emerald-50/90 text-sm sm:text-base mt-2 leading-relaxed">
              Alătură-te meciurilor deschise de fotbal sintetic, baschet, padel,
              tenis sau alergare, împarte automat costul terenului și cunoaște
              coechipieri faini din orașul tău.
            </p>
          </div>

          {/* Quick Stats + CTA */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <div className="grid grid-cols-3 gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3 text-center">
              <div className="px-2">
                <span className="block text-lg sm:text-xl font-extrabold text-white">
                  {matches.length}
                </span>
                <span className="text-[11px] text-emerald-100 font-medium">
                  Meciuri active
                </span>
              </div>
              <div className="px-2 border-x border-white/15">
                <span className="block text-lg sm:text-xl font-extrabold text-[#84CC16]">
                  {totalOpenSpots}
                </span>
                <span className="text-[11px] text-emerald-100 font-medium">
                  Locuri libere
                </span>
              </div>
              <div className="px-2">
                <span className="block text-lg sm:text-xl font-extrabold text-white">
                  {freeVenuesCount}
                </span>
                <span className="text-[11px] text-emerald-100 font-medium">
                  Terenuri gratis
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('create')}
                className="flex-1 min-h-[44px] px-4 py-2.5 rounded-xl bg-[#84CC16] hover:bg-lime-400 text-[#064E3B] font-extrabold text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <Plus className="w-4 h-4 stroke-[2.75]" />
                <span>Organizează meci</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('map')}
                className="flex-1 min-h-[44px] px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/25 font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#84CC16]" />
                <span>Vezi harta</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Filter Bar */}
      <section
        aria-label="Filtre meciuri"
        className="bg-white rounded-2xl border border-slate-200/85 p-4 sm:p-5 mb-6 shadow-sm space-y-4"
      >
        {/* Primary Horizontal Scrollable Sport Pills */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-600" />
              Alege sportul
            </span>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetAllFilters}
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-[#064E3B] py-1 px-2 rounded-lg hover:bg-[#ECFDF5] transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Resetează filtrele</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 -mx-1 px-1">
            <button
              type="button"
              onClick={() => setSelectedSport('Toate')}
              className={`min-h-[44px] px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all shrink-0 ${
                selectedSport === 'Toate'
                  ? 'bg-[#064E3B] text-white shadow-sm'
                  : 'bg-slate-100/90 text-slate-700 hover:bg-[#ECFDF5] hover:text-[#064E3B]'
              }`}
            >
              Toate ({matches.length})
            </button>

            {SPORT_CATEGORIES.map((sport) => {
              const meta = SPORT_CONFIG[sport];
              const Icon = meta.icon;
              const isSelected = selectedSport === sport;
              const count = matches.filter((m) => m.sport === sport).length;

              return (
                <button
                  key={sport}
                  type="button"
                  onClick={() => setSelectedSport(sport)}
                  className={`min-h-[44px] px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap inline-flex items-center gap-2 transition-all shrink-0 border ${
                    isSelected
                      ? 'bg-[#ECFDF5] text-[#064E3B] border-emerald-400 shadow-sm ring-1 ring-emerald-300'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-200 hover:bg-slate-50'
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${
                      isSelected ? 'text-emerald-600' : meta.iconColor
                    }`}
                  />
                  <span>{sport}</span>
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-md ${
                      isSelected
                        ? 'bg-emerald-200/70 text-[#064E3B]'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Secondary Quick Filters: Search + Skill Level + Cost */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-2 border-t border-slate-100">
          {/* Search Input */}
          <div className="md:col-span-5 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Caută teren, cartier sau titlu meci..."
              aria-label="Caută meciuri"
              className="w-full min-h-[44px] pl-10 pr-9 py-2 rounded-xl border border-slate-200 bg-slate-50/70 focus:bg-white text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Șterge căutarea"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Skill Level Selector */}
          <div className="md:col-span-4">
            <select
              value={selectedSkill}
              onChange={(e) =>
                setSelectedSkill(
                  e.target.value as 'Toate nivelurile' | SkillLevel
                )
              }
              aria-label="Filtrează după nivelul de joc"
              className="w-full min-h-[44px] px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50/70 focus:bg-white text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
            >
              <option value="Toate nivelurile">Nivel: Toate nivelurile</option>
              {SKILL_LEVELS.map((lvl) => (
                <option key={lvl} value={lvl}>
                  Nivel: {lvl}
                </option>
              ))}
            </select>
          </div>

          {/* Cost Filter Segmented Control */}
          <div className="md:col-span-3 flex items-center bg-slate-100 p-1 rounded-xl min-h-[44px]">
            {(['Toate', 'Gratis', 'Cu plată'] as CostFilter[]).map((costOpt) => {
              const active = selectedCost === costOpt;
              return (
                <button
                  key={costOpt}
                  type="button"
                  onClick={() => setSelectedCost(costOpt)}
                  className={`flex-1 min-h-[36px] px-2 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    active
                      ? costOpt === 'Gratis'
                        ? 'bg-[#84CC16] text-[#064E3B] shadow-sm'
                        : 'bg-white text-[#064E3B] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {costOpt}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feed Header Count */}
      <div className="flex items-center justify-between gap-2 mb-4 px-1">
        <h2 className="text-lg sm:text-xl font-extrabold text-[#064E3B] flex items-center gap-2">
          <span>Meciuri deschise în Timișoara</span>
          <span className="px-2.5 py-0.5 text-xs font-extrabold rounded-full bg-[#ECFDF5] text-emerald-800 border border-emerald-200">
            {filteredMatches.length}
          </span>
        </h2>
        <span className="text-xs text-slate-500 hidden sm:inline">
          Apasă pe un card pentru adresă, reguli și lista jucătorilor
        </span>
      </div>

      {/* Matches Grid or Empty State */}
      {filteredMatches.length === 0 ? (
        <div className="bg-white rounded-3xl border border-dashed border-emerald-300 p-8 sm:p-12 text-center max-w-xl mx-auto my-6 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-[#ECFDF5] border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-extrabold text-[#064E3B] mb-2">
            Niciun meci găsit pentru filtrele selectate
          </h3>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            Momentan nu există un meci deschis care să corespundă exact acestei
            combinații. Resetează filtrele pentru a vedea toate jocurile active
            sau creează chiar tu un meci nou!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={resetAllFilters}
              className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-xl bg-[#10B981] hover:bg-emerald-600 text-white font-bold text-sm inline-flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Resetează filtrele</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('create')}
              className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-xl bg-[#ECFDF5] hover:bg-emerald-100 text-[#064E3B] border border-emerald-200 font-bold text-sm inline-flex items-center justify-center gap-2 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Creează un meci nou</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredMatches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      )}
    </div>
  );
};
