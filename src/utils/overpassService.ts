import type { SportCategory, Venue } from '../types';
import {
  detectNearestNeighborhood,
  haversineMeters,
} from './sportConfig';

export const ALL_VENUES_STORAGE_KEY = 'sportlytm_all_venues_v4';

const LEGACY_KEYS = [
  'sportlytm_state_v1',
  'sportlytm_state_v2',
  'sportlytm_state_v3',
  'sportlytm_all_venues_v1',
  'sportlytm_all_venues_v2',
  'sportlytm_all_venues_v3',
  'sportlytm_osm_venues_v1',
];

export function purgeLegacyStorageKeys(): void {
  try {
    for (const key of LEGACY_KEYS) {
      window.localStorage.removeItem(key);
    }
  } catch {
    // Ignore storage errors gracefully
  }
}

const OVERPASS_MIRRORS = [
  'https://overpass-api.de/api/interpreter',
  'https://overpass.private.coffee/api/interpreter',
  'https://overpass.kumi.systems/api/interpreter',
];

// Fast B-tree indexed exact tag lookups (avoids slow regex full-scans & HTTP 504 timeouts)
export const TIMISOARA_OVERPASS_QUERY =
  '[out:json][timeout:18];(' +
  'nwr["leisure"="pitch"](45.695,21.145,45.820,21.315);' +
  'nwr["leisure"="track"](45.695,21.145,45.820,21.315);' +
  'nwr["leisure"="fitness_station"](45.695,21.145,45.820,21.315);' +
  'nwr["leisure"="sports_centre"](45.695,21.145,45.820,21.315);' +
  'nwr["leisure"="stadium"](45.695,21.145,45.820,21.315);' +
  'nwr["sport"="table_tennis"](45.695,21.145,45.820,21.315);' +
  'nwr["sport"="padel"](45.695,21.145,45.820,21.315);' +
  ');out center;';

interface OverpassElement {
  type: 'node' | 'way' | 'relation';
  id: number;
  lat?: number;
  lon?: number;
  center?: {
    lat: number;
    lon: number;
  };
  tags?: Record<string, string>;
}

interface OverpassResponse {
  elements?: OverpassElement[];
}

const SKIP_OSM_IDS = new Set([
  'way/24483695', // Demolished Stadionul Dan Păltinișanu
  'way/428867777', // Demolished Stadionul Dan Păltinișanu track
  'way/179460395', // Sub-polygon inside Ștrandul UMT / Amazonia waterpark
]);

const EXCLUDED_SPORTS = new Set([
  'chess',
  'billiards',
  'snooker',
  'darts',
  'swimming',
  'diving',
  'karting',
  'motocross',
  'motor',
  'shooting',
  'archery',
  'equestrian',
  'horse_racing',
  'bowling',
  'laser_tag',
  'paintball',
  'climbing',
  'kickboxing',
  'martial_arts',
  'karate',
  'judo',
  'boxing',
  'taekwondo',
  'kung_fu',
  'rugby',
  'rugby_league',
  'skateboard',
]);

function isExcludedName(text: string): boolean {
  const lower = text.toLowerCase();
  return (
    lower.includes('paintball') ||
    lower.includes('înot') ||
    lower.includes('strand') ||
    lower.includes('ștrand') ||
    lower.includes('aquasport') ||
    lower.includes('player pool') ||
    lower.includes('kung fu') ||
    lower.includes('knockdown') ||
    lower.includes('mma sport')
  );
}

