#!/usr/bin/env node
// ============================================================
//  BEST AVAILABLE BOARD — Dizzle CBB (seit 16.10.2026)
// ============================================================
//  Gleiches Ausgabeformat wie leagues/<nba-liga>/data/best-available-board.js
//  (→ Seite „Waiver“). Kandidaten = Fantrax-Spielerpool (player-pool.js);
//  die Seite blendet gerosterte Spieler selbst aus.
//
//  Signale (z-Summe / 3, anteilige Gewichte wie beim NBA-Board):
//   - laufende Saison: livescores-season.js (60 %) + 30 Tage (40 %), Gewicht
//     0,15–0,55, wächst mit den Spielen (voll ab 12 Spielen — College-Saison ist kurz)
//   - Vorsaison: last-season-rankings.js (Gewicht 0,30, halbiert sich bis 12 Spiele)
//   - NIL-Wert aus der Auktion 2026 (nil-auction.js, Rang-z, Gewicht 0,25,
//     fällt bis 12 Spiele auf 0,10) — Rollen/Transfers/Freshmen
//   - seit 16.10.2026: Projektion 2026/27 (projections-cbb.js, build-projections.py) ersetzt
//     Vorsaison + NIL, wo vorhanden (Gewicht 0,55, fällt bis 12 Spiele auf 0,22) — sie enthält
//     beide schon, plus Team-Kontext und Minuten im neuen Kader. Auf die Vorsaison-Skala gebracht.
//   - CBB_GONE (Senior/Grad der Vorsaison, nicht mehr im vollen ESPN-Kader) rutscht ans Ende.
//  experience: Fr → rookie, So → sophomore (für den Filter der Seite), cls = Klasse.
// ============================================================

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SPORT = path.join(__dirname, '..', '..', '..', 'sports', 'cbb', 'data');
const OUT = path.join(ROOT, 'data', 'best-available-board.js');

