#!/usr/bin/env node
// ============================================================
//  FANTRAX-SYNC — Dizzle CBB Dynasty (Liga z8gwfku2mpmwh0xe), seit 16.10.2026
// ============================================================
//  Holt über Fantrax' öffentliche fxea-API (kein Login nötig):
//    getLeagueInfo   → Teams, Spielplan (Matchups je Periode), Kader-Regeln,
//                      Spielerpool (eligiblePos, FA/T), Playoffs
//    getTeamRosters  → Kader je Team (ACTIVE / RESERVE / INJURED_RESERVE)
//    getStandings    → Bilanz + Platz
//    getPlayerIds    → Namen, Schule, Position aller NCAAB-Spieler
//  und schreibt NBA-kompatible Dateien nach leagues/cbb/data/:
//    teams-rosters.js     TEAMS (feste IDs 1–14, Farben, Owner = Name aus der NIL-Auktion)
//    rosters-live.js      ROSTERS_LIVE, TEAM_RECORDS_LIVE, ROSTER_SETTINGS, FANTRAX_SYNC
//    fantasy-schedule.js  CBB_SCHEDULE (Perioden, je Woche zwei Matchups)
//    player-pool.js       CBB_PLAYER_POOL (alle Pool-Spieler inkl. Free Agents)
//  Nicht fatal: bei einem Fehler bleiben die alten Dateien stehen (exit 0).
//
//  Usage: node leagues/cbb/scripts/sync-fantrax.js
// ============================================================

const fs = require('fs');
const path = require('path');

const LEAGUE_ID = 'z8gwfku2mpmwh0xe';
const BASE = 'https://www.fantrax.com/fxea/general';
const OUT = path.join(__dirname, '..', 'data');

// Fantrax-Team-ID → feste interne ID, Owner (= Name in der NIL-Auktion), Farben
const TEAM_META = {
  rd1dbkucmpmwjwl2: { id: 1, owner: 'MFHFB', color: '#6c63ff', lightColor: '#4a3fd6' },
  xlebdh7lmpmwh0yn: { id: 2, owner: '4quarters', color: '#29b6f6', lightColor: '#2a7ab8' },
  o1iib0kdmpmwh0yn: { id: 3, owner: 'Andrew', color: '#4caf81', lightColor: '#2d7a50' },
  ssffphy2mpmwh0yn: { id: 4, owner: 'Blades', color: '#f5c842', lightColor: '#9a6e10' },
  '0mi1944ympmwh0yn': { id: 5, owner: 'Dan', color: '#ef5350', lightColor: '#a83030' },
  '5pl2n4rhmpmwh0yn': { id: 6, owner: 'Dizzle', color: '#26c6da', lightColor: '#1a8080' },
  '0z7juy11mpmwh0yn': { id: 7, owner: 'Hydra', color: '#ff9800', lightColor: '#c06020' },
  g8oa7d8impmwlbuz: { id: 8, owner: 'JPR', color: '#e040fb', lightColor: '#7b3fa8' },
  '6irtu0ltmpmwh0ym': { id: 9, owner: 'Murray State', color: '#66bb6a', lightColor: '#3d7a30' },
  gvpwjhmmmpmwh0yn: { id: 10, owner: 'Point Made', color: '#ff6584', lightColor: '#b43c64' },
  unpuy2jkmpmwh0yn: { id: 11, owner: 'Shotgun', color: '#8d6e63', lightColor: '#5d4037' },
  vsq657s6mpmwh0yn: { id: 12, owner: 'Straw Hats', color: '#ffa726', lightColor: '#b86020' },
  '4u4q2i3rmpmwh0ym': { id: 13, owner: 'Van Gundy CC', color: '#78909c', lightColor: '#506070' },
  bo5o1o7zmpmwh0yn: { id: 14, owner: 'Weridos', color: '#ab47bc', lightColor: '#6a1b9a' },
};
const STATUS = { ACTIVE: 'A', RESERVE: 'R', INJURED_RESERVE: 'IR' };

