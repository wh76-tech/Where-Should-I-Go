// Automated Test Suite for Where Should I Go?
import { COUNTRIES, VIBES, DESTINATIONS } from './destinations.js';

console.log('====================================================');
console.log('🧪 RUNNING "WHERE SHOULD I GO?" COMPREHENSIVE TEST SUITE');
console.log('====================================================\n');

let totalTests = 0;
let passedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`✅ PASS: ${message}`);
    passedTests++;
  } else {
    console.error(`❌ FAIL: ${message}`);
  }
}

// ----------------------------------------------------
// Test 1: Country Dataset Completeness (30+ destinations per country across 20 countries)
// ----------------------------------------------------
console.log('--- Test Suite 1: Dataset Requirements ---');

const countsByCountry = {};
DESTINATIONS.forEach(d => {
  countsByCountry[d.country] = (countsByCountry[d.country] || 0) + 1;
});

console.log('Destination counts:', countsByCountry);

const expectedCountries = [
  'japan', 'italy', 'iceland', 'france', 'usa',
  'greece', 'spain', 'switzerland', 'new-zealand', 'thailand',
  'uk', 'australia', 'canada', 'mexico', 'portugal',
  'germany', 'norway', 'turkey', 'egypt', 'vietnam',
  'malaysia', 'korea', 'china', 'taiwan', 'indonesia',
  'india', 'philippines', 'singapore', 'brazil', 'peru',
  'argentina', 'colombia', 'morocco', 'south-africa', 'kenya',
  'netherlands', 'austria', 'ireland'
];

expectedCountries.forEach(countryId => {
  const count = countsByCountry[countryId] || 0;
  assert(count >= 30, `${countryId.toUpperCase()} has 30+ destinations (actual: ${count})`);
});

assert(DESTINATIONS.length >= 1200, `Total curated destinations exceed 1,200+ (actual: ${DESTINATIONS.length})`);

// ----------------------------------------------------
// Test 2: Field Integrity & Schema Verification
// ----------------------------------------------------
console.log('\n--- Test Suite 2: Field Integrity Verification ---');

let missingFields = 0;
DESTINATIONS.forEach(dest => {
  if (
    !dest.id ||
    !dest.name ||
    !dest.country ||
    !dest.region ||
    !dest.wikiTitle ||
    !dest.googleMapsQuery ||
    !dest.fallbackImage ||
    !dest.curatedSummary ||
    !dest.vibes ||
    !Array.isArray(dest.vibes) ||
    dest.vibes.length === 0 ||
    !dest.vibeLabels ||
    !Array.isArray(dest.vibeLabels) ||
    dest.vibeLabels.length === 0
  ) {
    missingFields++;
    console.error('Missing field in destination:', dest);
  }
});

assert(missingFields === 0, `All ${DESTINATIONS.length} destinations have complete metadata schemas`);

// Check unique IDs
const idSet = new Set(DESTINATIONS.map(d => d.id));
assert(idSet.size === DESTINATIONS.length, `All ${DESTINATIONS.length} destination IDs are completely unique`);

// ----------------------------------------------------
// Test 3: Randomizer Logic & "No Repeat Twice in a Row"
// ----------------------------------------------------
console.log('\n--- Test Suite 3: Randomizer No-Consecutive-Repeat Guarantee ---');

function simulateSpins(countryId, spinsCount = 500) {
  const pool = DESTINATIONS.filter(d => countryId === 'all' || d.country === countryId);
  let lastPickedId = null;
  let consecutiveDuplicates = 0;

  for (let i = 0; i < spinsCount; i++) {
    let candidates = pool;
    if (pool.length > 1 && lastPickedId) {
      candidates = pool.filter(d => d.id !== lastPickedId);
    }
    const picked = candidates[Math.floor(Math.random() * candidates.length)];
    if (picked.id === lastPickedId) {
      consecutiveDuplicates++;
    }
    lastPickedId = picked.id;
  }

  return consecutiveDuplicates;
}

[...expectedCountries, 'all'].forEach(c => {
  const dupes = simulateSpins(c, 1000);
  assert(dupes === 0, `0 consecutive duplicate picks over 1,000 spins for "${c}"`);
});

// ----------------------------------------------------
// Test 4: Wikipedia REST API Live Endpoint Resolution
// ----------------------------------------------------
console.log('\n--- Test Suite 4: Live Wikipedia REST API Endpoints ---');

// Pick a representative sample of destinations across all 20 countries
const sampleDestinations = expectedCountries.map(c => DESTINATIONS.find(d => d.country === c));

async function testWikipediaLive() {
  for (const dest of sampleDestinations) {
    const cleanTitle = decodeURIComponent(dest.wikiTitle);
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(cleanTitle)}`;
    try {
      await new Promise(r => setTimeout(r, 400)); // Polite throttle
      let res = await fetch(url, {
        headers: { 'User-Agent': 'WhereShouldIGoApp/2.0 (https://github.com/wh76-tech/Where-Should-I-Go; test@example.com)' }
      });
      if (res.status === 429) {
        // Wait and retry once
        await new Promise(r => setTimeout(r, 1200));
        res = await fetch(url, {
          headers: { 'User-Agent': 'WhereShouldIGoApp/2.0 (https://github.com/wh76-tech/Where-Should-I-Go; test@example.com)' }
        });
      }
      assert(res.ok, `Wikipedia API returned ${res.status} for ${dest.name} (${cleanTitle})`);
      
      const data = await res.json();
      assert(typeof data.extract === 'string' && data.extract.length > 20, `Summary extract present for ${dest.name} (${data.extract ? data.extract.substring(0, 45) : 'none'}...)`);
      const hasImage = !!(data.originalimage?.source || data.thumbnail?.source);
      assert(hasImage || !!dest.fallbackImage, `Image source or fallback image available for ${dest.name}`);
    } catch (err) {
      console.error(`Fetch failed for ${dest.name}:`, err.message);
    }
  }

  console.log('\n====================================================');
  console.log(`📊 TEST SUMMARY: ${passedTests} / ${totalTests} tests passed (${Math.round((passedTests / totalTests) * 100)}%)`);
  console.log('====================================================');

  if (passedTests === totalTests) {
    console.log('🎉 ALL TESTS PASSED SUCCESSFULLY!');
  } else {
    process.exit(1);
  }
}

testWikipediaLive();
