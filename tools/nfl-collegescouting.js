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
//    🏈 NFL Comps (seit 25.11.2026, ersetzt den NFL Profile Comp) —
//       gedraftete Spieler mit ähnlicher Entwicklung + Produktion und was
//       aus ihnen wurde (sport:prospect-comp → PROSPECT_COMP, gebaut von
//       sports/nfl/scripts/build-prospect-comp.py). Gewichte per Backtest
//       gewählt: Breakout-Jahr ×2, College-Jahr, Karriere-Bestwert,
//       Produktion/Volumen ×½; Größe/Gewicht raus (sagten nichts voraus).
//       Comps zeigen den Ausgang ähnlicher Spieler, keine Prognose.
//
//  Datenmenge: college-scouting ≈ 14 MB, prospect-comp ≈ 160 KB. Die Seite
//  wartet nur auf die erste Datei; Comps + Draft Range werden in mount()
//  nachgeladen. Alles sportweit gecacht (einmal für alle NFL-Ligen).
// ============================================================

(function () {
  const POS = ['WR', 'RB', 'TE', 'QB'];
  const WINDOWS = [1, 2, 3, 4];
  const PRIMARY = { WR: 'yds', TE: 'yds', RB: 'rushYds', QB: 'passYds' };
  const PRIMARY_LABEL = { WR: 'Rec-Yds', TE: 'Rec-Yds', RB: 'Rush-Yds', QB: 'Pass-Yds' };
  // Anzeige-Labels für FEATURES (sync-college-scouting.js) — rein präsentational.
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
  const defaults = { pos: 'WR', win: 2, only: null, q: '', sel: null, elig: false, inact: false, sort: 'stat', fmt: null };
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
  //  (Production Comp: kompletter CFBD-Pool). 🏈 NFL Comps: eigener Pool
  //  (PROSPECT_COMP, gewichtet euklidisch, siehe nflBox). Draft Range: gewichtetes Mittel der Saison-z-Werte.
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
    // only = einzelnes Jahr (Dropdown) statt Zeitraum. Jeder Spieler bekommt
    // lastSeen (neueste Saison überhaupt in den Daten) und inactive: keine Saison
    // seit der letzten abgeschlossenen (cur − 1) → vermutlich nicht mehr am College.
    function players(C, pos, win, only) {
      const key = pos + '|' + win + '|' + (only || '') + '|' + C.meta.lastSync;
      if (cache[key]) return cache[key];
      const cur = C.meta.currentSeason, prog = progress(C), by = new Map(), last = new Map();
      (C.recent[pos] || []).forEach(r => { const k = String(r.rawId); last.set(k, Math.max(last.get(k) || 0, r.year)); });
      (C.recent[pos] || []).forEach(r => {
        if (only ? r.year !== only : r.year <= cur - win) return;
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
        const lastSeen = last.get(rawId);
        out.push({ rawId, seasons: ss, w, latest: ss[0], lastSeen, inactive: lastSeen < cur - 1,
          mix: ss.length > 1 ? mixRecord(C, pos, ss, w, String(win) + (only || '')) : null });
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
    return { players, prod, progress };
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
    st.only = st.only && (C.meta.years || []).includes(+st.only) ? +st.only : null;
    const cur = C.meta.currentSeason, stat = PRIMARY[st.pos];
    let pls = MX.players(C, st.pos, st.win, st.only);
    if (!st.sel || !pls.some(p => p.rawId === String(st.sel))) {
      // Direkt verlinkter Prospect außerhalb des Fensters → Fenster öffnen statt ignorieren
      const linked = id && (C.recent[st.pos] || []).filter(p => String(p.rawId) === id).sort((a, b) => b.year - a.year)[0];
      if (linked) { if (st.only) st.only = linked.year; else st.win = Math.min(4, Math.max(st.win, cur - linked.year + 1)); pls = MX.players(C, st.pos, st.win, st.only); }
      else st.sel = (pls.slice().sort((a, b) => bestStat(b, stat) - bestStat(a, stat))[0] || {}).rawId || null;
    }
    st.sel = st.sel != null ? String(st.sel) : null;
    if (!st.inact && !id) { // ausgeblendete Inaktive: gemerkte Auswahl ersetzen (direkte Links bleiben)
      const cp = pls.find(p => p.rawId === st.sel);
      if (cp && cp.inactive) st.sel = (pls.filter(p => !p.inactive).sort((a, b) => bestStat(b, stat) - bestStat(a, stat))[0] || {}).rawId || st.sel;
    }
    st.season = se || 'auto';
    return st;
  }
  const playerOf = (ctx, st) => MX.players(ctx.data.COLLEGE_SCOUTING, st.pos, st.win, st.only).find(p => p.rawId === st.sel) || null;

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
    // v2 (17.11.2026): HS-Abschlussjahr aus dem Recruiting (sports/nfl/data/prospect-recruit.js).
    // NFL-Regel: draftberechtigt 3 Jahre nach dem HS-Abschluss. Ohne Eintrag → FBS-Untergrenze.
    const recOf = (R, me) => (R && R[String(me.rawId)]) || null;
    function yearsInfo(R, C, me) {
      const rec = recOf(R, me), lb = collegeYear(C, me);
      if (rec && rec[0]) {
        const yrs = me.year - rec[0] + 1; // 1 = erste Saison nach dem HS-Abschluss
        return { yrs, hs: rec[0], exact: true, eligible: me.year + 1 - rec[0] >= 3, rating: rec[1], stars: rec[2], lb };
      }
      return { yrs: lb, hs: null, exact: false, eligible: lb != null && lb >= 3, rating: null, stars: null, lb };
    }
    const eligible = (R, C, me) => yearsInfo(R, C, me).eligible;
    // Karriere-Features wie im Training: beste Saison (Produktions- bzw. Volumen-z) bis inkl. me.year
    let seasIdx = null;
    function seasonsOf(C, pos, rawId) {
      if (!seasIdx) {
        seasIdx = new Map();
        Object.keys(C.seasons || {}).forEach(y => Object.entries(C.seasons[y] || {}).forEach(([ps, list]) => (list || []).forEach(r => {
          const k = ps + '|' + r.rawId; if (!seasIdx.has(k)) seasIdx.set(k, []); seasIdx.get(k).push(r);
        })));
      }
      return seasIdx.get(pos + '|' + rawId) || [];
    }
    function zOf(C, M, pos, rec) {
      const st = zstat(C, M, pos, rec.year), z = {};
      M.pos[pos].base.forEach(f => { const [m, sd] = st[f] || [0, 1]; z[f] = rec[f] == null || isNaN(rec[f]) || !sd ? 0 : (rec[f] - m) / (sd + 1e-9); });
      return z;
    }
    function estimate(env, pos, rec, sf) {
      const { C, M, curve } = env, P = M.pos[pos], cv = ((sf && curve.posSF) || curve.pos)[pos];
      const me = rec.mix ? rec.latest : rec; // College-Jahr + Conference aus der neuesten Saison
      const yi = yearsInfo(env.R, C, me);
      const cyear = yi.yrs;
      const out = { cyear, eligible: yi.eligible, yi };
      if (!P || !cv) return out;
      // Mix: gewichtetes Mittel der z-Werte je Saison (z wird je Saison + Position gebildet,
      // eine halb gespielte Saison wird also gegen die anderen halben Saisons gemessen)
      let z;
      if (rec.mix) {
        const zs = rec.seasons.map(s => zOf(C, M, pos, s));
        z = {}; P.base.forEach(f => { z[f] = zs.reduce((t, zz, i) => t + rec.w[i] * zz[f], 0); });
      } else z = zOf(C, M, pos, me);
      const cy = Math.max(1, Math.min(5, cyear || 1));
      const mean = (zz, fs) => fs.reduce((t, f) => t + (zz[f] || 0), 0) / (fs.length || 1);
      const prodYoung = mean(z, P.prod) * (4 - Math.max(1, Math.min(4, cy)));
      const vol = (M.vol || {})[pos] || [];
      let car = null;
      const career = () => {
        if (car) return car;
        const ss = seasonsOf(C, pos, me.rawId).filter(s => s.year <= me.year).map(s => zOf(C, M, pos, s));
        car = { bestProd: Math.max(...ss.map(zz => mean(zz, P.prod))), bestVol: Math.max(...ss.map(zz => mean(zz, vol))), nSeas: ss.length };
        if (!ss.length) car = { bestProd: mean(z, P.prod), bestVol: mean(z, vol), nSeas: 1 };
        return car;
      };
      const RC = M.recruit || { impute: 0.8, center: 0.86, scale: 0.05 };
      const ratingZ = Math.max(-3, Math.min(3, ((yi.rating != null ? yi.rating : RC.impute) - RC.center) / RC.scale));
      const val = f => {
        if (f.endsWith('_z')) return z[f.slice(0, -2)];
        switch (f) {
          case 'cyear': case 'yrs': return cy;
          case 'p5': return M.P5.includes(me.conf) ? 1 : 0;
          case 'prodYoung': case 'prodYoung2': return prodYoung;
          case 'ratingZ': return ratingZ;
          case 'unrated': return yi.rating != null ? 0 : 1;
          case 'bestProd': case 'bestVol': case 'nSeas': return career()[f];
          default: return 0;
        }
      };
      const x = P.features.map(val);
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
      // Konsens-Override (sports/nfl/data/prospect-consensus.js, von Hand): ersetzt
      // die Modell-Schätzung, der Modellwert bleibt in out.model für den Vergleich.
      const k = (env.K || {})[String(me.rawId)];
      if (k && (!k.pos || k.pos === pos)) {
        out.model = { rank: out.rank, nfl: out.nfl, chance: out.chance };
        out.consensus = k;
        if (k.nfl) out.nfl = k.nfl;
        const kr = (sf && k.rankSF) || k.rank;
        if (kr) out.rank = kr;
        if (k.chance != null) out.chance = k.chance;
        out.expRank = out.chance * out.rank.mid + (1 - out.chance) * Math.exp(cv.a + cv.b * Math.log(260));
      }
      return out;
    }
    // Risiko-Flags (Bust-Backtest 24./25.11.2026, Drafts 2015–2023, Draftpick kontrolliert;
    // Projekt-Doku claude/bust-backtest-2026-11.md). Getrennt von der Pick-Prognose.
    //  RB 🚩 hart: Receiving-Yard-Share Karriere-Bestwert < 5 % → 0/10 mit Top-12-Saison in J1–3 (sonst 48 %).
    //  RB Hinweis: später/kein Breakout (Speed Score < 100 erst nach dem Combine, nicht in den Daten).
    //  QB ⚠️: Rushing-Yards pro Pass-Versuch, Karriere-Bestwert < 0,6 → 0/18 mit Top-6-Saison (sonst 31 %).
    //        Plus: „✓ Früher Breakout“ (bis College-Jahr 2: 6 von 7 Top-12).
    //  WR Hinweise: kein Early Declare (College-Jahr ≥ 4), später/kein Breakout; ⚠️ nur wenn beide, kein Listen-Icon
    //        (trifft fast die Hälfte, schwach). Effizienz (avgPPA) sagte nichts voraus → entfernt (25.11.).
    // Breakout = erstes College-Jahr mit Ø Produktions-z > 0,5; „spät“ = ab College-Jahr 3 oder nie.
    function riskFlags(env, pos, rec) {
      const { C, M } = env, P = M.pos[pos];
      if (!P || !['RB', 'WR', 'QB'].includes(pos)) return null;
      const me = rec.mix ? rec.latest : rec;
      const yi = yearsInfo(env.R, C, me);
      const mean = (zz, fs) => fs.reduce((t, f) => t + (zz[f] || 0), 0) / (fs.length || 1);
      const seas = seasonsOf(C, pos, me.rawId).filter(s => s.year <= me.year).sort((a, b) => a.year - b.year);
      const yrsOf = s => (yi.hs ? s.year - yi.hs + 1 : (collegeYear(C, s) || 1));
      const bo = seas.find(s => mean(zOf(C, M, pos, s), P.prod) > 0.5);
      const boYrs = bo ? yrsOf(bo) : null;
      const late = boYrs == null || boYrs >= 3;
      const flags = [];
      const add = (key, hard, label, tip) => flags.push({ key, hard, label, tip });
      const boTxt = boYrs == null ? 'kein Breakout (nie Ø Produktions-z > 0,5)' : `Breakout erst im ${boYrs}. College-Jahr`;
      if (pos === 'RB') {
        // Karriere-Bestwert statt nur letzte Saison (25.11.2026): trifft 18 % statt 23 % der gedrafteten RBs,
        // 0 von 10 mit Top-12 (sonst 48 %), p = 0,007, beide Zeiträume (0/6, 0/4). Letzte Saison < 5 % allein
        // markierte gut die Hälfte aller College-RBs (Schwelle ≈ Median) und auch Spieler, die schon mal gefangen hatten.
        const sh = seas.map(s => ({ y: s.year, v: s.recYdShare })).filter(x => x.v != null);
        if (sh.length) {
          const best = sh.reduce((a, b) => (b.v > a.v ? b : a));
          const fmt = v => String(Math.round(v * 10) / 10).replace('.', ',');
          if (best.v < 5) add('rec', true, 'Wenig Receiving', `Receiving-Yard-Share nie über 5 % (Karriere-Bestwert ${fmt(best.v)} % in ${best.y}${sh.length > 1 ? `, Saisons: ${sh.map(x => x.y + ' ' + fmt(x.v) + ' %').join(', ')}` : ''}). Backtest Drafts 2015–2023 (RBs Runde 1–3, Pick kontrolliert): 0 von 10 mit Top-12-Saison in Jahr 1–3, ohne Flag 48 % (p = 0,007), in beiden Zeiträumen. Betroffen waren u. a. Derrick Henry (später doch Star), Kenneth Walker, Miles Sanders, Derrius Guice.`);
        }
        if (late) add('late', false, 'Später Breakout', `${boTxt}. Allein schwach (Top-12 31 % vs. 48 %), zählt im Stapel.`);
      } else if (pos === 'QB') {
        // QB (25.11.2026): Rushing-Yards pro Pass-Versuch, Karriere-Bestwert < 0,6 → 0 von 18 mit Top-6-Saison in J1–3
        // (sonst 31 %, p = 0,002, beide Zeiträume), Top-12 11 % vs. 34 %. Saisonlänge spielt keine Rolle (laufende Saison!).
        // „Kein früher Breakout“ ist kein Warnsignal (85 % der gedrafteten QBs), nur „✓ Früher Breakout“ als Plus.
        const rr = seas.filter(s => s.rushYds != null && s.passAtt).map(s => ({ y: s.year, v: s.rushYds / s.passAtt, ry: s.rushYds, pa: s.passAtt }));
        if (rr.length) {
          const best = rr.reduce((a, b) => (b.v > a.v ? b : a));
          const f2 = v => String(Math.round(v * 100) / 100).replace('.', ',');
          if (best.v < 0.6) add('rush', false, 'Wenig Rushing', `Rushing-Yards pro Pass-Versuch nie über 0,6 (Bestwert ${f2(best.v)} in ${best.y}: ${best.ry} Rush-Yds bei ${best.pa} Pass-Versuchen; NCAA zieht Sacks ab). Backtest QBs Runde 1–3, Drafts 2015–2023: 0 von 18 mit Top-6-Saison in Jahr 1–3 (sonst 31 %, p = 0,002), Top-12 11 % vs. 34 %, in beiden Zeiträumen. Pocket-QBs, die trotzdem Top-12 wurden: Goff, Stroud, Herbert.`);
        }
      } else {
        if (yi.yrs != null && yi.yrs >= 4) add('ed', false, 'Kein Early Declare', `${yi.yrs}. College-Jahr${yi.exact ? '' : ' (Untergrenze aus FBS-Daten)'}. Backtest WRs Runde 1–3: Top-24-Saison 23 % vs. 45 % (Pick kontrolliert, p = 0,03), in den Drafts 2015–19 deutlich (21 % vs. 63 %), 2020–23 schwächer (26 % vs. 35 %, Corona-Zusatzjahr).`);
        if (late) add('late', false, 'Später Breakout', `${boTxt}. Allein schwach (Top-24 27 % vs. 44 %), zählt im Stapel.`);
      }
      // RB: 🚩 bei wenig Receiving; QB: ⚠️ bei wenig Rushing; WR: ⚠️ nur wenn beide Hinweise zutreffen
      const level = flags.some(f => f.hard) ? 'hart' : pos === 'QB' ? (flags.length ? 'fragil' : 'ok') : flags.length >= 2 ? 'fragil' : flags.length ? 'info' : 'ok';
      return { flags, level, n: flags.length, speedPending: pos === 'RB', earlyBo: pos === 'QB' && !late && boYrs != null ? boYrs : null };
    }
    // Comp-Vektor wie build-prospect-comp.py: [Produktions-z…, Volumen-z…, Breakout-Jahr, College-Jahr, Karriere-Bestwert]
    function compVec(env, pos, rec, PC) {
      const { C, M } = env, P = M.pos[pos], cfg = PC && PC.pos[pos];
      if (!P || !cfg) return null;
      const me = rec.mix ? rec.latest : rec;
      let z;
      if (rec.mix) {
        const zs = rec.seasons.map(s => zOf(C, M, pos, s));
        z = {}; P.base.forEach(f => { z[f] = zs.reduce((t, zz, i) => t + rec.w[i] * zz[f], 0); });
      } else z = zOf(C, M, pos, me);
      const yi = yearsInfo(env.R, C, me);
      const mean = (zz, fs) => fs.reduce((t, f) => t + (zz[f] || 0), 0) / (fs.length || 1);
      const seas = seasonsOf(C, pos, me.rawId).filter(s => s.year <= me.year).sort((a, b) => a.year - b.year);
      const yrsOf = s => (yi.hs ? s.year - yi.hs + 1 : (collegeYear(C, s) || 1));
      const bo = seas.find(s => mean(zOf(C, M, pos, s), P.prod) > 0.5);
      const pz = seas.map(s => mean(zOf(C, M, pos, s), P.prod));
      const bestProd = pz.length ? Math.max(...pz) : mean(z, P.prod);
      return [...cfg.prod.map(f => z[f] || 0), ...cfg.vol.map(f => z[f] || 0), bo ? yrsOf(bo) : PC.boNever, yi.yrs != null ? yi.yrs : 1, bestProd];
    }
    const pickFmt = (r, T) => `${Math.ceil(r / T)}.${String(((r - 1) % T) + 1).padStart(2, '0')}`;
    const nflRound = p => (p <= 32 ? 'R1' : p <= 64 ? 'R2' : p <= 100 ? 'R3' : p <= 140 ? 'R4' : p <= 180 ? 'R5' : p <= 220 ? 'R6' : 'R7');
    return { estimate, riskFlags, compVec, pickFmt, nflRound, collegeYear, eligible, yearsInfo };
  })();

  // Erklärtexte nur noch beim Hovern/Antippen der Überschrift (ⓘ)
  const tipText = html => String(html || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  const tip = (label, text) => MFHFB.ui.tip(label, text);

  // Format: Standard 1QB; Superflex, wenn die Liga superflex: true hat oder man umschaltet (je Liga gemerkt)
  const isSF = (ctx, st) => (st.fmt ? st.fmt === 'sf' : !!ctx.league.superflex);

  function rookieCfg(ctx) { return ctx.league.rookieDraft || { teams: 12, rounds: 4 }; }

  const RISK_TXT = {
    RB: { hart: 'Wenig Receiving (Karriere-Bestwert < 5 %) ist das stärkste RB-Signal im Backtest: 0 von 10 mit Top-12-Saison in J1–3. Zusammen mit spätem Breakout (RBs Runde 1–3, 2015–2023): 0 Flags 52 %, 1 Flag 39 %, beide 0 von 8.',
          fragil: 'Gestapelte Flags bei RBs Runde 1–3, 2015–2023: 0 Flags 52 % mit Top-12-Saison in J1–3, 1 Flag 39 %, beide 0 von 8.' },
    QB: { fragil: 'Wenig Rushing (Rushing-Yards pro Pass-Versuch nie über 0,6): QBs Runde 1–3, Drafts 2015–2023, 0 von 18 mit Top-6-Saison in Jahr 1–3 (sonst 31 %), Top-12 11 % vs. 34 %. Für Superflex und Top-QB-Hoffnungen ein klares Warnsignal; als QB2 in 1QB-Ligen weniger relevant.' },
    WR: { fragil: 'Später Breakout + kein Early Declare (WRs Runde 1–3, 2015–2023): 23 % mit Top-24-Saison in J1–3 vs. 43 % ohne diese Kombination, bei NFL-Erstrundenpicks 25 % vs. 64 %. Trifft aber fast die Hälfte der gedrafteten WRs (u. a. trafen DeVonta Smith, Pittman, M. Brown trotzdem) — bei WRs gibt es vor dem Draft kein seltenes, starkes Warnsignal. Deshalb kein Icon in der Liste. Effizienz (PPA) sagte nichts voraus und zählt nicht mehr.',
          info: 'Einzelner Hinweis, allein schwach. Bei WRs gibt es vor dem Draft kein seltenes, starkes Warnsignal; Draft Capital und ab Jahr 1 Snap- und Target-Share (🚦 Rookie-Ampel) sagen viel mehr.' },
  };
  function riskRow(e, rf, pos) {
    if (!rf) return '';
    const head = rf.level === 'hart' ? '<span class="cs-risk hart">🚩 Bust-Risiko</span>' : rf.level === 'fragil' ? '<span class="cs-risk fragil">⚠️ Fragil</span>' : rf.level === 'info' ? '<span class="cs-risk info">Risiko-Check</span>' : '<span class="cs-risk ok">✓ Keine Red Flags</span>';
    const t = (RISK_TXT[pos] || {})[rf.level] || 'Risiko-Flags aus dem Bust-Backtest (Drafts 2015–2023). Getrennt von der Pick-Prognose: Draft Capital bleibt das stärkste Signal.';
    const chips = rf.flags.map(f => `<span class="cs-tag${f.hard ? ' bad' : ' warn'}" title="${e(f.tip)}">${f.hard ? '🚩 ' : ''}${e(f.label)}</span>`).join(' ');
    const eb = rf.earlyBo ? ` <span class="cs-tag ok" title="Breakout im ${rf.earlyBo}. College-Jahr. QBs mit Breakout bis J2: 6 von 7 mit Top-12-Saison in Jahr 1–3.">✓ Früher Breakout</span>` : '';
    const sp = rf.speedPending ? ' <span class="cs-tag" title="Speed Score (Gewicht × 200 / 40-Zeit⁴) < 100 ist der dritte RB-Flag. Kommt erst mit dem Combine (Ende Februar).">Speed Score: nach Combine</span>' : '';
    return `<div class="cs-rnote cs-riskrow"><span title="${e(t)}">${head}</span> ${chips}${eb}${sp}</div>`;
  }
  function rangeBox(ctx, st, me, env) {
    const e = MFHFB.ui.esc;
    const why = env && env.curve ? `Grobe Erwartung, keine Prognose. Gerechnet aus der gewählten Ansicht (Saison-Mix oder einzelne Saison) „als wäre es die letzte College-Saison“; beim Mix zählt das gewichtete Mittel der Saison-z-Werte: Produktion (aktuell + beste Saison), Größe, College-Jahr seit dem HS-Abschluss, Recruiting-Rating und Conference → Draft-Chance + erwarteter NFL-Pick (gelernt aus allen College-Spielern seit 2013 und ihrem echten Draft-Ausgang) → typischer Dynasty-Rookie-Rang für diesen NFL-Pick (${isSF(ctx, st) && env.curve.posSF ? `FantasyPros-Dynasty-Superflex-Rankings ${env.curve.yearsSF[0]}–${env.curve.yearsSF[env.curve.yearsSF.length - 1]}, nur Rookies` : `FantasyPros-Rookie-Rankings ${env.curve.years[0]}–${env.curve.years[env.curve.years.length - 1]}, 1QB`}). Format oben rechts umschaltbar (Standard: 1QB${ctx.league.superflex ? ', diese Liga: Superflex' : ''}). ${(() => { const b = (env.M.backtest || {})[st.pos]; return b ? `Backtest ${st.pos} (Saisons ${b.test}): Draft ja/nein AUC ${String(b.aucDrafted).replace('.', ',')}, Pick-Reihenfolge ρ ${String(b.spearmanPick).replace('.', ',')} (1 = perfekt, 0 = Zufall).` : ''; })()} Nicht drin: echtes Alter, Combine, Verletzungen, Landing Spot, Scouting-Eindruck. College-Jahr und Draft-Berechtigung aus dem Recruiting-Jahrgang (CFBD); ohne Recruiting-Eintrag Untergrenze aus den FBS-Daten.` : 'Grobe Erwartung, keine Prognose.';
    const head = `<div class="card-head"><h2>${tip('📈 Draft Range', why)}</h2></div>`;
    if (!env) return `<div class="card cs-range">${head}<div class="muted cs-pad">Lade Modell …</div></div>`;
    if (env.error) return `<div class="card cs-range">${head}<div class="muted cs-pad">${e(env.error)}</div></div>`;
    const sf = isSF(ctx, st);
    const r = DR.estimate(env, st.pos, me, sf);
    const cfg = rookieCfg(ctx), T = cfg.teams, maxPick = T * (cfg.rounds || 4);
    const season = me.year, nextDraft = season + 1;
    const yi = r.yi || {};
    const recTxt = yi.stars ? ` · ${'★'.repeat(yi.stars)} Recruit` : '';
    const cy = yi.exact
      ? `${r.cyear}. College-Jahr (HS-Abschluss ${yi.hs}, Saison ${season})${recTxt}${me.mix ? ' · Basis: Saison-Mix' : ''}`
      : r.cyear != null ? `mind. ${r.cyear}. College-Jahr laut FBS-Daten (Saison ${season})${me.mix ? ' · Basis: Saison-Mix' : ''}` : 'College-Jahr unbekannt';
    const elig = r.cyear == null ? '' : r.eligible
      ? `<span class="cs-tag ok">draftberechtigt ${nextDraft}</span>`
      : yi.exact ? `<span class="cs-tag" title="NFL-Regel: 3 Jahre nach dem High-School-Abschluss (${yi.hs}) → frühestens Draft ${yi.hs + 3}.">frühestens Draft ${yi.hs + 3}</span>`
      : r.eligible
      ? `<span class="cs-tag ok">draftberechtigt ${nextDraft}</span>`
      : `<span class="cs-tag" title="Erst ${r.cyear} FBS-Saison(s) in der Historie. Transfers aus der FCS, Saisons unter dem Mindest-Volumen und Redshirt-Jahre fehlen -- dann ist er älter und evtl. schon ${nextDraft} berechtigt.">Draft-Berechtigung unsicher</span>`;
    if (!r.rank) return `<div class="card cs-range">${head}<div class="cs-rmeta">${e(cy)} ${elig}</div><div class="muted cs-pad">Für ${st.pos} gibt es noch kein Modell.</div></div>`;
    const rk = x => (x > maxPick ? 'nach R' + (cfg.rounds || 4) : DR.pickFmt(x, T));
    const ch = Math.round(r.chance * 100);
    const span = (lo, hi, f) => (f(lo) === f(hi) ? f(lo) : `${f(lo)} – ${f(hi)}`);
    const kc = r.consensus, kDate = kc && kc.asof ? kc.asof.split('-').reverse().join('.') : '';
    const kNote = kc ? `<div class="cs-rnote"><span class="cs-tag ok" title="${e(`Von Hand gesetzter Konsens${kDate ? ' (Stand ' + kDate + ')' : ''}${kc.source ? ': ' + kc.source : ''}. Das Modell zieht Ausnahme-Prospects Richtung Durchschnitt.`)}">Konsens${kDate ? ' · ' + kDate : ''}</span> <span>Modell allein: ${span(r.model.rank.lo, r.model.rank.hi, rk)} (Mitte ${rk(r.model.rank.mid)}), NFL-Pick ${r.model.nfl.lo}–${r.model.nfl.hi}</span></div>` : '';
    return `<div class="card cs-range">${head}
      <div class="cs-rmeta"><span>${e(cy)} ${elig}</span><div class="seg cs-fmt" role="group" aria-label="Liga-Format">${[['1qb', '1QB'], ['sf', 'Superflex']].map(([v, l]) => `<button type="button" class="seg-btn${(v === 'sf') === sf ? ' active' : ''}" data-fmt="${v}">${l}</button>`).join('')}</div></div>
      <div class="cs-rgrid">
        <div class="cs-rcell big"><small>Rookie Draft (${T} Teams)</small><b>${span(r.rank.lo, r.rank.hi, rk)}</b><span>Mitte ${rk(r.rank.mid)} · Rookie-Rang ${span(r.rank.lo, r.rank.hi, x => '#' + x)} · falls gedraftet</span></div>
        <div class="cs-rcell"><small>Draft-Chance</small><b class="cs-ev ${ch >= 60 ? 'hoch' : ch >= 30 ? 'mittel' : 'niedrig'}">${ch} %</b><span>wird überhaupt gedraftet</span></div>
        <div class="cs-rcell"><small>Erw. NFL-Draft</small><b>${DR.nflRound(r.nfl.lo)}${DR.nflRound(r.nfl.hi) !== DR.nflRound(r.nfl.lo) ? '–' + DR.nflRound(r.nfl.hi) : ''}</b><span>Pick ${r.nfl.lo}–${r.nfl.hi} (Mitte ${r.nfl.mid})</span></div>
      </div>${kNote}${riskRow(e, DR.riskFlags(env, st.pos, me), st.pos)}${(() => { const x = boardOf(me.rawId); if (!x) return ''; const B = env.BO; return `<div class="cs-rnote">${boardTag(e, x)} <span><a href="${e(B.url)}" target="_blank" rel="noopener">Konsens-Board</a> <b>#${x.rank}</b> (${e(x.pos)}${x.posRank})${x.tier ? ` · Projektion ${e(x.tier)}` : ''}${x.model != null ? ` · Modell-Score ${deNum(x.model)}` : ''}${x.move ? ` · Woche ${x.move > 0 ? '+' : ''}${x.move}` : ''}${x.start != null ? ` · Starter-Chance ${x.start} %` : ''}${x.comp ? ` · Comp ${e(x.comp)}` : ''} <small class="muted">· Stand ${fmtDate(B.asof)}</small></span></div>`; })()}
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

  function compBox(kind, title, sub, comps, feats, axes, me, pickedId, extra, emptyText, foot, lead) {
    const e = MFHFB.ui.esc;
    const compObj = comps.find(c => c.id === pickedId);
    const meVals = feats[me.id];
    return `<div class="card cs-box" data-box="${kind}">
      <div class="card-head"><h2>${tip(title, sub + (foot ? ' ' + foot : ''))}</h2></div>${lead || ''}
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

  // ---------- 🏈 NFL Comps (PROSPECT_COMP, Backtest 25.11.2026) ----------
  const CP_AX = {
    vol: 'Volumen', boY: 'Früher Breakout', yrs: 'Jugend', bestProd: 'Karriere-Best', pick: 'Erw. Draftpick',
  };
  // Erwarteter NFL-Pick (Draft-Range-Modell, beim Prospect inkl. Konsens-Override) als zusätzliche Dimension.
  // Backtest (ρ Ø-Ausgang der Comps ↔ eigener Ausgang): WR 0,29 → 0,34, RB 0,28 → 0,39, QB 0,44 → 0,46, TE ×1 0,22 → 0,25.
  // Pool-Spieler: Modellschätzung aus ihrer letzten College-Saison (Modell kennt diese Jahrgänge → eher optimistisch).
  const CP_PICK_W = { WR: 2, RB: 2, QB: 2, TE: 1 };
  function cpPoolPicks(PC, pos) {
    const cache = PC._lp || (PC._lp = {});
    if (cache[pos]) return cache[pos];
    const C = RENV.C, vals = PC.pool[pos].map(p => {
      const rec = ((C.seasons[p.yr] || {})[pos] || []).find(r => String(r.rawId) === p.id);
      if (!rec) return null;
      const r = DR.estimate({ ...RENV, K: {} }, pos, rec, false);
      return r.nfl ? Math.log(r.nfl.mid) : null;
    });
    const ok = vals.filter(v => v != null), mu = ok.reduce((t, v) => t + v, 0) / ok.length;
    const sd = Math.sqrt(ok.reduce((t, v) => t + (v - mu) ** 2, 0) / ok.length) || 1;
    return (cache[pos] = { vals: vals.map(v => (v == null ? mu : v)), mu, sd, sorted: vals.map(v => (v == null ? mu : v)).sort((a, b) => a - b) });
  }
  function cpAxes(PC, pos) {
    const cfg = PC.pos[pos];
    return [...cfg.prod.map(f => ({ key: f, label: FEATURE_LABELS[f] || f })), { key: 'vol', label: CP_AX.vol }, { key: 'boY', label: CP_AX.boY }, { key: 'yrs', label: CP_AX.yrs }, { key: 'bestProd', label: CP_AX.bestProd }, { key: 'pick', label: CP_AX.pick }];
  }
  // Perzentil-Werte eines Vektors gegen den Pool (Breakout-Jahr + College-Jahr umgedreht: früher/jünger = höher)
  function cpPerc(PC, pos, v, lp) {
    const cfg = PC.pos[pos], pool = PC.pool[pos], np = cfg.prod.length, nv = cfg.vol.length;
    const col = k => pool.map(p => p.v[k] == null ? 0 : p.v[k]);
    const cache = PC._sorted || (PC._sorted = {});
    const sorted = cache[pos] || (cache[pos] = {
      prod: cfg.prod.map((_, i) => col(i).sort((a, b) => a - b)),
      vol: pool.map(p => ((p.v[np] || 0) + (p.v[np + 1] || 0)) / 2).sort((a, b) => a - b),
      boY: col(np + nv).sort((a, b) => a - b), yrs: col(np + nv + 1).sort((a, b) => a - b), best: col(np + nv + 2).sort((a, b) => a - b),
    });
    const le = (arr, x) => { let lo = 0, hi = arr.length; while (lo < hi) { const m = (lo + hi) >> 1; if (arr[m] <= x) lo = m + 1; else hi = m; } return lo; };
    const lt = (arr, x) => { let lo = 0, hi = arr.length; while (lo < hi) { const m = (lo + hi) >> 1; if (arr[m] < x) lo = m + 1; else hi = m; } return lo; };
    const pc = (arr, x) => Math.round(100 * le(arr, x) / arr.length);
    const inv = (arr, x) => Math.round(100 * (arr.length - lt(arr, x)) / arr.length);
    const out = {};
    cfg.prod.forEach((f, i) => { out[f] = pc(sorted.prod[i], v[i] == null ? 0 : v[i]); });
    out.vol = pc(sorted.vol, ((v[np] || 0) + (v[np + 1] || 0)) / 2);
    out.boY = inv(sorted.boY, v[np + nv]); out.yrs = inv(sorted.yrs, v[np + nv + 1]); out.bestProd = pc(sorted.best, v[np + nv + 2]);
    if (lp != null) out.pick = inv(cpPoolPicks(PC, pos).sorted, lp); // früherer Pick = höher
    return out;
  }
  function cpComps(PC, pos, vec, selfId, lp, n = 10) {
    const cfg = PC.pos[pos];
    const zv = x => x.map((v, i) => ((v == null ? 0 : v) - cfg.mu[i]) / cfg.sd[i] * Math.sqrt(cfg.w[i]));
    const me = zv(vec);
    const LP = lp != null && RENV && RENV.C ? cpPoolPicks(PC, pos) : null, wp = Math.sqrt(CP_PICK_W[pos] || 0);
    const mlp = LP ? (lp - LP.mu) / LP.sd * wp : 0;
    return PC.pool[pos].map((p, i) => ({ p, i })).filter(({ p }) => p.id !== String(selfId))
      .map(({ p, i }) => {
        const pz = p._z || (p._z = zv(p.v)); let d = 0; for (let k = 0; k < me.length; k++) d += (me[k] - pz[k]) ** 2;
        if (LP) d += (mlp - (LP.vals[i] - LP.mu) / LP.sd * wp) ** 2;
        return { p, i, d: Math.sqrt(d) };
      })
      .sort((a, b) => a.d - b.d).slice(0, n)
      .map(({ p, i, d }) => ({ id: 'pc_' + p.id + '_' + p.dy, name: p.n, team: p.t, year: p.yr, pk: p.pk, dy: p.dy, b: p.b, k: p.k, done: p.d, v: p.v, lp: LP ? LP.vals[i] : null, dist: Math.round(d * 100) / 100 }));
  }
  const cpOutcome = (pos, m, top) => {
    const tag = m.b == null ? 'keine Fantasy-Saison' : `bestes Jahr ${pos}${m.b}`;
    const hits = m.k ? `${m.k}× Top-${top}` : `keine Top-${top}`;
    return m.done ? `<span class="cs-out ${m.k ? 'hit' : 'miss'}">${m.k ? '✓' : '✗'} ${hits}</span> <span class="muted">${tag}</span>` : `<span class="cs-out open">bisher: ${hits}</span> <span class="muted">${tag}</span>`;
  };

  function nflBox(ctx, st, me, N) {
    const e = MFHFB.ui.esc;
    const head = t => `<div class="card cs-box" data-box="nfl"><div class="card-head"><h2>🏈 NFL Comps</h2></div><div class="muted cs-pad">${t}</div></div>`;
    if (!N) return head('Lade …');
    if (N.error) return head(e(N.error));
    if (!RENV) return head('Lade …');
    if (RENV.error) return head(e(RENV.error));
    const PC = N, pos = st.pos, cfg = PC.pos[pos];
    if (!cfg) return head(`Für ${pos} gibt es keinen Comp-Pool.`);
    const vec = DR.compVec(RENV, pos, me, PC);
    if (!vec) return head('Für diesen Prospect fehlen Daten.');
    const est = DR.estimate(RENV, pos, me, false);
    const lp = est && est.nfl ? Math.log(est.nfl.mid) : null;
    const comps = cpComps(PC, pos, vec, (me.mix ? me.latest : me).rawId, lp);
    const feats = { [me.id]: cpPerc(PC, pos, vec, lp) };
    comps.forEach(m => { feats[m.id] = cpPerc(PC, pos, m.v, m.lp); });
    if (picked.for !== me.id) { picked.for = me.id; picked.prod = null; picked.nfl = null; }
    if (!picked.nfl || !comps.some(c => c.id === picked.nfl)) picked.nfl = (comps[0] || {}).id || null;
    const top = PC.top[pos];
    const done = comps.filter(m => m.done), hits = done.filter(m => m.k > 0);
    const avgPick = comps.length ? Math.round(comps.reduce((t, m) => t + m.pk, 0) / comps.length) : null;
    const bt = (PC.backtest || {})[pos];
    const lead = `<div class="cs-cpsum"><b>${hits.length} von ${done.length}</b> Comps mit Top-${top}-Saison in Jahr 1–3${done.length < comps.length ? ` <span class="muted">(${comps.length - done.length} noch offen)</span>` : ''} · Ø echter NFL-Pick der Comps ${avgPick}${est && est.nfl ? ` · erwarteter Pick ${e(me.name)}: ${est.nfl.mid}${est.consensus ? ' (Konsens)' : ''}` : ''}</div>`;
    const extra = m => `Pick ${m.pk} (${e(m.dy)})</small><small class="cs-cpout">${cpOutcome(pos, m, top)}`;
    const sub = `„Entwickelt + produziert wie …“: die 10 gedrafteten ${pos}s (Drafts ${PC.pool[pos].reduce((a, p) => Math.min(a, p.dy), 9999)}–${PC.pool[pos].reduce((a, p) => Math.max(a, p.dy), 0)}) mit dem ähnlichsten Profil und was in der NFL aus ihnen wurde. Gewichte aus dem Backtest: Breakout-Jahr doppelt, College-Jahr und Karriere-Bestwert einfach, Produktion und Volumen der letzten Saison halb, dazu der erwartete NFL-Pick (Draft Range, beim Prospect inkl. Konsens; ${pos === 'TE' ? 'einfach' : 'doppelt'}). Größe und Gewicht zählen nicht mehr: Sie sagten im Backtest nichts voraus (WR-Gewicht sogar negativ).${bt ? ` Backtest (Drafts ${bt.classes}, Comps nur aus anderen Jahrgängen): Zusammenhang Ø-Ausgang der Comps ↔ eigener Ausgang ρ = ${String(bt.rhoNew).replace('.', ',')} (alter Profile Comp: ${{ WR: '0,08', RB: '0,19', TE: '0,11', QB: '0,25' }[pos]}; Draftpick allein ≈ 0,55–0,6).` : ''} Mit dem erwarteten Pick stieg der Backtest-Zusammenhang bei WR auf 0,34, RB 0,39, QB 0,46, TE 0,25 (Modell kennt die Pool-Jahrgänge, daher eher optimistisch). Comps zeigen, was aus ähnlichen Spielern wurde, keine Prognose.${me.mix ? ' Basis: gewichteter Saison-Mix.' : ''}`;
    return compBox('nfl', '🏈 NFL Comps', sub, comps, feats, cpAxes(PC, pos), me, picked.nfl, extra,
      'Keine Comps gefunden.', `Radar: Perzentile im Pool der gedrafteten ${pos}s. „Früher Breakout“, „Jugend“ und „Erw. Draftpick“ umgedreht (früher/jünger/höherer Pick = höher). Ausgang = bester PPR-Positionsrang in Jahr 1–3 (nflverse); Top-${top} zählt als Treffer.`, lead);
  }

  // Konsens-Big-Board (sports/nfl/data/prospect-board.js, Sync aus Stick to the Model)
  function boardOf(id) {
    const B = RENV && RENV.BO; if (!B || !B.players) return null;
    return B.players[String(id)] || null;
  }
  const fmtDate = s => (s ? s.split('-').reverse().join('.') : '');
  const deNum = v => String(v).replace('.', ',');
  function boardTitle(x) {
    const B = RENV.BO;
    return `Konsens-Big-Board (${B.source.replace(/ — .*/, '')}, Stand ${fmtDate(B.asof)}): #${x.rank} gesamt, ${x.pos}${x.posRank}`
      + (x.model != null ? ` · Modell-Score ${deNum(x.model)}` : '') + (x.tier ? ` · Projektion: ${x.tier}` : '')
      + (x.move ? ` · Woche ${x.move > 0 ? '+' : ''}${x.move}` : '') + (x.start != null ? ` · Starter-Chance ${x.start} %` : '')
      + (x.comp ? ` · Comp: ${x.comp}` : '');
  }
  function boardTag(e, x) {
    if (!x) return '';
    const cls = x.rank <= 32 ? 'r1' : x.rank <= 64 ? 'r2' : x.rank <= 100 ? 'r3' : 'rx';
    return `<span class="cs-board ${cls}" title="${e(boardTitle(x))}">#${x.rank}</span>`;
  }

  function riskIcon(pos, pl) {
    if (!RENV || RENV.error || !['RB', 'WR', 'QB'].includes(pos)) return '';
    const rf = DR.riskFlags(RENV, pos, pl.mix || pl.latest);
    if (!rf || !(rf.level === 'hart' || (rf.level === 'fragil' && pos === 'QB'))) return ''; // WR: kein Listen-Icon (zu häufig, schwach)
    return rf.level === 'hart' ? ` <span class="cs-riskic" title="Bust-Risiko: ${MFHFB.ui.esc(rf.flags.map(f => f.label).join(', '))}">🚩</span>` : ` <span class="cs-riskic" title="Fragil: ${MFHFB.ui.esc(rf.flags.map(f => f.label).join(', '))}">⚠️</span>`;
  }

  function listHtml(ctx, st) {
    const e = ctx.ui.esc;
    const C = ctx.data.COLLEGE_SCOUTING;
    const stat = PRIMARY[st.pos], q = normKey(st.q);
    const byRange = st.sort === 'range' && RENV && !RENV.error;
    const T = rookieCfg(ctx).teams;
    let list = MX.players(C, st.pos, st.win, st.only)
      .filter(pl => !q || normKey(pl.latest.name).includes(q))
      .filter(pl => !st.elig || DR.eligible(ctx.data.PROSPECT_RECRUIT, C, pl.latest))
      .filter(pl => st.inact || !pl.inactive || pl.rawId === st.sel);
    const byTier = st.sort === 'tier' && RENV && !RENV.error;
    if (byTier) {
      list = list.map(pl => ({ pl, r: DR.estimate(RENV, st.pos, pl.mix || pl.latest, isSF(ctx, st)), x: boardOf(pl.rawId) }))
        .sort((a, b) => (a.x ? a.x.rank : 9999) - (b.x ? b.x.rank : 9999) || (a.r.expRank || 999) - (b.r.expRank || 999));
    } else if (byRange) {
      list = list.map(pl => ({ pl, r: DR.estimate(RENV, st.pos, pl.mix || pl.latest, isSF(ctx, st)) }))
        .sort((a, b) => (a.r.expRank || 999) - (b.r.expRank || 999));
    } else list = list.map(pl => ({ pl, v: bestStat(pl, stat) })).sort((a, b) => b.v - a.v);
    return list.length ? list.map(({ pl, r, v }, i) => `<a class="dna-row${pl.rawId === st.sel ? ' active' : ''}" href="${ctx.href('collegescouting', st.pos, pl.rawId)}">
        <span class="dna-idx">${i + 1}</span>
        <span class="dna-nm">${e(pl.latest.name)} ${boardTag(e, boardOf(pl.rawId))}${riskIcon(st.pos, pl)}${pl.inactive ? ` <span class="cs-gone" title="${e(goneText(pl))}">💤</span>` : ''} <small>${e(pl.latest.team)} · ${e(yrsLabel(pl))}</small></span>
        <span class="dna-avg">${byRange || byTier ? (r && r.rank ? `${DR.pickFmt(r.rank.mid, T)} <small>${Math.round(r.chance * 100)}%</small>` : '—') : (v ? Math.round(v).toLocaleString('de-DE') : '—')}</span></a>`).join('')
      : '<div class="muted" style="padding:12px">Keine Treffer.</div>';
  }

  const goneText = pl => `Letzte erfasste Saison ${pl.lastSeen} — seitdem keine Saison mit Mindest-Volumen, kein Draft/UDFA. Vermutlich nicht mehr am College (fertig, verletzt, abgemeldet oder in die FCS gewechselt).`;
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
        <div><h2 class="dna-title display">${e(me.name)}${pl && pl.inactive ? ` <span class="cs-gone" title="${e(goneText(pl))}">💤</span>` : ''}</h2>
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
    data: ['sport:college-scouting', '?sport:prospect-recruit'],
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
      const all = MX.players(C, st.pos, st.win, st.only);
      const years = st.only ? [st.only] : C.meta.years.filter(y => y > cur - st.win);
      const shown = all.filter(pl => st.inact || !pl.inactive), nInact = all.length - shown.length;
      const yOpts = [...new Set((C.recent[st.pos] || []).map(r => r.year))].sort((a, b) => b - a);
      return `
        <div class="page-head">
          <h1 class="page-title display">${tip('🎓 College Scouting', 'Bekannte Grenzen: CFBD erfasst keine Slot/Outside-Alignment- oder Route-Tree-Daten — zwei Receiver mit gleicher Target Share können völlig unterschiedliche NFL-Rollen bekommen. College Production Comp = reine Ähnlichkeit der Produktion. NFL Comps = gedraftete Spieler mit ähnlicher Entwicklung + Produktion samt ihrem NFL-Ausgang (Gewichte per Backtest gewählt) — Orientierung, keine Prognose. Quellen: CollegeFootballData, nflverse, FantasyPros (über DynastyProcess).')}</h1>
          <div class="page-sub">Aktuelle College-Spieler (keine Draftees/UDFAs) · ${shown.length} ${st.pos}-Prospects mit Mindest-Volumen${nInact ? ` (${nInact} inaktive 💤 ausgeblendet)` : ''} · ${tip(st.only ? `Saison ${st.only}` : st.win > 1 ? `Saison-Mix ${years.join('/')}` : `Saison ${cur}`, 'Eine Zeile pro Spieler. Der Zeitraum bestimmt, welche Saisons in seinen Mix einfließen: Gewichte 50/30/20/10 % nach Aktualität, die laufende Saison anteilig nach Saisonfortschritt. Gemittelt werden Shares, PPA und Usage (keine Volumenwerte). Einzelne Saisons sind im Detailbereich umschaltbar.')}</div>
        </div>
        <div class="controls">
          <div class="seg" role="group" aria-label="Position">${POS.map(p => `<a class="seg-btn${p === st.pos ? ' active' : ''}" href="${ctx.href('collegescouting', p)}">${p}</a>`).join('')}</div>
          <div class="seg" role="group" aria-label="Saisons">${WINDOWS.map(n => `<button type="button" class="seg-btn${!st.only && n === st.win ? ' active' : ''}" data-win="${n}">${winLabel(n, cur)}</button>`).join('')}</div>
          <select class="select cs-year${st.only ? ' active' : ''}" data-only aria-label="Einzelnes Jahr" title="Nur eine einzelne Saison anzeigen (ohne Mix)"><option value="">Einzelnes Jahr …</option>${yOpts.map(y => `<option value="${y}"${st.only === y ? ' selected' : ''}>Nur ${y}${y === cur ? ' (läuft)' : ''}</option>`).join('')}</select>
        </div>
        <div class="dna-layout">
          <aside class="card dna-side">
            <input type="search" class="search" placeholder="Prospect suchen …" value="${e(st.q)}" data-q aria-label="Prospect suchen">
            <div class="cs-lctl">
              <div class="seg" role="group" aria-label="Sortierung"><button type="button" class="seg-btn${st.sort !== 'range' && st.sort !== 'tier' ? ' active' : ''}" data-sort="stat">${PRIMARY_LABEL[st.pos]}</button><button type="button" class="seg-btn${st.sort === 'range' ? ' active' : ''}" data-sort="range" title="Nach erwartetem Rookie-Draft-Pick (Mitte der Draft Range, aus dem Saison-Mix)">Draft Range</button><button type="button" class="seg-btn${st.sort === 'tier' ? ' active' : ''}" data-sort="tier" title="Nach Konsens-Big-Board (Stick to the Model, täglich synchronisiert); Spieler ohne Board-Eintrag danach nach Draft Range">Konsens</button></div>
              <label class="cs-chk" title="NFL-Regel: 3 Jahre nach dem High-School-Abschluss (Recruiting-Jahrgang). Ohne Recruiting-Eintrag: mindestens 3. FBS-Saison."><input type="checkbox" data-elig${st.elig ? ' checked' : ''}> nur sicher draftberechtigt ${C.meta.currentSeason + 1}</label>
              <label class="cs-chk" title="Spieler ohne Saison seit ${C.meta.currentSeason - 2} (kein Draft/UDFA erfasst) — vermutlich nicht mehr am College"><input type="checkbox" data-inact${st.inact ? ' checked' : ''}> auch inaktive zeigen 💤</label>
            </div>
            <div class="dna-list-head"><span>Prospect</span><span data-lhead title="${st.sort === 'range' ? 'Mitte der Draft Range (Rookie Draft), aus dem Saison-Mix' : PRIMARY_LABEL[st.pos] + ' der besten Saison im Zeitraum'}">${st.sort === 'range' || st.sort === 'tier' ? 'Rookie-Pick' : PRIMARY_LABEL[st.pos]}</span></div>
            <div class="dna-list" data-list>${listHtml(ctx, st)}</div>
          </aside>
          <div class="dna-main" data-main>${mainHtml(ctx, st, null)}</div>
        </div>
`;
    },
    mount(root, ctx) {
      const st = ctx._cs || resolve(ctx);
      ctx.store.setJSON('cs', { pos: st.pos, win: st.win, only: st.only, q: st.q, sel: st.sel, elig: st.elig, inact: st.inact, sort: st.sort, fmt: st.fmt });
      const C = ctx.data.COLLEGE_SCOUTING;
      if (!C || !C.recent) return;
      const me = viewOf(playerOf(ctx, st), st.season);
      let N = null;

      root.querySelectorAll('[data-win]').forEach(b => b.addEventListener('click', () => {
        ctx.store.setJSON('cs', { ...getState(ctx), win: +b.dataset.win, only: null });
        // Auswahl-ID aus der URL entfernen, sonst würde sie das Fenster wieder aufziehen
        if (ctx.params[1]) location.hash = ctx.href('collegescouting', st.pos); else ctx.refresh();
      }));
      root.querySelectorAll('[data-sort]').forEach(b => b.addEventListener('click', () => { ctx.store.setJSON('cs', { ...getState(ctx), sort: b.dataset.sort }); ctx.refresh(); }));
      const ys = root.querySelector('[data-only]');
      if (ys) ys.addEventListener('change', () => {
        ctx.store.setJSON('cs', { ...getState(ctx), only: ys.value ? +ys.value : null });
        if (ctx.params[1]) location.hash = ctx.href('collegescouting', st.pos); else ctx.refresh();
      });
      const ia = root.querySelector('[data-inact]');
      if (ia) ia.addEventListener('change', () => { ctx.store.setJSON('cs', { ...getState(ctx), inact: ia.checked }); ctx.refresh(); });
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

      MFHFB.data.load(ctx.league, ['sport:prospect-draft-model', 'sport:rookie-draft-curve', '?sport:prospect-consensus', '?sport:prospect-board'])
        .then(d => (d.PROSPECT_DRAFT_MODEL && d.ROOKIE_DRAFT_CURVE ? { C, M: d.PROSPECT_DRAFT_MODEL, curve: d.ROOKIE_DRAFT_CURVE, K: d.PROSPECT_CONSENSUS || {}, BO: d.PROSPECT_BOARD || null, R: ctx.data.PROSPECT_RECRUIT || null } : { error: 'Draft-Range-Modell fehlt.' }))
        .catch(err => ({ error: 'Draft Range nicht verfügbar: ' + err.message }))
        .then(env => {
          RENV = env;
          if (st.sort !== 'stat' || (env && env.BO)) { const l = root.querySelector('[data-list]'); if (l && l.isConnected) l.innerHTML = listHtml(ctx, { ...st, q: (getState(ctx).q || '') }); }
          const host = root.querySelector('[data-range]');
          if (host && host.isConnected && me) host.innerHTML = rangeBox(ctx, st, me, env);
          const nh = root.querySelector('[data-nfl]');
          if (nh && nh.isConnected && me && N) nh.innerHTML = nflBox(ctx, st, me, N); // Comps brauchen das Modell (z-Werte)
        });

      if (!me) return;
      MFHFB.data.load(ctx.league, ['sport:prospect-comp'])
        .then(d => { N = d.PROSPECT_COMP || { error: 'Keine Comp-Daten.' }; })
        .catch(err => { N = { error: err.message + ' — die Datei erzeugt build-prospect-comp.py.' }; })
        .then(() => {
          const host = root.querySelector('[data-nfl]');
          if (host && host.isConnected) host.innerHTML = nflBox(ctx, st, me, N);
        });
    },
  });
})();
