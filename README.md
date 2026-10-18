# 💥 Where Should I Go?!

A responsive comic-book / pop-art themed web application that randomly recommends travel destinations with iconic sights and hidden gems, enriched with high-resolution photography and encyclopedic summaries fetched live from the free **Wikipedia REST API**.

![Where Should I Go Comic Preview](https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80)

---

## 🎨 Comic Theme Aesthetic

- **Halftone Ben-Day Dots**: Authentic retro comic book halftone dot pattern in both **Comic Noir (Dark)** and **Sunday Funnies Pop (Light)** modes.
- **Bold Ink Outlines & 3D Hard Shadows**: 3.5px–4px black ink borders with retro offset drop shadows (`5px 5px 0px #000`).
- **Comic Typography**:
  - `Bangers` for headlines, comic titles, and action punch buttons.
  - `Comic Neue` for dialogue, encyclopedic intelligence, and notes.
- **Speech Bubbles & Caption Boxes**:
  - Yellow comic caption boxes (*"📍 TARGET ACQUIRED"*, *"THE INTEL"*).
  - Speech bubbles with pointer tails for secret insider travel tips.
- **Tactile Cartoon Sound Effects**: Synthesized cartoon whooshes and fanfare chimes via the Web Audio API.

---

## ✨ Features

1. **Clean Comic Hero Section & "Surprise Me!" Action**:
   - Giant tactile **"💥 SURPRISE ME!"** action button with 3D press-down mechanics (<kbd>Space</kbd> / <kbd>Enter</kbd>).
   - Live destination pool counter dynamically calculating eligible spots.

