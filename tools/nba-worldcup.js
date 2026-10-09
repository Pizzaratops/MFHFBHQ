// ============================================================
//  Tool (NBA): Fantrax World Cup — Live Draft Board
// ============================================================
//  #/worldcup/wcdraft   (Liga mit worldCup-Config in js/leagues.js)
//
//  Holt die Picks live im Browser über Fantrax' fxea-API (CORS offen,
//  siehe projections/assets/fantrax-live.js in TTHQ):
//    getDraftResults?leagueId=…  → draftPicks[] {division, round, pick,
//                                   pickInRound, teamId, playerId?, time}
//                                   "pick" = Overall-Pick INNERHALB der
//                                   Division, ohne playerId = noch offen
//    getPlayerIds?sport=NBA      → {id: {name: "Nachname, Vorname", team, position}}
//    getLeagueInfo?leagueId=…    → teamInfo (Teamnamen, falls geliefert)
//  Eine Conference = eine Fantrax-Liga mit 12 Divisionen.
//
//  Zeigt: Board der eigenen Division (Runden × Slots), Best Available mit
//  World-Cup-ADP (über alle geladenen Divisionen) und Chance, dass der
//  Spieler bis zum eigenen nächsten Pick noch da ist, eigenes Team mit
//  Radar, ADP-Tabelle (Steals/Reaches gegen unsere Projections).
//  Nichts wird gespeichert außer „Mein Slot“ (localStorage).
// ============================================================