function mapOsmTagsToSports(
  tags: Record<string, string>,
  inheritedName = ''
): {
  sports: SportCategory[];
  isVolleyballSpecific: boolean;
} {
  const found = new Set<SportCategory>();
  let isVolleyballSpecific = false;

  const rawSport = (tags.sport || '').toLowerCase();
  const leisure = (tags.leisure || '').toLowerCase();
  const nameLower = `${tags.name || ''} ${inheritedName}`.toLowerCase();

  if (isExcludedName(nameLower)) {
    return { sports: [], isVolleyballSpecific: false };
  }

  const tokens = rawSport
    .split(/[;,/]+/)
    .map((t) => t.trim())
    .filter(Boolean);

  if (tokens.length > 0 && tokens.every((tok) => EXCLUDED_SPORTS.has(tok))) {
    return { sports: [], isVolleyballSpecific: false };
  }

  for (const tok of tokens) {
    if (
      tok === 'soccer' ||
      tok === 'football' ||
      tok === 'futsal' ||
      tok === 'five-a-side' ||
      tok === 'mini-soccer'
    ) {
      found.add('Fotbal Sintetic');
    } else if (
      tok === 'basketball' ||
      tok === 'streetball' ||
      tok === '3x3'
    ) {
      found.add('Baschet');
    } else if (tok === 'padel') {
      found.add('Padel');
    } else if (tok === 'tennis') {
      found.add('Tenis');
    } else if (tok === 'labtenis') {
      found.add('Volei & Fitness');
      found.add('Fotbal Sintetic');
    } else if (tok === 'table_tennis' || tok === 'ping_pong') {
      found.add('Ping Pong');
    } else if (
      tok === 'running' ||
      tok === 'athletics' ||
      tok === 'jogging'
    ) {
      found.add('Alergat');
    } else if (tok === 'cycling' || tok === 'bicycle' || tok === 'mtb') {
      found.add('Bicicletă');
    } else if (
      tok === 'volleyball' ||
      tok === 'beachvolleyball' ||
      tok === 'fitness' ||
      tok === 'calisthenics' ||
      tok === 'street_workout' ||
      tok === 'workout' ||
      tok === 'gymnastics' ||
      tok === 'exercise' ||
      tok === 'multi' ||
      tok === 'handball'
    ) {
      if (tok.includes('volley')) {
        isVolleyballSpecific = true;
      }
      if (tok === 'handball' || tok === 'multi') {
        found.add('Fotbal Sintetic');
        found.add('Baschet');
      } else {
        found.add('Volei & Fitness');
      }
    }
  }

  if (leisure === 'fitness_station' || leisure === 'fitness_centre') {
    found.add('Volei & Fitness');
  } else if (leisure === 'track' && !found.has('Bicicletă')) {
    found.add('Alergat');
  } else if (found.size === 0 && leisure === 'pitch') {
    if (nameLower.includes('padel')) found.add('Padel');
    else if (nameLower.includes('tenis') || nameLower.includes('tennis')) {
      found.add('Tenis');
    } else if (nameLower.includes('baschet')) {
      found.add('Baschet');
    } else {
      found.add('Fotbal Sintetic');
      found.add('Baschet');
    }
  } else if (
    found.size === 0 &&
    (leisure === 'sports_centre' ||
      leisure === 'stadium' ||
      leisure === 'sports_hall')
  ) {
    if (nameLower.includes('padel')) found.add('Padel');
    if (nameLower.includes('tenis') || nameLower.includes('tennis')) {
      found.add('Tenis');
    }
    if (nameLower.includes('fotbal') || nameLower.includes('stadion')) {
      found.add('Fotbal Sintetic');
    }
    if (
      nameLower.includes('baschet') ||
      nameLower.includes('olimpia') ||
      nameLower.includes('polivalent')
    ) {
      found.add('Baschet');
      found.add('Volei & Fitness');
    }
    if (found.size === 0) {
      found.add('Volei & Fitness');
    }
  }

  return { sports: Array.from(found), isVolleyballSpecific };
}

function detectIsPaidVenue(
  tags: Record<string, string>,
  sports: SportCategory[],
  inheritedName = ''
): boolean {
  const access = (tags.access || '').toLowerCase();
  const fee = (tags.fee || '').toLowerCase();
  const leisure = (tags.leisure || '').toLowerCase();
  const name = `${tags.name || ''} ${tags.operator || ''} ${inheritedName}`.toLowerCase();

  if (sports.includes('Padel')) return true;
  if (sports[0] === 'Ping Pong' && leisure === 'pitch') return false;
  if (leisure === 'fitness_station') return false;

  if (
    fee === 'no' ||
    access === 'public' ||
    access === 'permissive' ||
    access === 'yes'
  ) {
    if (leisure !== 'sports_centre' && leisure !== 'fitness_centre') {
      return false;
    }
  }

  if (
    fee === 'yes' ||
    access === 'private' ||
    access === 'customers' ||
    access === 'members' ||
    leisure === 'fitness_centre' ||
    Boolean(tags.club)
  ) {
    return true;
  }

  const paidKeywords = [
    'club',
    'arena',
    'baza sportiv',
    'politehnica',
    'banusport',
    'berlin sport',
    'player sport',
    'dyadora',
    'millenium',
    'gym',
    'fitness club',
    'smartfit',
    'iguana',
    'diesel fitness',
    'hercules',
    'stpt',
    'textila',
  ];
  if (paidKeywords.some((kw) => name.includes(kw))) {
    if (name.includes('vasile deheleanu')) return false;
    return true;
  }

  if (sports.length === 1 && sports[0] === 'Tenis') {
    return true;
  }

  if (leisure === 'sports_centre' || leisure === 'sports_hall') {
    return true;
  }

  return false;
}

