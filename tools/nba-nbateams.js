// ============================================================
//  Tool (NBA): NBA-Teams — Power Rankings + Teamseite
// ============================================================
//  #/<liga>/nbateams                      Power Rankings (Liga/Conf./Div.)
//  #/<liga>/nbateams/<ABBR>               Teamseite
//
//  Port von js/nba-power-rankings.js, js/nba-power-score.js und
//  js/nba-teams.js (TTHQ; Funkytown nur Teamseite). Daten sport-weit:
//  - NBA_POWER_RANKINGS (Bilanz, Off/Def-Rating je Matchup-Woche)
//  - NBA_POWER_SCORE    (6 Kategorien, kumuliert + nur diese Woche)
//  Beide füllen sich erst nach der ersten abgeschlossenen Matchup-Woche.
//  Spielerliste: Dynasty-Rang (DYNASTY_PLAYERS, TTHQ) bzw. Projections-
//  Rang (PLAYER_DB + LIVE_PROJECTIONS, Funkytown), plus alle Kader-
//  spieler dieses NBA-Teams mit Fantasy-Besitzer.
// ============================================================

(function () {
  const N = () => MFHFB.nba;
  const FULL = {
    ATL: 'Atlanta Hawks', BOS: 'Boston Celtics', BKN: 'Brooklyn Nets', CHA: 'Charlotte Hornets', CHI: 'Chicago Bulls', CLE: 'Cleveland Cavaliers',
    DAL: 'Dallas Mavericks', DEN: 'Denver Nuggets', DET: 'Detroit Pistons', GSW: 'Golden State Warriors', HOU: 'Houston Rockets', IND: 'Indiana Pacers',
    LAC: 'LA Clippers', LAL: 'LA Lakers', MEM: 'Memphis Grizzlies', MIA: 'Miami Heat', MIL: 'Milwaukee Bucks', MIN: 'Minnesota Timberwolves',
    NOR: 'New Orleans Pelicans', NYK: 'New York Knicks', OKC: 'Oklahoma City Thunder', ORL: 'Orlando Magic', PHI: 'Philadelphia 76ers',
    PHO: 'Phoenix Suns', POR: 'Portland Trail Blazers', SAC: 'Sacramento Kings', SAS: 'San Antonio Spurs', TOR: 'Toronto Raptors', UTA: 'Utah Jazz',
    WAS: 'Washington Wizards', FA: 'Free Agents',
  };
  const full = a => FULL[a] || N().teamName(a) || a;

  // ---------- Power Rankings ----------
  const prWeeks = d => (d.NBA_POWER_RANKINGS && d.NBA_POWER_RANKINGS.weeks) || [];
  const psWeeks = d => (d.NBA_POWER_SCORE && d.NBA_POWER_SCORE.weeks) || [];
  const defaults = { view: 'league', sort: 'record', week: null, scope: 'cumulative' };
  const getState = ctx => ({ ...defaults, ...ctx.store.getJSON('nbapr', {}) });
  const sortFns = {
    record: (a, b) => b.winPct - a.winPct || b.wins - a.wins || (b.net ?? -99) - (a.net ?? -99),
    off: (a, b) => (b.off ?? -1) - (a.off ?? -1),
    def: (a, b) => (a.def ?? 999) - (b.def ?? 999),
  };

  function prTable(ctx, teams, st) {
    const e = ctx.ui.esc, nba = N();
    const rows = teams.slice().sort(sortFns[st.sort] || sortFns.record);
    return `<div class="table-wrap"><table class="table compact"><thead><tr><th class="num">#</th><th>Team</th><th class="num">W-L</th><th class="num">Quote</th><th class="num" title="Offensive Rating (Punkte je 100 Ballbesitze)">Off</th><th class="num" title="Defensive Rating, weniger = besser">Def</th><th class="num">Net</th></tr></thead>
      <tbody>${rows.map((t, i) => { const a = nba.canonTeam(t.abbr); return `<tr>
        <td class="num rank">${i + 1}</td><td><a class="nba-team-link strong" href="${ctx.href('nbateams', a)}">${e(a)}</a> <span class="muted">${e(full(a))}</span></td>
        <td class="num strong">${t.wins}-${t.losses}</td><td class="num">${t.winPct.toFixed(3).replace(/^0/, '')}</td>
        <td class="num">${t.off ?? '—'}<small class="muted"> ${t.rank && t.rank.off ? '#' + t.rank.off : ''}</small></td>
        <td class="num">${t.def ?? '—'}<small class="muted"> ${t.rank && t.rank.def ? '#' + t.rank.def : ''}</small></td>
        <td class="num ${t.net > 0 ? 'up' : t.net < 0 ? 'down' : ''}">${t.net == null ? '—' : (t.net > 0 ? '+' : '') + t.net}</td></tr>`; }).join('')}</tbody></table></div>`;
  }

  function indexPage(ctx) {
    const { data, ui } = ctx, e = ui.esc, nba = N();
    const W = prWeeks(data);
    const st = getState(ctx);
    const head = `<div class="page-head"><h1 class="page-title display">🏀 NBA Power Rankings</h1>
      <div class="page-sub explain">Bilanz, Offensive und Defensive Rating je Matchup-Woche · automatisch aus den NBA-Boxscores</div></div>`;
    const grid = `<h2 class="group-title">Alle Teams</h2><div class="nba-abbr-grid">${nba.NBA_ABBRS.map(a => `<a class="nba-abbr" href="${ctx.href('nbateams', a)}"><strong>${a}</strong><small>${e(full(a))}</small></a>`).join('')}</div>`;
    if (!W.length) return `${head}${ui.empty('Noch keine Power Rankings', 'Die Tabelle füllt sich nach der ersten abgeschlossenen Matchup-Woche der neuen Saison.', '🏀')}${grid}`;
    const wi = st.week != null && st.week < W.length ? st.week : W.length - 1;
    const week = W[wi];
    let body;
    if (st.view === 'league') body = prTable(ctx, week.teams, st);
    else {
      const key = st.view === 'conference' ? 'conference' : 'division';
      const groups = [...new Set(week.teams.map(t => t[key]))].sort();
      body = groups.map(g => `<h3 class="group-title">${e(g)}</h3>${prTable(ctx, week.teams.filter(t => t[key] === g), st)}`).join('');
    }
    return `${head}
      <div class="controls">
        <div class="seg" role="group">${[['league', 'Liga'], ['conference', 'Conference'], ['division', 'Division']].map(([k, l]) => `<button type="button" class="seg-btn${st.view === k ? ' active' : ''}" data-view="${k}">${l}</button>`).join('')}</div>
        <div class="seg" role="group">${[['record', 'Bilanz'], ['off', 'Offense'], ['def', 'Defense']].map(([k, l]) => `<button type="button" class="seg-btn${st.sort === k ? ' active' : ''}" data-sort="${k}">${l}</button>`).join('')}</div>
        <select class="tr-select" data-week aria-label="Woche">${W.map((w, i) => `<option value="${i}"${i === wi ? ' selected' : ''}>${e(w.label)} (bis ${e(w.throughDate)})</option>`).join('')}</select>
      </div>${body}${grid}`;
  }

  // ---------- Teamseite ----------
  function players(ctx, abbr) {
    const d = ctx.data, nba = N();
    const owner = nba.ownerIndex(d);
    const out = new Map();
    const add = (name, pos, rank, rankLabel) => { const k = nba.key(name); if (!out.has(k)) out.set(k, { name, pos, rank, rankLabel, owner: owner(name) }); };
    if (Array.isArray(d.DYNASTY_PLAYERS)) {
      d.DYNASTY_PLAYERS.filter(p => nba.canonTeam(p[2]) === abbr).forEach(p => add(p[1], p[3], p[0], 'Dynasty'));
    } else if (Array.isArray(d.PLAYER_DB)) {
      const proj = nba.projRanks(d);
      d.PLAYER_DB.filter(p => nba.canonTeam(p[1]) === abbr).forEach(p => add(p[0], p[2] || '?', proj ? proj(p[0]) : null, 'Proj.'));
    }
    // Kaderspieler dieses NBA-Teams, die in keiner Rangliste stehen
    nba.leagueTeams(d, true).forEach(t => nba.roster(d, t.id).forEach(p => { if (nba.canonTeam(p.team) === abbr) add(p.name, p.pos, null, ''); }));
    return [...out.values()].sort((a, b) => (a.rank ?? 9999) - (b.rank ?? 9999) || a.name.localeCompare(b.name));
  }

  function teamPage(ctx, abbr) {
    const { data, ui } = ctx, e = ui.esc, nba = N();
    nba.init(data);
    const st = getState(ctx);
    const W = prWeeks(data), PS = psWeeks(data);
    const pr = W.length ? W[W.length - 1].teams.find(t => nba.canonTeam(t.abbr) === abbr) : null;
    const list = players(ctx, abbr);
    const rankLabel = Array.isArray(data.DYNASTY_PLAYERS) ? 'Dynasty-Rang' : 'Projections-Rang 26/27';

    let power = '';
    if (pr) {
      power = `<div class="nba-kpis">
        <div class="card nba-kpi"><small>Bilanz</small><strong>${pr.wins}-${pr.losses}</strong><span>#${pr.rank.league} NBA · #${pr.rank.conference} ${e(pr.conference)} · #${pr.rank.division} ${e(pr.division)}</span></div>
        <div class="card nba-kpi"><small>Offense</small><strong>${pr.off ?? '—'}</strong><span>${pr.rank.off ? '#' + pr.rank.off + ' der NBA' : ''}</span></div>
        <div class="card nba-kpi"><small>Defense</small><strong>${pr.def ?? '—'}</strong><span>${pr.rank.def ? '#' + pr.rank.def + ' der NBA' : ''}</span></div>
        <div class="card nba-kpi"><small>Net Rating</small><strong class="${pr.net > 0 ? 'up' : pr.net < 0 ? 'down' : ''}">${pr.net == null ? '—' : (pr.net > 0 ? '+' : '') + pr.net}</strong><span>${e(W[W.length - 1].label)}</span></div></div>`;
      const hist = W.map(w => ({ w, t: w.teams.find(t => nba.canonTeam(t.abbr) === abbr) })).filter(x => x.t);
      if (hist.length > 1) {
        power += `<h2 class="group-title">Verlauf</h2><div class="table-wrap"><table class="table compact"><thead><tr><th>Woche</th><th class="num">W-L</th><th class="num">NBA</th><th class="num">Conf.</th><th class="num">Off-Rang</th><th class="num">Def-Rang</th></tr></thead><tbody>
          ${hist.slice().reverse().map(({ w, t }) => `<tr><td>${e(w.label)}</td><td class="num">${t.wins}-${t.losses}</td><td class="num strong">${t.rank.league ?? '—'}</td><td class="num">${t.rank.conference ?? '—'}</td><td class="num">${t.rank.off ?? '—'}</td><td class="num">${t.rank.def ?? '—'}</td></tr>`).join('')}</tbody></table></div>`;
      }
    }
    let radar = '';
    const cats = (data.NBA_POWER_SCORE && data.NBA_POWER_SCORE.categories) || [];
    if (PS.length && cats.length) {
      const wk = PS[PS.length - 1];
      const rows = wk[st.scope] || wk.cumulative || [];
      const me = rows.find(t => nba.canonTeam(t.abbr) === abbr);
      if (me && me.rank) {
        const n = rows.length || 30;
        radar = `<h2 class="group-title">Power Score <small class="muted">(${e(wk.label)})</small></h2>
          <div class="controls"><div class="seg" role="group">${[['cumulative', 'Saison kumuliert'], ['isolated', 'Nur diese Woche']].map(([k, l]) => `<button type="button" class="seg-btn${st.scope === k ? ' active' : ''}" data-scope="${k}">${l}</button>`).join('')}</div></div>
          <div class="card nba-ps">${MFHFB.charts.radar({ axes: cats.map(c => ({ label: c.label })), series: [{ name: abbr, vals: cats.map(c => (me.rank[c.key] ? (n + 1 - me.rank[c.key]) / n : null)), tips: cats.map(c => `${c.label}: ${me.values[c.key]} (#${me.rank[c.key]})`) }], size: 280, label: 'Power Score' })}
            <div class="table-wrap"><table class="table compact"><tbody>${cats.map(c => `<tr><td>${e(c.label)}${c.lowerIsBetter ? ' <small class="muted">(weniger = besser)</small>' : ''}</td><td class="num strong">${me.values[c.key]}</td><td class="num">#${me.rank[c.key]}</td></tr>`).join('')}</tbody></table></div></div>`;
      }
    }
    return `<div class="nba-team-hero"><div class="nba-team-abbr">${e(abbr)}</div><div><h1 class="page-title display">${e(full(abbr))}</h1>
        <div class="page-sub">${list.length} Spieler · sortiert nach ${rankLabel} · <a href="${ctx.href('nbateams')}">← alle NBA-Teams</a></div></div></div>
      ${power}${radar}
      <h2 class="group-title">Spieler</h2>
      ${list.length ? `<div class="table-wrap"><table class="table compact"><thead><tr><th class="num">Rang</th><th>Spieler</th><th>Pos</th><th>Fantasy-Team</th></tr></thead><tbody>
        ${list.map(p => `<tr><td class="num">${nba.rankBadge(p.rank)}</td><td class="strong">${e(p.name)}</td><td class="muted">${e(String(p.pos || '').split(/[\/,]/)[0])}</td>
          <td>${p.owner ? `<a class="nba-tlink mp-tc" style="${nba.tcStyle(p.owner)}" href="${ctx.href('teams', p.owner.id)}"><span class="nba-tdot"></span>${e(p.owner.name)}</a>` : '<span class="nba-tag fa">frei</span>'}</td></tr>`).join('')}
      </tbody></table></div>` : ui.empty('Keine Spieler', 'Für dieses Team sind keine Spieler hinterlegt.', '🏀')}`;
  }

  function render(ctx) {
    N().init(ctx.data);
    const a = ctx.params[0] ? N().canonTeam(ctx.params[0]) : null;
    return a ? teamPage(ctx, a) : indexPage(ctx);
  }

  function mount(root, ctx) {
    const save = patch => { ctx.store.setJSON('nbapr', { ...getState(ctx), ...patch }); ctx.refresh(); };
    root.querySelectorAll('[data-view]').forEach(b => b.addEventListener('click', () => save({ view: b.dataset.view })));
    root.querySelectorAll('[data-sort]').forEach(b => b.addEventListener('click', () => save({ sort: b.dataset.sort })));
    root.querySelectorAll('[data-scope]').forEach(b => b.addEventListener('click', () => save({ scope: b.dataset.scope })));
    const wk = root.querySelector('[data-week]');
    if (wk) wk.addEventListener('change', () => save({ week: parseInt(wk.value, 10) }));
  }

  MFHFB.pages.register({
    id: 'nbateams', section: 'nba', label: 'NBA-Teams', icon: '🏀', applies: { sport: ['nba'] },
    data: ['teams', '?rosters-live', '?sport:aliases', '?rankings', '?players', '?live-projections', '?sport:nba-power-rankings', '?sport:nba-power-score'],
    title: ctx => (ctx.params[0] ? full(N().canonTeam(ctx.params[0])) : 'NBA Power Rankings'), render, mount,
  });
})();