function load(file, names) {
  if (!fs.existsSync(file)) return {};
  const code = fs.readFileSync(file, 'utf8');
  return new Function(`${code}\n;return { ${names.map(n => `${n}: typeof ${n} !== 'undefined' ? ${n} : null`).join(', ')} };`)();
}
function key(raw) {
  let s = String(raw || '').toLowerCase().trim().normalize('NFD').replace(/[̀-ͯ]/g, '');
  s = s.replace(/\./g, '').replace(/['’‘`]/g, '').replace(/-/g, ' ').replace(/\b(jr|sr|iii|ii|iv)\b/g, '');
  return s.replace(/\s+/g, ' ').trim();
}

const { CBB_PLAYER_POOL } = load(path.join(ROOT, 'data', 'player-pool.js'), ['CBB_PLAYER_POOL']);
const { CBB_POOL } = load(path.join(ROOT, 'data', 'nil-auction.js'), ['CBB_POOL']);
const { LAST_SEASON_RANKINGS } = load(path.join(SPORT, 'last-season-rankings.js'), ['LAST_SEASON_RANKINGS']);
const { LIVESCORES_SEASON } = load(path.join(SPORT, 'livescores-season.js'), ['LIVESCORES_SEASON']);
const { CBB_PROJECTIONS, CBB_GONE } = load(path.join(SPORT, 'projections-cbb.js'), ['CBB_PROJECTIONS', 'CBB_GONE']);
const GONE = new Set((CBB_GONE || []).map(([n, sc]) => key(n) + '|' + sc));
const { LIVESCORES_AGGREGATE } = load(path.join(SPORT, 'livescores-aggregate.js'), ['LIVESCORES_AGGREGATE']);
if (!Array.isArray(CBB_PLAYER_POOL) || !CBB_PLAYER_POOL.length) {
  console.log('Kein player-pool.js — Fantrax-Sync zuerst laufen lassen. Board unverändert.');
  process.exit(0);
}

const latest = (obj, period) => {
  const m = obj && obj[period] && obj[period].ncaab;
  if (!m) return null;
  const d = Object.keys(m).sort().pop();
  return d ? m[d] : null;
};
const byName = entry => new Map(((entry && entry.players) || []).map(p => [key(p.name), p]));
const SEASON = byName(latest(LIVESCORES_SEASON, 'season'));
const MONTH = byName(latest(LIVESCORES_AGGREGATE, 'month'));
const WEEK = byName(latest(LIVESCORES_AGGREGATE, 'week'));
const LAST = byName(LAST_SEASON_RANKINGS);
const lastRank = new Map(((LAST_SEASON_RANKINGS && LAST_SEASON_RANKINGS.players) || []).map(p => [key(p.name), p.rank]));
// NIL-Wert → Rang-z
const nil = new Map();
(CBB_POOL || []).forEach(p => nil.set(key(p.name), p));
// NIL-Wert auf die Skala der Vorsaison bringen: lineare Regression Vorsaison-z ~ NIL-Wert
// über alle Spieler, die beides haben (Rückkehrer). So zählt ein $100-Freshman wie ein
// Spieler, der letzte Saison auf diesem Niveau gespielt hat.
const pairs = [...nil.entries()].map(([k, p]) => [p.value || 0, (LAST.get(k) || {}).composite]).filter(([, c]) => c != null);
const mx = pairs.reduce((a, [x]) => a + x, 0) / (pairs.length || 1), my = pairs.reduce((a, [, y]) => a + y, 0) / (pairs.length || 1);
const slope = pairs.reduce((a, [x, y]) => a + (x - mx) * (y - my), 0) / (pairs.reduce((a, [x]) => a + (x - mx) ** 2, 0) || 1);
const nilToComp = v => my + slope * (v - mx);
console.log(`NIL→Vorsaison-z: ${pairs.length} Paare, z = ${my.toFixed(2)} + ${slope.toFixed(3)} × (Wert − ${mx.toFixed(1)})`);

// Projektion → Vorsaison-Skala (Regression über Rückkehrer)
const PROJ = new Map(); (CBB_PROJECTIONS || []).forEach(p => { PROJ.set(key(p.name) + '|' + p.team, p); if (!PROJ.has(key(p.name))) PROJ.set(key(p.name), p); });
const pp = (CBB_PROJECTIONS || []).filter(p => p.src === 'Rückkehrer').map(p => [p.z, (LAST.get(key(p.name)) || {}).composite]).filter(([, c]) => c != null);
const px = pp.reduce((a, [x]) => a + x, 0) / (pp.length || 1), py = pp.reduce((a, [, y]) => a + y, 0) / (pp.length || 1);
const pslope = pp.reduce((a, [x, y]) => a + (x - px) * (y - py), 0) / (pp.reduce((a, [x]) => a + (x - px) ** 2, 0) || 1);
const projToComp = z => py + pslope * (z - px);
console.log(`Projektion→Vorsaison-z: ${pp.length} Paare, z = ${py.toFixed(2)} + ${pslope.toFixed(3)} × (Proj − ${px.toFixed(1)})`);

const CATL = { pts: 'PTS', reb: 'REB', ast: 'AST', stl: 'STL', blk: 'BLK', tpm: '3PM', fgImpact: 'FG%', ftImpact: 'FT%', to: 'TO' };
const bestWorst = z => {
  if (!z) return null;
  const e = Object.entries(z).filter(([k]) => CATL[k]).sort((a, b) => b[1] - a[1]);
  return e.length ? { best: CATL[e[0][0]], worst: CATL[e[e.length - 1][0]] } : null;
};
const r2 = x => Math.round(x * 100) / 100;

const players = CBB_PLAYER_POOL.map(([fx, name, school, pos, elig, status]) => {
  const k = key(name);
  const s = SEASON.get(k), m = MONTH.get(k), w = WEEK.get(k), l = LAST.get(k), n = nil.get(k), pj = PROJ.get(k + '|' + school) || PROJ.get(k);
  const g = s ? s.games || 0 : 0, sample = Math.min(1, g / 12);
  const sig = [];
  if (s || m) sig.push([((s && m) ? 0.6 * s.composite + 0.4 * m.composite : (s || m).composite) / 3, 0.55 * Math.max(0.27, sample)]);
  if (pj) sig.push([projToComp(pj.z) / 3, 0.55 * (1 - 0.6 * sample)]);
  else {
    if (l) sig.push([l.composite / 3, 0.30 * (1 - 0.5 * sample)]);
    if (n) sig.push([nilToComp(n.value || 0) / 3, 0.25 - 0.15 * sample]);
  }
  const ws = sig.reduce((a, [, wt]) => a + wt, 0);
  let score = ws ? sig.reduce((a, [v, wt]) => a + v * wt, 0) / ws : -99;
  const gone = GONE.has(k + '|' + school) && g === 0; // Senior/Grad, nicht mehr im ESPN-Kader → ans Ende
  if (gone) score -= 20;
  const cur = s || m, bw30 = bestWorst((m || s || l || {}).zScores), bw7 = bestWorst(w && w.zScores);
  const cls = n ? n.cls : pj && pj.cls ? ({ 1: 'Fr', 2: 'So', 3: 'Jr', 4: 'Sr', 5: 'Gr' })[pj.cls] : null;
  return {
    name, nbaTeam: school, pos,
    cls, experience: cls === 'Fr' ? 'rookie' : cls === 'So' ? 'sophomore' : 'veteran',
    nilValue: n ? n.value : null,
    minutesAvg: cur ? cur.min : pj ? pj.min : (l ? l.min : null),
    z7: w ? r2(w.composite) : null, z30: m ? r2(m.composite) : (l ? r2(l.composite) : null),
    zSeason: s ? r2(s.composite) : null, gamesSeason: s ? s.games : null,
    bestCat7: bw7 ? bw7.best : null, bestCat30: bw30 ? bw30.best : null, worstCat30: bw30 ? bw30.worst : null,
    lastSeasonRank: lastRank.get(k) || null,
    projZ: pj ? pj.z : null, projMin: pj ? pj.min : null, role: pj ? pj.role : null,
    statsWindow: s ? 'season' : l ? 'last-season' : null,
    compositeScore: r2(score), signalsUsed: sig.length, gone: gone || null,
  };
}).sort((a, b) => b.compositeScore - a.compositeScore);
players.forEach((p, i) => { p.rank = i + 1; });

fs.writeFileSync(OUT, `// ============================================================
//  BEST_AVAILABLE_BOARD — Dizzle CBB, AUTO-GENERIERT von
//  leagues/cbb/scripts/build-best-available-board.js. Stand: ${new Date().toISOString()}
// ============================================================

const BEST_AVAILABLE_BOARD = [
${players.map(p => '  ' + JSON.stringify(Object.fromEntries(Object.entries(p).filter(([, v]) => v != null && v !== '')))).join(',\n')}
];
`, 'utf8');
console.log(`${OUT}: ${players.length} Spieler (${players.filter(p => p.signalsUsed).length} mit Signal).`);

// ---------- Team-Stärke (für die Übersicht): Ø Board-Rang der 12 besten Kaderspieler ----------
const { ROSTERS_LIVE } = load(path.join(ROOT, 'data', 'rosters-live.js'), ['ROSTERS_LIVE']);
if (ROSTERS_LIVE) {
  const rk = new Map(players.map(p => [key(p.name), p.rank]));
  const out = {};
  Object.entries(ROSTERS_LIVE).forEach(([tid, list]) => {
    const ranks = (list || []).map(p => rk.get(key(p.name))).filter(Boolean).sort((a, b) => a - b).slice(0, 12);
    out[tid] = { top12: ranks.length ? Math.round(ranks.reduce((a, b) => a + b, 0) / ranks.length) : null, n: (list || []).length };
  });
  const order = Object.entries(out).filter(([, v]) => v.top12 != null).sort((a, b) => a[1].top12 - b[1].top12);
  order.forEach(([tid], i) => { out[tid].place = i + 1; });
  fs.writeFileSync(path.join(ROOT, 'data', 'team-strength.js'), `// AUTO-GENERIERT von build-best-available-board.js — Ø Board-Rang der 12 besten Kaderspieler je Team\nconst CBB_TEAM_STRENGTH = ${JSON.stringify(out)};\n`, 'utf8');
  console.log('team-strength.js geschrieben.');
}
