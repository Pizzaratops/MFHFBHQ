// ============================================================
//  Tool: Weekly Scores (Punkte-Ligen)
// ============================================================
//  #/<liga>/weekly            → letzte gespielte Woche
//  #/<liga>/weekly/<woche>    → Rangliste der Woche nach Punkten
//  #/<liga>/weekly/saison     → Saison-Matrix (Team × Woche)
//
//  Übernimmt "Weekly Scores" der alten Seiten und ergänzt aus denselben
//  Daten:
//    - All-Play: gegen wie viele Teams hätte die Punktzahl dieser Woche
//      gewonnen (Pech/Glück beim Spielplan sichtbar machen)
//    - Saison: Ø, Bestwert, All-Play gesamt und "Glück" = tatsächliche
//      H2H-Siege minus erwartete Siege (All-Play-Quote × Spiele).
//      Das Median-Spiel (DOPE) bleibt hier bewusst außen vor, weil es
//      selbst schon ein Stück All-Play ist.
// ============================================================

(function () {
  // All-Play je Team für eine Woche: { teamId: { w, l, t } }
  function allPlay(entries) {
    const out = {};
    entries.forEach(a => {
      const r = { w: 0, l: 0, t: 0 };
      entries.forEach(b => {
        if (a.teamId === b.teamId) return;
        if (a.points > b.points) r.w++; else if (a.points < b.points) r.l++; else r.t++;
      });
      out[a.teamId] = r;
    });
    return out;
  }
  const rec = r => `${r.w}-${r.l}${r.t ? '-' + r.t : ''}`;

  function weekView(ctx, season, weeks, week) {
    const { data, ui, href } = ctx;
    const e = ui.esc;
    const team = ui.teamIndex(data.LEAGUE_TEAMS);
    const entries = (data.WEEKLY_SCORES[season][week] || []).slice().sort((a, b) => b.points - a.points);
    const ap = allPlay(entries);
    const hasMedian = entries.some(x => x.medianResult);
    return `
      <div class="table-wrap">
        <table class="table">
          <thead><tr>
            <th class="num">#</th><th>Team</th><th class="num">Punkte</th><th>Gegner</th><th class="num">Gegner-Pkt.</th>
            <th class="num">Ergebnis</th>${hasMedian ? '<th class="num">Median</th>' : ''}
            <th class="num" title="Gegen wie viele Teams diese Punktzahl gewonnen hätte">All-Play</th>
          </tr></thead>
          <tbody>${entries.map((x, i) => {
            const t = team(x.teamId), o = team(x.opponentId);
            const res = x.points > x.opponentPoints ? 'W' : x.points < x.opponentPoints ? 'L' : 'T';
            return `<tr>
              <td class="num rank">${i + 1}</td>
              <td><a class="team-cell" href="${href('teams', x.teamId)}"><span class="team-emoji">${e(t.emoji || '')}</span><span class="team-name">${e(t.name)}</span></a></td>
              <td class="num strong">${ui.num(x.points)}</td>
              <td><span class="team-cell muted"><span class="team-emoji">${e(o.emoji || '')}</span><span>${e(o.name)}</span></span></td>
              <td class="num muted">${ui.num(x.opponentPoints)}</td>
              <td class="num"><span class="res res-${res}">${res}</span></td>
              ${hasMedian ? `<td class="num">${x.medianResult ? `<span class="median-tag median-${x.medianResult}">${x.medianResult}</span>` : ''}</td>` : ''}
              <td class="num">${rec(ap[x.teamId])}</td>
            </tr>`;
          }).join('')}</tbody>
        </table>
      </div>`;
  }

  function seasonView(ctx, season, weeks) {
    const { data, ui, href } = ctx;
    const e = ui.esc;
    const team = ui.teamIndex(data.LEAGUE_TEAMS);
    const rows = {};
    const top = {};
    weeks.forEach(w => {
      const entries = data.WEEKLY_SCORES[season][w] || [];
      const ap = allPlay(entries);
      const n = entries.length;
      top[w] = Math.max(...entries.map(x => x.points));
      entries.forEach(x => {
        const r = rows[x.teamId] || (rows[x.teamId] = { teamId: x.teamId, pts: {}, apW: 0, apL: 0, apT: 0, wins: 0, games: 0, expected: 0 });
        r.pts[w] = x.points;
        r.apW += ap[x.teamId].w; r.apL += ap[x.teamId].l; r.apT += ap[x.teamId].t;
        r.games++;
        if (x.points > x.opponentPoints) r.wins++; else if (x.points === x.opponentPoints) r.wins += 0.5;
        r.expected += n > 1 ? (ap[x.teamId].w + ap[x.teamId].t / 2) / (n - 1) : 0;
      });
    });
    const list = Object.values(rows).map(r => {
      const vals = Object.values(r.pts);
      return { ...r, avg: vals.reduce((a, b) => a + b, 0) / vals.length, best: Math.max(...vals), luck: r.wins - r.expected };
    }).sort((a, b) => b.avg - a.avg);

    return `
      <div class="note">Sortiert nach Punkteschnitt. <b>All-Play</b> = Bilanz, wenn man jede Woche gegen alle anderen Teams gespielt hätte. <b>Glück</b> = tatsächliche Siege minus erwartete Siege aus der All-Play-Quote (positiv = günstiger Spielplan).</div>
      <div class="table-wrap">
        <table class="table compact">
          <thead><tr>
            <th>Team</th>${weeks.map(w => `<th class="num"><a href="${href('weekly', w)}">W${w}</a></th>`).join('')}
            <th class="num">Ø</th><th class="num">All-Play</th><th class="num">Glück</th>
          </tr></thead>
          <tbody>${list.map(r => {
            const t = team(r.teamId);
            return `<tr>
              <td><a class="team-cell" href="${href('teams', r.teamId)}"><span class="team-emoji">${e(t.emoji || '')}</span><span class="team-name">${e(t.name)}</span></a></td>
              ${weeks.map(w => `<td class="num${r.pts[w] === top[w] ? ' week-top' : ''}">${r.pts[w] != null ? ui.num(r.pts[w]) : '–'}</td>`).join('')}
              <td class="num strong">${ui.num(r.avg)}</td>
              <td class="num">${r.apW}-${r.apL}${r.apT ? '-' + r.apT : ''}</td>
              <td class="num ${r.luck > 0.05 ? 'up' : r.luck < -0.05 ? 'down' : 'muted'}">${ui.signed(r.luck)}</td>
            </tr>`;
          }).join('')}</tbody>
        </table>
      </div>`;
  }

  MFHFB.pages.register({
    id: 'weekly',
    section: 'standings',
    label: 'Weekly Scores',
    icon: '🗓️',
    applies: { scoring: ['points'] },
    data: ['teams', 'weekly-scores'],
    title: ({ params }) => params[0] === 'saison' ? 'Weekly Scores · Saison' : params[0] ? `Weekly Scores W${params[0]}` : 'Weekly Scores',
    render(ctx) {
      const { data, params, href, ui } = ctx;
      const e = ui.esc;
      const { season, weeks } = ui.seasonWeeks(data.WEEKLY_SCORES);
      if (!weeks.length) return ui.empty('Noch keine Wochenwerte', 'Sobald die Saison läuft, füllt der Sync diese Seite automatisch.', '🗓️');
      const isSeason = params[0] === 'saison';
      const week = weeks.includes(Number(params[0])) ? Number(params[0]) : weeks[weeks.length - 1];
      return `
        <div class="page-head">
          <h1 class="page-title display">🗓️ Weekly Scores</h1>
          <div class="page-sub">Saison ${e(season)} · ${isSeason ? 'alle gespielten Wochen' : `Woche ${week}, sortiert nach Punkten`}</div>
        </div>
        <div class="week-picker" role="tablist" aria-label="Woche">
          <a role="tab" class="week-btn done${isSeason ? ' active' : ''}" aria-selected="${isSeason}" href="${href('weekly', 'saison')}">Saison</a>
          ${weeks.map(w => `<a role="tab" class="week-btn done${!isSeason && w === week ? ' active' : ''}" aria-selected="${!isSeason && w === week}" href="${href('weekly', w)}">W${w}</a>`).join('')}
        </div>
        ${isSeason ? seasonView(ctx, season, weeks) : weekView(ctx, season, weeks, week)}`;
    },
  });
})();
