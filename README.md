# 💥 Where Should I Go?! (Comic Edition)

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

2. **165+ Curated Iconic Places & Hidden Gems (30+ Per Country)**:
   - 🇯🇵 **Japan** (36 destinations: *Mount Fuji, Fushimi Inari, Shirakawa-gō, Yakushima, Naoshima, Jigokudani, Kamikōchi, etc.*)
   - 🇮🇹 **Italy** (35 destinations: *Colosseum, Amalfi Coast, Civita di Bagnoregio, Matera, Alberobello, Lago di Braies, Tre Cime, etc.*)
   - 🇮🇸 **Iceland** (32 destinations: *Blue Lagoon, Gullfoss, Stuðlagil Canyon, Kirkjufell, Landmannalaugar, etc.*)
   - 🇫🇷 **France** (32 destinations: *Eiffel Tower, Mont Saint-Michel, Gorges du Verdon, Rocamadour, Colmar, etc.*)
   - 🇺🇸 **United States** (32 destinations: *Grand Canyon, Yellowstone, Antelope Canyon, Big Sur, White Sands, etc.*)
   - 🌍 **Worldwide / All Countries**: Explore all 167 spots without borders.

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

Verifies dataset counts, field schemas, no-repeat guarantee across 1,000 spins, and live Wikipedia API connectivity.

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|---|---|
| <kbd>Space</kbd> / <kbd>Enter</kbd> | Trigger **Surprise Me!** / **Spin Again** |
| <kbd>Esc</kbd> | Close Wishlist Drawer |

---

## 📄 License

MIT License. Open source and free to use.
