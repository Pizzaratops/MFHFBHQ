// ============================================================
//  Tool (NBA): Player Rankings — Reg Season / Off Season
// ============================================================
//  #/<liga>/players[/reg|/off]
//
//  Port von js/player-rankings.js (TTHQ + Funkytown). Keine eigene
//  Berechnung — die Quellen kommen fertig aus den Sync-Skripten:
//  - Reg Season: neuester Monatseintrag aus LIVESCORES_AGGREGATE.month.nba
//    (rollierendes 30-Tage-Fenster, täglich fortgeschrieben)
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

  function regEntry(data) {
    const m = data.LIVESCORES_AGGREGATE && data.LIVESCORES_AGGREGATE.month && data.LIVESCORES_AGGREGATE.month.nba;
    if (!m) return null;
    const dates = Object.keys(m).sort(), last = dates[dates.length - 1], e = last && m[last];
    return e && e.players && e.players.length ? { ...e, _stichtag: last } : null;
  }
  const offEntry = data => (data.OFFSEASON_RANKINGS && data.OFFSEASON_RANKINGS.players && data.OFFSEASON_RANKINGS.players.length ? data.OFFSEASON_RANKINGS : null);

  const defaults = { sort: 'composite', asc: false, q: '', own: 'all' };
  const getState = ctx => ({ ...defaults, ...ctx.store.getJSON('prank', {}) });

  function rows(ctx, entry) {
    const nba = N();
    const list = entry.players.map(p => ({ ...p, zRaw: p.composite }));
    if (list.every(r => r.zScores)) {
      const res = nba.fromCatZ(list.map(r => r.zScores), Z_KEYS);
      list.forEach((r, i) => { r.composite = res[i].score; });
    }
    const owner = nba.ownerIndex(ctx.data);
    list.forEach(r => { r.owner = owner(r.name); });
    return list;
  }

  function tbody(ctx, all, st) {
    const e = ctx.ui.esc, nba = N();
    const q = st.q.toLowerCase().trim();
    let list = all.filter(p => (st.own === 'all' || (st.own === 'free' ? !p.owner : !!p.owner))
      && (!q || p.name.toLowerCase().includes(q) || String(p.team || '').toLowerCase().includes(q) || (p.owner && p.owner.name.toLowerCase().includes(q))));
    const dir = st.asc ? 1 : -1;
    list = list.slice().sort((a, b) => {
      const av = a[st.sort], bv = b[st.sort];
      return dir * (typeof av === 'number' ? av - bv : String(av || '').localeCompare(String(bv || '')));
    });
    if (!list.length) return `<tr><td colspan="${COLS.length + 4}">${ctx.ui.empty('Keine Spieler gefunden', 'Suche oder Filter anpassen.', '🔎')}</td></tr>`;
    return list.slice(0, 500).map((p, i) => {
      const pos = nba.scorePositive(p.composite);
      const second = p.owner
        ? `<a class="ls-owner" href="${ctx.href('teams', p.owner.id)}">${e(p.owner.name)}</a>`
        : `<small>${e(nba.teamName(p.team))}</small>`;
      return `<tr>
        <td class="num rank">${i + 1}</td>
        <td class="strong nba-sticky">${e(p.name)}</td>
        <td><div class="ls-team"><a class="nba-team-link" href="${ctx.href('nbateams', p.team)}">${e(p.team || '')}</a>${second}</div></td>
        ${COLS.map(c => { const v = p[c.k]; const z = c.z && p.zScores ? p.zScores[c.z] : NaN; return `<td class="num" style="${nba.heat(z)}">${typeof v === 'number' ? v.toFixed(c.d) + (c.pct ? '%' : '') : '—'}</td>`; }).join('')}
        <td class="num"><span class="ls-comp ${pos ? 'up' : 'down'}"${typeof p.zRaw === 'number' ? ` title="Z roh ${(p.zRaw >= 0 ? '+' : '') + p.zRaw.toFixed(2)}"` : ''}>${nba.fmtScore(p.composite)}</span></td>
      </tr>`;
    }).join('');
  }

  function render(ctx) {
    const { data, ui, params } = ctx, nba = N();
    nba.init(data);
    const reg = regEntry(data), off = offEntry(data);
    const tab = params[0] === 'off' || params[0] === 'reg' ? params[0] : (reg ? 'reg' : 'off');
    const entry = tab === 'off' ? off : reg;
    const st = getState(ctx);
    const tabs = `<div class="seg" role="tablist">${[['reg', '🏆 Reg Season'], ['off', '☀️ Off Season']].map(([k, l]) => `<a class="seg-btn${tab === k ? ' active' : ''}" href="${ctx.href('players', k)}">${l}</a>`).join('')}</div>`;
    const head = `<div class="page-head"><h1 class="page-title display">🏅 Player Rankings 2026/27</h1>
      <div class="page-sub">9-Cat-Rankings automatisch aus den Live-Score-Stats · Bewertung umschaltbar</div></div>`;
    if (!entry) {
      return `${head}<div class="controls">${tabs}</div>${ui.empty(tab === 'off' ? 'Noch keine Off-Season-Daten' : 'Noch keine Reg-Season-Daten', tab === 'off' ? 'Summer League / Pre-Season fehlen noch.' : 'Kommt automatisch, sobald die Saison läuft (rollierender 30-Tage-Monat).', '🏅')}`;
    }
    const meta = tab === 'off'
      ? `${fmtDate(entry.windowStart)} – ${fmtDate(entry.windowEnd)} · ${(entry.leagues || []).map(l => LEAGUE_LABELS[l] || l).join(', ')}`
      : `Rollierender Monat bis ${fmtDate(entry._stichtag)} · ${entry.daysInWindow} Tag${entry.daysInWindow === 1 ? '' : 'e'} mit Daten`;
    const avg = entry.leagueAvg ? ` · Liga-Ø FG% ${entry.leagueAvg.fg.toFixed(1)} · FT% ${entry.leagueAvg.ft.toFixed(1)}` : '';
    const all = rows(ctx, entry);
    const th = (k, l, cls) => `<th class="${cls || ''}${st.sort === k ? ' sorted' : ''}"><button type="button" class="th-sort" data-sort="${k}">${l}${st.sort === k ? (st.asc ? ' ▲' : ' ▼') : ''}</button></th>`;
    return `${head}
      <div class="controls">${tabs}${nba.modeControl()}
        <div class="seg" role="group">${[['all', 'Alle'], ['free', 'Frei'], ['owned', 'Gerostert']].map(([k, l]) => `<button type="button" class="seg-btn${st.own === k ? ' active' : ''}" data-own="${k}">${l}</button>`).join('')}</div>
        <input type="search" class="search" placeholder="Spieler, NBA- oder Fantasy-Team …" value="${ui.esc(st.q)}" data-q aria-label="Suchen"></div>
      <div class="ls-info">${meta} · min. ${entry.minGames} Spiele${avg} · ${all.length} Spieler</div>
      <div class="table-wrap"><table class="table compact nba-prank"><thead><tr>
        <th class="num">#</th>${th('name', 'Spieler', 'nba-sticky')}${th('team', 'Team')}${COLS.map(c => th(c.k, c.l, 'num')).join('')}${th('composite', nba.scoreLabel(), 'num')}
      </tr></thead><tbody data-body>${tbody(ctx, all, st)}</tbody></table></div>`;
  }

  function mount(root, ctx) {
    N().bindModeControl(root, ctx.refresh);
    const save = (patch, full) => {
      ctx.store.setJSON('prank', { ...getState(ctx), ...patch });
      if (full) return ctx.refresh();
      const data = ctx.data, tab = ctx.params[0] === 'off' ? offEntry(data) : ctx.params[0] === 'reg' ? regEntry(data) : (regEntry(data) || offEntry(data));
      root.querySelector('[data-body]').innerHTML = tbody(ctx, rows(ctx, tab), getState(ctx));
    };
    root.querySelectorAll('[data-sort]').forEach(b => b.addEventListener('click', () => {
      const st = getState(ctx), k = b.dataset.sort;
      const ascDefault = k === 'rank' || k === 'name' || k === 'team' || k === 'to';
      save(st.sort === k ? { asc: !st.asc } : { sort: k, asc: ascDefault }, true);
    }));
    root.querySelectorAll('[data-own]').forEach(b => b.addEventListener('click', () => save({ own: b.dataset.own }, true)));
    const q = root.querySelector('[data-q]');
    if (q) q.addEventListener('input', () => save({ q: q.value }));
  }

  MFHFB.pages.register({
    id: 'players', section: 'players', label: 'Player Rankings', icon: '🏅', applies: { sport: ['nba'] },
    data: ['teams', '?rosters-live', '?sport:aliases', '?sport:livescores-aggregate', '?sport:offseason-rankings'],
    title: () => 'Player Rankings', render, mount,
  });
})();