2. **1,220+ Curated Iconic Places & Hidden Gems (30+ Per Country across 38 Countries)**:
   - 🌍 **Region & Continent Quick Filter**: Easily filter country pills by **All Regions (38)**, **Europe (14)**, **Asia (11)**, **Americas (7)**, or **Oceania & Africa (6)**.
   - 🇧🇷 **Brazil** (32 destinations: *Christ the Redeemer, Iguazu Falls, Copacabana, Fernando de Noronha, Lençóis Maranhenses, Salvador Pelourinho, Amazon Rainforest, Pantanal, etc.*)
   - 🇵🇪 **Peru** (32 destinations: *Machu Picchu, Sacred Valley, Cusco Historic Centre, Colca Canyon, Lake Titicaca, Vinicunca Rainbow Mountain, Nazca Lines, Huacachina Oasis, etc.*)
   - 🇦🇷 **Argentina** (32 destinations: *Perito Moreno Glacier, Iguazu Falls Argentine Side, La Boca Buenos Aires, Mount Fitz Roy, Bariloche, Mendoza Uco Valley, Ushuaia, etc.*)
   - 🇨🇴 **Colombia** (32 destinations: *Cartagena Walled City, Cocora Valley Wax Palms, Medellín Comuna 13, Tayrona National Park, Caño Cristales Liquid Rainbow, Guatapé Rock, etc.*)
   - 🇲🇦 **Morocco** (32 destinations: *Marrakech Jemaa el-Fnaa, Chefchaouen Blue City, Fes el-Bali Medina, Erg Chebbi Sahara Dunes, Aït Benhaddou, Hassan II Mosque, etc.*)
   - 🇿🇦 **South Africa** (32 destinations: *Table Mountain, Kruger National Park, Cape of Good Hope, Boulders Beach Penguins, Kirstenbosch, Blyde River Canyon, Drakensberg, etc.*)
   - 🇰🇪 **Kenya** (32 destinations: *Maasai Mara Great Migration, Amboseli Kilimanjaro, Lake Nakuru Flamingos, Mount Kenya, Diani Beach, Hell's Gate, Lamu Old Town, etc.*)
   - 🇳🇱 **Netherlands** (32 destinations: *Canals of Amsterdam, Keukenhof Tulip Gardens, Rijksmuseum, Anne Frank House, Zaanse Schans, Giethoorn, Kinderdijk Windmills, etc.*)
   - 🇦🇹 **Austria** (32 destinations: *Schönbrunn Palace, Hallstatt Lake & Salt Mine, Stephansdom, Belvedere Klimt, Hohensalzburg Fortress, Grossglockner Alpine Road, etc.*)
   - 🇮🇪 **Ireland** (32 destinations: *Cliffs of Moher, Ring of Kerry, Trinity College Book of Kells, Killarney National Park, Dingle Peninsula, Giant's Causeway, Skellig Michael, etc.*)
   - 🇲🇾 **Malaysia** (32 destinations: *Petronas Towers, Batu Caves, George Town Penang, Langkawi Sky Bridge, Mount Kinabalu, Cameron Highlands, etc.*)
   - 🇰🇷 **South Korea** (32 destinations: *Gyeongbokgung, Bukchon Hanok Village, N Seoul Tower, Jeju Seongsan Ilchulbong, Hallasan, Gamcheon, etc.*)
   - 🇨🇳 **China** (32 destinations: *Great Wall, Forbidden City, Terracotta Army, Zhangjiajie Avatar Mountains, Guilin Li River, Jiuzhaigou, etc.*)
   - 🇹🇼 **Taiwan** (32 destinations: *Jiufen Old Street, Taroko Gorge, Sun Moon Lake, Alishan Railway, Taipei 101, Kenting, etc.*)
   - 🇮🇩 **Indonesia** (32 destinations: *Borobudur, Mount Bromo, Komodo National Park, Raja Ampat, Ubud Monkey Forest, Prambanan, etc.*)
   - 🇮🇳 **India** (32 destinations: *Taj Mahal, Amer Fort Jaipur, Varanasi Ghats, Kerala Backwaters, Pangong Tso, Hampi, Golden Temple, etc.*)
   - 🇵🇭 **Philippines** (32 destinations: *El Nido Palawan, Coron Kayangan Lake, Chocolate Hills, Boracay White Beach, Banaue Rice Terraces, Siargao, etc.*)
   - 🇸🇬 **Singapore** (32 destinations: *Gardens by the Bay, Marina Bay Sands, Sentosa, Jewel Changi Rain Vortex, Botanic Gardens, Chinatown, etc.*)
   - 🇯🇵 **Japan** (36 destinations: *Mount Fuji, Fushimi Inari, Shirakawa-gō, Yakushima, Naoshima, Jigokudani, Kamikōchi, etc.*)
   - 🇹🇭 **Thailand** (32 destinations: *Grand Palace, Phi Phi Islands, Railay Beach, Chiang Mai, Ayutthaya, Khao Sok, etc.*)
   - 🇻🇳 **Vietnam** (32 destinations: *Ha Long Bay, Hoi An Ancient Town, Phong Nha, Sa Pa, Ninh Binh, Son Doong Cave, etc.*)
   - 🇬🇧 **United Kingdom** (32 destinations: *Stonehenge, Giant's Causeway, Isle of Skye, Edinburgh Castle, Roman Baths, etc.*)
   - 🇮🇹 **Italy** (35 destinations: *Colosseum, Amalfi Coast, Civita di Bagnoregio, Matera, Alberobello, Lago di Braies, Tre Cime, etc.*)
   - 🇫🇷 **France** (32 destinations: *Eiffel Tower, Mont Saint-Michel, Gorges du Verdon, Rocamadour, Colmar, etc.*)
   - 🇪🇸 **Spain** (32 destinations: *Sagrada Família, Alhambra, Park Güell, Ronda, Caminito del Rey, Toledo, Segovia, etc.*)
   - 🇩🇪 **Germany** (32 destinations: *Neuschwanstein Castle, Brandenburg Gate, Rothenburg, Zugspitze, Bastei Bridge, etc.*)
   - 🇵🇹 **Portugal** (32 destinations: *Pena Palace, Benagil Cave, Douro Valley, Quinta da Regaleira, Ponta da Piedade, etc.*)
   - 🇨🇭 **Switzerland** (32 destinations: *Matterhorn, Lauterbrunnen, Jungfraujoch, Oeschinen Lake, Château de Chillon, etc.*)
   - 🇳🇴 **Norway** (32 destinations: *Geirangerfjord, Preikestolen, Lofoten Islands, Trolltunga, Flåm Railway, etc.*)
   - 🇬🇷 **Greece** (32 destinations: *Santorini, Meteora, Acropolis, Navagio Beach, Delphi, Monemvasia, Vikos Gorge, etc.*)
   - 🇮🇸 **Iceland** (32 destinations: *Blue Lagoon, Gullfoss, Stuðlagil Canyon, Kirkjufell, Landmannalaugar, etc.*)
   - 🇹🇷 **Turkey** (32 destinations: *Hagia Sophia, Cappadocia, Pamukkale, Ephesus, Mount Nemrut, Butterfly Valley, etc.*)
   - 🇺🇸 **United States** (32 destinations: *Grand Canyon, Yellowstone, Antelope Canyon, Big Sur, White Sands, etc.*)
   - 🇨🇦 **Canada** (32 destinations: *Banff National Park, Moraine Lake, Niagara Falls, Jasper, Old Quebec, Cabot Trail, etc.*)
   - 🇲🇽 **Mexico** (32 destinations: *Chichen Itza, Teotihuacan, Tulum, Cenote Ik Kil, Copper Canyon, Palenque, etc.*)
   - 🇦🇺 **Australia** (32 destinations: *Sydney Opera House, Great Barrier Reef, Uluru, Whitehaven Beach, Great Ocean Road, etc.*)
   - 🇳🇿 **New Zealand** (32 destinations: *Milford Sound, Hobbiton, Mount Cook, Lake Tekapo, Waitomo Caves, Roys Peak, etc.*)
   - 🇪🇬 **Egypt** (32 destinations: *Giza Pyramids, Karnak Temple, Abu Simbel, Valley of the Kings, Siwa Oasis, White Desert, etc.*)
   - 🌍 **Worldwide / All Countries**: Explore all 1,223 spots without borders.

3. **Live Wikipedia REST API Integration**:
   - Queries `https://en.wikipedia.org/api/rest_v1/page/summary/{title}` with custom User-Agent.
   - Dynamically selects high-resolution photos (`originalimage.source`), falling back to `thumbnail.source` and curated high-res photos.
   - Extracts concise summaries with direct links to the full Wikipedia article and image attributions.
   - In-memory cache for instantaneous retrieval upon revisiting.

4. **Quick Tags & Direct Google Maps Navigation**:
   - **Region Tag**: Specific prefecture, province, or territory.
   - **Comic Vibe Badges**: *Nature & Scenic*, *History & Heritage*, *Hidden Gems*, *Food & Culture*, *Coastal & Islands*, *Adventure & Wild*.
   - **One-click "Open in Google Maps" button** opening the exact query.
   - **Travel intel**: Curated "Best Time to Visit" season and insider tips for every spot.

5. **Smooth 3D Card-Flip & No-Repeat Guarantee**:
   - Cartoon squash-and-stretch 3D flip animation when clicking **"SPIN AGAIN!"**.
   - Algorithmic candidate filter guarantees **the same destination is strictly never picked twice in a row**.

6. **Interactive Discovery Additions**:
   - **Wishlist / Travel Log Drawer**: Save dream spots to `localStorage`, view in a comic slide-over drawer, and copy or clear them anytime.
   - **Recently Discovered Places Carousel**: Visual session comic strip below the card.
   - **Web Audio Sound Effects**: Synthesized cartoon whoosh and fanfare pop.
   - **Noir / Pop Theme Toggle**: Switch between dark comic noir and bright pop-art Sunday funnies.

---

## 🚀 Getting Started

```bash
# Start local server
npm start
# or
python -m http.server 3000
```

Open `http://localhost:3000` in any web browser.

---

## 🧪 Running Automated Tests

```bash
npm test
```

Verifies dataset integrity, schema conformity across all 1,223 destinations, no-repeat guarantee over 1,000 spins, and live Wikipedia API responses.
