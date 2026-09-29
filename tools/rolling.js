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

  // ---------- Bump-Chart (core/charts.js) ----------
  function chartSvg(ctx, model, sel, width) {
    const { ui } = ctx;
    const team = ui.teamIndex(ctx.data.LEAGUE_TEAMS);
    const recStr = c => `${c.wins}-${c.losses}${c.ties ? '-' + c.ties : ''}`;
    const rows = (ctx.data.LEAGUE_TEAMS || []).map(t => t.id).filter(id => model.byTeam[id]).map(id => ({
      id, name: team(id).name, emoji: team(id).emoji,
      ranks: model.weeks.map(w => (model.byTeam[id][w] ? model.byTeam[id][w].rank : null)),
      tips: model.weeks.map(w => { const c = model.byTeam[id][w]; return c ? `${team(id).name} · W${w}: Platz ${c.rank} · ${recStr(c)} · ${ui.num(c.pf)} PF` : ''; }),
    }));
    return MFHFB.charts.bump({ cols: model.weeks.map(w => 'W' + w), rows, sel, width, maxRank: rows.length,
      label: `Rangverlauf aller Teams über ${model.weeks.length} Woche${model.weeks.length === 1 ? '' : 'n'}` });
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
      if (!wrap) return;
      const model = ranksByWeek(ctx, set.mode);
      const sel = set.sel.filter(id => model.byTeam[id]).slice(0, MAX_SEL);
      MFHFB.charts.responsive(wrap, w => chartSvg(ctx, model, sel, w));
      // Hover: Team hervorheben + Tooltip; Klick: Team (ab)wählen
      MFHFB.charts.bumpInteract(wrap, root.querySelector('.bump-tip'), id => {
        const btn = root.querySelector(`[data-pick="${CSS.escape(id)}"]`);
        if (btn) btn.click();
      });
    },
  });
})();
