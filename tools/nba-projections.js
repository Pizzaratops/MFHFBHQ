// ============================================================
//  Tool (NBA): Consensus Projections 2026/27
// ============================================================
//  #/<liga>/projections
//
//  Port von js/consensus-projections.js (TTHQ = Funkytown, Logik
//  unverändert). Daten: PROJECTIONS_CONSENSUS (je Liga, Mittelwert aus
//  Beyaz / Josh Lloyd (BBM) / Hashtag Basketball).
//  - Z-Scores komplett im Browser, relativ zur Pool-Größe (zweistufig:
//    erst über alle, dann über die Top N). FG%/FT% als Impact
//    (Abweichung vom Pool-Schnitt × Versuche).
//  - Gewichte je Kategorie (Standard nach Josh Lloyds Konsistenzregel),
//    Stat-Filter min/max, Quellen-Filter, CSV-Export.
//  - Δ Rang = Streuung der drei Einzelränge, NUR über den Kern mit allen
//    drei Quellen (sonst wären die Ränge nicht vergleichbar).
// ============================================================

(function () {
  const N = () => MFHFB.nba;
  const SRC = { a: 'Beyaz', b: 'Josh Lloyd (BBM)', c: 'Hashtag Basketball' };
  const CATS = [
    { key: 'pts', label: 'PTS', dec: 1 }, { key: 'reb', label: 'REB', dec: 1 }, { key: 'ast', label: 'AST', dec: 1 },
    { key: 'stl', label: 'STL', dec: 2 }, { key: 'blk', label: 'BLK', dec: 2 }, { key: 'tpm', label: '3PM', dec: 2 },
    { key: 'tov', label: 'TO', dec: 2 }, { key: 'fgImpact', label: 'FG%', dec: 1, pct: 'fgPct' }, { key: 'ftImpact', label: 'FT%', dec: 1, pct: 'ftPct' },
  ];
  const FILTER_FIELD = { pts: 'pts', reb: 'reb', ast: 'ast', stl: 'stl', blk: 'blk', tpm: 'tpm', tov: 'tov', fgImpact: 'fgPct', ftImpact: 'ftPct', min: 'min' };
  const DEFAULT_W = { pts: 0.9, reb: 1, ast: 1, stl: 0.75, blk: 0.75, tpm: 0.8, tov: 0.25, fgImpact: 1, ftImpact: 0.9 };
  const POOLS = ['100', '150', '200', '250', '300', '350', '400', 'all'];
  const SOURCES = [['twoplus', 'Mind. 2 von 3 Quellen'], ['', 'Alle Spieler'], ['three', 'Nur voller Konsens (3/3)'], ['two', 'Genau 2 von 3'], ['one', 'Nur 1 Quelle'], ['warn', 'Nur auffällige Werte']];
  const defaults = () => ({ weights: { ...DEFAULT_W }, filters: {}, pool: '200', source: 'twoplus', sort: 'z', dir: -1, q: '', pos: '' });
  const getState = ctx => { const s = { ...defaults(), ...ctx.store.getJSON('cproj', {}) }; s.weights = { ...DEFAULT_W, ...s.weights }; return s; };

  // ---------- Z-Kern ----------
  const meanSd = vals => { if (!vals.length) return { mean: 0, sd: 0 }; const m = vals.reduce((a, b) => a + b, 0) / vals.length; return { mean: m, sd: Math.sqrt(vals.reduce((a, b) => a + (b - m) ** 2, 0) / vals.length) }; };
  const vals = c => ({ min: c.min || 0, pts: c.pts || 0, reb: c.reb || 0, ast: c.ast || 0, stl: c.stl || 0, blk: c.blk || 0, tpm: c.tpm || 0, tov: c.tov || 0, fgm: c.fgm || 0, fga: c.fga || 0, ftm: c.ftm || 0, fta: c.fta || 0 });

  function computeZ(rows, poolIdx, weights) {
    const pool = poolIdx.map(i => rows[i]);
    if (!pool.length) return rows.map(() => ({ z: 0, zRaw: 0, cats: {}, rawCats: {} }));
    const counting = ['pts', 'reb', 'ast', 'stl', 'blk', 'tpm', 'tov'];
    const st = {};
    counting.forEach(k => { st[k] = meanSd(pool.map(r => r.v[k])); });
    const sum = f => pool.reduce((a, r) => a + (f(r) || 0), 0);
    const fgP = sum(r => r.v.fgm) / (sum(r => r.v.fga) || 1) * 100;
    const ftP = sum(r => r.v.ftm) / (sum(r => r.v.fta) || 1) * 100;
    const fgI = v => ((v.fga > 0 ? v.fgm / v.fga * 100 : fgP) - fgP) * v.fga;
    const ftI = v => ((v.fta > 0 ? v.ftm / v.fta * 100 : ftP) - ftP) * v.fta;
    st.fgImpact = meanSd(pool.map(r => fgI(r.v)));
    st.ftImpact = meanSd(pool.map(r => ftI(r.v)));
    const out = rows.map(r => {
      const c = {};
      counting.forEach(k => { c[k] = st[k].sd ? (r.v[k] - st[k].mean) / st[k].sd : 0; });
      c.tov = -c.tov;
      c.fgImpact = st.fgImpact.sd ? (fgI(r.v) - st.fgImpact.mean) / st.fgImpact.sd : 0;
      c.ftImpact = st.ftImpact.sd ? (ftI(r.v) - st.ftImpact.mean) / st.ftImpact.sd : 0;
      const zRaw = CATS.reduce((s, k) => s + (c[k.key] || 0) * (weights[k.key] ?? 1), 0);
      return { z: zRaw, zRaw, cats: c, rawCats: c };
    });
    const res = N().fromCatZ(out.map(o => o.rawCats), CATS.map(c => c.key), weights, poolIdx);
    out.forEach((o, i) => { o.z = res[i].score; o.cats = res[i].cats; });
    return out;
  }
  function zWithPool(rows, poolSize, weights) {
    if (!rows.length) return [];
    const first = computeZ(rows, rows.map((_, i) => i), weights);
    if (poolSize === 'all' || rows.length <= poolSize) return first;
    const order = first.map((r, i) => ({ i, z: r.z })).sort((a, b) => b.z - a.z).slice(0, poolSize).map(x => x.i);
    return computeZ(rows, order, weights);
  }

  let cache = { key: null, rows: null };
  function computed(ctx, st) {
    const P = ctx.data.PROJECTIONS_CONSENSUS;
    const key = ctx.league.key + '|' + JSON.stringify([st.weights, st.pool, N().getMode()]);
    if (cache.key === key) return cache.rows;
    const poolSize = st.pool === 'all' ? 'all' : parseInt(st.pool, 10);
    const names = Object.keys(P);
    const z = zWithPool(names.map(n => ({ name: n, v: vals(P[n]) })), poolSize, st.weights);
    const core = names.filter(n => P[n].sourceCount === 3);
    const rankOf = f => {
      const sub = core.map(n => ({ name: n, v: vals(P[n][f] || {}) }));
      const zz = zWithPool(sub, poolSize, st.weights);
      const m = new Map();
      zz.map((r, i) => ({ n: sub[i].name, z: r.z })).sort((a, b) => b.z - a.z).forEach((o, i) => m.set(o.n, i + 1));
      return m;
    };
    const rA = rankOf('a'), rB = rankOf('b'), rC = rankOf('c');
    const owner = N().ownerIndex(ctx.data);
    const out = names.map((n, i) => {
      const ra = rA.get(n) ?? null, rb = rB.get(n) ?? null, rc = rC.get(n) ?? null;
      const present = [ra, rb, rc].filter(x => x !== null);
      return { name: n, ...P[n], z: z[i].z, zRaw: z[i].zRaw, cats: z[i].cats, rawCats: z[i].rawCats, rankA: ra, rankB: rb, rankC: rc, rankDiff: present.length >= 2 ? Math.max(...present) - Math.min(...present) : null, owner: owner(n) };
    }).sort((a, b) => b.z - a.z);
    out.forEach((r, i) => { r.overallRank = i + 1; });
    cache = { key, rows: out };
    return out;
  }

  function filtered(ctx, st) {
    const all = computed(ctx, st);
    let rows = all.slice();
    if (st.pool !== 'all') { const cap = parseInt(st.pool, 10); rows = rows.filter(r => r.overallRank <= cap); }
    const q = String(st.q || '').toLowerCase().trim();
    if (q) rows = rows.filter(r => r.name.toLowerCase().includes(q) || String(r.team || '').toLowerCase().includes(q) || String(r.pos || '').toLowerCase().includes(q) || (r.owner && r.owner.name.toLowerCase().includes(q)));
    if (st.pos) rows = rows.filter(r => String(r.pos || '').split('/').includes(st.pos));
    const sf = { three: r => r.sourceCount === 3, twoplus: r => r.sourceCount >= 2, two: r => r.sourceCount === 2, one: r => r.sourceCount === 1, warn: r => r.aImplausible }[st.source];
    if (sf) rows = rows.filter(sf);
    rows = rows.filter(r => Object.entries(st.filters).every(([cat, f]) => { const v = r[FILTER_FIELD[cat] || cat] ?? 0; return !(f.min != null && v < f.min) && !(f.max != null && v > f.max); }));
    const dir = st.dir, k = st.sort;
    rows.sort((a, b) => {
      if (k === 'name') return a.name.localeCompare(b.name) * dir;
      if (k === 'rankDiff') { const av = a.rankDiff, bv = b.rankDiff; if ((av === null) !== (bv === null)) return av === null ? 1 : -1; if (av === null) return a.name.localeCompare(b.name); return (av - bv) * dir; }
      const av = a[k] ?? 0, bv = b[k] ?? 0;
      return av !== bv ? (av - bv) * dir : a.name.localeCompare(b.name);
    });
    return { all, rows };
  }

  const heat = z => N().heat(N().getMode() === 'pctl' ? (z - 50) / 20 : z);
  const srcLabel = r => String(r.sources || '').split('').map(l => SRC[l] || l).join(' + ');
  function srcBadge(r) {
    const n = r.sourceCount || 0;
    if (r.aImplausible) return `<span class="cp-src warn" title="Beyaz' Baseline war unplausibel (>1.05 Punkte/Minute) und wurde aus der Mittelung ausgeschlossen">⚠ ${'✓'.repeat(n)}</span>`;
    return `<span class="cp-src n${n}" title="${srcLabel(r)}">${'✓'.repeat(n) || '—'}</span>`;
  }

  function tbody(ctx, rows) {
    const e = ctx.ui.esc, nba = N();
    if (!rows.length) return `<tr><td colspan="19">${ctx.ui.empty('Keine Treffer', 'Suche oder Filter anpassen.', '🔎')}</td></tr>`;
    return rows.map(r => {
      const d = r.rankDiff;
      const dCls = d === null ? '' : d <= 15 ? 'up' : d >= 60 ? 'down' : '';
      const dTip = r.rankA !== null && r.rankB !== null && r.rankC !== null ? `Beyaz #${r.rankA} · Josh Lloyd #${r.rankB} · Hashtag #${r.rankC}` : 'Nur mit vollem 3-Quellen-Konsens berechenbar';
      return `<tr>
        <td class="num rank">${r.overallRank}</td>
        <td class="strong nba-sticky">${e(r.name)}</td>
        <td><a class="nba-team-link" href="${ctx.href('nbateams', nba.canonTeam(r.team))}">${e(r.team || '—')}</a></td>
        <td class="muted">${e(r.pos || '—')}</td>
        <td>${r.owner ? `<a class="nba-tlink mp-tc" style="${nba.tcStyle(r.owner)}" href="${ctx.href('teams', r.owner.id)}"><span class="nba-tdot"></span>${e(r.owner.name)}</a>` : '<span class="nba-tag fa">frei</span>'}</td>
        <td class="num"><span class="ls-comp ${nba.scorePositive(r.z) ? 'up' : 'down'}" title="Z roh ${r.zRaw.toFixed(2)}">${nba.fmtScore(r.z)}</span></td>
        <td class="num">${(r.min || 0).toFixed(1)}</td>
        ${CATS.map(c => { const v = c.pct ? (r[c.pct] || 0) : (r[c.key] || 0); const zc = r.cats[c.key] || 0, zr = r.rawCats[c.key] || 0; const tip = N().getMode() === 'pctl' ? `Perzentil ${zc.toFixed(0)} · Z ${zr.toFixed(2)}` : zc !== zr ? `Z ${zr.toFixed(2)} → gekappt ${zc.toFixed(2)}` : `Z ${zc.toFixed(2)}`; return `<td class="num" style="${heat(zc)}" title="${tip}">${v.toFixed(c.dec)}</td>`; }).join('')}
        <td class="num muted">${(r.fgm || 0).toFixed(1)}-${(r.fga || 0).toFixed(1)}</td>
        <td class="num muted">${(r.ftm || 0).toFixed(1)}-${(r.fta || 0).toFixed(1)}</td>
        <td class="num ${dCls}" title="${dTip}">${d === null ? '—' : d}</td>
        <td class="num">${srcBadge(r)}</td>
      </tr>`;
    }).join('');
  }

  function info(st, all, rows) {
    const wChanged = CATS.filter(c => st.weights[c.key] !== DEFAULT_W[c.key]).length;
    const fCount = Object.keys(st.filters).length;
    return `${rows.length} von ${all.length} Spielern · ${N().scoreLabel()} relativ zu ${st.pool === 'all' ? 'allen Spielern' : 'den Top ' + st.pool} · ${all.filter(r => r.sourceCount === 3).length} mit vollem 3-Quellen-Konsens${wChanged ? ` · ${wChanged} Gewicht(e) angepasst` : ''}${fCount ? ` · ${fCount} Filter aktiv` : ''}`;
  }

  function render(ctx) {
    const { data, ui } = ctx, e = ui.esc, nba = N();
    nba.init(data);
    if (!data.PROJECTIONS_CONSENSUS) return ui.empty('Keine Consensus-Projections', 'PROJECTIONS_CONSENSUS fehlt für diese Liga.', '🔮');
    const st = getState(ctx);
    const { all, rows } = filtered(ctx, st);
    const arrow = k => (st.sort === k ? (st.dir === 1 ? ' ▲' : ' ▼') : '');
    const th = (k, l, cls, t) => `<th class="${cls || ''}${st.sort === k ? ' sorted' : ''}"${t ? ` title="${t}"` : ''}><button type="button" class="th-sort" data-sort="${k}">${l}${arrow(k)}</button></th>`;
    const f = st.filters;
    const frow = (k, l) => `<label class="cp-f"><span>${l}</span><input type="number" step="any" placeholder="min" value="${f[k] && f[k].min != null ? f[k].min : ''}" data-filter="${k}|min"><input type="number" step="any" placeholder="max" value="${f[k] && f[k].max != null ? f[k].max : ''}" data-filter="${k}|max"></label>`;
    return `<div class="page-head"><h1 class="page-title display">🔮 Projections 2026/27</h1>
        <div class="page-sub explain">Consensus aus Beyaz, Josh Lloyd (BBM) und Hashtag Basketball · Z-Scores live im Browser, Gewichte einstellbar</div></div>
      <div class="controls">${nba.modeControl()}
        <input type="search" class="search" placeholder="Spieler, Team, Position, Fantasy-Team …" value="${e(st.q)}" data-q aria-label="Suchen">
        <select class="tr-select" data-pos aria-label="Position"><option value="">Alle Positionen</option>${['PG', 'SG', 'G', 'SF', 'PF', 'F', 'C'].map(p => `<option${st.pos === p ? ' selected' : ''}>${p}</option>`).join('')}</select>
        <select class="tr-select" data-pool aria-label="Pool" title="Vergleichsgruppe für Z-Score bzw. Perzentil">${POOLS.map(p => `<option value="${p}"${st.pool === p ? ' selected' : ''}>Pool: ${p === 'all' ? 'alle' : 'Top ' + p}</option>`).join('')}</select>
        <select class="tr-select" data-source aria-label="Quellen">${SOURCES.map(([v, l]) => `<option value="${v}"${st.source === v ? ' selected' : ''}>${l}</option>`).join('')}</select>
        <button type="button" class="seg-btn mp-btn" data-csv title="Angezeigte Spieler als CSV">⬇️ CSV</button>
      </div>
      <div class="cp-panels">
        <details class="ls-punt"><summary>⚖️ Gewichtung${CATS.some(c => st.weights[c.key] !== DEFAULT_W[c.key]) ? '<span class="ls-puntn">angepasst</span>' : ''}</summary>
          <div class="cp-wgrid">${CATS.map(c => `<label class="cp-w"><span>${c.label}</span><input type="number" step="0.05" min="0" max="5" value="${st.weights[c.key]}" data-weight="${c.key}"></label>`).join('')}</div>
          <div class="ls-puntfoot"><span class="muted">Standard nach Konsistenz (Josh Lloyd). 0 = Kategorie punten, 2 = doppelt.</span><button type="button" class="seg-btn mp-btn" data-wreset>↺ Standard</button></div></details>
        <details class="ls-punt"><summary>🔎 Stat-Filter${Object.keys(f).length ? `<span class="ls-puntn">${Object.keys(f).length} aktiv</span>` : ''}</summary>
          <div class="cp-fgrid">${frow('min', 'MIN')}${CATS.map(c => frow(c.key, c.label)).join('')}</div>
          <div class="ls-puntfoot"><span class="muted">FG%/FT% filtern auf den Prozentwert.</span><button type="button" class="seg-btn mp-btn" data-freset>↺ Filter leeren</button></div></details>
      </div>
      <div class="ls-info" data-info>${info(st, all, rows)}</div>
      <div class="table-wrap"><table class="table compact nba-cproj"><thead><tr>
        <th class="num">#</th>${th('name', 'Spieler', 'nba-sticky')}<th>Team</th><th>Pos</th><th>Fantasy</th>${th('z', nba.scoreLabel(), 'num', 'Gewichteter 9-Cat-Gesamtwert relativ zum Pool')}${th('min', 'MIN', 'num')}
        ${CATS.map(c => th(c.pct || c.key, c.label, 'num')).join('')}<th class="num" title="Feldwürfe getroffen-versucht">FGM-A</th><th class="num" title="Freiwürfe getroffen-versucht">FTM-A</th>
        ${th('rankDiff', 'Δ Rang', 'num', 'Streuung der drei Einzelränge (max − min), nur bei vollem 3-Quellen-Konsens. Klein = die drei sind sich einig.')}<th class="num">Quellen</th>
      </tr></thead><tbody data-body>${tbody(ctx, rows)}</tbody></table></div>`;
  }

  function csv(ctx) {
    const { rows } = filtered(ctx, getState(ctx));
    const esc = v => { const s = String(v ?? ''); return /[",;\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
    const head = ['#', 'Spieler', 'Team', 'Pos', 'Fantasy', N().scoreLabel(), 'Z roh', 'MIN', ...CATS.map(c => c.label), 'FGM', 'FGA', 'FTM', 'FTA', 'Δ Rang', 'Quellen'];
    const lines = [head.map(esc).join(',')].concat(rows.map(r => [r.overallRank, r.name, r.team || '', r.pos || '', r.owner ? r.owner.name : '', r.z.toFixed(2), r.zRaw.toFixed(2), (r.min || 0).toFixed(1),
      ...CATS.map(c => (c.pct ? (r[c.pct] || 0) : (r[c.key] || 0)).toFixed(c.dec)), (r.fgm || 0).toFixed(1), (r.fga || 0).toFixed(1), (r.ftm || 0).toFixed(1), (r.fta || 0).toFixed(1), r.rankDiff ?? '', srcLabel(r)].map(esc).join(',')));
    const url = URL.createObjectURL(new Blob(['﻿' + lines.join('\r\n')], { type: 'text/csv;charset=utf-8;' }));
    const a = document.createElement('a');
    a.href = url; a.download = `${ctx.league.key}-projections-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
  }

  function mount(root, ctx) {
    N().bindModeControl(root, ctx.refresh);
    const save = (patch, full) => {
      const st = { ...getState(ctx), ...patch };
      ctx.store.setJSON('cproj', st);
      if (full) return ctx.refresh();
      const { all, rows } = filtered(ctx, st);
      root.querySelector('[data-body]').innerHTML = tbody(ctx, rows);
      root.querySelector('[data-info]').textContent = info(st, all, rows).replace(/&amp;/g, '&');
    };
    const q = root.querySelector('[data-q]');
    q.addEventListener('input', () => save({ q: q.value }));
    root.querySelector('[data-pos]').addEventListener('change', ev => save({ pos: ev.target.value }));
    root.querySelector('[data-pool]').addEventListener('change', ev => save({ pool: ev.target.value }, true));
    root.querySelector('[data-source]').addEventListener('change', ev => save({ source: ev.target.value }));
    root.querySelector('[data-csv]').addEventListener('click', () => csv(ctx));
    root.querySelectorAll('[data-sort]').forEach(b => b.addEventListener('click', () => {
      const st = getState(ctx), k = b.dataset.sort;
      save(st.sort === k ? { dir: -st.dir } : { sort: k, dir: k === 'name' ? 1 : -1 }, true);
    }));
    root.querySelectorAll('[data-weight]').forEach(inp => inp.addEventListener('change', () => {
      const n = parseFloat(inp.value);
      save({ weights: { ...getState(ctx).weights, [inp.dataset.weight]: Number.isFinite(n) ? n : 1 } }, true);
    }));
    root.querySelector('[data-wreset]').addEventListener('click', () => save({ weights: { ...DEFAULT_W } }, true));
    root.querySelectorAll('[data-filter]').forEach(inp => inp.addEventListener('change', () => {
      const [cat, bound] = inp.dataset.filter.split('|');
      const filters = JSON.parse(JSON.stringify(getState(ctx).filters));
      const n = parseFloat(inp.value);
      filters[cat] = { min: null, max: null, ...filters[cat], [bound]: Number.isFinite(n) ? n : null };
      if (filters[cat].min == null && filters[cat].max == null) delete filters[cat];
      save({ filters }, true);
    }));
    root.querySelector('[data-freset]').addEventListener('click', () => save({ filters: {} }, true));
  }

  // Für andere Seiten (Cat Web): Gesamtrang exakt wie auf dieser Seite,
  // inkl. der gespeicherten Gewichte/Pool-Größe (früher cpGetComputed()).
  MFHFB.nbaProjections = { rows: ctx => (ctx.data.PROJECTIONS_CONSENSUS ? computed(ctx, getState(ctx)) : []) };

  MFHFB.pages.register({
    id: 'projections', section: 'players', label: 'Projections', icon: '🔮', applies: { sport: ['nba'] },
    data: ['teams', '?rosters-live', '?sport:aliases', 'projections-consensus'],
    title: () => 'Projections 2026/27', render, mount,
  });
})();
