#!/usr/bin/env node
// ============================================================
//  NFL 32 — alle 32 NFL-Teams als Fantasy-Teams (All-Play-Liga)
// ============================================================
//  31.10.2026: Jede NFL-Mannschaft ist ein „Fantasy-Team“. Pro Woche zählt
//  ihre bestmögliche Aufstellung aus den EIGENEN Spielern dieser Woche
//  (Hindsight, wie „Optimal Lineup“ bei Sleeper):
//    QB · RB · RB · WR · WR · TE · FLEX · FLEX (RB/WR/TE) · K · DEF
//  Wer nicht spielt (verletzt, Bye), punktet nicht. Bye-Woche = kein Score.
//
//  Scoring = exakt DOPE (Sleeper, leagues/dope/data/league-info.js):
//  Full PPR, 4 pt Pass-TD, 0.04/Pass-Yard, Int -1, Fumble lost -2, 2PT 2,
//  K: FG nach Distanz 3/3/3/4/5/6, Miss -1, PAT 1/-1,
//  DEF: Sack 1, Int 2, Fumble Rec 2, FF 1, Safety 2, TD 6, Block 2,
//  ST-TD 6, Punkte zugelassen 10/7/4/1/0/-1/-4.
//
//  Quellen (nflverse, aus GitHub Actions erreichbar):
//    stats_player_week_<season>.csv  — Spieler (inkl. Kicker)
//    stats_team_week_<season>.csv    — Team-Defense/Special Teams
//    nfldata games.csv               — Ergebnisse (Punkte zugelassen, Bye, Status)
//  Nur Spiele mit Endstand zählen; eine Woche ist „complete“, wenn alle
//  Spiele der Woche einen Endstand haben UND Stats vorliegen.
//
//  Output: leagues/nfl32/data/teams.js (LEAGUE_TEAMS) und
//          leagues/nfl32/data/nfl32-weeks.js (NFL32)
//  Usage:  node leagues/nfl32/scripts/sync-nfl32.js [--season=2026]
//          NFL32_LOCAL=<ordner mit den 3 CSVs> = lokaler Test ohne Download
// ============================================================

const fs = require('fs');
const path = require('path');
const { httpsGetText, parseCsv, normTeam, NFL_TEAM_META, GAMES_CSV_URL } = require('../../../sports/nfl/scripts/lib/nflverse.js');

const DATA = path.join(__dirname, '..', 'data');
const now = new Date();
const seasonArg = (process.argv.find(a => a.startsWith('--season=')) || '').slice(9);
const SEASON = Number(seasonArg || process.env.SEASON || (now.getUTCMonth() >= 7 ? now.getUTCFullYear() : now.getUTCFullYear() - 1));

const PLAYER_URL = `https://github.com/nflverse/nflverse-data/releases/download/stats_player/stats_player_week_${SEASON}.csv`;
const TEAM_URL = `https://github.com/nflverse/nflverse-data/releases/download/stats_team/stats_team_week_${SEASON}.csv`;

// DOPE-Scoring (Sleeper-Schlüssel) — bei Änderungen in DOPE hier nachziehen
const S = {
  pass_yd: 0.04, pass_td: 4, pass_int: -1, pass_2pt: 2,
  rush_yd: 0.1, rush_td: 6, rush_2pt: 2,
  rec: 1, rec_yd: 0.1, rec_td: 6, rec_2pt: 2,
  fum_lost: -2, st_td: 6, fum_rec_td: 6,
  fgm_0_19: 3, fgm_20_29: 3, fgm_30_39: 3, fgm_40_49: 4, fgm_50_59: 5, fgm_60p: 6, fgmiss: -1, xpm: 1, xpmiss: -1,
  sack: 1, int: 2, fum_rec: 2, ff: 1, safe: 2, def_td: 6, blk_kick: 2, def_st_td: 6,
};
const PTS_ALLOW = pa => pa === 0 ? 10 : pa <= 6 ? 7 : pa <= 13 ? 4 : pa <= 20 ? 1 : pa <= 27 ? 0 : pa <= 34 ? -1 : -4;

const n = v => { const x = Number(v); return Number.isFinite(x) ? x : 0; };
const r2 = v => Math.round(v * 100) / 100;

