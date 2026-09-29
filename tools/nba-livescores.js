// ============================================================
//  Tool (NBA): Live Scores — Daily / Weekly / Monthly / Box Scores
// ============================================================
//  #/<liga>/livescores[/<periode>/<wettbewerb>/<datum>]
//    periode: daily | week | month | box
//
//  Neu gebaut nach js/livescores.js (TTHQ, in Funkytown identisch).
//  Rechenlogik unverändert: Z-Composite = Σ zScores[k] × Punt-Gewicht
//  (0–2 in 0,25-Schritten, 1 = ungewichtete Originalsumme), Min.-Spiele-
//  Filter nur für Weekly/Monthly, Sortierung je Spalte, CSV-Export.
//
//  Sportweite Daten (für beide NBA-Ligen gleich): sport:livescores-daily,
//  sport:livescores-aggregate, ?sport:livescores-boxscores. Die zweite
//  Zeile der Team-Zelle zeigt den Fantasy-Besitzer DIESER Liga.
//
//  Neu: Punt-Gewichte werden je Liga gemerkt (früher nur für die Sitzung);
//  Zeilen mit Punt-Kategorie = 0 bleiben sichtbar, die Spalte wird gedimmt.
// ============================================================

(function () {
  const N = () => MFHFB.nba;
  const COMPS = [
    ['nba', '🏆 NBA'], ['nba-preseason', '🏀 NBA Pre-Season'],
    ['nba-summer-california', '☀️ Summer League – California'], ['nba-summer-utah', '🏔️ Summer League – Salt Lake City'],
    ['nba-summer-las-vegas', '🏖️ Summer League – Las Vegas'],
  ];
  const PERIODS = [['daily', 'Daily'], ['week', 'Weekly'], ['month', 'Monthly'], ['box', 'Box Scores']];
  const WCATS = [['pts', 'PTS'], ['reb', 'REB'], ['ast', 'AST'], ['stl', 'STL'], ['blk', 'BLK'], ['to', 'TO'], ['tpm', '3PM'], ['fgImpact', 'FG%'], ['ftImpact', 'FT%']];
  const STAT_COLS = [['min', 'MIN'], ['pts', 'PTS', 'pts'], ['reb', 'REB', 'reb'], ['ast', 'AST', 'ast'], ['stl', 'STL', 'stl'], ['blk', 'BLK', 'blk'], ['to', 'TO', 'to'], ['tpm', '3PM', 'tpm'], ['fgPct', 'FG%', 'fgImpact'], ['ftPct', 'FT%', 'ftImpact']];
  const defaults = { sort: 'composite', asc: false, minGames: 1, weights: {}, heat: false };
  const getState = ctx => ({ ...defaults, ...ctx.store.getJSON('livescores', {}) });

  function source(data, period, comp) {
    if (period === 'daily') return ((data.LIVESCORES_DAILY || {})[comp]) || {};
    if (period === 'box') return ((data.LIVESCORES_BOXSCORES || {})[comp]) || {};
    return (((data.LIVESCORES_AGGREGATE || {})[period] || {})[comp]) || {};
  }
  // Wettbewerb mit den jüngsten Daten als Start (NBA in der Saison, sonst Summer League/Preseason)
  function defaultComp(data) {
    let best = null, bestDate = '';
    COMPS.forEach(([c]) => { const ds = Object.keys(source(data, 'daily', c)).sort(); if (ds.length && ds[ds.length - 1] > bestDate) { bestDate = ds[ds.length - 1]; best = c; } });
    return best || 'nba';
  }
  const dObj = s => { const [y, m, d] = s.split('-').map(Number); return new Date(Date.UTC(y, m - 1, d)); };
  const dStr = d => d.toISOString().slice(0, 10);
  const fmtLong = s => dObj(s).toLocaleDateString('de-DE', { weekday: 'short', day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC' });
  const fmtShort = s => dObj(s).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC' });

  function resolve(ctx) {
    const data = ctx.data;
    const [pp, pc, pd] = ctx.params;
    const period = PERIODS.some(p => p[0] === pp) ? pp : 'daily';
    const comp = COMPS.some(c => c[0] === pc) ? pc : defaultComp(data);
    const dates = Object.keys(source(data, period, comp)).sort();
    const date = pd && /^\d{4}-\d{2}-\d{2}$/.test(pd) ? pd : dates[dates.length - 1] || null;
    return { period, comp, dates, date };
  }

  const weightOf = (st, k) => (typeof st.weights[k] === 'number' ? st.weights[k] : 1);
  function composite(p, st) {
    if (!p.zScores) return p.composite;
    let s = 0; WCATS.forEach(([k]) => { s += (p.zScores[k] || 0) * weightOf(st, k); });
    return Math.round(s * 100) / 100;
  }

  function rowsFor(ctx, entry, r, st) {
    const src = r.period === 'daily' ? entry.players : entry.players.filter(p => p.games >= st.minGames);
    const rows = src.map(p => ({ ...p, composite: composite(p, st) }));
    const col = st.sort;
    rows.sort((a, b) => { const av = a[col], bv = b[col]; const c = typeof av === 'number' ? av - bv : String(av).localeCompare(String(bv)); return st.asc ? c : -c; });
    return rows;
  }

  function tableHtml(ctx, entry, r, st) {
    const { ui, href } = ctx;
    const e = ui.esc, nba = N();
    const owner = nba.ownerIndex(ctx.data);
    const daily = r.period === 'daily';
    const rows = rowsFor(ctx, entry, r, st);
    const fmt = n => (daily ? n : Number(n).toFixed(1));
    // Z-Score direkt hinter dem Namen (wichtigster Wert, auch mobil ohne Scrollen sichtbar)
    const cols = [['name', 'Spieler'], ['composite', 'Z-Score'], ['team', 'Team']].concat(daily ? [] : [['games', 'GP']]).concat(STAT_COLS.map(c => [c[0], c[1]]));
    const punted = new Set(WCATS.filter(([k]) => weightOf(st, k) === 0).map(([k]) => k));
    const th = cols.map(([k, l]) => { const z = (STAT_COLS.find(c => c[0] === k) || [])[2]; return `<th class="${k === 'name' || k === 'team' ? '' : 'num'}${st.sort === k ? ' sorted' : ''}${z && punted.has(z) ? ' punted' : ''}"><button type="button" class="th-sort" data-sort="${k}">${l}${st.sort === k ? (st.asc ? ' ▲' : ' ▼') : ''}</button></th>`; }).join('');
    const body = rows.map((p, i) => {
      const o = owner(p.name);
      const z = p.zScores || {};
      return `<tr>
        <td class="num rank">${i + 1}</td>
        <td class="strong ls-name">${e(p.name)}</td>
        <td class="num"><span class="ls-comp ${p.composite >= 0 ? 'up' : 'down'}">${(p.composite >= 0 ? '+' : '') + p.composite.toFixed(2)}</span></td>
        <td><span class="ls-team"><b>${e(p.team)}</b>${o ? `<a href="${href('teams', o.id)}" class="ls-owner">${e(o.name)}</a>` : `<small>${e(nba.teamName(p.team))}</small>`}</span></td>
        ${daily ? '' : `<td class="num">${p.games}</td>`}
        ${STAT_COLS.map(([k, , zk]) => {
          const v = k === 'fgPct' || k === 'ftPct' ? Number(p[k]).toFixed(1) + '%' : fmt(p[k]);
          return `<td class="num${zk && punted.has(zk) ? ' punted' : ''}" style="${st.heat && zk ? nba.heat(z[zk]) : ''}">${v}</td>`;
        }).join('')}
      </tr>`;
    }).join('');
    return { rows, html: `<div class="table-wrap"><table class="table compact ls-table"><thead><tr><th class="num">#</th>${th}</tr></thead><tbody>${body}</tbody></table></div>` };
  }

  function boxHtml(ctx, entry) {
    const e = ctx.ui.esc, nba = N();
    const team = t => {
      if (!t) return '';
      return `<div class="ls-boxteam"><div class="ls-boxhead"><b>${e(nba.teamName(t.abbr))}</b><span class="display">${e(t.score)}</span></div>
        <div class="table-wrap"><table class="table compact"><thead><tr><th>Spieler</th>${['MIN', 'PTS', 'REB', 'AST', 'STL', 'BLK', 'TO', '3PM'].map(h => `<th class="num">${h}</th>`).join('')}<th class="num">FG</th><th class="num">FT</th></tr></thead><tbody>
        ${(t.players || []).map(p => { const z = p.zScores || {}; return `<tr><td class="strong">${e(p.name)}</td>${[['min'], ['pts', 'pts'], ['reb', 'reb'], ['ast', 'ast'], ['stl', 'stl'], ['blk', 'blk'], ['to', 'to'], ['tpm', 'tpm']].map(([k, zk]) => `<td class="num" style="${zk ? nba.heat(z[zk]) : ''}">${e(p[k])}</td>`).join('')}
          <td class="num" style="${nba.heat(z.fgImpact)}">${p.fgm}-${p.fga}</td><td class="num" style="${nba.heat(z.ftImpact)}">${p.ftm}-${p.fta}</td></tr>`; }).join('')}
        </tbody></table></div></div>`;
    };
    return (entry.games || []).map(g => g.completed
      ? `<div class="card ls-boxgame"><div class="card-head"><h2>${e(g.line || '')}</h2></div><div class="ls-boxteams">${team(g.away)}${team(g.home)}</div></div>`
      : `<div class="card ls-boxgame upcoming"><div class="card-head"><h2>${e(g.away ? g.away.name : '?')} @ ${e(g.home ? g.home.name : '?')}</h2><span class="muted">🕒 ${e(g.statusText || 'Noch nicht gespielt')}</span></div></div>`).join('');
  }

  function render(ctx) {
    const { data, ui, href } = ctx;
    const e = ui.esc;
    N().init(data);
    const r = resolve(ctx);
    const st = getState(ctx);
    const src = source(data, r.period, r.comp);
    const entry = r.date ? src[r.date] : null;
    const availableComps = COMPS.filter(([c]) => Object.keys(source(data, 'daily', c)).length || Object.keys(source(data, 'week', c)).length);
    const idx = r.date ? r.dates.indexOf(r.date) : -1;
    const prev = idx > 0 ? r.dates[idx - 1] : (idx === -1 && r.date ? r.dates.filter(d => d < r.date).pop() : null);
    const next = idx >= 0 && idx < r.dates.length - 1 ? r.dates[idx + 1] : (idx === -1 && r.date ? r.dates.find(d => d > r.date) : null);
    const link = (p, c, d) => href('livescores', p, c, ...(d ? [d] : []));
    let info = '', content = '', count = 0;
    const box = r.period === 'box';
    const empty = box ? !(entry && entry.games && entry.games.length) : !(entry && entry.players && entry.players.length);
    if (!r.date) content = ui.empty('Keine Daten', `Für ${e((COMPS.find(c => c[0] === r.comp) || [])[1] || r.comp)} liegen in dieser Ansicht noch keine Daten vor.`, '🏀');
    else if (empty) content = ui.empty('Keine Daten für diesen Zeitraum', 'Entweder wurden keine Spiele ausgetragen, oder die Automatisierung hat das noch nicht erfasst.', '📭');
    else if (box) content = boxHtml(ctx, entry);
    else {
      const avg = entry.leagueAvg ? ` · Liga-Ø FG% ${entry.leagueAvg.fg.toFixed(1)}% · FT% ${entry.leagueAvg.ft.toFixed(1)}%` : '';
      info = r.period === 'daily' ? `${(entry.games || []).map(e).join(' · ')}${avg}`
        : `Fenster ${fmtShort(entry.windowStart)} – ${fmtShort(entry.windowEnd)} · ${entry.daysInWindow} Tag${entry.daysInWindow === 1 ? '' : 'e'} mit Daten${avg}`;
      const t = tableHtml(ctx, entry, r, st);
      count = t.rows.length;
      content = t.html;
    }
    const punted = WCATS.filter(([k]) => weightOf(st, k) !== 1);
    return `
      <div class="page-head"><h1 class="page-title display">🔴 Live Scores</h1>
        <div class="page-sub">${r.date ? (r.period === 'daily' || box ? fmtLong(r.date) : `${r.period === 'week' ? 'Woche' : 'Monat'} bis ${fmtShort(r.date)}`) : ''}${count ? ` · ${count} Spieler` : ''} · Z-Scores je Kategorie, FG%/FT% als Impact (Abweichung × Würfe)</div></div>
      <div class="controls">
        <div class="seg" role="group">${PERIODS.filter(([p]) => p !== 'box' || Object.keys(source(data, 'box', r.comp)).length).map(([p, l]) => `<a class="seg-btn${p === r.period ? ' active' : ''}" href="${link(p, r.comp)}">${l}</a>`).join('')}</div>
        <select class="tr-select" data-comp aria-label="Wettbewerb">${(availableComps.length ? availableComps : COMPS).map(([c, l]) => `<option value="${c}"${c === r.comp ? ' selected' : ''}>${l}</option>`).join('')}</select>
        <div class="seg ls-datenav" role="group">
          ${prev ? `<a class="seg-btn" href="${link(r.period, r.comp, prev)}" aria-label="Vorheriger Tag">◀</a>` : '<span class="seg-btn disabled">◀</span>'}
          <input type="date" class="ls-date" data-date value="${r.date || ''}" ${r.dates.length ? `min="${r.dates[0]}" max="${r.dates[r.dates.length - 1]}"` : ''} aria-label="Datum">
          ${next ? `<a class="seg-btn" href="${link(r.period, r.comp, next)}" aria-label="Nächster Tag">▶</a>` : '<span class="seg-btn disabled">▶</span>'}
        </div>
      </div>
      ${info ? `<div class="ls-info">${info}</div>` : ''}
      ${!box ? `<div class="ls-tools">
        ${r.period !== 'daily' ? `<label class="ls-min">🎚️ Min. Spiele <input type="range" min="1" max="5" step="1" value="${st.minGames}" data-min> <b data-minval>${st.minGames}</b></label>` : ''}
        <label class="dna-check"><input type="checkbox" data-heat ${st.heat ? 'checked' : ''}> Heatmap</label>
        <details class="ls-punt"${punted.length ? ' open' : ''}><summary>⚖️ Punt / Gewichtung${punted.length ? ` <span class="ls-puntn">${punted.length} angepasst</span>` : ''}</summary>
          <div class="ls-puntgrid">${WCATS.map(([k, l]) => `<label class="ls-pitem${weightOf(st, k) === 0 ? ' punted' : ''}"><span>${l} <b data-wval="${k}">${weightOf(st, k).toFixed(2)}</b></span><input type="range" min="0" max="2" step="0.25" value="${weightOf(st, k)}" data-w="${k}"></label>`).join('')}</div>
          <div class="ls-puntfoot"><button type="button" class="seg-btn" data-wreset>Zurücksetzen</button><span class="muted">0 = Kategorie gepuntet · 1 = normal · 2 = doppelt</span></div>
        </details>
        ${r.period !== 'daily' && count ? '<button type="button" class="seg-btn" data-csv>⬇️ CSV</button>' : ''}
      </div>` : ''}
      <div data-content>${content}</div>`;
  }

  function mount(root, ctx) {
    const r = resolve(ctx);
    const save = patch => { ctx.store.setJSON('livescores', { ...getState(ctx), ...patch }); };
    const rerenderTable = () => {
      const st = getState(ctx);
      const entry = r.date ? source(ctx.data, r.period, r.comp)[r.date] : null;
      if (!entry || !entry.players) return;
      root.querySelector('[data-content]').innerHTML = tableHtml(ctx, entry, r, st).html;
      bindSort();
    };
    const bindSort = () => root.querySelectorAll('[data-sort]').forEach(b => b.addEventListener('click', () => {
      const st = getState(ctx), col = b.dataset.sort;
      save(st.sort === col ? { asc: !st.asc } : { sort: col, asc: col === 'name' || col === 'team' });
      rerenderTable();
    }));
    bindSort();
    const comp = root.querySelector('[data-comp]');
    if (comp) comp.addEventListener('change', () => { location.hash = ctx.href('livescores', r.period, comp.value); });
    const date = root.querySelector('[data-date]');
    if (date) date.addEventListener('change', () => { if (date.value) location.hash = ctx.href('livescores', r.period, r.comp, date.value); });
    const min = root.querySelector('[data-min]');
    if (min) min.addEventListener('input', () => { save({ minGames: Number(min.value) }); root.querySelector('[data-minval]').textContent = min.value; rerenderTable(); });
    const heat = root.querySelector('[data-heat]');
    if (heat) heat.addEventListener('change', () => { save({ heat: heat.checked }); rerenderTable(); });
    root.querySelectorAll('[data-w]').forEach(inp => inp.addEventListener('input', () => {
      const w = { ...getState(ctx).weights, [inp.dataset.w]: Number(inp.value) };
      save({ weights: w });
      root.querySelector(`[data-wval="${inp.dataset.w}"]`).textContent = Number(inp.value).toFixed(2);
      inp.closest('.ls-pitem').classList.toggle('punted', Number(inp.value) === 0);
      rerenderTable();
    }));
    const reset = root.querySelector('[data-wreset]');
    if (reset) reset.addEventListener('click', () => { save({ weights: {} }); ctx.refresh(); });
    const csv = root.querySelector('[data-csv]');
    if (csv) csv.addEventListener('click', () => {
      const st = getState(ctx);
      const entry = source(ctx.data, r.period, r.comp)[r.date];
      const rows = rowsFor(ctx, entry, r, st);
      const head = ['#', 'Name', 'Team', 'GP', 'MIN', 'PTS', 'REB', 'AST', 'STL', 'BLK', 'TO', '3PM', 'FG%', 'FT%', 'Z-Score'];
      const esc = v => (/[",\n;]/.test(String(v)) ? '"' + String(v).replace(/"/g, '""') + '"' : String(v));
      const lines = rows.map((p, i) => [i + 1, p.name, p.team, p.games, ...['min', 'pts', 'reb', 'ast', 'stl', 'blk', 'to', 'tpm'].map(k => Number(p[k]).toFixed(1)), p.fgPct.toFixed(1) + '%', p.ftPct.toFixed(1) + '%', p.composite.toFixed(2)].map(esc).join(';'));
      const blob = new Blob(['﻿' + [head.join(';'), ...lines].join('\n')], { type: 'text/csv;charset=utf-8;' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `livescores_${r.period === 'week' ? 'Woche' : 'Monat'}_${r.comp}_${r.date}.csv`;
      document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(a.href);
    });
  }

  MFHFB.pages.register({
    id: 'livescores', section: 'players', label: 'Live Scores', icon: '🔴', applies: { sport: ['nba'] },
    data: ['teams', '?rosters-live', '?sport:aliases', 'sport:livescores-daily', 'sport:livescores-aggregate', '?sport:livescores-boxscores'],
    title: () => 'Live Scores', render, mount,
  });
})();
