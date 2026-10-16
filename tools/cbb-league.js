// ============================================================
//  Tools (College Basketball, Dizzle CBB Dynasty): Übersicht, Teams & Kader,
//  Tabelle, Spielplan  (seit 16.10.2026)
// ============================================================
//  #/cbb                    Übersicht: Saisonstart-Countdown, diese Woche, Team-Karten
//  #/cbb/teams/<id>         Kader (Aktiv nach Fantrax-Slot, Reserve, IR) + Stats/Ränge
//  #/cbb/standings          Tabelle (Fantrax)
//  #/cbb/cbbschedule[/<id>] Spielplan: 17 Perioden, je Woche zwei Matchups
//
//  Daten (leagues/cbb/data, stündlich aus Fantrax: leagues/cbb/scripts/sync-fantrax.js):
//   TEAMS, ROSTERS_LIVE (slot/status/elig), TEAM_RECORDS_LIVE, CBB_SCHEDULE,
//   BEST_AVAILABLE_BOARD (Ränge, Vorsaison, NIL-Wert), CBB_TEAM_STRENGTH, CBB_LIVE (NIL-Preise)
//  Gemeinsame Bausteine aus sports/nba/nba.js (Teams, Kader, Farben, Namens-Schlüssel).
// ============================================================

(function () {
  const N = () => MFHFB.nba;
  const A = { sport: ['cbb'] };
  const MY_OWNER = 'MFHFB'; // Beyaz' Team (Fighting Illini) — für die Hervorhebung
  const SLOT_ORDER = ['G', 'F/C', 'Flx'];
  const fmtD = s => (s ? s.slice(8, 10) + '.' + s.slice(5, 7) + '.' : '');
  const today = () => new Date().toISOString().slice(0, 10);
  const myTeam = data => (data.TEAMS || []).find(t => t.owner === MY_OWNER) || null;

  // aktuelle bzw. nächste Periode
  function currentPeriod(data) {
    const P = (data.CBB_SCHEDULE && data.CBB_SCHEDULE.periods) || [];
    const t = today();
    return P.find(p => p.start <= t && t <= p.end) || P.find(p => p.start > t) || P[P.length - 1] || null;
  }
  const teamById = data => { const m = {}; (data.TEAMS || []).forEach(t => { m[t.id] = t; }); return m; };
  const tLink = (ctx, t, mine) => {
    const e = ctx.ui.esc, nba = N();
    return t ? `<a class="nba-tlink mp-tc${mine ? ' strong' : ''}" style="${nba.tcStyle(t)}" href="${ctx.href('teams', t.id)}"><span class="nba-tdot"></span>${e(t.name)}</a>` : '?';
  };

  // Board-Index: Name → Board-Zeile (Rang, Vorsaison, Klasse, NIL-Wert …)
  function boardIndex(data) {
    const nba = N(), m = new Map();
    (data.BEST_AVAILABLE_BOARD || []).forEach(p => m.set(nba.key(p.name), p));
    return name => m.get(nba.key(name)) || null;
  }
  function nilPrices(data) {
    const nba = N(), m = new Map();
    ((data.CBB_LIVE && data.CBB_LIVE.signed) || []).forEach(s => m.set(nba.key(s.name), s));
    return name => m.get(nba.key(name)) || null;
  }

  // ---------- Übersicht ----------
  function home(ctx) {
    const { league, data, href, ui } = ctx;
    const e = ui.esc, nba = N().init(data);
    const teams = nba.leagueTeams(data, true);
    const S = data.CBB_TEAM_STRENGTH || {};
    const me = myTeam(data), byId = teamById(data);
    const cur = currentPeriod(data);
    const sync = data.FANTRAX_SYNC || {};
    const start = sync.start ? new Date(sync.start + 'T14:30:00Z') : null; // 09:30 US-Ostküste
    const set = data.ROSTER_SETTINGS || {};
    const counts = t => { const r = nba.roster(data, t.id); return { all: r.length, a: r.filter(p => p.status === 'A').length, ir: r.filter(p => p.status === 'IR').length }; };
    const thin = teams.filter(t => counts(t).all < 20);
    const card = t => {
      const c = counts(t), s = S[t.id];
      const tier = s && s.place ? (s.place <= 3 ? 't1' : s.place <= 6 ? 't2' : s.place <= 10 ? 't3' : 't5') : '';
      return `<a class="nba-tcard${me && t.id === me.id ? ' mine' : ''}" href="${href('teams', t.id)}" style="${nba.tcStyle(t)}">
        <span class="nba-tc-top"><span class="nba-avatar">${e(nba.initials(t.name))}</span>
          <span class="nba-tc-name"><b>${e(t.name)}</b><small>${e(t.owner || '')}</small></span></span>
        <span class="nba-tc-foot"><span class="nba-rec">📊 ${e(nba.record(data, t))}</span><span class="muted small" title="Kader: aktiv / gesamt (max. ${set.maxTotalPlayers || 40})">Kader ${c.all}</span>
          ${s && s.top12 ? `<span class="nba-str" title="Ø Board-Rang der 12 besten Spieler (Saison, Vorsaison und NIL-Wert gemischt) — Platz ${s.place} von ${teams.length}"><small>Ø Top-12</small><span class="nba-rk ${tier}">#${s.top12}</span></span>` : ''}</span></a>`;
    };
    const mList = cur ? cur.matchups : [];
    const myGames = me && cur ? mList.filter(m => m.includes(me.id)) : [];
    return `
      <div class="page-head">
        <h1 class="page-title display">${e(league.emoji)} ${e(league.name)}</h1>
        <div class="page-sub">Fantrax · Dynasty · 9-Cat H2H · ${teams.length} Teams · je Woche zwei Matchups${set.maxTotalPlayers ? ` · Kader ${set.maxTotalPlayers} (${set.maxTotalActivePlayers} aktiv)` : ''}${sync.at ? ` · Fantrax-Stand ${new Date(sync.at).toLocaleString('de-DE', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })}` : ''}</div>
      </div>
      ${start && MFHFB.ui.countdowns ? MFHFB.ui.countdowns([{ label: '🏀 Saisonstart (Woche 1)', at: start }]) : ''}
      ${thin.length ? `<div class="note">📝 Noch nicht komplett in Fantrax eingetragen (unter 20 Spieler): ${thin.map(t => `<b>${e(t.name)}</b> (${counts(t).all})`).join(', ')}. Die Seite gleicht sich stündlich ab.</div>` : ''}
      ${cur ? `<div class="card cbb-week"><div class="card-head"><h2>⚔️ ${cur.start > today() ? 'Nächste' : 'Diese'} Woche ${cur.n}${cur.playoff ? ' · Playoffs' : ''}</h2><span class="muted small">${fmtD(cur.start)}–${fmtD(cur.end)}</span></div>
        ${myGames.length ? `<div class="cbb-mine">Deine Gegner: ${myGames.map(m => tLink(ctx, byId[m[0] === me.id ? m[1] : m[0]])).join(' und ')}</div>` : ''}
        <div class="cbb-mgrid">${mList.map(m => `<div class="cbb-m${me && m.includes(me.id) ? ' mine' : ''}">${tLink(ctx, byId[m[0]])}<span class="muted">@</span>${tLink(ctx, byId[m[1]])}</div>`).join('')}</div>
        <div class="small muted" style="padding:6px 14px 12px"><a href="${href('cbbschedule')}">Ganzer Spielplan →</a></div></div>` : ''}
      <div class="nba-grid">${teams.map(card).join('')}</div>`;
  }

  // ---------- Team-Kader ----------
  function teamPage(ctx) {
    const { data, href, ui, params } = ctx;
    const e = ui.esc, nba = N().init(data);
    const teams = nba.leagueTeams(data, true);
    const tid = Number(params[0]) || (myTeam(data) || teams[0] || {}).id;
    const t = teams.find(x => x.id === tid);
    if (!t) return ui.empty('Team nicht gefunden', '', '🧍');
    const board = boardIndex(data), nil = nilPrices(data);
    const list = nba.roster(data, tid);
    const row = p => {
      const b = board(p.name) || {}, n = nil(p.name);
      const cur = b.zSeason != null;
      return `<tr>
        <td class="pos-col"><span class="pos nba-pos">${e(p.status === 'A' ? p.slot : p.status === 'IR' ? 'IR' : 'Res')}</span></td>
        <td class="strong">${e(p.name)}${b.cls ? ` <span class="nba-age" title="Klasse">${e(b.cls)}</span>` : ''}${nba.injury(p.inj)}${b.gone ? ' <span class="nba-inj out" title="Letzte Saison Senior/Graduate an dieser Schule und nicht mehr im ESPN-Kader — Spielberechtigung vermutlich vorbei">WEG?</span>' : ''}</td>
        <td title="${e(p.elig || '')}">${e(p.team || '')} <small class="muted">${e(p.pos || '')}</small></td>
        <td class="num">${n ? `<b>$${n.price}</b>` : b.nilValue != null ? `<span class="muted" title="geschätzter NIL-Wert">~$${b.nilValue}</span>` : '<span class="muted">—</span>'}</td>
        <td class="num">${nba.rankBadge(b.lastSeasonRank || null, 'Rang Vorsaison 2025-26 (9-Cat pro Spiel, ganze D-I)')}</td>
        <td class="num">${cur ? `<span class="ls-comp ${b.zSeason >= 0 ? 'up' : 'down'}" title="${b.gamesSeason} Spiele">${b.zSeason >= 0 ? '+' : ''}${b.zSeason.toFixed(1)}</span>` : '<span class="muted">—</span>'}</td>
        <td class="num">${nba.rankBadge(b.rank || null, 'Gesamt-Rang im Board (Saison, Vorsaison, NIL-Wert)')}</td>
      </tr>`;
    };
    const group = (title, rows) => rows.length ? `<tr class="cbb-grp"><td colspan="7">${title} · ${rows.length}</td></tr>${rows.map(row).join('')}` : '';
    const act = list.filter(p => p.status === 'A').sort((a, b) => (SLOT_ORDER.indexOf(a.slot) - SLOT_ORDER.indexOf(b.slot)) || a.name.localeCompare(b.name));
    const res = list.filter(p => p.status === 'R').sort((a, b) => a.name.localeCompare(b.name));
    const ir = list.filter(p => p.status === 'IR');
    return `
      <a class="back" href="${href('home')}">← Alle Teams</a>
      <div class="nba-thead" style="${nba.tcStyle(t)}">
        <span class="nba-avatar big">${e(nba.initials(t.name))}</span>
        <div><h1 class="page-title display">${e(t.name)}</h1>
          <div class="page-sub">${e(t.owner || '')} · 📊 ${e(nba.record(data, t))} · ${act.length} aktiv · ${list.length} Spieler · <a href="${href('cbbschedule', t.id)}">Spielplan</a></div></div>
      </div>
      <div class="chip-row" aria-label="Team wechseln">${teams.map(x => `<a class="chip-link${x.id === tid ? ' active' : ''}" href="${href('teams', x.id)}" title="${e(x.name)}" style="${nba.tcStyle(x)}"><span class="nba-chipav">${e(nba.initials(x.name))}</span></a>`).join('')}</div>
      ${list.length ? `<div class="table-wrap"><table class="table nba-roster cbb-roster"><thead><tr><th class="pos-col">Slot</th><th>Spieler</th><th>Schule</th><th class="num" title="Preis in der NIL-Auktion 2026 (sonst geschätzter Wert)">NIL</th><th class="num" title="Rang in der Vorsaison 2025-26">Vorsaison</th><th class="num" title="9-Cat-z der laufenden Saison (pro Spiel)">Saison</th><th class="num" title="Gesamt-Rang im Board">Board</th></tr></thead>
        <tbody>${group('Aktiv', act)}${group('Reserve', res)}${group('Injured Reserve', ir)}</tbody></table></div>`
        : ui.empty('Kader noch leer', 'Fantrax hat für dieses Team noch keine Spieler.', '🧍')}
      <p class="small muted">Vorsaison = Rang 2025-26 über alle D-I-Spieler (9-Cat pro Spiel). Saison = z-Summe der laufenden Saison. Board = Gesamtwertung wie auf „Waiver“.</p>`;
  }

  // ---------- Tabelle ----------
  function standings(ctx) {
    const { data, ui } = ctx;
    const e = ui.esc, nba = N().init(data);
    const R = data.TEAM_RECORDS_LIVE || {};
    const byId = teamById(data), me = myTeam(data);
    const rows = (R.standings || []).slice().sort((a, b) => a.rank - b.rank);
    const played = rows.some(r => r.w + r.l + r.t > 0);
    const P = data.CBB_SCHEDULE || {};
    return `<div class="page-head"><h1 class="page-title display">🏆 Tabelle</h1>
        <div class="page-sub">Fantrax-Standings · Kategorien W-L-T${P.playoffTeams ? ` · Top ${P.playoffTeams} in die Playoffs (ab Woche ${(P.lastRegular || 0) + 1})` : ''}</div></div>
      ${!played ? `<div class="note">Noch keine Spiele — die Tabelle füllt sich ab der ersten Woche (${fmtD(((P.periods || [])[0] || {}).start)}).</div>` : ''}
      <div class="table-wrap"><table class="table"><thead><tr><th class="num">#</th><th>Team</th><th class="num">W</th><th class="num">L</th><th class="num">T</th><th class="num">%</th><th class="num">GB</th></tr></thead><tbody>
      ${rows.map(r => `<tr class="${me && r.id === me.id ? 'mine' : ''}${P.playoffTeams && r.rank === P.playoffTeams ? ' cbb-cut' : ''}"><td class="num rank">${r.rank}</td><td>${tLink(ctx, byId[r.id], me && r.id === me.id)} <small class="muted">${e((byId[r.id] || {}).owner || '')}</small></td>
        <td class="num">${r.w}</td><td class="num">${r.l}</td><td class="num">${r.t}</td><td class="num">${(r.pct * 100).toFixed(1)}</td><td class="num">${r.gb}</td></tr>`).join('')}
      </tbody></table></div>`;
  }

  // ---------- Spielplan ----------
  function schedule(ctx) {
    const { data, href, ui, params } = ctx;
    const e = ui.esc;
    const P = (data.CBB_SCHEDULE && data.CBB_SCHEDULE.periods) || [];
    if (!P.length) return ui.empty('Kein Spielplan', 'Fantrax-Sync noch nicht gelaufen.', '📅');
    const byId = teamById(data), me = myTeam(data);
    const focus = Number(params[0]) || null;
    const cur = currentPeriod(data);
    const teams = N().leagueTeams(data, true);
    const card = p => {
      const ms = focus ? p.matchups.filter(m => m.includes(focus)) : p.matchups;
      return `<div class="card cbb-week${cur && p.n === cur.n ? ' now' : ''}"><div class="card-head"><h2>Woche ${p.n}${p.playoff ? ' · 🏆 Playoffs' : ''}</h2><span class="muted small">${fmtD(p.start)}–${fmtD(p.end)}</span></div>
        <div class="cbb-mgrid">${ms.map(m => `<div class="cbb-m${me && m.includes(me.id) ? ' mine' : ''}">${tLink(ctx, byId[m[0]], focus === m[0])}<span class="muted">@</span>${tLink(ctx, byId[m[1]], focus === m[1])}</div>`).join('') || '<span class="muted small">—</span>'}</div></div>`;
    };
    return `<div class="page-head"><h1 class="page-title display">📅 Spielplan</h1>
        <div class="page-sub">${P.length} Wochen · je Woche zwei Matchups pro Team${data.CBB_SCHEDULE.lastRegular ? ` · reguläre Saison bis Woche ${data.CBB_SCHEDULE.lastRegular}` : ''}</div></div>
      <div class="chip-row"><a class="chip-link${!focus ? ' active' : ''}" href="${href('cbbschedule')}">Alle</a>${teams.map(t => `<a class="chip-link${focus === t.id ? ' active' : ''}" href="${href('cbbschedule', t.id)}" title="${e(t.name)}" style="${N().tcStyle(t)}"><span class="nba-chipav">${e(N().initials(t.name))}</span></a>`).join('')}</div>
      <div class="cbb-weeks">${P.map(card).join('')}</div>`;
  }

  const D = ['teams', '?rosters-live'];
  MFHFB.pages.register({ id: 'home', section: 'home', label: 'Übersicht', icon: '🏠', applies: A, data: D.concat(['?fantasy-schedule', '?team-strength']), render: home, mount: root => MFHFB.ui.mountCountdowns && MFHFB.ui.mountCountdowns(root) });
  MFHFB.pages.register({ id: 'teams', section: 'teams', label: 'Teams & Kader', icon: '🧍', applies: A, data: D.concat(['?best-available-board', '?live-bids']), title: ({ data, params }) => ((data.TEAMS || []).find(t => t.id === Number(params[0])) || {}).name || 'Teams & Kader', render: teamPage });
  MFHFB.pages.register({ id: 'standings', section: 'standings', label: 'Tabelle', icon: '🏆', applies: A, data: D.concat(['?fantasy-schedule']), render: standings });
  MFHFB.pages.register({ id: 'cbbschedule', section: 'matchups', label: 'Spielplan', icon: '📅', applies: A, data: D.concat(['fantasy-schedule']), render: schedule });
})();
