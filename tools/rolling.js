// ============================================================
//  Tool: Rolling Rankings (Punkte-Ligen)
// ============================================================
//  Rang jedes Teams nach jeder Woche als Bump-Chart, umschaltbar:
//    - "Tabelle (W-L)": offizielle Wertung inkl. Median-Spiel, Tiebreak PF
//    - "Punkte kumuliert": Rang nach aufsummierten Punkten
//  Ersetzt "2026 Rolling Rankings" + "Rolling Standings" der alten Seiten.
//
//  Darstellung (bei 12–14 Teams): alle Linien gedämpft, bis zu 3
//  ausgewählte Teams farbig (validierte Vergleichspalette, farbenblind-
//  sicher), Beschriftung direkt an beiden Enden, Tooltip beim Hovern,
//  darunter dieselben Werte als Tabelle.
// ============================================================

(function () {
  const MAX_SEL = 3;
  const SEL_CLASSES = ['sel-1', 'sel-2', 'sel-3'];

  function ranksByWeek(ctx, mode) {
    const { data, ui } = ctx;
    const { season, weeks } = ui.seasonWeeks(data.WEEKLY_SCORES);
    const byTeam = {};
    weeks.forEach(w => {
      let list = ui.standings(data.WEEKLY_SCORES, season, w);
      if (mode === 'points') list = list.slice().sort((a, b) => b.pf - a.pf);
      list.forEach((r, i) => { (byTeam[r.teamId] = byTeam[r.teamId] || {})[w] = { ...r, rank: i + 1 }; });
    });
    return { season, weeks, byTeam };
  }

  const settings = ctx => ({ mode: 'standings', sel: [], ...ctx.store.getJSON('rolling', {}) });

  // ---------- Bump-Chart als SVG, in echten Pixeln (Breite = Container) ----------
  function chartSvg(ctx, model, sel, width) {
    const { ui } = ctx;
    const e = ui.esc;
    const team = ui.teamIndex(ctx.data.LEAGUE_TEAMS);
    const teams = (ctx.data.LEAGUE_TEAMS || []).map(t => t.id).filter(id => model.byTeam[id]);
    const n = teams.length, W = model.weeks.length;
    // Schmal (Handy): links nur Ränge, Namen nur rechts. Breit: Namen an beiden Enden.
    const narrow = width < 640;
    const rowH = narrow ? 28 : 30;
    const padL = narrow ? 34 : 232, padR = narrow ? 150 : 232, top = 30, bottom = 8;
    const height = top + n * rowH + bottom;
    const innerW = Math.max(40, width - padL - padR);
    const x = i => (W === 1 ? padL + innerW / 2 : padL + (i * innerW) / (W - 1));
    const y = r => top + (r - 1) * rowH + rowH / 2;
    const maxLen = narrow ? 13 : 21;
    const short = name => (name.length > maxLen ? name.slice(0, maxLen - 1).trimEnd() + '…' : name);
    const selIdx = id => sel.indexOf(id);

    const path = id => {
      const pts = model.weeks.map((w, i) => (model.byTeam[id][w] ? [x(i), y(model.byTeam[id][w].rank)] : null)).filter(Boolean);
      if (!pts.length) return '';
      let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
      for (let i = 1; i < pts.length; i++) {
        const [x0, y0] = pts[i - 1], [x1, y1] = pts[i], mx = (x0 + x1) / 2;
        d += ` C${mx.toFixed(1)},${y0.toFixed(1)} ${mx.toFixed(1)},${y1.toFixed(1)} ${x1.toFixed(1)},${y1.toFixed(1)}`;
      }
      return d;
    };

    const first = model.weeks[0], last = model.weeks[W - 1];
    const ordered = teams.slice().sort((a, b) => (selIdx(a) > -1) - (selIdx(b) > -1)); // Ausgewählte zuletzt = oben
    const recStr = c => `${c.wins}-${c.losses}${c.ties ? '-' + c.ties : ''}`;

    const lines = ordered.map(id => {
      const k = selIdx(id);
      const cls = k > -1 ? `bump-line ${SEL_CLASSES[k]}` : 'bump-line';
      const pts = model.weeks.map((w, i) => {
        const c = model.byTeam[id][w];
        if (!c) return '';
        const tip = `${team(id).name} · W${w}: Platz ${c.rank} · ${recStr(c)} · ${ui.num(c.pf)} PF`;
        return `<circle class="bump-pt" cx="${x(i).toFixed(1)}" cy="${y(c.rank).toFixed(1)}" r="${k > -1 ? 5 : 3.5}"/>
          <circle class="bump-hit" cx="${x(i).toFixed(1)}" cy="${y(c.rank).toFixed(1)}" r="12" data-team="${e(id)}" data-tip="${e(tip)}"/>`;
      }).join('');
      return `<g class="${cls}" data-team="${e(id)}"><path d="${path(id)}"/>${pts}</g>`;
    }).join('');

    const label = (id, w, side) => {
      const c = model.byTeam[id][w];
      if (!c) return '';
      const t = team(id), k = selIdx(id);
      const tx = side === 'l' ? padL - 14 : x(W - 1) + 14;
      const dot = k > -1 ? `<tspan class="bump-dot ${SEL_CLASSES[k]}">● </tspan>` : '';
      if (side === 'l' && narrow) {
        return `<text class="bump-label${k > -1 ? ' on' : ''}" x="${tx}" y="${y(c.rank) + 4}" text-anchor="end" data-team="${e(id)}">${c.rank}</text>`;
      }
      return `<text class="bump-label${k > -1 ? ' on' : ''}" x="${tx}" y="${y(c.rank) + 4}" text-anchor="${side === 'l' ? 'end' : 'start'}" data-team="${e(id)}">${side === 'l' ? `${c.rank}. ` : dot}${e(t.emoji || '')} ${e(short(t.name))}${side === 'l' ? (k > -1 ? ` <tspan class="bump-dot ${SEL_CLASSES[k]}">●</tspan>` : '') : ''}</text>`;
    };

    const grid = model.weeks.map((w, i) => `<line class="bump-grid" x1="${x(i)}" x2="${x(i)}" y1="${top - 6}" y2="${height - bottom}"/>
      <text class="bump-week" x="${x(i)}" y="${top - 12}" text-anchor="middle">W${w}</text>`).join('');

    return `<svg class="bump" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img"
      aria-label="Rangverlauf aller Teams über ${W} Woche${W === 1 ? '' : 'n'}">
      ${grid}${lines}
      ${teams.map(id => label(id, first, 'l')).join('')}
      ${teams.map(id => label(id, last, 'r')).join('')}
    </svg>`;
  }

  function render(ctx) {
    const { data, ui } = ctx;
    const e = ui.esc;
    const set = settings(ctx);
    const model = ranksByWeek(ctx, set.mode);
    if (!model.weeks.length) return ui.empty('Noch keine Saisonwerte', 'Die Rolling Rankings füllen sich automatisch, sobald die ersten Wochen gespielt sind.', '📈');

    const team = ui.teamIndex(data.LEAGUE_TEAMS);
    const teams = data.LEAGUE_TEAMS || [];
    const sel = set.sel.filter(id => model.byTeam[id]).slice(0, MAX_SEL);
    const lastW = model.weeks[model.weeks.length - 1];
    const prevW = model.weeks[model.weeks.length - 2];
    const rows = teams.filter(t => model.byTeam[t.id]).sort((a, b) => model.byTeam[a.id][lastW].rank - model.byTeam[b.id][lastW].rank);

    const seg = [['standings', 'Tabelle (W-L)'], ['points', 'Punkte kumuliert']].map(([v, l]) =>
      `<button type="button" class="seg-btn${set.mode === v ? ' active' : ''}" data-mode="${v}" aria-pressed="${set.mode === v}">${l}</button>`).join('');

    return `
      <div class="page-head">
        <h1 class="page-title display">📊 Rolling Rankings</h1>
        <div class="page-sub">${set.mode === 'standings' ? 'Tabellenplatz nach jeder Woche (Siege, Tiebreak: Punkte)' : 'Rang nach kumulierten Punkten nach jeder Woche'} · Saison ${e(model.season)}</div>
      </div>
      <div class="controls"><div class="seg" role="group">${seg}</div></div>
      <div class="pick-row" aria-label="Teams hervorheben (bis zu ${MAX_SEL})">
        ${teams.map(t => { const k = sel.indexOf(t.id); return `<button type="button" class="pick${k > -1 ? ' on ' + SEL_CLASSES[k] : ''}" data-pick="${e(t.id)}" aria-pressed="${k > -1}" title="${e(t.name)}">${e(t.emoji || '🏈')}<span>${e(t.name)}</span></button>`; }).join('')}
        ${sel.length ? '<button type="button" class="pick clear" data-clear>✕ Auswahl leeren</button>' : ''}
      </div>
      <div class="card bump-card">
        <div class="bump-wrap" data-bump>${chartSvg(ctx, model, sel, 900)}</div>
        <div class="bump-tip" hidden></div>
        <div class="bump-hint">${sel.length ? '' : 'Tipp: bis zu drei Teams oben antippen, um ihren Verlauf hervorzuheben. '}Hovern zeigt Details.</div>
      </div>
      <h2 class="group-title">Als Tabelle</h2>
      <div class="table-wrap">
        <table class="table compact">
          <thead><tr><th>Team</th>${model.weeks.map(w => `<th class="num">W${w}</th>`).join('')}${prevW ? '<th class="num">Trend</th>' : ''}</tr></thead>
          <tbody>${rows.map(t => {
            const cur = model.byTeam[t.id][lastW].rank, prev = prevW && model.byTeam[t.id][prevW] ? model.byTeam[t.id][prevW].rank : null;
            const mv = prev ? prev - cur : 0;
            const k = sel.indexOf(t.id);
            return `<tr${k > -1 ? ` class="row-${SEL_CLASSES[k]}"` : ''}>
              <td><span class="team-cell"><span class="team-emoji">${e(t.emoji || '')}</span><span class="team-name">${e(t.name)}</span></span></td>
              ${model.weeks.map(w => `<td class="num${w === lastW ? ' strong' : ''}">${model.byTeam[t.id][w] ? model.byTeam[t.id][w].rank : '–'}</td>`).join('')}
              ${prevW ? `<td class="num ${mv > 0 ? 'up' : mv < 0 ? 'down' : 'muted'}">${mv > 0 ? '▲ ' + mv : mv < 0 ? '▼ ' + -mv : '–'}</td>` : ''}
            </tr>`;
          }).join('')}</tbody>
        </table>
      </div>`;
  }

  MFHFB.pages.register({
    id: 'rolling',
    section: 'standings',
    label: 'Rolling Rankings',
    icon: '📊',
    applies: { scoring: ['points'] },
    data: ['teams', 'weekly-scores'],
    render,
    mount(root, ctx) {
      const set = settings(ctx);
      const save = patch => { ctx.store.setJSON('rolling', { ...settings(ctx), ...patch }); ctx.refresh(); };
      root.querySelectorAll('[data-mode]').forEach(b => b.addEventListener('click', () => save({ mode: b.dataset.mode })));
      root.querySelectorAll('[data-pick]').forEach(b => b.addEventListener('click', () => {
        const id = b.dataset.pick;
        let sel = set.sel.filter(x => x !== id);
        if (sel.length === set.sel.length) sel = [...set.sel, id].slice(-MAX_SEL); // neu dazu, älteste fliegt raus
        save({ sel });
      }));
      const clr = root.querySelector('[data-clear]');
      if (clr) clr.addEventListener('click', () => save({ sel: [] }));

      // Chart in echter Containerbreite neu zeichnen (lesbare Schrift auch mobil)
      const wrap = root.querySelector('[data-bump]');
      const tip = root.querySelector('.bump-tip');
      if (!wrap) return;
      const model = ranksByWeek(ctx, set.mode);
      const sel = set.sel.filter(id => model.byTeam[id]).slice(0, MAX_SEL);
      const draw = () => { if (wrap.isConnected) wrap.innerHTML = chartSvg(ctx, model, sel, Math.max(320, wrap.clientWidth)); };
      draw();
      let t;
      const onResize = () => { if (!wrap.isConnected) { window.removeEventListener('resize', onResize); return; } clearTimeout(t); t = setTimeout(draw, 120); };
      window.addEventListener('resize', onResize);

      // Hover: Team hervorheben + Tooltip; Klick: Team (ab)wählen
      wrap.addEventListener('mouseover', ev => {
        const hit = ev.target.closest('[data-team]');
        const svg = wrap.querySelector('svg');
        if (!svg) return;
        svg.classList.toggle('hovering', !!hit);
        svg.querySelectorAll('.bump-line').forEach(g => g.classList.toggle('hot', !!hit && g.dataset.team === hit.dataset.team));
        if (hit && hit.dataset.tip) {
          tip.textContent = hit.dataset.tip;
          const r = wrap.getBoundingClientRect(), p = hit.getBoundingClientRect();
          tip.style.left = Math.min(r.width - 10, Math.max(10, p.left - r.left + p.width / 2)) + 'px';
          tip.style.top = (p.top - r.top - 8) + 'px';
          tip.hidden = false;
        } else tip.hidden = true;
      });
      wrap.addEventListener('mouseleave', () => {
        tip.hidden = true;
        const svg = wrap.querySelector('svg');
        if (svg) { svg.classList.remove('hovering'); svg.querySelectorAll('.hot').forEach(g => g.classList.remove('hot')); }
      });
      wrap.addEventListener('click', ev => {
        const hit = ev.target.closest('[data-team]');
        if (!hit) return;
        const btn = root.querySelector(`[data-pick="${CSS.escape(hit.dataset.team)}"]`);
        if (btn) btn.click();
      });
    },
  });
})();
