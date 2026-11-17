# SportlyTM – Meciuri & Terenuri Timișoara

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-OpenStreetMap-199900?style=flat-square&logo=leaflet&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite&logoColor=white)

**SportlyTM** (*Meciuri & Terenuri Timișoara*) is a modern, mobile-first and desktop web application built for the amateur sports community in **Timișoara, Romania**. Inspired by platforms like Playtomic, Strava, and Airbnb, it helps local players find teammates for pickup games (5v5 synthetic football, 3x3 streetball, padel, tennis, running), automatically split court rental costs, connect via rich social profiles, and explore both free public park courts and private sports venues across Timișoara on an interactive map.

---

## Key Features

- **Open Matches Lobby (*Feed Meciuri Deschise*):**
  - Filter pickup games across **8 sports & activities** (*Fotbal Sintetic*, *Baschet*, *Padel*, *Tenis*, *Ping Pong*, *Alergat*, *Bicicletă*, *Volei & Fitness*), skill level (*Relaxat / Începător*, *Intermediar*, *Competitiv*), cost (*Gratis* vs. *Cu plată*), or live text search.
  - Visual player slot progress bars, clickable initial-based avatar stacks, and friendly empty states with one-click filter reset.
  - **Automatic Cost Split Calculator:** Dynamically computes and updates the per-player court fee as players join or leave a match.
  - Instant one-tap **Join / Leave** (*Alătură-te* / *Înscris ✓ • Retrage-te*) workflow with toast notifications and full match details drawer.
- **Interactive Timișoara Court Map & Directory (*Harta Terenurilor*):**
  - Pre-loaded with **215+ satellite-verified sports locations across Timișoara** (combining 38 flagship sports bases, padel/tennis clubs, parks, and cycling trails with real OpenStreetMap court polygons) plus live **Overpass API** sync (*Reîncarcă din hartă*).
  - Switch between **Street Map** (*Hartă Stradală* — OpenStreetMap) and **Satellite View** (*Satelit* — Esri World Imagery) up to zoom level 20, or click **+ Adaugă teren nou** to drop a pin directly on any court and save it permanently.
  - Zero-drift custom `32×32` circular `L.divIcon` pins (`iconAnchor: [16, 16]`) color-coded for **Free Public Courts** (Lime Green) and **Paid Rental Bases** (Dark Emerald Green).
- **Create a Match (*Creează un Meci*):**
  - Visual sport selector, quick title suggestions, Timișoara venue selector (with automatic *Gratis* / *Cu plată* detection + custom neighborhood venue creator), date/time pickers, player capacity steppers, and a live per-person cost preview.
  - Full client-side validation with clear inline Romanian feedback.
- **Rich Player Profiles (*Profilul Meu & Profiluri Jucători*):**
  - Editable personal profile with customizable initial-based avatar colors, Timișoara neighborhood, bio, per-sport skill badges, availability preferences, and *Meciurile mele* tracker.
  - Click any player's avatar or row on a match card to inspect their public player preview modal before joining a game.
- **Persistent State (`localStorage`):**
  - Centralized React Context synchronized with versioned `localStorage` (`sportlytm_state_v1`) so created matches, joined games, custom venues, and profile edits persist across browser refreshes, complete with a one-click demo data reset option in Profile settings.

---

## Tech Stack

- **Frontend Framework:** React 18 + TypeScript (Strict Mode)
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3.4 (`Plus Jakarta Sans` typography, custom *Happy Sporty Green* palette)
- **Interactive Mapping:** Leaflet 1.9 + OpenStreetMap tiles + custom SVG `L.divIcon` markers
- **Icons & Avatars:** `lucide-react` + deterministic, zero-broken-asset initial avatars

---

## Folder Structure

```text
sportlytm/
├── index.html                    # Entry HTML (Romanian metadata & inline SVG favicon)
├── package.json                  # Scripts and dependencies
├── tailwind.config.js            # Custom Happy Sporty Green theme tokens
├── tsconfig.json                 # Strict TypeScript configuration
├── vite.config.ts                # Vite bundler config
└── src/
    ├── App.tsx                   # Responsive app shell & modal orchestration
    ├── main.tsx                  # React root & Leaflet CSS entry
    ├── index.css                 # Tailwind layers & Leaflet z-index containment
    ├── components/
    │   ├── Avatar.tsx            # Colorful initial-based player avatars
    │   ├── CreateMatchView.tsx   # Validated match creation form & live cost preview
    │   ├── FeedView.tsx          # Open matches lobby, hero stats & filters
    │   ├── MapView.tsx           # Map/List directory & mobile bottom sheet
    │   ├── MatchCard.tsx         # Match card with live cost split & join toggle
    │   ├── MatchDetailsModal.tsx # Full match details, rules & clickable roster
    │   ├── Navbar.tsx            # Desktop top header & mobile 4-tab bottom bar
    │   ├── PlayerProfileModal.tsx# Public player social bio & skill modal
    │   ├── ProfileView.tsx       # Current user profile editor & demo reset
    │   ├── TimisoaraMap.tsx      # Leaflet map wrapper with custom SVG divIcons
    │   └── ToastContainer.tsx    # Non-intrusive feedback toasts
    ├── context/
    │   └── SportlyContext.tsx    # Single source of truth + localStorage sync
    ├── data/
    │   ├── mockData.ts                 # Pre-populated Timișoara matches & player profiles
    │   └── timisoaraVerifiedVenues.ts  # 215+ satellite-verified Timișoara courts & clubs
    ├── types/
    │   └── index.ts                    # Strict TypeScript interfaces
    └── utils/
        ├── overpassService.ts          # Live OpenStreetMap Overpass sync & deduplication
        └── sportConfig.ts              # Sport icons, pin glyphs, date & RON formatters
```

---

## Getting Started

### Prerequisites

- **Node.js** `>= 18.0.0`
- **npm** `>= 9.0.0`

### Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Raul-C-15/sportly-tm.git
   cd sportly-tm
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open the local URL printed in your terminal (typically `http://localhost:5173`) to explore **SportlyTM** in your browser.

4. **Type-check and build for production:**
   ```bash
   npm run build
   ```

5. **Preview the production bundle locally:**
   ```bash
   npm run preview
   ```

---

## License

This project is open-source and available for portfolio and educational purposes.
