// ============================================================
//  Tool (NBA): Rolling Rankings — Rangverlauf je Spieler
// ============================================================
//  #/<liga>/rolling[/<2025|2026>[/<monthly|weekly>]]
//
//  Port von js/rolling-rankings.js (TTHQ = Funkytown). Daten sport-weit:
//  - 2025/26: ROLLING_RANKINGS / RR_WEEKS (handkuratiert + BBM-Exporte)
//  - 2026/27: ROLLING_RANKINGS_2026 / RR2026_MONTHS / RR2026_WEEKS
//    (permanentes Archiv, täglich von scripts/build-rolling-archive.js)
//  Form je Spieler: { name, rankings:{Monat:Rang}, weeklyRanks:{Woche:Rang}, eosRank }
//
//  Bis zu 3 Spieler anklicken → Verlauf als Bump-Chart. Instagram-
//  Screenshot-Export der alten Seite ist (noch) nicht übernommen.
// ============================================================

(function () {
  const N = () => MFHFB.nba;
  const MAX_SEL = 3;
  const RR_MONTHS_2025 = ['Oct', 'Nov', 'Dez', 'Jan', 'Feb', 'März'];
  const MONTH_LABEL = { Oct: 'Okt', Dez: 'Dez', 'März': 'Mär' };
  const defaults = { sort: 'eos', dir: 1, q: '', sel: [], own: 'all' };
  const getState = ctx => ({ ...defaults, ...ctx.store.getJSON('nbarolling', {}) });

  function season(ctx, key) {
    const d = ctx.data;
    if (key === '2026') return { key, label: '2026/27', players: d.ROLLING_RANKINGS_2026 || [], months: d.RR2026_MONTHS || [], weeks: d.RR2026_WEEKS || [], eosTitle: 'Aktueller Rang (neuester Monat)' };
    return { key: '2025', label: '2025/26', players: d.ROLLING_RANKINGS || [], months: RR_MONTHS_2025, weeks: d.RR_WEEKS || [], eosTitle: 'End of Season Rank' };
  }
  const periods = (S, view) => (view === 'weekly' ? S.weeks.map(w => ({ key: String(w), label: 'W' + w })) : S.months.map(m => ({ key: m, label: MONTH_LABEL[m] || m })));
  const rankAt = (p, view, k) => { const v = (view === 'weekly' ? p.weeklyRanks : p.rankings) || {}; return v[k] ?? null; };
  const tier = r => (r == null ? 'none' : r <= 5 ? 't1' : r <= 15 ? 't2' : r <= 30 ? 't3' : r <= 60 ? 't4' : r <= 100 ? 't5' : 't6');

  function rows(ctx, S, view, st) {
    const owner = N().ownerIndex(ctx.data);
    const q = st.q.toLowerCase().trim();
    let list = S.players.map((p, i) => ({ ...p, id: String(i), owner: owner(p.name) }))
      .filter(p => (!q || p.name.toLowerCase().includes(q) || (p.owner && p.owner.name.toLowerCase().includes(q))) && (st.own === 'all' || (st.own === 'free' ? !p.owner : !!p.owner)));
    const dir = st.dir;
    list.sort((a, b) => {
      if (st.sort === 'name') return dir * a.name.localeCompare(b.name);
      const va = st.sort === 'eos' ? a.eosRank : rankAt(a, view, st.sort), vb = st.sort === 'eos' ? b.eosRank : rankAt(b, view, st.sort);
      if (va == null && vb == null) return a.name.localeCompare(b.name);
      if (va == null) return 1; if (vb == null) return -1;
      return dir * (va - vb);
    });
    return list;
  }

  function chart(S, view, sel, width) {
    const P = periods(S, view);
    const chosen = sel.map(id => S.players[+id]).filter(Boolean);
    const rs = chosen.map((p, i) => ({ id: String(sel[i]), name: p.name, ranks: P.map(x => rankAt(p, view, x.key)), tips: P.map(x => { const r = rankAt(p, view, x.key); return r == null ? '' : `${p.name} · ${x.label}: Rang ${r}`; }) }));
    const max = Math.max(10, ...rs.flatMap(r => r.ranks.filter(v => v != null)));
    return MFHFB.charts.bump({ cols: P.map(x => x.label), rows: rs, sel: rs.map(r => r.id), width, maxRank: max, label: 'Rangverlauf' });
  }

  function tbody(ctx, S, view, st) {
    const e = ctx.ui.esc, nba = N(), P = periods(S, view);
    const list = rows(ctx, S, view, st);
    if (!list.length) return `<tr><td colspan="${P.length + 3}">${ctx.ui.empty('Keine Spieler gefunden', 'Suche oder Filter anpassen.', '🔎')}</td></tr>`;
    return list.slice(0, 400).map(p => {
      const k = st.sel.indexOf(p.id);
      return `<tr class="clickable${k > -1 ? ' row-' + MFHFB.charts.SEL[k] : ''}" data-pick="${p.id}">
        <td class="nba-sticky"><span class="strong">${k > -1 ? `<span class="dna-chip ${MFHFB.charts.SEL[k]}"><i></i></span>` : ''}${e(p.name)}</span>${p.owner ? `<small class="muted nba-an-owner">${e(p.owner.name)}</small>` : ''}</td>
        <td class="num"><span class="rr-rk ${tier(p.eosRank)} strong">${p.eosRank ?? '—'}</span></td>
        ${P.map(x => { const r = rankAt(p, view, x.key); return `<td class="num"><span class="rr-rk ${tier(r)}">${r ?? '—'}</span></td>`; }).join('')}
      </tr>`;
    }).join('');
  }

  function render(ctx) {
    const { data, ui, params } = ctx, e = ui.esc, nba = N();
    nba.init(data);
    const S26 = season(ctx, '2026');
    const sk = params[0] === '2025' || params[0] === '2026' ? params[0] : (S26.players.length ? '2026' : '2025');
    const view = params[1] === 'weekly' ? 'weekly' : 'monthly';
    const S = season(ctx, sk);
    const st = getState(ctx);
    st.sel = st.sel.filter(id => S.players[+id]).slice(0, MAX_SEL);
    const tabs = `<div class="seg" role="tablist">${['2026', '2025'].map(k => `<a class="seg-btn${sk === k ? ' active' : ''}" href="${ctx.href('rolling', k, view)}">${season(ctx, k).label}</a>`).join('')}</div>
      <div class="seg" role="tablist">${[['monthly', 'Monatlich'], ['weekly', 'Wöchentlich']].map(([k, l]) => `<a class="seg-btn${view === k ? ' active' : ''}" href="${ctx.href('rolling', sk, k)}">${l}</a>`).join('')}</div>`;
    const head = `<div class="page-head"><h1 class="page-title display">📈 Rolling Rankings</h1>
      <div class="page-sub">9-Cat-Rang je ${view === 'weekly' ? 'Woche' : 'Monat'} · Saison ${S.label} · bis zu ${MAX_SEL} Spieler antippen für den Verlauf</div></div>`;
    if (!S.players.length) return `${head}<div class="controls">${tabs}</div>${ui.empty('Noch keine Daten für ' + S.label, 'Das Archiv füllt sich automatisch, sobald die reguläre Saison läuft (erster abgeschlossener Monat bzw. erste Woche).', '📈')}`;
    const P = periods(S, view);
    const th = (k, l, cls, t) => `<th class="${cls || ''}${st.sort === k ? ' sorted' : ''}"${t ? ` title="${t}"` : ''}><button type="button" class="th-sort" data-sort="${e(k)}">${l}${st.sort === k ? (st.dir === 1 ? ' ▲' : ' ▼') : ''}</button></th>`;
    return `${head}
      <div class="controls">${tabs}
        <div class="seg" role="group">${[['all', 'Alle'], ['free', 'Frei'], ['owned', 'Gerostert']].map(([k, l]) => `<button type="button" class="seg-btn${st.own === k ? ' active' : ''}" data-own="${k}">${l}</button>`).join('')}</div>
        <input type="search" class="search" placeholder="Spieler oder Fantasy-Team …" value="${e(st.q)}" data-q aria-label="Suchen">
        ${st.sel.length ? '<button type="button" class="seg-btn mp-btn" data-clear>✕ Auswahl leeren</button>' : ''}</div>
      ${st.sel.length ? `<div class="card bump-card"><div class="bump-wrap" data-bump>${chart(S, view, st.sel, 900)}</div><div class="bump-tip" hidden></div></div>` : ''}
      <div class="table-wrap"><table class="table compact nba-rr"><thead><tr>${th('name', 'Spieler', 'nba-sticky')}${th('eos', sk === '2026' ? 'Aktuell' : 'EOS', 'num', S.eosTitle)}${P.map(x => th(x.key, x.label, 'num')).join('')}</tr></thead>
        <tbody data-body>${tbody(ctx, S, view, st)}</tbody></table></div>`;
  }

  function mount(root, ctx) {
    const save = (patch, full) => {
      ctx.store.setJSON('nbarolling', { ...getState(ctx), ...patch });
      if (full !== false) return ctx.refresh();
    };
    root.querySelectorAll('[data-sort]').forEach(b => b.addEventListener('click', () => {
      const st = getState(ctx), k = b.dataset.sort;
      save(st.sort === k ? { dir: -st.dir } : { sort: k, dir: 1 });
    }));
    root.querySelectorAll('[data-own]').forEach(b => b.addEventListener('click', () => save({ own: b.dataset.own })));
    const q = root.querySelector('[data-q]');
    if (q) q.addEventListener('input', () => {
      save({ q: q.value }, false);
      const sk = ctx.params[0] === '2025' || ctx.params[0] === '2026' ? ctx.params[0] : ((ctx.data.ROLLING_RANKINGS_2026 || []).length ? '2026' : '2025');
      root.querySelector('[data-body]').innerHTML = tbody(ctx, season(ctx, sk), ctx.params[1] === 'weekly' ? 'weekly' : 'monthly', getState(ctx));
    });
    const clr = root.querySelector('[data-clear]');
    if (clr) clr.addEventListener('click', () => save({ sel: [] }));
    root.querySelector('.nba-rr') && root.querySelector('.nba-rr').addEventListener('click', ev => {
      const tr = ev.target.closest('[data-pick]');
      if (!tr) return;
      const st = getState(ctx), id = tr.dataset.pick;
      let sel = st.sel.filter(x => x !== id);
      if (sel.length === st.sel.length) sel = [...st.sel, id].slice(-MAX_SEL);
      save({ sel });
    });
    const wrap = root.querySelector('[data-bump]');
    if (wrap) {
      const sk = ctx.params[0] === '2025' || ctx.params[0] === '2026' ? ctx.params[0] : ((ctx.data.ROLLING_RANKINGS_2026 || []).length ? '2026' : '2025');
      const S = season(ctx, sk), view = ctx.params[1] === 'weekly' ? 'weekly' : 'monthly', sel = getState(ctx).sel;
      MFHFB.charts.responsive(wrap, w => chart(S, view, sel, w));
      MFHFB.charts.bumpInteract(wrap, root.querySelector('.bump-tip'), id => save({ sel: getState(ctx).sel.filter(x => x !== id) }));
    }
  }

  MFHFB.pages.register({
    id: 'rolling', section: 'players', label: 'Rolling Rankings', icon: '📈', applies: { sport: ['nba'] },
    data: ['teams', '?rosters-live', '?sport:aliases', '?sport:rolling-rankings', '?sport:rolling-rankings-2026-27'],
    title: () => 'Rolling Rankings', render, mount,
  });
})();
