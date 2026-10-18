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

2. **3,200+ Curated Iconic Places & Hidden Gems (30+ Per Country across 100 Countries)**:
   - 🌍 **Region & Continent Quick Filter**: Filter country pills by **All Regions (100)**, **Europe (31)**, **Asia (26)**, **Americas (21)**, or **Oceania & Africa (22)**.
   
   **🏰 Europe (31 Countries)**:
   - 🇮🇹 Italy (35) • 🇫🇷 France (32) • 🇪🇸 Spain (32) • 🇬🇧 United Kingdom (32) • 🇩🇪 Germany (32) • 🇨🇭 Switzerland (32) • 🇵🇹 Portugal (32) • 🇬🇷 Greece (32) • 🇳🇱 Netherlands (32) • 🇦🇹 Austria (32) • 🇮🇪 Ireland (32) • 🇳🇴 Norway (32) • 🇮🇸 Iceland (32) • 🇹🇷 Turkey (32) • 🇧🇪 Belgium (32) • 🇨🇿 Czech Republic (32) • 🇭🇺 Hungary (32) • 🇭🇷 Croatia (32) • 🇸🇪 Sweden (32) • 🇩🇰 Denmark (32) • 🇫🇮 Finland (32) • 🇵🇱 Poland (32) • 🇷🇴 Romania (32) • 🇪🇪 Estonia (32) • 🇱🇻 Latvia (32) • 🇱🇹 Lithuania (32) • 🇸🇮 Slovenia (32) • 🇸🇰 Slovakia (32) • 🇧🇬 Bulgaria (32) • 🇲🇪 Montenegro (32) • 🇦🇱 Albania (32).

   **🏯 Asia (26 Countries)**:
   - 🇯🇵 Japan (36) • 🇨🇳 China (32) • 🇰🇷 South Korea (32) • 🇹🇼 Taiwan (32) • 🇹🇭 Thailand (32) • 🇻🇳 Vietnam (32) • 🇲🇾 Malaysia (32) • 🇸🇬 Singapore (32) • 🇮🇩 Indonesia (32) • 🇵🇭 Philippines (32) • 🇮🇳 India (32) • 🇳🇵 Nepal (32) • 🇱🇰 Sri Lanka (32) • 🇲🇻 Maldives (32) • 🇰🇭 Cambodia (32) • 🇱🇦 Laos (32) • 🇯🇴 Jordan (32) • 🇦🇪 United Arab Emirates (32) • 🇺🇿 Uzbekistan (32) • 🇲🇳 Mongolia (32) • 🇧🇹 Bhutan (32) • 🇴🇲 Oman (32) • 🇶🇦 Qatar (32) • 🇬🇪 Georgia (32) • 🇦🇲 Armenia (32) • 🇰🇿 Kazakhstan (32).

   **🗽 Americas (21 Countries)**:
   - 🇺🇸 United States (32) • 🇨🇦 Canada (32) • 🇲🇽 Mexico (32) • 🇧🇷 Brazil (32) • 🇵🇪 Peru (32) • 🇦🇷 Argentina (32) • 🇨🇴 Colombia (32) • 🇨🇱 Chile (32) • 🇪🇨 Ecuador (32) • 🇧🇴 Bolivia (32) • 🇨🇷 Costa Rica (32) • 🇨🇺 Cuba (32) • 🇯🇲 Jamaica (32) • 🇵🇦 Panama (32) • 🇺🇾 Uruguay (32) • 🇵🇾 Paraguay (32) • 🇬🇹 Guatemala (32) • 🇧🇿 Belize (32) • 🇩🇴 Dominican Republic (32) • 🇧🇸 Bahamas (32) • 🇧🇧 Barbados (32).

   **🦘 Oceania & Africa (22 Countries)**:
   - 🇦🇺 Australia (32) • 🇳🇿 New Zealand (32) • 🇪🇬 Egypt (32) • 🇲🇦 Morocco (32) • 🇿🇦 South Africa (32) • 🇰🇪 Kenya (32) • 🇹🇿 Tanzania (32) • 🇫🇯 Fiji (32) • 🇲🇺 Mauritius (32) • 🇳🇦 Namibia (32) • 🇪🇹 Ethiopia (32) • 🇲🇬 Madagascar (32) • 🇸🇳 Senegal (32) • 🇬🇭 Ghana (32) • 🇺🇬 Uganda (32) • 🇷🇼 Rwanda (32) • 🇿🇼 Zimbabwe (32) • 🇧🇼 Botswana (32) • 🇿🇲 Zambia (32) • 🇸🇨 Seychelles (32) • 🇼🇸 Samoa (32) • 🇻🇺 Vanuatu (32).

   - 🌍 **Worldwide / All Countries**: Explore all 3,207 spots across 100 countries without borders.

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

Verifies dataset integrity, schema conformity across all 3,207 destinations in 100 countries, no-repeat guarantee over 1,000 spins, and live Wikipedia API responses.
