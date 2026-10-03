// ============================================================
//  Tool (CBB): NIL-Auktion 2026 — Board, Mein Plan, Budgets, Preise 2025
// ============================================================
//  #/cbb/home          Auktions-Board (alle verfügbaren Spieler, gerankt + Wert)
//  #/cbb/bids          Live-Gebote aus dem Google Sheet (über/unter Wert, Restzeit)
//  #/cbb/auctionplan   Mein Plan (Ziele, Max-Gebote, Budget-Check)
//  #/cbb/auctionteams  Budgets aller Teams (Kaufkraft, Max-Gebot)
//  #/cbb/nil2025       Preise der NIL-Auktion 2025 (Marktkurve)
//  #/cbb/auctionhelp   Regeln + wie die Werte entstehen
//
//  Daten: leagues/cbb/data/nil-auction.js (CBB_POOL, CBB_TEAMS, CBB_TIERS,
//  CBB_NIL_2025, CBB_RULES, CBB_MY_TEAM) + optional leagues/cbb/data/live-bids.js
//  (CBB_LIVE, stündlich von .github/workflows/cbb-bids.yml). Sheet-Config: league.sheet.
//
//  Live-Tracking: Zuschläge („an Team X für $Y“) und eigene Ziele werden
//  im Browser gespeichert (mfhfb:cbb:auction). Aus den Zuschlägen rechnet
//  die Seite Restbudgets aller Teams und die Inflation: bleibt mehr Geld
//  übrig als Wert auf dem Markt, steigt der Live-Wert aller übrigen Spieler.
// ============================================================

