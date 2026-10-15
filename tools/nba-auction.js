// ============================================================
//  Tool (NBA): Auction Draft — Draft Board für Auktions-Drafts
// ============================================================
//  #/<liga>/auction   (nur Ligen mit auctionDraft in js/leagues.js)
//
//  Jeder trägt die Zuschläge selbst ein (Spieler, Team, Preis) — alles
//  wird nur im eigenen Browser gespeichert (localStorage), es gibt keinen
//  Server und keine ESPN-Abfrage während des Drafts. Export/Import als
//  JSON, um den Stand auf ein anderes Gerät mitzunehmen.
//
//  Werte: Spieler-Score aus den Liga-Projections (MFHFB.nbaProjections,
//  gleicher Modus/gleiche Gewichte wie die Projections-Seite) →
//  Auction-$ über Wert über Ersatzniveau (Ersatz = Rang Teams × Kaderplätze):
//    $ = 1 + (Score − Ersatz) / Σ(Score − Ersatz) × (Teams × Budget − Plätze)
//  „Jetzt“ = inflationsbereinigt: verbleibendes Geld (minus $1 je offenem
//  Platz) ÷ verbleibender Wert der besten noch freien Spieler.
//  Max-Gebot je Team = Restbudget − (offene Plätze − 1) × $1.
// ============================================================

