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
      return L.seasonArchive.map(k => {
        const S = d[varName(k)];
        return S && S.standings ? { key: k, label: k.replace('-', '/'), standings: S.standings, rosters: S.rosters || null } : null;
      }).filter(Boolean);
    }
    return (d.SEASON_HISTORY || []).slice().sort((a, b) => a.espnSeason - b.espnSeason)
      .map(s => ({ key: String(s.espnSeason), label: String(s.label || s.espnSeason).replace('Saison ', ''), standings: s.standings || [], rosters: null }));
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
    return { S, stats, maxRank: Math.max(1, ...S.map(s => s.standings.length)) };
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
      <div class="page-sub">Laufende Saison und Endplatzierungen aller bisherigen Saisons</div></div>`;
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
          <div class="bump-hint">Nur Teams, die es heute noch gibt · Lücke = in dieser Saison nicht dabei. Hovern zeigt den damaligen Teamnamen.</div></div>
        <h2 class="group-title">🏆 Podium je Saison</h2>
        <div class="table-wrap"><table class="table compact"><thead><tr><th>Saison</th><th>🥇 Champion</th><th>🥈 Zweiter</th><th>🥉 Dritter</th><th class="num">Teams</th></tr></thead>
          <tbody>${model.S.slice().reverse().map(s => { const at = p => s.standings.find(r => r.place === p); return `<tr>
            <td class="strong">${league.seasonArchive ? `<a href="${ctx.href('archive', s.key)}">${e(s.label)}</a>` : e(s.label)}</td>
            <td>${cell(at(1))}</td><td>${cell(at(2))}</td><td>${cell(at(3))}</td><td class="num">${s.standings.length}</td></tr>`; }).join('')}</tbody></table></div>
        <h2 class="group-title">Ewige Tabelle</h2>
        <div class="table-wrap"><table class="table compact"><thead><tr><th>Team</th><th class="num">Saisons</th><th class="num">Titel</th><th class="num">Podium</th><th class="num">Bestes</th><th class="num">Ø Platz</th></tr></thead>
          <tbody>${byAvg.map(x => `<tr><td><a class="nba-tlink mp-tc" style="${nba.tcStyle(x.t)}" href="${ctx.href('teams', x.t.id)}"><span class="nba-tdot"></span>${e(x.t.name)}</a></td>
            <td class="num">${x.n}</td><td class="num strong">${x.titles ? '🏆'.repeat(Math.min(x.titles, 3)) + (x.titles > 3 ? '×' + x.titles : '') : '–'}</td><td class="num">${x.podium}</td><td class="num">${x.best}.</td><td class="num strong">${x.avg.toFixed(1)}</td></tr>`).join('')}</tbody></table></div>
        ${model.S.some(s => s.standings.some(r => r.estimated)) ? '<p class="muted small">* Platzierung geschätzt (ESPN lieferte keine offizielle Endplatzierung)</p>' : ''}`;
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
    const cards = s.standings.slice().sort((a, b) => a.place - b.place).map(r => {
      const t = tmap.get(r.teamId);
      const roster = (s.rosters && s.rosters[r.rosterKey]) || [];
      const medal = r.place === 1 ? '🥇' : r.place === 2 ? '🥈' : r.place === 3 ? '🥉' : `${r.place}.`;
      return `<details class="card nba-arch mp-tc"${t ? ` style="${nba.tcStyle(t)}"` : ''}>
        <summary><span class="nba-arch-place">${medal}</span><span class="nba-arch-name"><strong>${e(r.name)}</strong>${t && t.name.toLowerCase() !== r.name.toLowerCase() ? `<small>heute ${e(t.name)}</small>` : !t ? '<small>existiert nicht mehr</small>' : ''}</span>
          <span class="nba-arch-rec">${e(r.record || '')}</span></summary>
        ${roster.length ? `<div class="table-wrap"><table class="table compact"><thead><tr><th>Slot</th><th>Spieler</th><th>NBA</th><th>Pos</th><th>Zugang</th></tr></thead><tbody>
          ${roster.map(p => `<tr><td class="muted">${e(p.slot || '')}</td><td class="strong">${e(p.name)}${p.inj ? ` <span class="nba-inj ${p.injStatus === 'DTD' ? 'dtd' : 'out'}">${e(p.injStatus || 'O')}</span>` : ''}</td><td>${e(String(p.team || '').toUpperCase())}</td><td class="muted">${e(p.pos || '')}</td><td class="muted">${e(p.acq || '')}</td></tr>`).join('')}
        </tbody></table></div>` : '<p class="muted small" style="padding:0 14px 12px">Kein Kader überliefert.</p>'}
      </details>`;
    }).join('');
    return `<div class="page-head"><h1 class="page-title display">📜 Saison ${e(s.label)}</h1>
        <div class="page-sub">Endstand und Kader zum Saisonende (aus dem ESPN-Export) · Teamnamen wie damals</div></div>
      <div class="controls">${tabs}</div><div class="nba-arch-list">${cards}</div>`;
  }

  MFHFB.pages.register({
    id: 'archive', section: 'standings', label: 'Saison-Archiv', icon: '📜', applies: { sport: ['nba'] }, when: l => !!(l.seasonArchive && l.seasonArchive.length),
    data: l => ['teams'].concat(archiveFiles(l)),
    title: ctx => 'Saison-Archiv' + (ctx.params[0] ? ' ' + ctx.params[0].replace('-', '/') : ''), render: archive,
  });
})();
