import React, { useEffect } from 'react';
import {
  X,
  Calendar,
  MapPin,
  Wallet,
  MessageSquareQuote,
  Users,
  Map,
  Check,
  UserMinus,
  Sparkles,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';
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

export const MatchDetailsModal: React.FC = () => {
  const {
    selectedMatchId,
    closeMatchDetails,
    matches,
    venues,
    users,
    currentUserId,
    toggleJoinMatch,
    openPlayerProfile,
    inspectedPlayerId,
    navigateToVenueOnMap,
  } = useSportly();

  const match = matches.find((m) => m.id === selectedMatchId);

  useEffect(() => {
    if (!match) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !inspectedPlayerId) {
        closeMatchDetails();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [match, inspectedPlayerId, closeMatchDetails]);

  if (!match) return null;

  const venue = venues.find((v) => v.id === match.venueId);
  const sportMeta = SPORT_CONFIG[match.sport];
  const SportIcon = getSportIcon(match.sport, match.sportSubLabel);
  const skillStyle = SKILL_STYLE[match.skillLevel];

  const isJoined = match.playerIds.includes(currentUserId);
  const joinedCount = match.playerIds.length + match.guestFriendsCount;
  const spotsLeft = Math.max(0, match.totalSpots - joinedCount);
  const isFull = spotsLeft === 0;

  const costPerCurrent = calculateCostPerPlayer(
    match.totalCost,
    Math.max(1, joinedCount)
  );
  const costAtFull = calculateCostPerPlayer(match.totalCost, match.totalSpots);

  const joinedProfiles = match.playerIds
    .map((id) => users[id])
    .filter(Boolean);

  const googleMapsUrl = venue
    ? `https://www.google.com/maps/search/?api=1&query=${venue.lat},${venue.lng}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${match.venueName} ${match.neighborhood} Timișoara`
      )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-950/55 backdrop-blur-sm p-0 sm:p-4"
      onClick={closeMatchDetails}
      role="dialog"
      aria-modal="true"
      aria-labelledby="match-modal-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full sm:max-w-xl max-h-[92dvh] bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
      >
        {/* Modal Header */}
        <div className="px-5 sm:px-6 pt-5 pb-4 border-b border-slate-100 flex items-start justify-between gap-3 bg-gradient-to-b from-[#ECFDF5]/70 to-white">
          <div className="space-y-2 min-w-0">
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
                <span className={`w-1.5 h-1.5 rounded-full ${skillStyle.dot}`} />
                <span>{match.skillLevel}</span>
              </span>
              {match.isFree ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-[11px] font-extrabold uppercase bg-[#84CC16]/30 text-[#064E3B] border border-[#84CC16]/60">
                  <Sparkles className="w-3 h-3" />
                  GRATIS
                </span>
              ) : (
                <span className="inline-flex items-center px-2.5 py-1 rounded-xl text-[11px] font-bold uppercase bg-slate-100 text-slate-700 border border-slate-200">
                  CU PLATĂ
                </span>
              )}
            </div>

            <h2
              id="match-modal-title"
              className="text-xl sm:text-2xl font-extrabold text-[#064E3B] leading-snug"
            >
              {match.title}
            </h2>

            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {formatMatchDateTime(
                  match.dateISO,
                  match.time,
                  match.displayDayHint
                )}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={closeMatchDetails}
            aria-label="Închide fereastra"
            className="min-h-[44px] min-w-[44px] rounded-2xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-800 inline-flex items-center justify-center shrink-0 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {/* Venue & Map Link Card */}
          <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-extrabold text-[#064E3B] text-sm sm:text-base">
                    {match.venueName}
                  </p>
                  <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                    {match.neighborhood} • Timișoara
                  </p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {match.address}
                  </p>
                  {venue && (
                    <p className="text-[11px] text-slate-500 mt-1.5">
                      Suprafață: <strong className="text-slate-700">{venue.surface}</strong>
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3.5 pt-3 border-t border-slate-200/80">
              {venue && (
                <button
                  type="button"
                  onClick={() => navigateToVenueOnMap(venue.id)}
                  className="min-h-[44px] px-3.5 py-2 rounded-xl bg-white hover:bg-[#ECFDF5] text-[#064E3B] border border-emerald-200 font-bold text-xs inline-flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Map className="w-4 h-4 text-emerald-600" />
                  <span>Vezi terenul pe hartă</span>
                </button>
              )}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold text-xs inline-flex items-center justify-center gap-1.5 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                <span>Indicații Google Maps</span>
              </a>
            </div>
          </div>

          {/* Cost Breakdown Card */}
          <div
            className={`rounded-2xl p-4 border ${
              match.isFree
                ? 'bg-[#ECFDF5]/70 border-emerald-200'
                : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
              <Wallet className="w-4 h-4 text-emerald-600" />
              <span>Calculator împărțire cost teren</span>
            </div>

            {match.isFree ? (
              <p className="text-sm font-bold text-[#064E3B]">
                Teren public cu acces GRATUIT — nu există niciun cost de închiriere!
              </p>
            ) : (
              <div className="grid grid-cols-3 gap-2 text-center bg-slate-50 rounded-xl p-3 border border-slate-100">
                <div>
                  <span className="block text-[11px] text-slate-500 font-medium">
                    Total teren
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-slate-900">
                    {formatRON(match.totalCost)}
                  </span>
                </div>
                <div className="border-x border-slate-200 px-1">
                  <span className="block text-[11px] text-slate-500 font-medium">
                    Acum ({joinedCount} pers.)
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-emerald-700">
                    {formatRON(costPerCurrent)}
                  </span>
                </div>
                <div>
                  <span className="block text-[11px] text-slate-500 font-medium">
                    La {match.totalSpots}/{match.totalSpots} plin
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-[#064E3B]">
                    {formatRON(costAtFull)}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Host Note */}
          <div className="rounded-2xl bg-[#ECFDF5]/65 border border-emerald-200/80 p-4">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-900 mb-1.5">
              <MessageSquareQuote className="w-4 h-4 text-emerald-600" />
              <span>Detalii &amp; reguli de la organizator</span>
            </div>
            <p className="text-sm text-slate-800 leading-relaxed">
              „{match.hostNote}”
            </p>
          </div>

          {/* Joined Players List */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <h3 className="text-sm font-extrabold text-[#064E3B] flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-600" />
                <span>
                  Jucători înscriși ({joinedCount} / {match.totalSpots})
                </span>
              </h3>
              <span className="text-xs font-semibold text-emerald-700">
                {isFull
                  ? 'Toate locurile ocupate'
                  : `Mai sunt ${spotsLeft} locuri libere`}
              </span>
            </div>

            <div className="space-y-2">
              {joinedProfiles.map((player) => {
                const isPlayerHost = player.id === match.hostId;
                const isMe = player.id === currentUserId;
                const matchingSportSkill = player.preferredSports.find(
                  (s) => s.sport === match.sport
                );

                return (
                  <button
                    key={player.id}
                    type="button"
                    onClick={() => openPlayerProfile(player.id)}
                    className="w-full min-h-[56px] p-3 rounded-2xl border border-slate-200/90 hover:border-emerald-300 bg-white hover:bg-[#ECFDF5]/50 flex items-center justify-between gap-3 text-left transition-all group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Avatar
                        name={player.name}
                        color={player.avatarColor}
                        size="md"
                      />
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="font-bold text-sm text-slate-900 group-hover:text-[#064E3B] truncate">
                            {player.name}
                          </span>
                          {isMe && (
                            <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-emerald-100 text-emerald-800">
                              TU
                            </span>
                          )}
                          {isPlayerHost && (
                            <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-amber-100 text-amber-900">
                              <ShieldCheck className="w-3 h-3 text-amber-700" />
                              Organizator
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 truncate mt-0.5">
                          {player.neighborhood} •{' '}
                          {matchingSportSkill
                            ? matchingSportSkill.level
                            : player.vibeTag}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs font-bold text-emerald-700 group-hover:translate-x-0.5 transition-transform shrink-0">
                      Profil →
                    </span>
                  </button>
                );
              })}

              {match.guestFriendsCount > 0 && (
                <div className="p-3 rounded-2xl border border-dashed border-slate-300 bg-slate-50 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-slate-200 text-slate-700 font-extrabold text-xs flex items-center justify-center shrink-0">
                      +{match.guestFriendsCount}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        +{match.guestFriendsCount}{' '}
                        {match.guestFriendsCount === 1
                          ? 'coechipier confirmat'
                          : 'coechipieri confirmați'}
                      </p>
                      <p className="text-xs text-slate-500">
                        Prieteni aduși direct de organizator
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sticky Modal Footer Action */}
        <div className="p-4 sm:px-6 border-t border-slate-200 bg-white flex items-center justify-between gap-3">
          {isJoined ? (
            <>
              <div className="flex items-center gap-2 text-sm font-extrabold text-[#064E3B]">
                <span className="w-7 h-7 rounded-full bg-[#ECFDF5] border border-emerald-300 flex items-center justify-center">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[2.75]" />
                </span>
                <span>Ești înscris la acest meci!</span>
              </div>
              <button
                type="button"
                onClick={() => toggleJoinMatch(match.id)}
                className="min-h-[44px] px-4 py-2.5 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-700 text-sm font-bold inline-flex items-center gap-1.5 transition-colors"
              >
                <UserMinus className="w-4 h-4" />
                <span>Retrage-te</span>
              </button>
            </>
          ) : (
            <button
              type="button"
              disabled={isFull}
              onClick={() => toggleJoinMatch(match.id)}
              className={`w-full min-h-[48px] px-5 py-3 rounded-2xl text-sm sm:text-base font-extrabold inline-flex items-center justify-center gap-2 transition-all ${
                isFull
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-[#10B981] hover:bg-emerald-600 text-white shadow-md hover:shadow-lg active:scale-[0.99]'
              }`}
            >
              <span>
                {isFull
                  ? 'Meci complet – nu mai sunt locuri'
                  : match.isFree
                  ? 'Alătură-te gratuit la meci'
                  : `Alătură-te la meci • ~${formatRON(
                      calculateCostPerPlayer(match.totalCost, joinedCount + 1)
                    )} / pers.`}
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
