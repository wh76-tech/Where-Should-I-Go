// Where Should I Go? — Core Application Logic
import { COUNTRIES, VIBES, DESTINATIONS } from './destinations.js';

// Application State
const state = {
  selectedCountry: 'all', // Default to All Countries (worldwide)
  selectedContinent: 'all', // Default to show all countries
  selectedVibe: 'all',
  currentDestination: null,
  lastPickedId: null, // Strictly ensures no same place twice in a row
  recentHistory: [],
  wishlist: JSON.parse(localStorage.getItem('wsig_wishlist') || '[]'),
  soundEnabled: localStorage.getItem('wsig_sound') !== 'false', // default true
  darkMode: localStorage.getItem('wsig_dark_mode') !== 'false', // default true
  isAnimating: false,
  isCountriesExpanded: false, // Dropdown state for country list
  countrySearchQuery: '', // Active search filter when expanded
  wikiCache: new Map() // In-memory cache for Wikipedia REST API summaries and images
};

// Web Audio API Synthesizer for pleasant tactile sound feedback
class SoundFX {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
  }

  // Cartoon comic spin sound (boing / laser sweep)
  playWhoosh() {
    if (!state.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.15);
      osc.frequency.exponentialRampToValueAtTime(320, this.ctx.currentTime + 0.35);

      gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.18, this.ctx.currentTime + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.36);
    } catch (e) {
      console.warn('Audio feedback failed:', e);
    }
  }

  // Comic fanfare pop sound
  playChime() {
    if (!state.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const now = this.ctx.currentTime;
      // High bright cartoon triad: F5, A5, C6
      const notes = [698.46, 880.00, 1046.50];

      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);

        gain.gain.setValueAtTime(0.001, now + idx * 0.06);
        gain.gain.linearRampToValueAtTime(0.09, now + idx * 0.06 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.06 + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.36);
      });
    } catch (e) {
      console.warn('Audio feedback failed:', e);
    }
  }
}

const sfx = new SoundFX();

// DOM Element References
const elements = {
  continentTabs: document.getElementById('continentTabContainer'),
  countryPills: document.getElementById('countryPillContainer'),
  toggleCountriesBtn: document.getElementById('toggleCountriesBtn'),
  toggleCountriesText: document.getElementById('toggleCountriesText'),
  toggleCountriesIcon: document.getElementById('toggleCountriesIcon'),
  countrySearchWrapper: document.getElementById('countrySearchWrapper'),
  countrySearchInput: document.getElementById('countrySearchInput'),
  clearCountrySearchBtn: document.getElementById('clearCountrySearchBtn'),
  vibeChips: document.getElementById('vibeChipContainer'),
  surpriseBtn: document.getElementById('surpriseBtn'),
  spinAgainBtn: document.getElementById('spinAgainBtn'),
  poolStatusText: document.getElementById('poolStatusText'),
  
  // Destination Card
  destinationCardSection: document.getElementById('destinationCardSection'),
  destinationCard: document.getElementById('destinationCard'),
  imageSkeleton: document.getElementById('imageSkeleton'),
  cardImage: document.getElementById('cardImage'),
  badgeCountry: document.getElementById('badgeCountry'),
  badgeFlag: document.getElementById('badgeFlag'),
  badgeCountryName: document.getElementById('badgeCountryName'),
  badgeType: document.getElementById('badgeType'),
  badgeTypeText: document.getElementById('badgeTypeText'),
  wikiImageLink: document.getElementById('wikiImageLink'),
  cardRegion: document.getElementById('cardRegion'),
  cardTitle: document.getElementById('cardTitle'),
  cardNativeTitle: document.getElementById('cardNativeTitle'),
  cardVibeTagsContainer: document.getElementById('cardVibeTagsContainer'),
  summarySkeleton: document.getElementById('summarySkeleton'),
  cardSummaryText: document.getElementById('cardSummaryText'),
  cardWikiArticleLink: document.getElementById('cardWikiArticleLink'),
  cardBestSeason: document.getElementById('cardBestSeason'),
  cardInsiderTip: document.getElementById('cardInsiderTip'),
  cardMapsLink: document.getElementById('cardMapsLink'),
  cardWishlistBtn: document.getElementById('cardWishlistBtn'),
  wishlistHeartIcon: document.getElementById('wishlistHeartIcon'),
  cardShareBtn: document.getElementById('cardShareBtn'),
  spinIcon: document.getElementById('spinIcon'),

  // History & Wishlist Drawer
  recentHistoryContainer: document.getElementById('recentHistoryContainer'),
  historyCountText: document.getElementById('historyCountText'),
  wishlistCountBadge: document.getElementById('wishlistCountBadge'),
  openWishlistBtn: document.getElementById('openWishlistBtn'),
  closeWishlistBtn: document.getElementById('closeWishlistBtn'),
  wishlistDrawer: document.getElementById('wishlistDrawer'),
  wishlistDrawerBackdrop: document.getElementById('wishlistDrawerBackdrop'),
  wishlistItemsContainer: document.getElementById('wishlistItemsContainer'),
  drawerCountText: document.getElementById('drawerCountText'),
  clearWishlistBtn: document.getElementById('clearWishlistBtn'),
  copyWishlistBtn: document.getElementById('copyWishlistBtn'),

  // Header controls
  themeToggleBtn: document.getElementById('themeToggleBtn'),
  themeIcon: document.getElementById('themeIcon'),
  themeLabel: document.getElementById('themeLabel'),
  soundToggleBtn: document.getElementById('soundToggleBtn'),
  soundIcon: document.getElementById('soundIcon'),

  // Toast
  toast: document.getElementById('toastNotification'),
  toastMessage: document.getElementById('toastMessage')
};