function estimateHourlyRate(sport: SportCategory): number {
  switch (sport) {
    case 'Fotbal Sintetic':
      return 170;
    case 'Padel':
      return 140;
    case 'Tenis':
      return 85;
    case 'Baschet':
      return 110;
    case 'Ping Pong':
      return 40;
    case 'Volei & Fitness':
      return 50;
    default:
      return 80;
  }
}

function generateSmartRomanianName(
  tags: Record<string, string>,
  sports: SportCategory[],
  isFree: boolean,
  isVolleyballSpecific: boolean,
  neighborhood: string,
  parentName = ''
): string {
  const ownName = (tags.name || tags['name:ro'] || '').trim();
  const genericNames = new Set([
    'teren de sport',
    'teren fotbal',
    'teren tenis',
    'teren minifotbal',
    'pistă alergare',
    'sala de sport',
    'sala sport',
  ]);
  const primary = sports[0];

  if (ownName && !genericNames.has(ownName.toLowerCase())) {
    return ownName;
  }

  if (parentName && !genericNames.has(parentName.toLowerCase())) {
    const sportSuffix =
      primary === 'Tenis'
        ? 'Teren Tenis'
        : primary === 'Fotbal Sintetic'
        ? 'Teren Fotbal'
        : primary === 'Baschet'
        ? 'Teren Baschet'
        : primary === 'Ping Pong'
        ? 'Ping Pong'
        : primary === 'Alergat'
        ? 'Pistă Alergare'
        : 'Sport & Fitness';
    if (
      parentName
        .toLowerCase()
        .includes(sportSuffix.split(' ')[1].toLowerCase())
    ) {
      return parentName;
    }
    return `${parentName} – ${sportSuffix}`;
  }

  const shortZone = neighborhood.split('/')[0].trim();

  if (
    sports.length >= 2 &&
    sports.includes('Fotbal Sintetic') &&
    sports.includes('Baschet')
  ) {
    return isFree
      ? `Teren Multisport Public – ${shortZone}`
      : `Teren Multisport – ${shortZone}`;
  }

  switch (primary) {
    case 'Ping Pong':
      return `Masă Ping Pong Publică – ${shortZone}`;
    case 'Baschet':
      return isFree
        ? `Teren Baschet Public – ${shortZone}`
        : `Teren Baschet – ${shortZone}`;
    case 'Fotbal Sintetic':
      return isFree
        ? `Teren Minifotbal Public – ${shortZone}`
        : `Teren Minifotbal Sintetic – ${shortZone}`;
    case 'Padel':
      return `Teren Padel – ${shortZone}`;
    case 'Tenis':
      return isFree
        ? `Teren Tenis Public – ${shortZone}`
        : `Teren Tenis – ${shortZone}`;
    case 'Alergat':
      return `Pistă Alergare – ${shortZone}`;
    case 'Bicicletă':
      return `Traseu Pump Track & MTB – ${shortZone}`;
    case 'Volei & Fitness':
      if (isVolleyballSpecific) {
        return `Teren Volei – ${shortZone}`;
      }
      return isFree
        ? `Aparate Fitness & Calisthenics – ${shortZone}`
        : `${ownName || 'Sală Sport & Fitness'} – ${shortZone}`;
    default:
      return `Teren Sportiv – ${shortZone}`;
  }
}

