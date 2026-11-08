#!/usr/bin/env node
// ============================================================
//  FANTRAX-SYNC — FBI World Cup 2026-27 [WEST], Division Seattle (seit 08.11.2026)
// ============================================================
//  Die Conference West ist EINE Fantrax-Liga (nq58zcxtmutve46g) mit 12 Divisionen
//  à 12 Teams. Gespielt wird nur innerhalb der Division (9-Cat H2H, jede Kategorie
//  zählt, 11 Perioden Hauptrunde, danach Playoffs), Free Agents gibt es je Division.
//  Der Hub zeigt deshalb die Division Seattle als „Liga“, plus den Rang in der
//  ganzen Conference (144 Teams).
//
//  Holt über Fantrax' öffentliche fxea-API (kein Login):
//    getLeagueInfo   → Teams + Division, Spielplan, Kader-Regeln, Spielerpool je Division
//    getTeamRosters  → Kader je Team (ACTIVE / RESERVE / INJURED_RESERVE)
//    getStandings    → Bilanz (Kategorien W-L-T) + Rang in der Conference
//    getPlayerIds    → Namen, NBA-Team, Position
//  und schreibt NBA-kompatible Dateien nach leagues/worldcup/data/:
//    teams-rosters.js     TEAMS (feste IDs 1–12, Farben; 1 = flyingillini = Beyaz)
//    rosters-live.js      ROSTERS_LIVE, TEAM_RECORDS_LIVE, ROSTER_SETTINGS, FANTRAX_SYNC
//    fantasy-schedule.js  WC_SCHEDULE (Perioden mit den Division-Matchups)
//    player-pool.js       WC_PLAYER_POOL (Pool der Division inkl. Free Agents)
//  Nicht fatal: bei einem Fehler bleiben die alten Dateien stehen.
//
//  Usage: node leagues/worldcup/scripts/sync-fantrax.js
// ============================================================

const fs = require('fs');
const path = require('path');

const LEAGUE_ID = 'nq58zcxtmutve46g';
const DIVISION = 'Seattle';
const BASE = 'https://www.fantrax.com/fxea/general';
const OUT = path.join(__dirname, '..', 'data');

// Fantrax-Team-ID → feste interne ID + Farben (Stand 08.11.2026, Division Seattle)
const TEAM_META = {
  rlfabx4hmuy61r8b: { id: 1, color: '#6c63ff', lightColor: '#4a3fd6' }, // flyingillini (Beyaz)
  lq0ogiggmuy5zs9p: { id: 2, color: '#29b6f6', lightColor: '#2a7ab8' }, // _lfresh
  ditmzjeamuy60zjq: { id: 3, color: '#4caf81', lightColor: '#2d7a50' }, // Avdija Kedabra
  hyz1mc1wmuy5zaih: { id: 4, color: '#f5c842', lightColor: '#9a6e10' }, // b4100552
  leoegnnrmuy5z127: { id: 5, color: '#ef5350', lightColor: '#a83030' }, // bruce2109
  iqm65vfzmuy629si: { id: 6, color: '#26c6da', lightColor: '#1a8080' }, // derekderekson81
  dlbdsgd2muy6015e: { id: 7, color: '#ff9800', lightColor: '#c06020' }, // dermie2124
  osjg64uwmuy619ar: { id: 8, color: '#e040fb', lightColor: '#7b3fa8' }, // elcubain
  '80tkvtfvmuy60zjl': { id: 9, color: '#66bb6a', lightColor: '#3d7a30' }, // jasonr.0419_29989
  xfxanufamuy629t7: { id: 10, color: '#ff6584', lightColor: '#b43c64' }, // legend5027
  t5amh3g1muy619ad: { id: 11, color: '#8d6e63', lightColor: '#5d4037' }, // marivan1999
  jdab7oq8muy61i90: { id: 12, color: '#78909c', lightColor: '#506070' }, // robin.93
};
const STATUS = { ACTIVE: 'A', RESERVE: 'R', INJURED_RESERVE: 'IR' };
// Fantrax-Kürzel → Hub-Kürzel (wie MFHFB.nba.canonTeam)
const CANON = { NOP: 'NOR', NO: 'NOR', PHX: 'PHO', WSH: 'WAS', GS: 'GSW', SA: 'SAS', NY: 'NYK', UTAH: 'UTA', BRK: 'BKN' };
const canon = a => { const u = String(a || '').toUpperCase(); return CANON[u] || u || 'FA'; };

