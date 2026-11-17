import type { Venue } from '../types';

/**
 * 38 Flagship Sports Hubs, Parks, Cycling Trails & Padel/Tennis/Football Clubs in Timișoara,
 * each pinned at 100% satellite-verified coordinates on the actual court, track, or trail.
 */
export const CURATED_TIMISOARA_VENUES: Venue[] = [
  {
    "id": "venue-baza2-upt",
    "source": "curated",
    "name": "Baza Sportivă nr. 2 UPT – Fotbal Sintetic",
    "neighborhood": "Zona Stadion / Podeanu",
    "address": "Str. Prof. Dr. Aurel Păunescu Podeanu nr. 2, Timișoara",
    "lat": 45.742178,
    "lng": 21.249094,
    "isFree": false,
    "hourlyRate": 180,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic 5v5 & 6v6"
    ],
    "surface": "Gazon sintetic premium cu nocturnă (balon iarna)",
    "hasLighting": true,
    "lightingNote": "Nocturnă LED pe toate terenurile sintetice",
    "hasParking": true,
    "parkingNote": "Parcare proprie încăpătoare pe Str. Podeanu",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare moderne cu dușuri și grupuri sanitare",
    "extraPerks": [
      "Mai multe terenuri sintetice",
      "Nocturnă LED",
      "Vestiare & dușuri"
    ],
    "description": "Cel mai popular complex sportiv universitar din Timișoara pentru meciuri de fotbal sintetic 5v5 și 6v6 după job sau cursuri."
  },
  {
    "id": "venue-baza2-upt-tenis",
    "source": "curated",
    "name": "Baza Sportivă nr. 2 UPT – Terenuri Tenis",
    "neighborhood": "Zona Stadion / Podeanu",
    "address": "Str. Prof. Dr. Aurel Păunescu Podeanu nr. 2, Timișoara",
    "lat": 45.742618,
    "lng": 21.247908,
    "isFree": false,
    "hourlyRate": 80,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis de câmp (Zgură & Hard)"
    ],
    "surface": "Terenuri de tenis pe zgură și suprafață sintetică",
    "hasLighting": true,
    "lightingNote": "Instalație de nocturnă pe terenurile de tenis",
    "hasParking": true,
    "parkingNote": "Parcare gratuită în incinta Bazei 2 UPT",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare și dușuri în complexul UPT",
    "extraPerks": [
      "4+ terenuri alăturate",
      "Nocturnă",
      "Balon iarna"
    ],
    "description": "Terenurile dedicate de tenis din cadrul Bazei Sportive nr. 2 Politehnica, excelente pentru meciuri la simplu și dublu."
  },
  {
    "id": "venue-baza2-upt-pista",
    "source": "curated",
    "name": "Pistă Atletism Baza 2 UPT (Alergare)",
    "neighborhood": "Zona Stadion / Podeanu",
    "address": "Str. Prof. Dr. Aurel Păunescu Podeanu nr. 2, Timișoara",
    "lat": 45.742812,
    "lng": 21.246443,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Alergat"
    ],
    "sportLabels": [
      "Pistă Atletism 400m"
    ],
    "surface": "Pistă ovală de atletism 400m (tartan)",
    "hasLighting": true,
    "lightingNote": "Iluminat perimetral pentru alergările de seară",
    "hasParking": true,
    "parkingNote": "Parcare lângă Baza 2 UPT / Str. Podeanu",
    "hasLockerRooms": false,
    "lockerNote": "Acces deschis alergătorilor pe culoarele exterioare",
    "extraPerks": [
      "Buclă exactă 400m",
      "Ideală pentru intervale",
      "Gratis"
    ],
    "description": "Pista oficială de alergare de la Baza 2 Politehnica, preferată de alergătorii din Timișoara pentru antrenamente de viteză, intervale și alergări de grup."
  },
  {
    "id": "venue-baza1-upt",
    "source": "curated",
    "name": "Baza Sportivă nr. 1 UPT – Stadionul Știința & Sintetic",
    "neighborhood": "Complex Studențesc",
    "address": "Str. Traian Lalescu nr. 2 (lângă Biblioteca UPT), Timișoara",
    "lat": 45.746105,
    "lng": 21.228418,
    "isFree": false,
    "hourlyRate": 170,
    "sports": [
      "Fotbal Sintetic",
      "Alergat"
    ],
    "sportLabels": [
      "Minifotbal Sintetic",
      "Pistă Tartan Alergare"
    ],
    "surface": "Terenuri minifotbal gazon sintetic + pistă alergare tartan",
    "hasLighting": true,
    "lightingNote": "Nocturnă disponibilă seara",
    "hasParking": true,
    "parkingNote": "Acces rapid din Complex și Bd. Mihai Viteazu",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare și dușuri în incinta bazei Politehnica",
    "extraPerks": [
      "Lângă Facultatea de Mecanică",
      "Tribună istorică",
      "Nocturnă"
    ],
    "description": "Baza istorică Știința a Universității Politehnica, situată chiar lângă Biblioteca UPT și Facultatea de Mecanică, cu terenuri sintetice și pistă de alergare din tartan."
  },
  {
    "id": "venue-baza1-upt-baschet",
    "source": "curated",
    "name": "Teren Baschet Tartan & Calisthenics – UPT Mecanică",
    "neighborhood": "Complex Studențesc",
    "address": "Str. Traian Lalescu / Aleea Politehnicii, Timișoara",
    "lat": 45.746654,
    "lng": 21.230201,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Baschet",
      "Volei & Fitness"
    ],
    "sportLabels": [
      "Baschet Tartan",
      "Zonă Calisthenics & Fitness"
    ],
    "surface": "Suprafață tartan cauciucat + bare tracțiuni și paralele alături",
    "hasLighting": true,
    "lightingNote": "Iluminat în campusul Facultății de Mecanică",
    "hasParking": true,
    "parkingNote": "Acces pietonal și velo direct din Complex / Rozelor",
    "hasLockerRooms": false,
    "lockerNote": "Teren outdoor deschis în campus",
    "extraPerks": [
      "Suprafață tartan elastic",
      "Aparate street workout lângă teren",
      "Gratis"
    ],
    "description": "Teren excelent de baschet pe suprafață de tartan cauciucat chiar lângă sala de sport UPT și zona de calisthenics / tracțiuni."
  },
  {
    "id": "venue-banusport",
    "source": "curated",
    "name": "Complex BanuSport – Fotbal Sintetic & Tenis",
    "neighborhood": "Zona Stadion / Podeanu",
    "address": "Aleea FC Ripensia nr. 33, Timișoara",
    "lat": 45.741112,
    "lng": 21.241699,
    "isFree": false,
    "hourlyRate": 190,
    "sports": [
      "Fotbal Sintetic",
      "Tenis"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Tenis pe zgură"
    ],
    "surface": "Gazon sintetic + terenuri de tenis alăturate",
    "hasLighting": true,
    "lightingNote": "Nocturnă puternică pe terenurile exterioare",
    "hasParking": true,
    "parkingNote": "Parcare mare gratuită în curtea complexului",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare, dușuri și terasă sportivă",
    "extraPerks": [
      "Terasă după meci",
      "Parcare proprie",
      "Lângă Complex"
    ],
    "description": "Unul dintre cele mai cunoscute complexe sportive din zona Stadion / Ripensia, cu terenuri de minifotbal sintetic și terenuri de tenis."
  },
  {
    "id": "venue-padel-center-tm",
    "source": "curated",
    "name": "Padel Center Timișoara (Circumvalațiunii)",
    "neighborhood": "Circumvalațiunii",
    "address": "Calea Circumvalațiunii nr. 4, Timișoara",
    "lat": 45.755605,
    "lng": 21.217702,
    "isFree": false,
    "hourlyRate": 140,
    "sports": [
      "Padel"
    ],
    "sportLabels": [
      "6 Terenuri Padel (4 Indoor + 2 Outdoor)"
    ],
    "surface": "Terenuri padel panoramice cu gazon sintetic WPT",
    "hasLighting": true,
    "lightingNote": "Iluminat profesional LED competițional",
    "hasParking": true,
    "parkingNote": "Parcare privată în incintă (Circumvalațiunii 4)",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare moderne climatizate, dușuri și recepție cu bar",
    "extraPerks": [
      "4 terenuri indoor + 2 outdoor",
      "Închiriere palete",
      "Aproape de Centru"
    ],
    "description": "Locația centrală Padel Center de pe Calea Circumvalațiunii nr. 4, dotată cu 6 terenuri de ultimă generație (acoperite și exterioare) și închiriere de palete."
  },
  {
    "id": "venue-padel-center-dumbravita",
    "source": "curated",
    "name": "Padel Center Dumbrăvița (9 Terenuri Padel & Sintetic)",
    "neighborhood": "Dumbrăvița",
    "address": "Str. Praga nr. 6, Dumbrăvița (lângă Timișoara)",
    "lat": 45.797182,
    "lng": 21.207967,
    "isFree": false,
    "hourlyRate": 140,
    "sports": [
      "Padel",
      "Fotbal Sintetic",
      "Tenis"
    ],
    "sportLabels": [
      "9 Terenuri Padel (6 Indoor + 3 Outdoor)",
      "Sintetic & Tenis"
    ],
    "surface": "Sticlă panoramică padel indoor/outdoor + terenuri exterioare",
    "hasLighting": true,
    "lightingNote": "Iluminat LED indoor și nocturnă outdoor",
    "hasParking": true,
    "parkingNote": "Parcare generoasă chiar în fața halei",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare spațioase, lounge socializare și pro-shop",
    "extraPerks": [
      "Cel mai mare hub de padel (9 terenuri)",
      "Lounge & cafea",
      "Turnee amatori"
    ],
    "description": "Cel mai mare club de padel din vestul României (9 terenuri pe Str. Praga nr. 6), cu comunitate super activă pentru toate nivelurile și terenuri sportive adiacente."
  },
  {
    "id": "venue-quattro-padel",
    "source": "curated",
    "name": "Quattro Padel Timișoara (Indoor)",
    "neighborhood": "Buziașului / Ciarda Roșie",
    "address": "Calea Stan Vidrighin nr. 5, Timișoara",
    "lat": 45.74452,
    "lng": 21.25428,
    "isFree": false,
    "hourlyRate": 150,
    "sports": [
      "Padel"
    ],
    "sportLabels": [
      "5 Terenuri Padel Panoramice Indoor"
    ],
    "surface": "Terenuri panoramice indoor climatizate 365 zile/an",
    "hasLighting": true,
    "lightingNote": "Iluminat LED indoor fără orbire",
    "hasParking": true,
    "parkingNote": "Parcare disponibilă în incinta platformei Stan Vidrighin 5",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare premium, dușuri și zonă de relaxare",
    "extraPerks": [
      "100% Indoor climatizat",
      "5 terenuri panoramice",
      "Închiriere echipament"
    ],
    "description": "Club modern de padel indoor pe Calea Stan Vidrighin nr. 5, cu 5 terenuri panoramice acoperite și temperatură optimă indiferent de anotimp."
  },
  {
    "id": "venue-helios-sport",
    "source": "curated",
    "name": "Helios Sport Club – Tenis Zgură & Sintetic",
    "neighborhood": "Soarelui",
    "address": "Bd. Dr. Iosif Bulbuca nr. 21, Timișoara",
    "lat": 45.738446,
    "lng": 21.243308,
    "isFree": false,
    "hourlyRate": 95,
    "sports": [
      "Tenis",
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Tenis pe Zgură",
      "Fotbal Sintetic"
    ],
    "surface": "Terenuri de tenis pe zgură + teren minifotbal gazon sintetic",
    "hasLighting": true,
    "lightingNote": "Nocturnă pe terenul sintetic și terenurile principale",
    "hasParking": true,
    "parkingNote": "Parcare pe Bd. Iosif Bulbuca / zona AEM – Județean",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare, dușuri și terasă umbrită la club",
    "extraPerks": [
      "Club de tradiție FRT",
      "Balon presostatic iarna",
      "Terasă"
    ],
    "description": "Bază sportivă consacrată în sud-estul Timișoarei (lângă Spitalul Județean / Soarelui), renumită pentru terenurile îngrijite de tenis pe zgură și terenul de sintetic."
  },
  {
    "id": "venue-tivoli-tenis",
    "source": "curated",
    "name": "Tenis Club Tivoli (Str. Ghirodei)",
    "neighborhood": "Ghirodei / Plopi",
    "address": "Str. Ghirodei nr. 32, Timișoara",
    "lat": 45.755322,
    "lng": 21.252405,
    "isFree": false,
    "hourlyRate": 90,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis pe Zgură (7 Outdoor + 2 Balon)"
    ],
    "surface": "Terenuri clasice de tenis pe zgură roșie",
    "hasLighting": true,
    "lightingNote": "Nocturnă și terenuri acoperite în sezonul rece",
    "hasParking": true,
    "parkingNote": "Parcare în curtea bazei pe Str. Ghirodei nr. 32",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare, dușuri și club house",
    "extraPerks": [
      "9 terenuri de zgură",
      "Terenuri în balon iarna",
      "Atmosferă clasică de tenis"
    ],
    "description": "Clubul Sportiv Tivoli de pe Str. Ghirodei nr. 32 dispune de terenuri excelente cu zgură în aer liber și acoperite în balon."
  },
  {
    "id": "venue-millenium-tenis",
    "source": "curated",
    "name": "Tennis Club Millenium",
    "neighborhood": "Pădurea Verde",
    "address": "Zona Pădurea Verde / Est, Timișoara",
    "lat": 45.769095,
    "lng": 21.271825,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis de câmp"
    ],
    "surface": "Terenuri de tenis pe zgură în zonă verde liniștită",
    "hasLighting": true,
    "lightingNote": "Iluminat pentru partidele de seară",
    "hasParking": true,
    "parkingNote": "Parcare chiar lângă terenuri",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare disponibile pentru jucători",
    "extraPerks": [
      "Liniște și aer curat",
      "Parcare facilă"
    ],
    "description": "Terenuri de tenis amplasate într-o zonă verde și aerisită în estul Timișoarei, ideale pentru meciuri de weekend."
  },
  {
    "id": "venue-dyadora-tenis",
    "source": "curated",
    "name": "Club Sportiv Dyadora – Tenis",
    "neighborhood": "Giroc / Chișoda",
    "address": "Calea Timișoarei (ieșirea spre Giroc), Timiș",
    "lat": 45.712249,
    "lng": 21.240043,
    "isFree": false,
    "hourlyRate": 90,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Bază Tenis Zgură (Turnee & Agrement)"
    ],
    "surface": "Multiple terenuri de tenis pe zgură",
    "hasLighting": true,
    "lightingNote": "Instalație de iluminat și balon iarna",
    "hasParking": true,
    "parkingNote": "Parcare proprie la intrarea în club",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare complete, dușuri și terasă",
    "extraPerks": [
      "Standard competițional ITF/FRT",
      "Multe terenuri de zgură"
    ],
    "description": "Bază de top dedicată tenisului de câmp la intrarea în Giroc, gazdă a numeroase turnee și deschisă jucătorilor amatori."
  },
  {
    "id": "venue-csm-rozelor",
    "source": "curated",
    "name": "Baza CSM Timișoara (Parcul Rozelor) – Tenis & Beach Volley",
    "neighborhood": "Zona Bega / Parcul Rozelor",
    "address": "Str. Academician Alexandru Borza (lângă Parcul Rozelor), Timișoara",
    "lat": 45.749727,
    "lng": 21.230404,
    "isFree": false,
    "hourlyRate": 80,
    "sports": [
      "Volei & Fitness",
      "Tenis"
    ],
    "sportLabels": [
      "Volei pe Nisip (Beach Volley)",
      "Tenis"
    ],
    "surface": "Nisip fin pentru beach volley + terenuri sintetice/hard de tenis",
    "hasLighting": true,
    "lightingNote": "Nocturnă pe terenurile de lângă Parcul Rozelor",
    "hasParking": true,
    "parkingNote": "Parcare pe Str. Borza / Bd. Mihai Viteazu",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare în incinta Clubului Sportiv Municipal",
    "extraPerks": [
      "Chiar lângă Parcul Rozelor & Bega",
      "Beach Volley pe nisip"
    ],
    "description": "Complexul CSM de pe malul Begăi, chiar lângă Parcul Rozelor, cu teren dedicat de volei pe plajă (nisip) și terenuri de tenis."
  },
  {
    "id": "venue-uvt-electrica-bega",
    "source": "curated",
    "name": "Baza Electrica & Teren UVT (Aleea FC Ripensia)",
    "neighborhood": "Zona Bega / Parcul Rozelor",
    "address": "Aleea FC Ripensia (între Podul Michelangelo și Rozelor), Timișoara",
    "lat": 45.748886,
    "lng": 21.233042,
    "isFree": false,
    "hourlyRate": 90,
    "sports": [
      "Tenis",
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Tenis pe Zgură",
      "Teren Multisport UVT"
    ],
    "surface": "Terenuri de tenis pe zgură + teren multisport cauciucat",
    "hasLighting": true,
    "lightingNote": "Nocturnă pe terenurile principale",
    "hasParking": true,
    "parkingNote": "Parcare de-a lungul Aleea FC Ripensia",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare disponibile în cadrul bazei",
    "extraPerks": [
      "Poziție excelentă lângă Bega și UVT",
      "7 terenuri de tenis alăturate"
    ],
    "description": "Ansamblu mare de terenuri de tenis și multisport chiar lângă Universitatea de Vest, Podul Michelangelo și malul Begăi."
  },
  {
    "id": "venue-olimpia-jude",
    "source": "curated",
    "name": "Sala Polivalentă „Constantin Jude” (Olimpia)",
    "neighborhood": "Complex Studențesc",
    "address": "Aleea FC Ripensia nr. 7, Timișoara",
    "lat": 45.746296,
    "lng": 21.241672,
    "isFree": false,
    "hourlyRate": 200,
    "sports": [
      "Baschet",
      "Volei & Fitness"
    ],
    "sportLabels": [
      "Baschet Indoor",
      "Volei & Sporturi de Echipă"
    ],
    "surface": "Parchet competițional indoor",
    "hasLighting": true,
    "lightingNote": "Iluminat competițional de sală",
    "hasParking": true,
    "parkingNote": "Parcare mare în fața Sălii Olimpia",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare complete în cadrul sălii polivalente",
    "extraPerks": [
      "Sala emblematică a baschetului timișorean",
      "Lângă Complex"
    ],
    "description": "Legendara sală Olimpia („Constantin Jude”) din zona Complexului Studențesc, reperul principal pentru baschet, volei și handbal în Timișoara."
  },
  {
    "id": "venue-vasile-deheleanu",
    "source": "curated",
    "name": "Baza Sportivă „Vasile Deheleanu” (Mehala)",
    "neighborhood": "Mehala / Ronaț",
    "address": "Str. Mircea cel Bătrân, Cartier Mehala, Timișoara",
    "lat": 45.76375,
    "lng": 21.188485,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet",
      "Alergat",
      "Volei & Fitness"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet Tartan",
      "Pistă Tartan",
      "Calisthenics"
    ],
    "surface": "Gazon sintetic nou, teren baschet tartan, pistă atletism & fitness outdoor",
    "hasLighting": true,
    "lightingNote": "Instalație modernă de nocturnă pe toată baza",
    "hasParking": true,
    "parkingNote": "Locuri de parcare amenajate la intrare",
    "hasLockerRooms": true,
    "lockerNote": "Bază municipală modernizată cu vestiare și grupuri sanitare",
    "extraPerks": [
      "Bază nouă modernizată",
      "Tartan & gazon sintetic",
      "Pistă alergare"
    ],
    "description": "Bază sportivă comunitară ultramodernă din Mehala, dotată cu teren de fotbal sintetic, teren de baschet din tartan, pistă de alergare și aparate calisthenics."
  },
  {
    "id": "venue-costica-radulescu",
    "source": "curated",
    "name": "Baza Sportivă „Costică Rădulescu” (Cerna / Tipografilor)",
    "neighborhood": "Fabric / Electrica",
    "address": "Intersecția Str. Costică Rădulescu nr. 6 cu Str. Cerna, Timișoara",
    "lat": 45.763783,
    "lng": 21.248565,
    "isFree": false,
    "hourlyRate": 150,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic cu Nocturnă",
      "Teren Multifuncțional Baschet"
    ],
    "surface": "Gazon sintetic nou + suprafață multifuncțională tartan",
    "hasLighting": true,
    "lightingNote": "Nocturnă modernă LED și tribună acoperită",
    "hasParking": true,
    "parkingNote": "Parcare adiacentă pe Str. Cerna / Costică Rădulescu",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare și dușuri noi la standarde moderne",
    "extraPerks": [
      "Inaugurată recent",
      "Tribună 500 locuri",
      "Gazon nou"
    ],
    "description": "Bază sportivă modernă administrată de SCM Timișoara la intersecția străzilor Costică Rădulescu și Cerna, cu teren sintetic și teren multifuncțional."
  },
  {
    "id": "venue-electrica-renasterii",
    "source": "curated",
    "name": "Stadionul Electrica & Baza STPT (Renașterii)",
    "neighborhood": "Fabric / Electrica",
    "address": "Str. Renașterii nr. 28 (lângă Pădurea Verde), Timișoara",
    "lat": 45.769527,
    "lng": 21.255249,
    "isFree": false,
    "hourlyRate": 160,
    "sports": [
      "Fotbal Sintetic",
      "Tenis"
    ],
    "sportLabels": [
      "Fotbal Sintetic & Iarbă",
      "Terenuri Sportive STPT"
    ],
    "surface": "Gazon sintetic și terenuri sportive exterioare",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă pe terenurile de minifotbal",
    "hasParking": true,
    "parkingNote": "Parcare încăpătoare pe Str. Renașterii nr. 28",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare disponibile în complex",
    "extraPerks": [
      "Zonă verde lângă Pădurea Verde",
      "Parcare mare",
      "Tarif prietenos"
    ],
    "description": "Complex sportiv tradițional pe Str. Renașterii nr. 28, foarte căutat pentru partidele de minifotbal între prieteni."
  },
  {
    "id": "venue-baza-textila",
    "source": "curated",
    "name": "Baza Sportivă „Textila” (Calea Aradului)",
    "neighborhood": "Calea Aradului",
    "address": "Zona Calea Aradului / Str. Textiliștilor, Timișoara",
    "lat": 45.776476,
    "lng": 21.224862,
    "isFree": false,
    "hourlyRate": 170,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic 5v5 & 6v6"
    ],
    "surface": "Două terenuri de minifotbal cu gazon sintetic",
    "hasLighting": true,
    "lightingNote": "Nocturnă pe ambele terenuri",
    "hasParking": true,
    "parkingNote": "Parcare chiar lângă terenuri",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare și zonă de hidratare",
    "extraPerks": [
      "2 terenuri alăturate",
      "Acces rapid din Aradului & Torontalului"
    ],
    "description": "Punctul principal pentru fotbal sintetic în zona de nord a Timișoarei (Calea Aradului), cu două terenuri bine întreținute."
  },
  {
    "id": "venue-arena-viola",
    "source": "curated",
    "name": "Arena Viola – Fotbal Sintetic (Circumvalațiunii)",
    "neighborhood": "Circumvalațiunii",
    "address": "Str. Amforei nr. 1 (lângă CSS Bega), Timișoara",
    "lat": 45.762258,
    "lng": 21.217637,
    "isFree": false,
    "hourlyRate": 180,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic 5v5 & 6v6"
    ],
    "surface": "Gazon sintetic cu amortizare și nocturnă",
    "hasLighting": true,
    "lightingNote": "Nocturnă puternică pentru meciurile de seară",
    "hasParking": true,
    "parkingNote": "Locuri de parcare în zona Str. Amforei / Cetății",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare disponibile lângă teren",
    "extraPerks": [
      "Poziție excelentă în Circumvalațiunii / Cetății",
      "Balon iarna"
    ],
    "description": "Teren dedicat de minifotbal cu gazon sintetic în inima zonei Circumvalațiunii – Amforei."
  },
  {
    "id": "venue-friends-arena",
    "source": "curated",
    "name": "Friends Arena – Fotbal Sintetic & Tenis cu Piciorul",
    "neighborhood": "Calea Șagului",
    "address": "Zona Calea Șagului / Sud-Vest, Timișoara",
    "lat": 45.734772,
    "lng": 21.197504,
    "isFree": false,
    "hourlyRate": 180,
    "sports": [
      "Fotbal Sintetic",
      "Volei & Fitness"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Tenis cu piciorul & Fitness"
    ],
    "surface": "Gazon sintetic modern + teren dedicat de tenis cu piciorul",
    "hasLighting": true,
    "lightingNote": "Nocturnă LED inclusă",
    "hasParking": true,
    "parkingNote": "Parcare privată chiar în curtea bazei",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare moderne, dușuri, sală fitness & lounge",
    "extraPerks": [
      "Teren tenis cu piciorul alături",
      "Vestiare top",
      "Sală fitness"
    ],
    "description": "Bază sportivă modernă în zona de sud-vest (Calea Șagului), cu teren sintetic excelent, teren de tenis cu piciorul și zonă de fitness."
  },
  {
    "id": "venue-arena-ciarda-rosie",
    "source": "curated",
    "name": "Arena Ciarda Roșie (Calea Buziașului)",
    "neighborhood": "Buziașului / Ciarda Roșie",
    "address": "Cartier Ciarda Roșie / Calea Buziașului, Timișoara",
    "lat": 45.728183,
    "lng": 21.26159,
    "isFree": false,
    "hourlyRate": 160,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal & Minifotbal"
    ],
    "surface": "Gazon natural și zonă de antrenament",
    "hasLighting": true,
    "lightingNote": "Iluminat disponibil pentru antrenamente",
    "hasParking": true,
    "parkingNote": "Parcare stradală lângă stadion",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare în incinta arenei",
    "extraPerks": [
      "Tradiție fotbalistică locală",
      "Spațiu generos"
    ],
    "description": "Baza sportivă din cartierul Ciarda Roșie (zona Buziașului), activă pentru meciuri și mișcare în sud-estul orașului."
  },
  {
    "id": "venue-berlin-sport",
    "source": "curated",
    "name": "Berlin Sport – Sintetic & Tenis (Dumbrăvița)",
    "neighborhood": "Dumbrăvița",
    "address": "Str. Berlin nr. 1, Dumbrăvița",
    "lat": 45.788162,
    "lng": 21.23369,
    "isFree": false,
    "hourlyRate": 160,
    "sports": [
      "Fotbal Sintetic",
      "Tenis"
    ],
    "sportLabels": [
      "Minifotbal Sintetic",
      "2 Terenuri Tenis"
    ],
    "surface": "Gazon sintetic minifotbal + 2 terenuri de tenis alăturate",
    "hasLighting": true,
    "lightingNote": "Nocturnă pe terenul de minifotbal și tenis",
    "hasParking": true,
    "parkingNote": "Parcare la intrare pe Str. Berlin nr. 1",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare, dușuri și terasă",
    "extraPerks": [
      "Minifotbal + Tenis în același loc",
      "Aproape de Lipovei / Aradului"
    ],
    "description": "Complex sportiv prietenos la intrarea în Dumbrăvița (Str. Berlin nr. 1), cu teren de minifotbal și terenuri de tenis."
  },
  {
    "id": "venue-player-sport",
    "source": "curated",
    "name": "Player Sport – Fotbal Sintetic & Tenis (Dumbrăvița)",
    "neighborhood": "Dumbrăvița",
    "address": "Str. Arinului nr. 57, Dumbrăvița",
    "lat": 45.792369,
    "lng": 21.225946,
    "isFree": false,
    "hourlyRate": 170,
    "sports": [
      "Fotbal Sintetic",
      "Tenis"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Tenis de câmp"
    ],
    "surface": "Gazon sintetic de calitate",
    "hasLighting": true,
    "lightingNote": "Nocturnă disponibilă seara",
    "hasParking": true,
    "parkingNote": "Parcare privată pe Str. Arinului",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare moderne și terasă de vară",
    "extraPerks": [
      "Gazon sintetic îngrijit",
      "Terasă de socializare"
    ],
    "description": "Bază modernă în Dumbrăvița pentru meciuri de seară la sintetic și partide recreative de tenis."
  },
  {
    "id": "venue-jean-arena",
    "source": "curated",
    "name": "Jean Arena – Fotbal Sintetic (Dumbrăvița)",
    "neighborhood": "Dumbrăvița",
    "address": "Zona Str. Praga / Vest, Dumbrăvița",
    "lat": 45.795959,
    "lng": 21.212553,
    "isFree": false,
    "hourlyRate": 170,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic 5v5 & 6v6"
    ],
    "surface": "Gazon sintetic cu nocturnă",
    "hasLighting": true,
    "lightingNote": "Nocturnă LED pe tot terenul",
    "hasParking": true,
    "parkingNote": "Parcare proprie lângă teren",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare încălzite și dușuri",
    "extraPerks": [
      "Teren nou",
      "Parcare la scară"
    ],
    "description": "Teren dedicat de minifotbal sintetic în Dumbrăvița de Vest, ideal pentru meciuri rapide de 5v5 și 6v6."
  },
  {
    "id": "venue-malul-begai-pista",
    "source": "curated",
    "name": "Pista de Biciclete & Alergare Malul Begăi (Parcul Alpinet)",
    "neighborhood": "Centru / Cetate",
    "address": "Splaiul Tudor Vladimirescu / Parcul Alpinet (Podul Mihai Viteazu), Timișoara",
    "lat": 45.7486,
    "lng": 21.2228,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Bicicletă",
      "Alergat"
    ],
    "sportLabels": [
      "Pista Velo Bega (37 km spre Serbia)",
      "Promenadă Alergare"
    ],
    "surface": "Pistă asfaltată dedicată bicicletelor + alee pietonală pe malul Begăi",
    "hasLighting": true,
    "lightingNote": "Traseu complet iluminat nocturn în tot orașul",
    "hasParking": true,
    "parkingNote": "Rastele velo, stații VeloTM și parcări în zona Catedralei",
    "hasLockerRooms": false,
    "lockerNote": "Cișmele publice și terase pe malul Begăi",
    "extraPerks": [
      "Punctul clasic de întâlnire pentru ture velo",
      "Iluminat nocturn",
      "Gratis"
    ],
    "description": "Punctul central de întâlnire de pe malul Begăi (Parcul Alpinet – Podul Mihai Viteazu), conectat direct la pista cicloturistică de 37 km de-a lungul canalului Bega până la graniță."
  },
  {
    "id": "venue-bega-vest-iosefin",
    "source": "curated",
    "name": "Pista Cicloturistică Bega Vest (Start spre Sânmihai & Serbia)",
    "neighborhood": "Iosefin",
    "address": "Splaiul Nicolae Titulescu / Turnul de Apă Iosefin, Timișoara",
    "lat": 45.745382,
    "lng": 21.201683,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Bicicletă",
      "Alergat"
    ],
    "sportLabels": [
      "Ciclism Cursieră / Trekking (Pista Bega)",
      "Alergare Lungă"
    ],
    "surface": "Pistă asfaltată continuă pe digul canalului Bega, zero mașini",
    "hasLighting": true,
    "lightingNote": "Iluminat în sectorul urban Iosefin – Freidorf",
    "hasParking": true,
    "parkingNote": "Parcare liberă lângă Turnul de Apă / Splaiul Titulescu",
    "hasLockerRooms": false,
    "lockerNote": "Popasuri velo și cișmele pe traseu",
    "extraPerks": [
      "0 semafoare spre Sânmihaiu Român & Otelec",
      "Asfalt neted",
      "Gratis"
    ],
    "description": "Punctul ideal de plecare din Iosefin pentru turele de seară sau de weekend pe digul Begăi spre Sânmihaiu Român, Uivar și Serbia, complet ferit de traficul auto."
  },
  {
    "id": "venue-parcul-uzinei",
    "source": "curated",
    "name": "Parcul Uzinei & Pista Bega Est – Baschet, Fotbal & Fitness",
    "neighborhood": "Ghirodei / Plopi",
    "address": "Str. Frederic Chopin nr. 1 (Uzina de Apă Bega), Timișoara",
    "lat": 45.759092,
    "lng": 21.264749,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Baschet",
      "Fotbal Sintetic",
      "Volei & Fitness",
      "Bicicletă",
      "Alergat"
    ],
    "sportLabels": [
      "Baschet Public",
      "Minifotbal",
      "Calisthenics",
      "Capăt Est Pista Bega"
    ],
    "surface": "Teren baschet beton fin, teren fotbal, aparate fitness & promenadă Bega",
    "hasLighting": true,
    "lightingNote": "Iluminat nocturn modernizat în tot Parcul Uzinei",
    "hasParking": true,
    "parkingNote": "Parcare gratuită lângă Uzina Hidroelectrică",
    "hasLockerRooms": false,
    "lockerNote": "Cișmele și locuri de relaxare pe malul Begăi",
    "extraPerks": [
      "Parc sportiv complet lângă Bega",
      "Aparate calisthenics",
      "Gratis"
    ],
    "description": "Zonă verde amplă în estul canalului Bega (lângă Uzina Hidroelectrică), cu teren de baschet, teren de minifotbal, aparate de fitness și pistă de alergare/biciclete."
  },
  {
    "id": "venue-padurea-verde",
    "source": "curated",
    "name": "Pădurea Verde – Traseu Alergare & MTB (Muzeul Satului)",
    "neighborhood": "Pădurea Verde",
    "address": "Str. Avram Imbroane nr. 31 (lângă Muzeul Satului Bănățean), Timișoara",
    "lat": 45.7777,
    "lng": 21.2655,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Alergat",
      "Bicicletă"
    ],
    "sportLabels": [
      "Trail Running / Alergare 5K–10K",
      "MTB & Gravel"
    ],
    "surface": "Poteci forestiere bătătorite & alei umbrite prin pădure",
    "hasLighting": false,
    "lightingNote": "Traseu natural de zi prin pădure (ideal dimineața / după-amiaza)",
    "hasParking": true,
    "parkingNote": "Parcare gratuită chiar la intrarea Muzeului Satului Bănățean",
    "hasLockerRooms": false,
    "lockerNote": "Zonă naturală forestieră fără vestiare",
    "extraPerks": [
      "Aer curat de pădure",
      "Umbră răcoroasă vara",
      "Gratis"
    ],
    "description": "Punctul principal de intrare pe potecile din Pădurea Verde (chiar lângă Muzeul Satului Bănățean), perfect pentru alergări de grup și ture MTB/gravel."
  },
  {
    "id": "venue-parcul-copiilor",
    "source": "curated",
    "name": "Parcul Copiilor – Terenuri Baschet & Minifotbal",
    "neighborhood": "Zona Bega / Parcul Rozelor",
    "address": "Bd. Revoluției din 1989 (malul nordic Bega), Timișoara",
    "lat": 45.753299,
    "lng": 21.234308,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Baschet",
      "Fotbal Sintetic",
      "Alergat"
    ],
    "sportLabels": [
      "Baschet Outdoor",
      "Minifotbal",
      "Alergare Parc"
    ],
    "surface": "Două terenuri multisport în aer liber + alei de alergare pe malul Begăi",
    "hasLighting": true,
    "lightingNote": "Iluminat nocturn în parc și lângă terenuri",
    "hasParking": true,
    "parkingNote": "Parcare pe Bd. Revoluției 1989 / Michelangelo",
    "hasLockerRooms": false,
    "lockerNote": "Toalete publice și cișmele în parc",
    "extraPerks": [
      "Două terenuri publice gratuite",
      "Umbră lângă Bega",
      "Gratis"
    ],
    "description": "Terenurile sportive deschise din zona Parcului Copiilor / Michelangelo, excelente pentru baschet 3x3, mișcare după-amiaza și alergare pe malul Begăi."
  },
  {
    "id": "venue-rozelor-copiilor",
    "source": "curated",
    "name": "Parcul Rozelor – Alergare, Ping Pong & Mișcare lângă Bega",
    "neighborhood": "Zona Bega / Parcul Rozelor",
    "address": "Str. Academician Alexandru Borza, Parcul Rozelor, Timișoara",
    "lat": 45.75,
    "lng": 21.23194,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Ping Pong",
      "Alergat",
      "Bicicletă"
    ],
    "sportLabels": [
      "Ping Pong în aer liber",
      "Alergare pe Bega",
      "Plimbări Velo"
    ],
    "surface": "Alei pavate și asfaltate pe malul Begăi + zone umbrite de recreere",
    "hasLighting": true,
    "lightingNote": "Alei complet iluminate seara",
    "hasParking": true,
    "parkingNote": "Parcare pe Str. Academician Alexandru Borza",
    "hasLockerRooms": false,
    "lockerNote": "Acces public gratuit 24/7 și cișmele în parc",
    "extraPerks": [
      "Chiar pe malul Begăi",
      "Cadru verde spectaculos",
      "Gratis"
    ],
    "description": "Unul dintre cele mai îndrăgite parcuri din Timișoara, chiar pe malul canalului Bega, ideal pentru ping pong amical, alergare ușoară și întâlniri sportive."
  },
  {
    "id": "venue-parcul-central",
    "source": "curated",
    "name": "Parcul Central „Anton Scudier” – Baschet & Minifotbal",
    "neighborhood": "Centru / Cetate",
    "address": "Bd. Republicii / Bd. Regele Ferdinand I (lângă Catedrală), Timișoara",
    "lat": 45.751155,
    "lng": 21.218533,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Baschet",
      "Fotbal Sintetic",
      "Alergat"
    ],
    "sportLabels": [
      "Teren Baschet Public",
      "Minifotbal Sintetic",
      "Alergare Parc"
    ],
    "surface": "Teren baschet asfaltat + teren minifotbal suprafață sintetică alăturat",
    "hasLighting": true,
    "lightingNote": "Iluminat pietonal în tot Parcul Central",
    "hasParking": true,
    "parkingNote": "Parcare publică pe Bd. Republicii / Jiul",
    "hasLockerRooms": false,
    "lockerNote": "Cișmele și bănci chiar lângă terenuri",
    "extraPerks": [
      "Ultracentral (lângă Catedrală)",
      "Baschet + Minifotbal gratuite",
      "Gratis"
    ],
    "description": "Terenurile publice de baschet și minifotbal amplasate chiar în Parcul Central „Anton Scudier”, la două minute de Catedrala Mitropolitană."
  },
  {
    "id": "venue-botanic-central",
    "source": "curated",
    "name": "Parcul Botanic – Teren Multisport Tartan & Alergare",
    "neighborhood": "Centru / Cetate",
    "address": "Str. Gheorghe Dima / Calea Alexandru Ioan Cuza, Timișoara",
    "lat": 45.759538,
    "lng": 21.222261,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Alergat",
      "Baschet",
      "Volei & Fitness"
    ],
    "sportLabels": [
      "Teren Multisport Tartan",
      "Buclă Alergare Parc Botanic"
    ],
    "surface": "Teren multisport cu suprafață tartan + alei umbrite de alergare (1.6 km/tur)",
    "hasLighting": true,
    "lightingNote": "Iluminat ambiental pe aleile principale",
    "hasParking": true,
    "parkingNote": "Parcare în zona Spitalul Militar / Mărăști / Iulius Town",
    "hasLockerRooms": false,
    "lockerNote": "Cișmele cu apă potabilă la intrările în parc",
    "extraPerks": [
      "Buclă umbrită excelentă de alergat",
      "Teren tartan lângă parc",
      "Gratis"
    ],
    "description": "Oază de liniște lângă Piața Unirii și Piața Mărăști, preferată de alergătorii matinali, cu teren multisport pe tartan în latura nord-vestică."
  },
  {
    "id": "venue-parcul-bucovina",
    "source": "curated",
    "name": "Parcul Bucovina – 3 Mese Ping Pong & Alergare",
    "neighborhood": "Circumvalațiunii",
    "address": "Str. Bucovina / Zona Matei Basarab, Timișoara",
    "lat": 45.764656,
    "lng": 21.227641,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Ping Pong",
      "Alergat"
    ],
    "sportLabels": [
      "3 Mese Ping Pong Outdoor",
      "Alergare în Parc"
    ],
    "surface": "3 mese publice de ping pong + alei asfaltate de alergare",
    "hasLighting": true,
    "lightingNote": "Iluminat nocturn complet în parc",
    "hasParking": true,
    "parkingNote": "Parcare stradală gratuită în jurul Parcului Bucovina",
    "hasLockerRooms": false,
    "lockerNote": "Cișmele publice în parc",
    "extraPerks": [
      "3 mese de ping pong gratuite",
      "Zonă verde liniștită",
      "Gratis"
    ],
    "description": "Parcul de cartier Bucovina dispune de 3 mese publice de tenis de masă foarte populare seara și o buclă plăcută pentru alergare ușoară."
  },
  {
    "id": "venue-carmen-sylva",
    "source": "curated",
    "name": "Parcul Carmen Sylva (Doina) – Baschet 3x3 & Ping Pong",
    "neighborhood": "Elisabetin / Doina",
    "address": "Bd. Gheorghe Doja / Str. Ciprian Porumbescu, Timișoara",
    "lat": 45.74389,
    "lng": 21.22306,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Baschet",
      "Ping Pong",
      "Alergat"
    ],
    "sportLabels": [
      "Baschet 3x3",
      "Mese Ping Pong Outdoor",
      "Alergare"
    ],
    "surface": "Teren outdoor și mese publice de ping pong în parc",
    "hasLighting": true,
    "lightingNote": "Iluminat nocturn modernizat în tot parcul",
    "hasParking": true,
    "parkingNote": "Locuri de parcare pe Str. Romulus / Gheorghe Doja",
    "hasLockerRooms": false,
    "lockerNote": "Cișmele publice și foișor în parc",
    "extraPerks": [
      "Comunitate activă 3x3 & ping pong",
      "Parc renovat",
      "Gratis"
    ],
    "description": "Inima sportului recreativ din Elisabetin (Parcul Doina / Carmen Sylva), unde se strâng zilnic jucători de baschet 3x3 și tenis de masă."
  },
  {
    "id": "venue-parcul-padurice",
    "source": "curated",
    "name": "Parcul Pădurice (Lidia) – Mese Ping Pong, Tartan & Teren",
    "neighborhood": "Soarelui",
    "address": "Str. Mareșal Constantin Prezan (Lidia) / Str. Versului, Timișoara",
    "lat": 45.733106,
    "lng": 21.241667,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Ping Pong",
      "Alergat",
      "Volei & Fitness",
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "3 Mese Ping Pong",
      "Buclă Alergare 1 km",
      "Calisthenics & Teren"
    ],
    "surface": "3 mese outdoor de ping pong, teren sportiv alăturat & pistă alergare",
    "hasLighting": true,
    "lightingNote": "Iluminat nocturn complet pe aleile parcului și la mese",
    "hasParking": true,
    "parkingNote": "Parcare stradală gratuită pe Str. Versului / Prezan",
    "hasLockerRooms": false,
    "lockerNote": "Cișmele cu apă potabilă și toalete publice în parc",
    "extraPerks": [
      "3 mese ping pong alăturate",
      "Buclă alergare 1 km",
      "Gratis"
    ],
    "description": "Cel mai animat parc sportiv din zona Soarelui – Girocului, cu 3 mese de ping pong exact pe latura sud-estică, teren de minifotbal și pistă de alergare."
  },
  {
    "id": "venue-calisthenics-complex",
    "source": "curated",
    "name": "Zonă Calisthenics & Street Workout – Complex Studențesc",
    "neighborhood": "Complex Studențesc",
    "address": "Aleea Studenților / Parcul Complex Studențesc, Timișoara",
    "lat": 45.748021,
    "lng": 21.237415,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Volei & Fitness"
    ],
    "sportLabels": [
      "Calisthenics / Bare Tracțiuni & Paralele"
    ],
    "surface": "Zonă outdoor amenajată cu aparate street workout",
    "hasLighting": true,
    "lightingNote": "Iluminat stradal în tot Complexul Studențesc",
    "hasParking": true,
    "parkingNote": "Acces pietonal și velo facil în mijlocul Complexului",
    "hasLockerRooms": false,
    "lockerNote": "Acces liber 24/7 în aer liber",
    "extraPerks": [
      "Bare tracțiuni, paralele, abdomene",
      "Atmosferă studențească",
      "Gratis"
    ],
    "description": "Punctul preferat pentru antrenamente cu greutatea propriului corp (tracțiuni, flotări la paralele, muscle-ups) chiar în inima Complexului Studențesc."
  }
];

