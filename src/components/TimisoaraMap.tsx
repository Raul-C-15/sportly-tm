import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LocateFixed, Globe, Map as MapIcon } from 'lucide-react';
import type { Venue } from '../types';
import { useSportly } from '../context/SportlyContext';
import { getPinSvgGlyph } from '../utils/sportConfig';

const TIMISOARA_CENTER: [number, number] = [45.7537, 21.2257];
const DEFAULT_ZOOM = 13;

const OSM_STREET_TILES = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const OSM_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

const ESRI_SATELLITE_TILES =
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
const ESRI_ATTRIBUTION =
  'Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics';

interface TimisoaraMapProps {
  venues: Venue[];
  selectedVenueId: string | null;
  flyToSignal: number;
  onSelectVenue: (venueId: string) => void;
  isAddingVenueMode?: boolean;
  draftPinCoords?: { lat: number; lng: number } | null;
  onMapClickForNewVenue?: (lat: number, lng: number) => void;
}

/**
 * Strictly 32x32 circular pin head anchored at exact [16, 16] center so markers
 * NEVER drift or shift on zoom (zero margin/padding drift).
 * Price/GRATIS badge uses position:absolute below top:34px.
 */
function createVenueDivIcon(
  venue: Venue,
  isSelected: boolean,
  showLabel: boolean
): L.DivIcon {
  const pinFill = venue.isFree ? '#84CC16' : '#059669';
  const pinStroke = isSelected
    ? '#FFFFFF'
    : venue.isFree
    ? '#064E3B'
    : '#FFFFFF';
  const glyphColor = venue.isFree ? '#064E3B' : '#FFFFFF';
  const badgeBg = venue.isFree ? '#ECFDF5' : '#064E3B';
  const badgeText = venue.isFree ? '#064E3B' : '#FFFFFF';
  const badgeBorder = venue.isFree ? '#84CC16' : '#10B981';
  const label = venue.isFree ? 'GRATIS' : `${venue.hourlyRate} RON`;

  const ringShadow = isSelected
    ? '0 0 0 3px #064E3B, 0 0 0 6px #84CC16, 0 6px 14px rgba(6,78,59,0.45)'
    : '0 3px 10px rgba(6,78,59,0.34)';

  const pulseHtml = isSelected
    ? `<span class="pin-pulse-ring" style="position:absolute;inset:-6px;border-radius:9999px;background:${pinFill};pointer-events:none;"></span>`
    : '';

  const glyphSvg = getPinSvgGlyph(venue.sports[0], glyphColor);

  const labelHtml = showLabel
    ? `<span style="position:absolute;top:34px;left:50%;transform:translateX(-50%);white-space:nowrap;padding:1.5px 6px;border-radius:9999px;font-size:10px;font-weight:800;line-height:1.25;letter-spacing:0.02em;background:${badgeBg};color:${badgeText};border:1.5px solid ${badgeBorder};box-shadow:0 2px 6px rgba(0,0,0,0.24);pointer-events:none;">${label}</span>`
    : '';

  const html = `<div style="position:relative;width:32px;height:32px;margin:0;padding:0;display:block;box-sizing:border-box;">${pulseHtml}<div style="position:relative;z-index:2;width:32px;height:32px;border-radius:9999px;background:${pinFill};border:2.5px solid ${pinStroke};box-shadow:${ringShadow};display:flex;align-items:center;justify-content:center;box-sizing:border-box;">${glyphSvg}</div>${labelHtml}</div>`;

  return L.divIcon({
    className: 'sportly-custom-pin',
    html,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -18],
  });
}

function createDraftPinIcon(): L.DivIcon {
  const html = `<div style="position:relative;width:32px;height:32px;margin:0;padding:0;display:block;box-sizing:border-box;"><span class="pin-pulse-ring" style="position:absolute;inset:-7px;border-radius:9999px;background:#F59E0B;pointer-events:none;"></span><div style="position:relative;z-index:2;width:32px;height:32px;border-radius:9999px;background:#F59E0B;border:3px solid #FFFFFF;box-shadow:0 0 0 3px #064E3B, 0 6px 14px rgba(0,0,0,0.4);display:flex;align-items:center;justify-content:center;box-sizing:border-box;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></div><span style="position:absolute;top:34px;left:50%;transform:translateX(-50%);white-space:nowrap;padding:2px 7px;border-radius:9999px;font-size:10px;font-weight:800;line-height:1.25;background:#064E3B;color:#ECFDF5;border:1.5px solid #84CC16;box-shadow:0 2px 8px rgba(0,0,0,0.3);pointer-events:none;">TEREN NOU</span></div>`;

  return L.divIcon({
    className: 'sportly-custom-pin',
    html,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -18],
  });
}

