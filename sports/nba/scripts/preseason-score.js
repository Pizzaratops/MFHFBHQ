// preseason-score.js — Preseason Sticky Score (MFHFB)
// Reine Rechenlogik, ohne Netzwerkzugriff. Läuft in Node (GitHub Action) und im Browser.
// Validiert an stats.nba.com-Preseason-Daten 2013-14 bis 2025-26 (siehe preseason-sticky-check.md).
//
//   const PS = require('./preseason-score.js');
//   const rows = summaries.flatMap(PS.parseEspnSummary);   // ESPN-Game-Summaries (Preseason, seasontype=1)
//   const result = PS.buildPreseasonTable(rows, baseline);  // baseline = preseason-baseline-2025-26.json
//
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.PreseasonScore = factory();
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // KONSTANTEN — alle empirisch bestimmt, nicht von Hand ändern ohne neue Analyse
  // ---------------------------------------------------------------------------
  const CONFIG = {
    version: '2026-10-06',
    // k = Preseason-Minuten, ab denen der Stat zur Hälfte Signal ist (Shrinkage-Konstante).
    // Aus echter Preseason->Regular-Season-Reliabilität (Median-Sample 99 Min.): k = M*(1-rho)/rho
    k: { 'TRB/36': 21, 'AST/36': 26, 'AST%': 26, 'USG%': 29, 'DRB%': 31, 'ORB%': 37, 'PTS/36': 47,
         'BLK%': 59, 'FTA/36': 64, 'FTr': 77, 'TOV%': 97, 'STL%': 127, 'TS%': 211, '3PAr': 15 },
    // Preseason-Bias: Faktor Preseason/Regular Season (gleiche Spieler, Mittelwert-Verhältnis, n = 3.294).
    // Korrigiert wird: rate_korrigiert = rate_preseason / bias
    bias: { 'ORB%': 0.927, 'DRB%': 1.033, 'BLK%': 0.994, 'AST%': 1.095, 'USG%': 1.052, 'STL%': 1.144,
            'TOV%': 1.203, '3PAr': 1.015, 'FTr': 1.224, 'TS%': 0.986, 'PTS/36': 1.042, 'FTA/36': 1.212,
            'TRB/36': 1.043, 'AST/36': 1.095 },
    // Tiers wie im Summer-League-Modell: Sticky x1.5, Other x1, Icky x0.5. 'style' = nur Anzeige.
    tiers: {
      sticky: ['ORB%', 'DRB%', 'BLK%', 'AST%'],
      other:  ['PTS/36', 'TRB/36'],
      icky:   ['STL%', 'TOV%', 'TS%', 'FTr'],
      style:  ['3PAr', 'USG%', 'FTA/36', 'AST/36']
    },
    weights: { sticky: 1.5, other: 1.0, icky: 0.5 },
    inverted: ['TOV%'],                 // niedriger = besser
    minMinutesForRanking: 40,           // darunter: in der Tabelle ausgegraut, kein Score-Rang
    priorMinMinutes: 250,               // Vorsaison-Wert erst ab so vielen RS-Minuten als Prior nutzen
    deltaBadgeSD: 0.75,                 // "echte Veränderung" ab |Delta| >= 0.75 Liga-SD (validiert, s.u.)
    // Historische Trefferquote der Badges (Richtung der Veränderung ggü. Vorsaison stimmt in der Regular Season),
    // gemessen 2014-2026 bei Schwelle 0.75 SD. Zufall wäre 50 %.
    badgeHitRate: { 'USG%': 0.84, '3PAr': 0.83, 'AST%': 0.79, 'PTS/36': 0.77, 'TRB/36': 0.74, 'DRB%': 0.74,
                    'BLK%': 0.67, 'ORB%': 0.66 },
    roleDeltaMPG: 5                     // Rollen-Badge ab +/- 5 MPG gegenüber Vorsaison
  };

  // ---------------------------------------------------------------------------
  // ESPN-Summary parsen (site.api.espn.com/.../nba/summary?event=ID)
  // ---------------------------------------------------------------------------
  const LABEL_ALIASES = {
    MIN: ['MIN', 'minutes'], FG: ['FG', 'fieldGoalsMade-fieldGoalsAttempted'],
    '3PT': ['3PT', 'threePointFieldGoalsMade-threePointFieldGoalsAttempted'],
    FT: ['FT', 'freeThrowsMade-freeThrowsAttempted'], OREB: ['OREB', 'offensiveRebounds'],
    DREB: ['DREB', 'defensiveRebounds'], AST: ['AST', 'assists'], STL: ['STL', 'steals'],
    BLK: ['BLK', 'blocks'], TO: ['TO', 'turnovers'], PF: ['PF', 'fouls'],
    PM: ['+/-', 'plusMinus'], PTS: ['PTS', 'points']
  };
  function num(v) { const n = parseFloat(String(v).replace(/^\+/, '')); return isFinite(n) ? n : 0; }
  function pair(v) { const p = String(v || '0-0').split('-'); return [num(p[0]), num(p[1])]; }
  function minutes(v) {
    const s = String(v || '0');
    if (s.includes(':')) { const [m, sec] = s.split(':'); return num(m) + num(sec) / 60; }
    return num(s);
  }

  function parseEspnSummary(summary) {
    const box = summary && summary.boxscore;
    if (!box || !Array.isArray(box.players) || box.players.length !== 2) return [];
    const comp = (summary.header && summary.header.competitions && summary.header.competitions[0]) || {};
    const gameId = String((summary.header && summary.header.id) || comp.id || '');
    const date = comp.date || '';
    const teamsRows = box.players.map(tp => {
      const st = tp.statistics && tp.statistics[0];
      if (!st) return [];
      const labels = st.labels || st.names || st.keys || [];
      const keys = st.keys || [];
      const idx = {};
      Object.entries(LABEL_ALIASES).forEach(([k, al]) => {
        let i = labels.findIndex(l => al.includes(l));
        if (i < 0) i = keys.findIndex(l => al.includes(l));
        idx[k] = i;
      });
      return (st.athletes || []).filter(a => !a.didNotPlay && a.stats && a.stats.length).map(a => {
        const s = a.stats, g = k => (idx[k] >= 0 ? s[idx[k]] : '0');
        const [fgm, fga] = pair(g('FG')), [fg3m, fg3a] = pair(g('3PT')), [ftm, fta] = pair(g('FT'));
        return {
          gameId, date,
          athleteId: String(a.athlete && a.athlete.id),
          name: a.athlete && (a.athlete.displayName || a.athlete.shortName),
          pos: a.athlete && a.athlete.position && a.athlete.position.abbreviation,
          teamId: String(tp.team && tp.team.id), teamAbbr: tp.team && tp.team.abbreviation,
          starter: !!a.starter,
          mp: minutes(g('MIN')), fgm, fga, fg3m, fg3a, ftm, fta,
          orb: num(g('OREB')), drb: num(g('DREB')), ast: num(g('AST')), stl: num(g('STL')),
          blk: num(g('BLK')), tov: num(g('TO')), pf: num(g('PF')), pm: num(g('PM')), pts: num(g('PTS'))
        };
      }).filter(r => r.mp > 0);
    });
    if (!teamsRows[0].length || !teamsRows[1].length) return [];
    // Team-Summen je Seite, an jede Spielerzeile hängen (für %-Stats)
    const tot = teamsRows.map(rows => rows.reduce((t, r) => {
      ['mp', 'fgm', 'fga', 'fg3a', 'fta', 'orb', 'drb', 'tov'].forEach(c => { t[c] = (t[c] || 0) + r[c]; });
      return t;
    }, {}));
    const out = [];
    [0, 1].forEach(i => {
      const tm = tot[i], op = tot[1 - i], oppTeamId = teamsRows[1 - i][0].teamId;
      teamsRows[i].forEach(r => out.push(Object.assign(r, { oppTeamId, tm, op })));
    });
    return out;
  }

  // ---------------------------------------------------------------------------
  // Aggregation + Raten (identische Formeln wie in der Validierung)
  // ---------------------------------------------------------------------------
  const SUMS = ['mp', 'fgm', 'fga', 'fg3m', 'fg3a', 'ftm', 'fta', 'orb', 'drb', 'ast', 'stl', 'blk', 'tov', 'pf', 'pm', 'pts',
                'd_stl', 'd_blk', 'd_orb', 'd_drb', 'd_ast', 'd_usg', 'plays', 'gp', 'gs'];

  function aggregate(rows) {
    const by = new Map();
    rows.forEach(r => {
      const tm = r.tm, op = r.op;
      if (!tm || tm.mp < 200) return;                       // unvollständige Boxscores auslassen
      const f = r.mp / (tm.mp / 5);
      const opPoss = op.fga + 0.44 * op.fta - op.orb + op.tov;
      let a = by.get(r.athleteId);
      if (!a) { a = { athleteId: r.athleteId, name: r.name, pos: r.pos, teamAbbr: r.teamAbbr, teamId: r.teamId, games: new Set() };
                SUMS.forEach(c => { a[c] = 0; }); by.set(r.athleteId, a); }
      if (a.games.has(r.gameId)) return;                     // Doppel-Import schützen
      a.games.add(r.gameId);
      a.name = r.name || a.name; a.pos = r.pos || a.pos; a.teamAbbr = r.teamAbbr || a.teamAbbr; a.teamId = r.teamId || a.teamId;
      ['mp', 'fgm', 'fga', 'fg3m', 'fg3a', 'ftm', 'fta', 'orb', 'drb', 'ast', 'stl', 'blk', 'tov', 'pf', 'pm', 'pts'].forEach(c => { a[c] += r[c]; });
      a.d_stl += f * opPoss;
      a.d_blk += f * (op.fga - op.fg3a);
      a.d_orb += f * (tm.orb + op.drb);
      a.d_drb += f * (tm.drb + op.orb);
      a.d_ast += Math.max(0, f * tm.fgm - r.fgm);
      a.d_usg += f * (tm.fga + 0.44 * tm.fta + tm.tov);
      a.plays += r.fga + 0.44 * r.fta + r.tov;
      a.gp += 1; a.gs += r.starter ? 1 : 0;
    });
    return [...by.values()].map(a => { a.games = a.games.size; return a; });
  }

  const div = (a, b) => (b > 0 ? a / b : null);
  function rates(a) {
    const m = a.mp;
    const r = {
      'PTS/36': div(a.pts * 36, m), 'TRB/36': div((a.orb + a.drb) * 36, m), 'AST/36': div(a.ast * 36, m),
      'FTA/36': div(a.fta * 36, m),
      'ORB%': div(a.orb, a.d_orb), 'DRB%': div(a.drb, a.d_drb), 'BLK%': div(a.blk, a.d_blk),
      'STL%': div(a.stl, a.d_stl), 'AST%': div(a.ast, a.d_ast), 'USG%': div(a.plays, a.d_usg),
      'TOV%': div(a.tov, a.plays), '3PAr': div(a.fg3a, a.fga), 'FTr': div(a.fta, a.fga),
      'TS%': div(a.pts, 2 * (a.fga + 0.44 * a.fta))
    };
    return r;
  }

  // ---------------------------------------------------------------------------
  // Score
  // ---------------------------------------------------------------------------
  function posGroup(p) {
    const s = String(p || '').toUpperCase();
    if (s === 'C' || s === 'FC' || s === 'C-F' || s === 'F-C') return 'C';
    if (s.startsWith('G') || s === 'PG' || s === 'SG') return 'G';
    return 'F';
  }

  function scorePlayer(a, baseline, cfg) {
    const raw = rates(a);
    const base = baseline.players[a.athleteId];
    const grp = posGroup(a.pos || (base && base.pos));
    const ref = baseline.position_reference[grp];
    const usePrior = !!(base && base.min >= cfg.priorMinMinutes);
    const M = a.mp;
    const stats = {};
    let wSum = 0, sSum = 0;
    const tierOf = {};
    Object.entries(cfg.tiers).forEach(([t, list]) => list.forEach(s => { tierOf[s] = t; }));
    Object.keys(cfg.k).forEach(s => {
      const r = raw[s];
      const prior = usePrior && base.rates[s] != null ? base.rates[s] : ref[s].mean;
      const sd = ref[s].sd || 1;
      if (r == null) { stats[s] = { raw: null, prior, shrunk: prior, deltaSD: 0, z: 0, conf: 0 }; return; }
      const corr = r / (cfg.bias[s] || 1);
      const k = cfg.k[s];
      const conf = M / (M + k);
      const shrunk = conf * corr + (1 - conf) * prior;
      const delta = shrunk - prior;
      let z = (shrunk - ref[s].mean) / sd;
      if (cfg.inverted.includes(s)) z = -z;
      const sdAll = (baseline.position_reference.ALL && baseline.position_reference.ALL[s].sd) || sd;
      const deltaSD = delta / sdAll * (cfg.inverted.includes(s) ? -1 : 1);
      stats[s] = { raw: r, prior, shrunk, deltaSD, z, conf };
      const t = tierOf[s];
      if (cfg.weights[t]) { wSum += cfg.weights[t]; sSum += cfg.weights[t] * z; }
    });
    const badges = [];
    [...cfg.tiers.sticky, ...cfg.tiers.other, 'USG%', '3PAr'].forEach(s => {
      const st = stats[s];
      if (st && st.raw != null && usePrior && Math.abs(st.deltaSD) >= cfg.deltaBadgeSD) badges.push({ stat: s, dir: st.deltaSD > 0 ? 'up' : 'down', deltaSD: +st.deltaSD.toFixed(2), hitRate: cfg.badgeHitRate[s] || null });
    });
    const mpg = a.gp ? M / a.gp : 0;
    const priorMPG = base ? base.mpg : null;
    let role = 'neu';
    if (priorMPG != null && base.gp >= 10) {
      const d = mpg - priorMPG;
      role = d >= cfg.roleDeltaMPG ? 'up' : d <= -cfg.roleDeltaMPG ? 'down' : 'stabil';
    }
    return {
      athleteId: a.athleteId, name: a.name, team: a.teamAbbr, pos: grp,
      gp: a.gp, gs: a.gs, min: +M.toFixed(1), mpg: +mpg.toFixed(1),
      priorMPG, priorMin: base ? base.min : 0, hasPrior: usePrior,
      role, roleDeltaMPG: priorMPG != null ? +(mpg - priorMPG).toFixed(1) : null,
      score: wSum ? +(sSum / wSum).toFixed(3) : 0,
      ranked: M >= cfg.minMinutesForRanking,
      badges,
      stats: Object.fromEntries(Object.entries(stats).map(([s, v]) => [s, Object.fromEntries(Object.entries(v).map(([k, x]) => [k, x == null ? null : +(+x).toFixed(k === 'z' || k === 'deltaSD' || k === 'conf' ? 2 : 4)]))]))
    };
  }

  function buildPreseasonTable(rows, baseline, cfg) {
    cfg = Object.assign({}, CONFIG, cfg || {});
    const players = aggregate(rows).map(a => scorePlayer(a, baseline, cfg));
    const ranked = players.filter(p => p.ranked).sort((a, b) => b.score - a.score);
    ranked.forEach((p, i) => { p.rank = i + 1; p.pct = Math.round(100 * (1 - i / Math.max(1, ranked.length - 1))); });
    const tier = p => (p.pct >= 80 ? 'A' : p.pct >= 60 ? 'B' : p.pct >= 40 ? 'C' : p.pct >= 20 ? 'D' : 'E');
    ranked.forEach(p => { p.tier = tier(p); });
    players.sort((a, b) => (b.ranked - a.ranked) || (b.score - a.score));
    return {
      generated: new Date().toISOString(), configVersion: cfg.version, baselineSeason: baseline.season,
      games: new Set(rows.map(r => r.gameId)).size, players
    };
  }

  return { CONFIG, parseEspnSummary, aggregate, rates, scorePlayer, buildPreseasonTable, posGroup };
}));
