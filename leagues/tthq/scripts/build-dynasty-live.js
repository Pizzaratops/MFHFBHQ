#!/usr/bin/env node
// ============================================================
//  DYNASTY LIVE — Saison-Form gegen Erwartung (seit 16.10.2026)
// ============================================================
//  Der manuelle Dynasty-Rang (data/rankings.js) bleibt unangetastet.
//  Dieses Script rechnet daneben einen "Live-Rang": Wie spielt ein
//  Spieler in der laufenden Saison im Vergleich zu dem, was vor der
//  Saison von ihm erwartet wurde?
//
//    erwartet = Rang nach der Projection zum Saisonstart (eingefrorener
//               Snapshot sports/nba/data/snapshots/projections-<saison>-opening-night.js,
//               9-Cat-z über den Snapshot-Pool, gleiche Mathe wie
//               build-live-projections.js; Fallback aktuelle Consensus)
//    tatsächlich = Rang nach der ganzen Saison bis heute
//               (livescores-season.js, 9-Cat-z pro Spiel)
//    beide Ränge nur innerhalb der Spieler, die in beiden Listen stehen.
//
//    Abweichung  r     = ln((erwartet + 10) / (tatsächlich + 10))
//    Stichprobe  s     = Spiele / (Spiele + 20)       (20 Spiele = halbes Gewicht)
//    Alter       a     = 1.0 (≤22) · 0.85 (23–25) · 0.7 (26–28) · 0.55 (29–31) · 0.45 (32+);
//                        Abwärts-Signal bei 30+ mindestens 0.7 (Altersabbau ist echt)
//    Verschiebung x    = clamp(0.45 · s · a · r, −0.35, +0.35)
//    Live-Rang         = Dynasty-Rang · e^(−x)   (max. ±35 % des Rangs)
//
//  Nur SIGNIFIKANTE Bewegungen landen in der Datei: ≥ 8 Spiele,
//  |x| ≥ 0.08 und mindestens 2 Plätze (bzw. 6 % des Rangs).
//  Beispiel nach 13 Spielen: Rookie erwartet #66, spielt wie #5 → ~25 % besser;
//  Star erwartet #10, spielt wie #50 → ~13 % schlechter.
//  Vor dem Saisonstart (keine Liga "nba" in livescores-season.js) bleibt
//  die Liste leer — Summer League/Preseason verschieben keine Dynasty-Werte.
//
//  Verwendet in: Dynasty Rankings (Spalte "Live"), Trade Analyzer und
//  Trade Finder (Schalter "Live-Form", Standard an).
//
//  Setzt sich automatisch zurück: sobald eine neue data/rankings.js
//  hochgeladen wird, rechnet dieses Script von der neuen Basis aus.
//
//  Output: data/dynasty-live.js — DYNASTY_LIVE (Array) + DYNASTY_LIVE_META.
//  Usage:  node scripts/build-dynasty-live.js
// ============================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
// sportweite NBA-Dateien liegen unter sports/nba/data/, liga-eigene unter leagues/<liga>/data/.
const SPORT_DATA = path.join(__dirname, '..', '..', '..', 'sports', 'nba', 'data');
const OUT = path.join(ROOT, 'data', 'dynasty-live.js');

const K = 0.45, HALF_GAMES = 20, MAX_SHIFT = 0.35, RANK_PAD = 10;
const MIN_GAMES = 8, MIN_SHIFT = 0.08, MIN_PCT = 0.06;

