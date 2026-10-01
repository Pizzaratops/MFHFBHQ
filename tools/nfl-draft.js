// ============================================================
//  Tools: Draft & Picks (NFL)
// ============================================================
//  #/<liga>/draftboard     → Draft Board der laufenden Saison
//  #/<liga>/keepers        → Keeper-Übersicht (nur Keeper-Ligen)
//  #/<liga>/futurepicks[/<jahr>] → Picks-Übersicht + Future Draft Boards
//
//  MFHFB.draft.normalize(data) liest BEIDE bisherigen Datenvarianten:
//    BWP (ESPN):   DRAFT_ORDER_2026, DRAFT_2026_TEAMS, DRAFT_RESULTS_2026,
//                  TRADED_PICKS_2026, MAX_KEEPERS, KEEPER_LOCK_DATE
//    DOPE (Sleeper): DRAFT_SEASON, DRAFT_ORDER, DRAFT_TEAMS, DRAFT_RESULTS,
//                  DRAFT_TYPE, DRAFT_STATUS, TRADED_PICKS_CURRENT
//  Teams werden in den Draft-Daten über den NAMEN referenziert (wie bisher).
// ============================================================

(function () {
  const ROUND_LABELS = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'];

  function normalize(d) {
    const suffixed = name => {
      const k = Object.keys(d).find(x => new RegExp(`^${name}_(\\d{4})$`).test(x));
      return k ? { value: d[k], year: Number(k.slice(-4)) } : null;
    };
    const suffixedTeams = Object.keys(d).find(x => /^DRAFT_\d{4}_TEAMS$/.test(x));
    const season = d.DRAFT_SEASON || (suffixed('DRAFT_RESULTS') || suffixed('DRAFT_ORDER') || {}).year ||
      (suffixedTeams ? Number(suffixedTeams.slice(6, 10)) : null);
    const results = d.DRAFT_RESULTS || (suffixed('DRAFT_RESULTS') || {}).value || {};
    return {
      season,
      rounds: d.TOTAL_DRAFT_ROUNDS || 0,
      type: d.DRAFT_TYPE || 'linear',
      date: d.DRAFT_DATE || null,
      order: d.DRAFT_ORDER || (suffixed('DRAFT_ORDER') || {}).value || [],
      teams: d.DRAFT_TEAMS || (suffixedTeams ? d[suffixedTeams] : []) || [],
      results,
      hasResults: Object.keys(results).length > 0,
      traded: d.TRADED_PICKS_CURRENT || (suffixed('TRADED_PICKS') || {}).value || [],
      future: d.FUTURE_PICKS || {},
      maxKeepers: d.MAX_KEEPERS || null,
      keeperLock: d.KEEPER_LOCK_DATE || null,
    };
  }

  // Picks, die ein Team in einem Zukunftsjahr hält (eigene + dazugetradete − abgegebene)
  function picksHeld(draft, leagueTeams, teamName, year, rounds) {
    const own = {};
    (draft.future[year] || []).forEach(p => { own[`${p.from}|${p.round}`] = p.owner; });
    const out = [];
    leagueTeams.forEach(origin => rounds.forEach(r => {
      const owner = own[`${origin.name}|${r}`] || origin.name;
      if (owner === teamName) out.push({ round: r, origin: origin.name, isOwn: origin.name === teamName });
    }));
    return out.sort((a, b) => rounds.indexOf(a.round) - rounds.indexOf(b.round));
  }

  const futureRounds = (league, draft) => ROUND_LABELS.slice(0, league.futureRounds || draft.rounds || 4);
  MFHFB.draft = { normalize, picksHeld, futureRounds };

  const byName = teams => { const m = {}; (teams || []).forEach(t => { m[t.name] = t; }); return m; };
  const fmtDay = iso => new Date(iso).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });

  // ---------- Draft Board ----------
  function draftboard(ctx) {
    const { data, ui, league } = ctx;
    const e = ui.esc;
    const d = normalize(data);
    if (!d.rounds) return ui.empty('Keine Draft-Daten', 'Für diese Liga liegen noch keine Draft-Daten vor.', '📋');
    const tByName = byName(data.LEAGUE_TEAMS);
    const draftByName = {}; d.teams.forEach(t => { draftByName[t.team] = t; });
    let cols = (d.order.length ? d.order : d.teams.map(t => t.team)).filter(n => draftByName[n] || tByName[n]);
    const hasOrder = d.order.length > 0 && cols.length === (d.teams.length || cols.length);
    if (!cols.length) cols = (data.LEAGUE_TEAMS || []).map(t => t.name);
    const keepers = {}; d.teams.forEach(t => { keepers[t.team] = new Set((t.keepers || []).map(p => p.name)); });
    const n = cols.length;
    const slotOf = (round, i) => (d.type === 'snake' && round % 2 === 0 ? n - 1 - i : i);
    const pickNo = (round, col) => `${round}.${String(col + 1).padStart(2, '0')}`;

    const head = `<tr><th class="round-col">Rd.</th>${cols.map((c, i) => {
      const t = tByName[c] || {};
      return `<th class="draft-col"><span class="draft-head">${e(t.emoji || '')} ${e(c)}</span>${hasOrder ? `<small>Pick ${i + 1}</small>` : ''}${t.owner ? `<small>${e(t.owner)}</small>` : ''}</th>`;
    }).join('')}</tr>`;

    const tradedOwner = {};
    d.traded.forEach(p => { tradedOwner[`${p.from}|${p.round}`] = p.owner; });

    let body = '';
    for (let r = 1; r <= d.rounds; r++) {
      let row = `<th class="round-col">R${r}</th>`;
      const cells = new Array(n).fill('');
      if (d.hasResults) {
        const list = d.results[r] || [];
        cols.forEach((colTeam, i) => {
          const col = slotOf(r, i);
          const pick = list[i];
          if (!pick) { cells[col] = `<td><div class="dcell empty">—</div></td>`; return; }
          const traded = pick.team !== cols[col];
          const isKeeper = keepers[pick.team] && keepers[pick.team].has(pick.name);
          const via = traded ? `<small>${e((tByName[pick.team] || {}).emoji || '')} ${e(pick.team)} · via ${e(cols[col])}</small>` : '';
          cells[col] = `<td><div class="dcell${traded ? ' traded' : ''}${isKeeper ? ' keeper' : ''}" title="Pick ${pickNo(r, col)}">
            <span class="dname">${e(pick.name)}${isKeeper ? ' 🔒' : ''}</span>
            <small><span class="pos pos-${e(String(pick.pos || '').replace(/[^A-Z]/gi, ''))}">${e(pick.pos || '')}</span> ${e(pick.nfl || '')}</small>${via}</div></td>`;
        });
      } else {
        // Vor dem Draft: Keeper füllen die letzten Runden, getradete Picks markiert
        cols.forEach((colTeam, i) => {
          const col = slotOf(r, i);
          const team = cols[col];
          const ks = (draftByName[team] && draftByName[team].keepers) || [];
          const start = d.rounds - ks.length + 1;
          const owner = tradedOwner[`${team}|${r}`];
          if (league.keepers && r >= start && ks[r - start]) {
            const p = ks[r - start];
            cells[col] = `<td><div class="dcell keeper${p.tentative ? ' tentative' : ''}"><span class="dname">${e(p.name)} 🔒</span><small>${e(p.pos || '')} ${e(p.nfl || '')}${p.tentative ? ' · vorläufig' : ''}</small></div></td>`;
          } else if (owner) {
            cells[col] = `<td><div class="dcell traded"><span class="dname">${e((tByName[owner] || {}).emoji || '')} ${e(owner)}</span><small>via ${e(team)} · ${pickNo(r, col)}</small></div></td>`;
          } else {
            cells[col] = `<td><div class="dcell open"><span class="dname">Own</span><small>${pickNo(r, col)}</small></div></td>`;
          }
        });
      }
      body += `<tr>${row}${cells.join('')}</tr>`;
    }

    const info = d.hasResults
      ? `Draft ${d.season} abgeschlossen${d.date ? ` (${fmtDay(d.date)})` : ''} · ${d.rounds} Runden · ${n} Teams · ${d.type === 'snake' ? 'Snake' : 'Linear'}<span class="explain">Spalten = ursprünglicher Slot, getradete Picks zeigen das tatsächlich pickende Team.</span>`
      : `Draft ${d.season} noch nicht gelaufen · ${d.rounds} Runden · ${n} Teams<span class="explain">„Own“ = Team hält den Pick selbst${league.keepers ? ', Keeper füllen die letzten Runden' : ''}.</span>`;

    return `
      <div class="page-head">
        <h1 class="page-title display">📋 Draft Board ${e(d.season || '')}</h1>
        <div class="page-sub">${info}</div>
      </div>
      <div class="legend">
        <span><i class="sw traded"></i> Getradeter Pick</span>
        ${league.keepers ? '<span><i class="sw keeper"></i> Keeper</span>' : ''}
      </div>
      <div class="table-wrap draft-wrap"><table class="table draft"><thead>${head}</thead><tbody>${body}</tbody></table></div>`;
  }

  // ---------- Keeper-Übersicht ----------
  function keepersPage(ctx) {
    const { data, ui, href } = ctx;
    const e = ui.esc;
    const d = normalize(data);
    const tByName = byName(data.LEAGUE_TEAMS);
    if (!d.teams.length) return ui.empty('Keine Keeper-Daten', '', '🔒');
    return `
      <div class="page-head">
        <h1 class="page-title display">🔒 Keeper-Übersicht</h1>
        <div class="page-sub">Draft ${e(d.season || '')}${d.maxKeepers ? ` · max. ${d.maxKeepers} Keeper pro Team` : ''}${d.keeperLock ? ` · Keeper Lock: ${fmtDay(d.keeperLock)}` : ''}<span class="explain"> · Keeper belegen die letzten Runden</span></div>
      </div>
      <div class="team-grid keeper-grid">
        ${d.teams.map(dt => {
          const t = tByName[dt.team] || {};
          const ks = dt.keepers || [];
          const start = d.rounds - ks.length + 1;
          return `<div class="card keeper-card">
            <div class="card-head"><a class="team-cell" href="${t.id ? href('teams', t.id) : '#'}"><span class="team-emoji">${e(t.emoji || '🏈')}</span><span><span class="team-name">${e(dt.team)}</span>${t.owner ? `<span class="team-owner">${e(t.owner)}</span>` : ''}</span></a>
              <span class="keeper-count">${ks.length}${d.maxKeepers ? '/' + d.maxKeepers : ''}</span></div>
            ${ks.length ? ks.map((p, i) => `<div class="keeper-row${p.tentative ? ' tentative' : ''}">
              <span class="keeper-round">R${start + i}</span>
              <span class="keeper-name">${e(p.name)}${p.tentative ? ' <small>vorläufig</small>' : ''}</span>
              <span class="keeper-meta"><span class="pos pos-${e(String(p.pos || '').replace(/[^A-Z]/gi, ''))}">${e(p.pos || '')}</span> ${e(p.nfl || '')}${p.status ? ` <span class="status-tag">${e(p.status)}</span>` : ''}</span>
            </div>`).join('') : '<div class="keeper-row muted">Keine Keeper</div>'}
          </div>`;
        }).join('')}
      </div>`;
  }

  // ---------- Future Draft Boards ----------
  function futurePage(ctx) {
    const { data, ui, params, href, league } = ctx;
    const e = ui.esc;
    const d = normalize(data);
    const years = Object.keys(d.future).map(Number).sort((a, b) => a - b);
    if (!years.length) return ui.empty('Keine Zukunfts-Picks', 'Sobald Picks künftiger Jahre bekannt sind, erscheinen sie hier.', '🔮');
    const year = years.includes(Number(params[0])) ? Number(params[0]) : years[0];
    const rounds = futureRounds(league, d);
    const teams = data.LEAGUE_TEAMS || [];
    const tByName = byName(teams);
    const owner = {};
    (d.future[year] || []).forEach(p => { owner[`${p.from}|${p.round}`] = p.owner; });

    const overview = teams.map(t => {
      const cells = years.map(y => {
        const n = picksHeld(d, teams, t.name, y, rounds).length, diff = n - rounds.length;
        return `<td class="num"><b>${n}</b>${diff ? ` <span class="${diff > 0 ? 'up' : 'down'}">${diff > 0 ? '+' : ''}${diff}</span>` : ''}</td>`;
      }).join('');
      return `<tr><td><span class="team-cell"><span class="team-emoji">${e(t.emoji || '')}</span><span class="team-name">${e(t.name)}</span></span></td>${cells}</tr>`;
    }).join('');

    const head = `<tr><th class="round-col">Rd.</th>${teams.map(t => `<th class="draft-col"><span class="draft-head">${e(t.emoji || '')} ${e(t.name)}</span></th>`).join('')}</tr>`;
    const body = rounds.map(r => `<tr><th class="round-col">${r}</th>${teams.map(t => {
      const o = owner[`${t.name}|${r}`];
      return o
        ? `<td><div class="dcell traded"><span class="dname">${e((tByName[o] || {}).emoji || '')} ${e(o)}</span><small>via ${e(t.name)}</small></div></td>`
        : `<td><div class="dcell open"><span class="dname">Own</span></div></td>`;
    }).join('')}</tr>`).join('');

    return `
      <div class="page-head">
        <h1 class="page-title display">🔮 Future Draft Boards</h1>
        <div class="page-sub"><span class="explain">Wer hält welche Picks künftiger Drafts</span> · Runden ${rounds[0]}–${rounds[rounds.length - 1]}</div>
      </div>
      <h2 class="group-title">Picks pro Team <span>Baseline ${rounds.length} pro Jahr</span></h2>
      <div class="table-wrap"><table class="table compact">
        <thead><tr><th>Team</th>${years.map(y => `<th class="num"><a href="${href('futurepicks', y)}">${y}</a></th>`).join('')}</tr></thead>
        <tbody>${overview}</tbody>
      </table></div>
      <h2 class="group-title">Board</h2>
      <div class="week-picker" role="tablist" aria-label="Jahr">
        ${years.map(y => `<a role="tab" class="week-btn done${y === year ? ' active' : ''}" aria-selected="${y === year}" href="${href('futurepicks', y)}">${y}</a>`).join('')}
      </div>
      <div class="table-wrap draft-wrap"><table class="table draft compact-board"><thead>${head}</thead><tbody>${body}</tbody></table></div>`;
  }

  const DATA = ['teams', 'draft', 'trades'];
  MFHFB.pages.register({ id: 'draftboard', section: 'draft', label: 'Draft Board', icon: '📋', applies: { sport: ['nfl'] }, data: DATA, render: draftboard });
  MFHFB.pages.register({ id: 'keepers', section: 'draft', label: 'Keeper', icon: '🔒', applies: { sport: ['nfl'], keepers: [true] }, data: DATA, render: keepersPage });
  MFHFB.pages.register({
    id: 'futurepicks', section: 'draft', label: 'Future Picks', icon: '🔮', applies: { sport: ['nfl'] }, data: DATA,
    title: ({ params }) => params[0] ? `Future Picks ${params[0]}` : 'Future Picks', render: futurePage,
  });
})();
