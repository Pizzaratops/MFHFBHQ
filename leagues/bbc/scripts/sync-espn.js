#!/usr/bin/env node
// ============================================================
//  BANANA BOAT CREW — ESPN-Sync (Points-Liga, Redraft, seit 26.10.2026)
// ============================================================
//  Ein Script, ein Lauf, alle Liga-Daten aus ESPN. Die Liga ist privat →
//  Cookies aus den Repo-Secrets ESPN_S2 + SWID (dieselben wie BWP). Läuft in bbc-sync.yml (nach dem sportweiten
//  nba-sync, halbstündlich 06–22 Uhr Berlin).
//
//  Schreibt nach leagues/bbc/data/:
//    teams.js          TEAMS (Name, Kürzel, Owner, Bilanz, Farben, Logo)
//    rosters-live.js   ROSTERS_LIVE (+ Slot, Positionen, Verletzung), LEAGUE_DRAFT_INFO, TEAM_RECORDS_LIVE
//    league-info.js    LEAGUE_INFO (Scoring, Aufstellung, Wochen → Spieltage, alle Matchups mit Tagespunkten)
//    nba-schedule.js   NBA_PRO_SCHEDULE (NBA-Spielplan je Team und Spieltag, für den Planer)
//    draft-results.js  DRAFT_RESULTS (Auktion mit Geboten)
//    transactions.js   TRANSACTIONS (Adds/Drops/Trades, inkrementell)
//
//  Team-IDs = ESPN-Team-IDs (keine eigene Zuordnung nötig).
//  Usage: node leagues/bbc/scripts/sync-espn.js
// ============================================================
'use strict';
const fs = require('fs');
const path = require('path');
const https = require('https');
const vm = require('vm');

const LEAGUE_ID = 1761634032;
const SEASON = 2027;
const DATA = path.join(__dirname, '..', 'data');
const BASE = `https://lm-api-reads.fantasy.espn.com/apis/v3/games/fba/seasons/${SEASON}`;
const LEAGUE = `${BASE}/segments/0/leagues/${LEAGUE_ID}`;
// Die Liga ist privat: Zugriff mit Beyaz' ESPN-Cookies (Repo-Secrets ESPN_S2 + SWID, wie BWP)
const COOKIE = process.env.ESPN_S2 ? `espn_s2=${process.env.ESPN_S2}${process.env.SWID ? `; SWID=${process.env.SWID}` : ''}` : '';

// ESPN proTeamId → Hub-Kürzel (wie sports/nba/nba.js ESPN_PRO)
const PRO = { 1: 'ATL', 2: 'BOS', 3: 'NOR', 4: 'CHI', 5: 'CLE', 6: 'DAL', 7: 'DEN', 8: 'DET', 9: 'GSW', 10: 'HOU', 11: 'IND', 12: 'LAC', 13: 'LAL', 14: 'MIA', 15: 'MIL', 16: 'MIN', 17: 'BKN', 18: 'NYK', 19: 'ORL', 20: 'PHI', 21: 'PHO', 22: 'POR', 23: 'SAC', 24: 'SAS', 25: 'OKC', 26: 'UTA', 27: 'WAS', 28: 'TOR', 29: 'MEM', 30: 'CHA', 33: 'UTA', 38: 'NOR', 40: 'WAS', 41: 'CHA' };
// ESPN-Stat-IDs → unsere Schlüssel (Points-Scoring)
const STAT = { 0: 'pts', 1: 'blk', 2: 'stl', 3: 'ast', 6: 'reb', 11: 'tov', 13: 'fgm', 14: 'fga', 15: 'ftm', 16: 'fta', 17: 'tpm', 19: 'fgPct', 20: 'ftPct', 37: 'dd', 38: 'td', 40: 'min', 42: 'gp', 4: 'oreb', 5: 'dreb', 7: 'ej', 8: 'flagrant', 9: 'pf', 10: 'tf' };
// Aufstellungs-Slots
const SLOT = { 0: 'PG', 1: 'SG', 2: 'SF', 3: 'PF', 4: 'C', 5: 'G', 6: 'F', 7: 'SG/SF', 8: 'G/F', 9: 'PF/C', 10: 'F/C', 11: 'UTIL', 12: 'BE', 13: 'IR' };
const POS = { 1: 'PG', 2: 'SG', 3: 'SF', 4: 'PF', 5: 'C' };
const PALETTE = [['#ffd23f', '#a07800'], ['#6c63ff', '#4a3fd6'], ['#29b6f6', '#2a7ab8'], ['#4caf81', '#2d7a50'], ['#ef5350', '#a83030'], ['#26c6da', '#1a8080'], ['#ff9800', '#c06020'], ['#e040fb', '#7b3fa8'], ['#66bb6a', '#3d7a30'], ['#ff6584', '#b43c64'], ['#ffa726', '#b86020'], ['#78909c', '#607080']];

