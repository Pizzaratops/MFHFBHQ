// ============================================================
//  Tools (NBA, Points-Ligen): Banana Boat Crew & Co. (seit 26.10.2026)
// ============================================================
//  Eigene Seiten für H2H-Points-Ligen (ESPN), weil die 9-Cat-Tools mit
//  Kategorie-Z-Werten rechnen. Alles in Fantasy-Punkten (FP) mit dem
//  echten Liga-Scoring (LEAGUE_INFO.scoring).
//
//  Daten (leagues/<liga>/data/, bbc-sync.yml):
//    TEAMS, ROSTERS_LIVE, LEAGUE_INFO (Matchups mit Tagespunkten, Wochen → Spieltage),
//    POINTS (FP je Spieler: Saison, Form, Projektion), NBA_PRO_SCHEDULE, TRANSACTIONS
//  Sportweit (optional): PBP_INSIGHTS (Pace/Gegner/B2B, Rollen, Profiteure).
//
//  Seiten: ptshome Übersicht · ptsmatch Matchups · ptsplanner Matchup-Planer ·
//  ptsstand Tabelle · ptsteams Teams & Kader · ptswaiver Waiver & Streaming ·
//  ptsplayers Spieler-Rankings · ptstrade Trade Analyzer · ptstx Transaktionen
// ============================================================

