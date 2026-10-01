// ============================================================
//  Tools: Trade Analyzer + Trade History (NFL, Dynasty-Werte)
// ============================================================
//  #/<liga>/trade          → Trade Analyzer
//  #/<liga>/tradehistory[/<saison>] → Trade History
//
//  Werte: TRADE_VALUES (Schnitt aus KeepTradeCut + Dynasty Daddy, Feld
//  "avg") und PICK_VALUES[runde][jahr] — identisch zur bisherigen Seite.
//  Pick-Werte ab Runde 5 = Wert der 4. Runde, unbekannte Jahre = letztes
//  bekanntes Jahr (wie bisher).
//
//  Historie: aktuelle Saison aus TRADES (inkl. Multi-Team-Trades), ältere
//  Saisons optional aus TRADES_HISTORY (DOPE) — Variante aus DOPE
//  übernommen, gilt jetzt für beide Ligen.
// ============================================================

(function () {
  const FAIR_PCT = 8;

  // ---------- Werte ----------
  const normKey = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/\b(jr|sr|ii|iii|iv|v)\b\.?/g, '').replace(/[^a-z0-9]/g, '');

  function valuer(data) {
    const byName = new Map(), byKey = new Map();
    (data.TRADE_VALUES || []).forEach(p => { byName.set(p.name, p); byKey.set(normKey(p.name), p); });
    const pv = data.PICK_VALUES || {};
    const pickValue = (year, round) => {
      const table = pv[round] || pv['4th'];
      if (!table) return null;
      const years = Object.keys(table).map(Number).sort((a, b) => a - b);
      return table[year] ?? table[years[years.length - 1]] ?? null;
    };
    const player = name => byName.get(name) || byKey.get(normKey(name)) || null;
    // Freitext-Asset aus der Historie ("2027 2nd (via X)" oder Spielername)
    // lastUsedYear = letzter Draft, der schon gelaufen ist → dessen Picks sind eingelöst
    const asset = (text, lastUsedYear) => {
      const m = String(text).match(/(\d{4})\s+(\d+(?:st|nd|rd|th))/i);
      if (m) {
        const year = Number(m[1]);
        if (lastUsedYear && year <= lastUsedYear) return { kind: 'pick', value: null, past: true };
        return { kind: 'pick', value: pickValue(year, m[2].toLowerCase()) };
      }
      const p = player(text);
      return { kind: 'player', value: p ? p.avg : null, info: p };
    };
    return { player, pickValue, asset, list: data.TRADE_VALUES || [] };
  }

  const fmt = n => Math.round(n).toLocaleString('de-DE');
  MFHFB.trade = { valuer, normKey };

  // ---------- Trade History ----------
  function allTrades(data, season) {
    const teams = data.LEAGUE_TEAMS || [];
    const out = (data.TRADES || []).map(t => ({
      season, date: t.date, week: t.week, current: true, note: t.note,
      sides: t.multi ? t.multi.map(m => ({ team: m.team, gives: m.gives || [] }))
        : [{ team: t.teamA, gives: t.teamAGives || [] }, { team: t.teamB, gives: t.teamBGives || [] }],
    })).sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
    const hist = data.TRADES_HISTORY || [];
    const nameOf = id => (teams.find(x => x.id === id) || {}).name || id;
    const bySeason = {};
    hist.forEach(t => { (bySeason[t.season] = bySeason[t.season] || []).push(t); });
    Object.keys(bySeason).map(Number).sort((a, b) => b - a).forEach(s => {
      const list = bySeason[s];
      list.slice().reverse().forEach((t, i) => out.push({
        season: s, nr: list.length - i, total: list.length, note: t.note,
        sides: [{ team: nameOf(t.a), gives: t.aGives || [] }, { team: nameOf(t.b), gives: t.bGives || [] }],
      }));
    });
    return out;
  }

  function historyPage(ctx) {
    const { data, ui, params, href } = ctx;
    const e = ui.esc;
    const d = MFHFB.draft.normalize(data);
    const season = d.season || new Date().getFullYear();
    const all = allTrades(data, season);
    if (!all.length) return ui.empty('Noch keine Trades', 'Es wurde noch nichts getradet.', '📜');
    const seasons = [...new Set(all.map(t => t.season))].sort((a, b) => b - a);
    const sel = seasons.includes(Number(params[0])) ? Number(params[0]) : 'all';
    const list = sel === 'all' ? all : all.filter(t => t.season === sel);
    const seasonLabel = y => (data.TRADES_HISTORY_SEASONS && data.TRADES_HISTORY_SEASONS[y]) || `Saison ${y}`;
    const tByName = {}; (data.LEAGUE_TEAMS || []).forEach(t => { tByName[t.name] = t; });
    const val = valuer(data);
    const lastUsed = d.hasResults ? season : season - 1;

    const counts = {};
    (data.LEAGUE_TEAMS || []).forEach(t => { counts[t.name] = 0; });
    list.forEach(t => t.sides.forEach(s => { counts[s.team] = (counts[s.team] || 0) + 1; }));
    const ranked = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const max = Math.max(1, ...ranked.map(r => r[1]));

    const card = t => {
      const sides = t.sides.map(s => {
        const assets = s.gives.map(a => ({ text: a, ...val.asset(a, lastUsed) }));
        const known = assets.filter(a => a.value != null);
        return { ...s, assets, total: known.reduce((x, a) => x + a.value, 0), complete: known.length === assets.length };
      });
      // "Gewinner heute" nur bei 2 Seiten und vollständig bewertbaren Assets
      let verdict = '';
      if (sides.length === 2 && sides.every(s => s.complete) && (sides[0].total || sides[1].total)) {
        const [a, b] = sides;
        const pct = Math.round(Math.abs(a.total - b.total) / Math.max(a.total, b.total, 1) * 100);
        // Wer mehr BEKOMMEN hat, hat gewonnen: A bekommt, was B gibt.
        verdict = pct <= FAIR_PCT ? `<span class="tv-fair">Heute ausgeglichen (${pct} %)</span>`
          : `<span class="tv-win">Heute vorne: ${e((tByName[b.total > a.total ? a.team : b.team] || {}).emoji || '')} ${e(b.total > a.total ? a.team : b.team)} (+${pct} %)</span>`;
      }
      const when = t.current ? `${t.date ? new Date(t.date + 'T12:00:00').toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' }) : ''}${t.week != null ? ` · Woche ${t.week}` : ''}`
        : `${seasonLabel(t.season)} · Trade ${t.nr} von ${t.total}`;
      return `<div class="card trade-card">
        <div class="trade-when">${e(when)}${verdict ? ` · ${verdict}` : ''}</div>
        <div class="trade-sides">${sides.map(s => `
          <div class="trade-side">
            <div class="trade-team">${e((tByName[s.team] || {}).emoji || '🏈')} ${e(s.team)} <span>gibt</span></div>
            ${s.assets.length ? s.assets.map(a => `<div class="trade-asset"><span>${e(a.text)}</span><span class="muted">${a.value != null ? fmt(a.value) : a.past ? 'eingelöst' : '–'}</span></div>`).join('') : '<div class="trade-asset muted">— nichts —</div>'}
            ${s.assets.length ? `<div class="trade-asset trade-sum"><span>Wert heute</span><span>${fmt(s.total)}${s.complete ? '' : '*'}</span></div>` : ''}
          </div>`).join('')}
        </div>
        ${t.note ? `<div class="trade-note">ℹ️ ${e(t.note)}</div>` : ''}
      </div>`;
    };

    let chronik = '';
    seasons.filter(y => sel === 'all' || y === sel).forEach(y => {
      const items = list.filter(t => t.season === y);
      if (!items.length) return;
      chronik += `<h2 class="group-title">${e(seasonLabel(y))} <span>${items.length} Trade${items.length === 1 ? '' : 's'}</span></h2>${items.map(card).join('')}`;
    });

    return `
      <div class="page-head">
        <h1 class="page-title display">📜 Trade History</h1>
        <div class="page-sub">${all.length} Trades<span class="explain"> · „Wert heute“ = aktueller KTC/Dynasty-Daddy-Schnitt der abgegebenen Spieler und Picks (* = nicht alle Assets bewertbar)</span></div>
      </div>
      ${seasons.length > 1 ? `<div class="week-picker">
        <a class="week-btn done${sel === 'all' ? ' active' : ''}" href="${href('tradehistory')}">Alle</a>
        ${seasons.map(y => `<a class="week-btn done${sel === y ? ' active' : ''}" href="${href('tradehistory', y)}">${y}</a>`).join('')}
      </div>` : ''}
      <div class="trade-layout">
        <div class="trade-main">${chronik}</div>
        <aside class="card trade-counter">
          <div class="card-head"><h2>🔥 Trade-Aktivität${sel === 'all' ? '' : ' ' + sel}</h2></div>
          ${ranked.map(([name, n]) => `<div class="tc-row">
            <span class="tc-name">${e((tByName[name] || {}).emoji || '🏈')} ${e(name)}</span>
            <span class="tc-bar"><span style="width:${Math.round(n / max * 100)}%"></span></span>
            <span class="tc-n">${n}</span>
          </div>`).join('')}
        </aside>
      </div>`;
  }

  // ---------- Trade Analyzer ----------
  const emptyTrade = () => ({ teamA: '', teamB: '', A: [], B: [] });
  const tradeState = ctx => ({ ...emptyTrade(), ...ctx.store.getJSON('trade', {}) });

  function assetValue(val, a) {
    if (a.kind === 'pick') return val.pickValue(a.year, a.round) || 0;
    const p = val.player(a.name);
    return p ? p.avg : 0;
  }

  function projTotal(data, team, remove, add) {
    const proj = new Map(((data.PLAYER_PROJECTIONS && data.PLAYER_PROJECTIONS.players) || []).map(p => [p.name, p.projectedPoints]));
    const skip = p => ['K', 'DST', 'D/ST'].includes(String(p.pos || '').split('/')[0].toUpperCase());
    const rm = new Set(remove);
    let total = 0;
    ((data.ROSTERS_LIVE || {})[team.id] || []).forEach(p => { if (!skip(p) && !rm.has(p.name) && proj.has(p.name)) total += proj.get(p.name); });
    add.forEach(n => { if (proj.has(n)) total += proj.get(n); });
    return total;
  }

  function analyzerPage(ctx) {
    const { data, ui, league } = ctx;
    const e = ui.esc;
    const val = valuer(data);
    if (!val.list.length) return ui.empty('Keine Trade-Werte', 'TRADE_VALUES fehlt für diese Liga.', '⚖️');
    const st = tradeState(ctx);
    const teams = data.LEAGUE_TEAMS || [];
    const byName = n => teams.find(t => t.name === n);
    const d = MFHFB.draft.normalize(data);
    const futureYears = Object.keys(d.future).map(Number).sort((a, b) => a - b);
    const rounds = MFHFB.draft.futureRounds(league, d);
    const has = (side, a) => st[side].some(x => x.kind === a.kind && x.name === a.name);

    const column = side => {
      const teamName = st['team' + side];
      const team = byName(teamName);
      const assets = st[side];
      const total = assets.reduce((s, a) => s + assetValue(val, a), 0);
      let pool = '';
      if (team) {
        const roster = ((data.ROSTERS_LIVE || {})[team.id] || [])
          .map(p => ({ name: p.name, pos: p.pos, v: (val.player(p.name) || {}).avg || 0 }))
          .sort((a, b) => b.v - a.v);
        const picks = futureYears.flatMap(y => MFHFB.draft.picksHeld(d, teams, team.name, y, rounds)
          .map(p => ({ kind: 'pick', year: y, round: p.round, origin: p.origin, name: `${p.origin} ${y} ${p.round}` })));
        pool = `
          <div class="tr-pool-label">Kader</div>
          <div class="tr-pool">${roster.map(p => { const a = { kind: 'player', name: p.name }; return `<button type="button" class="tr-chip${has(side, a) ? ' on' : ''}" data-toggle="${side}" data-kind="player" data-name="${e(p.name)}"><span class="pos pos-${e(String(p.pos || '').replace(/[^A-Z]/gi, ''))}">${e(p.pos || '')}</span> ${e(p.name)} <small>${p.v ? fmt(p.v) : '–'}</small></button>`; }).join('')}</div>
          ${picks.length ? `<div class="tr-pool-label">Picks</div>
          <div class="tr-pool">${picks.map(p => `<button type="button" class="tr-chip pick${has(side, p) ? ' on' : ''}" data-toggle="${side}" data-kind="pick" data-name="${e(p.name)}" data-year="${p.year}" data-round="${p.round}">${p.year} ${p.round}${p.origin !== team.name ? ` <small>via ${e(p.origin)}</small>` : ''} <small>${fmt(val.pickValue(p.year, p.round) || 0)}</small></button>`).join('')}</div>` : ''}`;
      }
      return `<div class="card tr-col">
        <div class="card-head"><h2>Team ${side} gibt</h2></div>
        <div class="tr-body">
          <select class="tr-select" data-team="${side}" aria-label="Team ${side}">
            <option value="">— Team wählen —</option>
            ${teams.map(t => `<option value="${e(t.name)}"${t.name === teamName ? ' selected' : ''}>${e(t.emoji || '')} ${e(t.name)}${t.owner ? ' (' + e(t.owner) + ')' : ''}</option>`).join('')}
          </select>
          <div class="tr-search"><input type="search" placeholder="Beliebigen Spieler suchen …" data-search="${side}" autocomplete="off"><div class="tr-suggest" data-suggest="${side}" hidden></div></div>
          <div class="tr-assets">${assets.length ? assets.map((a, i) => `<div class="tr-asset"><span>${e(a.kind === 'pick' ? `${a.name.replace(` ${a.year} ${a.round}`, '')} ${a.year} ${a.round}` : a.name)}</span><span class="muted">${fmt(assetValue(val, a))}</span><button type="button" data-remove="${side}" data-idx="${i}" aria-label="Entfernen">✕</button></div>`).join('') : '<div class="muted tr-empty">Noch nichts ausgewählt.</div>'}</div>
          <div class="tr-total">Gesamtwert <b>${fmt(total)}</b></div>
          ${pool}
        </div>
      </div>`;
    };

    const tA = st.A.reduce((s, a) => s + assetValue(val, a), 0);
    const tB = st.B.reduce((s, a) => s + assetValue(val, a), 0);
    let verdict;
    if (!tA && !tB) verdict = 'Zu beiden Seiten Spieler oder Picks hinzufügen, um den Trade zu bewerten.';
    else {
      const diff = Math.abs(tA - tB), pct = Math.round(diff / Math.max(tA, tB, 1) * 100);
      // Team A GIBT tA und BEKOMMT tB → begünstigt ist, wer mehr bekommt
      verdict = pct <= FAIR_PCT ? `✅ Fairer Trade (Unterschied ${pct} %)`
        : `⚖️ Begünstigt <b>${e(tB > tA ? (st.teamA || 'Team A') : (st.teamB || 'Team B'))}</b> (Unterschied ${pct} %, ${fmt(diff)} Punkte)`;
    }

    let impact = '';
    const A = byName(st.teamA), B = byName(st.teamB);
    if (A && B && data.PLAYER_PROJECTIONS) {
      const pA = st.A.filter(a => a.kind === 'player').map(a => a.name), pB = st.B.filter(a => a.kind === 'player').map(a => a.name);
      const base = teams.map(t => ({ name: t.name, total: projTotal(data, t, [], []) }));
      const rank = (list, n) => list.slice().sort((a, b) => b.total - a.total).findIndex(x => x.name === n) + 1;
      const nA = projTotal(data, A, pA, pB), nB = projTotal(data, B, pB, pA);
      const after = base.map(t => t.name === A.name ? { ...t, total: nA } : t.name === B.name ? { ...t, total: nB } : t);
      const row = (t, now) => {
        const was = base.find(x => x.name === t.name).total, diff = now - was;
        const r0 = rank(base, t.name), r1 = rank(after, t.name), rd = r0 - r1;
        return `<div class="tr-impact-row"><b>${e(t.emoji || '')} ${e(t.name)}</b>
          <span>${ui.num(was)} → ${ui.num(now)} Pkt. proj. <span class="${diff >= 0 ? 'up' : 'down'}">${ui.signed(diff)}</span></span>
          <span>Rang #${r0} → #${r1} ${rd > 0 ? `<span class="up">▲ ${rd}</span>` : rd < 0 ? `<span class="down">▼ ${-rd}</span>` : '<span class="muted">–</span>'}</span></div>`;
      };
      const picks = [...st.A, ...st.B].filter(a => a.kind === 'pick').length;
      impact = `<h2 class="group-title">📈 Geschätzte Team-Auswirkung <span>proj. Saisonpunkte des Kaders, ohne K/DST</span></h2>
        <div class="card tr-impact">${row(A, nA)}${row(B, nB)}</div>
        ${picks ? `<div class="page-sub">${picks} Pick(s) fließen hier nicht ein (keine Punkteprojektion für Picks).</div>` : ''}`;
    } else if (!A || !B) {
      impact = '<div class="page-sub" style="margin-top:12px">Team A und Team B wählen, um die geschätzte Punkte- und Rang-Auswirkung zu sehen.</div>';
    }

    return `
      <div class="page-head">
        <h1 class="page-title display">⚖️ Trade Analyzer</h1>
        <div class="page-sub explain">Werte = Schnitt aus KeepTradeCut und Dynasty Daddy · Picks nach Runde und Jahr</div>
      </div>
      <div data-share="Trade">
      <div class="tr-cols">${column('A')}${column('B')}</div>
      <div class="note tr-verdict">${verdict}</div>
      </div>
      ${(st.A.length || st.B.length || st.teamA || st.teamB) ? '<div class="tr-actions"><button type="button" class="seg-btn" data-reset>↺ Neuer Trade</button></div>' : ''}
      ${impact}
      <div class="page-sub" style="margin-top:18px">Verbindliche Werte: <a href="https://dynasty-daddy.com/trade-calculator" target="_blank" rel="noopener">Dynasty Daddy</a> · <a href="https://keeptradecut.com/trade-calculator" target="_blank" rel="noopener">KeepTradeCut</a></div>`;
  }

  function analyzerMount(root, ctx) {
    const save = st => { ctx.store.setJSON('trade', st); ctx.refresh(); };
    const val = valuer(ctx.data);
    root.querySelectorAll('[data-team]').forEach(sel => sel.addEventListener('change', () => {
      const st = tradeState(ctx); const side = sel.dataset.team;
      if (st['team' + side] !== sel.value) st[side] = st[side].filter(a => a.kind !== 'pick'); // Picks gehören zum alten Team
      st['team' + side] = sel.value; save(st);
    }));
    root.querySelectorAll('[data-toggle]').forEach(b => b.addEventListener('click', () => {
      const st = tradeState(ctx), side = b.dataset.toggle;
      const a = b.dataset.kind === 'pick'
        ? { kind: 'pick', name: b.dataset.name, year: Number(b.dataset.year), round: b.dataset.round }
        : { kind: 'player', name: b.dataset.name };
      const i = st[side].findIndex(x => x.kind === a.kind && x.name === a.name);
      if (i > -1) st[side].splice(i, 1); else st[side].push(a);
      save(st);
    }));
    root.querySelectorAll('[data-remove]').forEach(b => b.addEventListener('click', () => {
      const st = tradeState(ctx); st[b.dataset.remove].splice(Number(b.dataset.idx), 1); save(st);
    }));
    const reset = root.querySelector('[data-reset]');
    if (reset) reset.addEventListener('click', () => save(emptyTrade()));
    root.querySelectorAll('[data-search]').forEach(input => {
      const side = input.dataset.search;
      const box = root.querySelector(`[data-suggest="${side}"]`);
      input.addEventListener('input', () => {
        const q = normKey(input.value);
        if (!q) { box.hidden = true; box.innerHTML = ''; return; }
        const hits = val.list.filter(p => normKey(p.name).includes(q)).slice(0, 8);
        box.innerHTML = hits.map(p => `<button type="button" class="tr-sug" data-add="${MFHFB.ui.esc(p.name)}">${MFHFB.ui.esc(p.name)} <small>${MFHFB.ui.esc(p.team || '')} ${MFHFB.ui.esc(p.pos || '')} · ${fmt(p.avg)}</small></button>`).join('') || '<div class="tr-sug muted">Kein Treffer</div>';
        box.hidden = false;
      });
      box.addEventListener('click', ev => {
        const b = ev.target.closest('[data-add]');
        if (!b) return;
        const st = tradeState(ctx);
        if (!st[side].some(x => x.kind === 'player' && x.name === b.dataset.add)) st[side].push({ kind: 'player', name: b.dataset.add });
        save(st);
      });
      input.addEventListener('keydown', ev => {
        if (ev.key === 'Enter') { const first = box.querySelector('[data-add]'); if (first) first.click(); }
        if (ev.key === 'Escape') { box.hidden = true; }
      });
    });
  }

  const DATA = ['teams', 'rosters-live', 'trade-values', 'trades', '?trades-history', 'draft', '?projections'];
  MFHFB.pages.register({ id: 'trade', section: 'trade', label: 'Trade Analyzer', icon: '⚖️', applies: { sport: ['nfl'], format: ['Dynasty'] }, data: DATA, render: analyzerPage, mount: analyzerMount });
  MFHFB.pages.register({
    id: 'tradehistory', section: 'trade', label: 'Trade History', icon: '📜', applies: { sport: ['nfl'] }, data: DATA,
    title: ({ params }) => params[0] ? `Trade History ${params[0]}` : 'Trade History', render: historyPage,
  });
})();
