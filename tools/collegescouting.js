// ============================================================
//  Tool: College Scouting (NFL) — Prospect-Comps
// ============================================================
//  #/<liga>/collegescouting                 → letzte Auswahl
//  #/<liga>/collegescouting/<pos>/<id>      → Prospect direkt (teilbar)
//
//  Neu gebaut nach Bear-Witch-Project-HQ/js/college-scouting-card.js.
//  Zwei Vergleiche pro Prospect, STRIKT sprachlich getrennt (siehe
//  claude/college-scouting-concept.md):
//    🎓 College Production Comp — „Produziert wie …“ (reine On-Field-
//       Produktion, sport:college-scouting → COLLEGE_SCOUTING.comps)
//    🏈 NFL Profile Comp — „Profiliert wie …“ (Pre-Draft-Rollenarchetyp,
//       KEINE Erfolgsprognose; sport:nfl-profile-comp → NFL_PROFILE_COMP)
//  NIEMALS „wird so gut wie“ o.ä. — beides sind Ähnlichkeits-, keine
//  Erfolgsvergleiche.
//
//  Datenmenge: college-scouting ≈ 12 MB, nfl-profile-comp ≈ 4 MB. Die Seite
//  wartet nur auf die erste Datei; der NFL Profile Comp wird in mount()
//  nachgeladen. Beides ist sportweit gecacht (einmal für alle NFL-Ligen).
// ============================================================

