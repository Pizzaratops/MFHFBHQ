#!/usr/bin/env node
// ============================================================
//  WOCHEN-KATEGORIEN je Fantasy-Team (9-Cat-Ligen, seit 26.10.2026)
// ============================================================
//  Holt für jede Matchup-Woche die gezählten Stats jedes Teams (nur Spieler
//  in der aktiven Aufstellung – ESPN rosterForMatchupPeriod, Split 5) inkl.
//  FGM/FGA/FTM/FTA und GP. Geprüft: daraus nachgerechnete Kategorie-Ergebnisse
//  = ESPN-Ergebnis (Funkytown Woche 1, alle 5 Matchups exakt).
//  Grundlage für die Schnell-Übersicht: Live-Matchups, Royal Rumble, Team-Totals.
//
//  Abgeschlossene Wochen werden einmal geholt und bleiben, die laufende Woche
//  bei jedem Lauf neu. Ein ESPN-Abruf pro Woche (mBoxscore + mMatchupScore).
//
//  Usage (im Hub-Root): node sports/nba/scripts/sync-week-stats.js --league=funkytown
//  Ausgabe: leagues/<liga>/data/week-stats.js (WEEK_STATS)
// ============================================================
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execFileSync } = require('child_process');

const league = (process.argv.find(a => a.startsWith('--league=')) || '').split('=')[1];
if (!league) { console.error('--league=<ordner> fehlt'); process.exit(1); }
const DIR = path.join(__dirname, '..', '..', '..', 'leagues', league);
const OUT = path.join(DIR, 'data', 'week-stats.js');

// Konfiguration: leagues/<liga>/js/espn-sync.js (TTHQ, Funkytown) oder per Argument
// --espn=<Liga-ID> [--season=2027] mit Team-ID = ESPN-ID (Banana Boat Crew).
let LID, SEASON, MAP;
const argEspn = (process.argv.find(a => a.startsWith('--espn=')) || '').split('=')[1];
if (argEspn) {
  LID = Number(argEspn); SEASON = Number((process.argv.find(a => a.startsWith('--season=')) || '').split('=')[1]) || 2027;
  MAP = new Proxy({}, { get: (o, k) => (/^\d+$/.test(String(k)) ? Number(k) : undefined) });
} else {
  const sb = {}; vm.createContext(sb);
  vm.runInContext(fs.readFileSync(path.join(DIR, 'js', 'espn-sync.js'), 'utf8') + '\nthis.C = { ESPN_LEAGUE_ID, ESPN_SEASON, ESPN_TO_TT_TEAM };', sb);
  ({ ESPN_LEAGUE_ID: LID, ESPN_SEASON: SEASON, ESPN_TO_TT_TEAM: MAP } = sb.C);
}
const URL = `https://lm-api-reads.fantasy.espn.com/apis/v3/games/fba/seasons/${SEASON}/segments/0/leagues/${LID}`;
const COOKIE = process.env.ESPN_S2 ? `espn_s2=${process.env.ESPN_S2}${process.env.SWID ? `; SWID=${process.env.SWID}` : ''}` : '';