const CONTINENTS = [
  { id: 'all', name: 'All Regions', icon: '🌍' },
  { id: 'asia', name: 'Asia', icon: '🏯' },
  { id: 'europe', name: 'Europe', icon: '🏰' },
  { id: 'americas', name: 'Americas', icon: '🗽' },
  { id: 'oceania-africa', name: 'Oceania & Africa', icon: '🦘' }
];

// Initialize Application
function init() {
  renderContinentTabs();
  renderCountryPills();
  renderVibeChips();
  updateWishlistUI();
  updateSoundUI();
  updateThemeUI();
  attachEventListeners();

  // Initial pick from All Countries (worldwide) so the page starts with a gorgeous destination ready to explore
  randomizeDestination(false);
}

// Render Continent / Region Quick Filter Bar
function renderContinentTabs() {
  if (!elements.continentTabs) return;
  elements.continentTabs.innerHTML = '';

  CONTINENTS.forEach(c => {
    const btn = document.createElement('button');
    const isActive = state.selectedContinent === c.id;
    const count = c.id === 'all'
      ? COUNTRIES.filter(x => x.id !== 'all').length
      : COUNTRIES.filter(x => x.continent === c.id).length;
    btn.className = `px-3 py-1 rounded-xl text-xs sm:text-sm font-comic transition-all border-2 border-black flex items-center gap-1.5 cursor-pointer shadow-[2px_2px_0_#000] active:scale-95 ${
      isActive
        ? 'bg-comic-pink text-white rotate-[-1deg] font-bold shadow-[3px_3px_0_#000]'
        : 'bg-white dark:bg-slate-800 text-black dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'
    }`;
    btn.innerHTML = `<span class="text-sm">${c.icon}</span><span>${c.name.toUpperCase()} (${count})</span>`;
    
    btn.addEventListener('click', () => {
      if (state.soundEnabled) sfx.playWhoosh();
      state.selectedContinent = c.id;
      renderContinentTabs();
      renderCountryPills();
    });

    elements.continentTabs.appendChild(btn);
  });
}

function getContinentName(continentId) {
  const match = CONTINENTS.find(c => c.id === continentId);
  return match ? match.name : '';
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, m => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  })[m]);
}

