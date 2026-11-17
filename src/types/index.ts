export type SportCategory =
  | 'Fotbal Sintetic'
  | 'Baschet'
  | 'Padel'
  | 'Tenis'
  | 'Ping Pong'
  | 'Alergat'
  | 'Bicicletă'
  | 'Volei & Fitness';

export type SkillLevel =
  | 'Relaxat / Începător'
  | 'Intermediar'
  | 'Competitiv';

export type CostFilter = 'Toate' | 'Gratis' | 'Cu plată';

export type VenueCostFilter = 'all' | 'free' | 'paid';

export type AvatarColor =
  | 'emerald'
  | 'teal'
  | 'lime'
  | 'amber'
  | 'sky'
  | 'indigo'
  | 'rose'
  | 'violet';

export type ActiveTab = 'feed' | 'map' | 'create' | 'profile';

export interface PlayerSportSkill {
  sport: SportCategory;
  customLabel?: string;
  level: SkillLevel;
}

export interface PlayerProfile {
  id: string;
  name: string;
  age: number;
  neighborhood: string;
  avatarColor: AvatarColor;
  bio: string;
  preferredSports: PlayerSportSkill[];
  availability: string;
  vibeTag: string;
  matchesPlayedBase: number;
  favoriteSport: string;
}

export interface Venue {
  id: string;
  name: string;
  neighborhood: string;
  address: string;
  lat: number;
  lng: number;
  isFree: boolean;
  hourlyRate: number;
  sports: SportCategory[];
  sportLabels?: string[];
  surface: string;
  hasLighting: boolean;
  lightingNote: string;
  hasParking: boolean;
  parkingNote: string;
  hasLockerRooms: boolean;
  lockerNote: string;
  extraPerks?: string[];
  description: string;
  isCustom?: boolean;
  source?: 'curated' | 'osm' | 'custom';
  osmId?: string;
}

export interface Match {
  id: string;
  sport: SportCategory;
  sportSubLabel?: string;
  skillLevel: SkillLevel;
  title: string;
  venueId: string;
  venueName: string;
  neighborhood: string;
  address: string;
  isFree: boolean;
  totalCost: number;
  dateISO: string;
  time: string;
  displayDayHint?: string;
  totalSpots: number;
  hostId: string;
  playerIds: string[];
  guestFriendsCount: number;
  hostNote: string;
  createdAt: number;
}

export interface CustomPinDraft {
  lat: number;
  lng: number;
  neighborhood: string;
}

export interface CreateMatchInput {
  sport: SportCategory;
  sportSubLabel?: string;
  skillLevel: SkillLevel;
  title: string;
  venueId: string;
  customVenue?: {
    name: string;
    neighborhood: string;
    address: string;
    isFree: boolean;
    lat?: number;
    lng?: number;
  };
  isFree: boolean;
  totalCost: number;
  dateISO: string;
  time: string;
  totalSpots: number;
  alreadyJoinedCount: number;
  hostNote: string;
}

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  variant: 'success' | 'info' | 'warning';
}

export interface SportlyPersistedState {
  version: number;
  currentUserId: string;
  users: Record<string, PlayerProfile>;
  venues: Venue[];
  matches: Match[];
}