(function () {
  const N = () => MFHFB.nba;
  const SKEY = 'auction';
  const CATS = [
    { key: 'pts', label: 'PTS' }, { key: 'reb', label: 'REB' }, { key: 'ast', label: 'AST' },
    { key: 'stl', label: 'STL' }, { key: 'blk', label: 'BLK' }, { key: 'tpm', label: '3PM' },
    { key: 'fgImpact', label: 'FG%' }, { key: 'ftImpact', label: 'FT%' }, { key: 'tov', label: 'TO' },
  ];
  const POS = ['G', 'F', 'C'];

  // ---------- Zustand (nur im Browser) ----------
  // Speicher: mfhfb:<liga>:auction — oder mit auctionDraft.shareWith der
  // Stand einer anderen Liga (World Cup → Funkytown: dieselbe Auktion,
  // ein Board, egal über welchen Reiter man reinkommt).
  function AS(ctx) {
    const k = 'mfhfb:' + ((ctx.league.auctionDraft || {}).shareWith || ctx.league.key) + ':' + SKEY;
    return {
      get() { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : {}; } catch (e) { return {}; } },
      set(v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* blockiert */ } },
    };
  }
  // PIN-Sperre (nur Sichtschutz, kein echter Schutz — alles ist clientseitig)
  const PIN_KEY = 'mfhfb:auction-pin';
  const PIN = '1';
  const unlocked = () => { try { return localStorage.getItem(PIN_KEY) === PIN; } catch (e) { return false; } };
  function state(ctx) {
    const cfg = ctx.league.auctionDraft || {};
    const info = ctx.data.LEAGUE_DRAFT_INFO || {};
    const st = AS(ctx).get();
    return {
      picks: Array.isArray(st.picks) ? st.picks : [],
      my: st.my != null ? st.my : null,
      budget: st.budget || info.budget || cfg.budget || 200,
      size: st.size || info.rosterSize || cfg.rosterSize || 13,
      pos: st.pos || '', q: st.q || '', open: st.open != null ? st.open : null,
      lastTeam: st.lastTeam != null ? st.lastTeam : null,
      uni: !!st.uni, tgt: !!st.tgt, live: !!st.live, pasteOpen: !!st.pasteOpen, oppOpen: st.oppOpen, gopen: !!st.gopen, po13: !!st.po13, bsort: st.bsort || '', bdir: st.bdir || '', manual: !!st.manual,
      // Liga ohne eigene Team-Datei (z. B. Auction-Liga unter „World Cup“): Teams selbst benennen
      nTeams: st.nTeams || cfg.teams || 10,
      teamNames: Array.isArray(st.teamNames) ? st.teamNames : [],
    };
  }
  const save = (ctx, patch) => AS(ctx).set({ ...AS(ctx).get(), ...patch });
  const money = v => '$' + Math.round(v);

  // basic: nur Geld/Kader (Funkytown, öffentlich) — keine Werte, Inflation, Radar, Best Available
  const cfg_basic = ctx => (ctx.league.auctionDraft || {}).basic;

  // ---------- Modell ----------
  function model(ctx) {
    const data = ctx.data, nba = N();
    nba.init(data);
    const st = state(ctx);
    const PALETTE = ['#6c63ff', '#29b6f6', '#4caf81', '#f5c842', '#ef5350', '#26c6da', '#ff9800', '#e040fb', '#66bb6a', '#ff6584', '#ffa726', '#78909c', '#8d6e63', '#ab47bc'];
    const teams = data.TEAMS ? nba.leagueTeams(data) : Array.from({ length: st.nTeams }, (_, i) => ({ id: i + 1, name: st.teamNames[i] || `Team ${i + 1}`, color: PALETTE[i % PALETTE.length] }));
    const byId = {}; teams.forEach(t => { byId[t.id] = t; });
    const rows = (MFHFB.nbaProjections && data.PROJECTIONS_CONSENSUS) ? MFHFB.nbaProjections.rows(ctx) : [];
    const byKey = new Map(); rows.forEach(r => { if (!byKey.has(nba.key(r.name))) byKey.set(nba.key(r.name), r); });

    // Auction-$ vor dem Draft (Wert über Ersatzniveau)
    const slots = teams.length * st.size;
    const pot = teams.length * st.budget;
    const sorted = rows.slice().sort((a, b) => b.z - a.z);
    const repl = sorted.length ? sorted[Math.min(slots, sorted.length) - 1].z : 0;
    const top = sorted.slice(0, slots);
    const surplus = top.reduce((s, r) => s + Math.max(0, r.z - repl), 0) || 1;
    const value = new Map();
    sorted.forEach((r, i) => value.set(r, i < slots ? 1 + Math.max(0, r.z - repl) / surplus * (pot - slots) : (r.z >= repl - 0.5 ? 1 : 0)));
    sorted.forEach((r, i) => { r._auRank = i + 1; });
    // Rose (Durant-Modus) immer zusätzlich, unabhängig vom eingestellten Score-Modus
    const rose = new Map();
    try {
      if (sorted.length && nba.fromCatZ) {
        const pool = sorted.slice(0, 200).map((_, i) => i);
        const res = nba.fromCatZ(sorted.map(r => r.rawCats || {}), CATS.map(c => c.key), null, pool, 'durant');
        sorted.forEach((r, i) => rose.set(r, res[i].score));
      }
    } catch (e) { /* ohne Rose */ }

    // Zuschläge
    const picks = st.picks.filter(p => byId[p.team]);
    const drafted = new Map();
    picks.forEach(p => drafted.set(nba.key(p.player), p));
    const T = teams.map(t => {
      const own = picks.filter(p => p.team === t.id);
      const spent = own.reduce((s, p) => s + (Number(p.price) || 0), 0);
      const left = st.budget - spent;
      const open = Math.max(0, st.size - own.length);
      return { t, own, spent, left, open, maxBid: open > 0 ? Math.max(0, left - (open - 1)) : 0 };
    });
    const tById = {}; T.forEach(x => { tById[x.t.id] = x; });

    // Inflation: freies Geld vs. Wert der besten noch freien Spieler
    const available = sorted.filter(r => !drafted.has(nba.key(r.name)));
    const openSlots = T.reduce((s, x) => s + x.open, 0);
    const moneyLeft = T.reduce((s, x) => s + Math.max(0, x.left), 0);
    const remVal = available.slice(0, openSlots).reduce((s, r) => s + Math.max(0, value.get(r) - 1), 0);
    const infl = remVal > 0 && openSlots > 0 ? Math.max(0, moneyLeft - openSlots) / remVal : 1;
    const adj = r => { const v = value.get(r) || 0; return v <= 0 ? 0 : 1 + (v - 1) * infl; };

    // Liga-Markt (Funkytown-Historie): typischer Zuschlag nach Rang
    const MK = (data.AUCTION_HISTORY || {}).market || null;
    const mkt = r => (MK && r && r._auRank ? (MK[r._auRank - 1] || 1) : null);
    // Playoff-Spiele (auctionDraft.playoffs)
    const PO = (ctx.league.auctionDraft || {}).playoffs || null;
    const poOf = r => { if (!PO || !r) return null; const t = nba.canonTeam(r.team || ''); const w = PO.games[t]; return w ? { team: t, w, sum: w.reduce((a, b) => a + b, 0) } : null; };
    // Zielliste (AUCTION_PLAN) — nur Vollversion
    const PLAN = data.AUCTION_PLAN || null;
    const target = new Map();
    if (PLAN) [['stars', 'Star'], ['mids', 'Mittelbau'], ['fills', '$1–5']].forEach(([k, lab]) => (PLAN[k] || []).forEach((t, i) => target.set(nba.key(t.name), { ...t, tier: lab, kind: k, prio: i + 1 })));
    return { rose, PLAN, target, cfg: ctx.league.auctionDraft || {}, MK, mkt, PO, poOf, basic: !!cfg_basic(ctx), nba, st, teams, byId, rows: sorted, byKey, value, adj, picks, drafted, T, tById, available, openSlots, moneyLeft, infl, slots, pot, repl };
  }

  // ---------- Team-Werte (Radar + Summen) ----------
  function teamProfile(M, x) {
    const players = x.own.map(p => M.byKey.get(M.nba.key(p.player))).filter(Boolean);
    const n = players.length;
    const sum = k => players.reduce((s, r) => s + (Number(r[k]) || 0), 0);
    const z = {};
    CATS.forEach(c => { z[c.key] = n ? players.reduce((s, r) => s + ((r.rawCats || {})[c.key] || 0), 0) / n : null; });
    const fga = sum('fga'), fta = sum('fta');
    const tot = { pts: sum('pts'), reb: sum('reb'), ast: sum('ast'), stl: sum('stl'), blk: sum('blk'), tpm: sum('tpm'), tov: sum('tov'), fg: fga ? sum('fgm') / fga * 100 : null, ft: fta ? sum('ftm') / fta * 100 : null };
    return { n, z, tot, missing: x.own.length - n };
  }
  const totFmt = (c, tot) => {
    const m = { pts: ['pts', 1], reb: ['reb', 1], ast: ['ast', 1], stl: ['stl', 1], blk: ['blk', 1], tpm: ['tpm', 1], tov: ['tov', 1], fgImpact: ['fg', 1, '%'], ftImpact: ['ft', 1, '%'] }[c.key];
    const v = tot[m[0]];
    return v == null ? '—' : v.toFixed(m[1]) + (m[2] || '');
  };
  // Ø z je Spieler → 0..1 (0,5 = Pool-Schnitt der Projections)
  const zTo01 = z => (z == null ? null : Math.max(0, Math.min(1, 0.5 + z / 2.5)));

  function radarHtml(ctx, M, x) {
    const e = ctx.ui.esc;
    const P = teamProfile(M, x);
    if (!P.n) return `<div class="muted small au-noradar">Noch keine Spieler mit Projection — Radar erscheint nach dem ersten Zuschlag.</div>`;
    const mine = M.st.my != null && M.st.my !== x.t.id ? M.tById[M.st.my] : null;
    const Pm = mine ? teamProfile(M, mine) : null;
    const series = [{ name: x.t.name, prof: P }].concat(Pm && Pm.n ? [{ name: mine.t.name + ' (ich)', prof: Pm }] : []);
    const chart = MFHFB.charts.radar({
      axes: CATS.map(c => ({ label: c.label })),
      series: series.map(s => ({
        name: s.name,
        vals: CATS.map(c => zTo01(s.prof.z[c.key])),
        tips: CATS.map(c => `${s.name} · ${c.label}: ${totFmt(c, s.prof.tot)} pro Spiel (Summe) · Ø z ${(s.prof.z[c.key] || 0).toFixed(2)} je Spieler`),
      })),
      size: 280, label: 'Team-Profil ' + x.t.name,
    }) + (series.length > 1 ? MFHFB.charts.chips(series.map(s => s.name)) : '');
    const table = `<table class="table compact au-tot"><thead><tr><th></th>${CATS.map(c => `<th class="num">${c.label}</th>`).join('')}</tr></thead><tbody>
      ${series.map(s => `<tr><td class="strong">${e(s.name)}</td>${CATS.map(c => `<td class="num" style="${M.nba.heat(s.prof.z[c.key] || 0)}">${totFmt(c, s.prof.tot)}</td>`).join('')}</tr>`).join('')}
    </tbody></table>`;
    return `<div class="au-radar">${chart}</div><div class="table-wrap">${table}</div>
      <div class="muted small au-rnote">Summen pro Spiel aus den Projections. Radar: Ø Kategorie-z je Spieler (Mitte = Pool-Schnitt, außen = stark).${P.missing ? ` ${P.missing} Spieler ohne Projection nicht enthalten.` : ''}</div>`;
  }

  // ---------- Teile ----------
  function entryHtml(ctx, M) {
    const e = ctx.ui.esc, st = M.st;
    const def = st.lastTeam != null ? st.lastTeam : st.my;
    return `<div class="card au-entry">
      <div class="card-head"><h2>🔨 Zuschlag eintragen</h2><span class="muted small hide-sm">Enter = speichern</span></div>
      <form class="au-form" data-form autocomplete="off">
        <label class="au-f au-fp"><span>Spieler</span><input class="tr-select" data-player list="au-players" placeholder="Name …" required></label>
        <label class="au-f"><span>Team</span><select class="tr-select" data-team required><option value="">Team …</option>${M.T.map(x => `<option value="${x.t.id}"${def === x.t.id ? ' selected' : ''}${x.open === 0 ? ' disabled' : ''}>${e(x.t.name)}${x.t.id === st.my ? ' (ich)' : ''} · ${money(x.left)}</option>`).join('')}</select></label>
        <label class="au-f au-fs"><span>Preis $</span><input class="tr-select" data-price type="number" min="1" step="1" inputmode="numeric" placeholder="$" required></label>
        <button type="submit" class="mp-btn primary au-save">Eintragen</button>
      </form>
      <datalist id="au-players">${M.available.slice(0, 700).map(r => `<option value="${e(r.name)}">${e(r.team || '')} · ${e(r.pos || '')}${M.basic ? '' : ' · Wert ' + money(M.value.get(r) || 0)}</option>`).join('')}</datalist>
      <div class="au-hint" data-hint></div>
    </div>`;
  }

  function budgetsHtml(ctx, M) {
    const e = ctx.ui.esc, st = M.st, nba = M.nba;
    const rows = M.T.map(x => {
      const isMe = x.t.id === st.my, isOpen = x.t.id === st.open;
      const val = x.own.reduce((s, p) => { const r = M.byKey.get(nba.key(p.player)); return s + (r ? M.value.get(r) || 0 : 0); }, 0);
      const diff = val - x.spent;
      return `<div class="au-team${isMe ? ' me' : ''}${isOpen ? ' open' : ''}" style="${nba.tcStyle(x.t)}">
        <div class="au-trow" data-open="${x.t.id}" role="button" tabindex="0" aria-expanded="${isOpen}">
          <span class="au-tname"><span class="au-caret">${isOpen ? '▾' : '▸'}</span><span class="au-dot"></span><b>${e(x.t.name)}</b>${isMe ? ' <span class="au-me">ich</span>' : ''}</span>
          <span class="num" data-l="Kader">${x.own.length}/${st.size}</span>
          <span class="num hide-sm" data-l="Ausgegeben">${money(x.spent)}</span>
          <span class="num strong" data-l="Rest">${money(x.left)}</span>
          <span class="num strong au-max" data-l="Max">${x.open ? money(x.maxBid) : '—'}</span>
          <span class="num hide-sm" data-l="Ø/Platz">${x.open ? money(x.left / x.open) : '—'}</span>
          ${M.basic ? '' : `<span class="num hide-sm ${x.own.length ? (diff >= 0 ? 'up' : 'down') : 'muted'}" title="Projektionswert der gekauften Spieler minus bezahlter Preis">${x.own.length ? (diff >= 0 ? '+' : '−') + money(Math.abs(diff)) : '—'}</span>`}
        </div>
        ${isOpen ? `<div class="au-detail">${teamDetail(ctx, M, x)}</div>` : ''}
      </div>`;
    }).join('');
    return `<div class="card au-budgets">
      <div class="card-head"><h2>💰 Budgets & Teams</h2><span class="muted small hide-sm">Team anklicken = Kader${M.basic ? '' : ' + Radar'}</span></div>
      <div class="au-thead"><span>Team</span><span class="num">Kader</span><span class="num hide-sm">Ausgegeben</span><span class="num">Rest</span><span class="num" title="Restbudget − $1 je weiteren offenen Platz">Max-Gebot</span><span class="num hide-sm" title="Restbudget ÷ offene Plätze">Ø/Platz</span>${M.basic ? '' : '<span class="num hide-sm" title="Wert − Preis">± Wert</span>'}</div>
      <div class="au-teams">${rows}</div></div>`;
  }

  function overviewHtml(ctx, M) {
    const e = ctx.ui.esc, st = M.st;
    const spent = M.T.reduce((s, x) => s + x.spent, 0);
    const filled = M.picks.length;
    const free = Math.max(0, M.moneyLeft - M.openSlots);
    const live = M.T.filter(x => x.open > 0);
    const by = (arr, f, dir) => arr.slice().sort((a, b) => dir * (f(b) - f(a)))[0];
    const hiMax = live.length ? by(live, x => x.maxBid, 1) : null;
    const loMax = live.length ? by(live, x => x.maxBid, -1) : null;
    const opp = live.filter(x => x.t.id !== st.my);
    const hiOpp = st.my != null && opp.length ? by(opp, x => x.maxBid, 1) : null;
    const rich = M.T.length ? by(M.T, x => x.left, 1) : null;
    const top = filled ? M.picks.reduce((a, p) => (Number(p.price) > Number(a.price) ? p : a)) : null;
    const tn = id => e((M.byId[id] || {}).name || '?');
    // Gleichstand → „n Teams“ statt willkürlich eines zu nennen
    const who = (arr, x, f) => { const n = arr.filter(y => f(y) === f(x)).length; return n > 1 ? `${n} Teams` : tn(x.t.id); };
    const tile = (label, val, sub, title) => `<div class="au-stat"${title ? ` title="${e(title)}"` : ''}><span>${label}</span><b>${val}</b>${sub ? `<small>${sub}</small>` : ''}</div>`;
    return `<div class="card au-over">
      <div class="card-head"><h2>📊 Liga-Überblick</h2><span class="muted small">${M.T.length} Teams</span></div>
      <div class="au-stats">
        ${tile('Max-Budget je Team', money(st.budget), `Liga gesamt ${money(M.pot)}`)}
        ${tile('Ausgegeben', money(spent), `${M.pot ? Math.round(spent / M.pot * 100) : 0} % vom Gesamtbudget`)}
        ${tile('Übrig gesamt', money(M.moneyLeft), `davon frei ${money(free)}`, 'Frei = Übrig minus $1 Pflicht je offenem Kaderplatz')}
        ${tile('Kaderplätze', `${filled}/${M.slots}`, `${M.openSlots} offen`)}
        ${tile('Ø $ je offenem Platz', M.openSlots ? money(M.moneyLeft / M.openSlots) : '—', 'Liga gesamt')}
        ${tile('Höchstes Max-Gebot', hiMax ? money(hiMax.maxBid) : '—', hiMax ? who(live, hiMax, x => x.maxBid) : '', 'Mehr kann kein Team mehr für einen Spieler bieten')}
        ${hiOpp ? tile('Höchstes Max-Gebot Gegner', money(hiOpp.maxBid), who(opp, hiOpp, x => x.maxBid), 'Bietest du 1 $ mehr, kann dich niemand überbieten') : ''}
        ${tile('Niedrigstes Max-Gebot', loMax ? money(loMax.maxBid) : '—', loMax ? who(live, loMax, x => x.maxBid) : '')}
        ${tile('Meiste Kohle übrig', rich ? money(rich.left) : '—', rich ? who(M.T, rich, x => x.left) : '')}
        ${tile('Teuerster Zuschlag', top ? money(top.price) : '—', top ? `${e(top.player)} · ${tn(top.team)}` : '')}
        ${tile('Ø Zuschlag', filled ? money(spent / filled) : '—', filled ? `${filled} Spieler` : '')}
        ${M.basic ? '' : tile('Inflation', '×' + M.infl.toFixed(2), M.infl > 1.02 ? 'mehr Geld als Restwert' : M.infl < 0.98 ? 'weniger Geld als Restwert' : 'neutral', 'Freies Geld ÷ Restwert der besten noch freien Spieler')}
      </div>
    </div>`;
  }

  function teamDetail(ctx, M, x) {
    const e = ctx.ui.esc, nba = M.nba;
    const list = x.own.length ? `<ol class="au-roster">${x.own.map(p => {
      const r = M.byKey.get(nba.key(p.player)); const v = r && !M.basic ? M.value.get(r) || 0 : null; const d = v == null ? null : v - p.price;
      return `<li><b>${e(p.player)}</b> <span class="muted small">${r ? e((r.team || '') + ' · ' + (r.pos || '')) : (M.basic ? '' : 'keine Projection')}</span><span class="au-rp"><b>${money(p.price)}</b>${v != null ? ` <small class="${d >= 0 ? 'up' : 'down'}">Wert ${money(v)}</small>` : ''}</span></li>`;
    }).join('')}</ol>` : '<div class="muted small">Noch keine Spieler.</div>';
    const H = !M.basic && ctx.data.AUCTION_TEAMS;
    const o = H ? oppRead(M, x, H) : null;
    const hist = o ? `<div class="au-hist small"><b>Historie (${o.sm.style}):</b> ${H[x.t.id].seasons.map(s => `${s.y}: max ${money(s.max)} (${e(s.maxPlayer)}), ${s.n40}× ≥$40, ${s.nMid}× $10–39, ${s.nCheap}× ≤$2${s.as !== x.t.name ? ` <span class="muted">als ${e(s.as)}</span>` : ''}`).join(' · ')}<br><b>Live:</b> ${o.n40}× ≥$40, ${o.nMid}× $10–39 → ${e(o.why)}${x.open ? `, Gebote bis ~${money(o.cap)} erwartet` : ''}.</div>` : '';
    return `<div class="au-tdetail">${hist}<div class="au-tlist">${list}</div>${M.basic ? '' : `<div class="au-tradar">${radarHtml(ctx, M, x)}</div>`}</div>`;
  }

  // ---------- Best Available (Mitte, sortierbar) ----------
  const STATS = [
    { k: 'pts', l: 'PTS', z: 'pts', d: 1 }, { k: 'reb', l: 'REB', z: 'reb', d: 1 }, { k: 'ast', l: 'AST', z: 'ast', d: 1 },
    { k: 'stl', l: 'STL', z: 'stl', d: 1 }, { k: 'blk', l: 'BLK', z: 'blk', d: 1 }, { k: 'tpm', l: '3PM', z: 'tpm', d: 1 },
    { k: 'fg', l: 'FG%', z: 'fgImpact', d: 1 }, { k: 'ft', l: 'FT%', z: 'ftImpact', d: 1 }, { k: 'tov', l: 'TO', z: 'tov', d: 1 },
  ];
  const statVal = (r, c) => (c.k === 'fg' ? (r.fga ? r.fgm / r.fga * 100 : null) : c.k === 'ft' ? (r.fta ? r.ftm / r.fta * 100 : null) : (Number(r[c.k]) || 0));
  function baKeys(M) {
    const K = {
      rank: r => r._auRank, score: r => r.z, rose: r => (M.rose.has(r) ? M.rose.get(r) : null), val: r => M.value.get(r) || 0, adj: r => M.adj(r),
      mkt: r => M.mkt(r), po: r => { const p = M.poOf(r); return p ? p.sum : null; },
    };
    STATS.forEach(c => { K[c.k] = r => (r.rawCats || {})[c.z]; }); // nach Kategorie-Wert (TO invertiert: wenig TO = gut)
    return K;
  }
  const BA_ASC = { rank: 1 };
  function baRows(M) {
    const st = M.st, q = String(st.q || '').toLowerCase().trim();
    let list = M.available.filter(r => (!st.tgt || M.target.has(M.nba.key(r.name))) && (!st.uni || M.nba.unicornBadge(r)) && (!st.pos || String(r.pos || '').split('/').includes(st.pos))
      && (!st.po13 || ((M.poOf(r) || {}).sum || 0) >= 13)
      && (!q || [r.name, r.team, r.pos].some(v => String(v || '').toLowerCase().includes(q))));
    const f = baKeys(M)[st.bsort];
    if (f && st.bsort !== 'rank') {
      const dir = st.bdir === 'asc' ? 1 : -1;
      list = list.slice().sort((x, y) => { const a = f(x), b = f(y); if (a == null && b == null) return x._auRank - y._auRank; if (a == null) return 1; if (b == null) return -1; return (a - b) * dir || x._auRank - y._auRank; });
    } else if (st.bsort === 'rank' && st.bdir === 'desc') list = list.slice().reverse();
    return list;
  }
  function baBody(ctx, M) {
    const e = ctx.ui.esc, nba = M.nba;
    const list = baRows(M);
    const cols = 8 + STATS.length;
    if (!list.length) return `<tr><td colspan="${cols}">${ctx.ui.empty('Keine Treffer', 'Filter oder Suche anpassen.', '🔎')}</td></tr>`;
    const showRose = nba.getMode() !== 'durant';
    return list.slice(0, 250).map(r => {
      const ro = M.rose.get(r);
      return `<tr class="au-barow" data-pick="${e(r.name)}">
        <td class="num rank${M.MK && r._auRank <= 5 ? ' au-rk-star' : M.MK && r._auRank >= 21 && r._auRank <= 40 ? ' au-rk-sweet' : M.MK && r._auRank <= 10 ? ' au-rk-pricey' : ''}"${M.MK ? ` title="${r._auRank <= 5 ? 'Top 5: lohnt laut Backtest' : r._auRank <= 10 ? 'Rang 6–10: historisch überbezahlt' : r._auRank >= 21 && r._auRank <= 40 ? 'Sweet Spot Rang 21–40' : ''}"` : ''}>${r._auRank}</td>
        <td class="au-pcell"><div class="strong">${e(r.name)}${nba.unicornBadge(r)}${M.target.has(nba.key(r.name)) ? (t => ` <span class="au-tgt au-tgt-${t.kind}" title="Zielliste: ${e(t.tier)} #${t.prio}, Limit ${money(t.limit)}${t.note ? ' · ' + e(t.note) : ''}">🎯 ≤${money(t.limit)}</span>`)(M.target.get(nba.key(r.name))) : ''}</div><div class="au-pmeta">${e(r.pos || '')} · ${e(r.team || '')}</div></td>
        <td class="num"><span class="ls-comp ${nba.scorePositive(r.z) ? 'up' : 'down'}">${nba.fmtScore(r.z)}</span></td>
        ${showRose ? `<td class="num">${ro == null ? '—' : `<span class="ls-comp ${ro >= 0 ? 'up' : 'down'}">${(ro >= 0 ? '+' : '') + ro.toFixed(2)}</span>`}</td>` : ''}
        <td class="num strong">${money(M.value.get(r) || 0)}</td>
        <td class="num au-adj">${money(M.adj(r))}</td>
        ${M.MK ? `<td class="num au-mkt" title="Typischer Funkytown-Zuschlag für Rang ${r._auRank}">${money(M.mkt(r))}</td>` : ''}
        ${M.PO ? `<td class="num">${poHtml(M, r)}</td>` : ''}
        ${STATS.map(c => { const v = statVal(r, c); const z = (r.rawCats || {})[c.z]; return `<td class="num au-st" style="${nba.heat(z || 0)}" title="${c.l} · z ${(z || 0).toFixed(2)}">${v == null ? '—' : v.toFixed(c.d)}</td>`; }).join('')}
      </tr>`;
    }).join('');
  }
  function baHtml(ctx, M) {
    const e = ctx.ui.esc, st = M.st, nba = M.nba;
    const th = (k, label, title) => { const on = st.bsort === k || (!st.bsort && k === 'rank'); const arrow = on ? ((st.bdir || (BA_ASC[k] ? 'asc' : 'desc')) === 'desc' ? ' ▼' : ' ▲') : ''; return `<th class="num au-sort${on ? ' on' : ''}" data-bsort="${k}" title="${title ? e(title) + ' · ' : ''}klicken zum Sortieren">${label}${arrow}</th>`; };
    const showRose = nba.getMode() !== 'durant';
    return `<div class="card au-ba">
      <div class="card-head"><h2>🆓 Best Available</h2><span class="muted small">${M.available.length} frei</span></div>
      <div class="au-bactl">
        <div class="seg" role="group" aria-label="Position"><button type="button" class="seg-btn${!st.pos ? ' active' : ''}" data-pos="">Alle</button>${POS.map(p => `<button type="button" class="seg-btn${st.pos === p ? ' active' : ''}" data-pos="${p}">${p}</button>`).join('')}</div>
        ${M.PO ? `<button type="button" class="seg-btn wc-hide${st.po13 ? ' on' : ''}" data-po13 aria-pressed="${!!st.po13}" title="Nur Spieler, deren Team in den Playoffs 13–15 Spiele hat">${st.po13 ? '☑' : '☐'} PO 13+</button>` : ''}
        ${M.PLAN ? `<button type="button" class="seg-btn wc-hide${st.tgt ? ' on' : ''}" data-tgt aria-pressed="${!!st.tgt}" title="Nur Spieler aus der Zielliste">🎯 Ziele</button>` : ''}
        <button type="button" class="seg-btn wc-hide${st.uni ? ' on' : ''}" data-uni aria-pressed="${st.uni}" title="Unicorns">🦄 Unicorns</button>
        <input type="search" class="search" placeholder="Spieler, Team …" value="${e(st.q)}" data-q aria-label="Suchen">
      </div>
      <div class="table-wrap au-bascroll"><table class="table compact au-batable"><thead><tr>
        ${th('rank', '#', 'Rang nach Projections')}<th>Spieler</th>
        ${th('score', e(nba.scoreLabel()), 'Score im eingestellten Modus')}
        ${showRose ? th('rose', 'Rose', 'Rose-Score (H2H-Modell)') : ''}
        ${th('val', 'Wert', 'Auction-$ vor dem Draft')}${th('adj', 'Jetzt', 'mit aktueller Inflation')}
        ${M.MK ? th('mkt', 'Markt', 'Was Funkytown für diesen Rang typischerweise zahlt') : ''}
        ${M.PO ? th('po', 'PO', 'Playoff-Spiele ' + M.PO.rounds.join(' · ')) : ''}
        ${STATS.map(c => th(c.k, c.l, c.l + ' pro Spiel (Sortierung nach Kategorie-Wert)')).join('')}
      </tr></thead>
      <tbody data-ba>${baBody(ctx, M)}</tbody></table></div>
      <div class="muted small au-foot">Spalte antippen = sortieren (nochmal = umdrehen). „Wert“ = Auction-$ vor dem Draft, „Jetzt“ = mit Inflation ×${M.infl.toFixed(2)}${M.MK ? ', „Markt“ = was die Liga für diesen Rang historisch zahlt' : ''}${M.PO ? `, PO = Playoff-Spiele (${M.PO.rounds.join(', ')})` : ''}. Stats pro Spiel, Farbe = Kategorie-Stärke.</div>
    </div>`;
  }

  function poHtml(M, r) {
    const po = M.poOf(r);
    if (!po) return '<span class="muted">—</span>';
    const sums = Object.values(M.PO.games).map(w => w.reduce((a, b) => a + b, 0));
    const max = Math.max(...sums), min = Math.min(...sums);
    const cls = po.sum >= max ? 'hi' : po.sum <= min ? 'lo' : po.sum >= max - 1 ? 'midhi' : 'mid';
    return `<span class="wc-po ${cls}" title="${po.team} · ${M.PO.rounds.map((l, i) => `${l}: ${po.w[i]} Spiele`).join(' · ')}"><b>${po.sum}</b> <small>${po.w.join('·')}</small></span>`;
  }

  // Zielliste mit Live-Status (frei / meins / weg)
  function targetsHtml(ctx, M) {
    const e = ctx.ui.esc, P = M.PLAN; if (!P) return '';
    const item = t => {
      const d = M.drafted.get(M.nba.key(t.name));
      const mine = d && d.team === M.st.my;
      const cls = d ? (mine ? 'mine' : 'gone') : 'open';
      const stt = d ? `${mine ? '✓' : '✗'} ${e((M.byId[d.team] || {}).name || '')} ${money(d.price)}` : `≤ ${money(t.limit)}`;
      return `<li class="au-tl ${cls}" title="${e(t.note || '')}"><span>${e(t.name)}</span><b>${stt}</b></li>`;
    };
    const col = (lab, list) => `<div class="au-tcol"><div class="au-tlab">${lab}</div><ol>${list.map(item).join('')}</ol></div>`;
    const m = P.model || {};
    return `<h3>🎯 Zielliste (Reihenfolge = Priorität)</h3>
      <div class="au-tgrid">${col('1 Star', P.stars)}${col('4 Mittelbau (max. 1 aus Rang 11–20)', P.mids)}${col('9 × $1–5', P.fills)}</div>
      <div class="muted small">Optimiert auf ≥ 6 Kategorien je Woche, Ausfall eines Leistungsträgers und die Playoffs (R1/R2). Modell mit bestem Kader: Ø ${String(m.E).replace('.', ',')} Kategorien, Matchup-Sieg ${Math.round(m.p5 * 100)} %, ≥ 6 Kategorien ${Math.round(m.p6 * 100)} % der Wochen, Playoff-Sieg gegen Top-Teams ${Math.round(m.po5 * 100)} %. Limit überschritten → nächster Name.</div>`;
  }

  // ---------- Interaktiver Plan (rechte Spalte) ----------
  // Zählt automatisch aus den Zuschlägen meines Teams: Star (≥ $55),
  // Mittelbau ($15–54), Rest. Zeigt den nächsten Schritt + passende freie
  // Spieler mit Höchstgebot, gewichtet nach den schwächsten Kategorien.
  function planHtml(ctx, M) {
    const e = ctx.ui.esc, nba = M.nba, st = M.st;
    const me = st.my != null ? M.tById[st.my] : null;
    if (!me) return `<div class="card au-plancard"><div class="card-head"><h2>🧭 Mein Plan</h2></div><div class="au-gbody"><div class="muted">Unter ⚙️ Einstellungen „Mein Team“ wählen, dann führt dich der Plan durch den Draft.</div></div></div>`;
    const stars = me.own.filter(p => p.price >= 55), mids = me.own.filter(p => p.price >= 15 && p.price < 55), fills = me.own.filter(p => p.price < 15);
    const starNeed = Math.max(0, 1 - stars.length), midNeed = Math.max(0, 4 - mids.length);
    const fillNeed = Math.max(0, me.open - starNeed - midNeed);
    // Kategorien-Bedarf aus meinem Kader
    const P = teamProfile(M, me);
    const need = {}; CATS.forEach(c => { const z = P.z[c.key]; need[c.key] = P.n ? Math.max(0, 0.6 - (z || 0)) : 1; });
    const weak = P.n ? CATS.slice().sort((a, b) => (P.z[a.key] || 0) - (P.z[b.key] || 0)).slice(0, 3) : [];
    const fit = r => CATS.reduce((s, c) => s + need[c.key] * ((r.rawCats || {})[c.key] || 0), 0);
    const mk = M.MK || [];
    // Phase + Budget je Platz
    let phase, cand, cap, kind;
    const minMid = mk.length ? mk[39] : 17;
    if (starNeed) {
      kind = 'stars'; cap = Math.max(1, Math.min(me.maxBid, me.left - midNeed * minMid - fillNeed));
      cand = M.available.filter(r => r._auRank <= 5);
      phase = cand.length ? `<b>Schritt 1: Elite-Star.</b> Einer aus den Top 5, höchstens <b>${money(cap)}</b> (dann bleiben ${money(minMid)} je Mittelbau-Platz).` : '<b>Alle Top 5 sind weg.</b> Plan B: Star auslassen, dafür 5 Mittelbau-Spieler (Preisrang 11–40).';
      if (!cand.length) { kind = 'mids'; cand = M.available.filter(r => r._auRank >= 11 && r._auRank <= 40); cap = Math.max(1, Math.min(me.maxBid, Math.floor((me.left - fillNeed) / Math.max(1, midNeed + 1)) + 8)); }
    } else if (midNeed) {
      kind = 'mids'; const per = (me.left - fillNeed) / midNeed; cap = Math.max(1, Math.min(me.maxBid, Math.round(per * 1.25)));
      cand = M.available.filter(r => r._auRank >= 11 && r._auRank <= 45);
      phase = `<b>Schritt 2: Mittelbau ${mids.length + 1}/4.</b> Ø ${money(per)} je Platz frei → bis <b>${money(cap)}</b> mitgehen. Preisrang 6–10 meiden, 21–40 ist der Sweet Spot.`;
    } else if (me.open) {
      kind = 'fills'; cap = Math.max(1, Math.min(me.maxBid, Math.round(me.left / me.open * 1.5)));
      cand = M.available.filter(r => r._auRank > 40);
      phase = `<b>Schritt 3: Rest auffüllen (${me.open} offen).</b> Je Platz ~${money(me.left / me.open)}, Spezialisten für deine schwachen Kategorien.`;
    } else { kind = null; cand = []; phase = '<b>Kader voll.</b> 🎉'; }
    // Kandidaten: Ziele zuerst, dann nach Kategorien-Fit; Markt/Limit
    if (st.po13) cand = cand.filter(r => ((M.poOf(r) || {}).sum || 0) >= 13);
    const scored = cand.map(r => {
      const t = M.target.get(nba.key(r.name));
      const lim = Math.min(cap, t ? t.limit : (M.mkt(r) || 1) + 3);
      return { r, t, lim, f: fit(r) + (t && t.kind === kind ? 0.8 : 0) };
    }).filter(o => o.lim >= 1).sort((a, b) => b.f - a.f).slice(0, 6);
    const rowsHtml = scored.map(o => `<li class="au-nx" data-pick="${e(o.r.name)}"><span><b>${e(o.r.name)}</b>${o.t ? ' 🎯' : ''} <small class="muted">${e(o.r.pos || '')} · ${e(o.r.team || '')}${M.PO ? ' · PO ' + ((M.poOf(o.r) || {}).sum || '–') : ''}</small></span><span class="au-nxp">bis <b>${money(o.lim)}</b><small class="muted"> Markt ${money(M.mkt(o.r) || 1)}</small></span></li>`).join('');
    const slot = (lab, list, n) => `<div class="au-slots"><span class="au-slab">${lab}</span>${Array.from({ length: n }, (_, i) => list[i] ? `<span class="au-slot done" title="${e(list[i].player)}">✓ ${e(list[i].player.split(' ').slice(-1)[0])} ${money(list[i].price)}</span>` : '<span class="au-slot">—</span>').join('')}</div>`;
    return `<div class="card au-plancard">
      <div class="card-head"><h2>🧭 Mein Plan</h2><span class="muted small">${money(me.left)} · ${me.open} offen · max ${money(me.maxBid)}</span></div>
      <div class="au-gbody">
        ${slot('⭐ Star', stars, 1)}${slot('Mittelbau', mids, 4)}
        <div class="au-slots"><span class="au-slab">Rest</span><span class="au-slot${fills.length ? ' done' : ''}">${fills.length}/${Math.max(fills.length, st.size - 5)}${fills.length ? ' · ' + money(fills.reduce((a, p) => a + p.price, 0)) : ''}</span></div>
        <div class="au-plan">${phase}</div>
        ${weak.length ? `<div class="small au-need">Schwächste Kategorien: ${weak.map(c => `<b>${c.label}</b>`).join(', ')} → Vorschläge sind danach sortiert.</div>` : ''}
        ${rowsHtml ? `<h3>Jetzt bieten auf</h3><ol class="au-nxlist">${rowsHtml}</ol>` : ''}
        <details class="au-tdet"><summary class="small">🎯 Ganze Zielliste</summary>${targetsHtml(ctx, M)}</details>
      </div>
    </div>`;
  }

  // ---------- Gegner-Radar: Bietverhalten aus der Historie + Live-Stand ----------
  // AUCTION_TEAMS (auction-history.js): je heutigem Team Max-Preis, Anzahl
  // Käufe ≥ $40 / $10–39 / ≤ $2 pro Saison. Live: was hat das Team davon schon
  // gekauft → was kommt wahrscheinlich noch, bis zu welchem Preis.
  function oppRead(M, x, H) {
    const h = H && H[x.t.id]; if (!h) return null;
    const sm = h.summary;
    const n40 = x.own.filter(p => p.price >= 40).length, nMid = x.own.filter(p => p.price >= 10 && p.price < 40).length;
    const mids = h.seasons.flatMap(s => s.mids || []).sort((a, b) => a - b);
    const midHi = mids.length ? mids[Math.floor(mids.length * 0.75)] : 25;
    const curMax = x.own.reduce((m, p) => Math.max(m, p.price), 0);
    let cap, why;
    if (!x.open) { cap = 0; why = 'Kader voll'; }
    else if (n40 < Math.round(sm.n40Avg)) { cap = Math.min(x.maxBid, Math.round(Math.max(sm.maxAvg, 45))); why = `sucht noch ${Math.round(sm.n40Avg) - n40}× ≥ $40 (hist. Ø ${String(sm.n40Avg).replace('.', ',')})`; }
    else if (nMid < Math.round(sm.nMidAvg)) { cap = Math.min(x.maxBid, midHi); why = `noch ${Math.round(sm.nMidAvg) - nMid}× $10–39 typisch (bis ~${money(midHi)})`; }
    else { cap = Math.min(x.maxBid, Math.max(3, Math.round(x.left / Math.max(1, x.open) * 1.5))); why = 'Muster erfüllt, eher nur noch günstig'; }
    const over = curMax > sm.maxEver ? `schon ${money(curMax)} > hist. Max` : '';
    return { sm, n40, nMid, cap, why, over };
  }
  function oppHtml(ctx, M) {
    const e = ctx.ui.esc, H = ctx.data.AUCTION_TEAMS; if (!H) return '';
    const list = M.T.filter(x => x.t.id !== M.st.my).map(x => ({ x, o: oppRead(M, x, H) })).filter(r => r.o).sort((a, b) => b.o.cap - a.o.cap);
    const rows = list.map(({ x, o }) => `<li class="au-opp" style="${M.nba.tcStyle(x.t)}" title="${e(o.why)}">
        <span class="au-oppn"><span class="au-dot"></span><b>${e(x.t.name)}</b><small class="muted">${e(o.sm.style)} · hist. Max ${money(o.sm.maxEver)} (Ø ${money(o.sm.maxAvg)}) · ${o.sm.seasons} Saison${o.sm.seasons > 1 ? 's' : ''}</small><small>${e(o.why)}${o.over ? ` · <span class="down">${e(o.over)}</span>` : ''}</small></span>
        <span class="au-oppc">${x.open ? `bis ~<b>${money(o.cap)}</b>` : '—'}<small class="muted">max ${money(x.maxBid)}</small></span></li>`).join('');
    const top = list[0], second = list[1];
    const tip = top ? `Höchstes erwartetes Gebot: <b>${e(top.x.t.name)}</b> ~${money(top.o.cap)}${second ? `, danach ${e(second.x.t.name)} ~${money(second.o.cap)}` : ''}. Bei teuren Spielern über ~${money(second ? second.o.cap : top.o.cap)} bleibt meist nur einer übrig.` : '';
    return `<details class="card au-oppcard" data-opp${M.st.oppOpen !== false ? ' open' : ''}>
      <summary class="card-head"><h2>🕵️ Gegner-Radar</h2><span class="muted small">aus Funkytown 2021–26</span></summary>
      <div class="au-gbody"><div class="small">${tip}</div><ol class="au-opplist">${rows}</ol>
      <div class="muted small">„bis ~$“ = Schätzung aus dem Muster der Vorjahre (Anzahl teurer/mittlerer Käufe, typische Preise) und dem Live-Stand, gedeckelt durch das Max-Gebot. Kein Gesetz: Leute ändern ihre Strategie.</div></div>
    </details>`;
  }

  // ---------- Mini Draft Guide (Backtest Funkytown 2021–26) ----------
  // Ergebnis 09.10.2026: reines Stars & Scrubs hat sich in Funkytown nicht
  // ausgezahlt. Top-5 lohnen, Preisrang 6–10 ist überbezahlt, Preisrang
  // 21–40 liefert fast so viel wie 11–20 für ~60 % des Preises.
  function guideHtml(ctx, M) {
    const e = ctx.ui.esc, st = M.st;
    const H = (ctx.data.AUCTION_HISTORY || {}).seasons || {};
    const BT = ctx.data.AUCTION_BACKTEST || null;
    const yrs = Object.keys(H).sort();
    const last = H[yrs[yrs.length - 1]];
    const mk = M.MK || [];
    const band = (a, b) => mk.length ? `${money(mk[b - 1])}–${money(mk[a - 1])}` : '—';
    // Plan-Check für mein Team
    const me = st.my != null ? M.tById[st.my] : null;
    let plan = '<div class="muted small">Unter Einstellungen „Mein Team“ wählen, dann rechnet der Plan-Check mit.</div>';
    if (me) {
      const star = me.own.filter(p => p.price >= 55), mid = me.own.filter(p => p.price >= 15 && p.price < 55);
      const fill = Math.max(0, me.open - Math.max(0, 1 - star.length) - Math.max(0, 4 - mid.length));
      const free = me.left - fill; // was für Star + Mittelbau übrig ist, wenn der Rest $1 kostet
      let msg;
      if (!star.length) msg = `Noch kein Elite-Star. Ziel: einer aus den Top 5 (Markt ${band(1, 5)}). Dafür und für den Mittelbau sind ${money(free)} frei, wenn der Rest $1 kostet.`;
      else if (mid.length < 4) msg = `Star sitzt. Jetzt Mittelbau: noch ${4 - mid.length} Spieler aus Preisrang 21–40 (Markt ${band(21, 40)}). Im Schnitt ${money(Math.max(0, free) / Math.max(1, 4 - mid.length))} je Spieler drin.`;
      else msg = 'Star und Mittelbau stehen. Rest für $1–3: Spezialisten passend zu deinen Kategorien, 🦄 Unicorns, PO-Spiele als Tiebreaker.';
      plan = `<div class="au-plan"><b>${e(me.t.name)}:</b> ${star.length} Elite (≥ $55) · ${mid.length} Mittelbau ($15–54) · Rest ${money(me.left)} · ${me.open} offen<br>${msg}</div>`;
    }
    const btRows = BT ? BT.tiers.map(t => `<tr class="${t.ranks === '1–5' || t.ranks === '21–40' ? 'au-good' : t.ranks === '6–10' ? 'au-bad' : ''}"><td>${t.ranks}</td><td class="num">${money(t.paid)}</td><td class="num">${e(t.market10)}</td><td class="num strong">${t.medRank}</td><td class="num">${t.top50} %</td><td class="num">${t.bust} %</td></tr>`).join('') : '';
    const tiers = last ? Object.entries(last.tiers).map(([k]) => `<tr><td>Rang ${k}</td>${yrs.map(y => `<td class="num">${money(H[y].tiers[k])}</td>`).join('')}</tr>`).join('') : '';
    return `<details class="card au-guide" data-guide${st.gopen ? ' open' : ''}>
      <summary class="card-head"><h2>📚 Hintergrund: Backtest & Budgetplan</h2><span class="muted small hide-sm">Backtest Funkytown 2021–26</span></summary>
      <div class="au-gbody">
        <h3>Was der Backtest sagt</h3>
        <ul>
          <li><b>Top 5 lohnen sich.</b> Die fünf teuersten Spieler je Draft landeten im Median auf Saisonrang 6, 88 % in den Top 50.</li>
          <li><b>Preisrang 6–10 ist überbezahlt.</b> Im Schnitt ${BT ? money(BT.tiers[1].paid) : '~$60'} für Median-Rang 20, jeder Fünfte ein Totalausfall (Rang 140+).</li>
          <li><b>Sweet Spot Preisrang 21–40.</b> Für ~$28 Median-Rang 34. Fast so gut wie Preisrang 11–20 (Rang 29) für 60 % des Preises.</li>
          <li><b>Reines Stars & Scrubs hat nicht gewonnen.</b> Teams mit viel Geld in den Top 3 und vielen $1-Spielern landeten 2024–26 eher weiter hinten (Korrelation 0,4 mit dem Endplatz, nur 35 Team-Saisons, also ein Trend und kein Gesetz).</li>
          <li><b>Center werden überbezahlt:</b> 35 % Ausfälle ab $10 (Guards/Forwards 22 %).</li>
          <li>$1–5-Spieler sind im Schnitt leicht positiv. Aber nur jeder Elfte landet in den Top 50, das sind Lotterielose und keine Bausteine.</li>
        </ul>
        ${btRows ? `<div class="table-wrap"><table class="table compact au-gtiers"><thead><tr><th title="Preisrang im Draft">Preis­rang</th><th class="num" title="Ø bezahlt (11–12 Teams)">Ø $</th><th class="num" title="Markt auf 10 Teams skaliert">Markt</th><th class="num" title="Median des realen Saisonrangs">Rang</th><th class="num">Top 50</th><th class="num" title="Saisonrang schlechter als 140">Ausfall</th></tr></thead><tbody>${btRows}</tbody></table></div>
        <div class="muted small">Rang = Median des realen Saisonrangs. Saisonrang = BBM-9-Cat-Wert × Spiele (Verletzungen zählen also mit). 791 Zuschläge aus 2021, 2022, 2024, 2025, 2026. Ausfall = schlechter als Rang 140.</div>` : ''}
        <h3>Budgetplan ($${st.budget}, ${st.size} Plätze)</h3>
        <table class="table compact au-gplan"><tbody>
          <tr><td>1 Elite-Star (Top 5)</td><td class="num">${band(1, 5)}</td></tr>
          <tr><td>Preisrang 6–10 meiden</td><td class="num muted">nur mit Rabatt</td></tr>
          <tr><td>3–4 Mittelbau (Preisrang 21–40)</td><td class="num">${band(21, 40)} je</td></tr>
          <tr><td>Rest (${st.size - 5} Plätze)</td><td class="num">$1–3 je</td></tr>
        </tbody></table>
        <h3>Ablauf</h3>
        <ol>
          <li><b>Früh:</b> Einen der Top 5 kaufen, bis Markt-Preis. Kein zweiter Superstar, außer er geht deutlich unter Markt weg.</li>
          <li><b>Rang 6–20:</b> Die anderen zahlen lassen. Selbst Spieler nominieren, die du nicht willst, um Budget abzuziehen.</li>
          <li><b>Mitte:</b> Jetzt zuschlagen. Preisrang 21–40 ist der Sweet Spot, hier sind die Budgets der anderen schon angeknabbert.</li>
          <li><b>Ende:</b> $1–3-Spieler nach Kategorien-Fit, 🦄 Unicorns, PO-Spiele. Center nur mit Abschlag.</li>
          <li><b>Im Blick:</b> „Höchstes Max-Gebot Gegner“ im Liga-Überblick. Bietest du $1 darüber, bekommst du jeden Spieler.</li>
        </ol>
        ${tiers ? `<h3>Was Funkytown bezahlt hat (Ø je Preisrang)</h3><div class="table-wrap"><table class="table compact au-gtiers"><thead><tr><th></th>${yrs.map(y => `<th class="num">${y}</th>`).join('')}</tr></thead><tbody>${tiers}
          <tr><td>Spieler für $1–2</td>${yrs.map(y => `<td class="num">${H[y].cheap}/${H[y].picks}</td>`).join('')}</tr></tbody></table></div>
          <div class="muted small">2021–24 mit 11–12 Teams × 13 Plätzen, 2025–26 mit 12 × 14; 2023 war Snake. Teuerste 2026: ${last.top5.map(([n, pr]) => `${e(n)} ${money(pr)}`).join(', ')}.</div>` : ''}
        ${M.PO ? `<h3>Playoffs</h3><div class="muted small">4 von 10 Teams, zwei Runden à 2 Wochen (${M.PO.rounds.join(' · ')}). Spalte PO in Best Available = NBA-Spiele des Teams in R1·R2 (max ${Math.max(...Object.values(M.PO.games).map(w => w[0] + w[1]))}, min ${Math.min(...Object.values(M.PO.games).map(w => w[0] + w[1]))}).</div>` : ''}
      </div>
    </details>`;
  }

  function logHtml(ctx, M) {
    const e = ctx.ui.esc, nba = M.nba;
    if (!M.picks.length) return '';
    const list = M.picks.map((p, i) => ({ p, i })).reverse().map(({ p, i }) => {
      const t = M.byId[p.team]; const r = M.byKey.get(nba.key(p.player)); const v = r && !M.basic ? M.value.get(r) || 0 : null;
      return `<li style="${nba.tcStyle(t)}"><span class="au-lnum">${i + 1}</span><span class="nba-tdot"></span><b>${e(p.player)}</b>${p.espn ? ' <span class="au-espn" title="von ESPN übernommen">ESPN</span>' : ''} <span class="muted small">→ ${e(t ? t.name : '?')}</span><span class="au-rp"><b>${money(p.price)}</b>${v != null ? ` <small class="${v - p.price >= 0 ? 'up' : 'down'}">Wert ${money(v)}</small>` : ''}</span><button type="button" class="au-del" data-del="${i}" title="Zuschlag löschen" aria-label="Zuschlag ${e(p.player)} löschen">✕</button></li>`;
    }).join('');
    return `<div class="card au-log"><div class="card-head"><h2>📜 Zuschläge</h2><span class="muted small">${M.picks.length} · neueste oben</span></div><ol class="au-loglist">${list}</ol></div>`;
  }

  function settingsHtml(ctx, M) {
    const e = ctx.ui.esc, st = M.st;
    return `<details class="card au-set"${st.my == null ? ' open' : ''}>
      <summary class="card-head"><h2>⚙️ Einstellungen & Sicherung</h2></summary>
      <div class="au-setbody">
        <label class="au-f"><span>Mein Team</span><select class="tr-select" data-my><option value="">— wählen —</option>${M.T.map(x => `<option value="${x.t.id}"${st.my === x.t.id ? ' selected' : ''}>${e(x.t.name)}</option>`).join('')}</select></label>
        <label class="au-f au-fs"><span>Budget $</span><input class="tr-select" type="number" min="1" data-budget value="${st.budget}"></label>
        <label class="au-f au-fs"><span>Kaderplätze</span><input class="tr-select" type="number" min="1" max="30" data-size value="${st.size}"></label>
        ${ctx.data.TEAMS ? '' : `<label class="au-f au-fs"><span>Teams</span><input class="tr-select" type="number" min="2" max="20" data-nteams value="${st.nTeams}"></label>
        <label class="au-f au-fnames"><span>Teamnamen (eine Zeile je Team)</span><textarea class="tr-select" rows="4" data-names placeholder="Team 1&#10;Team 2 …">${e(M.T.map(x => x.t.name).join('\n'))}</textarea></label>`}
        <div class="au-setbtns">
          <button type="button" class="mp-btn" data-export>⬇️ Export</button>
          <label class="mp-btn au-import">⬆️ Import<input type="file" accept="application/json,.json" data-import hidden></label>
          <button type="button" class="mp-btn" data-reset>🗑️ Alles löschen</button>
        </div>
      </div>
      <div class="muted small au-setnote">Gespeichert wird nur in diesem Browser. Export = Datei mit allen Zuschlägen, z. B. vom Handy auf den Laptop mitnehmen.</div>
    </details>`;
  }

  // ---------- ESPN live ----------
  // Zwei Wege, beide optional:
  //  1) GitHub: Workflow funkytown-live-auction.yml schreibt
  //     leagues/funkytown/data/live-auction.js, die Seite holt sie alle 20 s
  //     (Verzögerung ≈ 1–2 min durch den Pages-Build).
  //  2) Bookmarklet im ESPN-Draftroom: liest dort die ESPN-API (gleiche
  //     Domain, eingeloggt) und schickt den Stand per postMessage an diese
  //     Seite — praktisch ohne Verzögerung, nur am Desktop.
  // ESPN-Zuschläge ersetzen eigene Einträge desselben Spielers; eigene
  // Einträge ohne ESPN-Gegenstück bleiben stehen.
  const LIVE = { ctx: null, timer: null, fileUpdated: undefined, last: null, src: '', err: '', count: 0, season: null };
  window.addEventListener('message', ev => {
    let host = ''; try { host = new URL(ev.origin).hostname; } catch (e) { return; }
    if (!/(^|\.)espn\.com$/.test(host)) return;
    const d = ev.data; if (!d || d.type !== 'mfhfb-espn-draft' || !d.data || !LIVE.ctx) return;
    const cfg = (LIVE.ctx.league.auctionDraft || {}).espnLive; if (!cfg) return;
    applyLive(LIVE.ctx, parseRaw(d.data, cfg), 'Bookmarklet');
  });
  function parseRaw(data, cfg) {
    const names = new Map();
    (data.teams || []).forEach(t => ((t.roster && t.roster.entries) || []).forEach(en => {
      const p = en.playerPoolEntry && en.playerPoolEntry.player; if (p && p.fullName) names.set(en.playerId || p.id, p.fullName);
    }));
    const dd = data.draftDetail || {};
    return {
      season: data.seasonId || cfg.season, inProgress: dd.inProgress === true, drafted: dd.drafted === true,
      picks: (dd.picks || []).filter(p => p.playerId > 0).map((p, i) => ({ n: p.overallPickNumber || i + 1, player: names.get(p.playerId) || `ESPN #${p.playerId}`, team: cfg.teamMap[p.teamId] != null ? cfg.teamMap[p.teamId] : null, price: p.bidAmount || 0 })),
    };
  }
  function applyLive(ctx, live, src) {
    const nba = N();
    LIVE.last = Date.now(); LIVE.src = src; LIVE.err = ''; LIVE.count = live.picks.length; LIVE.season = live.season;
    const espn = live.picks.filter(p => p.team != null).map(p => ({ player: p.player, team: p.team, price: p.price, espn: true, n: p.n }));
    const keys = new Set(espn.map(p => nba.key(p.player)));
    const cur = state(ctx).picks;
    const merged = espn.concat(cur.filter(p => !p.espn && !keys.has(nba.key(p.player))));
    const strip = a => JSON.stringify(a.map(p => [nba.key(p.player), p.team, p.price]));
    if (strip(merged) !== strip(cur)) {
      save(ctx, { picks: merged });
      const busy = document.activeElement && /INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName) && document.activeElement.value;
      if (busy) LIVE.pending = true; else ctx.refresh();
    } else paintLive();
  }
  function paintLive() {
    const el = document.querySelector('[data-livestat]'); if (!el) return;
    el.innerHTML = liveStatText();
  }
  function liveStatText() {
    if (LIVE.err) return `<span class="down">⚠️ ${LIVE.err}</span>`;
    if (!LIVE.last) return 'wartet auf ersten Stand …';
    const t = new Date(LIVE.last).toLocaleTimeString('de-DE');
    return `Stand ${t} · ${LIVE.count} Zuschläge · via ${LIVE.src}${LIVE.season && LIVE.ctx && (LIVE.ctx.league.auctionDraft.espnLive || {}).season !== LIVE.season ? ` · <b>Test-Daten Saison ${LIVE.season}</b>` : ''}`;
  }
  async function pollLive() {
    const ctx = LIVE.ctx; if (!ctx) return;
    const cfg = (ctx.league.auctionDraft || {}).espnLive;
    if (!cfg || !state(ctx).live || !/\/auction/.test(location.hash)) { clearInterval(LIVE.timer); LIVE.timer = null; return; }
    if (LIVE.src === 'Bookmarklet' && Date.now() - LIVE.last < 30000) return; // Bookmarklet ist schneller
    try {
      const r = await fetch(cfg.file.replace(/^\.\//, '') + '.js?t=' + Date.now(), { cache: 'no-store' });
      if (!r.ok) throw new Error('HTTP ' + r.status);
      const o = MFHFB.data._evaluate(await r.text(), 'live-auction.js').LIVE_AUCTION;
      if (!o) throw new Error('leer');
      if (LIVE.fileUpdated !== undefined && o.updated === LIVE.fileUpdated) { paintLive(); return; }
      LIVE.fileUpdated = o.updated;
      applyLive(ctx, o, 'GitHub');
    } catch (e) { LIVE.err = 'live-auction.js nicht ladbar (' + e.message + ')'; paintLive(); }
  }
  function bookmarklet(ctx) {
    const cfg = ctx.league.auctionDraft.espnLive;
    const hub = location.origin + location.pathname + '#/' + ctx.league.key + '/auction';
    const code = `(()=>{const H=${JSON.stringify(hub)},U='https://lm-api-reads.fantasy.espn.com/apis/v3/games/fba/seasons/${cfg.season}/segments/0/leagues/${cfg.leagueId}?view=mDraftDetail&view=mRoster&view=mTeam';let w=window.open('','mfhfb-auction');try{if(!w||w.location.href==='about:blank')w=window.open(H,'mfhfb-auction')}catch(e){}const go=()=>fetch(U,{credentials:'include'}).then(r=>r.json()).then(d=>{try{w.postMessage({type:'mfhfb-espn-draft',data:d},'*')}catch(e){}}).catch(()=>{});go();clearInterval(window.__mfhfb);window.__mfhfb=setInterval(go,4000);document.title='📡 '+document.title.replace(/^📡 /,'')})()`;
    return 'javascript:' + encodeURIComponent(code);
  }
  function liveHtml(ctx, M) {
    const cfg = M.cfg.espnLive; if (!cfg) return '';
    const on = M.st.live;
    return `<div class="au-live${on ? ' on' : ''}">
      <button type="button" class="seg-btn wc-hide${on ? ' on' : ''}" data-live aria-pressed="${on}">📡 ESPN live ${on ? 'an' : 'aus'}</button>
      <span class="muted small" data-livestat>${on ? liveStatText() : 'Zuschläge automatisch von ESPN übernehmen (Liga ' + cfg.leagueId + ')'}</span>
      ${on ? `<details class="au-bm"><summary class="small">⚡ Ohne Verzögerung (Desktop)</summary><div class="small">Diesen Link in die Lesezeichenleiste ziehen: <a class="au-bml" href="${bookmarklet(ctx)}" onclick="return false">📡 MFHFB Live</a>. Im ESPN-Draftroom (eingeloggt) einmal anklicken, dann schickt er alle 4 s den Stand an diese Seite. Popups für espn.com erlauben.</div></details>` : ''}
    </div>`;
  }

  // ---------- Paste-Import (ESPN Pick History / Draft Summary) ----------
  // Wie bei Basketball Monster: im ESPN-Draft „Pick History“ oder „Draft
  // Summary“ öffnen, Strg+A, Strg+C, hier einfügen. Erkennt Spieler (aus den
  // Projections), Preis ($xx) und Team (Teamname oder Owner) zeilenweise.
  const pnorm = s => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\b(jr|sr|ii|iii|iv)\b\.?/g, ' ').replace(/[^a-z0-9$]+/g, ' ').trim();
  function parsePaste(text, M) {
    const names = M.rows.map(r => ({ r, n: pnorm(r.name) })).filter(o => o.n.includes(' ')).sort((a, b) => b.n.length - a.n.length);
    const teams = [];
    M.teams.forEach(t => { [t.name, t.owner].filter(Boolean).forEach(v => { const n = pnorm(v); if (n.length >= 4) teams.push({ t, n }); }); });
    teams.sort((a, b) => b.n.length - a.n.length);
    const lines = String(text).split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    const L = lines.map(l => ' ' + pnorm(l) + ' ');
    const findPlayer = i => { for (const o of names) if (L[i].includes(' ' + o.n + ' ')) return o.r; return null; };
    const findTeam = i => { for (const o of teams) if (L[i].includes(' ' + o.n + ' ')) return o.t; return null; };
    const findPrice = i => { const m = lines[i].match(/\$\s?(\d{1,3})/); return m ? Number(m[1]) : null; };
    const out = [], miss = []; let cur = null;
    // Strg+A kopiert den ganzen Draftroom inkl. Spielerpool (mit $-Werten) und
    // eigener Queue. Deshalb: Spieler zählt nur, wenn ein Fantasy-Team direkt
    // dabei steht (gleiche Zeile oder die nächsten 3). Team-Überschriften
    // (Draft Summary) nur, wenn es keine einzige solche Zeile gibt.
    const near = i => { let price = findPrice(i), team = findTeam(i); for (let j = i + 1; j < Math.min(lines.length, i + 4) && (price == null || !team); j++) { if (findPlayer(j)) break; if (price == null) price = findPrice(j); if (!team) team = findTeam(j); } return { price, team }; };
    let direct = 0; for (let i = 0; i < lines.length; i++) if (findPlayer(i) && near(i).team) direct++;
    const useHeader = direct < 3;
    for (let i = 0; i < lines.length; i++) {
      const pl = findPlayer(i);
      if (!pl) { const t = findTeam(i); if (t) cur = t; continue; }
      let { price, team } = near(i);
      if (!team && useHeader) team = cur;
      if (price != null && team) out.push({ player: pl.name, team: team.id, price });
      else miss.push(pl.name + (price == null ? ' (kein Preis)' : ' (kein Team)'));
    }
    const seen = new Set();
    return { picks: out.filter(p => { const k = M.nba.key(p.player); if (seen.has(k)) return false; seen.add(k); return true; }), miss };
  }
  function pasteHtml(ctx, M) {
    return `<details class="card au-paste" data-pastebox${M.st.pasteOpen ? ' open' : ''}>
      <summary class="card-head"><h2>📋 ESPN-Paste-Import</h2><span class="muted small hide-sm">Fallback zu ESPN live</span></summary>
      <div class="au-gbody">
        <div class="small">Im ESPN-Draft <b>Pick History</b> oder <b>Draft Summary</b> öffnen, ganze Seite markieren (Strg+A), kopieren (Strg+C) und hier einfügen (Strg+V).</div>
        <textarea class="tr-select au-pastebox" rows="5" data-paste placeholder="Hier einfügen …"></textarea>
        <div class="au-setbtns"><button type="button" class="mp-btn primary" data-pastego>Importieren</button><button type="button" class="mp-btn" data-pasteclear title="Alle per Paste übernommenen Zuschläge entfernen">🗑️ Paste-Zuschläge löschen</button><span class="small" data-pasteinfo></span></div>
      </div>
    </details>`;
  }
  function applyPaste(ctx, picks) {
    const nba = N();
    const keys = new Set(picks.map(p => nba.key(p.player)));
    // Paste = kompletter Stand → alte Paste-Einträge komplett ersetzen
    const cur = state(ctx).picks.filter(p => p.src !== 'paste' && !keys.has(nba.key(p.player)));
    save(ctx, { pasteOpen: true, picks: cur.concat(picks.map(p => ({ ...p, espn: true, src: 'paste', ts: Date.now() }))) });
  }

  // ---------- PIN-Sperre ----------
  function gateHtml(ctx) {
    return `<div class="au-gate card">
      <div class="au-glock">🔒</div>
      <h2>Auction Draft</h2>
      <form data-gate autocomplete="off">
        <label class="au-f"><span>4stellige Pin</span><input class="tr-select au-pin" type="password" inputmode="numeric" data-pin placeholder="••••" aria-label="4stellige Pin" autofocus></label>
        <button type="submit" class="mp-btn primary">Öffnen</button>
      </form>
      <div class="au-err" data-gerr></div>
    </div>`;
  }
  function mountGate(root, ctx) {
    const f = root.querySelector('[data-gate]'), inp = root.querySelector('[data-pin]'), err = root.querySelector('[data-gerr]');
    if (!f) return;
    f.addEventListener('submit', ev => {
      ev.preventDefault();
      if (inp.value.trim() === PIN) { try { localStorage.setItem(PIN_KEY, PIN); } catch (e) { /* egal */ } ctx.refresh(); }
      else { err.textContent = '⚠️ Falsche Pin.'; inp.value = ''; inp.focus(); }
    });
    inp.focus();
  }

  // ---------- Seite ----------
  function render(ctx) {
    const { data, ui } = ctx;
    if ((ctx.league.auctionDraft || {}).pin && !unlocked()) { ctx._auLocked = true; return gateHtml(ctx); }
    ctx._auLocked = false;
    if (!data.PROJECTIONS_CONSENSUS) return ui.empty('Keine Projections', 'PROJECTIONS_CONSENSUS fehlt für diese Liga.', '💰');
    const M = model(ctx);
    ctx._au = M;
    const me = M.st.my != null ? M.tById[M.st.my] : null;
    const filled = M.picks.length;
    // Manueller Eintrag: in der Vollversion aus (ESPN live/Paste), per Config oder ?manual aktivierbar
    const manual = M.basic || M.cfg.manualEntry !== false || M.st.manual;
    return `<div class="au-wrap${M.basic ? ' au-basicwrap' : ''}">
      <div class="page-head"><h1 class="page-title display">💰 Auction Draft</h1>
        <div class="page-sub">${M.T.length} Teams · ${money(M.st.budget)} · ${M.st.size} Plätze · ${filled} von ${M.slots} vergeben · ${money(M.moneyLeft)} übrig${M.basic ? '' : ` · Inflation ×${M.infl.toFixed(2)}`}<span class="explain"> · alles bleibt in deinem Browser</span></div></div>
      ${me ? `<div class="au-mebar" style="${M.nba.tcStyle(me.t)}"><span class="nba-tdot"></span><b>${ui.esc(me.t.name)}</b><span>Rest <b>${money(me.left)}</b></span><span>Max-Gebot <b>${money(me.maxBid)}</b></span><span>Offen <b>${me.open}</b></span><span>Ø je Platz <b>${me.open ? money(me.left / me.open) : '—'}</b></span>${!M.basic && M.PO ? (() => { const w = M.PO.rounds.map((_, i) => me.own.reduce((s, p) => { const po = M.poOf(M.byKey.get(M.nba.key(p.player))); return s + (po ? po.w[i] : 0); }, 0)); return `<span>PO-Spiele <b>${w.join(' · ')}</b></span>`; })() : ''}</div>` : ''}
      ${liveHtml(ctx, M)}
      ${M.basic ? `${overviewHtml(ctx, M)}
      <div class="au-grid au-basic">
        <div class="au-main">${entryHtml(ctx, M)}${budgetsHtml(ctx, M)}${logHtml(ctx, M)}${settingsHtml(ctx, M)}</div>
      </div>` : `
      <div class="au-top">${pasteHtml(ctx, M)}${manual ? entryHtml(ctx, M) : ''}</div>
      <div class="au-grid3">
        <section class="au-center">${baHtml(ctx, M)}</section>
        <aside class="au-right">${planHtml(ctx, M)}${oppHtml(ctx, M)}${M.cfg.guide ? guideHtml(ctx, M) : ''}</aside>
      </div>
      ${overviewHtml(ctx, M)}
      <div class="au-grid2">
        <div>${budgetsHtml(ctx, M)}</div>
        <div>${logHtml(ctx, M)}${settingsHtml(ctx, M)}</div>
      </div>`}
    </div>`;
  }

  function mount(root, ctx) {
    if (ctx._auLocked) return mountGate(root, ctx);
    const M = ctx._au || model(ctx);
    const nba = M.nba, e = ctx.ui.esc;
    const form = root.querySelector('[data-form]');
    const inP = root.querySelector('[data-player]'), inT = root.querySelector('[data-team]'), inPr = root.querySelector('[data-price]');
    const hint = root.querySelector('[data-hint]');

    function check() {
      const name = inP.value.trim(), tid = Number(inT.value), price = Number(inPr.value);
      const r = name ? M.byKey.get(nba.key(name)) : null;
      const x = tid ? M.tById[tid] : null;
      const msgs = [];
      let err = null;
      if (name && M.drafted.has(nba.key(name))) { const d = M.drafted.get(nba.key(name)); err = `${name} ist schon vergeben (${(M.byId[d.team] || {}).name} für ${money(d.price)}).`; }
      if (r) msgs.push(`<b>${e(r.name)}</b> · ${e(r.team || '')} ${e(r.pos || '')}` + (M.basic ? '' : ` · Wert <b>${money(M.value.get(r) || 0)}</b> · jetzt <b>${money(M.adj(r))}</b>`));
      else if (name && !M.basic) msgs.push(`<span class="muted">„${e(name)}“ hat keine Projection — wird trotzdem eingetragen.</span>`);
      if (x) {
        msgs.push(`${e(x.t.name)}: Rest ${money(x.left)} · Max-Gebot <b>${money(x.maxBid)}</b>`);
        if (!x.open) err = err || `${x.t.name} hat keinen freien Kaderplatz mehr.`;
        else if (price && price > x.maxBid) err = err || `${money(price)} ist mehr als das Max-Gebot von ${x.t.name} (${money(x.maxBid)}).`;
      }
      if (inPr.value && (!Number.isInteger(price) || price < 1)) err = err || 'Preis muss eine ganze Zahl ab $1 sein.';
      hint.innerHTML = (msgs.length ? `<div>${msgs.join('<br>')}</div>` : '') + (err ? `<div class="au-err">⚠️ ${e(err)}</div>` : '');
      return !err;
    }
    if (form) [inP, inT, inPr].forEach(el => el.addEventListener('input', check));
    if (form) form.addEventListener('submit', ev => {
      ev.preventDefault();
      if (!check()) return;
      const name = inP.value.trim(), tid = Number(inT.value), price = Number(inPr.value);
      if (!name || !tid || !price) return;
      const r = M.byKey.get(nba.key(name));
      const picks = state(ctx).picks.concat([{ player: r ? r.name : name, team: tid, price, ts: Date.now() }]);
      save(ctx, { picks, lastTeam: null });
      ctx.refresh();
      requestAnimationFrame(() => { const p = document.querySelector('[data-player]'); if (p) p.focus(); });
    });

    const gd = root.querySelector('[data-guide]');
    if (gd) gd.addEventListener('toggle', () => save(ctx, { gopen: gd.open }));

    // Best Available
    const baTbody = root.querySelector('[data-ba]');
    const pickTo = name => { if (!form) return; inP.value = name; check(); inPr.focus(); form.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); };
    const bindBa = () => baTbody && baTbody.querySelectorAll('[data-pick]').forEach(tr => tr.addEventListener('click', () => pickTo(tr.dataset.pick)));
    bindBa();
    root.querySelectorAll('.au-nx[data-pick]').forEach(li => li.addEventListener('click', () => pickTo(li.dataset.pick)));
    root.querySelectorAll('[data-bsort]').forEach(th => th.addEventListener('click', () => {
      const k = th.dataset.bsort, cur = state(ctx);
      const curK = cur.bsort || 'rank', curD = cur.bdir || (BA_ASC[curK] ? 'asc' : 'desc');
      const dir = curK === k ? (curD === 'desc' ? 'asc' : 'desc') : (BA_ASC[k] ? 'asc' : 'desc');
      save(ctx, { bsort: k, bdir: dir }); ctx.refresh();
    }));
    const p13 = root.querySelector('[data-po13]');
    if (p13) p13.addEventListener('click', () => { save(ctx, { po13: !state(ctx).po13 }); ctx.refresh(); });
    // Paste-Import
    const od = root.querySelector('[data-opp]');
    if (od) od.addEventListener('toggle', () => save(ctx, { oppOpen: od.open }));
    const pb = root.querySelector('[data-pastebox]');
    if (pb) pb.addEventListener('toggle', () => save(ctx, { pasteOpen: pb.open }));
    const pc = root.querySelector('[data-pasteclear]');
    if (pc) pc.addEventListener('click', () => { const all = state(ctx).picks; const n = all.filter(p => p.src === 'paste').length; if (!window.confirm(`${n} Paste-Zuschläge löschen?`)) return; save(ctx, { picks: all.filter(p => p.src !== 'paste') }); ctx.refresh(); });
    const pg = root.querySelector('[data-pastego]');
    if (pg) pg.addEventListener('click', () => {
      const ta = root.querySelector('[data-paste]'), info = root.querySelector('[data-pasteinfo]');
      const res = parsePaste(ta.value, M);
      if (!res.picks.length) { info.innerHTML = `<span class="down">⚠️ Keine Zuschläge erkannt${res.miss.length ? ` (${res.miss.length} Spieler ohne Preis/Team)` : ''}.</span>`; return; }
      applyPaste(ctx, res.picks);
      LIVE.last = Date.now(); LIVE.src = 'Paste'; LIVE.count = res.picks.length;
      const per = {}; res.picks.forEach(p => { const n = (M.byId[p.team] || {}).name || '?'; per[n] = (per[n] || 0) + 1; });
      window.alert(`${res.picks.length} Zuschläge übernommen (${Object.entries(per).map(([n, c]) => n + ' ' + c).join(', ')}).${res.miss.length ? `\nNicht erkannt: ${res.miss.slice(0, 8).join(', ')}${res.miss.length > 8 ? ' …' : ''}` : ''}`);
      ctx.refresh();
    });
    root.querySelectorAll('[data-pos]').forEach(b => b.addEventListener('click', () => { save(ctx, { pos: b.dataset.pos }); ctx.refresh(); }));
    const q = root.querySelector('[data-q]');
    if (q) q.addEventListener('input', () => { save(ctx, { q: q.value }); M.st.q = q.value; baTbody.innerHTML = baBody(ctx, M); bindBa(); });

    // Teams auf-/zuklappen
    root.querySelectorAll('[data-open]').forEach(tr => {
      const toggle = () => { const id = Number(tr.dataset.open); save(ctx, { open: state(ctx).open === id ? null : id }); ctx.refresh(); };
      tr.addEventListener('click', toggle);
      tr.addEventListener('keydown', ev => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); toggle(); } });
    });

    // Zuschläge löschen
    root.querySelectorAll('[data-del]').forEach(b => b.addEventListener('click', () => {
      const i = Number(b.dataset.del); const picks = state(ctx).picks.slice(); const p = picks[i];
      if (!p || !window.confirm(`Zuschlag löschen: ${p.player} für ${money(p.price)}?`)) return;
      picks.splice(i, 1); save(ctx, { picks }); ctx.refresh();
    }));

    // Einstellungen
    const my = root.querySelector('[data-my]');
    if (my) my.addEventListener('change', () => { save(ctx, { my: my.value ? Number(my.value) : null }); ctx.refresh(); });
    const num = (sel, key, lo, hi) => { const el = root.querySelector(sel); if (el) el.addEventListener('change', () => { const v = Math.round(Number(el.value)); if (v >= lo && v <= hi) { save(ctx, { [key]: v }); ctx.refresh(); } }); };
    num('[data-budget]', 'budget', 1, 100000);
    num('[data-size]', 'size', 1, 30);
    num('[data-nteams]', 'nTeams', 2, 20);
    const nm = root.querySelector('[data-names]');
    if (nm) nm.addEventListener('change', () => { save(ctx, { teamNames: nm.value.split('\n').map(x => x.trim()) }); ctx.refresh(); });
    // ESPN live
    LIVE.ctx = ctx; try { window.name = 'mfhfb-auction'; } catch (e) { /* egal */ }
    if (LIVE.pending) { LIVE.pending = false; }
    const lv = root.querySelector('[data-live]');
    if (lv) lv.addEventListener('click', () => { const on = !state(ctx).live; save(ctx, { live: on }); if (!on) { clearInterval(LIVE.timer); LIVE.timer = null; } ctx.refresh(); });
    if (M.cfg.espnLive && M.st.live && !LIVE.timer) { LIVE.timer = setInterval(pollLive, 20000); pollLive(); }
    const flush = () => { if (LIVE.pending) { LIVE.pending = false; ctx.refresh(); } };
    root.querySelectorAll('input,select').forEach(el => el.addEventListener('blur', () => setTimeout(() => { if (!document.activeElement || !/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) flush(); }, 50)));
    const tg = root.querySelector('[data-tgt]');
    if (tg) tg.addEventListener('click', () => { save(ctx, { tgt: !state(ctx).tgt }); ctx.refresh(); });
    const un = root.querySelector('[data-uni]');
    if (un) un.addEventListener('click', () => { save(ctx, { uni: !state(ctx).uni }); ctx.refresh(); });
    const ex = root.querySelector('[data-export]');
    if (ex) ex.addEventListener('click', () => {
      const blob = new Blob([JSON.stringify({ liga: ctx.league.key, exportiert: new Date().toISOString(), ...AS(ctx).get() }, null, 1)], { type: 'application/json' });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `${ctx.league.key}-auction-${new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-')}.json`; a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    });
    const im = root.querySelector('[data-import]');
    if (im) im.addEventListener('change', () => {
      const f = im.files && im.files[0]; if (!f) return;
      f.text().then(txt => {
        const o = JSON.parse(txt);
        if (!o || !Array.isArray(o.picks)) throw new Error('Keine Zuschläge in der Datei.');
        if (!window.confirm(`Import ersetzt den aktuellen Stand durch ${o.picks.length} Zuschläge. Fortfahren?`)) return;
        const { liga, exportiert, ...rest } = o; // eslint-disable-line no-unused-vars
        AS(ctx).set(rest); ctx.refresh();
      }).catch(err => window.alert('Import fehlgeschlagen: ' + err.message));
    });
    const rs = root.querySelector('[data-reset]');
    if (rs) rs.addEventListener('click', () => {
      if (!window.confirm('Wirklich alle Zuschläge löschen? (Vorher exportieren, falls du sie noch brauchst.)')) return;
      save(ctx, { picks: [] }); ctx.refresh();
    });
  }

  MFHFB.pages.register({
    id: 'auction', section: 'draft', label: 'Auction Draft', icon: '💰', applies: { sport: ['nba'] },
    when: league => !!league.auctionDraft,
    data: ['?teams', '?rosters-live', '?sport:aliases', '?auction-history', '?auction-plan', 'sport:projections-consensus'],
    title: () => 'Auction Draft', render, mount,
  });
})();