async function getJson(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'mfhfb-hq-bot', Accept: 'application/json' } });
  if (!res.ok) throw new Error(`HTTP ${res.status} für ${url.replace(BASE, '')}`);
  return res.json();
}
const flipName = n => { const s = String(n || ''); const i = s.indexOf(', '); return i > 0 ? `${s.slice(i + 2)} ${s.slice(0, i)}` : s; };
const ymd = s => String(s || '').slice(0, 10);
const write = (file, header, body) => {
  fs.writeFileSync(path.join(OUT, file), `// ============================================================\n${header.map(l => `//  ${l}`).join('\n')}\n// ============================================================\n\n${body}`, 'utf8');
  console.log(`  ✓ ${file}`);
};

async function main() {
  console.log(`Fantrax-Liga ${LEAGUE_ID}, Division ${DIVISION} ...`);
  const [info, rost, stand, ids] = await Promise.all([
    getJson(`${BASE}/getLeagueInfo?leagueId=${LEAGUE_ID}`),
    getJson(`${BASE}/getTeamRosters?leagueId=${LEAGUE_ID}`),
    getJson(`${BASE}/getStandings?leagueId=${LEAGUE_ID}`),
    getJson(`${BASE}/getPlayerIds?sport=NBA`),
  ]);
  const teamInfo = info.teamInfo || {};
  const fxIds = Object.keys(teamInfo).filter(fx => teamInfo[fx].division === DIVISION);
  if (fxIds.length < 2) throw new Error(`keine Teams in Division ${DIVISION}`);
  let nextId = 13;
  const metaOf = fx => TEAM_META[fx] || (TEAM_META[fx] = { id: nextId++, color: '#90a4ae', lightColor: '#607d8b', unknown: true });
  const idOf = fx => metaOf(fx).id;
  const inDiv = new Set(fxIds);

  // ---------- Standings: Division-Rang + Rang in der Conference ----------
  const all = Array.isArray(stand) ? stand : [];
  const standings = all.filter(s => inDiv.has(s.teamId)).map(s => {
    const [w, l, t] = String(s.points || '0-0-0').split('-').map(Number);
    return { id: idOf(s.teamId), confRank: s.rank, w: w || 0, l: l || 0, t: t || 0, pct: s.winPercentage || 0 };
  }).sort((a, b) => b.pct - a.pct || b.w - a.w || a.confRank - b.confRank);
  standings.forEach((s, i) => { s.rank = i + 1; s.gb = ((standings[0].w - s.w) + (s.l - standings[0].l)) / 2; });
  const recById = new Map(standings.map(s => [s.id, `${s.w}-${s.l}-${s.t}`]));

  // ---------- Teams ----------
  const short = {};
  (info.matchups || []).forEach(p => (p.matchupList || []).forEach(m => [m.away, m.home].forEach(t => { if (t && t.id) short[t.id] = t.shortName; })));
  const teams = fxIds.map(fx => {
    const m = metaOf(fx);
    return { id: m.id, name: teamInfo[fx].name, short: short[fx] || '', owner: teamInfo[fx].name, fx, record: recById.get(m.id) || '0-0-0', color: m.color, lightColor: m.lightColor };
  }).sort((a, b) => a.id - b.id);
  const unknown = Object.entries(TEAM_META).filter(([, m]) => m.unknown);
  if (unknown.length) console.warn(`  ! Neue Fantrax-Teams ohne feste ID: ${unknown.map(([fx]) => fx).join(', ')} — TEAM_META ergänzen.`);

  // ---------- Kader ----------
  const pinfo = (info.playerInfo || {})[DIVISION] || {};
  const player = fx => { const p = ids[fx] || {}; return { name: flipName(p.name) || fx, team: canon(p.team), pos: String(p.position || '').split(',')[0] }; };
  const rosters = {};
  Object.entries((rost && rost.rosters) || {}).forEach(([fx, t]) => {
    if (!inDiv.has(fx)) return;
    rosters[idOf(fx)] = (t.rosterItems || []).map(r => {
      const p = player(r.id), st = STATUS[r.status] || r.status;
      return { name: p.name, pos: p.pos, team: p.team, slot: r.position, status: st, ...(st === 'IR' ? { inj: 'OUT' } : {}), fx: r.id, elig: (pinfo[r.id] || {}).eligiblePos || '' };
    });
  });
  const rosterCount = Object.values(rosters).reduce((s, r) => s + r.length, 0);
  if (!rosterCount) throw new Error('alle Kader leer — Antwort unvollständig?');

  // ---------- Spielplan (nur Division-Matchups) ----------
  const lastReg = (info.playoffs && info.playoffs.lastRegularSeasonPeriod) || null;
  const per = new Map((info.scoringPeriods || []).map(p => [p.number, p]));
  const periods = (info.matchups || []).map(p => {
    const sp = per.get(p.period) || {};
    return { n: p.period, start: ymd(sp.startDate), end: ymd(sp.endDate), playoff: !!(lastReg && p.period > lastReg),
      matchups: (p.matchupList || []).filter(m => inDiv.has(m.away.id) && inDiv.has(m.home.id)).map(m => [idOf(m.away.id), idOf(m.home.id)]) };
  });

  // ---------- Spielerpool der Division ----------
  const pool = Object.entries(pinfo).map(([fx, p]) => { const q = player(fx); return [fx, q.name, q.team, q.pos, p.eligiblePos || '', p.status || '']; })
    .sort((a, b) => a[1].localeCompare(b[1]));

  const now = new Date().toISOString();
  const season = Number(info.seasonYear) + 1; // Fantrax "2026" = Saison 2026/27
  fs.mkdirSync(OUT, { recursive: true });
  console.log(`  ${teams.length} Teams, ${rosterCount} Kaderspieler, ${periods.length} Perioden, ${pool.length} Pool-Spieler.`);

  write('teams-rosters.js', ['TEAMS — FBI World Cup [WEST], Division Seattle (Fantrax), AUTO-GENERIERT von', 'leagues/worldcup/scripts/sync-fantrax.js. IDs/Farben: TEAM_META im Script.', `Stand: ${now}`],
    `const TEAMS = [\n${teams.map(t => `  ${JSON.stringify(t)}`).join(',\n')}\n];\n`);
  write('rosters-live.js', ['ROSTERS_LIVE — Kader aus Fantrax, AUTO-GENERIERT (sync-fantrax.js).', 'status: A = aktiv, R = Reserve, IR = Injured Reserve · slot = Fantrax-Position', `Stand: ${now}`],
    `const ROSTERS_LIVE = {\n${Object.keys(rosters).sort((a, b) => a - b).map(id => `  ${id}: ${JSON.stringify(rosters[id])}`).join(',\n')}\n};\n\n` +
    `const TEAM_RECORDS_LIVE = ${JSON.stringify({ season, records: Object.fromEntries(recById), standings, confTeams: all.length })};\n\n` +
    `const ROSTER_SETTINGS = ${JSON.stringify(info.rosterInfo || {})};\n\n` +
    `const FANTRAX_SYNC = ${JSON.stringify({ at: now, leagueId: LEAGUE_ID, division: DIVISION, leagueName: info.leagueName, period: rost && rost.period, start: info.startDate, end: info.endDate })};\n`);
  write('fantasy-schedule.js', ['WC_SCHEDULE — Fantasy-Spielplan der Division (Fantrax), AUTO-GENERIERT (sync-fantrax.js).', `Stand: ${now}`],
    `const WC_SCHEDULE = ${JSON.stringify({ lastRegular: lastReg, playoffTeams: (info.playoffs || {}).numPlayoffTeams || null, periods })};\n`);
  write('player-pool.js', ['WC_PLAYER_POOL — Spielerpool der Division (Fantrax), AUTO-GENERIERT (sync-fantrax.js).', 'Zeile: [fantraxId, Name, NBA-Team, Position, eligiblePos, Status (T = vergeben, FA = frei, W = Waiver)]', `Stand: ${now}`],
    `const WC_PLAYER_POOL = [\n${pool.map(r => JSON.stringify(r)).join(',\n')}\n];\n`);
}

main().catch(err => {
  console.error('Fantrax-Sync fehlgeschlagen (alte Daten bleiben):', err.message);
  console.log(`::error title=Fantrax World Cup::${err.message}`);
  process.exitCode = 1;
});
