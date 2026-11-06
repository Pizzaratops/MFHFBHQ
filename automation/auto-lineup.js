#!/usr/bin/env node
// ============================================================
//  AUTO-LINEUP (06.11.2026) — wie FantasyPros „Auto-Submit“
// ============================================================
//  Für jede Liga in automation/auto-lineup.config.json:
//   1. eigenes Team + aktuelle Aufstellung der laufenden Woche lesen
//   2. Projektion je Spieler (ESPN: ESPNs Wochenprojektion im Liga-Scoring,
//      Sleeper: Sleeper-Projektion × Liga-Scoring), Verletzte abgewertet
//      (OUT/IR/SUS = 0, Doubtful × 0.25, Questionable × 0.9), Bye = 0
//   3. optimale Aufstellung bestimmen. Spieler, deren Spiel schon läuft oder
//      vorbei ist, bleiben wo sie sind (gesperrt).
//   4. ist die beste Aufstellung um mindestens minGain Punkte besser:
//      einreichen und Push-Nachricht (ntfy) mit neuer Aufstellung,
//      * = neuer Starter, „Raus:“ = auf die Bank.
//
//  Secrets (GitHub → Settings → Secrets → Actions):
//    ESPN_S2, SWID        ESPN-Login-Cookies (bestehen schon für die Syncs)
//    SLEEPER_TOKEN        sleeper.com → Entwicklertools → Local Storage → token
//    NTFY_TOPIC           Name des ntfy-Kanals (frei gewählt, geheim halten)
//
//  Env: AUTO_LINEUP_DRY=1 → nichts einreichen, nur Nachricht/Log.
//  Schreib-Schnittstellen (inoffiziell):
//    ESPN    POST lm-api-writes.fantasy.espn.com/.../transactions/ (type ROSTER, items LINEUP)
//    Sleeper GraphQL sleeper.com/graphql update_matchup_leg(starters)
// ============================================================

const fs = require('fs');
const path = require('path');

const CFG = JSON.parse(fs.readFileSync(path.join(__dirname, 'auto-lineup.config.json'), 'utf8'));
const DRY = process.env.AUTO_LINEUP_DRY === '1' || CFG.mode === 'dry';
const MIN_GAIN = CFG.minGain ?? 0.3;
const UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';
const fmt = x => (Math.round(x * 10) / 10).toFixed(1).replace('.', ',');

// ---------- HTTP ----------
async function http(url, opt = {}) {
  let last;
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(url, { redirect: 'error', ...opt, headers: { 'user-agent': UA, accept: 'application/json', ...(opt.headers || {}) } });
      const text = await r.text();
      if (!r.ok) {
        const err = new Error(`HTTP ${r.status} ${url.split('?')[0]} ${text.slice(0, 200)}`);
        err.status = r.status;
        if (r.status < 500 && r.status !== 429) throw err;
        last = err;
      } else return text ? JSON.parse(text) : null;
    } catch (e) {
      if (e.status && e.status < 500 && e.status !== 429) throw e;
      last = e;
    }
    await new Promise(r => setTimeout(r, 1500 * (i + 1)));
  }
  throw last;
}

// ---------- Push (ntfy) ----------
async function push(title, message, { tags = [], priority = 3, click } = {}) {
  console.log(`\n=== ${title} ===\n${message}\n`);
  const topic = process.env.NTFY_TOPIC;
  if (!topic) { console.log('(NTFY_TOPIC fehlt — keine Push-Nachricht)'); return; }
  try {
    await http('https://ntfy.sh/', { method: 'POST', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ topic, title, message, tags, priority, ...(click ? { click } : {}) }) });
  } catch (e) { console.log('ntfy-Fehler:', e.message); }
}

// ---------- Verletzungen ----------
function injuryFactor(s) {
  s = String(s || '').toUpperCase();
  if (!s || s === 'ACTIVE' || s === 'NORMAL') return 1;
  if (/^(OUT|O|INJURY_RESERVE|IR|SUSPENSION|SUS|PUP|NA|DNR|COV)$/.test(s)) return 0;
  if (/^(DOUBTFUL|D)$/.test(s)) return 0.25;
  if (/^(QUESTIONABLE|Q)$/.test(s)) return 0.9;
  return 1;
}
const injTag = s => { s = String(s || '').toUpperCase(); return !s || s === 'ACTIVE' || s === 'NORMAL' ? '' : ({ QUESTIONABLE: 'Q', DOUBTFUL: 'D', OUT: 'O', INJURY_RESERVE: 'IR', SUSPENSION: 'SUS' }[s] || s); };

