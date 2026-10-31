// ============================================================
//  Liga „NFL 32“ — alle 32 NFL-Teams als Fantasy-Teams (All-Play)
// ============================================================
//  Daten: leagues/nfl32/data/nfl32-weeks.js (NFL32) + teams.js, erzeugt von
//  leagues/nfl32/scripts/sync-nfl32.js (optimale Aufstellung je Team und
//  Woche, DOPE-Scoring). Kein H2H — gewertet wird All-Play: jede Woche
//  gegen alle anderen Teams, die gespielt haben (Bye = keine Wertung).
//
//  Seiten (nur für scoring 'allplay'):
//    home       Übersicht (letzte Woche, Top/Flop, Spieler der Woche, Top 10)
//    n32table   Power-Tabelle (All-Play-Quote, Ø, PF, Form, Duelle)
//    n32rolling Rolling Rankings (Bump-Chart je Woche)
//    n32sched   Spielplan-Liga: echter NFL-Spielplan als H2H, optional + Median-Bonus, mit Rolling
//    n32week    Wochen-Ergebnisse inkl. Aufstellungen
//    n32team    Team-Profil (Wochenlog, Positionsstärke, Top-Scorer)
//    n32compare Team-Vergleich (zwei Teams nebeneinander)
//    n32pos     Positions-Heatmap (Ø Punkte je Position, alle 32 Teams)
//  „Duell“ = Fantasy-Punkte gegen die Fantasy-Punkte des echten NFL-Gegners.
// ============================================================

