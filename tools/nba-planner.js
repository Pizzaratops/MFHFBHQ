// ============================================================
//  Tool (NBA): Matchup-Planer — H2H-Prognose über 9 Kategorien
// ============================================================
//  #/<liga>/planner
//
//  Port von js/matchup-planner.js (TTHQ = Funkytown, Logik unverändert):
//  - Statistik je Spieler = w × Projection + (1 − w) × gespielte Stats
//    (Quelle wählbar: Reg. Saison / Preseason 25/26 / Off Season;
//    Standard = beste Kaderabdeckung).
//  - Spielplan echt aus ESPN (Liga-Matchups + NBA-Spielplan), per Proxy
//    geladen und im Browser gecacht (mfhfb:<liga>:planner-*).
//  - Aufstellung automatisch: je Spieltag die besten N nach gewichtetem
//    Z-Score (N = Startplätze aus den ESPN-Einstellungen). Erster
//    Handklick friert den Stand ein.
//  - Wahrscheinlichkeit je Kategorie: Φ(Differenz / √(sdA² + sdB²)),
//    Varianz der Wochensumme = Σ n·(cv·Schnitt)².
// ============================================================

(function () {
  const N = () => MFHFB.nba;

  const CATS = [
    { key: 'pts', label: 'PTS', type: 'count', cv: 0.35, dec: 0, z: 'pts' },
    { key: 'reb', label: 'REB', type: 'count', cv: 0.42, dec: 0, z: 'reb' },
    { key: 'ast', label: 'AST', type: 'count', cv: 0.45, dec: 0, z: 'ast' },
    { key: 'stl', label: 'STL', type: 'count', cv: 0.75, dec: 1, z: 'stl' },
    { key: 'blk', label: 'BLK', type: 'count', cv: 0.85, dec: 1, z: 'blk' },
    { key: 'tpm', label: '3PM', type: 'count', cv: 0.60, dec: 1, z: 'tpm' },
    { key: 'to', label: 'TO', type: 'count', cv: 0.55, dec: 1, z: 'to', invert: true, note: 'weniger ist besser' },
    { key: 'fgPct', label: 'FG%', type: 'pct', sd: 2.2, dec: 1, z: 'fgImpact' },
    { key: 'ftPct', label: 'FT%', type: 'pct', sd: 4.0, dec: 1, z: 'ftImpact' },
  ];
  const GRID_CATS = ['fgPct', 'ftPct', 'tpm', 'pts', 'reb', 'ast', 'stl', 'blk', 'to'].map(k => CATS.find(c => c.key === k));
  const DAYS = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
  const BENCH_SLOTS = { 12: true, 13: true };
  const BASIS = [[0, 'Nur Stats'], [25, '75 / 25'], [50, '50 / 50'], [75, '25 / 75'], [100, 'Nur Proj.']];

  const num = v => { const n = Number(v); return Number.isFinite(n) ? n : 0; };
  const shape = o => (o ? {
    min: num(o.min), pts: num(o.pts), reb: num(o.reb), ast: num(o.ast), stl: num(o.stl), blk: num(o.blk), tpm: num(o.tpm),
    to: num(o.to !== undefined ? o.to : o.tov), fgPct: num(o.fgPct), ftPct: num(o.ftPct),
  } : null);
  const meanSd = vals => {
    if (!vals.length) return { mean: 0, sd: 0 };
    const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
    return { mean, sd: Math.sqrt(vals.reduce((a, b) => a + (b - mean) ** 2, 0) / vals.length) };
  };

  // ---------- Zustand (pro Liga) ----------
  const season = ctx => (ctx.league.espn && ctx.league.espn.season) || null;
  function cached(ctx, k) {
    const o = ctx.store.getJSON(k, null);
    return o && o.season === season(ctx) ? o : null;
  }
  function prefs(ctx) {
    const p = cached(ctx, 'planner') || {};
    return { teamA: null, teamB: null, projWeight: 0.5, rankSourceId: null, period: null, auto: true, off: {}, ...p };
  }
  const savePrefs = (ctx, st) => ctx.store.setJSON('planner', { ...st, season: season(ctx) });
  const loadSched = ctx => ({ sched: cached(ctx, 'planner-sched'), nba: cached(ctx, 'planner-nba') });

  // Gespeicherte Auswahl + Spielplan → effektiver Zustand (laufende Woche
  // vorauswählen, wenn Team A steht und noch keine Woche gewählt ist)
  function resolve(ctx, S) {
    const st = prefs(ctx);
    const ids = new Set(N().leagueTeams(ctx.data).map(t => t.id));
    if (st.teamA && !ids.has(st.teamA)) st.teamA = null;
    if (st.teamB && !ids.has(st.teamB)) st.teamB = null;
    const mine = S.sched && st.teamA ? S.sched.matchups.filter(m => m.home === st.teamA || m.away === st.teamA).sort((a, b) => a.period - b.period) : [];
    if (mine.length && !st.period) {
      const cur = mine.find(m => m.period === S.sched.currentPeriod) || mine[0];
      st.period = cur.period; st.teamB = cur.home === st.teamA ? cur.away : cur.home;
    }
    return { st, mine };
  }

  // ---------- 1 — Statistik-Index ----------
  function allRostered(ctx) {
    const nba = N(), out = [];
    nba.leagueTeams(ctx.data, true).forEach(t => nba.roster(ctx.data, t.id).forEach(p => out.push({ ...p, teamId: t.id })));
    return out;
  }

  function rankSources(ctx) {
    const d = ctx.data, key = N().key, out = [];
    const month = d.LIVESCORES_AGGREGATE && d.LIVESCORES_AGGREGATE.month && d.LIVESCORES_AGGREGATE.month.nba;
    if (month) {
      const dates = Object.keys(month).sort(), last = dates[dates.length - 1], snap = last && month[last];
      if (snap && Array.isArray(snap.players) && snap.players.length) out.push({ id: 'reg', label: `Reguläre Saison, Monatsfenster bis ${last}`, short: 'Reg. Saison', players: snap.players, leagueAvg: snap.leagueAvg || { fg: 46, ft: 78 } });
    }
    if (Array.isArray(d.LAST_SEASON_STATS_2025_26) && d.LAST_SEASON_STATS_2025_26.length) out.push({ id: 'last', label: 'Preseason, komplette Saison 2025/26', short: 'Preseason', players: d.LAST_SEASON_STATS_2025_26, leagueAvg: { fg: 46.5, ft: 78 } });
    const O = d.OFFSEASON_RANKINGS;
    if (O && O.players && O.players.length) out.push({ id: 'off', label: `Off Season, ${O.windowStart} bis ${O.windowEnd}`, short: 'Off Season', players: O.players, leagueAvg: O.leagueAvg || { fg: 43, ft: 71 } });
    const rostered = new Set(allRostered(ctx).map(p => key(p.name)));
    const total = rostered.size || 1;
    out.forEach(s => {
      const keys = new Set(s.players.map(p => key(p.name)));
      let hit = 0; rostered.forEach(k => { if (keys.has(k)) hit++; });
      s.coverage = hit / total;
    });
    return out.sort((a, b) => b.coverage - a.coverage);
  }

  function buildIndex(ctx, st) {
    const key = N().key, W = N().MP_WEIGHTS;
    const srcs = rankSources(ctx);
    const rankSrc = (st.rankSourceId && srcs.find(s => s.id === st.rankSourceId)) || srcs[0] || null;
    const rankMap = new Map();
    if (rankSrc) rankSrc.players.forEach(p => { const k = key(p.name); if (k && !rankMap.has(k)) rankMap.set(k, shape(p)); });
    const projMap = new Map();
    const LP = ctx.data.LIVE_PROJECTIONS || {};
    Object.keys(LP).forEach(n => { const k = key(n); if (k && !projMap.has(k)) projMap.set(k, shape(LP[n])); });

    const w = st.projWeight;
    const leagueAvg = (rankSrc && rankSrc.leagueAvg) || { fg: 46, ft: 78 };
    const pool = allRostered(ctx).map(p => {
      const k = key(p.name), r = rankMap.get(k) || null, j = projMap.get(k) || null;
      if (!r && !j) return { ...p, key: k, stats: null, src: 'none' };
      if (r && j) { const s = {}; Object.keys(r).forEach(f => { s[f] = w * j[f] + (1 - w) * r[f]; }); return { ...p, key: k, stats: s, src: 'both' }; }
      return { ...p, key: k, stats: { ...(j || r) }, src: j ? 'proj' : 'rank' };
    });

    const withData = pool.filter(p => p.stats);
    const counting = ['pts', 'reb', 'ast', 'stl', 'blk', 'tpm', 'to'];
    const stat = {};
    counting.forEach(c => { stat[c] = meanSd(withData.map(p => p.stats[c])); });
    const fgI = p => (p.stats.fgPct - leagueAvg.fg) / 100 * p.stats.min;
    const ftI = p => (p.stats.ftPct - leagueAvg.ft) / 100 * p.stats.min;
    stat.fgImpact = meanSd(withData.map(fgI));
    stat.ftImpact = meanSd(withData.map(ftI));
    withData.forEach(p => {
      const z = {};
      counting.forEach(c => { z[c] = stat[c].sd ? (p.stats[c] - stat[c].mean) / stat[c].sd : 0; });
      z.to = -z.to;
      z.fgImpact = stat.fgImpact.sd ? (fgI(p) - stat.fgImpact.mean) / stat.fgImpact.sd : 0;
      z.ftImpact = stat.ftImpact.sd ? (ftI(p) - stat.ftImpact.mean) / stat.ftImpact.sd : 0;
      p.z = z;
      p.composite = Object.keys(W).reduce((s, c) => s + (z[c] || 0) * W[c], 0);
    });
    pool.filter(p => !p.stats).forEach(p => { p.z = null; p.composite = null; });
    const byKey = new Map();
    pool.forEach(p => { if (!byKey.has(p.key)) byKey.set(p.key, p); });
    const cnt = s => pool.filter(p => p.src === s).length;
    return {
      byKey, srcs, rankId: rankSrc ? rankSrc.id : null,
      rankLabel: rankSrc ? rankSrc.label : 'keine gespielten Stats verfügbar',
      counts: { both: cnt('both'), proj: cnt('proj'), rank: cnt('rank'), none: cnt('none'), total: pool.length },
    };
  }

  // ---------- 2 — Spielplan ----------
  function dateForSp(nbaS, sp) {
    if (!nbaS || !nbaS.spDate) return null;
    if (nbaS.spDate[sp]) return new Date(nbaS.spDate[sp]);
    const known = Object.keys(nbaS.spDate).map(Number);
    if (!known.length) return null;
    let ref = known[0];
    known.forEach(k => { if (Math.abs(k - sp) < Math.abs(ref - sp)) ref = k; });
    return new Date(new Date(nbaS.spDate[ref]).getTime() + (sp - ref) * 86400000);
  }
  function weekDays(S, st) {
    if (!S.sched || !S.nba || !st.period) return [];
    const sps = (S.sched.matchupPeriods && S.sched.matchupPeriods[st.period]) || [];
    return sps.slice().sort((a, b) => a - b).map(sp => {
      const d = dateForSp(S.nba, sp);
      return { sp, dayLabel: d ? DAYS[d.getDay()] : `T${sp}`, dateLabel: d ? `${d.getDate()}.${d.getMonth() + 1}.` : '' };
    });
  }
  function starterSlots(S) {
    const counts = S.sched && S.sched.lineupSlotCounts;
    if (!counts) return 10;
    let n = 0;
    Object.keys(counts).forEach(slot => { if (!BENCH_SLOTS[slot]) n += Number(counts[slot]) || 0; });
    return n > 0 ? n : 10;
  }
  const offKey = (tid, pk, sp) => `${tid}::${pk}::${sp}`;

  // ---------- 3 — Team-Auswertung ----------
  function autoOff(tid, players, days, slots) {
    const off = {};
    days.forEach(d => {
      players.filter(p => p.stats && p.games.some(g => g.sp === d.sp)).sort((a, b) => b.composite - a.composite)
        .slice(slots).forEach(p => { off[offKey(tid, p.key, d.sp)] = true; });
    });
    players.filter(p => !p.stats).forEach(p => p.games.forEach(g => { off[offKey(tid, p.key, g.sp)] = true; }));
    return off;
  }

  function breakdown(ctx, S, st, tid, index, days) {
    const nba = N();
    const slots = starterSlots(S);
    const players = nba.roster(ctx.data, tid).map(p => {
      const k = nba.key(p.name), hit = index.byKey.get(k);
      const sched = (S.nba && S.nba.byTeam[p.team]) || {};
      const games = days.filter(d => sched[d.sp]).map(d => ({ sp: d.sp, opp: sched[d.sp].opp, home: sched[d.sp].home, off: false }));
      return { name: p.name, key: k, pos: p.pos, nbaTeam: p.team, inj: p.inj || null, stats: hit ? hit.stats : null, z: hit ? hit.z : null, composite: hit ? hit.composite : null, src: hit ? hit.src : 'none', games };
    }).sort((a, b) => ((a.composite === null) !== (b.composite === null) ? (a.composite === null ? 1 : -1) : (b.composite || 0) - (a.composite || 0)));

    const offSet = st.auto ? autoOff(tid, players, days, slots) : st.off;
    players.forEach(p => {
      p.games.forEach(g => { g.off = !!offSet[offKey(tid, p.key, g.sp)]; });
      p.played = p.games.filter(g => !g.off).length;
    });
    const totals = {}, sds = {};
    CATS.filter(c => c.type === 'count').forEach(c => {
      let sum = 0, v = 0;
      players.forEach(p => { if (!p.stats || !p.played) return; const per = p.stats[c.key]; sum += per * p.played; v += p.played * (c.cv * per) ** 2; });
      totals[c.key] = sum; sds[c.key] = Math.sqrt(v);
    });
    let wSum = 0;
    players.forEach(p => { if (p.stats && p.played) wSum += p.stats.min * p.played; });
    ['fgPct', 'ftPct'].forEach(k => {
      totals[k] = wSum ? players.reduce((s, p) => (p.stats && p.played ? s + p.stats[k] * p.stats.min * p.played : s), 0) / wSum : 0;
      sds[k] = CATS.find(c => c.key === k).sd;
    });
    return {
      tid, players, totals, sds, slots,
      gameCount: players.reduce((s, p) => s + p.played, 0),
      scheduledCount: players.reduce((s, p) => s + p.games.length, 0),
      activeCount: players.filter(p => p.stats && p.played).length,
      missingCount: players.filter(p => !p.stats).length,
    };
  }

  // Normalverteilung, Abramowitz und Stegun 7.1.26
  function normCdf(x) {
    const s = x < 0 ? -1 : 1, z = Math.abs(x) / Math.SQRT2, t = 1 / (1 + 0.3275911 * z);
    const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-z * z);
    return 0.5 * (1 + s * y);
  }
  function compare(a, b) {
    const rows = CATS.map(c => {
      const va = a.totals[c.key], vb = b.totals[c.key];
      const sd = Math.sqrt(a.sds[c.key] ** 2 + b.sds[c.key] ** 2);
      let diff = va - vb; if (c.invert) diff = -diff;
      const prob = sd > 0 ? normCdf(diff / sd) : (diff > 0 ? 1 : diff < 0 ? 0 : 0.5);
      return { cat: c, va, vb, prob };
    });
    const expA = rows.reduce((s, r) => s + r.prob, 0);
    return { rows, expA, expB: rows.length - expA };
  }

  // ---------- 4 — ESPN-Abruf ----------
  async function fetchSchedule(ctx) {
    const L = ctx.league, E = L.espn, espn = MFHFB.espn, problems = [];
    let sched = null, nbaS = null;
    try {
      const data = await espn.fetchViaProxy(espn.fbaLeagueUrl(E.season, L.platformLeagueId, ['mMatchupScore', 'mSettings']));
      const matchups = [];
      (data.schedule || []).forEach(m => {
        const h = E.toTeam[m.home && m.home.teamId], a = E.toTeam[m.away && m.away.teamId];
        if (h && a) matchups.push({ period: m.matchupPeriodId, home: h, away: a });
      });
      if (!matchups.length) throw new Error('keine verwertbaren Matchups');
      const raw = (data.settings && data.settings.scheduleSettings && data.settings.scheduleSettings.matchupPeriods) || {};
      const matchupPeriods = {};
      Object.keys(raw).forEach(k => { matchupPeriods[k] = Array.isArray(raw[k]) ? raw[k].map(Number) : []; });
      sched = {
        season: E.season, ts: Date.now(), currentPeriod: (data.status && data.status.currentMatchupPeriod) || 1, matchups, matchupPeriods,
        lineupSlotCounts: (data.settings && data.settings.rosterSettings && data.settings.rosterSettings.lineupSlotCounts) || null,
      };
      ctx.store.setJSON('planner-sched', sched);
    } catch (err) { problems.push('Liga-Spielplan: ' + err.message); }
    try {
      const data = await espn.fetchViaProxy(espn.fbaProScheduleUrl(E.season));
      const PRO = N().ESPN_PRO, byTeam = {}, spDate = {};
      let games = 0;
      ((data.settings && data.settings.proTeams) || []).forEach(t => {
        if (!t || !t.id) return;
        const ab = PRO[t.id] || t.abbrev;
        if (!ab) return;
        const per = t.proGamesByScoringPeriod || {};
        Object.keys(per).forEach(sp => (per[sp] || []).forEach(g => {
          const home = g.homeProTeamId === t.id;
          (byTeam[ab] = byTeam[ab] || {})[sp] = { opp: PRO[home ? g.awayProTeamId : g.homeProTeamId] || '?', home };
          if (g.date && !spDate[sp]) spDate[sp] = new Date(g.date).toISOString();
          games++;
        }));
      });
      if (!games) throw new Error('ESPN liefert für diese Saison noch keine Spiele');
      nbaS = { season: E.season, ts: Date.now(), byTeam, spDate, gameCount: games };
      ctx.store.setJSON('planner-nba', nbaS);
    } catch (err) { problems.push('NBA-Spielplan: ' + err.message); }
    return { sched, nbaS, problems };
  }

  // ---------- 5 — Rendering ----------
  const fmtV = (c, v) => (c.type === 'pct' ? v.toFixed(1) + ' %' : v.toFixed(c.dec));

  function scoreboard(ctx, st, tA, tB, A, B, cmp, days) {
    const e = ctx.ui.esc, nba = N();
    const winsA = cmp.rows.filter(r => r.prob > 0.5).length;
    const verdict = Math.abs(cmp.expA - cmp.expB) < 0.7 ? 'Sehr eng' : `${cmp.expA > cmp.expB ? tA.name : tB.name} vorn`;
    const d0 = days[0], dN = days[days.length - 1];
    const span = d0.dateLabel && dN.dateLabel ? `${d0.dateLabel} bis ${dN.dateLabel}` : `${days.length} Spieltage`;
    const side = (t, T, score, right) => `<div class="mp-sb-team${right ? ' right' : ''} mp-tc" style="${nba.tcStyle(t)}">
        <a class="mp-sb-name" href="${ctx.href('teams', t.id)}">${e(t.name)}</a>
        <div class="mp-sb-owner">${e(t.owner || '')} · ${T.gameCount} Spiele</div>
        <div class="mp-sb-score">${score.toFixed(1)}</div></div>`;
    return `<div class="card mp-scoreboard">
      ${side(tA, A, cmp.expA)}
      <div class="mp-sb-mid"><div class="mp-sb-week">Woche ${st.period} · ${e(span)}</div>
        <div class="mp-sb-verdict">${e(verdict)}</div><div class="mp-sb-conf">Kategorien klar verteilt: ${winsA} zu ${9 - winsA}</div></div>
      ${side(tB, B, cmp.expB, true)}
    </div>`;
  }

  function catTable(ctx, tA, tB, cmp) {
    const e = ctx.ui.esc, nba = N();
    const rows = cmp.rows.map(r => {
      const c = r.cat, aWin = r.prob > 0.5;
      const total = Math.abs(r.va) + Math.abs(r.vb) || 1;
      let pctA = Math.abs(r.va) / total * 100;
      if (c.invert) pctA = 100 - pctA;
      const edge = Math.abs(r.prob - 0.5);
      const cls = edge > 0.25 ? 'strong' : edge > 0.1 ? 'lean' : 'toss';
      return `<tr>
        <td class="strong">${c.label}${c.note ? `<span class="mp-note">${c.note}</span>` : ''}</td>
        <td class="num mp-val ${aWin ? 'win' : 'lose'}">${fmtV(c, r.va)}</td>
        <td class="mp-barcell"><div class="mp-bar"><span class="mp-tc" style="${nba.tcStyle(tA)};width:${pctA.toFixed(1)}%"></span><span class="mp-tc" style="${nba.tcStyle(tB)};width:${(100 - pctA).toFixed(1)}%"></span></div></td>
        <td class="num mp-val ${aWin ? 'lose' : 'win'}">${fmtV(c, r.vb)}</td>
        <td class="num"><span class="mp-prob ${cls} ${r.prob >= 0.5 ? 'a' : 'b'}">${Math.round(r.prob * 100)} %</span></td>
      </tr>`;
    }).join('');
    return `<div class="table-wrap"><table class="table compact mp-cats"><thead><tr>
      <th>Kategorie</th><th class="num">${e(tA.short || tA.name)}</th><th class="mp-barcell">Verhältnis</th><th class="num">${e(tB.short || tB.name)}</th><th class="num">Chance ${e(tA.owner || 'A')}</th>
    </tr></thead><tbody>${rows}</tbody></table></div>`;
  }

  function grid(ctx, T, team, days) {
    const e = ctx.ui.esc, nba = N();
    const head = `<tr><th class="mp-g-name">Spieler</th><th class="num" title="aktive Spiele in dieser Woche">G</th>
      ${GRID_CATS.map(c => `<th class="num">${c.label}</th>`).join('')}
      ${days.map(d => `<th class="mp-g-day" data-day="${T.tid}|${d.sp}" title="ganzen Tag umschalten">${d.dayLabel}<small>${e(d.dateLabel)}</small></th>`).join('')}</tr>`;
    const srcTag = { proj: 'nur Proj.', rank: 'nur Stats', none: 'keine Daten' };
    const rows = T.players.map(p => {
      const stats = GRID_CATS.map(c => {
        if (!p.stats) return '<td class="num muted">—</td>';
        const v = p.stats[c.key];
        const txt = c.type === 'pct' ? (v / 100).toFixed(3).replace(/^0/, '') : v.toFixed(c.dec === 0 ? 1 : c.dec);
        return `<td class="num" style="${nba.heat(p.z ? p.z[c.z] : NaN)}">${txt}</td>`;
      }).join('');
      const cells = days.map(d => {
        const g = p.games.find(x => x.sp === d.sp);
        if (!g) return '<td class="mp-g-cell"></td>';
        return `<td class="mp-g-cell game${g.off ? ' off' : ''}" data-game="${T.tid}|${e(p.key)}|${d.sp}"><span class="mp-g-opp">${g.home ? '' : '@'}${e(g.opp)}</span><span class="mp-g-box">${g.off ? '' : '✓'}</span></td>`;
      }).join('');
      return `<tr class="${p.played ? '' : 'idle'}">
        <td class="mp-g-name" data-player="${T.tid}|${e(p.key)}" title="ganze Zeile umschalten"><span class="strong">${e(p.name)}</span>${nba.injury(p.inj)}
          <small>${e(p.pos || '')} · ${e(p.nbaTeam || '')}${srcTag[p.src] ? ' · ' + srcTag[p.src] : ''}</small></td>
        <td class="num strong">${p.played || ''}</td>${stats}${cells}</tr>`;
    }).join('');
    const perDay = days.map(d => T.players.reduce((s, p) => s + (p.games.some(g => g.sp === d.sp && !g.off) ? 1 : 0), 0));
    const foot = `<tr class="mp-g-foot"><td class="mp-g-name">Summe Woche</td><td class="num">${T.gameCount}</td>
      ${GRID_CATS.map(c => `<td class="num">${c.type === 'pct' ? T.totals[c.key].toFixed(1) + '%' : T.totals[c.key].toFixed(c.dec)}</td>`).join('')}
      ${perDay.map(n => `<td class="mp-g-cell${n > T.slots ? ' over' : ''}">${n || ''}</td>`).join('')}</tr>`;
    return `<section class="mp-gridsec">
      <h2 class="mp-grid-head mp-tc" style="${nba.tcStyle(team)}"><span>${e(team.name)}</span>
        <small>${T.gameCount} von ${T.scheduledCount} angesetzten Spielen aktiv · ${T.activeCount} Spieler im Einsatz${T.missingCount ? ` · ${T.missingCount} ohne Daten` : ''}</small></h2>
      <div class="table-wrap"><table class="table compact mp-grid"><thead>${head}</thead><tbody>${rows}</tbody><tfoot>${foot}</tfoot></table></div>
    </section>`;
  }

  function noSchedule(ctx, S) {
    const why = !S.sched && !S.nba ? 'Weder der Liga-Spielplan noch der NBA-Spielplan sind geladen.'
      : !S.nba ? 'Der Liga-Spielplan ist da, aber ESPN liefert für diese Saison noch keine NBA-Spiele.'
      : !S.sched ? 'Der NBA-Spielplan ist da, aber der Liga-Spielplan fehlt.'
      : 'Für die gewählte Woche sind keine Spieltage hinterlegt — oben eine Woche wählen.';
    return `<div class="card mp-empty"><div class="strong">Spielplan fehlt noch</div><p>${ctx.ui.esc(why)}</p>
      <p>Der Planer rechnet ausschließlich mit real angesetzten Spielen und bleibt ohne Spielplan deshalb bewusst leer, statt mit einem Pauschalwert eine Genauigkeit vorzutäuschen, die es nicht gibt. Ein Klick auf <strong>ESPN-Spielplan laden</strong> genügt.</p></div>`;
  }

  function explain(ctx, st, index, slots) {
    const c = index.counts, share = c.total ? c.both / c.total : 0;
    return `<details class="card mp-explain"><summary>Wie diese Zahlen entstehen</summary><div class="mp-explain-body">
      <p><strong>Stats</strong> kommen aus ${ctx.ui.esc(index.rankLabel)}, <strong>Projections</strong> aus dem Baseline- und Live-Blend. Beide werden pro Kategorie linear gemischt, aktuell ${Math.round((1 - st.projWeight) * 100)} zu ${Math.round(st.projWeight * 100)}.
      Von ${c.total} Kaderspielern haben ${c.both} beide Quellen, ${c.proj} nur eine Projection, ${c.rank} nur gespielte Stats und ${c.none} gar keine Daten.
      ${share < 0.6 ? `<br><span class="warn">Nur ${Math.round(share * 100)} % der Kader sind in beiden Quellen vertreten.</span> Für alle übrigen zählt automatisch die einzige vorhandene Quelle — die Basis-Wahl ändert bei ihnen nichts.` : ''}</p>
      <p>Jedes Häkchen im Raster ist ein real angesetztes NBA-Spiel aus dem ESPN-Spielplan. Die Kategoriesummen sind Pro-Spiel-Schnitt mal Zahl der aktiven Spiele. Die Wahrscheinlichkeit je Kategorie folgt aus dem Abstand beider Summen im Verhältnis zur erwarteten Streuung; Steals und Blocks schwanken bei kleinem Volumen deutlich stärker als Punkte.</p>
      <p>Aufstellen darfst Du pro Tag nur ${slots} Spieler. Deshalb füllt der Planer die Aufstellung standardmäßig selbst: je Spieltag die besten verfügbaren Spieler nach Z-Score, der Rest sitzt. Sobald Du das erste Spiel von Hand umschaltest, friert dieser Stand ein.</p>
      <p><span class="warn">Grenze:</span> Die Automatik kennt keine Positionsvorgaben. Prozentwerte sind nach Minuten × Spielen gewichtet, weil die Stat-Quellen keine Wurfversuche mitliefern.</p>
    </div></details>`;
  }

  function render(ctx) {
    const { data, ui, league } = ctx, e = ui.esc, nba = N();
    nba.init(data);
    if (!league.espn) return ui.empty('Kein ESPN-Bezug', 'Für diese Liga ist keine ESPN-Liga hinterlegt.', '⚔️');
    const S = loadSched(ctx);
    const { st, mine } = resolve(ctx, S);
    const teams = nba.leagueTeams(data);
    const tmap = new Map(teams.map(t => [t.id, t]));

    const index = buildIndex(ctx, st);
    const teamOpts = cur => '<option value="">— Team wählen —</option>' + teams.map(t => `<option value="${t.id}"${cur === t.id ? ' selected' : ''}>${e(t.name)} · ${e(t.owner || '')}</option>`).join('');
    const weekOpts = !S.sched ? '<option value="">— Spielplan noch nicht geladen —</option>'
      : !st.teamA ? '<option value="">— erst Dein Team wählen —</option>'
      : !mine.length ? '<option value="">— keine Matchups für dieses Team —</option>'
      : '<option value="">— Woche wählen —</option>' + mine.map(m => {
        const opp = m.home === st.teamA ? m.away : m.home, t = tmap.get(opp);
        return `<option value="${m.period}|${opp}"${st.period === m.period && st.teamB === opp ? ' selected' : ''}>Woche ${m.period} vs ${e(t ? t.name : 'Team ' + opp)}${m.period === S.sched.currentPeriod ? ' ●' : ''}</option>`;
      }).join('');
    const cur = Math.round(st.projWeight * 100);
    const age = S.sched ? Math.round((Date.now() - S.sched.ts) / 3600000) : null;
    const status = S.sched && S.nba ? `Spielplan im Browser gespeichert (vor ${age < 1 ? '<1' : age} h geladen) · aktuell Woche ${S.sched.currentPeriod}`
      : 'Holt Liga- und NBA-Spielplan von ESPN. Danach lässt sich jede Woche der Saison durchrechnen.';

    const controls = `
      <div class="card mp-controls">
        <div class="mp-row">
          <label class="mp-field"><span>Dein Team</span><select class="tr-select" data-team="a">${teamOpts(st.teamA)}</select></label>
          <label class="mp-field"><span>Gegner</span><select class="tr-select" data-team="b">${teamOpts(st.teamB)}</select></label>
          <label class="mp-field"><span>Woche</span><select class="tr-select" data-week${S.sched && mine.length ? '' : ' disabled'}>${weekOpts}</select></label>
        </div>
        <div class="mp-row">
          <div class="mp-field"><span>Basis (Stats / Projections)</span><div class="seg" role="group">${BASIS.map(([p, l]) => `<button type="button" class="seg-btn${cur === p ? ' active' : ''}" data-basis="${p}">${l}</button>`).join('')}</div></div>
          <label class="mp-field"><span>Stat-Quelle</span><select class="tr-select" data-src${index.srcs.length ? '' : ' disabled'}>${index.srcs.length ? index.srcs.map((s, i) => `<option value="${s.id}"${index.rankId === s.id ? ' selected' : ''}>${e(s.short)} · deckt ${Math.round(s.coverage * 100)} % der Kader${i === 0 ? ' · Standard' : ''}</option>`).join('') : '<option>— keine gespielten Stats —</option>'}</select></label>
        </div>
        <div class="mp-row mp-schedrow"><button type="button" class="seg-btn mp-btn" data-fetch>↻ ESPN-Spielplan laden</button><span class="mp-status" data-status>${status}</span></div>
      </div>`;

    let body;
    if (!st.teamA || !st.teamB) body = `<div class="card mp-empty">Wähle oben Dein Team und den Gegner — oder lade den ESPN-Spielplan und such Dir eine Woche aus.</div>`;
    else if (st.teamA === st.teamB) body = `<div class="card mp-empty">Beide Seiten zeigen auf dasselbe Team. Wähle einen anderen Gegner.</div>`;
    else {
      const days = weekDays(S, st);
      if (!days.length) body = noSchedule(ctx, S);
      else {
        const tA = tmap.get(st.teamA), tB = tmap.get(st.teamB);
        const A = breakdown(ctx, S, st, st.teamA, index, days), B = breakdown(ctx, S, st, st.teamB, index, days);
        const cmp = compare(A, B);
        body = `${scoreboard(ctx, st, tA, tB, A, B, cmp, days)}
          ${catTable(ctx, tA, tB, cmp)}
          <div class="mp-gridtools"><span class="muted">${st.auto ? `Aufstellung automatisch: je Spieltag die besten ${A.slots} nach Z-Score.` : 'Eigene Aufstellung aktiv.'} Klick auf ein Spiel schaltet es um, auf einen Namen oder Wochentag die ganze Zeile/Spalte.</span>
            <span class="mp-gridbtns"><button type="button" class="seg-btn mp-btn${st.auto ? ' primary' : ''}" data-auto>✨ Automatisch füllen</button><button type="button" class="seg-btn mp-btn" data-all title="Auch Spiele über die Startplätze hinaus mitzählen">Alle Spiele an</button></span></div>
          ${grid(ctx, A, tA, days)}${grid(ctx, B, tB, days)}
          ${explain(ctx, st, index, A.slots)}`;
      }
    }
    return `<div class="page-head"><h1 class="page-title display">⚔️ Matchup-Planer</h1>
        <div class="page-sub">H2H-Prognose über alle 9 Kategorien — mit echtem ESPN-Spielplan und automatischer Aufstellung</div></div>
      ${controls}<div class="mp-result">${body}</div>`;
  }

  // ---------- 6 — Interaktion ----------
  function mount(root, ctx) {
    const get = () => resolve(ctx, loadSched(ctx)).st;
    const put = patch => { savePrefs(ctx, { ...get(), ...patch }); ctx.refresh(); };

    // Aktuelle Aufstellung (auto) einfrieren, bevor von Hand geändert wird
    function frozen(st) {
      if (!st.auto) return { ...st.off };
      const S = loadSched(ctx);
      const days = weekDays(S, st), index = buildIndex(ctx, st), off = {};
      [st.teamA, st.teamB].forEach(tid => { if (tid) Object.assign(off, autoOff(tid, breakdown(ctx, S, { ...st, auto: true }, tid, index, days).players, days, starterSlots(S))); });
      return off;
    }
    function teamState(st, tid) {
      const S = loadSched(ctx);
      const days = weekDays(S, st);
      return { S, days, T: breakdown(ctx, S, st, tid, buildIndex(ctx, st), days) };
    }

    root.querySelectorAll('[data-team]').forEach(sel => sel.addEventListener('change', () => {
      const v = sel.value ? parseInt(sel.value, 10) : null;
      put(sel.dataset.team === 'a' ? { teamA: v, period: null, off: {}, auto: true } : { teamB: v });
    }));
    const wk = root.querySelector('[data-week]');
    if (wk) wk.addEventListener('change', () => {
      if (!wk.value) return;
      const [p, o] = wk.value.split('|').map(Number);
      put({ period: p, teamB: o, off: {}, auto: true });
    });
    root.querySelectorAll('[data-basis]').forEach(b => b.addEventListener('click', () => put({ projWeight: Number(b.dataset.basis) / 100 })));
    const src = root.querySelector('[data-src]');
    if (src) src.addEventListener('change', () => put({ rankSourceId: src.value || null }));
    const auto = root.querySelector('[data-auto]');
    if (auto) auto.addEventListener('click', () => put({ auto: true, off: {} }));
    const all = root.querySelector('[data-all]');
    if (all) all.addEventListener('click', () => put({ auto: false, off: {} }));

    const fetchBtn = root.querySelector('[data-fetch]');
    if (fetchBtn) fetchBtn.addEventListener('click', async () => {
      const say = t => { const s = root.querySelector('[data-status]'); if (s) s.textContent = t; };
      fetchBtn.disabled = true; fetchBtn.textContent = '⏳ Lade …'; say('Frage ESPN nach Liga- und NBA-Spielplan …');
      const r = await fetchSchedule(ctx);
      if (r.problems.length && !(r.sched && r.nbaS)) { fetchBtn.disabled = false; fetchBtn.textContent = '↻ ESPN-Spielplan laden'; say('Nicht alles geladen: ' + r.problems.join(' · ')); return; }
      savePrefs(ctx, { ...get(), period: null, off: {}, auto: true });
      ctx.refresh();
    });

    root.querySelector('.mp-result').addEventListener('click', ev => {
      const cell = ev.target.closest('[data-game],[data-player],[data-day]');
      if (!cell) return;
      const st = get();
      const off = frozen(st);
      if (cell.dataset.game) {
        const [tid, pk, sp] = cell.dataset.game.split('|');
        const k = offKey(tid, pk, sp);
        if (off[k]) delete off[k]; else off[k] = true;
      } else if (cell.dataset.player) {
        const [tid, pk] = cell.dataset.player.split('|');
        const { T } = teamState(st, Number(tid));
        const p = T.players.find(x => x.key === pk);
        if (!p || !p.games.length) return;
        const anyOn = p.games.some(g => !off[offKey(tid, pk, g.sp)]);
        p.games.forEach(g => { const k = offKey(tid, pk, g.sp); if (anyOn) off[k] = true; else delete off[k]; });
      } else {
        const [tid, spS] = cell.dataset.day.split('|'), sp = Number(spS);
        const { S, days, T } = teamState(st, Number(tid));
        const anyOn = T.players.some(p => p.games.some(g => g.sp === sp && !off[offKey(tid, p.key, sp)]));
        const autoDay = anyOn ? null : autoOff(tid, T.players, days.filter(d => d.sp === sp), starterSlots(S));
        T.players.forEach(p => p.games.forEach(g => {
          if (g.sp !== sp) return;
          const k = offKey(tid, p.key, sp);
          if (anyOn || autoDay[k]) off[k] = true; else delete off[k];
        }));
      }
      put({ auto: false, off });
    });
  }

  MFHFB.pages.register({
    id: 'planner', section: 'matchups', label: 'Matchup-Planer', icon: '⚔️', applies: { sport: ['nba'] },
    data: ['teams', '?rosters-live', '?sport:aliases', '?live-projections', '?sport:livescores-aggregate', '?sport:last-season-stats-2025-26', '?sport:offseason-rankings'],
    title: () => 'Matchup-Planer', render, mount,
  });
})();
