#!/usr/bin/env node
// ============================================================
//  LINEUP-AUDIT (Foodball/ESPN + DOPE/Sleeper)
// ============================================================
//  Prüft für jede gespielte Woche die gesetzten Starter:
//   - BYE    : Team des Spielers hatte spielfrei
//   - DNP    : kein Einsatz (keine Statistik für die Woche)
//   - EMPTY  : Startplatz leer
//   - OUT/IR : (nur laufende Woche) aktueller Status Out/IR/Suspended
//  Ausgabe: _probe/audit/lineup-audit.json + Konsolen-Tabelle.
//  Usage: ESPN_S2=… SWID=… node scripts/lineup-audit.js
// ============================================================
const fs = require('fs');
const path = require('path');

const SEASON = 2026;
const ESPN_ID = '91260355';
const SLEEPER_ID = '1312799736218017792';
const OUT = path.join(__dirname, '..', '_probe', 'audit');

async function getJson(url, headers = {}) {
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0', ...headers } });
      if (!r.ok) throw new Error(`HTTP ${r.status} ${url}`);
      return await r.json();
    } catch (e) { if (i === 2) throw e; await new Promise(r => setTimeout(r, 1500)); }
  }
}

// ---------------- ESPN ----------------
const ESPN_SLOTS = { 0: 'QB', 2: 'RB', 4: 'WR', 6: 'TE', 16: 'D/ST', 17: 'K', 23: 'FLEX', 7: 'OP', 3: 'RB/WR', 5: 'WR/TE' };
const BENCH = new Set([20, 21, 24, 25]);
async function espn() {
  const ck = [];
  if (process.env.ESPN_S2) ck.push(`espn_s2=${process.env.ESPN_S2}`);
  if (process.env.SWID) ck.push(`SWID=${process.env.SWID}`);
  const H = ck.length ? { Cookie: ck.join('; '), 'x-fantasy-filter': '{}' } : {};
  const base = `https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/${SEASON}/segments/0/leagues/${ESPN_ID}`;
  const lg = await getJson(`${base}?view=mTeam&view=mSettings&view=mStatus`, H);
  const cur = lg.status.currentMatchupPeriod;
  const slotCounts = lg.settings.rosterSettings.lineupSlotCounts;
  const starterSlots = Object.entries(slotCounts).filter(([s, n]) => n > 0 && !BENCH.has(+s)).reduce((a, [, n]) => a + n, 0);
  const members = Object.fromEntries((lg.members || []).map(m => [m.id, `${m.firstName || ''} ${m.lastName || ''}`.trim() || m.displayName]));
  const teams = Object.fromEntries(lg.teams.map(t => [t.id, { name: t.name || `${t.location} ${t.nickname}`, owner: (t.owners || []).map(o => members[o]).join(', ') }]));
  const pro = await getJson(`https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/${SEASON}?view=proTeamSchedules_wl`);
  const bye = Object.fromEntries(pro.settings.proTeams.map(t => [t.id, t.byeWeek]));
  const proAbbr = Object.fromEntries(pro.settings.proTeams.map(t => [t.id, t.abbrev]));
  const flags = [], curAll = [];
  // Max PF (25.11.2026): optimale Aufstellung je Team und Woche aus Startern + Bank
  // (ohne IR-Slot). Pflichtpositionen zuerst, Flex-Slots zuletzt — bei
  // QB/RB/WR/TE/FLEX/K/DST ist diese Reihenfolge optimal.
  const maxpf = {};
  const lineupSlots = Object.entries(slotCounts).filter(([s, n]) => n > 0 && !BENCH.has(+s)).map(([s, n]) => [+s, n]);
  const optimal = entries => {
    const pool = entries.filter(e => e.lineupSlotId !== 21).map(e => ({ slots: e.playerPoolEntry.player.eligibleSlots || [], pts: e.playerPoolEntry.appliedStatTotal || 0, used: false }));
    const order = lineupSlots.slice().sort((x, y) => pool.filter(p => p.slots.includes(x[0])).length - pool.filter(p => p.slots.includes(y[0])).length);
    let tot = 0;
    for (const [slot, n] of order) for (let k = 0; k < n; k++) {
      const best = pool.filter(p => !p.used && p.slots.includes(slot)).sort((a, b) => b.pts - a.pts)[0];
      if (best) { best.used = true; tot += best.pts; }
    }
    return Math.round(tot * 100) / 100;
  };
  for (let w = 1; w <= cur; w++) {
    const d = await getJson(`${base}?view=mBoxscore&view=mMatchupScore&scoringPeriodId=${w}`, H);
    for (const m of d.schedule.filter(x => x.matchupPeriodId === w)) for (const side of ['home', 'away']) {
      const s = m[side]; if (!s) continue;
      const ros = s.rosterForCurrentScoringPeriod || s.rosterForMatchupPeriod; if (!ros) continue;
      const act = ros.entries.filter(e => !BENCH.has(e.lineupSlotId)).reduce((t, e) => t + (e.playerPoolEntry.appliedStatTotal || 0), 0);
      (maxpf[w] ||= {})[(teams[s.teamId] || {}).name || s.teamId] = { act: Math.round(act * 100) / 100, max: optimal(ros.entries), score: s.totalPoints };
    }
    for (const m of d.schedule.filter(x => x.matchupPeriodId === w)) {
      for (const side of ['home', 'away']) {
        const s = m[side]; if (!s) continue;
        const ros = s.rosterForCurrentScoringPeriod || s.rosterForMatchupPeriod; if (!ros) continue;
        const starters = ros.entries.filter(e => !BENCH.has(e.lineupSlotId));
        const tm = teams[s.teamId] || { name: `Team ${s.teamId}` };
        if (starters.length < starterSlots) flags.push({ league: 'Foodball', week: w, team: tm.name, owner: tm.owner, type: 'EMPTY', player: `${starterSlots - starters.length} leere(r) Startplatz/-plätze`, pts: 0 });
        for (const e of starters) {
          const p = e.playerPoolEntry.player;
          const st = (p.stats || []).find(x => x.scoringPeriodId === w && x.statSourceId === 0 && x.statSplitTypeId === 1);
          const pts = e.playerPoolEntry.appliedStatTotal ?? (st ? st.appliedTotal : 0);
          const base = { league: 'Foodball', week: w, team: tm.name, owner: tm.owner, slot: ESPN_SLOTS[e.lineupSlotId] || e.lineupSlotId, player: p.fullName, nfl: proAbbr[p.proTeamId], pts: Math.round((pts || 0) * 10) / 10 };
          const noStat = !st || !st.stats || Object.keys(st.stats).length === 0;
          if (w === cur) curAll.push({ ...base, pid: p.id, status: p.injuryStatus, injured: p.injured, noStat, byeNow: bye[p.proTeamId] === w });
          if (base.pts !== 0 || !noStat) { if (w === cur && bye[p.proTeamId] === w) {} else continue; }
          if (bye[p.proTeamId] === w) flags.push({ ...base, type: 'BYE' });
          else if (w < cur) flags.push({ ...base, type: 'DNP' });
          else if (['OUT', 'INJURY_RESERVE', 'SUSPENSION', 'DOUBTFUL'].includes(p.injuryStatus)) flags.push({ ...base, type: p.injuryStatus, note: 'aktueller Status' });
        }
      }
    }
  }
  // Aktueller Verletzungsstatus (mBoxscore liefert ihn nicht)
  const rr = await getJson(`${base}?view=mRoster`, H);
  const inj = {};
  for (const t of rr.teams) for (const e of (t.roster || {}).entries || []) inj[e.playerId] = e.playerPoolEntry.player.injuryStatus;
  for (const f of curAll) {
    f.status = inj[f.pid] || f.status;
    if (f.pts === 0 && f.noStat && !f.byeNow && ['OUT', 'INJURY_RESERVE', 'SUSPENSION', 'DOUBTFUL'].includes(f.status)) flags.push({ ...f, type: f.status, note: 'aktueller Status' });
  }
  return { cur, flags, curAll, maxpf };
}