function playerPoints(p) {
  return r2(
    n(p.passing_yards) * S.pass_yd + n(p.passing_tds) * S.pass_td + n(p.passing_interceptions) * S.pass_int + n(p.passing_2pt_conversions) * S.pass_2pt +
    n(p.rushing_yards) * S.rush_yd + n(p.rushing_tds) * S.rush_td + n(p.rushing_2pt_conversions) * S.rush_2pt +
    n(p.receptions) * S.rec + n(p.receiving_yards) * S.rec_yd + n(p.receiving_tds) * S.rec_td + n(p.receiving_2pt_conversions) * S.rec_2pt +
    (n(p.sack_fumbles_lost) + n(p.rushing_fumbles_lost) + n(p.receiving_fumbles_lost)) * S.fum_lost +
    n(p.special_teams_tds) * S.st_td + n(p.fumble_recovery_tds) * S.fum_rec_td +
    n(p.fg_made_0_19) * S.fgm_0_19 + n(p.fg_made_20_29) * S.fgm_20_29 + n(p.fg_made_30_39) * S.fgm_30_39 +
    n(p.fg_made_40_49) * S.fgm_40_49 + n(p.fg_made_50_59) * S.fgm_50_59 + n(p.fg_made_60_) * S.fgm_60p +
    n(p.fg_missed) * S.fgmiss + n(p.pat_made) * S.xpm + n(p.pat_missed) * S.xpmiss);
}

function defPoints(t, pa) {
  const parts = {
    sacks: n(t.def_sacks), ints: n(t.def_interceptions), fumRec: n(t.fumble_recovery_opp), ff: n(t.def_fumbles_forced),
    safeties: n(t.def_safeties), tds: n(t.def_tds), stTds: n(t.special_teams_tds),
    blocks: n(t.def_fg_blocks) + n(t.def_punt_blocks) + n(t.def_pat_blocks), pa,
  };
  const pts = parts.sacks * S.sack + parts.ints * S.int + parts.fumRec * S.fum_rec + parts.ff * S.ff + parts.safeties * S.safe +
    parts.tds * S.def_td + parts.stTds * S.def_st_td + parts.blocks * S.blk_kick + PTS_ALLOW(pa);
  return { pts: r2(pts), parts };
}

const POS = p => (p === 'FB' ? 'RB' : p);
const FLEX = new Set(['RB', 'WR', 'TE']);

// Optimale Aufstellung: feste Slots zuerst (Top-N je Position), FLEX = beste
// übrige RB/WR/TE — für diese Slot-Struktur ist das gierig bereits optimal.
function bestLineup(players) {
  const by = pos => players.filter(p => p.pos === pos).sort((a, b) => b.pts - a.pts);
  const used = new Set(), lineup = [];
  const take = (slot, list, k) => { for (let i = 0; i < k; i++) { const p = list.find(x => !used.has(x.id)); if (p) { used.add(p.id); lineup.push({ slot, ...p }); } else lineup.push({ slot, empty: true, pts: 0 }); } };
  take('QB', by('QB'), 1); take('RB', by('RB'), 2); take('WR', by('WR'), 2); take('TE', by('TE'), 1);
  take('FLEX', players.filter(p => FLEX.has(p.pos)).sort((a, b) => b.pts - a.pts), 2);
  take('K', by('K'), 1);
  const bench = players.filter(p => !used.has(p.id) && ['QB', 'RB', 'WR', 'TE', 'K'].includes(p.pos)).sort((a, b) => b.pts - a.pts);
  return { lineup, bench };
}

async function getCsv(url, local) {
  if (process.env.NFL32_LOCAL) return parseCsv(fs.readFileSync(path.join(process.env.NFL32_LOCAL, local), 'utf8'));
  let last;
  for (let i = 0; i < 4; i++) {
    try { return parseCsv(await httpsGetText(url)); } catch (e) { last = e; await new Promise(r => setTimeout(r, [2000, 5000, 10000, 0][i])); }
  }
  throw last;
}