function translateOsmSurface(
  rawSurface: string | undefined,
  primarySport: SportCategory
): string {
  const s = (rawSurface || '').toLowerCase();
  if (
    s.includes('artificial_turf') ||
    s.includes('astroturf') ||
    s.includes('plastic')
  ) {
    return 'Gazon sintetic';
  }
  if (s.includes('tartan') || s.includes('rubber')) {
    return 'Suprafață tartan elastic';
  }
  if (s.includes('clay')) {
    return 'Zgură';
  }
  if (s.includes('asphalt') || s.includes('paved')) {
    return 'Bitum / Asfalt';
  }
  if (s.includes('concrete')) {
    return 'Beton fin';
  }
  if (s.includes('grass')) {
    return 'Iarbă naturală';
  }
  if (s.includes('sand')) {
    return 'Nisip (Beach Volley / Sport)';
  }
  if (s.includes('gravel')) {
    return 'Zgură / Pietriș compactat';
  }

  switch (primarySport) {
    case 'Ping Pong':
      return 'Masă outdoor ping pong';
    case 'Padel':
      return 'Teren padel sticlă & gazon sintetic';
    case 'Tenis':
      return 'Teren tenis amenajat';
    case 'Alergat':
      return 'Pistă de alergare';
    case 'Bicicletă':
      return 'Traseu ciclism / Pump track';
    case 'Volei & Fitness':
      return 'Zonă fitness / sport amenajată';
    default:
      return 'Teren sportiv outdoor';
  }
}

/**
 * Prioritizes exact court polygons (pitch, track, fitness_station) over broad
 * sports_centre lot boundaries so pins always sit dead-center on actual courts.
 */