function extractBalanced(code, marker, openCh, closeCh) {
  const start = code.indexOf(marker);
  if (start === -1) return null;
  let depth = 0, end = -1;
  for (let i = start + marker.length - 1; i < code.length; i++) {
    if (code[i] === openCh) depth++;
    else if (code[i] === closeCh) { depth--; if (depth === 0) { end = i + 1; break; } }
  }
  if (end === -1) return null;
  return code.slice(start, end) + ';';
}
function loadVmArray(filePath, varName) {
  const code = fs.readFileSync(filePath, 'utf8');
  const snippet = extractBalanced(code, `const ${varName} = [`, '[', ']');
  if (!snippet) return null;
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(`${snippet}\nthis.__RESULT__ = ${varName};`, sandbox);
  return sandbox.__RESULT__;
}
function loadVmObject(filePath, varName) {
  const code = fs.readFileSync(filePath, 'utf8');
  const snippet = extractBalanced(code, `const ${varName} = {`, '{', '}');
  if (!snippet) return null;
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(`${snippet}\nthis.__RESULT__ = ${varName};`, sandbox);
  return sandbox.__RESULT__;
}
function normalizeName(raw) {
  if (!raw) return '';
  let s = raw.toLowerCase().trim();
  s = s.replace(/\./g, '');
  s = s.replace(/['\u2019\u2018`]/g, '');
  s = s.replace(/\b(jr|sr|iii|ii)\b/g, '');
  s = s.replace(/\s+/g, ' ').trim();
  return s;
}

const DYNASTY_PLAYERS = loadVmArray(path.join(ROOT, 'data', 'rankings.js'), 'DYNASTY_PLAYERS') || [];
const load = (file, name) => { const p = path.join(SPORT_DATA, file); return fs.existsSync(p) ? loadVmObject(p, name) : null; };
// Erwartung = eingefrorener Opening-Night-Snapshot der Saison (seit 21.10.2026,
// vorher Beyaz' Baseline). Der Snapshot ändert sich während der Saison nicht,
// dadurch bleibt die Erwartung stabil. Fallback: aktuelle Consensus.
const EXPECTATION = (() => {
  const dir = path.join(SPORT_DATA, 'snapshots');
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => /^projections-\d{4}-\d{2}-opening-night\.js$/.test(f)).sort() : [];
  if (files.length) {
    const f = files[files.length - 1];
    const m = fs.readFileSync(path.join(dir, f), 'utf8').match(/const\s+(PROJECTIONS_SNAPSHOT_\w+)\s*=\s*\{/);
    const snap = m && loadVmObject(path.join(dir, f), m[1]);
    if (snap && snap.players && Object.keys(snap.players).length) return { players: snap.players, source: `snapshots/${f}` };
  }
  return { players: load('projections-consensus.js', 'PROJECTIONS_CONSENSUS') || {}, source: 'projections-consensus.js' };
})();
console.log(`Erwartung aus ${EXPECTATION.source} (${Object.keys(EXPECTATION.players).length} Spieler).`);
const SEASON = load('livescores-season.js', 'LIVESCORES_SEASON');
const ALIASES = (() => {
  const p = path.join(SPORT_DATA, 'aliases.js');
  if (!fs.existsSync(p)) return {};
  const code = fs.readFileSync(p, 'utf8');
  const m = code.match(/const\s+(\w+)\s*=\s*\{/);
  return m ? (loadVmObject(p, m[1]) || {}) : {};
})();
const norm = n => normalizeName(String(n || '').normalize('NFKD').replace(/[\u0300-\u036f]/g, ''));
const keyOf = n => { const k = norm(n); return ALIASES[k] ? norm(ALIASES[k]) : k; };

const OFFSEASON_LEAGUE_KEYS = new Set(['nba-summer-california', 'nba-summer-utah', 'nba-summer-las-vegas', 'nba-preseason', 'nba-postseason']);
const latestSeason = (() => {
  const S = SEASON && SEASON.season;
  if (!S) return null;
  const lk = Object.keys(S).find(k => !OFFSEASON_LEAGUE_KEYS.has(k));
  if (!lk) return null;
  const dates = Object.keys(S[lk] || {}).sort();
  return dates.length ? { date: dates[dates.length - 1], entry: S[lk][dates[dates.length - 1]] } : null;
})();

// ---------- erwartete Stärke: 9-Cat-z der Preseason-Projection ----------
function expectedZ() {
  const list = Object.entries(EXPECTATION.players).filter(([, p]) => p && (p.pts || p.reb || p.ast));
  const ref = list;
  const sum = (arr, k) => arr.reduce((s, [, p]) => s + (p[k] || 0), 0);
  const fgP = sum(ref, 'fga') > 0 ? sum(ref, 'fgm') / sum(ref, 'fga') : 0;
  const ftP = sum(ref, 'fta') > 0 ? sum(ref, 'ftm') / sum(ref, 'fta') : 0;
  const val = (p, k) => (k === 'fgi' ? (p.fga > 0 ? (p.fgm / p.fga - fgP) * p.fga : 0)
    : k === 'fti' ? (p.fta > 0 ? (p.ftm / p.fta - ftP) * p.fta : 0) : (p[k] || 0));
  const CATS = [['pts'], ['reb'], ['ast'], ['stl'], ['blk'], ['tpm'], ['fgi'], ['fti'], ['tov', true]];
  const st = CATS.map(([k]) => {
    const v = ref.map(([, p]) => val(p, k)), m = v.reduce((a, b) => a + b, 0) / (v.length || 1);
    return { m, sd: Math.sqrt(v.reduce((a, b) => a + (b - m) * (b - m), 0) / (v.length || 1)) };
  });
  const out = new Map();
  list.forEach(([n, p]) => {
    let z = 0;
    CATS.forEach(([k, inv], i) => { const { m, sd } = st[i]; let x = sd > 0 ? (val(p, k) - m) / sd : 0; if (inv) x = -x; z += x; });
    out.set(keyOf(n), z);
  });
  return out;
}

function ageOf(dob, ref) {
  if (!dob) return null;
  const d = new Date(dob + 'T12:00:00Z');
  if (isNaN(d)) return null;
  return (ref - d) / (365.25 * 86400000);
}
function ageFactor(age, down) {
  if (age == null) return 0.7;
  const f = age <= 22.99 ? 1.0 : age < 26 ? 0.85 : age < 29 ? 0.7 : age < 32 ? 0.55 : 0.45;
  return down && age >= 30 ? Math.max(f, 0.7) : f;
}
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

const entries = [];
let meta = { mode: 'offseason', date: null, pool: 0 };
if (latestSeason && Array.isArray(latestSeason.entry.players)) {
  const EXP = expectedZ();
  const act = latestSeason.entry.players.map(p => ({ key: keyOf(p.name), games: p.games || 0, z: p.composite }))
    .filter(p => EXP.has(p.key));
  // Ränge innerhalb des gemeinsamen Pools
  const expRank = new Map(act.slice().sort((a, b) => EXP.get(b.key) - EXP.get(a.key)).map((p, i) => [p.key, i + 1]));
  const actRank = new Map(act.slice().sort((a, b) => b.z - a.z).map((p, i) => [p.key, i + 1]));
  const byKey = new Map(act.map(p => [p.key, p]));
  const ref = new Date(latestSeason.date + 'T12:00:00Z');
  meta = { mode: 'season', date: latestSeason.date, pool: act.length, expectation: EXPECTATION.source };
  DYNASTY_PLAYERS.forEach(row => {
    const [baseRank, name, , , dob] = row;
    const k = keyOf(name), p = byKey.get(k);
    if (!p || p.games < MIN_GAMES) return;
    const er = expRank.get(k), ar = actRank.get(k);
    const r = Math.log((er + RANK_PAD) / (ar + RANK_PAD));
    const s = p.games / (p.games + HALF_GAMES);
    const a = ageFactor(ageOf(dob, ref), r < 0);
    const x = clamp(K * s * a * r, -MAX_SHIFT, MAX_SHIFT);
    const liveRank = Math.max(1, Math.round(baseRank * Math.exp(-x)));
    const delta = baseRank - liveRank;
    if (Math.abs(x) < MIN_SHIFT || Math.abs(delta) < Math.max(2, Math.round(baseRank * MIN_PCT))) return;
    entries.push({ name, baseRank, liveRank, delta, games: p.games, expRank: er, seasonRank: ar, shift: Math.round(x * 100) / 100 });
  });
}

const now = new Date().toISOString().slice(0, 10);
const lines = entries.map(e =>
  `  { name: ${JSON.stringify(e.name)}, baseRank: ${e.baseRank}, liveRank: ${e.liveRank}, delta: ${e.delta}, games: ${e.games}, expRank: ${e.expRank}, seasonRank: ${e.seasonRank}, shift: ${e.shift}, source: "season" }`
);

const out = `// ============================================================
//  DYNASTY LIVE — Saison-Form gegen Erwartung
// ============================================================
//  AUTO-GENERIERT von scripts/build-dynasty-live.js (tthq-sync).
//  Nicht von Hand editieren. Zuletzt aktualisiert: ${now}
//  Stand der Saisondaten: ${meta.date || '— (noch keine reguläre Saison)'}
//
//  Nur signifikante Bewegungen (≥ ${MIN_GAMES} Spiele, |shift| ≥ ${MIN_SHIFT}).
//  liveRank ersetzt im Trade Analyzer/Finder den Dynasty-Rang, wenn
//  "Live-Form" eingeschaltet ist (Standard). data/rankings.js bleibt unverändert.
//
//  Shape: { name, baseRank, liveRank, delta, games, expRank, seasonRank, shift, source }
//  delta > 0 = besser als erwartet (Rang steigt), delta < 0 = schlechter.
//  expRank/seasonRank = Rang im gemeinsamen Pool (Projection vs. Saison).
// ============================================================

const DYNASTY_LIVE_META = ${JSON.stringify(meta)};

const DYNASTY_LIVE = [
${lines.join(',\n')}
];
`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, out, 'utf8');
console.log(`${OUT} aktualisiert: ${entries.length} Spieler mit signifikanter Live-Bewegung (${meta.mode === 'season' ? `Saison bis ${meta.date}, Pool ${meta.pool}` : 'Off-Season → leer'}).`);
