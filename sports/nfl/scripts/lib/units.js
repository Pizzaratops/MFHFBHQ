// ============================================================
//  NFL UNITS — Unit-Aggregation (pbp) + Gesamt-Fazit + Saison-Tracking
// ============================================================
//  Aus scripts/sync-matchup-advantage.js ausgelagert (15.10.2026), damit
//  das Saison-Tracking des Gesamt-Fazits (walk-forward: je Woche nur Daten
//  VOR dem Spiel) exakt dieselbe Rechnung nutzt wie die Seite:
//    - aggregate(): Offense/Defense je Team aus Play-by-Play
//    - Mix mit Vorjahr (g*Saison + K*Vorjahr)/(g+K)
//    - Ränge 1-32, Kanten: Rangabstand/31 > 0,1, ohne Red-Zone-TD %
//    - Fazit: Netto = (Heim-Off − Gast-Def) − (Gast-Off − Heim-Def),
//      klar ab 3, leicht ab 1 (identisch zu sports/nfl/matchup-advantage.js)
// ============================================================
const { normTeam } = require('./nflverse');

const METRICS = [
  { key: 'passEpa', offBetter: 'high' }, { key: 'rushEpa', offBetter: 'high' },
  { key: 'sackRate', offBetter: 'low' }, { key: 'explosive', offBetter: 'high' }, { key: 'rzTd', offBetter: 'high' },
];
const NOISY = ['rzTd'];
const mean = (s, n) => (n ? s / n : null);

function aggregate(rows) {
  const acc = {};
  const A = abbr => (acc[abbr] = acc[abbr] || {
    off: { passN: 0, passEpa: 0, rushN: 0, rushEpa: 0, db: 0, sacks: 0, plays: 0, expl: 0, rzDrives: new Set(), rzTd: new Set() },
    def: { passN: 0, passEpa: 0, rushN: 0, rushEpa: 0, db: 0, sacks: 0, plays: 0, expl: 0, rzDrives: new Set(), rzTd: new Set() },
    games: new Set(),
  });
  for (const p of rows) {
    if (!p.posteam || !p.defteam || p.posteam === 'NA' || p.defteam === 'NA') continue;
    const off = normTeam(p.posteam), def = normTeam(p.defteam);
    A(off).games.add(p.game_id); A(def).games.add(p.game_id);
    const sides = [A(off).off, A(def).def];
    // Red Zone: Drive-Ebene
    if (p.drive_inside20 === '1' && p.fixed_drive) {
      const dk = `${p.game_id}#${p.fixed_drive}`;
      sides.forEach(s => s.rzDrives.add(dk));
      if (p.fixed_drive_result === 'Touchdown') sides.forEach(s => s.rzTd.add(dk));
    }
    if (p.two_point_attempt === '1' || p.epa === '' || p.epa === 'NA') continue;
    if (p.play_type !== 'pass' && p.play_type !== 'run') continue;
    const epa = Number(p.epa), yds = Number(p.yards_gained) || 0;
    const isPass = p.pass === '1', isRush = p.rush === '1';
    if (!isPass && !isRush) continue;
    sides.forEach(s => {
      s.plays++;
      if (isPass) { s.passN++; s.passEpa += epa; }
      else { s.rushN++; s.rushEpa += epa; }
      if (p.qb_dropback === '1') { s.db++; if (p.sack === '1') s.sacks++; }
      if ((isPass && p.sack !== '1' && yds >= 20) || (isRush && yds >= 10)) s.expl++;
    });
  }
  const finish = s => ({
    passEpa: mean(s.passEpa, s.passN), rushEpa: mean(s.rushEpa, s.rushN), sackRate: mean(s.sacks, s.db),
    explosive: mean(s.expl, s.plays), rzTd: s.rzDrives.size ? s.rzTd.size / s.rzDrives.size : null,
  });
  const out = {};
  Object.entries(acc).forEach(([abbr, a]) => {
    out[abbr] = { games: a.games.size, off: finish(a.off), def: finish(a.def), rzTrips: { off: a.off.rzDrives.size, def: a.def.rzDrives.size } };
  });
  return out;
}


function rankBy(teams, getVal, better) {
  const withVal = teams.filter(t => getVal(t) != null);
  withVal.sort((a, b) => (better === 'high' ? getVal(b) - getVal(a) : getVal(a) - getVal(b)));
  const r = {}; withVal.forEach((t, i) => { r[t.abbr] = i + 1; });
  return r;
}

