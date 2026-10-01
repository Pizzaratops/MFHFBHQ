// ============================================================
//  Tool (NBA, Dynasty): Dynasty-Rankings + Verlauf + Hashtag
// ============================================================
//  #/<liga>/dynrank[/verlauf|/hashtag]
//
//  Port von js/rankings-ui.js + js/dynasty-rolling-ui.js (nur TTHQ,
//  applies keepers). Daten (je Liga):
//  - DYNASTY_PLAYERS [rank, name, team, pos, dob]   (data/rankings.js)
//  - DYNASTY_ROLLING [{date, label, ranks:{name:rank}}] Snapshots
//  - DYNASTY_LIVE    [{name, baseRank, liveRank, delta, source}] Live-Nudge
//  - HASHTAG_RANKINGS [rank, name, team, pos] + MATT_RANKS {name: rank}
//  Admin-Edit-Modus (PIN) ist bewusst NICHT übernommen — die Rangliste
//  wird weiter über data/rankings.js im Repo gepflegt.
// ============================================================

(function () {
  const N = () => MFHFB.nba;
  const MAX_SEL = 3;
  const defaults = { q: '', since: null, own: 'all', sel: [] };
  const getState = ctx => ({ ...defaults, ...ctx.store.getJSON('dynrank', {}) });

  function indexes(ctx) {
    const d = ctx.data, nba = N();
    const hash = new Map((d.HASHTAG_RANKINGS || []).map(p => [nba.key(p[1]), p[0]]));
    const matt = new Map(Object.entries(d.MATT_RANKS || {}).map(([n, r]) => [nba.key(n), r]));
    const live = new Map((d.DYNASTY_LIVE || []).map(x => [nba.key(x.name), x]));
    return { hash, matt, live, owner: nba.ownerIndex(d) };
  }

  function changeBadge(snaps, since, name, rank) {
    if (snaps.length < 2) return '';
    const prev = snaps.find(s => s.date === since) || snaps[snaps.length - 2];
    const pr = prev.ranks[name];
    if (pr == null || pr === rank) return '';
    const dlt = pr - rank;
    return dlt > 0 ? ` <small class="up" title="Seit ${prev.label}: ${dlt} Plätze nach oben">▲${dlt}</small>` : ` <small class="down" title="Seit ${prev.label}: ${-dlt} Plätze nach unten">▼${-dlt}</small>`;
  }

  function listRows(ctx, st) {
    const d = ctx.data, e = ctx.ui.esc, nba = N(), I = indexes(ctx);
    const snaps = d.DYNASTY_ROLLING || [];
    const q = st.q.toLowerCase().trim();
    const list = (d.DYNASTY_PLAYERS || []).filter(p => {
      const o = I.owner(p[1]);
      if (st.own === 'free' && o) return false;
      if (st.own === 'owned' && !o) return false;
      return !q || [p[1], p[2], p[3], o && o.name].some(x => String(x || '').toLowerCase().includes(q));
    });
    if (!list.length) return `<tr><td colspan="9">${ctx.ui.empty('Keine Treffer', 'Suche oder Filter anpassen.', '🔎')}</td></tr>`;
    return list.map(p => {
      const k = nba.key(p[1]), o = I.owner(p[1]), lv = I.live.get(k);
      const age = nba.age(p[4]);
      return `<tr>
        <td class="num">${nba.rankBadge(p[0])}${changeBadge(snaps, st.since, p[1], p[0])}</td>
        <td class="strong nba-sticky">${e(p[1])}</td>
        <td><a class="nba-team-link" href="${ctx.href('nbateams', nba.canonTeam(p[2]))}">${e(p[2])}</a></td>
        <td class="muted">${e(p[3])}</td><td class="num">${age ?? '—'}</td>
        <td>${o ? `<a class="nba-tlink mp-tc" style="${nba.tcStyle(o)}" href="${ctx.href('teams', o.id)}"><span class="nba-tdot"></span>${e(o.name)}</a>` : '<span class="nba-tag fa">frei</span>'}</td>
        <td class="num">${lv ? `<span class="${lv.delta > 0 ? 'up' : 'down'}" title="Aktuelle Performance deutet ${lv.delta > 0 ? 'nach oben' : 'nach unten'} (Basis: ${lv.source === 'current' ? 'laufende Saison' : 'Off-Season'}) · Live-Rang ${lv.liveRank}">${lv.delta > 0 ? '▲' : '▼'}${Math.abs(lv.delta)}</span>` : '<span class="muted">—</span>'}</td>
        <td class="num">${nba.rankBadge(I.matt.get(k) ?? null)}</td>
        <td class="num">${nba.rankBadge(I.hash.get(k) ?? null)}</td>
      </tr>`;
    }).join('');
  }

  function rankingsView(ctx, st) {
    const d = ctx.data, e = ctx.ui.esc;
    const snaps = d.DYNASTY_ROLLING || [];
    const sinceSel = snaps.length >= 2 ? `<select class="tr-select" data-since aria-label="Veränderung seit">${snaps.slice(0, -1).map((s, i) => { const def = i === snaps.length - 2; const on = st.since ? s.date === st.since : def; return `<option value="${s.date}"${on ? ' selected' : ''}>Δ seit ${e(s.label)}${def ? ' (letztes Update)' : ''}</option>`; }).join('')}</select>` : '';
    return `<div class="controls">
        <div class="seg" role="group">${[['all', 'Alle'], ['free', 'Frei'], ['owned', 'Gerostert']].map(([k, l]) => `<button type="button" class="seg-btn${st.own === k ? ' active' : ''}" data-own="${k}">${l}</button>`).join('')}</div>
        ${sinceSel}<input type="search" class="search" placeholder="Spieler, Team, Position, Fantasy-Team …" value="${e(st.q)}" data-q aria-label="Suchen"></div>
      <div class="table-wrap"><table class="table compact"><thead><tr><th class="num">MFHFB</th><th class="nba-sticky">Spieler</th><th>NBA</th><th>Pos</th><th class="num">Alter</th><th>Fantasy-Team</th>
        <th class="num" title="Live-Nudge: aktuelle Performance gegen den Dynasty-Rang (informativ, ändert die Rangliste nicht)">Live</th><th class="num">Matt</th><th class="num">#️⃣ Hashtag</th></tr></thead>
        <tbody data-body>${listRows(ctx, st)}</tbody></table></div>`;
  }

  function historyChart(snaps, sel, width) {
    const rows = sel.map(n => ({ id: n, name: n, ranks: snaps.map(s => s.ranks[n] ?? null), tips: snaps.map(s => (s.ranks[n] == null ? '' : `${n} · ${s.label}: #${s.ranks[n]}`)) }));
    const max = Math.max(10, ...rows.flatMap(r => r.ranks.filter(v => v != null)));
    return MFHFB.charts.bump({ cols: snaps.map(s => s.label), rows, sel, width, maxRank: max, label: 'Dynasty-Rangverlauf' });
  }

  function historyView(ctx, st) {
    const d = ctx.data, e = ctx.ui.esc, nba = N();
    const snaps = d.DYNASTY_ROLLING || [];
    if (snaps.length < 2) return ctx.ui.empty('Noch kein Verlauf', 'Es gibt erst einen Snapshot der Dynasty-Rangliste.', '📉');
    const last = snaps[snaps.length - 1], first = snaps[0];
    const q = st.q.toLowerCase().trim();
    const names = Object.keys(last.ranks).sort((a, b) => last.ranks[a] - last.ranks[b]).filter(n => !q || n.toLowerCase().includes(q));
    const sel = st.sel.filter(n => last.ranks[n] != null || snaps.some(s => s.ranks[n] != null)).slice(0, MAX_SEL);
    const movers = Object.keys(last.ranks).map(n => ({ n, d: first.ranks[n] != null ? first.ranks[n] - last.ranks[n] : null })).filter(x => x.d != null && last.ranks[x.n] <= 150);
    const up = movers.slice().sort((a, b) => b.d - a.d).slice(0, 5), down = movers.slice().sort((a, b) => a.d - b.d).slice(0, 5);
    const mv = (x, cls) => `<li><button type="button" class="linklike" data-pickname="${e(x.n)}">${e(x.n)}</button> <span class="${cls}">${x.d > 0 ? '▲' : '▼'}${Math.abs(x.d)}</span> <small class="muted">→ #${last.ranks[x.n]}</small></li>`;
    return `<div class="dyn-movers"><div class="card"><h3>🚀 Aufsteiger seit ${e(first.label)}</h3><ol>${up.map(x => mv(x, 'up')).join('')}</ol></div>
        <div class="card"><h3>📉 Absteiger seit ${e(first.label)}</h3><ol>${down.map(x => mv(x, 'down')).join('')}</ol></div></div>
      ${sel.length ? `<div class="card bump-card"><div class="bump-wrap" data-bump>${historyChart(snaps, sel, 900)}</div><div class="bump-tip" hidden></div></div>` : '<p class="muted small">Bis zu 3 Spieler in der Tabelle antippen, um ihren Verlauf zu sehen.</p>'}
      <div class="controls"><input type="search" class="search" placeholder="Spieler …" value="${e(st.q)}" data-q aria-label="Suchen">${sel.length ? '<button type="button" class="seg-btn mp-btn" data-clear>✕ Auswahl leeren</button>' : ''}</div>
      <div class="table-wrap"><table class="table compact nba-rr"><thead><tr><th class="nba-sticky">Spieler</th>${snaps.map(s => `<th class="num">${e(s.label)}</th>`).join('')}<th class="num">Δ gesamt</th></tr></thead>
        <tbody>${names.slice(0, 300).map(n => { const k = sel.indexOf(n); const d0 = first.ranks[n], d1 = last.ranks[n]; const dd = d0 != null && d1 != null ? d0 - d1 : null; return `<tr class="clickable${k > -1 ? ' row-' + MFHFB.charts.SEL[k] : ''}" data-pickname="${e(n)}">
          <td class="nba-sticky strong">${k > -1 ? `<span class="dna-chip ${MFHFB.charts.SEL[k]}"><i></i></span>` : ''}${e(n)}</td>
          ${snaps.map(s => `<td class="num">${nba.rankBadge(s.ranks[n] ?? null)}</td>`).join('')}
          <td class="num ${dd > 0 ? 'up' : dd < 0 ? 'down' : 'muted'}">${dd == null ? '—' : dd === 0 ? '±0' : (dd > 0 ? '▲' : '▼') + Math.abs(dd)}</td></tr>`; }).join('')}</tbody></table></div>`;
  }

  function hashtagView(ctx, st) {
    const d = ctx.data, e = ctx.ui.esc, nba = N(), owner = nba.ownerIndex(d);
    const q = st.q.toLowerCase().trim();
    const list = (d.HASHTAG_RANKINGS || []).filter(p => !q || [p[1], p[2], p[3]].some(x => String(x).toLowerCase().includes(q)));
    return `<div class="controls"><input type="search" class="search" placeholder="Spieler, Team, Position …" value="${e(st.q)}" data-q aria-label="Suchen"></div>
      <div class="table-wrap"><table class="table compact"><thead><tr><th class="num">#</th><th>Spieler</th><th>Team</th><th>Pos</th><th>Fantasy-Team</th></tr></thead><tbody>
      ${list.map(p => { const o = owner(p[1]); return `<tr><td class="num">${nba.rankBadge(p[0])}</td><td class="strong">${e(p[1])}</td><td>${e(p[2])}</td><td class="muted">${e(p[3])}</td><td>${o ? `<a class="nba-tlink mp-tc" style="${nba.tcStyle(o)}" href="${ctx.href('teams', o.id)}"><span class="nba-tdot"></span>${e(o.name)}</a>` : '<span class="nba-tag fa">frei</span>'}</td></tr>`; }).join('')}
      </tbody></table></div>`;
  }

  function render(ctx) {
    const { data, ui, params } = ctx, nba = N();
    nba.init(data);
    if (!data.DYNASTY_PLAYERS) return ui.empty('Keine Dynasty-Rangliste', 'DYNASTY_PLAYERS fehlt für diese Liga.', '🏆');
    const view = params[0] === 'verlauf' || params[0] === 'hashtag' ? params[0] : 'liste';
    const st = getState(ctx);
    const tabs = `<div class="seg" role="tablist">${[['liste', '🏆 MFHFB-Rangliste'], ['verlauf', '📉 Verlauf'], ['hashtag', '#️⃣ Hashtag']].map(([k, l]) => `<a class="seg-btn${view === k ? ' active' : ''}" href="${ctx.href('dynrank', ...(k === 'liste' ? [] : [k]))}">${l}</a>`).join('')}</div>`;
    const snaps = data.DYNASTY_ROLLING || [];
    return `<div class="page-head"><h1 class="page-title display">🏆 Dynasty Rankings</h1>
        <div class="page-sub">${data.DYNASTY_PLAYERS.length} Spieler · ${snaps.length ? 'letztes Update ' + ui.esc(snaps[snaps.length - 1].label) : ''}<span class="explain"> · Vergleich mit Matt und Hashtag Basketball</span></div></div>
      <div class="controls">${tabs}</div>
      ${view === 'verlauf' ? historyView(ctx, st) : view === 'hashtag' ? hashtagView(ctx, st) : rankingsView(ctx, st)}`;
  }

  function mount(root, ctx) {
    const view = ctx.params[0] === 'verlauf' || ctx.params[0] === 'hashtag' ? ctx.params[0] : 'liste';
    const save = (patch, full = true) => { ctx.store.setJSON('dynrank', { ...getState(ctx), ...patch }); if (full) ctx.refresh(); };
    root.querySelectorAll('[data-own]').forEach(b => b.addEventListener('click', () => save({ own: b.dataset.own })));
    const since = root.querySelector('[data-since]');
    if (since) since.addEventListener('change', () => save({ since: since.value }));
    const q = root.querySelector('[data-q]');
    if (q) q.addEventListener('input', () => {
      save({ q: q.value }, false);
      if (view === 'liste') root.querySelector('[data-body]').innerHTML = listRows(ctx, getState(ctx));
    });
    if (q && view !== 'liste') q.addEventListener('change', () => ctx.refresh());
    root.querySelectorAll('[data-pickname]').forEach(el => el.addEventListener('click', () => {
      const st = getState(ctx), n = el.dataset.pickname;
      let sel = st.sel.filter(x => x !== n);
      if (sel.length === st.sel.length) sel = [...st.sel, n].slice(-MAX_SEL);
      save({ sel });
    }));
    const clr = root.querySelector('[data-clear]');
    if (clr) clr.addEventListener('click', () => save({ sel: [] }));
    const wrap = root.querySelector('[data-bump]');
    if (wrap) {
      const snaps = ctx.data.DYNASTY_ROLLING || [], sel = getState(ctx).sel.slice(0, MAX_SEL);
      MFHFB.charts.responsive(wrap, w => historyChart(snaps, sel, w));
      MFHFB.charts.bumpInteract(wrap, root.querySelector('.bump-tip'), id => save({ sel: getState(ctx).sel.filter(x => x !== id) }));
    }
  }

  MFHFB.pages.register({
    id: 'dynrank', section: 'dynasty', label: 'Dynasty Rankings', icon: '🏆', applies: { sport: ['nba'], keepers: [true] },
    data: ['teams', '?rosters-live', '?sport:aliases', 'rankings', '?hashtag', '?dynasty-rolling', '?dynasty-live'],
    title: () => 'Dynasty Rankings', render, mount,
  });
})();
