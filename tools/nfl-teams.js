// ============================================================
//  Tools: NFL Power Rankings + NFL Teams
// ============================================================
//  #/<liga>/nflrankings[/<woche>]     Tabelle aller 32 Teams (NFL /
//                                     Conference / Division, nach W-L,
//                                     Offense- oder Defense-EPA)
//  #/<liga>/nflteams                  32 Teams nach Division
//  #/<liga>/nflteams/<ABBR>           Team-Detail: Bootleg Power Score
//                                     (Radar, bis 3 Teams vergleichen),
//                                     Rang-Verlauf je Woche, nächstes Spiel,
//                                     Fantasy-Spieler mit Liga-Besitzer
//
//  Neu gebaut nach renderNflRankings / renderNflTeamHistory /
//  renderBootlegPowerScoreSection / renderNFLTeams (BWP js/app.js).
//  Unterschiede zur alten Seite: Team-Detail und Power Rankings sind
//  jetzt EINE Team-Seite (vorher zwei getrennte Wege über Dropdown bzw.
//  NFL-Teams-Kachel); Rang-Veränderung zur Vorwoche; Radar als SVG mit
//  der CVD-sicheren Vergleichspalette statt Chart.js.
//
//  Sportweite Daten: sport:nfl-power-rankings (NFL_STANDINGS, NFL_OFFDEF),
//  sport:nfl-power-score (NFL_POWER_SCORE), sport:matchup-advantage.
// ============================================================

