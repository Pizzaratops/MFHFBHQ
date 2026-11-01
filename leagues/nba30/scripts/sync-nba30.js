#!/usr/bin/env node
// ============================================================
//  NBA 30 — alle 30 NBA-Teams als Fantasy-Teams (All-Play, Points)
// ============================================================
//  01.11.2026: Gegenstück zu NFL 32. Jede NBA-Mannschaft ist ein Fantasy-
//  Team. Pro Spiel zählt die bestmögliche Aufstellung aus den eigenen
//  Spielern dieses Spiels (Hindsight), Slots wie in der Points League
//  Banana Boat Crew (ESPN): PG · SG · SF · PF · C · UTIL.
//  Wochenpunkte = Summe aller Spiele der Woche (wie Daily Lineups bei ESPN
//  — wer mehr Spiele hat, sammelt mehr). Wochen = BBC-Matchup-Perioden.
//
//  Scoring = BBC (leagues/bbc/data/league-info.js → LEAGUE_INFO.scoring):
//  PTS 1, REB 1, AST 2, STL 4, BLK 4, TO -2, 3PM 1, FGM 2, FGA -1, FTM 1, FTA -1.
//  Positionen: ESPN-Eligibility (leagues/bbc/data/players.js), sonst
//  Hashtag (TTHQ), sonst ESPN-Kader (G → PG/SG, F → SF/PF), sonst nur UTIL.
//
//  Quelle: die Tages-Box-Scores des NBA-Syncs
//    sports/nba/scripts/data/daily-9cat_nba_<datum>.games.json
//  Die Rohdateien werden nach 120 Tagen gelöscht — deshalb hält die Output-
//  Datei alle bereits berechneten Spiele selbst fest und ergänzt nur neue.
//
//  Output: leagues/nba30/data/teams.js (LEAGUE_TEAMS), nba30-weeks.js (NBA30)
//  Usage:  node leagues/nba30/scripts/sync-nba30.js   (läuft im NBA-Sync mit)
// ============================================================

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..', '..');
const DATA = path.join(__dirname, '..', 'data');
const OUT = path.join(DATA, 'nba30-weeks.js');
const RAW = path.join(ROOT, 'sports', 'nba', 'scripts', 'data');
const load = (file, name) => { try { return new Function(fs.readFileSync(file, 'utf8') + `;return typeof ${name} !== 'undefined' ? ${name} : null`)(); } catch (e) { return null; } };

const INFO = load(path.join(ROOT, 'leagues', 'bbc', 'data', 'league-info.js'), 'LEAGUE_INFO') || {};
const SC = INFO.scoring || { reb: 1, tov: -2, fgm: 2, fga: -1, ftm: 1, fta: -1, pts: 1, tpm: 1, blk: 4, stl: 4, ast: 2 };
const SLOTS = ['PG', 'SG', 'SF', 'PF', 'C', 'UTIL'];

const CANON = { NOP: 'NOR', NO: 'NOR', PHX: 'PHO', WSH: 'WAS', GS: 'GSW', SA: 'SAS', NY: 'NYK', UTAH: 'UTA', BRK: 'BKN' };
const canon = a => { const u = String(a || '').toUpperCase(); return CANON[u] || u; };
const TEAMS = {
  ATL: ['Atlanta Hawks', '#E03A3E', 'East'], BOS: ['Boston Celtics', '#2E9D62', 'East'], BKN: ['Brooklyn Nets', '#9AA0A6', 'East'],
  CHA: ['Charlotte Hornets', '#1D8C9A', 'East'], CHI: ['Chicago Bulls', '#CE1141', 'East'], CLE: ['Cleveland Cavaliers', '#9B2242', 'East'],
  DAL: ['Dallas Mavericks', '#2F6FD6', 'West'], DEN: ['Denver Nuggets', '#FEC524', 'West'], DET: ['Detroit Pistons', '#C8102E', 'East'],
  GSW: ['Golden State Warriors', '#FFC72C', 'West'], HOU: ['Houston Rockets', '#CE1141', 'West'], IND: ['Indiana Pacers', '#FDBB30', 'East'],
  LAC: ['LA Clippers', '#2F6FD6', 'West'], LAL: ['Los Angeles Lakers', '#8B5CF6', 'West'], MEM: ['Memphis Grizzlies', '#5D76A9', 'West'],
  MIA: ['Miami Heat', '#98002E', 'East'], MIL: ['Milwaukee Bucks', '#3A7D44', 'East'], MIN: ['Minnesota Timberwolves', '#3B82C4', 'West'],
  NOR: ['New Orleans Pelicans', '#B4975A', 'West'], NYK: ['New York Knicks', '#F58426', 'East'], OKC: ['Oklahoma City Thunder', '#007AC1', 'West'],
  ORL: ['Orlando Magic', '#0077C0', 'East'], PHI: ['Philadelphia 76ers', '#3B82F6', 'East'], PHO: ['Phoenix Suns', '#E56020', 'West'],
  POR: ['Portland Trail Blazers', '#E03A3E', 'West'], SAC: ['Sacramento Kings', '#7C4DBA', 'West'], SAS: ['San Antonio Spurs', '#A3AAAE', 'West'],
  TOR: ['Toronto Raptors', '#CE1141', 'East'], UTA: ['Utah Jazz', '#7E57C2', 'West'], WAS: ['Washington Wizards', '#3B6FD6', 'East'],
};

