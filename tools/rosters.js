// ============================================================
//  Tool: Teams & Roster
//  #/<liga>/teams            → Übersicht aller Teams (Record, Kadergröße)
//  #/<liga>/teams/<teamId>   → Kader eines Teams (Starter / Bank / IR)
//  Datenformat ROSTERS_LIVE ist bei ESPN- (BWP) und Sleeper-Ligen (DOPE)
//  identisch — die Sync-Scripts sind die Plattform-Adapter.
// ============================================================

(function () {
  const POS_ORDER = ['QB', 'RB', 'WR', 'TE', 'FLEX', 'K', 'D/ST', 'DEF', 'DST'];
  const posRank = p => { const i = POS_ORDER.indexOf(p); return i < 0 ? 99 : i; };
  const byPos = (a, b) => (posRank(a.pos) - posRank(b.pos)) || String(a.name).localeCompare(String(b.name));
  const isIR = p => !p.isStarter && String(p.status || '').toUpperCase() === 'IR';

  function overview({ data, href, ui }) {
    const e = ui.esc;
    const rosters = data.ROSTERS_LIVE || {};
    const recs = (data.TEAM_RECORDS_LIVE && data.TEAM_RECORDS_LIVE.records) || {};
    const teams = data.LEAGUE_TEAMS || [];
    return `
      <div class="page-head">
        <h1 class="page-title display">🧍 Teams</h1>
        <div class="page-sub">${teams.length} Teams · Kader live von der Plattform synchronisiert</div>
      </div>
      <div class="team-grid">
        ${teams.map(t => `<a class="team-card" href="${href('teams', t.id)}">
          <span class="team-card-emoji">${e(t.emoji || '🏈')}</span>
          <span class="team-card-body">
            <span class="team-name">${e(t.name)}</span>
            ${t.owner ? `<span class="team-owner">${e(t.owner)}</span>` : ''}
          </span>
          <span class="team-card-meta">
            ${recs[t.id] ? `<span class="strong">${e(recs[t.id])}</span>` : ''}
            <span>${(rosters[t.id] || []).length} Spieler</span>
          </span>
        </a>`).join('')}
      </div>`;
  }

  function roster({ data, params, href, ui }) {
    const e = ui.esc;
    const team = ui.teamIndex(data.LEAGUE_TEAMS);
    const t = team(params[0]);
    const players = (data.ROSTERS_LIVE || {})[params[0]];
    if (!players) return ui.empty('Team nicht gefunden', 'Zurück zur Team-Übersicht und neu wählen.', '🧍');
    const rec = ((data.TEAM_RECORDS_LIVE && data.TEAM_RECORDS_LIVE.records) || {})[params[0]];

    const groups = [
      { label: 'Starter', rows: players.filter(p => p.isStarter).sort(byPos) },
      { label: 'Bank', rows: players.filter(p => !p.isStarter && !isIR(p)).sort(byPos) },
      { label: 'IR', rows: players.filter(isIR).sort(byPos) },
    ].filter(g => g.rows.length);

    const teams = data.LEAGUE_TEAMS || [];
    return `
      <div class="page-head">
        <a class="back" href="${href('teams')}">← Alle Teams</a>
        <h1 class="page-title display">${e(t.emoji || '')} ${e(t.name)}</h1>
        <div class="page-sub">${t.owner ? e(t.owner) + ' · ' : ''}${rec ? 'Record ' + e(rec) + ' · ' : ''}${players.length} Spieler</div>
      </div>
      <div class="chip-row" aria-label="Team wechseln">
        ${teams.map(x => `<a class="chip-link${x.id === t.id ? ' active' : ''}" href="${href('teams', x.id)}" title="${e(x.name)}">${e(x.emoji || '🏈')}</a>`).join('')}
      </div>
      ${groups.map(g => `
        <h2 class="group-title">${g.label} <span>${g.rows.length}</span></h2>
        <div class="table-wrap">
          <table class="table roster">
            <thead><tr><th class="pos-col">Pos</th><th>Spieler</th><th>NFL</th><th>Status</th></tr></thead>
            <tbody>${g.rows.map(p => `<tr>
              <td class="pos-col"><span class="pos pos-${e(String(p.pos).replace(/[^A-Z]/gi, ''))}">${e(p.pos)}</span></td>
              <td class="strong">${e(p.name)}</td>
              <td>${e(p.nfl || '')}</td>
              <td>${p.status ? `<span class="status-tag">${e(p.status)}</span>` : ''}</td>
            </tr>`).join('')}</tbody>
          </table>
        </div>`).join('')}`;
  }

  MFHFB.pages.register({
    id: 'teams',
    section: 'teams',
    label: 'Teams & Roster',
    icon: '🧍',
    applies: { sport: ['nfl'] },
    data: ['teams', 'rosters-live'],
    title: ({ data, params, ui }) => params[0] ? ui.teamIndex(data.LEAGUE_TEAMS)(params[0]).name : 'Teams',
    render(ctx) { return ctx.params[0] ? roster(ctx) : overview(ctx); },
  });
})();