(function () {
  const FX = 'https://www.fantrax.com/fxea/general';
  const N = () => MFHFB.nba;
  const CATS = [
    { key: 'pts', label: 'PTS' }, { key: 'reb', label: 'REB' }, { key: 'ast', label: 'AST' },
    { key: 'stl', label: 'STL' }, { key: 'blk', label: 'BLK' }, { key: 'tpm', label: '3PM' },
    { key: 'fgImpact', label: 'FG%' }, { key: 'ftImpact', label: 'FT%' }, { key: 'tov', label: 'TO' },
  ];
  const REFRESH_MS = 45000;

  // ---------- Live-Daten (Modul-Cache, überlebt Seitenwechsel) ----------
  const live = { players: null, picks: {}, names: {}, errs: {}, at: null, loading: null, playerErr: null };
  async function getJSON(url) {
    const r = await fetch(url, { cache: 'no-store' });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return r.json();
  }
  const fxName = s => { const t = String(s || ''); const i = t.indexOf(','); return i < 0 ? t : `${t.slice(i + 1).trim()} ${t.slice(0, i).trim()}`; };
  function load(cfg, force) {
    if (live.loading) return live.loading;
    if (!force && live.at && Date.now() - live.at < REFRESH_MS - 5000) return Promise.resolve();
    live.loading = (async () => {
      if (!live.players) {
        try {
          const p = await getJSON(`${FX}/getPlayerIds?sport=NBA`);
          const m = {};
          Object.entries(p || {}).forEach(([id, v]) => { m[id] = { name: fxName(v.name), team: v.team, pos: v.position }; });
          live.players = m; live.playerErr = null;
        } catch (e) { live.playerErr = e.message; }
      }
      await Promise.all(cfg.conferences.filter(c => c.id).map(async c => {
        try {
          const d = await getJSON(`${FX}/getDraftResults?leagueId=${encodeURIComponent(c.id)}`);
          live.picks[c.name] = Array.isArray(d.draftPicks) ? d.draftPicks : [];
          live.errs[c.name] = null;
        } catch (e) { live.errs[c.name] = e.message; }
        if (!live.names[c.name]) {
          try {
            const i = await getJSON(`${FX}/getLeagueInfo?leagueId=${encodeURIComponent(c.id)}`);
            const out = {};
            Object.entries(i.teamInfo || {}).forEach(([id, t]) => { out[id] = (t && t.name) || ''; });
            live.names[c.name] = out;
          } catch (e) { live.names[c.name] = {}; }
        }
      }));
      live.at = Date.now();
    })().finally(() => { live.loading = null; });
    return live.loading;
  }

  // ---------- Mathe ----------
  function phi(x) { // Normalverteilung, kumulativ (Abramowitz-Stegun)
    const t = 1 / (1 + 0.2316419 * Math.abs(x));
    const d = 0.3989423 * Math.exp(-x * x / 2);
    const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    return x > 0 ? 1 - p : p;
  }

  // ---------- Modell ----------
  function model(ctx) {
    const nba = N(), data = ctx.data, cfg = ctx.league.worldCup;
    nba.init(data);
    const store = ctx.store.getJSON('wc', {});
    const myConf = store.conf || cfg.my.conference, myDiv = store.div || cfg.my.division;
    const rows = data.PROJECTIONS_CONSENSUS ? MFHFB.nbaProjections.rows(ctx) : [];
    const byKey = new Map(); rows.forEach(r => { const k = nba.key(r.name); if (!byKey.has(k)) byKey.set(k, r); });
    const P = live.players || {};
    const pl = id => (id && P[id]) || null;

    // World-Cup-ADP über alle geladenen Divisionen
    const adp = new Map();
    const divs = [];
    Object.entries(live.picks).forEach(([conf, picks]) => {
      const byDiv = {};
      picks.forEach(p => { (byDiv[p.division] = byDiv[p.division] || []).push(p); });
      Object.entries(byDiv).forEach(([div, list]) => {
        const made = list.filter(p => p.playerId).length;
        divs.push({ conf, div, made, total: list.length });
      });
      picks.forEach(p => {
        const x = pl(p.playerId); if (!x) return;
        const k = nba.key(x.name);
        const a = adp.get(k) || { name: x.name, team: x.team, n: 0, s: 0, s2: 0, min: Infinity, max: 0 };
        a.n++; a.s += p.pick; a.s2 += p.pick * p.pick; a.min = Math.min(a.min, p.pick); a.max = Math.max(a.max, p.pick);
        adp.set(k, a);
      });
    });
    adp.forEach(a => { a.mean = a.s / a.n; a.sd = a.n > 1 ? Math.sqrt(Math.max(0, a.s2 / a.n - a.mean * a.mean)) : null; });

    // Eigene Division
    const mine = (live.picks[myConf] || []).filter(p => p.division === myDiv).sort((a, b) => a.pick - b.pick);
    const slotTeam = {};
    mine.filter(p => p.round === 1).forEach(p => { slotTeam[p.pickInRound] = p.teamId; });
    const slots = Object.keys(slotTeam).map(Number).sort((a, b) => a - b);
    const names = live.names[myConf] || {};
    const teamLabel = id => names[id] || `Slot ${slots.find(s => slotTeam[s] === id) || '?'}`;
    const myTeam = store.team && slots.some(s => slotTeam[s] === store.team) ? store.team : null;
    const open = mine.filter(p => !p.playerId);
    const current = open.length ? open[0].pick : null;
    const myOpen = myTeam ? open.filter(p => p.teamId === myTeam) : [];
    const myNext = myOpen.length ? myOpen[0].pick : null;
    const myAfter = myOpen.length > 1 ? myOpen[1].pick : null;
    const takenDiv = new Set(mine.filter(p => p.playerId).map(p => { const x = pl(p.playerId); return x ? nba.key(x.name) : 'id:' + p.playerId; }));

    // Chance, dass ein Spieler bis Pick `at` noch da ist (Normal-Approx. über World-Cup-ADP)
    function chance(k, at) {
      const a = adp.get(k);
      if (!a || a.n < 3 || at == null || current == null) return null;
      const sd = Math.max(3, a.sd || 0);
      const surviveNow = 1 - phi((current - 0.5 - a.mean) / sd);
      const surviveAt = 1 - phi((at - 0.5 - a.mean) / sd);
      return surviveNow <= 0.001 ? 0 : Math.max(0, Math.min(1, surviveAt / surviveNow));
    }
    const available = rows.filter(r => !takenDiv.has(nba.key(r.name)));
    return { nba, cfg, store, myConf, myDiv, rows, byKey, P, pl, adp, divs, mine, slotTeam, slots, teamLabel, myTeam, current, myNext, myAfter, available, chance };
  }

  // ---------- Playoff-Spiele (worldCup.playoffs) ----------
  // Team aus unseren Projections, sonst aus Fantrax; Kürzel vereinheitlicht (SA → SAS …)
  function poOf(M, name, fxTeam) {
    const PO = M.cfg.playoffs; if (!PO) return null;
    const r = M.byKey.get(M.nba.key(name));
    const t = M.nba.canonTeam((r && r.team) || fxTeam || '');
    return PO[t] ? { team: t, w: PO[t], sum: PO[t].reduce((a, b) => a + b, 0) } : null;
  }
  function poHtml(M, name, fxTeam) {
    const po = poOf(M, name, fxTeam);
    if (!po) return '<span class="muted">—</span>';
    const max = Math.max(...Object.values(M.cfg.playoffs).map(w => w.reduce((a, b) => a + b, 0)));
    const min = Math.min(...Object.values(M.cfg.playoffs).map(w => w.reduce((a, b) => a + b, 0)));
    const cls = po.sum >= max ? 'hi' : po.sum <= min + 1 ? 'lo' : po.sum >= max - 1 ? 'midhi' : 'mid';
    return `<span class="wc-po ${cls}" title="${po.team} · Playoff-Spiele: Runde 1 ${po.w[0]} · Runde 2 ${po.w[1]} · Runde 3 ${po.w[2]}"><b>${po.sum}</b> <small>${po.w.join('')}</small></span>`;
  }

  // ---------- Teile ----------
  const short = n => { const parts = String(n || '').split(' '); return parts.length > 1 ? `${parts[0][0]}. ${parts.slice(1).join(' ')}` : n; };

  function statusHtml(ctx, M) {
    const e = ctx.ui.esc;
    const age = live.at ? Math.round((Date.now() - live.at) / 1000) : null;
    const errs = Object.entries(live.errs).filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`);
    const until = M.myNext != null && M.current != null ? M.myNext - M.current : null;
    const onClock = M.current != null ? M.mine.find(p => p.pick === M.current) : null;
    return `<div class="card wc-status">
      <div class="wc-statusline">
        ${M.current == null && M.mine.length ? '<b>✅ Draft der Division beendet</b>' : M.current != null ? `<span>Am Zug: <b>Pick ${M.current}</b> (R${onClock.round}.${onClock.pickInRound}) · ${e(M.teamLabel(onClock.teamId))}${onClock.teamId === M.myTeam ? ' <span class="au-me">ich</span>' : ''}</span>` : '<span class="muted">Noch keine Picks geladen</span>'}
        ${until != null ? `<span class="wc-next${until === 0 ? ' now' : ''}">${until === 0 ? '🔔 Du bist dran!' : `Dein nächster Pick: <b>${M.myNext}</b> · noch <b>${until}</b> Pick${until === 1 ? '' : 's'}`}</span>` : ''}
        <span class="wc-refresh"><span class="muted small">${age != null ? `Stand vor ${age < 60 ? age + ' s' : Math.round(age / 60) + ' min'}` : ''}</span><button type="button" class="mp-btn" data-reload>🔄 Neu laden</button></span>
      </div>
      ${errs.length ? `<div class="au-err small">⚠️ Fantrax nicht erreichbar: ${e(errs.join(' · '))}</div>` : ''}
      ${live.playerErr ? `<div class="au-err small">⚠️ Spielerliste nicht ladbar: ${e(live.playerErr)}</div>` : ''}
    </div>`;
  }

  function boardHtml(ctx, M) {
    const e = ctx.ui.esc, nba = M.nba;
    if (!M.slots.length) return `<div class="card">${ctx.ui.empty('Division nicht gefunden', `Keine Picks für ${M.myDiv} (${M.myConf}) — Fantrax-Antwort noch leer oder Division falsch.`, '🌍')}</div>`;
    const rounds = Math.max(M.cfg.rounds, ...M.mine.map(p => p.round));
    const cell = {};
    // Spalte = Team (Slot aus Runde 1), nicht Position in der Runde — so
    // stimmt das Board bei jeder Pick-Reihenfolge (Snake, 5th Round Reversal …)
    const slotOf = {}; M.slots.forEach(s => { slotOf[M.slotTeam[s]] = s; });
    M.mine.forEach(p => { cell[p.round + ':' + (slotOf[p.teamId] || p.pickInRound)] = p; });
    const head = M.slots.map(s => { const id = M.slotTeam[s]; return `<th class="${id === M.myTeam ? 'me' : ''}" title="${e(M.teamLabel(id))}">${s}<small>${e(M.teamLabel(id))}</small></th>`; }).join('');
    const body = Array.from({ length: rounds }, (_, i) => i + 1).map(r => `<tr><th>R${r}</th>${M.slots.map(s => {
      const p = cell[r + ':' + s]; if (!p) return '<td></td>';
      const x = M.pl(p.playerId); const me = p.teamId === M.myTeam;
      const cls = ['wc-cell', p.playerId ? 'made' : '', me ? 'me' : '', p.pick === M.current ? 'now' : ''].filter(Boolean).join(' ');
      const proj = x ? M.byKey.get(nba.key(x.name)) : null;
      return `<td><div class="${cls}" title="Pick ${p.pick}${x ? ' · ' + e(x.name) + (proj ? ' · Proj.-Rang ' + proj._wcRank : '') : ''}"><small>${p.pick}</small>${x ? `<b>${e(short(x.name))}</b><span class="wc-pm">${e(x.pos || '')} · ${e(x.team || '')}</span>` : (p.pick === M.current ? '<span class="wc-clock">am Zug</span>' : '')}</div></td>`;
    }).join('')}</tr>`).join('');
    return `<details class="card wc-board" data-sec="board"${isOpen(M, 'board', false) ? ' open' : ''}><summary class="card-head"><h2>📋 Draft Board ${e(M.myDiv)} · ${e(M.myConf)}</h2><span class="muted small">${M.mine.filter(p => p.playerId).length}/${M.mine.length} Picks</span></summary>
      <div class="table-wrap"><table class="table wc-matrix"><thead><tr><th></th>${head}</tr></thead><tbody>${body}</tbody></table></div></details>`;
  }

  function myTeamHtml(ctx, M) {
    const e = ctx.ui.esc, nba = M.nba;
    if (!M.myTeam) return '';
    const mine = M.mine.filter(p => p.teamId === M.myTeam && p.playerId).map(p => ({ p, x: M.pl(p.playerId) })).filter(o => o.x);
    const prof = mine.map(o => M.byKey.get(nba.key(o.x.name))).filter(Boolean);
    const pos = mine.map(o => poOf(M, o.x.name, o.x.team)).filter(Boolean);
    const poTot = pos.length ? [0, 1, 2].map(i => pos.reduce((a, po) => a + po.w[i], 0)) : null;
    const z = CATS.map(c => (prof.length ? prof.reduce((s, r) => s + ((r.rawCats || {})[c.key] || 0), 0) / prof.length : null));
    const radar = prof.length ? MFHFB.charts.radar({ axes: CATS.map(c => ({ label: c.label })), series: [{ name: 'Mein Team', vals: z.map(v => (v == null ? null : Math.max(0, Math.min(1, 0.5 + v / 2.5)))), tips: CATS.map((c, i) => `${c.label}: Ø z ${(z[i] || 0).toFixed(2)} je Spieler`) }], size: 260, label: 'Mein Team' }) : '<div class="muted small au-noradar">Radar erscheint nach dem ersten Pick.</div>';
    const list = mine.length ? `<ol class="au-roster">${mine.map(o => { const r = M.byKey.get(nba.key(o.x.name)); const a = M.adp.get(nba.key(o.x.name)); return `<li><span class="au-lnum">${o.p.pick}</span><b>${e(o.x.name)}</b> <span class="muted small">${e(o.x.pos || '')} · ${e(o.x.team || '')}</span><span class="au-rp">${poHtml(M, o.x.name, o.x.team)} ${r ? `<small class="muted">Proj. #${r._wcRank}</small>` : ''}${a ? ` <small class="muted">ADP ${a.mean.toFixed(0)}</small>` : ''}</span></li>`; }).join('')}</ol>` : '<div class="muted small">Noch keine Picks.</div>';
    return `<div class="card wc-me"><div class="card-head"><h2>⭐ Mein Team</h2><span class="muted small">${mine.length}/${M.cfg.rounds}${poTot ? ` · PO-Spiele R1 <b>${poTot[0]}</b> · R2 <b>${poTot[1]}</b> · R3 <b>${poTot[2]}</b>` : ''}</span></div>
      <div class="au-tdetail wc-mebody"><div class="au-tlist">${list}</div><div class="au-tradar"><div class="au-radar">${radar}</div></div></div></div>`;
  }

  // Wo ging der Spieler in der eigenen Division weg?
  function divTaken(M) {
    const m = new Map();
    M.mine.forEach(p => { const x = M.pl(p.playerId); if (x) m.set(M.nba.key(x.name), p); });
    return m;
  }
  const isOpen = (M, k, def) => (M.store.open && k in M.store.open ? M.store.open[k] : def);

  // ---------- Haupttabelle: World-Cup-ADP + Best Available in einem ----------
  function tableRows(M) {
    const nba = M.nba, st = M.store, taken = divTaken(M);
    const adpList = [...M.adp.values()].sort((x, y) => x.mean - y.mean || y.n - x.n);
    const adpRank = new Map(adpList.map((a, i) => [nba.key(a.name), i + 1]));
    const map = new Map();
    adpList.forEach(a => { const k = nba.key(a.name); map.set(k, { k, name: a.name, team: a.team, a, r: M.byKey.get(k) }); });
    M.rows.slice(0, 350).forEach(r => { const k = nba.key(r.name); if (!map.has(k)) map.set(k, { k, name: r.name, team: r.team, a: null, r }); else map.get(k).r = r; });
    let list = [...map.values()].map(o => ({ ...o, t: taken.get(o.k) || null, ar: adpRank.get(o.k) || null }));
    const q = String(st.q || '').toLowerCase().trim();
    const posOf = o => String((o.r && o.r.pos) || '').split(/[\/, ]+/);
    list = list.filter(o => (!st.hide || !o.t) && (!st.pos || posOf(o).includes(st.pos))
      && (!q || [o.name, o.r && o.r.team, o.team].some(v => String(v || '').toLowerCase().includes(q))));
    const projRank = o => (o.r ? o.r._wcRank : 99999);
    if (st.sort === 'proj') list.sort((x, y) => projRank(x) - projRank(y));
    else list.sort((x, y) => (x.a ? x.a.mean : 9999 + projRank(x)) - (y.a ? y.a.mean : 9999 + projRank(y)));
    return list;
  }
  function tableBody(ctx, M) {
    const e = ctx.ui.esc, nba = M.nba;
    const list = tableRows(M);
    if (!list.length) return `<tr><td colspan="12">${ctx.ui.empty('Keine Treffer', 'Filter oder Suche anpassen.', '🔎')}</td></tr>`;
    const badge = c => (c == null ? '<span class="muted">—</span>' : `<span class="wc-ch ${c >= 0.7 ? 'hi' : c >= 0.35 ? 'mid' : 'lo'}">${Math.round(c * 100)}%</span>`);
    return list.slice(0, 250).map((o, i) => {
      const { a, r, t } = o;
      const d = r && o.ar ? o.ar - r._wcRank : null;
      const here = t ? `<span class="wc-gone${t.teamId === M.myTeam ? ' me' : ''}" title="${e(M.teamLabel(t.teamId))}">Pick ${t.pick} · ${e(M.teamLabel(t.teamId))}</span>` : '<span class="avail">frei</span>';
      const c1 = t ? null : M.chance(o.k, M.myNext), c2 = t ? null : M.chance(o.k, M.myAfter);
      return `<tr${t ? ' class="wc-takenrow"' : ''}>
        <td class="num rank">${i + 1}</td>
        <td><div class="strong">${e(o.name)}${r ? nba.unicornBadge(r) : ''}</div><div class="au-pmeta">${e((r && r.pos) || '')}${(r && r.team) || o.team ? ' · ' + e((r && r.team) || o.team) : ''}</div></td>
        <td class="num" title="${a ? `${a.n}× gedraftet` : 'Noch in keiner Division gedraftet'}">${a ? a.mean.toFixed(1) : '—'}</td>
        <td class="num hide-sm muted">${a ? `${a.min}–${a.max}` : ''}</td>
        <td class="num hide-sm muted">${a ? a.n : ''}</td>
        <td class="num">${r ? r._wcRank : '—'}</td>
        <td class="num ${d == null ? '' : d >= 10 ? 'up' : d <= -10 ? 'down' : ''}">${d == null ? '—' : (d > 0 ? '+' : '') + d}</td>
        <td class="num">${r ? `<span class="ls-comp ${nba.scorePositive(r.z) ? 'up' : 'down'}">${nba.fmtScore(r.z)}</span>` : '—'}</td>
        <td class="num">${poHtml(M, o.name, o.team)}</td>
        <td class="num">${t ? '' : badge(c1)}</td>
        <td class="num hide-sm">${t ? '' : badge(c2)}</td>
        <td>${here}</td>
      </tr>`;
    }).join('');
  }
  function adpHtml(ctx, M) {
    const e = ctx.ui.esc, st = M.store;
    const seg = (key, opts) => `<div class="seg" role="group">${opts.map(([v, l]) => `<button type="button" class="seg-btn${(st[key] || '') === v ? ' active' : ''}" data-set="${key}" data-val="${v}">${l}</button>`).join('')}</div>`;
    return `<details class="card wc-adp" data-sec="adp"${isOpen(M, 'adp', true) ? ' open' : ''}><summary class="card-head"><h2>📊 World-Cup-ADP & Best Available</h2><span class="muted small">${M.adp.size} gedraftet · ${M.divs.reduce((s, x) => s + x.made, 0)} Picks</span></summary>
      <div class="au-bactl wc-ctl">
        ${seg('sort', [['', 'Nach ADP'], ['proj', 'Nach Proj.']])}
        ${seg('pos', [['', 'Alle'], ['G', 'G'], ['F', 'F'], ['C', 'C']])}
        <button type="button" class="seg-btn wc-hide${st.hide ? ' on' : ''}" data-hide aria-pressed="${!!st.hide}">${st.hide ? '☑' : '☐'} Gedraftete ausblenden</button>
        <input type="search" class="search" placeholder="Spieler, Team …" value="${e(st.q || '')}" data-q aria-label="Suchen">
      </div>
      <div class="table-wrap au-bascroll wc-tscroll"><table class="table compact wc-table"><thead><tr>
        <th class="num">#</th><th>Spieler</th>
        <th class="num" title="World-Cup-ADP: Ø Pick-Nummer über alle geladenen Divisionen">ADP</th>
        <th class="num hide-sm">Min–Max</th><th class="num hide-sm" title="So oft gedraftet">×</th>
        <th class="num" title="Rang in unseren Projections (TTHQ-Consensus)">Proj.</th>
        <th class="num" title="ADP-Rang minus Proj.-Rang: positiv = geht später als er sollte (Steal)">Δ</th>
        <th class="num">${e(M.nba.scoreLabel())}</th>
        <th class="num" title="Playoff-Spiele gesamt + je Runde (R1 R2 R3)">PO</th>
        <th class="num" title="Chance, dass er bei deinem nächsten Pick noch da ist">${M.myNext != null ? `P${M.myNext}` : 'Nächster'}</th>
        <th class="num hide-sm" title="… und beim übernächsten">${M.myAfter != null ? `P${M.myAfter}` : 'Danach'}</th>
        <th>${e(M.myDiv)}</th>
      </tr></thead><tbody data-ba>${tableBody(ctx, M)}</tbody></table></div>
      <div class="muted small au-foot">Nach ADP: gedraftete Spieler nach World-Cup-ADP, danach noch nie gedraftete nach unseren Projections. Chance = Schätzung aus der ADP (ab 3 Drafts), bedingt darauf, dass er jetzt noch frei ist.</div>
    </details>`;
  }

  function progressHtml(ctx, M) {
    const e = ctx.ui.esc;
    const confs = M.cfg.conferences;
    return `<details class="card wc-prog" data-sec="prog"${isOpen(M, 'prog', false) ? ' open' : ''}><summary class="card-head"><h2>🌍 Fortschritt</h2><span class="muted small">${confs.filter(c => c.id).length}/${confs.length} Conferences verbunden</span></summary>
      <div class="wc-progbody">${confs.map(c => {
        if (!c.id) return `<div class="wc-conf"><b>${e(c.name)}</b> <span class="muted small">Liga-ID fehlt noch</span></div>`;
        const ds = M.divs.filter(d => d.conf === c.name).sort((a, b) => a.div.localeCompare(b.div));
        return `<div class="wc-conf"><b>${e(c.name)}</b>${ds.map(d => `<span class="wc-dchip${d.conf === M.myConf && d.div === M.myDiv ? ' me' : ''}" data-div="${e(c.name)}|${e(d.div)}" title="Als eigene Division anzeigen">${e(d.div)} <small>${d.made}/${d.total}</small></span>`).join('')}</div>`;
      }).join('')}</div></details>`;
  }

  function settingsHtml(ctx, M) {
    const e = ctx.ui.esc;
    return `<div class="wc-set"><label class="au-f"><span>Mein Slot in ${e(M.myDiv)}</span><select class="tr-select" data-team><option value="">— wählen —</option>${M.slots.map(s => { const id = M.slotTeam[s]; const nm = M.teamLabel(id); return `<option value="${e(id)}"${id === M.myTeam ? ' selected' : ''}>Slot ${s}${nm !== 'Slot ' + s ? ' · ' + e(nm) : ''}</option>`; }).join('')}</select></label>
      ${(M.myConf !== M.cfg.my.conference || M.myDiv !== M.cfg.my.division) ? `<button type="button" class="mp-btn" data-home>↩ Zurück zu ${e(M.cfg.my.division)}</button>` : ''}</div>`;
  }

  // ---------- Seite ----------
  function render(ctx) {
    const cfg = ctx.league.worldCup;
    return load(cfg).then(() => {
      const M = model(ctx);
      M.rows.forEach((r, i) => { r._wcRank = i + 1; });
      ctx._wc = M;
      return `<div class="au-wrap wc-wrap">
        <div class="page-head"><h1 class="page-title display">🌍 World Cup Draft</h1>
          <div class="page-sub">${cfg.conferences.filter(c => c.id).map(c => c.name).join(' + ')} live von Fantrax · ${M.divs.length} Divisionen geladen<span class="explain"> · Aktualisiert sich alle ${Math.round(REFRESH_MS / 1000)} s, solange die Seite offen ist. Werte = TTHQ-Consensus-Projections.</span></div></div>
        ${statusHtml(ctx, M)}
        ${settingsHtml(ctx, M)}
        <div class="au-main">${adpHtml(ctx, M)}${myTeamHtml(ctx, M)}${boardHtml(ctx, M)}${progressHtml(ctx, M)}</div>
      </div>`;
    });
  }

  let timer = null;
  function mount(root, ctx) {
    const M = ctx._wc; if (!M) return;
    const save = patch => ctx.store.setJSON('wc', { ...ctx.store.getJSON('wc', {}), ...patch });
    const rl = root.querySelector('[data-reload]');
    if (rl) rl.addEventListener('click', () => { rl.disabled = true; load(M.cfg, true).then(() => ctx.refresh()); });
    const tm = root.querySelector('[data-team]');
    if (tm) tm.addEventListener('change', () => { save({ team: tm.value || null }); ctx.refresh(); });
    const hm = root.querySelector('[data-home]');
    if (hm) hm.addEventListener('click', () => { save({ conf: null, div: null }); ctx.refresh(); });
    root.querySelectorAll('[data-div]').forEach(el => el.addEventListener('click', () => { const [conf, div] = el.dataset.div.split('|'); save({ conf, div }); ctx.refresh(); }));
    // Auf-/Zuklappen merken (überlebt den Auto-Refresh)
    root.querySelectorAll('details[data-sec]').forEach(d => d.addEventListener('toggle', () => { const o = { ...(ctx.store.getJSON('wc', {}).open || {}) }; o[d.dataset.sec] = d.open; save({ open: o }); }));
    root.querySelectorAll('[data-set]').forEach(b => b.addEventListener('click', () => { save({ [b.dataset.set]: b.dataset.val }); ctx.refresh(); }));
    const hd = root.querySelector('[data-hide]');
    if (hd) hd.addEventListener('click', () => { save({ hide: !ctx.store.getJSON('wc', {}).hide }); ctx.refresh(); });
    const q = root.querySelector('[data-q]'), tb = root.querySelector('[data-ba]');
    if (q && tb) q.addEventListener('input', () => { save({ q: q.value }); M.store.q = q.value; tb.innerHTML = tableBody(ctx, M); });
    // Auto-Refresh, solange die Seite angezeigt wird
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
      if (!document.body.contains(root) || !root.querySelector('.wc-wrap')) { clearInterval(timer); timer = null; return; }
      if (document.hidden || (document.activeElement && document.activeElement.matches('input,select'))) return;
      load(M.cfg, true).then(() => ctx.refresh());
    }, REFRESH_MS);
  }

  MFHFB.pages.register({
    id: 'wcdraft', section: 'draft', label: 'World Cup Draft', icon: '🌍', applies: { sport: ['nba'] },
    when: league => !!league.worldCup,
    data: ['?sport:aliases', 'projections-consensus'],
    title: () => 'World Cup Draft', render, mount,
  });
})();
