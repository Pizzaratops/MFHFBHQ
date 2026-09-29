// ============================================================
//  Tool (NBA): Liga-Beiträge
// ============================================================
//  #/<liga>/nbadues   (nur Ligen mit league.nbaDues, aktuell Funkytown)
//
//  Port von js/league-dues.js (Funkytown). Daten: data/league-dues.js
//  (DUES_SEASONS, CURRENT_DUES_SEASON, DUES_AMOUNT, LEAGUE_DUES_PAID).
//  Eingetragen wird nur, wer bezahlt hat; alles andere wird abgeleitet:
//  Saison ≤ aktuelle ohne Eintrag = „muss zahlen“, spätere = „offen“.
// ============================================================

(function () {
  const N = () => MFHFB.nba;

  function status(d, tid, season) {
    const paid = (d.LEAGUE_DUES_PAID || []).find(x => x.teamId === tid && x.season === season);
    if (paid) return { k: 'paid', entry: paid };
    const S = d.DUES_SEASONS || [], idx = S.indexOf(season), cur = S.indexOf(d.CURRENT_DUES_SEASON);
    return { k: idx >= cur ? 'owes' : 'open' };
  }

  function render(ctx) {
    const { data, ui } = ctx, e = ui.esc, nba = N();
    nba.init(data);
    const S = data.DUES_SEASONS || [];
    if (!S.length) return ui.empty('Keine Beitragsdaten', 'data/league-dues.js fehlt oder ist leer.', '💰');
    const teams = nba.leagueTeams(data);
    const cur = data.CURRENT_DUES_SEASON;
    const paidCur = teams.filter(t => status(data, t.id, cur).k === 'paid');
    const owes = teams.filter(t => status(data, t.id, cur).k === 'owes');
    const amt = typeof data.DUES_AMOUNT === 'number' ? data.DUES_AMOUNT : null;
    const badge = st => st.k === 'paid' ? `<span class="nba-dues paid"${st.entry.date ? ` title="bezahlt am ${e(st.entry.date)}"` : ''}>✅ bezahlt</span>` : st.k === 'owes' ? '<span class="nba-dues owes">💸 muss zahlen</span>' : '<span class="nba-dues open">– offen</span>';
    return `<div class="page-head"><h1 class="page-title display">💰 Liga-Beiträge</h1>
        <div class="page-sub">Saison ${e(cur)} · ${paidCur.length} von ${teams.length} bezahlt${amt ? ` · ${amt} € je Team · eingesammelt ${paidCur.length * amt} € von ${teams.length * amt} €` : ''}</div></div>
      <div class="nba-kpis"><div class="card nba-kpi"><small>Bezahlt</small><strong class="up">${paidCur.length}</strong><span>von ${teams.length} Teams</span></div>
        <div class="card nba-kpi"><small>Ausstehend</small><strong class="${owes.length ? 'down' : 'up'}">${owes.length}</strong><span>${owes.length ? e(owes.map(t => t.owner || t.name).join(', ')) : 'alle durch 🎉'}</span></div></div>
      <div class="table-wrap"><table class="table compact"><thead><tr><th>Team</th>${S.map(s => `<th class="num">${e(s)}</th>`).join('')}</tr></thead>
        <tbody>${teams.map(t => `<tr><td><a class="nba-tlink mp-tc" style="${nba.tcStyle(t)}" href="${ctx.href('teams', t.id)}"><span class="nba-tdot"></span>${e(t.name)}</a> <small class="muted">${e(t.owner || '')}</small></td>
          ${S.map(s => `<td class="num">${badge(status(data, t.id, s))}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
      <p class="muted small">Gepflegt in data/league-dues.js: Zahlung als { teamId, season } in LEAGUE_DUES_PAID eintragen.</p>`;
  }

  MFHFB.pages.register({
    id: 'nbadues', section: 'league', label: 'Liga-Beiträge', icon: '💰', applies: { sport: ['nba'] }, when: l => !!l.nbaDues,
    data: ['teams', 'league-dues'], title: () => 'Liga-Beiträge', render,
  });
})();
