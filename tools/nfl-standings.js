// ============================================================
//  Tool: Standings (Punkte-Ligen)
//  Tabelle nach W-L-T, Punkte (PF) als Tiebreak — gleiche Logik wie die
//  bisherigen BWP/DOPE-Seiten. Liga-spezifische Hinweise (z.B. BWPs
//  eingefrorene W1/W2 nach dem ESPN-Draft-Reset) kommen aus
//  league.notes.standings, nicht aus dem Tool selbst.
//
//  Max PF (25.11.2026): aus data/max-pf.js (scripts/sync-max-pf.js) —
//    - Ansicht "Echt": zusätzliche Spalten Max PF + Effizienz (PF / Max PF)
//    - Ansicht "Perfekte Aufstellung": Bilanz, wenn jedes Team jede Woche
//      optimal aufgestellt hätte (Max PF gegen Max PF des Gegners, bei
//      Median-Ligen zusätzlich gegen den Median der Max-PF-Werte)
//  Wochen ohne Max-PF-Daten (BWP W1/W2) zählen mit den echten Punkten.
// ============================================================

(function () {
  const mode = ctx => (ctx.store && ctx.store.getJSON('standings-view', {}).mode) || 'real';

  function maxModel(data, season, weeks) {
    const M = data.MAX_PF;
    if (!M || !M.weeks || String(M.season) !== String(season)) return null;
    const byTeam = {};
    const perWeek = {};
    let covered = 0;
    weeks.forEach(w => {
      const list = data.WEEKLY_SCORES[season][w] || [];
      const mw = M.weeks[w] || {};
      if (Object.keys(mw).length) covered++;
      const mx = {};
      list.forEach(r => { mx[r.teamId] = mw[r.teamId] ? mw[r.teamId].max : r.points; });
      perWeek[w] = mx;
      list.forEach(r => {
        const t = byTeam[r.teamId] = byTeam[r.teamId] || { max: 0, pf: 0, effPf: 0, effMax: 0, wins: 0, losses: 0, ties: 0 };
        t.max += mx[r.teamId]; t.pf += r.points;
        if (mw[r.teamId]) { t.effPf += r.points; t.effMax += mw[r.teamId].max; }
      });
    });
    return { byTeam, perWeek, covered, missing: weeks.filter(w => !Object.keys(M.weeks[w] || {}).length) };
  }

  function perfectRecords(data, season, weeks, model, median) {
    const rec = {};
    weeks.forEach(w => {
      const mx = model.perWeek[w];
      const vals = Object.values(mx).sort((a, b) => a - b);
      const med = vals.length ? (vals.length % 2 ? vals[(vals.length - 1) / 2] : (vals[vals.length / 2 - 1] + vals[vals.length / 2]) / 2) : 0;
      (data.WEEKLY_SCORES[season][w] || []).forEach(r => {
        const t = rec[r.teamId] = rec[r.teamId] || { wins: 0, losses: 0, ties: 0 };
        const a = mx[r.teamId], b = mx[r.opponentId];
        if (b != null) { if (a > b) t.wins++; else if (a < b) t.losses++; else t.ties++; }
        if (median) { if (a > med) t.wins++; else if (a < med) t.losses++; else t.ties++; }
      });
    });
    return rec;
  }

  MFHFB.pages.register({
    id: 'standings',
    section: 'standings',
    label: 'Standings',
    icon: '📈',
    applies: { scoring: ['points'] },
    data: ['teams', 'weekly-scores', '?league-info', '?max-pf'],
    render(ctx) {
      const { league, data, href, ui } = ctx;
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
      const median = ui.hasMedian(data.WEEKLY_SCORES, season);
      // Playoff-Linie (11.11.2026): Anzahl aus league.playoffs (ESPN-Ligen, von Hand) oder LEAGUE_INFO (Sleeper)
      const li = (data.LEAGUE_INFO && data.LEAGUE_INFO.settings) || {};
      const po = Object.assign({ teams: li.playoffTeams, weekStart: li.playoffWeekStart }, league.playoffs || {});
      const poNote = po.teams ? `Top ${po.teams} in die Playoffs (Linie)${po.weekStart ? ` · ab Woche ${po.weekStart}` : ''}` : '';

      const mm = maxModel(data, season, weeks);
      const view = mm ? mode(ctx) : 'real';
      const eff = id => { const t = mm && mm.byTeam[id]; return t && t.effMax ? (100 * t.effPf / t.effMax) : null; };
      const missNote = mm && mm.missing.length ? ` Für Woche ${mm.missing.join(', ')} gibt es keine Bankdaten, dort zählen die echten Punkte.` : '';
      const seg = mm ? `<div class="controls"><div class="seg" role="group">${[['real', 'Echt'], ['perfect', 'Perfekte Aufstellung']].map(([v, l]) =>
        `<button type="button" class="seg-btn${view === v ? ' active' : ''}" data-view="${v}" aria-pressed="${view === v}">${l}</button>`).join('')}</div></div>` : '';

      const teamCell = id => {
        const t = team(id);
        return `<td><a class="team-cell" href="${href('teams', id)}">
                  <span class="team-emoji">${e(t.emoji || '')}</span>
                  <span><span class="team-name">${e(t.name)}</span>${t.owner ? `<span class="team-owner">${e(t.owner)}</span>` : ''}</span>
                </a></td>`;
      };

      const head = `
      <div class="page-head">
        <h1 class="page-title display">📈 Standings</h1>
        <div class="page-sub">Stand nach Woche ${lastWeek} · Saison ${e(season)}${poNote ? ' · ' + e(poNote) : ''}<span class="explain"> · sortiert nach Siegen, bei Gleichstand ${h2h ? 'wie bei ESPN nach direktem Vergleich der punktgleichen Teams (nur wenn alle gleich oft gegeneinander gespielt haben), sonst ' : ''}nach erzielten Punkten</span></div>
      </div>
      ${seg}
      ${median ? `<div class="note explain">Bilanz <b>inkl. Median-Spiel</b>: jede Woche zusätzlich ein Sieg oder eine Niederlage gegen den Liga-Median, wie in Sleeper.</div>` : ''}
      ${note ? `<div class="note">${e(note)}</div>` : ''}`;

      if (view === 'perfect') {
        const pr = perfectRecords(data, season, weeks, mm, median);
        const realRank = {}; rows.forEach((r, i) => { realRank[r.teamId] = i + 1; });
        const realRec = {}; rows.forEach(r => { realRec[r.teamId] = r; });
        const list = Object.keys(pr).sort((a, b) => (pr[b].wins + pr[b].ties / 2) - (pr[a].wins + pr[a].ties / 2) || mm.byTeam[b].max - mm.byTeam[a].max);
        return `${head}
      <div class="note explain">Bilanz, wenn <b>jedes Team jede Woche optimal aufgestellt</b> hätte: Max PF gegen Max PF des Gegners${median ? ', dazu gegen den Median der Max-PF-Werte' : ''}. Bei Gleichstand entscheidet Max PF.${e(missNote)}</div>
      <div class="table-wrap">
        <table class="table">
          <thead><tr>
            <th class="num">#</th><th>Team</th><th class="num">Perfekt</th><th class="num">Echt</th>
            <th class="num" title="Platz in der echten Tabelle">Platz echt</th><th class="num">Max PF</th><th class="num" title="Erzielte Punkte geteilt durch Max PF">Effizienz</th>
          </tr></thead>
          <tbody>
            ${list.map((id, i) => {
              const p = pr[id], r = realRec[id] || { wins: 0, losses: 0, ties: 0 };
              const d = (r.wins + r.ties / 2) - (p.wins + p.ties / 2);
              const ef = eff(id);
              return `<tr${po.teams && i === po.teams - 1 && i < list.length - 1 ? ' class="po-cut"' : ''}>
                <td class="num rank">${i + 1}</td>
                ${teamCell(id)}
                <td class="num strong">${ui.record(p)}</td>
                <td class="num">${ui.record(r)} <span class="${d > 0 ? 'up' : d < 0 ? 'down' : 'muted'}" title="Siege echt minus Siege perfekt">${d > 0 ? '+' + d : d < 0 ? d : '±0'}</span></td>
                <td class="num">${realRank[id] || '–'}</td>
                <td class="num">${ui.num(mm.byTeam[id].max)}</td>
                <td class="num">${ef != null ? ui.num(ef) + ' %' : '–'}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
      <div class="explain">Grüne Zahl bei „Echt“: mehr Siege als mit perfekten Aufstellungen auf beiden Seiten (Gegner haben Punkte auf der Bank gelassen), rot: weniger.</div>`;
      }

      return `${head}
      <div class="table-wrap">
        <table class="table">
          <thead><tr>
            <th class="num">#</th><th>Team</th><th class="num">W-L-T</th>
            <th class="num">PF</th><th class="num">PA</th><th class="num">Diff</th>
            ${mm ? '<th class="num" title="Punkte mit der optimalen Aufstellung (Starter + Bank)">Max PF</th><th class="num" title="Erzielte Punkte geteilt durch Max PF">Eff.</th>' : ''}
          </tr></thead>
          <tbody>
            ${rows.map((r, i) => {
              const diff = r.pf - r.pa;
              const ef = eff(r.teamId);
              return `<tr${po.teams && i === po.teams - 1 && i < rows.length - 1 ? ' class="po-cut"' : ''}>
                <td class="num rank">${i + 1}</td>
                ${teamCell(r.teamId)}
                <td class="num strong">${ui.record(r)}${r.h2h ? ` <span class="muted" title="Direkter Vergleich unter den Teams mit gleicher Bilanz">(${r.h2h.w}-${r.h2h.l}${r.h2h.t ? '-' + r.h2h.t : ''})</span>` : ''}</td>
                <td class="num">${ui.num(r.pf)}</td>
                <td class="num">${ui.num(r.pa)}</td>
                <td class="num ${diff >= 0 ? 'up' : 'down'}">${ui.signed(diff)}</td>
                ${mm ? `<td class="num">${mm.byTeam[r.teamId] ? ui.num(mm.byTeam[r.teamId].max) : '–'}</td><td class="num">${ef != null ? ui.num(ef) + ' %' : '–'}</td>` : ''}
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
      ${mm ? `<div class="explain">Max PF = Punkte mit der bestmöglichen Aufstellung aus Startern und Bank. Effizienz = erzielte Punkte geteilt durch Max PF.${e(missNote)}</div>` : ''}`;
    },
    mount(root, ctx) {
      root.querySelectorAll('[data-view]').forEach(b => b.addEventListener('click', () => {
        ctx.store.setJSON('standings-view', { mode: b.dataset.view });
        ctx.refresh();
      }));
    },
  });
})();
