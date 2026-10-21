#!/usr/bin/env node
// ============================================================
//  Wöchentliches Quellen-Update der Consensus-Projections (seit 21.10.2026)
// ============================================================
//  Ersetzt Quelle b (BBM, „Combined“) und/oder c (Hashtag) in
//  data/projections-consensus.js, zieht die projizierten Spiele nach
//  (g = Hashtag-GP, sonst BBM), entfernt Spieler aus
//  scripts/data/consensus-exclude.txt und baut die Live Projections neu.
//
//  Eingabe = JSON im Format von replace-consensus-source.js:
//    { "Spielername": { team, pos, g, min, pts, reb, ast, stl, blk, tpm, tov,
//                       fga, fgm?, fgPct (0–100), fta, ftm?, ftPct (0–100) } }
//  Die Eingabedateien werden mit Datum unter scripts/data/projection-sources/
//  abgelegt (bbm-YYYY-MM-DD.json / hashtag-YYYY-MM-DD.json); die jeweils
//  neueste dient beim nächsten Abruf als Vergleichsbasis.
//
//  Aufruf (im Hub-Root):
//    node sports/nba/scripts/update-projection-sources.js [--bbm=neu.json] [--hashtag=neu.json] [--date=YYYY-MM-DD]
// ============================================================
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execFileSync } = require('child_process');

const NBA = path.join(__dirname, '..');
const ROOT = path.join(NBA, '..', '..');
const CONS = path.join(NBA, 'data', 'projections-consensus.js');
const SRC_DIR = path.join(__dirname, 'data', 'projection-sources');
const EXCLUDE = path.join(__dirname, 'data', 'consensus-exclude.txt');

const arg = k => (process.argv.find(a => a.startsWith(`--${k}=`)) || '').split('=').slice(1).join('=');
const date = arg('date') || new Date().toISOString().slice(0, 10);
const inputs = { b: arg('bbm'), c: arg('hashtag') };
if (!inputs.b && !inputs.c) { console.error('Mindestens --bbm=… oder --hashtag=… angeben.'); process.exit(1); }

const sb = {}; vm.createContext(sb);
vm.runInContext(fs.readFileSync(path.join(NBA, 'data', 'aliases.js'), 'utf8') + '\nthis.N = normalizeName;', sb);
const norm = sb.N;
fs.mkdirSync(SRC_DIR, { recursive: true });

// 1) Quellen sichern + ersetzen
const LABEL = { b: `Josh Lloyd (BBM, Combined), Stand ${date}`, c: `Hashtag Basketball, Stand ${date}` };
const FILE = { b: 'bbm', c: 'hashtag' };
for (const letter of ['c', 'b']) {
  if (!inputs[letter]) continue;
  const data = JSON.parse(fs.readFileSync(inputs[letter], 'utf8'));
  const n = Object.keys(data).length;
  if (n < 300) { console.error(`Abbruch: ${FILE[letter]} hat nur ${n} Spieler – Filter „All Players“/„All“ gesetzt?`); process.exit(1); }
  const keep = path.join(SRC_DIR, `${FILE[letter]}-${date}.json`);
  fs.writeFileSync(keep, JSON.stringify(data));
  execFileSync('node', [path.join(__dirname, 'replace-consensus-source.js'), letter, keep, CONS, LABEL[letter]], { stdio: 'inherit', cwd: ROOT });
}

// 2) g nachziehen + Ausschlussliste anwenden
const latest = prefix => {
  const f = fs.readdirSync(SRC_DIR).filter(x => x.startsWith(prefix + '-') && x.endsWith('.json')).sort().pop();
  if (!f) return {};
  const j = JSON.parse(fs.readFileSync(path.join(SRC_DIR, f), 'utf8')), o = {};
  Object.entries(j).forEach(([n, v]) => { o[norm(n)] = v; });
  return o;
};
const hb = latest('hashtag'), bb = latest('bbm');
const excl = new Set(fs.existsSync(EXCLUDE) ? fs.readFileSync(EXCLUDE, 'utf8').split('\n').map(l => l.replace(/#.*/, '').trim()).filter(Boolean).map(norm) : []);
const src = fs.readFileSync(CONS, 'utf8');
const i = src.indexOf('const PROJECTIONS_CONSENSUS = ');
const C = new Function(src + '\n;return PROJECTIONS_CONSENSUS;')();
let gChanged = 0; const removed = [];
for (const name of Object.keys(C)) {
  const k = norm(name);
  if (excl.has(k)) { removed.push(name); delete C[name]; continue; }
  const g = (hb[k] && hb[k].g) || (bb[k] && bb[k].g) || C[name].g;
  if (g !== C[name].g) { C[name].g = g; gChanged++; }
}
let head = src.slice(0, i).replace(/\/\/  Quellen-Update .*\n/g, '');
head = head.replace(/(\/\/  Neu bauen:.*\n)/, `$1//  Quellen-Update ${date} (update-projection-sources.js): ${Object.keys(inputs).filter(l => inputs[l]).map(l => FILE[l]).join(' + ')}\n`);
fs.writeFileSync(CONS, head + 'const PROJECTIONS_CONSENSUS = ' + JSON.stringify(C, null, 1) + ';\n');
const cnt = {}; Object.values(C).forEach(e => { cnt[e.sources] = (cnt[e.sources] || 0) + 1; });
console.log(`Consensus: ${Object.keys(C).length} Spieler ${JSON.stringify(cnt)} · BBM ignoriert ${Object.values(C).filter(e => e.bInflated).length} · g geändert ${gChanged} · ausgeschlossen: ${removed.join(', ') || '—'}`);

// 3) Live Projections neu (Dynasty Live etc. ziehen im nächsten Liga-Sync nach)
execFileSync('node', [path.join(__dirname, 'build-live-projections.js'), '--league=nba'], { stdio: 'inherit', cwd: NBA });
