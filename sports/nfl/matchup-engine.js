// ============================================================
//  NFL Matchup-Engine — Win%-/Projektions-Logik (Punkte-Ligen)
// ============================================================
//  Zusammengeführt aus den bisherigen js/matchup-engine.js von BWP und DOPE
//  (29.09.2026). Basis ist die DOPE-Variante, weil sie die Lineup-Slots aus
//  den Liga-Settings nimmt statt sie fest zu verdrahten; die Formeln sind in
//  beiden Versionen identisch und hier UNVERÄNDERT übernommen, damit die
//  bereits gespeicherten Server-Snapshots (MATCHUP_SNAPSHOTS) vergleichbar
//  bleiben:
//    - Wochen-Baseline = Saison-Projection / 17
//    - Streuung je Position (POSITION_SIGMA)
//    - Mix-Modus: Shrinkage Richtung echter Wochenwerte, Gewicht g/(g+3)
//    - Team = Summe der Starter-Means, Sigma = Wurzel der Varianzsumme
//    - Win% über Normalverteilung der Punktedifferenz
//
//  Unterschied zu früher: KEINE globalen Daten-Konstanten mehr. Die Engine
//  wird pro Liga mit ihren Daten erzeugt:
//
//    const eng = MFHFB.nflMatchupEngine.create({
//      projections: PLAYER_PROJECTIONS, stats: PLAYER_SEASON_STATS,
//      rosters: ROSTERS_LIVE, slots: ['QB','RB','RB','WR','WR','TE','FLEX','DEF','K'],
//    });
//    eng.matchupWinPct(teamA, teamB, 'mix', 'current')
//
//  Läuft im Browser (MFHFB.nflMatchupEngine) und in Node (module.exports),
//  damit ein späteres Server-Snapshot-Script exakt dieselbe Rechnung nutzt.
// ============================================================

