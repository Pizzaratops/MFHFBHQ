#!/usr/bin/env node
// ============================================================
//  FUNKYTOWN — Projections von TTHQ übernehmen (seit 08.10.2026)
// ============================================================
//  Funkytown nutzt dieselben Projections wie TTHQ (Beyaz' Baseline +
//  Consensus aus leagues/tthq/data). Funkytown ist aber Redraft und hat
//  Veteranen im Kader, die TTHQ (Dynasty) nicht projiziert. Deshalb:
//
//    projections-baseline.js  = TTHQ-Baseline
//                               + Spieler, die NUR in projections-baseline-own.js stehen
//    projections-consensus.js = TTHQ-Consensus
//                               + Spieler, die NUR in projections-consensus-own.js stehen
//
//  TTHQ gewinnt immer; Namen werden ohne Akzente verglichen
//  ("Nikola Jokić" = "Nikola Jokic"). Die *-own.js-Dateien sind der
//  eingefrorene Funkytown-Stand vom 08.10.2026 und werden nur gelesen.
//
//  Läuft in funkytown-sync.yml vor build-live-projections.js.
//  Usage (im Ordner leagues/funkytown):  node scripts/adopt-tthq-projections.js
// ============================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const TTHQ = path.join(ROOT, '..', 'tthq', 'data');
const DATA = path.join(ROOT, 'data');

function load(file, name) {
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(file, 'utf8') + `\n;this.__out = ${name};`, sandbox);
  return sandbox.__out;
}
const norm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();

function merge(kind, constName) {
  const main = load(path.join(TTHQ, `projections-${kind}.js`), constName);
  const ownFile = path.join(DATA, `projections-${kind}-own.js`);
  const own = fs.existsSync(ownFile) ? load(ownFile, constName) : {};
  const have = new Set(Object.keys(main).map(norm));
  const out = { ...main };
  const added = [];
  for (const [name, row] of Object.entries(own)) {
    if (have.has(norm(name))) continue;
    out[name] = row;
    added.push(name);
  }
  const header = `// ============================================================
//  ${constName} — Funkytown (AUTO-GENERIERT, nicht von Hand editieren)
// ============================================================
//  Erzeugt von scripts/adopt-tthq-projections.js am ${new Date().toISOString()}
//  Quelle: leagues/tthq/data/projections-${kind}.js (${Object.keys(main).length} Spieler)
//  + ${added.length} Spieler nur aus projections-${kind}-own.js (Funkytown-Stand 08.10.2026)
// ============================================================

`;
  fs.writeFileSync(path.join(DATA, `projections-${kind}.js`), `${header}const ${constName} = ${JSON.stringify(out, null, 1)};\n`, 'utf8');
  console.log(`projections-${kind}.js: ${Object.keys(main).length} von TTHQ + ${added.length} nur Funkytown = ${Object.keys(out).length}`);
}

merge('baseline', 'PROJECTIONS_BASELINE');
merge('consensus', 'PROJECTIONS_CONSENSUS');