// ---------- Optimierer ----------
//  slots:   [{ key, label, elig(player) → bool }]          (Startplätze, feste Reihenfolge)
//  players: [{ id, name, pos, proj, locked, cur }]          cur = Index des Startplatzes oder -1 (Bank)
//  Ergebnis: assign[slotIndex] = player | null
function optimize(slots, players) {
  const assign = slots.map(() => null);
  const fixed = new Set();
  // gesperrte Starter bleiben, gesperrte Bankspieler bleiben auf der Bank
  players.forEach(p => { if (p.locked) { if (p.cur >= 0) assign[p.cur] = p; fixed.add(p.id); } });
  const free = players.filter(p => !fixed.has(p.id));
  const open = slots.map((s, i) => i).filter(i => !assign[i]);
  // Wert mit kleinem Bonus für „bleibt auf seinem Platz“ (vermeidet unnötige Wechsel bei Gleichstand)
  const val = (p, i) => p.proj + (p.cur === i ? 0.01 : 0);
  // gierig: restriktivste Plätze zuerst
  const width = i => free.filter(p => slots[i].elig(p)).length;
  open.sort((a, b) => width(a) - width(b));
  const used = new Set();
  open.forEach(i => {
    let best = null;
    free.forEach(p => { if (!used.has(p.id) && slots[i].elig(p) && (!best || val(p, i) > val(best, i))) best = p; });
    if (best) { assign[i] = best; used.add(best.id); }
  });
  // lokale Verbesserung: Tausch zwischen zwei offenen Plätzen oder Platz ↔ Bank
  for (let iter = 0, improved = true; improved && iter < 50; iter++) {
    improved = false;
    for (const i of open) {
      for (const j of open) {
        if (i >= j) continue;
        const a = assign[i], b = assign[j];
        const okA = !b || slots[i].elig(b), okB = !a || slots[j].elig(a);
        if (okA && okB && (b ? val(b, i) : 0) + (a ? val(a, j) : 0) > (a ? val(a, i) : 0) + (b ? val(b, j) : 0) + 1e-9) {
          assign[i] = b; assign[j] = a; improved = true;
        }
      }
      for (const p of free) {
        if (used.has(p.id) || !slots[i].elig(p)) continue;
        const a = assign[i];
        if (!a || val(p, i) > val(a, i) + 1e-9) {
          if (a) used.delete(a.id);
          assign[i] = p; used.add(p.id); improved = true;
        }
      }
    }
  }
  return assign;
}
const total = arr => arr.reduce((s, p) => s + (p ? p.proj : 0), 0);

// Nachricht im FantasyPros-Stil
function lineupText(slots, assign, before) {
  const was = new Set(before.filter(Boolean).map(p => p.id));
  const now = new Set(assign.filter(Boolean).map(p => p.id));
  const lines = slots.map((s, i) => {
    const p = assign[i];
    if (!p) return `${s.label.padEnd(5)} —`;
    const tag = p.inj ? ` [${p.inj}]` : '';
    return `${s.label.padEnd(5)} ${p.name}${p.team ? ` (${p.team})` : ''}${tag} ${fmt(p.proj)}${was.has(p.id) ? '' : ' *'}${p.locked ? ' 🔒' : ''}`;
  });
  const out = before.filter(p => p && !now.has(p.id));
  return lines.join('\n') + '\n\n* = neuer Starter · 🔒 = Spiel läuft/vorbei' +
    (out.length ? `\nRaus: ${out.map(p => `${p.name} (${p.team || '?'}, ${p.pos}${p.inj ? ', ' + p.inj : ''}) ${fmt(p.proj)}`).join(', ')}` : '');
}

