import React from 'react';
import {
  Flame,
  MapPin,
  Plus,
  User,
  CalendarCheck2,
  Compass,
} from 'lucide-react';
import { useSportly } from '../context/SportlyContext';
import { Avatar } from './Avatar';
import type { ActiveTab } from '../types';

export const Navbar: React.FC = () => {
  const { activeTab, setActiveTab, currentUser, matches, currentUserId } =
    useSportly();

  const myJoinedCount = matches.filter((m) =>
    m.playerIds.includes(currentUserId)
  ).length;

  const desktopLinks: { id: ActiveTab; label: string; icon: React.ReactNode }[] =
    [
      {
        id: 'feed',
        label: 'Meciuri Deschise',
        icon: <CalendarCheck2 className="w-4 h-4" />,
      },
      {
        id: 'map',
        label: 'Hartă Terenuri',
        icon: <Compass className="w-4 h-4" />,
      },
      {
        id: 'profile',
        label: 'Profilul Meu',
        icon: <User className="w-4 h-4" />,
      },
    ];

  return (
    <>
      {/* Sticky Top Header (Desktop & Mobile) - z-50 so Leaflet never overlaps */}
      <header className="sticky top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100/80 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          {/* Brand Logo */}
          <button
            type="button"
            onClick={() => setActiveTab('feed')}
            className="flex items-center gap-2.5 text-left group focus:outline-none min-h-[44px]"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#064E3B] via-emerald-600 to-emerald-500 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <Flame className="w-5 h-5 text-[#84CC16] fill-[#84CC16]" />
            </div>
            <div>
              <div className="flex items-center gap-1 leading-none">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#064E3B]">
                  Sportly
                </span>
                <span className="px-1.5 py-0.5 rounded-md bg-[#84CC16]/25 text-[#064E3B] font-extrabold text-sm sm:text-base tracking-tight border border-[#84CC16]/50">
                  TM
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 mt-0.5 hidden xs:block sm:block">
                Meciuri &amp; Terenuri Timișoara
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 bg-slate-50/90 p-1.5 rounded-2xl border border-slate-200/70">
            {desktopLinks.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-[#ECFDF5] text-[#064E3B] shadow-sm ring-1 ring-emerald-200'
                      : 'text-slate-600 hover:text-[#064E3B] hover:bg-white/70'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.id === 'profile' && myJoinedCount > 0 && (
                    <span className="ml-0.5 px-1.5 py-0.5 text-[11px] font-bold rounded-full bg-emerald-500 text-white leading-none">
                      {myJoinedCount}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5">
            {/* Location Pill on Mobile/Tablet */}
            <button
              type="button"
              onClick={() => setActiveTab('map')}
              className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[44px] md:min-h-0 md:py-1.5 rounded-xl bg-[#ECFDF5] text-[#064E3B] border border-emerald-200/80 text-xs font-semibold hover:bg-emerald-100/70 transition-colors"
              title="Deschide harta terenurilor din Timișoara"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Timișoara</span>
            </button>

            {/* Desktop Create Match CTA */}
            <button
              type="button"
              onClick={() => setActiveTab('create')}
              className={`hidden md:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm ${
                activeTab === 'create'
                  ? 'bg-[#064E3B] text-white ring-2 ring-emerald-300'
                  : 'bg-[#10B981] hover:bg-emerald-600 text-white hover:shadow-md active:scale-[0.98]'
              }`}
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
              <span>Creează Meci</span>
            </button>

            {/* Quick User Avatar Button */}
            <button
              type="button"
              onClick={() => setActiveTab('profile')}
              className={`flex items-center gap-2 p-1 rounded-full transition-all min-h-[44px] min-w-[44px] justify-center ${
                activeTab === 'profile'
                  ? 'ring-2 ring-emerald-500 ring-offset-1'
                  : 'hover:opacity-90'
              }`}
              title={`Profilul meu (${currentUser.name})`}
              aria-label="Profilul meu"
            >
              <Avatar
                name={currentUser.name}
                color={currentUser.avatarColor}
                size="sm"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fixed Bottom Navigation Bar (4 Tabs, z-50, >= 44px touch targets) */}
      <nav
        aria-label="Navigare principală mobil"
        className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(6,78,59,0.06)] px-2 py-1.5"
      >
        <div className="grid grid-cols-4 gap-1 max-w-md mx-auto">
          <button
            type="button"
            onClick={() => setActiveTab('feed')}
            className={`flex flex-col items-center justify-center min-h-[52px] rounded-xl transition-colors ${
              activeTab === 'feed'
                ? 'bg-[#ECFDF5] text-[#064E3B] font-bold'
                : 'text-slate-500 hover:text-slate-800 font-medium'
            }`}
          >
            <CalendarCheck2
              className={`w-5 h-5 ${
                activeTab === 'feed' ? 'text-emerald-600' : ''
              }`}
            />
            <span className="text-[11px] mt-1 leading-none">Meciuri</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('map')}
            className={`flex flex-col items-center justify-center min-h-[52px] rounded-xl transition-colors ${
              activeTab === 'map'
                ? 'bg-[#ECFDF5] text-[#064E3B] font-bold'
                : 'text-slate-500 hover:text-slate-800 font-medium'
            }`}
          >
            <MapPin
              className={`w-5 h-5 ${
                activeTab === 'map' ? 'text-emerald-600' : ''
              }`}
            />
            <span className="text-[11px] mt-1 leading-none">Hartă</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('create')}
            className={`flex flex-col items-center justify-center min-h-[52px] rounded-xl transition-colors ${
              activeTab === 'create'
                ? 'bg-[#064E3B] text-white font-bold shadow-sm'
                : 'bg-emerald-50/80 text-emerald-800 hover:bg-emerald-100 font-semibold'
            }`}
          >
            <Plus
              className={`w-5 h-5 stroke-[2.5] ${
                activeTab === 'create' ? 'text-[#84CC16]' : 'text-emerald-600'
              }`}
            />
            <span className="text-[11px] mt-1 leading-none">+ Creează</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('profile')}
            className={`relative flex flex-col items-center justify-center min-h-[52px] rounded-xl transition-colors ${
              activeTab === 'profile'
                ? 'bg-[#ECFDF5] text-[#064E3B] font-bold'
                : 'text-slate-500 hover:text-slate-800 font-medium'
            }`}
          >
            <div className="relative">
              <User
                className={`w-5 h-5 ${
                  activeTab === 'profile' ? 'text-emerald-600' : ''
                }`}
              />
              {myJoinedCount > 0 && (
                <span className="absolute -top-1 -right-2 w-4 h-4 rounded-full bg-emerald-500 text-white text-[9px] font-bold flex items-center justify-center">
                  {myJoinedCount}
                </span>
              )}
            </div>
            <span className="text-[11px] mt-1 leading-none">Profil</span>
          </button>
        </div>
      </nav>
    </>
  );
};
