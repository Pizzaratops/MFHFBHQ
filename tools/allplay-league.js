// ============================================================
//  All-Play-Ligen aus echten Teams: NFL 32 und NBA 30
// ============================================================
//  Jedes echte Team ist ein Fantasy-Team, gewertet wird die beste
//  Aufstellung aus den eigenen Spielern (Hindsight). Kein H2H-Spielplan —
//  Tabelle über All-Play (jede Woche gegen alle Teams, die gespielt haben).
//
//  NFL 32  leagues/nfl32/data/nfl32-weeks.js (NFL32) — 1 Spiel je Woche,
//          QB/2RB/2WR/TE/2FLEX/K/DEF, DOPE-Scoring (sync-nfl32.js)
//  NBA 30  leagues/nba30/data/nba30-weeks.js (NBA30) — mehrere Spiele je
//          Woche, je Spiel PG/SG/SF/PF/C/UTIL, BBC-Points (sync-nba30.js)
//
//  Gemeinsames Modell: pro Team und Woche ein Eintrag mit „units“ = Spiele
//  (NFL: genau eins). Seiten (applies: scoring 'allplay' + Sport):
//    home · n32table (Power-Tabelle) · n32rolling (Rolling Rankings)
//    n32sched (Spielplan-Liga: echte Gegner als H2H, optional Median-Bonus)
//    n32week (Wochen inkl. Aufstellungen) · n32team · n32compare · n32pos
//  Die Seiten-IDs heißen aus historischen Gründen „n32…“ (auch bei NBA 30).
// ============================================================