(async () => {
  const [players, teamsW, games] = await Promise.all([
    getCsv(PLAYER_URL, `stats_player_week_${SEASON}.csv`),
    getCsv(TEAM_URL, `stats_team_week_${SEASON}.csv`),
    getCsv(GAMES_CSV_URL, 'games.csv'),
  ]);

  const reg = games.filter(g => Number(g.season) === SEASON && g.game_type === 'REG');
  const weeksAll = [...new Set(reg.map(g => Number(g.week)))].sort((a, b) => a - b);
  const final = g => g.home_score !== '' && g.away_score !== '';

  // Spieler je Team+Woche
  const pByTW = new Map();
  players.filter(p => p.season_type === 'REG').forEach(p => {
    const pos = POS(p.position);
    if (!['QB', 'RB', 'WR', 'TE', 'K'].includes(pos)) return;
    const key = `${normTeam(p.team)}|${Number(p.week)}`;
    if (!pByTW.has(key)) pByTW.set(key, []);
    pByTW.get(key).push({ id: p.player_id, name: p.player_display_name || p.player_name, pos, pts: playerPoints(p) });
  });
  const tByTW = new Map();
  teamsW.filter(t => t.season_type === 'REG').forEach(t => tByTW.set(`${normTeam(t.team)}|${Number(t.week)}`, t));

  const weeks = {};
  for (const w of weeksAll) {
    const gs = reg.filter(g => Number(g.week) === w);
    const out = {};
    let pending = 0;
    for (const g of gs) {
      const home = normTeam(g.home_team), away = normTeam(g.away_team);
      if (!final(g)) { pending += 2; out[home] = { status: 'pending', opp: away, home: true, kickoff: `${g.gameday}T${g.gametime}` }; out[away] = { status: 'pending', opp: home, home: false, kickoff: `${g.gameday}T${g.gametime}` }; continue; }
      for (const [team, opp, isHome, sc, osc] of [[home, away, true, n(g.home_score), n(g.away_score)], [away, home, false, n(g.away_score), n(g.home_score)]]) {
        const ps = pByTW.get(`${team}|${w}`), ts = tByTW.get(`${team}|${w}`);
        if (!ps || !ts) { pending++; out[team] = { status: 'nostats', opp, home: isHome, score: [sc, osc] }; continue; }
        const { lineup, bench } = bestLineup(ps);
        const def = defPoints(ts, osc);
        lineup.push({ slot: 'DEF', name: NFL_TEAM_META[team] ? NFL_TEAM_META[team].name.split(' ').slice(-1)[0] + ' D/ST' : team + ' D/ST', pos: 'DEF', pts: def.pts, def: def.parts });
        const pts = r2(lineup.reduce((a, l) => a + l.pts, 0));
        out[team] = {
          status: 'final', opp, home: isHome, score: [sc, osc], pts,
          lineup: lineup.map(l => l.empty ? [l.slot, null, null, 0] : [l.slot, l.name, l.pos, l.pts, l.def || undefined].filter(x => x !== undefined)),
          bench: bench.slice(0, 4).map(b => [b.name, b.pos, b.pts]),
        };
      }
    }
    if (!Object.keys(out).length) continue;
    // Gegner-Fantasy-Punkte eintragen (echter NFL-Gegner)
    Object.values(out).forEach(t => { const o = out[t.opp]; if (t.status === 'final' && o && o.status === 'final') t.oppPts = o.pts; });
    const anyFinal = Object.values(out).some(t => t.status === 'final');
    if (!anyFinal) continue;
    const byes = Object.keys(NFL_TEAM_META).filter(t => !out[t]);
    weeks[w] = { complete: pending === 0, byes, teams: out };
  }

  const done = Object.values(weeks).filter(w => w.complete).length;
  const finals = Object.values(weeks).reduce((a, w) => a + Object.values(w.teams).filter(t => t.status === 'final').length, 0);
  if (!finals) { console.error('Abbruch: keine einzige gewertete Team-Woche.'); process.exit(1); }

  const teams = Object.entries(NFL_TEAM_META).map(([id, m]) => ({ id, name: m.name, short: id, conference: m.conference, division: m.division }));
  const head = (title, src) => `// ============================================================
//  ${title}
//  AUTO-GENERIERT von leagues/nfl32/scripts/sync-nfl32.js — nicht von Hand editieren.
//  ${src}
// ============================================================

`;
  fs.mkdirSync(DATA, { recursive: true });
  fs.writeFileSync(path.join(DATA, 'teams.js'), head('LEAGUE_TEAMS — die 32 NFL-Teams als Fantasy-Teams', 'Konferenz/Division aus nflverse-Helpern (statisch).') +
    `const LEAGUE_TEAMS = [\n${teams.map(t => '  ' + JSON.stringify(t)).join(',\n')}\n];\n`, 'utf8');
  const data = { season: SEASON, updated: now.toISOString(), scoring: 'DOPE (Sleeper, Full PPR)', slots: ['QB', 'RB', 'RB', 'WR', 'WR', 'TE', 'FLEX', 'FLEX', 'K', 'DEF'], weeks };
  fs.writeFileSync(path.join(DATA, 'nfl32-weeks.js'), head(`NFL32 — Woche für Woche: optimale Aufstellung je NFL-Team (Saison ${SEASON})`,
    'lineup: [slot, name, pos, pts(, def-Details)] · bench: [name, pos, pts] (Top 4) · score: [eigene, gegnerische NFL-Punkte]') +
    `const NFL32 = ${JSON.stringify(data)};\n`, 'utf8');
  console.log(`Saison ${SEASON}: ${Object.keys(weeks).length} Wochen (${done} komplett), ${finals} Team-Wochen gewertet.`);
})().catch(e => { console.error(e); process.exit(1); });
