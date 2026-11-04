// ============================================================
//  Tool: College Scouting (NFL) — Prospect-Comps
// ============================================================
//  #/<liga>/collegescouting                 → letzte Auswahl
//  #/<liga>/collegescouting/<pos>/<id>      → Prospect direkt (teilbar)
//
//  Neu gebaut nach Bear-Witch-Project-HQ/js/college-scouting-card.js.
//  Zwei Vergleiche pro Prospect, STRIKT sprachlich getrennt (siehe
//  claude/college-scouting-concept.md):
//    🎓 College Production Comp — „Produziert wie …“ (reine On-Field-
//       Produktion, sport:college-scouting → COLLEGE_SCOUTING.comps)
//    🏈 NFL Profile Comp — „Profiliert wie …“ (Pre-Draft-Rollenarchetyp,
//       KEINE Erfolgsprognose; sport:nfl-profile-comp → NFL_PROFILE_COMP)
//  NIEMALS „wird so gut wie“ o.ä. — beides sind Ähnlichkeits-, keine
//  Erfolgsvergleiche.
//
//  Datenmenge: college-scouting ≈ 12 MB, nfl-profile-comp ≈ 4 MB. Die Seite
//  wartet nur auf die erste Datei; der NFL Profile Comp wird in mount()
//  nachgeladen. Beides ist sportweit gecacht (einmal für alle NFL-Ligen).
// ============================================================

