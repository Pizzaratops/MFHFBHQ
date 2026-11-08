// ============================================================
//  Tools (NBA, Fantrax World Cup — Division Seattle): Tabelle + Spielplan (seit 08.11.2026)
// ============================================================
//  #/worldcup/wctable               Tabelle der Division (Kategorien W-L-T, wie Fantrax
//                                   wertet) + Rang in der ganzen Conference West
//  #/worldcup/wcschedule[/<id>]     Spielplan: 14 Perioden, Division-Matchups
//
//  Daten (leagues/worldcup/data, aus Fantrax: leagues/worldcup/scripts/sync-fantrax.js):
//   TEAMS, ROSTERS_LIVE, TEAM_RECORDS_LIVE (records, standings mit confRank), WC_SCHEDULE
//  Übersicht, Kader, Waiver, Spieler, Projections, Live Scores usw. kommen aus den
//  allgemeinen NBA-Tools (gleiches Datenformat wie TTHQ/Funkytown).
// ============================================================

(function () {
  const N = () => MFHFB.nba;
  const A = { sport: ['nba'] };
  const WHEN = l => l.key === 'worldcup';
  const fmtD = s => (s ? s.slice(8, 10) + '.' + s.slice(5, 7) + '.' : '');
  const today = () => new Date().toISOString().slice(0, 10);
  const teamById = data => { const m = {}; (data.TEAMS || []).forEach(t => { m[t.id] = t; }); return m; };
  function currentPeriod(data) {
    const P = (data.WC_SCHEDULE && data.WC_SCHEDULE.periods) || [];
    const t = today();
    return P.find(p => p.start <= t && t <= p.end) || P.find(p => p.start > t) || P[P.length - 1] || null;
  }
  const tLink = (ctx, t, strong) => {
    const e = ctx.ui.esc, nba = N();
    return t ? `<a class="nba-tlink mp-tc${strong ? ' strong' : ''}" style="${nba.tcStyle(t)}" href="${ctx.href('teams', t.id)}"><span class="nba-tdot"></span>${e(t.name)}</a>` : '?';
  };
  const syncInfo = data => {
    const s = data.FANTRAX_SYNC || {};
    return s.at ? `Fantrax-Stand ${new Date(s.at).toLocaleString('de-DE', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })}` : '';
  };

  function table(ctx) {
    const { data, ui, league } = ctx, e = ui.esc;
    N().init(data);
    const R = data.TEAM_RECORDS_LIVE || {}, S = R.standings || [];
    if (!S.length) return ui.empty('Noch keine Tabelle', 'Der Fantrax-Sync ist noch nicht gelaufen.', '🏆');
    const byId = teamById(data), cur = currentPeriod(data), sch = data.WC_SCHEDULE || {};
    const opp = id => { const m = cur && cur.matchups.find(x => x.includes(id)); return m ? byId[m[0] === id ? m[1] : m[0]] : null; };
    const me = league.myTeam;
    return `<div class="page-head"><h1 class="page-title display">🏆 Tabelle</h1>
        <div class="page-sub">${e((data.FANTRAX_SYNC || {}).leagueName || 'FBI World Cup')} · Division ${e((data.FANTRAX_SYNC || {}).division || '')} · 9-Cat H2H: jede Kategorie zählt als Sieg${sch.lastRegular ? ` · Hauptrunde bis Woche ${sch.lastRegular}` : ''} · ${syncInfo(data)}</div></div>
      <div class="table-wrap"><table class="table compact"><thead><tr><th class="num">#</th><th>Team</th><th class="num" title="Kategorien gewonnen-verloren-unentschieden">Kategorien</th><th class="num">Quote</th><th class="num" title="Rückstand auf Platz 1 (in Kategorien)">GB</th>
        <th class="num" title="Rang unter allen ${R.confTeams || 144} Teams der Conference West">Conference</th><th>Diese Woche gegen</th></tr></thead>
      <tbody>${S.map(s => { const t = byId[s.id]; return `<tr${s.id === me ? ' class="mine"' : ''}><td class="num rank">${s.rank}</td><td>${tLink(ctx, t, s.id === me)}</td>
        <td class="num strong">${s.w}-${s.l}${s.t ? '-' + s.t : ''}</td><td class="num">${s.pct.toFixed(3).replace(/^0/, '')}</td><td class="num">${s.gb ? s.gb.toFixed(1).replace('.0', '') : '–'}</td>
        <td class="num">${s.confRank}.</td><td>${opp(s.id) ? tLink(ctx, opp(s.id)) : '<span class="muted">—</span>'}</td></tr>`; }).join('')}</tbody></table></div>
      ${sch.playoffTeams ? `<p class="muted small explain">Playoffs laut Fantrax: ${sch.playoffTeams} Teams, ab Woche ${(sch.lastRegular || 0) + 1}. Wie die Plätze zwischen Division und Conference verteilt werden, liefert die Schnittstelle nicht.</p>` : ''}`;
  }

  function schedule(ctx) {
    const { data, href, ui, params, league } = ctx, e = ui.esc;
    N().init(data);
    const P = (data.WC_SCHEDULE && data.WC_SCHEDULE.periods) || [];
    if (!P.length) return ui.empty('Kein Spielplan', 'Fantrax-Sync noch nicht gelaufen.', '📅');
    const byId = teamById(data), me = league.myTeam, focus = Number(params[0]) || null, cur = currentPeriod(data);
    const teams = N().leagueTeams(data, true);
    const card = p => {
      const ms = focus ? p.matchups.filter(m => m.includes(focus)) : p.matchups;
      return `<div class="card cbb-week${cur && p.n === cur.n ? ' now' : ''}"><div class="card-head"><h2>Woche ${p.n}${p.playoff ? ' · 🏆 Playoffs' : ''}</h2><span class="muted small">${fmtD(p.start)}–${fmtD(p.end)}</span></div>
        <div class="cbb-mgrid">${ms.map(m => `<div class="cbb-m${m.includes(me) ? ' mine' : ''}">${tLink(ctx, byId[m[0]], focus === m[0])}<span class="muted">@</span>${tLink(ctx, byId[m[1]], focus === m[1])}</div>`).join('') || '<span class="muted small">Playoff-Paarungen stehen noch nicht fest</span>'}</div></div>`;
    };
    return `<div class="page-head"><h1 class="page-title display">📅 Spielplan</h1>
        <div class="page-sub">${P.length} Wochen · ein Matchup pro Woche innerhalb der Division${data.WC_SCHEDULE.lastRegular ? ` · Hauptrunde bis Woche ${data.WC_SCHEDULE.lastRegular}` : ''}</div></div>
      <div class="chip-row"><a class="chip-link${!focus ? ' active' : ''}" href="${href('wcschedule')}">Alle</a>${teams.map(t => `<a class="chip-link${focus === t.id ? ' active' : ''}" href="${href('wcschedule', t.id)}" title="${e(t.name)}" style="${N().tcStyle(t)}"><span class="nba-chipav">${e(N().initials(t.name))}</span></a>`).join('')}</div>
      <div class="cbb-weeks">${P.map(card).join('')}</div>`;
  }

  const D = ['teams', '?rosters-live', '?fantasy-schedule'];
  MFHFB.pages.register({ id: 'wctable', section: 'standings', label: 'Tabelle', icon: '🏆', applies: A, when: WHEN, data: D, render: table });
  MFHFB.pages.register({ id: 'wcschedule', section: 'matchups', label: 'Spielplan', icon: '📅', applies: A, when: WHEN, data: D, render: schedule });
})();