(function () {
  const SEL = ['sel-1', 'sel-2', 'sel-3'];
  const e = s => MFHFB.ui.esc(s);
  const num = (x, d = 1) => MFHFB.ui.num(x, d);
  const rec = r => `${r.w}-${r.l}${r.t ? '-' + r.t : ''}`;
  const pct = x => (x * 100).toFixed(1).replace(/\.0$/, '') + '%';
  const res = (a, b) => (a > b ? 'W' : a < b ? 'L' : 'T');
  const add = (r, a, b) => { r[a > b ? 'w' : a < b ? 'l' : 't']++; };
  const z = () => ({ w: 0, l: 0, t: 0 });
  const sum = (arr, f) => arr.reduce((a, x) => a + f(x), 0);
  const trend = mv => `<td class="num ${mv > 0 ? 'up' : mv < 0 ? 'down' : 'muted'}">${mv > 0 ? '▲ ' + mv : mv < 0 ? '▼ ' + -mv : '–'}</td>`;
  const head = (title, sub) => `<div class="page-head"><h1 class="page-title display">${title}</h1>${sub ? `<div class="page-sub">${sub}</div>` : ''}</div>`;
  const kpi = (label, value, sub) => `<div class="n32-kpi"><div class="n32-kpi-l">${label}</div><div class="n32-kpi-v">${value}</div>${sub ? `<div class="n32-kpi-s">${sub}</div>` : ''}</div>`;
  const dm = d => (d ? `${d.slice(8, 10)}.${d.slice(5, 7)}.` : '');
  const wd = d => ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'][new Date(d + 'T12:00:00Z').getUTCDay()];

  function build(cfg) {
    const A = { scoring: ['allplay'], sport: [cfg.sport] };
    const D = ['teams', cfg.file];

    // Team-Helfer (Name, Kurzname, Farbe)
    function teamsHelper(data) {
      if (cfg.sport === 'nfl') { const t = MFHFB.nfl.teams; return { name: t.name, nick: t.nick, color: t.color }; }
      const idx = {}; (data.LEAGUE_TEAMS || []).forEach(t => { idx[t.id] = t; });
      return { name: id => (idx[id] || {}).name || id, nick: id => (idx[id] || {}).nick || id, color: id => (idx[id] || {}).color || 'var(--league-accent)' };
    }

    // ---------- Modell ----------
    const cache = new WeakMap();
    function model(data) {
      const N = data[cfg.varName];
      if (!N) return null;
      if (cache.has(N)) return cache.get(N);
      const T = teamsHelper(data);
      const weeks = Object.keys(N.weeks || {}).map(Number).sort((a, b) => a - b);
      const complete = weeks.filter(w => N.weeks[w].complete);
      const teams = (data.LEAGUE_TEAMS || []).map(t => t.id);
      const games = {}; teams.forEach(id => { games[id] = []; });
      weeks.forEach(w => {
        const fin = Object.entries(N.weeks[w].teams || {}).filter(([, t]) => t.status === 'final');
        fin.forEach(([id, t]) => {
          const ap = z(); fin.forEach(([id2, t2]) => { if (id2 !== id) add(ap, t.pts, t2.pts); });
          const units = t.games || [t];
          const duel = t.duel || (() => { const r = z(); if (t.oppPts != null) add(r, t.pts, t.oppPts); return r; })();
          const groups = {}; cfg.groups.forEach(g => { groups[g] = 0; });
          units.forEach(u => u.lineup.forEach(l => { const k = cfg.groupOf(l); if (k in groups) groups[k] += l[3]; }));
          (games[id] = games[id] || []).push({ ...t, w, id, complete: N.weeks[w].complete, of: fin.length, rank: 1 + fin.filter(([, t2]) => t2.pts > t.pts).length, ap, units, gp: units.length, duel, groups });
        });
      });
      function table(upto) {
        const rows = teams.map(id => {
          const g = games[id].filter(x => x.complete && x.w <= upto);
          const ap = { w: sum(g, x => x.ap.w), l: sum(g, x => x.ap.l), t: sum(g, x => x.ap.t) };
          const n = ap.w + ap.l + ap.t, gp = sum(g, x => x.gp), pf = sum(g, x => x.pts);
          const duel = { w: sum(g, x => x.duel.w), l: sum(g, x => x.duel.l), t: sum(g, x => x.duel.t) };
          const pts = g.map(x => x.pts), last3 = g.slice(-3);
          return {
            id, weeks: g.length, gp, ap, pct: n ? (ap.w + ap.t / 2) / n : 0, pf, ppg: g.length ? pf / g.length : 0, ppgame: gp ? pf / gp : 0,
            best: pts.length ? Math.max(...pts) : 0, worst: pts.length ? Math.min(...pts) : 0, form: last3.length ? sum(last3, x => x.pts) / last3.length : 0,
            tops: g.filter(x => x.rank === 1).length, duel, avgRank: g.length ? sum(g, x => x.rank) / g.length : 0,
          };
        }).filter(r => r.weeks).sort((a, b) => (b.pct - a.pct) || (b.ppg - a.ppg));
        rows.forEach((r, i) => { r.rank = i + 1; });
        return rows;
      }
      const m = { N, T, weeks, complete, teams, games, table, lastC: complete[complete.length - 1] || null, n: teams.length };
      cache.set(N, m);
      return m;
    }

    // ---------- Bausteine ----------
    const dot = (m, id) => `<span class="n32-dot" style="--tc:${m.T.color(id)}"></span>`;
    const teamCell = (ctx, m, id, opt = {}) => `<a class="team-cell n32-team" href="${ctx.href('n32team', id)}">${dot(m, id)}<span class="team-name">${e(m.T.nick(id))}</span>${opt.abbr ? `<span class="muted n32-abbr">${e(id)}</span>` : ''}</a>`;
    const weekChips = (ctx, page, weeks, cur) => `<div class="chip-row n32-weeks">${weeks.map(w => `<a class="chip-link${w === cur ? ' active' : ''}" href="${ctx.href(page, w)}">W${w}</a>`).join('')}</div>`;
    const noData = () => MFHFB.ui.empty('Noch keine Wochen gewertet', cfg.noData, cfg.emoji);
    const updated = m => `Stand ${new Date(m.N.updated).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' })}`;
    const brand = cfg.title;
    const weekLabel = (m, w) => { const W = m.N.weeks[w]; return W && W.from ? `${dm(W.from)}–${dm(W.to)}` : ''; };

    const defNote = d => [d.sacks && `${d.sacks} Sack`, d.ints && `${d.ints} INT`, d.fumRec && `${d.fumRec} FR`, d.tds && `${d.tds} TD`, d.stTds && `${d.stTds} ST-TD`, d.safeties && `${d.safeties} Safety`, d.blocks && `${d.blocks} Block`, `${d.pa} PA`].filter(Boolean).join(', ');
    function lineupHtml(u) {
      return `<div class="n32-lineup">${u.lineup.map(l => `<div class="n32-slot${l[1] ? '' : ' empty'}"><span class="n32-slot-k">${l[0]}</span><span class="n32-slot-n">${l[1] ? e(l[1]) : '— leer —'}${(l[0] === 'FLEX' || l[0] === 'UTIL') && l[2] ? ` <span class="muted">${e(l[2])}</span>` : ''}${l[0] === 'DEF' && l[4] ? ` <span class="muted share-explain">${defNote(l[4])}</span>` : ''}</span><span class="n32-slot-p">${num(l[3], cfg.sport === 'nfl' ? 2 : 0)}</span></div>`).join('')}
        ${(u.bench || []).some(b => b[2] > 0) ? `<div class="n32-bench share-explain">Bank: ${u.bench.filter(b => b[2] > 0).slice(0, 3).map(b => `${e(b[0])} (${e(b[1])}, ${num(b[2], cfg.sport === 'nfl' ? 1 : 0)})`).join(' · ')}</div>` : ''}</div>`;
    }
    // Aufstellung(en) eines Wochen-Eintrags: NFL direkt, NBA pro Spiel mit Kopfzeile
    function entryDetail(m, g) {
      if (cfg.sport === 'nfl') return lineupHtml(g);
      return g.units.map(u => `<div class="n32-game"><div class="n32-game-h">${wd(u.d)} ${dm(u.d)} · ${u.home ? 'vs' : '@'} ${dot(m, u.opp)}${e(m.T.nick(u.opp))} <span class="muted">${u.score[0]}:${u.score[1]}</span><span class="n32-game-p"><b>${num(u.pts, 0)}</b>${u.oppPts != null ? ` <span class="res res-${res(u.pts, u.oppPts)}">${res(u.pts, u.oppPts)}</span> <span class="muted">${num(u.oppPts, 0)}</span>` : ''}</span></div>${lineupHtml(u)}</div>`).join('');
    }
    // Kurzinfo „Gegner/Duell“ einer Woche
    function duelInfo(m, g) {
      if (cfg.sport === 'nfl') return `${g.home ? 'vs' : '@'} ${e(g.opp)}${g.oppPts != null ? ` <span class="res res-${res(g.pts, g.oppPts)}">${res(g.pts, g.oppPts)}</span> ${num(g.oppPts)}` : ''}`;
      return `${g.gp} Sp. · Duelle ${rec(g.duel)}`;
    }
    const realInfo = g => (cfg.sport === 'nfl' ? `NFL ${g.score[0]}:${g.score[1]}` : `Ø ${num(g.pts / g.gp, 0)}/Sp.`);

    // ---------- Übersicht ----------
    function home(ctx) {
      const m = model(ctx.data);
      if (!m || !m.weeks.length) return noData();
      const lastAny = m.weeks[m.weeks.length - 1];
      const w = m.lastC || lastAny;
      const fin = m.teams.map(id => m.games[id].find(g => g.w === w)).filter(Boolean).sort((a, b) => b.pts - a.pts);
      const top = fin[0], flop = fin[fin.length - 1];
      const pl = {};
      fin.forEach(g => g.units.forEach(u => u.lineup.forEach(l => { if (!l[1] || l[2] === 'DEF') return; const k = g.id + '|' + l[1]; (pl[k] = pl[k] || { name: l[1], pos: l[2], team: g.id, pts: 0, n: 0 }); pl[k].pts += l[3]; pl[k].n++; })));
      const players = Object.values(pl).sort((a, b) => b.pts - a.pts);
      const tab = m.table(m.lastC || 0);
      const prevRank = m.complete.length > 1 ? Object.fromEntries(m.table(m.complete[m.complete.length - 2]).map(r => [r.id, r.rank])) : {};
      const live = lastAny !== m.lastC ? lastAny : null;
      const liveW = live ? m.N.weeks[live] : null;
      const liveCount = live ? (cfg.sport === 'nfl' ? `${Object.values(liveW.teams).filter(t => t.status === 'final').length} von ${Object.keys(liveW.teams).length} Teams gewertet` : `${sum(Object.values(liveW.teams), t => t.gp) / 2} Spiele gewertet${(liveW.open || []).length ? `, ${liveW.open.length} offen` : ''}`) : '';
      const byes = (m.N.weeks[w].byes || []);
      const nPl = cfg.sport === 'nfl' ? '' : ' · ';
      return `
        ${head(`${cfg.emoji} ${brand}`, `${cfg.intro} · Saison ${m.N.season} · ${updated(m)}`)}
        <div class="n32-kpis" data-share="${brand} · Woche ${w}">
          ${kpi(`Team der Woche ${w}`, `${dot(m, top.id)} ${e(m.T.nick(top.id))}`, `${num(top.pts)} Pkt.${cfg.sport === 'nba' ? ` · ${top.gp} Sp.` : ''}`)}
          ${kpi('Spieler der Woche', e(players[0].name), `${e(players[0].pos)} · ${e(m.T.nick(players[0].team))} · ${num(players[0].pts)}${cfg.sport === 'nba' ? ` (${players[0].n} Sp.)` : ''}`)}
          ${kpi('Schlusslicht', `${dot(m, flop.id)} ${e(m.T.nick(flop.id))}`, `${num(flop.pts)} Pkt.${cfg.sport === 'nba' ? ` · ${flop.gp} Sp.` : ''}`)}
          ${kpi('Ø der Woche', num(sum(fin, g => g.pts) / fin.length), cfg.sport === 'nfl' ? `${fin.length} Teams · ${byes.length ? 'Bye: ' + byes.join(', ') : 'keine Byes'}` : `${sum(fin, g => g.gp) / 2} Spiele · ${weekLabel(m, w)}`)}
        </div>
        ${live ? `<div class="note">Woche ${live} läuft: ${liveCount} — <a href="${ctx.href('n32week', live)}">Zwischenstand</a>. In die Tabelle zählt die Woche, sobald alle Spiele durch sind.</div>` : ''}
        ${m.lastC ? `<h2 class="group-title">Power-Tabelle Top 10 <a class="muted n32-more" href="${ctx.href('n32table')}">alle ${m.n} →</a></h2>
        <div class="table-wrap" data-share="${brand} · Top 10 nach Woche ${m.lastC}">
          <table class="table compact"><thead><tr><th class="num">#</th><th>Team</th><th class="num">All-Play</th><th class="num">Quote</th><th class="num">Ø Pkt.</th><th class="num">Trend</th></tr></thead>
          <tbody>${tab.slice(0, 10).map(r => `<tr><td class="num rank">${r.rank}</td><td>${teamCell(ctx, m, r.id)}</td><td class="num">${rec(r.ap)}</td><td class="num strong">${pct(r.pct)}</td><td class="num">${num(r.ppg)}</td>${trend(prevRank[r.id] ? prevRank[r.id] - r.rank : 0)}</tr>`).join('')}</tbody></table>
        </div>` : ''}
        <h2 class="group-title">Top-Scorer Woche ${w}${nPl}${cfg.sport === 'nba' ? '<span class="muted">Summe aller Spiele</span>' : ''}</h2>
        <div class="table-wrap"><table class="table compact"><thead><tr><th class="num">#</th><th>Spieler</th><th>Team</th>${cfg.sport === 'nba' ? '<th class="num">Sp.</th>' : ''}<th class="num">Pkt.</th></tr></thead>
          <tbody>${players.slice(0, 8).map((p, i) => `<tr><td class="num rank">${i + 1}</td><td>${e(p.name)} <span class="muted">${e(p.pos)}</span></td><td>${teamCell(ctx, m, p.team)}</td>${cfg.sport === 'nba' ? `<td class="num muted">${p.n}</td>` : ''}<td class="num strong">${num(p.pts)}</td></tr>`).join('')}</tbody></table></div>`;
    }

    // ---------- Power-Tabelle ----------
    function tablePage(ctx) {
      const m = model(ctx.data);
      if (!m || !m.lastC) return noData();
      const upto = m.complete.includes(Number(ctx.params[0])) ? Number(ctx.params[0]) : m.lastC;
      const tab = m.table(upto);
      const i = m.complete.indexOf(upto);
      const prevRank = i > 0 ? Object.fromEntries(m.table(m.complete[i - 1]).map(r => [r.id, r.rank])) : {};
      const nba = cfg.sport === 'nba';
      return `
        ${head('🏆 Power-Tabelle', `<span class="explain">All-Play: jede Woche gegen alle Teams, die gespielt haben. Sortiert nach Quote, dann Ø Punkte. Duell = Fantasy-Punkte gegen den echten Gegner${nba ? ' (pro Spiel)' : ''}.</span> · nach Woche ${upto}`)}
        ${weekChips(ctx, 'n32table', m.complete, upto)}
        <div class="table-wrap" data-share="${brand} · Power-Tabelle nach Woche ${upto}">
          <table class="table compact n32-table"><thead><tr>
            <th class="num">#</th><th>Team</th><th class="num">All-Play</th><th class="num">Quote</th><th class="num">Ø Pkt.</th>${nba ? '<th class="num" title="Spiele">Sp.</th><th class="num" title="Ø pro Spiel">Ø/Sp.</th>' : ''}<th class="num">PF</th>
            <th class="num" title="Ø der letzten drei Wochen">Form</th><th class="num">Max</th><th class="num">Min</th><th class="num" title="Wochensiege (Platz 1)">👑</th><th class="num" title="Fantasy-Duell gegen den echten Gegner">Duell</th><th class="num">Trend</th>
          </tr></thead>
          <tbody>${tab.map(r => `<tr>
            <td class="num rank">${r.rank}</td><td>${teamCell(ctx, m, r.id, { abbr: true })}</td>
            <td class="num">${rec(r.ap)}</td><td class="num strong">${pct(r.pct)}</td><td class="num">${num(r.ppg)}</td>${nba ? `<td class="num muted">${r.gp}</td><td class="num">${num(r.ppgame)}</td>` : ''}<td class="num muted">${num(r.pf, 0)}</td>
            <td class="num ${r.form > r.ppg * 1.05 ? 'up' : r.form < r.ppg * 0.95 ? 'down' : ''}">${num(r.form)}</td><td class="num muted">${num(r.best)}</td><td class="num muted">${num(r.worst)}</td>
            <td class="num">${r.tops || ''}</td><td class="num">${rec(r.duel)}</td>${trend(prevRank[r.id] ? prevRank[r.id] - r.rank : 0)}</tr>`).join('')}</tbody></table>
        </div>`;
    }

    // ---------- Rolling (gemeinsam) ----------
    function rollSvg(m, cols, byTeam, sel, width, label) {
      const rows = m.teams.filter(id => byTeam[id]).map(id => ({
        id, name: m.T.nick(id), emoji: '',
        ranks: cols.map(w => (byTeam[id][w] ? byTeam[id][w].rank : null)),
        tips: cols.map(w => (byTeam[id][w] ? `${m.T.nick(id)} · W${w}: Platz ${byTeam[id][w].rank} · ${byTeam[id][w].tip}` : '')),
      }));
      return MFHFB.charts.bump({ cols: cols.map(w => 'W' + w), rows, sel, width, maxRank: m.n, label });
    }
    function rollBlock(ctx, m, byTeam, sel, shareTitle) {
      const cols = m.complete, lastW = m.lastC, prevW = cols[cols.length - 2];
      const order = m.teams.filter(id => byTeam[id] && byTeam[id][lastW]).sort((a, b) => byTeam[a][lastW].rank - byTeam[b][lastW].rank);
      return `
        <div class="pick-row n32-picks">${[...m.teams].sort().map(id => { const k = sel.indexOf(id); return `<button type="button" class="pick${k > -1 ? ' on ' + SEL[k] : ''}" data-pick="${id}" title="${e(m.T.name(id))}">${dot(m, id)}<span>${id}</span></button>`; }).join('')}
          ${sel.length ? '<button type="button" class="pick clear" data-clear>✕</button>' : ''}</div>
        <div class="card bump-card" data-share="${shareTitle}">
          <div class="bump-wrap" data-bump>${rollSvg(m, cols, byTeam, sel, 900, `Rangverlauf der ${m.n} Teams`)}</div>
          <div class="bump-tip" hidden></div>
          <div class="bump-hint explain">${sel.length ? '' : 'Tipp: bis zu drei Teams antippen, um ihren Verlauf hervorzuheben. '}Hovern zeigt Details.</div>
        </div>
        <div class="table-wrap"><table class="table compact"><thead><tr><th>Team</th>${cols.map(w => `<th class="num">W${w}</th>`).join('')}${prevW ? '<th class="num">Trend</th>' : ''}</tr></thead>
          <tbody>${order.map(id => { const c = byTeam[id][lastW], p = prevW && byTeam[id][prevW]; const k = sel.indexOf(id);
            return `<tr${k > -1 ? ` class="row-${SEL[k]}"` : ''}><td>${teamCell(ctx, m, id)}</td>${cols.map(w => `<td class="num${w === lastW ? ' strong' : ''}">${byTeam[id][w] ? byTeam[id][w].rank : '–'}</td>`).join('')}${prevW ? trend(c && p ? p.rank - c.rank : 0) : ''}</tr>`; }).join('')}</tbody></table></div>`;
    }
    function rollMount(root, ctx, storeKey, getSet, byTeamOf) {
      const set = getSet(ctx);
      const save = patch => { ctx.store.setJSON(storeKey, { ...getSet(ctx), ...patch }); ctx.refresh(); };
      root.querySelectorAll('[data-mode]').forEach(b => b.addEventListener('click', () => save({ mode: b.dataset.mode })));
      root.querySelectorAll('[data-median]').forEach(b => b.addEventListener('click', () => save({ median: b.dataset.median === 'true' })));
      root.querySelectorAll('[data-pick]').forEach(b => b.addEventListener('click', () => {
        const id = b.dataset.pick; let sel = set.sel.filter(x => x !== id);
        if (sel.length === set.sel.length) sel = [...set.sel, id].slice(-3);
        save({ sel });
      }));
      const clr = root.querySelector('[data-clear]'); if (clr) clr.addEventListener('click', () => save({ sel: [] }));
      const wrap = root.querySelector('[data-bump]'); if (!wrap) return;
      const m = model(ctx.data), byTeam = byTeamOf(m, set), sel = set.sel.filter(id => byTeam[id]).slice(0, 3);
      MFHFB.charts.responsive(wrap, w => rollSvg(m, m.complete, byTeam, sel, w, `Rangverlauf der ${m.n} Teams`));
      MFHFB.charts.bumpInteract(wrap, root.querySelector('.bump-tip'), id => { const btn = root.querySelector(`[data-pick="${CSS.escape(id)}"]`); if (btn) btn.click(); });
    }

    // ---------- Rolling Rankings ----------
    const rollSet = ctx => ({ mode: 'table', sel: [], ...ctx.store.getJSON('n32rolling', {}) });
    function rollModel(m, set) {
      const byTeam = {};
      m.complete.forEach(w => {
        if (set.mode === 'week') { m.teams.forEach(id => { const g = m.games[id].find(x => x.w === w); if (g) (byTeam[id] = byTeam[id] || {})[w] = { rank: g.rank, tip: `${num(g.pts)} Pkt. · All-Play ${rec(g.ap)}` }; }); return; }
        let tab = m.table(w);
        if (set.mode === 'ppg') { tab = tab.slice().sort((a, b) => b.ppg - a.ppg); tab.forEach((r, i) => { r.rank = i + 1; }); }
        tab.forEach(r => { (byTeam[r.id] = byTeam[r.id] || {})[w] = { rank: r.rank, tip: `${rec(r.ap)} (${pct(r.pct)}) · Ø ${num(r.ppg)}` }; });
      });
      return byTeam;
    }
    function rollingPage(ctx) {
      const m = model(ctx.data);
      if (!m || !m.lastC) return noData();
      const set = rollSet(ctx);
      const byTeam = rollModel(m, set);
      const sel = set.sel.filter(id => byTeam[id]).slice(0, 3);
      const modes = [['table', 'Tabelle (All-Play)'], ['ppg', 'Ø Punkte'], ['week', 'Wochenrang']];
      const sub = { table: 'Tabellenplatz nach jeder Woche (All-Play-Quote, Tiebreak Ø Punkte)', ppg: 'Rang nach Ø Punkten bis zur jeweiligen Woche', week: 'Platz der jeweiligen Woche allein' }[set.mode];
      return `
        ${head('📊 Rolling Rankings', `<span class="explain">${sub}</span> · Saison ${m.N.season}`)}
        <div class="controls"><div class="seg" role="group">${modes.map(([v, l]) => `<button type="button" class="seg-btn${set.mode === v ? ' active' : ''}" data-mode="${v}">${l}</button>`).join('')}</div></div>
        ${rollBlock(ctx, m, byTeam, sel, `${brand} · Rolling Rankings`)}`;
    }

    // ---------- Spielplan-Liga ----------
    //  Jedes echte Spiel = Fantasy-Duell gegen den echten Gegner. Median-Bonus
    //  (wie DOPE/Sleeper): jedes Spiel zusätzlich gegen den Median aller
    //  Spiele derselben Woche. Zum Vergleich die echte Bilanz.
    function schedTable(m, upto, median) {
      const med = {};
      m.complete.filter(w => w <= upto).forEach(w => {
        const v = m.teams.flatMap(id => (m.games[id].find(g => g.w === w) || { units: [] }).units.map(u => u.pts)).sort((a, b) => a - b);
        const h = Math.floor(v.length / 2); med[w] = v.length ? (v.length % 2 ? v[h] : (v[h - 1] + v[h]) / 2) : 0;
      });
      const rows = m.teams.map(id => {
        const g = m.games[id].filter(x => x.complete && x.w <= upto);
        const h = z(), md = z(), real = z(); let pf = 0, pa = 0, gp = 0;
        g.forEach(x => x.units.forEach(u => {
          gp++; pf += u.pts;
          if (u.oppPts != null) { pa += u.oppPts; add(h, u.pts, u.oppPts); }
          add(md, u.pts, med[x.w]); add(real, u.score[0], u.score[1]);
        }));
        const tot = median ? { w: h.w + md.w, l: h.l + md.l, t: h.t + md.t } : h;
        const n = tot.w + tot.l + tot.t;
        return { id, gp, h, md, real, tot, pct: n ? (tot.w + tot.t / 2) / n : 0, pf, pa, realPct: gp ? (real.w + real.t / 2) / gp : 0 };
      }).filter(r => r.gp).sort((a, b) => (b.pct - a.pct) || (b.pf - a.pf));
      rows.forEach((r, i) => { r.rank = i + 1; });
      rows.slice().sort((a, b) => (b.realPct - a.realPct) || (b.pf - a.pf)).forEach((r, i) => { r.realRank = i + 1; });
      return rows;
    }
    const schedSet = ctx => ({ median: false, sel: [], ...ctx.store.getJSON('n32sched', {}) });
    function schedRoll(m, set) {
      const byTeam = {};
      m.complete.forEach(w => schedTable(m, w, set.median).forEach(r => { (byTeam[r.id] = byTeam[r.id] || {})[w] = { rank: r.rank, tip: `${rec(r.tot)} · ${num(r.pf, 0)} PF` }; }));
      return byTeam;
    }
    function schedPage(ctx) {
      const m = model(ctx.data);
      if (!m || !m.lastC) return noData();
      const set = schedSet(ctx);
      const upto = m.complete.includes(Number(ctx.params[0])) ? Number(ctx.params[0]) : m.lastC;
      const tab = schedTable(m, upto, set.median);
      const i = m.complete.indexOf(upto);
      const prevRank = i > 0 ? Object.fromEntries(schedTable(m, m.complete[i - 1], set.median).map(r => [r.id, r.rank])) : {};
      const byTeam = schedRoll(m, set);
      const sel = set.sel.filter(id => byTeam[id]).slice(0, 3);
      const label = set.median ? 'H2H + Median' : 'H2H';
      const L = cfg.league;
      return `
        ${head('🗓️ Spielplan-Liga', `<span class="explain">Was wäre, wenn: Jedes Team spielt in jedem echten ${L}-Spiel Fantasy gegen seinen echten Gegner${set.median ? ' und bekommt pro Spiel zusätzlich ein Duell gegen den Median aller Spiele der Woche (Bonus-W, wie DOPE)' : ''}. Sortiert nach Bilanz, Tiebreak Punkte. ${L} = echte Bilanz zum Vergleich.</span> · nach Woche ${upto}`)}
        <div class="controls"><div class="seg" role="group">${[[false, 'Nur H2H'], [true, 'H2H + Median (Bonus-W)']].map(([v, l]) => `<button type="button" class="seg-btn${set.median === v ? ' active' : ''}" data-median="${v}">${l}</button>`).join('')}</div></div>
        ${weekChips(ctx, 'n32sched', m.complete, upto)}
        <div class="table-wrap" data-share="${brand} · Spielplan-Liga (${label}) nach Woche ${upto}">
          <table class="table compact"><thead><tr>
            <th class="num">#</th><th>Team</th><th class="num">Bilanz</th>${set.median ? '<th class="num" title="gegen den echten Gegner">H2H</th><th class="num" title="Bonus-Spiel gegen den Wochen-Median">Median</th>' : ''}
            <th class="num">PF</th><th class="num" title="Fantasy-Punkte der echten Gegner">PA</th><th class="num" title="Echte Bilanz">${L}</th><th class="num" title="Platz hier minus Platz nach echter Bilanz">vs ${L}</th><th class="num">Trend</th>
          </tr></thead>
          <tbody>${tab.map(r => { const d = r.realRank - r.rank; return `<tr>
            <td class="num rank">${r.rank}</td><td>${teamCell(ctx, m, r.id, { abbr: true })}</td>
            <td class="num strong">${rec(r.tot)}</td>${set.median ? `<td class="num">${rec(r.h)}</td><td class="num">${rec(r.md)}</td>` : ''}
            <td class="num">${num(r.pf, 0)}</td><td class="num muted">${num(r.pa, 0)}</td><td class="num muted">${rec(r.real)}</td>
            <td class="num ${d > 0 ? 'up' : d < 0 ? 'down' : 'muted'}" title="${L}-Platz ${r.realRank}">${d ? MFHFB.ui.signed(d, 0) : '±0'}</td>${trend(prevRank[r.id] ? prevRank[r.id] - r.rank : 0)}</tr>`; }).join('')}</tbody></table>
        </div>
        <h2 class="group-title">Rolling Rankings · ${label}</h2>
        ${rollBlock(ctx, m, byTeam, sel, `${brand} · Spielplan-Liga Rolling (${label})`)}`;
    }

    // ---------- Woche ----------
    function weekPage(ctx) {
      const m = model(ctx.data);
      if (!m || !m.weeks.length) return noData();
      const w = m.weeks.includes(Number(ctx.params[0])) ? Number(ctx.params[0]) : m.weeks[m.weeks.length - 1];
      const W = m.N.weeks[w];
      const fin = m.teams.map(id => m.games[id].find(x => x.w === w)).filter(Boolean).sort((a, b) => b.pts - a.pts);
      const avg = sum(fin, g => g.pts) / (fin.length || 1);
      const open = cfg.sport === 'nfl'
        ? Object.entries(W.teams).filter(([, t]) => t.status !== 'final' && t.home).map(([id, t]) => `${dot(m, t.opp)} ${e(m.T.nick(t.opp))} @ ${dot(m, id)} ${e(m.T.nick(id))}${t.kickoff ? ` <span class="muted">${dm(t.kickoff.slice(0, 10))} ${t.kickoff.slice(11)} ET</span>` : ''}`)
        : (W.open || []).map(o => `${dot(m, o.away)} ${e(m.T.nick(o.away))} @ ${dot(m, o.home)} ${e(m.T.nick(o.home))} <span class="muted">${wd(o.d)} ${dm(o.d)}</span>`);
      const status = W.complete ? 'abgeschlossen' : `<b>läuft</b> — ${cfg.sport === 'nfl' ? `${fin.length} von ${Object.keys(W.teams).length} Teams gewertet` : `${sum(fin, g => g.gp) / 2} Spiele gewertet, ${(W.open || []).length} offen`}`;
      const row = g => `<details class="n32-row"><summary>
          <span class="n32-r">${g.rank}</span>
          <span class="n32-t">${dot(m, g.id)}<b>${e(m.T.nick(g.id))}</b></span>
          <span class="n32-p">${num(g.pts)}</span>
          <span class="n32-ap muted">${rec(g.ap)}</span>
          <span class="n32-vs muted">${duelInfo(m, g)}</span>
          <span class="n32-real muted share-explain">${realInfo(g)}</span>
        </summary>${entryDetail(m, g)}</details>`;
      return `
        ${head(`📅 Woche ${w}`, `${weekLabel(m, w) ? weekLabel(m, w) + ' · ' : ''}${status} · Ø ${num(avg)} · <span class="explain">antippen = Aufstellung${cfg.sport === 'nba' ? 'en je Spiel' : ''}. All-Play = Bilanz gegen alle Teams dieser Woche, ${cfg.sport === 'nfl' ? '„vs/@“ = Fantasy-Duell mit dem echten Gegner' : 'Duelle = Fantasy gegen den echten Gegner, pro Spiel'}.</span>`)}
        ${weekChips(ctx, 'n32week', m.weeks, w)}
        <div class="n32-list" data-share="${brand} · Woche ${w}">${fin.map(row).join('')}</div>
        ${open.length ? `<h2 class="group-title">Noch offen</h2><div class="n32-open">${open.map(o => `<span class="n32-pill">${o}</span>`).join('')}</div>` : ''}
        ${W.byes && W.byes.length ? `<div class="note">${cfg.sport === 'nfl' ? 'Bye' : 'Ohne Spiel'}: ${W.byes.map(id => `${dot(m, id)} ${e(m.T.nick(id))}`).join(' · ')}</div>` : ''}`;
    }

    // ---------- Positionsstärke (Ø je Spiel) ----------
    function groupAvgs(m, upto) {
      const out = {};
      const keys = [...cfg.groups, 'ALL'];
      m.teams.forEach(id => {
        const g = m.games[id].filter(x => x.complete && x.w <= upto), gp = sum(g, x => x.gp);
        out[id] = {}; cfg.groups.forEach(k => { out[id][k] = gp ? sum(g, x => x.groups[k]) / gp : 0; });
        out[id].ALL = gp ? sum(g, x => x.pts) / gp : 0;
      });
      const ranks = {};
      keys.forEach(k => m.teams.slice().sort((a, b) => out[b][k] - out[a][k]).forEach((id, i) => { (ranks[id] = ranks[id] || {})[k] = i + 1; }));
      const league = {}; keys.forEach(k => { league[k] = sum(m.teams, id => out[id][k]) / m.teams.length; });
      return { avg: out, ranks, league };
    }
    const heat = (m, rank) => `--h:${Math.round(140 - (rank - 1) * (140 / (m.n - 1)))}`;
    function posPage(ctx) {
      const m = model(ctx.data);
      if (!m || !m.lastC) return noData();
      const P = groupAvgs(m, m.lastC);
      const keys = [...cfg.groups, 'ALL'];
      const key = keys.includes(ctx.params[0]) ? ctx.params[0] : 'ALL';
      const rows = m.teams.slice().sort((a, b) => P.avg[b][key] - P.avg[a][key]);
      return `
        ${head('🧩 Positionsstärke', `<span class="explain">${cfg.posExplain} Farbe = Rang unter ${m.n}. Spaltenkopf antippen = sortieren.</span> · nach Woche ${m.lastC}`)}
        <div class="table-wrap" data-share="${brand} · Positionsstärke nach Woche ${m.lastC}"><table class="table compact n32-heat"><thead><tr><th class="num">#</th><th>Team</th>
          ${keys.map(k => `<th class="num"><a href="${ctx.href('n32pos', k)}" class="${k === key ? 'strong' : 'muted'}">${k === 'ALL' ? 'Gesamt' : k}${k === key ? ' ▾' : ''}</a></th>`).join('')}</tr></thead>
          <tbody>${rows.map((id, i) => `<tr><td class="num rank">${i + 1}</td><td>${teamCell(ctx, m, id)}</td>${keys.map(k => `<td class="num n32-h" style="${heat(m, P.ranks[id][k])}" title="Rang ${P.ranks[id][k]}">${num(P.avg[id][k])}</td>`).join('')}</tr>`).join('')}
          <tr class="n32-avg"><td></td><td class="muted">Liga-Ø</td>${keys.map(k => `<td class="num muted">${num(P.league[k])}</td>`).join('')}</tr></tbody></table></div>`;
    }
    function posBars(m, P, ids) {
      return `<div class="n32-bars">${cfg.groups.map(k => {
        const max = Math.max(...Object.values(P.avg).map(a => a[k])) || 1;
        return `<div class="n32-bar-row"><span class="n32-bar-k">${k}</span><div class="n32-bar-cols">${ids.map(id => `<div class="n32-bar-line"><div class="n32-bar"><i style="width:${(P.avg[id][k] / max * 100).toFixed(1)}%;background:${m.T.color(id)}"></i><b class="n32-bar-avg" style="left:${(P.league[k] / max * 100).toFixed(1)}%"></b></div><span class="n32-bar-v">${num(P.avg[id][k])} <span class="muted">#${P.ranks[id][k]}</span></span></div>`).join('')}</div></div>`;
      }).join('')}<div class="n32-bar-legend explain">Ø pro Spiel · Strich = Liga-Ø · #Rang unter ${m.n}</div></div>`;
    }

    // ---------- Team-Profil ----------
    function topPlayers(entries) {
      const p = {};
      entries.forEach(g => g.units.forEach(u => u.lineup.forEach(l => { if (!l[1] || l[2] === 'DEF') return; const k = l[1]; (p[k] = p[k] || { name: k, pos: l[2], pts: 0, starts: 0, best: 0 }); p[k].pts += l[3]; p[k].starts++; p[k].best = Math.max(p[k].best, l[3]); })));
      return Object.values(p).sort((a, b) => b.pts - a.pts);
    }
    const teamPicker = (m, page, cur, rest = []) => `<label class="n32-select">${dot(m, cur)}<select data-nav="${page}" data-rest="${e(JSON.stringify(rest))}">${m.teams.slice().sort((a, b) => m.T.name(a).localeCompare(m.T.name(b))).map(id => `<option value="${id}"${id === cur ? ' selected' : ''}>${e(m.T.name(id))}</option>`).join('')}</select></label>`;
    function teamPage(ctx) {
      const m = model(ctx.data);
      if (!m || !m.weeks.length) return noData();
      const saved = ctx.store.getJSON('n32team', cfg.defaultTeam);
      const id = m.teams.includes(ctx.params[0]) ? ctx.params[0] : (m.teams.includes(saved) ? saved : cfg.defaultTeam);
      const entries = m.games[id] || [];
      const r = m.lastC ? m.table(m.lastC).find(x => x.id === id) : null;
      const P = m.lastC ? groupAvgs(m, m.lastC) : null;
      const tops = topPlayers(entries.filter(g => g.complete));
      const nba = cfg.sport === 'nba';
      return `
        ${head(`${dot(m, id)} ${e(m.T.name(id))}`, `Team-Profil · <a href="${ctx.href('n32compare', id)}">vergleichen →</a>`)}
        <div class="controls">${teamPicker(m, 'n32team', id)}</div>
        <div data-share="${brand} · ${e(m.T.name(id))}">
        ${r ? `<div class="n32-kpis">${kpi('Power-Rang', `#${r.rank}`, `nach Woche ${m.lastC}`)}${kpi('All-Play', rec(r.ap), pct(r.pct))}${kpi('Ø Punkte', num(r.ppg), nba ? `${num(r.ppgame)} pro Spiel · ${r.gp} Sp.` : `Form ${num(r.form)}`)}${kpi('Max / Min', `${num(r.best)} / ${num(r.worst)}`, `${r.tops}× Wochen-#1 · Duell ${rec(r.duel)}`)}</div>` : ''}
        ${P ? `<h2 class="group-title">Positionsstärke</h2>${posBars(m, P, [id])}` : ''}
        </div>
        <h2 class="group-title">Woche für Woche</h2>
        <div class="n32-list">${entries.slice().reverse().map(g => `<details class="n32-row"><summary><span class="n32-r">W${g.w}</span><span class="n32-t">${nba ? `${g.gp} Spiele` : `${g.home ? 'vs' : '@'} ${dot(m, g.opp)}${e(m.T.nick(g.opp))}`}</span><span class="n32-p">${num(g.pts)}</span><span class="n32-ap muted">#${g.rank}/${g.of} · ${rec(g.ap)}</span><span class="n32-vs muted">${nba ? `Duelle ${rec(g.duel)}` : g.oppPts != null ? `<span class="res res-${res(g.pts, g.oppPts)}">${res(g.pts, g.oppPts)}</span> ${num(g.oppPts)}` : ''}</span><span class="n32-real muted">${realInfo(g)}${g.complete ? '' : ' · läuft'}</span></summary>${entryDetail(m, g)}</details>`).join('')}</div>
        <h2 class="group-title">Top-Scorer der Saison <span class="muted">(nur Einsätze in der besten Aufstellung)</span></h2>
        <div class="table-wrap"><table class="table compact"><thead><tr><th>Spieler</th><th class="num">Pos</th><th class="num">Starts</th><th class="num">Pkt.</th><th class="num">Ø</th><th class="num">Max</th></tr></thead>
          <tbody>${tops.slice(0, 12).map(p => `<tr><td>${e(p.name)}</td><td class="num muted">${e(p.pos)}</td><td class="num">${p.starts}</td><td class="num strong">${num(p.pts)}</td><td class="num">${num(p.pts / p.starts)}</td><td class="num muted">${num(p.best)}</td></tr>`).join('')}</tbody></table></div>`;
    }

    // ---------- Team-Vergleich ----------
    function comparePage(ctx) {
      const m = model(ctx.data);
      if (!m || !m.lastC) return noData();
      const saved = ctx.store.getJSON('n32compare', cfg.defaultCompare);
      const ok = id => m.teams.includes(id);
      const a = ok(ctx.params[0]) ? ctx.params[0] : ok(saved[0]) ? saved[0] : cfg.defaultCompare[0];
      let b = ok(ctx.params[1]) ? ctx.params[1] : ok(saved[1]) ? saved[1] : cfg.defaultCompare[1];
      if (b === a) b = m.teams.find(x => x !== a);
      const tab = m.table(m.lastC), ra = tab.find(x => x.id === a), rb = tab.find(x => x.id === b);
      const P = groupAvgs(m, m.lastC);
      const ga = Object.fromEntries(m.games[a].filter(g => g.complete).map(g => [g.w, g])), gb = Object.fromEntries(m.games[b].filter(g => g.complete).map(g => [g.w, g]));
      const h2h = z(); m.complete.forEach(w => { if (ga[w] && gb[w]) add(h2h, ga[w].pts, gb[w].pts); });
      const line = (label, f, better = 'high', fmt = v => v) => {
        const va = f(ra), vb = f(rb);
        const wa = better === 'high' ? va > vb : va < vb, wb = better === 'high' ? vb > va : vb < va;
        return `<tr><td class="num${wa ? ' strong n32-win' : ''}">${fmt(va)}</td><td class="n32-cmp-l">${label}</td><td class="num${wb ? ' strong n32-win' : ''}">${fmt(vb)}</td></tr>`;
      };
      const nba = cfg.sport === 'nba';
      return `
        ${head('🆚 Team-Vergleich', `<span class="explain">Zwei Teams nebeneinander: Tabelle, Positionsstärke und jede Woche im direkten Punktevergleich.</span> · nach Woche ${m.lastC}`)}
        <div class="controls n32-vs-pick">${teamPicker(m, 'n32compare', a, [b])}<span class="muted">vs</span>${teamPicker(m, 'n32compare', b, [a, 'second'])}</div>
        <div data-share="${brand} · ${e(m.T.nick(a))} vs ${e(m.T.nick(b))}">
        <div class="card n32-cmp"><table class="table compact"><thead><tr><th class="num">${dot(m, a)} ${e(m.T.nick(a))}</th><th></th><th class="num">${dot(m, b)} ${e(m.T.nick(b))}</th></tr></thead><tbody>
          ${line('Power-Rang', r => r.rank, 'low', v => '#' + v)}
          ${line('All-Play', r => r.pct, 'high', pct)}
          ${line('Ø Punkte', r => r.ppg, 'high', v => num(v))}
          ${nba ? line('Ø pro Spiel', r => r.ppgame, 'high', v => num(v)) + line('Spiele', r => r.gp, 'high') : ''}
          ${line('Form (letzte 3)', r => r.form, 'high', v => num(v))}
          ${line('Bestwert', r => r.best, 'high', v => num(v))}
          ${line('Tiefstwert', r => r.worst, 'high', v => num(v))}
          ${line('Ø Wochenrang', r => r.avgRank, 'low', v => num(v))}
          <tr><td class="num strong">${h2h.w}</td><td class="n32-cmp-l">Direkter Wochenvergleich${h2h.t ? ` (${h2h.t} Remis)` : ''}</td><td class="num strong">${h2h.l}</td></tr>
        </tbody></table></div>
        <h2 class="group-title">Positionsstärke</h2>${posBars(m, P, [a, b])}
        </div>
        <h2 class="group-title">Woche für Woche</h2>
        <div class="table-wrap"><table class="table compact"><thead><tr><th>Woche</th><th class="num">${e(m.T.nick(a))}</th><th class="num">${e(m.T.nick(b))}</th><th class="num">Diff</th></tr></thead>
          <tbody>${m.complete.map(w => { const x = ga[w], y = gb[w]; const d = x && y ? x.pts - y.pts : null;
            const cell = (g, win) => `<td class="num${win ? ' strong n32-win' : ''}">${g ? num(g.pts) + ` <span class="muted">#${g.rank}${nba ? ` · ${g.gp} Sp.` : ''}</span>` : `<span class="muted">${nba ? '–' : 'Bye'}</span>`}</td>`;
            return `<tr><td>W${w}</td>${cell(x, d > 0)}${cell(y, d < 0)}<td class="num ${d > 0 ? 'up' : d < 0 ? 'down' : 'muted'}">${d == null ? '–' : MFHFB.ui.signed(d)}</td></tr>`; }).join('')}</tbody></table></div>`;
    }

    function navMount(page) {
      return (root, ctx) => {
        root.querySelectorAll('select[data-nav]').forEach(s => s.addEventListener('change', () => {
          const rest = JSON.parse(s.dataset.rest || '[]');
          const parts = page === 'n32compare' ? (rest[1] === 'second' ? [rest[0], s.value] : [s.value, rest[0]]) : [s.value];
          ctx.store.setJSON(page, page === 'n32compare' ? parts : s.value);
          location.hash = ctx.href(page, ...parts).replace(/^.*#/, '#');
        }));
        if (page === 'n32team' && ctx.params[0]) ctx.store.setJSON(page, ctx.params[0]);
        if (page === 'n32compare' && ctx.params[1]) ctx.store.setJSON(page, [ctx.params[0], ctx.params[1]]);
      };
    }

    const reg = p => MFHFB.pages.register({ applies: A, data: D, ...p });
    reg({ id: 'home', section: 'home', label: 'Übersicht', icon: '🏠', render: home });
    reg({ id: 'n32table', section: 'standings', label: 'Power-Tabelle', icon: '🏆', render: tablePage });
    reg({ id: 'n32rolling', section: 'standings', label: 'Rolling Rankings', icon: '📊', render: rollingPage, mount: (root, ctx) => rollMount(root, ctx, 'n32rolling', rollSet, rollModel) });
    reg({ id: 'n32sched', section: 'standings', label: 'Spielplan-Liga', icon: '🗓️', render: schedPage, mount: (root, ctx) => rollMount(root, ctx, 'n32sched', schedSet, schedRoll) });
    reg({ id: 'n32week', section: 'matchups', label: 'Wochen', icon: '📅', render: weekPage, title: ({ params }) => (params[0] ? `Woche ${params[0]}` : 'Wochen') });
    reg({ id: 'n32team', section: 'teams', label: 'Team-Profil', icon: '🧍', render: teamPage, mount: navMount('n32team') });
    reg({ id: 'n32compare', section: 'teams', label: 'Team-Vergleich', icon: '🆚', render: comparePage, mount: navMount('n32compare') });
    reg({ id: 'n32pos', section: 'teams', label: 'Positionsstärke', icon: '🧩', render: posPage });
  }

  build({
    sport: 'nfl', file: 'nfl32-weeks', varName: 'NFL32', title: 'NFL 32', emoji: '🏈', league: 'NFL',
    intro: 'Alle 32 NFL-Teams als Fantasy-Teams · <span class="explain">beste Aufstellung jeder Woche, DOPE-Scoring, All-Play</span>',
    noData: 'Die Liga füllt sich nach dem ersten Spieltag automatisch (Sync dienstags nach Monday Night Football).',
    groups: ['QB', 'RB', 'WR', 'TE', 'K', 'DEF'], groupOf: l => l[2],
    posExplain: 'Ø Punkte pro Spiel je Position in der besten Aufstellung (FLEX zählt zur Position des Spielers).',
    defaultTeam: 'CHI', defaultCompare: ['CHI', 'GB'],
  });
  build({
    sport: 'nba', file: 'nba30-weeks', varName: 'NBA30', title: 'NBA 30', emoji: '🏀', league: 'NBA',
    intro: 'Alle 30 NBA-Teams als Fantasy-Teams · <span class="explain">beste Aufstellung jedes Spiels (PG/SG/SF/PF/C/UTIL), Points-Scoring wie Banana Boat Crew, Wochen = Summe aller Spiele, All-Play</span>',
    noData: 'Die Liga füllt sich automatisch mit dem täglichen NBA-Sync.',
    groups: ['PG', 'SG', 'SF', 'PF', 'C', 'UTIL'], groupOf: l => l[0],
    posExplain: 'Ø Punkte pro Spiel je Slot der besten Aufstellung (PG, SG, SF, PF, C, UTIL).',
    defaultTeam: 'BOS', defaultCompare: ['BOS', 'NYK'],
  });
})();
