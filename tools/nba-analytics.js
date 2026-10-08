// ============================================================
//  Tool (NBA): Team Analytics — Kategorie-Profil je Kader
// ============================================================
//  #/<liga>/analytics[/heatmap]
//
//  Port von js/analytics.js (TTHQ + Funkytown). Datenbasis unverändert:
//  TEAM_ANALYTICS_LIVE (täglich von scripts/build-team-analytics.js aus
//  LIVE_PROJECTIONS × ROSTERS_LIVE gebaut, Kategorie-Z-Werte je Spieler).
//  Je Team die besten N Spieler (nach Per-Game-Value oder Durability/BZ)
//  → Kategorie-Summen → ligaweit auf [-1, 1] normiert (TO invertiert).
//
//  Ansichten: Radar je Team (Standard) oder Heatmap; bis zu 3 Teams
//  übereinander vergleichen; Klick → Detail mit Stärke/Schwäche.
//  Behoben: TO wurde doppelt invertiert (siehe compute()).
//  Weggelassen: SEASON_STATS-Unterzeilen (statische Vorjahreswerte, in
//  Funkytown fälschlich mit TTHQ-Daten befüllt).
// ============================================================

(function () {
  const N = () => MFHFB.nba;
  const CATS = ['pV', '3V', 'rV', 'aV', 'sV', 'bV', 'fgV', 'ftV', 'toV'];
  const LABELS = ['PTS', '3PM', 'REB', 'AST', 'STL', 'BLK', 'FG%', 'FT%', 'TO'];
  const EMOJI = ['🏀', '3️⃣', '💪', '🤝', '🫷', '🛡️', '🎯', '🆓', '⚠️'];
  const MAX_SEL = 3;
  const defaults = { cutoff: 13, method: 'value', sel: [] };
  const getState = ctx => ({ ...defaults, ...ctx.store.getJSON('analytics', {}) });

  function compute(ctx, cutoff, method) {
    const R = ctx.data.TEAM_ANALYTICS_LIVE || {};
    const active = new Set(N().leagueTeams(ctx.data).map(t => String(t.id)));
    const raw = {};
    Object.entries(R).forEach(([tid, players]) => {
      if (!active.has(tid)) return;
      const top = [...players].sort((a, b) => (b[method] || 0) - (a[method] || 0)).slice(0, cutoff);
      const sums = {};
      CATS.forEach(c => { sums[c] = top.reduce((s, p) => s + (p[c] || 0), 0); });
      raw[tid] = { sums, players: top };
    });
    const norm = {};
    CATS.forEach(c => {
      const vals = Object.values(raw).map(t => t.sums[c]);
      const mn = Math.min(...vals), rng = (Math.max(...vals) - mn) || 1;
      Object.keys(raw).forEach(tid => {
        norm[tid] = norm[tid] || {};
        const f = (raw[tid].sums[c] - mn) / rng * 2;
        // toV kommt aus build-team-analytics.js bereits invertiert (höher = weniger TO).
        // Das alte analytics.js hat hier ein zweites Mal invertiert — dadurch galt
        // das Team mit den WENIGSTEN Ballverlusten als schlechtestes. Behoben.
        norm[tid][c] = f - 1;
      });
    });
    const avg = tid => CATS.reduce((a, c) => a + norm[tid][c], 0) / CATS.length;
    return { norm, raw, avg };
  }

  const fmt = v => (v >= 0 ? '+' : '') + v.toFixed(2);
  const tone = v => (v > 0.3 ? 'up' : v > -0.1 ? '' : v > -0.4 ? 'warn' : 'down');
  // Heatmap-Farbe: grün/rot nach Wert (Skala -1..1)
  const cellStyle = v => { const a = Math.min(Math.abs(v), 1) * 0.5; return a < 0.05 ? '' : v > 0 ? `background:rgba(46,157,98,${a.toFixed(2)})` : `background:rgba(217,83,79,${a.toFixed(2)})`; };

  function radarFor(teams, M) {
    return MFHFB.charts.radar({
      axes: LABELS.map(l => ({ label: l })),
      series: teams.map(t => ({ name: t.name, vals: CATS.map(c => (M.norm[t.id][c] + 1) / 2), tips: CATS.map((c, i) => `${t.name} · ${LABELS[i]}: ${fmt(M.norm[t.id][c])}`) })),
      size: 260, label: 'Kategorie-Profil',
    });
  }

  function render(ctx) {
    const { data, ui, params } = ctx, e = ui.esc, nba = N();
    nba.init(data);
    if (!data.TEAM_ANALYTICS_LIVE) return ui.empty('Keine Analytics-Daten', 'TEAM_ANALYTICS_LIVE fehlt für diese Liga.', '📐');
    if (nba.preDraft(data) || !Object.keys(data.TEAM_ANALYTICS_LIVE).length) return `<div class="page-head"><h1 class="page-title display">📐 Team Analytics</h1></div>` + ui.empty('Noch keine Kader', 'Team Analytics füllt sich nach dem Draft. Während des Drafts: Teams & Radar auf der Seite „Auction Draft“.', '📐');
    const st = getState(ctx);
    const view = params[0] === 'heatmap' ? 'heatmap' : 'radar';
    const M = compute(ctx, st.cutoff, st.method);
    const teams = nba.leagueTeams(data).filter(t => M.norm[t.id]);
    const sel = st.sel.filter(id => M.norm[id]).slice(0, MAX_SEL);
    const ranked = teams.slice().sort((a, b) => M.avg(b.id) - M.avg(a.id));

    const controls = `<div class="controls">
      <div class="seg" role="tablist">${[['radar', '🕸️ Radar'], ['heatmap', '🔥 Heatmap']].map(([k, l]) => `<a class="seg-btn${view === k ? ' active' : ''}" href="${ctx.href('analytics', ...(k === 'radar' ? [] : [k]))}">${l}</a>`).join('')}</div>
      <div class="seg" role="group" aria-label="Sortierung der Spieler">${[['value', 'Per-Game Value'], ['bz', 'Durability (BZ)']].map(([k, l]) => `<button type="button" class="seg-btn${st.method === k ? ' active' : ''}" data-method="${k}">${l}</button>`).join('')}</div>
      <label class="ls-min">Top <strong data-cutlabel>${st.cutoff}</strong> Spieler je Team <input type="range" min="8" max="20" value="${st.cutoff}" data-cutoff></label>
    </div>`;

    let body;
    if (view === 'heatmap') {
      body = `<div class="table-wrap"><table class="table compact nba-an-heat"><thead><tr><th class="nba-sticky">Team</th>${LABELS.map(l => `<th class="num">${l}</th>`).join('')}<th class="num">Ø</th></tr></thead>
        <tbody>${ranked.map(t => `<tr data-team="${t.id}" class="clickable">
          <td class="nba-sticky"><span class="nba-tlink mp-tc" style="${nba.tcStyle(t)}"><span class="nba-tdot"></span>${e(t.name)}</span><small class="muted nba-an-owner">${e(t.owner || '')}</small></td>
          ${CATS.map(c => `<td class="num" style="${cellStyle(M.norm[t.id][c])}">${fmt(M.norm[t.id][c])}</td>`).join('')}
          <td class="num strong ${tone(M.avg(t.id))}">${fmt(M.avg(t.id))}</td></tr>`).join('')}</tbody></table></div>`;
    } else {
      const selTeams = sel.map(id => teams.find(t => String(t.id) === id)).filter(Boolean);
      body = `<div class="pick-row" aria-label="Teams vergleichen (bis zu ${MAX_SEL})">
          ${ranked.map(t => { const k = sel.indexOf(String(t.id)); return `<button type="button" class="pick${k > -1 ? ' on ' + MFHFB.charts.SEL[k] : ''}" data-pick="${t.id}" aria-pressed="${k > -1}"><span>${e(t.name)}</span></button>`; }).join('')}
          ${sel.length ? '<button type="button" class="pick clear" data-clear>✕ Vergleich beenden</button>' : ''}
        </div>
        ${selTeams.length ? `<div class="card nba-an-compare"><div class="nba-an-cmpchart">${radarFor(selTeams, M)}${MFHFB.charts.chips(selTeams.map(t => t.name))}</div>
          <div class="table-wrap"><table class="table compact"><thead><tr><th>Kat.</th>${selTeams.map((t, k) => `<th class="num"><span class="dna-chip ${MFHFB.charts.SEL[k]}"><i></i></span>${e(t.name)}</th>`).join('')}</tr></thead>
          <tbody>${CATS.map((c, i) => { const vals = selTeams.map(t => M.norm[t.id][c]); const best = Math.max(...vals); return `<tr><td class="strong">${EMOJI[i]} ${LABELS[i]}</td>${vals.map(v => `<td class="num${v === best && selTeams.length > 1 ? ' strong up' : ''}" style="${cellStyle(v)}">${fmt(v)}</td>`).join('')}</tr>`; }).join('')}
          <tr class="nba-an-avg"><td class="strong">Ø</td>${selTeams.map(t => `<td class="num strong ${tone(M.avg(t.id))}">${fmt(M.avg(t.id))}</td>`).join('')}</tr></tbody></table></div></div>` : ''}
        <div class="nba-an-grid">${ranked.map((t, i) => `<button type="button" class="card nba-an-card mp-tc" style="${nba.tcStyle(t)}" data-team="${t.id}">
          <div class="nba-an-head"><span><span class="nba-an-rank">${i + 1}.</span> <strong>${e(t.name)}</strong><small>${e(t.owner || '')}</small></span><span class="nba-an-avgv ${tone(M.avg(t.id))}">${fmt(M.avg(t.id))}</span></div>
          ${radarFor([t], M)}</button>`).join('')}</div>`;
    }
    return `<div class="page-head"><h1 class="page-title display">📐 Team Analytics</h1>
        <div class="page-sub"><span class="explain">Kategorie-Profil je Kader aus den Live-Projections, ligaweit auf −1 … +1 normiert (TO: weniger = besser).</span> Top ${st.cutoff} je Team</div></div>
      ${controls}${body}
      <p class="muted small explain">Klick auf ein Team zeigt Stärken, Schwächen und die einbezogenen Spieler. Datenbasis wird täglich neu gebaut (Spieler ohne Projection fehlen bewusst).</p>`;
  }

  function detail(ctx, tid) {
    const st = getState(ctx), M = compute(ctx, st.cutoff, st.method), nba = N(), e = ctx.ui.esc;
    const t = nba.leagueTeams(ctx.data).find(x => String(x.id) === String(tid));
    if (!t || !M.norm[tid]) return;
    const s = M.norm[tid];
    const sc = CATS.map((c, i) => ({ c, i, v: s[c] })).sort((a, b) => b.v - a.v);
    const best = sc[0], worst = sc[sc.length - 1];
    const players = M.raw[tid].players;
    const html = `<div class="dna-modal-box nba-an-modal mp-tc" style="${nba.tcStyle(t)}">
      <div class="dna-modal-head"><div><h2 class="nba-an-mtitle">${e(t.name)}</h2><div class="muted small">${e(t.owner || '')} · Top ${st.cutoff} · ${st.method === 'value' ? 'Per-Game Value' : 'Durability (BZ)'} · Ø <strong class="${tone(M.avg(tid))}">${fmt(M.avg(tid))}</strong></div></div>
        <button type="button" class="dna-modal-x" data-close aria-label="Schließen">✕</button></div>
      <div class="nba-an-sw"><div class="up"><small>💪 Stärke</small><strong>${EMOJI[best.i]} ${LABELS[best.i]}</strong><span>${fmt(best.v)}</span></div>
        <div class="down"><small>⚠️ Schwäche</small><strong>${EMOJI[worst.i]} ${LABELS[worst.i]}</strong><span>${fmt(worst.v)}</span></div></div>
      <div class="nba-an-bars">${sc.map(x => `<div class="nba-an-bar"><span>${EMOJI[x.i]} ${LABELS[x.i]}</span><div><i style="width:${Math.round((x.v + 1) / 2 * 100)}%" class="${x.v >= 0 ? 'pos' : 'neg'}"></i></div><b class="${x.v >= 0.1 ? 'up' : x.v <= -0.1 ? 'down' : ''}">${fmt(x.v)}</b></div>`).join('')}</div>
      <h3 class="group-title">Spieler in dieser Analyse</h3>
      <div class="table-wrap"><table class="table compact"><thead><tr><th>Spieler</th>${LABELS.map(l => `<th class="num">${l}</th>`).join('')}<th class="num">Value</th></tr></thead><tbody>
        ${players.map(p => `<tr><td class="strong nba-sticky">${e(p.name)}</td>${CATS.map(c => `<td class="num" style="${nba.heat(p[c] || 0)}">${(p[c] || 0).toFixed(1)}</td>`).join('')}<td class="num strong">${(p.value || 0).toFixed(2)}</td></tr>`).join('')}
      </tbody></table></div>
      <p class="small"><a href="${ctx.href('teams', t.id)}" data-close>→ Zum Kader</a></p></div>`;
    MFHFB.ui.modal('nbaAnModal', html);
  }

  function mount(root, ctx) {
    const save = patch => { ctx.store.setJSON('analytics', { ...getState(ctx), ...patch }); ctx.refresh(); };
    root.querySelectorAll('[data-method]').forEach(b => b.addEventListener('click', () => save({ method: b.dataset.method })));
    const cut = root.querySelector('[data-cutoff]');
    if (cut) {
      cut.addEventListener('input', () => { root.querySelector('[data-cutlabel]').textContent = cut.value; });
      cut.addEventListener('change', () => save({ cutoff: parseInt(cut.value, 10) }));
    }
    root.querySelectorAll('[data-pick]').forEach(b => b.addEventListener('click', () => {
      const st = getState(ctx), id = b.dataset.pick;
      let sel = st.sel.filter(x => x !== id);
      if (sel.length === st.sel.length) sel = [...st.sel, id].slice(-MAX_SEL);
      save({ sel });
    }));
    const clr = root.querySelector('[data-clear]');
    if (clr) clr.addEventListener('click', () => save({ sel: [] }));
    root.querySelectorAll('[data-team]').forEach(el => el.addEventListener('click', () => detail(ctx, el.dataset.team)));
  }

  MFHFB.pages.register({
    id: 'analytics', section: 'teams', label: 'Team Analytics', icon: '📐', applies: { sport: ['nba'] },
    data: ['teams', '?rosters-live', 'team-analytics'],
    title: () => 'Team Analytics', render, mount,
  });
})();
