#!/usr/bin/env node
// ============================================================
//  xStats importieren (seit 21.10.2026, wöchentlich im Montagslauf)
// ============================================================
//  Liest die Textausgabe von scripts/xstats-browser.js (window.__xs.text,
//  eine Zeile je Spieler: Name|GP|STL|xSTL|TOV|xTOV|3PM|x3PM|FGM|xFGM|FGA)
//  und schreibt data/xstats-season.js. build-live-projections.js mischt
//  damit STL, TO, 3PM und FG% (siehe dort, Abschnitt „xStats“).
//  Die Rohdatei wird unter scripts/data/projection-sources/xstats-<through>.txt
//  abgelegt.
//
//  Aufruf (im Hub-Root):
//    node sports/nba/scripts/import-xstats.js xs.txt --through=2026-10-26 [--season=2026-27]
// ============================================================
'use strict';
const fs = require('fs');
const path = require('path');

const NBA = path.join(__dirname, '..');
const arg = k => (process.argv.find(a => a.startsWith(`--${k}=`)) || '').split('=').slice(1).join('=');
const inPath = process.argv.slice(2).find(a => !a.startsWith('--'));
const through = arg('through');
if (!inPath || !/^\d{4}-\d{2}-\d{2}$/.test(through)) {
  console.error('Aufruf: import-xstats.js <xs.txt> --through=YYYY-MM-DD [--season=2026-27]'); process.exit(1);
}
const season = arg('season') || (() => {
  const [y, m] = through.split('-').map(Number), s = m >= 8 ? y : y - 1;
  return `${s}-${String((s + 1) % 100).padStart(2, '0')}`;
})();

const players = {}; let bad = 0;
fs.readFileSync(inPath, 'utf8').split('\n').map(l => l.trim()).filter(Boolean).forEach(l => {
  const p = l.split('|');
  const v = p.slice(1).map(Number);
  if (p.length !== 11 || v.some(x => !isFinite(x))) { bad++; return; }
  const [gp, stl, xstl, tov, xtov, tpm, xtpm, fgm, xfgm, fga] = v;
  players[p[0]] = { gp, stl, xstl, tov, xtov, tpm, xtpm, fgm, xfgm, fga };
});
const n = Object.keys(players).length;
if (n < 30) { console.error(`Abbruch: nur ${n} Spieler gelesen (${bad} fehlerhafte Zeilen).`); process.exit(1); }

const keepDir = path.join(__dirname, 'data', 'projection-sources');
fs.mkdirSync(keepDir, { recursive: true });
const keep = path.join(keepDir, `xstats-${through}.txt`);
if (path.resolve(keep) !== path.resolve(inPath)) fs.copyFileSync(inPath, keep);

const out = path.join(NBA, 'data', 'xstats-season.js');
const head = `// ============================================================
//  xStats der laufenden Saison (Josh Lloyd, joshlloydfantasy.com/research/xstats-method)
//  Erzeugt von scripts/import-xstats.js am ${new Date().toISOString().slice(0, 10)} · Saison ${season} · Stand ${through}
//  Je Spieler Saison-Summen bis Stand: gp, stl/xstl, tov/xtov, tpm/xtpm, fgm/xfgm, fga
//  Wird von scripts/build-live-projections.js gelesen (STL, TO, 3PM, FG%).
// ============================================================
`;
fs.writeFileSync(out, head + 'const XSTATS_SEASON = ' + JSON.stringify({ meta: { season, through, players: n }, players }, null, 1) + ';\n');
console.log(`${out}: ${n} Spieler, Saison ${season}, Stand ${through}${bad ? ` (${bad} Zeilen übersprungen)` : ''}`);
