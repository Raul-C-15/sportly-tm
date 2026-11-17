import {
  Trophy,
  Dribbble,
  Layers,
  CircleDot,
  Target,
  Footprints,
  Bike,
  Dumbbell,
  type LucideIcon,
} from 'lucide-react';
import type { AvatarColor, SkillLevel, SportCategory } from '../types';

export const SPORT_CATEGORIES: SportCategory[] = [
  'Fotbal Sintetic',
  'Baschet',
  'Padel',
  'Tenis',
  'Ping Pong',
  'Alergat',
  'Bicicletă',
  'Volei & Fitness',
];

export const SKILL_LEVELS: SkillLevel[] = [
  'Relaxat / Începător',
  'Intermediar',
  'Competitiv',
];

export const NEIGHBORHOOD_COORDS: Record<string, { lat: number; lng: number }> =
  {
    'Complex Studențesc': { lat: 45.7482, lng: 21.2385 },
    'Centru / Cetate': { lat: 45.7537, lng: 21.2257 },
    'Zona Stadion / Podeanu': { lat: 45.7421, lng: 21.2485 },
    'Zona Bega / Parcul Rozelor': { lat: 45.75, lng: 21.2319 },
    'Elisabetin / Doina': { lat: 45.7439, lng: 21.2231 },
    Circumvalațiunii: { lat: 45.7615, lng: 21.2178 },
    'Calea Lipovei': { lat: 45.7745, lng: 21.2425 },
    'Pădurea Verde': { lat: 45.7755, lng: 21.2665 },
    'Calea Girocului': { lat: 45.7315, lng: 21.2345 },
    Soarelui: { lat: 45.7345, lng: 21.2445 },
    'Fabric / Electrica': { lat: 45.7645, lng: 21.2515 },
    'Ghirodei / Plopi': { lat: 45.7565, lng: 21.2615 },
    'Buziașului / Ciarda Roșie': { lat: 45.7315, lng: 21.2615 },
    'Calea Șagului': { lat: 45.7335, lng: 21.2065 },
    'Calea Aradului': { lat: 45.7745, lng: 21.2235 },
    Iosefin: { lat: 45.745, lng: 21.2045 },
    'Mehala / Ronaț': { lat: 45.7638, lng: 21.192 },
    Freidorf: { lat: 45.7295, lng: 21.1785 },
    Dumbrăvița: { lat: 45.7935, lng: 21.2355 },
    'Giroc / Chișoda': { lat: 45.7125, lng: 21.228 },
    Ghiroda: { lat: 45.7635, lng: 21.298 },
  };

export const TIMISOARA_NEIGHBORHOODS: string[] =
  Object.keys(NEIGHBORHOOD_COORDS);