// ---------- Positionen ----------
const norm = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z ]/g, '').replace(/\s+(jr|sr|ii|iii|iv)$/, '').trim();
const posMap = new Map();
const espn = load(path.join(ROOT, 'leagues', 'bbc', 'data', 'players.js'), 'ESPN_PLAYERS') || {};
const hashtag = load(path.join(ROOT, 'leagues', 'tthq', 'data', 'hashtag.js'), 'HASHTAG_RANKINGS') || [];
const rosters = (load(path.join(ROOT, 'sports', 'nba', 'data', 'nba-rosters.js'), 'NBA_ROSTERS') || {}).teams || {};
const ROSTER_POS = { G: ['PG', 'SG'], F: ['SF', 'PF'], C: ['C'], PG: ['PG'], SG: ['SG'], SF: ['SF'], PF: ['PF'] };
Object.values(rosters).flat().forEach(p => { if (ROSTER_POS[p.pos]) posMap.set(norm(p.n), ROSTER_POS[p.pos]); });
hashtag.forEach(r => { const ps = String(r[3] || '').split(',').filter(x => SLOTS.includes(x)); if (ps.length) posMap.set(norm(r[1]), ps); });
Object.entries(espn).forEach(([n, p]) => { const ps = String(p.pos || '').split('/').filter(x => SLOTS.includes(x)); if (ps.length) posMap.set(norm(n), ps); });
const posOf = name => posMap.get(norm(name)) || [];

const r1 = v => Math.round(v * 10) / 10;
const fpts = p => r1((p.pts || 0) * (SC.pts || 0) + (p.reb || 0) * (SC.reb || 0) + (p.ast || 0) * (SC.ast || 0) + (p.stl || 0) * (SC.stl || 0) +
  (p.blk || 0) * (SC.blk || 0) + (p.to || 0) * (SC.tov || 0) + (p.tpm || 0) * (SC.tpm || 0) + (p.fgm || 0) * (SC.fgm || 0) +
  (p.fga || 0) * (SC.fga || 0) + (p.ftm || 0) * (SC.ftm || 0) + (p.fta || 0) * (SC.fta || 0));

// Optimale Aufstellung mit Positions-Eligibility (Tiefensuche über die besten 10)
function bestLineup(players) {
  const cand = players.filter(p => p.min > 0 || p.fp !== 0).sort((a, b) => b.fp - a.fp).slice(0, 10);
  let best = { sum: -Infinity, pick: [] };
  const used = new Array(cand.length).fill(false), pick = [];
  (function dfs(si, sum) {
    if (si === SLOTS.length) { if (sum > best.sum) best = { sum, pick: pick.slice() }; return; }
    const slot = SLOTS[si];
    let any = false;
    cand.forEach((p, i) => {
      if (used[i] || !(slot === 'UTIL' || p.pos.includes(slot))) return;
      any = true; used[i] = true; pick.push([slot, p]); dfs(si + 1, sum + p.fp); pick.pop(); used[i] = false;
    });
    if (!any) { pick.push([slot, null]); dfs(si + 1, sum); pick.pop(); }
  })(0, 0);
  const inLineup = new Set(best.pick.filter(x => x[1]).map(x => x[1].name));
  return {
    pts: r1(best.pick.reduce((a, x) => a + (x[1] ? x[1].fp : 0), 0)),
    lineup: best.pick.map(([slot, p]) => (p ? [slot, p.name, p.pos.join('/') || '–', p.fp] : [slot, null, null, 0])),
    bench: players.filter(p => !inLineup.has(p.name) && p.fp > 0).sort((a, b) => b.fp - a.fp).slice(0, 2).map(p => [p.name, p.pos.join('/') || '–', p.fp]),
  };
}

// ---------- Wochen (BBC-Perioden) ----------
const day0 = INFO.day0 || '2026-10-20';
const addDays = (d, n) => { const x = new Date(d + 'T12:00:00Z'); x.setUTCDate(x.getUTCDate() + n); return x.toISOString().slice(0, 10); };
const dayIdx = d => Math.round((new Date(d + 'T12:00:00Z') - new Date(day0 + 'T12:00:00Z')) / 864e5) + 1;
const periodOf = {};
Object.entries(INFO.periods || {}).forEach(([p, days]) => days.forEach(d => { periodOf[d] = Number(p); }));
const weekOf = d => { const i = dayIdx(d); if (i < 1) return null; if (periodOf[i]) return periodOf[i]; return i <= 6 ? 1 : Math.floor((i - 7) / 7) + 2; };
const weekDays = w => { const ds = Object.entries(periodOf).filter(([, p]) => p === w).map(([d]) => Number(d)); return ds.length ? ds.map(i => addDays(day0, i - 1)) : null; };