function get(url) {
  const args = ['-sS', '-A', 'mfhfb-hq-bot', '-w', '\n%{http_code}', url];
  if (COOKIE) args.splice(3, 0, '-b', COOKIE);
  const out = execFileSync('curl', args, { maxBuffer: 128 * 1024 * 1024 }).toString();
  const cut = out.lastIndexOf('\n'), code = out.slice(cut + 1).trim();
  if (code !== '200') throw new Error(`HTTP ${code}`);
  return JSON.parse(out.slice(0, cut));
}
const ID = { pts: '0', blk: '1', stl: '2', ast: '3', reb: '6', tov: '11', fgm: '13', fga: '14', ftm: '15', fta: '16', tpm: '17', gp: '42', min: '40' };
function totals(side) {
  const t = Object.fromEntries(Object.keys(ID).map(k => [k, 0]));
  ((side.rosterForMatchupPeriod || {}).entries || []).forEach(e => {
    (((e.playerPoolEntry || {}).player || {}).stats || []).forEach(s => {
      if (s.statSplitTypeId !== 5) return;
      Object.entries(ID).forEach(([k, i]) => { t[k] += Number(s.stats[i]) || 0; });
    });
  });
  Object.keys(t).forEach(k => { t[k] = Math.round(t[k] * 10) / 10; });
  return t;
}
function load() {
  if (!fs.existsSync(OUT)) return null;
  try { const s = {}; vm.createContext(s); vm.runInContext(fs.readFileSync(OUT, 'utf8') + '\nthis.X = WEEK_STATS;', s); return s.X; } catch (e) { return null; }
}

const base = get(`${URL}?view=mMatchupScore&view=mStatus&view=mSettings`);
const cur = (base.status && base.status.currentMatchupPeriod) || 1;
const latestSp = (base.status && base.status.latestScoringPeriod) || base.scoringPeriodId || 1;
const old = load();
const W = old && old.season === SEASON ? old : { season: SEASON, periods: {}, matchups: {} };
// Spieltage je Woche aus pointsByScoringPeriod (abgeschlossene Wochen)
const spOf = {};
(base.schedule || []).forEach(m => { const k = Object.keys((m.home && m.home.pointsByScoringPeriod) || {}).map(Number); if (k.length) spOf[m.matchupPeriodId] = Math.min(...k, spOf[m.matchupPeriodId] || Infinity); });
const want = [];
for (let p = 1; p <= cur; p++) if (p === cur || !W.periods[p]) want.push(p);
let fetched = 0;
want.forEach(p => {
  const sp = p === cur ? latestSp : spOf[p];
  if (!sp) return;
  try {
    const B = get(`${URL}?view=mBoxscore&view=mMatchupScore&scoringPeriodId=${sp}`);
    const per = {}, pairs = [];
    (B.schedule || []).filter(m => m.matchupPeriodId === p).forEach(m => {
      [m.home, m.away].filter(Boolean).forEach(s => { const tid = MAP[s.teamId]; if (tid != null && s.rosterForMatchupPeriod) per[tid] = totals(s); });
      if (m.home && m.away && MAP[m.home.teamId] != null && MAP[m.away.teamId] != null) {
        const cs = x => (x.cumulativeScore || {});
        pairs.push({ home: MAP[m.home.teamId], away: MAP[m.away.teamId], hw: cs(m.home).wins || 0, hl: cs(m.home).losses || 0, ht: cs(m.home).ties || 0, winner: m.winner || 'UNDECIDED', playoff: !!(m.playoffTierType && m.playoffTierType !== 'NONE') });
      }
    });
    if (Object.keys(per).length) { W.periods[p] = per; W.matchups[p] = pairs; fetched++; }
  } catch (e) { console.warn(`Woche ${p}: ${e.message}`); }
});
W.current = cur; W.latestSp = latestSp; W.updated = new Date().toISOString();
fs.writeFileSync(OUT, `// ============================================================
//  WEEK_STATS — gezählte Kategorien je Fantasy-Team und Woche (nur aktive Aufstellung)
//  AUTO-GENERIERT von sports/nba/scripts/sync-week-stats.js · ${W.updated}
//  periods[Woche][Team-ID] = { gp, min, pts, reb, ast, stl, blk, tov, tpm, fgm, fga, ftm, fta }
//  matchups[Woche] = [{ home, away, hw, hl, ht, winner, playoff }] (Team-IDs wie TEAMS)
// ============================================================

const WEEK_STATS = ${JSON.stringify(W)};
`);
console.log(`${league}: ${fetched} Woche(n) geholt (laufend ${cur}, Spieltag ${latestSp}), gesamt ${Object.keys(W.periods).length}.`);