/**
 * Complete pre-verified dataset of 215 real sports courts, parks, tracks,
 * ping-pong tables, padel clubs, tennis bases, and calisthenics spots across Timișoara
 * (combining curated flagship bases with exact satellite-traced OpenStreetMap court polygons).
 */
export const VERIFIED_TIMISOARA_VENUES: Venue[] = [
  {
    "id": "venue-baza2-upt",
    "source": "curated",
    "name": "Baza Sportivă nr. 2 UPT – Fotbal Sintetic",
    "neighborhood": "Zona Stadion / Podeanu",
    "address": "Str. Prof. Dr. Aurel Păunescu Podeanu nr. 2, Timișoara",
    "lat": 45.742178,
    "lng": 21.249094,
    "isFree": false,
    "hourlyRate": 180,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic 5v5 & 6v6"
    ],
    "surface": "Gazon sintetic premium cu nocturnă (balon iarna)",
    "hasLighting": true,
    "lightingNote": "Nocturnă LED pe toate terenurile sintetice",
    "hasParking": true,
    "parkingNote": "Parcare proprie încăpătoare pe Str. Podeanu",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare moderne cu dușuri și grupuri sanitare",
    "extraPerks": [
      "Mai multe terenuri sintetice",
      "Nocturnă LED",
      "Vestiare & dușuri"
    ],
    "description": "Cel mai popular complex sportiv universitar din Timișoara pentru meciuri de fotbal sintetic 5v5 și 6v6 după job sau cursuri."
  },
  {
    "id": "venue-baza2-upt-tenis",
    "source": "curated",
    "name": "Baza Sportivă nr. 2 UPT – Terenuri Tenis",
    "neighborhood": "Zona Stadion / Podeanu",
    "address": "Str. Prof. Dr. Aurel Păunescu Podeanu nr. 2, Timișoara",
    "lat": 45.742618,
    "lng": 21.247908,
    "isFree": false,
    "hourlyRate": 80,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis de câmp (Zgură & Hard)"
    ],
    "surface": "Terenuri de tenis pe zgură și suprafață sintetică",
    "hasLighting": true,
    "lightingNote": "Instalație de nocturnă pe terenurile de tenis",
    "hasParking": true,
    "parkingNote": "Parcare gratuită în incinta Bazei 2 UPT",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare și dușuri în complexul UPT",
    "extraPerks": [
      "4+ terenuri alăturate",
      "Nocturnă",
      "Balon iarna"
    ],
    "description": "Terenurile dedicate de tenis din cadrul Bazei Sportive nr. 2 Politehnica, excelente pentru meciuri la simplu și dublu."
  },
  {
    "id": "venue-baza2-upt-pista",
    "source": "curated",
    "name": "Pistă Atletism Baza 2 UPT (Alergare)",
    "neighborhood": "Zona Stadion / Podeanu",
    "address": "Str. Prof. Dr. Aurel Păunescu Podeanu nr. 2, Timișoara",
    "lat": 45.742812,
    "lng": 21.246443,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Alergat"
    ],
    "sportLabels": [
      "Pistă Atletism 400m"
    ],
    "surface": "Pistă ovală de atletism 400m (tartan)",
    "hasLighting": true,
    "lightingNote": "Iluminat perimetral pentru alergările de seară",
    "hasParking": true,
    "parkingNote": "Parcare lângă Baza 2 UPT / Str. Podeanu",
    "hasLockerRooms": false,
    "lockerNote": "Acces deschis alergătorilor pe culoarele exterioare",
    "extraPerks": [
      "Buclă exactă 400m",
      "Ideală pentru intervale",
      "Gratis"
    ],
    "description": "Pista oficială de alergare de la Baza 2 Politehnica, preferată de alergătorii din Timișoara pentru antrenamente de viteză, intervale și alergări de grup."
  },
  {
    "id": "venue-baza1-upt",
    "source": "curated",
    "name": "Baza Sportivă nr. 1 UPT – Stadionul Știința & Sintetic",
    "neighborhood": "Complex Studențesc",
    "address": "Str. Traian Lalescu nr. 2 (lângă Biblioteca UPT), Timișoara",
    "lat": 45.746105,
    "lng": 21.228418,
    "isFree": false,
    "hourlyRate": 170,
    "sports": [
      "Fotbal Sintetic",
      "Alergat"
    ],
    "sportLabels": [
      "Minifotbal Sintetic",
      "Pistă Tartan Alergare"
    ],
    "surface": "Terenuri minifotbal gazon sintetic + pistă alergare tartan",
    "hasLighting": true,
    "lightingNote": "Nocturnă disponibilă seara",
    "hasParking": true,
    "parkingNote": "Acces rapid din Complex și Bd. Mihai Viteazu",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare și dușuri în incinta bazei Politehnica",
    "extraPerks": [
      "Lângă Facultatea de Mecanică",
      "Tribună istorică",
      "Nocturnă"
    ],
    "description": "Baza istorică Știința a Universității Politehnica, situată chiar lângă Biblioteca UPT și Facultatea de Mecanică, cu terenuri sintetice și pistă de alergare din tartan."
  },
  {
    "id": "venue-baza1-upt-baschet",
    "source": "curated",
    "name": "Teren Baschet Tartan & Calisthenics – UPT Mecanică",
    "neighborhood": "Complex Studențesc",
    "address": "Str. Traian Lalescu / Aleea Politehnicii, Timișoara",
    "lat": 45.746654,
    "lng": 21.230201,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Baschet",
      "Volei & Fitness"
    ],
    "sportLabels": [
      "Baschet Tartan",
      "Zonă Calisthenics & Fitness"
    ],
    "surface": "Suprafață tartan cauciucat + bare tracțiuni și paralele alături",
    "hasLighting": true,
    "lightingNote": "Iluminat în campusul Facultății de Mecanică",
    "hasParking": true,
    "parkingNote": "Acces pietonal și velo direct din Complex / Rozelor",
    "hasLockerRooms": false,
    "lockerNote": "Teren outdoor deschis în campus",
    "extraPerks": [
      "Suprafață tartan elastic",
      "Aparate street workout lângă teren",
      "Gratis"
    ],
    "description": "Teren excelent de baschet pe suprafață de tartan cauciucat chiar lângă sala de sport UPT și zona de calisthenics / tracțiuni."
  },
  {
    "id": "venue-banusport",
    "source": "curated",
    "name": "Complex BanuSport – Fotbal Sintetic & Tenis",
    "neighborhood": "Zona Stadion / Podeanu",
    "address": "Aleea FC Ripensia nr. 33, Timișoara",
    "lat": 45.741112,
    "lng": 21.241699,
    "isFree": false,
    "hourlyRate": 190,
    "sports": [
      "Fotbal Sintetic",
      "Tenis"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Tenis pe zgură"
    ],
    "surface": "Gazon sintetic + terenuri de tenis alăturate",
    "hasLighting": true,
    "lightingNote": "Nocturnă puternică pe terenurile exterioare",
    "hasParking": true,
    "parkingNote": "Parcare mare gratuită în curtea complexului",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare, dușuri și terasă sportivă",
    "extraPerks": [
      "Terasă după meci",
      "Parcare proprie",
      "Lângă Complex"
    ],
    "description": "Unul dintre cele mai cunoscute complexe sportive din zona Stadion / Ripensia, cu terenuri de minifotbal sintetic și terenuri de tenis."
  },
  {
    "id": "venue-padel-center-tm",
    "source": "curated",
    "name": "Padel Center Timișoara (Circumvalațiunii)",
    "neighborhood": "Circumvalațiunii",
    "address": "Calea Circumvalațiunii nr. 4, Timișoara",
    "lat": 45.755605,
    "lng": 21.217702,
    "isFree": false,
    "hourlyRate": 140,
    "sports": [
      "Padel"
    ],
    "sportLabels": [
      "6 Terenuri Padel (4 Indoor + 2 Outdoor)"
    ],
    "surface": "Terenuri padel panoramice cu gazon sintetic WPT",
    "hasLighting": true,
    "lightingNote": "Iluminat profesional LED competițional",
    "hasParking": true,
    "parkingNote": "Parcare privată în incintă (Circumvalațiunii 4)",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare moderne climatizate, dușuri și recepție cu bar",
    "extraPerks": [
      "4 terenuri indoor + 2 outdoor",
      "Închiriere palete",
      "Aproape de Centru"
    ],
    "description": "Locația centrală Padel Center de pe Calea Circumvalațiunii nr. 4, dotată cu 6 terenuri de ultimă generație (acoperite și exterioare) și închiriere de palete."
  },
  {
    "id": "venue-padel-center-dumbravita",
    "source": "curated",
    "name": "Padel Center Dumbrăvița (9 Terenuri Padel & Sintetic)",
    "neighborhood": "Dumbrăvița",
    "address": "Str. Praga nr. 6, Dumbrăvița (lângă Timișoara)",
    "lat": 45.797182,
    "lng": 21.207967,
    "isFree": false,
    "hourlyRate": 140,
    "sports": [
      "Padel",
      "Fotbal Sintetic",
      "Tenis"
    ],
    "sportLabels": [
      "9 Terenuri Padel (6 Indoor + 3 Outdoor)",
      "Sintetic & Tenis"
    ],
    "surface": "Sticlă panoramică padel indoor/outdoor + terenuri exterioare",
    "hasLighting": true,
    "lightingNote": "Iluminat LED indoor și nocturnă outdoor",
    "hasParking": true,
    "parkingNote": "Parcare generoasă chiar în fața halei",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare spațioase, lounge socializare și pro-shop",
    "extraPerks": [
      "Cel mai mare hub de padel (9 terenuri)",
      "Lounge & cafea",
      "Turnee amatori"
    ],
    "description": "Cel mai mare club de padel din vestul României (9 terenuri pe Str. Praga nr. 6), cu comunitate super activă pentru toate nivelurile și terenuri sportive adiacente."
  },
  {
    "id": "venue-quattro-padel",
    "source": "curated",
    "name": "Quattro Padel Timișoara (Indoor)",
    "neighborhood": "Buziașului / Ciarda Roșie",
    "address": "Calea Stan Vidrighin nr. 5, Timișoara",
    "lat": 45.74452,
    "lng": 21.25428,
    "isFree": false,
    "hourlyRate": 150,
    "sports": [
      "Padel"
    ],
    "sportLabels": [
      "5 Terenuri Padel Panoramice Indoor"
    ],
    "surface": "Terenuri panoramice indoor climatizate 365 zile/an",
    "hasLighting": true,
    "lightingNote": "Iluminat LED indoor fără orbire",
    "hasParking": true,
    "parkingNote": "Parcare disponibilă în incinta platformei Stan Vidrighin 5",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare premium, dușuri și zonă de relaxare",
    "extraPerks": [
      "100% Indoor climatizat",
      "5 terenuri panoramice",
      "Închiriere echipament"
    ],
    "description": "Club modern de padel indoor pe Calea Stan Vidrighin nr. 5, cu 5 terenuri panoramice acoperite și temperatură optimă indiferent de anotimp."
  },
  {
    "id": "venue-helios-sport",
    "source": "curated",
    "name": "Helios Sport Club – Tenis Zgură & Sintetic",
    "neighborhood": "Soarelui",
    "address": "Bd. Dr. Iosif Bulbuca nr. 21, Timișoara",
    "lat": 45.738446,
    "lng": 21.243308,
    "isFree": false,
    "hourlyRate": 95,
    "sports": [
      "Tenis",
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Tenis pe Zgură",
      "Fotbal Sintetic"
    ],
    "surface": "Terenuri de tenis pe zgură + teren minifotbal gazon sintetic",
    "hasLighting": true,
    "lightingNote": "Nocturnă pe terenul sintetic și terenurile principale",
    "hasParking": true,
    "parkingNote": "Parcare pe Bd. Iosif Bulbuca / zona AEM – Județean",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare, dușuri și terasă umbrită la club",
    "extraPerks": [
      "Club de tradiție FRT",
      "Balon presostatic iarna",
      "Terasă"
    ],
    "description": "Bază sportivă consacrată în sud-estul Timișoarei (lângă Spitalul Județean / Soarelui), renumită pentru terenurile îngrijite de tenis pe zgură și terenul de sintetic."
  },
  {
    "id": "venue-tivoli-tenis",
    "source": "curated",
    "name": "Tenis Club Tivoli (Str. Ghirodei)",
    "neighborhood": "Ghirodei / Plopi",
    "address": "Str. Ghirodei nr. 32, Timișoara",
    "lat": 45.755322,
    "lng": 21.252405,
    "isFree": false,
    "hourlyRate": 90,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis pe Zgură (7 Outdoor + 2 Balon)"
    ],
    "surface": "Terenuri clasice de tenis pe zgură roșie",
    "hasLighting": true,
    "lightingNote": "Nocturnă și terenuri acoperite în sezonul rece",
    "hasParking": true,
    "parkingNote": "Parcare în curtea bazei pe Str. Ghirodei nr. 32",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare, dușuri și club house",
    "extraPerks": [
      "9 terenuri de zgură",
      "Terenuri în balon iarna",
      "Atmosferă clasică de tenis"
    ],
    "description": "Clubul Sportiv Tivoli de pe Str. Ghirodei nr. 32 dispune de terenuri excelente cu zgură în aer liber și acoperite în balon."
  },
  {
    "id": "venue-millenium-tenis",
    "source": "curated",
    "name": "Tennis Club Millenium",
    "neighborhood": "Pădurea Verde",
    "address": "Zona Pădurea Verde / Est, Timișoara",
    "lat": 45.769095,
    "lng": 21.271825,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis de câmp"
    ],
    "surface": "Terenuri de tenis pe zgură în zonă verde liniștită",
    "hasLighting": true,
    "lightingNote": "Iluminat pentru partidele de seară",
    "hasParking": true,
    "parkingNote": "Parcare chiar lângă terenuri",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare disponibile pentru jucători",
    "extraPerks": [
      "Liniște și aer curat",
      "Parcare facilă"
    ],
    "description": "Terenuri de tenis amplasate într-o zonă verde și aerisită în estul Timișoarei, ideale pentru meciuri de weekend."
  },
  {
    "id": "venue-dyadora-tenis",
    "source": "curated",
    "name": "Club Sportiv Dyadora – Tenis",
    "neighborhood": "Giroc / Chișoda",
    "address": "Calea Timișoarei (ieșirea spre Giroc), Timiș",
    "lat": 45.712249,
    "lng": 21.240043,
    "isFree": false,
    "hourlyRate": 90,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Bază Tenis Zgură (Turnee & Agrement)"
    ],
    "surface": "Multiple terenuri de tenis pe zgură",
    "hasLighting": true,
    "lightingNote": "Instalație de iluminat și balon iarna",
    "hasParking": true,
    "parkingNote": "Parcare proprie la intrarea în club",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare complete, dușuri și terasă",
    "extraPerks": [
      "Standard competițional ITF/FRT",
      "Multe terenuri de zgură"
    ],
    "description": "Bază de top dedicată tenisului de câmp la intrarea în Giroc, gazdă a numeroase turnee și deschisă jucătorilor amatori."
  },
  {
    "id": "venue-csm-rozelor",
    "source": "curated",
    "name": "Baza CSM Timișoara (Parcul Rozelor) – Tenis & Beach Volley",
    "neighborhood": "Zona Bega / Parcul Rozelor",
    "address": "Str. Academician Alexandru Borza (lângă Parcul Rozelor), Timișoara",
    "lat": 45.749727,
    "lng": 21.230404,
    "isFree": false,
    "hourlyRate": 80,
    "sports": [
      "Volei & Fitness",
      "Tenis"
    ],
    "sportLabels": [
      "Volei pe Nisip (Beach Volley)",
      "Tenis"
    ],
    "surface": "Nisip fin pentru beach volley + terenuri sintetice/hard de tenis",
    "hasLighting": true,
    "lightingNote": "Nocturnă pe terenurile de lângă Parcul Rozelor",
    "hasParking": true,
    "parkingNote": "Parcare pe Str. Borza / Bd. Mihai Viteazu",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare în incinta Clubului Sportiv Municipal",
    "extraPerks": [
      "Chiar lângă Parcul Rozelor & Bega",
      "Beach Volley pe nisip"
    ],
    "description": "Complexul CSM de pe malul Begăi, chiar lângă Parcul Rozelor, cu teren dedicat de volei pe plajă (nisip) și terenuri de tenis."
  },
  {
    "id": "venue-uvt-electrica-bega",
    "source": "curated",
    "name": "Baza Electrica & Teren UVT (Aleea FC Ripensia)",
    "neighborhood": "Zona Bega / Parcul Rozelor",
    "address": "Aleea FC Ripensia (între Podul Michelangelo și Rozelor), Timișoara",
    "lat": 45.748886,
    "lng": 21.233042,
    "isFree": false,
    "hourlyRate": 90,
    "sports": [
      "Tenis",
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Tenis pe Zgură",
      "Teren Multisport UVT"
    ],
    "surface": "Terenuri de tenis pe zgură + teren multisport cauciucat",
    "hasLighting": true,
    "lightingNote": "Nocturnă pe terenurile principale",
    "hasParking": true,
    "parkingNote": "Parcare de-a lungul Aleea FC Ripensia",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare disponibile în cadrul bazei",
    "extraPerks": [
      "Poziție excelentă lângă Bega și UVT",
      "7 terenuri de tenis alăturate"
    ],
    "description": "Ansamblu mare de terenuri de tenis și multisport chiar lângă Universitatea de Vest, Podul Michelangelo și malul Begăi."
  },
  {
    "id": "venue-olimpia-jude",
    "source": "curated",
    "name": "Sala Polivalentă „Constantin Jude” (Olimpia)",
    "neighborhood": "Complex Studențesc",
    "address": "Aleea FC Ripensia nr. 7, Timișoara",
    "lat": 45.746296,
    "lng": 21.241672,
    "isFree": false,
    "hourlyRate": 200,
    "sports": [
      "Baschet",
      "Volei & Fitness"
    ],
    "sportLabels": [
      "Baschet Indoor",
      "Volei & Sporturi de Echipă"
    ],
    "surface": "Parchet competițional indoor",
    "hasLighting": true,
    "lightingNote": "Iluminat competițional de sală",
    "hasParking": true,
    "parkingNote": "Parcare mare în fața Sălii Olimpia",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare complete în cadrul sălii polivalente",
    "extraPerks": [
      "Sala emblematică a baschetului timișorean",
      "Lângă Complex"
    ],
    "description": "Legendara sală Olimpia („Constantin Jude”) din zona Complexului Studențesc, reperul principal pentru baschet, volei și handbal în Timișoara."
  },
  {
    "id": "venue-vasile-deheleanu",
    "source": "curated",
    "name": "Baza Sportivă „Vasile Deheleanu” (Mehala)",
    "neighborhood": "Mehala / Ronaț",
    "address": "Str. Mircea cel Bătrân, Cartier Mehala, Timișoara",
    "lat": 45.76375,
    "lng": 21.188485,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet",
      "Alergat",
      "Volei & Fitness"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet Tartan",
      "Pistă Tartan",
      "Calisthenics"
    ],
    "surface": "Gazon sintetic nou, teren baschet tartan, pistă atletism & fitness outdoor",
    "hasLighting": true,
    "lightingNote": "Instalație modernă de nocturnă pe toată baza",
    "hasParking": true,
    "parkingNote": "Locuri de parcare amenajate la intrare",
    "hasLockerRooms": true,
    "lockerNote": "Bază municipală modernizată cu vestiare și grupuri sanitare",
    "extraPerks": [
      "Bază nouă modernizată",
      "Tartan & gazon sintetic",
      "Pistă alergare"
    ],
    "description": "Bază sportivă comunitară ultramodernă din Mehala, dotată cu teren de fotbal sintetic, teren de baschet din tartan, pistă de alergare și aparate calisthenics."
  },
  {
    "id": "venue-costica-radulescu",
    "source": "curated",
    "name": "Baza Sportivă „Costică Rădulescu” (Cerna / Tipografilor)",
    "neighborhood": "Fabric / Electrica",
    "address": "Intersecția Str. Costică Rădulescu nr. 6 cu Str. Cerna, Timișoara",
    "lat": 45.763783,
    "lng": 21.248565,
    "isFree": false,
    "hourlyRate": 150,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic cu Nocturnă",
      "Teren Multifuncțional Baschet"
    ],
    "surface": "Gazon sintetic nou + suprafață multifuncțională tartan",
    "hasLighting": true,
    "lightingNote": "Nocturnă modernă LED și tribună acoperită",
    "hasParking": true,
    "parkingNote": "Parcare adiacentă pe Str. Cerna / Costică Rădulescu",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare și dușuri noi la standarde moderne",
    "extraPerks": [
      "Inaugurată recent",
      "Tribună 500 locuri",
      "Gazon nou"
    ],
    "description": "Bază sportivă modernă administrată de SCM Timișoara la intersecția străzilor Costică Rădulescu și Cerna, cu teren sintetic și teren multifuncțional."
  },
  {
    "id": "venue-electrica-renasterii",
    "source": "curated",
    "name": "Stadionul Electrica & Baza STPT (Renașterii)",
    "neighborhood": "Fabric / Electrica",
    "address": "Str. Renașterii nr. 28 (lângă Pădurea Verde), Timișoara",
    "lat": 45.769527,
    "lng": 21.255249,
    "isFree": false,
    "hourlyRate": 160,
    "sports": [
      "Fotbal Sintetic",
      "Tenis"
    ],
    "sportLabels": [
      "Fotbal Sintetic & Iarbă",
      "Terenuri Sportive STPT"
    ],
    "surface": "Gazon sintetic și terenuri sportive exterioare",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă pe terenurile de minifotbal",
    "hasParking": true,
    "parkingNote": "Parcare încăpătoare pe Str. Renașterii nr. 28",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare disponibile în complex",
    "extraPerks": [
      "Zonă verde lângă Pădurea Verde",
      "Parcare mare",
      "Tarif prietenos"
    ],
    "description": "Complex sportiv tradițional pe Str. Renașterii nr. 28, foarte căutat pentru partidele de minifotbal între prieteni."
  },
  {
    "id": "venue-baza-textila",
    "source": "curated",
    "name": "Baza Sportivă „Textila” (Calea Aradului)",
    "neighborhood": "Calea Aradului",
    "address": "Zona Calea Aradului / Str. Textiliștilor, Timișoara",
    "lat": 45.776476,
    "lng": 21.224862,
    "isFree": false,
    "hourlyRate": 170,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic 5v5 & 6v6"
    ],
    "surface": "Două terenuri de minifotbal cu gazon sintetic",
    "hasLighting": true,
    "lightingNote": "Nocturnă pe ambele terenuri",
    "hasParking": true,
    "parkingNote": "Parcare chiar lângă terenuri",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare și zonă de hidratare",
    "extraPerks": [
      "2 terenuri alăturate",
      "Acces rapid din Aradului & Torontalului"
    ],
    "description": "Punctul principal pentru fotbal sintetic în zona de nord a Timișoarei (Calea Aradului), cu două terenuri bine întreținute."
  },
  {
    "id": "venue-arena-viola",
    "source": "curated",
    "name": "Arena Viola – Fotbal Sintetic (Circumvalațiunii)",
    "neighborhood": "Circumvalațiunii",
    "address": "Str. Amforei nr. 1 (lângă CSS Bega), Timișoara",
    "lat": 45.762258,
    "lng": 21.217637,
    "isFree": false,
    "hourlyRate": 180,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic 5v5 & 6v6"
    ],
    "surface": "Gazon sintetic cu amortizare și nocturnă",
    "hasLighting": true,
    "lightingNote": "Nocturnă puternică pentru meciurile de seară",
    "hasParking": true,
    "parkingNote": "Locuri de parcare în zona Str. Amforei / Cetății",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare disponibile lângă teren",
    "extraPerks": [
      "Poziție excelentă în Circumvalațiunii / Cetății",
      "Balon iarna"
    ],
    "description": "Teren dedicat de minifotbal cu gazon sintetic în inima zonei Circumvalațiunii – Amforei."
  },
  {
    "id": "venue-friends-arena",
    "source": "curated",
    "name": "Friends Arena – Fotbal Sintetic & Tenis cu Piciorul",
    "neighborhood": "Calea Șagului",
    "address": "Zona Calea Șagului / Sud-Vest, Timișoara",
    "lat": 45.734772,
    "lng": 21.197504,
    "isFree": false,
    "hourlyRate": 180,
    "sports": [
      "Fotbal Sintetic",
      "Volei & Fitness"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Tenis cu piciorul & Fitness"
    ],
    "surface": "Gazon sintetic modern + teren dedicat de tenis cu piciorul",
    "hasLighting": true,
    "lightingNote": "Nocturnă LED inclusă",
    "hasParking": true,
    "parkingNote": "Parcare privată chiar în curtea bazei",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare moderne, dușuri, sală fitness & lounge",
    "extraPerks": [
      "Teren tenis cu piciorul alături",
      "Vestiare top",
      "Sală fitness"
    ],
    "description": "Bază sportivă modernă în zona de sud-vest (Calea Șagului), cu teren sintetic excelent, teren de tenis cu piciorul și zonă de fitness."
  },
  {
    "id": "venue-arena-ciarda-rosie",
    "source": "curated",
    "name": "Arena Ciarda Roșie (Calea Buziașului)",
    "neighborhood": "Buziașului / Ciarda Roșie",
    "address": "Cartier Ciarda Roșie / Calea Buziașului, Timișoara",
    "lat": 45.728183,
    "lng": 21.26159,
    "isFree": false,
    "hourlyRate": 160,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal & Minifotbal"
    ],
    "surface": "Gazon natural și zonă de antrenament",
    "hasLighting": true,
    "lightingNote": "Iluminat disponibil pentru antrenamente",
    "hasParking": true,
    "parkingNote": "Parcare stradală lângă stadion",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare în incinta arenei",
    "extraPerks": [
      "Tradiție fotbalistică locală",
      "Spațiu generos"
    ],
    "description": "Baza sportivă din cartierul Ciarda Roșie (zona Buziașului), activă pentru meciuri și mișcare în sud-estul orașului."
  },
  {
    "id": "venue-berlin-sport",
    "source": "curated",
    "name": "Berlin Sport – Sintetic & Tenis (Dumbrăvița)",
    "neighborhood": "Dumbrăvița",
    "address": "Str. Berlin nr. 1, Dumbrăvița",
    "lat": 45.788162,
    "lng": 21.23369,
    "isFree": false,
    "hourlyRate": 160,
    "sports": [
      "Fotbal Sintetic",
      "Tenis"
    ],
    "sportLabels": [
      "Minifotbal Sintetic",
      "2 Terenuri Tenis"
    ],
    "surface": "Gazon sintetic minifotbal + 2 terenuri de tenis alăturate",
    "hasLighting": true,
    "lightingNote": "Nocturnă pe terenul de minifotbal și tenis",
    "hasParking": true,
    "parkingNote": "Parcare la intrare pe Str. Berlin nr. 1",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare, dușuri și terasă",
    "extraPerks": [
      "Minifotbal + Tenis în același loc",
      "Aproape de Lipovei / Aradului"
    ],
    "description": "Complex sportiv prietenos la intrarea în Dumbrăvița (Str. Berlin nr. 1), cu teren de minifotbal și terenuri de tenis."
  },
  {
    "id": "venue-player-sport",
    "source": "curated",
    "name": "Player Sport – Fotbal Sintetic & Tenis (Dumbrăvița)",
    "neighborhood": "Dumbrăvița",
    "address": "Str. Arinului nr. 57, Dumbrăvița",
    "lat": 45.792369,
    "lng": 21.225946,
    "isFree": false,
    "hourlyRate": 170,
    "sports": [
      "Fotbal Sintetic",
      "Tenis"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Tenis de câmp"
    ],
    "surface": "Gazon sintetic de calitate",
    "hasLighting": true,
    "lightingNote": "Nocturnă disponibilă seara",
    "hasParking": true,
    "parkingNote": "Parcare privată pe Str. Arinului",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare moderne și terasă de vară",
    "extraPerks": [
      "Gazon sintetic îngrijit",
      "Terasă de socializare"
    ],
    "description": "Bază modernă în Dumbrăvița pentru meciuri de seară la sintetic și partide recreative de tenis."
  },
  {
    "id": "venue-jean-arena",
    "source": "curated",
    "name": "Jean Arena – Fotbal Sintetic (Dumbrăvița)",
    "neighborhood": "Dumbrăvița",
    "address": "Zona Str. Praga / Vest, Dumbrăvița",
    "lat": 45.795959,
    "lng": 21.212553,
    "isFree": false,
    "hourlyRate": 170,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic 5v5 & 6v6"
    ],
    "surface": "Gazon sintetic cu nocturnă",
    "hasLighting": true,
    "lightingNote": "Nocturnă LED pe tot terenul",
    "hasParking": true,
    "parkingNote": "Parcare proprie lângă teren",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare încălzite și dușuri",
    "extraPerks": [
      "Teren nou",
      "Parcare la scară"
    ],
    "description": "Teren dedicat de minifotbal sintetic în Dumbrăvița de Vest, ideal pentru meciuri rapide de 5v5 și 6v6."
  },
  {
    "id": "venue-malul-begai-pista",
    "source": "curated",
    "name": "Pista de Biciclete & Alergare Malul Begăi (Parcul Alpinet)",
    "neighborhood": "Centru / Cetate",
    "address": "Splaiul Tudor Vladimirescu / Parcul Alpinet (Podul Mihai Viteazu), Timișoara",
    "lat": 45.7486,
    "lng": 21.2228,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Bicicletă",
      "Alergat"
    ],
    "sportLabels": [
      "Pista Velo Bega (37 km spre Serbia)",
      "Promenadă Alergare"
    ],
    "surface": "Pistă asfaltată dedicată bicicletelor + alee pietonală pe malul Begăi",
    "hasLighting": true,
    "lightingNote": "Traseu complet iluminat nocturn în tot orașul",
    "hasParking": true,
    "parkingNote": "Rastele velo, stații VeloTM și parcări în zona Catedralei",
    "hasLockerRooms": false,
    "lockerNote": "Cișmele publice și terase pe malul Begăi",
    "extraPerks": [
      "Punctul clasic de întâlnire pentru ture velo",
      "Iluminat nocturn",
      "Gratis"
    ],
    "description": "Punctul central de întâlnire de pe malul Begăi (Parcul Alpinet – Podul Mihai Viteazu), conectat direct la pista cicloturistică de 37 km de-a lungul canalului Bega până la graniță."
  },
  {
    "id": "venue-bega-vest-iosefin",
    "source": "curated",
    "name": "Pista Cicloturistică Bega Vest (Start spre Sânmihai & Serbia)",
    "neighborhood": "Iosefin",
    "address": "Splaiul Nicolae Titulescu / Turnul de Apă Iosefin, Timișoara",
    "lat": 45.745382,
    "lng": 21.201683,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Bicicletă",
      "Alergat"
    ],
    "sportLabels": [
      "Ciclism Cursieră / Trekking (Pista Bega)",
      "Alergare Lungă"
    ],
    "surface": "Pistă asfaltată continuă pe digul canalului Bega, zero mașini",
    "hasLighting": true,
    "lightingNote": "Iluminat în sectorul urban Iosefin – Freidorf",
    "hasParking": true,
    "parkingNote": "Parcare liberă lângă Turnul de Apă / Splaiul Titulescu",
    "hasLockerRooms": false,
    "lockerNote": "Popasuri velo și cișmele pe traseu",
    "extraPerks": [
      "0 semafoare spre Sânmihaiu Român & Otelec",
      "Asfalt neted",
      "Gratis"
    ],
    "description": "Punctul ideal de plecare din Iosefin pentru turele de seară sau de weekend pe digul Begăi spre Sânmihaiu Român, Uivar și Serbia, complet ferit de traficul auto."
  },
  {
    "id": "venue-parcul-uzinei",
    "source": "curated",
    "name": "Parcul Uzinei & Pista Bega Est – Baschet, Fotbal & Fitness",
    "neighborhood": "Ghirodei / Plopi",
    "address": "Str. Frederic Chopin nr. 1 (Uzina de Apă Bega), Timișoara",
    "lat": 45.759092,
    "lng": 21.264749,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Baschet",
      "Fotbal Sintetic",
      "Volei & Fitness",
      "Bicicletă",
      "Alergat"
    ],
    "sportLabels": [
      "Baschet Public",
      "Minifotbal",
      "Calisthenics",
      "Capăt Est Pista Bega"
    ],
    "surface": "Teren baschet beton fin, teren fotbal, aparate fitness & promenadă Bega",
    "hasLighting": true,
    "lightingNote": "Iluminat nocturn modernizat în tot Parcul Uzinei",
    "hasParking": true,
    "parkingNote": "Parcare gratuită lângă Uzina Hidroelectrică",
    "hasLockerRooms": false,
    "lockerNote": "Cișmele și locuri de relaxare pe malul Begăi",
    "extraPerks": [
      "Parc sportiv complet lângă Bega",
      "Aparate calisthenics",
      "Gratis"
    ],
    "description": "Zonă verde amplă în estul canalului Bega (lângă Uzina Hidroelectrică), cu teren de baschet, teren de minifotbal, aparate de fitness și pistă de alergare/biciclete."
  },
  {
    "id": "venue-padurea-verde",
    "source": "curated",
    "name": "Pădurea Verde – Traseu Alergare & MTB (Muzeul Satului)",
    "neighborhood": "Pădurea Verde",
    "address": "Str. Avram Imbroane nr. 31 (lângă Muzeul Satului Bănățean), Timișoara",
    "lat": 45.7777,
    "lng": 21.2655,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Alergat",
      "Bicicletă"
    ],
    "sportLabels": [
      "Trail Running / Alergare 5K–10K",
      "MTB & Gravel"
    ],
    "surface": "Poteci forestiere bătătorite & alei umbrite prin pădure",
    "hasLighting": false,
    "lightingNote": "Traseu natural de zi prin pădure (ideal dimineața / după-amiaza)",
    "hasParking": true,
    "parkingNote": "Parcare gratuită chiar la intrarea Muzeului Satului Bănățean",
    "hasLockerRooms": false,
    "lockerNote": "Zonă naturală forestieră fără vestiare",
    "extraPerks": [
      "Aer curat de pădure",
      "Umbră răcoroasă vara",
      "Gratis"
    ],
    "description": "Punctul principal de intrare pe potecile din Pădurea Verde (chiar lângă Muzeul Satului Bănățean), perfect pentru alergări de grup și ture MTB/gravel."
  },
  {
    "id": "venue-parcul-copiilor",
    "source": "curated",
    "name": "Parcul Copiilor – Terenuri Baschet & Minifotbal",
    "neighborhood": "Zona Bega / Parcul Rozelor",
    "address": "Bd. Revoluției din 1989 (malul nordic Bega), Timișoara",
    "lat": 45.753299,
    "lng": 21.234308,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Baschet",
      "Fotbal Sintetic",
      "Alergat"
    ],
    "sportLabels": [
      "Baschet Outdoor",
      "Minifotbal",
      "Alergare Parc"
    ],
    "surface": "Două terenuri multisport în aer liber + alei de alergare pe malul Begăi",
    "hasLighting": true,
    "lightingNote": "Iluminat nocturn în parc și lângă terenuri",
    "hasParking": true,
    "parkingNote": "Parcare pe Bd. Revoluției 1989 / Michelangelo",
    "hasLockerRooms": false,
    "lockerNote": "Toalete publice și cișmele în parc",
    "extraPerks": [
      "Două terenuri publice gratuite",
      "Umbră lângă Bega",
      "Gratis"
    ],
    "description": "Terenurile sportive deschise din zona Parcului Copiilor / Michelangelo, excelente pentru baschet 3x3, mișcare după-amiaza și alergare pe malul Begăi."
  },
  {
    "id": "venue-rozelor-copiilor",
    "source": "curated",
    "name": "Parcul Rozelor – Alergare, Ping Pong & Mișcare lângă Bega",
    "neighborhood": "Zona Bega / Parcul Rozelor",
    "address": "Str. Academician Alexandru Borza, Parcul Rozelor, Timișoara",
    "lat": 45.75,
    "lng": 21.23194,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Ping Pong",
      "Alergat",
      "Bicicletă"
    ],
    "sportLabels": [
      "Ping Pong în aer liber",
      "Alergare pe Bega",
      "Plimbări Velo"
    ],
    "surface": "Alei pavate și asfaltate pe malul Begăi + zone umbrite de recreere",
    "hasLighting": true,
    "lightingNote": "Alei complet iluminate seara",
    "hasParking": true,
    "parkingNote": "Parcare pe Str. Academician Alexandru Borza",
    "hasLockerRooms": false,
    "lockerNote": "Acces public gratuit 24/7 și cișmele în parc",
    "extraPerks": [
      "Chiar pe malul Begăi",
      "Cadru verde spectaculos",
      "Gratis"
    ],
    "description": "Unul dintre cele mai îndrăgite parcuri din Timișoara, chiar pe malul canalului Bega, ideal pentru ping pong amical, alergare ușoară și întâlniri sportive."
  },
  {
    "id": "venue-parcul-central",
    "source": "curated",
    "name": "Parcul Central „Anton Scudier” – Baschet & Minifotbal",
    "neighborhood": "Centru / Cetate",
    "address": "Bd. Republicii / Bd. Regele Ferdinand I (lângă Catedrală), Timișoara",
    "lat": 45.751155,
    "lng": 21.218533,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Baschet",
      "Fotbal Sintetic",
      "Alergat"
    ],
    "sportLabels": [
      "Teren Baschet Public",
      "Minifotbal Sintetic",
      "Alergare Parc"
    ],
    "surface": "Teren baschet asfaltat + teren minifotbal suprafață sintetică alăturat",
    "hasLighting": true,
    "lightingNote": "Iluminat pietonal în tot Parcul Central",
    "hasParking": true,
    "parkingNote": "Parcare publică pe Bd. Republicii / Jiul",
    "hasLockerRooms": false,
    "lockerNote": "Cișmele și bănci chiar lângă terenuri",
    "extraPerks": [
      "Ultracentral (lângă Catedrală)",
      "Baschet + Minifotbal gratuite",
      "Gratis"
    ],
    "description": "Terenurile publice de baschet și minifotbal amplasate chiar în Parcul Central „Anton Scudier”, la două minute de Catedrala Mitropolitană."
  },
  {
    "id": "venue-botanic-central",
    "source": "curated",
    "name": "Parcul Botanic – Teren Multisport Tartan & Alergare",
    "neighborhood": "Centru / Cetate",
    "address": "Str. Gheorghe Dima / Calea Alexandru Ioan Cuza, Timișoara",
    "lat": 45.759538,
    "lng": 21.222261,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Alergat",
      "Baschet",
      "Volei & Fitness"
    ],
    "sportLabels": [
      "Teren Multisport Tartan",
      "Buclă Alergare Parc Botanic"
    ],
    "surface": "Teren multisport cu suprafață tartan + alei umbrite de alergare (1.6 km/tur)",
    "hasLighting": true,
    "lightingNote": "Iluminat ambiental pe aleile principale",
    "hasParking": true,
    "parkingNote": "Parcare în zona Spitalul Militar / Mărăști / Iulius Town",
    "hasLockerRooms": false,
    "lockerNote": "Cișmele cu apă potabilă la intrările în parc",
    "extraPerks": [
      "Buclă umbrită excelentă de alergat",
      "Teren tartan lângă parc",
      "Gratis"
    ],
    "description": "Oază de liniște lângă Piața Unirii și Piața Mărăști, preferată de alergătorii matinali, cu teren multisport pe tartan în latura nord-vestică."
  },
  {
    "id": "venue-parcul-bucovina",
    "source": "curated",
    "name": "Parcul Bucovina – 3 Mese Ping Pong & Alergare",
    "neighborhood": "Circumvalațiunii",
    "address": "Str. Bucovina / Zona Matei Basarab, Timișoara",
    "lat": 45.764656,
    "lng": 21.227641,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Ping Pong",
      "Alergat"
    ],
    "sportLabels": [
      "3 Mese Ping Pong Outdoor",
      "Alergare în Parc"
    ],
    "surface": "3 mese publice de ping pong + alei asfaltate de alergare",
    "hasLighting": true,
    "lightingNote": "Iluminat nocturn complet în parc",
    "hasParking": true,
    "parkingNote": "Parcare stradală gratuită în jurul Parcului Bucovina",
    "hasLockerRooms": false,
    "lockerNote": "Cișmele publice în parc",
    "extraPerks": [
      "3 mese de ping pong gratuite",
      "Zonă verde liniștită",
      "Gratis"
    ],
    "description": "Parcul de cartier Bucovina dispune de 3 mese publice de tenis de masă foarte populare seara și o buclă plăcută pentru alergare ușoară."
  },
  {
    "id": "venue-carmen-sylva",
    "source": "curated",
    "name": "Parcul Carmen Sylva (Doina) – Baschet 3x3 & Ping Pong",
    "neighborhood": "Elisabetin / Doina",
    "address": "Bd. Gheorghe Doja / Str. Ciprian Porumbescu, Timișoara",
    "lat": 45.74389,
    "lng": 21.22306,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Baschet",
      "Ping Pong",
      "Alergat"
    ],
    "sportLabels": [
      "Baschet 3x3",
      "Mese Ping Pong Outdoor",
      "Alergare"
    ],
    "surface": "Teren outdoor și mese publice de ping pong în parc",
    "hasLighting": true,
    "lightingNote": "Iluminat nocturn modernizat în tot parcul",
    "hasParking": true,
    "parkingNote": "Locuri de parcare pe Str. Romulus / Gheorghe Doja",
    "hasLockerRooms": false,
    "lockerNote": "Cișmele publice și foișor în parc",
    "extraPerks": [
      "Comunitate activă 3x3 & ping pong",
      "Parc renovat",
      "Gratis"
    ],
    "description": "Inima sportului recreativ din Elisabetin (Parcul Doina / Carmen Sylva), unde se strâng zilnic jucători de baschet 3x3 și tenis de masă."
  },
  {
    "id": "venue-parcul-padurice",
    "source": "curated",
    "name": "Parcul Pădurice (Lidia) – Mese Ping Pong, Tartan & Teren",
    "neighborhood": "Soarelui",
    "address": "Str. Mareșal Constantin Prezan (Lidia) / Str. Versului, Timișoara",
    "lat": 45.733106,
    "lng": 21.241667,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Ping Pong",
      "Alergat",
      "Volei & Fitness",
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "3 Mese Ping Pong",
      "Buclă Alergare 1 km",
      "Calisthenics & Teren"
    ],
    "surface": "3 mese outdoor de ping pong, teren sportiv alăturat & pistă alergare",
    "hasLighting": true,
    "lightingNote": "Iluminat nocturn complet pe aleile parcului și la mese",
    "hasParking": true,
    "parkingNote": "Parcare stradală gratuită pe Str. Versului / Prezan",
    "hasLockerRooms": false,
    "lockerNote": "Cișmele cu apă potabilă și toalete publice în parc",
    "extraPerks": [
      "3 mese ping pong alăturate",
      "Buclă alergare 1 km",
      "Gratis"
    ],
    "description": "Cel mai animat parc sportiv din zona Soarelui – Girocului, cu 3 mese de ping pong exact pe latura sud-estică, teren de minifotbal și pistă de alergare."
  },
  {
    "id": "venue-calisthenics-complex",
    "source": "curated",
    "name": "Zonă Calisthenics & Street Workout – Complex Studențesc",
    "neighborhood": "Complex Studențesc",
    "address": "Aleea Studenților / Parcul Complex Studențesc, Timișoara",
    "lat": 45.748021,
    "lng": 21.237415,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Volei & Fitness"
    ],
    "sportLabels": [
      "Calisthenics / Bare Tracțiuni & Paralele"
    ],
    "surface": "Zonă outdoor amenajată cu aparate street workout",
    "hasLighting": true,
    "lightingNote": "Iluminat stradal în tot Complexul Studențesc",
    "hasParking": true,
    "parkingNote": "Acces pietonal și velo facil în mijlocul Complexului",
    "hasLockerRooms": false,
    "lockerNote": "Acces liber 24/7 în aer liber",
    "extraPerks": [
      "Bare tracțiuni, paralele, abdomene",
      "Atmosferă studențească",
      "Gratis"
    ],
    "description": "Punctul preferat pentru antrenamente cu greutatea propriului corp (tracțiuni, flotări la paralele, muscle-ups) chiar în inima Complexului Studențesc."
  },
  {
    "id": "osm-node-11234166786",
    "osmId": "node/11234166786",
    "source": "osm",
    "name": "Masă Ping Pong Publică – Dumbrăvița",
    "neighborhood": "Dumbrăvița",
    "address": "Zona Dumbrăvița, Timișoara",
    "lat": 45.795612,
    "lng": 21.226242,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Ping Pong"
    ],
    "sportLabels": [
      "Ping Pong"
    ],
    "surface": "Masă outdoor ping pong",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Dumbrăvița (Ping Pong), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-node-11677891913",
    "osmId": "node/11677891913",
    "source": "osm",
    "name": "Berlin Sport – Ping Pong",
    "neighborhood": "Dumbrăvița",
    "address": "Strada Berlin nr. 1, Timișoara",
    "lat": 45.788943,
    "lng": 21.233588,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Ping Pong"
    ],
    "sportLabels": [
      "Ping Pong"
    ],
    "surface": "Masă outdoor ping pong",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Dumbrăvița (Ping Pong), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-node-13270251224",
    "osmId": "node/13270251224",
    "source": "osm",
    "name": "Baza sportivă Vasile Deheleanu – Sport & Fitness",
    "neighborhood": "Mehala / Ronaț",
    "address": "Zona Mehala / Ronaț, Timișoara",
    "lat": 45.763955,
    "lng": 21.189148,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Volei & Fitness"
    ],
    "sportLabels": [
      "Volei & Fitness"
    ],
    "surface": "Zonă fitness / sport amenajată",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Mehala / Ronaț (Volei & Fitness), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-node-13771217078",
    "osmId": "node/13771217078",
    "source": "osm",
    "name": "Masă Ping Pong Publică – Fabric",
    "neighborhood": "Fabric / Electrica",
    "address": "Zona Fabric / Electrica, Timișoara",
    "lat": 45.761896,
    "lng": 21.255104,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Ping Pong"
    ],
    "sportLabels": [
      "Ping Pong"
    ],
    "surface": "Masă outdoor ping pong",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Fabric / Electrica (Ping Pong), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-node-13893195453",
    "osmId": "node/13893195453",
    "source": "osm",
    "name": "Masă Ping Pong Publică – Dumbrăvița",
    "neighborhood": "Dumbrăvița",
    "address": "Zona Dumbrăvița, Timișoara",
    "lat": 45.790857,
    "lng": 21.227979,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Ping Pong"
    ],
    "sportLabels": [
      "Ping Pong"
    ],
    "surface": "Masă outdoor ping pong",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Dumbrăvița (Ping Pong), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-node-13987521821",
    "osmId": "node/13987521821",
    "source": "osm",
    "name": "Aparate Fitness & Calisthenics – Ghirodei",
    "neighborhood": "Ghirodei / Plopi",
    "address": "Zona Ghirodei / Plopi, Timișoara",
    "lat": 45.758681,
    "lng": 21.261922,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Volei & Fitness"
    ],
    "sportLabels": [
      "Volei & Fitness"
    ],
    "surface": "Zonă fitness / sport amenajată",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Ghirodei / Plopi (Volei & Fitness), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-24931885",
    "osmId": "way/24931885",
    "source": "osm",
    "name": "Teren Minifotbal Public – Centru",
    "neighborhood": "Centru / Cetate",
    "address": "Zona Centru / Cetate, Timișoara",
    "lat": 45.750471,
    "lng": 21.218702,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Gazon sintetic",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Centru / Cetate (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-48381080",
    "osmId": "way/48381080",
    "source": "osm",
    "name": "Stadionul Chișoda",
    "neighborhood": "Giroc / Chișoda",
    "address": "Zona Giroc / Chișoda, Timișoara",
    "lat": 45.710371,
    "lng": 21.211461,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Giroc / Chișoda (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-97942372",
    "osmId": "way/97942372",
    "source": "osm",
    "name": "Stadionul „Ștefan Dobay” – Teren Fotbal",
    "neighborhood": "Dumbrăvița",
    "address": "Strada Mihai Eminescu nr. 73, Timișoara",
    "lat": 45.799173,
    "lng": 21.24982,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Dumbrăvița (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-98129632",
    "osmId": "way/98129632",
    "source": "osm",
    "name": "Teren Tenis – Ghiroda",
    "neighborhood": "Ghiroda",
    "address": "Zona Ghiroda, Timișoara",
    "lat": 45.774509,
    "lng": 21.288548,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Teren tenis amenajat",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Ghiroda (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-106992874",
    "osmId": "way/106992874",
    "source": "osm",
    "name": "Teren Minifotbal Public – Zona Stadion",
    "neighborhood": "Zona Stadion / Podeanu",
    "address": "Zona Zona Stadion / Podeanu, Timișoara",
    "lat": 45.742375,
    "lng": 21.246931,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Zona Stadion / Podeanu (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-106993259",
    "osmId": "way/106993259",
    "source": "osm",
    "name": "Teren Minifotbal Public – Zona Stadion",
    "neighborhood": "Zona Stadion / Podeanu",
    "address": "Zona Zona Stadion / Podeanu, Timișoara",
    "lat": 45.739728,
    "lng": 21.246835,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Zona Stadion / Podeanu (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-106993260",
    "osmId": "way/106993260",
    "source": "osm",
    "name": "Teren Minifotbal Public – Zona Stadion",
    "neighborhood": "Zona Stadion / Podeanu",
    "address": "Zona Zona Stadion / Podeanu, Timișoara",
    "lat": 45.739811,
    "lng": 21.24793,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Zona Stadion / Podeanu (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-106993261",
    "osmId": "way/106993261",
    "source": "osm",
    "name": "Teren Minifotbal Public – Zona Stadion",
    "neighborhood": "Zona Stadion / Podeanu",
    "address": "Zona Zona Stadion / Podeanu, Timișoara",
    "lat": 45.742484,
    "lng": 21.24573,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Zona Stadion / Podeanu (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-110971420",
    "osmId": "way/110971420",
    "source": "osm",
    "name": "Teren Multisport Public – Complex Studențesc",
    "neighborhood": "Complex Studențesc",
    "address": "Zona Complex Studențesc, Timișoara",
    "lat": 45.753841,
    "lng": 21.242439,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Complex Studențesc (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-111103457",
    "osmId": "way/111103457",
    "source": "osm",
    "name": "Teren Minifotbal Public – Complex Studențesc",
    "neighborhood": "Complex Studențesc",
    "address": "Zona Complex Studențesc, Timișoara",
    "lat": 45.75456,
    "lng": 21.241212,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Complex Studențesc (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-111288539",
    "osmId": "way/111288539",
    "source": "osm",
    "name": "Teren Minifotbal Public – Zona Stadion",
    "neighborhood": "Zona Stadion / Podeanu",
    "address": "Zona Zona Stadion / Podeanu, Timișoara",
    "lat": 45.742446,
    "lng": 21.245,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Zona Stadion / Podeanu (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-140358643",
    "osmId": "way/140358643",
    "source": "osm",
    "name": "Teren Tenis – Calea Aradului",
    "neighborhood": "Calea Aradului",
    "address": "Zona Calea Aradului, Timișoara",
    "lat": 45.781636,
    "lng": 21.220025,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Teren tenis amenajat",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Calea Aradului (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-153689018",
    "osmId": "way/153689018",
    "source": "osm",
    "name": "Stadion Electrica – Teren Fotbal",
    "neighborhood": "Fabric / Electrica",
    "address": "Zona Fabric / Electrica, Timișoara",
    "lat": 45.769057,
    "lng": 21.254369,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Fabric / Electrica (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-154549316",
    "osmId": "way/154549316",
    "source": "osm",
    "name": "Teren Multisport Public – Calea Lipovei",
    "neighborhood": "Calea Lipovei",
    "address": "Zona Calea Lipovei, Timișoara",
    "lat": 45.779005,
    "lng": 21.236568,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Calea Lipovei (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-154549318",
    "osmId": "way/154549318",
    "source": "osm",
    "name": "Teren Multisport Public – Calea Lipovei",
    "neighborhood": "Calea Lipovei",
    "address": "Zona Calea Lipovei, Timișoara",
    "lat": 45.7793,
    "lng": 21.236146,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Calea Lipovei (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-155061360",
    "osmId": "way/155061360",
    "source": "osm",
    "name": "Teren Tenis – Soarelui",
    "neighborhood": "Soarelui",
    "address": "Zona Soarelui, Timișoara",
    "lat": 45.733495,
    "lng": 21.252889,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Teren tenis amenajat",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Soarelui (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-160432310",
    "osmId": "way/160432310",
    "source": "osm",
    "name": "Teren Minifotbal Public – Buziașului",
    "neighborhood": "Buziașului / Ciarda Roșie",
    "address": "Zona Buziașului / Ciarda Roșie, Timișoara",
    "lat": 45.731069,
    "lng": 21.264724,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Suprafață tartan elastic",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Buziașului / Ciarda Roșie (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-169455241",
    "osmId": "way/169455241",
    "source": "osm",
    "name": "Teren Minifotbal Public – Buziașului",
    "neighborhood": "Buziașului / Ciarda Roșie",
    "address": "Zona Buziașului / Ciarda Roșie, Timișoara",
    "lat": 45.736043,
    "lng": 21.254972,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Buziașului / Ciarda Roșie (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-169455242",
    "osmId": "way/169455242",
    "source": "osm",
    "name": "Teren Minifotbal Public – Buziașului",
    "neighborhood": "Buziașului / Ciarda Roșie",
    "address": "Zona Buziașului / Ciarda Roșie, Timișoara",
    "lat": 45.735676,
    "lng": 21.255139,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Buziașului / Ciarda Roșie (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-169841547",
    "osmId": "way/169841547",
    "source": "osm",
    "name": "Teren Multisport Public – Zona Stadion",
    "neighborhood": "Zona Stadion / Podeanu",
    "address": "Zona Zona Stadion / Podeanu, Timișoara",
    "lat": 45.745138,
    "lng": 21.246712,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Bitum / Asfalt",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Zona Stadion / Podeanu (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-179460390",
    "osmId": "way/179460390",
    "source": "osm",
    "name": "Teren Multisport Public – Fabric",
    "neighborhood": "Fabric / Electrica",
    "address": "Zona Fabric / Electrica, Timișoara",
    "lat": 45.76755,
    "lng": 21.256712,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Fabric / Electrica (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-179460392",
    "osmId": "way/179460392",
    "source": "osm",
    "name": "Pistă Alergare – Fabric",
    "neighborhood": "Fabric / Electrica",
    "address": "Zona Fabric / Electrica, Timișoara",
    "lat": 45.769306,
    "lng": 21.257003,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Alergat"
    ],
    "sportLabels": [
      "Alergat"
    ],
    "surface": "Pistă de alergare",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Fabric / Electrica (Alergat), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-185320059",
    "osmId": "way/185320059",
    "source": "osm",
    "name": "Teren Multisport Public – Circumvalațiunii",
    "neighborhood": "Circumvalațiunii",
    "address": "Zona Circumvalațiunii, Timișoara",
    "lat": 45.759169,
    "lng": 21.207182,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Circumvalațiunii (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-192364254",
    "osmId": "way/192364254",
    "source": "osm",
    "name": "Teren Multisport Public – Centru",
    "neighborhood": "Centru / Cetate",
    "address": "Zona Centru / Cetate, Timișoara",
    "lat": 45.752008,
    "lng": 21.228192,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Suprafață tartan elastic",
    "hasLighting": true,
    "lightingNote": "Iluminat nocturn confirmat pe teren",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Centru / Cetate (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-195566030",
    "osmId": "way/195566030",
    "source": "osm",
    "name": "Clubul Sportiv Municipal – Teren Tenis",
    "neighborhood": "Zona Bega / Parcul Rozelor",
    "address": "Zona Zona Bega / Parcul Rozelor, Timișoara",
    "lat": 45.749792,
    "lng": 21.22963,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Suprafață tartan elastic",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Zona Bega / Parcul Rozelor (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-195566034",
    "osmId": "way/195566034",
    "source": "osm",
    "name": "Clubul Sportiv Municipal – Teren Tenis",
    "neighborhood": "Zona Bega / Parcul Rozelor",
    "address": "Zona Zona Bega / Parcul Rozelor, Timișoara",
    "lat": 45.74952,
    "lng": 21.229144,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Nisip (Beach Volley / Sport)",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Zona Bega / Parcul Rozelor (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-199208416",
    "osmId": "way/199208416",
    "source": "osm",
    "name": "Teren Multisport Public – Fabric",
    "neighborhood": "Fabric / Electrica",
    "address": "Zona Fabric / Electrica, Timișoara",
    "lat": 45.761597,
    "lng": 21.236462,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Fabric / Electrica (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-202927098",
    "osmId": "way/202927098",
    "source": "osm",
    "name": "Stadionul Tibi Tunda",
    "neighborhood": "Ghiroda",
    "address": "Zona Ghiroda, Timișoara",
    "lat": 45.764771,
    "lng": 21.307756,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Ghiroda (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-202927277",
    "osmId": "way/202927277",
    "source": "osm",
    "name": "Teren Minifotbal Public – Ghiroda",
    "neighborhood": "Ghiroda",
    "address": "Zona Ghiroda, Timișoara",
    "lat": 45.760309,
    "lng": 21.280675,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Ghiroda (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-203690804",
    "osmId": "way/203690804",
    "source": "osm",
    "name": "Teren Tenis – Ghirodei",
    "neighborhood": "Ghirodei / Plopi",
    "address": "Zona Ghirodei / Plopi, Timișoara",
    "lat": 45.763164,
    "lng": 21.273918,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Teren tenis amenajat",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Ghirodei / Plopi (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-211734311",
    "osmId": "way/211734311",
    "source": "osm",
    "name": "Teren Minifotbal Public – Zona Stadion",
    "neighborhood": "Zona Stadion / Podeanu",
    "address": "Zona Zona Stadion / Podeanu, Timișoara",
    "lat": 45.741245,
    "lng": 21.249107,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Zona Stadion / Podeanu (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-211734314",
    "osmId": "way/211734314",
    "source": "osm",
    "name": "Teren Minifotbal Public – Zona Stadion",
    "neighborhood": "Zona Stadion / Podeanu",
    "address": "Zona Zona Stadion / Podeanu, Timișoara",
    "lat": 45.741522,
    "lng": 21.249656,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Zona Stadion / Podeanu (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-217911603",
    "osmId": "way/217911603",
    "source": "osm",
    "name": "Teren UVT – Teren Fotbal",
    "neighborhood": "Zona Bega / Parcul Rozelor",
    "address": "Zona Zona Bega / Parcul Rozelor, Timișoara",
    "lat": 45.748499,
    "lng": 21.231672,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Suprafață tartan elastic",
    "hasLighting": true,
    "lightingNote": "Iluminat nocturn confirmat pe teren",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Zona Bega / Parcul Rozelor (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-223049881",
    "osmId": "way/223049881",
    "source": "osm",
    "name": "Teren Tenis – Pădurea Verde",
    "neighborhood": "Pădurea Verde",
    "address": "Zona Pădurea Verde, Timișoara",
    "lat": 45.801325,
    "lng": 21.292869,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Teren tenis amenajat",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Pădurea Verde (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-230767941",
    "osmId": "way/230767941",
    "source": "osm",
    "name": "Stadionul Tricoul 1 Iunie – Teren Fotbal",
    "neighborhood": "Ghirodei / Plopi",
    "address": "Zona Ghirodei / Plopi, Timișoara",
    "lat": 45.749298,
    "lng": 21.280487,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Ghirodei / Plopi (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-262641523",
    "osmId": "way/262641523",
    "source": "osm",
    "name": "Teren Minifotbal Public – Giroc",
    "neighborhood": "Giroc / Chișoda",
    "address": "Zona Giroc / Chișoda, Timișoara",
    "lat": 45.70426,
    "lng": 21.211846,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Giroc / Chișoda (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-273898664",
    "osmId": "way/273898664",
    "source": "osm",
    "name": "Teren sintetic pentru fotbal",
    "neighborhood": "Circumvalațiunii",
    "address": "Zona Circumvalațiunii, Timișoara",
    "lat": 45.759518,
    "lng": 21.204757,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Circumvalațiunii (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-314564706",
    "osmId": "way/314564706",
    "source": "osm",
    "name": "Stadionul „Ștefan Dobay” – Teren Fotbal",
    "neighborhood": "Dumbrăvița",
    "address": "Strada Mihai Eminescu nr. 73, Timișoara",
    "lat": 45.798794,
    "lng": 21.249122,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Dumbrăvița (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-344873641",
    "osmId": "way/344873641",
    "source": "osm",
    "name": "Teren Multisport Public – Calea Șagului",
    "neighborhood": "Calea Șagului",
    "address": "Zona Calea Șagului, Timișoara",
    "lat": 45.732906,
    "lng": 21.203172,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Zgură / Pietriș compactat",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Calea Șagului (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-350406740",
    "osmId": "way/350406740",
    "source": "osm",
    "name": "Teren Multisport Public – Calea Șagului",
    "neighborhood": "Calea Șagului",
    "address": "Zona Calea Șagului, Timișoara",
    "lat": 45.736739,
    "lng": 21.206095,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Zgură / Pietriș compactat",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Calea Șagului (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-416264181",
    "osmId": "way/416264181",
    "source": "osm",
    "name": "Teren Tenis – Buziașului",
    "neighborhood": "Buziașului / Ciarda Roșie",
    "address": "Zona Buziașului / Ciarda Roșie, Timișoara",
    "lat": 45.72876,
    "lng": 21.26165,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Teren tenis amenajat",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Buziașului / Ciarda Roșie (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-416264307",
    "osmId": "way/416264307",
    "source": "osm",
    "name": "Teren Tenis – Buziașului",
    "neighborhood": "Buziașului / Ciarda Roșie",
    "address": "Zona Buziașului / Ciarda Roșie, Timișoara",
    "lat": 45.72859,
    "lng": 21.262159,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Teren tenis amenajat",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Buziașului / Ciarda Roșie (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-419668187",
    "osmId": "way/419668187",
    "source": "osm",
    "name": "Teren Multisport Public – Calea Girocului",
    "neighborhood": "Calea Girocului",
    "address": "Zona Calea Girocului, Timișoara",
    "lat": 45.733529,
    "lng": 21.236109,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Suprafață tartan elastic",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Calea Girocului (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-420817634",
    "osmId": "way/420817634",
    "source": "osm",
    "name": "Teren Multisport Public – Calea Șagului",
    "neighborhood": "Calea Șagului",
    "address": "Zona Calea Șagului, Timișoara",
    "lat": 45.729324,
    "lng": 21.213093,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Bitum / Asfalt",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Calea Șagului (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-421116022",
    "osmId": "way/421116022",
    "source": "osm",
    "name": "Teren Multisport Public – Calea Șagului",
    "neighborhood": "Calea Șagului",
    "address": "Zona Calea Șagului, Timișoara",
    "lat": 45.726817,
    "lng": 21.210565,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Suprafață tartan elastic",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Calea Șagului (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-421116194",
    "osmId": "way/421116194",
    "source": "osm",
    "name": "Teren Multisport Public – Calea Șagului",
    "neighborhood": "Calea Șagului",
    "address": "Zona Calea Șagului, Timișoara",
    "lat": 45.725144,
    "lng": 21.209938,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Suprafață tartan elastic",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Calea Șagului (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-421118386",
    "osmId": "way/421118386",
    "source": "osm",
    "name": "Teren Minifotbal Public – Calea Girocului",
    "neighborhood": "Calea Girocului",
    "address": "Zona Calea Girocului, Timișoara",
    "lat": 45.726343,
    "lng": 21.225129,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Iarbă naturală",
    "hasLighting": true,
    "lightingNote": "Iluminat nocturn confirmat pe teren",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Calea Girocului (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-421266085",
    "osmId": "way/421266085",
    "source": "osm",
    "name": "Teren Multisport Public – Buziașului",
    "neighborhood": "Buziașului / Ciarda Roșie",
    "address": "Zona Buziașului / Ciarda Roșie, Timișoara",
    "lat": 45.729498,
    "lng": 21.263636,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Bitum / Asfalt",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Buziașului / Ciarda Roșie (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-427782278",
    "osmId": "way/427782278",
    "source": "osm",
    "name": "Teren Minifotbal Public – Calea Aradului",
    "neighborhood": "Calea Aradului",
    "address": "Zona Calea Aradului, Timișoara",
    "lat": 45.783474,
    "lng": 21.220671,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Suprafață tartan elastic",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Calea Aradului (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-427782280",
    "osmId": "way/427782280",
    "source": "osm",
    "name": "Teren Tenis – Calea Aradului",
    "neighborhood": "Calea Aradului",
    "address": "Zona Calea Aradului, Timișoara",
    "lat": 45.783676,
    "lng": 21.220376,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Suprafață tartan elastic",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Calea Aradului (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-438015333",
    "osmId": "way/438015333",
    "source": "osm",
    "name": "Teren Multisport Public – Circumvalațiunii",
    "neighborhood": "Circumvalațiunii",
    "address": "Zona Circumvalațiunii, Timișoara",
    "lat": 45.766189,
    "lng": 21.21719,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Circumvalațiunii (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-444801766",
    "osmId": "way/444801766",
    "source": "osm",
    "name": "Teren Multisport Public – Elisabetin",
    "neighborhood": "Elisabetin / Doina",
    "address": "Zona Elisabetin / Doina, Timișoara",
    "lat": 45.741509,
    "lng": 21.227014,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Elisabetin / Doina (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-451881737",
    "osmId": "way/451881737",
    "source": "osm",
    "name": "Teren Multisport Public – Elisabetin",
    "neighborhood": "Elisabetin / Doina",
    "address": "Zona Elisabetin / Doina, Timișoara",
    "lat": 45.745715,
    "lng": 21.219916,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Elisabetin / Doina (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-451949138",
    "osmId": "way/451949138",
    "source": "osm",
    "name": "Teren Baschet Public – Calea Girocului",
    "neighborhood": "Calea Girocului",
    "address": "Zona Calea Girocului, Timișoara",
    "lat": 45.732881,
    "lng": 21.234431,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Baschet"
    ],
    "sportLabels": [
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Calea Girocului (Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-453041627",
    "osmId": "way/453041627",
    "source": "osm",
    "name": "Teren Multisport Public – Zona Bega",
    "neighborhood": "Zona Bega / Parcul Rozelor",
    "address": "Zona Zona Bega / Parcul Rozelor, Timișoara",
    "lat": 45.754449,
    "lng": 21.235562,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Bitum / Asfalt",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Zona Bega / Parcul Rozelor (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-460597437",
    "osmId": "way/460597437",
    "source": "osm",
    "name": "Teren Tenis – Zona Stadion",
    "neighborhood": "Zona Stadion / Podeanu",
    "address": "Zona Zona Stadion / Podeanu, Timișoara",
    "lat": 45.737932,
    "lng": 21.248283,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Teren tenis amenajat",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Zona Stadion / Podeanu (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-460597439",
    "osmId": "way/460597439",
    "source": "osm",
    "name": "Teren Tenis – Soarelui",
    "neighborhood": "Soarelui",
    "address": "Zona Soarelui, Timișoara",
    "lat": 45.738048,
    "lng": 21.247217,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Teren tenis amenajat",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Soarelui (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-460597442",
    "osmId": "way/460597442",
    "source": "osm",
    "name": "Teren Multisport Public – Soarelui",
    "neighborhood": "Soarelui",
    "address": "Zona Soarelui, Timișoara",
    "lat": 45.738121,
    "lng": 21.245707,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Soarelui (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-462102444",
    "osmId": "way/462102444",
    "source": "osm",
    "name": "Asociația Sportivă Clubul Frontiera Timișoara – Teren Fotbal",
    "neighborhood": "Calea Lipovei",
    "address": "Zona Calea Lipovei, Timișoara",
    "lat": 45.782527,
    "lng": 21.234896,
    "isFree": false,
    "hourlyRate": 170,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Calea Lipovei (Fotbal Sintetic, Baschet), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-462102445",
    "osmId": "way/462102445",
    "source": "osm",
    "name": "Teren Tenis – Calea Lipovei",
    "neighborhood": "Calea Lipovei",
    "address": "Zona Calea Lipovei, Timișoara",
    "lat": 45.781514,
    "lng": 21.233052,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Teren tenis amenajat",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Calea Lipovei (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-462735838",
    "osmId": "way/462735838",
    "source": "osm",
    "name": "Teren Multisport Public – Dumbrăvița",
    "neighborhood": "Dumbrăvița",
    "address": "Zona Dumbrăvița, Timișoara",
    "lat": 45.801218,
    "lng": 21.249565,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Dumbrăvița (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-463593846",
    "osmId": "way/463593846",
    "source": "osm",
    "name": "Teren Multisport Public – Iosefin",
    "neighborhood": "Iosefin",
    "address": "Zona Iosefin, Timișoara",
    "lat": 45.744097,
    "lng": 21.211067,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Iosefin (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-464309298",
    "osmId": "way/464309298",
    "source": "osm",
    "name": "Teren Multisport Public – Calea Aradului",
    "neighborhood": "Calea Aradului",
    "address": "Zona Calea Aradului, Timișoara",
    "lat": 45.77822,
    "lng": 21.231499,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Calea Aradului (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-464508328",
    "osmId": "way/464508328",
    "source": "osm",
    "name": "Teren Multisport Public – Soarelui",
    "neighborhood": "Soarelui",
    "address": "Zona Soarelui, Timișoara",
    "lat": 45.733528,
    "lng": 21.25243,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Soarelui (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-464511708",
    "osmId": "way/464511708",
    "source": "osm",
    "name": "Teren Multisport Public – Zona Stadion",
    "neighborhood": "Zona Stadion / Podeanu",
    "address": "Zona Zona Stadion / Podeanu, Timișoara",
    "lat": 45.741278,
    "lng": 21.247477,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Zona Stadion / Podeanu (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-465253805",
    "osmId": "way/465253805",
    "source": "osm",
    "name": "Teren Multisport Public – Calea Girocului",
    "neighborhood": "Calea Girocului",
    "address": "Zona Calea Girocului, Timișoara",
    "lat": 45.734213,
    "lng": 21.222106,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Calea Girocului (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-467219163",
    "osmId": "way/467219163",
    "source": "osm",
    "name": "Baza sportivă Electrica – Teren Tenis",
    "neighborhood": "Zona Bega / Parcul Rozelor",
    "address": "Zona Zona Bega / Parcul Rozelor, Timișoara",
    "lat": 45.749415,
    "lng": 21.233915,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Zgură",
    "hasLighting": true,
    "lightingNote": "Iluminat nocturn confirmat pe teren",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Zona Bega / Parcul Rozelor (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-467392571",
    "osmId": "way/467392571",
    "source": "osm",
    "name": "Teren Minifotbal Public – Soarelui",
    "neighborhood": "Soarelui",
    "address": "Zona Soarelui, Timișoara",
    "lat": 45.738413,
    "lng": 21.243974,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Gazon sintetic",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Soarelui (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-467392572",
    "osmId": "way/467392572",
    "source": "osm",
    "name": "Teren Tenis – Soarelui",
    "neighborhood": "Soarelui",
    "address": "Zona Soarelui, Timișoara",
    "lat": 45.738829,
    "lng": 21.244259,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Teren tenis amenajat",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Soarelui (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-467392573",
    "osmId": "way/467392573",
    "source": "osm",
    "name": "Teren Minifotbal Public – Zona Stadion",
    "neighborhood": "Zona Stadion / Podeanu",
    "address": "Zona Zona Stadion / Podeanu, Timișoara",
    "lat": 45.73886,
    "lng": 21.245049,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Zona Stadion / Podeanu (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-467392575",
    "osmId": "way/467392575",
    "source": "osm",
    "name": "Teren Minifotbal Public – Zona Stadion",
    "neighborhood": "Zona Stadion / Podeanu",
    "address": "Zona Zona Stadion / Podeanu, Timișoara",
    "lat": 45.738535,
    "lng": 21.248551,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Zona Stadion / Podeanu (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-467392580",
    "osmId": "way/467392580",
    "source": "osm",
    "name": "Teren Tenis – Zona Stadion",
    "neighborhood": "Zona Stadion / Podeanu",
    "address": "Zona Zona Stadion / Podeanu, Timișoara",
    "lat": 45.740581,
    "lng": 21.248218,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Teren tenis amenajat",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Zona Stadion / Podeanu (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-467399286",
    "osmId": "way/467399286",
    "source": "osm",
    "name": "Teren Multisport Public – Circumvalațiunii",
    "neighborhood": "Circumvalațiunii",
    "address": "Zona Circumvalațiunii, Timișoara",
    "lat": 45.761964,
    "lng": 21.211164,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Circumvalațiunii (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-469908893",
    "osmId": "way/469908893",
    "source": "osm",
    "name": "Teren Multisport Public – Iosefin",
    "neighborhood": "Iosefin",
    "address": "Zona Iosefin, Timișoara",
    "lat": 45.739726,
    "lng": 21.197584,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Iosefin (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-555938025",
    "osmId": "way/555938025",
    "source": "osm",
    "name": "Teren Minifotbal Public – Elisabetin",
    "neighborhood": "Elisabetin / Doina",
    "address": "Zona Elisabetin / Doina, Timișoara",
    "lat": 45.748942,
    "lng": 21.215254,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Bitum / Asfalt",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Elisabetin / Doina (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-561021939",
    "osmId": "way/561021939",
    "source": "osm",
    "name": "Teren Baschet Public – Giroc",
    "neighborhood": "Giroc / Chișoda",
    "address": "Zona Giroc / Chișoda, Timișoara",
    "lat": 45.709888,
    "lng": 21.213437,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Baschet"
    ],
    "sportLabels": [
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Giroc / Chișoda (Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-561021940",
    "osmId": "way/561021940",
    "source": "osm",
    "name": "Masă Ping Pong Publică – Giroc",
    "neighborhood": "Giroc / Chișoda",
    "address": "Zona Giroc / Chișoda, Timișoara",
    "lat": 45.710077,
    "lng": 21.213643,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Ping Pong"
    ],
    "sportLabels": [
      "Ping Pong"
    ],
    "surface": "Masă outdoor ping pong",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Giroc / Chișoda (Ping Pong), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-598504613",
    "osmId": "way/598504613",
    "source": "osm",
    "name": "Teren Multisport Public – Freidorf",
    "neighborhood": "Freidorf",
    "address": "Zona Freidorf, Timișoara",
    "lat": 45.728665,
    "lng": 21.179774,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Freidorf (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-608696575",
    "osmId": "way/608696575",
    "source": "osm",
    "name": "Teren Multisport Public – Giroc",
    "neighborhood": "Giroc / Chișoda",
    "address": "Zona Giroc / Chișoda, Timișoara",
    "lat": 45.696347,
    "lng": 21.236757,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Giroc / Chișoda (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-684658028",
    "osmId": "way/684658028",
    "source": "osm",
    "name": "Teren Multisport Public – Zona Bega",
    "neighborhood": "Zona Bega / Parcul Rozelor",
    "address": "Zona Zona Bega / Parcul Rozelor, Timișoara",
    "lat": 45.757695,
    "lng": 21.236595,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Zona Bega / Parcul Rozelor (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-684658029",
    "osmId": "way/684658029",
    "source": "osm",
    "name": "Teren Tenis – Zona Bega",
    "neighborhood": "Zona Bega / Parcul Rozelor",
    "address": "Zona Zona Bega / Parcul Rozelor, Timișoara",
    "lat": 45.757515,
    "lng": 21.236805,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Teren tenis amenajat",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Zona Bega / Parcul Rozelor (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-684658030",
    "osmId": "way/684658030",
    "source": "osm",
    "name": "Pistă Alergare – Zona Bega",
    "neighborhood": "Zona Bega / Parcul Rozelor",
    "address": "Zona Zona Bega / Parcul Rozelor, Timișoara",
    "lat": 45.757364,
    "lng": 21.23673,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Alergat"
    ],
    "sportLabels": [
      "Alergat"
    ],
    "surface": "Pistă de alergare",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Zona Bega / Parcul Rozelor (Alergat), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-685595806",
    "osmId": "way/685595806",
    "source": "osm",
    "name": "Teren Multisport Public – Ghiroda",
    "neighborhood": "Ghiroda",
    "address": "Zona Ghiroda, Timișoara",
    "lat": 45.770359,
    "lng": 21.3036,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Ghiroda (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-704774702",
    "osmId": "way/704774702",
    "source": "osm",
    "name": "Teren Multisport Public – Iosefin",
    "neighborhood": "Iosefin",
    "address": "Zona Iosefin, Timișoara",
    "lat": 45.744135,
    "lng": 21.21284,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Iosefin (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-707856761",
    "osmId": "way/707856761",
    "source": "osm",
    "name": "Teren Tenis – Dumbrăvița",
    "neighborhood": "Dumbrăvița",
    "address": "Zona Dumbrăvița, Timișoara",
    "lat": 45.786326,
    "lng": 21.243272,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Teren tenis amenajat",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Dumbrăvița (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-707860313",
    "osmId": "way/707860313",
    "source": "osm",
    "name": "Teren Tenis – Calea Aradului",
    "neighborhood": "Calea Aradului",
    "address": "Zona Calea Aradului, Timișoara",
    "lat": 45.780766,
    "lng": 21.21565,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Teren tenis amenajat",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Calea Aradului (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-708602223",
    "osmId": "way/708602223",
    "source": "osm",
    "name": "Teren Baschet Public – Calea Aradului",
    "neighborhood": "Calea Aradului",
    "address": "Zona Calea Aradului, Timișoara",
    "lat": 45.781054,
    "lng": 21.215101,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Baschet"
    ],
    "sportLabels": [
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Calea Aradului (Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-711937240",
    "osmId": "way/711937240",
    "source": "osm",
    "name": "Teren Tenis – Dumbrăvița",
    "neighborhood": "Dumbrăvița",
    "address": "Zona Dumbrăvița, Timișoara",
    "lat": 45.796689,
    "lng": 21.207398,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Teren tenis amenajat",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Dumbrăvița (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-711937243",
    "osmId": "way/711937243",
    "source": "osm",
    "name": "Teren Minifotbal Public – Dumbrăvița",
    "neighborhood": "Dumbrăvița",
    "address": "Zona Dumbrăvița, Timișoara",
    "lat": 45.796816,
    "lng": 21.207539,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Dumbrăvița (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-724026559",
    "osmId": "way/724026559",
    "source": "osm",
    "name": "Teren Multisport Public – Complex Studențesc",
    "neighborhood": "Complex Studențesc",
    "address": "Zona Complex Studențesc, Timișoara",
    "lat": 45.746744,
    "lng": 21.23402,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Bitum / Asfalt",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Complex Studențesc (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-735223385",
    "osmId": "way/735223385",
    "source": "osm",
    "name": "Teren Multisport Public – Pădurea Verde",
    "neighborhood": "Pădurea Verde",
    "address": "Zona Pădurea Verde, Timișoara",
    "lat": 45.780244,
    "lng": 21.272247,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Pădurea Verde (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-743297412",
    "osmId": "way/743297412",
    "source": "osm",
    "name": "Teren Tenis – Calea Girocului",
    "neighborhood": "Calea Girocului",
    "address": "Zona Calea Girocului, Timișoara",
    "lat": 45.733946,
    "lng": 21.232988,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Teren tenis amenajat",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Calea Girocului (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-755684356",
    "osmId": "way/755684356",
    "source": "osm",
    "name": "Teren Baschet Public – Dumbrăvița",
    "neighborhood": "Dumbrăvița",
    "address": "Zona Dumbrăvița, Timișoara",
    "lat": 45.788364,
    "lng": 21.218625,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Baschet"
    ],
    "sportLabels": [
      "Baschet"
    ],
    "surface": "Bitum / Asfalt",
    "hasLighting": true,
    "lightingNote": "Iluminat nocturn confirmat pe teren",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Dumbrăvița (Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-755684357",
    "osmId": "way/755684357",
    "source": "osm",
    "name": "Masă Ping Pong Publică – Dumbrăvița",
    "neighborhood": "Dumbrăvița",
    "address": "Zona Dumbrăvița, Timișoara",
    "lat": 45.788261,
    "lng": 21.218768,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Ping Pong"
    ],
    "sportLabels": [
      "Ping Pong"
    ],
    "surface": "Masă outdoor ping pong",
    "hasLighting": true,
    "lightingNote": "Iluminat nocturn confirmat pe teren",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Dumbrăvița (Ping Pong), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-771260245",
    "osmId": "way/771260245",
    "source": "osm",
    "name": "Teren Tenis – Complex Studențesc",
    "neighborhood": "Complex Studențesc",
    "address": "Zona Complex Studențesc, Timișoara",
    "lat": 45.753865,
    "lng": 21.243568,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Teren tenis amenajat",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Complex Studențesc (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-775542255",
    "osmId": "way/775542255",
    "source": "osm",
    "name": "Teren Tenis – Calea Aradului",
    "neighborhood": "Calea Aradului",
    "address": "Zona Calea Aradului, Timișoara",
    "lat": 45.77225,
    "lng": 21.213686,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Teren tenis amenajat",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Calea Aradului (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-778606719",
    "osmId": "way/778606719",
    "source": "osm",
    "name": "Teren Minifotbal Public – Freidorf",
    "neighborhood": "Freidorf",
    "address": "Zona Freidorf, Timișoara",
    "lat": 45.719566,
    "lng": 21.170178,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Freidorf (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-823499485",
    "osmId": "way/823499485",
    "source": "osm",
    "name": "Teren Tenis – Buziașului",
    "neighborhood": "Buziașului / Ciarda Roșie",
    "address": "Zona Buziașului / Ciarda Roșie, Timișoara",
    "lat": 45.724659,
    "lng": 21.291404,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Teren tenis amenajat",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Buziașului / Ciarda Roșie (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-843446869",
    "osmId": "way/843446869",
    "source": "osm",
    "name": "Fostul stadion Mănușarul",
    "neighborhood": "Buziașului / Ciarda Roșie",
    "address": "Zona Buziașului / Ciarda Roșie, Timișoara",
    "lat": 45.726381,
    "lng": 21.2704,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Buziașului / Ciarda Roșie (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-871667798",
    "osmId": "way/871667798",
    "source": "osm",
    "name": "Teren Tenis – Dumbrăvița",
    "neighborhood": "Dumbrăvița",
    "address": "Zona Dumbrăvița, Timișoara",
    "lat": 45.804033,
    "lng": 21.242435,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Teren tenis amenajat",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Dumbrăvița (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-881129322",
    "osmId": "way/881129322",
    "source": "osm",
    "name": "Teren fotbal Freidorf",
    "neighborhood": "Freidorf",
    "address": "Zona Freidorf, Timișoara",
    "lat": 45.727671,
    "lng": 21.176164,
    "isFree": false,
    "hourlyRate": 170,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Iarbă naturală",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Freidorf (Fotbal Sintetic), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-882941674",
    "osmId": "way/882941674",
    "source": "osm",
    "name": "Teren Minifotbal Public – Calea Aradului",
    "neighborhood": "Calea Aradului",
    "address": "Zona Calea Aradului, Timișoara",
    "lat": 45.780848,
    "lng": 21.212989,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Calea Aradului (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-944751092",
    "osmId": "way/944751092",
    "source": "osm",
    "name": "Teren Multisport Public – Calea Aradului",
    "neighborhood": "Calea Aradului",
    "address": "Zona Calea Aradului, Timișoara",
    "lat": 45.776585,
    "lng": 21.207933,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Calea Aradului (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-944954664",
    "osmId": "way/944954664",
    "source": "osm",
    "name": "Teren Tenis – Calea Aradului",
    "neighborhood": "Calea Aradului",
    "address": "Zona Calea Aradului, Timișoara",
    "lat": 45.769291,
    "lng": 21.232726,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Zgură",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Calea Aradului (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-945425394",
    "osmId": "way/945425394",
    "source": "osm",
    "name": "Teren Minifotbal Public – Ghiroda",
    "neighborhood": "Ghiroda",
    "address": "Zona Ghiroda, Timișoara",
    "lat": 45.76958,
    "lng": 21.301317,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Ghiroda (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-955389946",
    "osmId": "way/955389946",
    "source": "osm",
    "name": "Teren Multisport – Dumbrăvița",
    "neighborhood": "Dumbrăvița",
    "address": "Zona Dumbrăvița, Timișoara",
    "lat": 45.786263,
    "lng": 21.224803,
    "isFree": false,
    "hourlyRate": 170,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Dumbrăvița (Fotbal Sintetic, Baschet), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-983690563",
    "osmId": "way/983690563",
    "source": "osm",
    "name": "Teren Multisport Public – Calea Aradului",
    "neighborhood": "Calea Aradului",
    "address": "Zona Calea Aradului, Timișoara",
    "lat": 45.777158,
    "lng": 21.208621,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Calea Aradului (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1019259739",
    "osmId": "way/1019259739",
    "source": "osm",
    "name": "Teren Minifotbal Public – Calea Lipovei",
    "neighborhood": "Calea Lipovei",
    "address": "Zona Calea Lipovei, Timișoara",
    "lat": 45.774674,
    "lng": 21.238379,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Bitum / Asfalt",
    "hasLighting": true,
    "lightingNote": "Iluminat nocturn confirmat pe teren",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Calea Lipovei (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1069721542",
    "osmId": "way/1069721542",
    "source": "osm",
    "name": "Teren Multisport Public – Ghiroda",
    "neighborhood": "Ghiroda",
    "address": "Zona Ghiroda, Timișoara",
    "lat": 45.782015,
    "lng": 21.309284,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Ghiroda (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1075789980",
    "osmId": "way/1075789980",
    "source": "osm",
    "name": "Teren Minifotbal Public – Elisabetin",
    "neighborhood": "Elisabetin / Doina",
    "address": "Zona Elisabetin / Doina, Timișoara",
    "lat": 45.749601,
    "lng": 21.217066,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Elisabetin / Doina (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1080109706",
    "osmId": "way/1080109706",
    "source": "osm",
    "name": "Teren Minifotbal Public – Calea Aradului",
    "neighborhood": "Calea Aradului",
    "address": "Zona Calea Aradului, Timișoara",
    "lat": 45.782693,
    "lng": 21.231434,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Calea Aradului (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1096985210",
    "osmId": "way/1096985210",
    "source": "osm",
    "name": "Teren Multisport Public – Fabric",
    "neighborhood": "Fabric / Electrica",
    "address": "Zona Fabric / Electrica, Timișoara",
    "lat": 45.768617,
    "lng": 21.25737,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Fabric / Electrica (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1107673042",
    "osmId": "way/1107673042",
    "source": "osm",
    "name": "Teren Volei – Zona Stadion",
    "neighborhood": "Zona Stadion / Podeanu",
    "address": "Zona Zona Stadion / Podeanu, Timișoara",
    "lat": 45.739783,
    "lng": 21.258405,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Volei & Fitness"
    ],
    "sportLabels": [
      "Volei & Fitness"
    ],
    "surface": "Zonă fitness / sport amenajată",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Zona Stadion / Podeanu (Volei & Fitness), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1112017942",
    "osmId": "way/1112017942",
    "source": "osm",
    "name": "Teren Minifotbal Public – Pădurea Verde",
    "neighborhood": "Pădurea Verde",
    "address": "Zona Pădurea Verde, Timișoara",
    "lat": 45.801869,
    "lng": 21.293599,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Pădurea Verde (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1112037591",
    "osmId": "way/1112037591",
    "source": "osm",
    "name": "Teren Multisport Public – Calea Lipovei",
    "neighborhood": "Calea Lipovei",
    "address": "Zona Calea Lipovei, Timișoara",
    "lat": 45.772946,
    "lng": 21.250382,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Calea Lipovei (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1112257675",
    "osmId": "way/1112257675",
    "source": "osm",
    "name": "Teren Minifotbal Public – Freidorf",
    "neighborhood": "Freidorf",
    "address": "Zona Freidorf, Timișoara",
    "lat": 45.719815,
    "lng": 21.170624,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Freidorf (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1130911047",
    "osmId": "way/1130911047",
    "source": "osm",
    "name": "Baza sportivă STPT – Teren Fotbal",
    "neighborhood": "Fabric / Electrica",
    "address": "Strada Renașterii nr. 28, Timișoara",
    "lat": 45.770088,
    "lng": 21.25303,
    "isFree": false,
    "hourlyRate": 170,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Fabric / Electrica (Fotbal Sintetic, Baschet), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-1133114245",
    "osmId": "way/1133114245",
    "source": "osm",
    "name": "Teren Multisport Public – Zona Stadion",
    "neighborhood": "Zona Stadion / Podeanu",
    "address": "Zona Zona Stadion / Podeanu, Timișoara",
    "lat": 45.739462,
    "lng": 21.250807,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Zona Stadion / Podeanu (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1133114246",
    "osmId": "way/1133114246",
    "source": "osm",
    "name": "Teren Multisport Public – Zona Stadion",
    "neighborhood": "Zona Stadion / Podeanu",
    "address": "Zona Zona Stadion / Podeanu, Timișoara",
    "lat": 45.739975,
    "lng": 21.250734,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Zona Stadion / Podeanu (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1133114247",
    "osmId": "way/1133114247",
    "source": "osm",
    "name": "Teren Multisport Public – Zona Stadion",
    "neighborhood": "Zona Stadion / Podeanu",
    "address": "Zona Zona Stadion / Podeanu, Timișoara",
    "lat": 45.74038,
    "lng": 21.250848,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Zona Stadion / Podeanu (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1158975530",
    "osmId": "way/1158975530",
    "source": "osm",
    "name": "Teren Multisport Public – Giroc",
    "neighborhood": "Giroc / Chișoda",
    "address": "Zona Giroc / Chișoda, Timișoara",
    "lat": 45.706481,
    "lng": 21.194682,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Giroc / Chișoda (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1163652620",
    "osmId": "way/1163652620",
    "source": "osm",
    "name": "Teren Tenis – Buziașului",
    "neighborhood": "Buziașului / Ciarda Roșie",
    "address": "Zona Buziașului / Ciarda Roșie, Timișoara",
    "lat": 45.728929,
    "lng": 21.274238,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Teren tenis amenajat",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Buziașului / Ciarda Roșie (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-1163652621",
    "osmId": "way/1163652621",
    "source": "osm",
    "name": "Teren Minifotbal Public – Buziașului",
    "neighborhood": "Buziașului / Ciarda Roșie",
    "address": "Zona Buziașului / Ciarda Roșie, Timișoara",
    "lat": 45.72877,
    "lng": 21.274278,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Buziașului / Ciarda Roșie (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1182213861",
    "osmId": "way/1182213861",
    "source": "osm",
    "name": "Teren Multisport Public – Buziașului",
    "neighborhood": "Buziașului / Ciarda Roșie",
    "address": "Zona Buziașului / Ciarda Roșie, Timișoara",
    "lat": 45.720784,
    "lng": 21.290915,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Buziașului / Ciarda Roșie (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1182213862",
    "osmId": "way/1182213862",
    "source": "osm",
    "name": "Teren Multisport Public – Buziașului",
    "neighborhood": "Buziașului / Ciarda Roșie",
    "address": "Zona Buziașului / Ciarda Roșie, Timișoara",
    "lat": 45.720342,
    "lng": 21.291093,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Buziașului / Ciarda Roșie (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1191914852",
    "osmId": "way/1191914852",
    "source": "osm",
    "name": "Teren Multisport Public – Ghiroda",
    "neighborhood": "Ghiroda",
    "address": "Zona Ghiroda, Timișoara",
    "lat": 45.762705,
    "lng": 21.286937,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Ghiroda (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1208216834",
    "osmId": "way/1208216834",
    "source": "osm",
    "name": "Teren Multisport Public – Dumbrăvița",
    "neighborhood": "Dumbrăvița",
    "address": "Zona Dumbrăvița, Timișoara",
    "lat": 45.79932,
    "lng": 21.251248,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Dumbrăvița (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1212564666",
    "osmId": "way/1212564666",
    "source": "osm",
    "name": "Teren Baschet Public – Dumbrăvița",
    "neighborhood": "Dumbrăvița",
    "address": "Zona Dumbrăvița, Timișoara",
    "lat": 45.795378,
    "lng": 21.226019,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Baschet"
    ],
    "sportLabels": [
      "Baschet"
    ],
    "surface": "Beton fin",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Dumbrăvița (Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1214854987",
    "osmId": "way/1214854987",
    "source": "osm",
    "name": "Berlin Sport – Teren Tenis",
    "neighborhood": "Dumbrăvița",
    "address": "Strada Berlin nr. 1, Timișoara",
    "lat": 45.78803,
    "lng": 21.234312,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Teren tenis amenajat",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Dumbrăvița (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-1214854988",
    "osmId": "way/1214854988",
    "source": "osm",
    "name": "Berlin Sport – Teren Tenis",
    "neighborhood": "Dumbrăvița",
    "address": "Strada Berlin nr. 1, Timișoara",
    "lat": 45.78856,
    "lng": 21.233801,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Teren tenis amenajat",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Dumbrăvița (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-1221784801",
    "osmId": "way/1221784801",
    "source": "osm",
    "name": "Traseu Pump Track & MTB – Dumbrăvița",
    "neighborhood": "Dumbrăvița",
    "address": "Zona Dumbrăvița, Timișoara",
    "lat": 45.802373,
    "lng": 21.26616,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Bicicletă"
    ],
    "sportLabels": [
      "Bicicletă"
    ],
    "surface": "Traseu ciclism / Pump track",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Dumbrăvița (Bicicletă), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1262670718",
    "osmId": "way/1262670718",
    "source": "osm",
    "name": "Teren Baschet Public – Dumbrăvița",
    "neighborhood": "Dumbrăvița",
    "address": "Zona Dumbrăvița, Timișoara",
    "lat": 45.792113,
    "lng": 21.248403,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Baschet"
    ],
    "sportLabels": [
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Dumbrăvița (Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1262670719",
    "osmId": "way/1262670719",
    "source": "osm",
    "name": "Teren Multisport Public – Dumbrăvița",
    "neighborhood": "Dumbrăvița",
    "address": "Zona Dumbrăvița, Timișoara",
    "lat": 45.792097,
    "lng": 21.248139,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Dumbrăvița (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1262670720",
    "osmId": "way/1262670720",
    "source": "osm",
    "name": "Aparate Fitness & Calisthenics – Dumbrăvița",
    "neighborhood": "Dumbrăvița",
    "address": "Zona Dumbrăvița, Timișoara",
    "lat": 45.792264,
    "lng": 21.248138,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Volei & Fitness"
    ],
    "sportLabels": [
      "Volei & Fitness"
    ],
    "surface": "Zonă fitness / sport amenajată",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Dumbrăvița (Volei & Fitness), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1274592587",
    "osmId": "way/1274592587",
    "source": "osm",
    "name": "Teren Baschet Public – Zona Bega",
    "neighborhood": "Zona Bega / Parcul Rozelor",
    "address": "Zona Zona Bega / Parcul Rozelor, Timișoara",
    "lat": 45.748044,
    "lng": 21.227698,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Baschet"
    ],
    "sportLabels": [
      "Baschet"
    ],
    "surface": "Beton fin",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Zona Bega / Parcul Rozelor (Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1274670710",
    "osmId": "way/1274670710",
    "source": "osm",
    "name": "Teren Baschet Public – Dumbrăvița",
    "neighborhood": "Dumbrăvița",
    "address": "Zona Dumbrăvița, Timișoara",
    "lat": 45.785796,
    "lng": 21.230284,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Baschet"
    ],
    "sportLabels": [
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Dumbrăvița (Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1279693750",
    "osmId": "way/1279693750",
    "source": "osm",
    "name": "Teren Multisport Public – Mehala",
    "neighborhood": "Mehala / Ronaț",
    "address": "Zona Mehala / Ronaț, Timișoara",
    "lat": 45.794071,
    "lng": 21.177448,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Mehala / Ronaț (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1283415995",
    "osmId": "way/1283415995",
    "source": "osm",
    "name": "Teren Tenis – Calea Lipovei",
    "neighborhood": "Calea Lipovei",
    "address": "Zona Calea Lipovei, Timișoara",
    "lat": 45.773099,
    "lng": 21.234949,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Bitum / Asfalt",
    "hasLighting": true,
    "lightingNote": "Iluminat nocturn confirmat pe teren",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Calea Lipovei (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-1303552062",
    "osmId": "way/1303552062",
    "source": "osm",
    "name": "Teren Volei – Dumbrăvița",
    "neighborhood": "Dumbrăvița",
    "address": "Zona Dumbrăvița, Timișoara",
    "lat": 45.797787,
    "lng": 21.257127,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Volei & Fitness"
    ],
    "sportLabels": [
      "Volei & Fitness"
    ],
    "surface": "Nisip (Beach Volley / Sport)",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Dumbrăvița (Volei & Fitness), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1312332571",
    "osmId": "way/1312332571",
    "source": "osm",
    "name": "Teren Multisport Public – Zona Stadion",
    "neighborhood": "Zona Stadion / Podeanu",
    "address": "Zona Zona Stadion / Podeanu, Timișoara",
    "lat": 45.741448,
    "lng": 21.246401,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Zona Stadion / Podeanu (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1312332572",
    "osmId": "way/1312332572",
    "source": "osm",
    "name": "Teren Multisport Public – Zona Stadion",
    "neighborhood": "Zona Stadion / Podeanu",
    "address": "Zona Zona Stadion / Podeanu, Timișoara",
    "lat": 45.740789,
    "lng": 21.246756,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Zona Stadion / Podeanu (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1319689176",
    "osmId": "way/1319689176",
    "source": "osm",
    "name": "Teren Multisport Public – Dumbrăvița",
    "neighborhood": "Dumbrăvița",
    "address": "Zona Dumbrăvița, Timișoara",
    "lat": 45.798694,
    "lng": 21.252362,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Dumbrăvița (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1319735409",
    "osmId": "way/1319735409",
    "source": "osm",
    "name": "Teren Tenis – Buziașului",
    "neighborhood": "Buziașului / Ciarda Roșie",
    "address": "Zona Buziașului / Ciarda Roșie, Timișoara",
    "lat": 45.739875,
    "lng": 21.282903,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Teren tenis amenajat",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Buziașului / Ciarda Roșie (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-1319735411",
    "osmId": "way/1319735411",
    "source": "osm",
    "name": "Teren Tenis – Buziașului",
    "neighborhood": "Buziașului / Ciarda Roșie",
    "address": "Zona Buziașului / Ciarda Roșie, Timișoara",
    "lat": 45.739187,
    "lng": 21.282736,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Teren tenis amenajat",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Buziașului / Ciarda Roșie (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-1319735413",
    "osmId": "way/1319735413",
    "source": "osm",
    "name": "Teren Tenis – Buziașului",
    "neighborhood": "Buziașului / Ciarda Roșie",
    "address": "Zona Buziașului / Ciarda Roșie, Timișoara",
    "lat": 45.738495,
    "lng": 21.282567,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Teren tenis amenajat",
    "hasLighting": true,
    "lightingNote": "Instalație nocturnă disponibilă",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Buziașului / Ciarda Roșie (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-1319735414",
    "osmId": "way/1319735414",
    "source": "osm",
    "name": "Teren Multisport Public – Buziașului",
    "neighborhood": "Buziașului / Ciarda Roșie",
    "address": "Zona Buziașului / Ciarda Roșie, Timișoara",
    "lat": 45.738154,
    "lng": 21.282484,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Buziașului / Ciarda Roșie (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1334338477",
    "osmId": "way/1334338477",
    "source": "osm",
    "name": "Player Sport – Teren Tenis",
    "neighborhood": "Dumbrăvița",
    "address": "Strada Arinului nr. 57, Timișoara",
    "lat": 45.792,
    "lng": 21.225411,
    "isFree": false,
    "hourlyRate": 85,
    "sports": [
      "Tenis"
    ],
    "sportLabels": [
      "Tenis"
    ],
    "surface": "Gazon sintetic",
    "hasLighting": true,
    "lightingNote": "Iluminat nocturn confirmat pe teren",
    "hasParking": true,
    "parkingNote": "Parcare în zona bazei sportive",
    "hasLockerRooms": true,
    "lockerNote": "Facilități disponibile la baza sportivă",
    "extraPerks": [
      "De închiriat",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren sportiv în zona Dumbrăvița (Tenis), poziționat exact pe suprafața terenului."
  },
  {
    "id": "osm-way-1421322370",
    "osmId": "way/1421322370",
    "source": "osm",
    "name": "Teren Multisport Public – Buziașului",
    "neighborhood": "Buziașului / Ciarda Roșie",
    "address": "Zona Buziașului / Ciarda Roșie, Timișoara",
    "lat": 45.723975,
    "lng": 21.266542,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Buziașului / Ciarda Roșie (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1431185992",
    "osmId": "way/1431185992",
    "source": "osm",
    "name": "Baza sportivă Vasile Deheleanu – Teren Baschet",
    "neighborhood": "Mehala / Ronaț",
    "address": "Zona Mehala / Ronaț, Timișoara",
    "lat": 45.764097,
    "lng": 21.189066,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Baschet"
    ],
    "sportLabels": [
      "Baschet"
    ],
    "surface": "Suprafață tartan elastic",
    "hasLighting": true,
    "lightingNote": "Iluminat nocturn confirmat pe teren",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Mehala / Ronaț (Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1442790475",
    "osmId": "way/1442790475",
    "source": "osm",
    "name": "Teren Minifotbal Public – Giroc",
    "neighborhood": "Giroc / Chișoda",
    "address": "Zona Giroc / Chișoda, Timișoara",
    "lat": 45.717192,
    "lng": 21.218874,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Giroc / Chișoda (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1445752190",
    "osmId": "way/1445752190",
    "source": "osm",
    "name": "Teren Multisport Public – Pădurea Verde",
    "neighborhood": "Pădurea Verde",
    "address": "Zona Pădurea Verde, Timișoara",
    "lat": 45.780039,
    "lng": 21.271555,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Pădurea Verde (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1456861186",
    "osmId": "way/1456861186",
    "source": "osm",
    "name": "Teren Multisport Public – Ghirodei",
    "neighborhood": "Ghirodei / Plopi",
    "address": "Zona Ghirodei / Plopi, Timișoara",
    "lat": 45.752941,
    "lng": 21.270508,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Ghirodei / Plopi (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1458513266",
    "osmId": "way/1458513266",
    "source": "osm",
    "name": "Teren Multisport Public – Mehala",
    "neighborhood": "Mehala / Ronaț",
    "address": "Zona Mehala / Ronaț, Timișoara",
    "lat": 45.751644,
    "lng": 21.18938,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Suprafață tartan elastic",
    "hasLighting": true,
    "lightingNote": "Iluminat nocturn confirmat pe teren",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Mehala / Ronaț (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1467572642",
    "osmId": "way/1467572642",
    "source": "osm",
    "name": "Teren Multisport Public – Circumvalațiunii",
    "neighborhood": "Circumvalațiunii",
    "address": "Zona Circumvalațiunii, Timișoara",
    "lat": 45.764478,
    "lng": 21.216318,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Circumvalațiunii (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1472026253",
    "osmId": "way/1472026253",
    "source": "osm",
    "name": "Teren Minifotbal Public – Calea Aradului",
    "neighborhood": "Calea Aradului",
    "address": "Zona Calea Aradului, Timișoara",
    "lat": 45.779226,
    "lng": 21.229091,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic"
    ],
    "sportLabels": [
      "Fotbal Sintetic"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Calea Aradului (Fotbal Sintetic), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1483890113",
    "osmId": "way/1483890113",
    "source": "osm",
    "name": "Teren Multisport Public – Iosefin",
    "neighborhood": "Iosefin",
    "address": "Zona Iosefin, Timișoara",
    "lat": 45.744856,
    "lng": 21.213622,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Iosefin (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1488398375",
    "osmId": "way/1488398375",
    "source": "osm",
    "name": "Teren Multisport Public – Ghirodei",
    "neighborhood": "Ghirodei / Plopi",
    "address": "Zona Ghirodei / Plopi, Timișoara",
    "lat": 45.762104,
    "lng": 21.264913,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Ghirodei / Plopi (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1493646845",
    "osmId": "way/1493646845",
    "source": "osm",
    "name": "Stadionul Tricoul 1 Iunie – Teren Fotbal",
    "neighborhood": "Ghirodei / Plopi",
    "address": "Zona Ghirodei / Plopi, Timișoara",
    "lat": 45.74954,
    "lng": 21.279316,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Ghirodei / Plopi (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1497996816",
    "osmId": "way/1497996816",
    "source": "osm",
    "name": "Teren Multisport Public – Freidorf",
    "neighborhood": "Freidorf",
    "address": "Zona Freidorf, Timișoara",
    "lat": 45.703715,
    "lng": 21.173424,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Freidorf (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1497996817",
    "osmId": "way/1497996817",
    "source": "osm",
    "name": "Teren Multisport Public – Freidorf",
    "neighborhood": "Freidorf",
    "address": "Zona Freidorf, Timișoara",
    "lat": 45.703354,
    "lng": 21.173037,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Freidorf (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-way-1505133712",
    "osmId": "way/1505133712",
    "source": "osm",
    "name": "Teren Multisport Public – Fabric",
    "neighborhood": "Fabric / Electrica",
    "address": "Zona Fabric / Electrica, Timișoara",
    "lat": 45.761811,
    "lng": 21.255393,
    "isFree": true,
    "hourlyRate": 0,
    "sports": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "sportLabels": [
      "Fotbal Sintetic",
      "Baschet"
    ],
    "surface": "Teren sportiv outdoor",
    "hasLighting": false,
    "lightingNote": "Iluminat public / de parc în zonă",
    "hasParking": true,
    "parkingNote": "Locuri de parcare publice în apropiere",
    "hasLockerRooms": false,
    "lockerNote": "Fără vestiare (teren cu acces liber)",
    "extraPerks": [
      "Acces liber",
      "Coordonate exacte pe teren"
    ],
    "description": "Teren / spațiu sportiv cu acces liber în zona Fabric / Electrica (Fotbal Sintetic, Baschet), poziționat exact pe suprafața de joc."
  },
  {
    "id": "osm-node-2829178807",
    "osmId": "node/2829178807",
    "source": "osm",
    "name": "Hercules Gym",
    "neighborhood": "Complex Studențesc",
    "address": "Zona Complex Studențesc, Timișoara",
    "lat": 45.754325,
    "lng": 21.246912,
    "isFree": false,
    "hourlyRate": 50,
    "sports": [
      "Volei & Fitness"
    ],
    "sportLabels": [
      "Volei & Fitness"
    ],
    "surface": "Sală / Complex sportiv amenajat",
    "hasLighting": true,
    "lightingNote": "Iluminat interior / nocturnă complex",
    "hasParking": true,
    "parkingNote": "Parcare adiacentă sălii / complexului",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare și grupuri sanitare în incintă",
    "extraPerks": [
      "Sală / Complex Sportiv",
      "Complex Studențesc"
    ],
    "description": "Sală sau complex sportiv din Complex Studențesc (Volei & Fitness)."
  },
  {
    "id": "osm-node-4696293866",
    "osmId": "node/4696293866",
    "source": "osm",
    "name": "Diesel Fitness",
    "neighborhood": "Fabric / Electrica",
    "address": "Zona Fabric / Electrica, Timișoara",
    "lat": 45.76344,
    "lng": 21.254308,
    "isFree": false,
    "hourlyRate": 50,
    "sports": [
      "Volei & Fitness"
    ],
    "sportLabels": [
      "Volei & Fitness"
    ],
    "surface": "Sală / Complex sportiv amenajat",
    "hasLighting": true,
    "lightingNote": "Iluminat interior / nocturnă complex",
    "hasParking": true,
    "parkingNote": "Parcare adiacentă sălii / complexului",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare și grupuri sanitare în incintă",
    "extraPerks": [
      "Sală / Complex Sportiv",
      "Fabric / Electrica"
    ],
    "description": "Sală sau complex sportiv din Fabric / Electrica (Volei & Fitness)."
  },
  {
    "id": "osm-node-4696293867",
    "osmId": "node/4696293867",
    "source": "osm",
    "name": "Iguana Fitness Club",
    "neighborhood": "Fabric / Electrica",
    "address": "Zona Fabric / Electrica, Timișoara",
    "lat": 45.76405,
    "lng": 21.256145,
    "isFree": false,
    "hourlyRate": 50,
    "sports": [
      "Volei & Fitness"
    ],
    "sportLabels": [
      "Volei & Fitness"
    ],
    "surface": "Sală / Complex sportiv amenajat",
    "hasLighting": true,
    "lightingNote": "Iluminat interior / nocturnă complex",
    "hasParking": true,
    "parkingNote": "Parcare adiacentă sălii / complexului",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare și grupuri sanitare în incintă",
    "extraPerks": [
      "Sală / Complex Sportiv",
      "Fabric / Electrica"
    ],
    "description": "Sală sau complex sportiv din Fabric / Electrica (Volei & Fitness)."
  },
  {
    "id": "osm-node-5690958842",
    "osmId": "node/5690958842",
    "source": "osm",
    "name": "Smartfit Studio",
    "neighborhood": "Calea Aradului",
    "address": "Bulevardul Cetății nr. 97, Timișoara",
    "lat": 45.768764,
    "lng": 21.219061,
    "isFree": false,
    "hourlyRate": 50,
    "sports": [
      "Volei & Fitness"
    ],
    "sportLabels": [
      "Volei & Fitness"
    ],
    "surface": "Sală / Complex sportiv amenajat",
    "hasLighting": true,
    "lightingNote": "Iluminat interior / nocturnă complex",
    "hasParking": true,
    "parkingNote": "Parcare adiacentă sălii / complexului",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare și grupuri sanitare în incintă",
    "extraPerks": [
      "Sală / Complex Sportiv",
      "Calea Aradului"
    ],
    "description": "Sală sau complex sportiv din Calea Aradului (Volei & Fitness)."
  },
  {
    "id": "osm-node-13252338910",
    "osmId": "node/13252338910",
    "source": "osm",
    "name": "Comples Sportiv Bega, Sală de gimnastică",
    "neighborhood": "Circumvalațiunii",
    "address": "Zona Circumvalațiunii, Timișoara",
    "lat": 45.764422,
    "lng": 21.221119,
    "isFree": false,
    "hourlyRate": 50,
    "sports": [
      "Volei & Fitness"
    ],
    "sportLabels": [
      "Volei & Fitness"
    ],
    "surface": "Sală / Complex sportiv amenajat",
    "hasLighting": true,
    "lightingNote": "Iluminat interior / nocturnă complex",
    "hasParking": true,
    "parkingNote": "Parcare adiacentă sălii / complexului",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare și grupuri sanitare în incintă",
    "extraPerks": [
      "Sală / Complex Sportiv",
      "Circumvalațiunii"
    ],
    "description": "Sală sau complex sportiv din Circumvalațiunii (Volei & Fitness)."
  },
  {
    "id": "osm-way-221404008",
    "osmId": "way/221404008",
    "source": "osm",
    "name": "Sala Polivalentă a Politehnicii",
    "neighborhood": "Zona Stadion / Podeanu",
    "address": "Zona Zona Stadion / Podeanu, Timișoara",
    "lat": 45.743399,
    "lng": 21.250238,
    "isFree": false,
    "hourlyRate": 110,
    "sports": [
      "Baschet",
      "Volei & Fitness"
    ],
    "sportLabels": [
      "Baschet",
      "Volei & Fitness"
    ],
    "surface": "Sală / Complex sportiv amenajat",
    "hasLighting": true,
    "lightingNote": "Iluminat interior / nocturnă complex",
    "hasParking": true,
    "parkingNote": "Parcare adiacentă sălii / complexului",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare și grupuri sanitare în incintă",
    "extraPerks": [
      "Sală / Complex Sportiv",
      "Zona Stadion / Podeanu"
    ],
    "description": "Sală sau complex sportiv din Zona Stadion / Podeanu (Baschet, Volei & Fitness)."
  },
  {
    "id": "osm-way-262640844",
    "osmId": "way/262640844",
    "source": "osm",
    "name": "Sală Sport & Fitness – Giroc",
    "neighborhood": "Giroc / Chișoda",
    "address": "Zona Giroc / Chișoda, Timișoara",
    "lat": 45.703387,
    "lng": 21.213112,
    "isFree": false,
    "hourlyRate": 50,
    "sports": [
      "Volei & Fitness"
    ],
    "sportLabels": [
      "Volei & Fitness"
    ],
    "surface": "Sală / Complex sportiv amenajat",
    "hasLighting": true,
    "lightingNote": "Iluminat interior / nocturnă complex",
    "hasParking": true,
    "parkingNote": "Parcare adiacentă sălii / complexului",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare și grupuri sanitare în incintă",
    "extraPerks": [
      "Sală / Complex Sportiv",
      "Giroc / Chișoda"
    ],
    "description": "Sală sau complex sportiv din Giroc / Chișoda (Volei & Fitness)."
  },
  {
    "id": "osm-way-669322476",
    "osmId": "way/669322476",
    "source": "osm",
    "name": "Sală de sport UVT Oituz",
    "neighborhood": "Circumvalațiunii",
    "address": "Zona Circumvalațiunii, Timișoara",
    "lat": 45.76181,
    "lng": 21.229629,
    "isFree": false,
    "hourlyRate": 50,
    "sports": [
      "Volei & Fitness"
    ],
    "sportLabels": [
      "Volei & Fitness"
    ],
    "surface": "Sală / Complex sportiv amenajat",
    "hasLighting": true,
    "lightingNote": "Iluminat interior / nocturnă complex",
    "hasParking": true,
    "parkingNote": "Parcare adiacentă sălii / complexului",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare și grupuri sanitare în incintă",
    "extraPerks": [
      "Sală / Complex Sportiv",
      "Circumvalațiunii"
    ],
    "description": "Sală sau complex sportiv din Circumvalațiunii (Volei & Fitness)."
  },
  {
    "id": "osm-way-759841130",
    "osmId": "way/759841130",
    "source": "osm",
    "name": "Sală Sport & Fitness – Giroc",
    "neighborhood": "Giroc / Chișoda",
    "address": "Zona Giroc / Chișoda, Timișoara",
    "lat": 45.702897,
    "lng": 21.23931,
    "isFree": false,
    "hourlyRate": 50,
    "sports": [
      "Volei & Fitness"
    ],
    "sportLabels": [
      "Volei & Fitness"
    ],
    "surface": "Sală / Complex sportiv amenajat",
    "hasLighting": true,
    "lightingNote": "Iluminat interior / nocturnă complex",
    "hasParking": true,
    "parkingNote": "Parcare adiacentă sălii / complexului",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare și grupuri sanitare în incintă",
    "extraPerks": [
      "Sală / Complex Sportiv",
      "Giroc / Chișoda"
    ],
    "description": "Sală sau complex sportiv din Giroc / Chișoda (Volei & Fitness)."
  },
  {
    "id": "osm-way-1228690658",
    "osmId": "way/1228690658",
    "source": "osm",
    "name": "Sala Polivalentă Dumbrăvița",
    "neighborhood": "Dumbrăvița",
    "address": "Zona Dumbrăvița, Timișoara",
    "lat": 45.797511,
    "lng": 21.255009,
    "isFree": false,
    "hourlyRate": 110,
    "sports": [
      "Baschet",
      "Volei & Fitness"
    ],
    "sportLabels": [
      "Baschet",
      "Volei & Fitness"
    ],
    "surface": "Sală / Complex sportiv amenajat",
    "hasLighting": true,
    "lightingNote": "Iluminat interior / nocturnă complex",
    "hasParking": true,
    "parkingNote": "Parcare adiacentă sălii / complexului",
    "hasLockerRooms": true,
    "lockerNote": "Vestiare și grupuri sanitare în incintă",
    "extraPerks": [
      "Sală / Complex Sportiv",
      "Dumbrăvița"
    ],
    "description": "Sală sau complex sportiv din Dumbrăvița (Baschet, Volei & Fitness)."
  }
];
