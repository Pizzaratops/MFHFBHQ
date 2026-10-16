// ============================================================
//  Tool (NBA): Player Rankings — Saison / 30 Tage / 7 Tage / Off Season
// ============================================================
//  #/<liga>/players[/reg|/off]
//
//  Port von js/player-rankings.js (TTHQ + Funkytown). Keine eigene
//  Berechnung — die Quellen kommen fertig aus den Sync-Skripten:
//  - Saison (Standard ab Saisonstart): LIVESCORES_SEASON.season.nba, Saison bis
//    zum Stichtag, mit Δ-Rang zum vorherigen Stichtag (15.10.2026)
//  - 30 Tage / 7 Tage: neuester Eintrag aus LIVESCORES_AGGREGATE.month/.week.nba
//  - Off Season: OFFSEASON_RANKINGS (Summer League + Pre-Season, kumulativ)
//  Der Gesamtwert folgt dem hub-weiten Score-Modus (Z roh / Z ±3 /
//  Perzentil), neu gebildet aus den mitgelieferten Kategorie-Z-Scores.
//  Neu: Filter Alle / Frei / Gerostert und Heatmap je Kategorie.
// ============================================================

(function () {
  const N = () => MFHFB.nba;
  const LEAGUE_LABELS = { 'nba-summer-california': 'Cali', 'nba-summer-utah': 'Utah', 'nba-summer-las-vegas': 'Vegas', 'nba-preseason': 'Preseason' };
  const Z_KEYS = ['pts', 'reb', 'ast', 'stl', 'blk', 'tpm', 'fgImpact', 'ftImpact', 'to'];
  const COLS = [
    { k: 'games', l: 'GP', d: 0 }, { k: 'min', l: 'MIN', d: 1 },
    { k: 'pts', l: 'PTS', d: 1, z: 'pts' }, { k: 'reb', l: 'REB', d: 1, z: 'reb' }, { k: 'ast', l: 'AST', d: 1, z: 'ast' },
    { k: 'stl', l: 'STL', d: 1, z: 'stl' }, { k: 'blk', l: 'BLK', d: 1, z: 'blk' }, { k: 'to', l: 'TO', d: 1, z: 'to', asc: true },
    { k: 'tpm', l: '3PM', d: 1, z: 'tpm' }, { k: 'fgPct', l: 'FG%', d: 1, z: 'fgImpact', pct: true }, { k: 'ftPct', l: 'FT%', d: 1, z: 'ftImpact', pct: true },
  ];
  const fmtDate = s => { if (!s) return ''; const [y, m, d] = s.split('-'); return `${d}.${m}.${y}`; };

  // Quellen je Reiter (15.10.2026: + Saison bis heute und Δ-Rang zum Vortag)
  //  season → LIVESCORES_SEASON.season.nba (alle Spiele der Saison, Mindestspiele wachsen mit)
  //  reg    → LIVESCORES_AGGREGATE.month.nba (rollierende 30 Tage)
  //  week   → LIVESCORES_AGGREGATE.week.nba (rollierende 7 Tage)
  //  off    → OFFSEASON_RANKINGS
  //  College (Dizzle CBB, 16.10.2026): Liga-Schlüssel "ncaab", 4. Reiter = Vorsaison 2025-26
  //  (LAST_SEASON_RANKINGS aus sports/cbb/data) statt Off Season.
  let LK = 'nba', CBB = false;
  const setSport = ctx => { CBB = ctx.league.sport === 'cbb'; LK = CBB ? 'ncaab' : 'nba'; };
  const TABS_NBA = [['season', '🏆 Saison'], ['reg', '📅 30 Tage'], ['week', '⚡ 7 Tage'], ['off', '☀️ Off Season']];
  const TABS_CBB = [['season', '🏆 Saison'], ['reg', '📅 30 Tage'], ['week', '⚡ 7 Tage'], ['off', '📜 Vorsaison 25/26']];
  let TABS = TABS_NBA;
  function srcFor(data, tab) {
    if (tab === 'season') return ((data.LIVESCORES_SEASON || {}).season || {})[LK];
    if (tab === 'reg') return ((data.LIVESCORES_AGGREGATE || {}).month || {})[LK];
    if (tab === 'week') return ((data.LIVESCORES_AGGREGATE || {}).week || {})[LK];
    return null;
  }
  // { entry, prev } — prev = vorheriger Stichtag (für Δ-Rang)
  function entryFor(data, tab) {
    if (tab === 'off') return { entry: offEntry(data), prev: null };
    const m = srcFor(data, tab);
    if (!m) return { entry: null, prev: null };
    const dates = Object.keys(m).sort(), last = dates[dates.length - 1], e = last && m[last];
    if (!(e && e.players && e.players.length)) return { entry: null, prev: null };
    const p = dates.length > 1 ? m[dates[dates.length - 2]] : null;
    return { entry: { ...e, _stichtag: last }, prev: p && p.players && p.players.length ? { ...p, _stichtag: dates[dates.length - 2] } : null };
  }
  const regEntry = data => entryFor(data, 'season').entry || entryFor(data, 'reg').entry;
  const offEntry = data => {
    const O = CBB ? data.LAST_SEASON_RANKINGS : data.OFFSEASON_RANKINGS;
    return O && O.players && O.players.length ? O : null;
  };
  const defaultTab = data => (entryFor(data, 'season').entry ? 'season' : entryFor(data, 'reg').entry ? 'reg' : 'off');
  const tabOf = ctx => (TABS.some(t => t[0] === ctx.params[0]) ? ctx.params[0] : defaultTab(ctx.data));

  const defaults = { sort: 'composite', asc: false, q: '', own: 'all' };
  const getState = ctx => ({ ...defaults, ...ctx.store.getJSON('prank', {}) });

  function scored(entry) {
    const nba = N();
    const list = entry.players.map(p => ({ ...p, zRaw: p.composite }));
    if (list.every(r => r.zScores)) {
      const res = nba.fromCatZ(list.map(r => r.zScores), Z_KEYS);
      list.forEach((r, i) => { r.composite = res[i].score; });
    }
    list.slice().sort((a, b) => b.composite - a.composite).forEach((r, i) => { r.rk = i + 1; });
    return list;
  }
  function rows(ctx, entry, prev) {
    const nba = N();
    const list = scored(entry);
    if (prev) {
      const pr = new Map(scored(prev).map(r => [nba.key(r.name), r.rk]));
      list.forEach(r => { const o = pr.get(nba.key(r.name)); r.drk = o == null ? null : o - r.rk; r.isNew = o == null; });
    }
    const owner = nba.ownerIndex(ctx.data);
    list.forEach(r => { r.owner = owner(r.name); });
    return list;
  }
  const deltaCell = p => (p.isNew ? '<span class="pr-d new" title="Neu im Ranking (erstmals genug Spiele)">neu</span>'
    : p.drk == null ? '' : p.drk > 0 ? `<span class="pr-d up" title="${p.drk} Plätze besser als am Vortag">▲${p.drk}</span>`
      : p.drk < 0 ? `<span class="pr-d down" title="${-p.drk} Plätze schlechter als am Vortag">▼${-p.drk}</span>` : '<span class="pr-d">–</span>');

  function tbody(ctx, all, st) {
    const e = ctx.ui.esc, nba = N();
    const q = st.q.toLowerCase().trim();
    let list = all.filter(p => (st.own === 'all' || (st.own === 'free' ? !p.owner : !!p.owner))
      && (!q || p.name.toLowerCase().includes(q) || String(p.team || '').toLowerCase().includes(q) || (p.owner && p.owner.name.toLowerCase().includes(q))));
    const dir = st.asc ? 1 : -1;
    list = list.slice().sort((a, b) => {
      const nn = v => (v == null && st.sort === 'drk' ? -9999 : v);
      const av = nn(a[st.sort]), bv = nn(b[st.sort]);
      return dir * (typeof av === 'number' ? av - bv : String(av || '').localeCompare(String(bv || '')));
    });
    if (!list.length) return `<tr><td colspan="${COLS.length + 5}">${ctx.ui.empty('Keine Spieler gefunden', 'Suche oder Filter anpassen.', '🔎')}</td></tr>`;
    return list.slice(0, 500).map((p, i) => {
      const pos = nba.scorePositive(p.composite);
      const second = p.owner
        ? `<a class="ls-owner" href="${ctx.href('teams', p.owner.id)}">${e(p.owner.name)}</a>`
        : `<small>${e(nba.teamName(p.team))}</small>`;
      return `<tr>
        <td class="num rank">${i + 1}</td>
        <td class="num">${deltaCell(p)}</td>
        <td class="strong nba-sticky">${e(p.name)}</td>
        <td><div class="ls-team">${CBB ? `<b>${e(p.team || '')}</b>` : `<a class="nba-team-link" href="${ctx.href('nbateams', p.team)}">${e(p.team || '')}</a>`}${second}</div></td>
        ${COLS.map(c => { const v = p[c.k]; const z = c.z && p.zScores ? p.zScores[c.z] : NaN; return `<td class="num" style="${nba.heat(z)}">${typeof v === 'number' ? v.toFixed(c.d) + (c.pct ? '%' : '') : '—'}</td>`; }).join('')}
        <td class="num"><span class="ls-comp ${pos ? 'up' : 'down'}"${typeof p.zRaw === 'number' ? ` title="Z roh ${(p.zRaw >= 0 ? '+' : '') + p.zRaw.toFixed(2)}"` : ''}>${nba.fmtScore(p.composite)}</span></td>
      </tr>`;
    }).join('');
  }

  function render(ctx) {
    const { data, ui, params } = ctx, nba = N();
    setSport(ctx); TABS = CBB ? TABS_CBB : TABS_NBA;
    nba.init(data);
    const tab = tabOf(ctx);
    const { entry, prev } = entryFor(data, tab);
    const st = getState(ctx);
    const tabs = `<div class="seg" role="tablist">${TABS.map(([k, l]) => `<a class="seg-btn${tab === k ? ' active' : ''}" href="${ctx.href('players', k)}">${l}</a>`).join('')}</div>`;
    const head = `<div class="page-head"><h1 class="page-title display">🏅 Player Rankings 2026/27</h1>
      <div class="page-sub explain">9-Cat-Rankings automatisch aus den Live-Score-Stats · Bewertung umschaltbar</div></div>`;
    if (!entry) {
      return `${head}<div class="controls">${tabs}</div>${ui.empty(tab === 'off' ? (CBB ? 'Keine Vorsaison-Daten' : 'Noch keine Off-Season-Daten') : 'Noch keine Saison-Daten', tab === 'off' ? (CBB ? 'last-season-rankings.js fehlt.' : 'Summer League / Pre-Season fehlen noch.') : 'Kommt automatisch ab dem ersten Spieltag der regulären Saison (jeden Morgen aktualisiert).', '🏅')}`;
    }
    const meta = tab === 'off'
      ? `${fmtDate(entry.windowStart)} – ${fmtDate(entry.windowEnd)} · ${CBB ? `ganze Saison ${entry.season || ''}, alle D-I-Spieler ab ${entry.minGames} Spielen und 12 Min.` : (entry.leagues || []).map(l => LEAGUE_LABELS[l] || l).join(', ')}`
      : `${tab === 'season' ? `Saison ${fmtDate(entry.windowStart)} bis ${fmtDate(entry._stichtag)}` : tab === 'week' ? `Rollierende 7 Tage bis ${fmtDate(entry._stichtag)}` : `Rollierende 30 Tage bis ${fmtDate(entry._stichtag)}`} · ${entry.daysInWindow} Spieltag${entry.daysInWindow === 1 ? '' : 'e'}${prev ? ` · Δ = Rang gegenüber ${fmtDate(prev._stichtag)}` : ''}`;
    const avg = entry.leagueAvg ? ` · Liga-Ø FG% ${entry.leagueAvg.fg.toFixed(1)} · FT% ${entry.leagueAvg.ft.toFixed(1)}` : '';
    const all = rows(ctx, entry, prev);
    const th = (k, l, cls) => `<th class="${cls || ''}${st.sort === k ? ' sorted' : ''}"><button type="button" class="th-sort" data-sort="${k}">${l}${st.sort === k ? (st.asc ? ' ▲' : ' ▼') : ''}</button></th>`;
    return `${head}
      <div class="controls">${tabs}${nba.modeControl()}
        <div class="seg" role="group">${[['all', 'Alle'], ['free', 'Frei'], ['owned', 'Gerostert']].map(([k, l]) => `<button type="button" class="seg-btn${st.own === k ? ' active' : ''}" data-own="${k}">${l}</button>`).join('')}</div>
        <input type="search" class="search" placeholder="Spieler, ${CBB ? 'Schule' : 'NBA-Team'} oder Fantasy-Team …" value="${ui.esc(st.q)}" data-q aria-label="Suchen"></div>
      <div class="ls-info">${meta} · min. ${entry.minGames} Spiele${avg} · ${all.length} Spieler</div>
      <div class="table-wrap"><table class="table compact nba-prank"><thead><tr>
        <th class="num">#</th>${th('drk', 'Δ', 'num')}${th('name', 'Spieler', 'nba-sticky')}${th('team', 'Team')}${COLS.map(c => th(c.k, c.l, 'num')).join('')}${th('composite', nba.scoreLabel(), 'num')}
      </tr></thead><tbody data-body>${tbody(ctx, all, st)}</tbody></table></div>`;
  }

  function mount(root, ctx) {
    setSport(ctx); TABS = CBB ? TABS_CBB : TABS_NBA;
    N().bindModeControl(root, ctx.refresh);
    const save = (patch, full) => {
      ctx.store.setJSON('prank', { ...getState(ctx), ...patch });
      if (full) return ctx.refresh();
      const { entry, prev } = entryFor(ctx.data, tabOf(ctx));
      if (entry) root.querySelector('[data-body]').innerHTML = tbody(ctx, rows(ctx, entry, prev), getState(ctx));
    };
    root.querySelectorAll('[data-sort]').forEach(b => b.addEventListener('click', () => {
      const st = getState(ctx), k = b.dataset.sort;
      const ascDefault = k === 'rank' || k === 'name' || k === 'team' || k === 'to';
      // Δ: zuerst die größten Aufsteiger
      save(st.sort === k ? { asc: !st.asc } : { sort: k, asc: ascDefault }, true);
    }));
    root.querySelectorAll('[data-own]').forEach(b => b.addEventListener('click', () => save({ own: b.dataset.own }, true)));
    const q = root.querySelector('[data-q]');
    if (q) q.addEventListener('input', () => save({ q: q.value }));
  }

  MFHFB.pages.register({
    id: 'players', section: 'players', label: 'Player Rankings', icon: '🏅', applies: { sport: ['nba', 'cbb'] },
    data: l => (l.sport === 'cbb' ? ['teams', '?rosters-live', '?sport:schools', '?sport:livescores-aggregate', '?sport:livescores-season', '?sport:last-season-rankings']
      : ['teams', '?rosters-live', '?sport:aliases', '?sport:livescores-aggregate', '?sport:livescores-season', '?sport:offseason-rankings']),
    title: () => 'Player Rankings', render, mount,
  });
})();