export function haversineMeters(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371000;
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function detectNearestNeighborhood(lat: number, lng: number): string {
  let closest = 'Centru / Cetate';
  let minDist = Infinity;

  for (const [zone, coords] of Object.entries(NEIGHBORHOOD_COORDS)) {
    const dist = haversineMeters(lat, lng, coords.lat, coords.lng);
    if (dist < minDist) {
      minDist = dist;
      closest = zone;
    }
  }
  return closest;
}

export interface SportMeta {
  label: string;
  shortLabel: string;
  icon: LucideIcon;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  iconColor: string;
  defaultSpots: number;
  defaultAlreadyIn: number;
}

export const SPORT_CONFIG: Record<SportCategory, SportMeta> = {
  'Fotbal Sintetic': {
    label: 'Fotbal Sintetic',
    shortLabel: 'Fotbal',
    icon: Trophy,
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-800',
    badgeBorder: 'border-emerald-200',
    iconColor: 'text-emerald-600',
    defaultSpots: 10,
    defaultAlreadyIn: 8,
  },
  Baschet: {
    label: 'Baschet',
    shortLabel: 'Baschet',
    icon: Dribbble,
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-800',
    badgeBorder: 'border-amber-200',
    iconColor: 'text-amber-600',
    defaultSpots: 6,
    defaultAlreadyIn: 4,
  },
  Padel: {
    label: 'Padel',
    shortLabel: 'Padel',
    icon: Layers,
    badgeBg: 'bg-lime-50',
    badgeText: 'text-lime-900',
    badgeBorder: 'border-lime-300',
    iconColor: 'text-lime-600',
    defaultSpots: 4,
    defaultAlreadyIn: 3,
  },
  Tenis: {
    label: 'Tenis',
    shortLabel: 'Tenis',
    icon: CircleDot,
    badgeBg: 'bg-teal-50',
    badgeText: 'text-teal-800',
    badgeBorder: 'border-teal-200',
    iconColor: 'text-teal-600',
    defaultSpots: 4,
    defaultAlreadyIn: 2,
  },
  'Ping Pong': {
    label: 'Ping Pong',
    shortLabel: 'Ping Pong',
    icon: Target,
    badgeBg: 'bg-rose-50',
    badgeText: 'text-rose-800',
    badgeBorder: 'border-rose-200',
    iconColor: 'text-rose-600',
    defaultSpots: 4,
    defaultAlreadyIn: 2,
  },
  Alergat: {
    label: 'Alergat',
    shortLabel: 'Alergat',
    icon: Footprints,
    badgeBg: 'bg-sky-50',
    badgeText: 'text-sky-800',
    badgeBorder: 'border-sky-200',
    iconColor: 'text-sky-600',
    defaultSpots: 10,
    defaultAlreadyIn: 4,
  },
  Bicicletă: {
    label: 'Bicicletă',
    shortLabel: 'Bicicletă',
    icon: Bike,
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-800',
    badgeBorder: 'border-indigo-200',
    iconColor: 'text-indigo-600',
    defaultSpots: 8,
    defaultAlreadyIn: 3,
  },
  'Volei & Fitness': {
    label: 'Volei & Fitness',
    shortLabel: 'Volei & Fit',
    icon: Dumbbell,
    badgeBg: 'bg-violet-50',
    badgeText: 'text-violet-800',
    badgeBorder: 'border-violet-200',
    iconColor: 'text-violet-600',
    defaultSpots: 8,
    defaultAlreadyIn: 4,
  },
};

export function getSportIcon(
  sport: SportCategory,
  _subLabel?: string
): LucideIcon {
  return (SPORT_CONFIG[sport] ?? SPORT_CONFIG['Fotbal Sintetic']).icon;
}

/**
 * Compact 16x16 inline SVG glyph for 34x34 Leaflet pins so every sport category
 * is visually distinct on the Timisoara map with zero external image assets.
 */
export function getPinSvgGlyph(
  sport: SportCategory | undefined,
  strokeColor: string
): string {
  switch (sport) {
    case 'Fotbal Sintetic':
      return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polygon points="12 8 15.5 10.5 14 14.5 10 14.5 8.5 10.5"/></svg>`;
    case 'Baschet':
      return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2.3" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3v18M6.5 5.5c3 3.5 3 9.5 0 13M17.5 5.5c-3 3.5-3 9.5 0 13"/></svg>`;
    case 'Padel':
      return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="11" cy="10" rx="6.5" ry="7"/><path d="M15.8 15.2 20 20"/><circle cx="9.5" cy="9" r="0.8" fill="${strokeColor}"/><circle cx="12.5" cy="9" r="0.8" fill="${strokeColor}"/><circle cx="11" cy="11.8" r="0.8" fill="${strokeColor}"/></svg>`;
    case 'Tenis':
      return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2.3" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.2 15.2 20.5 20.5"/></svg>`;
    case 'Ping Pong':
      return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="6.5"/><path d="M14.8 14.8 19.5 19.5"/><circle cx="18.5" cy="6.5" r="2"/></svg>`;
    case 'Alergat':
      return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="14.5" cy="5.5" r="2"/><path d="M7 21l3-6 2.5 2v4M9.5 11l3.5-2 3 2.5 2.5-.5M6 12.5l3.5-1.5 2.5 4"/></svg>`;
    case 'Bicicletă':
      return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="6.5" cy="16.5" r="3.5"/><circle cx="17.5" cy="16.5" r="3.5"/><path d="M6.5 16.5 10.5 9h4l3 7.5M10.5 9l2.5 7.5"/></svg>`;
    case 'Volei & Fitness':
      return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11"/></svg>`;
    default:
      return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2.4" stroke-linecap="round"><circle cx="12" cy="12" r="5"/></svg>`;
  }
}

export const SKILL_STYLE: Record<
  SkillLevel,
  { bg: string; text: string; border: string; dot: string; description: string }
> = {
  'Relaxat / Începător': {
    bg: 'bg-[#ECFDF5]',
    text: 'text-[#064E3B]',
    border: 'border-emerald-200',
    dot: 'bg-emerald-500',
    description: 'Joc amical de mișcare, zero presiune, toți sunt bineveniți.',
  },
  Intermediar: {
    bg: 'bg-sky-50',
    text: 'text-sky-900',
    border: 'border-sky-200',
    dot: 'bg-sky-500',
    description: 'Ritm constant, cunoști regulile și faci mișcare regulat.',
  },
  Competitiv: {
    bg: 'bg-amber-50',
    text: 'text-amber-900',
    border: 'border-amber-200',
    dot: 'bg-amber-500',
    description: 'Intensitate ridicată, ritm alert și experiență pe teren.',
  },
};

export const AVATAR_PALETTE: Record<
  AvatarColor,
  { bg: string; text: string; ring: string; label: string }
> = {
  emerald: {
    bg: 'bg-emerald-600',
    text: 'text-white',
    ring: 'ring-emerald-200',
    label: 'Smarald',
  },
  teal: {
    bg: 'bg-teal-600',
    text: 'text-white',
    ring: 'ring-teal-200',
    label: 'Turcoaz',
  },
  lime: {
    bg: 'bg-lime-600',
    text: 'text-white',
    ring: 'ring-lime-200',
    label: 'Lime Sport',
  },
  amber: {
    bg: 'bg-amber-500',
    text: 'text-white',
    ring: 'ring-amber-200',
    label: 'Chihlimbar',
  },
  sky: {
    bg: 'bg-sky-600',
    text: 'text-white',
    ring: 'ring-sky-200',
    label: 'Azuriu',
  },
  indigo: {
    bg: 'bg-indigo-600',
    text: 'text-white',
    ring: 'ring-indigo-200',
    label: 'Indigo',
  },
  rose: {
    bg: 'bg-rose-600',
    text: 'text-white',
    ring: 'ring-rose-200',
    label: 'Coral',
  },
  violet: {
    bg: 'bg-violet-600',
    text: 'text-white',
    ring: 'ring-violet-200',
    label: 'Violet',
  },
};

export function getInitials(fullName: string): string {
  const cleaned = fullName.trim();
  if (!cleaned) return 'TM';
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function formatRON(amount: number): string {
  const rounded = Math.round(amount * 10) / 10;
  if (Number.isInteger(rounded)) {
    return `${rounded} RON`;
  }
  return `${rounded.toFixed(1).replace('.', ',')} RON`;
}

export function calculateCostPerPlayer(
  totalCost: number,
  playerCount: number
): number {
  if (totalCost <= 0 || playerCount <= 0) return 0;
  return Math.round((totalCost / playerCount) * 10) / 10;
}

const RO_WEEKDAYS = [
  'Duminică',
  'Luni',
  'Marți',
  'Miercuri',
  'Joi',
  'Vineri',
  'Sâmbătă',
];

const RO_MONTHS_SHORT = [
  'Ian',
  'Feb',
  'Mar',
  'Apr',
  'Mai',
  'Iun',
  'Iul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export function toLocalDateISO(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getRelativeOffsetISO(daysFromToday: number): string {
  const d = new Date();
  d.setHours(12, 0, 0, 0);
  d.setDate(d.getDate() + daysFromToday);
  return toLocalDateISO(d);
}

export function formatMatchDateTime(
  dateISO: string,
  time: string,
  displayDayHint?: string
): string {
  const todayISO = getRelativeOffsetISO(0);
  const tomorrowISO = getRelativeOffsetISO(1);

  if (dateISO === todayISO) {
    return `Azi, ${time}`;
  }
  if (dateISO === tomorrowISO) {
    return `Mâine, ${time}`;
  }
  if (displayDayHint) {
    return `${displayDayHint}, ${time}`;
  }

  const parts = dateISO.split('-').map(Number);
  if (parts.length === 3 && !parts.some(Number.isNaN)) {
    const dateObj = new Date(parts[0], parts[1] - 1, parts[2], 12, 0, 0);
    const weekday = RO_WEEKDAYS[dateObj.getDay()];
    const dayNum = dateObj.getDate();
    const monthShort = RO_MONTHS_SHORT[dateObj.getMonth()];
    return `${weekday}, ${dayNum} ${monthShort} • ${time}`;
  }

  return `${dateISO}, ${time}`;
}