(function () {
  const POS = ['WR', 'RB', 'TE', 'QB'];
  const WINDOWS = [1, 2, 3, 4];
  const PRIMARY = { WR: 'yds', TE: 'yds', RB: 'rushYds', QB: 'passYds' };
  const PRIMARY_LABEL = { WR: 'Rec-Yds', TE: 'Rec-Yds', RB: 'Rush-Yds', QB: 'Pass-Yds' };
  // Anzeige-Labels für FEATURES (sync-college-scouting.js) und MATCH_FEATURES
  // (build-nfl-profile-comp.js) — rein präsentational.
  const FEATURE_LABELS = {
    recShare: 'Target Share', ydShare: 'Yard Share', tdShare: 'TD Share',
    avgPPA: 'PPA/Play', usageOverall: 'Usage',
    rushCarShare: 'Carry Share', recYdShare: 'Rec-Yard Share',
    avgPpaRush: 'Rush-PPA', avgPpaPass: 'Pass-PPA', usageRush: 'Rush-Usage',
    usagePass: 'Pass-Usage', compPct: 'Comp %',
    heightIn: 'Größe', weightLb: 'Gewicht',
  };
  // Kurzstats unter dem Namen (nur Felder, die im Datensatz vorhanden sind)
  const STAT_LINE = {
    WR: [['rec', 'Rec'], ['yds', 'Yds'], ['td', 'TD']],
    TE: [['rec', 'Rec'], ['yds', 'Yds'], ['td', 'TD']],
    RB: [['rushCar', 'Car'], ['rushYds', 'Yds'], ['rushTd', 'TD'], ['recYds', 'Rec-Yds']],
    QB: [['passAtt', 'Att'], ['passYds', 'Pass-Yds'], ['passTd', 'TD'], ['compPct', 'Comp %'], ['rushYds', 'Rush-Yds']],
  };

  const normKey = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/\b(jr|sr|ii|iii|iv|v)\b\.?/g, '').replace(/[^a-z0-9]/g, '');
  const defaults = { pos: 'WR', win: 2, q: '', sel: null, elig: false, sort: 'stat', fmt: null };
  let RENV = null; // Draft-Range-Daten (einmal geladen, für Liste + Box)
  const getState = ctx => ({ ...defaults, ...ctx.store.getJSON('cs', {}) });
  // Welcher Comp gerade im Radar liegt — flüchtig, pro Prospect
  const picked = { prod: null, nfl: null, for: null };

  const winLabel = (n, cur) => (n === 1 ? `Nur ${cur}` : n >= 4 ? 'Letzte 4 Jahre' : `${cur - n + 1}–${cur}`);
  const heightFmt = inch => (inch ? `${Math.floor(inch / 12)}'${inch % 12}"` : null);

  // ============================================================
  //  SAISON-MIX (04.11.2026) — eine Zeile pro Spieler
  // ============================================================
  //  Die Liste rankt Spieler, nicht Spieler-Saisons. Das Zeitfenster oben
  //  bestimmt, welche Saisons in den Mix einfließen. Gewichte nach Aktualität
  //  50/30/20/10 %, die laufende Saison anteilig nach Saisonfortschritt
  //  (gleiche Formel wie volumeFactor() im Sync-Script). Der Mix mittelt die
  //  Rate-/Share-Features (Volumen über Saisons zu mitteln wäre bei einer halb
  //  gespielten Saison unfair). Comps für den Mix werden hier live gerechnet:
  //  Mahalanobis auf denselben z-standardisierten Features wie im Sync-Script
  //  (Production Comp: kompletter CFBD-Pool, NFL Profile Comp:
  //  NFL_PROFILE_COMP.pool). Draft Range: gewichtetes Mittel der Saison-z-Werte.
  const RECENCY_W = [0.5, 0.3, 0.2, 0.1];
  const MX = (() => {
    const cache = {}, spaces = {};
    const progress = C => {
      const y = C.meta.currentSeason, t = Date.parse(C.meta.lastSync) || Date.now();
      return Math.max(0.25, Math.min(1, (t - Date.UTC(y, 7, 24)) / (7 * 864e5) / 13));
    };
    function mixRecord(C, pos, ss, w, win) {
      const L = ss[0], feats = (C.meta.features || {})[pos] || [];
      const m = { id: `mix${win}_${L.rawId}`, rawId: String(L.rawId), name: L.name, team: L.team, conf: L.conf, year: L.year,
        mix: true, seasons: ss, w, latest: L,
        heightIn: (ss.find(s => s.heightIn) || {}).heightIn || null, weightLb: (ss.find(s => s.weightLb) || {}).weightLb || null };
      feats.forEach(f => {
        let a = 0, b = 0;
        ss.forEach((s, i) => { if (s[f] != null && !isNaN(s[f])) { a += w[i] * s[f]; b += w[i]; } });
        m[f] = b ? a / b : null;
      });
      return m;
    }
    // Spieler im Fenster: { rawId, seasons (neueste zuerst), w, latest, mix (nur bei ≥ 2 Saisons) }
    function players(C, pos, win) {
      const key = pos + '|' + win + '|' + C.meta.lastSync;
      if (cache[key]) return cache[key];
      const cur = C.meta.currentSeason, prog = progress(C), by = new Map();
      (C.recent[pos] || []).forEach(r => {
        if (r.year <= cur - win) return;
        const k = String(r.rawId);
        if (!by.has(k)) by.set(k, []);
        if (!by.get(k).some(x => x.year === r.year)) by.get(k).push(r);
      });
      const out = [];
      by.forEach((ss, rawId) => {
        ss.sort((a, b) => b.year - a.year);
        const raw = ss.map((s, i) => RECENCY_W[Math.min(i, RECENCY_W.length - 1)] * (s.year === cur ? prog : 1));
        const tot = raw.reduce((t, x) => t + x, 0) || 1;
        const w = raw.map(x => x / tot);
        out.push({ rawId, seasons: ss, w, latest: ss[0], mix: ss.length > 1 ? mixRecord(C, pos, ss, w, win) : null });
      });
      return (cache[key] = out);
    }
    // --- Mahalanobis-Raum (identisch zu computeComps im Sync-Script) ---
    function invert(m) {
      const d = m.length;
      const A = m.map((row, i) => [...row, ...Array.from({ length: d }, (_, j) => (i === j ? 1 : 0))]);
      for (let col = 0; col < d; col++) {
        let pv = col;
        for (let r = col + 1; r < d; r++) if (Math.abs(A[r][col]) > Math.abs(A[pv][col])) pv = r;
        [A[col], A[pv]] = [A[pv], A[col]];
        if (Math.abs(A[col][col]) < 1e-10) A[col][col] += 1e-6;
        const p = A[col][col];
        for (let c = 0; c < 2 * d; c++) A[col][c] /= p;
        for (let r = 0; r < d; r++) { if (r === col) continue; const f = A[r][col]; for (let c = 0; c < 2 * d; c++) A[r][c] -= f * A[col][c]; }
      }
      return A.map(row => row.slice(d));
    }
    function space(items) { // items: [{v:[...], ...}]
      const n = items.length, d = items[0].v.length, mu = [], sd = [];
      for (let j = 0; j < d; j++) {
        const m = items.reduce((t, x) => t + x.v[j], 0) / n;
        mu.push(m); sd.push(Math.sqrt(items.reduce((t, x) => t + (x.v[j] - m) ** 2, 0) / n) || 1);
      }
      const z = v => v.map((x, j) => (x - mu[j]) / sd[j]);
      items.forEach(x => { x.z = z(x.v); });
      const zm = Array.from({ length: d }, (_, j) => items.reduce((t, x) => t + x.z[j], 0) / n);
      const cov = Array.from({ length: d }, () => Array(d).fill(0));
      items.forEach(x => { for (let i = 0; i < d; i++) for (let j = 0; j < d; j++) cov[i][j] += (x.z[i] - zm[i]) * (x.z[j] - zm[j]); });
      for (let i = 0; i < d; i++) for (let j = 0; j < d; j++) cov[i][j] /= (n - 1);
      const sorted = Array.from({ length: d }, (_, j) => items.map(x => x.v[j]).sort((a, b) => a - b));
      return { items, z, inv: invert(cov), sorted };
    }
    function dist(a, b, inv) {
      const df = a.map((x, i) => x - b[i]); let s = 0;
      for (let i = 0; i < df.length; i++) for (let j = 0; j < df.length; j++) s += df[i] * inv[i][j] * df[j];
      return Math.sqrt(Math.max(0, s));
    }
    function pctl(v, sorted) {
      let lo = 0, hi = sorted.length;
      while (lo < hi) { const mid = (lo + hi) >> 1; if (sorted[mid] <= v) lo = mid + 1; else hi = mid; }
      return Math.round((lo / sorted.length) * 1000) / 10;
    }
    function nearest(S, feats, me, skip, n = 10) {
      const v = feats.map(f => me[f]);
      if (v.some(x => x == null || isNaN(x))) return { comps: [], perc: null };
      const tz = S.z(v);
      const comps = S.items.filter(x => !skip(x)).map(x => ({ x, d: dist(tz, x.z, S.inv) }))
        .sort((a, b) => a.d - b.d).slice(0, n).map(({ x, d }) => Object.assign({}, x.meta, { dist: Math.round(d * 1000) / 1000 }));
      const perc = {}; feats.forEach((f, j) => { perc[f] = pctl(v[j], S.sorted[j]); });
      return { comps, perc };
    }
    const memo = {};
    function prod(C, pos, me) {
      if (memo[me.id + '|p']) return memo[me.id + '|p'];
      const feats = (C.meta.features || {})[pos] || [];
      if (!spaces['p' + pos]) {
        const items = [];
        Object.keys(C.seasons || {}).forEach(y => (((C.seasons[y] || {})[pos]) || []).forEach(r => {
          const v = feats.map(f => r[f]);
          if (v.every(x => x != null && !isNaN(x))) items.push({ v, rawId: String(r.rawId), meta: { id: r.id, name: r.name, team: r.team, year: r.year } });
        }));
        spaces['p' + pos] = items.length >= 30 ? space(items) : null;
      }
      const S = spaces['p' + pos];
      return (memo[me.id + '|p'] = S ? nearest(S, feats, me, x => x.rawId === me.rawId) : { comps: [], perc: null });
    }
    function nfl(N, pos, me) {
      if (memo[me.id + '|n']) return memo[me.id + '|n'];
      const feats = (N.meta.matchFeatures || {})[pos] || [];
      if (!spaces['n' + pos]) {
        const items = ((N.pool || {})[pos] || []).map(r => ({ v: r.v, meta: { id: r.id, name: r.name, team: r.team, year: r.year, draftYear: r.draftYear, draftRound: r.draftRound, draftPick: r.draftPick, ras: r.ras } }));
        spaces['n' + pos] = items.length >= 30 ? space(items) : null;
      }
      const S = spaces['n' + pos];
      return (memo[me.id + '|n'] = S ? nearest(S, feats, me, () => false) : null);
    }
    return { players, prod, nfl, progress };
  })();

  // Ausgewählte Ansicht: 'mix' oder ein Saison-Jahr
  function viewOf(pl, season) {
    if (!pl) return null;
    if ((season === 'mix' || season === 'auto' || !season) && pl.mix) return pl.mix;
    return pl.seasons.find(s => String(s.year) === String(season)) || pl.mix || pl.latest;
  }
  const bestStat = (pl, stat) => Math.max(...pl.seasons.map(s => s[stat] || 0));
  const yrsLabel = pl => {
    const ys = pl.seasons.map(s => s.year).sort((a, b) => a - b);
    return ys.length > 1 ? `${ys[0]}–${String(ys[ys.length - 1]).slice(2)}` : String(ys[0]);
  };

  function resolve(ctx) {
    const C = ctx.data.COLLEGE_SCOUTING;
    const st = getState(ctx);
    let [pp, id, se] = ctx.params;
    // alte Links/gespeicherte Auswahl im Format <Saison>_<rawId>
    if (id && id.includes('_')) { const k = id.indexOf('_'); se = se || id.slice(0, k); id = id.slice(k + 1); }
    if (st.sel && String(st.sel).includes('_')) st.sel = String(st.sel).split('_').pop();
    if (POS.includes(pp)) st.pos = pp;
    if (id) st.sel = id;
    if (!WINDOWS.includes(st.win)) st.win = 2;
    const cur = C.meta.currentSeason, stat = PRIMARY[st.pos];
    let pls = MX.players(C, st.pos, st.win);
    if (!st.sel || !pls.some(p => p.rawId === String(st.sel))) {
      // Direkt verlinkter Prospect außerhalb des Fensters → Fenster öffnen statt ignorieren
      const linked = id && (C.recent[st.pos] || []).filter(p => String(p.rawId) === id).sort((a, b) => b.year - a.year)[0];
      if (linked) { st.win = Math.min(4, Math.max(st.win, cur - linked.year + 1)); pls = MX.players(C, st.pos, st.win); }
      else st.sel = (pls.slice().sort((a, b) => bestStat(b, stat) - bestStat(a, stat))[0] || {}).rawId || null;
    }
    st.sel = st.sel != null ? String(st.sel) : null;
    st.season = se || 'auto';
    return st;
  }
  const playerOf = (ctx, st) => MX.players(ctx.data.COLLEGE_SCOUTING, st.pos, st.win).find(p => p.rawId === st.sel) || null;

  // ============================================================
  //  📈 DRAFT RANGE (v1, 01.10.2026) — grobe Erwartung, KEINE Prognose
  // ============================================================
  //  Modell: sports/nfl/data/prospect-draft-model.js (trainiert mit
  //  sports/nfl/scripts/build-prospect-draft-model.py auf der eigenen
  //  CFBD-Historie + echten NFL-Drafts):
  //   1. Draft-Chance  = logistische Regression
  //   2. NFL-Pick       = Ridge-Regression auf ln(Pick), Band = ±0,674·sd
  //   3. Rookie-Rang    = NFL-Pick → Dynasty-Rookie-Rang über
  //      ROOKIE_DRAFT_CURVE (FantasyPros-Rookie-Rankings nach dem NFL-Draft)
  //  Features werden hier exakt wie im Trainings-Script gebaut (z je Saison
  //  + Position, College-Jahr ≤ 5, Power-Conference, Produktion × Jugend).
  //  College-Jahr = Untergrenze (erste Saison mit Mindest-Volumen in der
  //  CFBD-Historie). Draftberechtigt ab dem 3. Jahr nach der High School.
  const DR = (() => {
    let firstYear = null, zs = null;
    function first(C) {
      if (firstYear) return firstYear;
      firstYear = new Map();
      Object.keys(C.seasons || {}).forEach(y => Object.values(C.seasons[y] || {}).forEach(list => (list || []).forEach(r => {
        const k = String(r.rawId); if (!firstYear.has(k) || firstYear.get(k) > +y) firstYear.set(k, +y);
      })));
      return firstYear;
    }
    // Mittelwert/Std (n−1) je Saison + Position + Feature, wie pandas
    function zstat(C, M, pos, year) {
      zs = zs || {};
      const key = pos + '|' + year;
      if (zs[key]) return zs[key];
      const rows = ((C.seasons || {})[year] || {})[pos] || [];
      const out = {};
      M.pos[pos].base.forEach(f => {
        const v = rows.map(r => r[f]).filter(x => x != null && !isNaN(x));
        const m = v.reduce((t, x) => t + x, 0) / (v.length || 1);
        const sd = Math.sqrt(v.reduce((t, x) => t + (x - m) ** 2, 0) / Math.max(1, v.length - 1));
        out[f] = [m, sd];
      });
      return (zs[key] = out);
    }
    function collegeYear(C, me) {
      const f = first(C).get(String(me.rawId));
      return f ? me.year - f + 1 : null;
    }
    function zOf(C, M, pos, rec) {
      const st = zstat(C, M, pos, rec.year), z = {};
      M.pos[pos].base.forEach(f => { const [m, sd] = st[f] || [0, 1]; z[f] = rec[f] == null || isNaN(rec[f]) || !sd ? 0 : (rec[f] - m) / (sd + 1e-9); });
      return z;
    }
    function estimate(env, pos, rec, sf) {
      const { C, M, curve } = env, P = M.pos[pos], cv = ((sf && curve.posSF) || curve.pos)[pos];
      const me = rec.mix ? rec.latest : rec; // College-Jahr + Conference aus der neuesten Saison
      const cyear = collegeYear(C, me);
      const out = { cyear, eligible: cyear != null && cyear >= 3 };
      if (!P || !cv) return out;
      // Mix: gewichtetes Mittel der z-Werte je Saison (z wird je Saison + Position gebildet,
      // eine halb gespielte Saison wird also gegen die anderen halben Saisons gemessen)
      let z;
      if (rec.mix) {
        const zs = rec.seasons.map(s => zOf(C, M, pos, s));
        z = {}; P.base.forEach(f => { z[f] = zs.reduce((t, zz, i) => t + rec.w[i] * zz[f], 0); });
      } else z = zOf(C, M, pos, me);
      const cy = Math.min(5, cyear || 1);
      const prodYoung = P.prod.reduce((t, f) => t + z[f], 0) / P.prod.length * (4 - Math.max(1, Math.min(4, cy)));
      const x = P.features.map(f => (f.endsWith('_z') ? z[f.slice(0, -2)] : f === 'cyear' ? cy : f === 'p5' ? (M.P5.includes(me.conf) ? 1 : 0) : f === 'prodYoung' ? prodYoung : 0));
      const dot = (c, b) => c.reduce((t, k, i) => t + k * x[i], b);
      out.chance = 1 / (1 + Math.exp(-dot(P.logit.coef, P.logit.b)));
      // Ridge-Vorhersage → kalibriert (Quantil-Mapping auf die echte Pick-Verteilung)
      const interp = (v, xs, ys) => { if (v <= xs[0]) return ys[0]; for (let i = 1; i < xs.length; i++) if (v <= xs[i]) { const t = (v - xs[i - 1]) / ((xs[i] - xs[i - 1]) || 1); return ys[i - 1] + t * (ys[i] - ys[i - 1]); } return ys[ys.length - 1]; };
      const raw = dot(P.pick.coef, P.pick.b);
      const lp = P.pick.cal ? interp(raw, P.pick.cal[0], P.pick.cal[1]) : raw, sd = P.pick.sd;
      const clampPick = v => Math.max(1, Math.min(260, Math.round(v)));
      out.nfl = { lo: clampPick(Math.exp(lp - 0.674 * sd)), mid: clampPick(Math.exp(lp)), hi: clampPick(Math.exp(lp + 0.674 * sd)) };
      // Rookie-Rang: ln r = a + b·lnPick + e  →  Streuung aus Pick-Unsicherheit + Kurven-Residuen
      const sdc = (cv.q75 - cv.q25) / 1.349, off = (cv.q75 + cv.q25) / 2;
      const lr = cv.a + cv.b * Math.min(lp, Math.log(260)) + off, sdr = Math.sqrt((cv.b * sd) ** 2 + sdc ** 2);
      const r = v => Math.max(1, Math.round(Math.exp(v)));
      out.rank = { lo: r(lr - 0.674 * sdr), mid: r(lr), hi: r(lr + 0.674 * sdr) };
      out.expRank = out.chance * out.rank.mid + (1 - out.chance) * Math.exp(cv.a + cv.b * Math.log(260));
      out.bt = (M.backtest || {})[pos];
      return out;
    }
    const pickFmt = (r, T) => `${Math.ceil(r / T)}.${String(((r - 1) % T) + 1).padStart(2, '0')}`;
    const nflRound = p => (p <= 32 ? 'R1' : p <= 64 ? 'R2' : p <= 100 ? 'R3' : p <= 140 ? 'R4' : p <= 180 ? 'R5' : p <= 220 ? 'R6' : 'R7');
    return { estimate, pickFmt, nflRound, collegeYear };
  })();

  // Erklärtexte nur noch beim Hovern/Antippen der Überschrift (ⓘ)
  const tipText = html => String(html || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  const tip = (label, text) => MFHFB.ui.tip(label, text);

  // Format: Standard 1QB; Superflex, wenn die Liga superflex: true hat oder man umschaltet (je Liga gemerkt)
  const isSF = (ctx, st) => (st.fmt ? st.fmt === 'sf' : !!ctx.league.superflex);

  function rookieCfg(ctx) { return ctx.league.rookieDraft || { teams: 12, rounds: 4 }; }

  function rangeBox(ctx, st, me, env) {
    const e = MFHFB.ui.esc;
    const why = env && env.curve ? `Grobe Erwartung, keine Prognose. Gerechnet aus der gewählten Ansicht (Saison-Mix oder einzelne Saison) „als wäre es die letzte College-Saison“; beim Mix zählt das gewichtete Mittel der Saison-z-Werte: Produktion, Größe, College-Jahr und Conference → Draft-Chance + erwarteter NFL-Pick (gelernt aus allen College-Spielern seit 2013 und ihrem echten Draft-Ausgang) → typischer Dynasty-Rookie-Rang für diesen NFL-Pick (${isSF(ctx, st) && env.curve.posSF ? `FantasyPros-Dynasty-Superflex-Rankings ${env.curve.yearsSF[0]}–${env.curve.yearsSF[env.curve.yearsSF.length - 1]}, nur Rookies` : `FantasyPros-Rookie-Rankings ${env.curve.years[0]}–${env.curve.years[env.curve.years.length - 1]}, 1QB`}). Format oben rechts umschaltbar (Standard: 1QB${ctx.league.superflex ? ', diese Liga: Superflex' : ''}). ${(() => { const b = (env.M.backtest || {})[st.pos]; return b ? `Backtest ${st.pos} (Saisons ${b.test}): Draft ja/nein AUC ${String(b.aucDrafted).replace('.', ',')}, Pick-Reihenfolge ρ ${String(b.spearmanPick).replace('.', ',')} (1 = perfekt, 0 = Zufall).` : ''; })()} Nicht drin: echtes Alter, Combine, Verletzungen, Landing Spot, Scouting-Eindruck. College-Jahr ist eine Untergrenze (FCS-Transfers, Redshirt- und Saisons mit wenig Einsatz fehlen).` : 'Grobe Erwartung, keine Prognose.';
    const head = `<div class="card-head"><h2>${tip('📈 Draft Range', why)}</h2></div>`;
    if (!env) return `<div class="card cs-range">${head}<div class="muted cs-pad">Lade Modell …</div></div>`;
    if (env.error) return `<div class="card cs-range">${head}<div class="muted cs-pad">${e(env.error)}</div></div>`;
    const sf = isSF(ctx, st);
    const r = DR.estimate(env, st.pos, me, sf);
    const cfg = rookieCfg(ctx), T = cfg.teams, maxPick = T * (cfg.rounds || 4);
    const season = me.year, nextDraft = season + 1;
    const cy = r.cyear != null ? `mind. ${r.cyear}. College-Jahr laut FBS-Daten (Saison ${season})${me.mix ? ' · Basis: Saison-Mix' : ''}` : 'College-Jahr unbekannt';
    const elig = r.cyear == null ? '' : r.eligible
      ? `<span class="cs-tag ok">draftberechtigt ${nextDraft}</span>`
      : `<span class="cs-tag" title="Erst ${r.cyear} FBS-Saison(s) in der Historie. Transfers aus der FCS, Saisons unter dem Mindest-Volumen und Redshirt-Jahre fehlen -- dann ist er älter und evtl. schon ${nextDraft} berechtigt.">Draft-Berechtigung unsicher</span>`;
    if (!r.rank) return `<div class="card cs-range">${head}<div class="cs-rmeta">${e(cy)} ${elig}</div><div class="muted cs-pad">Für ${st.pos} gibt es noch kein Modell.</div></div>`;
    const rk = x => (x > maxPick ? 'nach R' + (cfg.rounds || 4) : DR.pickFmt(x, T));
    const ch = Math.round(r.chance * 100);
    return `<div class="card cs-range">${head}
      <div class="cs-rmeta"><span>${e(cy)} ${elig}</span><div class="seg cs-fmt" role="group" aria-label="Liga-Format">${[['1qb', '1QB'], ['sf', 'Superflex']].map(([v, l]) => `<button type="button" class="seg-btn${(v === 'sf') === sf ? ' active' : ''}" data-fmt="${v}">${l}</button>`).join('')}</div></div>
      <div class="cs-rgrid">
        <div class="cs-rcell big"><small>Rookie Draft (${T} Teams)</small><b>${rk(r.rank.lo)} – ${rk(r.rank.hi)}</b><span>Mitte ${rk(r.rank.mid)} · Rookie-Rang #${r.rank.lo}–#${r.rank.hi} · falls gedraftet</span></div>
        <div class="cs-rcell"><small>Draft-Chance</small><b class="cs-ev ${ch >= 60 ? 'hoch' : ch >= 30 ? 'mittel' : 'niedrig'}">${ch} %</b><span>wird überhaupt gedraftet</span></div>
        <div class="cs-rcell"><small>Erw. NFL-Draft</small><b>${DR.nflRound(r.nfl.lo)}${DR.nflRound(r.nfl.hi) !== DR.nflRound(r.nfl.lo) ? '–' + DR.nflRound(r.nfl.hi) : ''}</b><span>Pick ${r.nfl.lo}–${r.nfl.hi} (Mitte ${r.nfl.mid})</span></div>
      </div>
    </div>`;
  }

  // ---------- Radar (SVG): Prospect (sel-1) vs. gewählter Comp (sel-2) ----------
  function radar(axes, me, comp, meName, compName) {
    const e = MFHFB.ui.esc;
    const n = axes.length, size = 300, cx = size / 2, cy = size / 2, R = 112;
    const ang = i => -Math.PI / 2 + (i * 2 * Math.PI) / n;
    const pt = (i, f) => [cx + Math.cos(ang(i)) * R * f, cy + Math.sin(ang(i)) * R * f];
    const clamp = v => Math.max(0, Math.min(100, v == null ? 0 : v));
    const rings = [0.25, 0.5, 0.75, 1].map(f => `<polygon class="rd-ring" points="${axes.map((_, i) => pt(i, f).map(v => v.toFixed(1)).join(',')).join(' ')}"/>`).join('');
    const lines = axes.map((_, i) => { const [x, y] = pt(i, 1); return `<line class="rd-axis" x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}"/>`; }).join('');
    const labels = axes.map((ax, i) => {
      const [x, y] = pt(i, 1.2); const co = Math.cos(ang(i));
      const anchor = Math.abs(co) < 0.2 ? 'middle' : co > 0 ? 'start' : 'end';
      let parts = [ax.label];
      if (Math.abs(co) > 0.5 && ax.label.length > 10 && /[ -]/.test(ax.label)) {
        const cut = [...ax.label.matchAll(/[ -]/g)].map(m => m.index).sort((p, q) => Math.abs(p - ax.label.length / 2) - Math.abs(q - ax.label.length / 2))[0];
        parts = [ax.label.slice(0, cut + (ax.label[cut] === '-' ? 1 : 0)), ax.label.slice(cut + 1)];
      }
      const y0 = y + 4 - (parts.length - 1) * 7;
      return `<text class="rd-label" x="${x.toFixed(1)}" y="${y0.toFixed(1)}" text-anchor="${anchor}">${parts.map((l, k) => `<tspan x="${x.toFixed(1)}" dy="${k ? 14 : 0}">${e(l)}</tspan>`).join('')}</text>`;
    }).join('');
    const series = (vals, cls, name) => {
      if (!vals) return '';
      const pts = axes.map((ax, i) => pt(i, clamp(vals[ax.key]) / 100));
      const dots = axes.map((ax, i) => vals[ax.key] == null ? '' :
        `<circle class="rd-pt" cx="${pts[i][0].toFixed(1)}" cy="${pts[i][1].toFixed(1)}" r="4"><title>${e(name)} · ${e(ax.label)}: ${Math.round(vals[ax.key])}. Perzentil</title></circle>`).join('');
      return `<g class="rd-series ${cls}${comp ? ' multi' : ''}"><polygon points="${pts.map(p => p.map(q => q.toFixed(1)).join(',')).join(' ')}"/>${dots}</g>`;
    };
    const table = `<table class="table compact cs-rtable"><thead><tr><th>Perzentil</th><th class="num"><i class="cs-sw sel-1"></i>Prospect</th><th class="num"><i class="cs-sw sel-2"></i>Comp</th></tr></thead><tbody>
      ${axes.map(ax => `<tr><td>${e(ax.label)}</td><td class="num strong">${me[ax.key] != null ? Math.round(me[ax.key]) : '—'}</td><td class="num">${comp && comp[ax.key] != null ? Math.round(comp[ax.key]) : '—'}</td></tr>`).join('')}
    </tbody></table>`;
    return `<svg class="rd cs-rd" viewBox="-66 -14 ${size + 132} ${size + 28}" role="img" aria-label="Radar: ${e(meName)} vs. ${e(compName || '—')}">${rings}${lines}${series(comp, 'sel-2', compName)}${series(me, 'sel-1', meName)}${labels}</svg>
      <div class="dna-chips"><span class="dna-chip sel-1"><i></i>${e(meName)}</span>${compName ? `<span class="dna-chip sel-2"><i></i>${e(compName)}</span>` : ''}</div>
      ${table}`;
  }

  function compBox(kind, title, sub, comps, feats, axes, me, pickedId, extra, emptyText, foot) {
    const e = MFHFB.ui.esc;
    const compObj = comps.find(c => c.id === pickedId);
    const meVals = feats[me.id];
    return `<div class="card cs-box" data-box="${kind}">
      <div class="card-head"><h2>${tip(title, sub + (foot ? ' ' + foot : ''))}</h2></div>
      ${meVals && axes.length >= 3
        ? `<div class="cs-radar">${radar(axes, meVals, compObj ? feats[compObj.id] : null, me.name, compObj ? compObj.name : null)}</div>`
        : `<div class="muted cs-pad">Keine Perzentil-Daten für diesen Prospect (zu wenige vollständige Feature-Werte).</div>`}
      ${comps.length ? `<div class="cs-list-head">Comp anklicken → ins Radar</div>${comps.map((m, i) => `<button type="button" class="dna-match cs-match${m.id === pickedId ? ' on' : ''}" data-pick="${kind}|${e(m.id)}" aria-pressed="${m.id === pickedId}">
          <span class="dna-mscore">#${i + 1}</span>
          <span class="dna-nm">${e(m.name)} <small>${e(m.team || '')} · ${e(m.year)}${extra ? ' · ' + extra(m) : ''}</small></span>
          <span class="dna-plus">${m.id === pickedId ? '●' : '＋'}</span></button>`).join('')}`
        : `<div class="muted cs-pad">${emptyText}</div>`}
    </div>`;
  }

  function prodBox(ctx, st, me) {
    const C = ctx.data.COLLEGE_SCOUTING;
    let comps, feats = (C.feats || {})[st.pos] || {};
    if (me.mix) {
      const R = MX.prod(C, st.pos, me);
      comps = R.comps;
      if (R.perc) { feats = Object.create(feats); feats[me.id] = R.perc; }
    } else comps = (C.comps[st.pos] || {})[me.id] || [];
    if (picked.for !== me.id) { picked.for = me.id; picked.prod = null; picked.nfl = null; }
    if (!picked.prod || !comps.some(c => c.id === picked.prod)) picked.prod = (comps[0] || {}).id || null;
    const axes = ((C.meta.features || {})[st.pos] || []).map(k => ({ key: k, label: FEATURE_LABELS[k] || k }));
    return compBox('prod', '🎓 College Production Comp', '„Produziert wie …“ — nächste Nachbarn nach reinem Produktions-Profil (Mahalanobis-Distanz), unabhängig vom späteren NFL-Erfolg.' + (me.mix ? ' Basis: gewichteter Saison-Mix, verglichen mit einzelnen historischen Saisons; eigene Saisons des Spielers sind ausgeschlossen.' : ''),
      comps, feats, axes, me, picked.prod, null,
      'Kein vergleichbares Produktionsprofil gefunden (zu wenige vollständige Datensätze im Pool).');
  }

  function nflBox(ctx, st, me, N) {
    const e = MFHFB.ui.esc;
    if (!N) return `<div class="card cs-box" data-box="nfl"><div class="card-head"><h2>🏈 NFL Profile Comp</h2></div><div class="muted cs-pad">Lade …</div></div>`;
    if (N.error) return `<div class="card cs-box" data-box="nfl"><div class="card-head"><h2>🏈 NFL Profile Comp</h2></div><div class="muted cs-pad">${e(N.error)}</div></div>`;
    let comps, feats = (N.feats || {})[st.pos] || {}, note = '';
    if (me.mix) {
      const R = MX.nfl(N, st.pos, me);
      if (R) { comps = R.comps; if (R.perc) { feats = Object.create(feats); feats[me.id] = R.perc; } note = ' Basis: gewichteter Saison-Mix.'; }
      else { comps = (N.comps[st.pos] || {})[me.latest.id] || []; if (feats[me.latest.id]) { feats = Object.create(feats); feats[me.id] = feats[me.latest.id]; } note = ` Für den Mix fehlt der Vergleichspool — angezeigt: Saison ${me.latest.year}.`; }
    } else comps = (N.comps[st.pos] || {})[me.id] || [];
    const stats = N.stats[st.pos] || {};
    if (!picked.nfl || !comps.some(c => c.id === picked.nfl)) picked.nfl = (comps[0] || {}).id || null;
    const axes = ((N.meta.matchFeatures || {})[st.pos] || []).map(k => ({ key: k, label: FEATURE_LABELS[k] || k }));
    const extra = m => `${m.draftRound != null ? `Rd. ${m.draftRound} Pick ${m.draftPick}` : 'undrafted'} (${e(m.draftYear)}) · RAS ${m.ras != null ? e(m.ras) : '?'}`;
    return compBox('nfl', '🏈 NFL Profile Comp', '„Profiliert wie …“ — Pre-Draft-Rollenarchetyp gegen tatsächlich gedraftete Spieler mit ähnlichem Produktions- + Größen-Profil. <b>Keine Erfolgs- oder Talentprognose.</b>' + note,
      comps, feats, axes, me, picked.nfl, extra,
      'Kein Vergleich möglich (Produktions- oder Größen-Daten für diesen Prospect unvollständig).',
      `Vergleichsbasis: ${stats.matched || 0} historisch gedraftete ${st.pos}s mit vollständigem Profil. RAS = an ras.football angelehnter Athletik-Score (0–10) <b>des Comps</b>, nicht des Prospects — der hat Combine/Draft noch vor sich. Radar-Achsen = Matching-Features (Produktion + Größe/Gewicht), nicht RAS/Draft.`);
  }

  function listHtml(ctx, st) {
    const e = ctx.ui.esc;
    const C = ctx.data.COLLEGE_SCOUTING;
    const stat = PRIMARY[st.pos], q = normKey(st.q);
    const byRange = st.sort === 'range' && RENV && !RENV.error;
    const T = rookieCfg(ctx).teams;
    let list = MX.players(C, st.pos, st.win)
      .filter(pl => !q || normKey(pl.latest.name).includes(q))
      .filter(pl => !st.elig || (DR.collegeYear(C, pl.latest) || 0) >= 3);
    if (byRange) {
      list = list.map(pl => ({ pl, r: DR.estimate(RENV, st.pos, pl.mix || pl.latest, isSF(ctx, st)) }))
        .sort((a, b) => (a.r.expRank || 999) - (b.r.expRank || 999));
    } else list = list.map(pl => ({ pl, v: bestStat(pl, stat) })).sort((a, b) => b.v - a.v);
    return list.length ? list.map(({ pl, r, v }, i) => `<a class="dna-row${pl.rawId === st.sel ? ' active' : ''}" href="${ctx.href('collegescouting', st.pos, pl.rawId)}">
        <span class="dna-idx">${i + 1}</span>
        <span class="dna-nm">${e(pl.latest.name)} <small>${e(pl.latest.team)} · ${e(yrsLabel(pl))}</small></span>
        <span class="dna-avg">${byRange ? (r && r.rank ? `${DR.pickFmt(r.rank.mid, T)} <small>${Math.round(r.chance * 100)}%</small>` : '—') : (v ? Math.round(v).toLocaleString('de-DE') : '—')}</span></a>`).join('')
      : '<div class="muted" style="padding:12px">Keine Treffer.</div>';
  }

  const fmtFeat = (k, v) => (v == null || isNaN(v) ? '—' : /ppa/i.test(k) ? v.toFixed(2).replace('.', ',') : v.toFixed(1).replace('.', ','));

  // Saison-Umschalter + Verlauf je Saison (nur bei ≥ 2 Saisons im Fenster)
  function seasonsHtml(ctx, st, pl, me) {
    if (!pl || pl.seasons.length < 2) return '';
    const e = ctx.ui.esc, C = ctx.data.COLLEGE_SCOUTING, cur = C.meta.currentSeason;
    const feats = (C.meta.features || {})[st.pos] || [];
    const asc = pl.seasons.map((s, i) => ({ s, w: pl.w[i] })).sort((a, b) => a.s.year - b.s.year);
    const chips = [['mix', `Mix ${yrsLabel(pl)}`]].concat(asc.map(({ s }) => [String(s.year), String(s.year) + (s.year === cur ? '*' : '')]))
      .map(([k, l]) => `<a class="seg-btn${(me.mix ? 'mix' : String(me.year)) === k ? ' active' : ''}" href="${ctx.href('collegescouting', st.pos, pl.rawId, k)}"${k === 'mix' ? ' title="Gewichteter Mix aller Saisons im gewählten Zeitraum (Gewichte siehe Tabelle)"' : ''}>${e(l)}</a>`).join('');
    const cols = STAT_LINE[st.pos];
    const pct = Math.round(MX.progress(C) * 100);
    const row = (s, w, cls) => `<tr class="${cls || ''}"><td>${e(s.mix ? 'Mix' : s.year + (s.year === cur ? '*' : ''))}</td><td>${e(s.mix ? '' : s.team)}</td>
      ${cols.map(([k]) => `<td class="num">${s.mix || s[k] == null ? '—' : k === 'compPct' ? fmtFeat(k, s[k]) : Math.round(s[k]).toLocaleString('de-DE')}</td>`).join('')}
      ${feats.map(f => `<td class="num">${fmtFeat(f, s[f])}</td>`).join('')}
      <td class="num">${w != null ? Math.round(w * 100) + ' %' : ''}</td></tr>`;
    return `<div class="cs-seasons">
      <div class="seg" role="group" aria-label="Saison">${chips}</div>
      <div class="cs-hist-wrap"><table class="table compact cs-hist" data-nosort><thead><tr><th>Saison</th><th>Team</th>${cols.map(([, l]) => `<th class="num">${e(l)}</th>`).join('')}${feats.map(f => `<th class="num">${e(FEATURE_LABELS[f] || f)}</th>`).join('')}<th class="num" title="Anteil am Mix: 50/30/20/10 % nach Aktualität${pl.seasons.some(s => s.year === cur) ? `, laufende Saison × ${pct} % Saisonfortschritt` : ''}">Anteil am Mix</th></tr></thead>
      <tbody>${asc.map(({ s, w }) => row(s, w, !me.mix && s.year === me.year ? 'on' : '')).join('')}${pl.mix ? row(pl.mix, null, 'mix' + (me.mix ? ' on' : '')) : ''}</tbody></table></div>
      ${pl.seasons.some(s => s.year === cur) ? `<div class="muted cs-hint">* laufende Saison (${pct} % gespielt) — Volumen noch unvollständig, Shares/PPA schon vergleichbar.</div>` : ''}
    </div>`;
  }

  function mainHtml(ctx, st, N) {
    const e = ctx.ui.esc;
    const pl = playerOf(ctx, st), me = viewOf(pl, st.season);
    if (!me) return ctx.ui.empty('Kein Prospect gewählt', 'Links einen Prospect auswählen.', '🎓');
    const stat = PRIMARY[st.pos], L = me.mix ? me.latest : me;
    const line = me.mix ? '' : STAT_LINE[st.pos].filter(([k]) => me[k] != null).map(([k, l]) => `<b>${k === 'compPct' ? me[k].toFixed(1).replace('.', ',') : Math.round(me[k]).toLocaleString('de-DE')}</b> ${l}`).join(' · ');
    const body = [heightFmt(me.heightIn), me.weightLb ? me.weightLb + ' lb' : null].filter(Boolean).join(', ');
    return `
      <div class="dna-head">
        <div><h2 class="dna-title display">${e(me.name)}</h2>
          <div class="page-sub">${st.pos} · ${e(me.team)} · ${me.mix ? 'Saisons ' + e(yrsLabel(pl)) + ' (Mix)' : 'Saison ' + e(me.year)}${me.conf ? ' · ' + e(me.conf) : ''}${body ? ' · ' + e(body) : ''}</div></div>
        <div class="dna-badge" title="${PRIMARY_LABEL[st.pos]} in der Saison ${L.year}"><b>${L[stat] != null ? Math.round(L[stat]).toLocaleString('de-DE') : '—'}</b><small>${PRIMARY_LABEL[st.pos]} ${L.year}</small></div>
      </div>
      ${line ? `<div class="dna-tags">${line}</div>` : ''}
      ${seasonsHtml(ctx, st, pl, me)}
      <div class="cs-grid">
        <div data-prod>${prodBox(ctx, st, me)}</div>
        <div data-nfl>${nflBox(ctx, st, me, N)}</div>
      </div>
      <div data-range>${rangeBox(ctx, st, me, null)}</div>`;
  }

  MFHFB.pages.register({
    id: 'collegescouting',
    section: 'players',
    label: 'College Scouting',
    icon: '🎓',
    applies: { sport: ['nfl'] },
    data: ['sport:college-scouting'],
    title: ({ data, params }) => {
      const C = data.COLLEGE_SCOUTING; if (!C || !params[1]) return 'College Scouting';
      const raw = String(params[1]).split('_').pop();
      const p = (C.recent[params[0]] || []).find(x => String(x.rawId) === raw);
      return p ? `${p.name} · College Scouting` : 'College Scouting';
    },
    render(ctx) {
      const { ui, data } = ctx;
      const e = ui.esc;
      const C = data.COLLEGE_SCOUTING;
      if (!C || !C.recent) return ui.empty('Keine College-Scouting-Daten', 'Die Datei wird von der GitHub Action „College Scouting Sync“ erzeugt.', '🎓');
      const st = resolve(ctx);
      ctx._cs = st;
      const cur = C.meta.currentSeason;
      const all = MX.players(C, st.pos, st.win);
      const years = C.meta.years.filter(y => y > cur - st.win);
      return `
        <div class="page-head">
          <h1 class="page-title display">${tip('🎓 College Scouting', 'Bekannte Grenzen: CFBD erfasst keine Slot/Outside-Alignment- oder Route-Tree-Daten — zwei Receiver mit gleicher Target Share können völlig unterschiedliche NFL-Rollen bekommen. Beide Comps sind Ähnlichkeits-, keine Erfolgs- oder Talentvergleiche. Quellen: CollegeFootballData, nflverse, FantasyPros (über DynastyProcess).')}</h1>
          <div class="page-sub">Aktuelle College-Spieler (keine Draftees/UDFAs) · ${all.length} ${st.pos}-Prospects mit Mindest-Volumen · ${tip(st.win > 1 ? `Saison-Mix ${years.join('/')}` : `Saison ${cur}`, 'Eine Zeile pro Spieler. Der Zeitraum bestimmt, welche Saisons in seinen Mix einfließen: Gewichte 50/30/20/10 % nach Aktualität, die laufende Saison anteilig nach Saisonfortschritt. Gemittelt werden Shares, PPA und Usage (keine Volumenwerte). Einzelne Saisons sind im Detailbereich umschaltbar.')}</div>
        </div>
        <div class="controls">
          <div class="seg" role="group" aria-label="Position">${POS.map(p => `<a class="seg-btn${p === st.pos ? ' active' : ''}" href="${ctx.href('collegescouting', p)}">${p}</a>`).join('')}</div>
          <div class="seg" role="group" aria-label="Saisons">${WINDOWS.map(n => `<button type="button" class="seg-btn${n === st.win ? ' active' : ''}" data-win="${n}">${winLabel(n, cur)}</button>`).join('')}</div>
        </div>
        <div class="dna-layout">
          <aside class="card dna-side">
            <input type="search" class="search" placeholder="Prospect suchen …" value="${e(st.q)}" data-q aria-label="Prospect suchen">
            <div class="cs-lctl">
              <div class="seg" role="group" aria-label="Sortierung"><button type="button" class="seg-btn${st.sort !== 'range' ? ' active' : ''}" data-sort="stat">${PRIMARY_LABEL[st.pos]}</button><button type="button" class="seg-btn${st.sort === 'range' ? ' active' : ''}" data-sort="range" title="Nach erwartetem Rookie-Draft-Pick (Mitte der Draft Range, aus dem Saison-Mix)">Draft Range</button></div>
              <label class="cs-chk" title="Geschätzt: mindestens 3. College-Jahr (Untergrenze aus der CFBD-Historie)"><input type="checkbox" data-elig${st.elig ? ' checked' : ''}> nur sicher draftberechtigt ${C.meta.currentSeason + 1}</label>
            </div>
            <div class="dna-list-head"><span>Prospect</span><span data-lhead title="${st.sort === 'range' ? 'Mitte der Draft Range (Rookie Draft), aus dem Saison-Mix' : PRIMARY_LABEL[st.pos] + ' der besten Saison im Zeitraum'}">${st.sort === 'range' ? 'Rookie-Pick' : PRIMARY_LABEL[st.pos]}</span></div>
            <div class="dna-list" data-list>${listHtml(ctx, st)}</div>
          </aside>
          <div class="dna-main" data-main>${mainHtml(ctx, st, null)}</div>
        </div>
`;
    },
    mount(root, ctx) {
      const st = ctx._cs || resolve(ctx);
      ctx.store.setJSON('cs', { pos: st.pos, win: st.win, q: st.q, sel: st.sel, elig: st.elig, sort: st.sort, fmt: st.fmt });
      const C = ctx.data.COLLEGE_SCOUTING;
      if (!C || !C.recent) return;
      const me = viewOf(playerOf(ctx, st), st.season);
      let N = null;

      root.querySelectorAll('[data-win]').forEach(b => b.addEventListener('click', () => {
        ctx.store.setJSON('cs', { ...getState(ctx), win: +b.dataset.win });
        // Auswahl-ID aus der URL entfernen, sonst würde sie das Fenster wieder aufziehen
        if (ctx.params[1]) location.hash = ctx.href('collegescouting', st.pos); else ctx.refresh();
      }));
      root.querySelectorAll('[data-sort]').forEach(b => b.addEventListener('click', () => { ctx.store.setJSON('cs', { ...getState(ctx), sort: b.dataset.sort }); ctx.refresh(); }));
      const el = root.querySelector('[data-elig]');
      if (el) el.addEventListener('change', () => { ctx.store.setJSON('cs', { ...getState(ctx), elig: el.checked }); ctx.refresh(); });
      const q = root.querySelector('[data-q]');
      if (q) q.addEventListener('input', () => {
        const s = { ...getState(ctx), q: q.value };
        ctx.store.setJSON('cs', s);
        root.querySelector('[data-list]').innerHTML = listHtml(ctx, { ...st, q: q.value });
      });
      root.addEventListener('click', ev => {
        const fb = ev.target.closest('[data-fmt]');
        if (fb) { ctx.store.setJSON('cs', { ...getState(ctx), fmt: fb.dataset.fmt }); ctx.refresh(); return; }
        const b = ev.target.closest('[data-pick]');
        if (!b || !me) return;
        const [kind, id] = b.dataset.pick.split('|');
        picked[kind] = id;
        const host = root.querySelector(kind === 'prod' ? '[data-prod]' : '[data-nfl]');
        if (host) host.innerHTML = kind === 'prod' ? prodBox(ctx, st, me) : nflBox(ctx, st, me, N);
      });
      // Aktiven Prospect in der Liste sichtbar machen
      // (nur die Liste scrollen, nicht die Seite)
      const list = root.querySelector('[data-list]'), act = root.querySelector('.dna-row.active');
      if (list && act) list.scrollTop = Math.max(0, act.offsetTop - list.offsetTop - list.clientHeight / 2);

      MFHFB.data.load(ctx.league, ['sport:prospect-draft-model', 'sport:rookie-draft-curve'])
        .then(d => (d.PROSPECT_DRAFT_MODEL && d.ROOKIE_DRAFT_CURVE ? { C, M: d.PROSPECT_DRAFT_MODEL, curve: d.ROOKIE_DRAFT_CURVE } : { error: 'Draft-Range-Modell fehlt.' }))
        .catch(err => ({ error: 'Draft Range nicht verfügbar: ' + err.message }))
        .then(env => {
          RENV = env;
          if (st.sort === 'range') { const l = root.querySelector('[data-list]'); if (l && l.isConnected) l.innerHTML = listHtml(ctx, { ...st, q: (getState(ctx).q || '') }); }
          const host = root.querySelector('[data-range]');
          if (host && host.isConnected && me) host.innerHTML = rangeBox(ctx, st, me, env);
        });

      if (!me) return;
      MFHFB.data.load(ctx.league, ['sport:nfl-profile-comp'])
        .then(d => { N = d.NFL_PROFILE_COMP || { error: 'Keine NFL-Profile-Comp-Daten.' }; })
        .catch(err => { N = { error: err.message + ' — die Datei erzeugt der „NFL Profile Comp“-Build.' }; })
        .then(() => {
          const host = root.querySelector('[data-nfl]');
          if (host && host.isConnected) host.innerHTML = nflBox(ctx, st, me, N);
        });
    },
  });
})();