(function () {
  const T = () => MFHFB.nfl.teams;
  const normKey = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/\b(jr|sr|ii|iii|iv|v)\b\.?/g, '').replace(/[^a-z0-9]/g, '');
  const fmtEpa = v => (v >= 0 ? '+' : '') + v.toFixed(2);
  const winLoss = (a, b) => (b.winPct - a.winPct) || ((b.pf - b.pa) - (a.pf - a.pa));
  const rec = t => `${t.wins}-${t.losses}${t.ties ? '-' + t.ties : ''}`;
  const DIVS = ['East', 'North', 'South', 'West'];

  function seasonOf(data) {
    const S = data.NFL_STANDINGS || {};
    const seasons = Object.keys(S).sort();
    const season = seasons[seasons.length - 1] || null;
    const weeks = season ? Object.keys(S[season] || {}).map(Number).filter(w => (S[season][w] || []).length).sort((a, b) => a - b) : [];
    return { season, weeks };
  }
  const weekRows = (data, season, w) => ((data.NFL_STANDINGS || {})[season] || {})[w] || [];
  const offDef = (data, season, w) => (((data.NFL_OFFDEF || {})[season] || {})[w]) || null;
  const rankIn = (list, abbr) => list.slice().sort(winLoss).findIndex(t => t.abbr === abbr) + 1;

  function teamLink(ctx, abbr, label) {
    const e = ctx.ui.esc;
    return `<a class="nfl-team" href="${ctx.href('nflteams', abbr)}" style="--tc:${T().color(abbr)}"><b>${e(abbr)}</b> <span>${e(label || T().name(abbr))}</span></a>`;
  }

  // ============================================================
  //  Power Rankings
  // ============================================================
  const prState = ctx => ({ scope: 'nfl', metric: 'wl', ...ctx.store.getJSON('nflrankings', {}) });

  function rankingsView(ctx) {
    const { data, ui } = ctx;
    const e = ui.esc;
    const { season, weeks } = seasonOf(data);
    if (!season || !weeks.length) {
      return ui.empty('Noch keine NFL-Standings', 'Diese Seite zeigt ein wöchentliches Ranking aller 32 NFL-Teams (NFL gesamt, Conference oder Division), wahlweise nach Sieg-Quote, Offense- oder Defense-Rating (EPA/Play). Sobald die reguläre Saison läuft und der Sync Wochenwerte liefert, füllt sie sich automatisch.', '🏟️');
    }
    const st = prState(ctx);
    const week = weeks.includes(Number(ctx.params[0])) ? Number(ctx.params[0]) : weeks[weeks.length - 1];
    const prev = weeks.filter(w => w < week).pop();
    const teams = weekRows(data, season, week);
    const od = offDef(data, season, week);
    const odBy = {}; (od || []).forEach(r => { odBy[r.abbr] = r; });
    const ps = (data.NFL_POWER_SCORE || {})[season];
    const psBy = {};
    if (ps && ps.weeks[week]) ps.weeks[week].cumulative.forEach(r => {
      const rs = ps.categories.map(c => r.ranks[c.key]).filter(x => x != null);
      if (rs.length) psBy[r.abbr] = rs.reduce((a, b) => a + b, 0) / rs.length;
    });
    const hasPs = Object.keys(psBy).length > 0;
    const noOd = (st.metric === 'off' || st.metric === 'def') && !od;

    const sortGroup = list => {
      if (st.metric === 'off' && od) return list.slice().sort((a, b) => (odBy[b.abbr] ? odBy[b.abbr].off : -999) - (odBy[a.abbr] ? odBy[a.abbr].off : -999));
      // Weniger EPA/Play zugelassen = bessere Defense → aufsteigend
      if (st.metric === 'def' && od) return list.slice().sort((a, b) => (odBy[a.abbr] ? odBy[a.abbr].def : 999) - (odBy[b.abbr] ? odBy[b.abbr].def : 999));
      return list.slice().sort(winLoss);
    };
    // Rang-Veränderung: gleiche Sortierung eine Woche vorher, gleiche Gruppe
    const prevRank = (group, abbr) => {
      if (!prev || st.metric !== 'wl') return null;
      const pl = weekRows(data, season, prev).filter(t => group.some(g => g.abbr === t.abbr));
      const r = pl.slice().sort(winLoss).findIndex(t => t.abbr === abbr);
      return r < 0 ? null : r + 1;
    };

    const table = (title, list) => {
      if (!list.length) return '';
      const sorted = sortGroup(list);
      return `<div class="card nfl-card">
        ${title ? `<div class="card-head"><h2>${e(title)}</h2></div>` : ''}
        <div class="table-wrap"><table class="table compact">
          <thead><tr><th class="num">#</th><th>Team</th><th class="num">W-L</th><th class="num">Quote</th><th class="num">Diff</th>
            ${od ? '<th class="num" title="Offense: Expected Points Added pro Spielzug">Off. EPA</th><th class="num" title="Defense: zugelassene EPA pro Spielzug (niedrig = gut)">Def. EPA</th>' : ''}
            ${hasPs ? '<th class="num" title="Ø Rang über die 6 Kategorien des Bootleg Power Score (1 = bester)">Power Ø</th>' : ''}</tr></thead>
          <tbody>${sorted.map((t, i) => {
            const o = odBy[t.abbr], d = t.pf - t.pa, pr = prevRank(list, t.abbr), mv = pr ? pr - (i + 1) : 0;
            return `<tr>
              <td class="num rank">${i + 1}${mv ? ` <small class="${mv > 0 ? 'up' : 'down'}" title="Vorwoche: ${pr}.">${mv > 0 ? '▲' : '▼'}${Math.abs(mv)}</small>` : ''}</td>
              <td>${teamLink(ctx, t.abbr, t.name)}</td>
              <td class="num">${rec(t)}</td>
              <td class="num">${(t.winPct * 100).toFixed(1).replace('.', ',')}%</td>
              <td class="num ${d > 0 ? 'up' : d < 0 ? 'down' : ''}">${d >= 0 ? '+' : ''}${d}</td>
              ${od ? `<td class="num${st.metric === 'off' ? ' strong' : ''}">${o ? fmtEpa(o.off) : '—'}${o ? ` <small class="muted">#${o.offRank}</small>` : ''}</td><td class="num${st.metric === 'def' ? ' strong' : ''}">${o ? fmtEpa(o.def) : '—'}${o ? ` <small class="muted">#${o.defRank}</small>` : ''}</td>` : ''}
              ${hasPs ? `<td class="num">${psBy[t.abbr] != null ? psBy[t.abbr].toFixed(1).replace('.', ',') : '—'}</td>` : ''}
            </tr>`;
          }).join('')}</tbody>
        </table></div></div>`;
    };

    let body;
    if (noOd) body = ui.empty('Offense-/Defense-Rating noch nicht verfügbar', 'Für diese Woche wurden noch keine Offense-/Defense-Werte synchronisiert — Sieg-Quote weiter nutzbar, oder eine andere Woche wählen.', '📊');
    else if (st.scope === 'nfl') body = table(null, teams);
    else if (st.scope === 'conference') body = `<div class="nfl-2col">${['AFC', 'NFC'].map(c => table(c, teams.filter(t => t.conference === c))).join('')}</div>`;
    else body = `<div class="nfl-2col">${['AFC', 'NFC'].map(c => `<div>${DIVS.map(d => table(`${c} ${d}`, teams.filter(t => t.conference === c && t.division === d))).join('')}</div>`).join('')}</div>`;

    const seg = (key, opts) => `<div class="seg" role="group">${opts.map(([v, l]) => `<button type="button" class="seg-btn${st[key] === v ? ' active' : ''}" data-set="${key}" data-val="${v}">${l}</button>`).join('')}</div>`;
    return `
      <div class="page-head">
        <h1 class="page-title display">🏟️ NFL Power Rankings</h1>
        <div class="page-sub">Saison ${e(season)} · Stand nach Woche ${week}<span class="explain"> · Team anklicken für Power Score & Verlauf · Quelle nflverse</span></div>
      </div>
      <div class="controls">
        ${seg('scope', [['nfl', 'NFL'], ['conference', 'Conference'], ['division', 'Division']])}
        ${seg('metric', [['wl', 'Win-Loss'], ['off', 'Offense'], ['def', 'Defense']])}
        <select class="tr-select nfl-week" data-week aria-label="Woche">${weeks.map(w => `<option value="${w}"${w === week ? ' selected' : ''}>Woche ${w}</option>`).join('')}</select>
      </div>
      ${body}
      <div class="page-sub explain" style="margin-top:10px;font-size:12px">Win-Loss: Sieg-Quote, Tiebreak Punktedifferenz. Offense/Defense: EPA/Play (Expected Points Added pro Spielzug), bei der Defense zugelassen (niedrig = gut). ▲/▼ = Plätze gegenüber der Vorwoche. Power Ø = Ø-Rang im Bootleg Power Score (kumulativ).</div>`;
  }

  MFHFB.pages.register({
    id: 'nflrankings',
    section: 'nfl',
    label: 'Power Rankings',
    icon: '🏟️',
    applies: { sport: ['nfl'] },
    data: ['sport:nfl-power-rankings', '?sport:nfl-power-score'],
    title: () => 'NFL Power Rankings',
    render: rankingsView,
    mount(root, ctx) {
      root.querySelectorAll('[data-set]').forEach(b => b.addEventListener('click', () => {
        ctx.store.setJSON('nflrankings', { ...prState(ctx), [b.dataset.set]: b.dataset.val });
        ctx.refresh();
      }));
      const w = root.querySelector('[data-week]');
      if (w) w.addEventListener('change', () => { location.hash = ctx.href('nflrankings', w.value); });
    },
  });

  // ============================================================
  //  NFL Teams (Übersicht + Detail)
  // ============================================================
  const tdState = ctx => ({ mode: 'cumulative', week: null, cmp: [], ...ctx.store.getJSON('nflteam', {}) });

  function overview(ctx) {
    const { data, ui, href } = ctx;
    const e = ui.esc;
    const { season, weeks } = seasonOf(data);
    const rows = season ? weekRows(data, season, weeks[weeks.length - 1]) : [];
    const meta = {}; rows.forEach(t => { meta[t.abbr] = t; });
    const counts = {};
    (data.DYNASTY_BOARD || []).forEach(p => {
      if (!['QB', 'RB', 'WR', 'TE'].includes(p.pos)) return;
      const c = T().canon(p.team); counts[c] = (counts[c] || 0) + 1;
    });
    const card = a => {
      const t = meta[a];
      return `<a class="team-card nfl-tcard" href="${href('nflteams', a)}" style="--tc:${T().color(a)}">
        <span class="nfl-abbr display">${e(a)}</span>
        <span class="team-card-body"><span class="team-name">${e(T().nick(a))}</span><small class="muted">${t ? rec(t) : ''}${counts[a] ? `${t ? ' · ' : ''}${counts[a]} Fantasy-Spieler` : ''}</small></span></a>`;
    };
    const grouped = rows.length
      ? ['AFC', 'NFC'].map(c => `<div class="nfl-conf"><h2 class="nfl-conf-h">${c}</h2>${DIVS.map(d => {
          const list = rows.filter(t => t.conference === c && t.division === d).sort(winLoss);
          return list.length ? `<div class="nfl-div"><div class="nfl-div-h">${c} ${d}</div><div class="nfl-div-grid">${list.map(t => card(t.abbr)).join('')}</div></div>` : '';
        }).join('')}</div>`).join('')
      : `<div class="team-grid">${T().all().map(card).join('')}</div>`;
    return `
      <div class="page-head">
        <h1 class="page-title display">🏈 NFL Teams</h1>
        <div class="page-sub">Nach Division, sortiert nach Bilanz${season ? ` (Saison ${e(season)}, Woche ${weeks[weeks.length - 1]})` : ''}<span class="explain"> · Team anklicken für Power Score, Verlauf und Fantasy-Spieler</span></div>
      </div>
      <div class="nfl-confs">${grouped}</div>`;
  }

  function radarBlock(ctx, abbr, season, st) {
    const { data, ui } = ctx;
    const e = ui.esc;
    const ps = (data.NFL_POWER_SCORE || {})[season];
    if (!ps || !Object.keys(ps.weeks || {}).length) return `<div class="note">🎯 <b>Bootleg Power Score</b> noch nicht verfügbar — braucht mindestens eine gespielte Woche der Saison ${e(season)}.</div>`;
    const weeks = Object.keys(ps.weeks).map(Number).sort((a, b) => a - b);
    const week = weeks.includes(Number(st.week)) ? Number(st.week) : weeks[weeks.length - 1];
    const list = st.mode === 'weekly' ? ps.weeks[week].weekly : ps.weeks[week].cumulative;
    const ids = [abbr].concat((st.cmp || []).filter(x => x && x !== abbr)).slice(0, 3);
    const entries = ids.map(id => list.find(r => r.abbr === id)).filter(Boolean);
    const cats = ps.categories;
    const n = list.length || 32;
    const empty = !entries.length || entries.every(en => cats.every(c => en.ranks[c.key] == null));
    const chart = empty
      ? `<div class="muted" style="padding:40px 10px;text-align:center">${st.mode === 'weekly' ? `Kein Spiel in Woche ${week} (Bye-Week) — andere Woche wählen.` : 'Für diese Woche liegen noch keine Werte vor.'}</div>`
      : MFHFB.charts.radar({
        axes: cats.map(c => ({ label: c.label })),
        series: entries.map(en => ({
          name: en.abbr,
          vals: cats.map(c => en.ranks[c.key] == null ? null : (n + 1 - en.ranks[c.key]) / n),
          tips: cats.map(c => en.ranks[c.key] == null ? `${en.abbr}: kein Wert` : `${en.abbr} · ${c.label}: Rang ${en.ranks[c.key]} von ${n} (${en.values[c.key]} ${c.unit})`),
        })),
        label: 'Bootleg Power Score',
      }) + (entries.length > 1 ? MFHFB.charts.chips(entries.map(en => T().nick(en.abbr))) : '');
    const avgRank = en => { const r = cats.map(c => en.ranks[c.key]).filter(x => x != null); return r.length ? r.reduce((a, b) => a + b, 0) / r.length : null; };
    const tableRows = cats.map(c => `<tr><td><b>${e(c.label)}</b><small class="muted"> ${e(c.unit)}</small></td>${entries.map((en, i) => `<td class="num"><span class="nfl-rk ${en.ranks[c.key] != null && en.ranks[c.key] <= 8 ? 'top' : en.ranks[c.key] >= n - 7 ? 'low' : ''}">${en.ranks[c.key] != null ? '#' + en.ranks[c.key] : '—'}</span><small class="muted">${en.values[c.key] != null ? e(en.values[c.key]) : ''}</small></td>`).join('')}</tr>`).join('');
    const others = T().all().filter(a => a !== abbr);
    const picker = i => `<select class="tr-select" data-cmp="${i}" aria-label="Vergleichsteam ${i + 1}"><option value="">＋ Vergleich${i ? ' 2' : ''}</option>${others.map(a => `<option value="${a}"${(st.cmp || [])[i] === a ? ' selected' : ''}>${a} – ${e(T().nick(a))}</option>`).join('')}</select>`;
    return `<div class="card nfl-ps">
      <div class="card-head"><h2>🎯 Bootleg Power Score</h2><span class="muted" style="font-size:12px">${st.mode === 'weekly' ? `Nur Woche ${week}` : `Kumulativ bis Woche ${week}`}</span></div>
      <div class="controls" style="padding:10px 14px 0">
        <div class="seg" role="group"><button type="button" class="seg-btn${st.mode === 'cumulative' ? ' active' : ''}" data-mode="cumulative">Kumulativ</button><button type="button" class="seg-btn${st.mode === 'weekly' ? ' active' : ''}" data-mode="weekly">Nur diese Woche</button></div>
        <select class="tr-select" data-psweek aria-label="Woche">${weeks.map(w => `<option value="${w}"${w === week ? ' selected' : ''}>Woche ${w}</option>`).join('')}</select>
        ${picker(0)}${picker(1)}
      </div>
      <div class="nfl-ps-grid">
        <div class="nfl-ps-radar">${chart}</div>
        <div class="table-wrap"><table class="table compact">
          <thead><tr><th>Kategorie</th>${entries.map((en, i) => `<th class="num"><i class="cs-sw ${MFHFB.charts.SEL[i]}"></i>${e(en.abbr)}</th>`).join('')}</tr></thead>
          <tbody>${tableRows}<tr class="nfl-avg"><td><b>Ø Rang</b></td>${entries.map(en => { const a = avgRank(en); return `<td class="num strong">${a != null ? a.toFixed(1).replace('.', ',') : '—'}</td>`; }).join('')}</tr></tbody>
        </table></div>
      </div>
      <div class="cs-foot explain">Rang 1 = außen im Netz, unabhängig davon, ob ein hoher oder niedriger Rohwert besser ist. 6 Kategorien, datengestützt ausgewählt (Korrelation mit echten Saison-Siegen 2021–2025). Quelle nflverse.</div>
    </div>`;
  }

  function historyBlock(ctx, abbr, season, weeks) {
    const { data } = ctx;
    const rows = weeks.slice().reverse().map(w => {
      const wt = weekRows(data, season, w);
      const t = wt.find(x => x.abbr === abbr);
      if (!t) return '';
      const conf = wt.filter(x => x.conference === t.conference), div = conf.filter(x => x.division === t.division);
      const od = (offDef(data, season, w) || []).find(x => x.abbr === abbr);
      return `<tr><td class="strong nowrap">W${w}</td><td class="num">${rec(t)}</td>
        <td class="num">${rankIn(wt, abbr)}. <small class="muted">/ ${wt.length}</small></td>
        <td class="num">${rankIn(conf, abbr)}. <small class="muted">${t.conference}</small></td>
        <td class="num">${rankIn(div, abbr)}. <small class="muted">${t.conference} ${t.division}</small></td>
        <td class="num">${od ? `${od.offRank}. <small class="muted">(${fmtEpa(od.off)})</small>` : '—'}</td>
        <td class="num">${od ? `${od.defRank}. <small class="muted">(${fmtEpa(od.def)})</small>` : '—'}</td></tr>`;
    }).join('');
    return `<div class="card nfl-card"><div class="card-head"><h2>📈 Verlauf je Woche</h2></div>
      <div class="table-wrap"><table class="table compact">
        <thead><tr><th>Woche</th><th class="num">W-L</th><th class="num">NFL #</th><th class="num">Conf #</th><th class="num">Div #</th><th class="num" title="Offense-Rang nach EPA/Play">OR #</th><th class="num" title="Defense-Rang nach zugelassener EPA/Play">DR #</th></tr></thead>
        <tbody>${rows}</tbody></table></div>
      <div class="cs-foot explain">NFL/Conf/Div = Rang nach Sieg-Quote. OR/DR = Offense-/Defense-Rang nach EPA/Play (Wert in Klammern).</div></div>`;
  }

  function playersBlock(ctx, abbr) {
    const { data, ui, href } = ctx;
    const e = ui.esc;
    const board = data.DYNASTY_BOARD || [];
    if (!board.length) return '';
    const teams = {}; (data.LEAGUE_TEAMS || []).forEach(t => { teams[t.id] = t; });
    const owner = new Map();
    Object.entries(data.ROSTERS_LIVE || {}).forEach(([id, l]) => (l || []).forEach(p => owner.set(normKey(p.name), teams[id] || { id, name: id })));
    const posCount = {}, overall = new Map(), posRank = new Map();
    board.slice().sort((a, b) => a.avg - b.avg).forEach((p, i) => { overall.set(p, i + 1); posCount[p.pos] = (posCount[p.pos] || 0) + 1; posRank.set(p, posCount[p.pos]); });
    const list = board.filter(p => ['QB', 'RB', 'WR', 'TE'].includes(p.pos) && T().canon(p.team) === abbr).sort((a, b) => a.avg - b.avg);
    const D = data.MATCHUP_ADVANTAGE;
    const bw = D ? MFHFB.nfl.ma.upcomingWeek(D) : null;
    const badge = p => D ? MFHFB.nfl.ma.badgeFor(D, p.pos, abbr, bw) : '';
    return `<div class="card nfl-card"><div class="card-head"><h2>🧍 Fantasy-Spieler</h2><span class="muted" style="font-size:12px">QB/RB/WR/TE im Dynasty Board</span></div>
      ${list.length ? `<div class="table-wrap"><table class="table compact">
        <thead><tr><th class="num">Dyn. #</th><th>Spieler</th><th>Pos</th><th>Liga-Team</th></tr></thead>
        <tbody>${list.map(p => { const o = owner.get(normKey(p.name)); return `<tr>
          <td class="num rank">${overall.get(p)}</td>
          <td class="strong">${e(p.name)}${badge(p)}</td>
          <td><span class="pos pos-${e(p.pos)}">${e(p.pos)}${posRank.get(p)}</span></td>
          <td>${o ? `<a class="team-cell" href="${href('teams', o.id)}"><span class="team-emoji">${e(o.emoji || '')}</span><span>${e(o.name)}</span></a>` : '<span class="avail">verfügbar</span>'}</td></tr>`; }).join('')}</tbody>
      </table></div>` : `<div class="muted cs-pad">Keine Dynasty-Board-Einträge für dieses Team.</div>`}
      ${D ? `<div class="cs-foot explain">Badge = Matchup Woche ${bw}: Rang des Gegners bei zugelassenen Fantasy-Punkten an diese Position (Details: Matchup Advantage).</div>` : ''}</div>`;
  }

  function nextGame(ctx, abbr) {
    const D = ctx.data.MATCHUP_ADVANTAGE;
    if (!D || !D.schedule) return '';
    const weeks = Object.keys(D.schedule).map(Number).sort((a, b) => a - b).filter(w => w >= D.currentWeek);
    for (const w of weeks) {
      const g = (D.schedule[w] || []).find(x => (x.home === abbr || x.away === abbr) && x.homeScore == null);
      if (g) {
        const home = g.home === abbr, opp = home ? g.away : g.home;
        return `<a class="nfl-next" href="${ctx.href('nflmatchup', w, `${g.away}-${g.home}`)}">Nächstes Spiel: <b>Woche ${w} ${home ? 'vs' : '@'} ${ctx.ui.esc(opp)}</b>${g.weekday ? ` · ${{ Sunday: 'So', Monday: 'Mo', Thursday: 'Do', Saturday: 'Sa', Friday: 'Fr' }[g.weekday] || ''} ${ctx.ui.esc(g.time || '')}` : ''} → Matchup Advantage</a>`;
      }
    }
    return '';
  }

  function detail(ctx, abbr) {
    const { data, ui, href } = ctx;
    const e = ui.esc;
    const { season, weeks } = seasonOf(data);
    const st = tdState(ctx);
    const rows = season ? weekRows(data, season, weeks[weeks.length - 1]) : [];
    const t = rows.find(x => x.abbr === abbr);
    const div = t ? rows.filter(x => x.conference === t.conference && x.division === t.division) : [];
    return `
      <a class="back" href="${href('nflteams')}">← NFL Teams</a>
      <div class="nfl-hero" style="--tc:${T().color(abbr)}">
        <span class="nfl-hero-abbr display">${e(abbr)}</span>
        <div><h1 class="page-title display">${e(T().name(abbr))}</h1>
          <div class="page-sub">${t ? `${rec(t)} · ${rankIn(div, abbr)}. ${t.conference} ${t.division} · ${rankIn(rows, abbr)}. NFL · Punkte ${t.pf}:${t.pa}` : ''}</div>
          ${nextGame(ctx, abbr)}</div>
      </div>
      ${season ? radarBlock(ctx, abbr, season, st) : ''}
      <div class="nfl-2col nfl-detail-cols">
        ${season && weeks.length ? historyBlock(ctx, abbr, season, weeks) : ''}
        ${playersBlock(ctx, abbr)}
      </div>`;
  }

  MFHFB.pages.register({
    id: 'nflteams',
    section: 'nfl',
    label: 'NFL Teams',
    icon: '🏈',
    applies: { sport: ['nfl'] },
    data: ['teams', 'rosters-live', '?dynasty-board', 'sport:nfl-power-rankings', '?sport:nfl-power-score', '?sport:matchup-advantage'],
    title: ({ params }) => params[0] ? `${MFHFB.nfl.teams.name(params[0])}` : 'NFL Teams',
    render(ctx) {
      const a = ctx.params[0] && T().canon(ctx.params[0]);
      return a && T().isTeam(a) ? detail(ctx, a) : overview(ctx);
    },
    mount(root, ctx) {
      const save = patch => { ctx.store.setJSON('nflteam', { ...tdState(ctx), ...patch }); ctx.refresh(); };
      root.querySelectorAll('[data-mode]').forEach(b => b.addEventListener('click', () => save({ mode: b.dataset.mode })));
      const w = root.querySelector('[data-psweek]');
      if (w) w.addEventListener('change', () => save({ week: Number(w.value) }));
      root.querySelectorAll('[data-cmp]').forEach(s => s.addEventListener('change', () => {
        const cmp = (tdState(ctx).cmp || []).slice(0, 2);
        cmp[Number(s.dataset.cmp)] = s.value || null;
        save({ cmp });
      }));
    },
  });
})();