// ============================================================
//  ESPN (NFL)
// ============================================================
const ESPN_SLOT = { 0: 'QB', 2: 'RB', 3: 'RB/WR', 4: 'WR', 5: 'WR/TE', 6: 'TE', 7: 'OP', 16: 'D/ST', 17: 'K', 23: 'FLEX' };
const ESPN_POS = { 1: 'QB', 2: 'RB', 3: 'WR', 4: 'TE', 5: 'K', 16: 'D/ST' };
const ESPN_TEAM = { 0: 'FA', 1: 'ATL', 2: 'BUF', 3: 'CHI', 4: 'CIN', 5: 'CLE', 6: 'DAL', 7: 'DEN', 8: 'DET', 9: 'GB', 10: 'TEN', 11: 'IND', 12: 'KC', 13: 'LV', 14: 'LAR', 15: 'MIA', 16: 'MIN', 17: 'NE', 18: 'NO', 19: 'NYG', 20: 'NYJ', 21: 'PHI', 22: 'ARI', 23: 'PIT', 24: 'LAC', 25: 'SF', 26: 'SEA', 27: 'TB', 28: 'WSH', 29: 'CAR', 30: 'JAX', 33: 'BAL', 34: 'HOU' };
const SLOT_ORDER = [0, 2, 3, 4, 5, 6, 23, 7, 16, 17];

async function runEspn(L) {
  const s2 = process.env.ESPN_S2, swid = process.env.SWID;
  if (!s2 || !swid) throw new Error('ESPN_S2/SWID fehlen');
  const base = `https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/${L.season}/segments/0/leagues/${L.leagueId}`;
  const headers = { cookie: `espn_s2=${s2}; SWID=${swid}` };
  const st = await http(`${base}?view=mSettings`, { headers });
  const week = st.scoringPeriodId;
  const data = await http(`${base}?view=mTeam&view=mRoster&view=mSettings&scoringPeriodId=${week}`, { headers });
  const norm = x => String(x || '').toUpperCase().replace(/[{}]/g, '');
  const me = (data.teams || []).find(t => (t.owners || []).some(o => norm(o) === norm(swid)));
  if (!me) throw new Error('Eigenes Team nicht gefunden (SWID passt zu keinem Team)');
  const counts = data.settings.rosterSettings.lineupSlotCounts;
  const slots = [];
  SLOT_ORDER.concat(Object.keys(counts).map(Number).filter(k => !SLOT_ORDER.includes(k) && k !== 20 && k !== 21 && k !== 24 && k !== 25))
    .forEach(sid => { for (let i = 0; i < (counts[sid] || 0); i++) slots.push({ sid, key: sid, label: ESPN_SLOT[sid] || 'S' + sid, elig: p => p.eligible.includes(sid) }); });
  const players = [];
  (me.roster.entries || []).forEach(e => {
    if (e.lineupSlotId === 21) return; // IR
    const pl = e.playerPoolEntry.player;
    const projStat = (pl.stats || []).find(s => s.statSourceId === 1 && s.statSplitTypeId === 1 && s.scoringPeriodId === week);
    const inj = pl.injuryStatus;
    const raw = projStat ? projStat.appliedTotal || 0 : 0;
    players.push({ id: pl.id, name: pl.fullName, pos: ESPN_POS[pl.defaultPositionId] || '?', team: ESPN_TEAM[pl.proTeamId] || '', eligible: pl.eligibleSlots || [],
      proj: raw * injuryFactor(inj), inj: injTag(inj), locked: !!e.playerPoolEntry.lineupLocked, slotId: e.lineupSlotId, cur: -1 });
  });
  // aktuelle Belegung den Slot-Instanzen zuordnen
  const before = slots.map(() => null);
  players.forEach(p => {
    if (p.slotId === 20) return;
    const i = slots.findIndex((s, k) => s.sid === p.slotId && !before[k]);
    if (i >= 0) { before[i] = p; p.cur = i; }
  });
  const assign = optimize(slots, players);
  const gain = total(assign) - total(before);
  const res = { league: L, week, slots, before, assign, gain, link: `https://fantasy.espn.com/football/team?leagueId=${L.leagueId}&teamId=${me.id}&seasonId=${L.season}` };
  if (gain < MIN_GAIN) return res;
  // Wechsel: jeder Spieler, dessen Slot sich ändert
  const target = new Map();
  assign.forEach((p, i) => { if (p) target.set(p.id, slots[i].sid); });
  const items = players.filter(p => !p.locked).map(p => ({ p, to: target.has(p.id) ? target.get(p.id) : 20 }))
    .filter(x => x.to !== x.p.slotId).map(x => ({ playerId: x.p.id, type: 'LINEUP', fromLineupSlotId: x.p.slotId, toLineupSlotId: x.to }));
  res.items = items.length;
  if (!DRY && items.length) {
    await http(`https://lm-api-writes.fantasy.espn.com/apis/v3/games/ffl/seasons/${L.season}/segments/0/leagues/${L.leagueId}/transactions/`, {
      method: 'POST',
      headers: { ...headers, 'content-type': 'application/json', 'x-fantasy-platform': 'espn-fantasy-web', 'x-fantasy-source': 'kona' },
      body: JSON.stringify({ isLeagueManager: false, teamId: me.id, memberId: swid, scoringPeriodId: week, executionType: 'EXECUTE', type: 'ROSTER', items }),
    });
    res.submitted = true;
  }
  return res;
}

