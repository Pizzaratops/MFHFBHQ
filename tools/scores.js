// ============================================================
//  Tool: Matchups & Scores (Punkte-Ligen)
//  Wochenauswahl; gespielte Wochen aus WEEKLY_SCORES, kommende aus
//  SCHEDULE. Route: #/<liga>/scores[/<woche>]
// ============================================================

MFHFB.pages.register({
  id: 'scores',
  section: 'matchups',
  label: 'Matchups',
  icon: '⚔️',
  applies: { scoring: ['points'] },
  data: ['teams', 'weekly-scores', 'schedule'],
  title: ({ params }) => params[0] ? `Woche ${params[0]}` : 'Matchups & Scores',
  render({ data, params, href, ui }) {
    const e = ui.esc;
    const weekly = data.WEEKLY_SCORES || {};
    const sched = data.SCHEDULE || {};
    const { season: scoredSeason, weeks: scored } = ui.seasonWeeks(weekly);
    const season = scoredSeason || Object.keys(sched).sort().pop();
    if (!season) return ui.empty('Kein Spielplan', 'Weder Scores noch Spielplan vorhanden.', '⚔️');

    const allWeeks = [...new Set([...scored, ...Object.keys(sched[season] || {}).map(Number)])].sort((a, b) => a - b);
    const lastScored = scored.length ? scored[scored.length - 1] : null;
    const requested = Number(params[0]);
    const week = allWeeks.includes(requested) ? requested : (lastScored || allWeeks[0]);
    const team = ui.teamIndex(data.LEAGUE_TEAMS);

    const entries = (weekly[season] || {})[week] || [];
    const games = entries.length
      ? ui.pairs(entries).map(g => ({ ...g, played: true }))
      : ((sched[season] || {})[week] || []).map(m => ({ a: m.home, b: m.away, played: false }));

    const side = (id, pts, win) => {
      const t = team(id);
      return `<a class="game-side${win ? ' win' : ''}" href="${href('teams', id)}">
        <span class="team-emoji">${e(t.emoji || '')}</span>
        <span class="game-team"><span class="team-name">${e(t.name)}</span>${t.owner ? `<span class="team-owner">${e(t.owner)}</span>` : ''}</span>
        <span class="game-pts">${pts == null ? '' : ui.num(pts, 2)}</span>
      </a>`;
    };

    return `
      <div class="page-head">
        <h1 class="page-title display">⚔️ Matchups & Scores</h1>
        <div class="page-sub">Saison ${e(season)} · ${entries.length ? 'Ergebnisse' : 'Spielplan (noch keine Scores)'}</div>
      </div>
      <div class="week-picker" role="tablist" aria-label="Woche">
        ${allWeeks.map(w => `<a role="tab" class="week-btn${w === week ? ' active' : ''}${scored.includes(w) ? ' done' : ''}"
          aria-selected="${w === week}" href="${href('scores', w)}">W${w}</a>`).join('')}
      </div>
      ${games.length ? `<div class="games">
        ${games.map(g => `<div class="game">
          ${side(g.a, g.played ? g.ap : null, g.played && g.ap > g.bp)}
          ${side(g.b, g.played ? g.bp : null, g.played && g.bp > g.ap)}
        </div>`).join('')}
      </div>` : ui.empty('Keine Paarungen', `Für Woche ${week} liegen keine Daten vor.`, '🗓️')}`;
  },
});
