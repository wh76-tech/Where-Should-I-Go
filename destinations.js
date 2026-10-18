// Curated database of iconic destinations and hidden gems across multiple countries
// Each destination includes exact Wikipedia titles for the REST API, vibes, regions, fallback images, and Google Maps queries.

export const COUNTRIES = [
  {
    "id": "japan",
    "name": "Japan",
    "flag": "🇯🇵",
    "adjective": "Japanese",
    "popularTag": "Cherry Blossoms & Temples"
  },
  {
    "id": "italy",
    "name": "Italy",
    "flag": "🇮🇹",
    "adjective": "Italian",
    "popularTag": "La Dolce Vita & Ruins"
  },
  {
    "id": "iceland",
    "name": "Iceland",
    "flag": "🇮🇸",
    "adjective": "Icelandic",
    "popularTag": "Fire, Ice & Auroras"
  },
  {
    "id": "france",
    "name": "France",
    "flag": "🇫🇷",
    "adjective": "French",
    "popularTag": "Châteaux, Coast & Gastronomy"
  },
  {
    "id": "usa",
    "name": "United States",
    "flag": "🇺🇸",
    "adjective": "American",
    "popularTag": "National Parks & Canyons"
  },
  {
    "id": "greece",
    "name": "Greece",
    "flag": "🇬🇷",
    "adjective": "Greek",
    "popularTag": "Aegean Seas & Ancient Myths"
  },
  {
    "id": "spain",
    "name": "Spain",
    "flag": "🇪🇸",
    "adjective": "Spanish",
    "popularTag": "Fiestas, Palaces & Tapas"
  },
  {
    "id": "switzerland",
    "name": "Switzerland",
    "flag": "🇨🇭",
    "adjective": "Swiss",
    "popularTag": "Alpine Peaks & Glacial Lakes"
  },
  {
    "id": "new-zealand",
    "name": "New Zealand",
    "flag": "🇳🇿",
    "adjective": "Kiwi",
    "popularTag": "Middle-earth Fjords & Wilderness"
  },
  {
    "id": "thailand",
    "name": "Thailand",
    "flag": "🇹🇭",
    "adjective": "Thai",
    "popularTag": "Golden Temples & Emerald Bays"
  },
  {
    "id": "all",
    "name": "All Countries",
    "flag": "🌍",
    "adjective": "Global",
    "popularTag": "Worldwide Adventure"
  }
];

export const VIBES = [
  {
    "id": "all",
    "label": "All Vibes",
    "icon": "sparkles"
  },
  {
    "id": "nature",
    "label": "Nature & Scenic",
    "icon": "mountain"
  },
  {
    "id": "history",
    "label": "History & Heritage",
    "icon": "landmark"
  },
  {
    "id": "hidden-gem",
    "label": "Hidden Gems",
    "icon": "gem"
  },
  {
    "id": "culture",
    "label": "Food & Culture",
    "icon": "utensils"
  },
  {
    "id": "coastal",
    "label": "Coastal & Islands",
    "icon": "waves"
  },
  {
    "id": "adventure",
    "label": "Adventure & Wild",
    "icon": "compass"
  }
];

