// ============================================================
//  Tools (NBA): Übersicht, Team-Kader, Pick-Übersicht, Draft Results
// ============================================================
//  #/<liga>                      Übersicht: Countdowns + Team-Karten
//  #/<liga>/teams/<id>[/picks|/draft]  Kader | eigene Picks | Draft-Tab
//  #/<liga>/picks                Pick-Übersicht aller Jahre + Keeper (TTHQ)
//  #/<liga>/draftresults         Wer hat wen gepickt (ESPN-Export)
//
//  Neu gebaut nach renderHome / showTeam / renderRoster / renderPicks /
//  renderTeamDraftBoard / showDraftboard / renderKeeperSummaryGrid /
//  showDraftResults (TTHQ js/navigation.js) und der Funkytown-Variante
//  (Projektions-Rang statt Dynasty-Rang, pausierte Teams).
//
//  Unterschiede zur alten Seite:
//   - Stärke-Badge „Ø Top-20“: Projektions-Rang nur, wenn LIVE_PROJECTIONS
//     echte z-Werte hat — die TTHQ-Baseline hat derzeit überall z:0, dann
//     wäre die Reihenfolge Zufall. Fallback Dynasty-Rang (TTHQ).
//   - Keine Admin-Funktionen (PIN, Overrides im Browser) — Daten kommen
//     nur noch aus den Syncs bzw. den Datendateien.
// ============================================================

