import React, { useEffect } from 'react';
import {
  X,
  MapPin,
  Clock,
  Trophy,
  HeartHandshake,
  CalendarCheck2,
  UserCheck,
} from 'lucide-react';
import { useSportly } from '../context/SportlyContext';
import {
  SKILL_STYLE,
  SPORT_CONFIG,
  formatMatchDateTime,
} from '../utils/sportConfig';
import { Avatar } from './Avatar';

export const PlayerProfileModal: React.FC = () => {
  const {
    inspectedPlayerId,
    closePlayerProfile,
    users,
    matches,
    currentUserId,
    openMatchDetails,
    setActiveTab,
  } = useSportly();

  const player = inspectedPlayerId ? users[inspectedPlayerId] : undefined;

  useEffect(() => {
    if (!player) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        closePlayerProfile();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [player, closePlayerProfile]);

  if (!player) return null;

  const isMe = player.id === currentUserId;
  const playerActiveMatches = matches.filter((m) =>
    m.playerIds.includes(player.id)
  );
  const totalPlayed = player.matchesPlayedBase + playerActiveMatches.length;

  return (
    <div
      className="fixed inset-0 z-[55] flex items-end sm:items-center justify-center bg-slate-950/60 backdrop-blur-sm p-0 sm:p-4"
      onClick={closePlayerProfile}
      role="dialog"
      aria-modal="true"
      aria-labelledby="player-preview-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full sm:max-w-lg max-h-[90dvh] bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
      >
        {/* Top Banner */}
        <div className="relative bg-gradient-to-br from-[#064E3B] via-emerald-800 to-emerald-600 px-5 pt-5 pb-6 text-white">
          <button
            type="button"
            onClick={closePlayerProfile}
            aria-label="Închide profilul jucătorului"
            className="absolute top-4 right-4 min-h-[44px] min-w-[44px] rounded-2xl bg-white/15 hover:bg-white/25 text-white inline-flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4 pr-12">
            <Avatar
              name={player.name}
              color={player.avatarColor}
              size="lg"
              className="ring-2 ring-white/80"
            />
            <div>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#84CC16]/30 text-lime-100 border border-[#84CC16]/50 mb-1">
                <HeartHandshake className="w-3 h-3 text-[#84CC16]" />
                {player.vibeTag}
              </span>
              <h2
                id="player-preview-title"
                className="text-xl font-extrabold leading-tight"
              >
                {player.name}, {player.age} ani
              </h2>
              <p className="text-xs text-emerald-100 flex items-center gap-1 mt-1">
                <MapPin className="w-3.5 h-3.5 text-[#84CC16] shrink-0" />
                <span>{player.neighborhood}, Timișoara</span>
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 text-center">
              <span className="block text-lg font-extrabold text-[#064E3B]">
                {totalPlayed}
              </span>
              <span className="text-xs text-slate-500 font-semibold">
                Meciuri jucate
              </span>
            </div>
            <div className="p-3 rounded-2xl bg-[#ECFDF5]/75 border border-emerald-200 text-center">
              <span className="block text-sm font-extrabold text-[#064E3B] truncate mt-1">
                {player.favoriteSport}
              </span>
              <span className="text-xs text-emerald-800 font-semibold">
                Sport favorit
              </span>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
              Despre {player.name.split(' ')[0]}
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed bg-[#F8FAFC] rounded-2xl p-4 border border-slate-100">
              {player.bio}
            </p>
          </div>

          {/* Sports & Skill Levels */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-emerald-600" />
              <span>Sporturi &amp; Nivel de joc</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {player.preferredSports.map((s) => {
                const meta = SPORT_CONFIG[s.sport];
                const Icon = meta.icon;
                const st = SKILL_STYLE[s.level];
                return (
                  <div
                    key={`${s.sport}-${s.customLabel || ''}`}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200"
                  >
                    <Icon className={`w-3.5 h-3.5 ${meta.iconColor}`} />
                    <span className="text-xs font-bold text-[#064E3B]">
                      {s.customLabel || s.sport}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${st.bg} ${st.text} ${st.border}`}
                    >
                      {s.level}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Availability */}
          <div className="p-3.5 rounded-2xl bg-[#ECFDF5]/60 border border-emerald-200/80 flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <span className="block text-[11px] font-extrabold uppercase tracking-wider text-emerald-900">
                Disponibilitate
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#064E3B]">
                {player.availability}
              </span>
            </div>
          </div>

          {/* Active Open Matches with This Player */}
          {playerActiveMatches.length > 0 && (
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <CalendarCheck2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>
                  Joacă în aceste meciuri active ({playerActiveMatches.length})
                </span>
              </h3>
              <div className="space-y-2">
                {playerActiveMatches.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => {
                      closePlayerProfile();
                      openMatchDetails(m.id);
                    }}
                    className="w-full p-3 rounded-xl border border-slate-200 hover:border-emerald-300 bg-slate-50/70 hover:bg-[#ECFDF5]/50 flex items-center justify-between gap-2 text-left transition-colors"
                  >
                    <div className="min-w-0">
                      <p className="text-xs font-extrabold text-[#064E3B] truncate">
                        {m.title}
                      </p>
                      <p className="text-[11px] text-slate-500 truncate">
                        {m.venueName} •{' '}
                        {formatMatchDateTime(
                          m.dateISO,
                          m.time,
                          m.displayDayHint
                        )}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 shrink-0">
                      Vezi meci →
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-white flex items-center justify-end gap-2.5">
          {isMe && (
            <button
              type="button"
              onClick={() => {
                closePlayerProfile();
                setActiveTab('profile');
              }}
              className="min-h-[44px] px-4 py-2 rounded-xl bg-[#ECFDF5] hover:bg-emerald-100 text-[#064E3B] border border-emerald-300 text-xs font-extrabold inline-flex items-center gap-1.5"
            >
              <UserCheck className="w-4 h-4 text-emerald-700" />
              <span>Mergi la Profilul Meu</span>
            </button>
          )}
          <button
            type="button"
            onClick={closePlayerProfile}
            className="min-h-[44px] px-5 py-2 rounded-xl bg-[#064E3B] hover:bg-emerald-900 text-white text-xs sm:text-sm font-bold transition-colors"
          >
            Închide
          </button>
        </div>
      </div>
    </div>
  );
};
