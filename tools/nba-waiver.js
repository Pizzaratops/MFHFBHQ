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
  const defaults = { exp: 'all', nba: '', q: '', sort: null, dir: 1, my: null };

  // ---------- „Gain“ (seit 13.10.2026, Idee u/EdgiestOW) ----------
  // Wie viele Kategorie-Siege pro Woche bringt mir ein freier Spieler,
  // wenn ich dafür meinen entbehrlichsten Spieler droppe? Gegner = echte
  // Kader aller anderen Teams. Pro Kategorie Siegchance (S-Kurve) gegen jedes
  // Team, gemittelt. Basis: Kategorie-Z-Werte der Saison-Projections dieser
  // Liga (MFHFB.nbaProjections, gleicher Modus wie die Projections-Seite).
  const GCATS = ['pts', 'reb', 'ast', 'stl', 'blk', 'tpm', 'fgImpact', 'ftImpact', 'tov'];
  const GLAB = { pts: 'PTS', reb: 'REB', ast: 'AST', stl: 'STL', blk: 'BLK', tpm: '3PM', fgImpact: 'FG%', ftImpact: 'FT%', tov: 'TO' };
  const GSD = 2.5;
  function phi(x) { const t = 1 / (1 + 0.2316419 * Math.abs(x)); const d = 0.3989423 * Math.exp(-x * x / 2); const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274)))); return x > 0 ? 1 - p : p; }
  let gainCache = { key: null, G: null, data: null };
  function gainModel(ctx, st) {
    const nba = N(), data = ctx.data;
    if (!st.my || !data.PROJECTIONS_CONSENSUS || !MFHFB.nbaProjections) return null;
    const key = ctx.league.key + '|' + st.my + '|' + nba.getMode();
    if (gainCache.key === key && gainCache.data === data) return gainCache.G;
    const rows = MFHFB.nbaProjections.rows(ctx);
    const byKey = new Map(); rows.forEach(r => { const k = nba.key(r.name); if (!byKey.has(k)) byKey.set(k, r); });
    const ZERO = {};
    const zOf = name => { const r = byKey.get(nba.key(name)); return (r && r.rawCats) || ZERO; };
    const teams = nba.leagueTeams(data);
    const sumOf = list => { const o = {}; GCATS.forEach(c => { o[c] = list.reduce((s, z) => s + (z[c] || 0), 0); }); return o; };
    const rosterZ = {}; teams.forEach(t => { rosterZ[t.id] = nba.roster(data, t.id).map(p => ({ name: p.name, z: zOf(p.name) })); });
    const me = rosterZ[st.my]; if (!me || !me.length) return null;
    const opps = teams.filter(t => t.id !== st.my).map(t => sumOf(rosterZ[t.id].map(x => x.z)));
    const mySum = sumOf(me.map(x => x.z));
    const catP = m => { const o = {}; GCATS.forEach(c => { o[c] = opps.reduce((s, os) => s + phi((m[c] - os[c]) / GSD), 0) / opps.length; }); return o; };
    const exp = P => GCATS.reduce((s, c) => s + P[c], 0);
    const baseP = catP(mySum), base = exp(baseP);
    const cache = new Map();
    const gain = name => {
      const k = nba.key(name); if (cache.has(k)) return cache.get(k);
      const z = byKey.has(k) ? byKey.get(k).rawCats || ZERO : null;
      if (!z) { cache.set(k, null); return null; }
      let best = null;
      me.forEach(d => {
        const m = {}; GCATS.forEach(c => { m[c] = mySum[c] - (d.z[c] || 0) + (z[c] || 0); });
        const P = catP(m), v = exp(P) - base;
        if (!best || v > best.v) best = { v, drop: d.name, P };
      });
      best.cats = GCATS.map(c => ({ c, d: best.P[c] - baseP[c] }));
      cache.set(k, best); return best;
    };
    const G = { gain, baseP, base };
    gainCache = { key, G, data };
    return G;
  }
  const getState = ctx => ({ ...defaults, ...ctx.store.getJSON('waiver', {}) });

  function pool(ctx, st) {
    const nba = N();
    const owner = nba.ownerIndex(ctx.data);
    return (ctx.data.BEST_AVAILABLE_BOARD || []).filter(p => !owner(p.name) && (st.exp === 'all' || p.experience === st.exp));
  }

  function columns(ctx, board) {
    const nba = N(), proj = nba.projRanks(ctx.data);
    const has = k => board.some(p => p[k] != null);
    const G = gainModel(ctx, getState(ctx));
    const e = ctx.ui.esc, cbb = ctx.league.sport === 'cbb';
    return [
      G && { k: 'gain', l: 'Gain', desc: true, t: 'Zusätzliche erwartete Kategorie-Siege pro Woche gegen die Liga, wenn du ihn holst und dafür den entbehrlichsten Spieler droppst', v: p => { const g = G.gain(p.name); return g ? g.v : null; }, f: (v, p) => { const g = G.gain(p.name); if (!g) return '<span class="muted">—</span>'; const tip = g.cats.slice().sort((a, b) => Math.abs(b.d) - Math.abs(a.d)).filter(x => Math.abs(x.d) >= 0.005).slice(0, 5).map(x => `${GLAB[x.c]} ${x.d >= 0 ? '+' : ''}${Math.round(x.d * 100)}`).join(' · '); return `<span class="wc-gain ${g.v >= 0.05 ? 'hi' : g.v >= 0 ? 'mid' : 'lo'}" title="${e('Siegchance-Änderung (Prozentpunkte): ' + tip)}">${g.v >= 0 ? '+' : ''}${g.v.toFixed(2)}</span>`; } },
      G && { k: 'drop', l: 'für', t: 'Wen du dafür droppen würdest (bester Tausch)', v: p => { const g = G.gain(p.name); return g ? g.drop : null; }, f: (v) => (v ? `<span class="muted small">${e(v)}</span>` : '—') },
      !cbb && { k: 'age', l: 'Alter', v: p => nba.age(p.dob) ?? p.age ?? null, f: v => (v != null ? v : '—') },
      { k: 'minutesAvg', l: 'MIN', t: 'Minuten pro Spiel im jüngsten Fenster', v: p => p.minutesAvg ?? null, f: v => (v != null ? v : '—') },
      { k: 'bestCat30', l: 'Beste Kat.', t: 'Stärkste Kategorie im jüngsten Fenster (laufende Saison > Off-Season)', v: p => { const i = CAT_ORDER.indexOf(p.bestCat30); return i < 0 ? null : i; }, f: (v, p) => (p.bestCat30 ? `<span class="up strong">${p.bestCat30}</span>` : '—') },
      { k: 'worstCat30', l: 'Schwächste', v: p => { const i = CAT_ORDER.indexOf(p.worstCat30); return i < 0 ? null : i; }, f: (v, p) => (p.worstCat30 ? `<span class="down strong">${p.worstCat30}</span>` : '—') },
      // College (Dizzle CBB): Klasse, Vorsaison-Rang, Saison-z, NIL-Wert
      cbb && { k: 'cls', l: 'Kl.', t: 'Klasse (Fr/So/Jr/Sr, aus der NIL-Liste)', v: p => ['Fr', 'So', 'Jr', 'Sr', 'Gr'].indexOf(p.cls) + 1 || null, f: (v, p) => (p.cls ? e(p.cls) : '—') },
      cbb && { k: 'lastSeasonRank', l: 'Vorsaison', t: 'Rang 2025-26 über alle D-I-Spieler (9-Cat pro Spiel)', v: p => p.lastSeasonRank ?? null, f: v => nba.rankBadge(v) },
      cbb && { k: 'zSeason', l: 'Saison z', desc: true, t: '9-Cat-z der laufenden Saison (pro Spiel)', v: p => p.zSeason ?? null, f: (v, p) => (v == null ? '—' : `<span class="ls-comp ${v >= 0 ? 'up' : 'down'}" title="${p.gamesSeason} Spiele">${v >= 0 ? '+' : ''}${v.toFixed(1)}</span>`) },
      cbb && { k: 'nilValue', l: 'NIL', desc: true, t: 'Geschätzter NIL-Wert aus der Auktions-Vorbereitung 2026', v: p => p.nilValue ?? null, f: v => (v == null ? '—' : '$' + v) },
      has('dynastyRank') && { k: 'dynastyRank', l: 'MFHFB', t: 'MFHFB Dynasty-Rang', v: p => p.dynastyRank ?? null, f: v => nba.rankBadge(v) },
      !cbb && { k: 'season2627Rank', l: 'Rang 26/27', t: 'Rang in der laufenden Saison (Rolling-Rankings-Archiv, füllt sich ab Saisonstart)', v: p => p.season2627Rank ?? null, f: v => nba.rankBadge(v) },
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
        <div class="seg" role="group">${[['all', 'Alle'], ['rookie', ctx.league.sport === 'cbb' ? 'Freshmen' : 'Rookies'], ['sophomore', 'Sophomores']].map(([v, l]) => `<button type="button" class="seg-btn${st.exp === v ? ' active' : ''}" data-exp="${v}">${l}</button>`).join('')}</div>
        <select class="tr-select" data-nba aria-label="NBA-Team"><option value="">${ctx.league.sport === 'cbb' ? 'Alle Schulen' : 'Alle NBA-Teams'} (${all.length})</option>${teams.map(t => `<option value="${t}"${st.nba === t ? ' selected' : ''}>${t} (${all.filter(p => p.nbaTeam === t).length})</option>`).join('')}</select>
        <input type="search" class="search" placeholder="Spieler, Team, Position …" value="${e(st.q)}" data-q aria-label="Suchen">
        ${st.sort ? '<button type="button" class="seg-btn" data-unsort>↺ Empfehlung</button>' : ''}
        ${data.PROJECTIONS_CONSENSUS ? `<select class="tr-select" data-my aria-label="Mein Team"><option value="">🎯 Mein Team für „Gain“ …</option>${N().leagueTeams(data).map(t => `<option value="${t.id}"${st.my === t.id ? ' selected' : ''}>${e(t.name)}</option>`).join('')}</select>` : ''}
      </div>
      ${(G => G ? `<div class="small wc-gainnote">🎯 <b>Gain</b> für <b>${e((N().leagueTeams(data).find(t => t.id === st.my) || {}).name || '')}</b>: Im Schnitt gewinnst du gegen die Liga <b>${G.base.toFixed(1).replace('.', ',')}</b> Kategorien pro Woche. Stark: ${Object.entries(G.baseP).filter(([, v]) => v >= 0.65).map(([c]) => GLAB[c]).join(', ') || '–'} · knapp: ${Object.entries(G.baseP).filter(([, v]) => v > 0.35 && v < 0.65).map(([c]) => GLAB[c]).join(', ') || '–'} · schwach: ${Object.entries(G.baseP).filter(([, v]) => v <= 0.35).map(([c]) => GLAB[c]).join(', ') || '–'}. „Gain“ = Kategorie-Siege mehr, wenn du ihn für den Spieler unter „für“ holst. Spalte antippen = sortieren.${ctx.league.format && /dynasty/i.test(ctx.league.format) ? ' <b>Dynasty:</b> Gain zählt nur diese Saison, Alter und Zukunftswert stehen in „MFHFB“/„Alter“.' : ''}</div>` : '')(gainModel(ctx, st))}
      <div class="table-wrap"><table class="table compact nba-waiver"><thead><tr><th class="num">#</th>${th('name', 'Spieler')}${th('nbaTeam', ctx.league.sport === 'cbb' ? 'Schule' : 'NBA')}${th('pos', 'Pos')}${cols.map(c => th(c.k, c.l, c.t, 'num')).join('')}</tr></thead>
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
      const col = columns(ctx, ctx.data.BEST_AVAILABLE_BOARD || []).find(c => c.k === k);
      const desc = !!(col && col.desc);
      save(st.sort === k ? { dir: -st.dir } : { sort: k, dir: desc ? -1 : 1 }, true);
    }));
    const my = root.querySelector('[data-my]');
    if (my) my.addEventListener('change', () => save({ my: my.value ? Number(my.value) : null, ...(my.value ? { sort: 'gain', dir: -1 } : {}) }, true));
    const un = root.querySelector('[data-unsort]');
    if (un) un.addEventListener('click', () => save({ sort: null, dir: 1 }, true));
  }

  MFHFB.pages.register({
    id: 'waiver', section: 'teams', label: 'Waiver', icon: '🆓', applies: { sport: ['nba', 'cbb'] },
    data: l => (l.sport === 'cbb' ? ['teams', '?rosters-live', 'best-available-board'] : ['teams', '?rosters-live', '?sport:aliases', 'best-available-board', '?sport:live-projections', '?sport:projections-consensus']),
    title: () => 'Waiver', render, mount,
  });
})();