(function () {
  const KEY = 'auction';

  // ---------- Zustand ----------
  function load(ctx) {
    const s = ctx.store.getJSON(KEY, null) || {};
    return { targets: s.targets || {}, sold: s.sold || {} };
  }
  function save(ctx, st) { ctx.store.setJSON(KEY, st); }

  // ---------- Live-Gebote (Google Sheet der Liga) ----------
  //  Quellen, die neueste gewinnt: (1) Snapshot leagues/cbb/data/live-bids.js
  //  (GitHub Action stündlich), (2) direkter Abruf im Browser (beim Öffnen,
  //  dann alle 60 Min + Knopf), (3) von Hand eingefügte Tabelle.
  let memLive = null;            // im Browser geholt (Modul-Cache, überlebt Seitenwechsel)
  let fetching = null;
  const norm = n => String(n || '').normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/\(.*?\)/g, ' ').replace(/[’'`.]/g, '').replace(/[^a-z ]/g, ' ')
    .replace(/\b(jr|sr|ii|iii|iv|v)\b/g, ' ').replace(/\s+/g, ' ').trim();
  const schoolKey = s => norm(String(s || '').replace(/\?.*$/, '')).replace(/\b(university|of|the|state|st)\b/g, ' ').replace(/\s+/g, '').slice(0, 6);
  function bigrams(x) { const b = []; for (let i = 0; i < x.length - 1; i++) b.push(x.slice(i, i + 2)); return b; }
  function dice(a, b) {
    a = a.replace(/ /g, ''); b = b.replace(/ /g, '');
    if (!a || !b) return 0;
    const A = bigrams(a), B = bigrams(b).slice(); let hit = 0;
    A.forEach(g => { const i = B.indexOf(g); if (i >= 0) { hit++; B.splice(i, 1); } });
    return 2 * hit / (A.length + B.length || 1);
  }
  const poolIndex = new WeakMap();
  // kompakte Extras (CBB_EXTRA_C) einmalig zu Objekten auspacken
  let extraCache = null;
  function extras(d) {
    if (d.CBB_EXTRA) return d.CBB_EXTRA;
    if (!d.CBB_EXTRA_C) return [];
    if (extraCache && extraCache.src === d.CBB_EXTRA_C) return extraCache.list;
    const K = ['min', 'pts', 'reb', 'ast', 'tpm', 'stl', 'blk'];
    const list = d.CBB_EXTRA_C.map(r => ({ name: r[0], school: r[1], value: r[2], proj: Object.fromEntries(K.map((k, i) => [k, r[3][i]])),
      prev: { team: r[4][0], gp: r[4][1], min: r[4][2], pts: r[4][3], reb: r[4][4], ast: r[4][5] }, prevSeason: r[5] || undefined }));
    extraCache = { src: d.CBB_EXTRA_C, list };
    return list;
  }
  // Sheet-Name ("Jason Crowe, Jr.", "Baba Oladotun", "Na'jai Hines") → Spieler aus CBB_POOL
  function matchPlayer(d, name, school) {
    let idx = poolIndex.get(d.CBB_POOL);
    if (!idx) { idx = new Map(d.CBB_POOL.map(p => [norm(p.name), p])); poolIndex.set(d.CBB_POOL, idx); }
    const n = norm(name); if (idx.has(n)) return idx.get(n);
    const sk = schoolKey(school), parts = n.split(' '), last = parts[parts.length - 1], first = parts[0] || '';
    let best = null, bestScore = 0;
    d.CBB_POOL.forEach(p => {
      const pn = norm(p.name), pp = pn.split(' '), sameSchool = sk && schoolKey(p.school) === sk;
      let sc = dice(n, pn);
      if (pp[pp.length - 1] === last && pp[0].slice(0, 3) === first.slice(0, 3)) sc = Math.max(sc, .9);
      if (sameSchool) sc += .15;
      if (sc > bestScore) { bestScore = sc; best = p; }
    });
    if (bestScore >= .85) return best;
    // gleicher Nachname + gleiche Schule (Spitznamen: „Naz“ = Nasir, „Baba“ = Babatunde)
    if (sk) { const same = d.CBB_POOL.filter(p => schoolKey(p.school) === sk && norm(p.name).split(' ').pop() === last); if (same.length === 1) return same[0]; }
    // Fallback: Spieler außerhalb von Dizzles Liste (nil-extra.js, Projektion beim bisherigen Team)
    const ex = extras(d);
    let ei = poolIndex.get(ex);
    if (!ei) { ei = new Map(ex.map(p => [norm(p.name), p])); poolIndex.set(ex, ei); }
    let hit = ei.get(n);
    if (!hit && last) hit = ex.find(p => { const pn = norm(p.name).split(' '); return pn[pn.length - 1] === last && (pn[0] || '').slice(0, 3) === first.slice(0, 3); });
    return hit ? { ...hit, extra: true, tier: hit.value >= 51 ? 0 : hit.value >= 36 ? 1 : hit.value >= 21 ? 2 : hit.value >= 11 ? 3 : hit.value >= 2 ? 4 : 5, cls: '', pos: '', flags: ['nicht in Dizzles Liste'] } : null;
  }
  // "M/D/YYYY H:MM:SS" in der Zeitzone des Sheets (Offset in Minuten) → ms
  function parseSheetTime(t, offMin) {
    const m = String(t || '').match(/(\d{1,2})\/(\d{1,2})\/(\d{4})\s+(\d{1,2}):(\d{2})(?::(\d{2}))?/);
    if (!m) return null;
    return Date.UTC(+m[3], +m[1] - 1, +m[2], +m[4], +m[5], +(m[6] || 0)) - (offMin || 0) * 60000;
  }
  // Namensfeld "Jason Crowe, Jr. (Fr/G)" → { name, cls, pos }
  function splitName(raw) {
    const m = String(raw || '').match(/^(.*?)\s*\(([^/)]*)\/?([^)]*)\)\s*$/);
    return m ? { name: m[1].trim(), cls: m[2].trim(), pos: m[3].trim() } : { name: String(raw || '').trim(), cls: '', pos: '' };
  }
  // CSV (gviz) oder eingefügte Tabelle (Tabs) → { bids, signed, sheetNow }
  function parseRows(rows) {
    const out = { bids: [], signed: [], sheetNow: null };
    if (rows[0] && /\d+\/\d+\/\d{4}/.test(rows[0][1] || '')) out.sheetNow = rows[0][1];
    let inBids = false, sCol = -1;
    rows.forEach(r => {
      const c0 = (r[0] || '').trim();
      if (/^ACTIVE BIDS$/i.test(c0)) { inBids = true; return; }
      const sc = r.findIndex(x => /^SIGNED PLAYERS$/i.test((x || '').trim()));
      if (sc >= 0) sCol = sc;
      if (inBids && c0 && !/^name$/i.test(c0) && /^\d+$/.test((r[2] || '').trim()) && (r[3] || '').trim()) {
        out.bids.push({ ...splitName(c0), school: (r[1] || '').trim(), bid: +r[2], manager: (r[3] || '').trim(), time: (r[4] || '').trim() });
      }
      if (sCol >= 0 && sc < 0) {
        const n = (r[sCol] || '').trim(), price = (r[sCol + 2] || '').replace(/[$\s]/g, '');
        if (n && !/^name$/i.test(n) && /^\d+$/.test(price)) out.signed.push({ ...splitName(n), school: (r[sCol + 1] || '').trim(), price: +price, manager: (r[sCol + 3] || '').trim() });
      }
    });
    return out;
  }
  function parseCsv(text) {
    const rows = []; let row = [], cur = '', q = false;
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      if (q) { if (ch === '"' && text[i + 1] === '"') { cur += '"'; i++; } else if (ch === '"') q = false; else cur += ch; }
      else if (ch === '"') q = true;
      else if (ch === ',') { row.push(cur); cur = ''; }
      else if (ch === '\n') { row.push(cur); rows.push(row); row = []; cur = ''; }
      else if (ch !== '\r') cur += ch;
    }
    if (cur || row.length) { row.push(cur); rows.push(row); }
    return rows;
  }
  function parsePaste(text) {
    const rows = String(text || '').split(/\r?\n/).map(l => l.split('\t'));
    // ohne Überschrift „ACTIVE BIDS“ eingefügt? Dann alle Zeilen als Gebote lesen
    if (!rows.some(r => /^ACTIVE BIDS$/i.test((r[0] || '').trim()))) rows.unshift(['ACTIVE BIDS']);
    return parseRows(rows);
  }
  const sheetCfg = l => l.sheet || {};
  async function fetchLive(l) {
    const c = sheetCfg(l); if (!c.id) throw new Error('Kein Sheet konfiguriert');
    const url = `https://docs.google.com/spreadsheets/d/${c.id}/gviz/tq?tqx=out:csv&gid=${c.gid || 0}&_=${Date.now()}`;
    const r = await fetch(url, { cache: 'no-store' });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const txt = await r.text();
    if (/^\s*</.test(txt)) throw new Error('Sheet nicht öffentlich lesbar');
    return { ...parseRows(parseCsv(txt)), fetchedAt: new Date().toISOString(), source: 'live' };
  }
  function getLive(ctx) {
    const c = [ctx.data.CBB_LIVE && { ...ctx.data.CBB_LIVE, source: 'snapshot' }, memLive, ctx.store.getJSON('pasted', null)].filter(x => x && x.fetchedAt);
    return c.sort((a, b) => Date.parse(b.fetchedAt) - Date.parse(a.fetchedAt))[0] || null;
  }
  // Holt neu, wenn der letzte Stand älter als maxAgeMin ist (oder force)
  function refreshLive(ctx, force, maxAgeMin = 60) {
    const cur = getLive(ctx);
    if (!force && cur && Date.now() - Date.parse(cur.fetchedAt) < maxAgeMin * 60000) return Promise.resolve(false);
    if (!fetching) fetching = fetchLive(ctx.league).then(x => { memLive = x; return true; }).finally(() => { fetching = null; });
    return fetching;
  }
  // Gebote aufbereiten: Spieler zuordnen, Ablaufzeit (Gebotszeit + 24 h)
  function bidsView(ctx, d, live) {
    if (!live) return [];
    const c = sheetCfg(ctx.league), hours = c.hours || 24, off = c.tzOffsetMin || 0;
    return (live.bids || []).map(b => {
      const p = matchPlayer(d, b.name, b.school), t = parseSheetTime(b.time, off);
      return { ...b, p, at: t, ends: t != null ? t + hours * 3600000 : null };
    });
  }

  // ---------- Markt-Rechnung ----------
  //  Zuschläge = von Hand eingetragene + „SIGNED PLAYERS“ aus dem Sheet
  //  (Sheet gewinnt). Laufende Höchstgebote binden Geld + Platz des Teams.
  function market(d, st, live, ctx) {
    const sold = { ...st.sold };
    // Manager-Namen im Sheet weichen ab („Van Gundy CC“, „JPR“) → Team aus CBB_TEAMS
    const team = n => {
      const x = String(n || '').toLowerCase().trim(); if (!x) return n;
      const T = d.CBB_TEAMS;
      const hit = T.find(t => t.name.toLowerCase() === x) || T.find(t => (t.aliases || []).some(a => a.toLowerCase() === x))
        || T.find(t => x.startsWith(t.name.toLowerCase()) || t.name.toLowerCase().startsWith(x));
      return hit ? hit.name : n;
    };
    (live && live.signed || []).forEach(s => {
      const p = matchPlayer(d, s.name, s.school);
      sold[p ? p.name : s.name] = { team: team(s.manager), price: s.price, sheet: true };
    });
    const bids = ctx && live ? bidsView(ctx, d, live).filter(b => !sold[b.p ? b.p.name : b.name]) : [];
    const bidOf = {};
    bids.forEach(b => { b.team = team(b.manager); bidOf[b.p ? b.p.name : b.name] = b; });
    const teams = d.CBB_TEAMS.map(t => ({ ...t, won: [], spent: 0, leading: [], bound: 0 }));
    const tIdx = Object.fromEntries(teams.map(t => [t.name, t]));
    Object.entries(sold).forEach(([name, s]) => {
      const t = tIdx[s.team]; if (!t) return;
      t.won.push(name); t.spent += s.price;
    });
    bids.forEach(b => { const t = tIdx[b.team]; if (t) { t.leading.push(b); t.bound += b.bid; } });
    teams.forEach(t => {
      t.left = t.budget - t.spent;
      t.spotsLeft = Math.max(0, t.spots - t.won.length);
      t.maxBid = t.spotsLeft > 0 ? Math.max(0, t.left - (t.spotsLeft - 1)) : 0;
      // frei = nach Abzug der eigenen laufenden Höchstgebote (Geld + Plätze gebunden)
      const freeSpots = t.spotsLeft - t.leading.length;
      t.freeBid = freeSpots > 0 ? Math.max(0, t.left - t.bound - (freeSpots - 1)) : 0;
      t.perSpot = t.spotsLeft ? t.left / t.spotsLeft : 0;
    });
    const money = teams.reduce((a, t) => a + t.left, 0);
    const spots = teams.reduce((a, t) => a + t.spotsLeft, 0);
    const unsold = d.CBB_POOL.filter(p => !sold[p.name]).sort((a, b) => b.value - a.value);
    const valueLeft = unsold.slice(0, spots).reduce((a, p) => a + (p.value - 1), 0);
    const surplus = Math.max(0, money - spots);
    const factor = Object.keys(sold).length && valueLeft > 0 ? surplus / valueLeft : 1;
    const me = tIdx[d.CBB_MY_TEAM] || teams[0];
    return { teams, tIdx, money, spots, factor, me, sold, bids, bidOf, live: p => Math.max(1, Math.round(1 + (p.value - 1) * factor)) };
  }
  // Schmerzgrenze: was man für einen echten Wunschspieler maximal bieten sollte
  const limit = (v, me) => Math.min(me.maxBid, v <= 2 ? v + 1 : Math.round(v * 1.15));

  // ---------- kleine Bausteine ----------
  const money = x => '$' + Math.round(x);
  function tags(p, e) {
    const t = [];
    if (p.dp) t.push('<span class="cbb-tag dp" title="Fett in Dizzles Liste = NBA-Draft-Prospect">🎓 Draft</span>');
    if (p.up) t.push('<span class="cbb-tag up" title="Kursiv = Up-Transfer (zu einem stärkeren Programm)">⬆ Transfer</span>');
    if (p.down) t.push('<span class="cbb-tag down" title="Unterstrichen = Down-Transfer (zu einem kleineren Programm, oft mehr Spielzeit)">⬇ Transfer</span>');
    (p.flags || []).forEach(f => t.push(`<span class="cbb-tag warn" title="${e(f)}">⚠ ${e(f.replace(/ \(.*\)$/, ''))}</span>`));
    return t.join('');
  }
  // Projektion 2026-27 (Statistik-Modell) + Vorjahr + Recherche-Notiz
  const f1 = x => (Math.round(x * 10) / 10).toLocaleString('de-DE', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  function projLine(p, e) {
    const out = [];
    if (p.proj) {
      const P = p.proj, L = p.prev;
      const mv = p.move > 3 ? ' <span class="cbb-mv up" title="Wechsel zu stärkeren Gegnern: Produktion pro Minute sinkt im Schnitt">⬆ Level</span>' : p.move < -3 ? ' <span class="cbb-mv down" title="Wechsel zu schwächeren Gegnern: Produktion pro Minute steigt im Schnitt">⬇ Level</span>' : '';
      out.push(`<div class="cbb-proj" title="Projektion 2026-27 pro Spiel (Statistik-Modell)">📈 <b>${f1(P.min)} Min</b> · ${f1(P.pts)} P · ${f1(P.reb)} R · ${f1(P.ast)} A · ${f1(P.tpm)} 3P · ${f1(P.stl)} St · ${f1(P.blk)} Bl${mv}</div>`);
      if (L) out.push(`<div class="cbb-last muted">${p.prevSeason || '25/26'} ${e(L.team)}${p.extra ? ' (Projektion beim bisherigen Team)' : ''}: ${f1(L.min)} Min · ${f1(L.pts)}/${f1(L.reb)}/${f1(L.ast)} (${L.gp} Sp.)${p.prevSeason ? ' — 25/26 verletzt/kaum gespielt' : ''}</div>`);
    } else if ((p.cls || '').startsWith('Fr')) out.push('<div class="cbb-last muted">Freshman — Wert aus Recruiting-Rang + Rolle</div>');
    if (p.note) out.push(`<div class="cbb-note">🔎 ${e(p.note)}${p.src ? ` <a href="${e(p.src)}" target="_blank" rel="noopener">Quelle</a>` : ''}</div>`);
    return out.join('');
  }
  const dzTip = p => p.dz != null && p.dz !== p.value ? ` title="Dizzles ursprünglicher Wert: $${p.dz}"` : '';
  const dzBadge = p => p.dz != null && Math.abs(p.dz - p.value) >= 5 ? `<small class="cbb-dz ${p.value > p.dz ? 'up' : 'down'}" title="Dizzles ursprünglicher Wert">${p.value > p.dz ? '▲' : '▼'} $${p.dz}</small>` : '';

  // Direktlink zum Bieten (Google Sheet der Liga)
  function bidButton(ctx, big) {
    const c = sheetCfg(ctx.league); if (!c.id) return '';
    const url = `https://docs.google.com/spreadsheets/d/${encodeURIComponent(c.id)}/edit#gid=${encodeURIComponent(c.gid || 0)}`;
    return `<a class="cbb-bidlink${big ? ' big' : ''}" href="${url}" target="_blank" rel="noopener" title="Auktions-Sheet öffnen (Gebot abgeben)">📝 Jetzt bieten <span>im Google Sheet ↗</span></a>`;
  }

  // Gebot vs. Wert → Einordnung
  function rate(bid, val) {
    const diff = bid - val, ratio = bid / Math.max(1, val);
    if (diff <= -3 && ratio <= .6) return { k: 'deal2', l: 'Schnäppchen' };
    if (diff <= -2 && ratio <= .85) return { k: 'deal', l: 'unter Wert' };
    if (diff >= 4 && ratio >= 1.4) return { k: 'over2', l: 'deutlich über Wert' };
    if (diff >= 2 && ratio >= 1.15) return { k: 'over', l: 'über Wert' };
    return { k: 'fair', l: 'fair' };
  }
  function fmtLeft(ms, short) {
    if (ms == null) return '–';
    if (ms <= 0) return short ? 'vorbei' : 'abgelaufen';
    const m = Math.floor(ms / 60000), h = Math.floor(m / 60);
    if (short) return h ? `${h}h` : `${m}m`;
    return h ? `${h} h ${String(m % 60).padStart(2, '0')} min` : `${m} min`;
  }
  const fmtClock = ms => new Intl.DateTimeFormat('de-DE', { weekday: 'short', hour: '2-digit', minute: '2-digit' }).format(new Date(ms));
  const fmtStand = iso => new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(iso));
  const SRC = { live: 'direkt aus dem Sheet', snapshot: 'stündlicher Abgleich (GitHub)', paste: 'eingefügt' };
  function bidChip(b, e) {
    const left = b.ends != null ? b.ends - Date.now() : null;
    return `<span class="cbb-bidtag${left != null && left < 3 * 3600000 ? ' soon' : ''}" title="Höchstgebot ${money(b.bid)} von ${e(b.team)} seit ${b.at ? fmtClock(b.at) : '?'} — läuft ${b.ends ? 'bis ' + fmtClock(b.ends) : '?'}">💬 ${money(b.bid)} · ${e(b.team)} · <span data-left="${b.ends || ''}" data-short>${fmtLeft(left, true)}</span></span>`;
  }

  function kpis(d, m) {
    const me = m.me;
    return `<div class="stat-row cbb-kpis">
      <div class="stat"><div class="stat-label">Markt</div><div class="stat-value">${money(m.money)}</div><div class="stat-sub">für ${m.spots} offene Plätze · Ø ${money(m.money / Math.max(1, m.spots))}</div></div>
      <div class="stat"><div class="stat-label">${'Dein Budget · ' + MFHFB.ui.esc(me.name)}</div><div class="stat-value">${money(me.left)}</div><div class="stat-sub">${me.spotsLeft} Plätze · Ø ${money(me.perSpot)} pro Platz</div></div>
      <div class="stat"><div class="stat-label">Dein Max-Gebot</div><div class="stat-value">${money(me.maxBid)}</div><div class="stat-sub">Rest muss $1 je übrigem Platz decken</div></div>
      <div class="stat"><div class="stat-label">Inflation</div><div class="stat-value ${m.factor > 1.03 ? 'down' : m.factor < .97 ? 'up' : ''}">${m.factor === 1 ? '±0 %' : MFHFB.ui.signed((m.factor - 1) * 100, 0) + ' %'}</div><div class="stat-sub">${m.factor === 1 ? 'erst nach den ersten Zuschlägen' : 'Live-Wert = Wert × Restgeld/Restwert'}</div></div>
    </div>`;
  }

  // ============================================================
  //  1) Board
  // ============================================================
  function renderBoard(ctx) {
    const { data: d, ui } = ctx, e = ui.esc;
    const st = load(ctx), m = market(d, st, getLive(ctx), ctx);
    const tiers = d.CBB_TIERS;
    const f = ctx.store.getJSON('auctionFilter', {}) || {};
    return `<div class="page-head"><h1 class="page-title display">💰 NIL-Auktion 2026</h1>
        <div class="page-sub">${d.CBB_POOL.length} verfügbare Spieler · ${d.CBB_TEAMS.reduce((a, t) => a + t.spots, 0)} Plätze · ${money(d.CBB_TEAMS.reduce((a, t) => a + t.budget, 0))} NIL in der Liga
          <span class="explain">Reihenfolge = neuer Wert. Für Spieler mit College-Statistik kommt er aus einer Projektion 2026-27 (Minuten × Produktion 2025-26, umgerechnet auf das neue Team/Level, 9-Kat-z-Score), für Freshmen aus Recruiting-Rang + recherchierter Rolle. ▲/▼ $X = Dizzles ursprünglicher Wert. 📈 = Projektion pro Spiel, 🔎 = Recherche-Notiz. „Limit“ = bis dahin mitgehen, wenn du den Spieler wirklich willst.</span></div></div>
      ${bidButton(ctx, true)}
      ${kpis(d, m)}
      <div class="controls cbb-controls">
        <input type="search" class="cbb-input" data-f="q" placeholder="Spieler oder Schule …" value="${e(f.q || '')}" aria-label="Suche">
        <select class="cbb-input" data-f="tier" aria-label="Tier"><option value="">Alle Tiers</option>${tiers.map((t, i) => `<option value="${i}"${String(f.tier) === String(i) ? ' selected' : ''}>${e(t.label)}</option>`).join('')}</select>
        <select class="cbb-input" data-f="pos" aria-label="Position"><option value="">Alle Positionen</option>${['G', 'G/F', 'F/C', 'G/F/C'].map(p => `<option${f.pos === p ? ' selected' : ''}>${p}</option>`).join('')}</select>
        <select class="cbb-input" data-f="cls" aria-label="Jahrgang"><option value="">Alle Jahrgänge</option>${['Fr', 'So', 'Jr', 'Sr', 'Grad'].map(c => `<option${f.cls === c ? ' selected' : ''}>${c}</option>`).join('')}</select>
        <div class="seg" role="group" aria-label="Ansicht">
          ${[['all', 'Alle'], ['open', 'Verfügbar'], ['bids', '💬 Mit Gebot'], ['targets', '★ Ziele'], ['dp', '🎓 Draft'], ['sold', 'Vergeben']].map(([k, l]) => `<button type="button" class="seg-btn${(f.view || 'open') === k ? ' active' : ''}" data-view="${k}">${l}</button>`).join('')}
        </div>
      </div>
      <div class="controls cbb-sortbar">
        <span class="muted small">Sortieren:</span>
        <div class="seg" role="group" aria-label="Sortierung">
          ${[['rank', 'Ranking'], ['bid', '💬 Höchstes Gebot'], ['left', '⏱ Läuft zuerst ab'], ['value', 'Wert']].map(([k, l]) => `<button type="button" class="seg-btn${(f.sort || 'rank') === k ? ' active' : ''}" data-qsort="${k}">${l}</button>`).join('')}
        </div>
      </div>
      ${(() => {
        const soon = m.bids.filter(b => b.ends != null && b.ends > Date.now() && b.ends - Date.now() < 3 * 3600000).sort((a, b) => a.ends - b.ends);
        return soon.length ? `<button type="button" class="note cbb-soon" data-qsort="left">⏱ <b>${soon.length} ${soon.length === 1 ? 'Gebot läuft' : 'Gebote laufen'} in &lt; 3 h ab:</b> ${soon.slice(0, 4).map(b => `${e(b.p ? b.p.name : b.name)} (${money(b.bid)} ${e(b.team)}, <span data-left="${b.ends}" data-short>${fmtLeft(b.ends - Date.now(), true)}</span>)`).join(', ')}${soon.length > 4 ? ' …' : ''} <span class="muted">→ nach Restzeit sortieren</span></button>` : '';
      })()}
      <div class="table-wrap cbb-board" data-share="NIL-Auktion 2026">
        <table class="table compact"><thead><tr>
          <th class="cbb-star" aria-label="Ziel"></th><th class="num hide-sm" data-sort="rank">#</th><th data-sort="name">Spieler</th><th class="hide-sm" data-sort="school">Schule</th>
          <th class="hide-sm hide-md" data-sort="cls">Kl.</th><th class="hide-sm hide-md" data-sort="pos">Pos</th>
          <th class="num hide-sm" data-sort="last" title="Fantasy-Rang der Saison 2025-26">Rang 25/26</th><th class="num hide-sm" data-sort="pmin" title="Projizierte Minuten pro Spiel 2026-27">Min</th><th class="num" data-sort="value">Wert</th>
          <th class="num hide-sm" data-sort="limit" title="Bis hierhin mitgehen, wenn du den Spieler willst">Limit</th><th class="num hide-sm hide-md" data-sort="nil25" title="Zuschlag in der NIL-Auktion 2025">2025</th>
          <th class="num" data-sort="bid" title="Aktuelles Höchstgebot laut Sheet">Gebot</th><th class="hide-sm" data-sort="left" title="Zeit bis das Höchstgebot gewinnt (24 h ab Gebot)">Restzeit</th><th>Status</th>
        </tr></thead><tbody data-rows></tbody></table>
      </div>
      <p class="muted small cbb-foot">Zuschläge und Ziele werden nur in diesem Browser gespeichert. „Zuschlag“ eintragen, sobald ein Spieler auf Discord vergeben ist — dann rechnen Budgets, Max-Gebote und Live-Werte automatisch mit.</p>`;
  }

  function mountBoard(root, ctx) {
    const d = ctx.data, e = ctx.ui.esc;
    const f = ctx.store.getJSON('auctionFilter', {}) || {};
    let sort = f.sort || 'rank', dir = f.dir || 1;
    const tbody = root.querySelector('[data-rows]');
    const persist = () => ctx.store.setJSON('auctionFilter', { ...f, sort, dir });

    function rows() {
      const st = load(ctx), m = market(d, st, getLive(ctx), ctx);
      const q = (f.q || '').trim().toLowerCase(), view = f.view || 'open';
      let list = d.CBB_POOL.filter(p => {
        if (q && !(p.name.toLowerCase().includes(q) || p.school.toLowerCase().includes(q))) return false;
        if (f.tier !== undefined && f.tier !== '' && String(p.tier) !== String(f.tier)) return false;
        if (f.pos && p.pos !== f.pos) return false;
        if (f.cls && p.cls !== f.cls) return false;
        const sold = !!m.sold[p.name];
        if (view === 'open' && sold) return false;
        if (view === 'sold' && !sold) return false;
        if (view === 'targets' && !(p.name in st.targets)) return false;
        if (view === 'dp' && !p.dp) return false;
        if (view === 'bids' && !m.bidOf[p.name]) return false;
        return true;
      });
      const now = Date.now();
      const key = p => sort === 'pmin' ? (p.proj ? p.proj.min : null) : sort === 'bid' ? (m.bidOf[p.name] ? m.bidOf[p.name].bid : null) : sort === 'left' ? (m.bidOf[p.name] && m.bidOf[p.name].ends != null ? m.bidOf[p.name].ends - now : null) : sort === 'limit' ? limit(m.live(p), m.me) : sort === 'value' ? m.live(p) : sort === 'last' ? (p.last || 9999) : sort === 'nil25' ? (p.nil25 || 0) : p[sort];
      list = list.slice().sort((a, b) => {
        const x = key(a), y = key(b);
        if (x == null || y == null) { if (x == null && y == null) return a.rank - b.rank; return x == null ? 1 : -1; }   // ohne Gebot immer ans Ende
        const c = typeof x === 'string' ? x.localeCompare(y) : x - y;
        return (c || a.rank - b.rank) * dir;
      });
      root.querySelectorAll('th[data-sort]').forEach(th => th.classList.toggle('sorted', th.dataset.sort === sort));
      root.querySelectorAll('.cbb-sortbar [data-qsort]').forEach(b => b.classList.toggle('active', b.dataset.qsort === sort && (sort !== 'rank' || dir === 1)));
      const H = (sheetCfg(ctx.league).hours || 24) * 3600000;
      let lastTier = -1;
      const showDividers = sort === 'rank' && dir === 1;
      tbody.innerHTML = list.length ? list.map(p => {
        const s = m.sold[p.name], tgt = p.name in st.targets, live = m.live(p), bid = m.bidOf[p.name];
        const div = showDividers && p.tier !== lastTier ? `<tr class="cbb-tier-row"><td colspan="14">${e(d.CBB_TIERS[p.tier].label)} <small>· ${d.CBB_TIERS[p.tier].min === d.CBB_TIERS[p.tier].max ? '$' + d.CBB_TIERS[p.tier].min : '$' + d.CBB_TIERS[p.tier].min + '–' + d.CBB_TIERS[p.tier].max}</small></td></tr>` : '';
        lastTier = p.tier;
        return `${div}<tr class="${s ? 'cbb-sold' : ''}${tgt ? ' cbb-target' : ''}${s && s.team === d.CBB_MY_TEAM ? ' cbb-mine' : ''}" data-name="${e(p.name)}">
          <td class="cbb-star"><button type="button" class="cbb-starbtn" data-star aria-pressed="${tgt}" title="${tgt ? 'Ziel entfernen' : 'Als Ziel merken'}">${tgt ? '★' : '☆'}</button></td>
          <td class="num muted hide-sm">${p.rank}</td>
          <td><div class="cbb-name">${e(p.name)}</div><div class="cbb-tags">${tags(p, e)}<span class="show-sm muted">${e(p.school)} · ${e(p.cls)} · ${e(p.pos)}${p.last ? ' · Rang ' + p.last : ''}${s ? '' : ' · Limit ' + money(limit(live, m.me))}</span><span class="show-md muted">${e(p.cls)} · ${e(p.pos)}${p.nil25 ? ' · 2025: ' + money(p.nil25) : ''}</span></div>${projLine(p, e)}</td>
          <td class="hide-sm">${e(p.school)}</td><td class="hide-sm hide-md">${e(p.cls)}</td><td class="hide-sm hide-md">${e(p.pos)}</td>
          <td class="num hide-sm">${p.last ? p.last : '<span class="muted">–</span>'}</td>
          <td class="num hide-sm">${p.proj ? f1(p.proj.min) : '<span class="muted">–</span>'}</td>
          <td class="num strong"${dzTip(p)}>${money(live)}${m.factor !== 1 && live !== p.value ? `<small class="muted cbb-was"> ${money(p.value)}</small>` : ''}<div>${dzBadge(p)}</div></td>
          <td class="num hide-sm">${s ? '<span class="muted">–</span>' : money(limit(live, m.me))}</td>
          <td class="num hide-sm hide-md">${p.nil25 ? `<span title="2025 an ${e(p.nil25team)}">${money(p.nil25)}</span>` : '<span class="muted">–</span>'}</td>
          <td class="num">${bid ? (() => { const r = rate(bid.bid, live); return `<b class="cbb-bidval ${r.k}" title="${e(r.l)} (Wert ${money(live)})">${money(bid.bid)}</b><div class="muted small">${e(bid.team)}${bid.team === d.CBB_MY_TEAM ? ' (du)' : ''}</div><div class="show-sm small${bid.ends && bid.ends - now < 3 * 3600000 ? ' down' : ' muted'}">⏱ <span data-left="${bid.ends || ''}" data-short>${fmtLeft(bid.ends != null ? bid.ends - now : null, true)}</span></div>`; })() : '<span class="muted">–</span>'}</td>
          <td class="hide-sm cbb-left">${bid && bid.ends != null ? `<div><b data-left="${bid.ends}">${fmtLeft(bid.ends - now)}</b></div><div class="cbb-timebar${bid.ends - now < 3 * 3600000 ? ' soon' : ''}" title="bis ${fmtClock(bid.ends)}"><span data-bar="${bid.ends}" style="width:${Math.max(0, Math.min(100, (bid.ends - now) / H * 100)).toFixed(1)}%"></span></div>` : '<span class="muted">–</span>'}</td>
          <td class="cbb-status">${s ? `<span class="cbb-soldtag">${e(s.team)} · ${money(s.price)}</span>${s.sheet ? ' <small class="muted" title="aus dem Sheet (SIGNED PLAYERS)">📄</small>' : ' <button type="button" class="cbb-linkbtn" data-unsell title="Zuschlag löschen">✕</button>'}` : `<button type="button" class="cbb-btn" data-sell>Zuschlag</button>`}</td>
        </tr>`;
      }).join('') : `<tr><td colspan="14">${ctx.ui.empty('Keine Spieler', 'Filter anpassen.', '🔍')}</td></tr>`;
    }

    root.addEventListener('input', ev => {
      const k = ev.target.dataset && ev.target.dataset.f; if (!k) return;
      f[k] = ev.target.value; persist(); rows();
    });
    root.addEventListener('click', ev => {
      const v = ev.target.closest('[data-view]');
      if (v) { f.view = v.dataset.view; root.querySelectorAll('[data-view]').forEach(b => b.classList.toggle('active', b === v)); persist(); rows(); return; }
      const qs = ev.target.closest('[data-qsort]');
      if (qs) { sort = qs.dataset.qsort; dir = ['value', 'bid'].includes(sort) ? -1 : 1; persist(); rows(); if (qs.classList.contains('cbb-soon')) root.querySelector('.cbb-board').scrollIntoView({ block: 'start', behavior: 'smooth' }); return; }
      const th = ev.target.closest('th[data-sort]');
      if (th) { const k = th.dataset.sort; dir = sort === k ? -dir : (['value', 'limit', 'nil25', 'bid', 'pmin', 'last'].includes(k) && k !== 'last' ? -1 : 1); sort = k; persist(); rows(); return; }
      const tr = ev.target.closest('tr[data-name]'); if (!tr) return;
      const name = tr.dataset.name, st = load(ctx);
      if (ev.target.closest('[data-star]')) {
        if (name in st.targets) delete st.targets[name]; else st.targets[name] = null;
        save(ctx, st); rows(); return;
      }
      if (ev.target.closest('[data-unsell]')) { delete st.sold[name]; save(ctx, st); ctx.refresh(); return; }
      if (ev.target.closest('[data-sell]')) {
        const cell = tr.querySelector('.cbb-status');
        const p = d.CBB_POOL.find(x => x.name === name), m = market(d, st, getLive(ctx), ctx);
        cell.innerHTML = `<form class="cbb-sellform" data-sellform>
          <select class="cbb-input" name="team" aria-label="Team">${m.teams.map(t => `<option${t.name === d.CBB_MY_TEAM ? ' selected' : ''}>${e(t.name)}</option>`).join('')}</select>
          <input class="cbb-input cbb-price" name="price" type="number" min="1" step="1" value="${m.live(p)}" aria-label="Preis in $">
          <button class="cbb-btn" type="submit">OK</button><button class="cbb-linkbtn" type="button" data-cancel>✕</button></form>`;
        cell.querySelector('[name=price]').select();
        return;
      }
      if (ev.target.closest('[data-cancel]')) rows();
    });
    root.addEventListener('submit', ev => {
      const form = ev.target.closest('[data-sellform]'); if (!form) return;
      ev.preventDefault();
      const name = form.closest('tr').dataset.name, st = load(ctx);
      const price = Math.max(1, Math.round(Number(form.price.value) || 1));
      st.sold[name] = { team: form.team.value, price };
      save(ctx, st); ctx.refresh();
    });
    rows();
    autoLive(root, ctx);
  }

  // ============================================================
  //  1b) Live-Gebote
  // ============================================================
  let lastFail = 0, failMsg = '', ticker = null;
  // Beim Öffnen einer Seite: Stand älter als 60 Min → neu holen; danach
  // alle 60 Min erneut, solange die Seite offen ist. Countdown jede Minute.
  function autoLive(root, ctx) {
    if (ticker) clearInterval(ticker);
    let lastCheck = Date.now();
    const tryFetch = force => {
      if (!sheetCfg(ctx.league).id) return;
      if (!force && Date.now() - lastFail < 10 * 60000) return;   // nach Fehler nicht dauernd neu versuchen
      refreshLive(ctx, force, 60)
        .then(changed => { failMsg = ''; if (changed && root.isConnected) ctx.refresh(); })
        .catch(err => { lastFail = Date.now(); failMsg = err.message || 'Abruf fehlgeschlagen'; const n = root.querySelector('[data-livefail]'); if (n) { n.hidden = false; n.textContent = '⚠️ Direkter Abruf nicht möglich (' + failMsg + ') — es gilt der letzte stündliche Abgleich.'; } });
    };
    tryFetch(false);
    ticker = setInterval(() => {
      if (!root.isConnected) { clearInterval(ticker); ticker = null; return; }
      root.querySelectorAll('[data-left]').forEach(n => { const end = +n.dataset.left; if (end) n.textContent = fmtLeft(end - Date.now(), n.hasAttribute('data-short')); });
      root.querySelectorAll('[data-bar]').forEach(n => { const end = +n.dataset.bar, h = (sheetCfg(ctx.league).hours || 24) * 3600000; n.style.width = Math.max(0, Math.min(100, (end - Date.now()) / h * 100)).toFixed(1) + '%'; });
      const nx = root.querySelector('[data-next]'); if (nx) nx.textContent = fmtLeft(lastCheck + 3600000 - Date.now());
      if (Date.now() - lastCheck >= 3600000) { lastCheck = Date.now(); tryFetch(true); }
    }, 30000);
  }

  function renderBids(ctx) {
    const { data: d, ui } = ctx, e = ui.esc;
    const st = load(ctx), live = getLive(ctx), m = market(d, st, live, ctx), me = m.me;
    const f = ctx.store.getJSON('bidsFilter', {}) || {};
    const now = Date.now();
    let list = m.bids.map(b => {
      const val = b.p ? m.live(b.p) : 1;
      const left = b.ends != null ? b.ends - now : null, r = rate(b.bid, val);
      const under = r.k === 'deal' || r.k === 'deal2', hot = under && left != null && left > 0 && left < 6 * 3600000;
      // Früh in den 24 h ist fast alles „unter Wert“ — echte Schnäppchen sind es erst kurz vor Ablauf
      if (under) r.l = hot ? '⚡ ' + r.l : 'noch ' + (r.k === 'deal2' ? 'weit unter Wert' : 'unter Wert');
      return { ...b, val, r, hot, lim: b.p ? limit(val, me) : 2, left, mine: b.team === me.name, tgt: b.p && b.p.name in st.targets };
    });
    const all = list;
    const view = f.view || 'all';
    if (view === 'deal') list = list.filter(b => b.r.k === 'deal' || b.r.k === 'deal2');
    if (view === 'targets') list = list.filter(b => b.tgt);
    if (view === 'mine') list = list.filter(b => b.mine);
    if (view === 'over') list = list.filter(b => b.r.k === 'over' || b.r.k === 'over2');
    const sort = f.sort || 'left';
    list.sort((a, b) => sort === 'gap' ? (a.bid - a.val) - (b.bid - b.val) : sort === 'value' ? b.val - a.val : sort === 'bid' ? b.bid - a.bid : (a.left ?? 9e15) - (b.left ?? 9e15));
    const soon = all.filter(b => b.left != null && b.left > 0 && b.left < 6 * 3600000).length;
    const deals = all.filter(b => b.hot);
    const mine = all.filter(b => b.mine);
    const hasSheet = !!sheetCfg(ctx.league).id;
    const H = (sheetCfg(ctx.league).hours || 24) * 3600000;
    const stand = live ? `Stand ${fmtStand(live.fetchedAt)} Uhr · ${SRC[live.source] || live.source}` : 'noch keine Daten';
    return `<div class="page-head"><h1 class="page-title display">⏱ Live-Gebote</h1>
        <div class="page-sub">${e(stand)}${hasSheet ? ` · nächster Check in <span data-next>60 min</span>` : ''}
        <span class="explain">Holt die Tabelle „ACTIVE BIDS“ aus dem Google Sheet der Liga: beim Öffnen (wenn der letzte Stand älter als 60 Minuten ist), danach stündlich, solange die Seite offen ist — zusätzlich gleicht GitHub jede Stunde ab. Restzeit = Zeit des Höchstgebots + 24 Stunden (jedes neue Gebot setzt die Uhr neu). Einordnung = Höchstgebot im Vergleich zum Live-Wert des Spielers. Früh in den 24 Stunden ist fast alles „noch unter Wert“ — spannend wird es, wenn die Restzeit knapp wird (⚡ = unter Wert und weniger als 6 Stunden übrig).</span></div>
        <div class="cbb-actions">
          ${hasSheet ? '<button type="button" class="cbb-btn" data-livenow>🔄 Jetzt prüfen</button>' : ''}
          <button type="button" class="cbb-btn" data-pastetoggle>📋 Tabelle einfügen</button>
          ${bidButton(ctx)}
        </div>
        <p class="note cbb-fail" data-livefail ${failMsg ? '' : 'hidden'}>${failMsg ? '⚠️ Direkter Abruf nicht möglich (' + e(failMsg) + ') — es gilt der letzte stündliche Abgleich.' : ''}</p>
        <form class="cbb-paste" data-pasteform hidden>
          <textarea class="cbb-input" name="t" rows="6" placeholder="Im Sheet den Bereich ACTIVE BIDS markieren, kopieren (Strg+C) und hier einfügen …"></textarea>
          <button class="cbb-btn" type="submit">Übernehmen</button>
        </form></div>
      <div class="stat-row cbb-kpis">
        <div class="stat"><div class="stat-label">Aktive Gebote</div><div class="stat-value">${all.length}</div><div class="stat-sub">${soon} laufen in &lt; 6 h ab</div></div>
        <div class="stat"><div class="stat-label">⚡ Schnäppchen-Alarm</div><div class="stat-value ${deals.length ? 'up' : ''}">${deals.length}</div><div class="stat-sub">${deals.length ? e(deals.slice().sort((a, b) => (a.bid - a.val) - (b.bid - b.val)).slice(0, 2).map(b => (b.p ? b.p.name : b.name)).join(', ')) : 'unter Wert &amp; &lt; 6 h Restzeit'}</div></div>
        <div class="stat"><div class="stat-label">Du führst</div><div class="stat-value">${mine.length}</div><div class="stat-sub">${mine.length ? money(me.bound) + ' gebunden' : 'bei keinem Spieler'}</div></div>
        <div class="stat"><div class="stat-label">Frei bietbar</div><div class="stat-value">${money(me.freeBid)}</div><div class="stat-sub">nach deinen laufenden Geboten</div></div>
      </div>
      <div class="controls">
        <div class="seg" role="group" aria-label="Filter">
          ${[['all', 'Alle'], ['deal', '🟢 Unter Wert'], ['over', '🔴 Über Wert'], ['targets', '★ Meine Ziele'], ['mine', 'Ich führe']].map(([k, l]) => `<button type="button" class="seg-btn${view === k ? ' active' : ''}" data-bview="${k}">${l}</button>`).join('')}
        </div>
        <select class="cbb-input" data-bsort aria-label="Sortierung">
          ${[['left', 'Läuft zuerst ab'], ['gap', 'Größtes Schnäppchen'], ['value', 'Höchster Wert'], ['bid', 'Höchstes Gebot']].map(([k, l]) => `<option value="${k}"${sort === k ? ' selected' : ''}>${l}</option>`).join('')}
        </select>
      </div>
      ${!live ? ui.empty('Noch keine Gebote geladen', hasSheet ? 'Auf „Jetzt prüfen“ tippen oder die Tabelle aus dem Sheet einfügen.' : 'Tabelle aus dem Sheet einfügen.', '⏱') : `
      <div class="table-wrap" data-share="Live-Gebote"><table class="table compact cbb-bids"><thead><tr>
        <th>Spieler</th><th class="num${sort === 'bid' ? ' sorted' : ''}" data-bs="bid">Gebot</th><th class="num hide-sm${sort === 'value' ? ' sorted' : ''}" data-bs="value">Wert</th><th class="hide-sm${sort === 'gap' ? ' sorted' : ''}" data-bs="gap">Einordnung</th><th class="num hide-sm">Dein Limit</th><th class="${sort === 'left' ? 'sorted' : ''}" data-bs="left">Restzeit</th>
      </tr></thead><tbody>
      ${list.length ? list.map(b => {
        const p = b.p, dlt = b.bid - b.val, exp = b.left != null && b.left <= 0;
        return `<tr class="${b.mine ? 'cbb-mine' : ''}${b.tgt ? ' cbb-target' : ''}${exp ? ' cbb-exp' : ''}">
          <td><div class="cbb-name">${b.tgt ? '<span class="cbb-startxt">★</span> ' : ''}${e(p ? p.name : b.name)}</div>
            <div class="cbb-tags">${p ? tags(p, e) : '<span class="cbb-tag warn" title="Spieler nicht in Dizzles Liste gefunden — Wert $1 angenommen">⚠ nicht in der Liste</span>'}<span class="muted">${e(b.school)}${b.cls ? ' · ' + e(b.cls) : ''}${b.pos ? '/' + e(b.pos) : ''}${p ? ' · ' + e(d.CBB_TIERS[p.tier].label.replace(/ \(.*\)$/, '')) : ''}</span><span class="show-sm"><span class="cbb-rate ${b.r.k}">${b.r.l}</span></span></div>${p ? projLine(p, e) : ''}</td>
          <td class="num"><b>${money(b.bid)}</b><div class="muted small">${e(b.team)}${b.mine ? ' (du)' : ''}</div><div class="show-sm muted small">Wert ${money(b.val)}</div></td>
          <td class="num hide-sm">${money(b.val)}</td>
          <td class="hide-sm"><span class="cbb-rate ${b.r.k}">${b.r.l}</span> <small class="muted">${dlt ? (dlt > 0 ? '+' : '−') + money(Math.abs(dlt)) : '±$0'}</small></td>
          <td class="num hide-sm">${b.mine ? '<span class="muted">du führst</span>' : b.bid >= b.lim ? '<span class="muted">überschritten</span>' : `bis ${money(Math.min(b.lim, me.freeBid))}`}</td>
          <td class="cbb-left"><div><b data-left="${b.ends || ''}">${fmtLeft(b.left)}</b>${b.ends ? `<small class="muted"> · bis ${fmtClock(b.ends)}</small>` : ''}</div>
            <div class="cbb-timebar${b.left != null && b.left < 3 * 3600000 ? ' soon' : ''}"><span data-bar="${b.ends || ''}" style="width:${b.left != null ? Math.max(0, Math.min(100, b.left / H * 100)).toFixed(1) : 0}%"></span></div></td>
        </tr>`;
      }).join('') : `<tr><td colspan="6">${ui.empty('Keine Gebote in diesem Filter', '', '🔍')}</td></tr>`}
      </tbody></table></div>`}
      ${live && (live.signed || []).length ? `<section class="card cbb-log"><div class="card-head"><h2>Unterschrieben (Sheet)</h2><span class="muted small">${live.signed.length}</span></div>
        <div class="table-wrap flat"><table class="table compact"><thead><tr><th>Spieler</th><th>Team</th><th class="num">Preis</th><th class="num">Wert</th></tr></thead><tbody>
        ${live.signed.map(s => { const p = matchPlayer(d, s.name, s.school); return `<tr><td>${e(p ? p.name : s.name)} <small class="muted">${e(s.school)}</small></td><td>${e(s.manager)}</td><td class="num">${money(s.price)}</td><td class="num muted">${p ? money(p.value) : '–'}</td></tr>`; }).join('')}
        </tbody></table></div></section>` : ''}
      <p class="muted small cbb-foot">Restzeiten in deiner Ortszeit. Zeiten im Sheet werden als ${(sheetCfg(ctx.league).tzOffsetMin || 0) === 0 ? 'UTC' : 'UTC' + (sheetCfg(ctx.league).tzOffsetMin > 0 ? '+' : '') + sheetCfg(ctx.league).tzOffsetMin / 60} gelesen (js/leagues.js → sheet.tzOffsetMin).</p>`;
  }
  function mountBids(root, ctx) {
    root.addEventListener('click', ev => {
      const v = ev.target.closest('[data-bview]');
      if (v) { const f = ctx.store.getJSON('bidsFilter', {}) || {}; f.view = v.dataset.bview; ctx.store.setJSON('bidsFilter', f); ctx.refresh(); return; }
      if (ev.target.closest('[data-livenow]')) {
        const b = ev.target.closest('[data-livenow]'); b.disabled = true; b.textContent = '⏳ Prüfe …';
        refreshLive(ctx, true).then(() => { failMsg = ''; ctx.refresh(); })
          .catch(err => { lastFail = Date.now(); failMsg = err.message || 'Abruf fehlgeschlagen'; ctx.refresh(); });
        return;
      }
      if (ev.target.closest('[data-pastetoggle]')) { const fm = root.querySelector('[data-pasteform]'); fm.hidden = !fm.hidden; if (!fm.hidden) fm.t.focus(); }
    });
    root.addEventListener('click', ev => {
      const th = ev.target.closest('th[data-bs]'); if (!th) return;
      const f = ctx.store.getJSON('bidsFilter', {}) || {}; f.sort = th.dataset.bs; ctx.store.setJSON('bidsFilter', f); ctx.refresh();
    });
    root.addEventListener('change', ev => {
      if (!ev.target.closest('[data-bsort]')) return;
      const f = ctx.store.getJSON('bidsFilter', {}) || {}; f.sort = ev.target.value; ctx.store.setJSON('bidsFilter', f); ctx.refresh();
    });
    root.addEventListener('submit', ev => {
      const fm = ev.target.closest('[data-pasteform]'); if (!fm) return;
      ev.preventDefault();
      const parsed = parsePaste(fm.t.value);
      if (!parsed.bids.length && !parsed.signed.length) { fm.t.setCustomValidity('Keine Gebote erkannt — bitte die Zeilen inkl. Name, Schule, Gebot, Manager, Zeit kopieren.'); fm.t.reportValidity(); return; }
      ctx.store.setJSON('pasted', { ...parsed, fetchedAt: new Date().toISOString(), source: 'paste' });
      ctx.refresh();
    });
    root.addEventListener('input', ev => { if (ev.target.name === 't') ev.target.setCustomValidity(''); });
    autoLive(root, ctx);
  }

  // ============================================================
  //  2) Mein Plan
  // ============================================================
  function renderPlan(ctx) {
    const { data: d, ui } = ctx, e = ui.esc;
    const st = load(ctx), m = market(d, st, getLive(ctx), ctx), me = m.me;
    const mine = Object.entries(m.sold).filter(([, s]) => s.team === me.name);
    const targets = d.CBB_POOL.filter(p => p.name in st.targets && !m.sold[p.name]);
    const planned = t => st.targets[t.name] != null ? st.targets[t.name] : limit(m.live(t), me);
    const sum = targets.reduce((a, t) => a + planned(t), 0);
    const restSpots = me.spotsLeft - targets.length, restMoney = me.left - sum;
    const ok = restSpots < 0 ? false : restMoney >= restSpots;
    // Was der Markt im Schnitt pro Tier kostet
    const tierStats = d.CBB_TIERS.map((t, i) => {
      const ps = d.CBB_POOL.filter(p => p.tier === i && !m.sold[p.name]);
      const vals = ps.map(p => m.live(p));
      return { t, n: ps.length, avg: vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 0, hi: Math.max(0, ...vals), lo: vals.length ? Math.min(...vals) : 0 };
    });
    // Beispiel-Kader zum Marktwert: so viele Plätze, wie man hat — von oben
    // („Star zuerst“) bzw. gleichmäßig („Breite“) — rein als Orientierung.
    const pool = d.CBB_POOL.filter(p => !m.sold[p.name]).map(p => m.live(p)).sort((a, b) => b - a);
    const share = me.left / Math.max(1, m.money);
    return `<div class="page-head"><h1 class="page-title display">🎯 Mein Plan</h1>
        <div class="page-sub">${e(me.name)} · ${money(me.left)} für ${me.spotsLeft} Plätze${mine.length ? ` · schon ${mine.length} Zuschläge für ${money(me.spent)}` : ''}</div></div>
      ${bidButton(ctx, true)}
      ${kpis(d, m)}
      <div class="two-col cbb-plan">
        <section class="card">
          <div class="card-head"><h2>★ Meine Ziele</h2><span class="muted small">${targets.length} Spieler</span></div>
          ${targets.length ? `<div class="table-wrap flat"><table class="table compact"><thead><tr><th>Spieler</th><th class="num">Wert</th><th class="num">Mein Max</th><th></th></tr></thead><tbody>
            ${targets.map(t => `<tr data-name="${e(t.name)}"><td><div class="cbb-name">${e(t.name)}</div><div class="cbb-tags"><span class="muted">${e(t.school)} · ${e(t.cls)} · ${e(t.pos)}</span></div></td>
              <td class="num">${money(m.live(t))}</td>
              <td class="num"><input class="cbb-input cbb-price" type="number" min="1" step="1" value="${planned(t)}" data-plan aria-label="Max-Gebot für ${e(t.name)}"></td>
              <td><button type="button" class="cbb-linkbtn" data-drop title="Ziel entfernen">✕</button></td></tr>`).join('')}
            </tbody></table></div>` : `<div class="empty"><div class="empty-emoji">☆</div><div class="empty-title">Noch keine Ziele</div><div class="empty-text">Auf dem Board mit ☆ markieren — hier siehst du dann, ob das Budget aufgeht.</div></div>`}
        </section>
        <section class="card">
          <div class="card-head"><h2>Budget-Check</h2></div>
          <div class="cbb-check">
            <div class="cbb-line"><span>Budget übrig</span><strong>${money(me.left)}</strong></div>
            <div class="cbb-line"><span>Ziele zum Max (${targets.length})</span><strong>− ${money(sum)}</strong></div>
            <div class="cbb-line total"><span>Bleibt für ${Math.max(0, restSpots)} weitere Plätze</span><strong class="${ok ? 'up' : 'down'}">${money(restMoney)}</strong></div>
            <div class="cbb-meter"><span style="width:${Math.min(100, Math.max(0, sum / Math.max(1, me.left) * 100)).toFixed(1)}%"></span></div>
            <p class="small ${ok ? 'muted' : 'down'}">${restSpots < 0 ? `Mehr Ziele (${targets.length}) als freie Plätze (${me.spotsLeft}).` : ok ? `Ø ${money(restSpots ? restMoney / restSpots : 0)} pro restlichem Platz. ${restSpots && restMoney / restSpots < 2 ? 'Der Rest wird ein $1-Kader — geht, aber dann bitte ohne Fehlgriffe oben.' : ''}` : `Geht nicht auf: Für ${restSpots} Plätze brauchst du mindestens ${money(restSpots)} (je $1).`}</p>
          </div>
          <div class="card-head"><h2>Was kostet was?</h2><span class="muted small">Live-Werte</span></div>
          <div class="table-wrap flat"><table class="table compact"><thead><tr><th>Tier</th><th class="num">frei</th><th class="num">Ø</th><th class="num">Spanne</th></tr></thead><tbody>
            ${tierStats.map(s => `<tr><td>${e(s.t.label)}</td><td class="num">${s.n}</td><td class="num">${money(s.avg)}</td><td class="num muted">${s.n ? (s.lo === s.hi ? money(s.lo) : money(s.lo) + '–' + money(s.hi)) : '–'}</td></tr>`).join('')}
          </tbody></table></div>
          <p class="small muted cbb-pad">Dein Anteil am Geld der Liga: <b>${ui.num(share * 100, 1)} %</b>. Wer genau seinen Anteil ausgibt, bekommt im Schnitt Spieler im Wert von ${money(me.left)} — mehr ist nur über Schnäppchen drin (Spieler, die unter „Wert“ weggehen).</p>
        </section>
      </div>
      <section class="card cbb-tips">
        <div class="card-head"><h2>Faustregeln für dein Budget</h2></div>
        <ul>
          <li><b>Max-Gebot = Restbudget − (offene Plätze − 1).</b> Jeder Platz kostet mindestens $1 — das ist dein hartes Limit (gerade ${money(me.maxBid)}).</li>
          <li><b>2025 gingen 132 von 287 Spielern für $1 weg</b>, die Top 10 kosteten zusammen ${money(d.CBB_NIL_2025.slice(0, 10).reduce((a, x) => a + x.price, 0))} (27 % des Geldes). Geld sammelt sich oben — Breite ist billig.</li>
          <li><b>Ein Franchise Star kostet realistisch ${money(tierStats[0].lo)}–${money(tierStats[0].hi)}.</b> Mit ${money(me.left)} für ${me.spotsLeft} Plätze heißt das: ein Star + sonst fast nur $1–5-Spieler. Zwei Stars gehen sich mit eurem Budget kaum aus.</li>
          <li><b>Startable-Tier ist das Preis-Leistungs-Sweet-Spot:</b> ${tierStats[3].n} Spieler, Ø ${money(tierStats[3].avg)}. Hier entscheiden die meisten Auktionen über den Kader.</li>
          <li><b>Teams mit wenig Budget pro Platz</b> (siehe Budgets) können bei Top-Spielern nicht mitgehen — gegen sie reicht oft ein früher, fairer Bid.</li>
          <li><b>24-Stunden-Regel:</b> Wer zuletzt bietet, gewinnt nach 24h ohne Konter. Nicht in jedem Thread mitbieten — Ziele festlegen und dort bis zum Limit gehen.</li>
        </ul>
      </section>`;
  }
  function mountPlan(root, ctx) {
    root.addEventListener('change', ev => {
      const inp = ev.target.closest('[data-plan]'); if (!inp) return;
      const st = load(ctx); st.targets[inp.closest('tr').dataset.name] = Math.max(1, Math.round(Number(inp.value) || 1));
      save(ctx, st); ctx.refresh();
    });
    root.addEventListener('click', ev => {
      if (!ev.target.closest('[data-drop]')) return;
      const st = load(ctx); delete st.targets[ev.target.closest('tr').dataset.name]; save(ctx, st); ctx.refresh();
    });
  }

  // ============================================================
  //  3) Budgets
  // ============================================================
  function renderTeams(ctx) {
    const { data: d, ui } = ctx, e = ui.esc;
    const st = load(ctx), m = market(d, st, getLive(ctx), ctx);
    const teams = m.teams.slice().sort((a, b) => b.left - a.left || b.perSpot - a.perSpot);
    const maxLeft = Math.max(...teams.map(t => t.left));
    return `<div class="page-head"><h1 class="page-title display">🏦 Budgets</h1>
        <div class="page-sub">${teams.length} Teams · ${money(m.money)} übrig für ${m.spots} Plätze
        <span class="explain">Max-Gebot = Restbudget minus $1 für jeden weiteren offenen Platz — mehr kann ein Team auf einen einzelnen Spieler nicht bieten. „Führt bei“ = laufende Höchstgebote laut Sheet; „Frei“ = Max-Gebot, wenn diese Gebote alle durchgehen. $/Platz zeigt, wer sich viele teure Spieler leisten kann.</span></div></div>
      <div class="table-wrap" data-share="Budgets NIL-Auktion"><table class="table compact"><thead><tr>
        <th>Team</th><th class="num">Plätze</th><th class="num">Budget</th><th class="num">Zuschläge</th><th>Rest</th><th class="num hide-sm">Ø / Platz</th><th class="num" title="Laufende Höchstgebote laut Sheet">Führt bei</th><th class="num">Max-Gebot</th><th class="num hide-sm" title="Max-Gebot nach Abzug der laufenden Höchstgebote">Frei</th>
      </tr></thead><tbody>
      ${teams.map(t => `<tr class="${t.name === d.CBB_MY_TEAM ? 'cbb-mine' : ''}"><td class="strong">${e(t.name)}${t.name === d.CBB_MY_TEAM ? ' <small class="muted">(du)</small>' : ''}</td>
        <td class="num">${t.spotsLeft}${t.won.length ? `<small class="muted"> / ${t.spots}</small>` : ''}</td>
        <td class="num">${money(t.budget)}</td>
        <td class="num">${t.won.length ? `${t.won.length} · ${money(t.spent)}` : '<span class="muted">–</span>'}</td>
        <td><div class="cbb-barcell"><span class="cbb-bar" style="width:${(t.left / maxLeft * 100).toFixed(1)}%"></span><b>${money(t.left)}</b></div></td>
        <td class="num hide-sm">${money(t.perSpot)}</td>
        <td class="num">${t.leading.length ? `${t.leading.length} · ${money(t.bound)}` : '<span class="muted">–</span>'}</td>
        <td class="num strong">${money(t.maxBid)}</td>
        <td class="num hide-sm">${money(t.freeBid)}</td></tr>`).join('')}
      </tbody></table></div>
      ${Object.keys(m.sold).length ? `<section class="card cbb-log"><div class="card-head"><h2>Zuschläge</h2><span class="muted small">${Object.keys(m.sold).length}</span></div>
        <div class="table-wrap flat"><table class="table compact"><thead><tr><th>Spieler</th><th>Team</th><th class="num">Preis</th><th class="num">Wert</th><th class="num">Δ</th></tr></thead><tbody>
        ${Object.entries(m.sold).map(([n, s]) => { const p = d.CBB_POOL.find(x => x.name === n) || { value: s.price }; const dlt = s.price - p.value; return `<tr><td>${e(n)}</td><td>${e(s.team)}</td><td class="num">${money(s.price)}</td><td class="num muted">${money(p.value)}</td><td class="num ${dlt > 0 ? 'down' : dlt < 0 ? 'up' : ''}">${dlt ? (dlt > 0 ? '+' : '') + dlt : '±0'}</td></tr>`; }).join('')}
        </tbody></table></div></section>` : ''}`;
  }

  // ============================================================
  //  4) Preise 2025
  // ============================================================
  function curveSvg(prices) {
    const W = 720, H = 220, L = 36, B = 22, T = 10, R = 8, n = prices.length, max = Math.ceil(Math.max(...prices) / 20) * 20;
    const x = i => L + (i / (n - 1)) * (W - L - R), y = v => T + (1 - v / max) * (H - T - B);
    const grid = [];
    for (let v = 0; v <= max; v += 20) grid.push(`<line class="cbb-grid" x1="${L}" x2="${W - R}" y1="${y(v)}" y2="${y(v)}"/><text class="cbb-ax" x="${L - 6}" y="${y(v) + 4}" text-anchor="end">$${v}</text>`);
    [1, 50, 100, 150, 200, 250].filter(r => r <= n).forEach(r => grid.push(`<text class="cbb-ax" x="${x(r - 1)}" y="${H - 6}" text-anchor="middle">${r}</text>`));
    const path = prices.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join('');
    const area = `${path}L${x(n - 1)},${y(0)}L${x(0)},${y(0)}Z`;
    return `<svg class="cbb-curve" viewBox="0 0 ${W} ${H}" role="img" aria-label="Zuschlagspreise 2025, absteigend sortiert" data-curve>
      ${grid.join('')}<path class="cbb-area" d="${area}"/><path class="cbb-line" d="${path}"/>
      <line class="cbb-cross" data-cross y1="${T}" y2="${H - B}" x1="-10" x2="-10"/><circle class="cbb-dot" data-dot r="4" cx="-10" cy="-10"/>
      <rect data-hit x="${L}" y="${T}" width="${W - L - R}" height="${H - T - B}" fill="transparent"/></svg>
      <div class="cbb-tip" data-tip hidden></div>`;
  }
  function renderNil(ctx) {
    const { data: d, ui } = ctx, e = ui.esc, N = d.CBB_NIL_2025;
    const total = N.reduce((a, x) => a + x.price, 0);
    const by = {};
    N.forEach(x => { const t = by[x.team] || (by[x.team] = { team: x.team, n: 0, sum: 0, top: x }); t.n++; t.sum += x.price; if (x.price > t.top.price) t.top = x; });
    const teams = Object.values(by).sort((a, b) => b.sum - a.sum);
    const buckets = [['$100+', 100, 1e9], ['$50–99', 50, 99], ['$30–49', 30, 49], ['$20–29', 20, 29], ['$10–19', 10, 19], ['$2–9', 2, 9], ['$1', 1, 1]]
      .map(([l, a, b]) => { const xs = N.filter(x => x.price >= a && x.price <= b); return { l, n: xs.length, sum: xs.reduce((s, x) => s + x.price, 0) }; });
    return `<div class="page-head"><h1 class="page-title display">📊 NIL-Preise 2025</h1>
        <div class="page-sub">${N.length} Zuschläge · ${money(total)} ausgegeben · ${Object.keys(by).length} Teams
        <span class="explain">So hat die Liga letztes Jahr tatsächlich geboten — die wichtigste Grundlage für die Werte 2026.</span></div></div>
      <section class="card cbb-chartcard" data-share="NIL-Preise 2025">
        <div class="card-head"><h2>Preis nach Zuschlags-Rang</h2><span class="muted small">teuerster links</span></div>
        <div class="cbb-chartwrap">${curveSvg(N.map(x => x.price))}</div>
        <div class="cbb-buckets">${buckets.map(b => `<div><small>${b.l}</small><strong>${b.n}</strong><span>${Math.round(b.sum / total * 100)} % des Geldes</span></div>`).join('')}</div>
      </section>
      <div class="two-col">
        <section class="card"><div class="card-head"><h2>Pro Team</h2></div>
          <div class="table-wrap flat"><table class="table compact"><thead><tr><th>Team</th><th class="num">Spieler</th><th class="num">Summe</th><th>Teuerster</th></tr></thead><tbody>
          ${teams.map(t => `<tr><td class="strong">${e(t.team)}</td><td class="num">${t.n}</td><td class="num">${money(t.sum)}</td><td>${e(t.top.name)} <small class="muted">${money(t.top.price)}</small></td></tr>`).join('')}
          </tbody></table></div></section>
        <section class="card"><div class="card-head"><h2>Alle Zuschläge</h2><input type="search" class="cbb-input" data-nilq placeholder="Suche …" aria-label="Suche"></div>
          <div class="table-wrap flat cbb-scroll"><table class="table compact"><thead><tr><th class="num">#</th><th>Spieler</th><th>Team</th><th class="num">$</th></tr></thead><tbody data-nilrows>
          ${N.map((x, i) => `<tr data-s="${e((x.name + ' ' + x.school + ' ' + x.team).toLowerCase())}"><td class="num muted">${i + 1}</td><td>${e(x.name)} <small class="muted">${e(x.cls)}/${e(x.pos)} · ${e(x.school)}</small></td><td>${e(x.team)}</td><td class="num strong">${x.price}</td></tr>`).join('')}
          </tbody></table></div></section>
      </div>`;
  }
  function mountNil(root, ctx) {
    const N = ctx.data.CBB_NIL_2025;
    const q = root.querySelector('[data-nilq]');
    q.addEventListener('input', () => { const v = q.value.trim().toLowerCase(); root.querySelectorAll('[data-nilrows] tr').forEach(tr => { tr.hidden = !!v && !tr.dataset.s.includes(v); }); });
    const svg = root.querySelector('[data-curve]'), tip = root.querySelector('[data-tip]');
    const hit = svg.querySelector('[data-hit]'), cross = svg.querySelector('[data-cross]'), dot = svg.querySelector('[data-dot]');
    const W = 720, L = 36, R = 8, H = 220, T = 10, B = 22, max = Math.ceil(N[0].price / 20) * 20;
    function move(ev) {
      const r = svg.getBoundingClientRect(), sx = (ev.clientX - r.left) / r.width * W;
      const i = Math.max(0, Math.min(N.length - 1, Math.round((sx - L) / (W - L - R) * (N.length - 1))));
      const cx = L + i / (N.length - 1) * (W - L - R), cy = T + (1 - N[i].price / max) * (H - T - B);
      cross.setAttribute('x1', cx); cross.setAttribute('x2', cx); dot.setAttribute('cx', cx); dot.setAttribute('cy', cy);
      tip.hidden = false;
      tip.innerHTML = `<b>#${i + 1} · $${N[i].price}</b><br>${ctx.ui.esc(N[i].name)}<br><small>${ctx.ui.esc(N[i].team)}</small>`;
      const px = cx / W * r.width;
      tip.style.left = Math.min(r.width - 170, Math.max(0, px + 12)) + 'px';
      tip.style.top = Math.max(0, cy / H * r.height - 20) + 'px';
    }
    hit.addEventListener('pointermove', move);
    hit.addEventListener('pointerdown', move);
    hit.addEventListener('pointerleave', () => { tip.hidden = true; cross.setAttribute('x1', -10); cross.setAttribute('x2', -10); dot.setAttribute('cx', -10); });
  }

  // ============================================================
  //  5) Regeln & Rechnung
  // ============================================================
  function renderHelp(ctx) {
    const { data: d, ui } = ctx, e = ui.esc;
    const spots = d.CBB_TEAMS.reduce((a, t) => a + t.spots, 0), cash = d.CBB_TEAMS.reduce((a, t) => a + t.budget, 0);
    const n25 = d.CBB_NIL_2025.length, c25 = d.CBB_NIL_2025.reduce((a, x) => a + x.price, 0);
    return `<div class="page-head"><h1 class="page-title display">📜 Regeln & Rechnung</h1></div>
      <section class="card cbb-tips"><div class="card-head"><h2>NIL-Regeln</h2></div><ul>${d.CBB_RULES.map(r => `<li>${e(r)}</li>`).join('')}</ul></section>
      <section class="card cbb-tips"><div class="card-head"><h2>So entsteht der „Wert“</h2></div><ol>
        <li><b>Update 02.10.2026 — Statistik-Projektion:</b> Für jeden Spieler mit College-Einsätzen 2025-26 (ESPN-Boxscores aller D1-Spiele über sportsdataverse/hoopR) rechnet die Seite Minuten und Produktion für 2026-27 hoch. Wechselt ein Spieler zu stärkeren Gegnern, sinkt die Produktion pro Minute — kalibriert an 854 echten Transfers 2025→2026: bei deutlich stärkerer Conference im Schnitt −14 % pro Minute und ~6 Minuten weniger. Daraus ein 9-Kategorien-z-Score (FG%, FT%, 3PM, PTS, REB, AST, ST, BLK, TO) und der Rang unter allen Veteranen → Wert (85 % Modell, 15 % Dizzle).</li>
        <li><b>Freshmen & Recherche:</b> Ohne College-Statistik zählt Dizzles Einschätzung, angepasst nach recherchierter Rolle (Starter? Minuten-Erwartung? verletzt? spielberechtigt?). Quellen stehen am Spieler (🔎).</li>
        <li><b>Reihenfolge (ursprünglich):</b> Dizzles Tiers aus dem Reiter „2026“ (Franchise Star → Bench). Innerhalb eines Tiers: Fantasy-Rang 2025-26 (Reiter „2025-26 Player Rankings“), Bonus für Draft-Prospects (fett), leichter Bonus für Transfers; Freshmen ohne Rang landen je nach Draft-Status in der Mitte. Warnhinweise (verletzt, Spielberechtigung unklar, Wechsel nicht bestätigt) drücken den Wert um 30–60 %.</li>
        <li><b>Marktkurve 2025:</b> Die echten Zuschläge 2025 (${n25} Spieler, ${money(c25)}) nach Preis sortiert. Spieler Nr. 1 im Board 2026 bekommt den Preis von Zuschlag Nr. 1 aus 2025 usw.</li>
        <li><b>Hochrechnung aufs Geld 2026:</b> Es zählt nur Geld über $1 (jeder Platz kostet mindestens $1). 2025: ${money(c25 - n25)} „freies“ Geld, 2026: ${money(cash - spots)} → Faktor ${ui.num((cash - spots) / (c25 - n25), 2)}.</li>
        <li><b>Mischung:</b> Wert = ½ Marktkurve + ½ Position in Dizzles Tier-Spanne, danach so skaliert, dass die besten ${spots} Spieler zusammen genau das Geld der Liga (${money(cash)}) kosten. Alle anderen: $1.</li>
        <li><b>Limit</b> = Wert + 15 % (höchstens dein Max-Gebot). Bis dahin mitgehen, wenn du den Spieler wirklich willst; darüber zahlt man drauf.</li>
        <li><b>Live-Wert:</b> Sobald Zuschläge eingetragen sind, vergleicht die Seite Restgeld und Restwert. Gehen Spieler billig weg, bleibt mehr Geld für den Rest → alle übrigen Werte steigen (und umgekehrt).</li>
      </ol>
      <p class="small muted cbb-pad">Das ist eine Schätzung, kein Orakel: Die Liga hat 2026 mehr Teams (${d.CBB_TEAMS.length}) und neue Manager — die ersten Zuschläge zeigen schnell, ob sie teurer oder billiger bieten. Dafür ist der Live-Wert da.</p></section>
      <section class="card cbb-tips"><div class="card-head"><h2>Legende</h2></div><ul>
        <li><span class="cbb-tag dp">🎓 Draft</span> fett in Dizzles Liste — NBA-Draft-Prospect (Upside, aber evtl. nur ein Jahr am College).</li>
        <li><span class="cbb-tag up">⬆ Transfer</span> kursiv — Wechsel zu einem stärkeren Programm.</li>
        <li><span class="cbb-tag down">⬇ Transfer</span> unterstrichen — Wechsel zu einem kleineren Programm (oft größere Rolle).</li>
        <li><span class="cbb-tag warn">⚠</span> Hinweis aus der Liste (verletzt, Spielberechtigung, Sternchen-Markierung).</li>
      </ul></section>`;
  }

  // Seiten in einen eigenen Wrapper packen: mount() hängt Listener an den
  // Wrapper (wird bei jedem Neuzeichnen ersetzt), nicht an #nativeMain.
  const wrap = r => ctx => `<div class="cbb-page" data-cbb>${r(ctx)}</div>`;
  const inner = mt => (root, ctx) => mt(root.querySelector('[data-cbb]') || root, ctx);
  // Für Tests/Konsole
  MFHFB.cbb = { matchPlayer, parseCsv, parseRows, parsePaste, parseSheetTime, rate };

  const base = { applies: { sport: ['cbb'] }, data: ['nil-auction', '?nil-extra', '?live-bids'] };
  MFHFB.pages.register({ ...base, id: 'home', section: 'home', label: 'NIL-Auktion', icon: '💰', title: () => 'NIL-Auktion', render: wrap(renderBoard), mount: inner(mountBoard) });
  MFHFB.pages.register({ ...base, id: 'bids', section: 'home', label: 'Live-Gebote', icon: '⏱', title: () => 'Live-Gebote', render: wrap(renderBids), mount: inner(mountBids) });
  MFHFB.pages.register({ ...base, id: 'auctionplan', section: 'home', label: 'Mein Plan', icon: '🎯', title: () => 'Mein Plan', render: wrap(renderPlan), mount: inner(mountPlan) });
  MFHFB.pages.register({ ...base, id: 'auctionteams', section: 'teams', label: 'Budgets', icon: '🏦', title: () => 'Budgets', render: wrap(renderTeams) });
  MFHFB.pages.register({ ...base, id: 'nil2025', section: 'draft', label: 'Preise 2025', icon: '📊', title: () => 'NIL-Preise 2025', render: wrap(renderNil), mount: inner(mountNil) });
  MFHFB.pages.register({ ...base, id: 'auctionhelp', section: 'league', label: 'Regeln & Rechnung', icon: '📜', title: () => 'Regeln & Rechnung', render: wrap(renderHelp) });
})();
