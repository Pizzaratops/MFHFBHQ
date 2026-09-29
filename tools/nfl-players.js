// ============================================================
//  Tool: Spieler (Punkte-Ligen, NFL)
// ============================================================
//  #/<liga>/players[/proj]
//  Fasst "Player Rankings" (tatsächliche Saisonpunkte, PLAYER_SEASON_STATS)
//  und "Player Projections" (Saisonprojektion, PLAYER_PROJECTIONS) der
//  bisherigen Seiten zu EINER Tabelle mit Umschalter zusammen. Filter wie
//  bisher (Position, Suche, "nur verfügbare" = Best Available).
//  Zusätzlich sichtbar: Ø Punkte UND Projektion nebeneinander, damit man
//  Über-/Unterperformer gegenüber der Erwartung erkennt.
// ============================================================

(function () {
  const POS = ['ALL', 'QB', 'RB', 'WR', 'TE', 'K', 'DST'];
  const normKey = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/\b(jr|sr|ii|iii|iv|v)\b\.?/g, '').replace(/[^a-z0-9]/g, '');
  const posOf = p => { const k = String(p || '').split('/')[0].toUpperCase(); return k === 'D' ? 'DST' : k; };
  const state = ctx => ({ pos: 'ALL', free: false, q: '', ...ctx.store.getJSON('players', {}) });

  function model(ctx, mode) {
    const d = ctx.data;
    const teams = {}; (d.LEAGUE_TEAMS || []).forEach(t => { teams[t.id] = t; });
    const owner = new Map();
    Object.entries(d.ROSTERS_LIVE || {}).forEach(([id, l]) => (l || []).forEach(p => owner.set(normKey(p.name), teams[id] || { id, name: id })));
    const stats = new Map(((d.PLAYER_SEASON_STATS && d.PLAYER_SEASON_STATS.players) || []).map(p => [normKey(p.name), p]));
    const proj = new Map(((d.PLAYER_PROJECTIONS && d.PLAYER_PROJECTIONS.players) || []).map(p => [normKey(p.name), p]));
    const base = mode === 'proj' ? [...proj.values()] : [...stats.values()];
    return base.map(p => {
      const k = normKey(p.name), s = stats.get(k), pr = proj.get(k);
      const perGame = pr ? pr.projectedPoints / 17 : null;
      return {
        name: p.name, team: p.team, pos: posOf(p.pos), owner: owner.get(k) || null,
        avg: s ? s.avgPoints : null, total: s ? s.totalPoints : null, games: s ? s.gamesPlayed : null,
        proj: pr ? pr.projectedPoints : null, perGame,
        delta: s && perGame != null && s.gamesPlayed ? s.avgPoints - perGame : null,
      };
    });
  }

  function rowsFor(ctx, mode, st) {
    const q = normKey(st.q);
    return model(ctx, mode)
      .filter(p => (st.pos === 'ALL' || p.pos === st.pos) && (!st.free || !p.owner) && (!q || normKey(p.name).includes(q)))
      .sort(mode === 'proj' ? (a, b) => b.proj - a.proj : (a, b) => b.avg - a.avg || b.total - a.total)
      .slice(0, 300);
  }

  function body(ctx, mode, st) {
    const { ui, href } = ctx;
    const e = ui.esc;
    const rows = rowsFor(ctx, mode, st);
    if (!rows.length) return `<tr><td colspan="8">${ui.empty('Keine Treffer', 'Filter oder Suche anpassen.', '🔎')}</td></tr>`;
    return rows.map((p, i) => `<tr>
      <td class="num rank">${i + 1}</td>
      <td class="strong">${e(p.name)} <small class="muted">${e(p.team || '')}</small></td>
      <td><span class="pos pos-${e(p.pos)}">${e(p.pos)}</span></td>
      <td>${p.owner ? `<a class="team-cell" href="${href('teams', p.owner.id)}"><span class="team-emoji">${e(p.owner.emoji || '')}</span><span>${e(p.owner.name)}</span></a>` : '<span class="avail">verfügbar</span>'}</td>
      ${mode === 'proj'
        ? `<td class="num strong">${p.proj != null ? ui.num(p.proj) : '—'}</td><td class="num">${p.perGame != null ? ui.num(p.perGame) : '—'}</td><td class="num">${p.avg != null ? ui.num(p.avg) : '—'}</td>`
        : `<td class="num strong">${ui.num(p.avg)}</td><td class="num">${ui.num(p.total)}</td><td class="num muted">${p.games}</td>`}
      <td class="num ${p.delta == null ? 'muted' : p.delta >= 0 ? 'up' : 'down'}">${p.delta == null ? '—' : ui.signed(p.delta)}</td>
    </tr>`).join('');
  }

  MFHFB.pages.register({
    id: 'players',
    section: 'players',
    label: 'Spieler',
    icon: '📊',
    applies: { sport: ['nfl'], scoring: ['points'] },
    data: ['teams', 'rosters-live', '?player-stats', '?projections'],
    title: ({ params }) => params[0] === 'proj' ? 'Spieler · Projektion' : 'Spieler · Saison',
    render(ctx) {
      const { data, params, href, ui } = ctx;
      const e = ui.esc;
      const hasStats = !!(data.PLAYER_SEASON_STATS && data.PLAYER_SEASON_STATS.players && data.PLAYER_SEASON_STATS.players.length);
      const mode = params[0] === 'proj' || !hasStats ? 'proj' : 'season';
      const st = state(ctx);
      const heads = mode === 'proj'
        ? '<th class="num">Proj. Saison</th><th class="num">Proj./Spiel</th><th class="num">Ø Ist</th>'
        : '<th class="num">Ø Punkte</th><th class="num">Gesamt</th><th class="num">Spiele</th>';
      return `
        <div class="page-head">
          <h1 class="page-title display">📊 Spieler</h1>
          <div class="page-sub">${mode === 'proj' ? 'Projizierte Saisonpunkte' : 'Tatsächlich erzielte Punkte'} · „vs. Proj.“ = Ø Punkte minus projizierte Punkte pro Spiel (Saisonprojektion / 17)</div>
        </div>
        <div class="week-picker">
          <a class="week-btn done${mode === 'season' ? ' active' : ''}" href="${href('players')}"${hasStats ? '' : ' aria-disabled="true"'}>Saison-Punkte</a>
          <a class="week-btn done${mode === 'proj' ? ' active' : ''}" href="${href('players', 'proj')}">Projektion</a>
        </div>
        <div class="controls">
          <div class="seg" role="group">${POS.map(p => `<button type="button" class="seg-btn${st.pos === p ? ' active' : ''}" data-pos="${p}">${p === 'ALL' ? 'Alle' : p}</button>`).join('')}</div>
          <div class="seg" role="group"><button type="button" class="seg-btn${st.free ? ' active' : ''}" data-free aria-pressed="${st.free}">Nur verfügbare</button></div>
          <input type="search" class="search" placeholder="Spieler suchen …" value="${e(st.q)}" data-q aria-label="Spieler suchen">
        </div>
        <div class="table-wrap"><table class="table compact">
          <thead><tr><th class="num">#</th><th>Spieler</th><th>Pos</th><th>Liga-Team</th>${heads}<th class="num">vs. Proj.</th></tr></thead>
          <tbody data-body>${body(ctx, mode, st)}</tbody>
        </table></div>`;
    },
    mount(root, ctx) {
      const hasStats = !!(ctx.data.PLAYER_SEASON_STATS && ctx.data.PLAYER_SEASON_STATS.players && ctx.data.PLAYER_SEASON_STATS.players.length);
      const mode = ctx.params[0] === 'proj' || !hasStats ? 'proj' : 'season';
      const save = patch => { ctx.store.setJSON('players', { ...state(ctx), ...patch }); ctx.refresh(); };
      root.querySelectorAll('[data-pos]').forEach(b => b.addEventListener('click', () => save({ pos: b.dataset.pos })));
      const f = root.querySelector('[data-free]');
      if (f) f.addEventListener('click', () => save({ free: !state(ctx).free }));
      const q = root.querySelector('[data-q]');
      if (q) q.addEventListener('input', () => {
        const st = { ...state(ctx), q: q.value };
        ctx.store.setJSON('players', st);
        root.querySelector('[data-body]').innerHTML = body(ctx, mode, st);
      });
    },
  });
})();