// Units je Team (Mix mit Vorjahr) + Ränge
function unitTeams(curAgg, priorAgg, K, abbrs) {
  const mix = (cv, pv, g) => (cv == null && pv == null ? null : pv == null ? cv : cv == null || !g ? pv : (g * cv + K * pv) / (g + K));
  const teams = abbrs.map(abbr => {
    const c = curAgg[abbr], pr = priorAgg[abbr], g = c ? c.games : 0;
    const side = sd => Object.fromEntries(METRICS.map(m => [m.key, mix(c ? c[sd][m.key] : null, pr ? pr[sd][m.key] : null, g)]));
    return { abbr, games: g, off: side('off'), def: side('def') };
  });
  METRICS.forEach(m => {
    const offR = rankBy(teams, t => t.off[m.key], m.offBetter);
    const defR = rankBy(teams, t => t.def[m.key], m.offBetter === 'high' ? 'low' : 'high');
    teams.forEach(t => { (t.offRank = t.offRank || {})[m.key] = offR[t.abbr] || null; (t.defRank = t.defRank || {})[m.key] = defR[t.abbr] || null; });
  });
  return Object.fromEntries(teams.map(t => [t.abbr, t]));
}

function edges(T, offA, defA) {
  const off = T[offA], def = T[defA]; let oe = 0, de = 0;
  if (!off || !def) return { oe, de };
  METRICS.forEach(m => {
    if (NOISY.includes(m.key)) return;
    const oR = off.offRank[m.key], dR = def.defRank[m.key];
    if (oR == null || dR == null) return;
    const adv = (dR - oR) / 31;
    if (adv > 0.1) oe++; else if (adv < -0.1) de++;
  });
  return { oe, de };
}
function verdict(T, home, away) {
  const h = edges(T, home, away), a = edges(T, away, home);
  const net = (h.oe - h.de) - (a.oe - a.de);
  return { net, fav: net > 0 ? home : net < 0 ? away : null, strength: Math.abs(net) >= 3 ? 'klar' : Math.abs(net) >= 1 ? 'leicht' : null };
}

// Walk-forward-Tracking der laufenden Saison: für jede gespielte Woche w
// Units aus Plays der Wochen < w (+ Vorjahr), Fazit gegen echtes Ergebnis.
// games: [{week, home, away, homeScore, awayScore, spread}] (spread > 0 = Heim favorisiert)
function trackSeason(curRows, priorAgg, games, K, abbrs) {
  const out = { klar: { hit: 0, n: 0 }, leicht: { hit: 0, n: 0 }, vegas: { hit: 0, n: 0 }, agree: { hit: 0, n: 0 }, disagree: { toolHit: 0, vegasHit: 0, n: 0 }, weeks: {} };
  const weeks = [...new Set(games.filter(g => g.homeScore != null).map(g => g.week))].sort((a, b) => a - b);
  weeks.forEach(w => {
    const T = unitTeams(aggregate(curRows.filter(p => Number(p.week) < w)), priorAgg, K, abbrs);
    const wk = out.weeks[w] = { klar: [0, 0], leicht: [0, 0], vegas: [0, 0] };
    games.filter(g => g.week === w && g.homeScore != null && g.homeScore !== g.awayScore).forEach(g => {
      const win = g.homeScore > g.awayScore ? g.home : g.away;
      const v = verdict(T, g.home, g.away);
      const vFav = g.spread ? (g.spread > 0 ? g.home : g.away) : null;
      if (v.strength) { out[v.strength].n++; wk[v.strength][1]++; if (v.fav === win) { out[v.strength].hit++; wk[v.strength][0]++; } }
      if (vFav) { out.vegas.n++; wk.vegas[1]++; if (vFav === win) { out.vegas.hit++; wk.vegas[0]++; } }
      if (v.fav && vFav) {
        if (v.fav === vFav) { out.agree.n++; if (v.fav === win) out.agree.hit++; }
        else { out.disagree.n++; if (v.fav === win) out.disagree.toolHit++; if (vFav === win) out.disagree.vegasHit++; }
      }
    });
  });
  return out;
}

module.exports = { METRICS, aggregate, rankBy, unitTeams, edges, verdict, trackSeason };