// Render Country Selection Tabs with Collapsible Dropdown
function renderCountryPills() {
  if (!elements.countryPills) return;
  elements.countryPills.innerHTML = '';
  
  const allCountry = COUNTRIES.find(c => c.id === 'all');
  let otherCountries = COUNTRIES.filter(c => {
    if (c.id === 'all') return false;
    if (state.selectedContinent === 'all') return true;
    return c.continent === state.selectedContinent;
  });

  const totalFilteredCount = otherCountries.length;

  // Handle Search Filtering when expanded
  if (state.isCountriesExpanded && state.countrySearchQuery) {
    const q = state.countrySearchQuery.toLowerCase();
    otherCountries = otherCountries.filter(c => 
      c.name.toLowerCase().includes(q) || 
      (c.adjective && c.adjective.toLowerCase().includes(q))
    );
  }

  // Determine countries to display
  let countriesToRender = [];
  const collapsedLimit = state.selectedContinent === 'all' ? 14 : 10;

  if (state.isCountriesExpanded) {
    // Show all matching countries
    countriesToRender = allCountry && !state.countrySearchQuery ? [allCountry, ...otherCountries] : otherCountries;
    if (allCountry && state.countrySearchQuery && 'all countries worldwide global'.includes(state.countrySearchQuery)) {
      countriesToRender = [allCountry, ...countriesToRender];
    }
  } else {
    // Collapsed: show initial subset
    const initialSubset = otherCountries.slice(0, collapsedLimit);
    
    // Always ensure selectedCountry is visible if selected and in this continent
    if (state.selectedCountry !== 'all' && !initialSubset.some(c => c.id === state.selectedCountry)) {
      const selectedObj = otherCountries.find(c => c.id === state.selectedCountry);
      if (selectedObj) {
        initialSubset.push(selectedObj);
      }
    }

    countriesToRender = allCountry ? [allCountry, ...initialSubset] : initialSubset;
  }

  // Update Dropdown Toggle Button & Search Bar UI
  if (elements.toggleCountriesBtn) {
    const hiddenCount = totalFilteredCount - Math.min(totalFilteredCount, collapsedLimit);
    
    if (totalFilteredCount <= collapsedLimit) {
      elements.toggleCountriesBtn.classList.add('hidden');
      if (elements.countrySearchWrapper) elements.countrySearchWrapper.classList.add('hidden');
    } else {
      elements.toggleCountriesBtn.classList.remove('hidden');
      
      if (state.isCountriesExpanded) {
        if (elements.toggleCountriesText) {
          elements.toggleCountriesText.textContent = '▲ SHOW LESS (COLLAPSE)';
        }
        if (elements.toggleCountriesIcon) {
          elements.toggleCountriesIcon.setAttribute('data-lucide', 'chevron-up');
        }
        if (elements.countrySearchWrapper) {
          elements.countrySearchWrapper.classList.remove('hidden');
        }
      } else {
        const continentName = state.selectedContinent === 'all' ? '' : ` ${getContinentName(state.selectedContinent)}`;
        if (elements.toggleCountriesText) {
          elements.toggleCountriesText.textContent = `▼ SHOW ALL ${totalFilteredCount}${continentName.toUpperCase()} COUNTRIES (+${hiddenCount} MORE)`;
        }
        if (elements.toggleCountriesIcon) {
          elements.toggleCountriesIcon.setAttribute('data-lucide', 'chevron-down');
        }
        if (elements.countrySearchWrapper) {
          elements.countrySearchWrapper.classList.add('hidden');
        }
      }
    }
  }

  if (countriesToRender.length === 0) {
    const emptyMsg = document.createElement('div');
    emptyMsg.className = 'py-4 text-center text-sm font-comic text-slate-500 dark:text-slate-400 w-full';
    emptyMsg.innerHTML = `No countries match "<strong>${escapeHtml(state.countrySearchQuery)}</strong>". <button id="resetSearchPillBtn" class="underline text-comic-pink ml-1 cursor-pointer font-bold">Clear search</button>`;
    elements.countryPills.appendChild(emptyMsg);
    
    const resetBtn = document.getElementById('resetSearchPillBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        state.countrySearchQuery = '';
        if (elements.countrySearchInput) elements.countrySearchInput.value = '';
        if (elements.clearCountrySearchBtn) elements.clearCountrySearchBtn.classList.add('hidden');
        renderCountryPills();
      });
    }
    refreshLucideIcons();
    return;
  }

  countriesToRender.forEach((country, idx) => {
    const btn = document.createElement('button');
    const isActive = country.id === state.selectedCountry;
    const tilt = idx % 2 === 0 ? 'rotate-[-1deg]' : 'rotate-[1deg]';
    
    btn.className = `comic-btn px-3 py-1.5 rounded-xl text-xs sm:text-sm font-comic flex items-center gap-1.5 transition-all cursor-pointer ${
      isActive 
        ? 'bg-comic-yellow text-black border-3 border-black shadow-[4px_4px_0_#000] ' + tilt 
        : 'bg-white dark:bg-slate-800 text-black dark:text-white border-2 border-black hover:bg-slate-100 dark:hover:bg-slate-700'
    }`;
    btn.innerHTML = `<span class="text-base">${country.flag}</span><span class="tracking-wide">${country.name.toUpperCase()}</span>`;
    
    btn.addEventListener('click', () => {
      if (state.soundEnabled) sfx.playWhoosh();
      if (state.selectedCountry !== country.id) {
        state.selectedCountry = country.id;
        renderCountryPills();
        updatePoolStatus();
        randomizeDestination(true);
      }
    });

    elements.countryPills.appendChild(btn);
  });

  refreshLucideIcons();
}

// Render Vibe Filter Chips
function renderVibeChips() {
  elements.vibeChips.innerHTML = '';

  VIBES.forEach((vibe, idx) => {
    const btn = document.createElement('button');
    const isActive = vibe.id === state.selectedVibe;
    const tilt = idx % 2 === 0 ? 'rotate-[-1.5deg]' : 'rotate-[1.5deg]';

    btn.className = `comic-btn px-3 py-1 rounded-xl text-xs font-comic flex items-center gap-1.5 transition-all ${
      isActive 
        ? 'bg-comic-pink text-white border-2 border-black shadow-[3px_3px_0_#000] ' + tilt
        : 'bg-white dark:bg-slate-800 text-black dark:text-white border-2 border-black hover:bg-slate-100 dark:hover:bg-slate-700'
    }`;
    
    btn.innerHTML = `<span class="tracking-wide">${vibe.label.toUpperCase()}</span>`;

    btn.addEventListener('click', () => {
      state.selectedVibe = vibe.id;
      renderVibeChips();
      updatePoolStatus();
      randomizeDestination(true);
    });

    elements.vibeChips.appendChild(btn);
  });
}

// Calculate Current Destination Pool
function getFilteredPool() {
  return DESTINATIONS.filter(item => {
    // Country filter
    const matchesCountry = state.selectedCountry === 'all' || item.country === state.selectedCountry;
    // Vibe filter
    const matchesVibe = state.selectedVibe === 'all' || item.vibes.includes(state.selectedVibe);
    return matchesCountry && matchesVibe;
  });
}