async function getJson(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'mfhfb-hq-bot', Accept: 'application/json' } });
  if (!res.ok) throw new Error(`HTTP ${res.status} für ${url.replace(BASE, '')}`);
  return res.json();
}
// "Mokweza, Joel" → "Joel Mokweza"
const flipName = n => { const s = String(n || ''); const i = s.indexOf(', '); return i > 0 ? `${s.slice(i + 2)} ${s.slice(0, i)}` : s; };
const ymd = s => String(s || '').slice(0, 10);
const write = (file, header, body) => {
  fs.writeFileSync(path.join(OUT, file), `// ============================================================\n${header.map(l => `//  ${l}`).join('\n')}\n// ============================================================\n\n${body}`, 'utf8');
  console.log(`  ✓ ${file}`);
};

async function main() {
  console.log(`Fantrax-Liga ${LEAGUE_ID} ...`);
  const [info, rost, stand, ids] = await Promise.all([
    getJson(`${BASE}/getLeagueInfo?leagueId=${LEAGUE_ID}`),
    getJson(`${BASE}/getTeamRosters?leagueId=${LEAGUE_ID}`),
    getJson(`${BASE}/getStandings?leagueId=${LEAGUE_ID}`),
    getJson(`${BASE}/getPlayerIds?sport=NCAAB`),
  ]);
  const teamInfo = info.teamInfo || {};
  const fxIds = Object.keys(teamInfo);
  if (fxIds.length < 2) throw new Error('keine Teams in getLeagueInfo');
  let nextId = 15;
  const metaOf = fx => TEAM_META[fx] || (TEAM_META[fx] = { id: nextId++, owner: '', color: '#90a4ae', lightColor: '#607d8b', unknown: true });
  const idOf = fx => metaOf(fx).id;
  const short = {};
  (info.matchups || []).forEach(p => (p.matchupList || []).forEach(m => [m.away, m.home].forEach(t => { if (t && t.id) short[t.id] = t.shortName; })));

  // ---------- Standings ----------
  const standings = (Array.isArray(stand) ? stand : []).map(s => {
    const [w, l, t] = String(s.points || '0-0-0').split('-').map(Number);
    return { id: idOf(s.teamId), rank: s.rank, w: w || 0, l: l || 0, t: t || 0, pct: s.winPercentage || 0, gb: s.gamesBack || 0 };
  });
  const recById = new Map(standings.map(s => [s.id, `${s.w}-${s.l}-${s.t}`]));

  // ---------- Teams ----------
  const teams = fxIds.map(fx => {
    const m = metaOf(fx);
    return { id: m.id, name: teamInfo[fx].name, short: short[fx] || '', owner: m.owner, fx, record: recById.get(m.id) || '0-0-0', color: m.color, lightColor: m.lightColor };
  }).sort((a, b) => a.id - b.id);
  const unknown = Object.entries(TEAM_META).filter(([, m]) => m.unknown);
  if (unknown.length) console.warn(`  ! Neue Fantrax-Teams ohne feste ID: ${unknown.map(([fx]) => fx).join(', ')} — TEAM_META ergänzen.`);

  // ---------- Kader ----------
  const pinfo = info.playerInfo || {};
  const player = fx => { const p = ids[fx] || {}; return { name: flipName(p.name) || fx, school: p.team || '', pos: p.position || '' }; };
  const rosters = {};
  Object.entries((rost && rost.rosters) || {}).forEach(([fx, t]) => {
    rosters[idOf(fx)] = (t.rosterItems || []).map(r => {
      const p = player(r.id), st = STATUS[r.status] || r.status;
      return { name: p.name, pos: p.pos, team: p.school, slot: r.position, status: st, ...(st === 'IR' ? { inj: 'IR' } : {}), fx: r.id, elig: (pinfo[r.id] || {}).eligiblePos || '' };
    });
  });
  const rosterCount = Object.values(rosters).reduce((s, r) => s + r.length, 0);
  if (!rosterCount) throw new Error('alle Kader leer — Antwort unvollständig?');

  // ---------- Spielplan ----------
  const lastReg = (info.playoffs && info.playoffs.lastRegularSeasonPeriod) || null;
  const per = new Map((info.scoringPeriods || []).map(p => [p.number, p]));
  const periods = (info.matchups || []).map(p => {
    const sp = per.get(p.period) || {};
    return { n: p.period, start: ymd(sp.startDate), end: ymd(sp.endDate), playoff: !!(lastReg && p.period > lastReg), matchups: (p.matchupList || []).map(m => [idOf(m.away.id), idOf(m.home.id)]) };
  });

  // ---------- Spielerpool ----------
  const pool = Object.entries(pinfo).map(([fx, p]) => { const q = player(fx); return [fx, q.name, q.school, q.pos, p.eligiblePos || '', p.status || '']; })
    .sort((a, b) => a[1].localeCompare(b[1]));

  const now = new Date().toISOString();
  const season = Number(info.seasonYear) + 1; // Fantrax "2026" = Saison 2026/27
  fs.mkdirSync(OUT, { recursive: true });
  console.log(`  ${teams.length} Teams, ${rosterCount} Kaderspieler, ${periods.length} Perioden, ${pool.length} Pool-Spieler.`);

  write('teams-rosters.js', ['TEAMS — Dizzle CBB Dynasty (Fantrax), AUTO-GENERIERT von', 'leagues/cbb/scripts/sync-fantrax.js. IDs/Owner/Farben: TEAM_META im Script.', `Stand: ${now}`],
    `const TEAMS = [\n${teams.map(t => `  ${JSON.stringify(t)}`).join(',\n')}\n];\n`);
  write('rosters-live.js', ['ROSTERS_LIVE — Kader aus Fantrax, AUTO-GENERIERT (sync-fantrax.js).', 'status: A = aktiv, R = Reserve, IR = Injured Reserve · slot = Fantrax-Position', `Stand: ${now}`],
    `const ROSTERS_LIVE = {\n${Object.keys(rosters).sort((a, b) => a - b).map(id => `  ${id}: ${JSON.stringify(rosters[id])}`).join(',\n')}\n};\n\n` +
    `const TEAM_RECORDS_LIVE = ${JSON.stringify({ season, records: Object.fromEntries(recById), standings })};\n\n` +
    `const ROSTER_SETTINGS = ${JSON.stringify(info.rosterInfo || {})};\n\n` +
    `const FANTRAX_SYNC = ${JSON.stringify({ at: now, leagueId: LEAGUE_ID, leagueName: info.leagueName, period: rost && rost.period, start: info.startDate, end: info.endDate })};\n`);
  write('fantasy-schedule.js', ['CBB_SCHEDULE — Fantasy-Spielplan aus Fantrax (je Periode zwei Matchups pro Team),', `AUTO-GENERIERT (sync-fantrax.js). Stand: ${now}`],
    `const CBB_SCHEDULE = ${JSON.stringify({ lastRegular: lastReg, playoffTeams: (info.playoffs || {}).numPlayoffTeams || null, periods })};\n`);
  write('player-pool.js', ['CBB_PLAYER_POOL — Spielerpool der Liga (Fantrax), AUTO-GENERIERT (sync-fantrax.js).', 'Zeile: [fantraxId, Name, Schule, Position, eligiblePos, Status (T = vergeben, FA = frei)]', `Stand: ${now}`],
    `const CBB_PLAYER_POOL = [\n${pool.map(r => JSON.stringify(r)).join(',\n')}\n];\n`);
}

main().catch(err => {
  console.error('Fantrax-Sync fehlgeschlagen (alte Daten bleiben):', err.message);
  process.exitCode = 1;
});
