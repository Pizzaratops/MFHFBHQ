#!/usr/bin/env node
// ============================================================
//  BANANA BOAT CREW — Fantasy-Punkte je Spieler (Points-Liga, seit 26.10.2026)
// ============================================================
//  Rechnet mit dem echten Liga-Scoring (LEAGUE_INFO.scoring aus sync-espn.js)
//  für JEDEN NBA-Spieler:
//   - Saison: FP gesamt, FP/Spiel, Minuten, Kategorien je Spiel
//   - Form: FP/Spiel der letzten 7 / 14 / 30 Tage, letzte 10 Spiele (Log)
//   - Projektion Rest der Saison: FP/Spiel aus den Live Projections
//     (Consensus BBM + Hashtag + echte Spiele, gedämpft – sportweit)
//   - Preseason: FP/Spiel aus der Consensus (Stand zum Saisonstart)
//   - Rest-Spiele (NBA-Spielplan × Verfügbarkeit) und Rest-FP
//  Quellen: sportweite Tages-CSVs (sports/nba/scripts/data/daily-9cat_nba_*.csv,
//  ESPN-Boxscores), sports/nba/data/live-projections.js, projections-consensus.js.
//
//  Ausgabe: leagues/bbc/data/points.js (POINTS)
//  Usage: node leagues/bbc/scripts/build-points.js
// ============================================================
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..', '..', '..');
const DATA = path.join(__dirname, '..', 'data');
const NBA = path.join(ROOT, 'sports', 'nba');
const CSV_DIR = path.join(NBA, 'scripts', 'data');

function loadConst(file, name) {
  if (!fs.existsSync(file)) return null;
  const sb = {}; vm.createContext(sb);
  vm.runInContext(fs.readFileSync(file, 'utf8') + `\nthis.__X__ = (typeof ${name} !== 'undefined') ? ${name} : null;`, sb);
  return sb.__X__;
}
const INFO = loadConst(path.join(DATA, 'league-info.js'), 'LEAGUE_INFO');
if (!INFO || !INFO.scoring) { console.error('league-info.js fehlt – erst sync-espn.js laufen lassen.'); process.exit(1); }
const SC = INFO.scoring;
const LIVE = loadConst(path.join(NBA, 'data', 'live-projections.js'), 'LIVE_PROJECTIONS') || {};
const CONS = loadConst(path.join(NBA, 'data', 'projections-consensus.js'), 'PROJECTIONS_CONSENSUS') || {};
const SCHED = loadConst(path.join(DATA, 'nba-schedule.js'), 'NBA_PRO_SCHEDULE');
const ALIASES = loadConst(path.join(NBA, 'data', 'aliases.js'), 'NAME_ALIASES') || {};
const ESPN_PLAYERS = loadConst(path.join(DATA, 'players.js'), 'ESPN_PLAYERS') || {};