(function () {
  const POS = ['WR', 'RB', 'TE', 'QB'];
  const WINDOWS = [1, 2, 3, 4];
  const PRIMARY = { WR: 'yds', TE: 'yds', RB: 'rushYds', QB: 'passYds' };
  const PRIMARY_LABEL = { WR: 'Rec-Yds', TE: 'Rec-Yds', RB: 'Rush-Yds', QB: 'Pass-Yds' };
  // Anzeige-Labels für FEATURES (sync-college-scouting.js) und MATCH_FEATURES
  // (build-nfl-profile-comp.js) — rein präsentational.
  const FEATURE_LABELS = {
    recShare: 'Target Share', ydShare: 'Yard Share', tdShare: 'TD Share',
    avgPPA: 'PPA/Play', usageOverall: 'Usage',
    rushCarShare: 'Carry Share', recYdShare: 'Rec-Yard Share',
    avgPpaRush: 'Rush-PPA', avgPpaPass: 'Pass-PPA', usageRush: 'Rush-Usage',
    usagePass: 'Pass-Usage', compPct: 'Comp %',
    heightIn: 'Größe', weightLb: 'Gewicht',
  };
  // Kurzstats unter dem Namen (nur Felder, die im Datensatz vorhanden sind)
  const STAT_LINE = {
    WR: [['rec', 'Rec'], ['yds', 'Yds'], ['td', 'TD']],
    TE: [['rec', 'Rec'], ['yds', 'Yds'], ['td', 'TD']],
    RB: [['rushCar', 'Car'], ['rushYds', 'Yds'], ['rushTd', 'TD'], ['recYds', 'Rec-Yds']],
    QB: [['passAtt', 'Att'], ['passYds', 'Pass-Yds'], ['passTd', 'TD'], ['compPct', 'Comp %'], ['rushYds', 'Rush-Yds']],
  };

  const normKey = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/\b(jr|sr|ii|iii|iv|v)\b\.?/g, '').replace(/[^a-z0-9]/g, '');
  const defaults = { pos: 'WR', win: 2, q: '', sel: null };
  const getState = ctx => ({ ...defaults, ...ctx.store.getJSON('cs', {}) });
  // Welcher Comp gerade im Radar liegt — flüchtig, pro Prospect
  const picked = { prod: null, nfl: null, for: null };

  const winLabel = (n, cur) => (n === 1 ? `Nur ${cur}` : n >= 4 ? 'Letzte 4 Jahre' : `${cur - n + 1}–${cur}`);
  const inWindow = (p, st, cur) => p.year > cur - st.win;
  const heightFmt = inch => (inch ? `${Math.floor(inch / 12)}'${inch % 12}"` : null);

  function resolve(ctx) {
    const C = ctx.data.COLLEGE_SCOUTING;
    const st = getState(ctx);
    const [pp, id] = ctx.params;
    if (POS.includes(pp)) st.pos = pp;
    if (id) st.sel = id;
    if (!WINDOWS.includes(st.win)) st.win = 2;
    const cur = C.meta.currentSeason;
    const all = (C.recent[st.pos] || []).filter(p => inWindow(p, st, cur));
    if (!st.sel || !all.some(p => p.id === st.sel)) {
      // Direkt verlinkter Prospect außerhalb des Fensters → Fenster öffnen statt ignorieren
      const linked = id && (C.recent[st.pos] || []).find(p => p.id === id);
      if (linked) st.win = Math.min(4, Math.max(st.win, cur - linked.year + 1));
      else st.sel = (all.slice().sort((a, b) => (b[PRIMARY[st.pos]] || 0) - (a[PRIMARY[st.pos]] || 0))[0] || {}).id || null;
    }
    return st;
  }

  // ---------- Radar (SVG): Prospect (sel-1) vs. gewählter Comp (sel-2) ----------
  function radar(axes, me, comp, meName, compName) {
    const e = MFHFB.ui.esc;
    const n = axes.length, size = 300, cx = size / 2, cy = size / 2, R = 112;
    const ang = i => -Math.PI / 2 + (i * 2 * Math.PI) / n;
    const pt = (i, f) => [cx + Math.cos(ang(i)) * R * f, cy + Math.sin(ang(i)) * R * f];
    const clamp = v => Math.max(0, Math.min(100, v == null ? 0 : v));
    const rings = [0.25, 0.5, 0.75, 1].map(f => `<polygon class="rd-ring" points="${axes.map((_, i) => pt(i, f).map(v => v.toFixed(1)).join(',')).join(' ')}"/>`).join('');
    const lines = axes.map((_, i) => { const [x, y] = pt(i, 1); return `<line class="rd-axis" x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}"/>`; }).join('');
    const labels = axes.map((ax, i) => {
      const [x, y] = pt(i, 1.2); const co = Math.cos(ang(i));
      const anchor = Math.abs(co) < 0.2 ? 'middle' : co > 0 ? 'start' : 'end';
      let parts = [ax.label];
      if (Math.abs(co) > 0.5 && ax.label.length > 10 && /[ -]/.test(ax.label)) {
        const cut = [...ax.label.matchAll(/[ -]/g)].map(m => m.index).sort((p, q) => Math.abs(p - ax.label.length / 2) - Math.abs(q - ax.label.length / 2))[0];
        parts = [ax.label.slice(0, cut + (ax.label[cut] === '-' ? 1 : 0)), ax.label.slice(cut + 1)];
      }
      const y0 = y + 4 - (parts.length - 1) * 7;
      return `<text class="rd-label" x="${x.toFixed(1)}" y="${y0.toFixed(1)}" text-anchor="${anchor}">${parts.map((l, k) => `<tspan x="${x.toFixed(1)}" dy="${k ? 14 : 0}">${e(l)}</tspan>`).join('')}</text>`;
    }).join('');
    const series = (vals, cls, name) => {
      if (!vals) return '';
      const pts = axes.map((ax, i) => pt(i, clamp(vals[ax.key]) / 100));
      const dots = axes.map((ax, i) => vals[ax.key] == null ? '' :
        `<circle class="rd-pt" cx="${pts[i][0].toFixed(1)}" cy="${pts[i][1].toFixed(1)}" r="4"><title>${e(name)} · ${e(ax.label)}: ${Math.round(vals[ax.key])}. Perzentil</title></circle>`).join('');
      return `<g class="rd-series ${cls}${comp ? ' multi' : ''}"><polygon points="${pts.map(p => p.map(q => q.toFixed(1)).join(',')).join(' ')}"/>${dots}</g>`;
    };
    const table = `<table class="table compact cs-rtable"><thead><tr><th>Perzentil</th><th class="num"><i class="cs-sw sel-1"></i>Prospect</th><th class="num"><i class="cs-sw sel-2"></i>Comp</th></tr></thead><tbody>
      ${axes.map(ax => `<tr><td>${e(ax.label)}</td><td class="num strong">${me[ax.key] != null ? Math.round(me[ax.key]) : '—'}</td><td class="num">${comp && comp[ax.key] != null ? Math.round(comp[ax.key]) : '—'}</td></tr>`).join('')}
    </tbody></table>`;
    return `<svg class="rd cs-rd" viewBox="-66 -14 ${size + 132} ${size + 28}" role="img" aria-label="Radar: ${e(meName)} vs. ${e(compName || '—')}">${rings}${lines}${series(comp, 'sel-2', compName)}${series(me, 'sel-1', meName)}${labels}</svg>
      <div class="dna-chips"><span class="dna-chip sel-1"><i></i>${e(meName)}</span>${compName ? `<span class="dna-chip sel-2"><i></i>${e(compName)}</span>` : ''}</div>
      ${table}`;
  }

  function compBox(kind, title, sub, comps, feats, axes, me, pickedId, extra, emptyText, foot) {
    const e = MFHFB.ui.esc;
    const compObj = comps.find(c => c.id === pickedId);
    const meVals = feats[me.id];
    return `<div class="card cs-box" data-box="${kind}">
      <div class="card-head"><h2>${title}</h2></div>
      <div class="cs-box-sub">${sub}</div>
      ${meVals && axes.length >= 3
        ? `<div class="cs-radar">${radar(axes, meVals, compObj ? feats[compObj.id] : null, me.name, compObj ? compObj.name : null)}</div>`
        : `<div class="muted cs-pad">Keine Perzentil-Daten für diesen Prospect (zu wenige vollständige Feature-Werte).</div>`}
      ${comps.length ? `<div class="cs-list-head">Comp anklicken → ins Radar</div>${comps.map((m, i) => `<button type="button" class="dna-match cs-match${m.id === pickedId ? ' on' : ''}" data-pick="${kind}|${e(m.id)}" aria-pressed="${m.id === pickedId}">
          <span class="dna-mscore">#${i + 1}</span>
          <span class="dna-nm">${e(m.name)} <small>${e(m.team || '')} · ${e(m.year)}${extra ? ' · ' + extra(m) : ''}</small></span>
          <span class="dna-plus">${m.id === pickedId ? '●' : '＋'}</span></button>`).join('')}`
        : `<div class="muted cs-pad">${emptyText}</div>`}
      ${foot ? `<div class="cs-foot">${foot}</div>` : ''}
    </div>`;
  }

  function prodBox(ctx, st, me) {
    const C = ctx.data.COLLEGE_SCOUTING;
    const comps = (C.comps[st.pos] || {})[me.id] || [];
    if (picked.for !== me.id) { picked.for = me.id; picked.prod = null; picked.nfl = null; }
    if (!picked.prod || !comps.some(c => c.id === picked.prod)) picked.prod = (comps[0] || {}).id || null;
    const axes = ((C.meta.features || {})[st.pos] || []).map(k => ({ key: k, label: FEATURE_LABELS[k] || k }));
    return compBox('prod', '🎓 College Production Comp', '„Produziert wie …“ — nächste Nachbarn nach reinem Produktions-Profil (Mahalanobis-Distanz), unabhängig vom späteren NFL-Erfolg.',
      comps, (C.feats || {})[st.pos] || {}, axes, me, picked.prod, null,
      'Kein vergleichbares Produktionsprofil gefunden (zu wenige vollständige Datensätze im Pool).');
  }

  function nflBox(ctx, st, me, N) {
    const e = MFHFB.ui.esc;
    if (!N) return `<div class="card cs-box" data-box="nfl"><div class="card-head"><h2>🏈 NFL Profile Comp</h2></div><div class="muted cs-pad">Lade …</div></div>`;
    if (N.error) return `<div class="card cs-box" data-box="nfl"><div class="card-head"><h2>🏈 NFL Profile Comp</h2></div><div class="muted cs-pad">${e(N.error)}</div></div>`;
    const comps = (N.comps[st.pos] || {})[me.id] || [];
    const stats = N.stats[st.pos] || {};
    if (!picked.nfl || !comps.some(c => c.id === picked.nfl)) picked.nfl = (comps[0] || {}).id || null;
    const axes = ((N.meta.matchFeatures || {})[st.pos] || []).map(k => ({ key: k, label: FEATURE_LABELS[k] || k }));
    const extra = m => `${m.draftRound != null ? `Rd. ${m.draftRound} Pick ${m.draftPick}` : 'undrafted'} (${e(m.draftYear)}) · RAS ${m.ras != null ? e(m.ras) : '?'}`;
    return compBox('nfl', '🏈 NFL Profile Comp', '„Profiliert wie …“ — Pre-Draft-Rollenarchetyp gegen tatsächlich gedraftete Spieler mit ähnlichem Produktions- + Größen-Profil. <b>Keine Erfolgs- oder Talentprognose.</b>',
      comps, (N.feats || {})[st.pos] || {}, axes, me, picked.nfl, extra,
      'Kein Vergleich möglich (Produktions- oder Größen-Daten für diesen Prospect unvollständig).',
      `Vergleichsbasis: ${stats.matched || 0} historisch gedraftete ${st.pos}s mit vollständigem Profil. RAS = an ras.football angelehnter Athletik-Score (0–10) <b>des Comps</b>, nicht des Prospects — der hat Combine/Draft noch vor sich. Radar-Achsen = Matching-Features (Produktion + Größe/Gewicht), nicht RAS/Draft.`);
  }

  function listHtml(ctx, st) {
    const e = ctx.ui.esc;
    const C = ctx.data.COLLEGE_SCOUTING;
    const cur = C.meta.currentSeason, stat = PRIMARY[st.pos], q = normKey(st.q);
    const list = (C.recent[st.pos] || [])
      .filter(p => inWindow(p, st, cur) && (!q || normKey(p.name).includes(q)))
      .sort((a, b) => (b[stat] || 0) - (a[stat] || 0));
    return list.length ? list.map((p, i) => `<a class="dna-row${p.id === st.sel ? ' active' : ''}" href="${ctx.href('collegescouting', st.pos, p.id)}">
        <span class="dna-idx">${i + 1}</span>
        <span class="dna-nm">${e(p.name)} <small>${e(p.team)} · ${e(p.year)}</small></span>
        <span class="dna-avg">${p[stat] != null ? Math.round(p[stat]).toLocaleString('de-DE') : '—'}</span></a>`).join('')
      : '<div class="muted" style="padding:12px">Keine Treffer.</div>';
  }

  function mainHtml(ctx, st, N) {
    const e = ctx.ui.esc;
    const C = ctx.data.COLLEGE_SCOUTING;
    const me = (C.recent[st.pos] || []).find(p => p.id === st.sel);
    if (!me) return ctx.ui.empty('Kein Prospect gewählt', 'Links einen Prospect auswählen.', '🎓');
    const stat = PRIMARY[st.pos];
    const line = STAT_LINE[st.pos].filter(([k]) => me[k] != null).map(([k, l]) => `<b>${k === 'compPct' ? me[k].toFixed(1).replace('.', ',') : Math.round(me[k]).toLocaleString('de-DE')}</b> ${l}`).join(' · ');
    const body = [heightFmt(me.heightIn), me.weightLb ? me.weightLb + ' lb' : null].filter(Boolean).join(', ');
    return `
      <div class="dna-head">
        <div><h2 class="dna-title display">${e(me.name)}</h2>
          <div class="page-sub">${st.pos} · ${e(me.team)} · Saison ${e(me.year)}${me.conf ? ' · ' + e(me.conf) : ''}${body ? ' · ' + e(body) : ''}</div></div>
        <div class="dna-badge" title="${PRIMARY_LABEL[st.pos]} in der letzten erfassten College-Saison"><b>${me[stat] != null ? Math.round(me[stat]).toLocaleString('de-DE') : '—'}</b><small>${PRIMARY_LABEL[st.pos]}</small></div>
      </div>
      ${line ? `<div class="dna-tags">${line}</div>` : ''}
      <div class="cs-grid">
        <div data-prod>${prodBox(ctx, st, me)}</div>
        <div data-nfl>${nflBox(ctx, st, me, N)}</div>
      </div>`;
  }

  MFHFB.pages.register({
    id: 'collegescouting',
    section: 'players',
    label: 'College Scouting',
    icon: '🎓',
    applies: { sport: ['nfl'] },
    data: ['sport:college-scouting'],
    title: ({ data, params }) => {
      const C = data.COLLEGE_SCOUTING; if (!C || !params[1]) return 'College Scouting';
      const p = (C.recent[params[0]] || []).find(x => x.id === params[1]);
      return p ? `${p.name} · College Scouting` : 'College Scouting';
    },
    render(ctx) {
      const { ui, data } = ctx;
      const e = ui.esc;
      const C = data.COLLEGE_SCOUTING;
      if (!C || !C.recent) return ui.empty('Keine College-Scouting-Daten', 'Die Datei wird von der GitHub Action „College Scouting Sync“ erzeugt.', '🎓');
      const st = resolve(ctx);
      ctx._cs = st;
      const cur = C.meta.currentSeason;
      const all = (C.recent[st.pos] || []).filter(p => inWindow(p, st, cur));
      const years = C.meta.years.filter(y => y > cur - st.win);
      return `
        <div class="page-head">
          <h1 class="page-title display">🎓 College Scouting</h1>
          <div class="page-sub">Aktuelle College-Spieler (keine Draftees/UDFAs) · ${all.length} ${st.pos}-Prospects mit Mindest-Volumen · Jahrgänge ${years.join('/')}</div>
        </div>
        <div class="controls">
          <div class="seg" role="group" aria-label="Position">${POS.map(p => `<a class="seg-btn${p === st.pos ? ' active' : ''}" href="${ctx.href('collegescouting', p)}">${p}</a>`).join('')}</div>
          <div class="seg" role="group" aria-label="Saisons">${WINDOWS.map(n => `<button type="button" class="seg-btn${n === st.win ? ' active' : ''}" data-win="${n}">${winLabel(n, cur)}</button>`).join('')}</div>
        </div>
        <div class="dna-layout">
          <aside class="card dna-side">
            <input type="search" class="search" placeholder="Prospect suchen …" value="${e(st.q)}" data-q aria-label="Prospect suchen">
            <div class="dna-list-head"><span>Prospect</span><span title="${PRIMARY_LABEL[st.pos]} in der letzten erfassten College-Saison">${PRIMARY_LABEL[st.pos]}</span></div>
            <div class="dna-list" data-list>${listHtml(ctx, st)}</div>
          </aside>
          <div class="dna-main" data-main>${mainHtml(ctx, st, null)}</div>
        </div>
        <div class="page-sub" style="margin-top:14px;font-size:12px">Bekannte Grenzen: CFBD erfasst keine Slot/Outside-Alignment- oder Route-Tree-Daten — zwei Receiver mit gleicher Target Share können völlig unterschiedliche NFL-Rollen bekommen. Beide Comps sind Ähnlichkeits-, keine Erfolgs- oder Talentvergleiche. Quellen: CollegeFootballData, nflverse.</div>`;
    },
    mount(root, ctx) {
      const st = ctx._cs || resolve(ctx);
      ctx.store.setJSON('cs', { pos: st.pos, win: st.win, q: st.q, sel: st.sel });
      const C = ctx.data.COLLEGE_SCOUTING;
      if (!C || !C.recent) return;
      const me = (C.recent[st.pos] || []).find(p => p.id === st.sel);
      let N = null;

      root.querySelectorAll('[data-win]').forEach(b => b.addEventListener('click', () => {
        ctx.store.setJSON('cs', { ...getState(ctx), win: +b.dataset.win });
        // Auswahl-ID aus der URL entfernen, sonst würde sie das Fenster wieder aufziehen
        if (ctx.params[1]) location.hash = ctx.href('collegescouting', st.pos); else ctx.refresh();
      }));
      const q = root.querySelector('[data-q]');
      if (q) q.addEventListener('input', () => {
        const s = { ...getState(ctx), q: q.value };
        ctx.store.setJSON('cs', s);
        root.querySelector('[data-list]').innerHTML = listHtml(ctx, { ...st, q: q.value });
      });
      root.addEventListener('click', ev => {
        const b = ev.target.closest('[data-pick]');
        if (!b || !me) return;
        const [kind, id] = b.dataset.pick.split('|');
        picked[kind] = id;
        const host = root.querySelector(kind === 'prod' ? '[data-prod]' : '[data-nfl]');
        if (host) host.innerHTML = kind === 'prod' ? prodBox(ctx, st, me) : nflBox(ctx, st, me, N);
      });
      // Aktiven Prospect in der Liste sichtbar machen
      // (nur die Liste scrollen, nicht die Seite)
      const list = root.querySelector('[data-list]'), act = root.querySelector('.dna-row.active');
      if (list && act) list.scrollTop = Math.max(0, act.offsetTop - list.offsetTop - list.clientHeight / 2);

      if (!me) return;
      MFHFB.data.load(ctx.league, ['sport:nfl-profile-comp'])
        .then(d => { N = d.NFL_PROFILE_COMP || { error: 'Keine NFL-Profile-Comp-Daten.' }; })
        .catch(err => { N = { error: err.message + ' — die Datei erzeugt der „NFL Profile Comp“-Build.' }; })
        .then(() => {
          const host = root.querySelector('[data-nfl]');
          if (host && host.isConnected) host.innerHTML = nflBox(ctx, st, me, N);
        });
    },
  });
})();