(function () {
  const N = () => MFHFB.nba;
  const A = { sport: ['nba'], scoring: ['points'] };
  const DATA = ['teams', '?rosters-live', 'league-info', '?players', '?points', '?nba-schedule', '?transactions', '?sport:aliases', '?sport:pbp-insights'];
  const SLOTS = ['PG', 'SG', 'SF', 'PF', 'C', 'UTIL'];
  const CV = 0.38; // Streuung eines Spieler-Spiels in FP (Variationskoeffizient)
  const DAYS = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
  const f1 = v => (v == null || !Number.isFinite(v) ? '—' : Number(v).toFixed(1).replace('.', ','));
  const f0 = v => (v == null || !Number.isFinite(v) ? '—' : Math.round(v).toLocaleString('de-DE'));
  const sg = (v, d = 1) => (v == null || !Number.isFinite(v) ? '—' : (v > 0 ? '+' : v < 0 ? '−' : '±') + Math.abs(v).toFixed(d).replace('.', ','));
  const pctTxt = v => Math.round(v * 100) + ' %';

  // ---------- Datenmodell ----------
  let cache = { data: null, M: null };
  function model(ctx) {
    const data = ctx.data, nba = N().init(data);
    if (cache.data === data) return cache.M;
    const I = data.LEAGUE_INFO || {}, P = (data.POINTS && data.POINTS.players) || {};
    const pts = new Map(Object.entries(P).map(([n, v]) => [nba.key(n), { name: n, ...v }]));
    const teams = nba.leagueTeams(data, true);
    const tById = new Map(teams.map(t => [t.id, t]));
    const owner = nba.ownerIndex(data);
    const roster = tid => nba.roster(data, tid).map(p => ({ ...p, s: pts.get(nba.key(p.name)) || {} }));
    const sched = data.NBA_PRO_SCHEDULE || null;
    const day0 = I.day0 ? new Date(I.day0 + 'T12:00:00Z') : null;
    const dateOf = sp => (day0 ? new Date(day0.getTime() + (sp - (I.firstSp || 1)) * 864e5) : null);
    const dayLabel = sp => { const d = dateOf(sp); return d ? `${DAYS[d.getUTCDay()]} ${d.getUTCDate()}.${d.getUTCMonth() + 1}.` : `T${sp}`; };
    const periodOf = sp => Number(Object.keys(I.periods || {}).find(p => (I.periods[p] || []).includes(sp))) || null;
    const value = s => (s.proj != null ? s.proj : s.fpg != null ? s.fpg : 0);
    // Pbp-Faktoren je Spiel (Pace × was der Gegner zulässt, FP-gewichtet; B2B-Pausen)
    const PB = data.PBP_INSIGHTS || null;
    const pbPl = PB ? new Map(Object.entries(PB.players || {}).map(([n, v]) => [nba.key(n), v])) : new Map();
    const SC = I.scoring || {};
    function gameFactor(p, sp) {
      if (!PB || !sched) return { w: 1, f: 1 };
      const tm = nba.canonTeam(p.team), g = sched.byTeam[tm] && sched.byTeam[tm][sp];
      if (!g) return { w: 1, f: 1 };
      const T = PB.teams || {}, me = T[tm], op = T[nba.canonTeam(g[0])];
      let f = 1;
      if (me && op) {
        const cat = p.s.cat || {};
        let num = 0, den = 0;
        ['pts', 'reb', 'ast', 'stl', 'blk', 'tpm', 'tov'].forEach(c => { const w = (SC[c] || 0) * (cat[c] || 0); num += w * ((op.allowF && op.allowF[c]) || 1); den += w; });
        f = ((me.paceF || 1) + (op.paceF || 1)) / 2 * (den ? num / den : 1);
      }
      let w = 1;
      if (!p.inj && sched.byTeam[tm][sp - 1]) {
        const pi = pbPl.get(nba.key(p.name)), lg = (PB.meta && PB.meta.b2bLeague) || {};
        const x = pi && pi.b2b ? pi.b2b.extra : ((p.s.min || 0) >= 24 && lg.b2b != null ? lg.b2b - lg.reg : 0);
        w = 1 - Math.max(0, Math.min(0.6, x || 0));
      }
      return { w, f };
    }
    const plays = (p, sp) => !!(sched && sched.byTeam[nba.canonTeam(p.team)] && sched.byTeam[nba.canonTeam(p.team)][sp]);
    const M = { I, P, pts, teams, tById, owner, roster, sched, dateOf, dayLabel, periodOf, value, gameFactor, plays, PB, SC };
    cache = { data, M };
    return M;
  }
  const myTeamId = ctx => { const v = ctx.store.getJSON('myteam', null); return v || ctx.league.myTeam || null; };
  const teamCell = (ctx, t, short) => (t ? `<a class="pt-team" href="${ctx.href('ptsteams', t.id)}" style="${N().tcStyle(t)}"><span class="nba-tdot"></span>${ctx.ui.esc(short ? (t.abbrev || t.name) : t.name)}</a>` : '—');
  const ownerChip = (ctx, M, name) => { const t = M.owner(name); return t ? `<span class="pi-own" title="${ctx.ui.esc(t.name)}">${ctx.ui.esc(t.abbrev || N().initials(t.name))}</span>` : '<span class="nba-tag fa">frei</span>'; };

  // ---------- Aufstellung: beste 6 je Tag (DP über Slot-Masken) ----------
  const canSlot = (pos, slot) => slot === 'UTIL' || String(pos || '').split('/').includes(slot);
  function bestLineup(cands) { // cands: [{pos, v}] → {sum, chosen:Set(index)}
    const n = cands.length, S = SLOTS.length, FULL = (1 << S) - 1;
    let dp = new Map([[0, { v: 0, pick: [] }]]);
    cands.forEach((c, i) => {
      const nx = new Map(dp);
      dp.forEach((st, mask) => {
        for (let s = 0; s < S; s++) {
          if (mask & (1 << s) || !canSlot(c.pos, SLOTS[s])) continue;
          const m2 = mask | (1 << s), v = st.v + c.v, cur = nx.get(m2);
          if (!cur || v > cur.v) nx.set(m2, { v, pick: st.pick.concat([[i, SLOTS[s]]]) });
        }
      });
      dp = nx;
    });
    let best = { v: 0, pick: [] };
    dp.forEach(st => { if (st.v > best.v) best = st; });
    void FULL; void n;
    return best;
  }
  // Erwartung einer Mannschaft über Spieltage (ohne bereits gespielte Punkte)
  function teamWeek(M, players, sps, opts = {}) {
    let mean = 0, varSum = 0;
    const perDay = [], use = new Map();
    sps.forEach(sp => {
      // Verletzte: in der laufenden Woche raus; mit opts.outLater (Trade) ab Tag 8 zur Hälfte (Rückkehr ungewiss)
      const later = opts.outLater && sp >= (M.I.latestSp || 0) + 7;
      const cands = players.filter(p => (later || (p.slot !== 'IR' && p.inj !== 'OUT' && p.inj !== 'SUSP')) && M.plays(p, sp)).map(p => {
        const gf = opts.noFx ? { w: 1, f: 1 } : M.gameFactor(p, sp);
        const hurt = p.slot === 'IR' || p.inj === 'OUT' || p.inj === 'SUSP';
        return { p, pos: p.pos, v: M.value(p.s) * gf.f * gf.w * (hurt ? 0.5 : 1) };
      });
      const best = bestLineup(cands);
      const day = { sp, v: best.v, starters: best.pick.map(([i, slot]) => ({ p: cands[i].p, slot, v: cands[i].v })), playing: cands.length };
      best.pick.forEach(([i]) => { const c = cands[i]; varSum += (CV * c.v) ** 2; use.set(c.p.name, (use.get(c.p.name) || 0) + 1); });
      cands.forEach(c => { if (!best.pick.some(([i]) => cands[i] === c)) day.benched = (day.benched || []).concat([c.p.name]); });
      mean += best.v; perDay.push(day);
    });
    return { mean, sd: Math.sqrt(varSum), perDay, use };
  }
  const phi = x => { const t = 1 / (1 + 0.2316419 * Math.abs(x)), d = 0.3989423 * Math.exp(-x * x / 2), p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274)))); return x > 0 ? 1 - p : p; };

  // Projektion eines Matchups: bisher erzielt + Rest der Woche
  function projectMatchup(M, m) {
    const sps = (M.I.periods || {})[m.p] || [];
    const today = M.I.latestSp || 0;
    const side = (tid, scored, byDay) => {
      if (tid == null) return null;
      const players = M.roster(tid);
      const rest = sps.filter(sp => sp > today);
      const W = teamWeek(M, players, rest);
      let todayExp = 0;
      if (sps.includes(today)) { const T = teamWeek(M, players, [today]); todayExp = Math.max(0, T.mean - (byDay[today] || 0)); W.sd = Math.sqrt(W.sd ** 2 + (todayExp > 0 ? T.sd ** 2 : 0)); }
      // + Modell-Unsicherheit (Projektionen daneben, Minuten, Ausfälle): 8 % des erwarteten Rests
      const restMean = W.mean + todayExp;
      return { scored, rest: restMean, final: scored + restMean, sd: Math.sqrt(W.sd ** 2 + (0.08 * restMean) ** 2) };
    };
    const done = m.winner && m.winner !== 'UNDECIDED';
    const h = side(m.home, m.hp || 0, m.hDay || {}), a = side(m.away, m.ap || 0, m.aDay || {});
    if (!h || !a) return { h, a, pH: null, done };
    const pH = done ? (m.winner === 'HOME' ? 1 : m.winner === 'AWAY' ? 0 : 0.5) : phi((h.final - a.final) / Math.max(1, Math.sqrt(h.sd ** 2 + a.sd ** 2)));
    return { h, a, pH, done };
  }
  const weekRange = (M, p) => { const sps = (M.I.periods || {})[p] || []; if (!sps.length) return ''; const a = M.dateOf(sps[0]), b = M.dateOf(sps[sps.length - 1]); return a && b ? `${a.getUTCDate()}.${a.getUTCMonth() + 1}. – ${b.getUTCDate()}.${b.getUTCMonth() + 1}.` : ''; };
  const weekName = (M, p) => (p > (M.I.regularPeriods || 99) ? `Playoff-Runde ${p - M.I.regularPeriods}` : `Woche ${p}`);

  // ---------- Tabelle (aus allen entschiedenen Matchups) ----------
  function standings(M) {
    const rows = new Map(M.teams.map(t => [t.id, { t, w: 0, l: 0, tie: 0, pf: 0, pa: 0, ap_w: 0, ap_g: 0, weeks: [], form: [] }]));
    const reg = (M.I.matchups || []).filter(m => !m.playoff && m.winner && m.winner !== 'UNDECIDED');
    const byP = {};
    reg.forEach(m => {
      [[m.home, m.hp, m.ap, 'HOME'], [m.away, m.ap, m.hp, 'AWAY']].forEach(([id, f, a, side]) => {
        const r = rows.get(id); if (!r) return;
        r.pf += f; r.pa += a; r.weeks.push(f);
        if (m.winner === side) { r.w++; r.form.push('W'); } else if (m.winner === 'TIE') { r.tie++; r.form.push('T'); } else { r.l++; r.form.push('L'); }
        (byP[m.p] = byP[m.p] || []).push([id, f]);
      });
    });
    Object.values(byP).forEach(list => list.forEach(([id, f]) => { const r = rows.get(id); list.forEach(([o, g]) => { if (o === id) return; r.ap_g++; if (f > g) r.ap_w++; else if (f === g) r.ap_w += 0.5; }); }));
    // Liga spielt zusätzlich gegen den Wochen-Median (ESPN-Option): obere Hälfte = Sieg
    if (M.I.median) Object.values(byP).forEach(list => {
      const sorted = list.map(x => x[1]).sort((a, b) => a - b), n = sorted.length;
      const med = n % 2 ? sorted[(n - 1) / 2] : (sorted[n / 2 - 1] + sorted[n / 2]) / 2;
      list.forEach(([id, f]) => { const r = rows.get(id); if (f > med) { r.w++; r.mw = (r.mw || 0) + 1; } else if (f < med) { r.l++; r.ml = (r.ml || 0) + 1; } else { r.tie++; } });
    });
    const out = [...rows.values()].map(r => ({ ...r, g: r.w + r.l + r.tie, pct: (r.w + 0.5 * r.tie) / Math.max(1, r.w + r.l + r.tie), apPct: r.ap_g ? r.ap_w / r.ap_g : null }));
    out.sort((a, b) => b.pct - a.pct || b.pf - a.pf);
    const lead = out[0] || { w: 0, l: 0 };
    out.forEach((r, i) => { r.rank = i + 1; r.gb = ((lead.w - r.w) + (r.l - lead.l)) / 2; r.hw = r.form.filter(x => x === 'W').length; r.luck = r.apPct != null ? r.hw - r.apPct * r.form.length : null; });
    return out;
  }

  // ======================================================================
  //  Seiten
  // ======================================================================
  function head(ctx, icon, title, sub) {
    return `<div class="page-head"><h1 class="page-title display">${icon} ${title}</h1>${sub ? `<div class="page-sub">${sub}</div>` : ''}</div>`;
  }
  function noData(ctx) { return ctx.ui.empty('Noch keine Liga-Daten', 'Der Liga-Sync (bbc-sync) läuft halbstündlich – gleich nochmal vorbeischauen.', '🍌'); }

  // ---------- Übersicht ----------
  function home(ctx) {
    const M = model(ctx), e = ctx.ui.esc, I = M.I;
    if (!I.matchups) return noData(ctx);
    const cur = I.currentPeriod, my = myTeamId(ctx);
    const week = (I.matchups || []).filter(m => m.p === cur);
    const cards = week.map(m => matchCard(ctx, M, m, my)).join('');
    const st = standings(M).slice(0, M.teams.length);
    const P = [...M.pts.values()].filter(s => s.l7 != null && s.l7g >= 2).sort((a, b) => b.l7 - a.l7).slice(0, 8);
    const tx = (ctx.data.TRANSACTIONS || []).slice(0, 8);
    const myT = M.tById.get(my);
    const myRow = st.find(r => r.t.id === my);
    return `${head(ctx, '🍌', e(I.name || ctx.league.name), `H2H Points · Redraft · ${M.teams.length} Teams · ${weekName(M, cur)} (${weekRange(M, cur)})`)}
      ${myT && myRow ? `<div class="pt-mine" style="${N().tcStyle(myT)}"><div><div class="pt-mine-name">${e(myT.name)}</div><div class="muted small">${e(myT.owner || '')}</div></div>
        <div class="pt-mine-stats"><span><b>${myRow.w}-${myRow.l}${myRow.tie ? '-' + myRow.tie : ''}</b><small>Bilanz</small></span><span><b>${myRow.rank}.</b><small>Platz</small></span><span><b>${f0(myRow.pf)}</b><small>Punkte</small></span><span><b>${myRow.apPct != null ? pctTxt(myRow.apPct) : '—'}</b><small title="Siegquote, wenn du jede Woche gegen alle gespielt hättest">All-Play</small></span></div></div>` : ''}
      <h2 class="pt-h2">⚔️ ${weekName(M, cur)} live</h2><div class="pt-cards">${cards || ctx.ui.empty('Keine Matchups', '', '⚔️')}</div>
      <div class="pt-two">
        <section><h2 class="pt-h2">📈 Tabelle</h2>${standTable(ctx, M, st, true)}</section>
        <section><h2 class="pt-h2">🔥 Top letzte 7 Tage</h2><div class="table-wrap"><table class="table compact"><thead><tr><th>Spieler</th><th>Team</th><th class="num">FP/Sp.</th><th class="num">Sp.</th></tr></thead><tbody>
          ${P.map(s => `<tr><td class="strong">${e(s.name)} <span class="muted small">${e(s.team || '')}</span></td><td>${ownerChip(ctx, M, s.name)}</td><td class="num strong">${f1(s.l7)}</td><td class="num">${s.l7g}</td></tr>`).join('')}</tbody></table></div>
          ${tx.length ? `<h2 class="pt-h2">🔁 Letzte Transaktionen</h2>${txList(ctx, M, tx)}` : ''}</section>
      </div>`;
  }
  function matchCard(ctx, M, m, my) {
    const e = ctx.ui.esc, h = M.tById.get(m.home), a = M.tById.get(m.away);
    const pr = projectMatchup(M, m);
    const live = !pr.done;
    const side = (t, score, proj, p, win) => `<div class="pt-side${win ? ' win' : ''}" style="${N().tcStyle(t)}">
      <span class="pt-side-name">${e(t ? t.name : 'Bye')}</span>
      <div class="pt-side-score">${f1(score)}</div>
      ${live && proj ? `<div class="pt-side-proj" title="Erwartetes Endergebnis (Projektion × beste Aufstellung je Tag)">→ ${f0(proj.final)}</div>` : ''}
      ${p != null && live ? `<div class="pt-side-p">${pctTxt(p)}</div>` : ''}</div>`;
    return `<a class="pt-card${m.home === my || m.away === my ? ' mine' : ''}" href="${ctx.href('ptsmatch', m.p, m.id)}">
      ${side(h, m.hp, pr.h, pr.pH, pr.done && m.winner === 'HOME')}<div class="pt-vs">vs</div>${side(a, m.ap, pr.a, pr.pH != null ? 1 - pr.pH : null, pr.done && m.winner === 'AWAY')}</a>`;
  }
  function txList(ctx, M, tx) {
    const e = ctx.ui.esc;
    return `<ul class="pt-tx">${tx.map(t => {
      const d = new Date(t.date); const tm = M.tById.get(t.team);
      const items = t.items.map(i => `${i.type === 'ADD' ? '<span class="up">+</span>' : i.type === 'DROP' ? '<span class="down">−</span>' : '⇄'} ${e(i.player)}${i.type === 'TRADE' ? ` <span class="muted">→ ${e((M.tById.get(i.to) || {}).abbrev || '')}</span>` : ''}`).join(' · ');
      return `<li><span class="muted small">${d.getDate()}.${d.getMonth() + 1}.</span> <b>${e(tm ? tm.abbrev || tm.name : '')}</b> ${t.type === 'TRADE' ? '<span class="nba-tag rk">TRADE</span> ' : ''}${items}</li>`;
    }).join('')}</ul>`;
  }

  // ---------- Matchups ----------
  function matchups(ctx) {
    const M = model(ctx), e = ctx.ui.esc, I = M.I;
    if (!I.matchups) return noData(ctx);
    const periods = [...new Set(I.matchups.map(m => m.p))].sort((a, b) => a - b);
    const p = Number(ctx.params[0]) || I.currentPeriod || 1;
    const week = I.matchups.filter(m => m.p === p);
    const sps = (I.periods || {})[p] || [];
    const my = myTeamId(ctx);
    const blocks = week.map(m => {
      const h = M.tById.get(m.home), a = M.tById.get(m.away), pr = projectMatchup(M, m);
      const row = (t, byDay, total, proj) => `<tr><td>${teamCell(ctx, t)}</td>${sps.map(sp => { const v = byDay[sp]; const fut = sp > (I.latestSp || 0); return `<td class="num${fut ? ' muted' : ''}">${v != null && !fut ? f1(v) : '·'}</td>`; }).join('')}<td class="num strong">${f1(total)}</td><td class="num">${pr.done ? '' : f0(proj && proj.final)}</td></tr>`;
      return `<section class="pt-mblock${m.home === my || m.away === my ? ' mine' : ''}" id="m${m.id}">
        <div class="table-wrap"><table class="table compact pt-mtable"><thead><tr><th>${pr.done ? (m.winner === 'TIE' ? 'Unentschieden' : 'Entschieden') : `Siegchance ${h ? e(h.abbrev || h.name) : ''} <b>${pr.pH != null ? pctTxt(pr.pH) : '—'}</b>`}</th>${sps.map(sp => `<th class="num">${M.dayLabel(sp)}</th>`).join('')}<th class="num">Σ</th><th class="num" title="Erwartetes Endergebnis">Proj.</th></tr></thead>
        <tbody>${row(h, m.hDay || {}, m.hp, pr.h)}${a ? row(a, m.aDay || {}, m.ap, pr.a) : ''}</tbody></table></div>
        <a class="small" href="${ctx.href('ptsplanner', p, m.home === my || m.away === my ? '' : m.home)}">Aufstellung &amp; Prognose im Planer →</a></section>`;
    }).join('');
    return `${head(ctx, '⚔️', 'Matchups', `${weekName(M, p)} · ${weekRange(M, p)}`)}
      <div class="controls"><select class="tr-select" data-week>${periods.map(x => `<option value="${x}"${x === p ? ' selected' : ''}>${weekName(M, x)}${x === I.currentPeriod ? ' ●' : ''} · ${weekRange(M, x)}</option>`).join('')}</select></div>
      ${blocks}
      <p class="explain small">Punkte je Spieltag laut ESPN. „Proj.“ = bisherige Punkte + erwartete Punkte der restlichen Tage: je Tag die beste erlaubte Aufstellung (PG, SG, SF, PF, C, UTIL) aus den Spielern mit Spiel, Wert = projizierte FP/Spiel, mit Pace/Gegner und Back-to-back-Pausen aus dem Play-by-Play. Siegchance aus der Streuung einzelner Spiele.</p>`;
  }

  // ---------- Matchup-Planer ----------
  function planner(ctx) {
    const M = model(ctx), e = ctx.ui.esc, I = M.I, nba = N();
    if (!I.matchups) return noData(ctx);
    const p = Number(ctx.params[0]) || I.currentPeriod || 1;
    const my = Number(ctx.params[1]) || myTeamId(ctx) || M.teams[0].id;
    const m = I.matchups.find(x => x.p === p && (x.home === my || x.away === my));
    const opp = m ? (m.home === my ? m.away : m.home) : null;
    const sps = (I.periods || {})[p] || [];
    const today = I.latestSp || 0;
    const rest = sps.filter(sp => sp >= today);
    const mine = M.roster(my), oppR = opp != null ? M.roster(opp) : [];
    const W = teamWeek(M, mine, rest), WO = teamWeek(M, oppR, rest);
    const pr = m ? projectMatchup(M, m) : null;
    const myT = M.tById.get(my), opT = M.tById.get(opp);
    const grid = (players, Wk) => {
      const startSet = new Map(); Wk.perDay.forEach(d => d.starters.forEach(s => startSet.set(d.sp + '|' + s.p.name, s.slot)));
      const rows = players.slice().sort((a, b) => M.value(b.s) - M.value(a.s)).map(pl => {
        const cells = sps.map(sp => {
          if (!M.plays(pl, sp)) return '<td class="pt-g"></td>';
          const past = sp < today, slot = startSet.get(sp + '|' + pl.name);
          const g = M.sched.byTeam[nba.canonTeam(pl.team)][sp];
          if (past) return `<td class="pt-g past"><span class="muted">${g[1] ? '' : '@'}${e(g[0])}</span></td>`;
          if (pl.slot === 'IR' || pl.inj === 'OUT' || pl.inj === 'SUSP') return `<td class="pt-g out" title="${e(pl.inj || 'IR')}">${g[1] ? '' : '@'}${e(g[0])}</td>`;
          return `<td class="pt-g ${slot ? 'on' : 'bench'}" title="${slot ? 'Startet als ' + slot : 'Kein Platz in der besten Aufstellung (Bank)'}"><span>${g[1] ? '' : '@'}${e(g[0])}</span><b>${slot || 'BE'}</b></td>`;
        }).join('');
        const n = Wk.use.get(pl.name) || 0, games = rest.filter(sp => M.plays(pl, sp)).length;
        return `<tr class="${pl.slot === 'IR' ? 'muted' : ''}"><td class="pt-g-name"><b>${e(pl.name)}</b>${nba.injury(pl.inj)} <small class="muted">${e(pl.pos)} · ${e(pl.team)}</small></td><td class="num">${f1(M.value(pl.s))}</td><td class="num">${n}/${games}</td>${cells}</tr>`;
      }).join('');
      return `<div class="table-wrap"><table class="table compact pt-grid"><thead><tr><th>Spieler</th><th class="num" title="Projektion FP/Spiel">Proj.</th><th class="num" title="Starts / Spiele in den restlichen Tagen">Starts</th>${sps.map(sp => `<th class="num${sp < today ? ' muted' : ''}">${M.dayLabel(sp)}</th>`).join('')}</tr></thead>
        <tbody>${rows}</tbody><tfoot><tr><td>Erwartet je Tag</td><td></td><td></td>${sps.map(sp => { const d = Wk.perDay.find(x => x.sp === sp); return `<td class="num">${d ? f0(d.v) : ''}</td>`; }).join('')}</tr></tfoot></table></div>`;
    };
    // Streaming: freie Spieler, die die Woche am meisten verbessern (statt des schwächsten eigenen)
    const owned = new Set(); M.teams.forEach(t => nba.roster(ctx.data, t.id).forEach(x => owned.add(nba.key(x.name))));
    const fas = [...M.pts.values()].filter(s => !owned.has(nba.key(s.name)) && s.team && s.team !== 'FA' && s.inj !== 'OUT' && (s.proj || s.fpg))
      .map(s => ({ name: s.name, pos: s.pos || guessPos(ctx, s.name), team: s.team, s, inj: s.inj || null }))
      .filter(x => rest.some(sp => M.plays(x, sp))).sort((a, b) => M.value(b.s) * rest.filter(sp => M.plays(b, sp)).length - M.value(a.s) * rest.filter(sp => M.plays(a, sp)).length).slice(0, 25);
    const base = W.mean;
    const dropCands = mine.filter(x => x.slot !== 'IR');
    const stream = fas.map(fa => {
      let best = null;
      dropCands.forEach(d => {
        const v = teamWeek(M, mine.filter(x => x !== d).concat([fa]), rest).mean - base;
        if (!best || v > best.v) best = { v, drop: d.name };
      });
      return { fa, ...best };
    }).filter(x => x.v > 0.5).sort((a, b) => b.v - a.v).slice(0, 8);
    const teamOpts = M.teams.map(t => `<option value="${t.id}"${t.id === my ? ' selected' : ''}>${e(t.name)}</option>`).join('');
    const periods = [...new Set(I.matchups.map(x => x.p))].sort((a, b) => a - b);
    return `${head(ctx, '🗓️', 'Matchup-Planer', `${weekName(M, p)} · ${weekRange(M, p)} · tägliche Aufstellung (PG, SG, SF, PF, C, UTIL)`)}
      <div class="controls"><select class="tr-select" data-pteam>${teamOpts}</select><select class="tr-select" data-pweek>${periods.map(x => `<option value="${x}"${x === p ? ' selected' : ''}>${weekName(M, x)} · ${weekRange(M, x)}</option>`).join('')}</select>
        <button type="button" class="seg-btn" data-setmine title="Dieses Team als „mein Team“ merken">⭐ Mein Team</button></div>
      ${pr ? `<div class="pt-score">
        <div style="${nba.tcStyle(myT)}"><b>${e(myT.name)}</b><span class="pt-big">${f1(m.home === my ? m.hp : m.ap)}</span><span class="muted">→ ${f0((m.home === my ? pr.h : pr.a).final)}</span></div>
        <div class="pt-mid">${pr.done ? 'Entschieden' : `Siegchance<br><b class="pt-big">${pctTxt(m.home === my ? pr.pH : 1 - pr.pH)}</b>`}</div>
        <div style="${nba.tcStyle(opT)}"><b>${e(opT ? opT.name : '—')}</b><span class="pt-big">${f1(m.home === my ? m.ap : m.hp)}</span><span class="muted">→ ${f0((m.home === my ? pr.a : pr.h).final)}</span></div></div>` : ''}
      <h2 class="pt-h2">${e(myT.name)} · Rest der Woche erwartet ${f0(W.mean)} FP</h2>${grid(mine, W)}
      ${stream.length ? `<h2 class="pt-h2">🌊 Streaming: wer bringt diese Woche am meisten?</h2>
        <div class="table-wrap"><table class="table compact"><thead><tr><th>Freier Spieler</th><th class="num">Proj.</th><th class="num">Spiele</th><th class="num" title="Mehr erwartete Punkte in dieser Woche (beste Aufstellung je Tag)">+FP Woche</th><th>für</th></tr></thead><tbody>
        ${stream.map(x => `<tr><td class="strong">${e(x.fa.name)} <small class="muted">${e(x.fa.pos)} · ${e(x.fa.team)}</small></td><td class="num">${f1(M.value(x.fa.s))}</td><td class="num">${rest.filter(sp => M.plays(x.fa, sp)).length}</td><td class="num up">${sg(x.v)}</td><td class="muted small">${e(x.drop)}</td></tr>`).join('')}</tbody></table></div>` : ''}
      ${opT ? `<h2 class="pt-h2">${e(opT.name)} · Rest der Woche erwartet ${f0(WO.mean)} FP</h2>${grid(oppR, WO)}` : ''}
      <p class="explain small">Je Tag die beste erlaubte Aufstellung aus den Spielern mit Spiel (Positionen laut ESPN, OUT/IR zählen nicht). „BE“ = hat ein Spiel, passt aber nicht mehr in die Startplätze – genau da lohnen Streams. Werte: projizierte FP/Spiel (Consensus + echte Spiele) × Pace/Gegner, Back-to-back-Pausen abgezogen. Streaming probiert jeden freien Spieler gegen jeden eigenen aus und zeigt den besten Tausch.</p>`;
  }
  // Position eines freien Spielers: aus den Kadern unbekannt → aus PbP-Insights nicht vorhanden → Consensus pos über POINTS nicht gespeichert; Fallback UTIL
  function guessPos(ctx, name) {
    const C = ctx.data.PROJECTIONS_CONSENSUS;
    if (C) { const k = N().key(name); const hit = Object.entries(C).find(([n]) => N().key(n) === k); if (hit && hit[1].pos) return String(hit[1].pos).replace(/,/g, '/'); }
    return 'UTIL';
  }

  // ---------- Tabelle ----------
  function standTable(ctx, M, st, compact) {
    const e = ctx.ui.esc, cut = M.I.playoffTeams || 0, my = myTeamId(ctx);
    return `<div class="table-wrap"><table class="table compact pt-stand"><thead><tr><th class="num">#</th><th>Team</th><th class="num">W-L</th>${compact ? '' : '<th class="num">Pct</th><th class="num">GB</th>'}<th class="num">PF</th>${compact ? '' : '<th class="num">PA</th><th class="num" title="Punkte pro Woche">PF/W</th><th class="num" title="Siegquote, wenn du jede Woche gegen alle gespielt hättest">All-Play</th><th class="num" title="Siege mehr (+) oder weniger (−) als nach All-Play zu erwarten: Spielplan-Glück">Glück</th><th>Form</th>'}</tr></thead><tbody>
      ${st.map((r, i) => `<tr class="${i + 1 === cut ? 'pt-cut' : ''}${r.t.id === my ? ' pt-myrow' : ''}"><td class="num">${r.rank}</td><td>${teamCell(ctx, r.t, compact)}</td><td class="num strong">${r.w}-${r.l}${r.tie ? '-' + r.tie : ''}</td>
        ${compact ? '' : `<td class="num">${r.pct.toFixed(3).replace(/^0/, '')}</td><td class="num">${r.gb ? f1(r.gb) : '—'}</td>`}<td class="num">${f0(r.pf)}</td>
        ${compact ? '' : `<td class="num muted">${f0(r.pa)}</td><td class="num">${r.form.length ? f1(r.pf / r.form.length) : '—'}</td><td class="num">${r.apPct != null ? r.ap_w + '-' + (r.ap_g - r.ap_w) : '—'}</td><td class="num ${r.luck > 0.4 ? 'up' : r.luck < -0.4 ? 'down' : ''}">${r.luck != null ? sg(r.luck) : '—'}</td><td class="pt-form">${r.form.slice(-5).map(x => `<span class="${x === 'W' ? 'w' : x === 'L' ? 'l' : 't'}">${x}</span>`).join('')}</td>`}</tr>`).join('')}
      </tbody></table></div>`;
  }
  function standPage(ctx) {
    const M = model(ctx);
    if (!M.I.matchups) return noData(ctx);
    const st = standings(M);
    return `${head(ctx, '📈', 'Tabelle', `Hauptrunde ${M.I.regularPeriods || ''} Wochen · Top ${M.I.playoffTeams || '?'} in die Playoffs (Linie) · Seeding nach Bilanz${M.I.median ? ' · jede Woche zusätzlich ein Spiel gegen den Median' : ''}`)}${standTable(ctx, M, st, false)}
      <p class="explain small">Aus allen entschiedenen Hauptrunden-Wochen. All-Play: jede Woche gegen alle anderen Teams gerechnet – zeigt, wie stark ein Team wirklich gepunktet hat, unabhängig vom Gegner. „Glück“ = echte H2H-Siege minus All-Play-Erwartung.${M.I.median ? ' Median-Spiel: Wer in der Woche mehr Punkte als die Hälfte der Liga holt, bekommt einen zweiten Sieg (W-L enthält beide).' : ''}</p>`;
  }

  // ---------- Teams & Kader ----------
  function teamsPage(ctx) {
    const M = model(ctx), e = ctx.ui.esc, nba = N();
    if (!M.I.matchups) return noData(ctx);
    const tid = Number(ctx.params[0]);
    const st = standings(M);
    if (!tid) {
      return `${head(ctx, '🧍', 'Teams & Kader', 'Projizierte Stärke = Ø erwartete FP pro Tag mit bester Aufstellung über die nächsten 7 Tage')}
        <div class="pt-tgrid">${M.teams.map(t => {
          const r = st.find(x => x.t.id === t.id) || {};
          const nxt = []; for (let sp = (M.I.latestSp || 1); sp < (M.I.latestSp || 1) + 7; sp++) nxt.push(sp);
          const W = teamWeek(M, M.roster(t.id), nxt);
          return `<a class="pt-tcard" href="${ctx.href('ptsteams', t.id)}" style="${nba.tcStyle(t)}">${t.logo ? `<img src="${e(t.logo)}" alt="" loading="lazy" onerror="this.remove()">` : ''}<div><b>${e(t.name)}</b><div class="muted small">${e(t.owner || '')}</div>
            <div class="small">${r.w || 0}-${r.l || 0} · ${f0(r.pf || 0)} PF · <span title="erwartete FP/Tag nächste 7 Tage">⚡ ${f0(W.mean / 7)}/Tag</span></div></div></a>`;
        }).join('')}</div>`;
    }
    const t = M.tById.get(tid); if (!t) return ctx.ui.empty('Team nicht gefunden', '', '🧍');
    const rows = M.roster(tid).sort((a, b) => (a.slot === 'IR') - (b.slot === 'IR') || M.value(b.s) - M.value(a.s));
    const nxt = []; for (let sp = (M.I.latestSp || 1); sp < (M.I.latestSp || 1) + 7; sp++) nxt.push(sp);
    const W = teamWeek(M, rows, nxt);
    const r = st.find(x => x.t.id === tid) || {};
    const scores = (M.I.matchups || []).filter(m => m.winner !== 'UNDECIDED' && (m.home === tid || m.away === tid)).map(m => ({ p: m.p, f: m.home === tid ? m.hp : m.ap, a: m.home === tid ? m.ap : m.hp, opp: M.tById.get(m.home === tid ? m.away : m.home) }));
    return `${head(ctx, '🧍', e(t.name), `${e(t.owner || '')} · ${r.w || 0}-${r.l || 0} · ${f0(r.pf || 0)} PF · ${t.moves || 0} Moves`)}
      <div class="controls"><a class="seg-btn" href="${ctx.href('ptsteams')}">← Alle Teams</a><button type="button" class="seg-btn" data-setmine="${tid}">⭐ Mein Team</button><a class="seg-btn" href="${ctx.href('ptsplanner', M.I.currentPeriod, tid)}">🗓️ Planer</a></div>
      <div class="table-wrap"><table class="table compact pt-roster"><thead><tr><th>Slot</th><th>Spieler</th><th>Pos</th><th>NBA</th><th class="num" title="Projektion FP/Spiel (Rest der Saison)">Proj.</th><th class="num">Saison</th><th class="num">L14</th><th class="num">Sp.</th><th class="num">Min.</th><th class="num" title="Starts in der besten Aufstellung / Spiele, nächste 7 Tage">7 Tage</th><th class="num" title="Erwartete Punkte Rest der Saison">Rest-FP</th><th>Letzte Spiele</th></tr></thead><tbody>
        ${rows.map(p => { const s = p.s; const n = W.use.get(p.name) || 0, g = nxt.filter(sp => M.plays(p, sp)).length; return `<tr class="${p.slot === 'IR' ? 'muted' : ''}"><td><span class="pt-slot">${e(p.slot)}</span></td><td class="strong">${e(p.name)}${nba.injury(p.inj)}</td><td class="muted">${e(p.pos)}</td><td>${e(p.team)}</td>
          <td class="num strong">${f1(s.proj)}</td><td class="num">${f1(s.fpg)}</td><td class="num">${f1(s.l14)}</td><td class="num">${s.gp || 0}</td><td class="num">${f1(s.min)}</td><td class="num">${n}/${g}</td><td class="num">${f0(s.rosFp)}</td><td>${spark(s.log)}</td></tr>`; }).join('')}
      </tbody></table></div>
      ${scores.length ? `<h2 class="pt-h2">Wochen</h2><div class="pt-weeks">${scores.map(x => `<span class="${x.f > x.a ? 'w' : 'l'}" title="${weekName(M, x.p)} vs ${e(x.opp ? x.opp.name : '')}"><small>W${x.p}</small><b>${f0(x.f)}</b><small>${f0(x.a)}</small></span>`).join('')}</div>` : ''}`;
  }
  function spark(log) {
    if (!log || !log.length) return '';
    const max = Math.max(10, ...log.map(x => x[1] || 0));
    return `<span class="pt-spark" title="${log.map(x => `${x[0]}: ${f1(x[1])} FP, ${x[2]} Min.`).join('\n')}">${log.map(x => `<i style="height:${Math.max(2, Math.round((Math.max(0, x[1]) / max) * 18))}px"></i>`).join('')}</span>`;
  }

  // ---------- Spieler-Rankings ----------
  const SRC = [['proj', 'Projektion', 'FP/Spiel Rest der Saison (Consensus + echte Spiele)'], ['l1', 'Letzte Nacht', 'FP im letzten Spieltag'], ['fpg', 'Saison', 'FP/Spiel diese Saison'], ['l7', '7 Tage', 'FP/Spiel letzte 7 Tage'], ['l14', '14 Tage', 'FP/Spiel letzte 14 Tage'], ['l30', '30 Tage', 'FP/Spiel letzte 30 Tage'], ['pre', 'Preseason', 'Projektion zum Saisonstart'], ['rosFp', 'Rest-FP', 'Erwartete Punkte im Rest der Saison (Spiele × Projektion)']];
  function playersPage(ctx, waiver) {
    const M = model(ctx), e = ctx.ui.esc, nba = N();
    if (!ctx.data.POINTS) return noData(ctx);
    const stKey = waiver ? 'ptswaiver' : 'ptsplayers';
    const st = { src: 'proj', q: '', free: !!waiver, pos: '', ...ctx.store.getJSON(stKey, {}) };
    const PB = M.PB, pbPl = PB ? new Map(Object.entries(PB.players || {}).map(([n, v]) => [nba.key(n), v])) : new Map();
    // Profiteure aktueller Ausfälle (Stars laut ESPN OUT)
    const outKeys = new Set(); M.teams.forEach(t => nba.roster(ctx.data, t.id).forEach(p => { if (p.inj === 'OUT' || p.inj === 'SUSP') outKeys.add(nba.key(p.name)); }));
    const ben = new Map();
    if (PB) Object.entries(PB.stars || {}).forEach(([star, s]) => { if (!outKeys.has(nba.key(star))) return; (s.top || []).forEach(r => { const d = Object.entries(M.SC).reduce((a, [k, w]) => a + (r[k] || 0) * w, 0); const k = nba.key(r.y), cur = ben.get(k); if (d > 1 && (!cur || d > cur.d)) ben.set(k, { star, d }); }); });
    const today = M.I.latestSp || 0, wk = (M.I.periods || {})[M.I.currentPeriod] || [], restWk = wk.filter(sp => sp >= today);
    const q = st.q.toLowerCase().trim();
    M.pts.forEach(s => { s.wk = restWk.filter(sp => M.plays({ team: s.team }, sp)).length * (s.inj === 'OUT' ? 0 : (s.proj || s.fpg || 0)); });
    if (st.src === 'wk' && !waiver) st.src = 'proj';
    let list = [...M.pts.values()].filter(s => (!st.free || !M.owner(s.name)) && (!q || s.name.toLowerCase().includes(q) || String(s.team || '').toLowerCase() === q) && s[st.src] != null);
    list.sort((a, b) => (b[st.src] || 0) - (a[st.src] || 0));
    const rows = list.slice(0, 300).map((s, i) => {
      const pi = pbPl.get(nba.key(s.name)), b = ben.get(nba.key(s.name));
      const games = restWk.filter(sp => M.plays({ team: s.team }, sp)).length;
      const trend = s.l14 != null && s.proj != null && s.l14g >= 3 ? s.l14 - s.proj : null;
      const role = [];
      if (pi && pi.trend10 != null && pi.minLive != null && pi.gp >= 3 && Math.abs(pi.trend10 - pi.minLive) >= 1.5) role.push(`<span class="${pi.trend10 > pi.minLive ? 'up' : 'down'}" title="Minuten-Trend nächste 10 Spiele">${pi.trend10 > pi.minLive ? '📈' : '📉'}${sg(pi.trend10 - pi.minLive)}</span>`);
      if (b) role.push(`<span class="wv-ben" title="${e(b.star)} fällt aus: ${sg(b.d)} FP/Spiel erwartet">🩹 ${e(b.star.split(' ').filter(w => !/^(jr\.?|sr\.?|ii|iii|iv)$/i.test(w)).slice(-1)[0])}</span>`);
      return `<tr><td class="num rank">${i + 1}</td><td class="strong">${e(s.name)}${nba.injury(s.inj)} <small class="muted">${e(s.pos || '')}</small></td><td>${e(s.team || '')}</td><td>${ownerChip(ctx, M, s.name)}</td>
        <td class="num strong">${st.src === 'rosFp' || st.src === 'wk' ? f0(s[st.src]) : f1(s[st.src])}</td>${st.src !== 'proj' ? `<td class="num muted">${f1(s.proj)}</td>` : ''}<td class="num">${f1(s.fpg)}</td><td class="num">${f1(s.l14)}</td>
        <td class="num ${trend > 2 ? 'up' : trend < -2 ? 'down' : ''}">${trend != null ? sg(trend) : '—'}</td><td class="num">${s.gp || 0}</td><td class="num">${f1(s.min)}</td>
        ${waiver ? `<td class="num" title="Spiele in den restlichen Tagen dieser Woche">${games}</td><td class="num" title="Spiele × Projektion">${f0(games * (s.proj || s.fpg || 0))}</td>` : ''}<td>${role.join(' ') || '<span class="muted">—</span>'}</td><td>${spark(s.log)}</td></tr>`;
    }).join('');
    const srcLabel = st.src === 'wk' ? 'FP Woche' : (SRC.find(x => x[0] === st.src) || SRC[0])[1];
    return `${head(ctx, waiver ? '🆓' : '🏅', waiver ? 'Waiver & Streaming' : 'Spieler-Rankings', `${list.length} Spieler · Fantasy-Punkte mit eurem Scoring · Stand ${e((ctx.data.POINTS.meta || {}).through || '')}`)}
      <div class="controls"><div class="seg" role="group">${(waiver ? SRC.concat([['wk', 'FP Woche', 'Erwartete FP in den restlichen Tagen dieser Woche (Spiele × Projektion) – zum Streamen']]) : SRC).map(([k, l, t]) => `<button type="button" class="seg-btn${st.src === k ? ' active' : ''}" data-src="${k}" title="${t}">${l}</button>`).join('')}</div>
        <input type="search" class="search" placeholder="Spieler oder NBA-Team …" value="${e(st.q)}" data-q>
        <button type="button" class="seg-btn${st.free ? ' on' : ''}" data-free>${st.free ? '☑' : '☐'} nur freie</button></div>
      <div class="table-wrap"><table class="table compact pt-players"><thead><tr><th class="num">#</th><th>Spieler</th><th>NBA</th><th>Team</th><th class="num">${e(srcLabel)}</th>${st.src !== 'proj' ? '<th class="num">Proj.</th>' : ''}<th class="num">Saison</th><th class="num">L14</th><th class="num" title="Letzte 14 Tage minus Projektion">Form</th><th class="num">Sp.</th><th class="num">Min.</th>${waiver ? '<th class="num" title="Spiele Rest dieser Woche">Sp. Woche</th><th class="num" title="Erwartete FP Rest dieser Woche">FP Woche</th>' : ''}<th>Rolle</th><th>Letzte Spiele</th></tr></thead><tbody>${rows}</tbody></table></div>
      <p class="explain small">FP = ${Object.entries(M.SC).map(([k, w]) => `${k.toUpperCase().replace('TPM', '3PM').replace('TOV', 'TO')} ${w > 0 ? '+' : ''}${w}`).join(' · ')}. Projektion: sportweite Live Projections (BBM + Hashtag, mit echten Spielen gedämpft, Minuten-Trend, xStats) in FP umgerechnet. Rolle aus dem Play-by-Play (📈 Minuten-Trend, 🩹 profitiert von einem Ausfall). ${waiver ? 'Für die konkrete Woche zeigt der Matchup-Planer die besten Streams inkl. Aufstellungs-Platz.' : ''}</p>`;
  }

  // ---------- Trade Analyzer ----------
  function tradePage(ctx) {
    const M = model(ctx), e = ctx.ui.esc, nba = N();
    if (!M.I.matchups) return noData(ctx);
    const st = { a: myTeamId(ctx) || M.teams[0].id, b: null, give: [], get: [], ...ctx.store.getJSON('ptstrade', {}) };
    if (!st.b || st.b === st.a) st.b = (M.teams.find(t => t.id !== st.a) || {}).id;
    const RA = M.roster(st.a), RB = M.roster(st.b);
    const owned = new Set(); M.teams.forEach(t => nba.roster(ctx.data, t.id).forEach(x => owned.add(nba.key(x.name))));
    const faBest = [...M.pts.values()].filter(s => !owned.has(nba.key(s.name)) && s.proj != null && s.inj !== 'OUT' && s.team && s.team !== 'FA').sort((a, b) => b.proj - a.proj);
    // Stärke = Ø FP pro Tag mit bester Aufstellung über die nächsten 28 Tage + Rest-Saison-FP der beteiligten Spieler
    const next = []; for (let sp = (M.I.latestSp || 1); sp < (M.I.latestSp || 1) + 28; sp++) next.push(sp);
    const strength = players => teamWeek(M, players, next, { noFx: true, outLater: true }).mean / 28;
    const size = Math.max(RA.length, RB.length);
    const after = (R, out, inn) => {
      let r = R.filter(p => !out.includes(p.name)).concat(inn);
      // Kadergröße halten: zu viele → schwächste(n) droppen; zu wenige → beste freie holen
      const target = R.length;
      while (r.length > target) { const w = r.filter(p => p.slot !== 'IR').sort((x, y) => M.value(x.s) - M.value(y.s))[0]; r = r.filter(p => p !== w); }
      let fi = 0; while (r.length < target && fi < faBest.length) { const f = faBest[fi++]; r.push({ name: f.name, pos: f.pos || guessPos(ctx, f.name), team: f.team, s: f, fa: true }); }
      return r;
    };
    const give = RA.filter(p => st.give.includes(p.name)), get = RB.filter(p => st.get.includes(p.name));
    const aAfter = after(RA, st.give, get.map(p => ({ ...p, slot: 'BE' }))), bAfter = after(RB, st.get, give.map(p => ({ ...p, slot: 'BE' })));
    const sA0 = strength(RA), sA1 = strength(aAfter), sB0 = strength(RB), sB1 = strength(bAfter);
    const ros = list => list.reduce((s, p) => s + (p.s.rosFp || 0), 0);
    const pick = (R, sel, side) => R.map(p => `<label class="pt-pick"><input type="checkbox" data-${side}="${e(p.name)}"${sel.includes(p.name) ? ' checked' : ''}> <b>${e(p.name)}</b>${nba.injury(p.inj)} <small class="muted">${e(p.pos)} · ${f1(M.value(p.s))} FP · Rest ${f0(p.s.rosFp)}</small></label>`).join('');
    const opts = cur => M.teams.map(t => `<option value="${t.id}"${t.id === cur ? ' selected' : ''}>${e(t.name)}</option>`).join('');
    const changed = give.length || get.length;
    const verdict = d => (Math.abs(d) < 0.5 ? 'fair' : d > 0 ? 'besser' : 'schlechter');
    return `${head(ctx, '⚖️', 'Trade Analyzer', 'Wie viele Punkte pro Tag bringt der Trade – mit bester Aufstellung, Kadergröße bleibt gleich')}
      <div class="pt-trade"><div><select class="tr-select" data-ta>${opts(st.a)}</select><div class="pt-picks">${pick(RA, st.give, 'give')}</div></div>
        <div><select class="tr-select" data-tb>${opts(st.b)}</select><div class="pt-picks">${pick(RB, st.get, 'get')}</div></div></div>
      ${changed ? `<div class="pt-tres">
        ${[[M.tById.get(st.a), sA0, sA1, ros(get) - ros(give)], [M.tById.get(st.b), sB0, sB1, ros(give) - ros(get)]].map(([t, s0, s1, dr]) => `<div style="${nba.tcStyle(t)}"><b>${e(t.name)}</b>
          <div class="pt-big ${s1 - s0 > 0.5 ? 'up' : s1 - s0 < -0.5 ? 'down' : ''}">${sg(s1 - s0)} FP/Tag</div><div class="muted small">${f0(s0)} → ${f0(s1)} pro Tag · ${verdict(s1 - s0)}</div>
          <div class="small">Rest-Saison der getauschten Spieler: <b>${sg(dr, 0)}</b> FP</div></div>`).join('')}</div>
        <p class="small muted">Kader nach dem Trade: überzählige Spieler (der schwächste) werden gedroppt, fehlende Plätze mit dem besten freien Spieler aufgefüllt – so zählt auch ein 2-für-1 fair.</p>` : '<p class="muted">Spieler auf beiden Seiten anhaken.</p>'}
      <p class="explain small">„FP/Tag“ = erwartete Punkte pro Tag über die nächsten 4 Wochen, jeden Tag mit der besten erlaubten Aufstellung aus den Spielern mit Spiel. Das berücksichtigt Positionen, Spielplan und dass bei nur 6 Startplätzen ein Bankspieler oft gar nicht zählt. Verletzte (OUT/IR) zählen in der ersten Woche nicht, danach zur Hälfte. Ohne Matchup-Faktoren.</p>`;
  }

  // ---------- Transaktionen ----------
  function txPage(ctx) {
    const M = model(ctx), T = ctx.data.TRANSACTIONS || [];
    const per = M.teams.map(t => ({ t, adds: T.filter(x => x.team === t.id && x.type !== 'TRADE').length, trades: T.filter(x => x.type === 'TRADE' && x.items.some(i => i.from === t.id || i.to === t.id)).length }));
    return `${head(ctx, '🔁', 'Transaktionen', `${T.length} seit Saisonstart · Waiver: ${ctx.ui.esc((M.I.acquisition || {}).type || '')}`)}
      <div class="pt-txcount">${per.map(x => `<span style="${N().tcStyle(x.t)}">${ctx.ui.esc(x.t.abbrev || x.t.name)} <b>${x.adds}</b>${x.trades ? ` · ${x.trades} Trade` : ''}</span>`).join('')}</div>
      ${T.length ? txList(ctx, M, T) : ctx.ui.empty('Noch keine Transaktionen', 'Werden beim nächsten Liga-Sync geladen.', '🔁')}`;
  }

  // ---------- Interaktion ----------
  function mountCommon(root, ctx) {
    root.querySelectorAll('[data-setmine]').forEach(b => b.addEventListener('click', () => {
      const id = Number(b.dataset.setmine) || Number((root.querySelector('[data-pteam]') || {}).value) || null;
      ctx.store.setJSON('myteam', id); ctx.refresh();
    }));
  }
  function mountPlayers(key) {
    return (root, ctx) => {
      const get = () => ({ src: 'proj', q: '', free: key === 'ptswaiver', ...ctx.store.getJSON(key, {}) });
      const save = p => { ctx.store.setJSON(key, { ...get(), ...p }); ctx.refresh(); };
      root.querySelectorAll('[data-src]').forEach(b => b.addEventListener('click', () => save({ src: b.dataset.src })));
      const q = root.querySelector('[data-q]'); if (q) q.addEventListener('change', () => save({ q: q.value }));
      const f = root.querySelector('[data-free]'); if (f) f.addEventListener('click', () => save({ free: !get().free }));
    };
  }

  MFHFB.pages.register({ id: 'ptshome', section: 'home', label: 'Übersicht', icon: '🏠', applies: A, data: DATA, render: home, mount: mountCommon });
  MFHFB.pages.register({ id: 'ptsstand', section: 'standings', label: 'Tabelle', icon: '📈', applies: A, data: DATA, render: standPage });
  MFHFB.pages.register({ id: 'ptsmatch', section: 'matchups', label: 'Matchups', icon: '⚔️', applies: A, data: DATA, render: matchups,
    mount(root, ctx) { const s = root.querySelector('[data-week]'); if (s) s.addEventListener('change', () => { location.hash = ctx.href('ptsmatch', s.value).replace(/^.*#/, '#'); }); const id = ctx.params[1]; if (id) { const el = root.querySelector('#m' + id); if (el) el.scrollIntoView({ block: 'center' }); } } });
  MFHFB.pages.register({ id: 'ptsplanner', section: 'matchups', label: 'Matchup-Planer', icon: '🗓️', applies: A, data: DATA.concat(['?sport:projections-consensus']), render: planner,
    mount(root, ctx) {
      mountCommon(root, ctx);
      const t = root.querySelector('[data-pteam]'), w = root.querySelector('[data-pweek]');
      const go = () => { location.hash = ctx.href('ptsplanner', w.value, t.value).replace(/^.*#/, '#'); };
      if (t) t.addEventListener('change', go); if (w) w.addEventListener('change', go);
    } });
  MFHFB.pages.register({ id: 'ptsteams', section: 'teams', label: 'Teams & Kader', icon: '🧍', applies: A, data: DATA, render: teamsPage, mount: mountCommon,
    title: ({ data, params }) => { const t = (data.TEAMS || []).find(x => x.id === Number(params[0])); return t ? t.name : 'Teams & Kader'; } });
  MFHFB.pages.register({ id: 'ptswaiver', section: 'teams', label: 'Waiver & Streaming', icon: '🆓', applies: A, data: DATA, render: ctx => playersPage(ctx, true), mount: mountPlayers('ptswaiver') });
  MFHFB.pages.register({ id: 'ptstx', section: 'teams', label: 'Transaktionen', icon: '🔁', applies: A, data: DATA, render: txPage });
  MFHFB.pages.register({ id: 'ptstrade', section: 'trade', label: 'Trade Analyzer', icon: '⚖️', applies: A, data: DATA.concat(['?sport:projections-consensus']), render: tradePage,
    mount(root, ctx) {
      const get = () => ({ a: myTeamId(ctx), b: null, give: [], get: [], ...ctx.store.getJSON('ptstrade', {}) });
      const save = p => { ctx.store.setJSON('ptstrade', { ...get(), ...p }); ctx.refresh(); };
      const ta = root.querySelector('[data-ta]'), tb = root.querySelector('[data-tb]');
      if (ta) ta.addEventListener('change', () => save({ a: Number(ta.value), give: [] }));
      if (tb) tb.addEventListener('change', () => save({ b: Number(tb.value), get: [] }));
      root.querySelectorAll('[data-give],[data-get]').forEach(c => c.addEventListener('change', () => {
        const side = c.dataset.give != null ? 'give' : 'get', name = c.dataset.give != null ? c.dataset.give : c.dataset.get, cur = get()[side].filter(n => n !== name);
        save({ [side]: c.checked ? cur.concat([name]) : cur });
      }));
    } });
  MFHFB.pages.register({ id: 'ptsplayers', section: 'players', label: 'Spieler-Rankings', icon: '🏅', applies: A, data: DATA, render: ctx => playersPage(ctx, false), mount: mountPlayers('ptsplayers') });

  // Für andere Seiten (Live Scores, Rollen & Matchups): FP eines Stat-Objekts mit dem Liga-Scoring
  MFHFB.nbaPoints = { fp: (scoring, s) => Object.entries(scoring || {}).reduce((a, [k, w]) => a + (Number(s[k === 'tov' ? (s.tov != null ? 'tov' : 'to') : k]) || 0) * w, 0) };
})();
