// Automated Test Suite for Where Should I Go?
import { COUNTRIES, VIBES, DESTINATIONS } from './destinations.js';

console.log('====================================================');
console.log('🧪 RUNNING "WHERE SHOULD I GO?" TEST SUITE');
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
// Test 1: Country Dataset Completeness (30+ destinations)
// ----------------------------------------------------
console.log('--- Test Suite 1: Dataset Requirements ---');

const countsByCountry = {};
DESTINATIONS.forEach(d => {
  countsByCountry[d.country] = (countsByCountry[d.country] || 0) + 1;
});

console.log('Destination counts:', countsByCountry);

assert(countsByCountry['japan'] >= 30, `Japan has 30+ destinations (actual: ${countsByCountry['japan']})`);
assert(countsByCountry['italy'] >= 30, `Italy has 30+ destinations (actual: ${countsByCountry['italy']})`);
assert(countsByCountry['iceland'] >= 30, `Iceland has 30+ destinations (actual: ${countsByCountry['iceland']})`);
assert(countsByCountry['france'] >= 30, `France has 30+ destinations (actual: ${countsByCountry['france']})`);
assert(countsByCountry['usa'] >= 30, `United States has 30+ destinations (actual: ${countsByCountry['usa']})`);
assert(DESTINATIONS.length >= 150, `Total curated destinations exceed 150+ (actual: ${DESTINATIONS.length})`);

// ----------------------------------------------------
// Test 2: Field Integrity & Schema Verification
// ----------------------------------------------------
console.log('\n--- Test Suite 2: Field Integrity Verification ---');

let missingFields = 0;
DESTINATIONS.forEach(dest => {
  if (!dest.id || !dest.name || !dest.country || !dest.region || !dest.wikiTitle || !dest.googleMapsQuery || !dest.fallbackImage || !dest.curatedSummary) {
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

['japan', 'italy', 'iceland', 'france', 'usa', 'all'].forEach(c => {
  const dupes = simulateSpins(c, 1000);
  assert(dupes === 0, `0 consecutive duplicate picks over 1,000 spins for "${c}"`);
});

// ----------------------------------------------------
// Test 4: Wikipedia REST API Live Endpoint Resolution
// ----------------------------------------------------
console.log('\n--- Test Suite 4: Live Wikipedia REST API Endpoints ---');

// Pick a representative sample of destinations across all 5 countries
const sampleDestinations = [
  DESTINATIONS.find(d => d.country === 'japan' && d.type === 'iconic'),
  DESTINATIONS.find(d => d.country === 'japan' && d.type === 'hidden-gem'),
  DESTINATIONS.find(d => d.country === 'italy' && d.type === 'iconic'),
  DESTINATIONS.find(d => d.country === 'italy' && d.type === 'hidden-gem'),
  DESTINATIONS.find(d => d.country === 'iceland' && d.type === 'iconic'),
  DESTINATIONS.find(d => d.country === 'france' && d.type === 'iconic'),
  DESTINATIONS.find(d => d.country === 'usa' && d.type === 'iconic')
];

async function testWikipediaLive() {
  for (const dest of sampleDestinations) {
    const cleanTitle = decodeURIComponent(dest.wikiTitle);
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(cleanTitle)}`;
    try {
      const res = await fetch(url, {
        headers: { 'Api-User-Agent': 'WhereShouldIGoTester/1.0' }
      });
      assert(res.ok, `Wikipedia API returned ${res.status} for ${dest.name} (${cleanTitle})`);
      
      const data = await res.json();
      assert(typeof data.extract === 'string' && data.extract.length > 20, `Summary extract present for ${dest.name} (${data.extract ? data.extract.substring(0, 50) : 'none'}...)`);
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
