// ============================================================
//  Tool (NBA): Preseason Score
// ============================================================
//  #/<liga>/preseason
//
//  Zeigt PRESEASON_SCORE (sports/nba/data/preseason-score.js), täglich vom
//  Workflow „NBA Preseason Score“ gebaut (sports/nba/scripts/
//  update-preseason-score.js + preseason-score.js). Die Rechnung passiert
//  komplett im Script; hier wird nur angezeigt, gefiltert und sortiert.
//  Formeln/Schwellen NICHT hier nachbauen oder ändern.
//
//  Eine Datei für beide NBA-Ligen. Ligaabhängig ist nur der Liga-Status
//  (Kader aus ROSTERS_LIVE/ROSTERS, Zuordnung über den Namen wie bei Waiver,
//  die Kader-Dateien enthalten keine ESPN-IDs). „Mein Team“ wird je Liga im
//  Browser gemerkt. Redraft-Ligen (Funkytown) starten mit dem Filter
//  „Waiver-Kandidaten“ (FA + Rolle ⬆️ oder ein ↑-Badge).
//
//  Neu 06.10.2026.
// ============================================================

(function () {
  const N = () => MFHFB.nba;
  const GROUPS = [
    { key: 'sticky', label: 'Sticky', stats: ['ORB%', 'DRB%', 'BLK%', 'AST%'] },
    { key: 'other', label: 'Other', stats: ['PTS/36', 'TRB/36'] },
    { key: 'icky', label: 'Icky', stats: ['STL%', 'TOV%', 'TS%', 'FTr'], note: 'in der Preseason kaum aussagekräftig' },
    { key: 'style', label: 'Stil (nur Anzeige)', stats: ['3PAr', 'USG%', 'FTA/36', 'AST/36'] },
  ];
  const COMPACT = ['ORB%', 'DRB%', 'BLK%', 'AST%', 'USG%'];
  const ROLE = { up: ['⬆️', 'Mehr Minuten als in der Vorsaison'], down: ['⬇️', 'Weniger Minuten als in der Vorsaison'], stabil: ['➖', 'Ähnliche Minuten wie in der Vorsaison'], neu: ['🆕', 'Keine Vorsaison-Minuten (Rookie oder neu in der NBA)'] };
  const ROLE_ORDER = { up: 3, stabil: 2, down: 1, neu: 0 };

  const isPct = s => s.endsWith('%') || s === '3PAr' || s === 'FTr';
  const de = (x, d) => (x == null || !isFinite(x) ? '—' : Number(x).toFixed(d).replace('.', ','));
  const fmtStat = (s, v) => (v == null ? '—' : isPct(s) ? de(v * 100, 1) : de(v, 1));
  const signed = (x, d) => (x == null ? '—' : (x > 0 ? '+' : x < 0 ? '−' : '±') + de(Math.abs(x), d));

  function defaults(ctx) {
    return { q: '', team: '', pos: '', status: 'all', ranked: true, badges: false, waiver: ctx.league.format === 'Redraft', sort: 'score', dir: -1, open: null };
  }
  const getState = ctx => ({ ...defaults(ctx), ...ctx.store.getJSON('preseason', {}) });

  // Liga-Status je Spieler: { kind: 'mine'|'fa'|'team', team }
  function statusOf(ctx) {
    const owner = N().ownerIndex(ctx.data);
    const mine = ctx.store.get('myteam') || '';
    return p => {
      const t = owner(p.name);
      if (!t) return { kind: 'fa' };
      return { kind: String(t.id) === mine ? 'mine' : 'team', team: t };
    };
  }

  const hasUp = p => (p.badges || []).some(b => b.dir === 'up');
  const team = p => N().canonTeam(p.team);

  function filtered(ctx, st) {
    const T = ctx.data.PRESEASON_SCORE, status = statusOf(ctx);
    const q = String(st.q || '').toLowerCase().trim();
    let list = (T.players || []).map(p => ({ p, s: status(p) })).filter(({ p, s }) => {
      if (st.ranked && !p.ranked) return false;
      if (st.badges && !(p.badges || []).length) return false;
      if (st.team && team(p) !== st.team) return false;
      if (st.pos && p.pos !== st.pos) return false;
      if (q && !String(p.name || '').toLowerCase().includes(q)) return false;
      if (st.waiver && !(s.kind === 'fa' && (p.role === 'up' || hasUp(p)))) return false;
      if (st.status === 'mine' && s.kind !== 'mine') return false;
      if (st.status === 'fa' && s.kind !== 'fa') return false;
      if (st.status === 'rostered' && s.kind === 'fa') return false;
      if (st.status.startsWith('t:') && !(s.team && String(s.team.id) === st.status.slice(2))) return false;
      return true;
    });
    const sortVal = {
      rank: ({ p }) => (p.ranked ? -p.rank : null), score: ({ p }) => p.score, tier: ({ p }) => p.score,
      name: ({ p }) => String(p.name || '').toLowerCase(), min: ({ p }) => p.min, gp: ({ p }) => p.gp, gs: ({ p }) => p.gs,
      mpg: ({ p }) => p.mpg, dmpg: ({ p }) => p.roleDeltaMPG, role: ({ p }) => ROLE_ORDER[p.role],
      badges: ({ p }) => (p.badges || []).reduce((a, b) => a + (b.dir === 'up' ? 1 : -1), 0),
    };
    COMPACT.forEach(s => { sortVal[s] = ({ p }) => (p.stats[s] ? p.stats[s].shrunk : null); });
    const f = sortVal[st.sort] || sortVal.score;
    list = list.slice().sort((a, b) => {
      const av = f(a), bv = f(b);
      if (av == null && bv == null) return (b.p.ranked - a.p.ranked) || (b.p.score - a.p.score);
      if (av == null) return 1; if (bv == null) return -1;
      const d = typeof av === 'string' ? av.localeCompare(bv) : av - bv;
      return st.dir * d || (b.p.score - a.p.score);
    });
    return list;
  }

  function statusBadge(ctx, s) {
    const e = ctx.ui.esc;
    if (s.kind === 'mine') return '<span class="ps-own mine" title="Mein Team">🟢 Mein Team</span>';
    if (s.kind === 'fa') return '<span class="ps-own fa" title="Free Agent in dieser Liga">🆓 FA</span>';
    return `<span class="ps-own" style="--tc:${e(s.team.color || '')}" title="${e(s.team.name)}${s.team.owner ? ' (' + e(s.team.owner) + ')' : ''}">${e(N().initials(s.team.name))}</span>`;
  }

  function badgeHtml(b) {
    const tip = `Δ ${signed(b.deltaSD, 1)} SD ggü. Vorsaison` + (b.hitRate != null ? ` · historisch stimmte die Richtung in ${Math.round(b.hitRate * 100)} % der Fälle` : '');
    return `<span class="ps-badge ${b.dir}" title="${tip}">${b.stat} ${b.dir === 'up' ? '↑' : '↓'}</span>`;
  }

  function compactCell(p, s) {
    const v = p.stats[s];
    if (!v) return '<td class="num ps-hide-m">—</td>';
    const tip = `${s} · Preseason roh: ${fmtStat(s, v.raw)} · Vorsaison: ${fmtStat(s, v.prior)} · Konfidenz: ${Math.round((v.conf || 0) * 100)} %`;
    return `<td class="num ps-hide-m ps-compact" title="${tip}">${fmtStat(s, v.shrunk)}</td>`;
  }

  function detailRow(p, cols) {
    const groups = GROUPS.map(g => `<div class="ps-group ${g.key}">
        <div class="ps-group-head">${g.label}${g.note ? ` <small>· ${g.note}</small>` : ''}</div>
        <table class="ps-dtable"><thead><tr><th>Stat</th><th class="num">Preseason</th><th class="num">Vorsaison</th><th class="num">Schätzung</th><th>Konfidenz</th><th class="num">z</th></tr></thead><tbody>
        ${g.stats.map(s => {
          const v = p.stats[s] || {};
          const conf = Math.max(0, Math.min(1, v.conf || 0));
          return `<tr><td class="strong">${s}</td><td class="num">${fmtStat(s, v.raw)}</td><td class="num">${fmtStat(s, v.prior)}</td><td class="num strong">${fmtStat(s, v.shrunk)}</td>
            <td><span class="ps-conf" title="${Math.round(conf * 100)} % Gewicht für die Preseason"><span style="width:${(conf * 100).toFixed(0)}%"></span></span></td>
            <td class="num ${v.z > 0.5 ? 'up' : v.z < -0.5 ? 'down' : ''}">${signed(v.z, 1)}</td></tr>`;
        }).join('')}</tbody></table></div>`).join('');
    const prior = p.priorMPG != null ? `Vorsaison ${de(p.priorMPG, 1)} MPG in ${de(p.priorMin, 0)} Min.` : 'keine Vorsaison-Minuten';
    return `<tr class="ps-detail"><td colspan="${cols}"><div class="ps-detail-meta">${p.gp} Spiele · ${p.gs}× Starter · ${de(p.min, 0)} Preseason-Min. · ${prior}${p.hasPrior ? '' : ' · Vergleichsbasis: Positions-Schnitt'}</div><div class="ps-groups">${groups}</div></td></tr>`;
  }

  const COLS = 13;
  function tbody(ctx, st) {
    const e = ctx.ui.esc;
    const list = filtered(ctx, st);
    if (!list.length) return `<tr><td colspan="${COLS}">${ctx.ui.empty('Keine Treffer', st.waiver ? 'Gerade keine Waiver-Kandidaten. Filter „Waiver-Kandidaten“ ausschalten?' : 'Filter oder Suche anpassen.', '🔎')}</td></tr>`;
    return list.slice(0, 500).map(({ p, s }) => {
      const open = st.open === p.athleteId;
      const dm = p.roleDeltaMPG;
      const r = ROLE[p.role] || ROLE.neu;
      const bar = p.ranked ? `<span class="ps-bar"><span style="width:${Math.max(3, p.pct)}%"></span></span>` : '';
      return `<tr class="ps-row${p.ranked ? '' : ' ps-unranked'}${open ? ' open' : ''}" data-id="${e(p.athleteId)}" tabindex="0" aria-expanded="${open}">
        <td class="num rank">${p.ranked ? p.rank : '—'}</td>
        <td class="ps-name"><span class="strong">${e(p.name)}</span><span class="ps-sub"><a class="nba-team-link" href="${ctx.href('nbateams', team(p))}">${e(team(p))}</a> · ${e(p.pos)} · ${statusBadge(ctx, s)}</span></td>
        <td>${p.tier ? `<span class="ps-tier t${p.tier}">${p.tier}</span>` : '<span class="muted">—</span>'}</td>
        <td class="num ps-score"><b>${de(p.score, 1)}</b>${bar}</td>
        <td class="num ps-hide-m">${de(p.min, 0)} <span class="muted">/ ${p.gp} / ${p.gs}</span></td>
        <td class="num">${de(p.mpg, 1)}${dm != null ? ` <small class="${dm >= 0.05 ? 'up' : dm <= -0.05 ? 'down' : 'muted'}">${signed(dm, 1)}</small>` : ''}</td>
        <td class="ps-role" title="${r[1]}${dm != null ? ` (${signed(dm, 1)} MPG)` : ''}">${r[0]}</td>
        <td class="ps-badges">${(p.badges || []).map(badgeHtml).join('') || '<span class="muted">—</span>'}</td>
        ${COMPACT.map(c => compactCell(p, c)).join('')}
      </tr>${open ? detailRow(p, COLS) : ''}`;
    }).join('');
  }

  function render(ctx) {
    const { data, ui, league } = ctx;
    const e = ui.esc;
    N().init(data);
    const T = data.PRESEASON_SCORE;
    if (!T || !(T.players || []).length) return `<div class="page-head"><h1 class="page-title display">🌱 Preseason</h1></div>` + ui.empty('Noch keine Preseason-Daten', 'Der Workflow „NBA Preseason Score“ läuft während der Preseason täglich um 12 Uhr und füllt diese Seite.', '🌱');
    const st = getState(ctx);
    const teamsNba = [...new Set(T.players.map(team).filter(Boolean))].sort();
    const fteams = N().leagueTeams(data, false);
    const mine = ctx.store.get('myteam') || '';
    const when = T.generated ? new Date(T.generated).toLocaleString('de-DE', { dateStyle: 'medium', timeStyle: 'short' }) : '–';
    const th = (k, l, t, cls) => `<th class="${cls || ''}${st.sort === k ? ' sorted' : ''}"${t ? ` title="${t}"` : ''}><button type="button" class="th-sort" data-sort="${k}">${l}${st.sort === k ? (st.dir === 1 ? ' ▲' : ' ▼') : ''}</button></th>`;
    const chk = (k, l, t) => `<label class="ps-chk"${t ? ` title="${t}"` : ''}><input type="checkbox" data-chk="${k}"${st[k] ? ' checked' : ''}> ${l}</label>`;
    return `
      <div class="page-head"><h1 class="page-title display">🌱 Preseason ${e(T.season || '')}</h1>
        <div class="page-sub">Stand: ${e(when)} · ${T.games} Spiele · ${T.players.filter(p => p.ranked).length} Spieler mit Rang (≥ 40 Min.) · Vergleich: Saison ${e(T.baselineSeason || '')}</div></div>
      <details class="card ps-info">
        <summary>ℹ️ Was zeigt der Preseason Score?</summary>
        <div class="ps-info-body">
          <p><b>Was zeigt der Preseason Score?</b> Die beste Schätzung des Skill-Profils für die neue Saison aus Preseason + Vorsaison. Jeder Stat wird je nach Zuverlässigkeit unterschiedlich stark „geschrumpft“: Rebounds, Blocks und Assists sind schon nach wenigen Preseason-Spielen aussagekräftig, Steals, Trefferquoten und +/- fast gar nicht. Die Preseason pfeift mehr Fouls und hat mehr Turnover, das ist herausgerechnet.</p>
          <p><b>Rolle:</b> Die Preseason-Minuten sind das stärkste einzelne Signal für die spätere Rolle (r = 0,42).</p>
          <p><b>Echte Veränderungen (↑/↓):</b> nur wenn die Veränderung zur Vorsaison groß genug ist, um kein Zufall zu sein. Historisch (2014–2026) stimmte die Richtung in 66–84 % der Fälle.</p>
          <p><b>Bewusst nicht drin:</b> Gewichtung nach Gegnerstärke (hat in allen Tests die Vorhersage verschlechtert) und +/- / Trefferquoten im Score.</p>
        </div>
      </details>
      <div class="controls ps-controls">
        <input type="search" class="search" placeholder="Spieler suchen …" value="${e(st.q)}" data-q aria-label="Spieler suchen">
        <select class="tr-select" data-f="team" aria-label="NBA-Team"><option value="">Alle NBA-Teams</option>${teamsNba.map(t => `<option value="${t}"${st.team === t ? ' selected' : ''}>${t}</option>`).join('')}</select>
        <div class="seg" role="group" aria-label="Position">${[['', 'Alle'], ['G', 'G'], ['F', 'F'], ['C', 'C']].map(([v, l]) => `<button type="button" class="seg-btn${st.pos === v ? ' active' : ''}" data-pos="${v}">${l}</button>`).join('')}</div>
        <select class="tr-select" data-f="status" aria-label="Liga-Status">
          <option value="all"${st.status === 'all' ? ' selected' : ''}>Liga: alle Spieler</option>
          ${mine ? `<option value="mine"${st.status === 'mine' ? ' selected' : ''}>🟢 Mein Team</option>` : ''}
          <option value="fa"${st.status === 'fa' ? ' selected' : ''}>🆓 Free Agents</option>
          <option value="rostered"${st.status === 'rostered' ? ' selected' : ''}>Gerostert</option>
          ${fteams.map(t => `<option value="t:${t.id}"${st.status === 't:' + t.id ? ' selected' : ''}>${e(t.name)}</option>`).join('')}
        </select>
        <select class="tr-select" data-myteam aria-label="Mein Team"><option value="">Mein Team wählen …</option>${fteams.map(t => `<option value="${t.id}"${mine === String(t.id) ? ' selected' : ''}>🟢 ${e(t.name)}</option>`).join('')}</select>
      </div>
      <div class="controls ps-controls">
        ${chk('ranked', 'nur mit Rang (≥ 40 Min.)')}
        ${chk('badges', 'nur mit echten Veränderungen')}
        ${chk('waiver', '🆓 Waiver-Kandidaten', 'Free Agents mit Rolle ⬆️ oder mindestens einem ↑-Badge')}
      </div>
      <div class="table-wrap"><table class="table compact ps-table"><thead><tr>
        ${th('rank', '#', '', 'num')}${th('name', 'Spieler')}${th('tier', 'Tier')}${th('score', 'Score', 'Skill-Profil aus Sticky (×1,5), Other (×1) und Icky (×0,5), positionsrelativ', 'num')}
        ${th('min', 'MIN / GP / GS', 'Preseason-Minuten / Spiele / Starts', 'num ps-hide-m')}${th('mpg', 'MPG', 'Minuten pro Spiel, daneben Δ zur Vorsaison', 'num')}${th('role', 'Rolle', 'Preseason-Minuten im Vergleich zur Vorsaison (±5 MPG)')}${th('badges', 'Echte Veränderungen', 'Veränderungen ggü. der Vorsaison ab 0,75 SD')}
        ${COMPACT.map(s => th(s, s, s + ': Schätzung für die Saison (Preseason + Vorsaison), Tooltip mit Details', 'num ps-hide-m')).join('')}
      </tr></thead><tbody data-body>${tbody(ctx, st)}</tbody></table></div>
      <p class="muted ps-foot">Zeile anklicken für alle 14 Stats. Grau = unter 40 Preseason-Minuten (kein Rang). Liga-Status über die aktuellen Kader dieser Liga.</p>`;
  }

  function mount(root, ctx) {
    const body = root.querySelector('[data-body]');
    const save = (patch, full) => { ctx.store.setJSON('preseason', { ...getState(ctx), ...patch }); if (full) ctx.refresh(); else body.innerHTML = tbody(ctx, getState(ctx)); };
    const q = root.querySelector('[data-q]');
    if (q) q.addEventListener('input', () => save({ q: q.value }));
    root.querySelectorAll('[data-f]').forEach(s => s.addEventListener('change', () => save({ [s.dataset.f]: s.value })));
    root.querySelectorAll('[data-pos]').forEach(b => b.addEventListener('click', () => save({ pos: b.dataset.pos }, true)));
    root.querySelectorAll('[data-chk]').forEach(c => c.addEventListener('change', () => save({ [c.dataset.chk]: c.checked })));
    const my = root.querySelector('[data-myteam]');
    if (my) my.addEventListener('change', () => {
      ctx.store.set('myteam', my.value);
      const st = getState(ctx);
      save(st.status === 'mine' && !my.value ? { status: 'all' } : {}, true);
    });
    root.querySelectorAll('[data-sort]').forEach(b => b.addEventListener('click', () => {
      const st = getState(ctx), k = b.dataset.sort;
      save(st.sort === k ? { dir: -st.dir } : { sort: k, dir: k === 'name' ? 1 : -1 }, true);
    }));
    const toggle = tr => { if (!tr) return; const id = tr.dataset.id, st = getState(ctx); save({ open: st.open === id ? null : id }); };
    body.addEventListener('click', ev => { if (ev.target.closest('a')) return; toggle(ev.target.closest('tr.ps-row')); });
    body.addEventListener('keydown', ev => { if (ev.key === 'Enter' || ev.key === ' ') { const tr = ev.target.closest('tr.ps-row'); if (tr) { ev.preventDefault(); toggle(tr); } } });
  }

  MFHFB.pages.register({
    id: 'preseason', section: 'players', label: 'Preseason', icon: '🌱', applies: { sport: ['nba'] },
    data: ['teams', '?rosters-live', '?sport:aliases', '?preseason-score'],
    title: () => 'Preseason', render, mount,
  });
})();
