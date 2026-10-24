const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname);
const html = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');

console.log('=== VALIDATION REPORT: THE LANTERN KINGDOM ===\n');

// 1. Check sections & IDs
const requiredSections = [
  'hero',
  'about',
  'skills',
  'experience',
  'projects',
  'research',
  'certifications',
  'achievements',
  'contact'
];

let allSectionsPresent = true;
for (const sec of requiredSections) {
  const hasId = html.includes(`id="${sec}"`);
  console.log(`Section [${sec}]:`, hasId ? '✓ Present' : '✗ Missing');
  if (!hasId) allSectionsPresent = false;
}

// 2. Check Nav Links
let allNavPresent = true;
for (const sec of requiredSections) {
  const hasNav = html.includes(`href="#${sec}"`);
  if (!hasNav) {
    console.log(`Nav link for [#${sec}]: ✗ Missing`);
    allNavPresent = false;
  }
}
console.log('All 9 Navigation Links:', allNavPresent ? '✓ Present' : '✗ Missing');

// 3. Check CSS files linked
const cssFiles = ['theme.css', 'main.css', 'environment.css', 'components.css', 'animations.css'];
for (const c of cssFiles) {
  const exists = fs.existsSync(path.join(dir, 'css', c));
  const linked = html.includes(`css/${c}`);
  console.log(`CSS [${c}]:`, exists && linked ? '✓ Exists and Linked' : '✗ Error');
}

// 4. Check JS files
const jsFiles = ['data.js', 'theme.js', 'lanternCanvas.js', 'navigation.js', 'modals.js', 'ambientAudio.js', 'main.js'];
for (const j of jsFiles) {
  const exists = fs.existsSync(path.join(dir, 'js', j));
  console.log(`JS [${j}]:`, exists ? '✓ Exists' : '✗ Missing');
}

// 5. Check Content & Data accuracy from Prompt
const dataJs = fs.readFileSync(path.join(dir, 'js', 'data.js'), 'utf8');

const checks = [
  { name: 'Manya K N', pass: dataJs.includes('Manya K N') },
  { name: 'CGPA 8.7', pass: dataJs.includes('8.7') },
  { name: 'NMAM Institute of Technology, Nitte', pass: dataJs.includes('NMAM Institute of Technology, Nitte') },
  { name: 'Graduation 2028', pass: dataJs.includes('2028') },
  { name: 'Cyber Security', pass: dataJs.includes('Cyber Security') },
  { name: 'Tagline: Every Dream Begins with a Little Curiosity.', pass: dataJs.includes('Every Dream Begins with a Little Curiosity.') },
  { name: 'AlgoOrbit Innovations Pvt. Ltd.', pass: dataJs.includes('AlgoOrbit Innovations Pvt. Ltd.') },
  { name: 'IICT, New Delhi', pass: dataJs.includes('IICT, New Delhi') },
  { name: 'Cybercrime Research (60 days)', pass: dataJs.includes('60 days') },
  { name: 'Project: Swadam', pass: dataJs.includes('SWADAM') },
  { name: 'Project: Eduverse', pass: dataJs.includes('EDUVERSE') },
  { name: 'Project: AI-Powered Fake News Detection', pass: dataJs.includes('FAKE NEWS DETECTION') },
  { name: 'Project: AI-Driven Phishing Email Detection', pass: dataJs.includes('PHISHING EMAIL DETECTION') },
  { name: 'Project: AI Color Analyzer', pass: dataJs.includes('AI COLOR ANALYZER') },
  { name: 'Project: Multi-LAN Network and DHCP Configuration', pass: dataJs.includes('MULTI-LAN') },
  { name: 'Project: Cybercrime Research Project', pass: dataJs.includes('CYBERCRIME RESEARCH') },
  { name: 'Certificate: Cloud and AI Security Engineer Associate', pass: dataJs.includes('Cloud and AI Security Engineer Associate') },
  { name: 'CloudThat & Microsoft & NMAMIT', pass: dataJs.includes('CloudThat') && dataJs.includes('Microsoft') },
  { name: 'Certificate Date: September 26, 2026', pass: dataJs.includes('September 26, 2026') },
  { name: 'Statement: Implement end-to-end security controls for cloud and AI workloads.', pass: dataJs.includes('Implement end-to-end security controls for cloud and AI workloads.') },
  { name: 'PUC 97%', pass: dataJs.includes('97%') },
  { name: 'SSLC 99.52%', pass: dataJs.includes('99.52%') },
  { name: 'Rachana Art Club', pass: dataJs.includes('Rachana Art Club') },
  { name: 'Youth Red Cross', pass: dataJs.includes('Youth Red Cross') },
  { name: 'HackerEarth Club', pass: dataJs.includes('HackerEarth Club') },
  { name: 'Finiteloop Club', pass: dataJs.includes('Finiteloop Club') },
  { name: 'Email: manyakalige864@gmail.com', pass: dataJs.includes('manyakalige864@gmail.com') },
  { name: 'LinkedIn: linkedin.com/in/manyakn', pass: dataJs.includes('linkedin.com/in/manyakn') },
  { name: 'GitHub: github.com/manya208', pass: dataJs.includes('github.com/manya208') }
];

console.log('\n--- DATA VERIFICATION CHECKS ---');
let allChecksPass = true;
for (const c of checks) {
  console.log(`[${c.name}]:`, c.pass ? '✓ PASS' : '✗ FAIL');
  if (!c.pass) allChecksPass = false;
}

console.log('\n==============================================');
if (allSectionsPresent && allNavPresent && allChecksPass) {
  console.log('🎉 ALL INTEGRATION & VERIFICATION CHECKS PASSED WITH 100% ACCURACY!');
} else {
  console.log('⚠️ Some checks failed.');
  process.exit(1);
}