// ============================================================
//  Sleeper (NFL)
// ============================================================
const SLEEPER_ELIG = {
  QB: ['QB'], RB: ['RB'], WR: ['WR'], TE: ['TE'], K: ['K'], DEF: ['DEF'],
  FLEX: ['RB', 'WR', 'TE'], SUPER_FLEX: ['QB', 'RB', 'WR', 'TE'], REC_FLEX: ['WR', 'TE'], WRRB_FLEX: ['RB', 'WR'],
  IDP_FLEX: ['DL', 'LB', 'DB'], DL: ['DL'], LB: ['LB'], DB: ['DB'],
};
const TEAM_FIX = { WSH: 'WAS', LA: 'LAR', JAC: 'JAX' };
const nflTeam = t => TEAM_FIX[t] || t;

// laufende/vorbei: ESPN-Scoreboard (öffentlich) → Sperre je NFL-Team
async function nflLocks(season, week) {
  const sb = await http(`https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?seasontype=2&week=${week}&dates=${season}`);
  const locked = new Set(), playing = new Set();
  const now = Date.now();
  (sb.events || []).forEach(ev => {
    const c = ev.competitions && ev.competitions[0];
    const started = (c && c.status && c.status.type && c.status.type.state !== 'pre') || Date.parse(ev.date) <= now;
    (c ? c.competitors : []).forEach(t => { const a = nflTeam(t.team.abbreviation); playing.add(a); if (started) locked.add(a); });
  });
  return { locked, playing };
}

async function runSleeper(L) {
  const token = process.env.SLEEPER_TOKEN;
  const S = 'https://api.sleeper.app/v1';
  const state = await http(`${S}/state/nfl`);
  if (state.season_type !== 'regular' && state.season_type !== 'post') return { league: L, skip: 'keine laufende Saison' };
  const week = state.week, season = state.season;
  const league = await http(`${S}/league/${L.leagueId}`);
  const [rosters, matchups, players, projArr, locks] = await Promise.all([
    http(`${S}/league/${L.leagueId}/rosters`),
    http(`${S}/league/${L.leagueId}/matchups/${week}`),
    http(`${S}/players/nfl`),
    http(`https://api.sleeper.app/projections/nfl/${season}/${week}?season_type=${state.season_type}&position[]=QB&position[]=RB&position[]=WR&position[]=TE&position[]=K&position[]=DEF`),
    nflLocks(season, week),
  ]);
  const ros = rosters.find(r => r.roster_id === L.rosterId);
  const mu = (matchups || []).find(m => m.roster_id === L.rosterId);
  if (!ros || !mu) throw new Error(`Roster ${L.rosterId} / Matchup Woche ${week} nicht gefunden`);
  const sc = league.scoring_settings || {};
  const proj = {};
  (projArr || []).forEach(x => {
    const s = x.stats || {};
    let pts = 0;
    Object.keys(s).forEach(k => { if (typeof sc[k] === 'number' && typeof s[k] === 'number') pts += sc[k] * s[k]; });
    proj[x.player_id] = pts;
  });
  const slotsPos = (league.roster_positions || []).filter(p => !['BN', 'IR', 'TAXI'].includes(p));
  const slots = slotsPos.map(k => ({ key: k, label: k === 'SUPER_FLEX' ? 'SFLEX' : k, elig: p => (SLEEPER_ELIG[k] || [k]).some(x => p.positions.includes(x)) }));
  const skip = new Set([...(ros.reserve || []), ...(ros.taxi || [])]);
  const current = (mu.starters || []).map(String);
  const list = (ros.players || []).map(String).filter(id => !skip.has(id) || current.includes(id));
  const P = list.map(id => {
    const pl = players[id] || {};
    const team = nflTeam(pl.team || (pl.position === 'DEF' ? id : ''));
    const inj = pl.injury_status;
    const bye = team && !locks.playing.has(team);
    return { id, name: pl.full_name || (pl.position === 'DEF' ? `${id} D/ST` : id), pos: pl.position || '?', team,
      positions: pl.fantasy_positions || [pl.position], proj: bye ? 0 : (proj[id] || 0) * injuryFactor(inj), inj: injTag(inj),
      locked: !!team && locks.locked.has(team), cur: current.indexOf(id) };
  });
  const before = slots.map((s, i) => P.find(p => p.cur === i) || null);
  const assign = optimize(slots, P);
  const gain = total(assign) - total(before);
  const res = { league: L, week, slots, before, assign, gain, link: `https://sleeper.com/leagues/${L.leagueId}/team` };
  if (gain < MIN_GAIN) return res;
  const starters = assign.map(p => (p ? p.id : '0'));
  res.items = starters.filter((id, i) => id !== (current[i] || '0')).length;
  if (!DRY) {
    if (!token) throw new Error('SLEEPER_TOKEN fehlt');
    const r = await http('https://sleeper.com/graphql', {
      method: 'POST', headers: { 'content-type': 'application/json', authorization: token },
      body: JSON.stringify({ operationName: 'update_matchup_leg', variables: { r: week, leg: week, lg: L.leagueId, rid: L.rosterId, s: starters },
        query: 'mutation update_matchup_leg($r:Int!,$lg:Snowflake!,$leg:Int!,$rid:Int!,$s:[String]){update_matchup_leg(round:$r,leg:$leg,league_id:$lg,roster_id:$rid,starters:$s){roster_id starters}}' }),
    });
    if (r && r.errors && r.errors.length) throw new Error('Sleeper: ' + r.errors.map(e => e.message).join('; '));
    const got = r && r.data && r.data.update_matchup_leg && r.data.update_matchup_leg.starters;
    if (got && got.join(',') !== starters.join(',')) throw new Error('Sleeper hat eine andere Aufstellung gespeichert: ' + got.join(','));
    res.submitted = true;
  }
  return res;
}

