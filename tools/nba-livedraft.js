// ============================================================
//  Tool (NBA): Live Draft — Full Draft Board + Keeper + Best Available
// ============================================================
//  #/<liga>/livedraft   (nur Ligen mit liveDraft in js/leagues.js)
//
//  Daten:
//   - LIVE_DRAFT (live-draft-<jahr>.js): gemachte Picks, von Hand gepflegt
//   - DRAFT_2026_SLOT_ORDER + PICKS (+ PICKS_LIVE): Reihenfolge + Besitzer
//   - KEEPERS: Keeper je Team (ESPN League Keepers)
//   - BEST_AVAILABLE_BOARD: alle Spieler mit Gesamtrang, Rookie/Sophomore,
//     NBA-Team, Position (täglich neu aus ESPN + Rankings)
//  Best Available = Board minus Keeper minus gedraftete Spieler.
// ============================================================

(function () {
  const N = () => MFHFB.nba;
  const EXP = { rookie: ['R', 'Rookie'], sophomore: ['S', 'Sophomore'], veteran: ['V', 'Veteran'] };
  const POS = ['PG', 'SG', 'SF', 'PF', 'C'];
  // Standard-Sortierung: MFHFB Dynasty-Rang (Spieler ohne Rang ans Ende, dort nach Gesamtscore)
  const defaults = { exp: 'all', pos: '', q: '', sort: 'dynastyRank', dir: 1 };
  const getState = ctx => { const st = { ...defaults, ...ctx.store.getJSON('livedraft2', {}) }; if (!st.sort) st.sort = defaults.sort; return st; };

  // ---------- Modell ----------
  function model(ctx) {
    const data = ctx.data, nba = N().init(data);
    const LD = data.LIVE_DRAFT || { picks: [] };
    const year = LD.jahr || ctx.league.liveDraft;
    const teams = nba.leagueTeams(data, true);
    const byId = {}; teams.forEach(t => { byId[t.id] = t; });
    // Rookies = ganze Draft-Klasse 2026, Sophomores = Draft-Klasse 2025 (das Board
    // verpasst einzelne, z. B. Ebuka Okorie, Hugo González)
    const rk = new Set((data.DRAFT_CLASS_2026 || []).map(p => nba.key(p.name)));
    const so = new Set((data.DRAFT_CLASS_2025 || []).map(p => nba.key(typeof p === 'string' ? p : p.name)));
    const board = (data.BEST_AVAILABLE_BOARD || []).map(p => {
      const k = nba.key(p.name);
      if (p.experience !== 'rookie' && rk.has(k)) return { ...p, experience: 'rookie', isRookie: true };
      if (p.experience === 'veteran' && so.has(k)) return { ...p, experience: 'sophomore' };
      return p;
    });
    const info = new Map(); board.forEach(p => { if (!info.has(nba.key(p.name))) info.set(nba.key(p.name), p); });

    // Slot-Reihenfolge (jede Runde gleich), Besitzer aus PICKS + PICKS_LIVE
    let slots = (data.DRAFT_2026_SLOT_ORDER || []).filter(s => s.round === 1).sort((a, b) => a.slot - b.slot).map(s => ({ slot: s.slot, orig: s.originalOwner, nbaTeam: s.nbaTeam }));
    if (!slots.length) slots = teams.filter(t => !t.inactive).map((t, i) => ({ slot: i + 1, orig: t.id }));
    const picks = nba.picks(data).filter(p => p.year === year);
    const rounds = LD.runden || Math.max(1, ...picks.map(p => p.round));
    const made = new Map((LD.picks || []).map(p => [String(p.pick), p]));

    const order = [];
    for (let r = 1; r <= rounds; r++) slots.forEach(s => {
      const id = `${r}.${s.slot}`;
      const base = picks.find(p => p.round === r && p.originalOwner === s.orig);
      const m = made.get(id) || null;
      const owner = (m && m.team) || (base ? base.currentOwner : s.orig);
      const pl = m ? { ...(info.get(nba.key(m.spieler)) || {}), name: m.spieler } : null;
      if (pl && m.nba) pl.nbaTeam = m.nba;
      if (pl && m.pos) pl.pos = m.pos;
      if (pl && m.exp) pl.experience = m.exp;
      order.push({ id, round: r, slot: s.slot, overall: (r - 1) * slots.length + s.slot, orig: s.orig, owner, made: m, player: pl });
    });
    const next = LD.amZug ? order.find(o => o.id === String(LD.amZug)) : order.find(o => !o.made);

    // Keeper + gedraftete Spieler = vergeben
    const K = (data.KEEPERS && data.KEEPERS.teams) || {};
    const taken = new Map();
    Object.keys(K).forEach(tid => (K[tid] || []).forEach(n => taken.set(nba.key(n), { tid: +tid, how: 'keeper' })));
    order.filter(o => o.made).forEach(o => taken.set(nba.key(o.made.spieler), { tid: o.owner, how: 'draft', pick: o.id }));
    const available = board.filter(p => !taken.has(nba.key(p.name)));
    const unknownKeepers = [];
    Object.keys(K).forEach(tid => (K[tid] || []).forEach(n => { if (!info.has(nba.key(n))) unknownKeepers.push(n); }));

    return { nba, LD, year, teams, byId, info, slots, order, rounds, next, K, taken, available, unknownKeepers, board };
  }

  const short = t => (t ? t.name.split(' ')[0] : '?');
  // Spielername → Cat Web des Spielers
  const cw = (ctx, name, inner) => `<a class="ld-plink" href="${ctx.href('catweb', name)}" title="Cat Web: ${ctx.ui.esc(name)}">${inner || ctx.ui.esc(name)}</a>`;
  const expTag = (exp, cls) => (exp === 'rookie' || exp === 'sophomore' ? `<span class="ld-exp ${exp}${cls ? ' ' + cls : ''}" title="${EXP[exp][1]}">${EXP[exp][0]}</span>` : '');
  const fmtDate = iso => { try { return new Date(iso).toLocaleString('de-DE', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Berlin' }); } catch (e) { return ''; } };

  // ---------- Board ----------
  function boardHtml(ctx, M) {
    const e = ctx.ui.esc, nba = M.nba;
    const cell = o => {
      const t = M.byId[o.owner], traded = o.owner !== o.orig, isNext = M.next && M.next.id === o.id;
      const cls = ['ld-cell', o.made ? 'made' : '', isNext ? 'next' : '', traded ? 'traded' : ''].filter(Boolean).join(' ');
      const who = `<span class="ld-owner">${traded ? '→ ' : ''}${e(short(t))}</span>`;
      if (!o.made) return `<td><div class="${cls}" style="${nba.tcStyle(t)}" title="${e(t ? t.name : '')}${traded ? ' (via ' + e((M.byId[o.orig] || {}).name || '?') + ')' : ''}"><small>${o.id}</small>${who}${isNext ? '<span class="ld-clock">⏱ am Zug</span>' : ''}</div></td>`;
      const p = o.player;
      return `<td><div class="${cls}" style="${nba.tcStyle(t)}" title="${e(t ? t.name : '')}${o.made.notiz ? ' · ' + e(o.made.notiz) : ''}"><small>${o.id} ${who}</small>
        <b class="ld-pname">${cw(ctx, p.name)}</b><span class="ld-pmeta">${e(p.pos || '')}${p.nbaTeam ? ' · ' + e(p.nbaTeam) : ''} ${expTag(p.experience)}</span></div></td>`;
    };
    return `<div class="card ld-board" data-share="Live ${M.year} Draft">
      <div class="card-head"><h2>📋 Full Draft Board ${M.year}</h2><span class="muted small">${M.order.filter(o => o.made).length}/${M.order.length} Picks</span></div>
      <div class="table-wrap"><table class="table compact ld-matrix"><thead><tr><th>Rnd</th>${M.slots.map(s => { const t = M.byId[s.orig]; return `<th title="${e(t ? t.name : '')}${s.nbaTeam ? ' · NBA-Slot ' + e(s.nbaTeam) : ''}">${e(short(t))}<small>#${s.slot}</small></th>`; }).join('')}</tr></thead>
        <tbody>${Array.from({ length: M.rounds }, (_, i) => i + 1).map(r => `<tr><td class="strong">R${r}</td>${M.order.filter(o => o.round === r).map(cell).join('')}</tr>`).join('')}</tbody></table></div></div>`;
  }

  // ---------- Status ----------
  function statusHtml(ctx, M) {
    const e = ctx.ui.esc;
    const made = M.order.filter(o => o.made);
    const recent = (M.LD.picks || []).slice(-6).reverse().map(p => M.order.find(o => o.id === String(p.pick))).filter(Boolean);
    const upcoming = M.next ? M.order.slice(M.order.indexOf(M.next) + 1).filter(o => !o.made).slice(0, 3) : [];
    const lbl = o => { const t = M.byId[o.owner]; return `<b>${o.id}</b> ${e(t ? t.name : '?')}${o.owner !== o.orig ? ` <span class="muted">(via ${e(short(M.byId[o.orig]))})</span>` : ''}`; };
    const clock = !made.length && M.LD.start && new Date(M.LD.start) > new Date()
      ? `🗓️ Start: ${fmtDate(M.LD.start)} Uhr`
      : M.next ? `⏱ Am Zug: ${lbl(M.next)}` : '🏁 Draft abgeschlossen';
    return `<div class="card ld-status">
      <div class="ld-clockline">${clock}</div>
      ${M.next && upcoming.length ? `<div class="ld-upnext">Danach: ${upcoming.map(lbl).join(' · ')}</div>` : ''}
      ${recent.length ? `<div class="ld-recent"><span class="muted">Zuletzt:</span> ${recent.map(o => `<span class="ld-rchip" style="${M.nba.tcStyle(M.byId[o.owner])}"><b>${o.id}</b> ${e(o.made.spieler)} <small>→ ${e(short(M.byId[o.owner]))}</small></span>`).join('')}</div>` : ''}
    </div>`;
  }

  // ---------- Kader: Keeper + Draft ----------
  function rostersHtml(ctx, M) {
    const e = ctx.ui.esc, nba = M.nba;
    const max = ctx.data.MAX_ROSTER_SIZE || 26;
    const ids = [...new Set(M.slots.map(s => s.orig).concat(M.teams.filter(t => !t.inactive).map(t => t.id)))];
    const cards = ids.map(tid => {
      const t = M.byId[tid]; if (!t) return '';
      const kept = M.K[tid] || [];
      const drafted = M.order.filter(o => o.made && o.owner === tid);
      const open = M.order.filter(o => !o.made && o.owner === tid);
      const n = kept.length + drafted.length;
      return `<div class="card nba-kcard ld-team" style="${nba.tcStyle(t)}">
        <div class="ld-thead"><span class="nba-kteam">${e(t.name)}</span><span class="ld-count${n > max ? ' over' : ''}" title="Keeper + Draft / Kadergröße">${n}/${max}</span></div>
        <div class="ld-tsub">${kept.length} Keeper · ${drafted.length} gedraftet${open.length ? ` · noch ${open.length} Pick${open.length === 1 ? '' : 's'} (${open.map(o => o.id).join(', ')})` : ''}</div>
        ${drafted.length ? `<ol class="ld-list drafted">${drafted.map(o => `<li><span class="ld-pk">${o.id}</span> <b>${cw(ctx, o.made.spieler)}</b> ${expTag(o.player && o.player.experience)}</li>`).join('')}</ol>` : ''}
        <ol class="ld-list">${kept.map(k => { const p = M.info.get(nba.key(k)) || {}; return `<li>${cw(ctx, k)} ${expTag(p.experience)}</li>`; }).join('')}</ol>
      </div>`;
    }).join('');
    const K = ctx.data.KEEPERS;
    return `<div class="card ld-rosters"><div class="card-head"><h2>🔑 Keeper & Draft je Team</h2>${K && K.stand ? `<span class="muted small">Keeper-Stand ${new Date(K.stand).toLocaleDateString('de-DE')}</span>` : ''}</div>
      <div class="ld-tgrid">${cards}</div></div>`;
  }

  // ---------- Best Available ----------
  function baColumns(nba) {
    return [
      { k: 'rank', l: '#', t: 'Sortieren nach Gesamtscore über alle Signale', v: p => p.rank },
      { k: 'name', l: 'Spieler', v: p => String(p.name).toLowerCase() },
      { k: 'age', l: 'Alter', v: p => nba.age(p.dob) ?? p.age ?? null },
      { k: 'dynastyRank', l: 'MFHFB', t: 'MFHFB Dynasty-Rang', v: p => p.dynastyRank ?? null },
      { k: 'stickyScore', l: 'Sticky', t: 'Sticky Score (Summer-League-Modell), höher = besser', v: p => p.stickyScore ?? null, desc: true },
    ];
  }
  function baRows(ctx, M, st) {
    const nba = M.nba, q = String(st.q || '').toLowerCase().trim();
    let list = M.available.filter(p => (st.exp === 'all' || p.experience === st.exp)
      && (!st.pos || String(p.pos || '').split(/[\/, ]+/).includes(st.pos))
      && (!q || [p.name, p.nbaTeam, p.pos].some(x => String(x || '').toLowerCase().includes(q))));
    if (st.sort) {
      const col = baColumns(nba).find(c => c.k === st.sort);
      if (col) list = list.slice().sort((a, b) => { const av = col.v(a), bv = col.v(b); if (av == null && bv == null) return a.rank - b.rank; if (av == null) return 1; if (bv == null) return -1; return st.dir * (typeof av === 'string' ? av.localeCompare(bv) : av - bv); });
    }
    return list;
  }
  function baBody(ctx, M, st) {
    const e = ctx.ui.esc, nba = M.nba;
    const list = baRows(ctx, M, st);
    if (!list.length) return `<tr><td colspan="5">${ctx.ui.empty('Keine Treffer', 'Filter oder Suche anpassen.', '🔎')}</td></tr>`;
    return list.slice(0, 250).map((p, i) => {
      const a = nba.age(p.dob) ?? p.age;
      return `<tr>
        <td class="num rank" title="Gesamtrang ${p.rank}">${i + 1}</td>
        <td><div class="ld-baname"><b>${cw(ctx, p.name)}</b> ${expTag(p.experience)}</div><div class="ld-pmeta">${e(p.pos || '')}${p.nbaTeam ? ' · ' + e(p.nbaTeam) : ''}${p.bestCat30 ? ` · <span class="up">${e(p.bestCat30)}</span>` : ''}</div></td>
        <td class="num">${a != null ? a : '—'}</td>
        <td class="num">${nba.rankBadge(p.dynastyRank ?? null)}</td>
        <td class="num">${p.stickyScore == null ? '<span class="muted">—</span>' : `<span class="nba-sticky ${p.stickyScore >= 5 ? 'hi' : p.stickyScore >= 0 ? 'mid' : 'lo'}">${p.stickyScore.toFixed(1)}</span>`}</td>
      </tr>`;
    }).join('');
  }
  function baHtml(ctx, M) {
    const e = ctx.ui.esc, st = getState(ctx);
    const cnt = x => M.available.filter(p => x === 'all' || p.experience === x).length;
    const th = c => `<th class="${c.k === 'name' ? '' : 'num'}${st.sort === c.k ? ' sorted' : ''}"${c.t ? ` title="${c.t}"` : ''}><button type="button" class="th-sort" data-sort="${c.k}">${c.l}${st.sort === c.k ? (st.dir === 1 ? ' ▲' : ' ▼') : ''}</button></th>`;
    return `<div class="card ld-ba">
      <div class="card-head"><h2>🆓 Best Available</h2><span class="muted small">${M.available.length} frei</span></div>
      <div class="ld-bactl">
        <div class="seg" role="group" aria-label="Erfahrung">${[['all', 'Alle'], ['rookie', 'Rookies'], ['sophomore', 'Sophs'], ['veteran', 'Vets']].map(([v, l]) => `<button type="button" class="seg-btn${st.exp === v ? ' active' : ''}" data-exp="${v}" title="${cnt(v)} Spieler">${l}</button>`).join('')}</div>
        <div class="ld-barow">
          <select class="tr-select" data-pos aria-label="Position"><option value="">Alle Pos.</option>${POS.map(p => `<option${st.pos === p ? ' selected' : ''}>${p}</option>`).join('')}</select>
          <input type="search" class="search" placeholder="Spieler, Team …" value="${e(st.q)}" data-q aria-label="Suchen">
          ${st.sort !== defaults.sort || st.dir !== 1 ? '<button type="button" class="seg-btn" data-unsort title="Zurück zur MFHFB-Sortierung">↺</button>' : ''}
        </div>
      </div>
      <div class="table-wrap ld-bascroll"><table class="table compact ld-batable"><thead><tr>${baColumns(M.nba).map(th).join('')}</tr></thead>
        <tbody data-ba>${baBody(ctx, M, st)}</tbody></table></div>
      <div class="ld-foot muted small">Sortiert nach MFHFB Dynasty-Rang (Spalten anklicken zum Umsortieren, # = Gesamtscore). Spieler anklicken → Cat Web. Ohne Keeper und bereits gedraftete Spieler. <span class="ld-exp rookie">R</span> Rookie · <span class="ld-exp sophomore">S</span> Sophomore</div>
    </div>`;
  }

  function render(ctx) {
    const { data, ui } = ctx;
    if (!data.LIVE_DRAFT) return ui.empty('Kein Live Draft', 'live-draft-Datei fehlt für diese Liga.', '📋');
    const M = model(ctx);
    ctx._ld = M;
    const LD = M.LD;
    return `
      <div class="ld-wrap">
        <div class="page-head"><h1 class="page-title display">🔴 Live ${M.year} Draft</h1>
          <div class="page-sub">${M.order.filter(o => o.made).length} von ${M.order.length} Picks · Stand ${fmtDate(LD.aktualisiert)} Uhr · ${M.rounds} Runden, gleiche Reihenfolge in jeder Runde</div></div>
        ${M.unknownKeepers.length ? `<div class="note small">ℹ️ Nicht im Spieler-Board (bleiben trotzdem als Keeper vergeben): ${ui.esc(M.unknownKeepers.join(', '))}</div>` : ''}
        <div class="ld-grid">
          <div class="ld-main">${statusHtml(ctx, M)}${boardHtml(ctx, M)}</div>
          <aside class="ld-side">${baHtml(ctx, M)}</aside>
          <div class="ld-keep">${rostersHtml(ctx, M)}</div>
        </div>
      </div>`;
  }

  function mount(root, ctx) {
    const M = ctx._ld || model(ctx);
    const save = (patch, full) => {
      ctx.store.setJSON('livedraft2', { ...getState(ctx), ...patch });
      if (full) ctx.refresh(); else root.querySelector('[data-ba]').innerHTML = baBody(ctx, M, getState(ctx));
    };
    root.querySelectorAll('[data-exp]').forEach(b => b.addEventListener('click', () => save({ exp: b.dataset.exp }, true)));
    const pos = root.querySelector('[data-pos]');
    if (pos) pos.addEventListener('change', () => save({ pos: pos.value }));
    const q = root.querySelector('[data-q]');
    if (q) q.addEventListener('input', () => save({ q: q.value }));
    root.querySelectorAll('[data-sort]').forEach(b => b.addEventListener('click', () => {
      const st = getState(ctx), k = b.dataset.sort;
      const col = baColumns(M.nba).find(c => c.k === k);
      save(st.sort === k ? { dir: -st.dir } : { sort: k, dir: col && col.desc ? -1 : 1 }, true);
    }));
    const un = root.querySelector('[data-unsort]');
    if (un) un.addEventListener('click', () => save({ sort: defaults.sort, dir: 1 }, true));
  }

  MFHFB.pages.register({
    id: 'livedraft', section: 'draft', label: 'Live Draft', icon: '🔴', applies: { sport: ['nba'] },
    when: league => !!league.liveDraft,
    data: ['teams', '?rosters-live', '?sport:aliases', '?sport:draft-class-2026', '?sport:draft-class-2025', 'picks', '?picks-live', 'best-available-board', 'live-draft'],
    title: () => 'Live Draft', render, mount,
  });
})();