export function parseOverpassElements(elements: OverpassElement[]): Venue[] {
  const excludedCentres: { lat: number; lng: number }[] = [];
  const parentCentres: {
    name: string;
    street: string;
    lat: number;
    lng: number;
  }[] = [];

  for (const el of elements) {
    const osmId = `${el.type}/${el.id}`;
    if (SKIP_OSM_IDS.has(osmId) || el.type === 'relation') continue;
    const t = el.tags || {};
    const lat = el.type === 'node' ? el.lat : el.center?.lat;
    const lng = el.type === 'node' ? el.lon : el.center?.lon;
    if (typeof lat !== 'number' || typeof lng !== 'number') continue;

    const sp = (t.sport || '').toLowerCase();
    const nm = (t.name || '').toLowerCase();
    const isExcluded =
      (sp &&
        sp
          .split(/[;,/]+/)
          .filter(Boolean)
          .every((tok) => EXCLUDED_SPORTS.has(tok.trim()))) ||
      isExcludedName(nm);

    if (isExcluded) {
      excludedCentres.push({ lat, lng });
      continue;
    }

    if (
      (t.leisure === 'sports_centre' ||
        t.leisure === 'stadium' ||
        t.leisure === 'sports_hall') &&
      (t.name || t.operator || t['addr:street'])
    ) {
      parentCentres.push({
        name: t.name || t['name:ro'] || '',
        street: t['addr:street']
          ? `${t['addr:street']}${
              t['addr:housenumber'] ? ` nr. ${t['addr:housenumber']}` : ''
            }, Timișoara`
          : '',
        lat,
        lng,
      });
    }
  }

  const exactCourtEls: { el: OverpassElement; lat: number; lng: number }[] = [];
  const containerEls: { el: OverpassElement; lat: number; lng: number }[] = [];

  for (const el of elements) {
    const osmId = `${el.type}/${el.id}`;
    if (SKIP_OSM_IDS.has(osmId) || el.type === 'relation') continue;
    const tags = el.tags || {};
    const access = (tags.access || '').toLowerCase();
    if (access === 'no') continue;
    if (access === 'private' && !tags.name && !tags.sport) continue;

    const lat = el.type === 'node' ? el.lat : el.center?.lat;
    const lng = el.type === 'node' ? el.lon : el.center?.lon;
    if (
      typeof lat !== 'number' ||
      typeof lng !== 'number' ||
      !Number.isFinite(lat) ||
      !Number.isFinite(lng) ||
      lat < 45.695 ||
      lat > 45.82 ||
      lng < 21.145 ||
      lng > 21.315
    ) {
      continue;
    }

    if (!tags.sport && !tags.name) {
      const insideExcluded = excludedCentres.some(
        (ex) => haversineMeters(lat, lng, ex.lat, ex.lng) <= 55
      );
      if (insideExcluded) continue;
    }

    const leisure = (tags.leisure || '').toLowerCase();
    if (
      leisure === 'pitch' ||
      leisure === 'track' ||
      leisure === 'fitness_station'
    ) {
      exactCourtEls.push({ el, lat, lng });
    } else {
      containerEls.push({ el, lat, lng });
    }
  }

  const parsed: Venue[] = [];

  for (const item of exactCourtEls) {
    const tags = item.el.tags || {};
    let nearestParent: (typeof parentCentres)[number] | undefined;
    let bestDist = 95;
    for (const p of parentCentres) {
      const d = haversineMeters(item.lat, item.lng, p.lat, p.lng);
      if (d < bestDist) {
        bestDist = d;
        nearestParent = p;
      }
    }

    const { sports, isVolleyballSpecific } = mapOsmTagsToSports(
      tags,
      nearestParent?.name || ''
    );
    if (sports.length === 0) continue;

    const isPaid = detectIsPaidVenue(tags, sports, nearestParent?.name || '');
    const isFree = !isPaid;
    const neighborhood = detectNearestNeighborhood(item.lat, item.lng);
    const name = generateSmartRomanianName(
      tags,
      sports,
      isFree,
      isVolleyballSpecific,
      neighborhood,
      nearestParent?.name || ''
    );
    const address = tags['addr:street']
      ? `${tags['addr:street']}${
          tags['addr:housenumber'] ? ` nr. ${tags['addr:housenumber']}` : ''
        }, Timișoara`
      : nearestParent?.street || `Zona ${neighborhood}, Timișoara`;

    const litTag = (tags.lit || '').toLowerCase();
    const hasLighting = litTag === 'yes' || !isFree;
    const surface = translateOsmSurface(tags.surface, sports[0]);
    const hourlyRate = isFree ? 0 : estimateHourlyRate(sports[0]);

    parsed.push({
      id: `osm-${item.el.type}-${item.el.id}`,
      osmId: `${item.el.type}/${item.el.id}`,
      source: 'osm',
      name,
      neighborhood,
      address,
      lat: Number(item.lat.toFixed(6)),
      lng: Number(item.lng.toFixed(6)),
      isFree,
      hourlyRate,
      sports,
      sportLabels: sports,
      surface,
      hasLighting,
      lightingNote:
        litTag === 'yes'
          ? 'Iluminat nocturn confirmat pe teren'
          : isFree
          ? 'Iluminat public / de parc în zonă'
          : 'Instalație nocturnă disponibilă',
      hasParking: true,
      parkingNote: isFree
        ? 'Locuri de parcare publice în apropiere'
        : 'Parcare în zona bazei sportive',
      hasLockerRooms: !isFree,
      lockerNote: isFree
        ? 'Fără vestiare (teren cu acces liber)'
        : 'Facilități disponibile la baza sportivă',
      extraPerks: [
        isFree ? 'Acces liber' : 'De închiriat',
        'Coordonate exacte pe teren',
      ],
      description: isFree
        ? `Teren / spațiu sportiv cu acces liber în zona ${neighborhood} (${sports.join(', ')}), poziționat exact pe suprafața de joc.`
        : `Teren sportiv în zona ${neighborhood} (${sports.join(', ')}), poziționat exact pe suprafața terenului.`,
    });
  }

  for (const item of containerEls) {
    const hasChildPitch = parsed.some(
      (c) => haversineMeters(item.lat, item.lng, c.lat, c.lng) <= 85
    );
    if (hasChildPitch) continue;

    const tags = item.el.tags || {};
    const { sports, isVolleyballSpecific } = mapOsmTagsToSports(tags);
    if (sports.length === 0) continue;

    const isPaid = detectIsPaidVenue(tags, sports);
    const isFree = !isPaid;
    const neighborhood = detectNearestNeighborhood(item.lat, item.lng);
    const name = generateSmartRomanianName(
      tags,
      sports,
      isFree,
      isVolleyballSpecific,
      neighborhood
    );
    const address = tags['addr:street']
      ? `${tags['addr:street']}${
          tags['addr:housenumber'] ? ` nr. ${tags['addr:housenumber']}` : ''
        }, Timișoara`
      : `Zona ${neighborhood}, Timișoara`;

    parsed.push({
      id: `osm-${item.el.type}-${item.el.id}`,
      osmId: `${item.el.type}/${item.el.id}`,
      source: 'osm',
      name,
      neighborhood,
      address,
      lat: Number(item.lat.toFixed(6)),
      lng: Number(item.lng.toFixed(6)),
      isFree,
      hourlyRate: isFree ? 0 : estimateHourlyRate(sports[0]),
      sports,
      sportLabels: sports,
      surface: 'Sală / Complex sportiv amenajat',
      hasLighting: true,
      lightingNote: 'Iluminat interior / nocturnă complex',
      hasParking: true,
      parkingNote: 'Parcare adiacentă sălii / complexului',
      hasLockerRooms: !isFree,
      lockerNote: 'Vestiare și grupuri sanitare în incintă',
      extraPerks: ['Sală / Complex Sportiv', neighborhood],
      description: `Sală sau complex sportiv din ${neighborhood} (${sports.join(', ')}).`,
    });
  }

  return parsed;
}