(function (root) {
  const SEASON_GAMES_FOR_BASELINE = 17;
  const POSITION_SIGMA = { QB: 7, RB: 7.5, WR: 8, TE: 5.5, K: 3.5, DST: 4, 'D/ST': 4 };
  const DEFAULT_MEAN = 8;

  // Slot-Typen (Sleeper-Bezeichnungen; ESPN-Ligen nutzen dieselben Keys in der Config)
  const SLOT_POS = {
    QB: ['QB'], RB: ['RB'], WR: ['WR'], TE: ['TE'], K: ['K'], DEF: ['DST', 'D/ST'], DST: ['DST', 'D/ST'],
    FLEX: ['RB', 'WR', 'TE'], WRRB_FLEX: ['RB', 'WR'], REC_FLEX: ['WR', 'TE'],
    SUPER_FLEX: ['QB', 'RB', 'WR', 'TE'],
  };
  const SLOT_LABEL = { DEF: 'DST', WRRB_FLEX: 'FLEX', REC_FLEX: 'FLEX', SUPER_FLEX: 'SFLEX' };
  const DEFAULT_SLOTS = ['QB', 'RB', 'RB', 'WR', 'WR', 'TE', 'FLEX', 'DEF', 'K'];

  const posKey = p => { const k = (p.pos || '').split('/')[0].toUpperCase(); return k === 'D' ? 'DST' : k; };

  // Standardnormalverteilung (Abramowitz-Stegun-Approximation der Fehlerfunktion)
  function erf(x) {
    const sign = x < 0 ? -1 : 1; x = Math.abs(x);
    const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741, a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
    const t = 1 / (1 + p * x);
    const y = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
    return sign * y;
  }
  const normalCdf = z => 0.5 * (1 + erf(z / Math.SQRT2));

  function create({ projections, stats, rosters, slots } = {}) {
    // Name-Indizes statt .find() pro Aufruf
    const projByName = new Map(((projections && projections.players) || []).map(p => [p.name, p.projectedPoints]));
    const statsByName = new Map(((stats && stats.players) || []).map(p => [p.name, p]));

    const starterSlots = (slots && slots.length ? slots : DEFAULT_SLOTS)
      .filter(s => SLOT_POS[s])
      .map(s => ({ key: s, label: SLOT_LABEL[s] || s, pos: SLOT_POS[s] }));
    const slotGroups = (() => {
      const agg = {};
      starterSlots.forEach(s => { (agg[s.label] = agg[s.label] || { slot: s.label, pos: s.pos, count: 0 }).count++; });
      return Object.values(agg);
    })();

    function historical(name) {
      const p = statsByName.get(name);
      if (!p || !p.gamesPlayed) return null;
      const vals = Object.values(p.weeklyPoints || {});
      if (!vals.length) return null;
      const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
      const variance = vals.length > 1 ? vals.reduce((s, v) => s + (v - mean) * (v - mean), 0) / (vals.length - 1) : null;
      return { mean, sigma: variance != null ? Math.sqrt(variance) : null, games: vals.length };
    }

    // {mean, sigma, source} für EINE Woche eines Spielers.
    // 'proj' = reine Projection, 'hist' = echte Wochenwerte (Fallback Projection),
    // 'mix' = Shrinkage-Blend (Standard).
    function playerWeek(name, pos, mode) {
      const pk = (pos || '').split('/')[0].toUpperCase();
      const sigmaBase = POSITION_SIGMA[pk] ?? POSITION_SIGMA[pos] ?? 6;
      const seasonProj = projByName.has(name) ? projByName.get(name) : null;
      const projMean = seasonProj != null ? seasonProj / SEASON_GAMES_FOR_BASELINE : null;
      const hist = historical(name);
      if (mode === 'hist') {
        if (hist) return { mean: hist.mean, sigma: hist.sigma ?? sigmaBase, source: 'hist' };
        return projMean != null ? { mean: projMean, sigma: sigmaBase, source: 'proj-fallback' } : { mean: DEFAULT_MEAN, sigma: sigmaBase, source: 'default' };
      }
      if (mode === 'proj') {
        return projMean != null ? { mean: projMean, sigma: sigmaBase, source: 'proj' } : { mean: DEFAULT_MEAN, sigma: sigmaBase, source: 'default' };
      }
      const baseMean = projMean != null ? projMean : DEFAULT_MEAN;
      if (!hist) return { mean: baseMean, sigma: sigmaBase, source: 'proj' };
      const w = hist.games / (hist.games + 3);
      return {
        mean: w * hist.mean + (1 - w) * baseMean,
        sigma: w * (hist.sigma ?? sigmaBase) + (1 - w) * sigmaBase,
        source: `mix (${hist.games} Wo.)`,
      };
    }

    function rosterOf(team) {
      const live = rosters ? rosters[team.id] : null;
      return (live || []).map(p => ({ name: p.name, pos: p.pos, nfl: p.nfl, isStarter: p.isStarter === true }));
    }

    // Greedy-Optimallineup: am wenigsten flexible Slots zuerst.
    function optimalLineup(players, mode) {
      const remaining = players.map(p => ({ ...p, ms: playerWeek(p.name, p.pos, mode) }));
      const order = ['K', 'DST', 'TE', 'QB', 'RB', 'WR', 'FLEX', 'SFLEX'];
      const chosen = [];
      order.forEach(name => {
        const def = slotGroups.find(s => s.slot === name);
        if (!def) return;
        for (let i = 0; i < def.count; i++) {
          const eligible = remaining.filter(p => def.pos.includes(posKey(p)) || def.pos.includes(p.pos));
          if (!eligible.length) continue;
          eligible.sort((a, b) => b.ms.mean - a.ms.mean);
          chosen.push(eligible[0]);
          remaining.splice(remaining.indexOf(eligible[0]), 1);
        }
      });
      return chosen;
    }

    function currentLineup(players, mode) {
      const starters = players.filter(p => p.isStarter === true);
      return starters.length ? starters.map(p => ({ ...p, ms: playerWeek(p.name, p.pos, mode) })) : null;
    }

    function teamWeekProjection(team, mode, lineupType) {
      const players = rosterOf(team);
      let starters = lineupType === 'current' ? currentLineup(players, mode) : null;
      let usedOptimal = false;
      if (!starters) { starters = optimalLineup(players, mode); usedOptimal = true; }
      const mean = starters.reduce((s, p) => s + p.ms.mean, 0);
      const variance = starters.reduce((s, p) => s + p.ms.sigma * p.ms.sigma, 0);
      return { mean, sigma: Math.sqrt(variance), starters, usedOptimal };
    }

    function matchupWinPct(teamA, teamB, mode, lineupType) {
      const a = teamWeekProjection(teamA, mode, lineupType);
      const b = teamWeekProjection(teamB, mode, lineupType);
      const diffSigma = Math.sqrt(a.sigma * a.sigma + b.sigma * b.sigma) || 1;
      const winA = normalCdf((a.mean - b.mean) / diffSigma);
      return { a, b, winA, winB: 1 - winA };
    }

    // Starter den Liga-Slots zuordnen (für Slot-für-Slot-Vergleich).
    function assignSlots(starters) {
      const pool = starters.slice().sort((a, b) => b.ms.mean - a.ms.mean);
      const isFixed = s => s.pos.length === 1 || s.key === 'DEF' || s.key === 'DST';
      const taken = new Set();
      const pick = slot => {
        const p = pool.find(x => !taken.has(x) && slot.pos.includes(posKey(x)));
        if (p) taken.add(p);
        return p || null;
      };
      const fixedRes = starterSlots.filter(isFixed).map(s => ({ slot: s.label, player: pick(s) }));
      const flexRes = starterSlots.filter(s => !isFixed(s)).map(s => ({ slot: s.label, player: pick(s) }));
      const out = [];
      starterSlots.forEach(s => {
        const src = isFixed(s) ? fixedRes : flexRes;
        const i = src.findIndex(r => r.slot === s.label && !r._used);
        if (i > -1) { src[i]._used = true; out.push({ slot: src[i].slot, player: src[i].player }); }
      });
      return out;
    }

    function actualWeekPoints(name, week) {
      const p = statsByName.get(name);
      if (!p || !p.weeklyPoints) return null;
      const v = p.weeklyPoints[week];
      return v != null ? v : null;
    }

    return {
      canProject: projByName.size > 0,
      starterCount: starterSlots.length,
      playerWeek, teamWeekProjection, matchupWinPct, assignSlots, actualWeekPoints,
    };
  }

  const api = { create, SEASON_GAMES_FOR_BASELINE, POSITION_SIGMA, DEFAULT_SLOTS, _normalCdf: normalCdf };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (root) { root.MFHFB = root.MFHFB || {}; root.MFHFB.nflMatchupEngine = api; }
})(typeof window !== 'undefined' ? window : null);
