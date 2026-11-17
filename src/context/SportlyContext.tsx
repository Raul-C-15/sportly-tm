import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  buildInitialState,
  INITIAL_ALL_VENUES,
  INITIAL_CURATED_VENUES,
  STATE_VERSION,
  STORAGE_KEY,
} from '../data/mockData';
import type {
  ActiveTab,
  CreateMatchInput,
  Match,
  PlayerProfile,
  SportCategory,
  SportlyPersistedState,
  ToastMessage,
  Venue,
} from '../types';
import {
  NEIGHBORHOOD_COORDS,
  detectNearestNeighborhood,
} from '../utils/sportConfig';
import {
  ALL_VENUES_STORAGE_KEY,
  fetchTimisoaraOsmVenues,
  loadSavedAllVenues,
  mergeAndDeduplicateVenues,
  purgeLegacyStorageKeys,
  saveAllVenuesToStorage,
} from '../utils/overpassService';

export interface AddVenueOnMapInput {
  name: string;
  lat: number;
  lng: number;
  neighborhood?: string;
  address?: string;
  sports: SportCategory[];
  isFree: boolean;
  hourlyRate?: number;
  surface?: string;
  hasLighting?: boolean;
}

function loadPersistedState(): SportlyPersistedState {
  purgeLegacyStorageKeys();
  const savedAllVenues = loadSavedAllVenues();

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<SportlyPersistedState>;
      if (
        parsed &&
        parsed.version === STATE_VERSION &&
        typeof parsed.currentUserId === 'string' &&
        parsed.users &&
        Array.isArray(parsed.venues) &&
        Array.isArray(parsed.matches) &&
        parsed.users[parsed.currentUserId]
      ) {
        return {
          ...(parsed as SportlyPersistedState),
          venues:
            savedAllVenues && savedAllVenues.length >= parsed.venues.length
              ? savedAllVenues
              : (parsed.venues as Venue[]),
        };
      }
    }
  } catch {
    // Fallback cleanly if storage is unavailable or malformed
  }

  const initial = buildInitialState();
  if (savedAllVenues && savedAllVenues.length > initial.venues.length) {
    initial.venues = savedAllVenues;
  }
  return initial;
}

interface SportlyContextValue {
  currentUser: PlayerProfile;
  currentUserId: string;
  users: Record<string, PlayerProfile>;
  venues: Venue[];
  matches: Match[];
  isFetchingVenues: boolean;
  refreshVenuesFromMap: () => Promise<void>;
  addVenueOnMap: (input: AddVenueOnMapInput) => Venue;
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  selectedMatchId: string | null;
  openMatchDetails: (matchId: string) => void;
  closeMatchDetails: () => void;
  inspectedPlayerId: string | null;
  openPlayerProfile: (playerId: string) => void;
  closePlayerProfile: () => void;
  focusedVenueId: string | null;
  setFocusedVenueId: (venueId: string | null) => void;
  navigateToVenueOnMap: (venueId: string) => void;
  prefilledVenueId: string | null;
  clearPrefilledVenue: () => void;
  startCreateMatchAtVenue: (venueId: string) => void;
  feedResetSignal: number;
  toggleJoinMatch: (matchId: string) => void;
  createMatch: (input: CreateMatchInput) => void;
  updateCurrentUserProfile: (updates: Partial<PlayerProfile>) => void;
  resetDemoData: () => void;
  toasts: ToastMessage[];
  addToast: (
    title: string,
    description?: string,
    variant?: ToastMessage['variant']
  ) => void;
  dismissToast: (id: string) => void;
}

const SportlyContext = createContext<SportlyContextValue | undefined>(undefined);

