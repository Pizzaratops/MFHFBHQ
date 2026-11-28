#!/usr/bin/env node
// ============================================================
//  MAX PF SYNC — optimale Aufstellung je Team und Woche
// ============================================================
//  Rechnet für jede gespielte Woche aus Startern + Bank (ohne IR/Taxi) die
//  bestmögliche Aufstellung nach den Lineup-Slots der Liga und schreibt
//  leagues/<liga>/data/max-pf.js -> MAX_PF.
//
//    MAX_PF = { season, updated, source, weeks: { "<w>": { teamId: { act, max } } } }
//    act = tatsächlich erzielte Punkte (Starter), max = Max PF
//
//  Ligen:
//    bwp  (ESPN 91260355)  — mBoxscore je scoringPeriod, braucht ESPN_S2 + SWID.
//         W1/W2 fehlen bei ESPN seit dem Draft-Reset (23.09.2026); das
//         Frontend nimmt dort die echten Punkte.
//    dope (Sleeper)        — matchups je Woche (players_points) + Spieler-DB
//         für die Positionen.
//  Verfahren: Pflicht-Slots zuerst, Flex-Slots zuletzt (Slots nach Anzahl
//  passender Spieler sortiert, je Slot der beste freie Spieler). Für
//  QB/RB/WR/TE/FLEX/SUPER_FLEX/K/DEF ist das optimal.
//  Usage: node scripts/sync-max-pf.js bwp|dope   (aus beliebigem Ordner)
// ============================================================
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SEASON = 2026;

async function getJson(url, headers = {}) {
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0', ...headers } });
      if (!r.ok) throw new Error(`HTTP ${r.status} ${url}`);
      return await r.json();
    } catch (e) { if (i === 2) throw e; await new Promise(res => setTimeout(res, 1500)); }
  }
}

function loadConst(file, name) {
  if (!fs.existsSync(file)) return null;
  try { return new Function(fs.readFileSync(file, 'utf8') + `;return ${name}`)(); } catch (e) { return null; }
}

// pool = [{ elig: Set(slotKeys), pts }], slots = [[slotKey, count], …]
function optimal(pool, slots) {
  const used = new Array(pool.length).fill(false);
  const order = slots.slice().sort((a, b) => pool.filter(p => p.elig.has(a[0])).length - pool.filter(p => p.elig.has(b[0])).length);
  let tot = 0;
  for (const [slot, n] of order) for (let k = 0; k < n; k++) {
    let bi = -1;
    pool.forEach((p, i) => { if (!used[i] && p.elig.has(slot) && (bi < 0 || p.pts > pool[bi].pts)) bi = i; });
    if (bi >= 0) { used[bi] = true; tot += pool[bi].pts; }
  }
  return Math.round(tot * 100) / 100;
}
const r2 = x => Math.round((x || 0) * 100) / 100;
const norm = s => String(s || '').toLowerCase().replace(/[^a-z0-9]/g, '');

// ---------------- ESPN (Foodball) ----------------
async function espn(teams) {
  const ck = [];
  if (process.env.ESPN_S2) ck.push(`espn_s2=${process.env.ESPN_S2}`);
  if (process.env.SWID) ck.push(`SWID=${process.env.SWID}`);
  const H = ck.length ? { Cookie: ck.join('; '), 'x-fantasy-filter': '{}' } : {};
  const base = `https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/${SEASON}/segments/0/leagues/91260355`;
  const lg = await getJson(`${base}?view=mTeam&view=mSettings&view=mStatus`, H);
  const BENCH = new Set([20, 21, 24, 25]);
  const slots = Object.entries(lg.settings.rosterSettings.lineupSlotCounts).filter(([s, n]) => n > 0 && !BENCH.has(+s)).map(([s, n]) => [+s, n]);
  const byName = {}; teams.forEach(t => { byName[norm(t.name)] = t.id; });
  const idOf = {}; lg.teams.forEach(t => { idOf[t.id] = byName[norm(t.name || `${t.location} ${t.nickname}`)] || String(t.id); });
  const cur = lg.status.currentMatchupPeriod;
  const weeks = {};
  for (let w = 1; w <= cur; w++) {
    const d = await getJson(`${base}?view=mBoxscore&view=mMatchupScore&scoringPeriodId=${w}`, H);
    for (const m of (d.schedule || []).filter(x => x.matchupPeriodId === w)) for (const side of ['home', 'away']) {
      const s = m[side]; if (!s) continue;
      const ros = s.rosterForCurrentScoringPeriod || s.rosterForMatchupPeriod; if (!ros) continue;
      const act = ros.entries.filter(e => !BENCH.has(e.lineupSlotId)).reduce((t, e) => t + (e.playerPoolEntry.appliedStatTotal || 0), 0);
      const pool = ros.entries.filter(e => e.lineupSlotId !== 21)
        .map(e => ({ elig: new Set(e.playerPoolEntry.player.eligibleSlots || []), pts: e.playerPoolEntry.appliedStatTotal || 0 }));
      (weeks[w] = weeks[w] || {})[idOf[s.teamId]] = { act: r2(act), max: optimal(pool, slots) };
    }
  }
  return { weeks, source: 'ESPN mBoxscore (Starter + Bank, ohne IR)' };
}