export const TimisoaraMap: React.FC<TimisoaraMapProps> = ({
  venues,
  selectedVenueId,
  flyToSignal,
  onSelectVenue,
  isAddingVenueMode = false,
  draftPinCoords = null,
  onMapClickForNewVenue,
}) => {
  const { activeTab } = useSportly();
  const [mapStyle, setMapStyle] = useState<'street' | 'satellite'>('street');
  const [zoomLevel, setZoomLevel] = useState<number>(DEFAULT_ZOOM);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const streetLayerRef = useRef<L.TileLayer | null>(null);
  const satelliteLayerRef = useRef<L.TileLayer | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);
  const draftMarkerRef = useRef<L.Marker | null>(null);

  const onSelectRef = useRef(onSelectVenue);
  const isAddingRef = useRef(isAddingVenueMode);
  const onMapClickRef = useRef(onMapClickForNewVenue);

  onSelectRef.current = onSelectVenue;
  isAddingRef.current = isAddingVenueMode;
  onMapClickRef.current = onMapClickForNewVenue;

  // Initialize Leaflet Map once safely
  useEffect(() => {
    const container = containerRef.current;
    if (!container || mapRef.current) return;

    const map = L.map(container, {
      center: TIMISOARA_CENTER,
      zoom: DEFAULT_ZOOM,
      maxZoom: 20,
      zoomControl: false,
      scrollWheelZoom: true,
    });

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    const streetLayer = L.tileLayer(OSM_STREET_TILES, {
      attribution: OSM_ATTRIBUTION,
      maxNativeZoom: 19,
      maxZoom: 20,
    }).addTo(map);

    const satelliteLayer = L.tileLayer(ESRI_SATELLITE_TILES, {
      attribution: ESRI_ATTRIBUTION,
      maxNativeZoom: 19,
      maxZoom: 20,
    });

    const markersLayer = L.layerGroup().addTo(map);

    mapRef.current = map;
    streetLayerRef.current = streetLayer;
    satelliteLayerRef.current = satelliteLayer;
    markersLayerRef.current = markersLayer;

    map.on('zoomend', () => {
      setZoomLevel(map.getZoom());
    });

    map.on('click', (e: L.LeafletMouseEvent) => {
      if (isAddingRef.current && onMapClickRef.current) {
        onMapClickRef.current(e.latlng.lat, e.latlng.lng);
      }
    });

    const resizeObserver = new ResizeObserver(() => {
      map.invalidateSize();
    });
    resizeObserver.observe(container);

    const timer = window.setTimeout(() => {
      map.invalidateSize();
    }, 100);

    return () => {
      window.clearTimeout(timer);
      resizeObserver.disconnect();
      map.remove();
      mapRef.current = null;
      streetLayerRef.current = null;
      satelliteLayerRef.current = null;
      markersLayerRef.current = null;
      draftMarkerRef.current = null;
    };
  }, []);

  // Re-validate size whenever Map tab becomes active so pins never drift
  useEffect(() => {
    const map = mapRef.current;
    if (!map || activeTab !== 'map') return;
    map.invalidateSize();
    const t = window.setTimeout(() => map.invalidateSize(), 150);
    return () => window.clearTimeout(t);
  }, [activeTab]);

  // Toggle between Street Map (OSM) and Satellite View (Esri World Imagery)
  useEffect(() => {
    const map = mapRef.current;
    const street = streetLayerRef.current;
    const satellite = satelliteLayerRef.current;
    if (!map || !street || !satellite) return;

    if (mapStyle === 'satellite') {
      if (map.hasLayer(street)) map.removeLayer(street);
      if (!map.hasLayer(satellite)) satellite.addTo(map);
    } else {
      if (map.hasLayer(satellite)) map.removeLayer(satellite);
      if (!map.hasLayer(street)) street.addTo(map);
    }
  }, [mapStyle]);

  // Render exact 32x32 [16, 16] court pins
  useEffect(() => {
    const map = mapRef.current;
    const layerGroup = markersLayerRef.current;
    if (!map || !layerGroup) return;

    layerGroup.clearLayers();
    const showAllLabels = venues.length <= 30 || zoomLevel >= 15;

    venues.forEach((venue) => {
      const isSelected = venue.id === selectedVenueId;
      const showLabel =
        isSelected ||
        showAllLabels ||
        (zoomLevel >= 13 &&
          (venue.source === 'curated' || venue.source === 'custom'));

      const marker = L.marker([venue.lat, venue.lng], {
        icon: createVenueDivIcon(venue, isSelected, showLabel),
        zIndexOffset: isSelected
          ? 900
          : venue.source === 'custom'
          ? 400
          : venue.source === 'curated'
          ? 250
          : venue.isFree
          ? 140
          : 100,
        title: venue.name,
        alt: venue.name,
      });

      marker.bindTooltip(
        `<div style="font-weight:700;font-size:12px;color:#064E3B;">${venue.name}</div><div style="font-size:11px;color:#475569;">${
          venue.isFree ? 'Gratis' : `${venue.hourlyRate} RON/oră`
        } • ${venue.sports.join(', ')}</div>`,
        {
          direction: 'top',
          offset: [0, -18],
          opacity: 0.96,
        }
      );

      marker.on('click', () => {
        if (isAddingRef.current && onMapClickRef.current) {
          onMapClickRef.current(venue.lat, venue.lng);
          return;
        }
        onSelectRef.current(venue.id);
      });

      marker.addTo(layerGroup);
    });
  }, [venues, selectedVenueId, zoomLevel]);

  // Render interactive draggable/clickable draft pin when adding a new court
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    if (draftMarkerRef.current) {
      draftMarkerRef.current.remove();
      draftMarkerRef.current = null;
    }

    if (!isAddingVenueMode || !draftPinCoords) return;

    const draftMarker = L.marker([draftPinCoords.lat, draftPinCoords.lng], {
      icon: createDraftPinIcon(),
      draggable: true,
      zIndexOffset: 1000,
    });

    draftMarker.on('dragend', () => {
      const pos = draftMarker.getLatLng();
      if (onMapClickRef.current) {
        onMapClickRef.current(pos.lat, pos.lng);
      }
    });

    draftMarker.addTo(map);
    draftMarkerRef.current = draftMarker;
  }, [isAddingVenueMode, draftPinCoords]);

  // Smoothly zoom right onto the exact court whenever user explicitly selects/focuses a venue
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !selectedVenueId || flyToSignal === 0 || isAddingVenueMode) {
      return;
    }
    const target = venues.find((v) => v.id === selectedVenueId);
    if (!target) return;

    map.flyTo([target.lat, target.lng], Math.max(map.getZoom(), 17), {
      duration: 0.55,
    });
  }, [flyToSignal, selectedVenueId, venues, isAddingVenueMode]);

  const handleRecenter = () => {
    const map = mapRef.current;
    if (!map) return;
    map.flyTo(TIMISOARA_CENTER, DEFAULT_ZOOM, { duration: 0.6 });
  };

  return (
    <div
      className={`sportly-leaflet-wrapper relative z-10 isolate w-full h-[calc(100vh-285px)] min-h-[470px] max-h-[690px] rounded-3xl overflow-hidden border shadow-sport bg-[#ECFDF5] ${
        isAddingVenueMode
          ? 'sportly-add-cursor border-amber-400 ring-2 ring-amber-300'
          : 'border-slate-200'
      }`}
    >
      <div ref={containerRef} className="w-full h-full" />

      {/* Top-Left Color-Coded Pin Legend */}
      <div className="absolute top-3.5 left-3.5 z-[450] inline-flex flex-wrap items-center gap-3 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md pointer-events-auto max-w-[calc(100%-205px)]">
        <div className="flex items-center gap-1.5 text-xs font-bold text-[#064E3B]">
          <span className="w-3.5 h-3.5 rounded-full bg-[#84CC16] border-2 border-[#064E3B] shrink-0" />
          <span>Gratis</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
          <span className="w-3.5 h-3.5 rounded-full bg-[#059669] border-2 border-emerald-950 shrink-0" />
          <span>De Închiriat</span>
        </div>
      </div>

      {/* Top-Right Controls: Street vs Satellite Toggle + Recenter */}
      <div className="absolute top-3.5 right-3.5 z-[450] flex items-center gap-2 pointer-events-auto">
        <div className="inline-flex items-center bg-white/95 backdrop-blur-md p-1 rounded-2xl border border-slate-200 shadow-md">
          <button
            type="button"
            onClick={() => setMapStyle('street')}
            className={`min-h-[34px] px-2.5 py-1 rounded-xl text-xs font-extrabold inline-flex items-center gap-1.5 transition-all ${
              mapStyle === 'street'
                ? 'bg-[#064E3B] text-white shadow-sm'
                : 'text-slate-700 hover:text-[#064E3B]'
            }`}
          >
            <MapIcon className="w-3.5 h-3.5" />
            <span>Hartă Stradală</span>
          </button>
          <button
            type="button"
            onClick={() => setMapStyle('satellite')}
            className={`min-h-[34px] px-2.5 py-1 rounded-xl text-xs font-extrabold inline-flex items-center gap-1.5 transition-all ${
              mapStyle === 'satellite'
                ? 'bg-[#064E3B] text-[#84CC16] shadow-sm'
                : 'text-slate-700 hover:text-[#064E3B]'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Satelit</span>
          </button>
        </div>

        <button
          type="button"
          onClick={handleRecenter}
          title="Vedere generală Timișoara"
          aria-label="Vedere generală Timișoara"
          className="min-h-[42px] min-w-[42px] px-2.5 py-2 rounded-2xl bg-white/95 hover:bg-[#ECFDF5] backdrop-blur-md border border-slate-200 shadow-md text-xs font-bold text-[#064E3B] inline-flex items-center justify-center transition-colors"
        >
          <LocateFixed className="w-4 h-4 text-emerald-600" />
        </button>
      </div>
    </div>
  );
};
