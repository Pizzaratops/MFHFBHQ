// ============================================================
//  Tool: Liga-Übersicht (Startseite einer Liga)
//  Kompakt: Top der Tabelle + Ergebnisse der letzten gespielten Woche.
// ============================================================

MFHFB.pages.register({
  id: 'home',
  section: 'home',
  label: 'Übersicht',
  icon: '🏠',
  applies: { scoring: ['points'] },
  data: ['teams', 'weekly-scores'],
  render({ league, data, href, ui }) {
    const e = ui.esc;
    const { season, weeks } = ui.seasonWeeks(data.WEEKLY_SCORES);
    const team = ui.teamIndex(data.LEAGUE_TEAMS);
    const head = `
      <div class="page-head">
        <h1 class="page-title display">${e(league.emoji)} ${e(league.name)}</h1>
        <div class="page-sub">${e(league.platform)} · ${e(league.format)} · ${(data.LEAGUE_TEAMS || []).length} Teams${season ? ' · Saison ' + e(season) : ''}</div>
      </div>`;
    if (!weeks.length) return head + ui.empty('Saison noch nicht gestartet', 'Sobald die ersten Ergebnisse da sind, erscheint hier die Übersicht.', '🏈');

    const lastWeek = weeks[weeks.length - 1];
    const top = ui.standings(data.WEEKLY_SCORES, season, lastWeek).slice(0, 5);
    const games = ui.pairs(data.WEEKLY_SCORES[season][lastWeek]);
    const pts = games.flatMap(g => [{ id: g.a, p: g.ap }, { id: g.b, p: g.bp }]).sort((a, b) => b.p - a.p);
    const best = pts[0], worst = pts[pts.length - 1];

    return head + `
      <div class="stat-row">
        <div class="stat"><div class="stat-label">Gespielt</div><div class="stat-value display">W${lastWeek}</div></div>
        <div class="stat"><div class="stat-label">Top-Score W${lastWeek}</div><div class="stat-value display">${ui.num(best.p)}</div><div class="stat-sub">${e(team(best.id).emoji || '')} ${e(team(best.id).name)}</div></div>
        <div class="stat"><div class="stat-label">Low-Score W${lastWeek}</div><div class="stat-value display">${ui.num(worst.p)}</div><div class="stat-sub">${e(team(worst.id).emoji || '')} ${e(team(worst.id).name)}</div></div>
      </div>
      <div class="two-col">
        <section class="card">
          <div class="card-head"><h2>Tabelle</h2><a href="${href('standings')}">Alle →</a></div>
          <table class="table compact"><tbody>
            ${top.map((r, i) => { const t = team(r.teamId); return `<tr>
              <td class="num rank">${i + 1}</td>
              <td><a class="team-cell" href="${href('teams', r.teamId)}"><span class="team-emoji">${e(t.emoji || '')}</span><span class="team-name">${e(t.name)}</span></a></td>
              <td class="num strong">${ui.record(r)}</td><td class="num muted">${ui.num(r.pf)}</td></tr>`; }).join('')}
          </tbody></table>
        </section>
        <section class="card">
          <div class="card-head"><h2>Woche ${lastWeek}</h2><a href="${href('scores', lastWeek)}">Details →</a></div>
          <div class="mini-games">
            ${games.map(g => { const a = team(g.a), b = team(g.b); return `<div class="mini-game">
              <span class="${g.ap > g.bp ? 'strong' : 'muted'}">${e(a.emoji || '')} ${e(a.name)}</span><span class="num ${g.ap > g.bp ? 'strong' : 'muted'}">${ui.num(g.ap)}</span>
              <span class="${g.bp > g.ap ? 'strong' : 'muted'}">${e(b.emoji || '')} ${e(b.name)}</span><span class="num ${g.bp > g.ap ? 'strong' : 'muted'}">${ui.num(g.bp)}</span>
            </div>`; }).join('')}
          </div>
        </section>
      </div>`;
  },
});
