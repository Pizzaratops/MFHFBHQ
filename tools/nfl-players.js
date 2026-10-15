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
//  15.10.2026: 📸 Best-of-Karte (Week/Season, Rookies/Sophs/Vets/Waiver).
// ============================================================

(function () {
  const POS = ['ALL', 'QB', 'RB', 'WR', 'TE', 'K', 'DST'];
  const normKey = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/\b(jr|sr|ii|iii|iv|v)\b\.?/g, '').replace(/[^a-z0-9]/g, '');
  const posOf = p => { const k = String(p || '').split('/')[0].toUpperCase(); return k === 'D' ? 'DST' : k; };
  const state = ctx => ({ pos: 'ALL', free: false, q: '', nc: false, ncw: '', nk: 'top10', ...ctx.store.getJSON('players', {}) });

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


  // ---------- Best-of-Karte (Screenshot, 15.10.2026) ----------
  //  „Best … of Week N / of the Season“ nach Fantasy-Punkten im Liga-Scoring
  //  (PLAYER_SEASON_STATS). Gruppen: Top 10, Rookies, Sophomores, Vets (NFL-Jahr
  //  aus Player DNA, e = 1 Rookie, 2 Sophomore), Waiver Wire (aktuell ohne Liga-Team).
  //  Positionsfilter der Seite gilt mit („Best WRs of Week 5“).
  //  Links Nr. 1 mit Player-DNA-Radar (Saisonprofil, Perzentile), rechts 2–5 bzw. 2–10.
  //  BWP: ESPN liefert Wochenpunkte nur für gerosterte Spieler → für Free Agents
  //  fehlen sie; ersatzweise die PPR-Wochenpunkte aus DOPE (Sleeper, fast gleiches Scoring).
  const NC_KINDS = { top10: ['Best 10 Players', 10], rookie: ['Best Rookies', 5], sophomore: ['Best Sophomores', 5], vet: ['Best Vets', 5], fa: ['Best Waiver Wire Players', 10] };
  const POS_PLURAL = { QB: 'QBs', RB: 'RBs', WR: 'WRs', TE: 'TEs', K: 'Kickers', DST: 'Defenses' };
  let NCD = null; // lazy: { dna, opp, alt }
  const ncFiles = ctx => ['?sport:player-dna', '?sport:opportunity'];
  function ncData(ctx) {
    if (NCD && NCD.league === ctx.league.key) return NCD;
    return null;
  }
  function loadNc(ctx) {
    const jobs = [MFHFB.data.load(ctx.league, ncFiles(ctx))];
    jobs.push(ctx.league.key === 'bwp' ? MFHFB.data.load(ctx.league, ['?./leagues/dope/data/player-stats']) : Promise.resolve({}));
    return Promise.all(jobs).then(([d, alt]) => {
      const dna = new Map(), opp = new Map();
      const S = d.PLAYER_DNA && d.PLAYER_DNA.seasons && d.PLAYER_DNA.seasons[String(d.PLAYER_DNA.current)];
      if (S) ['players', 'early'].forEach(g => Object.entries(S[g] || {}).forEach(([pos, l]) => l.forEach(x => dna.set(normKey(x.n), { ...x, pos, full: g === 'players' }))));
      ((d.OPPORTUNITY && d.OPPORTUNITY.players) || []).forEach(x => opp.set(normKey(x.n), (x.w || {})[String(d.OPPORTUNITY.season)] || []));
      NCD = { league: ctx.league.key, dna, opp, cats: d.PLAYER_DNA ? d.PLAYER_DNA.categories : {}, alt: (alt.PLAYER_SEASON_STATS && alt.PLAYER_SEASON_STATS.players) || [] };
      return NCD;
    });
  }
  const f1 = v => (Math.round(v * 10) / 10).toFixed(1).replace('.', ',');
  function oppLine(rows, week) {
    const r = week === 'season' ? null : rows.find(x => String(x[0]) === String(week));
    if (week !== 'season' && !r) return '';
    const sum = i => (r ? r[i] : rows.reduce((a, x) => a + (x[i] || 0), 0));
    const it = [];
    if (sum(2)) it.push(['Tgt', sum(2)]); if (sum(5)) it.push(['Car', sum(5)]);
    if (sum(8)) it.push(['Rec-Yds', sum(8)]); if (sum(9)) it.push(['Rush-Yds', sum(9)]);
    if (r && r[6]) it.push(['Snaps', r[6] + '%']);
    return it.map(([l, v]) => `<span class="nc-s">${l}: <b>${v}</b></span>`).join(' <i>/</i> ');
  }
  function ncCard(ctx, st) {
    const e = ctx.ui.esc, d = ctx.data, D = ncData(ctx);
    const S = (d.PLAYER_SEASON_STATS && d.PLAYER_SEASON_STATS.players) || [];
    const weeks = [...new Set(S.flatMap(p => Object.keys(p.weeklyPoints || {})).map(Number))].sort((a, b) => a - b);
    if (!weeks.length) return '';
    const week = st.ncw === 'season' ? 'season' : weeks.includes(Number(st.ncw)) ? Number(st.ncw) : weeks[weeks.length - 1];
    const kind = NC_KINDS[st.nk] ? st.nk : 'top10';
    const posLbl = st.pos !== 'ALL' ? `Best ${POS_PLURAL[st.pos] || st.pos}` : null;
    const base = kind === 'top10' ? (posLbl || 'Best 10 Players') : kind === 'fa' ? `Best Waiver Wire ${posLbl ? (POS_PLURAL[st.pos] || st.pos) : 'Players'}` : `${NC_KINDS[kind][0]}${posLbl ? ' · ' + st.pos : ''}`;
    const title = `${base} ${week === 'season' ? 'of the Season' : 'of Week ' + week}`;
    const n = kind === 'top10' && !posLbl ? 10 : NC_KINDS[kind][1];
    const controls = `<div class="controls nc-controls">
      <select class="tr-select" data-ncw aria-label="Zeitraum"><option value="season"${week === 'season' ? ' selected' : ''}>Ganze Saison</option>${weeks.slice().reverse().map(w => `<option value="${w}"${w === week ? ' selected' : ''}>Woche ${w}</option>`).join('')}</select>
      <select class="tr-select" data-nk aria-label="Gruppe">${Object.entries(NC_KINDS).map(([k, v]) => `<option value="${k}"${k === kind ? ' selected' : ''}>${v[0]}</option>`).join('')}</select>
      <button type="button" class="seg-btn active nc-shot" data-ncshot>📸 Screenshot</button>
      <span class="muted small">Positionsfilter oben gilt mit.</span></div>`;
    if (!D) return controls + '<div class="card nc-card"><p class="muted">⏳ Lade Player DNA …</p></div>';
    const owner = new Set(); Object.values(d.ROSTERS_LIVE || {}).forEach(l => (l || []).forEach(p => owner.add(normKey(p.name))));
    const pts = p => (week === 'season' ? Object.values(p.weeklyPoints || {}).reduce((a, b) => a + b, 0) : (p.weeklyPoints || {})[week]);
    let pool = S.map(p => ({ p, k: normKey(p.name), src: 'liga' }));
    let altUsed = false;
    if (kind === 'fa' && ctx.league.key === 'bwp' && D.alt.length) {
      const have = new Set(pool.map(x => x.k));
      D.alt.forEach(p => { const k = normKey(p.name); if (!have.has(k)) { pool.push({ p, k, src: 'alt' }); } });
      altUsed = true;
    }
    const exp = k => { const x = D.dna.get(k); return x ? x.e : null; };
    pool = pool.filter(({ p, k }) => {
      if (st.pos !== 'ALL' && posOf(p.pos) !== st.pos) return false;
      if (pts(p) == null) return false;
      const ex = exp(k);
      if (kind === 'rookie') return ex === 1;
      if (kind === 'sophomore') return ex === 2;
      if (kind === 'vet') return ex == null || ex >= 3; // K/DST ohne DNA zählen als Vets
      if (kind === 'fa') return !owner.has(k);
      return true;
    }).map(x => ({ ...x, v: pts(x.p) })).sort((a, b) => b.v - a.v).slice(0, n);
    const ownerName = k => { for (const [id, l] of Object.entries(d.ROSTERS_LIVE || {})) if ((l || []).some(p => normKey(p.name) === k)) { const t = (d.LEAGUE_TEAMS || []).find(t => t.id === id); return t ? (t.emoji ? t.emoji + ' ' : '') + t.name : id; } return 'FA'; };
    const meta = x => `${posOf(x.p.pos)} · ${x.p.team || ''}${kind === 'fa' ? '' : ' · ' + e(ownerName(x.k))}`;
    const ptsTxt = x => (week === 'season' ? `<b>${f1(x.v)}</b> Pkt · Ø ${f1(x.v / Math.max(1, Object.keys(x.p.weeklyPoints || {}).length))}` : `<b>${f1(x.v)}</b> Pkt`) + (x.src === 'alt' ? ' <sup>S</sup>' : '');
    let body;
    if (!pool.length) body = ctx.ui.empty('Niemand gefunden', 'Für diese Auswahl gibt es keine Punkte.', '🏈');
    else {
      const top = pool[0], dn = D.dna.get(top.k);
      let viz = '';
      if (dn && dn.p && D.cats[dn.pos]) {
        const cats = D.cats[dn.pos];
        viz = MFHFB.charts.radar({ axes: cats.map(c => ({ label: c.label })), series: [{ name: top.p.name, vals: cats.map((c, i) => (dn.p[i] == null ? null : Math.max(0.04, dn.p[i] / 100))), tips: cats.map((c, i) => `${c.label}: ${dn.p[i] == null ? '—' : dn.p[i] + '. Perzentil'}`) }], size: 260, label: `Player DNA ${top.p.name}` }) + '<div class="nc-cap">Player DNA 2026 · Perzentile der Position</div>';
      } else {
        const wk = Object.entries(top.p.weeklyPoints || {}).sort((a, b) => a[0] - b[0]);
        const mx = Math.max(1, ...wk.map(w => w[1]));
        viz = `<div class="nc-bars">${wk.map(([w, v]) => `<div class="nc-bar${String(w) === String(week) ? ' on' : ''}"><span style="height:${Math.max(4, v / mx * 100)}%"></span><b>${f1(v)}</b><i>W${w}</i></div>`).join('')}</div><div class="nc-cap">Punkte je Woche</div>`;
      }
      const ol = x => oppLine(D.opp.get(x.k) || [], week);
      body = `<div class="nc-grid">
        <div class="nc-lead">
          <div class="nc-rank">1.</div>
          <div class="nc-name">${e(top.p.name)}</div>
          <div class="nc-team">${meta(top)}</div>
          <div class="nc-pts">${ptsTxt(top)}</div>
          <div class="nc-radar">${viz}</div>
          <div class="nc-line">${ol(top)}</div>
        </div>
        <ol class="nc-list">${pool.slice(1).map((x, i) => `<li><span class="nc-n">${i + 2}.</span><div class="nc-grow"><div class="nc-pname">${e(x.p.name)} <small>${meta(x)}</small></div><div class="nc-line">${ol(x)}</div></div><div class="nc-ptsr">${ptsTxt(x)}</div></li>`).join('')}</ol>
      </div>`;
    }
    const lg = ctx.league.short || ctx.league.name;
    return controls + `<section class="card nc-card" data-share="${e(title)}">
      <div class="nc-head"><div class="nc-kicker">🏈 ${e(lg)} · ${week === 'season' ? `Saison ${(d.PLAYER_SEASON_STATS || {}).season || ''} · Woche 1–${weeks[weeks.length - 1]}` : 'NFL Woche ' + week} · Fantasy-Punkte (Liga-Scoring)${kind === 'fa' ? ' · Free Agents' : ''}</div><h2 class="nc-title display">${e(title)}</h2></div>
      ${body}
      ${altUsed && pool.some(x => x.src === 'alt') ? '<div class="nc-foot muted"><sup>S</sup> Punkte aus Sleeper-PPR (ESPN liefert für Free Agents keine Wochenpunkte)</div>' : ''}
    </section>`;
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
          <div class="page-sub">${mode === 'proj' ? 'Projizierte Saisonpunkte' : 'Tatsächlich erzielte Punkte'}<span class="explain"> · „vs. Proj.“ = Ø Punkte minus projizierte Punkte pro Spiel (Saisonprojektion / 17)</span></div>
        </div>
        <div class="week-picker">
          <a class="week-btn done${mode === 'season' ? ' active' : ''}" href="${href('players')}"${hasStats ? '' : ' aria-disabled="true"'}>Saison-Punkte</a>
          <a class="week-btn done${mode === 'proj' ? ' active' : ''}" href="${href('players', 'proj')}">Projektion</a>
        </div>
        <div class="controls">
          <div class="seg" role="group">${POS.map(p => `<button type="button" class="seg-btn${st.pos === p ? ' active' : ''}" data-pos="${p}">${p === 'ALL' ? 'Alle' : p}</button>`).join('')}</div>
          <div class="seg" role="group"><button type="button" class="seg-btn${st.free ? ' active' : ''}" data-free aria-pressed="${st.free}">Nur verfügbare</button></div>
          <input type="search" class="search" placeholder="Spieler suchen …" value="${e(st.q)}" data-q aria-label="Spieler suchen">
          ${hasStats ? `<button type="button" class="seg-btn${st.nc ? ' active' : ''}" data-nc>📸 Best-of Card</button>` : ''}
        </div>
        ${hasStats && st.nc ? `<div data-nchost>${ncCard(ctx, st)}</div>` : ''}
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
      const nc = root.querySelector('[data-nc]');
      if (nc) nc.addEventListener('click', () => save({ nc: !state(ctx).nc }));
      const ncw = root.querySelector('[data-ncw]'), nk = root.querySelector('[data-nk]');
      if (ncw) ncw.addEventListener('change', () => save({ ncw: ncw.value }));
      if (nk) nk.addEventListener('change', () => save({ nk: nk.value }));
      if (root.querySelector('[data-nchost]') && !ncData(ctx)) loadNc(ctx).then(() => { if (root.isConnected) ctx.refresh(); }).catch(err => console.error(err));
      const shot = root.querySelector('[data-ncshot]');
      if (shot) shot.addEventListener('click', async () => {
        const card = root.querySelector('.nc-card[data-share]'); if (!card) return;
        shot.disabled = true; const old = shot.textContent; shot.textContent = '⏳ …';
        try { await MFHFB.share.share(card, card.dataset.share, ctx.league); shot.textContent = '✅ Gespeichert'; }
        catch (err) { console.error(err); shot.textContent = '⚠️ Fehler'; }
        setTimeout(() => { shot.textContent = old; shot.disabled = false; }, 1500);
      });
      const q = root.querySelector('[data-q]');
      if (q) q.addEventListener('input', () => {
        const st = { ...state(ctx), q: q.value };
        ctx.store.setJSON('players', st);
        root.querySelector('[data-body]').innerHTML = body(ctx, mode, st);
      });
    },
  });
})();