(function () {
  const N = () => MFHFB.nba;
  const POS = ['PG', 'SG', 'SF', 'PF', 'C'];
  const A = { sport: ['nba'] };

  // ---------- Übersicht ----------
  function strength(ctx, t) {
    const nba = N();
    const proj = nba.projRanks(ctx.data);
    const dyn = ctx.data.DYNASTY_PLAYERS ? nba.dynastyIndex(ctx.data) : null;
    const src = proj ? { fn: n => proj(n), label: 'Ø Top-20 Proj.', tip: 'Ø Projektions-Rang der 20 besten Spieler des Kaders (LIVE_PROJECTIONS, täglich)' }
      : dyn ? { fn: n => (dyn(n) || {}).rank || null, label: 'Ø Top-20 Dynasty', tip: 'Ø Dynasty-Rang der 20 besten Spieler des Kaders (Projektionen noch ohne Werte)' } : null;
    if (!src) return '';
    const ranks = nba.roster(ctx.data, t.id).map(p => src.fn(p.name)).filter(r => r != null).sort((a, b) => a - b).slice(0, 20);
    if (!ranks.length) return '';
    const avg = Math.round(ranks.reduce((a, b) => a + b, 0) / ranks.length);
    const tier = avg <= 30 ? 't1' : avg <= 60 ? 't2' : avg <= 100 ? 't3' : avg <= 150 ? 't4' : 't6';
    return `<span class="nba-str" title="${src.tip}"><small>${src.label}</small><span class="nba-rk ${tier}">#${avg}</span></span>`;
  }

  function countdownTargets(ctx) {
    const d = ctx.data, out = [];
    ((ctx.league.countdowns) || []).forEach(c => out.push({ label: c.label, at: new Date(c.iso) }));
    if (d.KEEPER_LOCK_DATE && d.DRAFT_EVENT_DATE && d.KEEPER_LOCK_DATE === d.DRAFT_EVENT_DATE) out.push({ label: '🔒 Keeper Lock & 📋 Draft', at: new Date(d.DRAFT_EVENT_DATE) });
    else {
      if (d.KEEPER_LOCK_DATE) out.push({ label: '🔒 Keeper Lock', at: new Date(d.KEEPER_LOCK_DATE) });
      if (d.DRAFT_EVENT_DATE) out.push({ label: '📋 Draft Day', at: new Date(d.DRAFT_EVENT_DATE) });
    }
    return out;
  }

  function home(ctx) {
    const { league, data, href, ui } = ctx;
    const e = ui.esc, nba = N().init(data);
    const teams = nba.leagueTeams(data, true);
    const season = data.TEAM_RECORDS_LIVE && data.TEAM_RECORDS_LIVE.season;
    const card = t => `<a class="nba-tcard${t.inactive ? ' inactive' : ''}" href="${href('teams', t.id)}" style="${nba.tcStyle(t)}">
        <span class="nba-tc-top"><span class="nba-avatar">${e(nba.initials(t.name))}</span>
          <span class="nba-tc-name"><b>${e(t.name)}</b><small>${e(t.owner || '')}${t.inactive ? ' · pausiert' : ''}</small></span></span>
        <span class="nba-tc-foot"><span class="nba-rec">📊 ${e(nba.record(data, t))}</span>${t.inactive ? '' : strength(ctx, t)}</span></a>`;
    return `
      <div class="page-head">
        <h1 class="page-title display">${e(league.emoji)} ${e(league.name)}</h1>
        <div class="page-sub">${e(league.platform)} · ${e(league.format)} · 9-Cat H2H · ${teams.filter(t => !t.inactive).length} Teams${season ? ` · Saison ${season - 1}/${String(season).slice(2)}` : ''}</div>
      </div>
      ${MFHFB.ui.countdowns ? MFHFB.ui.countdowns(countdownTargets(ctx)) : ''}
      <div class="nba-grid">${teams.filter(t => !t.inactive).map(card).join('')}${teams.filter(t => t.inactive).map(card).join('')}</div>`;
  }

  // ---------- Team-Seite ----------
  function rosterRows(ctx, t, sortBy) {
    const { data, ui } = ctx;
    const e = ui.esc, nba = N();
    const list = nba.roster(data, t.id).slice();
    const dyn = data.DYNASTY_PLAYERS ? nba.dynastyIndex(data) : null;
    const matt = data.MATT_RANKS ? (() => { const m = new Map(Object.entries(data.MATT_RANKS).map(([n, r]) => [nba.key(n), r])); return n => m.get(nba.key(n)) || null; })() : null;
    const hash = data.HASHTAG_RANKINGS ? (() => { const m = new Map(data.HASHTAG_RANKINGS.map(p => [nba.key(p[1]), p[0]])); return n => m.get(nba.key(n)) || null; })() : null;
    const proj = nba.projRanks(data);
    const dob = nba.dobIndex(data);
    const cols = [
      dyn && { label: 'MFHFB', title: 'Dynasty-Rang (MFHFBs Rankings)', fn: n => (dyn(n) || {}).rank || null },
      matt && { label: 'Matt', title: 'Matts Dynasty-Rang', fn: matt },
      hash && { label: '#️⃣', title: 'Hashtag Basketball Dynasty-Rang', fn: hash },
      proj && { label: 'Proj.', title: 'Rang in den Saison-Projektionen', fn: proj },
    ].filter(Boolean);
    const primary = cols[0];
    const posOf = p => (p.pos || '').split(/[\/,]/)[0].trim();
    if (sortBy === 'rank' && primary) list.sort((a, b) => (primary.fn(a.name) || 9999) - (primary.fn(b.name) || 9999));
    else list.sort((a, b) => ((POS.indexOf(posOf(a)) + 1 || 9) - (POS.indexOf(posOf(b)) + 1 || 9)) || String(a.name).localeCompare(String(b.name)));
    return { cols, rows: list.map(p => {
      const a = nba.age(dob(p.name));
      return `<tr>
        <td class="pos-col"><span class="pos nba-pos pos-${e(posOf(p) || 'x')}">${e(posOf(p) || '?')}</span></td>
        <td class="strong">${e(p.name)}${a != null ? ` <span class="nba-age">${a}</span>` : ''}${nba.injury(p.inj)}</td>
        <td><a class="nba-team-link" href="${ctx.href('nbateams', p.team)}" title="${e(nba.teamName(p.team))}">${e(p.team || '')}</a></td>
        ${cols.map(c => `<td class="num">${nba.rankBadge(c.fn(p.name), c.title)}</td>`).join('')}
      </tr>`;
    }).join('') };
  }

  function pickBlock(ctx, year, yearPicks, rounds) {
    const e = ctx.ui.esc;
    const teams = {}; (ctx.data.TEAMS || []).forEach(t => { teams[t.id] = t; });
    const rows = rounds.flatMap(r => yearPicks.filter(p => p.round === r).sort((a, b) => a.originalOwner - b.originalOwner).map((p, i) => {
      const traded = p.originalOwner !== p.currentOwner;
      return `<tr><td class="strong">${i === 0 ? 'R' + r : ''}</td><td>${e((teams[p.originalOwner] || {}).name || '?')}</td><td><span class="nba-pickst${traded ? ' traded' : ''}">${traded ? 'Getradet' + (p.note ? ' (' + e(p.note) + ')' : '') : 'Eigener'}</span></td></tr>`;
    }));
    return `<div class="card nba-pyear"><div class="card-head"><h2>${year}</h2><span class="muted" style="font-size:12px">${yearPicks.length} Pick${yearPicks.length === 1 ? '' : 's'}</span></div>
      <div class="table-wrap"><table class="table compact"><thead><tr><th>Runde</th><th>Herkunft</th><th>Status</th></tr></thead><tbody>${rows.join('')}</tbody></table></div></div>`;
  }

  function keeperInfo(data, tid, year, picks) {
    const nPicks = picks.filter(p => p.year === year && p.currentOwner === tid).length;
    const max = (data.MAX_ROSTER_SIZE || 26) - nPicks;
    const sel = data.KEEPERS && data.KEEPERS.teams ? data.KEEPERS.teams[tid] || null : null;
    const n = sel ? sel.length : N().roster(data, tid).length;
    return { nPicks, max, sel, n, over: Math.max(0, n - max), free: sel ? Math.max(0, max - n) : 0 };
  }

  function keeperCard(ctx, t, year, picks) {
    const e = ctx.ui.esc, nba = N();
    const k = keeperInfo(ctx.data, t.id, year, picks);
    const badge = k.sel ? (k.over ? `<span class="nba-kbadge bad">⚠️ ${k.over} zu viel</span>` : k.free ? `<span class="nba-kbadge free">${k.free} frei</span>` : '<span class="nba-kbadge ok">✓ passt</span>') : (k.over ? `<span class="nba-kbadge bad">⚠️ −${k.over}</span>` : '');
    return `<div class="card nba-kcard${k.over ? ' over' : ''}" style="${nba.tcStyle(t)}">
      <div class="nba-kteam">${e(t.name)}</div>
      <div class="nba-krow"><span>Picks ${year}</span><b>${k.nPicks}</b></div>
      <div class="nba-krow"><span>Max. Keeper</span><b class="acc">${k.max}</b></div>
      <div class="nba-krow"><span>${k.sel ? 'Keeper gewählt' : 'Aktueller Kader'}</span><b>${k.n}</b></div>
      ${badge ? `<div class="nba-kst">${badge}</div>` : ''}
      ${k.sel && k.sel.length ? `<details class="nba-klist"><summary>Keeper anzeigen</summary><ol>${k.sel.map(n => `<li>${e(n)}</li>`).join('')}</ol></details>` : ''}
    </div>`;
  }

  function nextDraftYear(data, picks) {
    const years = [...new Set(picks.map(p => p.year))].sort();
    return (data.PICKS_LIVE && data.PICKS_LIVE.ttYear) || years[0];
  }

  function teamPage(ctx) {
    const { data, params, href, ui } = ctx;
    const e = ui.esc, nba = N().init(data);
    const tid = Number(params[0]);
    const t = (data.TEAMS || []).find(x => x.id === tid);
    if (!t) return ui.empty('Team nicht gefunden', 'Zurück zur Übersicht und neu wählen.', '🏀');
    const tab = params[1] === 'picks' || params[1] === 'draft' ? params[1] : 'roster';
    const hasPicks = !!(data.PICKS && data.PICKS.length);
    const sortBy = ctx.store.get('rostersort') === 'rank' ? 'rank' : 'pos';
    let body = '';
    if (tab === 'roster') {
      const { cols, rows } = rosterRows(ctx, t, sortBy);
      body = `<div class="controls">${cols.length ? `<div class="seg" role="group"><button type="button" class="seg-btn${sortBy === 'pos' ? ' active' : ''}" data-sort="pos">Nach Position</button><button type="button" class="seg-btn${sortBy === 'rank' ? ' active' : ''}" data-sort="rank">Nach Rang (${e(cols[0].label)})</button></div>` : ''}</div>
        <div class="table-wrap"><table class="table nba-roster"><thead><tr><th class="pos-col">Pos</th><th>Spieler</th><th>NBA</th>${cols.map(c => `<th class="num" title="${c.title}">${c.label}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table></div>`;
    } else if (tab === 'picks') {
      const picks = nba.picks(data);
      const mine = picks.filter(p => p.currentOwner === tid);
      const rounds = [...new Set(picks.map(p => p.round))].sort((a, b) => a - b);
      body = mine.length ? [...new Set(mine.map(p => p.year))].sort().map(y => pickBlock(ctx, y, mine.filter(p => p.year === y), rounds)).join('') : ui.empty('Keine Picks', 'Dieses Team hält aktuell keine Picks.', '🎟️');
    } else {
      const picks = nba.picks(data);
      const year = nextDraftYear(data, picks);
      const mine = picks.filter(p => p.year === year && p.currentOwner === tid);
      const rounds = [...new Set(picks.filter(p => p.year === year).map(p => p.round))].sort((a, b) => a - b);
      body = `<div class="nba-kwrap">${keeperCard(ctx, t, year, picks)}</div>
        <div class="page-sub" style="margin:8px 0 12px"><span class="explain">Kadergröße ${data.MAX_ROSTER_SIZE || 26} = Picks + Keeper.</span> Alle Teams: <a href="${href('picks')}">Pick-Übersicht</a>.</div>
        ${mine.length ? pickBlock(ctx, year, mine, rounds) : ui.empty(`Keine Picks im ${year} Draft`, '', '🎟️')}`;
    }
    const teams = nba.leagueTeams(data, true);
    return `
      <a class="back" href="${href('home')}">← Alle Teams</a>
      <div class="nba-thead" style="${nba.tcStyle(t)}">
        <span class="nba-avatar big">${e(nba.initials(t.name))}</span>
        <div><h1 class="page-title display">${e(t.name)}</h1>
          <div class="page-sub">${e(t.owner || '')} · 📊 ${e(nba.record(data, t))} · ${nba.roster(data, tid).length} Spieler${t.inactive ? ' · pausiert' : ''}</div></div>
      </div>
      <div class="chip-row" aria-label="Team wechseln">${teams.map(x => `<a class="chip-link${x.id === tid ? ' active' : ''}" href="${href('teams', x.id, ...(tab !== 'roster' ? [tab] : []))}" title="${e(x.name)}" style="${nba.tcStyle(x)}"><span class="nba-chipav">${e(nba.initials(x.name))}</span></a>`).join('')}</div>
      ${hasPicks ? `<div class="week-picker"><a class="week-btn done${tab === 'roster' ? ' active' : ''}" href="${href('teams', tid)}">Kader</a><a class="week-btn done${tab === 'picks' ? ' active' : ''}" href="${href('teams', tid, 'picks')}">Eigene Picks</a><a class="week-btn done${tab === 'draft' ? ' active' : ''}" href="${href('teams', tid, 'draft')}">Draft & Keeper</a></div>` : ''}
      ${body}`;
  }

  // ---------- Pick-Übersicht (TTHQ) ----------
  function picksPage(ctx) {
    const { data, href, ui } = ctx;
    const e = ui.esc, nba = N().init(data);
    const picks = nba.picks(data);
    if (!picks.length) return ui.empty('Keine Pick-Daten', 'data/picks.js fehlt für diese Liga.', '🎟️');
    const teams = nba.leagueTeams(data, true);
    const byId = {}; teams.forEach(t => { byId[t.id] = t; });
    const short = t => (t ? t.name.split(' ')[0] : '?');
    const years = [...new Set(picks.map(p => p.year))].sort();
    const rounds = [...new Set(picks.map(p => p.round))].sort((a, b) => a - b);
    const draftYear = nextDraftYear(data, picks);
    const slots = (data.DRAFT_2026_SLOT_ORDER || []).filter(s => s.round === 1).sort((a, b) => a.slot - b.slot);
    const yearHtml = year => {
      const moved = picks.filter(p => p.year === year && p.currentOwner !== p.originalOwner);
      const cols = year === 2026 && slots.length ? slots.map(s => ({ id: s.originalOwner, sub: `#${s.slot}${s.currentOwner !== s.originalOwner ? ' → ' + short(byId[s.currentOwner]) : ''}`, slot: s.slot })) : teams.map(t => ({ id: t.id }));
      const cell = (round, c) => {
        const p = picks.find(x => x.year === year && x.round === round && x.originalOwner === c.id);
        if (!p) return '<td><span class="muted">—</span></td>';
        const traded = p.currentOwner !== p.originalOwner;
        return `<td><span class="nba-pcell${traded ? ' traded' : ''}" title="${e(byId[p.currentOwner] ? byId[p.currentOwner].name : '')}${p.note ? ' · ' + e(p.note) : ''}">${traded ? '→ ' + e(short(byId[p.currentOwner])) : 'Eigener'}${c.slot ? `<small>${round}.${c.slot}</small>` : ''}</span></td>`;
      };
      return `<div class="card nba-pboard"><div class="card-head"><h2>${year} Draft</h2>${moved.length ? `<span class="muted" style="font-size:12px">${moved.length} getradet</span>` : ''}</div>
        ${moved.length ? `<div class="nba-moved">🔄 ${moved.map(p => `${e(short(byId[p.originalOwner]))}s R${p.round} → ${e(short(byId[p.currentOwner]))}`).join(' · ')}</div>` : ''}
        ${data.DRAFT_NOTES && data.DRAFT_NOTES[year] ? `<div class="note" style="margin:10px 14px">${data.DRAFT_NOTES[year]}</div>` : ''}
        <div class="table-wrap"><table class="table compact nba-pmatrix"><thead><tr><th>Rnd</th>${cols.map(c => `<th title="${e((byId[c.id] || {}).owner || '')}">${e(short(byId[c.id]))}${c.sub ? `<small>${e(c.sub)}</small>` : ''}</th>`).join('')}</tr></thead>
          <tbody>${rounds.map(r => `<tr><td class="strong">R${r}</td>${cols.map(c => cell(r, c)).join('')}</tr>`).join('')}</tbody></table></div></div>`;
    };
    const lock = data.KEEPER_LOCK_DATE || data.DRAFT_EVENT_DATE;
    const fmt = iso => new Date(iso).toLocaleString('de-DE', { weekday: 'short', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Berlin' });
    return `
      <div class="page-head"><h1 class="page-title display">🎟️ Pick-Übersicht</h1>
        <div class="page-sub"><span class="explain">Pick-Besitz je Jahr</span> · ${data.PICKS_LIVE && data.PICKS_LIVE.aktualisiert ? `${draftYear} täglich aus ESPN (Stand ${new Date(data.PICKS_LIVE.aktualisiert).toLocaleDateString('de-DE')})` : 'manuell gepflegt'}</div></div>
      ${data.MAX_ROSTER_SIZE ? `<div class="card nba-keepers"><div class="card-head"><h2>🔑 Picks & Keeper ${draftYear}</h2>${lock ? `<span class="muted" style="font-size:12px">🔒 Keeper Lock: ${fmt(lock)} Uhr</span>` : ''}</div>
        <div class="page-sub" style="padding:10px 14px 0"><span class="explain">Kadergröße ${data.MAX_ROSTER_SIZE} = Picks + Keeper. Weniger Picks = mehr mögliche Keeper.</span>${data.KEEPERS ? ` Keeper-Stand ${new Date(data.KEEPERS.stand).toLocaleDateString('de-DE')} (${e(data.KEEPERS.quelle)}).` : ''}</div>
        <div class="nba-kgrid">${teams.filter(t => !t.inactive).map(t => keeperCard(ctx, t, draftYear, picks)).join('')}</div></div>` : ''}
      ${slots.length ? `<div class="card nba-lottery"><div class="card-head"><h2>🎰 2026 Lottery-Reihenfolge (R1)</h2></div><div class="table-wrap"><table class="table compact"><thead><tr><th class="num">Slot</th><th>NBA-Team</th><th>Herkunft</th><th>Besitzer</th><th>Notiz</th></tr></thead><tbody>
        ${slots.map(s => `<tr><td class="num strong">#${s.slot}</td><td>${e(s.nbaTeam || '')}</td><td>${e((byId[s.originalOwner] || {}).name || '?')}</td><td class="${s.currentOwner !== s.originalOwner ? 'strong' : ''}">${e((byId[s.currentOwner] || {}).name || '?')}</td><td class="muted">${e(s.note || '—')}</td></tr>`).join('')}
      </tbody></table></div></div>` : ''}
      ${years.map(yearHtml).join('')}`;
  }

  // ---------- Draft Results ----------
  function draftResults(ctx) {
    const { data, ui } = ctx;
    const e = ui.esc, nba = N().init(data);
    const R = data.DRAFT_RESULTS;
    const head = `<div class="page-head"><h1 class="page-title display">🏆 Draft Results</h1><div class="page-sub">${R && R.espnSeason ? `ESPN-Saison ${R.espnSeason} · abgerufen ${new Date(R.fetchedAt).toLocaleDateString('de-DE')}` : 'Wer hat wen gepickt'}</div></div>`;
    if (!R || !R.picks || !R.picks.length) return head + ui.empty('Noch keine Draft Results', 'Nach dem Draft über Actions → „Draft Results abrufen“ → Run workflow laden. Aktualisiert sich nicht automatisch.', '🏆');
    const teams = nba.leagueTeams(data, true);
    const rounds = [...new Set(R.picks.map(p => p.round))].sort((a, b) => a - b);
    const unresolved = R.picks.filter(p => p.nameSource === 'unresolved').length;
    const order = R.picks.slice().sort((a, b) => a.overallPickNumber - b.overallPickNumber);
    const byId = {}; teams.forEach(t => { byId[t.id] = t; });
    return head + `
      ${unresolved ? `<div class="note">⚠️ ${unresolved} Spieler nicht auflösbar (nicht mehr auf einem Kader) — statt Name steht die ESPN-ID.</div>` : ''}
      <div class="table-wrap"><table class="table compact"><thead><tr><th class="num">Pick</th><th class="num">Rnd</th><th>Team</th><th>Spieler</th></tr></thead><tbody>
        ${order.map(p => `<tr><td class="num strong">${p.overallPickNumber}</td><td class="num">${p.round}</td><td><span class="nba-tdot" style="${nba.tcStyle(byId[p.teamId])}"></span>${e((byId[p.teamId] || {}).name || p.teamId)}</td><td class="strong">${p.nameSource === 'unresolved' ? `<span class="muted">ESPN #${e(p.playerId)}</span>` : e(p.playerName)}</td></tr>`).join('')}
      </tbody></table></div>
      <div class="page-sub" style="margin-top:8px">${rounds.length} Runden · ${order.length} Picks</div>`;
  }

  const TEAM_DATA = ['teams', '?rosters-live', '?sport:aliases', '?live-projections'];
  MFHFB.pages.register({
    id: 'home', section: 'home', label: 'Übersicht', icon: '🏠', applies: A,
    data: TEAM_DATA.concat(['?rankings', '?picks']),
    render: home, mount: root => MFHFB.ui.mountCountdowns && MFHFB.ui.mountCountdowns(root),
  });
  MFHFB.pages.register({
    id: 'teams', section: 'teams', label: 'Teams & Kader', icon: '🧍', applies: A,
    data: TEAM_DATA.concat(['?rankings', '?hashtag', '?players', '?picks', '?picks-live']),
    title: ({ data, params }) => { const t = (data.TEAMS || []).find(x => x.id === Number(params[0])); return t ? t.name : 'Teams'; },
    render: ctx => (ctx.params[0] ? teamPage(ctx) : home(ctx)),
    mount(root, ctx) {
      root.querySelectorAll('[data-sort]').forEach(b => b.addEventListener('click', () => { ctx.store.set('rostersort', b.dataset.sort); ctx.refresh(); }));
      if (MFHFB.ui.mountCountdowns) MFHFB.ui.mountCountdowns(root);
    },
  });
  MFHFB.pages.register({
    id: 'picks', section: 'draft', label: 'Pick-Übersicht', icon: '🎟️', applies: { sport: ['nba'], keepers: [true] },
    data: ['teams', '?rosters-live', '?picks', '?picks-live'], render: picksPage,
  });
  MFHFB.pages.register({
    id: 'draftresults', section: 'draft', label: 'Draft Results', icon: '🏆', applies: A,
    data: ['teams', '?draft-results-active'], render: draftResults,
  });
})();