export const DESTINATIONS = [
  {
    "id": "jp-1",
    "name": "Mount Fuji",
    "nativeName": "富士山",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Chūbu (Shizuoka & Yamanashi)",
    "type": "iconic",
    "vibes": [
      "nature",
      "history"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "UNESCO World Heritage",
      "Iconic Landmark"
    ],
    "wikiTitle": "Mount_Fuji",
    "googleMapsQuery": "Mount Fuji, Japan",
    "bestTimeToVisit": "July to September for hiking, Nov to Feb for clear snow-capped views",
    "insiderTip": "For the ultimate reflection shot (\"Upside-down Fuji\"), head to Lake Kawaguchi at sunrise on a calm morning.",
    "fallbackImage": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Mount Fuji is an active stratovolcano and Japan's highest peak at 3,776 meters. A sacred mountain and cultural icon, its symmetrical snow-capped cone inspires artists and attracts climbers from across the globe."
  },
  {
    "id": "jp-2",
    "name": "Fushimi Inari-taisha",
    "nativeName": "伏見稲荷大社",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Kansai (Kyoto)",
    "type": "iconic",
    "vibes": [
      "history",
      "culture"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Shinto Shrine",
      "Spiritual"
    ],
    "wikiTitle": "Fushimi_Inari-taisha",
    "googleMapsQuery": "Fushimi Inari Taisha, Kyoto, Japan",
    "bestTimeToVisit": "Early morning (before 7:30 AM) or sunset to avoid crowds",
    "insiderTip": "Hike past the halfway point (Yotsutsuji intersection) to enjoy peaceful mountain trails and panoramic views over Kyoto without the tour groups.",
    "fallbackImage": "https://images.unsplash.com/photo-1478436127897-769e00d2c715?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Fushimi Inari-taisha is the head shrine of the kami Inari, famous for its thousands of vibrant vermilion torii gates that wind up the sacred Mount Inari."
  },
  {
    "id": "jp-3",
    "name": "Shirakawa-gō",
    "nativeName": "白川郷",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Chūbu (Gifu Prefecture)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "history",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "UNESCO Heritage",
      "Fairy Tale Village"
    ],
    "wikiTitle": "Historic_Villages_of_Shirakawa-g%C5%8D_and_Gokayama",
    "googleMapsQuery": "Shirakawa-go, Gifu, Japan",
    "bestTimeToVisit": "January & February for winter illumination, or October for autumn foliage",
    "insiderTip": "Book an overnight stay in a traditional thatched gassho-zukuri farmhouse to experience an unforgettable home-cooked hearth dinner.",
    "fallbackImage": "https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Shirakawa-gō is a secluded mountain village known for its distinctive thatched gassho-zukuri farmhouses, designed to withstand massive winter snowfalls."
  },
  {
    "id": "jp-4",
    "name": "Yakushima Island",
    "nativeName": "屋久島",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Kyushu (Kagoshima Prefecture)",
    "type": "hidden-gem",
    "vibes": [
      "nature",
      "adventure",
      "hidden-gem"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Ancient Rainforest",
      "Adventure & Wild"
    ],
    "wikiTitle": "Yakushima",
    "googleMapsQuery": "Yakushima, Kagoshima, Japan",
    "bestTimeToVisit": "April to May or October to November for comfortable trekking",
    "insiderTip": "Hike into Shiratani Unsuikyo ravine — its moss-draped ancient cedar trees directly inspired Hayao Miyazaki's Princess Mononoke.",
    "fallbackImage": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Yakushima is a subtropical island boasting an ancient temperate cedar rainforest with trees dating back millennia, mist-shrouded peaks, and lush green moss carpets."
  },
  {
    "id": "jp-5",
    "name": "Naoshima Art Island",
    "nativeName": "直島",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Shikoku (Kagawa Prefecture)",
    "type": "hidden-gem",
    "vibes": [
      "culture",
      "coastal",
      "hidden-gem"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Contemporary Art",
      "Coastal & Islands"
    ],
    "wikiTitle": "Naoshima,_Kagawa",
    "googleMapsQuery": "Naoshima, Kagawa, Japan",
    "bestTimeToVisit": "Spring or Autumn; rent an electric bicycle from Miyanoura Port",
    "insiderTip": "Visit Chichu Art Museum at dusk to experience James Turrell's Open Sky installation as the sun sets over the Seto Inland Sea.",
    "fallbackImage": "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Naoshima is a world-renowned art island in the Seto Inland Sea, celebrated for contemporary museums designed by Tadao Ando and iconic outdoor sculptures like Yayoi Kusama's Yellow Pumpkin."
  },
  {
    "id": "jp-6",
    "name": "Arashiyama Bamboo Grove",
    "nativeName": "嵐山",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Kansai (Kyoto)",
    "type": "iconic",
    "vibes": [
      "nature",
      "history"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Serene",
      "Iconic Landmark"
    ],
    "wikiTitle": "Arashiyama",
    "googleMapsQuery": "Arashiyama Bamboo Grove, Kyoto, Japan",
    "bestTimeToVisit": "Dawn (6:30 AM - 7:30 AM) when the wind rustles the stalks in total silence",
    "insiderTip": "Pair your visit with nearby Okochi Sanso Villa and Tenryu-ji garden for one of the most sublime landscape designs in Japan.",
    "fallbackImage": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Arashiyama is a picturesque district on the western outskirts of Kyoto, celebrated for its soaring bamboo forest walkways, historic wooden bridges, and tranquil Zen temples."
  },
  {
    "id": "jp-7",
    "name": "Shibuya Crossing",
    "nativeName": "渋谷スクランブル交差点",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Kantō (Tokyo)",
    "type": "iconic",
    "vibes": [
      "culture"
    ],
    "vibeLabels": [
      "Food & Culture",
      "Urban Marvel",
      "Iconic Landmark"
    ],
    "wikiTitle": "Shibuya_Crossing",
    "googleMapsQuery": "Shibuya Scramble Crossing, Tokyo, Japan",
    "bestTimeToVisit": "Dusk on Friday or Saturday night when neon signs glow and up to 3,000 people cross at once",
    "insiderTip": "Head to the Shibuya Sky observation deck on the 47th floor of Shibuya Scramble Square for an open-air 360-degree rooftop view.",
    "fallbackImage": "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Shibuya Crossing is often described as the busiest pedestrian intersection in the world, embodying the electrifying energy and modern spectacle of Tokyo."
  },
  {
    "id": "jp-8",
    "name": "Jigokudani Snow Monkey Park",
    "nativeName": "地獄谷野猿公苑",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Chūbu (Nagano Prefecture)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Wildlife",
      "Alpine Winter"
    ],
    "wikiTitle": "Jigokudani_Monkey_Park",
    "googleMapsQuery": "Jigokudani Snow Monkey Park, Nagano, Japan",
    "bestTimeToVisit": "December to March when snow blankets the valley and monkeys bathe in thermal pools",
    "insiderTip": "Wear sturdy snow boots for the 30-minute pine forest walk from the bus stop to the thermal pools.",
    "fallbackImage": "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Jigokudani Monkey Park is famous for its troop of wild Japanese macaques that descend from the steep cliffs to soak in natural hot springs during freezing winter months."
  },
  {
    "id": "jp-9",
    "name": "Itsukushima Floating Torii (Miyajima)",
    "nativeName": "厳島神社",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Chūgoku (Hiroshima Prefecture)",
    "type": "iconic",
    "vibes": [
      "history",
      "coastal"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Coastal & Islands",
      "UNESCO Heritage"
    ],
    "wikiTitle": "Itsukushima_Shrine",
    "googleMapsQuery": "Itsukushima Shrine, Miyajima, Hiroshima, Japan",
    "bestTimeToVisit": "Plan around both high tide (to see it floating) and low tide (to walk right beneath it)",
    "insiderTip": "Try freshly grilled oysters and momiji manju (maple leaf pastries) filled with custard or red bean along Omotesando street.",
    "fallbackImage": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Itsukushima Shrine is an iconic Shinto sanctuary situated on Miyajima island, celebrated for its legendary grand torii gate that appears to float magically above the sea at high tide."
  },
  {
    "id": "jp-10",
    "name": "Nara Deer Park",
    "nativeName": "奈良公園",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Kansai (Nara Prefecture)",
    "type": "iconic",
    "vibes": [
      "nature",
      "history"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Nature & Scenic",
      "Wildlife"
    ],
    "wikiTitle": "Nara_Park",
    "googleMapsQuery": "Nara Park, Nara, Japan",
    "bestTimeToVisit": "Spring or autumn morning, combining with Todai-ji Great Buddha temple",
    "insiderTip": "Buy deer crackers (shika-senbei) and bow gently to the deer — many will politely bow back before accepting the treat.",
    "fallbackImage": "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Nara Park spans over 1,200 acres at the foot of Mount Wakakusa, home to over a thousand freely roaming sika deer considered sacred messengers of the Shinto gods."
  },
  {
    "id": "jp-11",
    "name": "Himeji Castle",
    "nativeName": "姫路城",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Kansai (Hyōgo Prefecture)",
    "type": "iconic",
    "vibes": [
      "history"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Samurai Architecture",
      "UNESCO Heritage"
    ],
    "wikiTitle": "Himeji_Castle",
    "googleMapsQuery": "Himeji Castle, Hyogo, Japan",
    "bestTimeToVisit": "April during cherry blossom season, or autumn during foliage illumination",
    "insiderTip": "Climb all the way to the 6th floor of the main keep to examine the ingenious defensive traps and massive dual wooden pillars supporting the structure.",
    "fallbackImage": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Known as the White Heron Castle due to its brilliant white exterior and elegant bird-like silhouette, Himeji Castle is Japan's best preserved original samurai fortress."
  },
  {
    "id": "jp-12",
    "name": "Takayama Historic Old Town",
    "nativeName": "高山市",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Chūbu (Gifu Prefecture)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "history",
      "culture"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "History & Heritage",
      "Food & Culture"
    ],
    "wikiTitle": "Takayama,_Gifu",
    "googleMapsQuery": "Sanmachi Suji, Takayama, Gifu, Japan",
    "bestTimeToVisit": "April or October for the legendary float festivals, or winter for snow and sake tasting",
    "insiderTip": "Look for cedar balls (sugidama) hanging above merchant doors to discover historic sake breweries offering 100-yen tasting cups.",
    "fallbackImage": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Takayama boasts beautifully preserved Edo-period wooden merchant quarters (Sanmachi Suji), renowned carpenters, morning riverside markets, and world-class Hida wagyu beef."
  },
  {
    "id": "jp-13",
    "name": "Oirase Mountain Gorge",
    "nativeName": "奥入瀬渓流",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Tōhoku (Aomori Prefecture)",
    "type": "hidden-gem",
    "vibes": [
      "nature",
      "adventure",
      "hidden-gem"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Nature & Scenic",
      "Hiking Haven"
    ],
    "wikiTitle": "Oirase_River",
    "googleMapsQuery": "Oirase Gorge, Aomori, Japan",
    "bestTimeToVisit": "Mid to late October for breathtaking golden autumn foliage",
    "insiderTip": "Rent an e-bike at Yakeyama and ride the 14km path along the rushing river past 14 dramatic cascading waterfalls.",
    "fallbackImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Oirase Gorge is one of Japan's premier river valley trails, where clear crystal waters cascade through deep beech forests, mossy boulders, and vibrant autumn canopies."
  },
  {
    "id": "jp-14",
    "name": "Tottori Coastal Sand Dunes",
    "nativeName": "鳥取砂丘",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Chūgoku (Tottori Prefecture)",
    "type": "hidden-gem",
    "vibes": [
      "nature",
      "coastal",
      "hidden-gem"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Coastal & Islands",
      "Unique Landscape"
    ],
    "wikiTitle": "Tottori_Sand_Dunes",
    "googleMapsQuery": "Tottori Sand Dunes, Tottori, Japan",
    "bestTimeToVisit": "Early morning or late afternoon when winds sculpt ripples in the golden sand",
    "insiderTip": "Climb the 50-meter-tall \"Umanose\" (Horse's Back) dune for an awe-inspiring view of golden sand dropping straight into the deep blue Sea of Japan.",
    "fallbackImage": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Spanning 16 kilometers along the Sea of Japan, the Tottori Sand Dunes form a surreal coastal mini-desert with dunes rising up to 50 meters, camel rides, and paragliding."
  },
  {
    "id": "jp-15",
    "name": "Iya Valley & Vine Bridges",
    "nativeName": "祖谷渓",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Shikoku (Tokushima Prefecture)",
    "type": "hidden-gem",
    "vibes": [
      "adventure",
      "nature",
      "hidden-gem"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Adventure & Wild",
      "Deep Valley"
    ],
    "wikiTitle": "Iya_Valley",
    "googleMapsQuery": "Iya Kazurabashi, Tokushima, Japan",
    "bestTimeToVisit": "Spring or late autumn for vivid mist and mountain color",
    "insiderTip": "Cross the Iya Kazurabashi vine bridge suspended 14 meters above the emerald river — woven from living mountain vines with foot-wide gaps between slats!",
    "fallbackImage": "https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Iya Valley is a remote, dramatic gorge nestled deep in the mountainous heart of Shikoku, famed for ancient hanging vine bridges and dramatic mountain hot spring baths."
  },
  {
    "id": "jp-16",
    "name": "Magome & Tsumago Post Towns",
    "nativeName": "馬籠宿・妻籠宿",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Chūbu (Kiso Valley)",
    "type": "hidden-gem",
    "vibes": [
      "history",
      "adventure",
      "hidden-gem"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Samurai Trail",
      "History & Heritage"
    ],
    "wikiTitle": "Magome-juku",
    "googleMapsQuery": "Magome-juku, Nakatsugawa, Gifu, Japan",
    "bestTimeToVisit": "Spring and Autumn; walk the scenic 8km Nakasendo mountain trail between both towns",
    "insiderTip": "Send your luggage ahead via the town baggage forwarding service so you can hike unburdened along the stone-paved forest path.",
    "fallbackImage": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Magome and Tsumago are meticulously preserved post towns along the ancient Nakasendo highway that once connected Edo (Tokyo) and Kyoto through the rugged Kiso mountains."
  },
  {
    "id": "jp-17",
    "name": "Dōtonbori Food District",
    "nativeName": "道頓堀",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Kansai (Osaka)",
    "type": "iconic",
    "vibes": [
      "culture"
    ],
    "vibeLabels": [
      "Food & Culture",
      "Nightlife",
      "Street Food Capital"
    ],
    "wikiTitle": "D%C5%8Dtonbori",
    "googleMapsQuery": "Dotonbori, Osaka, Japan",
    "bestTimeToVisit": "Evening after 7 PM when giant illuminated mechanized signs reflect off the canal",
    "insiderTip": "Embrace Osaka's \"kuidaore\" (eat until you drop) spirit with piping-hot takoyaki, crispy kushikatsu, and okonomiyaki from side-alley stalls.",
    "fallbackImage": "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Dōtonbori is the dazzling culinary and entertainment epicenter of Osaka, renowned for its glowing Glico Running Man sign, giant mechanized crab sculptures, and street food."
  },
  {
    "id": "jp-18",
    "name": "Nachi Waterfall & Kumano Kodō",
    "nativeName": "那智の滝",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Kansai (Wakayama Prefecture)",
    "type": "hidden-gem",
    "vibes": [
      "nature",
      "history",
      "hidden-gem"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "UNESCO Pilgrimage",
      "Spiritual Sanctuary"
    ],
    "wikiTitle": "Nachi_Falls",
    "googleMapsQuery": "Nachi Falls, Nachikatsuura, Wakayama, Japan",
    "bestTimeToVisit": "Spring or Autumn, during clear sunny mornings",
    "insiderTip": "Frame your photograph with the orange three-story pagoda of Seiganto-ji in the foreground against the single unbroken plunge of Nachi Falls.",
    "fallbackImage": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Nachi Falls is Japan's tallest single-drop waterfall at 133 meters, worshipped for centuries as a deity along the sacred Kumano Kodō pilgrimage network."
  },
  {
    "id": "jp-19",
    "name": "Shiretoko National Park",
    "nativeName": "知床国立公園",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Hokkaido",
    "type": "hidden-gem",
    "vibes": [
      "nature",
      "adventure",
      "hidden-gem"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Wilderness & Fauna",
      "Adventure & Wild"
    ],
    "wikiTitle": "Shiretoko_National_Park",
    "googleMapsQuery": "Shiretoko National Park, Hokkaido, Japan",
    "bestTimeToVisit": "February for drift ice walking, or July-August for coastal brown bear boat cruises",
    "insiderTip": "Take a small sightseeing boat out of Utoro to spot brown bears foraging on remote rocky shores untouched by roads.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Shiretoko occupies a remote peninsula at the northeastern tip of Hokkaido — a UNESCO wild sanctuary with untouched virgin forests, dense brown bear populations, and winter drift ice."
  },
  {
    "id": "jp-20",
    "name": "Kinkaku-ji (The Golden Pavilion)",
    "nativeName": "金閣寺",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Kansai (Kyoto)",
    "type": "iconic",
    "vibes": [
      "history"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Zen Temple",
      "UNESCO Heritage"
    ],
    "wikiTitle": "Kinkaku-ji",
    "googleMapsQuery": "Kinkaku-ji, Kyoto, Japan",
    "bestTimeToVisit": "Morning on a sunny day or right after a fresh winter snowfall",
    "insiderTip": "Walk slowly around the Kyoko-chi (Mirror Pond) to admire how the gilded top two floors reflect like liquid gold across the water.",
    "fallbackImage": "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Kinkaku-ji is a Zen Buddhist temple in Kyoto whose top two stories are entirely covered in pure gold leaf, standing in breathtaking harmony with its surrounding stroll garden."
  },
  {
    "id": "jp-21",
    "name": "Hakone Hot Springs & Caldera",
    "nativeName": "箱根町",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Kantō (Kanagawa Prefecture)",
    "type": "iconic",
    "vibes": [
      "nature",
      "coastal"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Onsen Retreat",
      "Fuji Views"
    ],
    "wikiTitle": "Hakone",
    "googleMapsQuery": "Hakone, Kanagawa, Japan",
    "bestTimeToVisit": "Autumn for fiery maples or winter for crisp Fuji vistas across Lake Ashi",
    "insiderTip": "Ride the Hakone Ropeway over steaming sulfuric vents at Owakudani and eat a black egg boiled in the mineral springs (legend says each adds 7 years to your life).",
    "fallbackImage": "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Part of the Fuji-Hakone-Izu National Park, Hakone is a historic resort town famous for geothermal hot springs, tranquil Lake Ashi, pirate ship cruises, and views of Mount Fuji."
  },
  {
    "id": "jp-22",
    "name": "Ginzan Onsen Village",
    "nativeName": "銀山温泉",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Tōhoku (Yamagata Prefecture)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "history"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Nostalgic Onsen",
      "Taisho Romance"
    ],
    "wikiTitle": "Ginzan_Onsen",
    "googleMapsQuery": "Ginzan Onsen, Yamagata, Japan",
    "bestTimeToVisit": "January & February when deep snow blankets multi-story wooden ryokan along the stream",
    "insiderTip": "Stroll the gas-lit wooden footbridges at blue hour while wearing a yukata and wooden geta clogs.",
    "fallbackImage": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Ginzan Onsen is a secluded hot spring village built along a crystal river gorge, lined with multi-story wooden ryokan inns dating from the 1920s that glow warmly beneath gas streetlamps."
  },
  {
    "id": "jp-23",
    "name": "Kamikōchi Alpine Valley",
    "nativeName": "上高地",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Chūbu (Nagano Prefecture)",
    "type": "hidden-gem",
    "vibes": [
      "nature",
      "adventure",
      "hidden-gem"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Japanese Alps",
      "Nature & Scenic"
    ],
    "wikiTitle": "Kamik%C5%8Dchi",
    "googleMapsQuery": "Kappabashi, Kamikochi, Nagano, Japan",
    "bestTimeToVisit": "Mid-May for alpine wildflowers or mid-October for golden larch foliage",
    "insiderTip": "Walk the flat trail from Taisho Pond past sunken birch trees to Kappa Bridge with the towering Hotaka mountain range as a dramatic backdrop.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Kamikōchi is a pristine highland valley in the Northern Japan Alps, featuring turquoise rivers, dramatic glacial mountain peaks, and protected hiking trails with no private car access."
  },
  {
    "id": "jp-24",
    "name": "Kenroku-en Landscape Garden",
    "nativeName": "兼六園",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Hokuriku (Kanazawa, Ishikawa)",
    "type": "iconic",
    "vibes": [
      "nature",
      "history"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Traditional Arts",
      "Iconic Landmark"
    ],
    "wikiTitle": "Kenroku-en",
    "googleMapsQuery": "Kenroku-en Garden, Kanazawa, Ishikawa, Japan",
    "bestTimeToVisit": "Winter to see yukitsuri (conical ropes protecting ancient pine trees from snow)",
    "insiderTip": "Cross over to Kanazawa Castle Park and visit the nearby 21st Century Museum of Contemporary Art for an incredible blend of past and future.",
    "fallbackImage": "https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Regarded as one of the \"Three Great Gardens of Japan\", Kenroku-en represents centuries of feudal garden design combining spaciousness, serenity, antiquity, and sweeping views."
  },
  {
    "id": "jp-25",
    "name": "Kurobe Alpine Gorge",
    "nativeName": "黒部峡谷",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Hokuriku (Toyama Prefecture)",
    "type": "hidden-gem",
    "vibes": [
      "nature",
      "adventure",
      "hidden-gem"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Scenic Railway",
      "Adventure & Wild"
    ],
    "wikiTitle": "Kurobe_Gorge",
    "googleMapsQuery": "Kurobe Gorge Railway, Toyama, Japan",
    "bestTimeToVisit": "Mid-October to early November for sheer multi-colored canyon foliage",
    "insiderTip": "Ride the open-sided vintage retro train car (torokko) across the bright red Shin-Yamabiko bridge over crystalline turquoise waters.",
    "fallbackImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Kurobe Gorge is one of the deepest V-shaped ravines in Japan, accessible via a charming vintage narrow-gauge railway traversing towering cliffs and pristine hot springs."
  },
  {
    "id": "jp-26",
    "name": "Motonosumi Shrine",
    "nativeName": "元乃隅神社",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Chūgoku (Yamaguchi Prefecture)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "coastal",
      "history"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Coastal & Islands",
      "Scenic Shrine"
    ],
    "wikiTitle": "Motonosumi_Shrine",
    "googleMapsQuery": "Motonosumi Shrine, Nagato, Yamaguchi, Japan",
    "bestTimeToVisit": "Late spring or autumn afternoon on a clear, sunny day",
    "insiderTip": "Try tossing a coin into the offering box placed 5 meters high atop the tallest torii gate — legend says your wish comes true if you make the shot!",
    "fallbackImage": "https://images.unsplash.com/photo-1478436127897-769e00d2c715?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Motonosumi Shrine features a tunnel of 123 vermilion torii gates winding down green coastal cliffs toward the deep blue waves of the Sea of Japan."
  },
  {
    "id": "jp-27",
    "name": "Nikkō Tōshō-gū & Cedar Groves",
    "nativeName": "日光東照宮",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Kantō (Tochigi Prefecture)",
    "type": "iconic",
    "vibes": [
      "history",
      "nature"
    ],
    "vibeLabels": [
      "History & Heritage",
      "UNESCO Heritage",
      "Ornate Shinto"
    ],
    "wikiTitle": "Nikk%C5%8D_T%C5%8Dsh%C5%8D-g%C5%AB",
    "googleMapsQuery": "Nikko Toshogu, Tochigi, Japan",
    "bestTimeToVisit": "October during autumn foliage or early spring mornings",
    "insiderTip": "Seek out the famous wood carvings: the \"Three Wise Monkeys\" (Hear no evil, speak no evil, see no evil) and the sleeping cat Nemuri-neko.",
    "fallbackImage": "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Tōshō-gū is the lavishly decorated final resting place of shogun Tokugawa Ieyasu, featuring intricate gold carvings nestled within a solemn centuries-old cedar forest."
  },
  {
    "id": "jp-28",
    "name": "Beppu Hot Spring Hells (Jigoku)",
    "nativeName": "別府地獄めぐり",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Kyushu (Ōita Prefecture)",
    "type": "iconic",
    "vibes": [
      "nature",
      "culture"
    ],
    "vibeLabels": [
      "Food & Culture",
      "Geothermal Wonder",
      "Wellness"
    ],
    "wikiTitle": "Beppu,_%C5%8Cita",
    "googleMapsQuery": "Beppu Onsen, Oita, Japan",
    "bestTimeToVisit": "Year-round; autumn and winter are particularly cozy",
    "insiderTip": "Try Jigoku-mushi cuisine — seasonal vegetables, pork buns, and eggs steamed entirely with geothermal volcano steam vents.",
    "fallbackImage": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Beppu is Japan's undisputed onsen capital, discharging more geothermal water than any other spot in the country, famed for its colorful \"Eight Hells\" thermal pools."
  },
  {
    "id": "jp-29",
    "name": "Kurashiki Bikan Canal Quarter",
    "nativeName": "倉敷美観地区",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Chūgoku (Okayama Prefecture)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "history",
      "coastal"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "History & Heritage",
      "Canal Town"
    ],
    "wikiTitle": "Kurashiki",
    "googleMapsQuery": "Kurashiki Bikan Historical Quarter, Okayama, Japan",
    "bestTimeToVisit": "Spring when willows green up over the canal, or evening when lanterns light up the stone bridges",
    "insiderTip": "Take a traditional punt boat tour along the canal and visit Ohara Museum of Art, Japan's first private museum of Western art.",
    "fallbackImage": "https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The Kurashiki Bikan area was a prosperous Edo-era rice distribution hub, characterized by romantic willow-lined canals, stone bridges, and black-and-white tiled storehouses."
  },
  {
    "id": "jp-30",
    "name": "Sensō-ji Temple & Asakusa",
    "nativeName": "浅草寺",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Kantō (Tokyo)",
    "type": "iconic",
    "vibes": [
      "history",
      "culture"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Old Tokyo",
      "Buddhist Temple"
    ],
    "wikiTitle": "Sens%C5%8D-ji",
    "googleMapsQuery": "Senso-ji, Asakusa, Tokyo, Japan",
    "bestTimeToVisit": "Night (after 8 PM) when Nakamise shopping street closes and the temple complex glows under dramatic spotlights",
    "insiderTip": "Draw an \"o-mikuji\" paper fortune; if it predicts bad luck, tie it to the wire racks to leave the misfortune behind at the temple.",
    "fallbackImage": "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Sensō-ji is Tokyo's oldest and most significant Buddhist temple, founded in 645 AD and entered through the famous Kaminarimon (Thunder Gate) with its massive red paper lantern."
  },
  {
    "id": "jp-31",
    "name": "Matsushima Pine Islands Bay",
    "nativeName": "松島湾",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Tōhoku (Miyagi Prefecture)",
    "type": "iconic",
    "vibes": [
      "coastal",
      "nature"
    ],
    "vibeLabels": [
      "Coastal & Islands",
      "Nature & Scenic",
      "Classical Beauty"
    ],
    "wikiTitle": "Matsushima",
    "googleMapsQuery": "Matsushima Bay, Miyagi, Japan",
    "bestTimeToVisit": "Autumn for crisp sunny skies and oyster harvest season",
    "insiderTip": "Walk across the red wooden Fukuurabashi pedestrian bridge to Fukuurajima island for serene forest paths and 360-degree bay vistas.",
    "fallbackImage": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Celebrated for centuries by haiku poet Matsuo Bashō, Matsushima Bay features over 260 pine-clad islet rocks dotting calm ocean waters — one of Japan's Three Classical Views."
  },
  {
    "id": "jp-32",
    "name": "Aogashima Volcanic Crater Island",
    "nativeName": "青ヶ島",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Izu Islands (Tokyo Prefecture)",
    "type": "hidden-gem",
    "vibes": [
      "adventure",
      "hidden-gem",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Adventure & Wild",
      "Volcanic Crater"
    ],
    "wikiTitle": "Aogashima",
    "googleMapsQuery": "Aogashima, Tokyo, Japan",
    "bestTimeToVisit": "Summer months (June to September) when helicopter and ferry schedules are least affected by rough ocean swells",
    "insiderTip": "Use the communal geothermal steam pots in the caldera floor to steam your own fresh sweet potatoes, eggs, and seafood.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Aogashima is a volcanic double-caldera island in the Philippine Sea with approximately 170 inhabitants, surrounded by 200-meter sheer cliffs and dark stargazing skies."
  },
  {
    "id": "jp-33",
    "name": "Amanohashidate Sandbar",
    "nativeName": "天橋立",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Kansai (Kyoto Prefecture by the Sea)",
    "type": "hidden-gem",
    "vibes": [
      "nature",
      "coastal",
      "hidden-gem"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Coastal & Islands",
      "Classical View"
    ],
    "wikiTitle": "Amanohashidate",
    "googleMapsQuery": "Amanohashidate, Miyazu, Kyoto, Japan",
    "bestTimeToVisit": "Late spring or autumn; rent a bicycle to cycle across the 3.3km pine sandbar",
    "insiderTip": "Take the chairlift up to Kasamatsu Park, bend over, and look between your legs (\"matanozoki\") — the sandbar appears like a floating dragon or bridge to heaven!",
    "fallbackImage": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Amanohashidate, or the \"Bridge to Heaven\", is a 3.3-kilometer sandbar covered with 8,000 ancient pine trees separating Miyazu Bay from the Asokai inland sea."
  },
  {
    "id": "jp-34",
    "name": "Kōyasan Sacred Temple Mountain",
    "nativeName": "高野山",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Kansai (Wakayama Prefecture)",
    "type": "hidden-gem",
    "vibes": [
      "history",
      "culture",
      "hidden-gem"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Spiritual Retreat",
      "Buddhist Monastery"
    ],
    "wikiTitle": "Mount_K%C5%8Dya",
    "googleMapsQuery": "Koyasan, Wakayama, Japan",
    "bestTimeToVisit": "Spring or late October; book a shukubo (temple stay)",
    "insiderTip": "Walk the two-kilometer stone path through Okunoin Cemetery at dusk among 200,000 samurai and monk tombstones shaded by monumental cedar trees.",
    "fallbackImage": "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Founded in 819 AD by Kobo Daishi, Mount Koya is the spiritual heart of Shingon Esoteric Buddhism, hosting over 100 temples offering meditation and vegetarian shojin-ryori dining."
  },
  {
    "id": "jp-35",
    "name": "Shōdoshima Olive Island & Angel Road",
    "nativeName": "小豆島 エンジェルロード",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Shikoku (Kagawa Prefecture)",
    "type": "hidden-gem",
    "vibes": [
      "coastal",
      "hidden-gem"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Coastal & Islands",
      "Romantic Walk"
    ],
    "wikiTitle": "Sh%C5%8Ddoshima",
    "googleMapsQuery": "Angel Road, Shodoshima, Kagawa, Japan",
    "bestTimeToVisit": "Check daily tide tables to visit right when the tidal sandbar emerges twice a day",
    "insiderTip": "Legend says couples who walk the emerging tidal path holding hands will be blessed with eternal happiness.",
    "fallbackImage": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Shōdoshima is a Mediterranean-like island in the Seto Inland Sea, famous for century-old olive groves, artisanal soy sauce breweries, and Angel Road sandbar."
  },
  {
    "id": "jp-36",
    "name": "Shinjuku Gyoen National Garden",
    "nativeName": "新宿御苑",
    "country": "japan",
    "countryName": "Japan",
    "flag": "🇯🇵",
    "region": "Kantō (Tokyo)",
    "type": "iconic",
    "vibes": [
      "nature"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Urban Oasis",
      "Botanical Haven"
    ],
    "wikiTitle": "Shinjuku_Gyoen",
    "googleMapsQuery": "Shinjuku Gyoen National Garden, Tokyo, Japan",
    "bestTimeToVisit": "Late March to early April for cherry blossoms, or November for autumn momiji",
    "insiderTip": "Pack a picnic mat and bento; alcoholic drinks are prohibited, keeping the atmosphere relaxed and peaceful right in the center of Tokyo.",
    "fallbackImage": "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "One of Tokyo's premier parks, Shinjuku Gyoen blends traditional Japanese landscape gardens with English landscape lawns and French formal gardens across 144 tranquil acres."
  },
  {
    "id": "it-1",
    "name": "The Colosseum",
    "nativeName": "Il Colosseo",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Lazio (Rome)",
    "type": "iconic",
    "vibes": [
      "history"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Ancient Rome",
      "Iconic Landmark"
    ],
    "wikiTitle": "Colosseum",
    "googleMapsQuery": "Colosseum, Rome, Italy",
    "bestTimeToVisit": "Early morning or late afternoon golden hour",
    "insiderTip": "Book an underground hypogeum and arena floor tour to walk where gladiators and wild animals were staged beneath the sand.",
    "fallbackImage": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The Colosseum is the largest ancient amphitheatre ever built, constructed of travertine limestone and volcanic rock, standing as the eternal symbol of Roman architectural prowess."
  },
  {
    "id": "it-2",
    "name": "Positano & Amalfi Coast",
    "nativeName": "Positano",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Campania (Salerno)",
    "type": "iconic",
    "vibes": [
      "coastal",
      "nature"
    ],
    "vibeLabels": [
      "Coastal & Islands",
      "Romantic",
      "Iconic Landmark"
    ],
    "wikiTitle": "Positano",
    "googleMapsQuery": "Positano, Salerno, Italy",
    "bestTimeToVisit": "May to June or September to October when weather is mild and sea is warm",
    "insiderTip": "Hike the \"Path of the Gods\" (Sentiero degli Dei) from Bomerano down to Nocelle for jaw-dropping cliffside vistas over the Mediterranean.",
    "fallbackImage": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Positano is a cliffside village on southern Italy's Amalfi Coast, famous for pastel houses cascading steeply into the azure Tyrrhenian Sea and fragrant lemon groves."
  },
  {
    "id": "it-3",
    "name": "Cinque Terre",
    "nativeName": "Cinque Terre",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Liguria (La Spezia)",
    "type": "iconic",
    "vibes": [
      "coastal",
      "adventure"
    ],
    "vibeLabels": [
      "Coastal & Islands",
      "Hiking Haven",
      "UNESCO Heritage"
    ],
    "wikiTitle": "Cinque_Terre",
    "googleMapsQuery": "Cinque Terre, Italy",
    "bestTimeToVisit": "April to May or September to mid-October",
    "insiderTip": "Catch the local Cinque Terre Express train between villages, or take the public ferry from Monterosso to Riomaggiore to view the multicolored towns from the sea.",
    "fallbackImage": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Cinque Terre comprises five centuries-old seaside villages carved into steep rugged cliffs along the Italian Riviera, linked by panoramic footpaths and vineyard terraces."
  },
  {
    "id": "it-4",
    "name": "Civita di Bagnoregio (The Dying City)",
    "nativeName": "Civita di Bagnoregio",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Lazio (Viterbo)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "history"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Medieval Hilltown",
      "Surreal Scenery"
    ],
    "wikiTitle": "Civita_di_Bagnoregio",
    "googleMapsQuery": "Civita di Bagnoregio, Viterbo, Italy",
    "bestTimeToVisit": "Early morning in spring or autumn when low clouds envelop the valley like a floating castle",
    "insiderTip": "The town is only accessible via a pedestrian footbridge; stop at the local truffleria for handmade tagliolini al tartufo.",
    "fallbackImage": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Perched dramatically atop an eroding volcanic tufa pinnacle overlooking the Calanchi valley, Civita di Bagnoregio is a magical medieval jewel accessible only by footbridge."
  },
  {
    "id": "it-5",
    "name": "Matera Cave City (Sassi)",
    "nativeName": "Sassi di Matera",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Basilicata (Matera)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "history",
      "culture"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "UNESCO World Heritage",
      "Ancient Dwellings"
    ],
    "wikiTitle": "Matera",
    "googleMapsQuery": "Sassi di Matera, Italy",
    "bestTimeToVisit": "Spring or Autumn; magical at twilight when thousands of warm lantern lights glow in the canyon",
    "insiderTip": "Stay in a restored cave hotel (albergo diffuso) to sleep inside ancient limestone walls equipped with luxury modern comforts.",
    "fallbackImage": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Matera is one of the world's oldest continuously inhabited settlements, famous for its Sassi — ancient stone-age cave dwellings carved directly into the limestone canyon ravine."
  },
  {
    "id": "it-6",
    "name": "Alberobello & Trulli Houses",
    "nativeName": "Trulli di Alberobello",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Puglia (Bari)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "history",
      "culture"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Fairy Tale Architecture",
      "UNESCO Heritage"
    ],
    "wikiTitle": "Alberobello",
    "googleMapsQuery": "Alberobello, Bari, Italy",
    "bestTimeToVisit": "May to June or September before mid-day tour buses arrive",
    "insiderTip": "Head up to the Belvedere Santa Lucia terrace for the iconic sweeping panorama of conical stone rooftops.",
    "fallbackImage": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Alberobello is celebrated for its Trulli: remarkable dry-stone huts featuring distinctive conical roofs, built without mortar since the 14th century in the heart of Puglia."
  },
  {
    "id": "it-7",
    "name": "Lago di Braies (Pragser Wildsee)",
    "nativeName": "Lago di Braies",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Trentino-Alto Adige (South Tyrol)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Alpine Lake",
      "Dolomites"
    ],
    "wikiTitle": "Pragser_Wildsee",
    "googleMapsQuery": "Lago di Braies, South Tyrol, Italy",
    "bestTimeToVisit": "Sunrise between June and October for glassy emerald reflections of the Croda del Becco mountain",
    "insiderTip": "Rent a traditional handcrafted wooden rowing boat from the historic stilt boathouse at first light.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Often called the Pearl of the Dolomite Lakes, Lago di Braies is an alpine glacial lake renowned for emerald-turquoise waters reflecting jagged limestone peaks."
  },
  {
    "id": "it-8",
    "name": "Tre Cime di Lavaredo",
    "nativeName": "Drei Zinnen / Tre Cime",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Veneto / South Tyrol (Dolomites)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Alpine Adventure",
      "Dolomite Peaks"
    ],
    "wikiTitle": "Tre_Cime_di_Lavaredo",
    "googleMapsQuery": "Tre Cime di Lavaredo, Italy",
    "bestTimeToVisit": "Late June to September when alpine trails and rifugi mountain huts are fully open",
    "insiderTip": "Hike the 10km circuit loop starting from Rifugio Auronzo around to Rifugio Locatelli for the ultimate postcard view of the three towering towers.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Tre Cime di Lavaredo are three distinctive battlement-like limestone pinnacles rising in the Sexten Dolomites, among the most iconic mountain panoramas on Earth."
  },
  {
    "id": "it-9",
    "name": "San Fruttuoso Abbey Cove",
    "nativeName": "Abbazia di San Fruttuoso",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Liguria (Portofino Peninsula)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "coastal",
      "history"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Coastal & Islands",
      "Medieval Seclusion"
    ],
    "wikiTitle": "San_Fruttuoso",
    "googleMapsQuery": "San Fruttuoso, Camogli, Genoa, Italy",
    "bestTimeToVisit": "May to June or September; reach it by hiking trail from Camogli or boat from Portofino",
    "insiderTip": "Bring snorkel goggles to spot the bronze Christ of the Abyss statue submerged 17 meters deep in the clear bay waters.",
    "fallbackImage": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "San Fruttuoso is a medieval Benedictine monastery secluded in a pebble cove on the Portofino Promontory, inaccessible by cars and surrounded by pine forest and emerald sea."
  },
  {
    "id": "it-10",
    "name": "Burano Colorful Fisherman Island",
    "nativeName": "Isola di Burano",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Veneto (Venice Lagoon)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "coastal",
      "culture"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Colorful Canals",
      "Artisan Island"
    ],
    "wikiTitle": "Burano",
    "googleMapsQuery": "Burano, Venice, Italy",
    "bestTimeToVisit": "Late afternoon when the bright houses cast shimmering reflections on calm canal waters",
    "insiderTip": "Sample \"Bussolà\" butter cookies from local bakeries and watch master lacemakers craft intricate needle lace.",
    "fallbackImage": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Burano is a vibrant island in the Venetian Lagoon renowned for brightly painted rainbow houses, tranquil green canals, leaning bell tower, and centuries-old lacemaking tradition."
  },
  {
    "id": "it-11",
    "name": "Val d’Orcia Rolling Hills",
    "nativeName": "Val d'Orcia",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Tuscany (Siena)",
    "type": "iconic",
    "vibes": [
      "nature",
      "culture"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Tuscan Wine & Hills",
      "UNESCO Heritage"
    ],
    "wikiTitle": "Val_d%27Orcia",
    "googleMapsQuery": "Val d Orcia, Siena, Italy",
    "bestTimeToVisit": "May for velvety green rolling hills, or September for golden wheat fields and harvest wine season",
    "insiderTip": "Visit the famous cypress tree circle near San Quirico d'Orcia and the Chapel of Vitaleta at sunset.",
    "fallbackImage": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Val d'Orcia is an iconic Tuscan landscape celebrated in Renaissance art for rolling clay hills, winding rows of cypress trees, fortified hill towns, and Brunello di Montalcino vineyards."
  },
  {
    "id": "it-12",
    "name": "Tropea Cliffside Coast",
    "nativeName": "Tropea",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Calabria (Vibo Valentia)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "coastal"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Coastal & Islands",
      "Beaches of the Gods"
    ],
    "wikiTitle": "Tropea",
    "googleMapsQuery": "Tropea, Vibo Valentia, Italy",
    "bestTimeToVisit": "June or September for warm turquoise sea without peak August crowds",
    "insiderTip": "Walk up to the Sanctuary of Santa Maria dell'Isola sitting high atop a sea rock, and sample red Tropea onion ice cream at local gelaterias.",
    "fallbackImage": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Perched atop dramatic sandstone bluffs in Calabria, Tropea overlooks turquoise Tyrrhenian waters and the smoking Stromboli volcano on the horizon."
  },
  {
    "id": "it-13",
    "name": "Saturnia Cascading Thermal Springs",
    "nativeName": "Cascate del Mulino",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Tuscany (Grosseto)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Natural Hot Springs",
      "Wellness"
    ],
    "wikiTitle": "Terme_di_Saturnia",
    "googleMapsQuery": "Cascate del Mulino, Saturnia, Italy",
    "bestTimeToVisit": "Dawn or night for mystical steam without tourists; water stays 37.5°C year-round",
    "insiderTip": "These natural travertine waterfall pools are free and open 24/7; bring water shoes and towels.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Cascate del Mulino in Saturnia are naturally sculpted travertine limestone thermal waterfalls fed by sulfurous volcanic springs bubbling at a soothing 37.5°C."
  },
  {
    "id": "it-14",
    "name": "Polignano a Mare",
    "nativeName": "Polignano a Mare",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Puglia (Bari)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "coastal"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Coastal & Islands",
      "Cliff Diving Cove"
    ],
    "wikiTitle": "Polignano_a_Mare",
    "googleMapsQuery": "Lama Monachile, Polignano a Mare, Italy",
    "bestTimeToVisit": "May to September; catch sunset over the pebble beach of Lama Monachile",
    "insiderTip": "Book dinner at Grotta Palazzese, a romantic restaurant built entirely inside a natural seaside limestone cavern overlooking the waves.",
    "fallbackImage": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Polignano a Mare clings dramatically to white limestone sea cliffs above the Adriatic, famous for the iconic Lama Monachile cove and Red Bull cliff diving competitions."
  },
  {
    "id": "it-15",
    "name": "Pompeii Archaeological Park",
    "nativeName": "Pompei",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Campania (Naples)",
    "type": "iconic",
    "vibes": [
      "history"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Ancient Roman Life",
      "UNESCO Heritage"
    ],
    "wikiTitle": "Pompeii",
    "googleMapsQuery": "Pompeii Archaeological Park, Italy",
    "bestTimeToVisit": "October to April for cooler walking temperatures across the massive uncovered ruins",
    "insiderTip": "Don't miss the Villa of the Mysteries just outside the main gate for exceptionally vibrant 2,000-year-old fresco murals.",
    "fallbackImage": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Buried under volcanic ash by the catastrophic eruption of Mount Vesuvius in 79 AD, Pompeii provides an extraordinary, frozen-in-time snapshot of ancient Roman civilization."
  },
  {
    "id": "it-16",
    "name": "Trevi Fountain",
    "nativeName": "Fontana di Trevi",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Lazio (Rome)",
    "type": "iconic",
    "vibes": [
      "history",
      "culture"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Baroque Masterpiece",
      "Iconic Landmark"
    ],
    "wikiTitle": "Trevi_Fountain",
    "googleMapsQuery": "Trevi Fountain, Rome, Italy",
    "bestTimeToVisit": "Between 5:30 AM and 7:00 AM for completely serene, crowd-free photos",
    "insiderTip": "Toss a coin with your right hand over your left shoulder: legend guarantees your return to the Eternal City.",
    "fallbackImage": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Designed by Nicola Salvi, the Trevi Fountain is Rome's largest and most famous Baroque fountain, portraying the Titan Oceanus on his shell chariot flanked by winged steeds."
  },
  {
    "id": "it-17",
    "name": "Duomo di Milano Rooftop",
    "nativeName": "Duomo di Milano",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Lombardy (Milan)",
    "type": "iconic",
    "vibes": [
      "history",
      "culture"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Gothic Masterpiece",
      "Panoramic Vistas"
    ],
    "wikiTitle": "Milan_Cathedral",
    "googleMapsQuery": "Milan Cathedral, Milan, Italy",
    "bestTimeToVisit": "Late afternoon rooftop ticket to watch sunset through marble spires",
    "insiderTip": "Walk among the 135 marble spires and gargoyles on the open roof; on clear winter days you can see the Italian Alps.",
    "fallbackImage": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Milan Cathedral took nearly six centuries to complete and is the third-largest church in the world, renowned for its radiant white Candoglia marble and flamboyant Gothic spires."
  },
  {
    "id": "it-18",
    "name": "Lake Como & Bellagio",
    "nativeName": "Lago di Como",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Lombardy (Como & Lecco)",
    "type": "iconic",
    "vibes": [
      "nature",
      "coastal"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Alpine Glamour",
      "Iconic Landmark"
    ],
    "wikiTitle": "Lake_Como",
    "googleMapsQuery": "Bellagio, Lake Como, Italy",
    "bestTimeToVisit": "April to June when lakeside gardens (like Villa Carlotta) are in full bloom",
    "insiderTip": "Take the mid-lake passenger ferry between Bellagio, Varenna, and Menaggio for the most breathtaking villa views from the water.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Lake Como is an upscale glacial lake framed by steep Alpine foothills, adorned with neoclassical villas, cypress-dotted waterfront gardens, and picturesque historic villages."
  },
  {
    "id": "it-19",
    "name": "Castelmezzano Dolomiti Lucane",
    "nativeName": "Castelmezzano",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Basilicata (Potenza)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "adventure",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Adventure & Wild",
      "Mountain Village"
    ],
    "wikiTitle": "Castelmezzano",
    "googleMapsQuery": "Castelmezzano, Potenza, Italy",
    "bestTimeToVisit": "May to September; experience the \"Volo dell'Angelo\" zip line",
    "insiderTip": "Thrill-seekers can ride the \"Flight of the Angel\", a high-speed zip wire flying 1,000 meters above the canyon over to Pietrapertosa.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Tucked into the sharp jagged peaks of the Lucanian Dolomites, Castelmezzano looks like a fantasy mountain fortress carved straight into sandstone crags."
  },
  {
    "id": "it-20",
    "name": "Valley of the Temples (Agrigento)",
    "nativeName": "Valle dei Templi",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Sicily (Agrigento)",
    "type": "hidden-gem",
    "vibes": [
      "history",
      "hidden-gem"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Ancient Greek Ruins",
      "UNESCO Heritage"
    ],
    "wikiTitle": "Valle_dei_Templi",
    "googleMapsQuery": "Valley of the Temples, Agrigento, Sicily, Italy",
    "bestTimeToVisit": "February for blooming almond blossoms, or summer sunset tours",
    "insiderTip": "Visit the Temple of Concordia at sunset when floodlights illuminate the pristine golden Doric columns against the evening sky.",
    "fallbackImage": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The Valley of the Temples in Sicily contains some of the world's best preserved monumental Ancient Greek Doric temples, surrounded by ancient olive trees overlooking the Mediterranean."
  },
  {
    "id": "it-21",
    "name": "Bologna Medieval Porticoes & Gastronomy",
    "nativeName": "Bologna la Grassa",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Emilia-Romagna (Bologna)",
    "type": "iconic",
    "vibes": [
      "culture",
      "history"
    ],
    "vibeLabels": [
      "Food & Culture",
      "Culinary Capital",
      "UNESCO Porticoes"
    ],
    "wikiTitle": "Bologna",
    "googleMapsQuery": "Piazza Maggiore, Bologna, Italy",
    "bestTimeToVisit": "Autumn for truffle season, fresh handmade tortellini, and comfortable walking",
    "insiderTip": "Climb the 498 steps of the Asinelli Tower for a panorama over Bologna's terracotta rooftops, then dine in the Mercato delle Erbe.",
    "fallbackImage": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Nicknamed \"The Learned, The Fat, and The Red\", Bologna is Italy's culinary heartland, famous for handmade tagliatelle al ragù, Mortadella, and 62 km of UNESCO medieval porticoes."
  },
  {
    "id": "it-22",
    "name": "Frasassi Underground Caves",
    "nativeName": "Grotte di Frasassi",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Marche (Ancona)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Subterranean Wonder",
      "Adventure & Wild"
    ],
    "wikiTitle": "Frasassi_Caves",
    "googleMapsQuery": "Grotte di Frasassi, Genga, Ancona, Italy",
    "bestTimeToVisit": "Year-round; the cave maintains a consistent 14°C temperature",
    "insiderTip": "The first chamber (Ancona Abyss) is so colossal that the entire Milan Cathedral could easily fit inside it!",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The Frasassi Caves are an immense karst cave system in Genga, Marche, featuring giant stalactite and stalagmite formations, crystalline subterranean lakes, and massive limestone vaults."
  },
  {
    "id": "it-23",
    "name": "Isola Bella & Taormina",
    "nativeName": "Isola Bella, Taormina",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Sicily (Messina)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "coastal"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Coastal & Islands",
      "Sicilian Pearl"
    ],
    "wikiTitle": "Isola_Bella_(Sicily)",
    "googleMapsQuery": "Isola Bella, Taormina, Sicily, Italy",
    "bestTimeToVisit": "May to June or September; combine with Taormina's Greek Theatre",
    "insiderTip": "Walk the narrow gravel tombolo path at low tide onto the islet nature reserve, once owned by English eccentric Florence Trevelyan.",
    "fallbackImage": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Known as the Pearl of the Ionian Sea, Isola Bella is a protected emerald islet connected to Taormina beach by a thin tidal sandbar, surrounded by translucent marine grottos."
  },
  {
    "id": "it-24",
    "name": "Ponte Vecchio & Florence Uffizi",
    "nativeName": "Ponte Vecchio",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Tuscany (Florence)",
    "type": "iconic",
    "vibes": [
      "history",
      "culture"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Renaissance Heart",
      "Iconic Landmark"
    ],
    "wikiTitle": "Ponte_Vecchio",
    "googleMapsQuery": "Ponte Vecchio, Florence, Italy",
    "bestTimeToVisit": "Sunset from the adjacent Ponte Santa Trinita for glowing reflection on the Arno River",
    "insiderTip": "Head up to Piazzale Michelangelo across the river for the panoramic sunset view over Florence and the Brunelleschi Dome.",
    "fallbackImage": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Ponte Vecchio is a medieval stone closed-spandrel segmental arch bridge spanning the Arno River, famous for the goldsmith and jeweler shops lining its roadway."
  },
  {
    "id": "it-25",
    "name": "Ponza Island Cave Coves",
    "nativeName": "Isola di Ponza",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Lazio (Pontine Islands)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "coastal"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Coastal & Islands",
      "Unspoiled Italy"
    ],
    "wikiTitle": "Ponza",
    "googleMapsQuery": "Ponza, Latina, Italy",
    "bestTimeToVisit": "June or September; rent a small wooden motorboat (gommone)",
    "insiderTip": "Boating is the only way to reach Ponza's most surreal spots like Chiaia di Luna beach and Roman-carved Pilate's Grottoes.",
    "fallbackImage": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Ponza is a crescent-shaped island favored by Italians for summer escapes, featuring luminous sea caves, white tufa cliffs, Roman ruins, and crystal-clear swimming inlets."
  },
  {
    "id": "it-26",
    "name": "Saint Mark’s Basilica & Venice Lagoon",
    "nativeName": "Piazza San Marco",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Veneto (Venice)",
    "type": "iconic",
    "vibes": [
      "history",
      "culture"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Byzantine Splendor",
      "Iconic Landmark"
    ],
    "wikiTitle": "Saint_Mark%27s_Basilica",
    "googleMapsQuery": "St Marks Basilica, Venice, Italy",
    "bestTimeToVisit": "Early morning before day-tripper boats arrive, or late evening during live orchestral quartet performances",
    "insiderTip": "Climb up to the Loggia dei Cavalli balcony for close-up views of the bronze horses and a commanding view over St. Mark's Square.",
    "fallbackImage": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Saint Mark's Basilica is the cathedral church of Venice, world-famous for its opulent Byzantine golden mosaics, domed architecture, and connection to the Doge's Palace."
  },
  {
    "id": "it-27",
    "name": "Ravello Cliff Gardens (Villa Rufolo)",
    "nativeName": "Ravello",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Campania (Amalfi Coast)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "coastal",
      "culture"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Cliffside Gardens",
      "Musical Haven"
    ],
    "wikiTitle": "Ravello",
    "googleMapsQuery": "Villa Rufolo, Ravello, Salerno, Italy",
    "bestTimeToVisit": "Summer during the Ravello Classical Music Festival held on an open-air stage hovering over the sea",
    "insiderTip": "Walk over to the \"Terrace of Infinity\" at Villa Cimbrone for marble Roman busts framing the boundless blue sea and sky.",
    "fallbackImage": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Perched high above Amalfi at 365 meters, Ravello is an aristocratic haven of serenity, famous for medieval cliffside villas, vibrant flower gardens, and sweeping bay vistas."
  },
  {
    "id": "it-28",
    "name": "Mount Etna Active Volcano",
    "nativeName": "Monte Etna",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Sicily (Catania)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Active Volcano",
      "Adventure & Wild"
    ],
    "wikiTitle": "Mount_Etna",
    "googleMapsQuery": "Mount Etna, Sicily, Italy",
    "bestTimeToVisit": "May to October for trekking crater trails, or winter for skiing on volcanic snow with sea views",
    "insiderTip": "Take a four-wheel-drive summit trek with an authorized volcanological guide up to the active central craters at 3,300 meters.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Mount Etna is Europe's most active stratovolcano, rising over 3,300 meters above eastern Sicily with smoking summit calderas, lava caves, and nutrient-rich volcanic wine slopes."
  },
  {
    "id": "it-29",
    "name": "Scilla & Chianalea Fishermen District",
    "nativeName": "Scilla",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Calabria (Reggio Calabria)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "coastal"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Coastal & Islands",
      "Myth & Legend"
    ],
    "wikiTitle": "Scilla,_Calabria",
    "googleMapsQuery": "Chianalea di Scilla, Calabria, Italy",
    "bestTimeToVisit": "June to September; dine on swordfish fresh from the Strait of Messina",
    "insiderTip": "Stroll through Chianalea (\"Little Venice of the South\"), where ancient stone houses have their foundations directly kissed by the waves.",
    "fallbackImage": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Scilla is steeped in Homer's Odyssey mythology, featuring the Ruffo fortress on a rocky promontory and the poetic village of Chianalea whose fishermen homes meet the sea."
  },
  {
    "id": "it-30",
    "name": "Chianti Wine Region",
    "nativeName": "Colline del Chianti",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Tuscany (Florence & Siena)",
    "type": "iconic",
    "vibes": [
      "culture",
      "nature"
    ],
    "vibeLabels": [
      "Food & Culture",
      "Wine & Vineyards",
      "Tuscan Charm"
    ],
    "wikiTitle": "Chianti",
    "googleMapsQuery": "Greve in Chianti, Florence, Italy",
    "bestTimeToVisit": "September and October for the grape harvest (\"vendemmia\") and wine festivals",
    "insiderTip": "Rent a vintage Vespa or car to drive the scenic SR222 Chiantigiana road linking historic stone hamlets and castles.",
    "fallbackImage": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The Chianti region offers quintessential Tuscan rolling hills blanketed in Sangiovese vineyards, olive groves, medieval stone castles, and rustic stone cantinas."
  },
  {
    "id": "it-31",
    "name": "Orvieto Hilltop Duomo",
    "nativeName": "Orvieto",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Umbria (Terni)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "history",
      "culture"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "History & Heritage",
      "Etruscan Hilltown"
    ],
    "wikiTitle": "Orvieto",
    "googleMapsQuery": "Duomo di Orvieto, Terni, Italy",
    "bestTimeToVisit": "Spring or Autumn; easily visited as a day trip from Rome or Florence by train",
    "insiderTip": "Descend the double-helix spiral staircase of St. Patrick's Well (Pozzo di San Patrizio) engineered in 1527 so mules could fetch water without colliding.",
    "fallbackImage": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Rising majestically above a flat summit of volcanic tuff in Umbria, Orvieto is home to one of Italy's most dazzling Gothic cathedrals and an extensive underground cave network."
  },
  {
    "id": "it-32",
    "name": "Capri & The Blue Grotto",
    "nativeName": "Isola di Capri",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Campania (Naples)",
    "type": "iconic",
    "vibes": [
      "coastal",
      "nature"
    ],
    "vibeLabels": [
      "Coastal & Islands",
      "Legendary Sea Caves",
      "Mediterranean Glamour"
    ],
    "wikiTitle": "Capri",
    "googleMapsQuery": "Blue Grotto, Capri, Italy",
    "bestTimeToVisit": "May to June or September on calm sunny days",
    "insiderTip": "Take the chairlift from Anacapri up to the summit of Monte Solaro (589m) for an unmatched view of the Faraglioni rock stacks.",
    "fallbackImage": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Capri is an island of rugged limestone cliffs in the Bay of Naples, renowned for its radiant Blue Grotto sea cave, upscale boutiques, and dramatic Faraglioni sea stacks."
  },
  {
    "id": "it-33",
    "name": "Gran Paradiso Alpine Sanctuary",
    "nativeName": "Parco Nazionale Gran Paradiso",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Valle d'Aosta & Piedmont",
    "type": "hidden-gem",
    "vibes": [
      "nature",
      "adventure",
      "hidden-gem"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Alpine Wildlife",
      "Adventure & Wild"
    ],
    "wikiTitle": "Gran_Paradiso_National_Park",
    "googleMapsQuery": "Gran Paradiso National Park, Aosta, Italy",
    "bestTimeToVisit": "July to September for hiking high mountain passes",
    "insiderTip": "Bring binoculars to spot wild Alpine ibex, chamois, and golden eagles roaming below the 4,061m peak of Gran Paradiso.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Italy's oldest national park was originally established as a royal hunting reserve to save the Alpine ibex from extinction, today preserving pristine glacial valleys and peaks."
  },
  {
    "id": "it-34",
    "name": "Leaning Tower of Pisa & Piazza dei Miracoli",
    "nativeName": "Torre di Pisa",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Tuscany (Pisa)",
    "type": "iconic",
    "vibes": [
      "history"
    ],
    "vibeLabels": [
      "History & Heritage",
      "World Wonder",
      "Iconic Landmark"
    ],
    "wikiTitle": "Leaning_Tower_of_Pisa",
    "googleMapsQuery": "Leaning Tower of Pisa, Italy",
    "bestTimeToVisit": "Early morning to climb the 294 marble steps of the bell tower",
    "insiderTip": "Also tour the nearby Camposanto Monumentale (cemetery) and Baptistery to hear the breathtaking vocal echo demonstration by the guards.",
    "fallbackImage": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The Leaning Tower of Pisa is the freestanding campanile of the cathedral of Pisa, world-famous for its nearly four-degree unintended tilt caused by an unstable foundation."
  },
  {
    "id": "it-35",
    "name": "San Gimignano Medieval Towers",
    "nativeName": "San Gimignano",
    "country": "italy",
    "countryName": "Italy",
    "flag": "🇮🇹",
    "region": "Tuscany (Siena)",
    "type": "iconic",
    "vibes": [
      "history",
      "culture"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Medieval Manhattan",
      "UNESCO Heritage"
    ],
    "wikiTitle": "San_Gimignano",
    "googleMapsQuery": "San Gimignano, Siena, Italy",
    "bestTimeToVisit": "Late afternoon when day-trippers depart; stay overnight inside the medieval walls",
    "insiderTip": "Order award-winning saffron and Vernaccia gelato at Gelateria Dondoli in Piazza della Cisterna, crowned world champion multiple times.",
    "fallbackImage": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Dubbed the \"Town of Fine Towers\", San Gimignano preserves 14 iconic medieval stone tower houses erected by rival aristocratic families as symbols of wealth and power."
  },
  {
    "id": "is-1",
    "name": "The Blue Lagoon",
    "nativeName": "Bláa Lónið",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "Reykjanes Peninsula (Grindavík)",
    "type": "iconic",
    "vibes": [
      "nature",
      "culture"
    ],
    "vibeLabels": [
      "Geothermal Spa",
      "Wellness",
      "Iconic Landmark"
    ],
    "wikiTitle": "Blue_Lagoon_(geothermal_spa)",
    "googleMapsQuery": "Blue Lagoon, Iceland",
    "bestTimeToVisit": "Evening under the midnight sun in summer or beneath the Northern Lights in winter",
    "insiderTip": "Smooth the mineral-rich white silica mud onto your face at the swim-up mask bar; rinse thoroughly before leaving.",
    "fallbackImage": "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The Blue Lagoon is a geothermal spa situated in a rugged black lava field, renowned for mineral-rich milky-blue waters naturally heated to 38°C."
  },
  {
    "id": "is-2",
    "name": "Gullfoss Waterfall",
    "nativeName": "Gullfoss",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "Golden Circle (South Iceland)",
    "type": "iconic",
    "vibes": [
      "nature"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Golden Falls",
      "Iconic Landmark"
    ],
    "wikiTitle": "Gullfoss",
    "googleMapsQuery": "Gullfoss, Iceland",
    "bestTimeToVisit": "Sunny summer afternoons when mist produces vivid double rainbows",
    "insiderTip": "Walk down to the lower viewing deck for an exhilarating close-up of glacial river water thundering down two tiered cascades into the canyon.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Gullfoss is one of Iceland's most powerful waterfalls, plunging 32 meters in two stages into a rugged canyon carved by the Hvítá glacial river."
  },
  {
    "id": "is-3",
    "name": "Seljalandsfoss",
    "nativeName": "Seljalandsfoss",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "South Coast (Rangárþing eystra)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Walk-Behind Fall",
      "Iconic Landmark"
    ],
    "wikiTitle": "Seljalandsfoss",
    "googleMapsQuery": "Seljalandsfoss, Iceland",
    "bestTimeToVisit": "Sunset when golden light shines directly through the curtain of falling water",
    "insiderTip": "Bring a waterproof jacket and pants — the footpath leads completely behind the 60-meter water curtain into a natural cavern.",
    "fallbackImage": "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Fed by the Eyjafjallajökull glacier volcano, Seljalandsfoss plunges 60 meters over dramatic sea cliffs with an accessible path leading entirely behind the cascade."
  },
  {
    "id": "is-4",
    "name": "Reynisfjara Black Sand Beach",
    "nativeName": "Reynisfjara",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "South Coast (Vík í Mýrdal)",
    "type": "iconic",
    "vibes": [
      "nature",
      "coastal"
    ],
    "vibeLabels": [
      "Coastal & Islands",
      "Black Sand & Basalt",
      "Iconic Landmark"
    ],
    "wikiTitle": "Reynisfjara",
    "googleMapsQuery": "Reynisfjara Beach, Vik, Iceland",
    "bestTimeToVisit": "Sunrise or sunset; always maintain a safe distance from the water",
    "insiderTip": "Never turn your back on the ocean: the Atlantic swells here create notorious \"sneaker waves\" that rush far up the black volcanic sand without warning.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Reynisfjara is a dramatic black sand beach famous for towering geometric basalt column cliffs, roaring North Atlantic surf, and the legendary Reynisdrangar sea stacks."
  },
  {
    "id": "is-5",
    "name": "Jökulsárlón Glacier Lagoon & Diamond Beach",
    "nativeName": "Jökulsárlón & Breiðamerkursandur",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "Vatnajökull National Park (Southeast)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure",
      "coastal"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Floating Icebergs",
      "Iconic Landmark"
    ],
    "wikiTitle": "J%C3%B6kuls%C3%A1rl%C3%B3n",
    "googleMapsQuery": "Jokulsarlon, Iceland",
    "bestTimeToVisit": "Winter for ice cave excursions and auroras, or summer for amphibious boat tours among icebergs",
    "insiderTip": "Cross the road to Diamond Beach where crystalline blue iceberg chunks wash ashore on black volcanic sand like giant glittering diamonds.",
    "fallbackImage": "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Jökulsárlón is a deep glacial lagoon filled with luminous electric-blue icebergs calving from the Vatnajökull ice cap, drifting slowly out to the Atlantic."
  },
  {
    "id": "is-6",
    "name": "Stuðlagil Basalt Canyon",
    "nativeName": "Stuðlagil",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "East Iceland (Jökuldalur)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Basalt Canyon",
      "Turquoise River"
    ],
    "wikiTitle": "Stu%C3%B0lagil",
    "googleMapsQuery": "Studlagil Canyon, Iceland",
    "bestTimeToVisit": "July to August when the glacial river turns an astonishing pure turquoise color",
    "insiderTip": "Hike to the east bank from the parking area (about 5km round trip) to walk directly down onto the hexagonal basalt column floor next to the river.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Only revealed in recent years after a hydroelectric dam lowered river water levels, Stuðlagil boasts one of the largest concentrations of columnar basalt rock formations in Iceland."
  },
  {
    "id": "is-7",
    "name": "Kirkjufell Mountain & Falls",
    "nativeName": "Kirkjufell",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "Snæfellsnes Peninsula (Grundarfjörður)",
    "type": "iconic",
    "vibes": [
      "nature"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Arrowhead Mountain",
      "Photographer Dream"
    ],
    "wikiTitle": "Kirkjufell",
    "googleMapsQuery": "Kirkjufell, Iceland",
    "bestTimeToVisit": "September to March for dancing green Aurora Borealis over the mountain peak",
    "insiderTip": "Position yourself at Kirkjufellsfoss waterfall across the road to frame the dual cascading falls in front of the conical peak.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Kirkjufell is a distinctively symmetrical 463-meter peak on the Snæfellsnes Peninsula, nicknamed \"Church Mountain\" and featured as Arrowhead Mountain in Game of Thrones."
  },
  {
    "id": "is-8",
    "name": "Landmannalaugar Highlands",
    "nativeName": "Landmannalaugar",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "Fjallabak Nature Reserve (Highlands)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "adventure",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Rhyolite Mountains",
      "Highland Wilderness"
    ],
    "wikiTitle": "Landmannalaugar",
    "googleMapsQuery": "Landmannalaugar, Iceland",
    "bestTimeToVisit": "July to early September (highland F-roads are closed by snow during the rest of the year)",
    "insiderTip": "Pack your swimsuit and towel: soak in the natural geothermal hot river right at the base of the Laugahraun black obsidian lava field.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Landmannalaugar is a surreal highland wonderland of vibrant multi-colored rhyolite mountains painted in shades of orange, yellow, green, and red, with steaming thermal vents."
  },
  {
    "id": "is-9",
    "name": "Skógafoss Waterfall",
    "nativeName": "Skógafoss",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "South Coast (Skógar)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Thundering Falls",
      "Iconic Landmark"
    ],
    "wikiTitle": "Sk%C3%B3gafoss",
    "googleMapsQuery": "Skogafoss, Iceland",
    "bestTimeToVisit": "Morning on a sunny day to photograph constant double rainbows in the spray",
    "insiderTip": "Climb the 527 metal steps to the observation platform at the top, which marks the starting trailhead for the famous Fimmvörðuháls trek to Thórsmörk.",
    "fallbackImage": "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Skógafoss is one of Iceland's biggest waterfalls, boasting a width of 25 meters and a 60-meter drop that sends massive billowing mist curtains into the air."
  },
  {
    "id": "is-10",
    "name": "Thingvellir National Park",
    "nativeName": "Þingvellir",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "Golden Circle (Southwest Iceland)",
    "type": "iconic",
    "vibes": [
      "history",
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Continental Divide",
      "UNESCO Heritage"
    ],
    "wikiTitle": "%C3%9Eingvellir",
    "googleMapsQuery": "Thingvellir National Park, Iceland",
    "bestTimeToVisit": "Year-round; autumn brings striking moss colors across the lava fissure fields",
    "insiderTip": "Book a drysuit snorkeling tour at Silfra Fissure to float between the North American and Eurasian tectonic plates in 100-meter clear glacial water.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Þingvellir is a site of immense historical and geological importance: home to the world's first parliament founded in 930 AD and the visible rift valley between tectonic plates."
  },
  {
    "id": "is-11",
    "name": "Dettifoss (Europe’s Most Powerful Waterfall)",
    "nativeName": "Dettifoss",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "North Iceland (Vatnajökull)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Raw Power",
      "Iconic Landmark"
    ],
    "wikiTitle": "Dettifoss",
    "googleMapsQuery": "Dettifoss, Iceland",
    "bestTimeToVisit": "June to September when access roads on both sides of the canyon are clear",
    "insiderTip": "The east bank road gives you a jaw-dropping viewpoint right on the edge of the sheer roaring abyss without guardrails (featured in Ridley Scott's Prometheus).",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Dettifoss is reputed to be the most powerful waterfall in Europe, discharging an average of 193 cubic meters of gray glacial meltwater per second into the Jökulsárgljúfur canyon."
  },
  {
    "id": "is-12",
    "name": "Fjaðrárgljúfur Serpentine Canyon",
    "nativeName": "Fjaðrárgljúfur",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "South Coast (Kirkjubæjarklaustur)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Emerald Canyon",
      "Nature & Scenic"
    ],
    "wikiTitle": "Fja%C3%B0r%C3%A1rglj%C3%BAfur",
    "googleMapsQuery": "Fjadrargljufur, Iceland",
    "bestTimeToVisit": "Summer when lush emerald moss covers the 100-meter-deep canyon walls",
    "insiderTip": "Follow the designated rim trail to the lookout platform cantilevered over the serpentine bends of the Fjaðrá river.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Fjaðrárgljúfur is a breathtaking 100-meter-deep canyon carved by glacial runoff over two million years, characterized by fairy-tale moss-draped serpentine stone walls."
  },
  {
    "id": "is-13",
    "name": "Svartifoss Black Basalt Falls",
    "nativeName": "Svartifoss",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "Skaftafell (Vatnajökull National Park)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Basalt Columns",
      "Architectural Nature"
    ],
    "wikiTitle": "Svartifoss",
    "googleMapsQuery": "Svartifoss, Iceland",
    "bestTimeToVisit": "May to October for the pleasant 1.5km woodland hike from Skaftafell Visitor Center",
    "insiderTip": "Notice how the hanging dark basalt column formations inspired Guðjón Samúelsson's architectural design for Reykjavík's famous Hallgrímskirkja church.",
    "fallbackImage": "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Svartifoss (Black Fall) is famous for hanging dark hexagonal basalt lava columns that frame a slender 20-meter waterfall, creating a natural amphitheater of volcanic organ pipes."
  },
  {
    "id": "is-14",
    "name": "Vík í Mýrdal Village & Sea Stacks",
    "nativeName": "Vík í Mýrdal",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "South Coast (Mýrdalshreppur)",
    "type": "iconic",
    "vibes": [
      "coastal",
      "nature"
    ],
    "vibeLabels": [
      "Coastal & Islands",
      "Red Roof Church",
      "Iconic Landmark"
    ],
    "wikiTitle": "V%C3%ADk_%C3%AD_M%C3%BDrdal",
    "googleMapsQuery": "Vik i Myrdal, Iceland",
    "bestTimeToVisit": "Summer when lupine flowers bloom purple across hillsides beneath the red-roofed church",
    "insiderTip": "Climb up behind the hilltop church for a sweeping vantage over the black sand beach and the Reynisdrangar sea stack needles.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Vík is Iceland's southernmost village, nestled under the Katla volcano and famous for its picturesque white-and-red church, black coastal shores, and puffin colonies."
  },
  {
    "id": "is-15",
    "name": "Hvítserkur \"Dragon\" Sea Rock",
    "nativeName": "Hvítserkur",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "Northwest (Vatnsnes Peninsula)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "coastal",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Coastal & Islands",
      "Volcanic Monolith"
    ],
    "wikiTitle": "Hv%C3%ADtserkur",
    "googleMapsQuery": "Hvitserkur, Iceland",
    "bestTimeToVisit": "Low tide so you can walk right out onto the black beach up to the rock base",
    "insiderTip": "Look closely along the shoreline — the Vatnsnes peninsula is one of the most reliable spots in Iceland to watch harbor seals sunbathing on sandbars.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Hvítserkur is a 15-meter basalt sea stack rising out of Húnaflói bay, resembling a petrified dragon or troll drinking from the sea, constantly whitewashed by roosting fulmars."
  },
  {
    "id": "is-16",
    "name": "Hverir Geothermal Mud Pools",
    "nativeName": "Hverir / Námafjall",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "North Iceland (Mývatn)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Martian Landscape",
      "Geothermal Fumaroles"
    ],
    "wikiTitle": "N%C3%A1mafjall",
    "googleMapsQuery": "Hverir, Namafjall, Myvatn, Iceland",
    "bestTimeToVisit": "Late afternoon when the ochre, yellow, and rust red clays glow against boiling gray mud pools",
    "insiderTip": "Stay strictly on marked wooden walkways: the ground here is paper-thin with scalding volcanic steam erupting at over 100°C.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Hverir is an otherworldly geothermal field at the base of Mount Námafjall, filled with steaming fumaroles, sulfur vents, boiling mud cauldrons, and completely barren mineral clays."
  },
  {
    "id": "is-17",
    "name": "Seyðisfjörður & The Rainbow Street",
    "nativeName": "Seyðisfjörður",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "Eastfjords",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "culture",
      "coastal"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Artisan Fjord Town",
      "Rainbow Street"
    ],
    "wikiTitle": "Sey%C3%B0isfj%C3%B6r%C3%B0ur",
    "googleMapsQuery": "Seydisfjordur, Iceland",
    "bestTimeToVisit": "June to August; drive the scenic mountain pass featured in The Secret Life of Walter Mitty",
    "insiderTip": "Photograph the rainbow-painted cobblestone street leading straight to the charming pale-blue wooden church (Bláa Kirkjan).",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Nestled at the head of a dramatic fjord surrounded by sheer mountains and cascading waterfalls, Seyðisfjörður is celebrated for its historic Norwegian timber houses and vibrant artistic community."
  },
  {
    "id": "is-18",
    "name": "Thórsmörk (Valley of Thor)",
    "nativeName": "Þórsmörk",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "Highlands / South (Fjallabak)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "adventure",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Glacial Oasis",
      "Adventure & Wild"
    ],
    "wikiTitle": "%C3%9E%C3%B3rsm%C3%B6rk",
    "googleMapsQuery": "Thorsmork, Iceland",
    "bestTimeToVisit": "July to September via 4x4 highland bus or superjeep",
    "insiderTip": "Hike up to the summit of Mount Valahnúkur for a 360-degree vista of three towering glaciers, birch forests, and braided glacial riverbeds.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Thórsmörk is a magnificent mountain ridge and valley oasis shielded between three glaciers (Tindfjallajökull, Eyjafjallajökull, and Mýrdalsjökull) boasting green birch groves and black ravines."
  },
  {
    "id": "is-19",
    "name": "Goðafoss (Waterfall of the Gods)",
    "nativeName": "Goðafoss",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "North Iceland (Bárðardalur)",
    "type": "iconic",
    "vibes": [
      "nature",
      "history"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Viking Lore",
      "Iconic Landmark"
    ],
    "wikiTitle": "Go%C3%B0afoss",
    "googleMapsQuery": "Godafoss Waterfall, Iceland",
    "bestTimeToVisit": "Sunset or under winter northern lights; both east and west banks offer fantastic views",
    "insiderTip": "Learn the saga history: around the year 1000 AD, lawspeaker Þorgeir Ljósvetningagoði cast his pagan Norse idols into this waterfall, making Christianity Iceland's official religion.",
    "fallbackImage": "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Goðafoss is a semicircular waterfall 30 meters wide, plunging 12 meters into a turquoise churning basin, carrying deep significance in Iceland's Viking history."
  },
  {
    "id": "is-20",
    "name": "Hallgrímskirkja & Old Reykjavík",
    "nativeName": "Hallgrímskirkja",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "Capital Region (Reykjavík)",
    "type": "iconic",
    "vibes": [
      "history",
      "culture"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Nordic Architecture",
      "Iconic Landmark"
    ],
    "wikiTitle": "Hallgr%C3%ADmskirkja",
    "googleMapsQuery": "Hallgrimskirkja, Reykjavik, Iceland",
    "bestTimeToVisit": "Clear morning to take the elevator up the 73-meter bell tower",
    "insiderTip": "From the top tower windows, look down upon Reykjavík's colorful corrugated-iron rooftops and the snow-capped Mount Esja across the bay.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Hallgrímskirkja is a Lutheran parish church standing 74.5 meters tall, whose dramatic expressionist concrete facade mimics the geometric basalt lava columns of Iceland's landscape."
  },
  {
    "id": "is-21",
    "name": "Hornstrandir Wild Nature Reserve",
    "nativeName": "Hornstrandir",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "Westfjords (Vestfirðir)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "adventure",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Total Wilderness",
      "Arctic Fox Haven"
    ],
    "wikiTitle": "Hornstrandir",
    "googleMapsQuery": "Hornstrandir Nature Reserve, Westfjords, Iceland",
    "bestTimeToVisit": "Late June to mid-August by passenger ferry boat from Ísafjörður",
    "insiderTip": "There are zero roads and zero shops here: it is Iceland's most pristine sanctuary, where curious Arctic foxes roam freely with no fear of humans.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Hornstrandir is a roadless, uninhabited nature reserve occupying the northernmost tip of the Westfjords, featuring sheer 500-meter bird cliffs and thriving wild Arctic fox populations."
  },
  {
    "id": "is-22",
    "name": "Dynjandi Cascading Waterfall",
    "nativeName": "Dynjandi (Fjallfoss)",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "Westfjords (Arnarfjörður)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Fjord Jewel",
      "Tiered Waterfalls"
    ],
    "wikiTitle": "Dynjandi",
    "googleMapsQuery": "Dynjandi, Westfjords, Iceland",
    "bestTimeToVisit": "June to September when Westfjord roads are snow-free",
    "insiderTip": "Hike the short trail passing six smaller tiered waterfalls before reaching the base of the massive fan-shaped master cascade.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Dynjandi is the jewel of the Westfjords: a trapezoidal waterfall that cascades down 100 meters, widening from 30 meters at the top to 60 meters at the bottom like a giant bridal veil."
  },
  {
    "id": "is-23",
    "name": "Kerið Volcanic Crater Lake",
    "nativeName": "Kerið",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "Golden Circle (Grímsnes)",
    "type": "iconic",
    "vibes": [
      "nature"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Volcanic Caldera",
      "Aquamarine Lake"
    ],
    "wikiTitle": "Keri%C3%B0",
    "googleMapsQuery": "Kerid Crater, Iceland",
    "bestTimeToVisit": "Late afternoon when the bright red volcanic slag contrasts with the vivid aquamarine water",
    "insiderTip": "Walk the upper rim path for panoramic perspectives, then descend the wooden staircase to stand right at the water's edge.",
    "fallbackImage": "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Kerið is a 3,000-year-old volcanic crater lake composed of fiery red volcanic rock slopes covered in green moss, encircling an astonishing vivid aquamarine mineral pool."
  },
  {
    "id": "is-24",
    "name": "Grjótagjá Thermal Lava Cave",
    "nativeName": "Grjótagjá",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "North Iceland (Lake Mývatn)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Lava Fissure Cave",
      "Pop Culture Icon"
    ],
    "wikiTitle": "Grj%C3%B3tagj%C3%A1",
    "googleMapsQuery": "Grjotagja Cave, Myvatn, Iceland",
    "bestTimeToVisit": "Morning on a sunny day when light shafts pierce the ceiling fissures",
    "insiderTip": "Climb down carefully into the narrow rock crevice to see the glowing crystal-clear thermal pool (famous as Jon Snow and Ygritte's cave in Game of Thrones).",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Grjótagjá is a small lava cave near Lake Mývatn with a deep geothermal spring inside, set along a dramatic jagged tectonic fracture where the Earth is pulling apart."
  },
  {
    "id": "is-25",
    "name": "Askja Volcanic Caldera & Víti Crater",
    "nativeName": "Askja & Víti",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "Central Highlands (Ódáðahraun)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "adventure",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Lunar Wilderness",
      "Geothermal Crater"
    ],
    "wikiTitle": "Askja",
    "googleMapsQuery": "Askja Caldera, Iceland",
    "bestTimeToVisit": "Late July to mid-August via sturdy high-clearance 4x4 highland tour",
    "insiderTip": "The Apollo astronauts trained here in the 1960s because the stark basalt lava wasteland resembled the surface of the Moon.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Askja is an enormous volcanic caldera complex nestled in the remote Dyngjufjöll mountains, containing Lake Öskjuvatn and the milky blue warm swimming crater Víti (\"Hell\")."
  },
  {
    "id": "is-26",
    "name": "Aldeyjarfoss Basalt Amphitheater",
    "nativeName": "Aldeyjarfoss",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "Highlands / North (Bárðardalur)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Volcanic Columns",
      "Adventure & Wild"
    ],
    "wikiTitle": "Aldeyjarfoss",
    "googleMapsQuery": "Aldeyjarfoss, Iceland",
    "bestTimeToVisit": "Summer mornings for clear lighting across the hexagonal basalt column amphitheater",
    "insiderTip": "Located along the Sprengisandur highland route; requires a 4WD vehicle for the final gravel stretch, but rewards you with almost no other tourists.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Aldeyjarfoss drops 20 meters into a turbulent turquoise basin framed by an astonishing natural amphitheater of twisted, symmetrical hexagonal basalt organ pipes."
  },
  {
    "id": "is-27",
    "name": "Rauðisandur Red Sand Beach",
    "nativeName": "Rauðisandur",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "Westfjords (Barðaströnd)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "coastal",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Red Sands & Seals",
      "Coastal & Islands"
    ],
    "wikiTitle": "Rau%C3%B0asandur",
    "googleMapsQuery": "Raudasandur Beach, Westfjords, Iceland",
    "bestTimeToVisit": "Low tide on a sunny summer day when the sand shifts from gold to orange and copper red",
    "insiderTip": "Stop at the solitary French café (Franska Kaffihúsið) overlooking the endless sands and watch seals lounging on sandbanks.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Unlike Iceland's typical jet-black volcanic shores, Rauðisandur stretches for 10 kilometers with golden, copper-red, and pink sands formed by pulverized scallop shells."
  },
  {
    "id": "is-28",
    "name": "Snæfellsjökull Glacier Volcano",
    "nativeName": "Snæfellsjökull",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "Snæfellsnes Peninsula",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Journey to Earth's Center",
      "Glacier Volcano"
    ],
    "wikiTitle": "Sn%C3%A6fellsj%C3%B6kull_National_Park",
    "googleMapsQuery": "Snaefellsjokull National Park, Iceland",
    "bestTimeToVisit": "June to August for snowcat glacier summit tours",
    "insiderTip": "Famous as the entry portal to subterranean wonder in Jules Verne's Journey to the Center of the Earth, local folklore claims the peak holds mystical cosmic energy.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Snæfellsjökull is a 7,000-year-old ice-capped stratovolcano anchoring the tip of the Snæfellsnes peninsula, featuring sea arches, black pebble coves, and lava tube caves."
  },
  {
    "id": "is-29",
    "name": "Glymur (Iceland’s Second Tallest Fall)",
    "nativeName": "Glymur",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "West Iceland (Hvalfjörður)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "adventure",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Canyon Trek",
      "Adventure & Wild"
    ],
    "wikiTitle": "Glymur",
    "googleMapsQuery": "Glymur Waterfall Trail, Iceland",
    "bestTimeToVisit": "Summer months when the log bridge across the Botnsá river is in place",
    "insiderTip": "Bring trekking poles and water shoes for the exciting canyon hike, which crosses a cave, a log bridge, and narrow cliff trails with nesting seabirds.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Plunging 198 meters through a moss-draped volcanic slot canyon, Glymur was long considered Iceland's highest waterfall and offers one of the nation's most rewarding half-day hikes."
  },
  {
    "id": "is-30",
    "name": "Mývatn Geothermal Nature Baths",
    "nativeName": "Mývatn Nature Baths (Jarðböðin)",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "North Iceland (Lake Mývatn)",
    "type": "iconic",
    "vibes": [
      "nature",
      "culture"
    ],
    "vibeLabels": [
      "Geothermal Lagoon",
      "Wellness",
      "North Iceland Gem"
    ],
    "wikiTitle": "M%C3%BDvatn",
    "googleMapsQuery": "Myvatn Nature Baths, Iceland",
    "bestTimeToVisit": "Evening after a long day exploring northern craters and lava labyrinths",
    "insiderTip": "Considered the calmer, more authentic northern alternative to the Blue Lagoon, offering uninterrupted mountain horizons and natural geothermal steam chambers.",
    "fallbackImage": "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Lake Mývatn is a shallow volcanic lake surrounded by pseudocraters, lava formations, and a geothermal lagoon of alkaline, mineral-rich milky-blue thermal water."
  },
  {
    "id": "is-31",
    "name": "Heimaey Island & Eldfell Volcano",
    "nativeName": "Heimaey, Vestmannaeyjar",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "Westman Islands (Vestmannaeyjar)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "coastal",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Pompeii of the North",
      "Coastal & Islands"
    ],
    "wikiTitle": "Heimaey",
    "googleMapsQuery": "Heimaey, Westman Islands, Iceland",
    "bestTimeToVisit": "Summer by ferry from Landeyjahöfn; home to the Atlantic's largest puffin colony",
    "insiderTip": "Hike to the top of the red Eldfell cinder cone, created during a sudden 1973 volcanic eruption that buried half the town in ash.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Heimaey is the only inhabited island in the volcanic Westman archipelago, famous for millions of nesting Atlantic puffins and the dramatic 1973 eruption commemorated at Eldheimar museum."
  },
  {
    "id": "is-32",
    "name": "Westfjords Coastal Cliffs",
    "nativeName": "Vestfirðir",
    "country": "iceland",
    "countryName": "Iceland",
    "flag": "🇮🇸",
    "region": "Northwest Iceland",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "adventure",
      "nature",
      "coastal"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Remote Fjords",
      "Adventure & Wild"
    ],
    "wikiTitle": "Westfjords",
    "googleMapsQuery": "Westfjords, Iceland",
    "bestTimeToVisit": "June to August when all coastal passes are open and puffins nest on Látrabjarg cliffs",
    "insiderTip": "Drive to Látrabjarg, Europe's largest bird cliff spanning 14 km and soaring 440 meters, where you can watch puffins just inches away from the grass ledge.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The Westfjords form Iceland's most remote, rugged peninsula: ancient table-top mountains deeply indented by dozens of tranquil fjords, hot springs, and monumental bird cliffs."
  },
  {
    "id": "fr-1",
    "name": "Eiffel Tower & Champ de Mars",
    "nativeName": "Tour Eiffel",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Île-de-France (Paris)",
    "type": "iconic",
    "vibes": [
      "history",
      "culture"
    ],
    "vibeLabels": [
      "History & Heritage",
      "City of Light",
      "Iconic Landmark"
    ],
    "wikiTitle": "Eiffel_Tower",
    "googleMapsQuery": "Eiffel Tower, Paris, France",
    "bestTimeToVisit": "Twilight when the tower illuminates, sparkling for 5 minutes every hour on the hour",
    "insiderTip": "Cross the Seine to the Trocadéro terrace at dawn for the cleanest unobstructed view before crowds gather.",
    "fallbackImage": "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Designed by Gustave Eiffel for the 1889 World's Fair, this 330-meter wrought-iron lattice tower is the undisputed global symbol of France and romantic Paris."
  },
  {
    "id": "fr-2",
    "name": "Mont Saint-Michel Tidal Abbey",
    "nativeName": "Le Mont-Saint-Michel",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Normandy (Manche)",
    "type": "iconic",
    "vibes": [
      "history",
      "coastal"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Tidal Island",
      "UNESCO Heritage"
    ],
    "wikiTitle": "Mont-Saint-Michel",
    "googleMapsQuery": "Mont Saint-Michel, Normandy, France",
    "bestTimeToVisit": "Spring tides (super-tides) when the sea completely surrounds the mount, turning it into an island",
    "insiderTip": "Spend the night inside the walled village; after day-trippers leave, wander the lantern-lit cobblestone ramparts in total serenity.",
    "fallbackImage": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Mont Saint-Michel is a medieval gravity-defying Benedictine abbey perched atop a tidal granite island in Normandy, surrounded by shifting quicksands and Europe's highest tides."
  },
  {
    "id": "fr-3",
    "name": "Gorges du Verdon (Grand Canyon of Europe)",
    "nativeName": "Gorges du Verdon",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Provence-Alpes-Côte d'Azur",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Emerald Canyon",
      "Kayaking & Rock Climbing"
    ],
    "wikiTitle": "Verdon_Gorge",
    "googleMapsQuery": "Gorges du Verdon, France",
    "bestTimeToVisit": "May to September; rent an electric boat or kayak from Lac de Sainte-Croix",
    "insiderTip": "Paddle beneath the Galetas bridge straight into the 700-meter-deep canyon where limestone walls tower over pure turquoise water.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Often hailed as Europe's most beautiful river canyon, the Verdon Gorge features startling turquoise-green waters carving through 25 kilometers of dramatic limestone cliffs."
  },
  {
    "id": "fr-4",
    "name": "Rocamadour Cliffside Sanctuary",
    "nativeName": "Rocamadour",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Occitanie (Lot)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "history"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Pilgrimage Citadel",
      "Medieval Marvel"
    ],
    "wikiTitle": "Rocamadour",
    "googleMapsQuery": "Rocamadour, Lot, France",
    "bestTimeToVisit": "May or September; viewed at sunset from L'Hospitalet viewpoint across the Alzou canyon",
    "insiderTip": "Climb the 216 Grand Escalier stone steps (pilgrims traditionally climbed on their knees) to the Chapel of Notre-Dame housing the Black Madonna.",
    "fallbackImage": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Rocamadour clings in vertical tiers against a sheer 120-meter cliff above the Alzou river canyon, celebrated since the Middle Ages as a sacred sanctuary and pilgrimage stop."
  },
  {
    "id": "fr-5",
    "name": "Colmar & Little Venice",
    "nativeName": "Colmar, La Petite Venise",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Grand Est (Alsace)",
    "type": "iconic",
    "vibes": [
      "culture",
      "history"
    ],
    "vibeLabels": [
      "Food & Culture",
      "Fairy Tale Village",
      "Alsatian Wine Route"
    ],
    "wikiTitle": "Colmar",
    "googleMapsQuery": "Little Venice, Colmar, France",
    "bestTimeToVisit": "December for world-famous Christmas markets, or May for vibrant blooming geraniums",
    "insiderTip": "Take a flat-bottomed boat ride down the Lauch river canal and taste authentic tarte flambée (flammekueche) paired with chilled dry Riesling.",
    "fallbackImage": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Colmar is the fairytale capital of Alsatian wine, famous for timber-framed pastel houses dating from the Middle Ages, cobblestone alleys, and flower-lined canals."
  },
  {
    "id": "fr-6",
    "name": "Dune of Pilat (Europe’s Tallest Sand Dune)",
    "nativeName": "Dune du Pilat",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Nouvelle-Aquitaine (Arcachon Bay)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "coastal"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Coastal & Islands",
      "Mega Dune"
    ],
    "wikiTitle": "Dune_of_Pilat",
    "googleMapsQuery": "Dune of Pilat, France",
    "bestTimeToVisit": "Sunset when golden sands drop directly into the shimmering Atlantic ocean",
    "insiderTip": "Climb the wooden seasonal stairs to the crest (106 meters high) for an incredible panorama of pine canopy on one side and the ocean on the other.",
    "fallbackImage": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Rising over 100 meters between the Atlantic Ocean and a vast maritime pine forest, the Dune of Pilat is Europe's tallest sand dune, containing 60 million cubic meters of sand."
  },
  {
    "id": "fr-7",
    "name": "Étretat Alabaster Chalk Cliffs",
    "nativeName": "Falaises d'Étretat",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Normandy (Seine-Maritime)",
    "type": "iconic",
    "vibes": [
      "nature",
      "coastal"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Coastal & Islands",
      "Impressionist Haven"
    ],
    "wikiTitle": "%C3%89tretat",
    "googleMapsQuery": "Etretat Cliffs, France",
    "bestTimeToVisit": "Spring or Autumn; walk the cliff trail immortalized by Claude Monet",
    "insiderTip": "Hike to the Falaise d'Aval arch and look out at the 70-meter freestanding chalk needle (L'Aiguille), the famous setting of Maurice Leblanc's Arsène Lupin novels.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Étretat is famed for its monumental white chalk sea cliffs, three natural arches, and dramatic needle spire jutting out of the emerald English Channel."
  },
  {
    "id": "fr-8",
    "name": "Palace of Versailles & Hall of Mirrors",
    "nativeName": "Château de Versailles",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Île-de-France (Yvelines)",
    "type": "iconic",
    "vibes": [
      "history"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Royal Splendor",
      "UNESCO Heritage"
    ],
    "wikiTitle": "Palace_of_Versailles",
    "googleMapsQuery": "Palace of Versailles, France",
    "bestTimeToVisit": "Tuesday to Friday mornings; combine with the Musical Fountain Shows in the gardens",
    "insiderTip": "Rent a bicycle or golf cart to explore the outer estate: Marie Antoinette's rustic Queen's Hamlet (Le Hameau de la Reine) feels like a peaceful pastoral dream.",
    "fallbackImage": "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The principal royal residence of France from 1682 until the French Revolution, Versailles epitomizes the pinnacle of French Baroque architecture and manicured garden design."
  },
  {
    "id": "fr-9",
    "name": "Chamonix & Mont Blanc Alpine Realm",
    "nativeName": "Chamonix-Mont-Blanc",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Auvergne-Rhône-Alpes (Haute-Savoie)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Alpine Adventure",
      "Roof of Europe"
    ],
    "wikiTitle": "Chamonix",
    "googleMapsQuery": "Chamonix, Mont Blanc, France",
    "bestTimeToVisit": "December to April for skiing, or July to September for alpine mountaineering",
    "insiderTip": "Ride the Aiguille du Midi cable car to 3,842 meters and \"Step into the Void\" — a glass skywalk suspended over a 1,000-meter sheer drop.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Nestled at the base of Mont Blanc (Western Europe's highest peak at 4,809m), Chamonix is the world capital of extreme skiing, mountaineering, and glacial panoramas."
  },
  {
    "id": "fr-10",
    "name": "Pont du Gard Roman Aqueduct",
    "nativeName": "Pont du Gard",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Occitanie (Gard)",
    "type": "iconic",
    "vibes": [
      "history"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Ancient Rome",
      "UNESCO Heritage"
    ],
    "wikiTitle": "Pont_du_Gard",
    "googleMapsQuery": "Pont du Gard, Vers-Pont-du-Gard, France",
    "bestTimeToVisit": "Spring or sunset in summer; rent a kayak on the Gardon river beneath the arches",
    "insiderTip": "Pack swimming gear — floating in the clear emerald river right beneath the towering three-tiered Roman arches is an unforgettable experience.",
    "fallbackImage": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The Pont du Gard is an ancient Roman three-tiered limestone aqueduct bridge built in the 1st century AD to carry water over 50 kilometers to the city of Nîmes."
  },
  {
    "id": "fr-11",
    "name": "Château de Chambord",
    "nativeName": "Château de Chambord",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Centre-Val de Loire (Loir-et-Cher)",
    "type": "iconic",
    "vibes": [
      "history",
      "culture"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Renaissance Castle",
      "Loire Valley"
    ],
    "wikiTitle": "Ch%C3%A2teau_de_Chambord",
    "googleMapsQuery": "Chambord Castle, France",
    "bestTimeToVisit": "Autumn when surrounding royal hunting forest turns copper and gold",
    "insiderTip": "Climb the revolutionary double-helix staircase (attributed to Leonardo da Vinci) where two people can ascend and descend simultaneously without ever crossing paths.",
    "fallbackImage": "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Commissioned by King Francis I, Chambord is the largest and most extravagant château in the Loire Valley, blending traditional French medieval forms with classical Italian Renaissance structures."
  },
  {
    "id": "fr-12",
    "name": "Cité de Carcassonne Medieval Citadel",
    "nativeName": "Cité de Carcassonne",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Occitanie (Aude)",
    "type": "iconic",
    "vibes": [
      "history"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Double Ramparts",
      "UNESCO Fortress"
    ],
    "wikiTitle": "Cit%C3%A9_de_Carcassonne",
    "googleMapsQuery": "Cite de Carcassonne, France",
    "bestTimeToVisit": "Evening after 6 PM when daylight crowds dissipate and the 52 towers light up with golden illumination",
    "insiderTip": "Savor an authentic, slow-cooked Cassoulet with duck confit and white beans at an outdoor bistro within the medieval courtyard.",
    "fallbackImage": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Carcassonne is a monumental fortified medieval fortress with 3 kilometers of double defensive walls and 52 fairy-tale watchtowers overlooking the Aude valley."
  },
  {
    "id": "fr-13",
    "name": "Calanques National Park Fjord Coves",
    "nativeName": "Parc National des Calanques",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Provence-Alpes-Côte d'Azur (Marseille & Cassis)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "coastal",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Coastal & Islands",
      "Limestone Fjords"
    ],
    "wikiTitle": "Calanques_National_Park",
    "googleMapsQuery": "Calanque d En-Vau, Cassis, France",
    "bestTimeToVisit": "May to June or September before fire-season hiking restrictions in high summer",
    "insiderTip": "Hike to Calanque d'En-Vau — its narrow canyon walls rise 150 meters sheer out of crystal-clear turquoise swimming waters.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The Calanques are a series of dramatic limestone maritime fjords between Marseille and Cassis, where blinding white cliffs plunge into translucent blue Mediterranean waters."
  },
  {
    "id": "fr-14",
    "name": "Annecy Old Town & Glacial Lake",
    "nativeName": "Annecy, Venise des Alpes",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Auvergne-Rhône-Alpes (Haute-Savoie)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "coastal",
      "culture"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Alpine Lake & Canals",
      "Romantic Town"
    ],
    "wikiTitle": "Annecy",
    "googleMapsQuery": "Palais de l Isle, Annecy, France",
    "bestTimeToVisit": "May to September; rent a paddleboard or cycle the 40km perimeter trail around Lake Annecy",
    "insiderTip": "Photograph the triangular Palais de l'Île medieval prison sitting right in the center of the canal like a stone ship.",
    "fallbackImage": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Known as the \"Venice of the Alps\", Annecy features crystal canals winding past pastel timber houses against the backdrop of snow-capped mountains and Europe's cleanest lake."
  },
  {
    "id": "fr-15",
    "name": "Saint-Tropez & Pampelonne Beach",
    "nativeName": "Saint-Tropez",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Provence-Alpes-Côte d'Azur (Var)",
    "type": "iconic",
    "vibes": [
      "coastal",
      "culture"
    ],
    "vibeLabels": [
      "Coastal & Islands",
      "French Riviera Glamour",
      "Iconic Port"
    ],
    "wikiTitle": "Saint-Tropez",
    "googleMapsQuery": "Port de Saint-Tropez, France",
    "bestTimeToVisit": "May or September for golden Mediterranean warmth without August yacht traffic",
    "insiderTip": "Wander the narrow cobblestone alleys of La Ponche (the historic fishing quarter) before ordering a slice of creamy Tarte Tropézienne.",
    "fallbackImage": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Once a humble fishing village transformed by Brigitte Bardot in the 1950s, Saint-Tropez is the epitome of French Riviera chic, combining pastel stone quays with azure beaches."
  },
  {
    "id": "fr-16",
    "name": "Bonifacio White Sea Cliffs (Corsica)",
    "nativeName": "Bonifacio",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Corsica (Corse-du-Sud)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "coastal",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Limestone Citadel",
      "Island Wonder"
    ],
    "wikiTitle": "Bonifacio,_Corse-du-Sud",
    "googleMapsQuery": "Bonifacio, Corsica, France",
    "bestTimeToVisit": "May to June or September for smooth ferry crossings and warm coastal walks",
    "insiderTip": "Descend the King of Aragon's Staircase (Escalier du Roi d'Aragon) — 187 steep steps carved at a 45-degree angle directly into the sheer cliff above the waves.",
    "fallbackImage": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Teetering high atop 70-meter white limestone cliffs sculpted by wind and sea, Bonifacio is a fortified medieval citadel commanding panoramic views across the strait to Sardinia."
  },
  {
    "id": "fr-17",
    "name": "Strasbourg & Petite France",
    "nativeName": "Strasbourg, La Petite France",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Grand Est (Bas-Rhin)",
    "type": "iconic",
    "vibes": [
      "history",
      "culture"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Alsatian Crossroads",
      "UNESCO Center"
    ],
    "wikiTitle": "Strasbourg",
    "googleMapsQuery": "La Petite France, Strasbourg, France",
    "bestTimeToVisit": "December for the historic \"Christkindelsmärik\" market, or summer for canal terraces",
    "insiderTip": "Visit the soaring Gothic Strasbourg Cathedral at 12:30 PM to watch the mechanized Renaissance astronomical clock strike the hour.",
    "fallbackImage": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Sitting on the Rhine border of France and Germany, Strasbourg combines grand Gothic stone architecture with half-timbered canals in the picturesque Petite France quarter."
  },
  {
    "id": "fr-18",
    "name": "Gorges du Tarn Limestone Canyon",
    "nativeName": "Gorges du Tarn",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Occitanie (Lozère)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Wild Canyon",
      "Adventure & Wild"
    ],
    "wikiTitle": "Gorges_du_Tarn",
    "googleMapsQuery": "Gorges du Tarn, Sainte-Enimie, France",
    "bestTimeToVisit": "June to September; rent a canoe for a gentle descent down the emerald Tarn river",
    "insiderTip": "Visit the troglodytic stone hamlet of Castelbouc, built into overhanging caves beneath a ruined medieval knight fortress.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The Gorges du Tarn is a spectacular 53-kilometer canyon carved into the limestone plateaus of the Grands Causses, reaching depths of up to 500 meters."
  },
  {
    "id": "fr-19",
    "name": "Puy de Dôme Volcanic Chain",
    "nativeName": "Puy de Dôme & Chaîne des Puys",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Auvergne-Rhône-Alpes (Clermont-Ferrand)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Extinct Volcano Chain",
      "UNESCO Natural Site"
    ],
    "wikiTitle": "Puy_de_D%C3%B4me",
    "googleMapsQuery": "Puy de Dome, France",
    "bestTimeToVisit": "May to October; ride the Panoramique des Dômes electric rack railway to the summit",
    "insiderTip": "Watch paragliders soar from the crater rim overlooking the alignment of 80 ancient volcanic cinder cones stretching along the Chaîne des Puys.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Puy de Dôme is a 1,465-meter lava dome dominating the Chaîne des Puys — a UNESCO-listed geological alignment of 80 extinct volcanic cones and craters in central France."
  },
  {
    "id": "fr-20",
    "name": "Saint-Émilion Wine Heritage",
    "nativeName": "Saint-Émilion",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Nouvelle-Aquitaine (Gironde)",
    "type": "iconic",
    "vibes": [
      "culture",
      "history"
    ],
    "vibeLabels": [
      "Food & Culture",
      "Bordeaux Grand Cru",
      "UNESCO Heritage"
    ],
    "wikiTitle": "Saint-%C3%89milion",
    "googleMapsQuery": "Saint-Emilion, Gironde, France",
    "bestTimeToVisit": "September to October during grape harvesting (\"les vendanges\")",
    "insiderTip": "Tour the subterranean Monolithic Church carved completely out of a single limestone rock cliff in the 12th century.",
    "fallbackImage": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Surrounded by premier grand cru vineyards, Saint-Émilion is a medieval hillside village renowned worldwide for world-class Merlot-based wines and underground limestone catacombs."
  },
  {
    "id": "fr-21",
    "name": "Château de Chenonceau (The Ladies’ Castle)",
    "nativeName": "Château de Chenonceau",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Centre-Val de Loire (Indre-et-Loire)",
    "type": "iconic",
    "vibes": [
      "history"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Bridge Château",
      "Loire Valley"
    ],
    "wikiTitle": "Ch%C3%A2teau_de_Chenonceau",
    "googleMapsQuery": "Chateau de Chenonceau, France",
    "bestTimeToVisit": "Spring or summer morning to stroll Diane de Poitiers and Catherine de Medici's gardens",
    "insiderTip": "Rent a rowboat on the Cher River to paddle right beneath the grand gallery arches spanning the tranquil water.",
    "fallbackImage": "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Chenonceau is one of France's most romantic châteaux, famously constructed as an elegant arched bridge spanning the River Cher, shaped by formidable women of French history."
  },
  {
    "id": "fr-22",
    "name": "Claude Monet’s Garden in Giverny",
    "nativeName": "Fondation Claude Monet, Giverny",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Normandy (Eure)",
    "type": "iconic",
    "vibes": [
      "culture",
      "nature"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Impressionist Haven",
      "Water Lilies"
    ],
    "wikiTitle": "Giverny",
    "googleMapsQuery": "Claude Monet Garden, Giverny, France",
    "bestTimeToVisit": "May for wisteria over the Japanese bridge, or July for blooming water lilies",
    "insiderTip": "Book first-entry morning tickets online to walk Monet's Japanese footbridge before tours arrive.",
    "fallbackImage": "https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Claude Monet lived in Giverny for 43 years, transforming his property into a living botanical work of art that inspired his immortal Water Lilies masterpiece series."
  },
  {
    "id": "fr-23",
    "name": "Sainte-Chapelle Stained Glass Jewel",
    "nativeName": "Sainte-Chapelle",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Île-de-France (Paris)",
    "type": "iconic",
    "vibes": [
      "history",
      "culture"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Rayonnant Gothic",
      "Stained Glass Wonder"
    ],
    "wikiTitle": "Sainte-Chapelle",
    "googleMapsQuery": "Sainte-Chapelle, Paris, France",
    "bestTimeToVisit": "Midday on a clear sunny day when sunlight turns 1,113 stained glass panels into liquid jewel tones",
    "insiderTip": "Book an evening classical chamber music concert inside the chapel to hear Vivaldi surrounded by glowing Gothic light.",
    "fallbackImage": "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Commissioned by King Louis IX to house Christ's Crown of Thorns, Sainte-Chapelle is a Rayonnant Gothic masterpiece featuring fifteen soaring 15-meter stained glass windows."
  },
  {
    "id": "fr-24",
    "name": "Roussillon & The Ochre Trail",
    "nativeName": "Le Sentier des Ocres, Roussillon",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Provence (Luberon)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Ochre Canyons",
      "Provencal Palette"
    ],
    "wikiTitle": "Roussillon,_Vaucluse",
    "googleMapsQuery": "Sentier des Ocres, Roussillon, France",
    "bestTimeToVisit": "Late afternoon in spring or autumn when sunlight ignites the crimson cliffs",
    "insiderTip": "Wear shoes you don't mind getting stained: the fine mineral ochre pigment clings softly to footwear!",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Roussillon sits atop one of the world's largest ochre deposits, surrounded by flamboyant orange, saffron, and crimson stone quarries framed by Mediterranean green pines."
  },
  {
    "id": "us-1",
    "name": "Grand Canyon National Park",
    "nativeName": "Grand Canyon",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Southwest (Arizona)",
    "type": "iconic",
    "vibes": [
      "nature"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Geological Wonder",
      "Iconic Landmark"
    ],
    "wikiTitle": "Grand_Canyon",
    "googleMapsQuery": "Grand Canyon National Park, Arizona, USA",
    "bestTimeToVisit": "March to May or September to November for clear skies and crisp rim air",
    "insiderTip": "Watch sunrise from Mather Point or Lipan Point when layers of ancient red, orange, and purple rock illuminate progressively into the canyon depths.",
    "fallbackImage": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Carved over millions of years by the Colorado River, the Grand Canyon stretches 446 kilometers long and over a mile deep, exposing two billion years of Earth's geological history."
  },
  {
    "id": "us-2",
    "name": "Yellowstone Grand Prismatic Spring",
    "nativeName": "Grand Prismatic Spring",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Rocky Mountains (Wyoming)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Geothermal Wonder",
      "Iconic Landmark"
    ],
    "wikiTitle": "Grand_Prismatic_Spring",
    "googleMapsQuery": "Grand Prismatic Spring, Yellowstone, Wyoming, USA",
    "bestTimeToVisit": "Midday in July or August when warm air clears steam to reveal rainbow mineral rings",
    "insiderTip": "Hike up the Fairy Falls overlook trail for the elevated vantage point to photograph the vibrant rainbow rings of thermophilic bacteria.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The Grand Prismatic Spring in Yellowstone is the largest hot spring in the United States, famous for rainbow-like rings of red, orange, yellow, and deep turquoise water."
  },
  {
    "id": "us-3",
    "name": "Antelope Canyon Slot Ravines",
    "nativeName": "Tsé bighánílíní",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Navajo Nation (Page, Arizona)",
    "type": "iconic",
    "vibes": [
      "nature"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Slot Canyon",
      "Sacred Navajo Land"
    ],
    "wikiTitle": "Antelope_Canyon",
    "googleMapsQuery": "Antelope Canyon, Page, Arizona, USA",
    "bestTimeToVisit": "Midday (11 AM - 1:30 PM) between May and September to witness iconic sunbeams piercing the canyon floor",
    "insiderTip": "Lower Antelope Canyon offers fun staircases and narrower sandstone corridors, while Upper Antelope Canyon is famous for falling sand and direct light shafts.",
    "fallbackImage": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Antelope Canyon is a world-famous slot canyon on Navajo land, carved by flash floods into swirling, wave-like sandstone corridors of incandescent amber and violet."
  },
  {
    "id": "us-4",
    "name": "Yosemite Valley & Half Dome",
    "nativeName": "Yosemite Valley",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Sierra Nevada (California)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Granite Monoliths",
      "UNESCO Heritage"
    ],
    "wikiTitle": "Yosemite_National_Park",
    "googleMapsQuery": "Yosemite Valley, California, USA",
    "bestTimeToVisit": "May to June when roaring glacial waterfalls are at peak volume",
    "insiderTip": "Stop at Tunnel View for the definitive panorama: El Capitan on the left, Bridalveil Fall on the right, and Half Dome rising in the center.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Yosemite National Park is an icon of the American wilderness, celebrated for colossal granite summits (El Capitan, Half Dome), ancient giant sequoias, and plunging waterfalls."
  },
  {
    "id": "us-5",
    "name": "Sedona Red Rock Vortexes",
    "nativeName": "Sedona",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Southwest (Arizona)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Red Rock Country",
      "Spiritual Energy"
    ],
    "wikiTitle": "Sedona,_Arizona",
    "googleMapsQuery": "Cathedral Rock Trail, Sedona, Arizona, USA",
    "bestTimeToVisit": "Spring or Autumn; hike Cathedral Rock or Bell Rock at golden hour",
    "insiderTip": "Scramble up Cathedral Rock Trail to the saddle before sunset when the sandstone towers ignite in fiery red and orange hues.",
    "fallbackImage": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Surrounded by sculpted red rock buttes and pinon-juniper forest, Sedona is an artistic desert sanctuary celebrated for hiking, starry night skies, and mystical energy vortexes."
  },
  {
    "id": "us-6",
    "name": "Big Sur & Bixby Creek Bridge",
    "nativeName": "Big Sur",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Central Coast (California)",
    "type": "iconic",
    "vibes": [
      "coastal",
      "nature"
    ],
    "vibeLabels": [
      "Coastal & Islands",
      "Pacific Coast Highway",
      "Iconic Landmark"
    ],
    "wikiTitle": "Big_Sur",
    "googleMapsQuery": "Bixby Creek Bridge, Big Sur, California, USA",
    "bestTimeToVisit": "September to November for clear skies and minimal coastal marine layer fog",
    "insiderTip": "Visit McWay Falls in Julia Pfeiffer Burns State Park to see an 80-foot waterfall dropping directly onto a pristine, untouched beach cove.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Big Sur is a rugged stretch of California's central coast where the Santa Lucia Mountains plunge abruptly into the Pacific Ocean along Highway 1."
  },
  {
    "id": "us-7",
    "name": "White Sands National Park",
    "nativeName": "White Sands",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Chihuahuan Desert (New Mexico)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Gypsum Dune Field",
      "Dreamlike Desert"
    ],
    "wikiTitle": "White_Sands_National_Park",
    "googleMapsQuery": "White Sands National Park, New Mexico, USA",
    "bestTimeToVisit": "Late afternoon during autumn or winter; rent a plastic saucer sled from the visitor center",
    "insiderTip": "Unlike quartz sand, pure gypsum crystals do not absorb heat from the sun — you can comfortably walk barefoot across the dunes even on warm sunny days.",
    "fallbackImage": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "White Sands preserves the largest gypsum dunefield on Earth: 275 square miles of glistening white wave-like dunes in the Tularosa Basin of southern New Mexico."
  },
  {
    "id": "us-8",
    "name": "Hoh Rain Forest (Olympic Peninsula)",
    "nativeName": "Hoh Rain Forest",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Pacific Northwest (Washington)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Temperate Rainforest",
      "Adventure & Wild"
    ],
    "wikiTitle": "Hoh_Rain_Forest",
    "googleMapsQuery": "Hoh Rain Forest, Olympic National Park, Washington, USA",
    "bestTimeToVisit": "Spring or early autumn; walk the Hall of Mosses trail",
    "insiderTip": "Visit during a light drizzle: rainfall turns the hanging club moss and sword ferns into an emerald cathedral of surreal vibrancy.",
    "fallbackImage": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Located in Olympic National Park, the Hoh Rain Forest receives over 140 inches of rain annually, creating a lush temperate rainforest carpeted with hanging mosses and colossal Sitka spruces."
  },
  {
    "id": "us-9",
    "name": "Zion Canyon & The Narrows",
    "nativeName": "Zion National Park",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Southwest (Utah)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Canyon Trekking",
      "Adventure & Wild"
    ],
    "wikiTitle": "Zion_National_Park",
    "googleMapsQuery": "The Narrows, Zion National Park, Utah, USA",
    "bestTimeToVisit": "Late spring to autumn when water temperatures in the Virgin River are manageable",
    "insiderTip": "Rent neoprene socks, canyoneering boots, and a wooden walking staff in Springdale before wading upstream through The Narrows.",
    "fallbackImage": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Zion National Park is renowned for dramatic cream, pink, and red Navajo sandstone cliffs towering 1,000 feet above the lush Virgin River canyon floor."
  },
  {
    "id": "us-10",
    "name": "Bryce Canyon Natural Amphitheater",
    "nativeName": "Bryce Canyon",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Southwest (Utah)",
    "type": "iconic",
    "vibes": [
      "nature"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Hoodoo Formations",
      "Iconic Landmark"
    ],
    "wikiTitle": "Bryce_Canyon_National_Park",
    "googleMapsQuery": "Bryce Amphitheater, Bryce Canyon, Utah, USA",
    "bestTimeToVisit": "Sunrise from Bryce Point or Inspiration Point when red spires glow against clear skies",
    "insiderTip": "Hike the Navajo Loop and Queen's Garden trail combo down through Wall Street slot canyon between towering orange hoodoo spires.",
    "fallbackImage": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Not an actual canyon but a collection of giant natural amphitheaters carved into the Paunsaugunt Plateau, famous for thousands of geological spire pillars called hoodoos."
  },
  {
    "id": "us-11",
    "name": "Monument Valley Tribal Park",
    "nativeName": "Tsé Biiʼ Ndzisgaii",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Four Corners (Arizona & Utah)",
    "type": "iconic",
    "vibes": [
      "nature",
      "history"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Western Icon",
      "Sacred Navajo Lands"
    ],
    "wikiTitle": "Monument_Valley",
    "googleMapsQuery": "Monument Valley Navajo Tribal Park, USA",
    "bestTimeToVisit": "Sunset or sunrise when the colossal sandstone buttes cast miles-long shadows across the desert",
    "insiderTip": "Stop at Forrest Gump Point on Highway 163 for the famous road perspective leading straight into the iconic monument horizon.",
    "fallbackImage": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Monument Valley features monumental sandstone buttes towering up to 1,000 feet above the desert floor, an eternal symbol of the American West and sacred Navajo homeland."
  },
  {
    "id": "us-12",
    "name": "Death Valley & Badwater Basin",
    "nativeName": "Death Valley",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Mojave Desert (California & Nevada)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Extreme Wilderness",
      "Lowest Elevation"
    ],
    "wikiTitle": "Death_Valley_National_Park",
    "googleMapsQuery": "Badwater Basin, Death Valley, California, USA",
    "bestTimeToVisit": "November to March when daytime temperatures are pleasant for exploring",
    "insiderTip": "Walk out onto the geometric salt crust polygons at Badwater Basin (-282 feet below sea level), and visit Zabriskie Point for sunrise.",
    "fallbackImage": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Death Valley is a land of extremes: the hottest, driest, and lowest national park in North America, boasting salt flats, sand dunes, badlands, and starry night skies."
  },
  {
    "id": "us-13",
    "name": "Arches & Delicate Arch",
    "nativeName": "Delicate Arch",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Colorado Plateau (Moab, Utah)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Sandstone Arches",
      "Iconic Landmark"
    ],
    "wikiTitle": "Arches_National_Park",
    "googleMapsQuery": "Delicate Arch, Moab, Utah, USA",
    "bestTimeToVisit": "Golden hour at sunset when Delicate Arch glows fiery red against the La Sal Mountains",
    "insiderTip": "The 3-mile roundtrip hike involves climbing an open slickrock slope with no shade: bring plenty of water and a headlamp for the walk back down.",
    "fallbackImage": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Arches National Park preserves over 2,000 natural sandstone arches, balanced rocks, and sandstone fins sculpted by erosion on the red desert plateau."
  },
  {
    "id": "us-14",
    "name": "Hawaii Volcanoes National Park",
    "nativeName": "Kīlauea & Mauna Loa",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Big Island of Hawaii",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure",
      "culture"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Active Volcanism",
      "Adventure & Wild"
    ],
    "wikiTitle": "Hawai%CA%BBi_Volcanoes_National_Park",
    "googleMapsQuery": "Hawaii Volcanoes National Park, Big Island, Hawaii, USA",
    "bestTimeToVisit": "Nighttime viewing from overlook rims when active crater lava lakes illuminate clouds in fiery red",
    "insiderTip": "Walk through the 500-year-old Thurston Lava Tube (Nāhuku) carved by an ancient river of molten magma in a lush tree-fern forest.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Hawaii Volcanoes National Park encompasses two of the world's most active volcanoes (Kīlauea and Mauna Loa), displaying dynamic geological creation where lava meets the sea."
  },
  {
    "id": "us-15",
    "name": "Redwood Ancient Giant Forests",
    "nativeName": "Redwood National Park",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Northern California Coast",
    "type": "iconic",
    "vibes": [
      "nature"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Colossal Trees",
      "UNESCO Heritage"
    ],
    "wikiTitle": "Redwood_National_and_State_Parks",
    "googleMapsQuery": "Lady Bird Johnson Grove, Redwood National Park, California, USA",
    "bestTimeToVisit": "Spring or summer mornings when coastal ocean fog filters dramatic god-rays through towering crowns",
    "insiderTip": "Walk the serene Tall Trees Grove or Stout Memorial Grove to stand beside ancient living sequoias soaring over 350 feet high.",
    "fallbackImage": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Home to the tallest living trees on Earth reaching over 370 feet, the Redwood forests preserve ancient coastal redwood ecosystems dating back to the dinosaur era."
  },
  {
    "id": "us-16",
    "name": "Denali Peak & Subarctic Tundra",
    "nativeName": "Denali (Mount McKinley)",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Interior Alaska",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Highest Peak in North America",
      "Subarctic Wilderness"
    ],
    "wikiTitle": "Denali_National_Park_and_Preserve",
    "googleMapsQuery": "Denali National Park and Preserve, Alaska, USA",
    "bestTimeToVisit": "June to August for wildlife viewing (grizzly bears, moose, caribou, wolves) and autumn tundra colors",
    "insiderTip": "Take a park bus past mile 43 for views of the 20,310-foot summit of Denali, which rises higher from base to peak than Mount Everest.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Encompassing six million acres of wild subarctic tundra, braided glacial rivers, and spruce forests, Denali centers around North America's highest mountain peak."
  },
  {
    "id": "us-17",
    "name": "Everglades River of Grass",
    "nativeName": "Everglades",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "South Florida",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Wetlands Wilderness",
      "UNESCO Heritage"
    ],
    "wikiTitle": "Everglades_National_Park",
    "googleMapsQuery": "Shark Valley, Everglades National Park, Florida, USA",
    "bestTimeToVisit": "December to April (dry season) when wildlife congregates along waterholes and mosquitoes are absent",
    "insiderTip": "Rent a bicycle at Shark Valley to pedal the 15-mile paved loop past dozens of American alligators sunbathing on the canal banks.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The Everglades is the largest subtropical wilderness reserve in North America, a slow-moving shallow river of sawgrass sheltering endangered manatees and alligators."
  },
  {
    "id": "us-18",
    "name": "Acadia & Cadillac Mountain",
    "nativeName": "Acadia National Park",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "New England (Mount Desert Island, Maine)",
    "type": "iconic",
    "vibes": [
      "nature",
      "coastal"
    ],
    "vibeLabels": [
      "Coastal & Islands",
      "First Sunrise in USA",
      "Granite Coast"
    ],
    "wikiTitle": "Acadia_National_Park",
    "googleMapsQuery": "Cadillac Mountain, Acadia National Park, Maine, USA",
    "bestTimeToVisit": "October for peak Maine autumn foliage, or summer for coastal carriage-road bicycling",
    "insiderTip": "Drive or hike up Cadillac Mountain before dawn: from October to March, its summit is the very first spot in the United States to see the sunrise.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Acadia protects the rugged rocky coastline of Maine, combining pink granite sea cliffs, glaciated valleys, coastal fjords, and ocean-view mountain peaks."
  },
  {
    "id": "us-19",
    "name": "Horseshoe Bend & Colorado River",
    "nativeName": "Horseshoe Bend",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Southwest (Page, Arizona)",
    "type": "iconic",
    "vibes": [
      "nature"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Meander Canyon",
      "Iconic Landmark"
    ],
    "wikiTitle": "Horseshoe_Bend_(Arizona)",
    "googleMapsQuery": "Horseshoe Bend, Page, Arizona, USA",
    "bestTimeToVisit": "Sunset when the sun sinks behind the canyon rim and highlights the emerald Colorado River loop",
    "insiderTip": "Use a wide-angle lens: standing at the unfenced 1,000-foot sandstone edge, the 270-degree river bend is so massive it requires at least a 16mm lens.",
    "fallbackImage": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Horseshoe Bend is a horseshoe-shaped incised meander of the Colorado River located 5 miles downstream from Glen Canyon Dam, dropping 1,000 feet straight down."
  },
  {
    "id": "us-20",
    "name": "Devils Tower Volcanic Monolith",
    "nativeName": "Bear Lodge (Mato Tipila)",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Black Hills (Wyoming)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "First National Monument",
      "Sacred Indigenous Rock"
    ],
    "wikiTitle": "Devils_Tower",
    "googleMapsQuery": "Devils Tower National Monument, Wyoming, USA",
    "bestTimeToVisit": "June to September; walk the 1.3-mile paved Tower Trail circling the base",
    "insiderTip": "Look up through binoculars to spot brave rock climbers scaling the vertical hexagonal phonolite porphyry columns.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Devils Tower was proclaimed America's very first national monument in 1906, an 867-foot igneous columnar rock monolith rising dramatically above the Belle Fourche River."
  },
  {
    "id": "us-21",
    "name": "Bonneville Salt Flats",
    "nativeName": "Bonneville Salt Flats",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Great Salt Lake Desert (Utah)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Surreal Salt Crust",
      "Speed Record Flats"
    ],
    "wikiTitle": "Bonneville_Salt_Flats",
    "googleMapsQuery": "Bonneville Salt Flats, Tooele County, Utah, USA",
    "bestTimeToVisit": "Summer for bone-dry white crust driving, or winter after light rain for a mirror reflection that blends earth and sky",
    "insiderTip": "Bring sunglasses: the dazzling white potassium and sodium salt crust reflects up to 90% of solar radiation like blinding snow.",
    "fallbackImage": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Formed by the evaporation of ancient Lake Bonneville, this 30,000-acre white salt crust is so flat that the curvature of the Earth is visibly noticeable on the horizon."
  },
  {
    "id": "us-22",
    "name": "Lake Tahoe Alpine Crystal Waters",
    "nativeName": "Lake Tahoe (Dáʼaw)",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Sierra Nevada (California & Nevada)",
    "type": "iconic",
    "vibes": [
      "nature",
      "coastal",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Alpine Crystal Lake",
      "Year-Round Playground"
    ],
    "wikiTitle": "Lake_Tahoe",
    "googleMapsQuery": "Emerald Bay State Park, Lake Tahoe, California, USA",
    "bestTimeToVisit": "July to August for clear crystal swimming, or January to March for world-class skiing with lake views",
    "insiderTip": "Hike down to Emerald Bay and kayak over to Fannette Island, home to the stone ruins of a 1920s Scandinavian tea house.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Lake Tahoe is the largest alpine lake in North America, renowned for cobalt-blue waters of 99.9% purity ringed by snow-capped granite peaks of the Sierra Nevada."
  },
  {
    "id": "us-23",
    "name": "Joshua Tree Twisted Desert",
    "nativeName": "Joshua Tree",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Southern California Deserts",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Surreal Desert",
      "Stargazing Sanctuary"
    ],
    "wikiTitle": "Joshua_Tree_National_Park",
    "googleMapsQuery": "Skull Rock, Joshua Tree National Park, California, USA",
    "bestTimeToVisit": "October to April; stay until nightfall for certified International Dark Sky stargazing",
    "insiderTip": "Scramble through the giant monzogranite boulder labyrinths at Hidden Valley and photograph whimsical Dr. Seuss-like Yucca brevifolia trees.",
    "fallbackImage": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Where the Mojave and Colorado deserts converge, Joshua Tree features otherworldly boulder piles, gold mining relics, and bizarre twisted Joshua trees."
  },
  {
    "id": "us-24",
    "name": "Canyonlands & Mesa Arch",
    "nativeName": "Canyonlands",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Colorado Plateau (Moab, Utah)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Canyon Wilderness",
      "Island in the Sky"
    ],
    "wikiTitle": "Canyonlands_National_Park",
    "googleMapsQuery": "Mesa Arch, Canyonlands National Park, Utah, USA",
    "bestTimeToVisit": "Sunrise at Mesa Arch when morning sun reflects off canyon walls to illuminate the arch's underside in brilliant orange fire",
    "insiderTip": "Visit the Island in the Sky district for panoramic viewpoints perched 1,000 feet directly above a maze of carved canyons.",
    "fallbackImage": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Canyonlands preserves a colorful landscape of countless canyons, mesas, and buttes eroded by the Green and Colorado rivers into four distinct wilderness districts."
  },
  {
    "id": "fr-25",
    "name": "Aiguille du Midi Skywalk",
    "nativeName": "Aiguille du Midi",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Auvergne-Rhône-Alpes (Mont Blanc)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Alpine Skywalk",
      "Mountain Panorama",
      "Adventure & Wild"
    ],
    "wikiTitle": "Aiguille_du_Midi",
    "googleMapsQuery": "Aiguille du Midi, Chamonix, France",
    "bestTimeToVisit": "Early morning on a clear sunny day for unobstructed views across French, Swiss, and Italian Alps",
    "insiderTip": "Take the summit elevator to the glass viewing box \"Step into the Void\" suspended over a 1,000-meter vertical drop.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Rising to 3,842 meters in the Mont Blanc massif, the Aiguille du Midi is reached by a record-holding cable car, offering 360-degree high-altitude alpine views."
  },
  {
    "id": "fr-26",
    "name": "Porquerolles Golden Island",
    "nativeName": "Île de Porquerolles",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Provence-Alpes-Côte d'Azur (Hyères)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "coastal",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Car-Free Island",
      "Caribbean-Like Waters"
    ],
    "wikiTitle": "Porquerolles",
    "googleMapsQuery": "Plage Notre-Dame, Porquerolles, France",
    "bestTimeToVisit": "June or September; rent a mountain bike to reach secluded white sandy bays",
    "insiderTip": "Plage Notre-Dame on the northeast coast was repeatedly voted Europe's most beautiful beach, framed by maritime pines and turquoise water.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Porquerolles is an idyllic, car-free island in the Mediterranean, famous for pristine pine forests, fragrant lavender fields, and turquoise beaches."
  },
  {
    "id": "fr-27",
    "name": "Beaune & Burgundy Wine Coast",
    "nativeName": "Hospices de Beaune",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Bourgogne-Franche-Comté (Côte-d'Or)",
    "type": "iconic",
    "vibes": [
      "culture",
      "history"
    ],
    "vibeLabels": [
      "Food & Culture",
      "Burgundy Wine Capital",
      "Gothic Heritage"
    ],
    "wikiTitle": "Beaune",
    "googleMapsQuery": "Hospices de Beaune, France",
    "bestTimeToVisit": "Third weekend of November for the world-famous Hospices de Beaune wine auction, or September harvest",
    "insiderTip": "Admire the polychrome glazed geometric roof tiles of the 15th-century Hôtel-Dieu and Rogier van der Weyden's Last Judgement altarpiece.",
    "fallbackImage": "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Beaune is the wine capital of Burgundy, centered around the 15th-century Hospices de Beaune with its flamboyant multicolored patterned tile roofs and centuries-old cellars."
  },
  {
    "id": "fr-28",
    "name": "Conques Medieval Pilgrim Village",
    "nativeName": "Conques-en-Rouergue",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Occitanie (Aveyron)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "history",
      "culture"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Way of St. James",
      "Romanesque Masterpiece"
    ],
    "wikiTitle": "Conques",
    "googleMapsQuery": "Abbey Church of Sainte-Foy, Conques, France",
    "bestTimeToVisit": "Spring or late afternoon in Autumn along the Dourdou river gorge",
    "insiderTip": "Attend the evening organ concert at the Abbey of Sainte-Foy to see contemporary stained-glass windows designed by abstract painter Pierre Soulages.",
    "fallbackImage": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Clinging to a steep wooded hillside along the Way of Saint James pilgrimage route, Conques is an enchanting preserved medieval stone village anchored by a Romanesque abbey."
  },
  {
    "id": "fr-29",
    "name": "Biarritz Atlantic Surfing & Belle Époque",
    "nativeName": "Biarritz",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Nouvelle-Aquitaine (Basque Country)",
    "type": "iconic",
    "vibes": [
      "coastal",
      "culture",
      "adventure"
    ],
    "vibeLabels": [
      "Coastal & Islands",
      "Basque Coast",
      "European Surf Capital"
    ],
    "wikiTitle": "Biarritz",
    "googleMapsQuery": "Rocher de la Vierge, Biarritz, France",
    "bestTimeToVisit": "May to October for rolling Atlantic surf and Basque culinary festivals",
    "insiderTip": "Cross the metal footbridge designed by Gustave Eiffel to the Rocher de la Vierge, a dramatic sea rock crowned by the Virgin Mary overlooking crashing swells.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Biarritz combines aristocratic 19th-century Belle Époque grandeur, grand oceanfront casinos, Basque gastronomy, and world-class Atlantic surfing breaks."
  },
  {
    "id": "fr-30",
    "name": "Carnac Megalithic Standing Stones",
    "nativeName": "Alignements de Carnac",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Brittany (Morbihan)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "history"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Prehistoric Mystery",
      "Older than Stonehenge"
    ],
    "wikiTitle": "Carnac_stones",
    "googleMapsQuery": "Carnac Stones, Brittany, France",
    "bestTimeToVisit": "Dawn or dusk when low sun casts long shadows from 3,000 granite menhirs",
    "insiderTip": "Walk the Ménec alignments containing over 1,000 standing stones aligned in 11 parallel rows stretching for over a kilometer across the heath.",
    "fallbackImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Dating back to 4500 BC, the Carnac stones represent the densest concentration of megalithic standing stones in the world, with over 3,000 granite monuments erected across Brittany."
  },
  {
    "id": "fr-31",
    "name": "Château de Fontainebleau",
    "nativeName": "Château de Fontainebleau",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Île-de-France (Seine-et-Marne)",
    "type": "iconic",
    "vibes": [
      "history"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Home of Kings",
      "UNESCO Heritage"
    ],
    "wikiTitle": "Palace_of_Fontainebleau",
    "googleMapsQuery": "Chateau de Fontainebleau, France",
    "bestTimeToVisit": "Weekdays for peaceful royal gallery walks and hiking in the boulder-strewn Fontainebleau forest",
    "insiderTip": "Admire the horseshoe-shaped grand staircase where Napoleon bid farewell to his Old Guard before his first exile to Elba in 1814.",
    "fallbackImage": "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Spanning eight centuries of French monarchy from Louis VII to Napoleon III, Fontainebleau is a grand royal residence containing over 1,500 richly decorated chambers and Italian Renaissance frescoes."
  },
  {
    "id": "fr-32",
    "name": "Giverny & Étretat Normandy Coastline",
    "nativeName": "Falaises de Normandie",
    "country": "france",
    "countryName": "France",
    "flag": "🇫🇷",
    "region": "Normandy",
    "type": "iconic",
    "vibes": [
      "nature",
      "coastal"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "White Cliffs & Coves",
      "Maritime Splendor"
    ],
    "wikiTitle": "Normandy",
    "googleMapsQuery": "Normandy, France",
    "bestTimeToVisit": "Spring to Autumn; enjoy local camembert, apple cider, and dramatic seaside cliffs",
    "insiderTip": "Drive the scenic coastal route from Honfleur's 17th-century harbor up past the Pont de Normandie to the alabaster cliffs.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Normandy captivates with dramatic white chalk sea cliffs, half-timbered medieval harbors, rich dairy farmlands, historic D-Day beaches, and apple orchards."
  },
  {
    "id": "us-25",
    "name": "Glacier National Park & Going-to-the-Sun Road",
    "nativeName": "Glacier National Park",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Northern Rockies (Montana)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Crown of the Continent",
      "Alpine Lakes"
    ],
    "wikiTitle": "Glacier_National_Park_(U.S.)",
    "googleMapsQuery": "Going-to-the-Sun Road, Glacier National Park, Montana, USA",
    "bestTimeToVisit": "July to September when the high-alpine Going-to-the-Sun Road is fully plowed and open",
    "insiderTip": "Hike to Hidden Lake Overlook from Logan Pass to spot mountain goats and bighorn sheep grazing beside high alpine glacier valleys.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Known as the \"Crown of the Continent\", Glacier preserves over one million acres of glaciated peaks, crystal-clear turquoise lakes, alpine meadows, and pristine wildlife."
  },
  {
    "id": "us-26",
    "name": "Nā Pali Coast Wilderness (Kauai)",
    "nativeName": "Nā Pali Coast",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Hawaiian Islands (Kauai)",
    "type": "iconic",
    "vibes": [
      "nature",
      "coastal",
      "adventure"
    ],
    "vibeLabels": [
      "Coastal & Islands",
      "Emerald Cathedral Cliffs",
      "Pacific Paradise"
    ],
    "wikiTitle": "N%C4%81_Pali_Coast_State_Park",
    "googleMapsQuery": "Na Pali Coast State Wilderness Park, Kauai, Hawaii, USA",
    "bestTimeToVisit": "May to September for calm seas on boat tours and sunny conditions on the Kalalau Trail",
    "insiderTip": "Book a catamaran tour or doors-off helicopter flight: Nā Pali's 4,000-foot razor-sharp fluted green sea cliffs are inaccessible by automobile.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The Nā Pali Coast on Kauai is renowned for its 4,000-foot corrugated emerald cliffs plunging directly into the azure Pacific Ocean, punctuated by waterfalls and secret beaches."
  },
  {
    "id": "us-27",
    "name": "Great Smoky Mountains Mist & Old Growth",
    "nativeName": "Great Smoky Mountains",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Blue Ridge (North Carolina & Tennessee)",
    "type": "iconic",
    "vibes": [
      "nature"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Biodiversity Hotspot",
      "America's Most Visited Park"
    ],
    "wikiTitle": "Great_Smoky_Mountains_National_Park",
    "googleMapsQuery": "Clingmans Dome, Great Smoky Mountains, USA",
    "bestTimeToVisit": "October for kaleidoscope autumn foliage, or late spring for synchronous fireflies",
    "insiderTip": "Visit Cades Cove at sunrise to spot wild black bears, white-tailed deer, and wild turkeys roaming through the misty valley.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The Great Smoky Mountains National Park is famous for morning blue mists hanging over ancient Appalachian ridges, vibrant wildflowers, and black bears."
  },
  {
    "id": "us-28",
    "name": "Carlsbad Caverns Underground Chambers",
    "nativeName": "Carlsbad Caverns",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Chihuahuan Desert (New Mexico)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Massive Limestone Caverns",
      "Subterranean Wonder"
    ],
    "wikiTitle": "Carlsbad_Caverns_National_Park",
    "googleMapsQuery": "Carlsbad Caverns National Park, New Mexico, USA",
    "bestTimeToVisit": "Summer to witness hundreds of thousands of Brazilian free-tailed bats spiral out of the natural cave entrance at dusk",
    "insiderTip": "Walk down through the Natural Entrance rather than taking the elevator: the steep switchback descent past Bat Cave into the 4,000-foot-long \"Big Room\" is awe-inspiring.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Carved by sulfuric acid dissolving ancient Permian reef limestone, Carlsbad Caverns contains the colossal \"Big Room\" — North America's largest single underground cave chamber."
  },
  {
    "id": "us-29",
    "name": "Kenai Fjords & Resurrection Bay",
    "nativeName": "Kenai Fjords",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Southcentral Alaska (Seward)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Tidewater Glaciers",
      "Marine Wildlife"
    ],
    "wikiTitle": "Kenai_Fjords_National_Park",
    "googleMapsQuery": "Exit Glacier, Kenai Fjords National Park, Alaska, USA",
    "bestTimeToVisit": "June to August on small-ship glacier and wildlife cruises out of Seward",
    "insiderTip": "Watch and listen for white thunder as massive skyscraper-sized ice blocks calve from Aialik Glacier straight into the sea, surrounded by sea otters and puffins.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Kenai Fjords preserves the colossal Harding Icefield and nearly 40 glacial fingers that flow down to carve deep coastal fjords teeming with orcas, humpback whales, and harbor seals."
  },
  {
    "id": "us-30",
    "name": "Mammoth Cave Underground Labyrinth",
    "nativeName": "Mammoth Cave",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Green River Valley (Kentucky)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "history",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Longest Cave on Earth",
      "UNESCO Heritage"
    ],
    "wikiTitle": "Mammoth_Cave_National_Park",
    "googleMapsQuery": "Mammoth Cave National Park, Kentucky, USA",
    "bestTimeToVisit": "Year-round; subterranean temperature stays 54°F (12°C)",
    "insiderTip": "Book the Historic Tour or Domes and Dripstones tour well in advance to walk through colossal Gothic vaults and sandstone passages explored since 4,000 years ago.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "With over 426 miles of surveyed passageways, Mammoth Cave is by far the longest known cave system on Earth, featuring subterranean rivers, grand domes, and historical inscriptions."
  },
  {
    "id": "us-31",
    "name": "Badlands Pinnacles & Fossil Beds",
    "nativeName": "Mako Sica",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Great Plains (South Dakota)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Striped Butte Labyrinth",
      "Fossil Country"
    ],
    "wikiTitle": "Badlands_National_Park",
    "googleMapsQuery": "Badlands National Park, South Dakota, USA",
    "bestTimeToVisit": "Sunrise or sunset when eroded bands of yellow, tan, orange, and purple clay layers ignite with warmth",
    "insiderTip": "Hike the Notch Trail, which features an exciting 50-foot wooden cable ladder climbing up a cliff wall to a dramatic view over the White River Valley.",
    "fallbackImage": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Badlands National Park preserves 244,000 acres of sharply eroded sedimentary buttes, pinnacles, and spires rising abruptly from mixed-grass prairie, containing rich mammal fossil beds."
  },
  {
    "id": "us-32",
    "name": "Crater Lake Deep Blue Caldera",
    "nativeName": "Giiwas (Crater Lake)",
    "country": "usa",
    "countryName": "United States",
    "flag": "🇺🇸",
    "region": "Cascade Range (Oregon)",
    "type": "iconic",
    "vibes": [
      "nature"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Deepest Lake in USA",
      "Pure Blue Water"
    ],
    "wikiTitle": "Crater_Lake",
    "googleMapsQuery": "Crater Lake National Park, Oregon, USA",
    "bestTimeToVisit": "July to September when the Rim Drive is clear of snow and boat tours to Wizard Island operate",
    "insiderTip": "Hike the 1.1-mile Cleetwood Cove trail down to the water for a refreshing plunge into the purest, bluest 55°F glacial volcanic water in the world.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Formed 7,700 years ago by the violent collapse of Mount Mazama, Crater Lake is the deepest lake in the United States (1,943 feet), famous for its startling sapphire-blue purity."
  },
  {
    "id": "gr-1",
    "name": "Santorini Caldera & Oia Village",
    "nativeName": "Σαντορίνη (Οία)",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "South Aegean (Cyclades)",
    "type": "iconic",
    "vibes": [
      "coastal",
      "culture"
    ],
    "vibeLabels": [
      "Coastal & Islands",
      "Caldera Views",
      "Iconic Landmark"
    ],
    "wikiTitle": "Santorini",
    "googleMapsQuery": "Oia, Santorini, Greece",
    "bestTimeToVisit": "May to June or September to October for sunset without mid-summer crowds",
    "insiderTip": "Hike the 10km cliffside caldera trail from Fira to Oia in the late afternoon, arriving just in time for the golden sunset.",
    "fallbackImage": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Santorini is a volcanic island in the southern Aegean Sea celebrated for whitewashed cubic cliff villages, cobalt-blue domes, and dramatic caldera sunsets."
  },
  {
    "id": "gr-2",
    "name": "Meteora Suspended Monasteries",
    "nativeName": "Μετέωρα",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "Thessaly (Kalabaka)",
    "type": "iconic",
    "vibes": [
      "history",
      "nature"
    ],
    "vibeLabels": [
      "History & Heritage",
      "UNESCO World Heritage",
      "Suspended in Air"
    ],
    "wikiTitle": "Meteora",
    "googleMapsQuery": "Meteora, Kalabaka, Greece",
    "bestTimeToVisit": "Spring or Autumn for cool hiking conditions between the sandstone pillars",
    "insiderTip": "Visit the Holy Monastery of Varlaam and Holy Trinity (featured in James Bond) at sunset when the giant rock pinnacles glow deep ochre.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Meteora is a geological wonder of colossal natural sandstone pillars rising from the Thessalian plain, crowned by six active 14th-century Eastern Orthodox monasteries."
  },
  {
    "id": "gr-3",
    "name": "The Acropolis & Parthenon",
    "nativeName": "Ακρόπολη Αθηνών",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "Attica (Athens)",
    "type": "iconic",
    "vibes": [
      "history"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Birthplace of Democracy",
      "Iconic Landmark"
    ],
    "wikiTitle": "Acropolis_of_Athens",
    "googleMapsQuery": "Parthenon, Acropolis of Athens, Greece",
    "bestTimeToVisit": "Early morning (8:00 AM) right as the gates open, before heat and tour groups arrive",
    "insiderTip": "Climb Areopagus Hill (Mars Hill) right outside the exit gate for a breathtaking panorama of the Parthenon and the ancient Agora below.",
    "fallbackImage": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The Acropolis is an ancient citadel perched atop a rocky outcrop above Athens, containing monuments of classical antiquity including the legendary Parthenon temple."
  },
  {
    "id": "gr-4",
    "name": "Navagio Beach (Shipwreck Cove)",
    "nativeName": "Ναυάγιο (Ζάκυνθος)",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "Ionian Islands (Zakynthos)",
    "type": "iconic",
    "vibes": [
      "coastal",
      "nature"
    ],
    "vibeLabels": [
      "Coastal & Islands",
      "Electric Blue Waters",
      "Iconic Cove"
    ],
    "wikiTitle": "Navagio",
    "googleMapsQuery": "Navagio Beach, Zakynthos, Greece",
    "bestTimeToVisit": "Late morning when the sun illuminates the sea into startling neon cyan",
    "insiderTip": "View the cove from the clifftop viewing platform 200 meters above before taking a boat tour into the bay.",
    "fallbackImage": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Navagio Beach is an isolated sandy cove on Zakynthos, enclosed by towering vertical white limestone cliffs with the rusted freightliner wreck MV Panagiotis."
  },
  {
    "id": "gr-5",
    "name": "Delphi Ancient Oracle Sanctuary",
    "nativeName": "Δελφοί",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "Central Greece (Phocis)",
    "type": "iconic",
    "vibes": [
      "history"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Navel of the World",
      "UNESCO Heritage"
    ],
    "wikiTitle": "Delphi",
    "googleMapsQuery": "Ancient Delphi, Greece",
    "bestTimeToVisit": "Spring when wildflowers bloom across the ancient slopes of Mount Parnassus",
    "insiderTip": "Walk down to the Tholos of Delphi at the Sanctuary of Athena Pronaia — its three restored circular Doric columns are among the most photographed in Greece.",
    "fallbackImage": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Regarded by the ancient Greeks as the omphalos (center of the world), Delphi was the sacred sanctuary where the priestess Pythia delivered prophecies from Apollo."
  },
  {
    "id": "gr-6",
    "name": "Elafonisi Pink Sand Beach",
    "nativeName": "Ελαφονήσι (Κρήτη)",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "Crete (Chania)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "coastal",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Pink Sands & Lagoon",
      "Coastal & Islands"
    ],
    "wikiTitle": "Elafonisi",
    "googleMapsQuery": "Elafonisi Beach, Chania, Crete, Greece",
    "bestTimeToVisit": "May to June or late September to October for warm lagoon wading",
    "insiderTip": "Wade across the knee-deep sand spit onto the protected nature reserve islet to escape beach chair areas and find tranquil pink-tinted shell shores.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Located on Crete's southwest tip, Elafonisi is renowned for pastel pink coral sands, shallow crystal lagoons, and protected juniper dune nature reserves."
  },
  {
    "id": "gr-7",
    "name": "Palace of Knossos & Minoan Labyrinth",
    "nativeName": "Κνωσός",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "Crete (Heraklion)",
    "type": "iconic",
    "vibes": [
      "history"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Minoan Civilization",
      "Labyrinth Legend"
    ],
    "wikiTitle": "Knossos",
    "googleMapsQuery": "Knossos Palace, Heraklion, Crete, Greece",
    "bestTimeToVisit": "Spring or late afternoon during autumn",
    "insiderTip": "Pair your visit with the Heraklion Archaeological Museum to see the original \"Prince of the Lilies\" fresco and the enigmatic Phaistos Disc.",
    "fallbackImage": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Knossos is the largest Bronze Age archaeological site on Crete, considered Europe's oldest city and the ceremonial heart of the Minoan civilization."
  },
  {
    "id": "gr-8",
    "name": "Monemvasia Medieval Rock Fortress",
    "nativeName": "Μονεμβασιά",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "Peloponnese (Laconia)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "history",
      "coastal"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Gibraltar of the East",
      "Byzantine Fortress"
    ],
    "wikiTitle": "Monemvasia",
    "googleMapsQuery": "Monemvasia Castle, Laconia, Greece",
    "bestTimeToVisit": "Spring or Autumn; stay overnight inside the medieval stone ramparts",
    "insiderTip": "Hike through the fortress tunnel up to the uninhabited Upper Town and the 12th-century Church of Agia Sofia perched on the sheer cliff edge.",
    "fallbackImage": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Carved out of the side of a massive offshore sea rock and connected to the mainland by a single causeway, Monemvasia is an untouched medieval fortress town."
  },
  {
    "id": "gr-9",
    "name": "Vikos Gorge (Grand Canyon of Greece)",
    "nativeName": "Φαράγγι του Βίκου",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "Epirus (Zagori)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Guinness World Record",
      "Deepest Gorge"
    ],
    "wikiTitle": "Vikos_Gorge",
    "googleMapsQuery": "Vikos Gorge Viewpoint, Zagori, Greece",
    "bestTimeToVisit": "May to October for trekking between stone villages and crystalline river springs",
    "insiderTip": "Stand at the Oxya viewpoint: Guinness World Records lists Vikos as the deepest gorge in the world relative to its width, plunging nearly 1,000 meters.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Vikos Gorge is a monumental canyon in the Pindus Mountains of northern Greece, carving through dramatic limestone cliffs with rare mountain flora and wildlife."
  },
  {
    "id": "gr-10",
    "name": "Mykonos Windmills & Little Venice",
    "nativeName": "Μύκονος",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "South Aegean (Cyclades)",
    "type": "iconic",
    "vibes": [
      "coastal",
      "culture"
    ],
    "vibeLabels": [
      "Coastal & Islands",
      "Cycladic Charm",
      "Iconic Landmark"
    ],
    "wikiTitle": "Mykonos",
    "googleMapsQuery": "Windmills of Mykonos, Greece",
    "bestTimeToVisit": "May or September before high season party crowds",
    "insiderTip": "Grab a table at a waterfront café in Little Venice where medieval sea captains' houses have balconies hanging right over the lapping waves.",
    "fallbackImage": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Famous for 16th-century thatched windmills standing above the sea, maze-like whitewashed alleys, and vibrant nightlife, Mykonos is a jewel of the Cyclades."
  },
  {
    "id": "gr-11",
    "name": "Sarakiniko Lunar Beach (Milos)",
    "nativeName": "Σαρακήνικο (Μήλος)",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "South Aegean (Milos)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "coastal",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Lunar Moonscape",
      "Chalk White Cliffs"
    ],
    "wikiTitle": "Milos",
    "googleMapsQuery": "Sarakiniko Beach, Milos, Greece",
    "bestTimeToVisit": "Sunrise or during a full moon night when bright white volcanic rock glows under moonlight",
    "insiderTip": "Walk the chalky white volcanic bone cliffs sculpted by wind and waves — jumping into the deep sapphire inlet feels like swimming on the Moon.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Sarakiniko is a world-renowned coastal landscape on Milos composed of blinding bone-white volcanic pumice sculpted by Aegean winds into surreal lunar forms."
  },
  {
    "id": "gr-12",
    "name": "Ancient Olympia (Birthplace of the Games)",
    "nativeName": "Αρχαία Ολυμπία",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "Peloponnese (Elis)",
    "type": "iconic",
    "vibes": [
      "history"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Olympic Birthplace",
      "UNESCO Heritage"
    ],
    "wikiTitle": "Olympia,_Greece",
    "googleMapsQuery": "Archaeological Site of Olympia, Greece",
    "bestTimeToVisit": "Spring when wild olive and pine trees shade the ancient stone gymnasium",
    "insiderTip": "Step up to the original stone starting line (balbis) in the 200-meter stadium track and sprint where ancient Olympians competed 2,800 years ago.",
    "fallbackImage": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Olympia is the sacred ancient pan-Hellenic sanctuary where the Olympic Games were held every four years from 776 BC to 393 AD in honor of Zeus."
  },
  {
    "id": "gr-13",
    "name": "Balos Lagoon & Gramvousa",
    "nativeName": "Μπάλος (Κρήτη)",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "Crete (Chania)",
    "type": "iconic",
    "vibes": [
      "coastal",
      "nature"
    ],
    "vibeLabels": [
      "Coastal & Islands",
      "Exotic Lagoon",
      "Wild Beauty"
    ],
    "wikiTitle": "Balos_Lagoon",
    "googleMapsQuery": "Balos Beach, Crete, Greece",
    "bestTimeToVisit": "Early morning before ferry boats arrive from Kissamos port",
    "insiderTip": "Hike the clifftop trail down to the beach: the panoramic overlook from above reveals striking swirls of turquoise, peacock blue, and pink sand.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Balos is famous for its wild exotic lagoon where translucent turquoise water laps between the Tigani peninsula and the Cretan mainland with white and pink shell sands."
  },
  {
    "id": "gr-14",
    "name": "Temple of Poseidon at Cape Sounion",
    "nativeName": "Ναός του Ποσειδώνα (Σούνιο)",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "Attica (Lavreotiki)",
    "type": "iconic",
    "vibes": [
      "history",
      "coastal"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Sunset Sanctuary",
      "Ancient Temple"
    ],
    "wikiTitle": "Cape_Sounion",
    "googleMapsQuery": "Temple of Poseidon, Cape Sounion, Greece",
    "bestTimeToVisit": "One hour before sunset; watch the sun sink into the Aegean behind Doric marble columns",
    "insiderTip": "Look closely at the marble pillars to find the famous graffiti carved by English romantic poet Lord Byron in 1810.",
    "fallbackImage": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Perched 65 meters above the sea at the southern tip of the Attica peninsula, the 5th-century BC Temple of Poseidon guided ancient sailors returning home to Athens."
  },
  {
    "id": "gr-15",
    "name": "Melissani Underground Cave Lake",
    "nativeName": "Λίμνη Μελισσάνη (Κεφαλονιά)",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "Ionian Islands (Kefalonia)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Sunlit Grotto",
      "Nymph Sanctuary"
    ],
    "wikiTitle": "Melissani_Cave",
    "googleMapsQuery": "Melissani Cave, Kefalonia, Greece",
    "bestTimeToVisit": "Midday (11:30 AM to 1:30 PM) when sunlight streams through the collapsed roof opening",
    "insiderTip": "Take a small wooden rowboat tour; at high noon the crystal water is so transparent that boats appear to float mid-air on blue light.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Melissani is a karst cave lake on Kefalonia surrounded by lush forest; its roof collapsed millennia ago, creating a natural skylight illuminating indigo waters."
  },
  {
    "id": "gr-16",
    "name": "Rhodes Medieval Old Town",
    "nativeName": "Μεσαιωνική Πόλη της Ρόδου",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "South Aegean (Rhodes)",
    "type": "iconic",
    "vibes": [
      "history"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Knights Hospitaller",
      "UNESCO Heritage"
    ],
    "wikiTitle": "Rhodes_(city)",
    "googleMapsQuery": "Palace of the Grand Master of the Knights of Rhodes, Greece",
    "bestTimeToVisit": "May to June or September to October; wander the stone Street of the Knights at dusk",
    "insiderTip": "Tour the Palace of the Grand Master with its Gothic crenellated towers and mosaic floors brought from the island of Kos.",
    "fallbackImage": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Built by the Order of St. John of Jerusalem in the 14th century, the Old Town of Rhodes is one of the best-preserved medieval fortified settlements in Europe."
  },
  {
    "id": "gr-17",
    "name": "Hydra Car-Free Amphitheater Island",
    "nativeName": "Ύδρα",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "Attica (Saronic Gulf)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "coastal",
      "culture"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Zero Motor Vehicles",
      "Bohemian Haven"
    ],
    "wikiTitle": "Hydra_(island)",
    "googleMapsQuery": "Hydra Port, Greece",
    "bestTimeToVisit": "Spring or Autumn; easily reachable on a 90-minute hydrofoil ferry from Piraeus/Athens",
    "insiderTip": "There are no cars or motorbikes allowed on the entire island — transport is strictly by foot, boat, or pack donkeys through pristine cobblestone lanes.",
    "fallbackImage": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Hydra is a preserved Saronic island with 18th-century stone mansions tiered around a marble horseshoe harbor, famed for having zero motor vehicles and inspiring artists like Leonard Cohen."
  },
  {
    "id": "gr-18",
    "name": "Mount Olympus Throne of Zeus",
    "nativeName": "Όλυμπος",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "Macedonia & Thessaly",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Mythical Realm",
      "Highest Peak in Greece"
    ],
    "wikiTitle": "Mount_Olympus",
    "googleMapsQuery": "Mount Olympus National Park, Litochoro, Greece",
    "bestTimeToVisit": "June to September for summit treks to Mytikas peak (2,917m)",
    "insiderTip": "Hike into the Enipeas Gorge starting from the mountain town of Litochoro to see wooden footbridges and the Monastery of St. Dionysios.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Rising directly from the Aegean Sea to 2,917 meters, Mount Olympus is Greece's highest peak, revered in Greek mythology as the home of the Twelve Olympian Gods."
  },
  {
    "id": "gr-19",
    "name": "Symi Island Pastel Harbor",
    "nativeName": "Σύμη",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "Dodecanese",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "coastal",
      "culture"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Neoclassical Pastel",
      "Sponge Diving Port"
    ],
    "wikiTitle": "Symi",
    "googleMapsQuery": "Gialos Port, Symi, Greece",
    "bestTimeToVisit": "May to June or September; arrive by passenger ferry from Rhodes",
    "insiderTip": "Climb the 500 stone steps of the \"Kali Strata\" connecting the port to the upper Chorio town for sweeping views over ochre and terracotta mansions.",
    "fallbackImage": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Symi is celebrated for Gialos harbor, where 19th-century neoclassical Italianate mansions painted in butter-yellow, terracotta, and indigo cascade down rocky slopes."
  },
  {
    "id": "gr-20",
    "name": "Epidaurus Ancient Acoustic Theatre",
    "nativeName": "Επίδαυρος",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "Peloponnese (Argolis)",
    "type": "iconic",
    "vibes": [
      "history"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Perfect Acoustics",
      "Ancient Greek Theatre"
    ],
    "wikiTitle": "Epidaurus",
    "googleMapsQuery": "Ancient Theatre of Epidaurus, Greece",
    "bestTimeToVisit": "Summer during the Athens & Epidaurus Festival for live ancient drama performances",
    "insiderTip": "Drop a small coin or strike a match on the central circular orchestra stone: the acoustic engineering allows someone in the very top 55th row to hear it clearly!",
    "fallbackImage": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Constructed in the 4th century BC, the Theatre of Epidaurus is world-renowned for its mathematical symmetry and acoustic clarity accommodating 14,000 spectators."
  },
  {
    "id": "gr-21",
    "name": "Corfu Venetian Old Fortress & Spianada",
    "nativeName": "Κέρκυρα",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "Ionian Islands (Corfu)",
    "type": "iconic",
    "vibes": [
      "history",
      "culture"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Venetian Splendor",
      "UNESCO Heritage"
    ],
    "wikiTitle": "Corfu",
    "googleMapsQuery": "Old Fortress, Corfu, Greece",
    "bestTimeToVisit": "Spring during Orthodox Easter festivities or Autumn for pleasant Ionian strolls",
    "insiderTip": "Walk the Liston promenade inspired by Paris's Rue de Rivoli and sample local kumquat liqueur and ginger beer (tsitsibira).",
    "fallbackImage": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Corfu Town is framed by two massive Venetian coastal fortresses, featuring French neoclassical colonnades, British cricket lawns, and winding Italian-style cantonades."
  },
  {
    "id": "gr-22",
    "name": "Mystras Ghost Byzantine Capital",
    "nativeName": "Μυστράς",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "Peloponnese (Sparta)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "history"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Byzantine Empire",
      "Ruined Citadel"
    ],
    "wikiTitle": "Mystras",
    "googleMapsQuery": "Archaeological Site of Mystras, Sparta, Greece",
    "bestTimeToVisit": "Morning during Spring or Autumn when hills are blanketed with poppies and cypress",
    "insiderTip": "Explore the Monastery of Pantanassa, the only continuously inhabited building in the ruined citadel, where nuns still welcome visitors with homemade loukoumi.",
    "fallbackImage": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Mystras was the fortified capital of the Byzantine Despotate of the Morea in the 14th and 15th centuries, crowning Mount Taygetos with churches and fresco murals."
  },
  {
    "id": "gr-23",
    "name": "Nafplio Romantic Seaport Citadel",
    "nativeName": "Ναύπλιο",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "Peloponnese (Argolis)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "coastal",
      "history"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "First Capital of Greece",
      "Venetian Forts"
    ],
    "wikiTitle": "Nafplio",
    "googleMapsQuery": "Palamidi Castle, Nafplio, Greece",
    "bestTimeToVisit": "Year-round; only 2 hours drive from Athens with bougainvillea-lined alleys",
    "insiderTip": "Climb the 999 stone steps up to the Palamidi Fortress for an awe-inspiring view over the Argolic Gulf and the Bourtzi island water castle.",
    "fallbackImage": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Nafplio was the first capital of modern Greece from 1829 to 1834, renowned for Venetian fortresses, neoclassical squares, and the castle island of Bourtzi."
  },
  {
    "id": "gr-24",
    "name": "Voidokilia Semicircular Cove",
    "nativeName": "Βοϊδοκοιλιά",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "Peloponnese (Messinia)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "coastal",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Greek Letter Omega",
      "Pristine Beach"
    ],
    "wikiTitle": "Voidokilia_beach",
    "googleMapsQuery": "Voidokilia Beach, Pylos, Greece",
    "bestTimeToVisit": "June or September for tranquil swimming in the sheltered circular bay",
    "insiderTip": "Hike up to the ruins of Old Navarino Castle (Palaiokastro) on the bluffs to see the perfect symmetrical Greek letter Omega (Ω) outline of the beach.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Voidokilia is an extraordinary natural beach shaped like the Greek letter Omega (Ω), nestled beside the Gialova lagoon bird sanctuary in southwest Peloponnese."
  },
  {
    "id": "gr-25",
    "name": "Lindos Acropolis & St. Paul’s Bay",
    "nativeName": "Λίνδος (Ρόδος)",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "South Aegean (Rhodes)",
    "type": "iconic",
    "vibes": [
      "history",
      "coastal"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Coastal & Islands",
      "Doric Temple & Sea"
    ],
    "wikiTitle": "Lindos",
    "googleMapsQuery": "Acropolis of Lindos, Rhodes, Greece",
    "bestTimeToVisit": "Early morning to climb the 116-meter rock summit before midday heat",
    "insiderTip": "Look down from the ancient Temple of Athena Lindia to spot the heart-shaped turquoise cove of Saint Paul's Bay nestled below the cliffs.",
    "fallbackImage": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Lindos combines a cliffside ancient citadel holding the 4th-century BC Temple of Athena with sugar-cube whitewashed alleys and enclosed turquoise swimming bays."
  },
  {
    "id": "gr-26",
    "name": "Samaria Gorge Trek",
    "nativeName": "Φαράγγι της Σαμαριάς (Κρήτη)",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "Crete (White Mountains)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Epic 16km Trek",
      "White Mountains"
    ],
    "wikiTitle": "Samari%C3%A1_Gorge",
    "googleMapsQuery": "Samaria Gorge, Crete, Greece",
    "bestTimeToVisit": "May to October (the national park closes during winter runoff)",
    "insiderTip": "At the narrowest point (\"Iron Gates\"), the sheer vertical canyon walls soar 300 meters high with only 4 meters separating them.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Samaria Gorge is a 16-kilometer trek through the White Mountains of western Crete, descending from the Omalos plateau through pine forests down to the Libyan Sea."
  },
  {
    "id": "gr-27",
    "name": "Naxos Portara & Marble Quarries",
    "nativeName": "Πορτάρα (Νάξος)",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "South Aegean (Cyclades)",
    "type": "iconic",
    "vibes": [
      "history",
      "coastal"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Ancient Temple Gate",
      "Sunset Icon"
    ],
    "wikiTitle": "Naxos",
    "googleMapsQuery": "Portara, Naxos, Greece",
    "bestTimeToVisit": "Sunset when golden hour shines through the massive marble portal frame",
    "insiderTip": "The 2,500-year-old marble doorway was built for an unfinished colossal temple of Apollo and stands on the islet of Palatia connected by a causeway.",
    "fallbackImage": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Naxos is the largest of the Cyclades islands, famous for fertile valleys, Venetian castle towers, mountain villages, and the monumental 6th-century BC Portara marble gateway."
  },
  {
    "id": "gr-28",
    "name": "Zagori Stone Villages & Arched Bridges",
    "nativeName": "Ζαγοροχώρια",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "Epirus (Ioannina)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "history"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "UNESCO World Heritage",
      "Stone Architecture"
    ],
    "wikiTitle": "Zagori",
    "googleMapsQuery": "Bridge of Kokkoris, Zagori, Greece",
    "bestTimeToVisit": "Autumn for fiery golden mountain foliage and traditional stone guesthouses",
    "insiderTip": "Seek out the Bridge of Kokkoris and the three-arched Plakidas Bridge — handcrafted from local slate without mortar by master stonemasons in the 1800s.",
    "fallbackImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Zagori is a cluster of 46 traditional slate-roof stone villages tucked in the Pindus mountains, linked by historic arched bridges and mountain staircases."
  },
  {
    "id": "gr-29",
    "name": "Spinalonga Leper Colony Fortress",
    "nativeName": "Σπιναλόγκα (Κρήτη)",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "Crete (Elounda)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "history",
      "coastal"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Venetian Outpost",
      "Haunting History"
    ],
    "wikiTitle": "Spinalonga",
    "googleMapsQuery": "Spinalonga, Elounda, Crete, Greece",
    "bestTimeToVisit": "Spring or Autumn morning via small wooden boat from Plaka or Elounda",
    "insiderTip": "Famous as the setting of Victoria Hislop's bestselling novel \"The Island\", this Venetian sea fortress served as Europe's last active leper colony until 1957.",
    "fallbackImage": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Spinalonga is a rocky island fortress in Mirabello Bay, boasting formidable Venetian fortifications and historic stone quarters that housed a leper colony until 1957."
  },
  {
    "id": "gr-30",
    "name": "Parga Emerald Coast & Castle",
    "nativeName": "Πάργα",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "Epirus (Preveza)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "coastal"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Ionian Gem",
      "Venetian Castle"
    ],
    "wikiTitle": "Parga",
    "googleMapsQuery": "Parga Castle, Greece",
    "bestTimeToVisit": "June or September for calm turquoise waters and fresh seafood",
    "insiderTip": "Climb through winding lanes to the Venetian Castle overlooking Krioneri beach and take a water taxi to the secluded pebble cove of Sarakiniko.",
    "fallbackImage": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Parga is an idyllic amphitheater town on the Ionian coast, featuring colorful Venetian houses, olive-covered hills, sea grottos, and clear sapphire waters."
  },
  {
    "id": "gr-31",
    "name": "Simos Dunes Beach (Elafonisos Island)",
    "nativeName": "Παραλία Σίμος (Ελαφόνησος)",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "Peloponnese (Laconia)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "coastal"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Twin Crescent Bays",
      "Crystal Dunes"
    ],
    "wikiTitle": "Elafonisos",
    "googleMapsQuery": "Simos Beach, Elafonisos, Greece",
    "bestTimeToVisit": "June or September; short 10-minute ferry from Pounta port",
    "insiderTip": "The beach features two back-to-back crescent bays separated by a thin strip of white sand and cedar-covered dunes — one of the clearest swimming waters in Europe.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Simos Beach is celebrated for its dual crescent bays of powdery white sand and turquoise shallows on the tranquil island of Elafonisos off the Peloponnese."
  },
  {
    "id": "gr-32",
    "name": "Hosios Loukas Byzantine Monastery",
    "nativeName": "Μονή Οσίου Λουκά",
    "country": "greece",
    "countryName": "Greece",
    "flag": "🇬🇷",
    "region": "Central Greece (Boeotia)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "history"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Middle Byzantine Masterpiece",
      "Golden Mosaics"
    ],
    "wikiTitle": "Hosios_Loukas",
    "googleMapsQuery": "Hosios Loukas Monastery, Distomo, Greece",
    "bestTimeToVisit": "Combine with a day trip to Delphi on clear sunny mornings",
    "insiderTip": "Look up inside the 11th-century Katholikon dome to admire the golden mosaic portrait of Christ Pantocrator, preserved in pristine detail for 1,000 years.",
    "fallbackImage": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Set on the slopes of Mount Helicon, Hosios Loukas is one of the most important monuments of Middle Byzantine architecture, famed for gold-ground mosaics and crypt frescoes."
  },
  {
    "id": "es-1",
    "name": "La Sagrada Família",
    "nativeName": "Basílica de la Sagrada Família",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Catalonia (Barcelona)",
    "type": "iconic",
    "vibes": [
      "culture",
      "history"
    ],
    "vibeLabels": [
      "Food & Culture",
      "Gaudí Architecture",
      "Iconic Landmark"
    ],
    "wikiTitle": "Sagrada_Fam%C3%ADlia",
    "googleMapsQuery": "La Sagrada Familia, Barcelona, Spain",
    "bestTimeToVisit": "Late afternoon when the stained glass windows cast fiery crimson and amber light across the nave",
    "insiderTip": "Book tower access tickets for the Nativity facade for sweeping views of Barcelona all the way to the Mediterranean.",
    "fallbackImage": "https://images.unsplash.com/photo-1583779457094-0cef1cad7b9e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Antoni Gaudí's magnum opus, this monumental basilica blends Art Nouveau, Catalan Modernisme, and organic Gothic forms into soaring stone tree canopies."
  },
  {
    "id": "es-2",
    "name": "The Alhambra & Generalife",
    "nativeName": "Alhambra y Generalife",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Andalusia (Granada)",
    "type": "iconic",
    "vibes": [
      "history",
      "culture"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Moorish Palace",
      "UNESCO World Heritage"
    ],
    "wikiTitle": "Alhambra",
    "googleMapsQuery": "The Alhambra, Granada, Spain",
    "bestTimeToVisit": "Morning for the Nasrid Palaces, followed by a late afternoon stroll through the Generalife gardens",
    "insiderTip": "Cross the Darro river up to Mirador de San Nicolás in the historic Albaicín quarter for the legendary sunset view of the palace backed by Sierra Nevada snow peaks.",
    "fallbackImage": "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A sublime 13th-century Moorish fortress and palace complex boasting intricate arabesque plasterwork, serene courtyard reflecting pools, and fragrant terraced royal gardens."
  },
  {
    "id": "es-3",
    "name": "Park Güell",
    "nativeName": "Parc Güell",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Catalonia (Barcelona)",
    "type": "iconic",
    "vibes": [
      "culture"
    ],
    "vibeLabels": [
      "Food & Culture",
      "Mosaic Fantasies",
      "City Views"
    ],
    "wikiTitle": "Park_G%C3%BCell",
    "googleMapsQuery": "Park Guell, Barcelona, Spain",
    "bestTimeToVisit": "Early morning right at opening time to photograph the mosaic salamander without crowds",
    "insiderTip": "Sit along the undulating serpentine bench tiled with trencadís ceramic shards to watch the sun rise over the Barcelona skyline.",
    "fallbackImage": "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A whimsical public park system designed by Antoni Gaudí on Carmel Hill, famous for gingerbread gatehouses, viaducts of stone columns, and panoramic city vistas."
  },
  {
    "id": "es-4",
    "name": "Plaza de España (Seville)",
    "nativeName": "Plaza de España",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Andalusia (Seville)",
    "type": "iconic",
    "vibes": [
      "culture",
      "history"
    ],
    "vibeLabels": [
      "Food & Culture",
      "Renaissance Revival",
      "Iconic Landmark"
    ],
    "wikiTitle": "Plaza_de_Espa%C3%B1a,_Seville",
    "googleMapsQuery": "Plaza de Espana, Seville, Spain",
    "bestTimeToVisit": "Late afternoon into sunset when the tiled alcoves glow gold and rowboats glide along the moat",
    "insiderTip": "Find the tiled alcove dedicated to your favorite Spanish province, and catch impromptu flamenco performers under the grand porticos.",
    "fallbackImage": "https://images.unsplash.com/photo-1559564484-e48b3e040ff4?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Built for the 1929 Ibero-American Exposition, this colossal semi-circular plaza combines Neo-Mudéjar and Renaissance architecture with tiled provincial alcoves and bridges."
  },
  {
    "id": "es-5",
    "name": "Mosque–Cathedral of Córdoba",
    "nativeName": "Mezquita-Catedral de Córdoba",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Andalusia (Córdoba)",
    "type": "iconic",
    "vibes": [
      "history"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Double Moorish Arches",
      "UNESCO World Heritage"
    ],
    "wikiTitle": "Mosque%E2%80%93Cathedral_of_C%C3%B3rdoba",
    "googleMapsQuery": "Mezquita de Cordoba, Spain",
    "bestTimeToVisit": "Early morning (between 8:30-9:30 AM) for tranquil contemplation among the candy-striped arches",
    "insiderTip": "Walk across the ancient 1st-century Roman Bridge at dusk for a postcard view of the illuminated Mezquita reflected in the Guadalquivir river.",
    "fallbackImage": "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "An extraordinary forest of 856 red-and-white double jasper columns and horseshoe arches, symbolizing the pinnacle of Islamic architecture in the Umayyad Caliphate."
  },
  {
    "id": "es-6",
    "name": "Puente Nuevo of Ronda",
    "nativeName": "Puente Nuevo (Ronda)",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Andalusia (Málaga)",
    "type": "iconic",
    "vibes": [
      "nature",
      "history"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Sheer Chasm",
      "Spectacular Bridges"
    ],
    "wikiTitle": "Puente_Nuevo",
    "googleMapsQuery": "Puente Nuevo, Ronda, Spain",
    "bestTimeToVisit": "Spring or Autumn afternoons when the gorge shadows create dramatic photographic contrast",
    "insiderTip": "Hike the Camino de los Molinos trail down into the base of El Tajo gorge for the dizzying upward angle of the 120-meter stone masonry bridge.",
    "fallbackImage": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A staggering 18th-century stone arch bridge spanning the 120-meter-deep El Tajo gorge, connecting the historic Moorish quarter with the modern town of Ronda."
  },
  {
    "id": "es-7",
    "name": "El Caminito del Rey",
    "nativeName": "El Caminito del Rey",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Andalusia (Málaga)",
    "type": "iconic",
    "vibes": [
      "adventure",
      "nature"
    ],
    "vibeLabels": [
      "Adventure & Wild",
      "Clifftop Boardwalk",
      "Adrenaline Rush"
    ],
    "wikiTitle": "Caminito_del_Rey",
    "googleMapsQuery": "Caminito del Rey, Ardales, Spain",
    "bestTimeToVisit": "Spring or Autumn morning before midday southern Spanish heat kicks in",
    "insiderTip": "Book tickets months in advance; the suspension bridge cross at the very end over the Gaitanes Gorge suspended 100 meters up is an unforgettable thrill.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Once dubbed the world's most dangerous path, this cliffside aerial walkway hangs 100 meters above the Guadalhorce river pinned directly to sheer limestone canyon walls."
  },
  {
    "id": "es-8",
    "name": "Historic City of Toledo",
    "nativeName": "Ciudad Histórica de Toledo",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Castile-La Mancha (Toledo)",
    "type": "iconic",
    "vibes": [
      "history"
    ],
    "vibeLabels": [
      "History & Heritage",
      "City of Three Cultures",
      "UNESCO World Heritage"
    ],
    "wikiTitle": "Toledo,_Spain",
    "googleMapsQuery": "Toledo Old Town, Spain",
    "bestTimeToVisit": "Mid-week in Spring or Autumn; stay overnight after day-trippers return to Madrid",
    "insiderTip": "Head to Mirador del Valle across the Tagus gorge at dusk to see the Alcázar and Gothic Cathedral lit against the purple Spanish sky, just like El Greco painted it.",
    "fallbackImage": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The medieval former capital of Spain, known as the \"City of Three Cultures\" for centuries of peaceful co-existence between Christian, Muslim, and Jewish communities."
  },
  {
    "id": "es-9",
    "name": "San Sebastián & La Concha Bay",
    "nativeName": "Donostia / San Sebastián",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Basque Country (Gipuzkoa)",
    "type": "iconic",
    "vibes": [
      "culture",
      "coastal"
    ],
    "vibeLabels": [
      "Food & Culture",
      "Michelin Capital",
      "Pintxos Bars"
    ],
    "wikiTitle": "San_Sebasti%C3%A1n",
    "googleMapsQuery": "La Concha Beach, San Sebastian, Spain",
    "bestTimeToVisit": "September for pleasant ocean swimming temperatures and the world-famous Film Festival",
    "insiderTip": "Do a pintxo crawl through the cobblestone Parte Vieja — order gilda skewers, seared foie gras, and txakoli wine poured high from the bottle.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The culinary jewel of northern Spain, renowned for its crescent-shaped La Concha bay beach, Belle Époque promenade, and unmatched density of world-class gastronomy."
  },
  {
    "id": "es-10",
    "name": "Cathedral of Santiago de Compostela",
    "nativeName": "Catedral de Santiago de Compostela",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Galicia (A Coruña)",
    "type": "iconic",
    "vibes": [
      "history",
      "culture"
    ],
    "vibeLabels": [
      "History & Heritage",
      "El Camino Destination",
      "Baroque Splendor"
    ],
    "wikiTitle": "Santiago_de_Compostela_Cathedral",
    "googleMapsQuery": "Santiago de Compostela Cathedral, Spain",
    "bestTimeToVisit": "Spring or Autumn to witness weary pilgrims finishing the centuries-old Camino walk",
    "insiderTip": "Attend the Pilgrim's Mass to witness the colossal Botafumeiro silver censer swinging across the cathedral transept at breathtaking speeds.",
    "fallbackImage": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The sacred endpoint of the Camino de Santiago pilgrimage routes, this magnificent Romanesque-Baroque cathedral enshrines the revered tomb of Saint James the Apostle."
  },
  {
    "id": "es-11",
    "name": "Roman Aqueduct of Segovia",
    "nativeName": "Acueducto de Segovia",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Castile and León (Segovia)",
    "type": "iconic",
    "vibes": [
      "history"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Roman Engineering",
      "Mortarless Granite"
    ],
    "wikiTitle": "Aqueduct_of_Segovia",
    "googleMapsQuery": "Aqueduct of Segovia, Spain",
    "bestTimeToVisit": "Autumn when roasted suckling pig (cochinillo) season is at its peak in local taverns",
    "insiderTip": "Notice that its 167 two-tiered granite arches stand purely on gravity and precision stonework without a single drop of mortar since the 1st century AD.",
    "fallbackImage": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "One of the best-preserved Roman monuments on the Iberian Peninsula, soaring 28 meters high over Plaza del Azoguejo with un-mortared Guadarrama granite blocks."
  },
  {
    "id": "es-12",
    "name": "Mount Teide & Volcanic Caldera",
    "nativeName": "Pico del Teide (Tenerife)",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Canary Islands (Tenerife)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Highest Spanish Peak",
      "Stargazing Reserve"
    ],
    "wikiTitle": "Mount_Teide",
    "googleMapsQuery": "Mount Teide, Santa Cruz de Tenerife, Spain",
    "bestTimeToVisit": "Late spring when the rare red Tajinaste flower blooms across the volcanic badlands",
    "insiderTip": "Teide is a certified Starlight Tourist Destination; book an evening stargazing tour to view constellations above a sea of cloud inversion.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Spain's highest peak at 3,715 meters, Mount Teide is a colossal active volcano surrounded by Martian cinder plains, obsidian flows, and bizarre rock towers."
  },
  {
    "id": "es-13",
    "name": "Casa Batlló",
    "nativeName": "Casa Batlló",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Catalonia (Barcelona)",
    "type": "iconic",
    "vibes": [
      "culture"
    ],
    "vibeLabels": [
      "Food & Culture",
      "Modernisme Masterpiece",
      "Dragon Spine Roof"
    ],
    "wikiTitle": "Casa_Batll%C3%B3",
    "googleMapsQuery": "Casa Batllo, Passeig de Gracia, Barcelona, Spain",
    "bestTimeToVisit": "Early evening during summer when rooftop concert sessions illuminate the arched roof",
    "insiderTip": "Examine the roofline: Gaudí sculpted it to resemble the scales of a slain dragon, with Saint George's lance represented by the four-armed cross tower.",
    "fallbackImage": "https://images.unsplash.com/photo-1583779457094-0cef1cad7b9e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A poetic fantasy on Barcelona's Passeig de Gràcia featuring iridescent ceramic mosaics, bone-like stone columns, and an undulating dragon-back roof."
  },
  {
    "id": "es-14",
    "name": "Hanging Houses of Cuenca",
    "nativeName": "Casas Colgadas (Cuenca)",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Castile-La Mancha (Cuenca)",
    "type": "iconic",
    "vibes": [
      "history",
      "culture"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Hanging Balconies",
      "UNESCO World Heritage"
    ],
    "wikiTitle": "Casas_Colgadas",
    "googleMapsQuery": "Casas Colgadas, Cuenca, Spain",
    "bestTimeToVisit": "Autumn for cool, clear canyon views and golden poplar trees along the river",
    "insiderTip": "Cross the San Pablo iron footbridge for the most dizzying vantage of the wooden cantilevered balconies jutting out over the Huécar gorge.",
    "fallbackImage": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Centuries-old 15th-century cliff houses perched daringly over the sheer limestone cliffs of the Huécar river gorge, now home to Spain's Museum of Spanish Abstract Art."
  },
  {
    "id": "es-15",
    "name": "Bardenas Reales Badlands",
    "nativeName": "Parque Natural de las Bardenas Reales",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Navarre (Tudela)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Desert Badlands",
      "Game of Thrones Set"
    ],
    "wikiTitle": "Bardenas_Reales",
    "googleMapsQuery": "Castildetierra, Bardenas Reales, Spain",
    "bestTimeToVisit": "October to April when temperatures are cool; avoid midday summer heat",
    "insiderTip": "Photograph the iconic Castildetierra chimney pinnacle at golden hour — this semi-desert served as the Dothraki Sea in Game of Thrones.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A 42,000-hectare UNESCO Biosphere Reserve in southeastern Navarre displaying dramatic sandstone formations, eroded plateaus, and lunar desert canyons."
  },
  {
    "id": "es-16",
    "name": "Formentera & Playa de Ses Illetes",
    "nativeName": "Platja de ses Illetes (Formentera)",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Balearic Islands (Formentera)",
    "type": "iconic",
    "vibes": [
      "coastal",
      "nature"
    ],
    "vibeLabels": [
      "Coastal & Islands",
      "Caribbean of the Med",
      "White Sand Spit"
    ],
    "wikiTitle": "Formentera",
    "googleMapsQuery": "Playa de Ses Illetes, Formentera, Spain",
    "bestTimeToVisit": "June or September when the water is crystal warm and bicycle trails are peaceful",
    "insiderTip": "Rent an e-bike or vintage scooter at the ferry port; Posidonia oceanica seagrass meadows filter the waters into brilliant turquoise glass.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The most tranquil of the Balearic Islands, famous for pink-tinged white sand dunes, turquoise shallow sandbanks, and laid-back bohemian beach chiringuitos."
  },
  {
    "id": "es-17",
    "name": "Royal Alcázar of Seville",
    "nativeName": "Real Alcázar de Sevilla",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Andalusia (Seville)",
    "type": "iconic",
    "vibes": [
      "history",
      "culture"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Mudéjar Masterpiece",
      "Royal Palace"
    ],
    "wikiTitle": "Alc%C3%A1zar_of_Seville",
    "googleMapsQuery": "Royal Alcazar of Seville, Spain",
    "bestTimeToVisit": "First entry slot in the morning to explore the Courtyard of the Maidens peacefully",
    "insiderTip": "Descend into the underground Baths of Lady María de Padilla, where ribbed Gothic vaults reflect in a tranquil underground pool.",
    "fallbackImage": "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The oldest active royal palace in Europe, blending exquisite Mudéjar plasterwork, geometric azulejo tiles, and lush palm-filled courtyard gardens."
  },
  {
    "id": "es-18",
    "name": "Montserrat Mountain Sanctuary",
    "nativeName": "Monestir de Montserrat",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Catalonia (Monistrol de Montserrat)",
    "type": "iconic",
    "vibes": [
      "nature",
      "history"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Saw-toothed Peaks",
      "Benedictine Abbey"
    ],
    "wikiTitle": "Santa_Maria_de_Montserrat_Abbey",
    "googleMapsQuery": "Santa Maria de Montserrat Abbey, Spain",
    "bestTimeToVisit": "Midday to hear the famous Escolania Boys' Choir perform inside the basilica at 1:00 PM",
    "insiderTip": "Take the Sant Joan funicular to the mountain crest and hike out to Sant Jeroni, the highest summit in Catalonia, for views reaching Mallorca.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A Benedictine mountain monastery nestled high amidst fantastical serrated rock pinnacles, housing the revered 12th-century Black Madonna statue."
  },
  {
    "id": "es-19",
    "name": "Picos de Europa & Lakes of Covadonga",
    "nativeName": "Lagos de Covadonga (Picos de Europa)",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Asturias (Cangas de Onís)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Glacial Lakes",
      "Limestone Peaks"
    ],
    "wikiTitle": "Picos_de_Europa",
    "googleMapsQuery": "Lakes of Covadonga, Asturias, Spain",
    "bestTimeToVisit": "Summer mornings before afternoon mist rolls across the mountain pastures",
    "insiderTip": "Sample local Cabrales blue cheese aged in damp limestone caves, and visit the Holy Cave shrine carved into the waterfall cliff below.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A dramatic alpine mountain range in northern Spain characterized by dramatic gorges, emerald pastures with grazing cattle, and twin glacial lakes."
  },
  {
    "id": "es-20",
    "name": "Cadaqués & Cap de Creus",
    "nativeName": "Cadaqués (Costa Brava)",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Catalonia (Girona)",
    "type": "iconic",
    "vibes": [
      "coastal",
      "culture"
    ],
    "vibeLabels": [
      "Coastal & Islands",
      "Dalí Coastline",
      "White Fishing Village"
    ],
    "wikiTitle": "Cadaqu%C3%A9s",
    "googleMapsQuery": "Cadaques, Girona, Spain",
    "bestTimeToVisit": "May or September when the Costa Brava coves are peaceful and wild herbs scent the wind",
    "insiderTip": "Walk along the seaside path to Portlligat to visit Salvador Dalí's whimsical labyrinthine house museum where he lived and painted.",
    "fallbackImage": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A pristine whitewashed fishing village tucked behind the jagged Cap de Creus peninsula, forever immortalized by the surrealist genius of Salvador Dalí."
  },
  {
    "id": "es-21",
    "name": "Royal Palace of Madrid",
    "nativeName": "Palacio Real de Madrid",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Community of Madrid (Madrid)",
    "type": "iconic",
    "vibes": [
      "history",
      "culture"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Royal Grandeur",
      "Largest Western Palace"
    ],
    "wikiTitle": "Royal_Palace_of_Madrid",
    "googleMapsQuery": "Royal Palace of Madrid, Spain",
    "bestTimeToVisit": "Wednesday or Saturday morning to catch the ceremonial changing of the guard",
    "insiderTip": "Stroll through the neoclassical Sabatini Gardens right below the north facade for tranquil reflections in the central fountain pond.",
    "fallbackImage": "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The largest functioning royal palace in Western Europe with over 3,400 rooms, adorned with frescoes by Tiepolo and masterworks by Caravaggio and Goya."
  },
  {
    "id": "es-22",
    "name": "Albarracín Medieval Fortified Village",
    "nativeName": "Albarracín (Teruel)",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Aragon (Teruel)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "history"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Pink Stone Citadel",
      "Most Beautiful Village"
    ],
    "wikiTitle": "Albarrac%C3%ADn",
    "googleMapsQuery": "Albarracin, Teruel, Spain",
    "bestTimeToVisit": "October when autumn foliage lines the Guadalaviar river gorge",
    "insiderTip": "Climb the ancient stone battlements crawling up the barren crest of the hill for a fairy-tale view over pink-plaster overhang houses.",
    "fallbackImage": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Regularly voted Spain's most picturesque historic town, Albarracín is perched on a jagged cliff bend with pink-red timbered houses and winding fortress walls."
  },
  {
    "id": "es-23",
    "name": "Dalt Vila Citadel (Ibiza Old Town)",
    "nativeName": "Dalt Vila (Eivissa)",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Balearic Islands (Ibiza)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "history",
      "coastal"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "UNESCO Renaissance Fort",
      "Mediterranean Views"
    ],
    "wikiTitle": "Ibiza_(town)",
    "googleMapsQuery": "Dalt Vila, Ibiza, Spain",
    "bestTimeToVisit": "Twilight when cobblestone alleys illuminate and romantic outdoor candlelit bistros open",
    "insiderTip": "Walk up through the massive Portal de ses Taules ramp and stand on the high bastion for views over the yacht harbor to Formentera.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A heavily fortified ancient citadel rising above Ibiza harbor, boasting Renaissance bastion ramparts, cobbled labyrinths, and 2,500 years of Mediterranean maritime history."
  },
  {
    "id": "es-24",
    "name": "Setenil de las Bodegas Cave Town",
    "nativeName": "Setenil de las Bodegas",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Andalusia (Cádiz)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "history"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Under the Rocks",
      "Pueblo Blanco"
    ],
    "wikiTitle": "Setenil_de_las_Bodegas",
    "googleMapsQuery": "Calle Cuevas del Sol, Setenil de las Bodegas, Spain",
    "bestTimeToVisit": "Spring afternoon for lunch under the colossal overhanging boulders",
    "insiderTip": "Order tapas along Calle Cuevas del Sol where the cafe terraces and whitewashed homes are built directly inside the natural cave roof overhang.",
    "fallbackImage": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A unique Andalusian white village where entire streets and dwellings were carved straight into the natural basalt cliff overhanging the Trejo river gorge."
  },
  {
    "id": "es-25",
    "name": "Timanfaya Fire Mountains",
    "nativeName": "Parque Nacional de Timanfaya",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Canary Islands (Lanzarote)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Martian Landscapes",
      "Geothermal Heat"
    ],
    "wikiTitle": "Timanfaya_National_Park",
    "googleMapsQuery": "Montanas del Fuego, Timanfaya, Lanzarote, Spain",
    "bestTimeToVisit": "Morning when light reveals red, ochre, and charcoal volcanic contrasts",
    "insiderTip": "Eat at El Diablo restaurant where meat is grilled over a natural open volcanic pit powered purely by geothermal heat from the earth below.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A moon-like expanse formed by 18th-century volcanic eruptions, featuring dormant volcanic cones, geothermal steam geysers, and black basalt plains."
  },
  {
    "id": "es-26",
    "name": "Guggenheim Museum Bilbao",
    "nativeName": "Museo Guggenheim Bilbao",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Basque Country (Biscay)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "culture"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Titanium Marvel",
      "Contemporary Art"
    ],
    "wikiTitle": "Guggenheim_Museum_Bilbao",
    "googleMapsQuery": "Guggenheim Museum Bilbao, Spain",
    "bestTimeToVisit": "Sunset when the titanium skin reflects golden shimmer on the Nervión river",
    "insiderTip": "Greet \"Puppy,\" Jeff Koons' 40-foot floral terrier statue guarding the entrance, planted with thousands of live flowering begonias and petunias.",
    "fallbackImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Frank Gehry's groundbreaking architectural masterpiece, wrapped in curving sheets of titanium, limestone, and glass along the revitalized Bilbao waterfront."
  },
  {
    "id": "es-27",
    "name": "City of Arts and Sciences",
    "nativeName": "Ciudad de las Artes y las Ciencias",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Valencia (Valencia)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "culture"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Futuristic Architecture",
      "Turia Gardens"
    ],
    "wikiTitle": "City_of_Arts_and_Sciences",
    "googleMapsQuery": "City of Arts and Sciences, Valencia, Spain",
    "bestTimeToVisit": "Blue hour just after sunset when the futuristic white structures glow over the blue pools",
    "insiderTip": "Rent a clear bottom kayak to paddle across the shallow reflecting pool surrounding the eye-shaped Hemisfèric building.",
    "fallbackImage": "https://images.unsplash.com/photo-1583779457094-0cef1cad7b9e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Santiago Calatrava's avant-garde cultural and architectural complex in the dry Turia riverbed, resembling skeletal alien vessels and giant sea creatures."
  },
  {
    "id": "es-28",
    "name": "Frigiliana White Village",
    "nativeName": "Frigiliana (Málaga)",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Andalusia (Axarquía)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "culture"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Mudejar Quarter",
      "Bougainvillea Alleys"
    ],
    "wikiTitle": "Frigiliana",
    "googleMapsQuery": "Frigiliana, Malaga, Spain",
    "bestTimeToVisit": "Late morning followed by lunch overlooking the Mediterranean coast",
    "insiderTip": "Sample \"miel de caña\" (sugarcane honey), produced in the historic Nuestra Señora del Carmen mansion, the only traditional cane honey mill left in Europe.",
    "fallbackImage": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A spotless Moorish-Mudéjar hill town of blinding white houses, ceramic mosaic cobbles, and cascades of purple bougainvillea overlooking the Nerja coastline."
  },
  {
    "id": "es-29",
    "name": "Las Médulas Ancient Roman Gold Mines",
    "nativeName": "Las Médulas (León)",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Castile and León (El Bierzo)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "history"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Roman Hydraulic Mining",
      "Ochre Needles"
    ],
    "wikiTitle": "Las_M%C3%A9dulas",
    "googleMapsQuery": "Mirador de Orellan, Las Medulas, Spain",
    "bestTimeToVisit": "Autumn when centuries-old chestnut groves turn blazing yellow against reddish-orange cliffs",
    "insiderTip": "Visit the Mirador de Orellán at sunset to view the bizarre red clay spires left behind after Romans literally collapsed the mountains using water pressure.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A dramatic landscape created by Roman hydraulic mining (ruina montium), where ancient water engineering carved orange clay pinnacles amid ancient chestnut trees."
  },
  {
    "id": "es-30",
    "name": "San Juan de Gaztelugatxe Island Hermitage",
    "nativeName": "Gaztelugatxe (Biscay)",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Basque Country (Bermeo)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "coastal",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Dragonstone Island",
      "241 Stone Steps"
    ],
    "wikiTitle": "Gaztelugatxe",
    "googleMapsQuery": "San Juan de Gaztelugatxe, Biscay, Spain",
    "bestTimeToVisit": "Early morning to climb the 241 stairs before winds and reservation crowds swell",
    "insiderTip": "Legend says once you cross the winding stone causeway and reach the 10th-century hermitage on top, you must ring the church bell three times for good luck.",
    "fallbackImage": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A dramatic rocky islet in the Cantabrian Sea connected to the rugged Basque mainland by a winding zigzag stone bridge, famously filmed as Dragonstone in Game of Thrones."
  },
  {
    "id": "es-31",
    "name": "Playa de Las Catedrales (Cathedrals Beach)",
    "nativeName": "Praia das Catedrais",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Galicia (Ribadeo)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "coastal",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Natural Flying Buttresses",
      "Tidal Wonders"
    ],
    "wikiTitle": "As_Catedrais_beach",
    "googleMapsQuery": "Praia das Catedrais, Ribadeo, Spain",
    "bestTimeToVisit": "Strictly at low tide; access is completely submerged beneath Atlantic waves during high tide",
    "insiderTip": "Book a free access permit online beforehand during summer and check local tide tables so you arrive 1 hour before peak low tide.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A breathtaking coastal marvel of 30-meter natural slate stone arches and sea caves resembling the soaring flying buttresses of a Gothic cathedral."
  },
  {
    "id": "es-32",
    "name": "Sa Calobra & Torrent de Pareis",
    "nativeName": "Sa Calobra (Mallorca)",
    "country": "spain",
    "countryName": "Spain",
    "flag": "🇪🇸",
    "region": "Balearic Islands (Mallorca)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "coastal",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Limestone Gorge Cove",
      "Serpentine Hairpins"
    ],
    "wikiTitle": "Sa_Calobra",
    "googleMapsQuery": "Torrent de Pareis, Sa Calobra, Mallorca, Spain",
    "bestTimeToVisit": "May or September; take a morning ferry from Port de Sóller to skip the twisty road drive",
    "insiderTip": "Walk through the dramatic hand-carved cliff tunnels to emerge at the pebble beach nestled between 200-meter sheer canyon walls.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A secluded turquoise pebble cove in northern Mallorca where the colossal Torrent de Pareis canyon dramatically empties into the crystal clear Mediterranean."
  },
  {
    "id": "ch-1",
    "name": "The Matterhorn",
    "nativeName": "Matterhorn / Monte Cervino",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Valais (Zermatt)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Iconic Pyramid Peak",
      "Toblerone Mountain"
    ],
    "wikiTitle": "Matterhorn",
    "googleMapsQuery": "Matterhorn, Zermatt, Switzerland",
    "bestTimeToVisit": "July to September for alpine hiking, or January to March for world-class skiing",
    "insiderTip": "Take the Gornergrat Bahn to the 3,100m summit observatory at dawn to watch the first golden rays touch the Matterhorn's eastern face.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "One of the most recognizable mountains on Earth, the Matterhorn is a near-symmetrical 4,478-meter pyramidal peak straddling the Swiss-Italian alpine border."
  },
  {
    "id": "ch-2",
    "name": "Lauterbrunnen Valley of 72 Waterfalls",
    "nativeName": "Lauterbrunnental",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Bernese Oberland (Lauterbrunnen)",
    "type": "iconic",
    "vibes": [
      "nature"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Valley of 72 Waterfalls",
      "Tolkien Inspiration"
    ],
    "wikiTitle": "Lauterbrunnen",
    "googleMapsQuery": "Staubbachfall, Lauterbrunnen, Switzerland",
    "bestTimeToVisit": "Late spring when melting snow swells the valley cascades into thunderous torrents",
    "insiderTip": "Staubbach Falls plunges nearly 300 meters right behind the village church; hike the short gallery trail behind the curtain of misty spray.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A fairy-tale U-shaped glacial valley flanked by vertical 1,000-meter cliffs, where 72 waterfalls cascade past chalet pastures; the inspiration for Tolkien's Rivendell."
  },
  {
    "id": "ch-3",
    "name": "Jungfraujoch – Top of Europe",
    "nativeName": "Jungfraujoch",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Bernese Alps (Jungfrau Region)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Top of Europe",
      "Ice Palace & Observatories"
    ],
    "wikiTitle": "Jungfraujoch",
    "googleMapsQuery": "Jungfraujoch Sphinx Observatory, Switzerland",
    "bestTimeToVisit": "Clear sunny mornings year-round; check live webcam before taking the train",
    "insiderTip": "Ride the modern Eiger Express tricable gondola from Grindelwald Terminal to save 47 minutes on the journey up to the Sphinx terrace.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "At 3,454 meters, Jungfraujoch is Europe's highest railway station, offering an ice palace, year-round snow, and jaw-dropping vistas over the 23km Aletsch Glacier."
  },
  {
    "id": "ch-4",
    "name": "Oeschinen Lake (Oeschinensee)",
    "nativeName": "Oeschinensee",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Bernese Oberland (Kandersteg)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Turquoise Glacial Jewel",
      "UNESCO Alpine World"
    ],
    "wikiTitle": "Oeschinen_Lake",
    "googleMapsQuery": "Oeschinensee, Kandersteg, Switzerland",
    "bestTimeToVisit": "June to October when rowboat rentals operate on the crystal waters",
    "insiderTip": "Hike the Heuberg panoramic loop high along the cliffs for aerial views of the vivid turquoise water framed by the Bluemlisalp mountain group.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A pristine alpine lake fed by glacial brooks and surrounded by sheer 3,000-meter cliffs, famous for mirror-like turquoise water and classic wooden rowboats."
  },
  {
    "id": "ch-5",
    "name": "Château de Chillon",
    "nativeName": "Château de Chillon",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Vaud (Montreux / Lake Geneva)",
    "type": "iconic",
    "vibes": [
      "history"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Lakeside Castle",
      "Lord Byron Inspiration"
    ],
    "wikiTitle": "Ch%C3%A2teau_de_Chillon",
    "googleMapsQuery": "Chateau de Chillon, Veytaux, Switzerland",
    "bestTimeToVisit": "Autumn when lakeside vineyards change color and snow dusts the Dents du Midi",
    "insiderTip": "Walk the flat 4km flower-lined lakeside promenade from Montreux right to the castle drawbridge, immortalized in Lord Byron's poem.",
    "fallbackImage": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "An enchanting medieval island fortress set on an oval limestone rock on the shores of Lake Geneva, guarded by 25 buildings and three courtyards since the 12th century."
  },
  {
    "id": "ch-6",
    "name": "Kapellbrücke (Chapel Bridge)",
    "nativeName": "Kapellbrücke (Luzern)",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Central Switzerland (Lucerne)",
    "type": "iconic",
    "vibes": [
      "history",
      "culture"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Oldest Covered Bridge",
      "Painted Panels"
    ],
    "wikiTitle": "Kapellbr%C3%BCcke",
    "googleMapsQuery": "Kapellbrucke, Lucerne, Switzerland",
    "bestTimeToVisit": "Spring or summer when flower boxes burst with red and pink geraniums",
    "insiderTip": "Look up into the triangular roof trusses to admire the 17th-century pictorial panels illustrating the heroic history and legends of Lucerne.",
    "fallbackImage": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Europe's oldest surviving wooden covered bridge, built diagonally across the Reuss River in 1333 alongside an iconic octagonal stone water tower."
  },
  {
    "id": "ch-7",
    "name": "Grindelwald & First Cliff Walk",
    "nativeName": "Grindelwald First",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Bernese Oberland (Grindelwald)",
    "type": "iconic",
    "vibes": [
      "adventure",
      "nature"
    ],
    "vibeLabels": [
      "Adventure & Wild",
      "Cliff Walk Suspension",
      "Eiger North Face"
    ],
    "wikiTitle": "Grindelwald",
    "googleMapsQuery": "Grindelwald First, Switzerland",
    "bestTimeToVisit": "Summer for mountain carting and hiking to Lake Bachalpsee, winter for glacier sports",
    "insiderTip": "Walk out onto the metal-grate suspension platform of the First Cliff Walk hanging over the abyss right opposite the menacing Eiger North Face.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A vibrant alpine glacier village tucked beneath the legendary North Face of the Eiger, known for heart-stopping cliff walks and emerald alpine pastures."
  },
  {
    "id": "ch-8",
    "name": "Mount Pilatus & Cogwheel Railway",
    "nativeName": "Pilatus",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Central Switzerland (Lucerne / Obwalden)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Steepest Cogwheel Railway",
      "Dragon Mountain"
    ],
    "wikiTitle": "Mount_Pilatus",
    "googleMapsQuery": "Mount Pilatus, Alpnach, Switzerland",
    "bestTimeToVisit": "May to October to experience the \"Golden Round Trip\" (boat, cogwheel train, and aerial cableway)",
    "insiderTip": "Ride the red cogwheel train from Alpnachstad: with a maximum gradient of 48%, it remains the steepest cogwheel railway in the world.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A commanding mountain massif rising over Lake Lucerne steeped in dragon folklore, accessible via the world's steepest cogwheel railway and aerial gondolas."
  },
  {
    "id": "ch-9",
    "name": "Gornergrat & Riffelsee Reflection",
    "nativeName": "Gornergrat (Zermatt)",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Valais (Zermatt)",
    "type": "iconic",
    "vibes": [
      "nature"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "29 Four-Thousanders",
      "Alpine Mirror Pool"
    ],
    "wikiTitle": "Gornergrat",
    "googleMapsQuery": "Gornergrat Observatory, Zermatt, Switzerland",
    "bestTimeToVisit": "Morning on a windless day when Lake Riffelsee forms a mirror of the Matterhorn",
    "insiderTip": "Get off at Rotenboden station and walk 10 minutes down to the shore of Riffelsee before the morning breeze disturbs the water reflection.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A 3,089-meter rocky ridge accessed by open-air electric cogwheel train, boasting panoramas of 29 peaks exceeding 4,000 meters and the massive Gorner Glacier."
  },
  {
    "id": "ch-10",
    "name": "Interlaken & Harder Kulm",
    "nativeName": "Interlaken",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Bernese Oberland (Interlaken)",
    "type": "iconic",
    "vibes": [
      "adventure",
      "nature"
    ],
    "vibeLabels": [
      "Adventure & Wild",
      "Adventure Capital",
      "Twin Glacial Lakes"
    ],
    "wikiTitle": "Interlaken",
    "googleMapsQuery": "Harder Kulm, Interlaken, Switzerland",
    "bestTimeToVisit": "Summer for tandem paragliding over the emerald waters of Lake Thun and Lake Brienz",
    "insiderTip": "Ride the funicular to Harder Kulm viewing platform at sunset to see the Eiger, Mönch, and Jungfrau peaks glow alpine pink (Alpenglow).",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Switzerland's outdoor adventure hub, nestled between the turquoise waters of Lake Brienz and Lake Thun beneath the grand triumvirate of alpine summits."
  },
  {
    "id": "ch-11",
    "name": "Rhine Falls (Rheinfall)",
    "nativeName": "Rheinfall (Neuhausen)",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Schaffhausen (Neuhausen am Rheinfall)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Largest Waterfall in Europe",
      "Roaring Churn"
    ],
    "wikiTitle": "Rhine_Falls",
    "googleMapsQuery": "Rhine Falls, Neuhausen am Rheinfall, Switzerland",
    "bestTimeToVisit": "May and June during peak snowmelt when up to 600,000 liters of water crash per second",
    "insiderTip": "Take the yellow boat tour to the middle rock (Mittelfelsen) and climb the narrow stairs to stand directly inside the roaring spray.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The most powerful waterfall in mainland Europe, spanning 150 meters wide and tumbling 23 meters over jagged limestone reefs near Schaffhausen."
  },
  {
    "id": "ch-12",
    "name": "Zytglogge Astronomical Clock & Bern Old Town",
    "nativeName": "Zytglogge (Bern)",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Bern (Bern Old City)",
    "type": "iconic",
    "vibes": [
      "history",
      "culture"
    ],
    "vibeLabels": [
      "History & Heritage",
      "UNESCO Capital",
      "Astronomical Clock"
    ],
    "wikiTitle": "Zytglogge",
    "googleMapsQuery": "Zytglogge, Bern, Switzerland",
    "bestTimeToVisit": "Four minutes before the hour to witness the mechanical puppet show and dancing bears",
    "insiderTip": "Bern has 6 kilometers of covered sandstone arcades (Lauben); in summer, locals float down the sparkling glacial Aare River with waterproof bags.",
    "fallbackImage": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A 13th-century medieval clock tower in the UNESCO-listed Swiss capital, featuring intricate dancing mechanical figures and an astronomical dial."
  },
  {
    "id": "ch-13",
    "name": "Berggasthaus Äscher & Ebenalp Caves",
    "nativeName": "Äscher-Wildkirchli (Ebenalp)",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Appenzell Innerrhoden (Wasserauen)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Cliff-Clinging Guesthouse",
      "Prehistoric Caves"
    ],
    "wikiTitle": "Ebenalp",
    "googleMapsQuery": "Berggasthaus Ascher, Weissbad, Switzerland",
    "bestTimeToVisit": "June to October; cable car operates from Wasserauen valley station",
    "insiderTip": "Walk through the prehistoric Wildkirchli caves where prehistoric cave bear bones were found before arriving at the wooden inn clinging to the 100m cliff face.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A world-famous 170-year-old alpine inn built flush against a vertical limestone rock face, featured on the cover of National Geographic."
  },
  {
    "id": "ch-14",
    "name": "St. Moritz & Engadin Valley",
    "nativeName": "Sankt Moritz",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Graubünden (Engadin)",
    "type": "iconic",
    "vibes": [
      "culture",
      "nature"
    ],
    "vibeLabels": [
      "Food & Culture",
      "Champagne Climate",
      "Alpine Luxury"
    ],
    "wikiTitle": "St._Moritz",
    "googleMapsQuery": "St Moritz Lake, Switzerland",
    "bestTimeToVisit": "February for horse racing on the frozen lake (White Turf) or July for mountain biking",
    "insiderTip": "St. Moritz boasts 322 days of sunshine a year; take the funicular to Muottas Muragl for a sunset panorama of the Engadin chain of lakes.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The birthplace of winter alpine tourism, this glittering Engadin resort town sits alongside an icy lake surrounded by larch forests and soaring mountain peaks."
  },
  {
    "id": "ch-15",
    "name": "Blausee Nature Park",
    "nativeName": "Blausee (Kandergrund)",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Bernese Oberland (Kandergrund)",
    "type": "iconic",
    "vibes": [
      "nature"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Cobalt Glacial Gem",
      "Underwater Forest"
    ],
    "wikiTitle": "Blausee",
    "googleMapsQuery": "Blausee Nature Park, Switzerland",
    "bestTimeToVisit": "Autumn when golden larch and beech needles contrast with the otherworldly deep blue lake",
    "insiderTip": "Take the included glass-bottom boat tour; the water is so crystalline that petrified tree trunks and swimming trout are visible 12 meters down.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A mystical small forest lake created by an ancient rockslide, renowned for its hypnotic transparent cyan-blue waters, organic trout farm, and romantic legend."
  },
  {
    "id": "ch-16",
    "name": "Lavaux Vineyard Terraces",
    "nativeName": "Vignobles de Lavaux",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Vaud (Lutry to Vevey)",
    "type": "iconic",
    "vibes": [
      "culture",
      "nature"
    ],
    "vibeLabels": [
      "Food & Culture",
      "UNESCO Wine Terraces",
      "Lake Geneva Panorama"
    ],
    "wikiTitle": "Lavaux",
    "googleMapsQuery": "Lavaux Vineyard Terraces, Switzerland",
    "bestTimeToVisit": "September to October during grape harvest when stone terraces turn brilliant yellow",
    "insiderTip": "Locals say Lavaux is warmed by three suns: the sun in the sky, its reflection on Lake Geneva, and heat stored by medieval stone retaining walls.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "An 800-hectare UNESCO World Heritage landscape of steep terraced vineyards cascading straight into Lake Geneva, producing crisp Chasselas white wine since Roman times."
  },
  {
    "id": "ch-17",
    "name": "The Glacier Express Route & Landwasser Viaduct",
    "nativeName": "Glacier Express / Landwasserviadukt",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Graubünden & Valais",
    "type": "iconic",
    "vibes": [
      "adventure",
      "nature"
    ],
    "vibeLabels": [
      "Adventure & Wild",
      "Slowest Express Train",
      "Engineering Wonder"
    ],
    "wikiTitle": "Glacier_Express",
    "googleMapsQuery": "Landwasser Viaduct, Filisur, Switzerland",
    "bestTimeToVisit": "Winter when the red train glides through pristine snowy passes and frozen ravines",
    "insiderTip": "Watch out the window between Tiefencastel and Filisur as the train curves over the 65-meter-high Landwasser limestone viaduct straight into a cliff tunnel.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The world's slowest express train, taking 8 hours to connect Zermatt and St. Moritz across 291 bridges, 91 tunnels, and the 2,044-meter Oberalp Pass."
  },
  {
    "id": "ch-18",
    "name": "Aare Gorge (Aareschlucht)",
    "nativeName": "Aareschlucht (Meiringen)",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Bernese Oberland (Haslital)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Sheer Limestone Chasm",
      "Glacial River Walkway"
    ],
    "wikiTitle": "Aare_Gorge",
    "googleMapsQuery": "Aare Gorge, Meiringen, Switzerland",
    "bestTimeToVisit": "Hot summer days when the deep limestone chasm stays pleasantly chilly and shaded",
    "insiderTip": "Follow the 1.4-kilometer wooden walkway bolted directly to the rock walls — at its narrowest point, the gorge measures barely one meter across.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A 1.4km limestone gorge carved through the Kirchet rock over tens of thousands of years by glacial meltwaters, with cliff walls soaring up to 200 meters high."
  },
  {
    "id": "ch-19",
    "name": "Schilthorn & Piz Gloria (James Bond Summit)",
    "nativeName": "Schilthorn Piz Gloria",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Bernese Alps (Mürren)",
    "type": "iconic",
    "vibes": [
      "adventure",
      "nature"
    ],
    "vibeLabels": [
      "Adventure & Wild",
      "James Bond 007 Set",
      "360 Revolving Restaurant"
    ],
    "wikiTitle": "Schilthorn",
    "googleMapsQuery": "Schilthorn Piz Gloria, Switzerland",
    "bestTimeToVisit": "Sunny clear mornings; visit the interactive Bond World exhibition inside the summit station",
    "insiderTip": "Order the signature James Bond burger while the restaurant smoothly rotates 360 degrees every 45 minutes past more than 200 alpine summits.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A 2,970-meter summit featuring the revolving restaurant Piz Gloria, immortalized as Blofeld's lair in the 1969 James Bond film \"On Her Majesty's Secret Service.\""
  },
  {
    "id": "ch-20",
    "name": "Lugano & Monte San Salvatore",
    "nativeName": "Lugano (Ticino)",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Ticino (Lugano)",
    "type": "iconic",
    "vibes": [
      "culture",
      "coastal"
    ],
    "vibeLabels": [
      "Food & Culture",
      "Mediterranean Switzerland",
      "Palm Trees & Piazzas"
    ],
    "wikiTitle": "Lugano",
    "googleMapsQuery": "Piazza della Riforma, Lugano, Switzerland",
    "bestTimeToVisit": "May to September when sub-tropical lake breezes and outdoor gelato terraces thrive",
    "insiderTip": "Take the funicular up Monte San Salvatore (the \"Sugarloaf of Switzerland\") for a 360-degree vista over the glacial fjord-like arms of Lake Lugano.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Switzerland's sunny Italian-speaking hub on the glacial shores of Lake Lugano, framed by sub-tropical palm trees, neoclassical palazzi, and dramatic peaks."
  },
  {
    "id": "ch-21",
    "name": "Mount Rigi – Queen of the Mountains",
    "nativeName": "Rigi Kulm",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Central Switzerland (Schwyz / Lucerne)",
    "type": "iconic",
    "vibes": [
      "nature"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Queen of the Mountains",
      "First Mountain Railway"
    ],
    "wikiTitle": "Rigi",
    "googleMapsQuery": "Rigi Kulm, Switzerland",
    "bestTimeToVisit": "Autumn when a blanket of white fog covers the lowlands while Rigi summit basks in pure sunshine",
    "insiderTip": "Rigi opened Europe's very first cogwheel railway back in 1871; ride up from Vitznau and take a relaxing soak in the Mineral Baths & Spa at Rigi Kaltbad.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Lovingly called the \"Queen of the Mountains\", Rigi offers gentle alpine pastures and panoramic vistas over 13 lakes and the Swiss Alps from its 1,798m crest."
  },
  {
    "id": "ch-22",
    "name": "Trümmelbach Falls (Subterranean Glacial Chasm)",
    "nativeName": "Trümmelbachfälle",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Bernese Oberland (Lauterbrunnen)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Subterranean Falls",
      "Glacial Power"
    ],
    "wikiTitle": "Tr%C3%BCmmelbach_Falls",
    "googleMapsQuery": "Trummelbach Falls, Lauterbrunnen, Switzerland",
    "bestTimeToVisit": "Summer afternoons when up to 20,000 liters of glacial water per second roar through the dark rock",
    "insiderTip": "Ride the tunnel funicular deep into the heart of the mountain to see illuminated corkscrew rock chasms hollowed out by swirling boulder grinders.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Ten subterranean glacier waterfalls buried inside the mountain walls of Lauterbrunnen, carrying meltwaters from the Eiger, Mönch, and Jungfrau glaciers."
  },
  {
    "id": "ch-23",
    "name": "Swiss National Park Wilderness",
    "nativeName": "Schweizerischer Nationalpark",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Graubünden (Engadin)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Oldest Alpine Park",
      "Pristine Wilderness"
    ],
    "wikiTitle": "Swiss_National_Park",
    "googleMapsQuery": "Swiss National Park Visitor Centre, Zernez, Switzerland",
    "bestTimeToVisit": "September when golden larches illuminate the valleys and red deer enter the mating rut",
    "insiderTip": "Strictly protected since 1914, no off-trail walking is allowed: spot alpine ibex, chamois, golden eagles, and bearded vultures in complete wild solitude.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Founded in 1914 as the Alps' first national park, spanning 170 square kilometers of strictly protected pristine alpine forests, rocky peaks, and wild fauna."
  },
  {
    "id": "ch-24",
    "name": "Valle Verzasca & Ponte dei Salti",
    "nativeName": "Valle Verzasca (Lavertezzo)",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Ticino (Locarno)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Emerald River Pools",
      "Roman Double-Arch Bridge"
    ],
    "wikiTitle": "Valle_Verzasca",
    "googleMapsQuery": "Ponte dei Salti, Lavertezzo, Switzerland",
    "bestTimeToVisit": "Warm sunny summer days for swimming in the crystal clear natural pools",
    "insiderTip": "Photograph the 17th-century double-arched stone bridge at Lavertezzo, where jade-green river waters flow over smooth sculpted granite boulders.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A wild granite valley in Italian Switzerland famed for iridescent emerald waters, polished stone riverbeds, and the picture-postcard arched bridge of Lavertezzo."
  },
  {
    "id": "ch-25",
    "name": "Creux du Van Natural Rock Amphitheater",
    "nativeName": "Creux du Van (Jura)",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Neuchâtel (Val-de-Travers)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Swiss Grand Canyon",
      "Limestone Amphitheater"
    ],
    "wikiTitle": "Creux_du_Van",
    "googleMapsQuery": "Creux du Van, Noiraigue, Switzerland",
    "bestTimeToVisit": "Sunrise or late afternoon when wild ibex graze fearlessly on the outer rim",
    "insiderTip": "Sample authentic Absinthe in the Val-de-Travers valley below, where the legendary herbal spirit was first invented and illicitly distilled.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A colossal natural limestone cirque measuring 1,400 meters wide, with sheer 160-meter vertical rock cliffs curling like a giant horseshoe in the Jura mountains."
  },
  {
    "id": "ch-26",
    "name": "Gstaad & Glacier 3000 Peak Walk",
    "nativeName": "Gstaad (Saanenland)",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Bernese Oberland (Gstaad)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "adventure",
      "culture"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Chalet Elegance",
      "Peak-to-Peak Suspension Bridge"
    ],
    "wikiTitle": "Gstaad",
    "googleMapsQuery": "Glacier 3000, Ormont-Dessus, Switzerland",
    "bestTimeToVisit": "Winter for skiing and snowshoeing, or July for traditional Saanenland cheese festivals",
    "insiderTip": "Cross the Peak Walk by Tissot at Glacier 3000 — the only suspension bridge in the world connecting two mountain summits directly over the clouds.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "An upscale chalet-style alpine village that preserves strict wooden architectural traditions, complemented by glacier skiing and peak suspension walks."
  },
  {
    "id": "ch-27",
    "name": "Gelmerbahn Funicular & Gelmersee",
    "nativeName": "Gelmerbahn (Grimselwelt)",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Bernese Oberland (Guttannen)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "106% Incline Thrill",
      "Open-Air Mountain Coaster"
    ],
    "wikiTitle": "Gelmerbahn",
    "googleMapsQuery": "Gelmerbahn Talstation, Guttannen, Switzerland",
    "bestTimeToVisit": "June to October; book tickets online weeks ahead as seats are strictly limited",
    "insiderTip": "Sit in the front row for an open-air roller-coaster sensation as the cart plunges backwards down a 106% incline with no roof between you and the alpine sky.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "One of the steepest open-air passenger funiculars in Europe with a heart-pounding 106% gradient, carrying adventurers to turquoise Lake Gelmer."
  },
  {
    "id": "ch-28",
    "name": "Stoos Funicular & Fronalpstock Ridge",
    "nativeName": "Stoosbahn & Fronalpstock",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Schwyz (Stoos)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "110% Rotating Funicular",
      "Ridge Walk Vistas"
    ],
    "wikiTitle": "Stoos",
    "googleMapsQuery": "Fronalpstock, Stoos, Switzerland",
    "bestTimeToVisit": "Summer for the scenic ridge hike between Klingenstock and Fronalpstock summits",
    "insiderTip": "The modern Stoos funicular features cylindrical rotating cabins that automatically tilt to keep passengers level on a record-breaking 110% (47.7°) incline.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A car-free mountain village perched 1,300 meters above Lake Lucerne, reached by the world's steepest funicular with self-leveling rotating passenger drums."
  },
  {
    "id": "ch-29",
    "name": "Lake Lucerne Paddle Steamer Cruise",
    "nativeName": "Vierwaldstättersee",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Central Switzerland (Lucerne)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Fjord of Switzerland",
      "Historic Steamers"
    ],
    "wikiTitle": "Lake_Lucerne",
    "googleMapsQuery": "Lake Lucerne Steamer Pier, Lucerne, Switzerland",
    "bestTimeToVisit": "Summer sunset cruise when the brass steam engines gleam and alpine peaks turn crimson",
    "insiderTip": "Board one of the five historic Belle Époque paddle steamers (such as the Uri or Stadt Luzern) dating from the early 1900s still operating daily.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A fjord-like glacial lake with intricate arms twisting between steep alpine walls, celebrated as the historic birthplace of the Swiss Confederation in 1291."
  },
  {
    "id": "ch-30",
    "name": "Morcote Lakeside Village",
    "nativeName": "Morcote (Ceresio)",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Ticino (Lugano)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "culture",
      "coastal"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Pearl of Ceresio",
      "Subtropical Terraces"
    ],
    "wikiTitle": "Morcote",
    "googleMapsQuery": "Santa Maria del Sasso, Morcote, Switzerland",
    "bestTimeToVisit": "Spring when camellias, magnolias, and wisteria bloom throughout Parco Scherrer",
    "insiderTip": "Climb the 404 stone steps up to Santa Maria del Sasso church for a tranquil view across Lake Lugano toward the wooded shores of Italy.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Voted Switzerland's most beautiful village, Morcote charms visitors with narrow arcaded lake alleys, botanical gardens, and cypress-flanked stone stairways."
  },
  {
    "id": "ch-31",
    "name": "Great Aletsch Glacier & Eggishorn",
    "nativeName": "Grosser Aletschgletscher",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Valais (Aletsch Arena)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Largest Alpine Glacier",
      "23km Ice River"
    ],
    "wikiTitle": "Aletsch_Glacier",
    "googleMapsQuery": "Eggishorn Viewpoint, Fiesch, Switzerland",
    "bestTimeToVisit": "Late summer for guided crampon ice treks onto the glacial tongue",
    "insiderTip": "Take the cable car to Eggishorn summit (2,927m) — it's the only viewpoint where you can see the entire 20km curve of the Great Aletsch Glacier in one panoramic sweep.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The largest glacier in the European Alps, stretching 23 kilometers with 10 billion tons of ancient ice flowing majestically through a UNESCO World Heritage reserve."
  },
  {
    "id": "ch-32",
    "name": "Stein am Rhein Fresco Town",
    "nativeName": "Stein am Rhein",
    "country": "switzerland",
    "countryName": "Switzerland",
    "flag": "🇨🇭",
    "region": "Schaffhausen (Stein am Rhein)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "history"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Renaissance Frescoes",
      "Halftimbered Fairy Tale"
    ],
    "wikiTitle": "Stein_am_Rhein",
    "googleMapsQuery": "Rathausplatz, Stein am Rhein, Switzerland",
    "bestTimeToVisit": "Sunny afternoon followed by a riverboat trip along the tranquil High Rhine towards Lake Constance",
    "insiderTip": "Inspect the painted townhouse facades on Rathausplatz, especially the House of the White Eagle, featuring the oldest Renaissance wall paintings in Switzerland.",
    "fallbackImage": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A fairytale medieval town where the Rhine flows out of Lake Constance, famed for half-timbered merchant houses adorned with elaborate Renaissance facade frescoes."
  },
  {
    "id": "nz-1",
    "name": "Milford Sound (Piopiotahi)",
    "nativeName": "Piopiotahi (Fiordland)",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "South Island (Fiordland)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Eighth Wonder of the World",
      "Fiordland Wilderness"
    ],
    "wikiTitle": "Milford_Sound",
    "googleMapsQuery": "Milford Sound, Southland, New Zealand",
    "bestTimeToVisit": "Rainy days make it even more magical as hundreds of temporary waterfalls cascade down the sheer cliff walls",
    "insiderTip": "Take a small-boat cruise or sea kayak right under Stirling Falls to feel the glacial spray directly on your face.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Described by Rudyard Kipling as the eighth wonder of the world, this breathtaking fiord is carved by glaciers with Mitre Peak rising 1,692 meters directly from ink-dark waters."
  },
  {
    "id": "nz-2",
    "name": "Hobbiton Movie Set",
    "nativeName": "Hobbiton (Matamata)",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "North Island (Waikato)",
    "type": "iconic",
    "vibes": [
      "culture",
      "adventure"
    ],
    "vibeLabels": [
      "Food & Culture",
      "The Shire",
      "Lord of the Rings Film Set"
    ],
    "wikiTitle": "Hobbiton_Movie_Set",
    "googleMapsQuery": "Hobbiton Movie Set, Hinuera, Matamata, New Zealand",
    "bestTimeToVisit": "Late afternoon tour followed by an evening feast banquet inside the Green Dragon Inn",
    "insiderTip": "Order a complimentary Southfarthing Sackville Cider or oat ale pulled fresh from oak barrels at the Green Dragon Inn.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Step into the rolling green hills of the Shire, featuring 44 detailed hobbit holes, the Mill, the double arched stone bridge, and Bag End nestled beneath the Party Tree."
  },
  {
    "id": "nz-3",
    "name": "Aoraki / Mount Cook National Park",
    "nativeName": "Aoraki / Mount Cook",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "South Island (Canterbury)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Highest Peak in NZ",
      "Hooker Valley Track"
    ],
    "wikiTitle": "Aoraki_/_Mount_Cook",
    "googleMapsQuery": "Aoraki Mount Cook National Park, Canterbury, New Zealand",
    "bestTimeToVisit": "December to February for alpine buttercup blooms (Mount Cook Lily) and mild hiking weather",
    "insiderTip": "Hike the flat 10km Hooker Valley Track across three suspension bridges to the iceberg-filled Hooker Lake at the foot of Aoraki.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "New Zealand's tallest mountain at 3,724 meters, surrounded by jagged glaciers, hanging ice cliffs, and pristine tussock alpine valleys in the Southern Alps."
  },
  {
    "id": "nz-4",
    "name": "Lake Tekapo & Church of the Good Shepherd",
    "nativeName": "Takapō (Canterbury)",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "South Island (Mackenzie Basin)",
    "type": "iconic",
    "vibes": [
      "nature"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Dark Sky Reserve",
      "Glacial Turquoise Lake"
    ],
    "wikiTitle": "Lake_Tekapo",
    "googleMapsQuery": "Church of the Good Shepherd, Lake Tekapo, New Zealand",
    "bestTimeToVisit": "November to December when fields of purple and pink Russell lupins blanket the lake foreshore",
    "insiderTip": "Part of the Aoraki Mackenzie International Dark Sky Reserve; book a night tour at Mount John Observatory to view the Milky Way and Southern Cross.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A mesmerizing milky turquoise glacial lake framed by Southern Alps peaks and the lone 1935 stone Church of the Good Shepherd under world-renowned starry night skies."
  },
  {
    "id": "nz-5",
    "name": "Waitomo Glowworm Caves",
    "nativeName": "Waitomo (Waikato)",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "North Island (King Country)",
    "type": "iconic",
    "vibes": [
      "adventure",
      "nature"
    ],
    "vibeLabels": [
      "Adventure & Wild",
      "Bioluminescent Caves",
      "Black Water Rafting"
    ],
    "wikiTitle": "Waitomo_Caves",
    "googleMapsQuery": "Waitomo Glowworm Caves, Waitomo Caves, New Zealand",
    "bestTimeToVisit": "Year-round; cave temperature remains a steady 16°C (61°F) in all seasons",
    "insiderTip": "Thrill seekers should book the Black Abyss tour — abseiling, zip-lining, and floating through dark subterranean rivers on rubber tire tubes.",
    "fallbackImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A 30-million-year-old subterranean limestone cave system illuminated by thousands of tiny endemic glowworms (Arachnocampa luminosa) resembling a subterranean starry galaxy."
  },
  {
    "id": "nz-6",
    "name": "Rotorua Geothermal Valley",
    "nativeName": "Te Rotorua-nui-a-Kahumatamomoe",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "North Island (Bay of Plenty)",
    "type": "iconic",
    "vibes": [
      "nature",
      "culture"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Geothermal Wonderland",
      "Māori Cultural Heart"
    ],
    "wikiTitle": "Rotorua",
    "googleMapsQuery": "Pohutu Geyser, Te Puia, Rotorua, New Zealand",
    "bestTimeToVisit": "Spring or Autumn for pleasant mineral soaking in the natural hot springs of Polynesian Spa",
    "insiderTip": "Visit Te Puia to see Pōhutu Geyser erupt up to 30 meters high (the largest active geyser in the Southern Hemisphere) and watch master Māori woodcarvers.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A volcanic hotbed renowned for bubbling mud pools, steaming mineral springs, soaring geysers, and deep living Māori traditions and hāngi feasts."
  },
  {
    "id": "nz-7",
    "name": "Queenstown – Adventure Capital",
    "nativeName": "Tāhuna (Otago)",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "South Island (Otago)",
    "type": "iconic",
    "vibes": [
      "adventure"
    ],
    "vibeLabels": [
      "Adventure & Wild",
      "Adventure Capital",
      "Lake Wakatipu & Remarkables"
    ],
    "wikiTitle": "Queenstown,_New_Zealand",
    "googleMapsQuery": "Queenstown, Otago, New Zealand",
    "bestTimeToVisit": "Year-round; winter for skiing Coronet Peak & The Remarkables, summer for jet-boating and hiking",
    "insiderTip": "Ride the Skyline Gondola to Bob's Peak for luge racing, then grab a legendary Fergburger down on Shotover Street.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Surrounded by the dramatic Remarkables mountain range on lightning-bolt-shaped Lake Wakatipu, Queenstown is the world capital of bungy jumping, jet boating, and alpine thrills."
  },
  {
    "id": "nz-8",
    "name": "Tongariro Alpine Crossing",
    "nativeName": "Tongariro (Ruapehu)",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "North Island (Central Plateau)",
    "type": "iconic",
    "vibes": [
      "adventure",
      "nature"
    ],
    "vibeLabels": [
      "Adventure & Wild",
      "Emerald Lakes",
      "Mount Doom (Mordor)"
    ],
    "wikiTitle": "Tongariro_National_Park",
    "googleMapsQuery": "Emerald Lakes, Tongariro National Park, New Zealand",
    "bestTimeToVisit": "December to April; reserve shuttle transport in advance and check volcanic alert bulletins",
    "insiderTip": "Stop at the rim of Red Crater to smell the sulphur and marvel at the neon green-blue Emerald Lakes against the volcanic scree of Mount Ngauruhoe.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Heralded as the greatest one-day hike in New Zealand, this 19.4km trail traverses volcanic craters, active steam vents, and iridescent sulfur lakes in dual-heritage park."
  },
  {
    "id": "nz-9",
    "name": "Bay of Islands & Hole in the Rock",
    "nativeName": "Ipipiri (Northland)",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "North Island (Northland)",
    "type": "iconic",
    "vibes": [
      "coastal",
      "nature"
    ],
    "vibeLabels": [
      "Coastal & Islands",
      "144 Subtropical Islands",
      "Dolphin Encounters"
    ],
    "wikiTitle": "Bay_of_Islands",
    "googleMapsQuery": "Hole in the Rock, Piercy Island, New Zealand",
    "bestTimeToVisit": "December to March for warm subtropical sea temperatures and sailing",
    "insiderTip": "Visit the Waitangi Treaty Grounds where New Zealand's founding document was signed in 1840, featuring a massive carved 35-meter ceremonial waka canoe.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A maritime playground of 144 subtropical islands, secluded golden beaches, dolphin pods, and historic colonial and Māori founding grounds in Northland."
  },
  {
    "id": "nz-10",
    "name": "Franz Josef Glacier (Kā Roimata o Hine Hukatere)",
    "nativeName": "Kā Roimata o Hine Hukatere",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "South Island (West Coast)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Rainforest to Ice",
      "Heli-Hike Adventure"
    ],
    "wikiTitle": "Franz_Josef_Glacier",
    "googleMapsQuery": "Franz Josef Glacier, West Coast, New Zealand",
    "bestTimeToVisit": "Clear winter mornings often offer the crispest flight conditions for heli-hikes",
    "insiderTip": "Take a helicopter flight landing directly on the upper icefield to explore deep blue crevasses and walk through glowing ice caves with crampons.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A 12-kilometer maritime glacier descending from the high Southern Alps directly into temperate temperate rainforest, creating a striking contrast of ice and lush green ferns."
  },
  {
    "id": "nz-11",
    "name": "Cathedral Cove (Te Whanganui-A-Hei)",
    "nativeName": "Te Whanganui-A-Hei (Coromandel)",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "North Island (Coromandel Peninsula)",
    "type": "iconic",
    "vibes": [
      "coastal",
      "nature"
    ],
    "vibeLabels": [
      "Coastal & Islands",
      "Cathedral Rock Arch",
      "Narnia Film Location"
    ],
    "wikiTitle": "Cathedral_Cove",
    "googleMapsQuery": "Cathedral Cove, Hahei, Coromandel, New Zealand",
    "bestTimeToVisit": "Early morning sunrise when the natural limestone archway frames glowing golden sands",
    "insiderTip": "Rent a sea kayak from Hahei beach to paddle around the offshore sea stack sanctuaries before walking through the cathedral tunnel.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A majestic natural white limestone archway uniting two secluded white sand coves in a marine reserve, famous as the tunnel to Narnia in Prince Caspian."
  },
  {
    "id": "nz-12",
    "name": "That Wānaka Tree & Lake Wānaka",
    "nativeName": "Lake Wānaka (Otago)",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "South Island (Otago)",
    "type": "iconic",
    "vibes": [
      "nature"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Lone Willow in the Water",
      "Alpine Lake Calm"
    ],
    "wikiTitle": "Lake_W%C4%81naka",
    "googleMapsQuery": "That Wanaka Tree, Wanaka, New Zealand",
    "bestTimeToVisit": "Sunrise in autumn when the willow foliage turns vibrant yellow against the blue lake",
    "insiderTip": "Wānaka is quieter and more laid-back than neighboring Queenstown; pick up fresh artisanal pastries at Pembroke Pâtisserie before walking the lakeshore.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A pristine glacial lake in the Southern Alps, famous for #ThatWanakaTree — a lone cracked willow growing directly out of the lake water framed by alpine peaks."
  },
  {
    "id": "nz-13",
    "name": "Wai-O-Tapu Thermal Wonderland & Champagne Pool",
    "nativeName": "Wai-O-Tapu (Bay of Plenty)",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "North Island (Rotorua)",
    "type": "iconic",
    "vibes": [
      "nature"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Champagne Pool",
      "Neon Geothermal Colors"
    ],
    "wikiTitle": "Waiotapu",
    "googleMapsQuery": "Champagne Pool, Waiotapu, New Zealand",
    "bestTimeToVisit": "Arrive before 10:15 AM to witness the daily eruption of the Lady Knox Geyser",
    "insiderTip": "The 65-meter-wide Champagne Pool bubbles with carbon dioxide like sparkling wine, ringed by a brilliant radioactive orange crust of arsenic and antimony minerals.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "One of the most colorful geothermal areas in the world, renowned for the vivid orange-rimmed Champagne Pool, Devil's Bath lime-green acid lake, and steaming silica terraces."
  },
  {
    "id": "nz-14",
    "name": "Moeraki Boulders (Kaihinaki)",
    "nativeName": "Kaihinaki (Otago Coast)",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "South Island (Otago)",
    "type": "iconic",
    "vibes": [
      "nature"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Spherical Stone Concretions",
      "Māori Canoe Legend"
    ],
    "wikiTitle": "Moeraki_Boulders",
    "googleMapsQuery": "Moeraki Boulders Beach, Hampden, New Zealand",
    "bestTimeToVisit": "Low to mid-tide at dawn when waves swirl around the spherical stones during sunrise",
    "insiderTip": "Māori legend tells that the boulders are petrified gourds and kumara washed ashore from the wrecked ancestral voyaging waka Arai-te-uru over a thousand years ago.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Enormous spherical calcite septarian concretions up to 2 meters in diameter scattered along Koekohe Beach, formed inside seafloor mudstone 60 million years ago."
  },
  {
    "id": "nz-15",
    "name": "Abel Tasman National Park Coastal Track",
    "nativeName": "Abel Tasman (Nelson Tasman)",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "South Island (Tasman)",
    "type": "iconic",
    "vibes": [
      "nature",
      "coastal"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Golden Granite Sands",
      "Sea Kayak Paradise"
    ],
    "wikiTitle": "Abel_Tasman_National_Park",
    "googleMapsQuery": "Abel Tasman Coast Track, Marahau, New Zealand",
    "bestTimeToVisit": "January to March for sunny kayaking days and swimming with fur seal pups at Tonga Island",
    "insiderTip": "Combine hiking with a water taxi: hike a scenic section through coastal beech forest and catch a taxi boat straight off the golden sand beach.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "New Zealand's smallest but most sun-drenched national park, famous for orange-gold granite beaches, turquoise lagoons, fur seal colonies, and coastal walking tracks."
  },
  {
    "id": "nz-16",
    "name": "Roys Peak Summit Ridge",
    "nativeName": "Roys Peak (Wānaka)",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "South Island (Otago)",
    "type": "iconic",
    "vibes": [
      "adventure",
      "nature"
    ],
    "vibeLabels": [
      "Adventure & Wild",
      "Iconic Ridge View",
      "Lake Wānaka Panorama"
    ],
    "wikiTitle": "Roys_Peak",
    "googleMapsQuery": "Roys Peak Track, Wanaka, New Zealand",
    "bestTimeToVisit": "Start climbing at 4:00 AM with a headlamp to catch sunrise cresting over the peaks",
    "insiderTip": "Track closes annually from October 1 to November 10 for lambing season; the narrow ridge viewpoint line is 30 minutes before the actual summit marker.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A challenging 1,578-meter peak hike delivering one of the Southern Hemisphere's most photographed ridge vistas over Lake Wānaka and Mount Aspiring."
  },
  {
    "id": "nz-17",
    "name": "Kaikōura Whale Sanctuary & Coastal Range",
    "nativeName": "Kaikōura (Canterbury)",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "South Island (Canterbury)",
    "type": "iconic",
    "vibes": [
      "nature",
      "coastal"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Giant Sperm Whales",
      "Seaward Kaikōura Range"
    ],
    "wikiTitle": "Kaik%C5%8Dura",
    "googleMapsQuery": "Whale Watch Kaikoura, Kaikoura, New Zealand",
    "bestTimeToVisit": "Year-round for resident sperm whales; winter brings snow on mountains right down to the ocean",
    "insiderTip": "A submarine canyon plunging 1,000 meters just off the coastline brings deep-sea upwellings that sustain resident giant sperm whales and dusky dolphins.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A unique coastal settlement where snow-capped 2,600m mountains plunge straight into the Pacific Ocean above a deep marine trench teeming with giant sperm whales."
  },
  {
    "id": "nz-18",
    "name": "Huka Falls Hydro Cascade",
    "nativeName": "Huka Falls (Taupō)",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "North Island (Waikato)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Roaring Blue Churn",
      "Waikato River Power"
    ],
    "wikiTitle": "Huka_Falls",
    "googleMapsQuery": "Huka Falls, Wairakei, Taupo, New Zealand",
    "bestTimeToVisit": "Sunny midday when the sunlight illuminates the furious rapids into incandescent neon cyan",
    "insiderTip": "Over 220,000 liters of water per second funnel through a 15-meter-wide volcanic gorge — enough to fill an Olympic-sized swimming pool every 11 seconds.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "New Zealand's most visited natural attraction, where the Waikato River roars through a hard volcanic rock gorge before bursting into an 11-meter foaming blue waterfall."
  },
  {
    "id": "nz-19",
    "name": "Hot Water Beach Thermal Digging",
    "nativeName": "Hot Water Beach (Coromandel)",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "North Island (Coromandel Peninsula)",
    "type": "iconic",
    "vibes": [
      "adventure",
      "coastal"
    ],
    "vibeLabels": [
      "Adventure & Wild",
      "DIY Thermal Spa",
      "Tidal Hot Springs"
    ],
    "wikiTitle": "Hot_Water_Beach",
    "googleMapsQuery": "Hot Water Beach, Coromandel, New Zealand",
    "bestTimeToVisit": "Two hours either side of low tide when the underground thermal springs are exposed",
    "insiderTip": "Rent a spade at the beach cafe and dig a personal hot pool in the golden sand — water temperatures can reach a scorching 64°C (147°F).",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A world-famous beach where geothermal activity allows visitors to dig their own natural hot mineral pool in the sand between incoming tidal ocean breakers."
  },
  {
    "id": "nz-20",
    "name": "Doubtful Sound (Patea)",
    "nativeName": "Patea / Doubtful Sound",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "South Island (Fiordland)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Sound of Silence",
      "Untamed Fiordland"
    ],
    "wikiTitle": "Doubtful_Sound",
    "googleMapsQuery": "Doubtful Sound, Fiordland, New Zealand",
    "bestTimeToVisit": "Book an overnight cruise to experience the legendary \"Sound of Silence\" when ship engines are cut",
    "insiderTip": "Doubtful Sound is ten times larger and three times longer than Milford Sound, home to rare Fiordland crested penguins and bottlenose dolphins.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Nicknamed the \"Sound of Silence\", this colossal and remote fiord boasts pristine rainforest-clad cliffs, twisting arms, and untouched marine wilderness."
  },
  {
    "id": "nz-21",
    "name": "Mount Taranaki & Pouakai Tarns",
    "nativeName": "Taranaki Maunga",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "North Island (Taranaki)",
    "type": "iconic",
    "vibes": [
      "nature"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Symmetrical Stratovolcano",
      "Sacred Maunga"
    ],
    "wikiTitle": "Mount_Taranaki",
    "googleMapsQuery": "Pouakai Tarns, Egmont National Park, New Zealand",
    "bestTimeToVisit": "December to March; hike to Pouakai Tarns on a windless morning for the mirror reflection",
    "insiderTip": "Mount Taranaki was granted legal personhood in 2017; its cone is so perfectly conical that satellite images show a distinct circular border around Egmont National Park.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A nearly symmetrical 2,518-meter dormant stratovolcano dominating the western coast, deeply sacred to Māori and surrounded by circular ring plains of lush goblin forest."
  },
  {
    "id": "nz-22",
    "name": "Kepler Track & Luxmore Hut",
    "nativeName": "Kepler Track (Te Anau)",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "South Island (Fiordland)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "adventure",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Great Walk of NZ",
      "Above the Clouds"
    ],
    "wikiTitle": "Kepler_Track",
    "googleMapsQuery": "Luxmore Hut, Kepler Track, Fiordland, New Zealand",
    "bestTimeToVisit": "November to April during the Great Walks hiking season; book huts months ahead",
    "insiderTip": "Visit the Luxmore Caves just 10 minutes from Luxmore Hut to admire limestone stalactites with a torch, and watch out for playful alpine Kea parrots.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A 60km custom-built Great Walk winding through mossy beech forests, soaring along tussock-covered alpine ridges, and overlooking Lake Te Anau and Lake Manapouri."
  },
  {
    "id": "nz-23",
    "name": "Punakaiki Pancake Rocks & Blowholes",
    "nativeName": "Punakaiki (West Coast)",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "South Island (West Coast)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Stacked Limestone Rocks",
      "Crashing Ocean Blowholes"
    ],
    "wikiTitle": "Punakaiki",
    "googleMapsQuery": "Pancake Rocks and Blowholes Walk, Punakaiki, New Zealand",
    "bestTimeToVisit": "High tide during heavy swell when seawater surges through blowholes like marine geysers",
    "insiderTip": "Follow the 20-minute paved loop track around Dolomite Point; the layers of limestone resemble giant stacks of culinary pancakes compressed over 30 million years.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Fascinating 30-million-year-old layered limestone formations on the wild Tasman Sea coastline where surging tides blast through vertical sea-spray blowholes."
  },
  {
    "id": "nz-24",
    "name": "Lake Pukaki Glacial Turquoise Water",
    "nativeName": "Lake Pukaki (Mackenzie Basin)",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "South Island (Mackenzie Basin)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Vibrant Glacial Flour",
      "Aoraki Backdrop"
    ],
    "wikiTitle": "Lake_Pukaki",
    "googleMapsQuery": "Lake Pukaki Viewpoint, Canterbury, New Zealand",
    "bestTimeToVisit": "Bright sunny days when suspended fine glacial flour reflects intense ice-blue hues",
    "insiderTip": "Stop at the Mount Cook Alpine Salmon shop on the southern shore for sashimi fresh from the icy glacial waters while gazing at Aoraki across the lake.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The largest of the Mackenzie Basin lakes, celebrated for its startling bright neon turquoise coloration created by finely ground glacial rock flour."
  },
  {
    "id": "nz-25",
    "name": "Hawke's Bay Art Deco Capital & Vineyards",
    "nativeName": "Heretaunga (Napier)",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "North Island (Hawke's Bay)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "culture"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Art Deco Capital",
      "Syrah & Bordeaux Blends"
    ],
    "wikiTitle": "Hawke%27s_Bay",
    "googleMapsQuery": "Napier Art Deco Trust, Napier, New Zealand",
    "bestTimeToVisit": "February for the annual Art Deco Festival when locals dress in 1930s flapper attire and vintage cars cruise Marine Parade",
    "insiderTip": "Cycle the flat Hawke's Bay trails connecting world-class cellar doors in the Gimblett Gravels wine growing region.",
    "fallbackImage": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Rebuilt in stunning Art Deco, Spanish Mission, and Stripped Classical styles following a 1931 earthquake, Hawke's Bay is New Zealand's oldest wine-producing region."
  },
  {
    "id": "nz-26",
    "name": "Fox Glacier & Lake Matheson Reflection",
    "nativeName": "Te Moeka o Tuawe (Fox Glacier)",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "South Island (West Coast)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Mirror Lake of NZ",
      "Aoraki Double Reflection"
    ],
    "wikiTitle": "Fox_Glacier",
    "googleMapsQuery": "Lake Matheson Walk, Fox Glacier, New Zealand",
    "bestTimeToVisit": "Dawn on a calm morning when the peat-dark waters of Lake Matheson become a mirror",
    "insiderTip": "Walk the easy 1.5-hour forest loop around Lake Matheson; the View of Views jetty offers the iconic reflection of Mount Cook and Mount Tasman.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A 13km maritime glacier flanked by ancient podocarp forest, paired with nearby Lake Matheson's legendary mirror reflection of New Zealand's highest peaks."
  },
  {
    "id": "nz-27",
    "name": "Stewart Island / Rakiura & Kiwi Sanctuary",
    "nativeName": "Rakiura (Stewart Island)",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "Southland (Stewart Island)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Land of Glowing Skies",
      "Wild Kiwi Spotting"
    ],
    "wikiTitle": "Stewart_Island",
    "googleMapsQuery": "Halfmoon Bay, Stewart Island, New Zealand",
    "bestTimeToVisit": "Summer for mild weather; take a guided evening wildlife tour at Mamaku Point",
    "insiderTip": "Rakiura Stewart Island Kiwis outnumber human residents 30 to 1 and uniquely forage in broad daylight along secluded coastal beaches.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "New Zealand's third largest island, 85% of which is protected national park, offering primeval podocarp forests, Southern Lights (Aurora Australis), and wild kiwis."
  },
  {
    "id": "nz-28",
    "name": "Whakarewarewa Living Māori Village",
    "nativeName": "Whakarewarewa (Rotorua)",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "North Island (Rotorua)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "culture"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Living Māori Village",
      "Geothermal Cooking"
    ],
    "wikiTitle": "Whakarewarewa",
    "googleMapsQuery": "Whakarewarewa The Living Maori Village, Rotorua, New Zealand",
    "bestTimeToVisit": "Midday for traditional poi dance performances and a fresh corn cob cooked in natural boiling mineral springs",
    "insiderTip": "Tūhourangi Ngāti Wāhiao people have lived here continuously since the 1800s, cooking food in boiling geothermal steam boxes (hāngi) and bathing in natural hot pools.",
    "fallbackImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A living Māori village situated directly amidst active geothermal steam vents and hot springs, where residents have utilized the earth's natural heat for centuries."
  },
  {
    "id": "nz-29",
    "name": "Piha Beach & Lion Rock",
    "nativeName": "Piha (Waitākere Ranges)",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "North Island (Auckland Coast)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "coastal",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Black Iron Sand",
      "Wild Surf Coast"
    ],
    "wikiTitle": "Piha",
    "googleMapsQuery": "Lion Rock, Piha Beach, Auckland, New Zealand",
    "bestTimeToVisit": "Late afternoon to catch moody golden light reflecting off glistening black sands",
    "insiderTip": "The dramatic black volcanic sand contains titanomagnetite iron ore and gets scorchingly hot in summer; always wear sandals down to the water.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A legendary surf beach on Auckland's wild west coast, featuring glittering black iron-ore sands, pounding Tasman waves, and the massive volcanic citadel Lion Rock."
  },
  {
    "id": "nz-30",
    "name": "Hokitika Gorge Glacial River",
    "nativeName": "Hokitika Gorge (West Coast)",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "South Island (West Coast)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Vivid Turquoise Waters",
      "Swingbridge Trail"
    ],
    "wikiTitle": "Hokitika_Gorge",
    "googleMapsQuery": "Hokitika Gorge Walk, Kokatahi, New Zealand",
    "bestTimeToVisit": "Sunny day following dry weather when glacial rock flour gives the river an unreal turquoise-cyan glow",
    "insiderTip": "Cross the curved 90-meter suspension bridge over the river and step out onto the lower boardwalk to see white limestone rocks framed by lush podocarp forest.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "An astonishing natural gorge on the South Island's West Coast where brilliant milky-turquoise glacial river waters carve through white granite rock walls."
  },
  {
    "id": "nz-31",
    "name": "Cape Reinga Lighthouse & Two Oceans Collide",
    "nativeName": "Te Rerenga Wairua (Cape Reinga)",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "North Island (Far North)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "culture"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Meeting of Two Oceans",
      "Sacred Māori Leaping Place"
    ],
    "wikiTitle": "Cape_Reinga",
    "googleMapsQuery": "Cape Reinga Lighthouse, Far North, New Zealand",
    "bestTimeToVisit": "Morning on a clear day; stop at Giant Te Paki Sand Dunes for sandboarding on the way",
    "insiderTip": "Look out from the lighthouse to watch the turbulent swirling clash where the Tasman Sea collides with the Pacific Ocean over Columbia Bank.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The northern tip of New Zealand where the Tasman Sea and Pacific Ocean crash together; in Māori belief, spirits of the departed leap from an ancient pōhutukawa tree into the underworld."
  },
  {
    "id": "nz-32",
    "name": "Glenorchy & Paradise Valley",
    "nativeName": "Glenorchy (Otago)",
    "country": "new-zealand",
    "countryName": "New Zealand",
    "flag": "🇳🇿",
    "region": "South Island (Otago)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Lothlórien & Isengard",
      "Red Shed on the Lake"
    ],
    "wikiTitle": "Glenorchy,_New_Zealand",
    "googleMapsQuery": "Glenorchy Wharf, Otago, New Zealand",
    "bestTimeToVisit": "Autumn when the golden willow trees on the boardwalk reflect in the lagoon with snow-capped Mount Earnslaw",
    "insiderTip": "Photograph the iconic little red Glenorchy Heritage Shed on the wharf, then drive the gravel road out to the rural hamlet literally named Paradise.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A tranquil mountain settlement at the head of Lake Wakatipu surrounded by ancient beech forests and braided rivers, famous as the film backdrop for Isengard and Lothlórien."
  },
  {
    "id": "th-1",
    "name": "The Grand Palace & Wat Phra Kaew",
    "nativeName": "พระบรมมหาราชวัง (กรุงเทพฯ)",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Central Thailand (Bangkok)",
    "type": "iconic",
    "vibes": [
      "history",
      "culture"
    ],
    "vibeLabels": [
      "Food & Culture",
      "Emerald Buddha",
      "Royal Splendor"
    ],
    "wikiTitle": "Grand_Palace",
    "googleMapsQuery": "The Grand Palace, Bangkok, Thailand",
    "bestTimeToVisit": "Early morning (8:30 AM) right as gates open to avoid afternoon heat and tourist crowds",
    "insiderTip": "Strict dress code enforced: knees and shoulders must be fully covered; marvel at the Emerald Buddha carved from a single block of translucent green jade.",
    "fallbackImage": "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The ceremonial heart of the Thai monarchy since 1782, a dazzling complex of gold-leaf spires, mosaic-encrusted chedis, and the sacred Temple of the Emerald Buddha."
  },
  {
    "id": "th-2",
    "name": "Phi Phi Islands & Maya Bay",
    "nativeName": "หมู่เกาะพีพี (กระบี่)",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Andaman Sea (Krabi)",
    "type": "iconic",
    "vibes": [
      "coastal",
      "nature"
    ],
    "vibeLabels": [
      "Coastal & Islands",
      "Limestone Towers",
      "Turquoise Lagoons"
    ],
    "wikiTitle": "Phi_Phi_Islands",
    "googleMapsQuery": "Maya Bay, Ko Phi Phi Le, Krabi, Thailand",
    "bestTimeToVisit": "November to April for calm seas and sunny skies; book an early morning speedboat tour",
    "insiderTip": "Maya Bay now operates strict eco-regulations: swimming directly in the bay is prohibited to protect recovering blacktip reef sharks and coral reefs.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A stunning archipelago in the Andaman Sea featuring sheer karst limestone cliffs rising straight out of neon turquoise waters, crowned by the famed Maya Bay."
  },
  {
    "id": "th-3",
    "name": "Railay Beach & Phra Nang Cave",
    "nativeName": "หาดไร่เลย์ (กระบี่)",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Andaman Sea (Krabi)",
    "type": "iconic",
    "vibes": [
      "coastal",
      "adventure"
    ],
    "vibeLabels": [
      "Coastal & Islands",
      "World Rock Climbing",
      "Hidden Lagoons"
    ],
    "wikiTitle": "Railay_Beach",
    "googleMapsQuery": "Phra Nang Beach, Ao Nang, Krabi, Thailand",
    "bestTimeToVisit": "November to March; take a traditional wooden long-tail boat from Ao Nang pier",
    "insiderTip": "Scramble up the steep muddy rope trail to the Secret Princess Lagoon hidden inside a collapsed sinkhole in the center of the limestone headland.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A tranquil peninsula cut off from the mainland by massive limestone bluffs and accessible only by longtail boat, celebrated for world-class rock climbing and sunset beaches."
  },
  {
    "id": "th-4",
    "name": "Chiang Mai Old City & Wat Phra That Doi Suthep",
    "nativeName": "เชียงใหม่ (วัดพระธาตุดอยสุเทพ)",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Northern Thailand (Chiang Mai)",
    "type": "iconic",
    "vibes": [
      "culture",
      "history"
    ],
    "vibeLabels": [
      "Food & Culture",
      "Lanna Heritage",
      "Golden Mountain Chedi"
    ],
    "wikiTitle": "Chiang_Mai",
    "googleMapsQuery": "Wat Phra That Doi Suthep, Chiang Mai, Thailand",
    "bestTimeToVisit": "November during the Yi Peng Lantern Festival when thousands of floating lanterns light the night sky",
    "insiderTip": "Climb the 306-step staircase flanked by mythological seven-headed Naga serpents up to the golden chedi at sunset as Buddhist monks begin evening chants.",
    "fallbackImage": "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The historic capital of the ancient Lanna Kingdom, enclosed by moats and crumbling red-brick ramparts, presided over by the mountain shrine of Doi Suthep."
  },
  {
    "id": "th-5",
    "name": "Ayutthaya Historical Park",
    "nativeName": "อุทยานประวัติศาสตร์พระนครศรีอยุธยา",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Central Thailand (Ayutthaya)",
    "type": "iconic",
    "vibes": [
      "history"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Ancient Siamese Capital",
      "Buddha Head in Tree"
    ],
    "wikiTitle": "Ayutthaya_Historical_Park",
    "googleMapsQuery": "Wat Mahathat, Ayutthaya, Thailand",
    "bestTimeToVisit": "Late afternoon when the sun sets behind the towering brick prangs of Wat Chaiwatthanaram",
    "insiderTip": "Rent a bicycle to explore the island temple ruins at your own pace; do not miss the sandstone Buddha head gently intertwined in sacred banyan tree roots at Wat Mahathat.",
    "fallbackImage": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The glorious ruins of the second Siamese capital from 1350 to 1767, featuring atmospheric brick stupas, colossal Buddha statues, and riverside monasteries."
  },
  {
    "id": "th-6",
    "name": "Khao Sok National Park & Cheow Lan Lake",
    "nativeName": "อุทยานแห่งชาติเขาสก (สุราษฎร์ธานี)",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Southern Thailand (Surat Thani)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Floating Raft Houses",
      "Primeval Rainforest"
    ],
    "wikiTitle": "Khao_Sok_National_Park",
    "googleMapsQuery": "Cheow Lan Lake, Khao Sok, Surat Thani, Thailand",
    "bestTimeToVisit": "November to April for calm glassy lake conditions and clear hiking trails",
    "insiderTip": "Stay in a floating bamboo or wooden raft bungalow right on the emerald lake: wake up at dawn to early morning mist and the calls of wild gibbons echoing from the canopy.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "One of the oldest evergreen rainforests on Earth, featuring the dramatic Cheow Lan reservoir dotted with sheer karst towers, hidden caves, and floating overwater bungalows."
  },
  {
    "id": "th-7",
    "name": "Wat Arun (Temple of Dawn)",
    "nativeName": "วัดอรุณราชวรารามราชวรมหาวิหาร",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Central Thailand (Bangkok)",
    "type": "iconic",
    "vibes": [
      "history",
      "culture"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Porcelain Spire",
      "Chao Phraya River"
    ],
    "wikiTitle": "Wat_Arun",
    "googleMapsQuery": "Wat Arun, Bangkok, Thailand",
    "bestTimeToVisit": "Sunset from a rooftop restaurant across the Chao Phraya River, or early morning right at the temple",
    "insiderTip": "Examine the 82-meter central prang up close: it is intricately tiled with millions of pieces of colorful Chinese porcelain dishes salvaged from ship ballast.",
    "fallbackImage": "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Bangkok's iconic riverside landmark, boasting an 82-meter Khmer-style central spire encrusted with ornate floral mosaics of glazed porcelain and ceramics."
  },
  {
    "id": "th-8",
    "name": "Wat Rong Khun (The White Temple)",
    "nativeName": "วัดร่องขุ่น (เชียงราย)",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Northern Thailand (Chiang Rai)",
    "type": "iconic",
    "vibes": [
      "culture"
    ],
    "vibeLabels": [
      "Food & Culture",
      "Contemporary Art Temple",
      "Mirror Glass Mosaics"
    ],
    "wikiTitle": "Wat_Rong_Khun",
    "googleMapsQuery": "Wat Rong Khun, Chiang Rai, Thailand",
    "bestTimeToVisit": "Early morning on a sunny day when the white plaster and mirror flakes sparkle blindingly",
    "insiderTip": "Walk across the \"Bridge of the Cycle of Rebirth\" over hundreds of sculpted outreach hands symbolizing worldly desire, into the hall decorated with pop-culture murals.",
    "fallbackImage": "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Artist Chalermchai Kositpipat's unconventional white masterpiece, sparkling with embedded mirror glass and blending Buddhist iconography with modern pop-culture murals."
  },
  {
    "id": "th-9",
    "name": "Similan Islands Marine Sanctuary",
    "nativeName": "อุทยานแห่งชาติหมู่เกาะสิมิลัน (พังงา)",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Andaman Sea (Phang Nga)",
    "type": "iconic",
    "vibes": [
      "coastal",
      "nature"
    ],
    "vibeLabels": [
      "Coastal & Islands",
      "World Top Dive Site",
      "Sailing Rock"
    ],
    "wikiTitle": "Similan_Islands",
    "googleMapsQuery": "Donald Duck Bay, Similan Islands, Thailand",
    "bestTimeToVisit": "Open strictly from mid-October to mid-May to ensure marine ecosystem regeneration",
    "insiderTip": "Climb the wooden ladders to the top of Sail Rock on Island No. 8 for an iconic vista over Donald Duck Bay's unreal clear aquamarine shallows.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A pristine nine-island marine park in the Andaman Sea with 30-meter water visibility, underwater granite boulder playgrounds, manta rays, and sea turtles."
  },
  {
    "id": "th-10",
    "name": "Erawan National Park & Seven-Tier Waterfall",
    "nativeName": "น้ำตกเอราวัณ (กาญจนบุรี)",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Western Thailand (Kanchanaburi)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Seven Tier Pools",
      "Turquoise Mineral Falls"
    ],
    "wikiTitle": "Erawan_National_Park",
    "googleMapsQuery": "Erawan Waterfalls, Kanchanaburi, Thailand",
    "bestTimeToVisit": "Arrive at 8:00 AM before tour buses arrive and swim in tier 2 and tier 7 emerald plunge pools",
    "insiderTip": "Tier 7 is named after Erawan, the three-headed white elephant of Hindu mythology, because the tumbling water cascades resemble elephant trunks.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A multi-tiered jungle cascade tumbling over chalky limestone shelves into natural turquoise pools populated by harmless fish that provide gentle foot nibbles."
  },
  {
    "id": "th-11",
    "name": "Sukhothai Historical Park",
    "nativeName": "อุทยานประวัติศาสตร์สุโขทัย",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Lower Northern Thailand (Sukhothai)",
    "type": "iconic",
    "vibes": [
      "history"
    ],
    "vibeLabels": [
      "History & Heritage",
      "Dawn of Happiness",
      "Lotus Ponds & Buddhas"
    ],
    "wikiTitle": "Sukhothai_Historical_Park",
    "googleMapsQuery": "Wat Mahathat, Sukhothai Historical Park, Thailand",
    "bestTimeToVisit": "Sunrise when the lotus flowers open on surrounding moat ponds and morning mist envelops stone chedis",
    "insiderTip": "Sukhothai translates to \"Dawn of Happiness\"; rent an e-bike or bicycle at the park gate to ride peacefully among the peaceful moated temple islands.",
    "fallbackImage": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The first capital of the Kingdom of Siam in the 13th century, famous for serene graceful Buddha statues, lotus-filled moats, and exquisite classical Thai architecture."
  },
  {
    "id": "th-12",
    "name": "Pai Mountain Valley & Pai Canyon",
    "nativeName": "ปาย (แม่ฮ่องสอน)",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Northern Thailand (Mae Hong Son)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Bohemian Valley",
      "Narrow Canyon Ridges"
    ],
    "wikiTitle": "Pai,_Thailand",
    "googleMapsQuery": "Pai Canyon, Mae Hong Son, Thailand",
    "bestTimeToVisit": "November to February for crisp mountain air and evening street market food stalls",
    "insiderTip": "Walk the narrow red-clay ridge trails of Pai Canyon (Kong Lan) at sunset for views stretching across valleys framed by 762 mountain hairpins.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A laid-back mountain valley town in northern Thailand celebrated for its bohemian cafe culture, hot springs, waterfalls, and dizzying narrow canyon ridges."
  },
  {
    "id": "th-13",
    "name": "Ko Samui & Secret Buddha Garden",
    "nativeName": "เกาะสมุย (สุราษฎร์ธานี)",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Gulf of Thailand (Surat Thani)",
    "type": "iconic",
    "vibes": [
      "coastal",
      "culture"
    ],
    "vibeLabels": [
      "Coastal & Islands",
      "Coconut Island",
      "Big Buddha Shrine"
    ],
    "wikiTitle": "Ko_Samui",
    "googleMapsQuery": "Wat Phra Yai, Ko Samui, Thailand",
    "bestTimeToVisit": "January to April or June to September for dry sunny beach weather",
    "insiderTip": "Head up into the misty mountainous jungle interior to find Tarnim Magic Garden (Secret Buddha Garden), filled with stone statues hidden by a durian farmer.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Thailand's second-largest island, blanketed in coconut palms and ringed by white sand beaches, luxury beachfront villas, and the 12-meter golden Big Buddha shrine."
  },
  {
    "id": "th-14",
    "name": "Khao Phing Kan (James Bond Island)",
    "nativeName": "เขาพิงกัน และ เกาะตาปู (อ่าวพังงา)",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Andaman Sea (Phang Nga Bay)",
    "type": "iconic",
    "vibes": [
      "nature",
      "coastal"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Ko Ta Pu Needle",
      "James Bond 007 Island"
    ],
    "wikiTitle": "Khao_Phing_Kan",
    "googleMapsQuery": "James Bond Island, Phang Nga, Thailand",
    "bestTimeToVisit": "Early morning sea-kayak tour before tour boats arrive from Phuket",
    "insiderTip": "Kayak through the mangrove sea caves of Koh Panak and Koh Hong into hidden open-ceiling limestone hongs (rooms) where monkeys swing through the trees.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A famous limestone needle pinnacle in emerald Phang Nga Bay, famously featured as Scaramanga's hideout in the 1974 film \"The Man with the Golden Gun.\""
  },
  {
    "id": "th-15",
    "name": "Damnoen Saduak Floating Market",
    "nativeName": "ตลาดน้ำดำเนินสะดวก (ราชบุรี)",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Central Thailand (Ratchaburi)",
    "type": "iconic",
    "vibes": [
      "culture"
    ],
    "vibeLabels": [
      "Food & Culture",
      "Floating Market Canal",
      "Boat Street Food"
    ],
    "wikiTitle": "Damnoen_Saduak_floating_market",
    "googleMapsQuery": "Damnoen Saduak Floating Market, Ratchaburi, Thailand",
    "bestTimeToVisit": "Early morning (7:00-9:00 AM) when the canal is packed with fresh produce vendors in straw hats",
    "insiderTip": "Order freshly prepared coconut ice cream served in a real coconut shell and steaming boat noodles handed up to your wooden sampan.",
    "fallbackImage": "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Thailand's most famous floating market, where local canal vendors paddle wooden sampans laden with fresh mangoes, rambutan, grilled skewers, and coconut pancakes."
  },
  {
    "id": "th-16",
    "name": "Doi Inthanon National Park (The Roof of Thailand)",
    "nativeName": "อุทยานแห่งชาติดอยอินทนนท์",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Northern Thailand (Chiang Mai)",
    "type": "iconic",
    "vibes": [
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Nature & Scenic",
      "Highest Peak in Thailand",
      "Royal Twin Pagodas"
    ],
    "wikiTitle": "Doi_Inthanon_National_Park",
    "googleMapsQuery": "Twin Royal Pagodas, Doi Inthanon, Thailand",
    "bestTimeToVisit": "December to January when wild Himalayan cherry blossoms (Thai Sakura) bloom pink",
    "insiderTip": "Hike the 3km Kew Mae Pan Nature Trail at dawn above a rolling sea of clouds, guided by indigenous Hmong villagers through misty cloud forest.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "At 2,565 meters, Doi Inthanon is Thailand's highest summit, famous for cool montane cloud forests, thunderous waterfalls, and the magnificent Twin Royal Pagodas."
  },
  {
    "id": "th-17",
    "name": "Ko Tao Coral Reefs & Shark Bay",
    "nativeName": "เกาะเต่า (สุราษฎร์ธานี)",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Gulf of Thailand (Surat Thani)",
    "type": "iconic",
    "vibes": [
      "coastal",
      "adventure"
    ],
    "vibeLabels": [
      "Coastal & Islands",
      "Turtle Island",
      "Scuba Diving Capital"
    ],
    "wikiTitle": "Ko_Tao",
    "googleMapsQuery": "Shark Bay, Ko Tao, Thailand",
    "bestTimeToVisit": "March to August for calm visibility, warm sea temperatures, and whale shark season",
    "insiderTip": "Grab a snorkel mask and swim out into Shark Bay: harmless juvenile blacktip reef sharks and giant green sea turtles feed in the shallow seagrass beds daily.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The premier scuba diving training capital of Southeast Asia, known as Turtle Island for vibrant shallow coral reefs, whale shark encounters, and scenic granite boulder bays."
  },
  {
    "id": "th-18",
    "name": "Wat Pho – Temple of the Reclining Buddha",
    "nativeName": "วัดพระเชตุพนวิมลมังคลาราม (วัดโพธิ์)",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Central Thailand (Bangkok)",
    "type": "iconic",
    "vibes": [
      "history",
      "culture"
    ],
    "vibeLabels": [
      "Food & Culture",
      "46m Reclining Buddha",
      "Birthplace of Thai Massage"
    ],
    "wikiTitle": "Wat_Pho",
    "googleMapsQuery": "Wat Pho, Phra Nakhon, Bangkok, Thailand",
    "bestTimeToVisit": "Late morning; drop 108 coins into the bronze alms bowls along the temple corridor for good karma",
    "insiderTip": "Wat Pho is the national headquarters for traditional Thai medicine; book a traditional 60-minute massage at the open-air pavilion inside the temple grounds.",
    "fallbackImage": "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "One of Bangkok's oldest temples, housing a colossal 46-meter gold-plated reclining Buddha with mother-of-pearl inlaid soles, and recognized as the birthplace of traditional Thai massage."
  },
  {
    "id": "th-19",
    "name": "Ko Lanta & Mu Ko Lanta National Park",
    "nativeName": "เกาะลันตา (กระบี่)",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Andaman Sea (Krabi)",
    "type": "iconic",
    "vibes": [
      "coastal",
      "nature"
    ],
    "vibeLabels": [
      "Coastal & Islands",
      "Laid-back Island Life",
      "Sunset Beaches"
    ],
    "wikiTitle": "Ko_Lanta",
    "googleMapsQuery": "Mu Ko Lanta National Park Lighthouse, Thailand",
    "bestTimeToVisit": "November to April when turquoise waters are flat and beach fire shows illuminate Klong Nin",
    "insiderTip": "Rent a scooter to explore the quiet southern tip at Ta Noad Cape, where a lone white lighthouse stands over twin rocky and sandy beaches.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A long, tranquil island in the Andaman Sea offering miles of uncrowded golden beaches, mangrove forests, Sea Gypsy stilt villages, and scenic headland lighthouses."
  },
  {
    "id": "th-20",
    "name": "Death Railway & Bridge over the River Kwai",
    "nativeName": "สะพานข้ามแม่น้ำแคว (กาญจนบุรี)",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Western Thailand (Kanchanaburi)",
    "type": "iconic",
    "vibes": [
      "history"
    ],
    "vibeLabels": [
      "History & Heritage",
      "WWII History",
      "River Kwai Bridge"
    ],
    "wikiTitle": "Bridge_over_the_River_Kwai",
    "googleMapsQuery": "Bridge Over the River Kwai, Kanchanaburi, Thailand",
    "bestTimeToVisit": "Morning; take the slow passenger train across the wooden Wang Po viaduct clinging to the cliff",
    "insiderTip": "Visit the nearby Hellfire Pass Memorial Museum, where Allied prisoners of war hand-cut through solid limestone rock with hammers and chisels.",
    "fallbackImage": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "The historic black iron bridge built by Allied prisoners of war during WWII, immortalized in literature and cinema as part of the tragic 415km Burma-Siam railway."
  },
  {
    "id": "th-21",
    "name": "Wat Chedi Luang & Monk Chats",
    "nativeName": "วัดเจดีย์หลวงวรวิหาร (เชียงใหม่)",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Northern Thailand (Chiang Mai)",
    "type": "iconic",
    "vibes": [
      "history",
      "culture"
    ],
    "vibeLabels": [
      "Food & Culture",
      "Ancient Monolithic Chedi",
      "Monk Chat Sessions"
    ],
    "wikiTitle": "Wat_Chedi_Luang",
    "googleMapsQuery": "Wat Chedi Luang, Chiang Mai, Thailand",
    "bestTimeToVisit": "Late afternoon when orange robes glow in golden sunlight around the elephant-carved base",
    "insiderTip": "Participate in the daily informal \"Monk Chat\" under the trees: young novice monks practice conversational English while sharing insights into Buddhist philosophy.",
    "fallbackImage": "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A ruined 15th-century brick chedi that once stood 82 meters high and housed the Emerald Buddha, surrounded by sculpted stone elephants and whispering banyan trees."
  },
  {
    "id": "th-22",
    "name": "Khao Yai National Park Wild Elephants",
    "nativeName": "อุทยานแห่งชาติเขาใหญ่",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Isan / Central Thailand (Nakhon Ratchasima)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Wild Elephant Safaris",
      "UNESCO Tropical Forest"
    ],
    "wikiTitle": "Khao_Yai_National_Park",
    "googleMapsQuery": "Haew Suwat Waterfall, Khao Yai, Thailand",
    "bestTimeToVisit": "November to February for pleasant weather; take a guided night spotlight safari",
    "insiderTip": "Visit Haew Suwat Waterfall inside the park — famously filmed in \"The Beach\" where Leonardo DiCaprio jumps into the churning plunge pool below.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Thailand's first national park and a UNESCO World Heritage site, home to roaming wild Asian elephants, gibbons, hornbills, and dramatic jungle waterfalls."
  },
  {
    "id": "th-23",
    "name": "Wat Sam Phran (The Giant Dragon Temple)",
    "nativeName": "วัดสามพราน (นครปฐม)",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Central Thailand (Nakhon Pathom)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "culture"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "17-Story Pink Tower",
      "Coiled Dragon Stairway"
    ],
    "wikiTitle": "Wat_Sam_Phran",
    "googleMapsQuery": "Wat Sam Phran Dragon Temple, Nakhon Pathom, Thailand",
    "bestTimeToVisit": "Morning on weekdays for quiet contemplation away from Bangkok day-trippers",
    "insiderTip": "Instead of an elevator, you can walk all the way up through the hollow belly of the green dragon wrapping around the 17-story pink cylindrical tower.",
    "fallbackImage": "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "An extraordinary 17-story pink cylindrical temple tower embraced by an enormous scaly green dragon whose hollow body houses a walking tunnel leading to the rooftop."
  },
  {
    "id": "th-24",
    "name": "Ko Lipe – The Maldives of Thailand",
    "nativeName": "เกาะหลีเป๊ะ (สตูล)",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Southern Andaman (Satun)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "coastal"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Maldives of Thailand",
      "Powder Sand & Coral"
    ],
    "wikiTitle": "Ko_Lipe",
    "googleMapsQuery": "Sunrise Beach, Ko Lipe, Satun, Thailand",
    "bestTimeToVisit": "December to April for crystal-calm turquoise waters and warm sea breezes",
    "insiderTip": "Wake up at Sunrise Beach (Chao Ley Beach) for morning colors, then walk 15 minutes across the car-free island to Sunset Beach for evening cocktails.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A tiny crescent island in the far southern Andaman Sea near Malaysia, celebrated for powder-soft white sand beaches, vibrant fringing coral reefs, and car-free footpaths."
  },
  {
    "id": "th-25",
    "name": "Mae Hong Son & Pang Oung Alpine Lake",
    "nativeName": "แม่ฮ่องสอน (ปางอุ๋ง)",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Northern Thailand (Mae Hong Son)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Switzerland of Thailand",
      "Pine Forests & Morning Mist"
    ],
    "wikiTitle": "Mae_Hong_Son",
    "googleMapsQuery": "Pang Oung, Mae Hong Son, Thailand",
    "bestTimeToVisit": "Winter (December to January) when temperatures drop and thick morning mist drifts over the lake",
    "insiderTip": "Hire a quiet bamboo raft with a local oarsman at dawn to drift silently across Pang Oung reservoir as black and white swans swim alongside.",
    "fallbackImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Dubbed the \"City of Three Mists\", this tranquil mountain province features Burmese-style Shan temples and Pang Oung, an alpine pine-fringed lake reminiscent of Switzerland."
  },
  {
    "id": "th-26",
    "name": "Yaowarat Road (Bangkok Chinatown)",
    "nativeName": "ถนนเยาวราช (กรุงเทพฯ)",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Central Thailand (Bangkok)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "culture"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Street Food Epicenter",
      "Neon Sizzle"
    ],
    "wikiTitle": "Yaowarat_Road",
    "googleMapsQuery": "Yaowarat Road, Samphanthawong, Bangkok, Thailand",
    "bestTimeToVisit": "7:00 PM to 11:00 PM when street food carts roll out under blazing neon shop signs",
    "insiderTip": "Queue up at Guay Jub Ouan Pochana (Michelin Bib Gourmand) for peppery rolled rice noodles and crispy pork belly served right outside the old cinema.",
    "fallbackImage": "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "One of the largest Chinatowns in the world, transformed at sundown into an electrifying culinary carnival of neon signs, sizzling woks, and legendary seafood stalls."
  },
  {
    "id": "th-27",
    "name": "Wat Pha Sorn Kaew (Temple on a Glass Cliff)",
    "nativeName": "วัดพระธาตุผาซ่อนแก้ว (เพชรบูรณ์)",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Northern Thailand (Phetchabun)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "culture",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Five White Buddhas",
      "Mosaic Glass Wonder"
    ],
    "wikiTitle": "Wat_Pha_Sorn_Kaew",
    "googleMapsQuery": "Wat Pha Sorn Kaew, Khao Kho, Phetchabun, Thailand",
    "bestTimeToVisit": "Early morning when low clouds drift through the surrounding Khao Kho mountain peaks",
    "insiderTip": "The pagoda is decorated with over 5 million colorful mosaic tiles, pottery shards, and Benjarong porcelain bowls; adjacent sits five nested white seated Buddhas.",
    "fallbackImage": "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A mountaintop sanctuary perched on an 830-meter cliff, featuring five descending pure-white seated Buddhas and a pagoda adorned with over 5 million colorful mosaic tiles."
  },
  {
    "id": "th-28",
    "name": "Nong Han Red Lotus Sea",
    "nativeName": "ทะเลบัวแดง (หนองหาน กุมภวาปี)",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Northeastern Thailand (Udon Thani)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Pink Lotus Wonderland",
      "Isan Water Secret"
    ],
    "wikiTitle": "Nong_Han_Kumphawapi_lake",
    "googleMapsQuery": "Red Lotus Lake, Kumphawapi, Udon Thani, Thailand",
    "bestTimeToVisit": "December to February; take a wooden boat between 6:00 AM and 10:00 AM before flowers close",
    "insiderTip": "Rent a traditional longtail boat to glide through narrow boat channels cut through millions of blooming tropical crimson-pink water lilies stretching to the horizon.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A 28-square-kilometer freshwater lake that bursts into a sea of millions of blooming pink-red tropical water lilies every winter, creating an unreal pink floral ocean."
  },
  {
    "id": "th-29",
    "name": "Mu Ko Ang Thong National Marine Park",
    "nativeName": "อุทยานแห่งชาติหมู่เกาะอ่างทอง",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Gulf of Thailand (Surat Thani)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "coastal"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "42 Limestone Islets",
      "Emerald Emerald Lake"
    ],
    "wikiTitle": "Mu_Ko_Ang_Thong_National_Park",
    "googleMapsQuery": "Ang Thong National Marine Park, Surat Thani, Thailand",
    "bestTimeToVisit": "March to October when the Gulf is sheltered and calm for sea kayaking",
    "insiderTip": "Climb the steep wooden steps on Ko Mae Ko to gaze into Talay Nai (Emerald Lake), a saltwater lagoon enclosed by limestone cliffs connected to the sea by underwater caves.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "An archipelago of 42 uninhabited limestone islands in the Gulf of Thailand, famed for hidden lagoons, limestone sinkholes, white beaches, and coral reefs."
  },
  {
    "id": "th-30",
    "name": "Ko Kut (Koh Kood) Untouched Island",
    "nativeName": "เกาะกูด (ตราด)",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Eastern Thailand (Trat)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "coastal"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Last Wild Island",
      "Crystal Clear Waters"
    ],
    "wikiTitle": "Ko_Kut",
    "googleMapsQuery": "Klong Chao Beach, Ko Kut, Trat, Thailand",
    "bestTimeToVisit": "November to April for calm crystal-clear emerald water and serene empty bays",
    "insiderTip": "Kayak up Klong Chao river from the beach straight into the jungle, then hike 10 minutes to swim in the cool freshwater pools of Klong Chao Waterfall.",
    "fallbackImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "Thailand's easternmost island near Cambodia, celebrated for untouched coconut-fringed bays, crystal-clear shallow waters, rainforest cascades, and peaceful seclusion."
  },
  {
    "id": "th-31",
    "name": "Wat Rong Suea Ten (The Blue Temple)",
    "nativeName": "วัดร่องเสือเต้น (เชียงราย)",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Northern Thailand (Chiang Rai)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "culture"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Electric Sapphire Walls",
      "Giant White Buddha"
    ],
    "wikiTitle": "Wat_Rong_Sua_Ten",
    "googleMapsQuery": "Wat Rong Seur Ten, Chiang Rai, Thailand",
    "bestTimeToVisit": "Late morning when sun filters through stained glass onto the pure white porcelain Buddha",
    "insiderTip": "Created by a student of the White Temple's master artist, the entire sanctuary is bathed in hypnotic shades of electric sapphire blue with opulent gold filigree.",
    "fallbackImage": "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A modern masterpiece in Chiang Rai covered in deep sapphire-blue paint and gold leaf detailing, with an ethereal white porcelain Buddha glowing in the main hall."
  },
  {
    "id": "th-32",
    "name": "Phu Chi Fa Sea of Mists & Cliff Peak",
    "nativeName": "วนอุทยานภูชี้ฟ้า (เชียงราย)",
    "country": "thailand",
    "countryName": "Thailand",
    "flag": "🇹🇭",
    "region": "Northern Thailand (Chiang Rai / Laos border)",
    "type": "hidden-gem",
    "vibes": [
      "hidden-gem",
      "nature",
      "adventure"
    ],
    "vibeLabels": [
      "Hidden Gem",
      "Mountain Pointing to Sky",
      "Sea of Mists at Dawn"
    ],
    "wikiTitle": "Phu_Chi_Fa",
    "googleMapsQuery": "Phu Chi Fa, Chiang Rai, Thailand",
    "bestTimeToVisit": "December to February; arrive at the cliff peak before 6:00 AM for sunrise",
    "insiderTip": "Phu Chi Fa means \"mountain pointing to the sky\" in Thai; stand on the sharp cliff ledge to watch the sun rise out of a dense white sea of clouds blankets over Laos below.",
    "fallbackImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    "curatedSummary": "A dramatic pointed mountain cliff rising 1,628 meters along the Thailand-Laos border, celebrated for sunrise vistas looking down onto a sprawling sea of morning mists."
  }
];