// Update Pool Counter Text
function updatePoolStatus() {
  const pool = getFilteredPool();
  const countryObj = COUNTRIES.find(c => c.id === state.selectedCountry) || { name: 'Curated' };
  const vibeObj = VIBES.find(v => v.id === state.selectedVibe);

  let vibeText = vibeObj && vibeObj.id !== 'all' ? ` matching "${vibeObj.label}"` : '';
  const locationName = state.selectedCountry === 'all' ? 'All Countries (Worldwide)' : countryObj.name;
  elements.poolStatusText.innerHTML = `
    <i data-lucide="map-pin" class="w-3.5 h-3.5 text-sky-400 inline"></i>
    <span>Selecting from <strong>${pool.length}</strong> spots across ${locationName}${vibeText}</span>
  `;
  refreshLucideIcons();
}

// Randomly Select Destination (Strictly No Consecutive Repeats)
function selectRandomDestination() {
  const pool = getFilteredPool();

  if (pool.length === 0) {
    showToast('No destinations match this filter. Resetting vibe...', 'info');
    state.selectedVibe = 'all';
    renderVibeChips();
    return selectRandomDestination();
  }

  // If pool has more than 1 item, filter out the last picked ID to guarantee no duplicate twice in a row!
  let candidates = pool;
  if (pool.length > 1 && state.lastPickedId) {
    candidates = pool.filter(dest => dest.id !== state.lastPickedId);
  }

  const randomIndex = Math.floor(Math.random() * candidates.length);
  const picked = candidates[randomIndex];
  
  state.lastPickedId = picked.id;
  return picked;
}

// Fetch from Free Wikipedia REST API with in-memory caching and fallback
async function fetchWikipediaData(destination) {
  const cacheKey = destination.wikiTitle;

  if (state.wikiCache.has(cacheKey)) {
    return state.wikiCache.get(cacheKey);
  }

  try {
    const cleanTitle = decodeURIComponent(destination.wikiTitle);
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(cleanTitle)}`;
    const response = await fetch(url, {
      headers: {
        'Api-User-Agent': 'WhereShouldIGo/1.0 (https://github.com; travel-discovery-app)'
      }
    });

    if (!response.ok) {
      throw new Error(`Wikipedia REST API returned ${response.status}`);
    }

    const data = await response.json();

    // Select high-resolution photo: prioritize originalimage, fall back to thumbnail, fall back to curatedFallback
    let imageUrl = destination.fallbackImage;
    if (data.originalimage && data.originalimage.source) {
      imageUrl = data.originalimage.source;
    } else if (data.thumbnail && data.thumbnail.source) {
      imageUrl = data.thumbnail.source;
    }

    // Extract summary
    const summary = data.extract || destination.curatedSummary;
    const wikiPageUrl = data.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${encodeURIComponent(cleanTitle)}`;

    const result = {
      title: data.title || destination.name,
      imageUrl: imageUrl,
      summary: summary,
      wikiUrl: wikiPageUrl,
      source: 'api'
    };

    state.wikiCache.set(cacheKey, result);
    return result;
  } catch (error) {
    console.warn(`Wikipedia API fetch fallback for ${destination.name}:`, error.message);
    const cleanTitle = decodeURIComponent(destination.wikiTitle);
    const fallbackResult = {
      title: destination.name,
      imageUrl: destination.fallbackImage,
      summary: destination.curatedSummary,
      wikiUrl: `https://en.wikipedia.org/wiki/${encodeURIComponent(cleanTitle)}`,
      source: 'fallback'
    };
    state.wikiCache.set(cacheKey, fallbackResult);
    return fallbackResult;
  }
}

// Populate Card DOM cleanly
function populateCardDOM(dest, wikiData = null) {
  elements.badgeFlag.textContent = dest.flag;
  elements.badgeCountryName.textContent = dest.countryName;
  
  const countryHeader = document.getElementById('badgeCountryNameHeader');
  if (countryHeader) {
    countryHeader.textContent = `TARGET DOSSIER: ${dest.countryName.toUpperCase()}`;
  }

  elements.badgeTypeText.textContent = dest.type === 'hidden-gem' ? 'SECRET GEM' : 'ICONIC SPOT';
  const typeIcon = document.getElementById('badgeTypeIcon');
  if (typeIcon) {
    typeIcon.textContent = dest.type === 'hidden-gem' ? '💎' : '⭐';
  }

  elements.cardRegion.textContent = dest.region;
  elements.cardTitle.textContent = dest.name;
  elements.cardNativeTitle.textContent = dest.nativeName || '';
  elements.cardBestSeason.textContent = dest.bestTimeToVisit;
  elements.cardInsiderTip.textContent = dest.insiderTip;

  // Google Maps link setup
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dest.googleMapsQuery)}`;
  elements.cardMapsLink.href = mapsUrl;

  // Render Vibe Tags
  renderCardVibeTags(dest);

  // Update Wishlist Heart Status
  updateWishlistButtonState(dest.id);

  // Set Image & Summary
  const cleanTitle = decodeURIComponent(dest.wikiTitle);
  const defaultWikiUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(cleanTitle)}`;

  const finalImg = wikiData?.imageUrl || dest.fallbackImage;
  const finalSummary = wikiData?.summary || dest.curatedSummary;
  const finalWikiUrl = wikiData?.wikiUrl || defaultWikiUrl;

  elements.cardImage.src = finalImg;
  elements.cardImage.alt = dest.name;
  elements.cardImage.style.opacity = '1';
  elements.imageSkeleton.style.display = 'none';

  elements.cardSummaryText.textContent = finalSummary;
  elements.summarySkeleton.style.display = 'none';
  elements.cardSummaryText.classList.remove('hidden');

  elements.wikiImageLink.href = finalWikiUrl;
  elements.cardWikiArticleLink.href = finalWikiUrl;

  refreshLucideIcons();
}

