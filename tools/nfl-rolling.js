// ============================================================
//  Tool: Rolling Rankings (Punkte-Ligen)
// ============================================================
//  Rang jedes Teams nach jeder Woche als Bump-Chart, umschaltbar:
//    - "Tabelle (W-L)": offizielle Wertung inkl. Median-Spiel, Tiebreak PF
//    - "Punkte kumuliert": Rang nach aufsummierten Punkten
//    - "Punkte der Woche" (25.11.2026): Rang nur nach den Punkten dieser
//      einen Woche; Tabelle darunter nach Ø-Wochenrang sortiert
//    - "Rolling Ø 3" (25.11.2026, Standard): Rang nach dem Schnitt der
//      Punkte der letzten 3 Wochen (Formkurve ohne Wochen-Rauschen)
//  Spaß-Ebene: 🚀 mit Kondensstreifen für große Sprünge nach oben,
//  🪂 für Abstürze, 🔥-Spur + Banner für die heißeste aktuelle Kletter-Serie
//  (max. 6 Wochen). Alles generisch aus den Daten, keine Teamnamen hart codiert.
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
    const tb = (ctx.league.playoffs || {}).tiebreak;
    const byTeam = {};
    if (mode === 'week' || mode === 'roll3') {
      const ptsOf = {};
      weeks.forEach(w => (data.WEEKLY_SCORES[season][w] || []).forEach(r => { (ptsOf[r.teamId] = ptsOf[r.teamId] || {})[w] = r.points || 0; }));
      weeks.forEach((w, wi) => {
        const win = mode === 'roll3' ? weeks.slice(Math.max(0, wi - 2), wi + 1) : [w];
        const list = (data.WEEKLY_SCORES[season][w] || []).map(r => {
          const v = win.map(x => ptsOf[r.teamId][x]).filter(x => x != null);
          return { teamId: r.teamId, pts: v.reduce((a, b) => a + b, 0) / (v.length || 1), wk: r.points || 0, from: win[0] };
        }).sort((a, b) => b.pts - a.pts || b.wk - a.wk);
        list.forEach((r, i) => { (byTeam[r.teamId] = byTeam[r.teamId] || {})[w] = { ...r, rank: i + 1 }; });
      });
      return { season, weeks, byTeam };
    }
    weeks.forEach(w => {
      let list = ui.standings(data.WEEKLY_SCORES, season, w, tb);
      if (mode === 'points') list = list.slice().sort((a, b) => b.pf - a.pf);
      list.forEach((r, i) => { (byTeam[r.teamId] = byTeam[r.teamId] || {})[w] = { ...r, rank: i + 1 }; });
    });
    return { season, weeks, byTeam };
  }

  const settings = ctx => ({ mode: 'roll3', sel: [], ...ctx.store.getJSON('rolling', {}) });

  // ---------- Sprünge & heißer Lauf ----------
  //  Pro Woche höchstens eine 🚀 (größter Sprung nach oben, ab Schwelle T)
  //  und 🪂 nur für die 3 tiefsten Abstürze der Saison + den der letzten
  //  Woche. Der größte Kletterer der letzten Woche bekommt immer eine
  //  Rakete (ab +2), damit die aktuelle Form sichtbar ist. T ist bei
  //  "Punkte der Woche" höher, weil Wochenränge stark schwanken.
  function jumps(ctx, model, mode) {
    const team = ctx.ui.teamIndex(ctx.data.LEAGUE_TEAMS);
    const ids = Object.keys(model.byTeam);
    const n = ids.length, W = model.weeks.length;
    const T = mode === 'week' ? Math.max(6, Math.round(n * 0.45)) : 3;
    const rk = (id, i) => (model.byTeam[id][model.weeks[i]] || {}).rank;
    const fx = [], drops = [];
    const nm = id => team(id).name;
    // Heißester Lauf: aktuelle Serie ohne Rückschritt (bis zu 6 Wochen
    // zurück, die letzte Woche muss ein Plus sein). Wertung: Gesamt-Plus
    // der Serie, bei Gleichstand die längere Serie, dann der bessere Platz.
    let hot = null;
    ids.forEach(id => {
      const b = rk(id, W - 1), p = W > 1 ? rk(id, W - 2) : null;
      if (!b || !p || p <= b) return;
      let s0 = W - 2;
      while (s0 > 0 && W - 1 - s0 < 6 && rk(id, s0 - 1) && rk(id, s0 - 1) >= rk(id, s0)) s0--;
      while (s0 < W - 2 && rk(id, s0 + 1) === rk(id, s0)) s0++; // flache Wochen am Anfang zählen nicht
      const a = rk(id, s0), g = a - b, len = W - 1 - s0;
      if (g < 2) return;
      if (!hot || g > hot.gain || (g === hot.gain && (len > hot.weeks || (len === hot.weeks && b < hot.to)))) hot = { id, gain: g, from: a, to: b, weeks: len, since: model.weeks[s0] };
    });
    for (let i = 1; i < W; i++) {
      const moves = ids.filter(id => rk(id, i) && rk(id, i - 1)).map(id => ({ id, d: rk(id, i - 1) - rk(id, i) }));
      if (!moves.length) continue;
      const up = moves.reduce((a, b) => (b.d > a.d ? b : a));
      const last = i === W - 1;
      // letzte Woche: alle mit dem größten Plus (Gleichstand → mehrere Raketen)
      // Das Team mit dem heißesten Lauf bekommt seine (große) Rakete über fx 'hot'.
      let ups = up.d >= T ? [up] : [];
      if (last && up.d >= 2) {
        const tied = moves.filter(m => m.d === up.d).sort((x, y) => rk(x.id, i) - rk(y.id, i));
        const hotTied = hot && tied.some(m => m.id === hot.id);
        ups = tied.filter(m => !hot || m.id !== hot.id).slice(0, hotTied ? 1 : 2);
      }
      if (last && hot) ups = ups.filter(m => m.id !== hot.id);
      ups.forEach(m => fx.push({ id: m.id, kind: 'rocket', from: i - 1, i, badge: '+' + m.d,
        tip: `🚀 ${nm(m.id)} · W${model.weeks[i]}: +${m.d} Plätze (${rk(m.id, i - 1)}. → ${rk(m.id, i)}.)` }));
      const dn = moves.reduce((a, b) => (b.d < a.d ? b : a));
      if (-dn.d >= T) drops.push({ ...dn, i, last });
    }
    drops.sort((a, b) => a.d - b.d);
    drops.filter((x, k) => k < 3 || x.last).forEach(x => fx.push({ id: x.id, kind: 'chute', from: x.i - 1, i: x.i, badge: '−' + -x.d,
      tip: `🪂 ${nm(x.id)} · W${model.weeks[x.i]}: −${-x.d} Plätze (${rk(x.id, x.i - 1)}. → ${rk(x.id, x.i)}.)` }));

    if (hot) {
      fx.push({ id: hot.id, kind: 'hot', from: W - 1 - hot.weeks, i: W - 1, badge: '+' + hot.gain,
        tip: `🔥 ${nm(hot.id)}: +${hot.gain} Plätze in ${hot.weeks} Woche${hot.weeks === 1 ? '' : 'n'} (${hot.from}. → ${hot.to}.)` });
    }
    return { fx, hot };
  }

  // ---------- Bump-Chart (core/charts.js) ----------
  function chartSvg(ctx, model, sel, width, fx) {
    const { ui } = ctx;
    const team = ui.teamIndex(ctx.data.LEAGUE_TEAMS);
    const recStr = c => `${c.wins}-${c.losses}${c.ties ? '-' + c.ties : ''}`;
    const rows = (ctx.data.LEAGUE_TEAMS || []).map(t => t.id).filter(id => model.byTeam[id]).map(id => ({
      id, name: team(id).name, emoji: team(id).emoji,
      ranks: model.weeks.map(w => (model.byTeam[id][w] ? model.byTeam[id][w].rank : null)),
      tips: model.weeks.map(w => {
        const c = model.byTeam[id][w];
        if (!c) return '';
        if (c.from != null && c.from !== w) return `${team(id).name} · W${w}: Platz ${c.rank} · Ø ${ui.num(c.pts, 1)} Pkt (W${c.from}–W${w}) · diese Woche ${ui.num(c.wk)}`;
        if (c.from != null) return `${team(id).name} · W${w}: Platz ${c.rank} · Ø ${ui.num(c.pts, 1)} Pkt (erst ${w === c.from ? 1 : 2} Woche)`;
        return c.pts != null ? `${team(id).name} · W${w}: Platz ${c.rank} der Woche · ${ui.num(c.pts)} Pkt` : `${team(id).name} · W${w}: Platz ${c.rank} · ${recStr(c)} · ${ui.num(c.pf)} PF`;
      }),
    }));
    return MFHFB.charts.bump({ cols: model.weeks.map(w => 'W' + w), rows, sel, width, maxRank: rows.length, fx: fx || [],
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
    const weekMode = set.mode === 'week';
    const avg = id => { const r = model.weeks.map(w => model.byTeam[id][w]).filter(Boolean).map(c => c.rank); return r.reduce((a, b) => a + b, 0) / (r.length || 1); };
    const rows = teams.filter(t => model.byTeam[t.id]).sort((a, b) => weekMode
      ? avg(a.id) - avg(b.id)
      : (model.byTeam[a.id][lastW] || {}).rank - (model.byTeam[b.id][lastW] || {}).rank);
    const jx = jumps(ctx, model, set.mode);
    const hot = jx.hot;
    const sub = { roll3: 'Rang nach dem Punkteschnitt der letzten 3 Wochen (Formkurve) – nach jeder Woche', standings: 'Tabellenplatz nach jeder Woche (Siege, Tiebreak: Punkte)', points: 'Rang nach kumulierten Punkten nach jeder Woche', week: 'Rang nach den Punkten der jeweiligen Woche · Tabelle nach Ø-Wochenrang sortiert' };

    const seg = [['roll3', 'Rolling Ø 3 Wochen'], ['week', 'Punkte der Woche'], ['points', 'Punkte kumuliert'], ['standings', 'Tabelle (W-L)']].map(([v, l]) =>
      `<button type="button" class="seg-btn${set.mode === v ? ' active' : ''}" data-mode="${v}" aria-pressed="${set.mode === v}">${l}</button>`).join('');

    return `
      <div class="page-head">
        <h1 class="page-title display">📊 Rolling Rankings</h1>
        <div class="page-sub"><span class="explain">${sub[set.mode] || sub.standings}</span> · Saison ${e(model.season)}</div>
      </div>
      <div class="controls"><div class="seg" role="group">${seg}</div></div>
      <div class="pick-row" aria-label="Teams hervorheben (bis zu ${MAX_SEL})">
        ${teams.map(t => { const k = sel.indexOf(t.id); return `<button type="button" class="pick${k > -1 ? ' on ' + SEL_CLASSES[k] : ''}" data-pick="${e(t.id)}" aria-pressed="${k > -1}" title="${e(t.name)}">${e(t.emoji || '🏈')}<span>${e(t.name)}</span></button>`; }).join('')}
        ${sel.length ? '<button type="button" class="pick clear" data-clear>✕ Auswahl leeren</button>' : ''}
      </div>
      <div class="card bump-card">
        ${hot ? `<button type="button" class="hot-run" data-pick="${e(hot.id)}" title="Team hervorheben">
          <span class="hr-fire" aria-hidden="true">🔥</span>
          <span><b>Heißester Lauf:</b> ${e(team(hot.id).emoji || '')} <b>${e(team(hot.id).name)}</b> klettert ${hot.weeks === 1 ? 'in einer Woche' : `seit W${hot.since} ${hot.weeks} Wochen in Folge`} von Platz ${hot.from} auf ${hot.to}
          <span class="hr-sub">(+${hot.gain})</span></span></button>` : ''}
        <div class="bump-wrap" data-bump>${chartSvg(ctx, model, sel, 900, jx.fx)}</div>
        <div class="bump-tip" hidden></div>
        ${jx.fx.length ? '<div class="fx-legend"><span>🚀 großer Sprung nach oben</span><span>🪂 Absturz</span><span>🔥 Glutspur + XL-🚀 = heißester Lauf</span></div>' : ''}
        <div class="bump-hint explain">${sel.length ? '' : 'Tipp: bis zu drei Teams oben antippen, um ihren Verlauf hervorzuheben. '}Hovern zeigt Details.</div>
      </div>
      <h2 class="group-title">Als Tabelle</h2>
      <div class="table-wrap">
        <table class="table compact">
          <thead><tr><th>Team</th>${model.weeks.map(w => `<th class="num">W${w}</th>`).join('')}${weekMode ? '<th class="num" title="Durchschnittlicher Rang nach Wochenpunkten">Ø Rang</th>' : prevW ? '<th class="num">Trend</th>' : ''}</tr></thead>
          <tbody>${rows.map(t => {
            const k = sel.indexOf(t.id);
            if (weekMode) {
              return `<tr${k > -1 ? ` class="row-${SEL_CLASSES[k]}"` : ''}>
              <td><span class="team-cell"><span class="team-emoji">${e(t.emoji || '')}</span><span class="team-name">${e(t.name)}</span></span></td>
              ${model.weeks.map(w => { const c = model.byTeam[t.id][w]; return `<td class="num${c && c.rank === 1 ? ' strong up' : ''}" title="${c ? e(ui.num(c.pts) + ' Pkt') : ''}">${c ? c.rank : '–'}</td>`; }).join('')}
              <td class="num strong">${ui.num(avg(t.id), 1)}</td>
            </tr>`;
            }
            const cur = model.byTeam[t.id][lastW].rank, prev = prevW && model.byTeam[t.id][prevW] ? model.byTeam[t.id][prevW].rank : null;
            const mv = prev ? prev - cur : 0;
            return `<tr${k > -1 ? ` class="row-${SEL_CLASSES[k]}"` : ''}>
              <td><span class="team-cell"><span class="team-emoji">${e(t.emoji || '')}</span><span class="team-name">${e(t.name)}</span></span></td>
              ${model.weeks.map(w => { const c = model.byTeam[t.id][w]; return `<td class="num${w === lastW ? ' strong' : ''}"${c && c.from != null ? ` title="Ø ${e(ui.num(c.pts, 1))} Pkt"` : ''}>${c ? c.rank : '–'}</td>`; }).join('')}
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
      const fx = jumps(ctx, model, set.mode).fx;
      MFHFB.charts.responsive(wrap, w => chartSvg(ctx, model, sel, w, fx));
      // Hover: Team hervorheben + Tooltip; Klick: Team (ab)wählen
      MFHFB.charts.bumpInteract(wrap, root.querySelector('.bump-tip'), id => {
        const btn = root.querySelector(`[data-pick="${CSS.escape(id)}"]`);
        if (btn) btn.click();
      });
    },
  });
})();