// Namen wie sports/nba/nba.js key()
const base = s => String(s || '').toLowerCase().trim().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\./g, '').replace(/['’‘`]/g, '').replace(/\s+/g, ' ');
const key = s => { const b = base(s); const a = ALIASES[b]; return base(a || s).replace(/\b(jr|sr|iii|ii)\b/g, '').replace(/\s+/g, ' ').trim(); };
const CANON = { NOP: 'NOR', NO: 'NOR', PHX: 'PHO', WSH: 'WAS', GS: 'GSW', SA: 'SAS', NY: 'NYK', UTAH: 'UTA', BRK: 'BKN' };
const canon = a => { const u = String(a || '').toUpperCase(); return CANON[u] || u; };

const fp = s => Object.entries(SC).reduce((a, [k, w]) => a + (Number(s[k]) || 0) * w, 0);
const r1 = v => (v == null || !Number.isFinite(v) ? null : Math.round(v * 10) / 10);

// ---------- Saison aus den Tages-CSVs ----------
const now = new Date();
const startYear = now.getUTCMonth() >= 7 ? now.getUTCFullYear() : now.getUTCFullYear() - 1;
const SINCE = `${startYear}-10-01`;
const files = fs.existsSync(CSV_DIR) ? fs.readdirSync(CSV_DIR).filter(f => /^daily-9cat_nba_\d{4}-\d{2}-\d{2}\.csv$/.test(f) && f.slice(15, 25) >= SINCE).sort() : [];
const parse = line => { const out = []; let cur = '', q = false; for (const c of line) { if (c === '"') q = !q; else if (c === ',' && !q) { out.push(cur); cur = ''; } else cur += c; } out.push(cur); return out; };
const P = new Map();
let lastDate = null;
files.forEach(f => {
  const date = f.slice(15, 25); lastDate = date;
  const lines = fs.readFileSync(path.join(CSV_DIR, f), 'utf8').split('\n').filter(Boolean);
  const h = parse(lines[0]).map(x => x.trim()), col = n => h.indexOf(n);
  const C = { name: col('Name'), team: col('Team'), min: col('MIN'), pts: col('PTS'), reb: col('REB'), ast: col('AST'), stl: col('STL'), blk: col('BLK'), tov: col('TO'), tpm: col('3PM'), fgm: col('FGM'), fga: col('FGA'), ftm: col('FTM'), fta: col('FTA') };
  for (let i = 1; i < lines.length; i++) {
    const r = parse(lines[i]); const name = (r[C.name] || '').trim(); if (!name) continue;
    const s = {}; ['min', 'pts', 'reb', 'ast', 'stl', 'blk', 'tov', 'tpm', 'fgm', 'fga', 'ftm', 'fta'].forEach(k => { s[k] = C[k] >= 0 ? parseFloat(r[C[k]]) || 0 : 0; });
    const k = key(name);
    const e = P.get(k) || { name, team: canon(r[C.team]), games: [] };
    e.team = canon(r[C.team]) || e.team; e.games.push({ date, ...s, fp: fp(s) });
    P.set(k, e);
  }
});

// ---------- Projektionen ----------
const projOf = new Map(); Object.entries(LIVE).forEach(([n, v]) => projOf.set(key(n), { n, v }));
const preOf = new Map(); Object.entries(CONS).forEach(([n, v]) => preOf.set(key(n), { n, v }));
const espnOf = new Map(Object.entries(ESPN_PLAYERS).map(([n, v]) => [key(n), v]));
const allKeys = new Set([...P.keys(), ...[...projOf.keys()].filter(k => projOf.get(k).v.hasBaseline || P.has(k))]);

// Rest-Spiele je NBA-Team ab dem nächsten Spieltag
const latestSp = INFO.latestSp || 0;
const remainTeam = {};
if (SCHED) Object.entries(SCHED.byTeam).forEach(([t, g]) => { remainTeam[t] = Object.keys(g).filter(sp => Number(sp) > latestSp).length; });

const daysAgo = (d, n) => (new Date(lastDate) - new Date(d)) / 864e5 < n;
const players = {};
allKeys.forEach(k => {
  const e = P.get(k), pj = projOf.get(k), pr = preOf.get(k);
  const name = (e && e.name) || (pj && pj.n) || (pr && pr.n);
  const team = (e && e.team) || canon(pr && pr.v.team) || null;
  const ep = espnOf.get(k);
  const out = { team: (ep && ep.team && ep.team !== 'FA' ? ep.team : team) || null };
  if (ep) { out.pos = ep.pos; if (ep.inj) out.inj = ep.inj; }
  if (e) {
    const g = e.games, n = g.length, sum = kk => g.reduce((a, x) => a + x[kk], 0);
    out.gp = n; out.tot = r1(sum('fp')); out.fpg = r1(sum('fp') / n); out.min = r1(sum('min') / n);
    out.cat = Object.fromEntries(['pts', 'reb', 'ast', 'stl', 'blk', 'tov', 'tpm', 'fgm', 'fga', 'ftm', 'fta'].map(kk => [kk, r1(sum(kk) / n)]));
    [[7, 'l7'], [14, 'l14'], [30, 'l30']].forEach(([d, kk]) => { const w = g.filter(x => daysAgo(x.date, d)); if (w.length) { out[kk] = r1(w.reduce((a, x) => a + x.fp, 0) / w.length); out[kk + 'g'] = w.length; } });
    const lastG = g[g.length - 1]; if (lastG.date === lastDate) { out.l1 = r1(lastG.fp); out.l1min = Math.round(lastG.min); }
    out.log = g.slice(-10).map(x => [x.date.slice(5), r1(x.fp), Math.round(x.min)]);
    out.hi = r1(Math.max(...g.map(x => x.fp)));
  }
  if (pj) out.proj = r1(fp(pj.v));
  if (pr) { out.pre = r1(fp(pr.v)); out.preG = pr.v.g || null; }
  const avail = pr && pr.v.g ? Math.min(1, pr.v.g / 80) : 0.85;
  if (out.team && remainTeam[out.team] != null && (out.proj || out.fpg)) {
    out.rosG = r1(remainTeam[out.team] * avail);
    out.rosFp = Math.round((out.proj != null ? out.proj : out.fpg) * out.rosG);
  }
  if (out.proj == null && out.fpg == null) return;
  players[name] = out;
});

const meta = { scoring: SC, through: lastDate, files: files.length, players: Object.keys(players).length, latestSp, built: new Date().toISOString() };
fs.writeFileSync(path.join(DATA, 'points.js'), `// ============================================================
//  POINTS — Fantasy-Punkte je Spieler mit dem Scoring der Banana Boat Crew
//  AUTO-GENERIERT von leagues/bbc/scripts/build-points.js · ${meta.built}
//  fpg = FP/Spiel Saison · l7/l14/l30 = FP/Spiel letzte 7/14/30 Tage · proj = Projektion Rest der Saison (FP/Spiel)
//  pre = Preseason-Projektion · rosG/rosFp = erwartete Rest-Spiele/-Punkte · log = letzte 10 Spiele [Datum, FP, Min]
// ============================================================

const POINTS = ${JSON.stringify({ meta, players })};
`);
console.log(`points.js: ${meta.players} Spieler, ${files.length} Spieltage bis ${lastDate}, Scoring ${JSON.stringify(SC)}`);