function get(url, filter) {
  if (process.env.BBC_OFFLINE) { // Test ohne ESPN-Zugang: Liga aus _probe/, alles andere „nicht erreichbar“
    if (url.includes('/leagues/') && !url.includes('mTransactions2')) return Promise.resolve(JSON.parse(fs.readFileSync(process.env.BBC_OFFLINE, 'utf8')));
    return Promise.reject(new Error('offline'));
  }
  // ESPN antwortet Nodes https bei dieser (nicht öffentlich gelisteten) Liga mit 401,
  // curl bekommt 200 – deshalb zuerst curl, Node-https nur als Ersatz.
  try {
    const args = ['-sS', '-A', 'mfhfb-hq-bot', '-w', '\n%{http_code}', url];
    if (filter) args.splice(3, 0, '-H', 'X-Fantasy-Filter: ' + JSON.stringify(filter));
    if (COOKIE) args.splice(3, 0, '-b', COOKIE);
    const out = require('child_process').execFileSync('curl', args, { maxBuffer: 64 * 1024 * 1024 }).toString();
    const cut = out.lastIndexOf('\n'), code = out.slice(cut + 1).trim();
    if (code !== '200') return Promise.reject(new Error(`HTTP ${code} für ${url}`));
    return Promise.resolve(JSON.parse(out.slice(0, cut)));
  } catch (e) { if (/^HTTP|JSON/.test(e.message)) return Promise.reject(e); /* kein curl → Node */ }
  return new Promise((resolve, reject) => {
    const headers = { 'User-Agent': 'mfhfb-hq-bot', Accept: 'application/json' };
    if (COOKIE) headers.Cookie = COOKIE;
    if (filter) headers['X-Fantasy-Filter'] = JSON.stringify(filter);
    https.get(url, { headers }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) return get(res.headers.location, filter).then(resolve, reject);
      if (res.statusCode !== 200) { res.resume(); return reject(new Error(`HTTP ${res.statusCode} für ${url}`)); }
      let d = ''; res.on('data', c => { d += c; }); res.on('end', () => { try { resolve(JSON.parse(d)); } catch (e) { reject(new Error('Keine gültige JSON-Antwort: ' + url)); } });
    }).on('error', reject);
  });
}
function loadConst(file, name) {
  const p = path.join(DATA, file);
  if (!fs.existsSync(p)) return null;
  try { const sb = {}; vm.createContext(sb); vm.runInContext(fs.readFileSync(p, 'utf8') + `\nthis.__X__ = ${name};`, sb); return sb.__X__; } catch (e) { return null; }
}
function write(file, header, consts) {
  const body = Object.entries(consts).map(([k, v]) => `const ${k} = ${JSON.stringify(v)};`).join('\n\n');
  fs.writeFileSync(path.join(DATA, file), `// ============================================================\n${header.split('\n').map(l => '//  ' + l).join('\n')}\n//  AUTO-GENERIERT von leagues/bbc/scripts/sync-espn.js · ${new Date().toISOString()}\n// ============================================================\n\n${body}\n`);
}
const posOf = (p) => {
  const el = new Set(p.eligibleSlots || []);
  const list = [0, 1, 2, 3, 4].filter(s => el.has(s)).map(s => SLOT[s]);
  return list.length ? list.join('/') : (POS[p.defaultPositionId] || 'F');
};
const injOf = s => (!s || s === 'ACTIVE' || s === 'NORMAL' ? null : s === 'DAY_TO_DAY' ? 'DTD' : s === 'SUSPENSION' ? 'SUSP' : s);

