// Curated database of iconic destinations and hidden gems across multiple countries
// Each destination includes exact Wikipedia titles for the REST API, vibes, regions, fallback images, and Google Maps queries.

export const COUNTRIES = [
  { id: 'japan', name: 'Japan', flag: '🇯🇵', adjective: 'Japanese', popularTag: 'Cherry Blossoms & Temples' },
  { id: 'italy', name: 'Italy', flag: '🇮🇹', adjective: 'Italian', popularTag: 'La Dolce Vita & Ruins' },
  { id: 'iceland', name: 'Iceland', flag: '🇮🇸', adjective: 'Icelandic', popularTag: 'Fire, Ice & Auroras' },
  { id: 'france', name: 'France', flag: '🇫🇷', adjective: 'French', popularTag: 'Châteaux, Coast & Gastronomy' },
  { id: 'usa', name: 'United States', flag: '🇺🇸', adjective: 'American', popularTag: 'National Parks & Canyons' },
  { id: 'all', name: 'All Countries', flag: '🌍', adjective: 'Global', popularTag: 'Worldwide Adventure' }
];

export const VIBES = [
  { id: 'all', label: 'All Vibes', icon: 'sparkles' },
  { id: 'nature', label: 'Nature & Scenic', icon: 'mountain' },
  { id: 'history', label: 'History & Heritage', icon: 'landmark' },
  { id: 'hidden-gem', label: 'Hidden Gems', icon: 'gem' },
  { id: 'culture', label: 'Food & Culture', icon: 'utensils' },
  { id: 'coastal', label: 'Coastal & Islands', icon: 'waves' },
  { id: 'adventure', label: 'Adventure & Wild', icon: 'compass' }
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
  }
];