// Execute Randomization Flow with Smooth Hardware-Accelerated 3D Card-Flip Animation
async function randomizeDestination(animate = true) {
  if (state.isAnimating) return;

  const nextDestination = selectRandomDestination();
  if (!nextDestination) return;

  state.isAnimating = true;

  // Spin icon animation on button
  state.spinDegrees = (state.spinDegrees || 0) + 360;
  elements.spinIcon.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
  elements.spinIcon.style.transform = `rotate(${state.spinDegrees}deg)`;

  if (!animate) {
    const initialWiki = await fetchWikipediaData(nextDestination);
    populateCardDOM(nextDestination, initialWiki);
    state.currentDestination = nextDestination;
    addToRecentHistory(nextDestination, initialWiki.imageUrl);
    state.isAnimating = false;
    return;
  }

  // Sound feedback
  sfx.playWhoosh();

  // Kick off Wikipedia prefetch immediately
  const wikiPromise = fetchWikipediaData(nextDestination);

  // Phase 1: Card rotates 90deg edge-on (duration: 220ms)
  elements.destinationCard.classList.remove('flip-in', 'flip-snap');
  elements.destinationCard.classList.add('flip-out');

  // Midpoint: at 220ms, card is edge-on (0px visible width). Update DOM silently!
  setTimeout(async () => {
    // Check if wikiData is ready immediately (e.g. from cache)
    let wikiData = null;
    try {
      wikiData = await Promise.race([
        wikiPromise,
        new Promise(resolve => setTimeout(() => resolve(null), 60))
      ]);
    } catch (e) {
      wikiData = null;
    }

    // Populate DOM seamlessly while card is edge-on
    populateCardDOM(nextDestination, wikiData);

    // Snap to -90deg position without animation
    elements.destinationCard.classList.remove('flip-out');
    elements.destinationCard.classList.add('flip-snap');

    // Force layout reflow
    void elements.destinationCard.offsetWidth;

    // Phase 2: Card springs forward smoothly from -90deg to 0deg
    requestAnimationFrame(() => {
      elements.destinationCard.classList.remove('flip-snap');
      elements.destinationCard.classList.add('flip-in');
      sfx.playChime();
    });

    // If Wikipedia data finishes shortly after, smoothly enhance summary & photo
    if (!wikiData) {
      wikiData = await wikiPromise;
      if (state.currentDestination?.id === nextDestination.id) {
        elements.cardSummaryText.textContent = wikiData.summary;
        elements.cardWikiArticleLink.href = wikiData.wikiUrl;
        elements.wikiImageLink.href = wikiData.wikiUrl;
        if (wikiData.imageUrl && wikiData.imageUrl !== nextDestination.fallbackImage) {
          const img = new Image();
          img.onload = () => {
            elements.cardImage.src = wikiData.imageUrl;
          };
          img.src = wikiData.imageUrl;
        }
      }
    }

    state.currentDestination = nextDestination;
    addToRecentHistory(nextDestination, wikiData ? wikiData.imageUrl : nextDestination.fallbackImage);

  }, 220);

  // Complete animation lifecycle
  setTimeout(() => {
    elements.destinationCard.classList.remove('flip-in');
    state.isAnimating = false;
  }, 560);
}

// Render Vibe Tags on Card
function renderCardVibeTags(dest) {
  elements.cardVibeTagsContainer.innerHTML = '';

  // Type badge tag (comic burst)
  const typeTag = document.createElement('span');
  typeTag.className = `comic-box-sm px-3.5 py-1 text-xs font-comic flex items-center gap-1.5 ${
    dest.type === 'hidden-gem'
      ? 'bg-comic-pink text-white rotate-[-2deg]'
      : 'bg-comic-yellow text-black rotate-[2deg]'
  }`;
  typeTag.innerHTML = `
    <span>${dest.type === 'hidden-gem' ? '💎' : '⚡'}</span>
    <span>${dest.type === 'hidden-gem' ? 'SECRET HIDDEN GEM!' : 'ICONIC WONDER!'}</span>
  `;
  elements.cardVibeTagsContainer.appendChild(typeTag);

  // Curated labels with comic rotation
  dest.vibeLabels.forEach((label, idx) => {
    const tag = document.createElement('span');
    const tilt = idx % 2 === 0 ? 'rotate-[-1deg]' : 'rotate-[1deg]';
    tag.className = `comic-box-sm px-3 py-1 bg-white dark:bg-slate-800 text-black dark:text-white text-xs font-comic ${tilt}`;
    tag.textContent = label.toUpperCase();
    elements.cardVibeTagsContainer.appendChild(tag);
  });
}