// ============================================================
async function main() {
  const only = (process.env.AUTO_LINEUP_ONLY || '').toLowerCase();
  const leagues = CFG.leagues.filter(l => l.enabled && (!only || l.name.toLowerCase() === only));
  let failed = 0;
  for (const L of leagues) {
    try {
      const r = L.platform === 'espn' ? await runEspn(L) : L.platform === 'sleeper' ? await runSleeper(L) : { skip: 'Plattform nicht unterstützt' };
      if (r.skip) { console.log(`${L.name}: übersprungen (${r.skip})`); continue; }
      const head = `${L.name} · Woche ${r.week}`;
      const txt = lineupText(r.slots, r.assign, r.before);
      if (r.gain < MIN_GAIN) {
        console.log(`${head}: Aufstellung ist optimal (Projektion ${fmt(total(r.before))}).\n${lineupText(r.slots, r.before, r.before)}`);
        if (process.env.AUTO_LINEUP_REPORT === '1') await push(`✅ ${head}: schon optimal`, `Projektion ${fmt(total(r.before))}\n\n${lineupText(r.slots, r.before, r.before)}`, { tags: ['white_check_mark'], priority: 2, click: r.link });
        continue;
      }
      const verb = r.submitted ? 'umgestellt' : DRY ? 'Vorschlag (Testlauf, nicht eingereicht)' : 'nichts zu ändern';
      await push(`🏈 ${head}: ${verb} (+${fmt(r.gain)})`,
        `Projektion ${fmt(total(r.before))} → ${fmt(total(r.assign))}\n\n${txt}`, { tags: [r.submitted ? 'football' : 'memo'], priority: r.submitted ? 3 : 2, click: r.link });
    } catch (e) {
      failed++;
      const hint = e.status === 401 || e.status === 403 ? (L.platform === 'sleeper' ? ' — SLEEPER_TOKEN abgelaufen? Neu aus sleeper.com kopieren.' : ' — ESPN-Cookies (ESPN_S2/SWID) abgelaufen?') : '';
      await push(`⚠️ Auto-Lineup ${L.name}: Fehler`, e.message + hint, { tags: ['warning'], priority: 4 });
    }
  }
  process.exitCode = failed ? 1 : 0;
}

if (require.main === module) main();
module.exports = { optimize, injuryFactor, lineupText };