// ---------- bestehende Spiele + neue Rohdateien ----------
const prev = load(OUT, 'NBA30');
const games = new Map(); // `${date}|${team}` → Spiel
if (prev && prev.weeks) Object.values(prev.weeks).forEach(W => Object.values(W.teams || {}).forEach(t => (t.games || []).forEach(g => { if (g.team) games.set(`${g.d}|${g.team}`, g); })));
const pendingGames = new Map();
const files = fs.existsSync(RAW) ? fs.readdirSync(RAW).filter(f => /^daily-9cat_nba_\d{4}-\d{2}-\d{2}\.games\.json$/.test(f)) : [];
let fresh = 0;
for (const f of files) {
  const date = f.match(/(\d{4}-\d{2}-\d{2})/)[1];
  if (date < day0) continue;
  const raw = JSON.parse(fs.readFileSync(path.join(RAW, f), 'utf8'));
  for (const g of raw.games || []) {
    const away = canon(g.away.abbr), home = canon(g.home.abbr);
    if (!TEAMS[away] || !TEAMS[home]) continue;
    if (!g.completed || g.away.score == null) { pendingGames.set(`${date}|${away}|${home}`, { d: date, away, home, time: g.statusText || '' }); continue; }
    const side = (s, team, opp, isHome) => {
      const pl = (s.players || []).map(p => ({ name: p.name, min: p.min || 0, fp: fpts(p), pos: posOf(p.name) }));
      const L = bestLineup(pl);
      return { d: date, team, opp, home: isHome, score: [s.score, isHome ? g.away.score : g.home.score], ...L };
    };
    const a = side(g.away, away, home, false), h = side(g.home, home, away, true);
    a.oppPts = h.pts; h.oppPts = a.pts;
    games.set(`${date}|${away}`, a); games.set(`${date}|${home}`, h); fresh += 2;
  }
}

// ---------- Wochen bauen ----------
const etToday = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
const weeks = {};
for (const g of games.values()) {
  const w = weekOf(g.d); if (!w) continue;
  const W = weeks[w] = weeks[w] || { teams: {} };
  const t = W.teams[g.team] = W.teams[g.team] || { status: 'final', pts: 0, gp: 0, duel: { w: 0, l: 0, t: 0 }, games: [] };
  t.games.push(g); t.gp++; t.pts = r1(t.pts + g.pts);
  if (g.pts > g.oppPts) t.duel.w++; else if (g.pts < g.oppPts) t.duel.l++; else t.duel.t++;
}
for (const pg of pendingGames.values()) {
  const w = weekOf(pg.d); if (!w) continue;
  if (games.has(`${pg.d}|${pg.away}`)) continue;
  (weeks[w] = weeks[w] || { teams: {} }).open = (weeks[w].open || []).concat([pg]);
}
Object.entries(weeks).forEach(([w, W]) => {
  const days = weekDays(Number(w));
  const last = days ? days[days.length - 1] : null;
  W.from = days ? days[0] : null; W.to = last;
  W.complete = !!last && last < etToday && !(W.open || []).length;
  Object.values(W.teams).forEach(t => t.games.sort((a, b) => a.d.localeCompare(b.d)));
  W.byes = Object.keys(TEAMS).filter(id => !W.teams[id]);
});

const totalGames = [...games.values()].length;
if (!totalGames) { console.error('Abbruch: keine Spiele gefunden.'); process.exit(1); }

fs.mkdirSync(DATA, { recursive: true });
const head = (title, src) => `// ============================================================
//  ${title}
//  AUTO-GENERIERT von leagues/nba30/scripts/sync-nba30.js — nicht von Hand editieren.
//  ${src}
// ============================================================

`;
const teamList = Object.entries(TEAMS).map(([id, [name, color, conf]]) => ({ id, name, nick: name.split(' ').slice(-1)[0].replace('76ers', '76ers').replace('Blazers', 'Trail Blazers'), color, conference: conf }));
fs.writeFileSync(path.join(DATA, 'teams.js'), head('LEAGUE_TEAMS — die 30 NBA-Teams als Fantasy-Teams', 'Farben für dunklen und hellen Hintergrund lesbar.') +
  `const LEAGUE_TEAMS = [\n${teamList.map(t => '  ' + JSON.stringify(t)).join(',\n')}\n];\n`, 'utf8');
const season = Number(day0.slice(0, 4)) + 1;
const data = { season: `${season - 1}-${String(season).slice(2)}`, updated: new Date().toISOString(), scoring: 'BBC (ESPN Points)', scoringKeys: SC, slots: SLOTS, weeks };
fs.writeFileSync(OUT, head(`NBA30 — Woche für Woche: beste Aufstellung je NBA-Team und Spiel (Saison ${data.season})`,
  'games[]: { d, team, opp, home, score:[eigene, gegnerische], pts, oppPts, lineup:[slot, name, pos, pts], bench:[name, pos, pts] }') +
  `const NBA30 = ${JSON.stringify(data)};\n`, 'utf8');
console.log(`NBA 30: ${Object.keys(weeks).length} Wochen (${Object.values(weeks).filter(w => w.complete).length} komplett), ${totalGames} Team-Spiele (${fresh} aus Rohdateien neu berechnet).`);