/**
 * Merges curated + user-added custom venues with OSM court polygons without
 * ever averaging coordinates (keeps every pin dead-center on a real court)
 * and without collapsing adjacent *different* sports (e.g. Basketball next to Ping Pong).
 */
export function mergeAndDeduplicateVenues(
  priorityVenues: Venue[],
  osmVenues: Venue[],
  thresholdMeters = 42
): Venue[] {
  const result: Venue[] = priorityVenues.map((v) => ({
    ...v,
    sports: [...v.sports],
  }));

  for (const candidate of osmVenues) {
    let isDuplicate = false;

    for (const existing of result) {
      if (existing.id === candidate.id) {
        isDuplicate = true;
        break;
      }

      const dist = haversineMeters(
        existing.lat,
        existing.lng,
        candidate.lat,
        candidate.lng
      );
      const samePrimarySport = existing.sports[0] === candidate.sports[0];
      const sharesAnySport = candidate.sports.some((sp) =>
        existing.sports.includes(sp)
      );

      if (existing.source === 'curated' || existing.source === 'custom') {
        if (
          (samePrimarySport && dist <= 75) ||
          (sharesAnySport && dist <= 45) ||
          dist <= 22
        ) {
          isDuplicate = true;
          break;
        }
      } else {
        if ((samePrimarySport && dist <= thresholdMeters) || dist <= 12) {
          isDuplicate = true;
          break;
        }
      }
    }

    if (!isDuplicate) {
      result.push(candidate);
    }
  }

  return result;
}

export function loadSavedAllVenues(): Venue[] | null {
  try {
    const raw = window.localStorage.getItem(ALL_VENUES_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed as Venue[];
    }
  } catch {
    // Ignore storage parse errors
  }
  return null;
}

export function saveAllVenuesToStorage(venues: Venue[]): void {
  try {
    window.localStorage.setItem(ALL_VENUES_STORAGE_KEY, JSON.stringify(venues));
  } catch {
    // Ignore quota errors gracefully
  }
}

async function postOverpassWithTimeout(
  url: string,
  body: string,
  timeoutMs: number,
  externalSignal?: AbortSignal
): Promise<OverpassElement[]> {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), timeoutMs);

  const onExternalAbort = () => controller.abort();
  externalSignal?.addEventListener('abort', onExternalAbort);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        Accept: 'application/json',
      },
      body,
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Overpass HTTP ${response.status}`);
    }

    const json = (await response.json()) as OverpassResponse;
    return Array.isArray(json.elements) ? json.elements : [];
  } finally {
    window.clearTimeout(timer);
    externalSignal?.removeEventListener('abort', onExternalAbort);
  }
}

export async function fetchTimisoaraOsmVenues(
  externalSignal?: AbortSignal
): Promise<Venue[]> {
  const body = `data=${encodeURIComponent(TIMISOARA_OVERPASS_QUERY)}`;
  let lastError: unknown;

  for (const mirrorUrl of OVERPASS_MIRRORS) {
    if (externalSignal?.aborted) {
      throw new DOMException('Aborted', 'AbortError');
    }
    try {
      const elements = await postOverpassWithTimeout(
        mirrorUrl,
        body,
        11000,
        externalSignal
      );
      if (elements.length > 0) {
        return parseOverpassElements(elements);
      }
    } catch (err) {
      lastError = err;
    }
  }

  throw lastError ?? new Error('Toate serverele Overpass sunt ocupate momentan.');
}