// Add Destination to Recent Session History
function addToRecentHistory(dest, imgUrl) {
  // Remove if already in history to move to front
  state.recentHistory = state.recentHistory.filter(h => h.id !== dest.id);
  state.recentHistory.unshift({ ...dest, previewImg: imgUrl });

  // Limit to last 8 items
  if (state.recentHistory.length > 8) {
    state.recentHistory.pop();
  }

  renderRecentHistory();
}

// Render Recent History Thumbnails
function renderRecentHistory() {
  if (state.recentHistory.length === 0) {
    elements.recentHistoryContainer.innerHTML = '<p class="font-comic text-slate-500 dark:text-slate-400 py-2">Places you spin will appear here like comic panels!</p>';
    elements.historyCountText.textContent = '0 SPOTS LOGGED';
    return;
  }

  elements.historyCountText.textContent = `${state.recentHistory.length} SPOTS LOGGED`;
  elements.recentHistoryContainer.innerHTML = '';

  state.recentHistory.forEach(item => {
    const pill = document.createElement('button');
    pill.className = 'flex-shrink-0 flex items-center gap-2 p-1.5 pr-3 bg-white dark:bg-slate-800 text-black dark:text-white comic-box-sm transition group text-left cursor-pointer';
    pill.innerHTML = `
      <img src="${item.previewImg || item.fallbackImage}" alt="${item.name}" class="w-9 h-9 rounded-lg border-2 border-black object-cover" />
      <div class="flex flex-col">
        <span class="font-comic text-xs line-clamp-1 group-hover:text-comic-pink">${item.flag} ${item.name.toUpperCase()}</span>
        <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400 line-clamp-1">${item.region}</span>
      </div>
    `;

    pill.addEventListener('click', () => {
      // Pick this specific destination
      state.lastPickedId = item.id;
      state.currentDestination = item;
      loadSpecificDestination(item);
    });

    elements.recentHistoryContainer.appendChild(pill);
  });
}

