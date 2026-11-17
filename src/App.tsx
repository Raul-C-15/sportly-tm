import React from 'react';
import { Flame } from 'lucide-react';
import { SportlyProvider, useSportly } from './context/SportlyContext';
import { Navbar } from './components/Navbar';
import { ToastContainer } from './components/ToastContainer';
import { FeedView } from './components/FeedView';
import { MapView } from './components/MapView';
import { CreateMatchView } from './components/CreateMatchView';
import { ProfileView } from './components/ProfileView';
import { MatchDetailsModal } from './components/MatchDetailsModal';
import { PlayerProfileModal } from './components/PlayerProfileModal';

const SportlyAppShell: React.FC = () => {
  const { activeTab, setActiveTab } = useSportly();

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 overflow-x-hidden">
      <Navbar />
      <ToastContainer />

      <main className="flex-1">
        {activeTab === 'feed' && <FeedView />}
        {activeTab === 'map' && <MapView />}
        {activeTab === 'create' && <CreateMatchView />}
        {activeTab === 'profile' && <ProfileView />}
      </main>

      {/* Desktop Subtle Footer */}
      <footer className="hidden md:block border-t border-slate-200/80 bg-white py-6 px-6 mt-auto">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-[#064E3B] inline-flex items-center justify-center">
              <Flame className="w-3.5 h-3.5 text-[#84CC16] fill-[#84CC16]" />
            </span>
            <span className="font-extrabold text-[#064E3B]">SportlyTM</span>
            <span>— Meciuri &amp; Terenuri Timișoara</span>
          </div>

          <div className="flex items-center gap-5 font-semibold">
            <button
              type="button"
              onClick={() => setActiveTab('feed')}
              className="hover:text-[#064E3B] transition-colors"
            >
              Meciuri Deschise
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('map')}
              className="hover:text-[#064E3B] transition-colors"
            >
              Hartă Terenuri
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('create')}
              className="hover:text-[#064E3B] transition-colors"
            >
              Creează Meci
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('profile')}
              className="hover:text-[#064E3B] transition-colors"
            >
              Profilul Meu
            </button>
          </div>
        </div>
      </footer>

      {/* Global Layered Modals (z-50 and z-[55]) */}
      <MatchDetailsModal />
      <PlayerProfileModal />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <SportlyProvider>
      <SportlyAppShell />
    </SportlyProvider>
  );
};

export default App;