// ---------------- Sleeper ----------------
async function sleeper() {
  const S = 'https://api.sleeper.app/v1';
  const [lg, users, rosters, state] = await Promise.all([
    getJson(`${S}/league/${SLEEPER_ID}`), getJson(`${S}/league/${SLEEPER_ID}/users`),
    getJson(`${S}/league/${SLEEPER_ID}/rosters`), getJson(`${S}/state/nfl`)]);
  const cur = Math.min(state.week, lg.settings.playoff_week_start ? 18 : 18);
  const uname = Object.fromEntries(users.map(u => [u.user_id, { name: (u.metadata && u.metadata.team_name) || u.display_name, owner: u.display_name }]));
  const rteam = Object.fromEntries(rosters.map(r => [r.roster_id, uname[r.owner_id] || { name: `Roster ${r.roster_id}`, owner: '' }]));
  const players = await getJson(`${S}/players/nfl`);
  const sched = await getJson(`https://api.sleeper.com/schedule/nfl/regular/${SEASON}`).catch(() => []);
  const playing = {}; // week -> Set(team)
  for (const g of sched) { (playing[g.week] ||= new Set()).add(g.home); playing[g.week].add(g.away); }
  const flags = [], curAll = [];
  for (let w = 1; w <= cur; w++) {
    const [mus, stats] = await Promise.all([
      getJson(`${S}/league/${SLEEPER_ID}/matchups/${w}`),
      getJson(`${S}/stats/nfl/regular/${SEASON}/${w}`).catch(() => ({}))]);
    for (const m of mus) {
      const tm = rteam[m.roster_id];
      (m.starters || []).forEach((pid, i) => {
        const pts = m.starters_points ? m.starters_points[i] : 0;
        const slot = (lg.roster_positions || [])[i];
        if (!pid || pid === '0') { flags.push({ league: 'DOPE', week: w, team: tm.name, owner: tm.owner, slot, type: 'EMPTY', player: 'leerer Startplatz', pts: 0 }); return; }
        const p = players[pid] || {};
        const nm = p.full_name || (p.first_name ? `${p.first_name} ${p.last_name}` : pid);
        const team = p.team || pid; // DEF: pid = Teamkürzel
        const base = { league: 'DOPE', week: w, team: tm.name, owner: tm.owner, slot, player: nm, nfl: team, pts };
        const s = stats[pid];
        const played = s && ((s.gp || 0) > 0 || (s.gms_active || 0) > 0 || (s.off_snp || 0) > 0 || (s.st_snp || 0) > 0 || (s.def_snp || 0) > 0);
        const tm2 = p.team || (p.position === 'DEF' ? pid : null);
        const byeWeek = playing[w] && playing[w].size && tm2 && !playing[w].has(tm2);
        if (w === cur) curAll.push({ ...base, status: p.injury_status, byeNow: !!byeWeek });
        if (pts || played) return;
        if (byeWeek) flags.push({ ...base, nfl: tm2, type: 'BYE' });
        else if (w < cur) flags.push({ ...base, nfl: tm2 || 'FA', type: 'DNP' });
        else if (['Out', 'IR', 'Sus', 'PUP', 'NA', 'Doubtful'].includes(p.injury_status)) flags.push({ ...base, type: p.injury_status, note: 'aktueller Status' });
        else if (!tm2) flags.push({ ...base, nfl: 'FA', type: 'NO_TEAM' });
      });
    }
  }
  return { cur, flags, curAll };
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const res = {};
  for (const [k, fn] of [['foodball', espn], ['dope', sleeper]]) {
    try { res[k] = await fn(); } catch (e) { res[k] = { error: String(e && e.stack || e) }; }
  }
  res.generated = new Date().toISOString();
  fs.writeFileSync(path.join(OUT, 'lineup-audit.json'), JSON.stringify(res, null, 1));
  for (const k of ['foodball', 'dope']) {
    console.log(`\n=== ${k} (aktuelle Woche ${res[k].cur}) ===`);
    if (res[k].error) { console.log(res[k].error); continue; }
    for (const f of res[k].flags) console.log(`W${f.week}\t${f.type}\t${f.team} (${f.owner})\t${f.slot || ''}\t${f.player} ${f.nfl || ''}\t${f.pts}`);
  }
})();