// Load a specific destination without randomizing
async function loadSpecificDestination(dest) {
  if (state.isAnimating) return;
  state.isAnimating = true;

  sfx.playWhoosh();
  const wikiPromise = fetchWikipediaData(dest);

  elements.destinationCard.classList.remove('flip-in', 'flip-snap');
  elements.destinationCard.classList.add('flip-out');

  setTimeout(async () => {
    let wikiData = null;
    try {
      wikiData = await Promise.race([
        wikiPromise,
        new Promise(resolve => setTimeout(() => resolve(null), 60))
      ]);
    } catch (e) {
      wikiData = null;
    }

    populateCardDOM(dest, wikiData);

    elements.destinationCard.classList.remove('flip-out');
    elements.destinationCard.classList.add('flip-snap');
    void elements.destinationCard.offsetWidth;

    requestAnimationFrame(() => {
      elements.destinationCard.classList.remove('flip-snap');
      elements.destinationCard.classList.add('flip-in');
      sfx.playChime();
    });

    if (!wikiData) {
      wikiData = await wikiPromise;
      if (state.currentDestination?.id === dest.id) {
        elements.cardSummaryText.textContent = wikiData.summary;
        elements.cardWikiArticleLink.href = wikiData.wikiUrl;
        elements.wikiImageLink.href = wikiData.wikiUrl;
        if (wikiData.imageUrl && wikiData.imageUrl !== dest.fallbackImage) {
          const img = new Image();
          img.onload = () => {
            elements.cardImage.src = wikiData.imageUrl;
          };
          img.src = wikiData.imageUrl;
        }
      }
    }

    state.currentDestination = dest;
  }, 220);

  setTimeout(() => {
    elements.destinationCard.classList.remove('flip-in');
    state.isAnimating = false;
  }, 560);

  // Scroll smoothly to card if on mobile
  if (window.innerWidth < 768) {
    elements.destinationCardSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Wishlist Management
function toggleWishlist(dest) {
  if (!dest) return;

  const existsIndex = state.wishlist.findIndex(item => item.id === dest.id);

  if (existsIndex > -1) {
    state.wishlist.splice(existsIndex, 1);
    showToast(`Removed "${dest.name}" from wishlist`, 'info');
  } else {
    state.wishlist.push({
      id: dest.id,
      name: dest.name,
      country: dest.country,
      countryName: dest.countryName,
      flag: dest.flag,
      region: dest.region,
      googleMapsQuery: dest.googleMapsQuery,
      wikiTitle: dest.wikiTitle,
      fallbackImage: dest.fallbackImage
    });
    showToast(`Saved "${dest.name}" to wishlist! 💖`, 'success');
  }

  localStorage.setItem('wsig_wishlist', JSON.stringify(state.wishlist));
  updateWishlistUI();
  updateWishlistButtonState(dest.id);
}

function updateWishlistButtonState(destId) {
  const isSaved = state.wishlist.some(item => item.id === destId);
  if (isSaved) {
    elements.wishlistHeartIcon.classList.add('text-rose-500', 'fill-rose-500');
    elements.wishlistHeartIcon.classList.remove('text-slate-300');
  } else {
    elements.wishlistHeartIcon.classList.remove('text-rose-500', 'fill-rose-500');
    elements.wishlistHeartIcon.classList.add('text-slate-300');
  }
}

function updateWishlistUI() {
  const count = state.wishlist.length;
  elements.wishlistCountBadge.textContent = count;
  elements.drawerCountText.textContent = `${count} SAVED DESTINATIONS`;

  if (count === 0) {
    elements.wishlistItemsContainer.innerHTML = `
      <div class="text-center py-12 px-4 text-slate-500 dark:text-slate-400">
        <span class="text-5xl block mb-3">⭐</span>
        <p class="font-comic text-xl text-black dark:text-white mb-1">YOUR WISHLIST IS EMPTY!</p>
        <p class="text-xs font-bold">Click the heart button on any destination card to log your dream missions here!</p>
      </div>
    `;
    refreshLucideIcons();
    return;
  }

  elements.wishlistItemsContainer.innerHTML = '';

  state.wishlist.forEach(item => {
    const row = document.createElement('div');
    row.className = 'p-3 bg-white dark:bg-slate-900 border-3 border-black shadow-[3px_3px_0_#000] rounded-xl flex items-center justify-between gap-3 group';
    
    row.innerHTML = `
      <div class="flex items-center gap-3 min-w-0">
        <img src="${item.fallbackImage}" alt="${item.name}" class="w-12 h-12 rounded-lg border-2 border-black object-cover flex-shrink-0" />
        <div class="min-w-0">
          <h4 class="font-comic text-base text-black dark:text-white line-clamp-1">${item.flag} ${item.name.toUpperCase()}</h4>
          <p class="text-xs font-bold text-slate-500 dark:text-slate-400 line-clamp-1">${item.region}</p>
        </div>
      </div>

      <div class="flex items-center gap-1.5 flex-shrink-0">
        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.googleMapsQuery)}" target="_blank" rel="noopener noreferrer" class="comic-btn p-2 rounded-lg bg-comic-cyan text-black" title="Open in Google Maps">
          <i data-lucide="map" class="w-4 h-4"></i>
        </a>
        <button class="remove-wishlist-item comic-btn p-2 rounded-lg bg-comic-pink text-white" title="Remove from wishlist" data-id="${item.id}">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>
    `;

    // Remove event
    row.querySelector('.remove-wishlist-item').addEventListener('click', () => {
      toggleWishlist(item);
    });

    elements.wishlistItemsContainer.appendChild(row);
  });

  refreshLucideIcons();
}

// Drawer Visibility
function openWishlistDrawer() {
  elements.wishlistDrawerBackdrop.classList.remove('hidden');
  elements.wishlistDrawer.classList.remove('translate-x-full');
  document.body.style.overflow = 'hidden';
}

function closeWishlistDrawer() {
  elements.wishlistDrawerBackdrop.classList.add('hidden');
  elements.wishlistDrawer.classList.add('translate-x-full');
  document.body.style.overflow = '';
}

// Sound & Theme UI
function updateSoundUI() {
  if (state.soundEnabled) {
    elements.soundIcon.setAttribute('data-lucide', 'volume-2');
    elements.soundToggleBtn.classList.remove('opacity-60');
  } else {
    elements.soundIcon.setAttribute('data-lucide', 'volume-x');
    elements.soundToggleBtn.classList.add('opacity-60');
  }
  refreshLucideIcons();
}

function updateThemeUI() {
  if (state.darkMode) {
    document.documentElement.classList.add('dark');
    document.body.classList.add('comic-dark');
    document.body.classList.remove('comic-light');
    if (elements.themeLabel) elements.themeLabel.textContent = 'NOIR';
    elements.themeIcon.setAttribute('data-lucide', 'moon');
  } else {
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('comic-dark');
    document.body.classList.add('comic-light');
    if (elements.themeLabel) elements.themeLabel.textContent = 'POP';
    elements.themeIcon.setAttribute('data-lucide', 'sun');
  }
  refreshLucideIcons();
}

// Toast Notification
let toastTimer = null;
function showToast(message, type = 'success') {
  if (toastTimer) clearTimeout(toastTimer);

  elements.toastMessage.textContent = message;
  elements.toast.classList.remove('hidden');

  toastTimer = setTimeout(() => {
    elements.toast.classList.add('hidden');
  }, 3000);
}

// Share Functionality
async function shareDestination() {
  if (!state.currentDestination) return;

  const title = `Where Should I Go? — ${state.currentDestination.name}`;
  const text = `Check out ${state.currentDestination.name} in ${state.currentDestination.countryName}! ${state.currentDestination.curatedSummary}`;
  const url = window.location.href;

  if (navigator.share) {
    try {
      await navigator.share({ title, text, url });
    } catch (e) {
      if (e.name !== 'AbortError') {
        copyToClipboard(`${state.currentDestination.name}: ${url}`);
      }
    }
  } else {
    copyToClipboard(`${state.currentDestination.name} (${state.currentDestination.countryName}) - Explore: ${url}`);
  }
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('Destination link copied to clipboard! 📋', 'success');
  }).catch(() => {
    showToast('Could not copy link to clipboard', 'info');
  });
}

