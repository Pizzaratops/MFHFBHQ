// ============================================================
//  Tools: Dynasty (NFL, Dynasty-Ligen)
// ============================================================
//  #/<liga>/dynastyboard            → Dynasty Board (Ø aus 4 Quellen)
//  #/<liga>/dynrolling              → Dynasty-Rang-Verlauf (Snapshots seit 2021)
//  #/<liga>/teamaverages            → Team-Schnitt + Kaderwert
//
//  Daten: DYNASTY_BOARD (FantasyPros, KTC, Fantasy Navigator, Dynasty Daddy,
//  Ø = avg), DYNASTY_ROLLING (Snapshots), TRADE_VALUES (für Kaderwert),
//  ROSTERS_LIVE (wer hält wen). Rechenlogik wie auf den bisherigen Seiten;
//  die Trend-Schätzung (lineare Regression über die letzten ≤4 Werte) ist
//  unverändert übernommen.
// ============================================================

(function () {
  const POS = ['ALL', 'QB', 'RB', 'WR', 'TE'];
  const SEL = ['sel-1', 'sel-2', 'sel-3'];
  const normKey = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/\b(jr|sr|ii|iii|iv|v)\b\.?/g, '').replace(/[^a-z0-9]/g, '');

  // Spieler → Liga-Team (aus den Live-Kadern)
  function ownerIndex(data) {
    const byKey = new Map();
    const teams = {}; (data.LEAGUE_TEAMS || []).forEach(t => { teams[t.id] = t; });
    Object.entries(data.ROSTERS_LIVE || {}).forEach(([id, list]) => (list || []).forEach(p => byKey.set(normKey(p.name), teams[id] || { id, name: id })));
    return name => byKey.get(normKey(name)) || null;
  }

  // ---------- Dynasty Board ----------
  const BOARD_COLS = [
    { key: 'avg', label: 'Ø', num: true }, { key: 'name', label: 'Spieler' }, { key: 'pos', label: 'Pos' },
    { key: 'owner', label: 'Liga-Team' },
    { key: 'fp', label: 'FantasyPros', num: true }, { key: 'ktc', label: 'KTC', num: true },
    { key: 'fn', label: 'Fantasy Navigator', num: true }, { key: 'dd', label: 'Dynasty Daddy', num: true }, { key: 'n', label: 'Quellen', num: true },
  ];
  const boardState = ctx => ({ sort: 'avg', pos: 'ALL', free: false, q: '', ...ctx.store.getJSON('dynboard', {}) });

  function boardRows(ctx, st) {
    const owner = ownerIndex(ctx.data);
    const q = normKey(st.q);
    let rows = (ctx.data.DYNASTY_BOARD || [])
      .filter(p => st.pos === 'ALL' || p.pos === st.pos)
      .map(p => ({ ...p, _owner: owner(p.name) }))
      .filter(p => !st.free || !p._owner)
      .filter(p => !q || normKey(p.name).includes(q));
    const k = st.sort;
    rows.sort((a, b) => {
      if (k === 'name') return a.name.localeCompare(b.name);
      if (k === 'pos') return String(a.pos).localeCompare(String(b.pos)) || a.avg - b.avg;
      if (k === 'owner') return String(a._owner ? a._owner.name : '~').localeCompare(String(b._owner ? b._owner.name : '~')) || a.avg - b.avg;
      const av = a[k], bv = b[k];
      if (av == null && bv == null) return 0;
      if (av == null) return 1;
      if (bv == null) return -1;
      return k === 'n' ? bv - av : av - bv;
    });
    return rows;
  }

  function boardBody(ctx, st) {
    const { ui, href } = ctx;
    const e = ui.esc;
    const rows = boardRows(ctx, st);
    const shown = rows.slice(0, 300);
    const body = shown.map(p => `<tr>
      <td class="num strong">${e(p.avg)}</td>
      <td class="strong">${e(p.name)} <small class="muted">${e(p.team || '')}</small></td>
      <td><span class="pos pos-${e(p.pos)}">${e(p.pos)}</span></td>
      <td>${p._owner ? `<a class="team-cell" href="${href('teams', p._owner.id)}"><span class="team-emoji">${e(p._owner.emoji || '')}</span><span>${e(p._owner.name)}</span></a>` : '<span class="avail">verfügbar</span>'}</td>
      <td class="num">${p.fp ?? '—'}</td><td class="num">${p.ktc ?? '—'}</td><td class="num">${p.fn ?? '—'}</td><td class="num">${p.dd ?? '—'}</td>
      <td class="num muted">${p.n}/4</td>
    </tr>`).join('');
    return { body: body || `<tr><td colspan="${BOARD_COLS.length}">${ui.empty('Keine Treffer', 'Filter oder Suche anpassen.', '🔎')}</td></tr>`, count: rows.length, shown: shown.length };
  }

  function boardPage(ctx) {
    const { data, ui } = ctx;
    const e = ui.esc;
    if (!(data.DYNASTY_BOARD || []).length) return ui.empty('Kein Dynasty Board', 'DYNASTY_BOARD fehlt für diese Liga.', '🏆');
    const st = boardState(ctx);
    const { body, count, shown } = boardBody(ctx, st);
    return `
      <div class="page-head">
        <h1 class="page-title display">🏆 Dynasty Board</h1>
        <div class="page-sub">Ø-Rang aus FantasyPros, KeepTradeCut, Fantasy Navigator und Dynasty Daddy — niedriger = wertvoller · ${data.DYNASTY_BOARD.length} Spieler</div>
      </div>
      <div class="controls">
        <div class="seg" role="group">${POS.map(p => `<button type="button" class="seg-btn${st.pos === p ? ' active' : ''}" data-pos="${p}" aria-pressed="${st.pos === p}">${p === 'ALL' ? 'Alle' : p}</button>`).join('')}</div>
        <div class="seg" role="group"><button type="button" class="seg-btn${st.free ? ' active' : ''}" data-free aria-pressed="${st.free}">Nur verfügbare</button></div>
        <input type="search" class="search" placeholder="Spieler suchen …" value="${e(st.q)}" data-q aria-label="Spieler suchen">
      </div>
      <div class="page-sub" data-count style="margin-bottom:8px">${count} Treffer${count > shown ? `, die ersten ${shown} angezeigt` : ''}</div>
      <div class="table-wrap"><table class="table compact sortable">
        <thead><tr>${BOARD_COLS.map(c => `<th class="${c.num ? 'num' : ''}"><button type="button" class="th-sort${st.sort === c.key ? ' on' : ''}" data-sort="${c.key}">${c.label}${st.sort === c.key ? ' ▲' : ''}</button></th>`).join('')}</tr></thead>
        <tbody data-body>${body}</tbody>
      </table></div>`;
  }

  function boardMount(root, ctx) {
    const save = patch => { ctx.store.setJSON('dynboard', { ...boardState(ctx), ...patch }); ctx.refresh(); };
    root.querySelectorAll('[data-pos]').forEach(b => b.addEventListener('click', () => save({ pos: b.dataset.pos })));
    root.querySelectorAll('[data-sort]').forEach(b => b.addEventListener('click', () => save({ sort: b.dataset.sort })));
    const free = root.querySelector('[data-free]');
    if (free) free.addEventListener('click', () => save({ free: !boardState(ctx).free }));
    const q = root.querySelector('[data-q]');
    if (q) q.addEventListener('input', () => {
      // Nur Tabelle neu zeichnen (Fokus im Suchfeld bleibt)
      const st = { ...boardState(ctx), q: q.value };
      ctx.store.setJSON('dynboard', st);
      const { body, count, shown } = boardBody(ctx, st);
      root.querySelector('[data-body]').innerHTML = body;
      root.querySelector('[data-count]').textContent = `${count} Treffer${count > shown ? `, die ersten ${shown} angezeigt` : ''}`;
    });
  }

  // ---------- Dynasty-Rang-Verlauf ----------
  function rollingModel(data) {
    const snaps = data.DYNASTY_ROLLING || [];
    const info = new Map();
    snaps.forEach(s => s.rankings.forEach(p => { if (!info.has(p.name)) info.set(p.name, p.pos); }));
    const idx = snaps.map(s => new Map(s.rankings.map(p => [p.name, p.avg])));
    const players = [...info.keys()].map(name => {
      const ranks = idx.map(m => (m.has(name) ? m.get(name) : null));
      return { name, pos: info.get(name) || '', ranks, latest: ranks[ranks.length - 1] };
    });
    return { snaps, players };
  }

  // Unverändert aus der alten Seite: lineare Regression über die letzten ≤4 Werte
  function predictNext(values) {
    const pts = [];
    values.forEach((v, i) => { if (v !== null) pts.push([i, v]); });
    if (pts.length < 2) return null;
    const r = pts.slice(-4), n = r.length;
    const sx = r.reduce((s, p) => s + p[0], 0), sy = r.reduce((s, p) => s + p[1], 0);
    const sxy = r.reduce((s, p) => s + p[0] * p[1], 0), sxx = r.reduce((s, p) => s + p[0] * p[0], 0);
    const den = n * sxx - sx * sx;
    if (den === 0) return null;
    const slope = (n * sxy - sx * sy) / den, icpt = (sy - slope * sx) / n;
    return Math.max(1, Math.round(slope * (pts[pts.length - 1][0] + 1) + icpt));
  }

  // Kurzlabel je Snapshot (Jahr aus dem Datum); voller Name bleibt im Tooltip
  const shortLabel = s => (s.date ? String(s.date).slice(0, 4) : String(s.label).match(/\d{4}/)?.[0] || s.label);

  const rollState = ctx => ({ sel: [], pos: 'ALL', q: '', ...ctx.store.getJSON('dynroll', {}) });

  function lineChart(ctx, model, sel, width) {
    const e = ctx.ui.esc;
    const players = sel.map(n => model.players.find(p => p.name === n)).filter(Boolean);
    const labels = model.snaps.map(s => s.label);
    const short = model.snaps.map(shortLabel);
    const narrow = width < 560;
    const padL = 48, padR = 24, top = 16, bottom = 36, height = narrow ? 260 : 300;
    const vals = players.flatMap(p => p.ranks.filter(v => v != null));
    if (!vals.length) return '';
    let lo = Math.min(...vals), hi = Math.max(...vals);
    const pad = Math.max(3, Math.round((hi - lo) * 0.12));
    lo = Math.max(1, lo - pad); hi = hi + pad;
    const n = labels.length;
    const x = i => padL + (n === 1 ? (width - padL - padR) / 2 : (i * (width - padL - padR)) / (n - 1));
    const y = v => top + ((v - lo) / Math.max(1, hi - lo)) * (height - top - bottom); // Rang 1 oben
    const step = [1, 2, 5, 10, 20, 25, 50, 100].find(s => (hi - lo) / s <= 6) || 200;
    const ticks = [lo]; for (let v = Math.ceil(lo / step) * step; v <= hi; v += step) if (v - lo >= step / 2) ticks.push(v);
    const grid = ticks.map(v => `<line class="lc-grid" x1="${padL}" x2="${width - padR}" y1="${y(v).toFixed(1)}" y2="${y(v).toFixed(1)}"/><text class="lc-tick" x="${padL - 8}" y="${(y(v) + 4).toFixed(1)}" text-anchor="end">#${v}</text>`).join('');
    const xl = short.map((l, i) => `<text class="lc-tick" x="${x(i).toFixed(1)}" y="${height - bottom + 20}" text-anchor="middle">${e(l)}<title>${e(labels[i])}</title></text>`).join('');
    const lines = players.map((p, k) => {
      const pts = p.ranks.map((v, i) => (v == null ? null : [x(i), y(v), v, i])).filter(Boolean);
      const d = pts.map((q, i) => `${i ? 'L' : 'M'}${q[0].toFixed(1)},${q[1].toFixed(1)}`).join(' ');
      return `<g class="lc-line ${SEL[k]}"><path d="${d}"/>${pts.map(q => `<circle cx="${q[0].toFixed(1)}" cy="${q[1].toFixed(1)}" r="5"><title>${e(p.name)} · ${e(labels[q[3]])}: #${q[2]}</title></circle>`).join('')}</g>`;
    }).join('');
    return `<svg class="lc" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="Dynasty-Rang-Verlauf">${grid}${xl}${lines}</svg>`;
  }

  function rollingList(ctx, model, st) {
    const e = ctx.ui.esc;
    const q = normKey(st.q);
    return model.players
      .filter(p => (st.pos === 'ALL' || p.pos === st.pos) && (!q || normKey(p.name).includes(q)))
      .sort((a, b) => (a.latest ?? 9999) - (b.latest ?? 9999))
      .slice(0, 150)
      .map(p => { const k = st.sel.indexOf(p.name); return `<button type="button" class="dr-item${k > -1 ? ' on ' + SEL[k] : ''}" data-pick="${e(p.name)}" aria-pressed="${k > -1}">
        <span class="dr-rank">${p.latest ?? '–'}</span><span class="dr-name">${e(p.name)}</span><span class="pos pos-${e(p.pos)}">${e(p.pos)}</span></button>`; })
      .join('') || '<div class="muted" style="padding:12px">Keine Treffer.</div>';
  }

  function rollingPage(ctx) {
    const { data, ui, href } = ctx;
    const e = ui.esc;
    const model = rollingModel(data);
    if (!model.snaps.length) return ui.empty('Keine Snapshots', 'DYNASTY_ROLLING fehlt für diese Liga.', '📈');
    const st = rollState(ctx);
    const sel = st.sel.filter(n => model.players.some(p => p.name === n)).slice(0, 3);
    const owner = ownerIndex(data);
    const players = sel.map(n => model.players.find(p => p.name === n));

    const cards = players.map((p, k) => {
      const v = p.ranks.filter(x => x != null);
      const best = Math.min(...v), worst = Math.max(...v), avg = Math.round(v.reduce((a, b) => a + b, 0) / v.length);
      const pred = predictNext(p.ranks), o = owner(p.name);
      return `<div class="card dr-card ${SEL[k]}">
        <div class="dr-card-head"><span class="bump-dot ${SEL[k]}">●</span> <b>${e(p.name)}</b> <span class="pos pos-${e(p.pos)}">${e(p.pos)}</span>
          ${o ? `<a class="team-cell dr-owner" href="${href('teams', o.id)}">${e(o.emoji || '')} ${e(o.name)}</a>` : '<span class="avail">verfügbar</span>'}
          <button type="button" class="dr-x" data-pick="${e(p.name)}" aria-label="${e(p.name)} entfernen">✕</button></div>
        <div class="dr-stats">
          <div><span>Aktuell</span><b>#${p.latest ?? '–'}</b></div><div><span>Bestes</span><b>#${best}</b></div>
          <div><span>Schlechtestes</span><b>#${worst}</b></div><div><span>Schnitt</span><b>#${avg}</b></div>
          <div><span>Snapshots</span><b>${v.length}/${p.ranks.length}</b></div>
          ${pred != null ? `<div title="Grober Trend aus den letzten Snapshots, keine echte Prognose"><span>Trend nächster</span><b>~#${pred}</b></div>` : ''}
        </div>
      </div>`;
    }).join('');

    return `
      <div class="page-head">
        <h1 class="page-title display">📈 Dynasty-Verlauf</h1>
        <div class="page-sub">Dynasty-Rang von Spielern über ${model.snaps.length} Snapshots (${e(model.snaps[0].label)} bis ${e(model.snaps[model.snaps.length - 1].label)}) · bis zu 3 vergleichen</div>
      </div>
      <div class="dr-layout">
        <aside class="card dr-side">
          <div class="dr-side-top">
            <input type="search" class="search" placeholder="Spieler suchen …" value="${e(st.q)}" data-q aria-label="Spieler suchen">
            <div class="seg" role="group">${POS.map(p => `<button type="button" class="seg-btn${st.pos === p ? ' active' : ''}" data-pos="${p}">${p === 'ALL' ? 'Alle' : p}</button>`).join('')}</div>
          </div>
          <div class="dr-list" data-list>${rollingList(ctx, model, { ...st, sel })}</div>
        </aside>
        <div class="dr-main">
          ${players.length ? `<div class="dr-cards">${cards}</div>
            <div class="card lc-card"><div class="lc-wrap" data-lc>${lineChart(ctx, model, sel, 700)}</div></div>
            <h2 class="group-title">Als Tabelle</h2>
            <div class="table-wrap"><table class="table compact"><thead><tr><th>Spieler</th>${model.snaps.map(s => `<th class="num" title="${e(s.label)}">${e(shortLabel(s))}</th>`).join('')}</tr></thead>
              <tbody>${players.map((p, k) => `<tr class="row-${SEL[k]}"><td class="strong">${e(p.name)}</td>${p.ranks.map(v => `<td class="num">${v ?? '—'}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`
            : ui.empty('Spieler auswählen', 'Links einen oder bis zu drei Spieler antippen, um ihren Dynasty-Rang-Verlauf zu sehen.', '📈')}
        </div>
      </div>`;
  }

  function rollingMount(root, ctx) {
    const model = rollingModel(ctx.data);
    const save = patch => { ctx.store.setJSON('dynroll', { ...rollState(ctx), ...patch }); ctx.refresh(); };
    const bindPicks = scope => scope.querySelectorAll('[data-pick]').forEach(b => b.addEventListener('click', () => {
      const st = rollState(ctx), n = b.dataset.pick;
      let sel = st.sel.filter(x => x !== n);
      if (sel.length === st.sel.length) sel = [...st.sel, n].slice(-3);
      save({ sel });
    }));
    bindPicks(root);
    root.querySelectorAll('[data-pos]').forEach(b => b.addEventListener('click', () => save({ pos: b.dataset.pos })));
    const q = root.querySelector('[data-q]'), list = root.querySelector('[data-list]');
    if (q) q.addEventListener('input', () => {
      const st = { ...rollState(ctx), q: q.value };
      ctx.store.setJSON('dynroll', st);
      list.innerHTML = rollingList(ctx, model, st);
      bindPicks(list);
    });
    const wrap = root.querySelector('[data-lc]');
    if (wrap) {
      const sel = rollState(ctx).sel.filter(n => model.players.some(p => p.name === n)).slice(0, 3);
      const draw = () => { if (wrap.isConnected) wrap.innerHTML = lineChart(ctx, model, sel, Math.max(300, wrap.clientWidth)); };
      draw();
      let t;
      const onResize = () => { if (!wrap.isConnected) { window.removeEventListener('resize', onResize); return; } clearTimeout(t); t = setTimeout(draw, 120); };
      window.addEventListener('resize', onResize);
    }
  }

  // ---------- Team-Schnitt + Kaderwert ----------
  function averagesPage(ctx) {
    const { data, ui, href } = ctx;
    const e = ui.esc;
    const dyn = new Map((data.DYNASTY_BOARD || []).map(p => [normKey(p.name), p.avg]));
    const val = new Map((data.TRADE_VALUES || []).map(p => [normKey(p.name), p.avg]));
    const sortBy = ctx.store.get('teamavg:sort') || 'rank';
    const rows = (data.LEAGUE_TEAMS || []).map(team => {
      const players = ((data.ROSTERS_LIVE || {})[team.id] || []).filter(p => !['K', 'DST', 'D/ST'].includes(String(p.pos || '').split('/')[0].toUpperCase()));
      const withDyn = players.map(p => ({ ...p, dyn: dyn.get(normKey(p.name)) ?? null, v: val.get(normKey(p.name)) || 0 }));
      const ranked = withDyn.filter(p => p.dyn != null);
      const starters = ranked.filter(p => p.isStarter === true);
      const avgOf = l => (l.length ? l.reduce((s, p) => s + p.dyn, 0) / l.length : null);
      const top = withDyn.slice().sort((a, b) => b.v - a.v)[0];
      return { team, n: ranked.length, all: avgOf(ranked), start: avgOf(starters), value: withDyn.reduce((s, p) => s + p.v, 0), top };
    });
    rows.sort(sortBy === 'value' ? (a, b) => b.value - a.value : (a, b) => (a.all ?? 9999) - (b.all ?? 9999));
    const maxV = Math.max(1, ...rows.map(r => r.value));
    return `
      <div class="page-head">
        <h1 class="page-title display">📐 Team-Schnitt</h1>
        <div class="page-sub">Ø Dynasty-Rang des Kaders (ohne K/DST, niedriger = besser) und Kaderwert (Summe der KTC/Dynasty-Daddy-Werte)</div>
      </div>
      <div class="controls"><div class="seg" role="group">
        <button type="button" class="seg-btn${sortBy === 'rank' ? ' active' : ''}" data-sort="rank">Nach Ø Rang</button>
        <button type="button" class="seg-btn${sortBy === 'value' ? ' active' : ''}" data-sort="value">Nach Kaderwert</button>
      </div></div>
      <div class="table-wrap"><table class="table">
        <thead><tr><th class="num">#</th><th>Team</th><th class="num">Ø Kader</th><th class="num">Ø Starter</th><th>Kaderwert</th><th>Wertvollster Spieler</th><th class="num">Erfasst</th></tr></thead>
        <tbody>${rows.map((r, i) => `<tr>
          <td class="num rank">${i + 1}</td>
          <td><a class="team-cell" href="${href('teams', r.team.id)}"><span class="team-emoji">${e(r.team.emoji || '')}</span><span><span class="team-name">${e(r.team.name)}</span>${r.team.owner ? `<span class="team-owner">${e(r.team.owner)}</span>` : ''}</span></a></td>
          <td class="num strong">${r.all != null ? ui.num(r.all) : '—'}</td>
          <td class="num">${r.start != null ? ui.num(r.start) : '—'}</td>
          <td><span class="val-bar"><span style="width:${Math.round(r.value / maxV * 100)}%"></span></span> <span class="val-num">${Math.round(r.value).toLocaleString('de-DE')}</span></td>
          <td>${r.top && r.top.v ? `${e(r.top.name)} <small class="muted">${Math.round(r.top.v).toLocaleString('de-DE')}</small>` : '—'}</td>
          <td class="num muted">${r.n}</td>
        </tr>`).join('')}</tbody>
      </table></div>`;
  }

  const A = { sport: ['nfl'], format: ['Dynasty'] };
  MFHFB.pages.register({ id: 'dynastyboard', section: 'dynasty', label: 'Dynasty Board', icon: '🏆', applies: A, data: ['teams', 'rosters-live', 'dynasty-board'], render: boardPage, mount: boardMount });
  MFHFB.pages.register({ id: 'dynrolling', section: 'dynasty', label: 'Dynasty-Verlauf', icon: '📈', applies: A, data: ['teams', 'rosters-live', 'dynasty-rolling'], render: rollingPage, mount: rollingMount });
  MFHFB.pages.register({
    id: 'teamaverages', section: 'dynasty', label: 'Team-Schnitt', icon: '📐', applies: A, data: ['teams', 'rosters-live', 'dynasty-board', 'trade-values'],
    render: averagesPage,
    mount(root, ctx) { root.querySelectorAll('[data-sort]').forEach(b => b.addEventListener('click', () => { ctx.store.set('teamavg:sort', b.dataset.sort); ctx.refresh(); })); },
  });
})();