// ---------------- Sleeper (DOPE) ----------------
const SLEEPER_ELIG = {
  QB: ['QB'], RB: ['RB'], WR: ['WR'], TE: ['TE'], K: ['K'], DEF: ['DEF'],
  FLEX: ['RB', 'WR', 'TE'], SUPER_FLEX: ['QB', 'RB', 'WR', 'TE'], REC_FLEX: ['WR', 'TE'], WRRB_FLEX: ['RB', 'WR'],
  DL: ['DL', 'DE', 'DT'], LB: ['LB'], DB: ['DB', 'CB', 'S'], IDP_FLEX: ['DL', 'DE', 'DT', 'LB', 'DB', 'CB', 'S'],
};
async function sleeper(teams) {
  const S = 'https://api.sleeper.app/v1';
  const L = '1312799736218017792';
  const [lg, state, players] = await Promise.all([getJson(`${S}/league/${L}`), getJson(`${S}/state/nfl`), getJson(`${S}/players/nfl`)]);
  const counts = {};
  (lg.roster_positions || []).forEach(p => { if (SLEEPER_ELIG[p]) counts[p] = (counts[p] || 0) + 1; });
  const slots = Object.entries(counts);
  const idOf = {}; teams.forEach(t => { if (t.rosterId != null) idOf[t.rosterId] = t.id; });
  const lastWeek = state.season_type === 'regular' ? Math.max(1, state.week) : (String(state.season) === String(SEASON) ? 18 : 0);
  const weeks = {};
  for (let w = 1; w <= lastWeek; w++) {
    const mus = await getJson(`${S}/league/${L}/matchups/${w}`).catch(() => []);
    for (const m of mus || []) {
      const pp = m.players_points || {};
      if (!Object.keys(pp).length) continue;
      const pool = (m.players || []).map(pid => {
        const p = players[pid] || {};
        const pos = new Set(p.fantasy_positions || (p.position ? [p.position] : (/^[A-Z]{2,3}$/.test(pid) ? ['DEF'] : [])));
        const elig = new Set(Object.keys(SLEEPER_ELIG).filter(sk => SLEEPER_ELIG[sk].some(x => pos.has(x))));
        return { elig, pts: pp[pid] || 0 };
      });
      (weeks[w] = weeks[w] || {})[idOf[m.roster_id] || String(m.roster_id)] = { act: r2(m.points), max: optimal(pool, slots) };
    }
  }
  return { weeks, source: 'Sleeper matchups (players_points, Starter + Bank, ohne IR/Taxi)' };
}

(async () => {
  const lg = process.argv[2];
  if (!['bwp', 'dope'].includes(lg)) { console.error('Usage: node scripts/sync-max-pf.js bwp|dope'); process.exit(1); }
  const dir = path.join(ROOT, 'leagues', lg, 'data');
  const teams = loadConst(path.join(dir, 'teams.js'), 'LEAGUE_TEAMS') || [];
  const res = lg === 'bwp' ? await espn(teams) : await sleeper(teams);
  // ältere Wochen behalten, falls die Quelle sie nicht mehr liefert
  const old = loadConst(path.join(dir, 'max-pf.js'), 'MAX_PF');
  // eingefrorene Wochen (z. B. Foodball W1/W2 nach ESPN-Draft-Reset) aus frozen-weeks-<season>.js
  const frozen = fs.existsSync(path.join(dir, `frozen-weeks-${SEASON}.js`)) ? loadConst(path.join(dir, `frozen-weeks-${SEASON}.js`), `FROZEN_WEEKS_${SEASON}`) : null;
  const weeks = Object.assign({}, old && old.season === SEASON ? old.weeks : {}, res.weeks, (frozen && frozen.maxPf) || {});
  const out = { season: SEASON, updated: new Date().toISOString(), source: res.source, weeks };
  fs.writeFileSync(path.join(dir, 'max-pf.js'), `// ============================================================
//  MAX_PF — Max PF (optimale Aufstellung) je Team und Woche
// ============================================================
//  AUTO-GENERIERT von scripts/sync-max-pf.js. Nicht von Hand editieren.
//  weeks[w][teamId] = { act: erzielte Punkte, max: Max PF }
//  Zuletzt synchronisiert: ${out.updated}
// ============================================================

const MAX_PF = ${JSON.stringify(out)};
`);
  const ws = Object.keys(weeks).sort((a, b) => a - b);
  console.log(`✅ ${lg}: Max PF für Wochen ${ws.join(', ')} (${res.source})`);
  const unmatched = new Set();
  ws.forEach(w => Object.keys(weeks[w]).forEach(id => { if (!teams.some(t => t.id === id)) unmatched.add(id); }));
  if (unmatched.size) console.log('⚠️ Ohne Team-Zuordnung:', [...unmatched].join(', '));
})().catch(e => { console.error('❌', e.message); process.exit(1); });