// Refresh Lucide Icons safely
function refreshLucideIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

// Event Listeners
function attachEventListeners() {
  // Main Surprise Me! & Spin Again buttons
  elements.surpriseBtn.addEventListener('click', () => randomizeDestination(true));
  elements.spinAgainBtn.addEventListener('click', () => randomizeDestination(true));

  // Country List Dropdown Toggle
  if (elements.toggleCountriesBtn) {
    elements.toggleCountriesBtn.addEventListener('click', () => {
      if (state.soundEnabled) sfx.playWhoosh();
      state.isCountriesExpanded = !state.isCountriesExpanded;
      if (!state.isCountriesExpanded) {
        state.countrySearchQuery = '';
        if (elements.countrySearchInput) elements.countrySearchInput.value = '';
        if (elements.clearCountrySearchBtn) elements.clearCountrySearchBtn.classList.add('hidden');
      }
      renderCountryPills();
    });
  }

  // Country Quick Search Input
  if (elements.countrySearchInput) {
    elements.countrySearchInput.addEventListener('input', (e) => {
      state.countrySearchQuery = e.target.value.trim().toLowerCase();
      if (elements.clearCountrySearchBtn) {
        if (state.countrySearchQuery.length > 0) {
          elements.clearCountrySearchBtn.classList.remove('hidden');
        } else {
          elements.clearCountrySearchBtn.classList.add('hidden');
        }
      }
      renderCountryPills();
    });
  }

  // Clear Country Search Button
  if (elements.clearCountrySearchBtn) {
    elements.clearCountrySearchBtn.addEventListener('click', () => {
      state.countrySearchQuery = '';
      if (elements.countrySearchInput) {
        elements.countrySearchInput.value = '';
        elements.countrySearchInput.focus();
      }
      elements.clearCountrySearchBtn.classList.add('hidden');
      renderCountryPills();
    });
  }

  // Wishlist toggle button on card
  elements.cardWishlistBtn.addEventListener('click', () => {
    toggleWishlist(state.currentDestination);
  });

  // Share button
  elements.cardShareBtn.addEventListener('click', shareDestination);

  // Drawer triggers
  elements.openWishlistBtn.addEventListener('click', openWishlistDrawer);
  elements.closeWishlistBtn.addEventListener('click', closeWishlistDrawer);
  elements.wishlistDrawerBackdrop.addEventListener('click', closeWishlistDrawer);

  // Clear Wishlist
  elements.clearWishlistBtn.addEventListener('click', () => {
    if (state.wishlist.length === 0) return;
    if (confirm('Clear all destinations from your wishlist?')) {
      state.wishlist = [];
      localStorage.setItem('wsig_wishlist', JSON.stringify([]));
      updateWishlistUI();
      if (state.currentDestination) {
        updateWishlistButtonState(state.currentDestination.id);
      }
      showToast('Wishlist cleared', 'info');
    }
  });

  // Copy Wishlist Summary
  elements.copyWishlistBtn.addEventListener('click', () => {
    if (state.wishlist.length === 0) {
      showToast('Your wishlist is empty', 'info');
      return;
    }
    const list = state.wishlist.map((item, idx) => `${idx + 1}. ${item.flag} ${item.name} (${item.region}, ${item.countryName})`).join('\n');
    copyToClipboard(`My Travel Wishlist:\n${list}`);
  });

  // Sound Toggle
  elements.soundToggleBtn.addEventListener('click', () => {
    state.soundEnabled = !state.soundEnabled;
    localStorage.setItem('wsig_sound', state.soundEnabled);
    updateSoundUI();
    showToast(state.soundEnabled ? 'Sound effects enabled 🔔' : 'Sound muted 🔇', 'info');
  });

  // Theme Toggle
  elements.themeToggleBtn.addEventListener('click', () => {
    state.darkMode = !state.darkMode;
    localStorage.setItem('wsig_dark_mode', state.darkMode);
    updateThemeUI();
  });

  // Keyboard Navigation: Space / Enter to spin, Escape to close drawer
  window.addEventListener('keydown', (e) => {
    // Avoid triggering when focused in an input/textarea
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    if (e.code === 'Space' || e.key === ' ') {
      e.preventDefault();
      randomizeDestination(true);
    } else if (e.key === 'Enter') {
      randomizeDestination(true);
    } else if (e.key === 'Escape') {
      closeWishlistDrawer();
    }
  });
}

// Start app on DOMContentLoaded
document.addEventListener('DOMContentLoaded', init);
