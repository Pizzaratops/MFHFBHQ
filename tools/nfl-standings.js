// ============================================================
//  Tool: Standings (Punkte-Ligen)
//  Tabelle nach W-L-T, Punkte (PF) als Tiebreak — gleiche Logik wie die
//  bisherigen BWP/DOPE-Seiten. Liga-spezifische Hinweise (z.B. BWPs
//  eingefrorene W1/W2 nach dem ESPN-Draft-Reset) kommen aus
//  league.notes.standings, nicht aus dem Tool selbst.
// ============================================================

MFHFB.pages.register({
  id: 'standings',
  section: 'standings',
  label: 'Standings',
  icon: '📈',
  applies: { scoring: ['points'] },
  data: ['teams', 'weekly-scores', '?league-info'],
  render({ league, data, href, ui }) {
    const e = ui.esc;
    const { season, weeks } = ui.seasonWeeks(data.WEEKLY_SCORES);
    if (!weeks.length) {
      return ui.empty('Noch keine Saisondaten', 'Die Tabelle füllt sich automatisch, sobald Weekly Scores synchronisiert sind.', '📈');
    }
    const lastWeek = weeks[weeks.length - 1];
    const team = ui.teamIndex(data.LEAGUE_TEAMS);
    const h2h = (league.playoffs || {}).tiebreak === 'h2h';
    const rows = ui.standings(data.WEEKLY_SCORES, season, lastWeek, h2h ? 'h2h' : '');
    const note = league.notes && league.notes.standings;
    // Playoff-Linie (11.11.2026): Anzahl aus league.playoffs (ESPN-Ligen, von Hand) oder LEAGUE_INFO (Sleeper)
    const li = (data.LEAGUE_INFO && data.LEAGUE_INFO.settings) || {};
    const po = Object.assign({ teams: li.playoffTeams, weekStart: li.playoffWeekStart }, league.playoffs || {});
    const poNote = po.teams ? `Top ${po.teams} in die Playoffs (Linie)${po.weekStart ? ` · ab Woche ${po.weekStart}` : ''}` : '';

    return `
      <div class="page-head">
        <h1 class="page-title display">📈 Standings</h1>
        <div class="page-sub">Stand nach Woche ${lastWeek} · Saison ${e(season)}${poNote ? ' · ' + e(poNote) : ''}<span class="explain"> · sortiert nach Siegen, bei Gleichstand ${h2h ? 'wie bei ESPN nach direktem Vergleich der punktgleichen Teams (nur wenn alle gleich oft gegeneinander gespielt haben), sonst ' : ''}nach erzielten Punkten</span></div>
      </div>
      ${ui.hasMedian(data.WEEKLY_SCORES, season) ? `<div class="note explain">Bilanz <b>inkl. Median-Spiel</b>: jede Woche zusätzlich ein Sieg oder eine Niederlage gegen den Liga-Median, wie in Sleeper.</div>` : ''}
      ${note ? `<div class="note">${e(note)}</div>` : ''}
      <div class="table-wrap">
        <table class="table">
          <thead><tr>
            <th class="num">#</th><th>Team</th><th class="num">W-L-T</th>
            <th class="num">PF</th><th class="num">PA</th><th class="num">Diff</th>
          </tr></thead>
          <tbody>
            ${rows.map((r, i) => {
              const t = team(r.teamId);
              const diff = r.pf - r.pa;
              return `<tr${po.teams && i === po.teams - 1 && i < rows.length - 1 ? ' class="po-cut"' : ''}>
                <td class="num rank">${i + 1}</td>
                <td><a class="team-cell" href="${href('teams', r.teamId)}">
                  <span class="team-emoji">${e(t.emoji || '')}</span>
                  <span><span class="team-name">${e(t.name)}</span>${t.owner ? `<span class="team-owner">${e(t.owner)}</span>` : ''}</span>
                </a></td>
                <td class="num strong">${ui.record(r)}${r.h2h ? ` <span class="muted" title="Direkter Vergleich unter den Teams mit gleicher Bilanz">(${r.h2h.w}-${r.h2h.l}${r.h2h.t ? '-' + r.h2h.t : ''})</span>` : ''}</td>
                <td class="num">${ui.num(r.pf)}</td>
                <td class="num">${ui.num(r.pa)}</td>
                <td class="num ${diff >= 0 ? 'up' : 'down'}">${ui.signed(diff)}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>`;
  },
});