(function () {
  const A = { scoring: ['allplay'] };
  const D = ['teams', 'nfl32-weeks'];
  const GROUPS = ['QB', 'RB', 'WR', 'TE', 'K', 'DEF'];
  const T = () => MFHFB.nfl.teams;
  const SEL = ['sel-1', 'sel-2', 'sel-3'];

  // ---------- Modell (einmal je Datenstand) ----------
  const cache = new WeakMap();
  function model(data) {
    const N = data.NFL32;
    if (cache.has(N)) return cache.get(N);
    const weeks = Object.keys(N.weeks || {}).map(Number).sort((a, b) => a - b);
    const complete = weeks.filter(w => N.weeks[w].complete);
    const teams = (data.LEAGUE_TEAMS || []).map(t => t.id);
    const games = {}; teams.forEach(id => { games[id] = []; });
    const weekRank = {};
    weeks.forEach(w => {
      const fin = Object.entries(N.weeks[w].teams).filter(([, t]) => t.status === 'final').sort((a, b) => b[1].pts - a[1].pts);
      weekRank[w] = {};
      fin.forEach(([id, t], i) => {
        let wn = 0, l = 0, ti = 0;
        fin.forEach(([id2, t2]) => { if (id2 === id) return; if (t.pts > t2.pts) wn++; else if (t.pts < t2.pts) l++; else ti++; });
        const rank = 1 + fin.filter(([, t2]) => t2.pts > t.pts).length;
        weekRank[w][id] = rank;
        const groups = {}; GROUPS.forEach(g => { groups[g] = 0; });
        t.lineup.forEach(l => { if (l[2]) groups[l[2]] = (groups[l[2]] || 0) + l[3]; });
        (games[id] = games[id] || []).push({ w, complete: N.weeks[w].complete, of: fin.length, rank, ap: { w: wn, l, t: ti }, groups, ...t });
      });
    });
    const sum = (arr, f) => arr.reduce((a, x) => a + f(x), 0);
    // Tabelle bis einschließlich Woche `upto` (nur abgeschlossene Wochen)
    function table(upto) {
      const rows = teams.map(id => {
        const g = games[id].filter(x => x.complete && x.w <= upto);
        const ap = { w: sum(g, x => x.ap.w), l: sum(g, x => x.ap.l), t: sum(g, x => x.ap.t) };
        const apn = ap.w + ap.l + ap.t;
        const duel = { w: 0, l: 0, t: 0 };
        g.forEach(x => { if (x.oppPts == null) return; if (x.pts > x.oppPts) duel.w++; else if (x.pts < x.oppPts) duel.l++; else duel.t++; });
        const pts = g.map(x => x.pts);
        const last3 = g.slice(-3);
        return {
          id, gp: g.length, ap, pct: apn ? (ap.w + ap.t / 2) / apn : 0, pf: sum(g, x => x.pts), ppg: g.length ? sum(g, x => x.pts) / g.length : 0,
          best: pts.length ? Math.max(...pts) : 0, worst: pts.length ? Math.min(...pts) : 0, form: last3.length ? sum(last3, x => x.pts) / last3.length : 0,
          tops: g.filter(x => x.rank === 1).length, duel, avgRank: g.length ? sum(g, x => x.rank) / g.length : 0,
        };
      }).filter(r => r.gp).sort((a, b) => (b.pct - a.pct) || (b.ppg - a.ppg));
      rows.forEach((r, i) => { r.rank = i + 1; });
      return rows;
    }
    const m = { N, weeks, complete, teams, games, weekRank, table, lastC: complete[complete.length - 1] || null };
    cache.set(N, m);
    return m;
  }

  // ---------- kleine Bausteine ----------
  const e = s => MFHFB.ui.esc(s);
  const num = (x, d = 1) => MFHFB.ui.num(x, d);
  const rec = r => `${r.w}-${r.l}${r.t ? '-' + r.t : ''}`;
  const pct = x => (x * 100).toFixed(1).replace(/\.0$/, '') + '%';
  const dot = id => `<span class="n32-dot" style="--tc:${T().color(id)}"></span>`;
  const teamCell = (ctx, id, opt = {}) => `<a class="team-cell n32-team" href="${ctx.href('n32team', id)}">${dot(id)}<span class="team-name">${e(opt.full ? T().name(id) : T().nick(id))}</span>${opt.abbr ? `<span class="muted n32-abbr">${e(id)}</span>` : ''}</a>`;
  const weekChips = (ctx, page, weeks, cur) => `<div class="chip-row n32-weeks">${weeks.map(w => `<a class="chip-link${w === cur ? ' active' : ''}" href="${ctx.href(page, w)}">W${w}</a>`).join('')}</div>`;
  const noData = ctx => MFHFB.ui.empty('Noch keine Wochen gewertet', 'Die Liga füllt sich nach dem ersten Spieltag automatisch (Sync dienstags nach Monday Night Football).', '🏈');
  const head = (title, sub) => `<div class="page-head"><h1 class="page-title display">${title}</h1>${sub ? `<div class="page-sub">${sub}</div>` : ''}</div>`;
  const updated = m => `Stand ${new Date(m.N.updated).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' })}`;
  const kpi = (label, value, sub) => `<div class="n32-kpi"><div class="n32-kpi-l">${label}</div><div class="n32-kpi-v">${value}</div>${sub ? `<div class="n32-kpi-s">${sub}</div>` : ''}</div>`;

  function lineupHtml(g) {
    return `<div class="n32-lineup">${g.lineup.map(l => `<div class="n32-slot${l[1] ? '' : ' empty'}"><span class="n32-slot-k">${l[0]}</span><span class="n32-slot-n">${l[1] ? e(l[1]) : '— leer —'}${l[0] === 'FLEX' && l[2] ? ` <span class="muted">${l[2]}</span>` : ''}${l[0] === 'DEF' && l[4] ? ` <span class="muted share-explain">${defNote(l[4])}</span>` : ''}</span><span class="n32-slot-p">${num(l[3], 2)}</span></div>`).join('')}
      ${(g.bench || []).some(b => b[2] > 0) ? `<div class="n32-bench share-explain">Bank: ${g.bench.filter(b => b[2] > 0).slice(0, 3).map(b => `${e(b[0])} (${b[1]}, ${num(b[2])})`).join(' · ')}</div>` : ''}</div>`;
  }
  const defNote = d => [d.sacks && `${d.sacks} Sack`, d.ints && `${d.ints} INT`, d.fumRec && `${d.fumRec} FR`, d.tds && `${d.tds} TD`, d.stTds && `${d.stTds} ST-TD`, d.safeties && `${d.safeties} Safety`, d.blocks && `${d.blocks} Block`, `${d.pa} PA`].filter(Boolean).join(', ');

  // ---------- Übersicht ----------
  function home(ctx) {
    const m = model(ctx.data);
    if (!m.weeks.length) return noData(ctx);
    const lastAny = m.weeks[m.weeks.length - 1];
    const w = m.lastC || lastAny;
    const fin = m.teams.map(id => m.games[id].find(g => g.w === w)).filter(Boolean).sort((a, b) => b.pts - a.pts);
    const ids = m.teams.filter(id => m.games[id].find(g => g.w === w));
    const top = fin[0], flop = fin[fin.length - 1];
    const topId = ids.find(id => m.games[id].find(g => g.w === w) === top), flopId = ids.find(id => m.games[id].find(g => g.w === w) === flop);
    const players = fin.flatMap(g => g.lineup.filter(l => l[1] && l[2] !== 'DEF').map(l => ({ name: l[1], pos: l[2], pts: l[3], team: ids.find(id => m.games[id].find(x => x.w === w) === g) }))).sort((a, b) => b.pts - a.pts);
    const tab = m.table(m.lastC || 0);
    const prev = m.complete.length > 1 ? m.table(m.complete[m.complete.length - 2]) : [];
    const prevRank = Object.fromEntries(prev.map(r => [r.id, r.rank]));
    const live = lastAny !== m.lastC ? lastAny : null;
    const liveCount = live ? Object.values(m.N.weeks[live].teams).filter(t => t.status === 'final').length : 0;
    return `
      ${head('🏈 NFL 32', `Alle 32 NFL-Teams als Fantasy-Teams · <span class="explain">beste Aufstellung jeder Woche, DOPE-Scoring, All-Play</span> · Saison ${m.N.season} · ${updated(m)}`)}
      <div class="n32-kpis" data-share="NFL 32 · Woche ${w}">
        ${kpi(`Team der Woche ${w}`, `${dot(topId)} ${e(T().nick(topId))}`, `${num(top.pts)} Pkt.`)}
        ${kpi('Spieler der Woche', e(players[0].name), `${players[0].pos} · ${e(T().nick(players[0].team))} · ${num(players[0].pts)}`)}
        ${kpi('Schlusslicht', `${dot(flopId)} ${e(T().nick(flopId))}`, `${num(flop.pts)} Pkt.`)}
        ${kpi('Ø der Woche', num(fin.reduce((a, g) => a + g.pts, 0) / fin.length), `${fin.length} Teams · ${(m.N.weeks[w].byes || []).length ? 'Bye: ' + m.N.weeks[w].byes.join(', ') : 'keine Byes'}`)}
      </div>
      ${live ? `<div class="note">Woche ${live} läuft: ${liveCount} von ${Object.keys(m.N.weeks[live].teams).length} Teams gewertet — <a href="${ctx.href('n32week', live)}">Zwischenstand</a>. In die Tabelle zählt die Woche, sobald alle Spiele durch sind.</div>` : ''}
      <h2 class="group-title">Power-Tabelle Top 10 <a class="muted n32-more" href="${ctx.href('n32table')}">alle 32 →</a></h2>
      <div class="table-wrap" data-share="NFL 32 · Top 10 nach Woche ${m.lastC}">
        <table class="table compact"><thead><tr><th class="num">#</th><th>Team</th><th class="num">All-Play</th><th class="num">Quote</th><th class="num">Ø Pkt.</th><th class="num">Trend</th></tr></thead>
        <tbody>${tab.slice(0, 10).map(r => { const mv = prevRank[r.id] ? prevRank[r.id] - r.rank : 0; return `<tr><td class="num rank">${r.rank}</td><td>${teamCell(ctx, r.id)}</td><td class="num">${rec(r.ap)}</td><td class="num strong">${pct(r.pct)}</td><td class="num">${num(r.ppg)}</td><td class="num ${mv > 0 ? 'up' : mv < 0 ? 'down' : 'muted'}">${mv > 0 ? '▲ ' + mv : mv < 0 ? '▼ ' + -mv : '–'}</td></tr>`; }).join('')}</tbody></table>
      </div>
      <h2 class="group-title">Top-Scorer Woche ${w}</h2>
      <div class="table-wrap"><table class="table compact"><thead><tr><th class="num">#</th><th>Spieler</th><th>Team</th><th class="num">Pkt.</th></tr></thead>
        <tbody>${players.slice(0, 8).map((p, i) => `<tr><td class="num rank">${i + 1}</td><td>${e(p.name)} <span class="muted">${p.pos}</span></td><td>${teamCell(ctx, p.team)}</td><td class="num strong">${num(p.pts)}</td></tr>`).join('')}</tbody></table></div>`;
  }

  // ---------- Power-Tabelle ----------
  function tablePage(ctx) {
    const m = model(ctx.data);
    if (!m.lastC) return noData(ctx);
    const upto = Number(ctx.params[0]) && m.complete.includes(Number(ctx.params[0])) ? Number(ctx.params[0]) : m.lastC;
    const tab = m.table(upto);
    const i = m.complete.indexOf(upto);
    const prevRank = i > 0 ? Object.fromEntries(m.table(m.complete[i - 1]).map(r => [r.id, r.rank])) : {};
    return `
      ${head('🏆 Power-Tabelle', `<span class="explain">All-Play: jede Woche gegen alle Teams, die gespielt haben. Sortiert nach Quote, dann Ø Punkte. Duell = Fantasy-Punkte gegen den echten NFL-Gegner.</span> · nach Woche ${upto}`)}
      ${weekChips(ctx, 'n32table', m.complete, upto)}
      <div class="table-wrap" data-share="NFL 32 · Power-Tabelle nach Woche ${upto}">
        <table class="table compact n32-table"><thead><tr>
          <th class="num">#</th><th>Team</th><th class="num">All-Play</th><th class="num">Quote</th><th class="num">Ø Pkt.</th><th class="num">PF</th>
          <th class="num" title="Ø der letzten drei Spiele">Form</th><th class="num">Max</th><th class="num">Min</th><th class="num" title="Wochensiege (Platz 1)">👑</th><th class="num" title="Fantasy-Duell gegen den echten Gegner">Duell</th><th class="num">Trend</th>
        </tr></thead>
        <tbody>${tab.map(r => { const mv = prevRank[r.id] ? prevRank[r.id] - r.rank : 0; return `<tr>
          <td class="num rank">${r.rank}</td><td>${teamCell(ctx, r.id, { abbr: true })}</td>
          <td class="num">${rec(r.ap)}</td><td class="num strong">${pct(r.pct)}</td><td class="num">${num(r.ppg)}</td><td class="num muted">${num(r.pf, 0)}</td>
          <td class="num ${r.form > r.ppg + 5 ? 'up' : r.form < r.ppg - 5 ? 'down' : ''}">${num(r.form)}</td><td class="num muted">${num(r.best)}</td><td class="num muted">${num(r.worst)}</td>
          <td class="num">${r.tops || ''}</td><td class="num">${rec(r.duel)}</td>
          <td class="num ${mv > 0 ? 'up' : mv < 0 ? 'down' : 'muted'}">${mv > 0 ? '▲ ' + mv : mv < 0 ? '▼ ' + -mv : '–'}</td></tr>`; }).join('')}</tbody></table>
      </div>`;
  }

  // ---------- Rolling Rankings ----------
  const rollSet = ctx => ({ mode: 'table', sel: [], ...ctx.store.getJSON('n32rolling', {}) });
  function rollModel(m, mode) {
    const byTeam = {};
    m.complete.forEach(w => {
      if (mode === 'week') { m.teams.forEach(id => { const g = m.games[id].find(x => x.w === w); if (g) (byTeam[id] = byTeam[id] || {})[w] = { rank: g.rank, tip: `${num(g.pts)} Pkt. · All-Play ${rec(g.ap)}` }; }); return; }
      let tab = m.table(w);
      if (mode === 'ppg') { tab = tab.slice().sort((a, b) => b.ppg - a.ppg); tab.forEach((r, i) => { r.rank = i + 1; }); }
      tab.forEach(r => { (byTeam[r.id] = byTeam[r.id] || {})[w] = { rank: r.rank, tip: `${rec(r.ap)} (${pct(r.pct)}) · Ø ${num(r.ppg)}` }; });
    });
    return byTeam;
  }
  function rollSvg(m, byTeam, sel, width) {
    const rows = m.teams.filter(id => byTeam[id]).map(id => ({
      id, name: T().nick(id), emoji: '',
      ranks: m.complete.map(w => (byTeam[id][w] ? byTeam[id][w].rank : null)),
      tips: m.complete.map(w => (byTeam[id][w] ? `${T().nick(id)} · W${w}: Platz ${byTeam[id][w].rank} · ${byTeam[id][w].tip}` : '')),
    }));
    return MFHFB.charts.bump({ cols: m.complete.map(w => 'W' + w), rows, sel, width, maxRank: 32, label: 'Rangverlauf der 32 Teams' });
  }
  function rollingPage(ctx) {
    const m = model(ctx.data);
    if (!m.lastC) return noData(ctx);
    const set = rollSet(ctx);
    const byTeam = rollModel(m, set.mode);
    const sel = set.sel.filter(id => byTeam[id]).slice(0, 3);
    const lastW = m.lastC, prevW = m.complete[m.complete.length - 2];
    const order = m.teams.filter(id => byTeam[id] && byTeam[id][lastW]).sort((a, b) => byTeam[a][lastW].rank - byTeam[b][lastW].rank)
      .concat(m.teams.filter(id => byTeam[id] && !byTeam[id][lastW]));
    const modes = [['table', 'Tabelle (All-Play)'], ['ppg', 'Ø Punkte'], ['week', 'Wochenrang']];
    const sub = { table: 'Tabellenplatz nach jeder Woche (All-Play-Quote, Tiebreak Ø Punkte)', ppg: 'Rang nach Ø Punkten bis zur jeweiligen Woche', week: 'Platz der jeweiligen Woche allein (Bye = Lücke)' }[set.mode];
    return `
      ${head('📊 Rolling Rankings', `<span class="explain">${sub}</span> · Saison ${m.N.season}`)}
      <div class="controls"><div class="seg" role="group">${modes.map(([v, l]) => `<button type="button" class="seg-btn${set.mode === v ? ' active' : ''}" data-mode="${v}">${l}</button>`).join('')}</div></div>
      <div class="pick-row n32-picks">${[...m.teams].sort().map(id => { const k = sel.indexOf(id); return `<button type="button" class="pick${k > -1 ? ' on ' + SEL[k] : ''}" data-pick="${id}" title="${e(T().name(id))}">${dot(id)}<span>${id}</span></button>`; }).join('')}
        ${sel.length ? '<button type="button" class="pick clear" data-clear>✕</button>' : ''}</div>
      <div class="card bump-card" data-share="NFL 32 · Rolling Rankings">
        <div class="bump-wrap" data-bump>${rollSvg(m, byTeam, sel, 900)}</div>
        <div class="bump-tip" hidden></div>
        <div class="bump-hint explain">${sel.length ? '' : 'Tipp: bis zu drei Teams antippen, um ihren Verlauf hervorzuheben. '}Hovern zeigt Details.</div>
      </div>
      <h2 class="group-title">Als Tabelle</h2>
      <div class="table-wrap"><table class="table compact"><thead><tr><th>Team</th>${m.complete.map(w => `<th class="num">W${w}</th>`).join('')}${prevW ? '<th class="num">Trend</th>' : ''}</tr></thead>
        <tbody>${order.map(id => { const c = byTeam[id][lastW], p = prevW && byTeam[id][prevW]; const mv = c && p ? p.rank - c.rank : 0; const k = sel.indexOf(id);
          return `<tr${k > -1 ? ` class="row-${SEL[k]}"` : ''}><td>${teamCell(ctx, id)}</td>${m.complete.map(w => `<td class="num${w === lastW ? ' strong' : ''}">${byTeam[id][w] ? byTeam[id][w].rank : '–'}</td>`).join('')}${prevW ? `<td class="num ${mv > 0 ? 'up' : mv < 0 ? 'down' : 'muted'}">${mv > 0 ? '▲ ' + mv : mv < 0 ? '▼ ' + -mv : '–'}</td>` : ''}</tr>`; }).join('')}</tbody></table></div>`;
  }
  function rollingMount(root, ctx) {
    const set = rollSet(ctx);
    const save = patch => { ctx.store.setJSON('n32rolling', { ...rollSet(ctx), ...patch }); ctx.refresh(); };
    root.querySelectorAll('[data-mode]').forEach(b => b.addEventListener('click', () => save({ mode: b.dataset.mode })));
    root.querySelectorAll('[data-pick]').forEach(b => b.addEventListener('click', () => {
      const id = b.dataset.pick; let sel = set.sel.filter(x => x !== id);
      if (sel.length === set.sel.length) sel = [...set.sel, id].slice(-3);
      save({ sel });
    }));
    const clr = root.querySelector('[data-clear]'); if (clr) clr.addEventListener('click', () => save({ sel: [] }));
    const wrap = root.querySelector('[data-bump]'); if (!wrap) return;
    const m = model(ctx.data), byTeam = rollModel(m, set.mode), sel = set.sel.filter(id => byTeam[id]).slice(0, 3);
    MFHFB.charts.responsive(wrap, w => rollSvg(m, byTeam, sel, w));
    MFHFB.charts.bumpInteract(wrap, root.querySelector('.bump-tip'), id => { const btn = root.querySelector(`[data-pick="${CSS.escape(id)}"]`); if (btn) btn.click(); });
  }

  // ---------- Woche ----------
  function weekPage(ctx) {
    const m = model(ctx.data);
    if (!m.weeks.length) return noData(ctx);
    const w = m.weeks.includes(Number(ctx.params[0])) ? Number(ctx.params[0]) : m.weeks[m.weeks.length - 1];
    const W = m.N.weeks[w];
    const fin = m.teams.map(id => ({ id, g: m.games[id].find(x => x.w === w) })).filter(x => x.g).sort((a, b) => b.g.pts - a.g.pts);
    const open = Object.entries(W.teams).filter(([, t]) => t.status !== 'final').map(([id, t]) => ({ id, t }));
    const avg = fin.reduce((a, x) => a + x.g.pts, 0) / (fin.length || 1);
    const row = ({ id, g }) => {
      const duel = g.oppPts == null ? '' : g.pts > g.oppPts ? 'W' : g.pts < g.oppPts ? 'L' : 'T';
      return `<details class="n32-row"><summary>
        <span class="n32-r">${g.rank}</span>
        <span class="n32-t">${dot(id)}<b>${e(T().nick(id))}</b></span>
        <span class="n32-p">${num(g.pts)}</span>
        <span class="n32-ap muted">${rec(g.ap)}</span>
        <span class="n32-vs muted">${g.home ? 'vs' : '@'} ${e(g.opp)}${duel ? ` <span class="res res-${duel}">${duel}</span> ${g.oppPts != null ? num(g.oppPts) : ''}` : ''}</span>
        <span class="n32-real muted share-explain">NFL ${g.score[0]}:${g.score[1]}</span>
      </summary>${lineupHtml(g)}</details>`;
    };
    return `
      ${head(`📅 Woche ${w}`, `${W.complete ? 'abgeschlossen' : `<b>läuft</b> — ${fin.length} von ${Object.keys(W.teams).length} Teams gewertet`} · Ø ${num(avg)} · <span class="explain">antippen = Aufstellung. All-Play = Bilanz gegen alle Teams dieser Woche, „vs/@“ = Fantasy-Duell mit dem echten Gegner.</span>`)}
      ${weekChips(ctx, 'n32week', m.weeks, w)}
      <div class="n32-list" data-share="NFL 32 · Woche ${w}">${fin.map(row).join('')}</div>
      ${open.length ? `<h2 class="group-title">Noch offen</h2><div class="n32-open">${open.map(({ id, t }) => `<span class="n32-pill">${dot(id)} ${e(T().nick(id))} ${t.home ? 'vs' : '@'} ${e(t.opp)}${t.kickoff ? ` <span class="muted">${t.kickoff.slice(8, 10)}.${t.kickoff.slice(5, 7)}. ${t.kickoff.slice(11)} ET</span>` : ''}</span>`).join('')}</div>` : ''}
      ${W.byes && W.byes.length ? `<div class="note">Bye: ${W.byes.map(id => `${dot(id)} ${e(T().nick(id))}`).join(' · ')}</div>` : ''}`;
  }

  // ---------- Positionsstärke ----------
  function groupAvgs(m, upto) {
    const out = {};
    m.teams.forEach(id => {
      const g = m.games[id].filter(x => x.complete && x.w <= upto);
      out[id] = {}; GROUPS.forEach(k => { out[id][k] = g.length ? g.reduce((a, x) => a + x.groups[k], 0) / g.length : 0; });
      out[id].ALL = g.length ? g.reduce((a, x) => a + x.pts, 0) / g.length : 0;
    });
    const ranks = {};
    [...GROUPS, 'ALL'].forEach(k => { const s = m.teams.slice().sort((a, b) => out[b][k] - out[a][k]); s.forEach((id, i) => { (ranks[id] = ranks[id] || {})[k] = i + 1; }); });
    const league = {}; [...GROUPS, 'ALL'].forEach(k => { league[k] = m.teams.reduce((a, id) => a + out[id][k], 0) / m.teams.length; });
    return { avg: out, ranks, league };
  }
  const heat = rank => `--h:${Math.round(140 - (rank - 1) * (140 / 31))}`; // 1 = grün, 32 = rot
  function posPage(ctx) {
    const m = model(ctx.data);
    if (!m.lastC) return noData(ctx);
    const P = groupAvgs(m, m.lastC);
    const key = [...GROUPS, 'ALL'].includes(ctx.params[0]) ? ctx.params[0] : 'ALL';
    const rows = m.teams.slice().sort((a, b) => P.avg[b][key] - P.avg[a][key]);
    return `
      ${head('🧩 Positionsstärke', `<span class="explain">Ø Punkte pro Spiel je Position in der besten Aufstellung (FLEX zählt zur Position des Spielers). Farbe = Rang unter 32. Spaltenkopf antippen = sortieren.</span> · nach Woche ${m.lastC}`)}
      <div class="table-wrap" data-share="NFL 32 · Positionsstärke nach Woche ${m.lastC}"><table class="table compact n32-heat"><thead><tr><th class="num">#</th><th>Team</th>
        ${[...GROUPS, 'ALL'].map(k => `<th class="num"><a href="${ctx.href('n32pos', k)}" class="${k === key ? 'strong' : 'muted'}">${k === 'ALL' ? 'Gesamt' : k}${k === key ? ' ▾' : ''}</a></th>`).join('')}</tr></thead>
        <tbody>${rows.map((id, i) => `<tr><td class="num rank">${i + 1}</td><td>${teamCell(ctx, id)}</td>${[...GROUPS, 'ALL'].map(k => `<td class="num n32-h" style="${heat(P.ranks[id][k])}" title="Rang ${P.ranks[id][k]}">${num(P.avg[id][k])}</td>`).join('')}</tr>`).join('')}
        <tr class="n32-avg"><td></td><td class="muted">Liga-Ø</td>${[...GROUPS, 'ALL'].map(k => `<td class="num muted">${num(P.league[k])}</td>`).join('')}</tr></tbody></table></div>`;
  }

  // ---------- Team-Profil ----------
  function topPlayers(games) {
    const p = {};
    games.forEach(g => g.lineup.forEach(l => { if (!l[1] || l[2] === 'DEF') return; const k = l[1]; (p[k] = p[k] || { name: k, pos: l[2], pts: 0, starts: 0, best: 0 }); p[k].pts += l[3]; p[k].starts++; p[k].best = Math.max(p[k].best, l[3]); }));
    return Object.values(p).sort((a, b) => b.pts - a.pts);
  }
  function posBars(P, ids) {
    return `<div class="n32-bars">${GROUPS.map(k => {
      const max = Math.max(...Object.values(P.avg).map(a => a[k])) || 1;
      return `<div class="n32-bar-row"><span class="n32-bar-k">${k}</span><div class="n32-bar-cols">${ids.map((id, j) => `<div class="n32-bar-line"><div class="n32-bar"><i style="width:${(P.avg[id][k] / max * 100).toFixed(1)}%;background:${T().color(id)}"></i><b class="n32-bar-avg" style="left:${(P.league[k] / max * 100).toFixed(1)}%"></b></div><span class="n32-bar-v">${num(P.avg[id][k])} <span class="muted">#${P.ranks[id][k]}</span></span></div>`).join('')}</div></div>`;
    }).join('')}<div class="n32-bar-legend explain">Strich = Liga-Ø · #Rang unter 32</div></div>`;
  }
  function teamPicker(ctx, page, cur, rest = []) {
    return `<label class="n32-select">${dot(cur)}<select data-nav="${page}" data-rest="${e(JSON.stringify(rest))}">${[...MFHFB.nfl.teams.all()].map(id => `<option value="${id}"${id === cur ? ' selected' : ''}>${e(T().name(id))}</option>`).join('')}</select></label>`;
  }
  function teamPage(ctx) {
    const m = model(ctx.data);
    if (!m.weeks.length) return noData(ctx);
    const id = m.teams.includes(ctx.params[0]) ? ctx.params[0] : (ctx.store.getJSON('n32team', 'CHI'));
    const games = m.games[id] || [];
    const tab = m.lastC ? m.table(m.lastC) : [];
    const r = tab.find(x => x.id === id);
    const P = m.lastC ? groupAvgs(m, m.lastC) : null;
    const tops = topPlayers(games.filter(g => g.complete));
    return `
      ${head(`${dot(id)} ${e(T().name(id))}`, `Team-Profil · <a href="${ctx.href('n32compare', id)}">vergleichen →</a>`)}
      <div class="controls">${teamPicker(ctx, 'n32team', id)}</div>
      <div data-share="NFL 32 · ${e(T().name(id))}">
      ${r ? `<div class="n32-kpis">${kpi('Power-Rang', `#${r.rank}`, `nach Woche ${m.lastC}`)}${kpi('All-Play', rec(r.ap), pct(r.pct))}${kpi('Ø Punkte', num(r.ppg), `Form ${num(r.form)}`)}${kpi('Max / Min', `${num(r.best)} / ${num(r.worst)}`, `${r.tops}× Wochen-#1 · Duell ${rec(r.duel)}`)}</div>` : ''}
      ${P ? `<h2 class="group-title">Positionsstärke</h2>${posBars(P, [id])}` : ''}
      </div>
      <h2 class="group-title">Woche für Woche</h2>
      <div class="n32-list">${games.slice().reverse().map(g => {
        const duel = g.oppPts == null ? '' : g.pts > g.oppPts ? 'W' : g.pts < g.oppPts ? 'L' : 'T';
        return `<details class="n32-row"><summary><span class="n32-r">W${g.w}</span><span class="n32-t">${g.home ? 'vs' : '@'} ${dot(g.opp)}${e(T().nick(g.opp))}</span><span class="n32-p">${num(g.pts)}</span><span class="n32-ap muted">#${g.rank}/${g.of} · ${rec(g.ap)}</span><span class="n32-vs muted">${duel ? `<span class="res res-${duel}">${duel}</span> ${num(g.oppPts)}` : ''}</span><span class="n32-real muted">NFL ${g.score[0]}:${g.score[1]}${g.complete ? '' : ' · läuft'}</span></summary>${lineupHtml(g)}</details>`;
      }).join('')}</div>
      <h2 class="group-title">Top-Scorer der Saison <span class="muted">(nur Einsätze in der besten Aufstellung)</span></h2>
      <div class="table-wrap"><table class="table compact"><thead><tr><th>Spieler</th><th class="num">Pos</th><th class="num">Starts</th><th class="num">Pkt.</th><th class="num">Ø</th><th class="num">Max</th></tr></thead>
        <tbody>${tops.slice(0, 12).map(p => `<tr><td>${e(p.name)}</td><td class="num muted">${p.pos}</td><td class="num">${p.starts}</td><td class="num strong">${num(p.pts)}</td><td class="num">${num(p.pts / p.starts)}</td><td class="num muted">${num(p.best)}</td></tr>`).join('')}</tbody></table></div>`;
  }

  // ---------- Team-Vergleich ----------
  function comparePage(ctx) {
    const m = model(ctx.data);
    if (!m.lastC) return noData(ctx);
    const saved = ctx.store.getJSON('n32compare', ['CHI', 'GB']);
    const a = m.teams.includes(ctx.params[0]) ? ctx.params[0] : saved[0];
    let b = m.teams.includes(ctx.params[1]) ? ctx.params[1] : saved[1];
    if (b === a) b = m.teams.find(x => x !== a);
    const tab = m.table(m.lastC), ra = tab.find(x => x.id === a), rb = tab.find(x => x.id === b);
    const P = groupAvgs(m, m.lastC);
    const ga = Object.fromEntries(m.games[a].filter(g => g.complete).map(g => [g.w, g])), gb = Object.fromEntries(m.games[b].filter(g => g.complete).map(g => [g.w, g]));
    const h2h = { w: 0, l: 0, t: 0 };
    m.complete.forEach(w => { if (ga[w] && gb[w]) { if (ga[w].pts > gb[w].pts) h2h.w++; else if (ga[w].pts < gb[w].pts) h2h.l++; else h2h.t++; } });
    const line = (label, fa, fb, better = 'high', fmt = v => v) => {
      const va = fa(ra), vb = fb(rb);
      const wa = better === 'high' ? va > vb : va < vb, wb = better === 'high' ? vb > va : vb < va;
      return `<tr><td class="num${wa ? ' strong n32-win' : ''}">${fmt(va)}</td><td class="n32-cmp-l">${label}</td><td class="num${wb ? ' strong n32-win' : ''}">${fmt(vb)}</td></tr>`;
    };
    return `
      ${head('🆚 Team-Vergleich', `<span class="explain">Zwei Teams nebeneinander: Tabelle, Positionsstärke und jede Woche im direkten Punktevergleich.</span> · nach Woche ${m.lastC}`)}
      <div class="controls n32-vs-pick">${teamPicker(ctx, 'n32compare', a, [b])}<span class="muted">vs</span>${teamPicker(ctx, 'n32compare', b, [a, 'second'])}</div>
      <div data-share="NFL 32 · ${e(T().nick(a))} vs ${e(T().nick(b))}">
      <div class="card n32-cmp"><table class="table compact"><thead><tr><th class="num">${dot(a)} ${e(T().nick(a))}</th><th></th><th class="num">${dot(b)} ${e(T().nick(b))}</th></tr></thead><tbody>
        ${line('Power-Rang', r => r.rank, r => r.rank, 'low', v => '#' + v)}
        ${line('All-Play', r => r.pct, r => r.pct, 'high', pct)}
        ${line('Ø Punkte', r => r.ppg, r => r.ppg, 'high', v => num(v))}
        ${line('Form (letzte 3)', r => r.form, r => r.form, 'high', v => num(v))}
        ${line('Bestwert', r => r.best, r => r.best, 'high', v => num(v))}
        ${line('Tiefstwert', r => r.worst, r => r.worst, 'high', v => num(v))}
        ${line('Ø Wochenrang', r => r.avgRank, r => r.avgRank, 'low', v => num(v))}
        <tr><td class="num strong">${h2h.w}</td><td class="n32-cmp-l">Direkter Wochenvergleich${h2h.t ? ` (${h2h.t} Remis)` : ''}</td><td class="num strong">${h2h.l}</td></tr>
      </tbody></table></div>
      <h2 class="group-title">Positionsstärke</h2>${posBars(P, [a, b])}
      </div>
      <h2 class="group-title">Woche für Woche</h2>
      <div class="table-wrap"><table class="table compact"><thead><tr><th>Woche</th><th class="num">${e(T().nick(a))}</th><th class="num">${e(T().nick(b))}</th><th class="num">Diff</th></tr></thead>
        <tbody>${m.complete.map(w => { const x = ga[w], y = gb[w]; const d = x && y ? x.pts - y.pts : null;
          return `<tr><td>W${w}</td><td class="num${d > 0 ? ' strong n32-win' : ''}">${x ? num(x.pts) + ` <span class="muted">#${x.rank}</span>` : '<span class="muted">Bye</span>'}</td><td class="num${d < 0 ? ' strong n32-win' : ''}">${y ? num(y.pts) + ` <span class="muted">#${y.rank}</span>` : '<span class="muted">Bye</span>'}</td><td class="num ${d > 0 ? 'up' : d < 0 ? 'down' : 'muted'}">${d == null ? '–' : MFHFB.ui.signed(d)}</td></tr>`; }).join('')}</tbody></table></div>`;
  }

  function navMount(page, storeKey) {
    return (root, ctx) => {
      root.querySelectorAll('select[data-nav]').forEach(s => s.addEventListener('change', () => {
        const rest = JSON.parse(s.dataset.rest || '[]');
        let parts;
        if (page === 'n32compare') parts = rest[1] === 'second' ? [rest[0], s.value] : [s.value, rest[0]];
        else parts = [s.value];
        ctx.store.setJSON(storeKey, page === 'n32compare' ? parts : s.value);
        location.hash = ctx.href(page, ...parts).replace(/^.*#/, '#');
      }));
      if (page === 'n32team' && ctx.params[0]) ctx.store.setJSON(storeKey, ctx.params[0]);
      if (page === 'n32compare' && ctx.params[1]) ctx.store.setJSON(storeKey, [ctx.params[0], ctx.params[1]]);
    };
  }

  // ---------- Spielplan-Liga: echter NFL-Spielplan als H2H (+ optional Median-Spiel) ----------
  //  Jede Woche Fantasy-Punkte gegen die Fantasy-Punkte des echten NFL-Gegners.
  //  Median-Bonus (wie DOPE/Sleeper): zusätzlich W/L gegen den Median aller
  //  Teams dieser Woche. Zum Vergleich: die echte NFL-Bilanz.
  function weekMedian(m, w) {
    const v = m.teams.map(id => m.games[id].find(g => g.w === w)).filter(Boolean).map(g => g.pts).sort((a, b) => a - b);
    if (!v.length) return null;
    const h = Math.floor(v.length / 2);
    return v.length % 2 ? v[h] : (v[h - 1] + v[h]) / 2;
  }
  function schedTable(m, upto, median) {
    const med = {}; m.complete.forEach(w => { med[w] = weekMedian(m, w); });
    const rows = m.teams.map(id => {
      const g = m.games[id].filter(x => x.complete && x.w <= upto);
      const h = { w: 0, l: 0, t: 0 }, md = { w: 0, l: 0, t: 0 }, nfl = { w: 0, l: 0, t: 0 };
      let pf = 0, pa = 0;
      g.forEach(x => {
        pf += x.pts;
        if (x.oppPts != null) { pa += x.oppPts; if (x.pts > x.oppPts) h.w++; else if (x.pts < x.oppPts) h.l++; else h.t++; }
        if (x.pts > med[x.w]) md.w++; else if (x.pts < med[x.w]) md.l++; else md.t++;
        if (x.score[0] > x.score[1]) nfl.w++; else if (x.score[0] < x.score[1]) nfl.l++; else nfl.t++;
      });
      const tot = median ? { w: h.w + md.w, l: h.l + md.l, t: h.t + md.t } : h;
      const n = tot.w + tot.l + tot.t;
      return { id, gp: g.length, h, md, nfl, tot, pct: n ? (tot.w + tot.t / 2) / n : 0, pf, pa, ppg: g.length ? pf / g.length : 0 };
    }).filter(r => r.gp).sort((a, b) => (b.pct - a.pct) || (b.pf - a.pf));
    rows.forEach((r, i) => { r.rank = i + 1; });
    // Rang nach echter NFL-Bilanz (Tiebreak Fantasy-PF) für den Vergleich
    rows.slice().sort((a, b) => ((b.nfl.w + b.nfl.t / 2) / (b.gp || 1) - (a.nfl.w + a.nfl.t / 2) / (a.gp || 1)) || (b.pf - a.pf)).forEach((r, i) => { r.nflRank = i + 1; });
    return rows;
  }
  const schedSet = ctx => ({ median: false, sel: [], ...ctx.store.getJSON('n32sched', {}) });
  function schedRoll(m, median) {
    const byTeam = {};
    m.complete.forEach(w => schedTable(m, w, median).forEach(r => { (byTeam[r.id] = byTeam[r.id] || {})[w] = { rank: r.rank, tip: `${rec(r.tot)} · ${num(r.pf, 0)} PF` }; }));
    return byTeam;
  }
  function schedPage(ctx) {
    const m = model(ctx.data);
    if (!m.lastC) return noData(ctx);
    const set = schedSet(ctx);
    const upto = m.complete.includes(Number(ctx.params[0])) ? Number(ctx.params[0]) : m.lastC;
    const tab = schedTable(m, upto, set.median);
    const i = m.complete.indexOf(upto);
    const prevRank = i > 0 ? Object.fromEntries(schedTable(m, m.complete[i - 1], set.median).map(r => [r.id, r.rank])) : {};
    const byTeam = schedRoll(m, set.median);
    const sel = set.sel.filter(id => byTeam[id]).slice(0, 3);
    const lastW = m.lastC, prevW = m.complete[m.complete.length - 2];
    const order = m.teams.filter(id => byTeam[id] && byTeam[id][lastW]).sort((a, b) => byTeam[a][lastW].rank - byTeam[b][lastW].rank);
    const label = set.median ? 'H2H + Median' : 'H2H';
    return `
      ${head('🗓️ Spielplan-Liga', `<span class="explain">Was wäre, wenn: Jedes Team spielt Fantasy gegen seinen echten NFL-Gegner der Woche${set.median ? ' und bekommt zusätzlich ein Spiel gegen den Wochen-Median (Bonus-W, wie DOPE)' : ''}. Sortiert nach Bilanz, Tiebreak Punkte. NFL = echte Bilanz zum Vergleich.</span> · nach Woche ${upto}`)}
      <div class="controls"><div class="seg" role="group">${[[false, 'Nur H2H'], [true, 'H2H + Median (Bonus-W)']].map(([v, l]) => `<button type="button" class="seg-btn${set.median === v ? ' active' : ''}" data-median="${v}">${l}</button>`).join('')}</div></div>
      ${weekChips(ctx, 'n32sched', m.complete, upto)}
      <div class="table-wrap" data-share="NFL 32 · Spielplan-Liga (${label}) nach Woche ${upto}">
        <table class="table compact"><thead><tr>
          <th class="num">#</th><th>Team</th><th class="num">Bilanz</th>${set.median ? '<th class="num" title="davon gegen den echten Gegner">H2H</th><th class="num" title="Bonus-Spiel gegen den Wochen-Median">Median</th>' : ''}
          <th class="num">PF</th><th class="num" title="Fantasy-Punkte der echten Gegner">PA</th><th class="num" title="Echte NFL-Bilanz">NFL</th><th class="num" title="Platz nach Fantasy minus Platz nach echter NFL-Bilanz">vs NFL</th><th class="num">Trend</th>
        </tr></thead>
        <tbody>${tab.map(r => { const mv = prevRank[r.id] ? prevRank[r.id] - r.rank : 0; const d = r.nflRank - r.rank; return `<tr>
          <td class="num rank">${r.rank}</td><td>${teamCell(ctx, r.id, { abbr: true })}</td>
          <td class="num strong">${rec(r.tot)}</td>${set.median ? `<td class="num">${rec(r.h)}</td><td class="num">${rec(r.md)}</td>` : ''}
          <td class="num">${num(r.pf, 0)}</td><td class="num muted">${num(r.pa, 0)}</td><td class="num muted">${rec(r.nfl)}</td>
          <td class="num ${d > 0 ? 'up' : d < 0 ? 'down' : 'muted'}" title="NFL-Platz ${r.nflRank}">${d ? MFHFB.ui.signed(d, 0) : '±0'}</td>
          <td class="num ${mv > 0 ? 'up' : mv < 0 ? 'down' : 'muted'}">${mv > 0 ? '▲ ' + mv : mv < 0 ? '▼ ' + -mv : '–'}</td></tr>`; }).join('')}</tbody></table>
      </div>
      <h2 class="group-title">Rolling Rankings · ${label}</h2>
      <div class="pick-row n32-picks">${[...m.teams].sort().map(id => { const k = sel.indexOf(id); return `<button type="button" class="pick${k > -1 ? ' on ' + SEL[k] : ''}" data-pick="${id}" title="${e(T().name(id))}">${dot(id)}<span>${id}</span></button>`; }).join('')}
        ${sel.length ? '<button type="button" class="pick clear" data-clear>✕</button>' : ''}</div>
      <div class="card bump-card" data-share="NFL 32 · Spielplan-Liga Rolling (${label})">
        <div class="bump-wrap" data-bump>${rollSvg(m, byTeam, sel, 900)}</div>
        <div class="bump-tip" hidden></div>
        <div class="bump-hint explain">${sel.length ? '' : 'Tipp: bis zu drei Teams antippen, um ihren Verlauf hervorzuheben. '}Hovern zeigt Details.</div>
      </div>
      <div class="table-wrap"><table class="table compact"><thead><tr><th>Team</th>${m.complete.map(w => `<th class="num">W${w}</th>`).join('')}${prevW ? '<th class="num">Trend</th>' : ''}</tr></thead>
        <tbody>${order.map(id => { const c = byTeam[id][lastW], p = prevW && byTeam[id][prevW]; const mv = c && p ? p.rank - c.rank : 0; const k = sel.indexOf(id);
          return `<tr${k > -1 ? ` class="row-${SEL[k]}"` : ''}><td>${teamCell(ctx, id)}</td>${m.complete.map(w => `<td class="num${w === lastW ? ' strong' : ''}">${byTeam[id][w] ? byTeam[id][w].rank : '–'}</td>`).join('')}${prevW ? `<td class="num ${mv > 0 ? 'up' : mv < 0 ? 'down' : 'muted'}">${mv > 0 ? '▲ ' + mv : mv < 0 ? '▼ ' + -mv : '–'}</td>` : ''}</tr>`; }).join('')}</tbody></table></div>`;
  }
  function schedMount(root, ctx) {
    const set = schedSet(ctx);
    const save = patch => { ctx.store.setJSON('n32sched', { ...schedSet(ctx), ...patch }); ctx.refresh(); };
    root.querySelectorAll('[data-median]').forEach(b => b.addEventListener('click', () => save({ median: b.dataset.median === 'true' })));
    root.querySelectorAll('[data-pick]').forEach(b => b.addEventListener('click', () => {
      const id = b.dataset.pick; let sel = set.sel.filter(x => x !== id);
      if (sel.length === set.sel.length) sel = [...set.sel, id].slice(-3);
      save({ sel });
    }));
    const clr = root.querySelector('[data-clear]'); if (clr) clr.addEventListener('click', () => save({ sel: [] }));
    const wrap = root.querySelector('[data-bump]'); if (!wrap) return;
    const m = model(ctx.data), byTeam = schedRoll(m, set.median), sel = set.sel.filter(id => byTeam[id]).slice(0, 3);
    MFHFB.charts.responsive(wrap, w => rollSvg(m, byTeam, sel, w));
    MFHFB.charts.bumpInteract(wrap, root.querySelector('.bump-tip'), id => { const btn = root.querySelector(`[data-pick="${CSS.escape(id)}"]`); if (btn) btn.click(); });
  }

  const reg = p => MFHFB.pages.register({ applies: A, data: D, ...p });
  reg({ id: 'home', section: 'home', label: 'Übersicht', icon: '🏠', render: home });
  reg({ id: 'n32table', section: 'standings', label: 'Power-Tabelle', icon: '🏆', render: tablePage });
  reg({ id: 'n32rolling', section: 'standings', label: 'Rolling Rankings', icon: '📊', render: rollingPage, mount: rollingMount });
  reg({ id: 'n32sched', section: 'standings', label: 'Spielplan-Liga', icon: '🗓️', render: schedPage, mount: schedMount });
  reg({ id: 'n32week', section: 'matchups', label: 'Wochen', icon: '📅', render: weekPage, title: ({ params }) => (params[0] ? `Woche ${params[0]}` : 'Wochen') });
  reg({ id: 'n32team', section: 'teams', label: 'Team-Profil', icon: '🧍', render: teamPage, mount: navMount('n32team', 'n32team'), title: ({ params }) => (params[0] ? MFHFB.nfl.teams.name(params[0]) : 'Team-Profil') });
  reg({ id: 'n32compare', section: 'teams', label: 'Team-Vergleich', icon: '🆚', render: comparePage, mount: navMount('n32compare', 'n32compare') });
  reg({ id: 'n32pos', section: 'teams', label: 'Positionsstärke', icon: '🧩', render: posPage });
})();
