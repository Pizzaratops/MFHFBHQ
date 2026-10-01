// ============================================================
//  Tool (NBA): Tabelle + Liga-Historie + Saison-Archiv
// ============================================================
//  #/<liga>/standings        aktuelle Tabelle, Platzierungsverlauf, Podien
//  #/<liga>/archive/<saison> Endstand + Kader einer Saison (nur Ligen mit
//                            league.seasonArchive, aktuell TTHQ)
//
//  Quellen (vorher je Liga verschieden, jetzt ein Modell):
//  - TTHQ:      data/season-20xx-yy.js (SEASON_20xx_yy.standings, aus den
//               ESPN-Exporten) — ersetzt die hart codierte Chart-Tabelle
//               aus js/standings.js
//  - Funkytown: SEASON_HISTORY (scripts/fetch-espn-standings.js)
//  - laufende Saison: TEAM_RECORDS_LIVE (Kategorien-Bilanz) und, wenn
//    vorhanden, SEASON_MATCHUPS (Matchup-Bilanz je Woche)
// ============================================================

(function () {
  const N = () => MFHFB.nba;
  const SEL_CLASSES = MFHFB.charts.SEL;
  const MAX_SEL = 3;
  const varName = k => 'SEASON_' + k.replace('-', '_');

  function seasons(ctx) {
    const d = ctx.data, L = ctx.league;
    if (L.seasonArchive) {
      return L.seasonArchive.map((k, i) => {
        const S = d[varName(k)];
        if (!S || !S.standings) return null;
        return { key: k, label: k.replace('-', '/'), standings: L.finalPlaces ? mergeFinal(ctx, S.standings, i) : S.standings, rosters: S.rosters || null, final: !!L.finalPlaces };
      }).filter(Boolean);
    }
    return (d.SEASON_HISTORY || []).slice().sort((a, b) => a.espnSeason - b.espnSeason)
      .map(s => ({ key: String(s.espnSeason), label: String(s.label || s.espnSeason).replace('Saison ', ''), standings: s.standings || [], rosters: null }));
  }

  // Endplatzierung (league.finalPlaces, nach Playoffs) + Archiv (Bilanz/Kader
  // der regulären Saison) zusammenführen. Eintrag mit eigener Team-ID →
  // direkt; sonst Vorgänger-Franchise = Archiv-Eintrag ohne Team-ID auf
  // demselben Platz (so sind die Vorgänger im alten Chart zugeordnet).
  function mergeFinal(ctx, arch, idx) {
    const FP = ctx.league.finalPlaces, nba = N();
    const tmap = new Map(nba.leagueTeams(ctx.data, true).map(t => [t.id, t]));
    const used = new Set(), out = [];
    Object.keys(FP).map(Number).forEach(id => {
      const p = FP[id][idx];
      if (p == null) return;
      let src = arch.find(r => r.teamId === id);
      if (!src) src = arch.find(r => r.teamId == null && r.place === p && !used.has(r));
      if (src) used.add(src);
      const t = tmap.get(id);
      out.push({ place: p, teamId: id, name: src ? src.name : (t ? t.name : 'Team ' + id), record: src ? src.record : null, rosterKey: src ? src.rosterKey : null, regPlace: src ? src.place : null });
    });
    arch.filter(r => !used.has(r)).forEach(r => out.push({ ...r, place: null, regPlace: r.place, teamId: null }));
    return out.sort((a, b) => (a.place ?? 99) - (b.place ?? 99));
  }

  const parseRec = r => { const m = /^(\d+)-(\d+)(?:-(\d+))?$/.exec(String(r || '')); return m ? { w: +m[1], l: +m[2], t: +(m[3] || 0) } : null; };
  const pct = r => (r && r.w + r.l + r.t ? (r.w + r.t / 2) / (r.w + r.l + r.t) : null);

  // Matchup-Bilanz der laufenden Saison aus SEASON_MATCHUPS (Funkytown)
  function matchupRecords(ctx) {
    const cur = (ctx.data.SEASON_MATCHUPS || []).find(s => s.current);
    if (!cur || !cur.weeks) return null;
    const out = {};
    Object.values(cur.weeks).forEach(games => (games || []).forEach(g => {
      if (g.playoff) return;
      const tid = cur.teams[g.team] && cur.teams[g.team].teamId;
      if (!tid) return;
      const r = out[tid] = out[tid] || { w: 0, l: 0, t: 0 };
      if (g.res === 'W') r.w++; else if (g.res === 'L') r.l++; else if (g.res === 'T') r.t++;
    }));
    return Object.keys(out).length ? out : null;
  }

  function currentTable(ctx) {
    const nba = N(), e = ctx.ui.esc;
    const mrec = matchupRecords(ctx);
    const rows = nba.leagueTeams(ctx.data).map(t => {
      const cat = parseRec(nba.record(ctx.data, t));
      return { t, cat, mu: mrec ? mrec[t.id] || null : null };
    });
    const played = rows.some(r => r.cat && r.cat.w + r.cat.l + r.cat.t > 0);
    rows.sort((a, b) => (mrec ? (pct(b.mu) ?? -1) - (pct(a.mu) ?? -1) : 0) || (pct(b.cat) ?? -1) - (pct(a.cat) ?? -1) || a.t.name.localeCompare(b.t.name));
    const fmt = r => (r ? `${r.w}-${r.l}${r.t ? '-' + r.t : ''}` : '—');
    return `<h2 class="group-title">Saison 2026/27</h2>
      ${played ? '' : '<p class="muted small">Noch keine Spiele — die Tabelle füllt sich mit dem täglichen ESPN-Sync.</p>'}
      <div class="table-wrap"><table class="table compact"><thead><tr><th class="num">#</th><th>Team</th>${mrec ? '<th class="num">Matchups</th>' : ''}<th class="num">Kategorien</th><th class="num">Quote</th></tr></thead>
      <tbody>${rows.map((r, i) => `<tr><td class="num rank">${played ? i + 1 : '–'}</td>
        <td><a class="nba-tlink mp-tc" style="${nba.tcStyle(r.t)}" href="${ctx.href('teams', r.t.id)}"><span class="nba-tdot"></span>${e(r.t.name)}</a> <small class="muted">${e(r.t.owner || '')}</small></td>
        ${mrec ? `<td class="num strong">${fmt(r.mu)}</td>` : ''}<td class="num${mrec ? '' : ' strong'}">${fmt(r.cat)}</td>
        <td class="num">${pct(r.cat) != null && played ? pct(r.cat).toFixed(3).replace(/^0/, '') : '—'}</td></tr>`).join('')}</tbody></table></div>`;
  }

  function historyModel(ctx) {
    const nba = N();
    const S = seasons(ctx);
    const teams = nba.leagueTeams(ctx.data, true);
    const stats = teams.map(t => {
      const places = S.map(s => { const r = s.standings.find(x => x.teamId === t.id); return r ? r.place : null; });
      const got = places.filter(p => p != null);
      return { t, places, n: got.length, avg: got.length ? got.reduce((a, b) => a + b, 0) / got.length : null, titles: got.filter(p => p === 1).length, podium: got.filter(p => p <= 3).length, best: got.length ? Math.min(...got) : null };
    }).filter(x => x.n);
    return { S, stats, maxRank: Math.max(1, ...S.flatMap(s => s.standings.map(r => r.place || 0))) };
  }

  function chartSvg(model, sel, width) {
    const rows = model.stats.map(x => ({
      id: String(x.t.id), name: x.t.name, ranks: x.places,
      tips: x.places.map((p, i) => (p == null ? '' : `${model.S[i].standings.find(r => r.teamId === x.t.id).name} · ${model.S[i].label}: Platz ${p}`)),
    }));
    return MFHFB.charts.bump({ cols: model.S.map(s => s.label), rows, sel, width, maxRank: model.maxRank, label: `Endplatzierungen über ${model.S.length} Saisons` });
  }

  function render(ctx) {
    const { data, ui, league } = ctx, e = ui.esc, nba = N();
    nba.init(data);
    const model = historyModel(ctx);
    const sel = (ctx.store.getJSON('st-sel', []) || []).filter(id => model.stats.some(x => String(x.t.id) === id)).slice(0, MAX_SEL);
    const head = `<div class="page-head"><h1 class="page-title display">🏆 Tabelle & Historie</h1>
      <div class="page-sub explain">Laufende Saison und Endplatzierungen aller bisherigen Saisons</div></div>`;
    let hist;
    if (!model.S.length) {
      hist = ui.empty('Noch keine Historie geladen', league.seasonArchive ? 'Saison-Archiv fehlt.' : 'In GitHub unter Actions → „Saison-Standings abrufen“ → Run workflow starten (alle Felder leer lassen). Danach erscheint hier der Verlauf.', '📜');
    } else {
      const byAvg = model.stats.slice().sort((a, b) => b.titles - a.titles || a.avg - b.avg);
      const cell = r => (r ? `${e(r.name)}${r.estimated ? '*' : ''}${r.record ? ` <small class="muted">${e(r.record)}</small>` : ''}` : '–');
      hist = `<h2 class="group-title">Platzierungsverlauf</h2>
        <div class="pick-row" aria-label="Teams hervorheben (bis zu ${MAX_SEL})">
          ${model.stats.map(x => { const id = String(x.t.id), k = sel.indexOf(id); return `<button type="button" class="pick${k > -1 ? ' on ' + SEL_CLASSES[k] : ''}" data-pick="${id}" aria-pressed="${k > -1}"><span>${e(x.t.name)}</span></button>`; }).join('')}
          ${sel.length ? '<button type="button" class="pick clear" data-clear>✕ Auswahl leeren</button>' : ''}
        </div>
        <div class="card bump-card"><div class="bump-wrap" data-bump>${chartSvg(model, sel, 900)}</div><div class="bump-tip" hidden></div>
          <div class="bump-hint explain">Nur Teams, die es heute noch gibt · Lücke = in dieser Saison nicht dabei. Hovern zeigt den damaligen Teamnamen.</div></div>
        <h2 class="group-title">🏆 Podium je Saison</h2>
        <div class="table-wrap"><table class="table compact"><thead><tr><th>Saison</th><th>🥇 Champion</th><th>🥈 Zweiter</th><th>🥉 Dritter</th><th class="num">Teams</th></tr></thead>
          <tbody>${model.S.slice().reverse().map(s => { const at = p => s.standings.find(r => r.place === p); return `<tr>
            <td class="strong">${league.seasonArchive ? `<a href="${ctx.href('archive', s.key)}">${e(s.label)}</a>` : e(s.label)}</td>
            <td>${cell(at(1))}</td><td>${cell(at(2))}</td><td>${cell(at(3))}</td><td class="num">${s.standings.filter(r => r.place != null).length || s.standings.length}</td></tr>`; }).join('')}</tbody></table></div>
        <h2 class="group-title">Ewige Tabelle</h2>
        <div class="table-wrap"><table class="table compact"><thead><tr><th>Team</th><th class="num">Saisons</th><th class="num">Titel</th><th class="num">Podium</th><th class="num">Bestes</th><th class="num">Ø Platz</th></tr></thead>
          <tbody>${byAvg.map(x => `<tr><td><a class="nba-tlink mp-tc" style="${nba.tcStyle(x.t)}" href="${ctx.href('teams', x.t.id)}"><span class="nba-tdot"></span>${e(x.t.name)}</a></td>
            <td class="num">${x.n}</td><td class="num strong">${x.titles ? '🏆'.repeat(Math.min(x.titles, 3)) + (x.titles > 3 ? '×' + x.titles : '') : '–'}</td><td class="num">${x.podium}</td><td class="num">${x.best}.</td><td class="num strong">${x.avg.toFixed(1)}</td></tr>`).join('')}</tbody></table></div>
        ${model.S.some(s => s.standings.some(r => r.estimated)) ? '<p class="muted small explain">* Platzierung geschätzt (ESPN lieferte keine offizielle Endplatzierung)</p>' : ''}`;
    }
    return `${head}${currentTable(ctx)}${hist}`;
  }

  function mount(root, ctx) {
    const save = sel => { ctx.store.setJSON('st-sel', sel); ctx.refresh(); };
    const cur = () => ctx.store.getJSON('st-sel', []) || [];
    root.querySelectorAll('[data-pick]').forEach(b => b.addEventListener('click', () => {
      const id = b.dataset.pick, s = cur();
      let sel = s.filter(x => x !== id);
      if (sel.length === s.length) sel = [...s, id].slice(-MAX_SEL);
      save(sel);
    }));
    const clr = root.querySelector('[data-clear]');
    if (clr) clr.addEventListener('click', () => save([]));
    const wrap = root.querySelector('[data-bump]');
    if (!wrap) return;
    const model = historyModel(ctx);
    const sel = cur().slice(0, MAX_SEL);
    MFHFB.charts.responsive(wrap, w => chartSvg(model, sel, w));
    MFHFB.charts.bumpInteract(wrap, root.querySelector('.bump-tip'), id => { const btn = root.querySelector(`[data-pick="${CSS.escape(id)}"]`); if (btn) btn.click(); });
  }

  const archiveFiles = l => (l.seasonArchive || []).map(k => '?season-' + k);

  MFHFB.pages.register({
    id: 'standings', section: 'standings', label: 'Tabelle & Historie', icon: '🏆', applies: { sport: ['nba'] },
    data: l => ['teams', '?rosters-live', '?season-history', '?season-matchups'].concat(archiveFiles(l)),
    title: () => 'Tabelle & Historie', render, mount,
  });

  // ---------- Saison-Archiv (Endstand + Kader) ----------
  function archive(ctx) {
    const { ui, params } = ctx, e = ui.esc, nba = N();
    nba.init(ctx.data);
    const S = seasons(ctx);
    const s = S.find(x => x.key === params[0]) || S[S.length - 1];
    if (!s) return ui.empty('Kein Archiv', 'Für diese Liga ist kein Saison-Archiv hinterlegt.', '📜');
    const tmap = new Map(nba.leagueTeams(ctx.data, true).map(t => [t.id, t]));
    const tabs = `<div class="seg" role="tablist">${S.slice().reverse().map(x => `<a class="seg-btn${x.key === s.key ? ' active' : ''}" href="${ctx.href('archive', x.key)}">${e(x.label)}</a>`).join('')}</div>`;
    const cards = s.standings.slice().sort((a, b) => (a.place ?? 99) - (b.place ?? 99)).map(r => {
      const t = tmap.get(r.teamId);
      const roster = (s.rosters && s.rosters[r.rosterKey]) || [];
      const medal = r.place == null ? '–' : r.place === 1 ? '🥇' : r.place === 2 ? '🥈' : r.place === 3 ? '🥉' : `${r.place}.`;
      return `<details class="card nba-arch mp-tc"${t ? ` style="${nba.tcStyle(t)}"` : ''}>
        <summary><span class="nba-arch-place">${medal}</span><span class="nba-arch-name"><strong>${e(r.name)}</strong>${t && t.name.toLowerCase() !== r.name.toLowerCase() ? `<small>heute ${e(t.name)}</small>` : !t ? '<small>existiert nicht mehr</small>' : ''}</span>
          <span class="nba-arch-rec"${s.final ? ' title="Bilanz der regulären Saison"' : ''}>${e(r.record || '')}${s.final && r.regPlace != null && r.regPlace !== r.place ? `<small>Reg. Saison: ${r.regPlace}.</small>` : ''}</span></summary>
        ${roster.length ? `<div class="table-wrap"><table class="table compact"><thead><tr><th>Slot</th><th>Spieler</th><th>NBA</th><th>Pos</th><th>Zugang</th></tr></thead><tbody>
          ${roster.map(p => `<tr><td class="muted">${e(p.slot || '')}</td><td class="strong">${e(p.name)}${p.inj ? ` <span class="nba-inj ${p.injStatus === 'DTD' ? 'dtd' : 'out'}">${e(p.injStatus || 'O')}</span>` : ''}</td><td>${e(String(p.team || '').toUpperCase())}</td><td class="muted">${e(p.pos || '')}</td><td class="muted">${e(p.acq || '')}</td></tr>`).join('')}
        </tbody></table></div>` : '<p class="muted small" style="padding:0 14px 12px">Kein Kader überliefert.</p>'}
      </details>`;
    }).join('');
    return `<div class="page-head"><h1 class="page-title display">📜 Saison ${e(s.label)}</h1>
        <div class="page-sub explain">${s.final ? 'Endplatzierung nach Playoffs · Bilanz und Kader der regulären Saison (ESPN-Export)' : 'Endstand und Kader zum Saisonende (aus dem ESPN-Export)'} · Teamnamen wie damals</div></div>
      <div class="controls">${tabs}</div><div class="nba-arch-list">${cards}</div>`;
  }

  MFHFB.pages.register({
    id: 'archive', section: 'standings', label: 'Saison-Archiv', icon: '📜', applies: { sport: ['nba'] }, when: l => !!(l.seasonArchive && l.seasonArchive.length),
    data: l => ['teams'].concat(archiveFiles(l)),
    title: ctx => 'Saison-Archiv' + (ctx.params[0] ? ' ' + ctx.params[0].replace('-', '/') : ''), render: archive,
  });

  // ---------- Tabellenverlauf (SEASON_MATCHUPS, Funkytown) ----------
  //  Port von renderRollingStandings() (Funkytown js/standings.js): Tabelle
  //  nach jeder Woche der regulären Saison, wertbar nach Kategorien oder
  //  Matchups (Standard = Wertungsart der Saison).
  const rsSeasons = d => (d.SEASON_MATCHUPS || []).filter(s => s && s.weeks && Object.keys(s.weeks).some(w => (s.weeks[w] || []).some(x => !x.playoff))).sort((a, b) => b.espnSeason - a.espnSeason);
  const rsWeeks = s => Object.keys(s.weeks).map(Number).filter(w => (s.weeks[w] || []).some(x => !x.playoff)).sort((a, b) => a - b);
  function rsThrough(s, upto, mode) {
    const tot = {};
    rsWeeks(s).filter(w => w <= upto).forEach(w => s.weeks[w].forEach(x => {
      if (x.playoff) return;
      const t = tot[x.team] = tot[x.team] || { team: x.team, cw: 0, cl: 0, ct: 0, mw: 0, ml: 0, mt: 0 };
      t.cw += x.w; t.cl += x.l; t.ct += x.t;
      if (x.res === 'W') t.mw++; else if (x.res === 'L') t.ml++; else t.mt++;
    }));
    const p = (w, l, t) => ((w + l + t) ? (w + t / 2) / (w + l + t) : 0);
    const list = Object.values(tot).map(t => ({ ...t, catPct: p(t.cw, t.cl, t.ct), mPct: p(t.mw, t.ml, t.mt) }));
    list.sort(mode === 'matchups' ? (a, b) => (b.mPct - a.mPct) || (b.catPct - a.catPct) || (b.cw - a.cw) : (a, b) => (b.catPct - a.catPct) || (b.cw - a.cw) || (b.mPct - a.mPct));
    list.forEach((r, i) => { r.rank = i + 1; });
    return list;
  }
  function rsModel(ctx) {
    const S = rsSeasons(ctx.data);
    if (!S.length) return null;
    const st = ctx.store.getJSON('rs', {}) || {};
    const s = S.find(x => String(x.espnSeason) === ctx.params[0]) || S[0];
    const mode = st.mode || (s.scoringType === 'H2H_MOST_CATEGORIES' ? 'matchups' : 'cats');
    const weeks = rsWeeks(s), byWeek = {};
    weeks.forEach(w => { byWeek[w] = rsThrough(s, w, mode); });
    return { S, s, mode, weeks, byWeek, sel: (st.sel || []).slice(0, MAX_SEL) };
  }
  function rsChart(ctx, M, width) {
    const nba = N(), tmap = new Map(nba.leagueTeams(ctx.data, true).map(t => [t.id, t]));
    const final = M.byWeek[M.weeks[M.weeks.length - 1]];
    const name = id => { const i = M.s.teams && M.s.teams[id]; return (i && i.name) || (i && tmap.get(i.teamId) || {}).name || 'Team ' + id; };
    const rows = final.map(r => ({ id: String(r.team), name: name(r.team), ranks: M.weeks.map(w => (M.byWeek[w].find(x => x.team === r.team) || {}).rank ?? null), tips: M.weeks.map(w => { const x = M.byWeek[w].find(y => y.team === r.team); return x ? `${name(r.team)} · W${w}: Platz ${x.rank} · Kat. ${x.cw}-${x.cl}-${x.ct} · Matchups ${x.mw}-${x.ml}-${x.mt}` : ''; }) }));
    return MFHFB.charts.bump({ cols: M.weeks.map(w => 'W' + w), rows, sel: M.sel, width, maxRank: final.length, label: 'Tabellenverlauf' });
  }
  function rsRender(ctx) {
    const { ui } = ctx, e = ui.esc, nba = N();
    nba.init(ctx.data);
    const M = rsModel(ctx);
    const head = `<div class="page-head"><h1 class="page-title display">📊 Tabellenverlauf</h1><div class="page-sub explain">Tabellenplatz nach jeder Woche der regulären Saison</div></div>`;
    if (!M) return `${head}${ui.empty('Noch keine Wochenergebnisse', 'Die laufende Saison füllt sich automatisch, sobald die erste Woche entschieden ist (täglicher ESPN-Sync). Vorjahre über Actions → „Saison-Standings abrufen“.', '📊')}`;
    const tmap = new Map(nba.leagueTeams(ctx.data, true).map(t => [t.id, t]));
    const lastW = M.weeks[M.weeks.length - 1], prevW = M.weeks.length > 1 ? M.weeks[M.weeks.length - 2] : null;
    const final = M.byWeek[lastW];
    const info = id => { const i = (M.s.teams && M.s.teams[id]) || {}; const t = tmap.get(i.teamId); return { name: i.name || (t && t.name) || 'Team ' + id, t }; };
    return `${head}
      <div class="controls">
        <select class="tr-select" data-season aria-label="Saison">${M.S.map(s => `<option value="${s.espnSeason}"${s === M.s ? ' selected' : ''}>${e(s.label)}${s.current ? ' (laufend)' : ''}</option>`).join('')}</select>
        <div class="seg" role="group">${[['cats', 'Kategorien'], ['matchups', 'Matchups']].map(([k, l]) => `<button type="button" class="seg-btn${M.mode === k ? ' active' : ''}" data-rsmode="${k}">${l}</button>`).join('')}</div>
        <span class="muted small">${M.weeks.length} Woche${M.weeks.length === 1 ? '' : 'n'} · Liga wertet nach ${M.s.scoringType === 'H2H_MOST_CATEGORIES' ? 'Matchups' : 'Kategorien'}</span></div>
      <div class="pick-row">${final.map(r => { const id = String(r.team), k = M.sel.indexOf(id); return `<button type="button" class="pick${k > -1 ? ' on ' + SEL_CLASSES[k] : ''}" data-rspick="${id}"><span>${e(info(r.team).name)}</span></button>`; }).join('')}</div>
      <div class="card bump-card"><div class="bump-wrap" data-bump>${rsChart(ctx, M, 900)}</div><div class="bump-tip" hidden></div></div>
      <div class="table-wrap"><table class="table compact"><thead><tr><th class="num">#</th><th>Team</th><th class="num">±</th><th class="num">Kategorien</th><th class="num">Matchups</th></tr></thead>
        <tbody>${final.map(r => { const inf = info(r.team); const pv = prevW ? (M.byWeek[prevW].find(x => x.team === r.team) || {}).rank : null; const d = pv != null ? pv - r.rank : 0; return `<tr><td class="num rank">${r.rank}</td>
          <td>${inf.t ? `<a class="nba-tlink mp-tc" style="${nba.tcStyle(inf.t)}" href="${ctx.href('teams', inf.t.id)}"><span class="nba-tdot"></span>${e(inf.name)}</a>` : e(inf.name)}</td>
          <td class="num ${d > 0 ? 'up' : d < 0 ? 'down' : 'muted'}">${d > 0 ? '▲' + d : d < 0 ? '▼' + -d : '–'}</td><td class="num${M.mode === 'cats' ? ' strong' : ''}">${r.cw}-${r.cl}-${r.ct}</td><td class="num${M.mode === 'matchups' ? ' strong' : ''}">${r.mw}-${r.ml}-${r.mt}</td></tr>`; }).join('')}</tbody></table></div>`;
  }
  function rsMount(root, ctx) {
    const save = patch => { ctx.store.setJSON('rs', { ...(ctx.store.getJSON('rs', {}) || {}), ...patch }); ctx.refresh(); };
    const se = root.querySelector('[data-season]');
    if (se) se.addEventListener('change', () => { ctx.store.setJSON('rs', { sel: [] }); location.hash = ctx.href('stverlauf', se.value); });
    root.querySelectorAll('[data-rsmode]').forEach(b => b.addEventListener('click', () => save({ mode: b.dataset.rsmode })));
    root.querySelectorAll('[data-rspick]').forEach(b => b.addEventListener('click', () => {
      const cur = (ctx.store.getJSON('rs', {}) || {}).sel || [], id = b.dataset.rspick;
      let sel = cur.filter(x => x !== id);
      if (sel.length === cur.length) sel = [...cur, id].slice(-MAX_SEL);
      save({ sel });
    }));
    const wrap = root.querySelector('[data-bump]');
    if (!wrap) return;
    const M = rsModel(ctx);
    MFHFB.charts.responsive(wrap, w => rsChart(ctx, M, w));
    MFHFB.charts.bumpInteract(wrap, root.querySelector('.bump-tip'), id => { const b = root.querySelector(`[data-rspick="${CSS.escape(id)}"]`); if (b) b.click(); });
  }
  MFHFB.pages.register({
    id: 'stverlauf', section: 'standings', label: 'Tabellenverlauf', icon: '📊', applies: { sport: ['nba'] }, when: l => !!l.seasonMatchups,
    data: ['teams', 'season-matchups'], title: () => 'Tabellenverlauf', render: rsRender, mount: rsMount,
  });
})();
