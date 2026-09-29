// ============================================================
//  Tools: Liga — Regeln & Erklärung, Liga-Beiträge, League History
// ============================================================
//  #/<liga>/erklaerung     Ankündigungen (league.announcements), Liga-
//                          Settings (LEAGUE_INFO, falls die Plattform sie
//                          liefert — Sleeper), Erklärungen der Tools
//  #/<liga>/dues           Beiträge je Team und Saison (LEAGUE_DUES_PAID)
//  #/<liga>/leaguehistory  Champions + Regular-Season-Finish über die Jahre
//
//  Neu gebaut nach renderErklaerung / renderDues / renderLeagueHistory /
//  renderSeasonFinishRolling (BWP + DOPE js/app.js). Die Datendateien
//  enthalten dort auch Funktionen (leagueDuesStatus, resolveTeamFranchise)
//  — die Logik steckt jetzt hier, die Dateien liefern nur noch Daten.
//
//  Liga-Unterschiede kommen aus der Config (js/leagues.js):
//    dues: { currentOwes, tradedPicksOwe }   BWP: unbezahlt in der laufenden
//      Saison = "muss zahlen", ebenso Zukunftsjahre, in denen das Team an
//      einem Pick-Trade beteiligt ist. DOPE: unbezahlt = "offen".
//    notes.dues                             Hinweistext über der Tabelle
//    announcements: [{ title, html, highlight }]  Aushänge auf der Erklärung-Seite
// ============================================================

