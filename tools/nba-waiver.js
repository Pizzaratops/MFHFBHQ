// ============================================================
//  Tool (NBA): Waiver — beste freie Spieler
// ============================================================
//  #/<liga>/waiver
//
//  Neu gebaut nach js/best-available.js (TTHQ + Funkytown). Die Reihenfolge
//  kommt unverändert aus BEST_AVAILABLE_BOARD (fertiger, gewichteter Score
//  über alle Signale, täglich von scripts/build-best-available-board.js
//  gebaut — je Liga eigener Signal-Mix). Hier wird nur gegen die aktuellen
//  Kader dieser Liga gefiltert (+ Rookie/Sophomore, NBA-Team, Suche).
//
//  Spalten erscheinen nur, wenn das Board sie liefert (TTHQ: Dynasty-Rang,
//  Funkytown: nicht). Sticky Score seit 03.10.2026 raus (Saison-Projections statt Summer League). „Proj. 26/27“ = Rang in den
//  Saison-Projektionen dieser Liga (nur wenn die echte z-Werte haben).
// ============================================================

(function () {
  const N = () => MFHFB.nba;
  const CAT_ORDER = ['PTS', '3PM', 'REB', 'AST', 'STL', 'BLK', 'FG%', 'FT%', 'TO'];
  const defaults = { exp: 'all', nba: '', q: '', sort: null, dir: 1 };
  const getState = ctx => ({ ...defaults, ...ctx.store.getJSON('waiver', {}) });

  function pool(ctx, st) {
    const nba = N();
    const owner = nba.ownerIndex(ctx.data);
    return (ctx.data.BEST_AVAILABLE_BOARD || []).filter(p => !owner(p.name) && (st.exp === 'all' || p.experience === st.exp));
  }

  function columns(ctx, board) {
    const nba = N(), proj = nba.projRanks(ctx.data);
    const has = k => board.some(p => p[k] != null);
    return [
      { k: 'age', l: 'Alter', v: p => nba.age(p.dob) ?? p.age ?? null, f: v => (v != null ? v : '—') },
      { k: 'minutesAvg', l: 'MIN', t: 'Minuten pro Spiel im jüngsten Fenster', v: p => p.minutesAvg ?? null, f: v => (v != null ? v : '—') },
      { k: 'bestCat30', l: 'Beste Kat.', t: 'Stärkste Kategorie im jüngsten Fenster (laufende Saison > Off-Season)', v: p => { const i = CAT_ORDER.indexOf(p.bestCat30); return i < 0 ? null : i; }, f: (v, p) => (p.bestCat30 ? `<span class="up strong">${p.bestCat30}</span>` : '—') },
      { k: 'worstCat30', l: 'Schwächste', v: p => { const i = CAT_ORDER.indexOf(p.worstCat30); return i < 0 ? null : i; }, f: (v, p) => (p.worstCat30 ? `<span class="down strong">${p.worstCat30}</span>` : '—') },
      has('dynastyRank') && { k: 'dynastyRank', l: 'MFHFB', t: 'MFHFB Dynasty-Rang', v: p => p.dynastyRank ?? null, f: v => nba.rankBadge(v) },
      { k: 'season2627Rank', l: 'Rang 26/27', t: 'Rang in der laufenden Saison (Rolling-Rankings-Archiv, füllt sich ab Saisonstart)', v: p => p.season2627Rank ?? null, f: v => nba.rankBadge(v) },
      proj && { k: 'proj', l: 'Proj. 26/27', t: 'Rang in den Saison-Projektionen dieser Liga', v: p => proj(p.name), f: v => nba.rankBadge(v) },
    ].filter(Boolean);
  }

  function rows(ctx, st) {
    const q = String(st.q || '').toLowerCase().trim();
    let list = pool(ctx, st).filter(p => (!st.nba || p.nbaTeam === st.nba) && (!q || [p.name, p.nbaTeam, p.pos].some(x => String(x || '').toLowerCase().includes(q))));
    if (st.sort) {
      const col = [{ k: 'name', v: p => String(p.name).toLowerCase() }, { k: 'nbaTeam', v: p => String(p.nbaTeam || '') }, { k: 'pos', v: p => String(p.pos || '') }].concat(columns(ctx, ctx.data.BEST_AVAILABLE_BOARD || [])).find(c => c.k === st.sort);
      if (col) list = list.slice().sort((a, b) => { const av = col.v(a), bv = col.v(b); if (av == null && bv == null) return 0; if (av == null) return 1; if (bv == null) return -1; return st.dir * (typeof av === 'string' ? av.localeCompare(bv) : av - bv); });
    }
    return list;
  }

  function tbody(ctx, st) {
    const e = ctx.ui.esc, nba = N();
    const cols = columns(ctx, ctx.data.BEST_AVAILABLE_BOARD || []);
    const list = rows(ctx, st);
    if (!list.length) return `<tr><td colspan="${cols.length + 4}">${ctx.ui.empty('Keine Treffer', 'Filter oder Suche anpassen.', '🔎')}</td></tr>`;
    return list.slice(0, 400).map((p, i) => `<tr>
      <td class="num rank">${i + 1}</td>
      <td class="strong">${e(p.name)}${p.nbaTeam === 'FA' ? ' <span class="nba-tag fa">FA</span>' : ''}${p.isRookie ? ' <span class="nba-tag rk">ROOKIE</span>' : ''}</td>
      <td><a class="nba-team-link" href="${ctx.href('nbateams', p.nbaTeam)}" title="${e(nba.teamName(p.nbaTeam))}">${e(p.nbaTeam || '')}</a></td>
      <td class="muted">${e(p.pos || '')}</td>
      ${cols.map(c => `<td class="num">${c.f(c.v(p), p)}</td>`).join('')}
    </tr>`).join('');
  }

  function render(ctx) {
    const { data, ui } = ctx;
    const e = ui.esc;
    N().init(data);
    if (!data.BEST_AVAILABLE_BOARD) return ui.empty('Kein Waiver-Board', 'BEST_AVAILABLE_BOARD fehlt für diese Liga.', '🆓');
    if (N().preDraft(data)) return `<div class="page-head"><h1 class="page-title display">🆓 Waiver</h1></div>` + ui.empty('Waiver startet nach dem Draft', 'Vor dem Draft sind alle Spieler frei. Für den Draft selbst: Seite „Auction Draft“ im Bereich Draft.', '🆓');
    const st = getState(ctx);
    const all = pool(ctx, { ...st });
    const teams = [...new Set(all.map(p => p.nbaTeam).filter(Boolean))].sort();
    const cols = columns(ctx, data.BEST_AVAILABLE_BOARD);
    const th = (k, l, t, cls) => `<th class="${cls || ''}${st.sort === k ? ' sorted' : ''}"${t ? ` title="${t}"` : ''}><button type="button" class="th-sort" data-sort="${k}">${l}${st.sort === k ? (st.dir === 1 ? ' ▲' : ' ▼') : ''}</button></th>`;
    return `
      <div class="page-head"><h1 class="page-title display">🆓 Waiver</h1>
        <div class="page-sub">${all.length} freie Spieler<span class="explain"> · sortiert nach Gesamtscore über alle Signale (täglich neu) · Reihenfolge = Empfehlung</span></div></div>
      <div class="controls">
        <div class="seg" role="group">${[['all', 'Alle'], ['rookie', 'Rookies'], ['sophomore', 'Sophomores']].map(([v, l]) => `<button type="button" class="seg-btn${st.exp === v ? ' active' : ''}" data-exp="${v}">${l}</button>`).join('')}</div>
        <select class="tr-select" data-nba aria-label="NBA-Team"><option value="">Alle NBA-Teams (${all.length})</option>${teams.map(t => `<option value="${t}"${st.nba === t ? ' selected' : ''}>${t} (${all.filter(p => p.nbaTeam === t).length})</option>`).join('')}</select>
        <input type="search" class="search" placeholder="Spieler, Team, Position …" value="${e(st.q)}" data-q aria-label="Suchen">
        ${st.sort ? '<button type="button" class="seg-btn" data-unsort>↺ Empfehlung</button>' : ''}
      </div>
      <div class="table-wrap"><table class="table compact nba-waiver"><thead><tr><th class="num">#</th>${th('name', 'Spieler')}${th('nbaTeam', 'NBA')}${th('pos', 'Pos')}${cols.map(c => th(c.k, c.l, c.t, 'num')).join('')}</tr></thead>
        <tbody data-body>${tbody(ctx, st)}</tbody></table></div>`;
  }

  function mount(root, ctx) {
    const save = (patch, full) => { ctx.store.setJSON('waiver', { ...getState(ctx), ...patch }); if (full) ctx.refresh(); else root.querySelector('[data-body]').innerHTML = tbody(ctx, getState(ctx)); };
    root.querySelectorAll('[data-exp]').forEach(b => b.addEventListener('click', () => save({ exp: b.dataset.exp }, true)));
    const nba = root.querySelector('[data-nba]');
    if (nba) nba.addEventListener('change', () => save({ nba: nba.value }));
    const q = root.querySelector('[data-q]');
    if (q) q.addEventListener('input', () => save({ q: q.value }));
    root.querySelectorAll('[data-sort]').forEach(b => b.addEventListener('click', () => {
      const st = getState(ctx), k = b.dataset.sort;
      const desc = false;
      save(st.sort === k ? { dir: -st.dir } : { sort: k, dir: desc ? -1 : 1 }, true);
    }));
    const un = root.querySelector('[data-unsort]');
    if (un) un.addEventListener('click', () => save({ sort: null, dir: 1 }, true));
  }

  MFHFB.pages.register({
    id: 'waiver', section: 'teams', label: 'Waiver', icon: '🆓', applies: { sport: ['nba'] },
    data: ['teams', '?rosters-live', '?sport:aliases', 'best-available-board', '?live-projections'],
    title: () => 'Waiver', render, mount,
  });
})();