async function main() {
  fs.mkdirSync(DATA, { recursive: true });
  const L = await get(`${LEAGUE}?view=mSettings&view=mTeam&view=mRoster&view=mMatchupScore&view=mStatus&view=mDraftDetail&view=mStandings&view=mNav`);
  const S = L.settings || {};
  if (!L.teams || !L.teams.length) throw new Error('Keine Teams in der ESPN-Antwort');
  const members = new Map((L.members || []).map(m => [m.id, m]));
  const ownerName = t => (t.owners || []).map(id => { const m = members.get(id) || {}; return [m.firstName, m.lastName].filter(Boolean).join(' ').trim() || m.displayName || ''; }).filter(Boolean).join(' & ');

  // ---------- Teams ----------
  const teamsSorted = L.teams.slice().sort((a, b) => a.id - b.id);
  const TEAMS = teamsSorted.map((t, i) => {
    const ov = (t.record && t.record.overall) || {};
    return { id: t.id, name: (t.name || `${t.location || ''} ${t.nickname || ''}`).replace(/\s+/g, ' ').trim(), abbrev: (t.abbrev || '').trim(), owner: ownerName(t),
      record: `${ov.wins || 0}-${ov.losses || 0}-${ov.ties || 0}`, pf: ov.pointsFor || 0, pa: ov.pointsAgainst || 0, streak: ov.streakLength ? `${ov.streakType === 'WIN' ? 'W' : 'L'}${ov.streakLength}` : '',
      seed: t.playoffSeed || null, faab: (t.transactionCounter && t.transactionCounter.acquisitionBudgetSpent) || 0,
      moves: (t.transactionCounter && (t.transactionCounter.acquisitions || 0)) || 0, trades: (t.transactionCounter && t.transactionCounter.trades) || 0,
      color: PALETTE[i % PALETTE.length][0], lightColor: PALETTE[i % PALETTE.length][1], logo: t.logo || null };
  });

  // ---------- Kader ----------
  const ROSTERS_LIVE = {}, records = {};
  let total = 0;
  L.teams.forEach(t => {
    ROSTERS_LIVE[t.id] = ((t.roster && t.roster.entries) || []).map(e => {
      const pe = e.playerPoolEntry || {}, p = pe.player || {};
      if (!p.fullName) return null;
      total++;
      const espnFp = {};
      (p.stats || []).forEach(s => {
        if (s.statSourceId === 0 && s.statSplitTypeId === 0 && String(s.id) === `00${SEASON}`) { espnFp.tot = s.appliedTotal; espnFp.avg = s.appliedAverage; }
        if (s.statSourceId === 1 && s.statSplitTypeId === 0 && String(s.id) === `10${SEASON}`) { espnFp.proj = s.appliedAverage; }
      });
      const o = { name: p.fullName, pos: posOf(p), team: PRO[p.proTeamId] || 'FA', slot: SLOT[e.lineupSlotId] || 'BE', espnId: p.id };
      const inj = injOf(p.injuryStatus); if (inj) o.inj = inj;
      if (e.acquisitionType && e.acquisitionType !== 'DRAFT') o.acq = e.acquisitionType;
      if (espnFp.avg != null) o.espnFpg = Math.round(espnFp.avg * 10) / 10;
      if (espnFp.proj != null) o.espnProj = Math.round(espnFp.proj * 10) / 10;
      return o;
    }).filter(Boolean);
    const ov = (t.record && t.record.overall) || {};
    records[t.id] = `${ov.wins || 0}-${ov.losses || 0}-${ov.ties || 0}`;
  });
  const dd = L.draftDetail || {}, ds = S.draftSettings || {};
  const slots = (S.rosterSettings && S.rosterSettings.lineupSlotCounts) || {};
  const LEAGUE_DRAFT_INFO = { drafted: dd.drafted === true, inProgress: dd.inProgress === true, type: ds.type || null, budget: ds.auctionBudget || null,
    date: ds.date ? new Date(ds.date).toISOString() : null, rosterSize: Object.entries(slots).reduce((s, [id, n]) => s + (id === '13' ? 0 : Number(n) || 0), 0) || null };
  if (LEAGUE_DRAFT_INFO.drafted && total < 50) throw new Error(`Nur ${total} Spieler auf den Kadern – Teilantwort? Breche ab.`);

  // ---------- Scoring + Aufstellung ----------
  const sc = S.scoringSettings || {};
  const scoring = {};
  (sc.scoringItems || []).forEach(it => { const k = STAT[it.statId] || 'stat' + it.statId; scoring[k] = it.points; });
  const lineup = {};
  Object.entries(slots).forEach(([id, n]) => { if (Number(n) > 0) lineup[SLOT[id] || id] = Number(n); });

  // ---------- NBA-Spielplan (Spieltag = ESPN scoringPeriod) ----------
  let NBA_PRO_SCHEDULE = loadConst('nba-schedule.js', 'NBA_PRO_SCHEDULE');
  try {
    const P = await get(`${BASE}?view=proTeamSchedules_${SEASON}`);
    const byTeam = {}, spDate = {};
    ((P.settings && P.settings.proTeams) || []).forEach(t => {
      const ab = PRO[t.id]; if (!ab) return;
      Object.entries(t.proGamesByScoringPeriod || {}).forEach(([sp, games]) => (games || []).forEach(g => {
        const home = g.homeProTeamId === t.id;
        (byTeam[ab] = byTeam[ab] || {})[sp] = [PRO[home ? g.awayProTeamId : g.homeProTeamId] || '?', home ? 1 : 0];
        if (g.date && (!spDate[sp] || g.date < spDate[sp])) spDate[sp] = g.date;
      }));
    });
    if (Object.keys(byTeam).length >= 28) NBA_PRO_SCHEDULE = { season: SEASON, spDate: Object.fromEntries(Object.entries(spDate).map(([k, v]) => [k, new Date(v).toISOString()])), byTeam };
  } catch (e) { console.warn('NBA-Spielplan nicht geladen (alter Stand bleibt):', e.message); }

  // ---------- Wochen → Spieltage ----------
  // ESPN liefert in matchupPeriods nur [Woche]; die echten Spieltage stehen in
  // pointsByScoringPeriod (ab Wochenstart). Künftige Wochen: Montag–Sonntag ab
  // dem 1. Spieltag; gibt es eine Kalenderwoche mehr als Matchup-Wochen, wird die
  // Woche mit den wenigsten NBA-Spielen (All-Star-Pause) mit der folgenden verbunden.
  const st = L.status || {};
  const periodCount = Object.keys((S.scheduleSettings && S.scheduleSettings.matchupPeriods) || {}).length || 21;
  const firstSp = st.firstScoringPeriod || 1, finalSp = st.finalScoringPeriod || 160;
  const sp1 = NBA_PRO_SCHEDULE && NBA_PRO_SCHEDULE.spDate[firstSp];
  const etDay = iso => { const d = new Date(new Date(iso).getTime() - 5 * 3600e3); return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()); };
  const day0 = sp1 ? etDay(sp1) : Date.UTC(SEASON - 1, 9, 20);
  const spDay = sp => day0 + (sp - firstSp) * 864e5;
  const weeks = [];
  for (let sp = firstSp; sp <= finalSp; sp++) {
    const wd = new Date(spDay(sp)).getUTCDay(); // 1 = Montag
    if (!weeks.length || wd === 1) weeks.push([]);
    weeks[weeks.length - 1].push(sp);
  }
  const gamesIn = w => w.reduce((s, sp) => s + (NBA_PRO_SCHEDULE ? Object.values(NBA_PRO_SCHEDULE.byTeam).filter(t => t[sp]).length : 0), 0);
  while (weeks.length > periodCount) {
    let mi = 1, mg = Infinity;
    for (let i = 1; i < weeks.length - 1; i++) { const g = gamesIn(weeks[i]); if (g < mg) { mg = g; mi = i; } }
    weeks.splice(mi, 2, weeks[mi].concat(weeks[mi + 1]));
  }
  const periods = {};
  weeks.forEach((w, i) => { periods[i + 1] = w; });
  // Abgeschlossene Wochen: echte Spieltage aus ESPN übernehmen
  (L.schedule || []).forEach(m => {
    const k = Object.keys((m.home && m.home.pointsByScoringPeriod) || {}).map(Number).sort((x, y) => x - y);
    if (k.length && m.winner && m.winner !== 'UNDECIDED') periods[m.matchupPeriodId] = k;
  });

  // ---------- Matchups ----------
  const regular = (S.scheduleSettings && S.scheduleSettings.matchupPeriodCount) || 18;
  const round1 = v => Math.round((v || 0) * 10) / 10;
  const byDay = side => Object.fromEntries(Object.entries((side && side.pointsByScoringPeriod) || {}).map(([k, v]) => [k, round1(v)]));
  const matchups = (L.schedule || []).map(m => ({
    p: m.matchupPeriodId, id: m.id, home: m.home ? m.home.teamId : null, away: m.away ? m.away.teamId : null,
    hp: round1(m.home && (m.home.totalPointsLive != null ? m.home.totalPointsLive : m.home.totalPoints)), ap: round1(m.away && (m.away.totalPointsLive != null ? m.away.totalPointsLive : m.away.totalPoints)),
    hDay: byDay(m.home), aDay: byDay(m.away), winner: m.winner || 'UNDECIDED', playoff: m.matchupPeriodId > regular, tier: m.playoffTierType || 'NONE',
  }));

  const LEAGUE_INFO = {
    leagueId: LEAGUE_ID, season: SEASON, name: S.name || 'Banana Boat Crew', size: S.size || TEAMS.length,
    scoringType: sc.scoringType || null, scoring, lineup,
    lineupLock: (S.rosterSettings && S.rosterSettings.lineupLocktimeType) || null,
    regularPeriods: regular, playoffTeams: (S.scheduleSettings && S.scheduleSettings.playoffTeamCount) || null,
    playoffSeeding: (S.scheduleSettings && S.scheduleSettings.playoffSeedingRule) || null,
    acquisition: { type: (S.acquisitionSettings && S.acquisitionSettings.acquisitionType) || null, budget: (S.acquisitionSettings && S.acquisitionSettings.acquisitionBudget) || null },
    tradeDeadline: S.tradeSettings && S.tradeSettings.deadlineDate ? new Date(S.tradeSettings.deadlineDate).toISOString() : null,
    currentPeriod: st.currentMatchupPeriod || L.status?.currentMatchupPeriod || null, latestSp: st.latestScoringPeriod || L.scoringPeriodId || null,
    firstSp, finalSp, day0: new Date(day0).toISOString().slice(0, 10), periods, matchups,
    syncedAt: new Date().toISOString(),
  };

  // ---------- Spieler-Namen (für Draft + Transaktionen) ----------
  const names = new Map();
  const ESPN_PLAYERS = {}; // alle aktiven NBA-Spieler: Positionen (für freie Spieler im Planer), Team, Verletzung
  Object.values(ROSTERS_LIVE).flat().forEach(p => names.set(p.espnId, { name: p.name, team: p.team }));
  try {
    const all = await get(`${BASE}/players?scoringPeriodId=0&view=players_wl`, { filterActive: { value: true } });
    (all || []).forEach(p => {
      if (!names.has(p.id)) names.set(p.id, { name: p.fullName, team: PRO[p.proTeamId] || 'FA' });
      if (p.fullName) { const o = { pos: posOf(p), team: PRO[p.proTeamId] || 'FA' }; const inj = injOf(p.injuryStatus); if (inj) o.inj = inj; ESPN_PLAYERS[p.fullName] = o; }
    });
  } catch (e) { console.warn('Spielerliste nicht geladen:', e.message); }
  const nm = id => (names.get(id) || {}).name || null;

  // ---------- Draft ----------
  let DRAFT_RESULTS = loadConst('draft-results.js', 'DRAFT_RESULTS');
  if (dd.drafted && (dd.picks || []).length) {
    DRAFT_RESULTS = { espnSeason: SEASON, fetchedAt: new Date().toISOString(), type: ds.type || null, budget: ds.auctionBudget || null,
      picks: dd.picks.map(p => ({ round: p.roundId, overallPickNumber: p.overallPickNumber, teamId: p.teamId, playerId: p.playerId, playerName: nm(p.playerId) || String(p.playerId),
        nameSource: nm(p.playerId) ? 'espn' : 'unresolved', bid: p.bidAmount || null, nominatedBy: p.nominatingTeamId || null, keeper: !!p.keeper })) };
    DRAFT_RESULTS.unresolvedCount = DRAFT_RESULTS.picks.filter(p => p.nameSource === 'unresolved').length;
  }

  // ---------- Transaktionen (inkrementell, letzte 3 Spieltage; beim ersten Lauf alle) ----------
  const old = loadConst('transactions.js', 'TRANSACTIONS') || [];
  const seen = new Set(old.map(t => t.id));
  const latest = LEAGUE_INFO.latestSp || 1;
  const fromSp = old.length ? Math.max(1, latest - 2) : 1;
  const fresh = [];
  for (let sp = fromSp; sp <= latest; sp++) {
    try {
      const T = await get(`${LEAGUE}?view=mTransactions2&scoringPeriodId=${sp}`);
      (T.transactions || []).forEach(t => {
        if (seen.has(t.id) || t.status !== 'EXECUTED' || !['FREEAGENT', 'WAIVER', 'TRADE_ACCEPT', 'TRADE_PROPOSAL'].includes(t.type)) return;
        if (t.type === 'TRADE_PROPOSAL') return;
        seen.add(t.id);
        fresh.push({ id: t.id, date: new Date(t.processDate || t.proposedDate).toISOString(), type: t.type === 'TRADE_ACCEPT' ? 'TRADE' : t.type, team: t.teamId, bid: t.bidAmount || 0,
          items: (t.items || []).map(i => ({ type: i.type, player: nm(i.playerId) || String(i.playerId), from: i.fromTeamId, to: i.toTeamId })) });
      });
    } catch (e) { console.warn(`Transaktionen Spieltag ${sp}:`, e.message); }
  }
  const TRANSACTIONS = old.concat(fresh).sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 400);

  // ---------- Schreiben ----------
  write('teams.js', `TEAMS — Banana Boat Crew (ESPN ${LEAGUE_ID}, Points, Redraft). id = ESPN-Team-ID.`, { TEAMS });
  write('rosters-live.js', 'ROSTERS_LIVE — Kader aus ESPN (slot = aktuelle Aufstellung, pos = spielbare Positionen).', { ROSTERS_LIVE, LEAGUE_DRAFT_INFO, TEAM_RECORDS_LIVE: { season: SEASON, records } });
  write('league-info.js', 'LEAGUE_INFO — Einstellungen, Scoring, Wochen → Spieltage, alle Matchups mit Tagespunkten.', { LEAGUE_INFO });
  if (NBA_PRO_SCHEDULE) write('nba-schedule.js', 'NBA_PRO_SCHEDULE — NBA-Spiele je Team und ESPN-Spieltag: byTeam[Team][Spieltag] = [Gegner, heim?1:0].', { NBA_PRO_SCHEDULE });
  if (DRAFT_RESULTS) write('draft-results.js', 'DRAFT_RESULTS — Auktion (bid = Gebot in $).', { DRAFT_RESULTS });
  // Kader-Spieler ergänzen/überschreiben (aktuellster Verletzungsstatus)
  Object.values(ROSTERS_LIVE).flat().forEach(p => { ESPN_PLAYERS[p.name] = { pos: p.pos, team: p.team, ...(p.inj ? { inj: p.inj } : {}) }; });
  if (Object.keys(ESPN_PLAYERS).length > 200) write('players.js', 'ESPN_PLAYERS — alle aktiven NBA-Spieler: spielbare Positionen, Team, Verletzung (für freie Spieler).', { ESPN_PLAYERS });
  write('transactions.js', 'TRANSACTIONS — Adds/Drops/Trades (neueste zuerst, max. 400).', { TRANSACTIONS });
  console.log(`BBC-Sync: ${TEAMS.length} Teams, ${total} Spieler, Woche ${LEAGUE_INFO.currentPeriod} (Spieltag ${latest}), ${matchups.length} Matchups, ${Object.keys(periods).length} Wochen, ${fresh.length} neue Transaktionen, Draft ${DRAFT_RESULTS ? DRAFT_RESULTS.picks.length + ' Picks' : '—'}.`);
}

const WARN = []; const _w = console.warn; console.warn = (...a) => { WARN.push(a.join(' ')); _w(...a); };
const status = (ok, extra) => { try { fs.mkdirSync(DATA, { recursive: true }); fs.writeFileSync(path.join(DATA, 'sync-status.js'), `// Letzter Lauf von sync-espn.js (Diagnose)\nconst SYNC_STATUS = ${JSON.stringify({ ok, at: new Date().toISOString(), ...extra })};\n`); } catch (e) { /* egal */ } };
main().then(() => status(true, { warnings: WARN.slice(0, 20) })).catch(err => { console.error('BBC-Sync fehlgeschlagen:', err.message); status(false, { error: err.message, stack: String(err.stack || '').split('\n').slice(0, 4).join(' | ') }); process.exit(1); });
