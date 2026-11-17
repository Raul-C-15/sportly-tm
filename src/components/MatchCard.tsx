import React from 'react';
import {
  Calendar,
  MapPin,
  Users,
  Wallet,
  Check,
  UserMinus,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import type { Match } from '../types';
import { useSportly } from '../context/SportlyContext';
import {
  SKILL_STYLE,
  SPORT_CONFIG,
  calculateCostPerPlayer,
  formatMatchDateTime,
  formatRON,
  getSportIcon,
} from '../utils/sportConfig';
import { Avatar } from './Avatar';

interface MatchCardProps {
  match: Match;
}

export const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  const {
    users,
    currentUserId,
    toggleJoinMatch,
    openMatchDetails,
    openPlayerProfile,
  } = useSportly();

  const sportMeta = SPORT_CONFIG[match.sport];
  const SportIcon = getSportIcon(match.sport, match.sportSubLabel);
  const skillStyle = SKILL_STYLE[match.skillLevel];

  const isJoined = match.playerIds.includes(currentUserId);
  const isHost = match.hostId === currentUserId;
  const joinedCount = match.playerIds.length + match.guestFriendsCount;
  const spotsLeft = Math.max(0, match.totalSpots - joinedCount);
  const isFull = spotsLeft === 0;
  const fillPercent = Math.min(
    100,
    Math.round((joinedCount / match.totalSpots) * 100)
  );

  // Automatic dynamic cost split calculator
  const activeDivisor = Math.max(1, joinedCount);
  const costPerCurrentPlayer = calculateCostPerPlayer(
    match.totalCost,
    activeDivisor
  );
  const costAtFullCapacity = calculateCostPerPlayer(
    match.totalCost,
    match.totalSpots
  );

  const visiblePlayers = match.playerIds
    .map((id) => users[id])
    .filter(Boolean)
    .slice(0, 5);
  const extraPlayersCount = Math.max(0, joinedCount - visiblePlayers.length);

  const hostProfile = users[match.hostId];

  const handleCardKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openMatchDetails(match.id);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => openMatchDetails(match.id)}
      onKeyDown={handleCardKeyDown}
      aria-label={`Detalii meci: ${match.title}`}
      className="group bg-white rounded-2xl border border-slate-200/85 hover:border-emerald-300 shadow-sport hover:shadow-sport-hover transition-all duration-200 p-5 flex flex-col justify-between cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-emerald-500"
    >
      <div>
        {/* Top Row: Sport Badge + Skill Pill + Gratis/Paid Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold border ${sportMeta.badgeBg} ${sportMeta.badgeText} ${sportMeta.badgeBorder}`}
            >
              <SportIcon className={`w-3.5 h-3.5 ${sportMeta.iconColor}`} />
              <span>{match.sportSubLabel || sportMeta.label}</span>
            </span>

            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-semibold border ${skillStyle.bg} ${skillStyle.text} ${skillStyle.border}`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${skillStyle.dot}`}
              />
              <span>{match.skillLevel}</span>
            </span>
          </div>

          {match.isFree ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-[11px] font-extrabold tracking-wide uppercase bg-[#84CC16]/25 text-[#064E3B] border border-[#84CC16]/60">
              <Sparkles className="w-3 h-3 text-lime-700" />
              GRATIS
            </span>
          ) : (
            <span className="inline-flex items-center px-2.5 py-1 rounded-xl text-[11px] font-bold tracking-wide uppercase bg-slate-100 text-slate-700 border border-slate-200">
              CU PLATĂ
            </span>
          )}
        </div>

        {/* Catchy Match Title */}
        <h3 className="text-base sm:text-lg font-extrabold text-[#064E3B] group-hover:text-emerald-700 transition-colors leading-snug mb-2.5">
          {match.title}
        </h3>

        {/* Venue & Date/Time Info */}
        <div className="space-y-1.5 mb-4">
          <div className="flex items-start gap-2 text-sm text-slate-700">
            <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div className="min-w-0">
              <span className="font-semibold text-slate-900">
                {match.venueName}
              </span>
              <span className="text-slate-400 mx-1.5">•</span>
              <span className="text-slate-600 text-xs sm:text-sm">
                {match.neighborhood}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-700">
            <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="font-semibold text-[#064E3B]">
              {formatMatchDateTime(
                match.dateISO,
                match.time,
                match.displayDayHint
              )}
            </span>
            {hostProfile && (
              <>
                <span className="text-slate-300">•</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openPlayerProfile(hostProfile.id);
                  }}
                  className="text-xs text-slate-500 hover:text-emerald-700 hover:underline font-medium truncate"
                >
                  Org: {hostProfile.name.split(' ')[0]}
                  {isHost ? ' (Tu)' : ''}
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div>
        {/* Player Slot Progress & Avatar Stack */}
        <div className="bg-[#F8FAFC] rounded-xl p-3 border border-slate-100 mb-3.5">
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center -space-x-2">
              {visiblePlayers.map((player) => (
                <Avatar
                  key={player.id}
                  name={player.name}
                  color={player.avatarColor}
                  size="xs"
                  className="ring-2 ring-white"
                  title={`${player.name} (${player.neighborhood}) – apasă pentru profil`}
                  onClick={(e) => {
                    e.stopPropagation();
                    openPlayerProfile(player.id);
                  }}
                />
              ))}
              {extraPlayersCount > 0 && (
                <span className="w-7 h-7 rounded-full bg-emerald-100 text-[#064E3B] ring-2 ring-white text-[11px] font-bold inline-flex items-center justify-center">
                  +{extraPlayersCount}
                </span>
              )}
            </div>

            <div className="text-right">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-800">
                <Users className="w-3.5 h-3.5 text-emerald-600" />
                {joinedCount} / {match.totalSpots} jucători
              </span>
              <span
                className={`block text-[11px] font-semibold ${
                  isFull
                    ? 'text-amber-600'
                    : spotsLeft <= 2
                    ? 'text-emerald-700'
                    : 'text-slate-500'
                }`}
              >
                {isFull
                  ? 'Meci complet'
                  : spotsLeft === 1
                  ? '1 singur loc liber!'
                  : `${spotsLeft} locuri libere`}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 rounded-full bg-slate-200/80 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-300 ${
                isFull
                  ? 'bg-amber-500'
                  : 'bg-gradient-to-r from-emerald-500 to-[#84CC16]'
              }`}
              style={{ width: `${fillPercent}%` }}
            />
          </div>
        </div>

        {/* Cost Split Calculator Strip */}
        <div
          className={`flex items-center justify-between gap-2 px-3 py-2 rounded-xl text-xs mb-4 border ${
            match.isFree
              ? 'bg-[#ECFDF5]/80 border-emerald-200/70 text-[#064E3B]'
              : 'bg-slate-50 border-slate-200/80 text-slate-700'
          }`}
        >
          <div className="flex items-center gap-1.5 font-semibold min-w-0">
            <Wallet className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            {match.isFree ? (
              <span>Teren public gratuit • 0 RON / persoană</span>
            ) : (
              <span className="truncate">
                <strong className="text-slate-900">
                  {formatRON(match.totalCost)}
                </strong>{' '}
                total •{' '}
                <strong className="text-emerald-700">
                  {formatRON(costPerCurrentPlayer)} / persoană
                </strong>
              </span>
            )}
          </div>
          {!match.isFree && joinedCount < match.totalSpots && (
            <span className="text-[11px] text-slate-500 font-medium shrink-0 hidden sm:inline">
              ({formatRON(costAtFullCapacity)} la {match.totalSpots}/
              {match.totalSpots})
            </span>
          )}
        </div>

        {/* Bottom Action Buttons */}
        <div className="flex items-center gap-2">
          {isJoined ? (
            <div className="flex-1 flex items-center gap-2">
              <div className="flex-1 min-h-[44px] px-3.5 py-2.5 rounded-xl bg-[#ECFDF5] border border-emerald-300 text-[#064E3B] font-bold text-sm inline-flex items-center justify-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 stroke-[2.75]" />
                <span>Înscris ✓</span>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleJoinMatch(match.id);
                }}
                title="Retrage-te din acest meci"
                className="min-h-[44px] px-3.5 py-2.5 rounded-xl border border-slate-200 hover:border-rose-200 bg-white hover:bg-rose-50 text-slate-600 hover:text-rose-700 text-xs font-bold inline-flex items-center gap-1.5 transition-colors"
              >
                <UserMinus className="w-4 h-4" />
                <span>Retrage-te</span>
              </button>
            </div>
          ) : (
            <button
              type="button"
              disabled={isFull}
              onClick={(e) => {
                e.stopPropagation();
                toggleJoinMatch(match.id);
              }}
              className={`flex-1 min-h-[44px] px-4 py-2.5 rounded-xl text-sm font-bold inline-flex items-center justify-center gap-2 transition-all ${
                isFull
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
                  : 'bg-[#10B981] hover:bg-emerald-600 active:scale-[0.99] text-white shadow-sm hover:shadow'
              }`}
            >
              <span>{isFull ? 'Locuri epuizate' : 'Alătură-te'}</span>
            </button>
          )}

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              openMatchDetails(match.id);
            }}
            aria-label="Vezi toate detaliile meciului"
            title="Detalii meci"
            className="min-h-[44px] min-w-[44px] px-3 rounded-xl border border-slate-200 hover:border-emerald-300 bg-white hover:bg-[#ECFDF5] text-slate-600 hover:text-[#064E3B] inline-flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