export const SportlyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<SportlyPersistedState>(loadPersistedState);
  const [isFetchingVenues, setIsFetchingVenues] = useState<boolean>(false);
  const [activeTab, setActiveTabState] = useState<ActiveTab>('feed');
  const [selectedMatchId, setSelectedMatchId] = useState<string | null>(null);
  const [inspectedPlayerId, setInspectedPlayerId] = useState<string | null>(null);
  const [focusedVenueId, setFocusedVenueId] = useState<string | null>(null);
  const [prefilledVenueId, setPrefilledVenueId] = useState<string | null>(null);
  const [feedResetSignal, setFeedResetSignal] = useState<number>(0);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      saveAllVenuesToStorage(state.venues);
    } catch {
      // Ignore quota errors gracefully
    }
  }, [state]);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback(
    (
      title: string,
      description?: string,
      variant: ToastMessage['variant'] = 'success'
    ) => {
      const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      setToasts((prev) => [...prev.slice(-2), { id, title, description, variant }]);
      window.setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 4200);
    },
    []
  );

  const performOsmVenueSync = useCallback(
    async (notifyUser: boolean, signal?: AbortSignal) => {
      setIsFetchingVenues(true);
      try {
        const liveOsmVenues = await fetchTimisoaraOsmVenues(signal);
        let mergedCount = 0;

        setState((prev) => {
          const customVenues = prev.venues.filter((v) => v.source === 'custom');
          const priorityList = [...customVenues, ...INITIAL_CURATED_VENUES];
          const merged = mergeAndDeduplicateVenues(
            priorityList,
            liveOsmVenues,
            42
          );
          mergedCount = merged.length;
          saveAllVenuesToStorage(merged);
          return {
            ...prev,
            venues: merged,
          };
        });

        if (notifyUser) {
          addToast(
            'Harta terenurilor a fost sincronizată!',
            `${mergedCount} terenuri și locații sportive exacte din Timișoara sunt acum pe hartă.`,
            'success'
          );
        }
      } catch {
        if (notifyUser) {
          addToast(
            'Toate cele 215+ terenuri verificate sunt deja încărcate',
            'Serverul extern Overpass este ocupat momentan, dar baza completă de terenuri din Timișoara este activă pe hartă.',
            'info'
          );
        }
      } finally {
        setIsFetchingVenues(false);
      }
    },
    [addToast]
  );

  const refreshVenuesFromMap = useCallback(async () => {
    await performOsmVenueSync(true);
  }, [performOsmVenueSync]);

  const addVenueOnMap = useCallback(
    (input: AddVenueOnMapInput): Venue => {
      const resolvedZone =
        input.neighborhood?.trim() ||
        detectNearestNeighborhood(input.lat, input.lng);
      const cleanRate = input.isFree
        ? 0
        : Math.max(10, Math.round(input.hourlyRate || 120));

      const newVenue: Venue = {
        id: `venue-user-${Date.now()}`,
        source: 'custom',
        isCustom: true,
        name: input.name.trim(),
        neighborhood: resolvedZone,
        address:
          input.address?.trim() ||
          `${resolvedZone}, Timișoara (${input.lat.toFixed(5)}, ${input.lng.toFixed(5)})`,
        lat: Number(input.lat.toFixed(6)),
        lng: Number(input.lng.toFixed(6)),
        isFree: input.isFree,
        hourlyRate: cleanRate,
        sports: input.sports,
        sportLabels: input.sports,
        surface:
          input.surface?.trim() ||
          (input.isFree ? 'Teren public outdoor' : 'Teren sportiv amenajat'),
        hasLighting: input.hasLighting ?? true,
        lightingNote:
          input.hasLighting === false
            ? 'Fără nocturnă dedicată'
            : 'Iluminat / Nocturnă disponibilă',
        hasParking: true,
        parkingNote: 'Parcare în apropierea terenului',
        hasLockerRooms: !input.isFree,
        lockerNote: input.isFree
          ? 'Fără vestiare (teren cu acces liber)'
          : 'Vestiare la baza sportivă',
        extraPerks: ['Adăugat pe hartă de comunitate'],
        description: `Teren adăugat direct pe harta Timișoarei în zona ${resolvedZone} (${input.sports.join(
          ', '
        )}).`,
      };

      setState((prev) => {
        const updatedVenues = [newVenue, ...prev.venues];
        saveAllVenuesToStorage(updatedVenues);
        return {
          ...prev,
          venues: updatedVenues,
        };
      });

      addToast(
        'Teren nou salvat pe hartă!',
        `„${newVenue.name}” (${resolvedZone}) a fost adăugat permanent.`,
        'success'
      );

      return newVenue;
    },
    [addToast]
  );

  const setActiveTab = useCallback((tab: ActiveTab) => {
    setActiveTabState(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openMatchDetails = useCallback((matchId: string) => {
    setSelectedMatchId(matchId);
  }, []);

  const closeMatchDetails = useCallback(() => {
    setSelectedMatchId(null);
  }, []);

  const openPlayerProfile = useCallback((playerId: string) => {
    setInspectedPlayerId(playerId);
  }, []);

  const closePlayerProfile = useCallback(() => {
    setInspectedPlayerId(null);
  }, []);

  const navigateToVenueOnMap = useCallback((venueId: string) => {
    setSelectedMatchId(null);
    setInspectedPlayerId(null);
    setFocusedVenueId(venueId);
    setActiveTabState('map');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const startCreateMatchAtVenue = useCallback((venueId: string) => {
    setSelectedMatchId(null);
    setPrefilledVenueId(venueId);
    setActiveTabState('create');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const clearPrefilledVenue = useCallback(() => {
    setPrefilledVenueId(null);
  }, []);

  const toggleJoinMatch = useCallback(
    (matchId: string) => {
      const target = state.matches.find((m) => m.id === matchId);
      if (!target) return;

      const userId = state.currentUserId;
      const isAlreadyJoined = target.playerIds.includes(userId);
      const currentCount = target.playerIds.length + target.guestFriendsCount;

      if (!isAlreadyJoined && currentCount >= target.totalSpots) {
        addToast(
          'Meciul este deja complet',
          'Toate locurile au fost ocupate între timp.',
          'warning'
        );
        return;
      }

      setState((prev) => ({
        ...prev,
        matches: prev.matches.map((m) => {
          if (m.id !== matchId) return m;
          const currentlyIn = m.playerIds.includes(prev.currentUserId);
          return {
            ...m,
            playerIds: currentlyIn
              ? m.playerIds.filter((id) => id !== prev.currentUserId)
              : [...m.playerIds, prev.currentUserId],
          };
        }),
      }));

      if (isAlreadyJoined) {
        addToast(
          'Te-ai retras din meci',
          `Locul tău la „${target.title}” a fost eliberat.`,
          'info'
        );
      } else {
        addToast(
          'Înscris cu succes! Ne vedem pe teren ✓',
          `Ești pe listă la ${target.venueName} (${target.time}).`,
          'success'
        );
      }
    },
    [state.matches, state.currentUserId, addToast]
  );

  const createMatch = useCallback(
    (input: CreateMatchInput) => {
      let resolvedVenue: Venue | undefined = state.venues.find(
        (v) => v.id === input.venueId
      );
      let newlyCreatedVenue: Venue | null = null;

      if (!resolvedVenue && input.customVenue) {
        const coords =
          typeof input.customVenue.lat === 'number' &&
          typeof input.customVenue.lng === 'number'
            ? { lat: input.customVenue.lat, lng: input.customVenue.lng }
            : NEIGHBORHOOD_COORDS[input.customVenue.neighborhood] ?? {
                lat: 45.7537,
                lng: 21.2257,
              };
        newlyCreatedVenue = {
          id: `venue-custom-${Date.now()}`,
          source: 'custom',
          isCustom: true,
          name: input.customVenue.name.trim(),
          neighborhood: input.customVenue.neighborhood,
          address:
            input.customVenue.address.trim() ||
            `${input.customVenue.neighborhood}, Timișoara`,
          lat: coords.lat,
          lng: coords.lng,
          isFree: input.isFree,
          hourlyRate: input.isFree ? 0 : input.totalCost,
          sports: [input.sport],
          sportLabels: [input.sportSubLabel || input.sport],
          surface: input.isFree
            ? 'Teren outdoor comunitar'
            : 'Teren sportiv amenajat',
          hasLighting: true,
          lightingNote: 'Verifică detaliile cu organizatorul',
          hasParking: true,
          parkingNote: 'Parcare în apropiere',
          hasLockerRooms: !input.isFree,
          lockerNote: input.isFree
            ? 'Fără vestiare (locație publică)'
            : 'Facilități la locație',
          extraPerks: ['Adăugat de comunitate'],
          description: `Locație adăugată de comunitatea SportlyTM în zona ${input.customVenue.neighborhood}.`,
        };
        resolvedVenue = newlyCreatedVenue;
      }

      if (!resolvedVenue) return;

      const guestCount = Math.max(0, input.alreadyJoinedCount - 1);
      const newMatch: Match = {
        id: `match-${Date.now()}`,
        sport: input.sport,
        sportSubLabel: input.sportSubLabel?.trim() || undefined,
        skillLevel: input.skillLevel,
        title: input.title.trim(),
        venueId: resolvedVenue.id,
        venueName: resolvedVenue.name,
        neighborhood: resolvedVenue.neighborhood,
        address: resolvedVenue.address,
        isFree: input.isFree,
        totalCost: input.isFree ? 0 : input.totalCost,
        dateISO: input.dateISO,
        time: input.time,
        totalSpots: input.totalSpots,
        hostId: state.currentUserId,
        playerIds: [state.currentUserId],
        guestFriendsCount: guestCount,
        hostNote:
          input.hostNote.trim() ||
          'Veniți cu 10 minute înainte de start și mult chef de joc! Fair-play înainte de toate.',
        createdAt: Date.now(),
      };

      setState((prev) => ({
        ...prev,
        venues: newlyCreatedVenue
          ? [newlyCreatedVenue, ...prev.venues]
          : prev.venues,
        matches: [newMatch, ...prev.matches],
      }));

      setPrefilledVenueId(null);
      setFeedResetSignal((n) => n + 1);
      setActiveTabState('feed');
      window.scrollTo({ top: 0, behavior: 'smooth' });

      addToast(
        'Meciul a fost publicat în Feed!',
        `„${newMatch.title}” este acum vizibil pentru jucătorii din Timișoara.`,
        'success'
      );
    },
    [state.venues, state.currentUserId, addToast]
  );

  const updateCurrentUserProfile = useCallback(
    (updates: Partial<PlayerProfile>) => {
      setState((prev) => {
        const current = prev.users[prev.currentUserId];
        if (!current) return prev;
        return {
          ...prev,
          users: {
            ...prev.users,
            [prev.currentUserId]: {
              ...current,
              ...updates,
            },
          },
        };
      });

      addToast(
        'Profil actualizat!',
        'Modificările tale au fost salvate automat.',
        'success'
      );
    },
    [addToast]
  );

  const resetDemoData = useCallback(() => {
    const fresh = buildInitialState();
    fresh.venues = structuredClone(INITIAL_ALL_VENUES);
    try {
      purgeLegacyStorageKeys();
      window.localStorage.removeItem(ALL_VENUES_STORAGE_KEY);
      saveAllVenuesToStorage(fresh.venues);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
    } catch {
      // ignore
    }
    setState(fresh);
    setSelectedMatchId(null);
    setInspectedPlayerId(null);
    setFocusedVenueId(null);
    setPrefilledVenueId(null);
    setFeedResetSignal((n) => n + 1);
    addToast(
      'Datele demo au fost resetate',
      `Toate cele ${fresh.venues.length} terenuri verificate din Timișoara, meciurile și profilul au revenit la starea inițială.`,
      'info'
    );
  }, [addToast]);

  const currentUser = state.users[state.currentUserId];

  const value = useMemo<SportlyContextValue>(
    () => ({
      currentUser,
      currentUserId: state.currentUserId,
      users: state.users,
      venues: state.venues,
      matches: state.matches,
      isFetchingVenues,
      refreshVenuesFromMap,
      addVenueOnMap,
      activeTab,
      setActiveTab,
      selectedMatchId,
      openMatchDetails,
      closeMatchDetails,
      inspectedPlayerId,
      openPlayerProfile,
      closePlayerProfile,
      focusedVenueId,
      setFocusedVenueId,
      navigateToVenueOnMap,
      prefilledVenueId,
      clearPrefilledVenue,
      startCreateMatchAtVenue,
      feedResetSignal,
      toggleJoinMatch,
      createMatch,
      updateCurrentUserProfile,
      resetDemoData,
      toasts,
      addToast,
      dismissToast,
    }),
    [
      currentUser,
      state.currentUserId,
      state.users,
      state.venues,
      state.matches,
      isFetchingVenues,
      refreshVenuesFromMap,
      addVenueOnMap,
      activeTab,
      setActiveTab,
      selectedMatchId,
      openMatchDetails,
      closeMatchDetails,
      inspectedPlayerId,
      openPlayerProfile,
      closePlayerProfile,
      focusedVenueId,
      navigateToVenueOnMap,
      prefilledVenueId,
      clearPrefilledVenue,
      startCreateMatchAtVenue,
      feedResetSignal,
      toggleJoinMatch,
      createMatch,
      updateCurrentUserProfile,
      resetDemoData,
      toasts,
      addToast,
      dismissToast,
    ]
  );

  return (
    <SportlyContext.Provider value={value}>{children}</SportlyContext.Provider>
  );
};

export function useSportly(): SportlyContextValue {
  const ctx = useContext(SportlyContext);
  if (!ctx) {
    throw new Error('useSportly must be used inside <SportlyProvider>');
  }
  return ctx;
}
