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

  // ---------- Bootleg Power Score fürs Fantasy-Team (FANTASY_POWER_SCORE) ----------
  //  Port von renderFantasyPowerScoreSection/_drawFantasyBootlegChart (BWP
  //  app.js): Rang je Kategorie unter allen Liga-Teams, Rang 1 = außen.
  //  Ansicht kumulativ/nur diese Woche, Werte Ø pro Woche oder Gesamt,
  //  Vergleich mit bis zu 2 weiteren Teams. SVG statt Chart.js.
  const fpsState = ctx => ({ mode: 'cumulative', week: null, fmt: 'avg', cmp: [], ...ctx.store.getJSON('fps', {}) });
  const r1 = v => Math.round(v * 10) / 10;

  function fpsBlock(ctx, teamId) {
    const { data, ui } = ctx;
    const e = ui.esc;
    const F = data.FANTASY_POWER_SCORE;
    if (!F || !F.weeks || !Object.keys(F.weeks).length) return '';
    const st = fpsState(ctx);
    const team = ui.teamIndex(data.LEAGUE_TEAMS);
    const weeks = Object.keys(F.weeks).map(Number).sort((a, b) => a - b);
    const week = weeks.includes(Number(st.week)) ? Number(st.week) : weeks[weeks.length - 1];
    const list = st.mode === 'weekly' ? F.weeks[week].weekly : F.weeks[week].cumulative;
    const n = list.length || (data.LEAGUE_TEAMS || []).length || 12;
    const ids = [teamId].concat((st.cmp || []).filter(x => x && x !== teamId)).slice(0, 3);
    const entries = ids.map(id => list.find(r => r.teamId === id)).filter(Boolean)
      .map(en => ({ ...en, games: st.mode === 'cumulative' ? (en.gamesPlayed || week) : 1 }));
    const cats = F.categories;
    const total = st.fmt === 'total' && st.mode === 'cumulative';
    const shown = (en, c) => en.values[c.key] == null ? null : total ? r1(en.values[c.key] * en.games) : en.values[c.key];
    const unit = c => total ? 'Gesamt' : c.unit;
    const empty = !entries.length || entries.every(en => cats.every(c => en.ranks[c.key] == null));
    const chart = empty ? `<div class="muted" style="padding:40px 10px;text-align:center">Für diese Woche liegen noch keine Werte vor.</div>`
      : MFHFB.charts.radar({
        axes: cats.map(c => ({ label: c.label })),
        series: entries.map(en => ({
          name: team(en.teamId).name,
          vals: cats.map(c => en.ranks[c.key] == null ? null : (n + 1 - en.ranks[c.key]) / n),
          tips: cats.map(c => en.ranks[c.key] == null ? 'kein Wert' : `${team(en.teamId).name} · ${c.label}: Rang ${en.ranks[c.key]} von ${n} (${shown(en, c)} ${unit(c)})`),
        })),
        label: 'Bootleg Power Score',
      }) + (entries.length > 1 ? MFHFB.charts.chips(entries.map(en => `${team(en.teamId).emoji || ''} ${team(en.teamId).name}`)) : '');
    const top = Math.ceil(n / 4);
    const avgRank = en => { const r = cats.map(c => en.ranks[c.key]).filter(x => x != null); return r.length ? r.reduce((a, b) => a + b, 0) / r.length : null; };
    const others = (data.LEAGUE_TEAMS || []).filter(t => t.id !== teamId);
    const picker = i => `<select class="tr-select" data-fcmp="${i}" aria-label="Vergleichsteam ${i + 1}"><option value="">＋ Vergleich${i ? ' 2' : ''}</option>${others.map(t => `<option value="${e(t.id)}"${(st.cmp || [])[i] === t.id ? ' selected' : ''}>${e(t.emoji || '')} ${e(t.name)}</option>`).join('')}</select>`;
    const seg = (key, opts) => `<div class="seg" role="group">${opts.map(([v, l]) => `<button type="button" class="seg-btn${st[key] === v ? ' active' : ''}" data-fset="${key}" data-val="${v}">${l}</button>`).join('')}</div>`;
    return `<div class="card nfl-ps">
      <div class="card-head"><h2>🎯 Bootleg Power Score</h2><span class="muted" style="font-size:12px">${st.mode === 'weekly' ? `Nur Woche ${week}` : `Kumulativ bis Woche ${week}`} · Rang unter ${n} Teams</span></div>
      <div class="controls" style="padding:10px 14px 0">
        ${seg('mode', [['cumulative', 'Kumulativ'], ['weekly', 'Nur diese Woche']])}
        <select class="tr-select" data-fweek aria-label="Woche">${weeks.map(w => `<option value="${w}"${w === week ? ' selected' : ''}>Woche ${w}</option>`).join('')}</select>
        ${st.mode === 'cumulative' ? seg('fmt', [['avg', 'Ø pro Woche'], ['total', 'Gesamt']]) : ''}
        ${picker(0)}${picker(1)}
      </div>
      <div class="nfl-ps-grid">
        <div class="nfl-ps-radar">${chart}</div>
        <div class="table-wrap"><table class="table compact">
          <thead><tr><th>Kategorie</th>${entries.map((en, i) => `<th class="num"><i class="cs-sw ${MFHFB.charts.SEL[i]}"></i>${e(team(en.teamId).emoji || '')}${entries.length === 1 ? ' ' + e(team(en.teamId).name) : ''}</th>`).join('')}</tr></thead>
          <tbody>${cats.map(c => `<tr><td><b>${e(c.label)}</b><small class="muted"> ${e(unit(c))}</small></td>${entries.map(en => { const r = en.ranks[c.key]; return `<td class="num"><span class="nfl-rk ${r != null && r <= top ? 'top' : r != null && r > n - top ? 'low' : ''}">${r != null ? '#' + r : '—'}</span><small class="muted">${shown(en, c) != null ? e(shown(en, c)) : ''}</small></td>`; }).join('')}</tr>`).join('')}
            <tr class="nfl-avg"><td><b>Ø Rang</b></td>${entries.map(en => { const a = avgRank(en); return `<td class="num strong">${a != null ? a.toFixed(1).replace('.', ',') : '—'}</td>`; }).join('')}</tr></tbody>
        </table></div>
      </div>
      <div class="cs-foot">Rang 1 = außen im Netz (bei „Points Allowed“ = am wenigsten zugelassen). Points by QB/RB/WR/TE = Starter-Punkte der Position, FLEX zählt zur echten Position.</div>
    </div>`;
  }

  function roster(ctx) {
    const { data, params, href, ui } = ctx;
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
            <thead><tr><th class="pos-col">Pos</th><th>Spieler</th><th>NFL</th>${data.MATCHUP_ADVANTAGE ? `<th class="ma-col" title="Gegner-Rang bei zugelassenen Fantasy-Punkten an diese Position (Details: NFL → Matchup Advantage)">Matchup W${MFHFB.nfl.ma.upcomingWeek(data.MATCHUP_ADVANTAGE)}</th>` : ''}<th>Status</th></tr></thead>
            <tbody>${g.rows.map(p => `<tr>
              <td class="pos-col"><span class="pos pos-${e(String(p.pos).replace(/[^A-Z]/gi, ''))}">${e(p.pos)}</span></td>
              <td class="strong">${e(p.name)}${data.MATCHUP_ADVANTAGE && p.nfl ? `<div class="ma-inline">${MFHFB.nfl.ma.badgeFor(data.MATCHUP_ADVANTAGE, p.pos, p.nfl, MFHFB.nfl.ma.upcomingWeek(data.MATCHUP_ADVANTAGE))}</div>` : ''}</td>
              <td>${p.nfl ? `<a class="nfl-team" href="${href('nflteams', MFHFB.nfl.teams.canon(p.nfl))}" style="--tc:${MFHFB.nfl.teams.color(p.nfl)}"><b>${e(p.nfl)}</b></a>` : ''}</td>
              ${data.MATCHUP_ADVANTAGE ? `<td class="ma-col">${p.nfl ? MFHFB.nfl.ma.badgeFor(data.MATCHUP_ADVANTAGE, p.pos, p.nfl, MFHFB.nfl.ma.upcomingWeek(data.MATCHUP_ADVANTAGE)) : ''}</td>` : ''}
              <td>${p.status ? `<span class="status-tag">${e(p.status)}</span>` : ''}</td>
            </tr>`).join('')}</tbody>
          </table>
        </div>`).join('')}
      ${fpsBlock(ctx, params[0])}`;
  }

  MFHFB.pages.register({
    id: 'teams',
    section: 'teams',
    label: 'Teams & Roster',
    icon: '🧍',
    applies: { sport: ['nfl'] },
    data: ['teams', 'rosters-live', '?fantasy-power-score', '?sport:matchup-advantage'],
    title: ({ data, params, ui }) => params[0] ? ui.teamIndex(data.LEAGUE_TEAMS)(params[0]).name : 'Teams',
    render(ctx) { return ctx.params[0] ? roster(ctx) : overview(ctx); },
    mount(root, ctx) {
      const save = patch => { ctx.store.setJSON('fps', { ...fpsState(ctx), ...patch }); ctx.refresh(); };
      root.querySelectorAll('[data-fset]').forEach(b => b.addEventListener('click', () => save({ [b.dataset.fset]: b.dataset.val })));
      const w = root.querySelector('[data-fweek]');
      if (w) w.addEventListener('change', () => save({ week: Number(w.value) }));
      root.querySelectorAll('[data-fcmp]').forEach(sel => sel.addEventListener('change', () => {
        const cmp = (fpsState(ctx).cmp || []).slice(0, 2); cmp[Number(sel.dataset.fcmp)] = sel.value || null; save({ cmp });
      }));
    },
  });
})();