(function () {
  // ---------- Regeln & Erklärung ----------
  const SCORING_LABELS = {
    pass_yd: ['Passing', 'Pass-Yard'], pass_td: ['Passing', 'Pass-TD'], pass_int: ['Passing', 'Interception'],
    pass_2pt: ['Passing', '2-Pt Pass'], rush_yd: ['Rushing', 'Rush-Yard'], rush_td: ['Rushing', 'Rush-TD'],
    rush_2pt: ['Rushing', '2-Pt Rush'], rec: ['Receiving', 'Reception (PPR)'], rec_yd: ['Receiving', 'Rec-Yard'],
    rec_td: ['Receiving', 'Rec-TD'], rec_2pt: ['Receiving', '2-Pt Rec'], bonus_rec_te: ['Receiving', 'TE-Premium je Catch'],
    fum_lost: ['Sonstiges', 'Fumble lost'], fum: ['Sonstiges', 'Fumble'], fum_rec_td: ['Sonstiges', 'Fumble-Recovery-TD'],
    fgm_0_19: ['Kicker', 'FG 0–19'], fgm_20_29: ['Kicker', 'FG 20–29'], fgm_30_39: ['Kicker', 'FG 30–39'],
    fgm_40_49: ['Kicker', 'FG 40–49'], fgm_50_59: ['Kicker', 'FG 50–59'], fgm_60p: ['Kicker', 'FG 60+'],
    fgmiss: ['Kicker', 'FG verschossen'], xpm: ['Kicker', 'PAT'], xpmiss: ['Kicker', 'PAT verschossen'],
    sack: ['Defense', 'Sack'], int: ['Defense', 'Interception'], fum_rec: ['Defense', 'Fumble Recovery'],
    ff: ['Defense', 'Forced Fumble'], safe: ['Defense', 'Safety'], def_td: ['Defense', 'Defense-TD'],
    blk_kick: ['Defense', 'Blocked Kick'], def_st_td: ['Defense', 'Special-Teams-TD'],
    pts_allow_0: ['Punkte zugelassen', '0'], pts_allow_1_6: ['Punkte zugelassen', '1–6'],
    pts_allow_7_13: ['Punkte zugelassen', '7–13'], pts_allow_14_20: ['Punkte zugelassen', '14–20'],
    pts_allow_21_27: ['Punkte zugelassen', '21–27'], pts_allow_28_34: ['Punkte zugelassen', '28–34'],
    pts_allow_35p: ['Punkte zugelassen', '35+'],
  };
  const SLOT_LABEL = { FLEX: 'FLEX (RB/WR/TE)', SUPER_FLEX: 'Superflex', WRRB_FLEX: 'FLEX (RB/WR)', REC_FLEX: 'FLEX (WR/TE)', DEF: 'DEF' };
  const WEEKDAYS = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];

  const card = (title, body, cls) => `<div class="card lg-card${cls ? ' ' + cls : ''}"><div class="card-head"><h2>${title}</h2></div><div class="lg-body">${body}</div></div>`;
  const kv = rows => `<table class="table compact lg-kv"><tbody>${rows.filter(r => r[1] != null && r[1] !== '').map(([k, v]) => `<tr><td class="muted">${k}</td><td class="strong">${v}</td></tr>`).join('')}</tbody></table>`;

  function settingsHtml(ctx) {
    const L = ctx.data.LEAGUE_INFO;
    if (!L) return '';
    const e = ctx.ui.esc, st = L.settings || {}, sc = L.scoring || {};
    const starters = (L.rosterPositions || []).filter(p => p !== 'BN');
    const bench = (L.rosterPositions || []).filter(p => p === 'BN').length;
    const cnt = {}; starters.forEach(p => { cnt[p] = (cnt[p] || 0) + 1; });
    const lineup = Object.entries(cnt).map(([p, n]) => `<span class="lg-slot">${n}× ${e(SLOT_LABEL[p] || p)}</span>`).join('');
    const groups = {};
    Object.entries(sc).forEach(([k, v]) => {
      if (!v || !SCORING_LABELS[k]) return;
      const [g, label] = SCORING_LABELS[k];
      (groups[g] = groups[g] || []).push([label, k.endsWith('_yd') ? `${v} (= ${Math.round(1 / v)} Yards pro Punkt)` : (v > 0 ? '+' : '') + v]);
    });
    const waiver = st.waiverType === 2 ? `FAAB ($${st.waiverBudget} Budget)` : st.waiverType === 1 ? 'Rolling Waivers' : 'Reverse Standings';
    const draftType = ctx.data.DRAFT_TYPE;
    return `
      <div class="note">Alles in diesem Block kommt direkt aus den <b>${e(ctx.league.platform)}-Settings</b> der Liga (automatisch synchronisiert${L.syncedAt ? `, Stand ${new Date(L.syncedAt).toLocaleString('de-DE')}` : ''}).</div>
      <div class="lg-grid">
        ${card('🧾 Liga', kv([
          ['Name', e(L.name)], ['Saison', e(L.season)], ['Format', st.type === 2 ? 'Dynasty' : st.type === 1 ? 'Keeper' : 'Redraft'],
          ['Teams', e(L.totalRosters)],
          ['Scoring', (sc.rec === 1 ? 'PPR' : sc.rec === 0.5 ? 'Half-PPR' : 'Standard') + (sc.pass_td ? `, ${sc.pass_td}-Pt Pass-TD` : '')],
          ['Median-Spiel', st.leagueAverageMatch ? 'Ja — jede Woche zusätzlich W/L gegen den Liga-Median' : 'Nein'],
          [`${e(ctx.league.platform)} League ID`, `<code>${e(L.leagueId)}</code>`],
        ]))}
        ${card('🧍 Kader', `<div class="lg-slots">${lineup}</div>` + kv([
          ['Bank', bench],
          ['Taxi Squad', st.taxiSlots ? `${st.taxiSlots} Plätze · Spieler bis ${st.taxiYears}. Jahr${st.taxiAllowVets ? ' (auch Veteranen)' : ' (nur Rookies/Jungspieler)'}` : 'keine'],
          ['IR / Reserve', st.reserveSlots ? `${st.reserveSlots} Plätze` : 'keine'],
        ]))}
        ${card('🔁 Transaktionen', kv([
          ['Waiver', waiver], ['Waiver-Lauf', st.dailyWaivers ? 'täglich' : (st.waiverDay != null ? WEEKDAYS[st.waiverDay] : null)],
          ['Waiver-Dauer', st.waiverClearDays != null ? `${st.waiverClearDays} Tag(e)` : null],
          ['Trade Deadline', st.tradeDeadline && st.tradeDeadline < 99 ? `Woche ${st.tradeDeadline}` : 'keine'],
          ['Pick-Trading', st.pickTrading ? 'erlaubt' : 'aus'],
          ['Trade-Review', st.tradeReviewDays ? `${st.tradeReviewDays} Tag(e)` : 'sofort'],
          ['Veto-Stimmen nötig', st.vetoVotesNeeded],
        ]))}
        ${card('🏆 Saison & Draft', kv([
          ['Playoffs', st.playoffTeams ? `${st.playoffTeams} Teams ab Woche ${st.playoffWeekStart}` : null],
          ['Rookie Draft', st.draftRounds ? `${st.draftRounds} Runden${draftType ? ` · ${draftType === 'snake' ? 'Snake' : 'Linear'}` : ''}` : null],
          ['Aktuelle NFL-Woche', L.nflWeek], ['Zuletzt final gewertet', L.lastScoredWeek ? `Woche ${L.lastScoredWeek}` : '—'],
        ]))}
      </div>
      ${Object.keys(groups).length ? card('📊 Scoring', `<div class="lg-score">${Object.entries(groups).map(([g, rows]) => `<div><div class="lg-sub">${e(g)}</div>${kv(rows)}</div>`).join('')}</div>`) : ''}`;
  }

  function erklaerung(ctx) {
    const { league, ui } = ctx;
    const e = ui.esc;
    const ann = league.announcements || [];
    const nfl = league.sport === 'nfl' ? MFHFB.nfl || {} : {};
    const tools = [
      nfl.ma && ['⚔️ Matchup Advantage', nfl.ma.explainHtml()],
      nfl.fu && ['📊 Unit-Vergleich (Matchups)', nfl.fu.explainHtml()],
      nfl.airYardsExplainHtml && ['📏 Air Yards (Player DNA)', nfl.airYardsExplainHtml()],
      nfl.playerStyleExplainHtml && ['🎯 Spielstil (Player DNA)', nfl.playerStyleExplainHtml()],
    ].filter(Boolean);
    const settings = settingsHtml(ctx);
    return `
      <div class="page-head">
        <h1 class="page-title display">📜 Regeln & Erklärung</h1>
        <div class="page-sub">${ann.length ? 'Aushänge der Liga · ' : ''}${settings ? 'Liga-Settings · ' : ''}So funktionieren die Tools</div>
      </div>
      ${ann.map(a => card(a.title, a.html, a.highlight ? 'lg-highlight' : '')).join('')}
      ${settings}
      ${tools.length ? `<h2 class="group-title">Die Tools erklärt</h2>
        <div class="lg-explain">${tools.map(([t, h], i) => `<details class="card lg-det"${i === 0 && !ann.length && !settings ? ' open' : ''}><summary>${t}</summary><div class="lg-body">${h}</div></details>`).join('')}</div>` : ''}
      ${!ann.length && !settings && !tools.length ? ui.empty('Noch nichts hinterlegt', 'Ankündigungen kommen aus der Liga-Config, Settings aus dem Plattform-Sync.', '📜') : ''}`;
  }

  // ---------- Liga-Beiträge ----------
  function duesStatus(ctx, team, year, D, future) {
    const rules = ctx.league.dues || {};
    const keys = [team.name, team.id];
    if ((D.LEAGUE_DUES_PAID || []).some(d => keys.includes(d.team) && d.year === year)) return 'paid';
    if (rules.currentOwes && year <= D.CURRENT_DUES_YEAR) return 'owes';
    if (rules.tradedPicksOwe && (future[year] || []).some(p => p.from === team.name || p.owner === team.name)) return 'owes';
    return rules.currentOwes ? 'not-relevant' : 'open';
  }

  function dues(ctx) {
    const { data, ui, league } = ctx;
    const e = ui.esc;
    if (!data.LEAGUE_DUES_PAID || !data.DUES_YEARS) return ui.empty('Noch keine Beitragsdaten', 'data/league-dues.js anlegen (LEAGUE_DUES_PAID mit { team, year }-Einträgen) — die Tabelle hier befüllt sich dann automatisch.', '💰');
    const teams = data.LEAGUE_TEAMS || [];
    const future = MFHFB.draft ? MFHFB.draft.normalize(data).future : (data.FUTURE_PICKS || {});
    const years = data.DUES_YEARS;
    const st = {}; teams.forEach(t => { st[t.id] = {}; years.forEach(y => { st[t.id][y] = duesStatus(ctx, t, y, data, future); }); });
    const badge = s => s === 'paid' ? '<span class="dues dues-paid" title="Bezahlt">✅<span> Bezahlt</span></span>'
      : s === 'owes' ? '<span class="dues dues-owes" title="Muss zahlen">⚠️<span> Muss zahlen</span></span>'
      : s === 'open' ? '<span class="dues dues-open">offen</span>' : '<span class="dues dues-na">—</span>';
    const rules = league.dues || {};
    const legend = rules.currentOwes
      ? '<b>✅ Bezahlt</b> = Beitrag für diese Saison beglichen · <b>⚠️ Muss zahlen</b> = laufende Saison, oder ein Pick aus diesem Jahr wurde bereits getradet (siehe Future Picks), Beitrag ist also schon fällig · <b>—</b> = Saison liegt noch in der Zukunft und ist für dieses Team noch nicht relevant.'
      : '<b>✅ Bezahlt</b> = Beitrag für diese Saison beglichen · <b>offen</b> = noch nicht bezahlt.';
    return `
      <div class="page-head">
        <h1 class="page-title display">💰 Liga-Beiträge</h1>
        <div class="page-sub">Laufende Beitrags-Saison ${e(data.CURRENT_DUES_YEAR)} · von Hand gepflegt in data/league-dues.js</div>
      </div>
      ${league.notes && league.notes.dues ? `<div class="note">${e(league.notes.dues)}</div>` : ''}
      <div class="dues-sum">${years.map(y => { const n = teams.filter(t => st[t.id][y] === 'paid').length; return `<div class="dues-tile${y === data.CURRENT_DUES_YEAR ? ' cur' : ''}"><small>${y}</small><b>${n}<span>/${teams.length}</span></b><i style="--p:${Math.round(n / Math.max(1, teams.length) * 100)}%"></i></div>`; }).join('')}</div>
      <div class="table-wrap"><table class="table compact dues-table">
        <thead><tr><th>Team</th>${years.map(y => `<th class="num">${y}</th>`).join('')}</tr></thead>
        <tbody>${teams.map(t => `<tr><td><span class="team-cell"><span class="team-emoji">${e(t.emoji || '')}</span><span class="team-name">${e(t.name)}</span></span></td>${years.map(y => `<td class="num">${badge(st[t.id][y])}</td>`).join('')}</tr>`).join('')}</tbody>
      </table></div>
      <div class="page-sub" style="margin-top:10px;font-size:12px">${legend}</div>`;
  }

  // ---------- League History ----------
  const histState = ctx => ({ sel: [], ...ctx.store.getJSON('history', {}) });

  function historyModel(ctx) {
    const { data } = ctx;
    const aliases = data.TEAM_NAME_ALIASES || {};
    const canon = n => (aliases[n] ? aliases[n].canonical : n);
    const S = (data.SEASON_HISTORY_STANDINGS || []).slice().sort((a, b) => a.year - b.year);
    const years = S.map(s => s.year);
    const byName = {}; (data.LEAGUE_TEAMS || []).forEach(t => { byName[t.name] = t; });
    const fr = {};
    S.forEach((s, i) => s.standings.forEach(row => {
      const c = canon(row.team);
      const f = fr[c] || (fr[c] = { id: c, name: c, emoji: (byName[c] || {}).emoji || '', current: !!byName[c], ranks: years.map(() => null), recs: years.map(() => null), names: years.map(() => null) });
      f.ranks[i] = row.rank; f.recs[i] = row.record; f.names[i] = row.team;
    }));
    const list = Object.values(fr).map(f => {
      const v = f.ranks.filter(x => x != null);
      return { ...f, avg: v.length ? v.reduce((a, b) => a + b, 0) / v.length : null, seasons: v.length };
    });
    // Titel je Franchise aus LEAGUE_HISTORY
    const hist = (data.LEAGUE_HISTORY || []).slice().sort((a, b) => b.year - a.year);
    const titles = {};
    hist.forEach(h => { if (h.champion) { const c = canon(h.champion); (titles[c] = titles[c] || []).push({ year: h.year, as: h.champion !== c ? h.champion : null }); } });
    return { years, list, hist, titles, canon };
  }

  function history(ctx) {
    const { ui } = ctx;
    const e = ui.esc;
    const m = historyModel(ctx);
    if (!m.hist.length && !m.list.length) return ui.empty('Noch keine Historie hinterlegt', 'Einfach vergangene Saisons in data/league-history.js eintragen (Champion, Vize, Dritter je Jahr) — die Tabelle hier befüllt sich dann automatisch.', '🏛️');
    const st = histState(ctx);
    const sel = st.sel.filter(id => m.list.some(f => f.id === id)).slice(0, 3);
    const franchise = n => { if (!n) return '—'; const c = m.canon(n); return c !== n ? `${e(n)} <small class="muted">→ ${e(c)}</small>` : e(n); };
    const titleRows = Object.entries(m.titles).sort((a, b) => b[1].length - a[1].length || Math.max(...b[1].map(t => t.year)) - Math.max(...a[1].map(t => t.year)));
    const sorted = m.list.slice().sort((a, b) => (a.avg == null) - (b.avg == null) || a.avg - b.avg);
    return `
      <div class="page-head">
        <h1 class="page-title display">🏛️ League History</h1>
        <div class="page-sub">${m.hist.length ? `${m.hist.length} Saison${m.hist.length === 1 ? '' : 's'} seit ${m.hist[m.hist.length - 1].year}` : ''}${m.years.length ? ` · Regular-Season-Platzierungen ${m.years[0]}–${m.years[m.years.length - 1]}` : ''}</div>
      </div>
      ${titleRows.length ? `<div class="lg-titles">${titleRows.map(([c, ys]) => `<div class="lg-title-card"><span class="lg-trophies">${'🏆'.repeat(ys.length)}</span><b>${e(c)}</b><small>${ys.slice().sort((a, b) => a.year - b.year).map(t => t.as ? `${t.year} <i>(als ${e(t.as)})</i>` : t.year).join(', ')}</small></div>`).join('')}</div>` : ''}
      ${m.hist.length ? `<div class="table-wrap"><table class="table compact lg-hist">
        <thead><tr><th>Jahr</th><th>🥇 Champion</th><th>🥈 Vize</th><th>🥉 Dritter</th></tr></thead>
        <tbody>${m.hist.map(h => `<tr><td class="strong">${h.year}</td><td class="strong">${franchise(h.champion)}${h.notes ? `<div class="lg-note">${e(h.notes)}</div>` : ''}</td><td>${franchise(h.runnerUp)}</td><td>${franchise(h.thirdPlace)}</td></tr>`).join('')}</tbody>
      </table></div>` : ''}
      ${m.list.length ? `
        <h2 class="group-title">📈 Regular-Season-Finish über die Jahre</h2>
        <div class="page-sub" style="margin:-4px 0 10px">Platzierung nach der Regular Season (nicht Playoff-Ergebnis). Umbenannte Franchises sind zu einer Zeile zusammengeführt (Zuordnung vom Liga-Owner bestätigt); Lücken = Team in dem Jahr nicht in der Liga.</div>
        <div class="pick-row" aria-label="Franchises hervorheben (bis zu 3)">
          ${sorted.map(f => { const k = sel.indexOf(f.id); return `<button type="button" class="pick${k > -1 ? ' on ' + MFHFB.charts.SEL[k] : ''}" data-pick="${e(f.id)}" aria-pressed="${k > -1}" title="${e(f.name)}">${e(f.emoji || '🏈')}<span>${e(f.name)}</span></button>`; }).join('')}
          ${sel.length ? '<button type="button" class="pick clear" data-clear>✕ Auswahl leeren</button>' : ''}
        </div>
        <div class="card bump-card"><div class="bump-wrap" data-bump></div><div class="bump-tip" hidden></div>
          <div class="bump-hint">${sel.length ? '' : 'Tipp: bis zu drei Franchises oben antippen, um ihren Verlauf hervorzuheben. '}Hovern zeigt Details.</div></div>
        <div class="table-wrap"><table class="table compact">
          <thead><tr><th>Franchise</th>${m.years.map(y => `<th class="num">${y}</th>`).join('')}<th class="num">Ø Platz</th><th class="num">🏆</th></tr></thead>
          <tbody>${sorted.map(f => { const k = sel.indexOf(f.id); return `<tr${k > -1 ? ` class="row-${MFHFB.charts.SEL[k]}"` : ''}>
            <td><span class="team-cell"><span class="team-emoji">${e(f.emoji || '')}</span><span class="team-name">${e(f.name)}</span></span>${f.current ? '' : ' <small class="muted">(ehemalig)</small>'}</td>
            ${f.ranks.map((r, i) => `<td class="num${r === 1 ? ' strong up' : ''}" title="${f.names[i] ? e(f.names[i]) + (f.recs[i] ? ' · ' + e(f.recs[i]) : '') : 'nicht dabei'}">${r != null ? r : '–'}</td>`).join('')}
            <td class="num strong">${f.avg != null ? f.avg.toFixed(1).replace('.', ',') : '—'}</td>
            <td class="num">${(m.titles[f.id] || []).length || ''}</td></tr>`; }).join('')}</tbody>
        </table></div>` : ''}`;
  }

  function mountHistory(root, ctx) {
    const st = histState(ctx);
    const save = patch => { ctx.store.setJSON('history', { ...histState(ctx), ...patch }); ctx.refresh(); };
    root.querySelectorAll('[data-pick]').forEach(b => b.addEventListener('click', () => {
      const id = b.dataset.pick;
      let sel = st.sel.filter(x => x !== id);
      if (sel.length === st.sel.length) sel = [...st.sel, id].slice(-3);
      save({ sel });
    }));
    const clr = root.querySelector('[data-clear]');
    if (clr) clr.addEventListener('click', () => save({ sel: [] }));
    const wrap = root.querySelector('[data-bump]');
    if (!wrap) return;
    const m = historyModel(ctx);
    const sel = st.sel.filter(id => m.list.some(f => f.id === id)).slice(0, 3);
    const rows = m.list.map(f => ({
      id: f.id, name: f.name, emoji: f.emoji, ranks: f.ranks,
      tips: f.ranks.map((r, i) => r == null ? '' : `${f.names[i]} · ${m.years[i]}: Platz ${r}${f.recs[i] ? ' · ' + f.recs[i] : ''}`),
    }));
    const maxRank = Math.max(...m.list.flatMap(f => f.ranks.filter(x => x != null)));
    MFHFB.charts.responsive(wrap, w => MFHFB.charts.bump({ cols: m.years.map(String), rows, sel, width: w, maxRank, label: 'Regular-Season-Platzierungen je Franchise' }));
    MFHFB.charts.bumpInteract(wrap, root.querySelector('.bump-tip'), id => {
      const btn = root.querySelector(`[data-pick="${CSS.escape(id)}"]`); if (btn) btn.click();
    });
  }

  MFHFB.pages.register({
    id: 'erklaerung', section: 'league', label: 'Regeln & Erklärung', icon: '📜',
    data: ['teams', '?league-info', '?draft'], render: erklaerung,
  });
  MFHFB.pages.register({
    id: 'dues', section: 'league', label: 'Liga-Beiträge', icon: '💰',
    data: ['teams', '?league-dues', '?draft', '?trades'], render: dues,
  });
  MFHFB.pages.register({
    id: 'leaguehistory', section: 'league', label: 'League History', icon: '🏛️',
    data: ['teams', '?league-history', '?season-history-standings'], render: history, mount: mountHistory,
  });
})();
