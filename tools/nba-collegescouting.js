// ============================================================
//  Tool: College Scouting (Basketball) — TTHQ + Dizzle CBB   (seit 19.11.2026)
// ============================================================
//  #/<liga>/collegescouting                 → letzte Auswahl
//  #/<liga>/collegescouting/<id|Name>       → Prospect direkt (teilbar; Name geht auch)
//
//  Gegenstück zu tools/nfl-collegescouting.js. Pro Prospect, STRIKT getrennt:
//    📈 Draft Range — Draft-Chance + erwarteter NBA-Pick (Modell, überblendet aus Vorsaison-
//       und Produktionsmodell) → in TTHQ zusätzlich der typische Rookie-Slot im TTHQ-Draft.
//       Seit 24.11.2026 KEIN Konsens-Override mehr (wie NFL): das Konsens-Board steht daneben,
//       das Modell bleibt Modell (keine Doppelzählung). In TTHQ zusätzlich der Trade-Wert des
//       Slots (Brücke zum Trade Analyzer: SLOT_VALUES / TRADE_VALUE_TABLE).
//    🎓 College Production Comp — „Produziert wie …“ (reine College-Produktion,
//       Mahalanobis innerhalb Guard/Wing/Big). KEINE Erfolgsprognose.
//    🧬 NBA-DNA — Chance auf NBA-Rotation, Real-Life-Impact (Saison 1.000+ Min. & BPM ≥ 0, bbref) und
//       Fantasy-Top-150; Typ-Regler „Fantasy-Typ ↔ Impact-Typ“ (seit 20.11.2026) + Fantasy-Profil (9-Cat-Radar).
//       Seit 20.11.2026 aus dem College-Scouting-Modell (Barttorvik, train-prospect-model.py →
//       build_dna), rechnet auf der LAUFENDEN Saison (auch Freshmen) mit Minutenhinweis:
//       verlässlich ab meta.dna.reliableMin (250) Saison-Minuten, darunter „kleiner Datensatz“.
//       Ersetzt die frühere CBB-Seite „NBA-DNA“ (#/cbb/cbbdna leitet hierher um); die alte
//       hoopR-Version sports/cbb/data/nba-dna.js nutzt nur noch der Fantasy Radar.
//  Daten (alle direkt aus dem Hub, unabhängig vom Sport der Liga):
//    sports/cbb/data/college-prospects.js  COLLEGE_PROSPECTS (build-college-prospects.js, täglich)
//    sports/nba/data/prospect-board-nba.js PROSPECT_BOARD_NBA (Konsens aus Tankathon, ESPN, B/R, FanSided;
//                                          sync-nba-prospect-board.js, dienstags)
//    sports/nba/data/draft2027.js          DRAFT_2027 (MFHFB-Fantasy-Board, von Hand) — nur noch Karte „MFHFB Big Board“
//  Nicht drin: internationale Prospects ohne College-Saison (stehen nur über das Big Board da),
//  Combine/Messungen, Verletzungen, Scouting-Eindruck.
// ============================================================

(function () {
  const A = { key: ['tthq', 'cbb'] };
  const P_FILE = './sports/cbb/data/college-prospects';
  const DATA = [P_FILE, '?./sports/nba/data/prospect-board-nba', '?./sports/nba/data/draft2027', '?teams', '?rosters-live'];
  const GROUPS = [['all', 'Alle'], ['G', 'Guards'], ['W', 'Wings'], ['B', 'Bigs']];
  const CLS = [['all', 'Alle Klassen'], ['Fr', 'Fr'], ['So', 'So'], ['Jr', 'Jr'], ['Sr', 'Sr']];
  const SORTS = [['board', 'Draft Range'], ['konsens', 'Konsens-Board'], ['chance', 'Draft-Chance'], ['rec', 'Recruiting'], ['bpm', 'BPM']];
  const FEAT_LABEL = {
    bpm: 'BPM', obpm: 'Off. BPM', dbpm: 'Def. BPM', usg: 'Usage', ts: 'True Shooting', orbPct: 'Off.-Reb %',
    drbPct: 'Def.-Reb %', astPct: 'Assist %', toPct: 'Ballverlust %', blkPct: 'Block %', stlPct: 'Steal %',
    ftr: 'Freiwurf-Rate', tpa40: '3er-Versuche/40', rimRate: 'Würfe am Ring', pts40: 'Punkte/40',
  };
  // Radar-Achsen (Teilmenge der Comp-Merkmale; Ballverluste weggelassen, da „hoch = schlecht“)
  const RADAR = ['bpm', 'usg', 'ts', 'pts40', 'tpa40', 'rimRate', 'astPct', 'drbPct', 'stlPct', 'blkPct'];
  const DCATS = [['pts', 'PTS'], ['tpm', '3PM'], ['reb', 'REB'], ['ast', 'AST'], ['stl', 'STL'], ['blk', 'BLK'], ['fgImpact', 'FG%'], ['ftImpact', 'FT%'], ['to', 'TO CTRL']];
  const defaults = { grp: 'all', cls: 'all', sort: 'board', own: 'all', board: false, q: '', sel: null };
  const getState = ctx => ({ ...defaults, ...ctx.store.getJSON('bbcs', {}) });
  const picked = { comp: null, for: null };

  const nk0 = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/\b(jr|sr|ii|iii|iv|v)\b\.?/g, '').replace(/[^a-z]/g, '');
  // Schreibvarianten zwischen Boards und Barttorvik (wie im Sync-Script)
  const NK_ALIAS = { davisfogel: 'davisfogle', malachmoreno: 'malachimoreno', arfandiane: 'arafandiane', neoavdalas: 'neoklisavdalas', nikkhamenia: 'nikolaskhamenia' };
  const nk = s => { const k = nk0(s); return NK_ALIAS[k] || k; };
  const tip = (label, text) => MFHFB.ui.tip(label, text);
  const de = (x, d = 1) => (x == null || isNaN(x) ? '—' : Number(x).toFixed(d).replace('.', ','));
  const pct = v => `${Math.round(v * 100)} %`;
  const isTthq = ctx => ctx.league.key === 'tthq';

  // ---------- Indizes (einmal je Datenobjekt) ----------
  let IX = { data: null };
  function index(data) {
    if (IX.data === data) return IX;
    const C = data.COLLEGE_PROSPECTS || { p: [], meta: {} };
    const byId = new Map(C.p.map(p => [String(p.id), p]));
    const byName = new Map(); C.p.forEach(p => { const k = nk(p.n); if (!byName.has(k)) byName.set(k, p); });
    const board = new Map(); (data.DRAFT_2027 || []).forEach(b => board.set(nk(b.name), b));
    const KB = data.PROSPECT_BOARD_NBA || null;
    const kons = new Map(); ((KB && KB.players) || []).forEach(k => kons.set(nk(k.name), k));
    const owner = new Map();
    const teams = new Map((data.TEAMS || []).map(t => [String(t.id), t]));
    Object.entries(data.ROSTERS_LIVE || {}).forEach(([tid, list]) => (list || []).forEach(pl => owner.set(nk(pl.name), teams.get(String(tid)) || { name: 'Team ' + tid })));
    IX = { data, C, byId, byName, board, owner, KB, kons };
    return IX;
  }
  const boardOf = (I, p) => I.board.get(nk(p.n)) || null;      // MFHFB-Fantasy-Board (draft2027.js)
  const konsOf = (I, p) => I.kons.get(nk(p.n)) || null;        // Konsens-Board (prospect-board-nba.js)
  const SRC_SHORT = { tk: 'Tankathon', espn: 'ESPN', br: 'B/R', fs: 'FanSided' };
  const fmtD = d => (d ? d.split('-').reverse().join('.') : '');
  function konsTitle(I, k) {
    const S = (I.KB && I.KB.sources) || [];
    return `Konsens-Big-Board (Stand ${fmtD(I.KB.asof)}): #${k.rank} · ` + S.map(x => `${SRC_SHORT[x.key] || x.key} ${k.src[x.key] != null ? '#' + k.src[x.key] : '—'}`).join(' · ')
      + (k.move ? ` · Woche ${k.move > 0 ? '+' : ''}${k.move}` : '') + '. Nur Anzeige, fließt nicht ins Modell.';
  }
  const konsTag = (e, I, k) => (k ? `<span class="cs-board ${k.rank <= 14 ? 'r1' : k.rank <= 30 ? 'r2' : k.rank <= 60 ? 'r3' : 'rx'}" title="${e(konsTitle(I, k))}">#${k.rank}</span>` : '');
  // Brücke zum Trade Analyzer: Wert eines TTHQ-Slots (nächster Draft) + Dynasty-Rang mit gleichem Wert
  function slotTrade(slot) {
    const T = MFHFB.nbaTrades; if (!T || !T.SLOT_VALUES || slot == null) return null;
    const v = T.SLOT_VALUES[Math.min(T.SLOT_VALUES.length, Math.max(1, Math.round(slot))) - 1];
    if (!v) return null;
    let r = 1; const TV = T.TRADE_VALUE_TABLE; while (TV[r + 1] != null && TV[r + 1] >= v) r++;
    return { v, r };
  }
  const ownerOf = (ctx, I, p) => (ctx.league.key === 'cbb' ? I.owner.get(nk(p.n)) || null : null);

  // ---------- Draft Range ----------
  // TTHQ: NBA-Pick → typischer Rookie-Slot im TTHQ-Draft (Quantil-Zuordnung aus dem Draft 2026)
  function tthqSlot(curve, pick) {
    if (!curve || pick == null) return null;
    const x = curve.nba, y = curve.slot;
    if (pick <= x[0]) return y[0];
    if (pick > x[x.length - 1]) return null;
    for (let i = 1; i < x.length; i++) if (pick <= x[i]) return y[i - 1] + (y[i] - y[i - 1]) * (pick - x[i - 1]) / (x[i] - x[i - 1]);
    return null;
  }
  const slotFmt = (o, T) => (o == null ? 'nicht gedraftet' : `R${Math.ceil(Math.round(o) / T)}.${String(((Math.round(o) - 1) % T) + 1).padStart(2, '0')}`);
  const nbaRound = pk => (pk <= 30 ? '1. Runde' : '2. Runde');
  // Erwarteter Pick = Modell (seit 24.11.2026 kein Konsens-Override mehr)
  function expPick(I, p) { return p.dr.q[2]; }

  function rangeBox(ctx, I, p) {
    const e = ctx.ui.esc, C = I.C, M = C.meta.model || {}, kb = konsOf(I, p);
    const bt = (M.backtest || []).map(x => `${x.test}: Draft ja/nein AUC ${de(x.aucRel, 2)} (relevante Spieler), Pick-Reihenfolge ρ ${de(x.pickRho, 2)}`).join('; ');
    const why = `Grobe Erwartung, keine Prognose: „wenn er nach dieser Saison in den Draft ginge“. Gelernt aus ${(M.n || 0).toLocaleString('de-DE')} letzten College-Saisons 2010–${M.lastDraft} und ihrem echten Draft-Ausgang (${M.nDrafted} gedraftet, Barttorvik). Zwei Modelle: Vorsaison (Recruiting, echtes Alter am Draft-Tag, Klasse, Größe, Conference, Vorjahr) und Produktion (BPM, Usage, Wurfprofil, Rebounds, Steals/Blocks, Minuten …), überblendet nach Saison-Minuten (Produktion voll ab ${M.blendMin} Min.). Backtest ${bt}. Pick-Spanne = mittlere 50 % der Fehler im Training, gilt nur falls gedraftet. Nicht drin: Combine/Wingspan, Verletzungen, Scouting.`;
    const head = `<div class="card-head"><h2>${tip('📈 Draft Range', why)}</h2></div>`;
    const q = p.dr.q, ch = Math.round(p.dr.p * 100);
    const w = Math.round((p.dr.w || 0) * 100);
    const basis = `Gewichtung: ${100 - w} % Vorsaison-Modell · ${w} % Produktion (${p.min[0]} Min. diese Saison)`;
    const curve = C.meta.tthq, T = (curve && curve.teams) || 12;
    let tthqCell = '', tradeCell = '';
    if (isTthq(ctx) && curve) {
      const mid = tthqSlot(curve, q[2]), lo = tthqSlot(curve, q[1]), hi = tthqSlot(curve, q[3]);
      const span = slotFmt(lo, T) === slotFmt(hi, T) ? slotFmt(lo, T) : `${slotFmt(lo, T)} – ${slotFmt(hi, T)}`;
      tthqCell = `<div class="cs-rcell big"><small>${tip(`TTHQ-Draft (${T} Teams)`, `Typischer Platz im TTHQ-Gesamtdraft (mit Veteranen, ohne Keeper) für diesen NBA-Pick. Basis: ${curve.source} — der k-beste Rookie nach NBA-Pick bekam dort den k-ten Rookie-Slot. Ein Jahrgang, also nur ein grober Anhalt. Keeper und Pick-Besitz verschieben das jedes Jahr.`)}</small><b>${span}</b><span>Mitte ${slotFmt(mid, T)}${mid == null ? '' : ` (Pick ${Math.round(mid)})`} · Modell · falls er kommt</span></div>`;
      const ks = kb ? tthqSlot(curve, kb.rank) : null;
      const tm = slotTrade(mid), tk = slotTrade(ks);
      if (tm || tk) {
        const fmtT = (x, s) => `${slotFmt(s, T)} = <b>${x.v}</b> (≈ Dynasty-Rang ${x.r})`;
        tradeCell = `<div class="cs-rcell"><small>${tip('Trade-Wert (TTHQ)', 'Wert dieses Slots im Trade Analyzer (Slot-Werte aus dem Backtest: was NBA-Picks dieser Position historisch wert wurden) und der Dynasty-Rang mit gleichem Wert. Gilt für den nächsten Draft; Picks in späteren Jahren ×0,9 je Jahr.')}</small><b>${(tm || tk).v}</b><span>${tm ? 'Modell ' + fmtT(tm, mid) : ''}${tm && tk ? '<br>' : ''}${tk ? 'Konsens ' + fmtT(tk, ks) : ''}</span></div>`;
      }
    }
    const S = (I.KB && I.KB.sources) || [];
    const kNote = kb ? `<div class="cs-rnote">${konsTag(e, I, kb)} <span>Konsens-Board <b>#${kb.rank}</b> (${S.map(x => `${SRC_SHORT[x.key] || x.key} ${kb.src[x.key] != null ? '#' + kb.src[x.key] : '—'}`).join(' · ')})${kb.move ? ` · Woche ${kb.move > 0 ? '+' : ''}${kb.move}` : ''}${isTthq(ctx) && curve ? ` · TTHQ-Slot laut Konsens ${slotFmt(tthqSlot(curve, kb.rank), T)}` : ''} <small class="muted">· Stand ${fmtD(I.KB.asof)} · nur Anzeige</small></span></div>`
      : (I.KB ? `<div class="cs-rnote"><span class="muted">Nicht auf dem Konsens-Board (Top ${I.KB.players.length}).</span></div>` : '');
    return `<div class="card cs-range">${head}
      <div class="cs-rmeta"><span>${e(basis)}</span></div>
      <div class="cs-rgrid">
        ${tthqCell}
        <div class="cs-rcell"><small>Draft-Chance</small><b class="cs-ev ${ch >= 60 ? 'hoch' : ch >= 30 ? 'mittel' : 'niedrig'}">${ch} %</b><span>wird gedraftet, falls er sich anmeldet</span></div>
        <div class="cs-rcell"><small>Erw. NBA-Draft</small><b>${nbaRound(q[1])}${nbaRound(q[3]) !== nbaRound(q[1]) ? '–' + nbaRound(q[3]).slice(0, 2) + ' Rd.' : ''}</b><span>Modell: Pick ${q[1]}–${q[3]} (Mitte ${q[2]})</span></div>
        ${tradeCell}
      </div>${kNote}
    </div>`;
  }

  // ---------- 🎓 College Production Comp ----------
  function compBox(ctx, I, p) {
    const e = ctx.ui.esc, F = I.C.meta.compFeats || [], P = I.C.meta.compPool || {};
    if (picked.for !== p.id) { picked.for = p.id; picked.comp = 0; }
    const comps = p.comps || [];
    const c = comps[picked.comp] || null;
    const ax = RADAR.filter(k => F.includes(k));
    const vals = arr => ax.map(k => (arr ? arr[F.indexOf(k)] / 100 : null));
    const tipsOf = (arr, nm) => ax.map(k => `${nm} · ${FEAT_LABEL[k]}: ${arr ? arr[F.indexOf(k)] : '—'}. Perzentil`);
    const series = [{ name: p.n, vals: vals(p.pc), tips: tipsOf(p.pc, p.n) }].concat(c ? [{ name: c[0], vals: vals(c[5]), tips: tipsOf(c[5], c[0]) }] : []);
    const radar = MFHFB.charts.radar({ axes: ax.map(k => ({ label: FEAT_LABEL[k] })), series, size: 300, label: 'Production Comp ' + p.n });
    const grp = { G: 'Guards', W: 'Wings', B: 'Bigs' }[p.b];
    const sub = `„Produziert wie …“ — nächste Nachbarn nach reinem College-Produktionsprofil (Mahalanobis-Distanz über ${F.length} Raten: ${F.map(f => FEAT_LABEL[f]).join(', ')}), nur unter ${grp}. Pool: ${(P[p.b] || 0).toLocaleString('de-DE')} Saisons 2010–heute von späteren NBA-Draftees und Top-College-Spielern. Ähnlichkeit 100 = identisch. Kein Alter, keine Größe, kein späterer NBA-Erfolg — reine Produktion.`;
    const table = `<table class="table compact cs-rtable"><thead><tr><th>Perzentil in der Gruppe</th><th class="num"><i class="cs-sw sel-1"></i>${e(p.n.split(' ').slice(-1)[0])}</th><th class="num"><i class="cs-sw sel-2"></i>${c ? e(c[0].split(' ').slice(-1)[0]) : 'Comp'}</th></tr></thead><tbody>
      ${F.map((f, i) => `<tr><td>${e(FEAT_LABEL[f])}</td><td class="num strong">${p.pc[i]}</td><td class="num">${c ? c[5][i] : '—'}</td></tr>`).join('')}</tbody></table>`;
    return `<div class="card cs-box"><div class="card-head"><h2>${tip('🎓 College Production Comp', sub)}</h2></div>
      <div class="cs-radar">${MFHFB.charts.chips(series.map(s => s.name))}${radar}${table}</div>
      ${comps.length ? `<div class="cs-list-head">Comp anklicken → ins Radar</div>${comps.map((m, i) => `<button type="button" class="dna-match cs-match${i === picked.comp ? ' on' : ''}" data-comp="${i}" aria-pressed="${i === picked.comp}">
          <span class="dna-mscore">${m[4]}</span>
          <span class="dna-nm">${e(m[0])} <small>${e(m[1])} · ${m[2] - 1}/${String(m[2]).slice(2)} · ${e(m[3])}</small></span>
          <span class="dna-plus">${i === picked.comp ? '●' : '＋'}</span></button>`).join('')}`
        : '<div class="muted cs-pad">Kein Vergleich gefunden.</div>'}
    </div>`;
  }

  // ---------- 🧬 NBA-DNA ----------
  function dnaBox(ctx, I, p) {
    const e = ctx.ui.esc, d = p.dn, G = I.C.meta.dna || {}, RM = G.reliableMin || 250;
    const auc = G.auc || {}, cr = G.catR || {};
    const cx = G.typCross || {};
    const whyImp = `Real-Life-Impact = mind. eine NBA-Saison mit 1.000+ Minuten und BPM ≥ 0 (mindestens Liga-Schnitt bei echter Rolle; Basketball-Reference) in den ersten 4 Jahren — ${G.nImpact} von ${(G.n || 0).toLocaleString('de-DE')} College-Abschlusssaisons 2010–22. Backtest 2017–22: AUC ${de(auc.impact_prod, 2)}. Chancen nachkalibriert (roh waren sie im Backtest zu optimistisch).`;
    const whyTyp = `FALLS er es in die NBA schafft: bringt er mehr Real-Life-Impact (BPM) oder mehr Fantasy-Wert (9-Cat)? Gemessen an ${G.typN} NBA-Spielern mit 1.000+ Min.: ihre minutengewichtete NBA-BPM minus der BPM, die ihr Fantasy-Wert erwarten ließ. Wert = BPM-Punkte darüber (+, Impact-Typ) oder darunter (−, Fantasy-Typ). Backtest 2017–22: trifft den Typ mit ρ ${de((cx.typ || {}).typ, 2)} (schwaches bis mittleres Signal) und sagt den Fantasy-Wert selbst nicht voraus (ρ ${de((cx.typ || {}).fanAvg, 2)}) — misst also wirklich etwas anderes. Historisch eher Impact-Typ: hohe College-BPM, Effizienz, Defense/Def.-Rebounds, viele Würfe am Ring, gutes Assist/TO, ältere/unbekanntere Spieler (z. B. Robert Williams, Kyle Anderson). Eher Fantasy-Typ: hohe Usage, Punkte- und Dreier-Volumen, Blocks, Recruiting-Pedigree (z. B. Collin Sexton, Dillon Brooks).`;
    const why = `Setzt er sich in der NBA durch, und welche Fantasy-Kategorien nimmt er mit? Gelernt aus ${(G.n || 0).toLocaleString('de-DE')} letzten College-Saisons ${(G.years || [])[0]}–${(G.years || [])[1]} (Barttorvik) und den ersten 4 NBA-Jahren (BBM): ${G.nRot} schafften eine Rotations-Saison (40+ Spiele, 18+ Min.), ${G.nFan} eine Top-150-Saison (9-Cat). Backtest 2017–22: AUC ${de(auc.rot_prod, 2)} (Rotation) bzw. ${de(auc.fan_prod, 2)} (Fantasy). Rechnet auf der laufenden Saison (plus halbe Vorsaison): früh in der Saison tragen Recruiting, Alter und Größe, ab ${RM} Saison-Minuten ist das Bild verlässlich. Kategorie-Profil = erwartetes NBA-z, falls er es schafft (0 = Ø Rotationsspieler); wie gut sich jede Kategorie übersetzt: ${DCATS.map(([k, l]) => `${l} r ${de(cr[k], 2)}`).join(', ')}.`;
    const head = `<div class="card-head"><h2>${tip('🧬 NBA-DNA', why)}</h2></div>`;
    if (!d) return `<div class="card cs-box">${head}<div class="muted cs-pad">Keine NBA-DNA berechnet.</div></div>`;
    const ok = p.min[0] >= RM, prev = p.min[1] >= RM;
    const sl = `${I.C.meta.season - 1}/${String(I.C.meta.season).slice(2)}`;
    const minLine = `Hat ${sl} bisher <b>${p.min[0]} Min.</b> gespielt${p.min[1] ? ` · Vorsaison ${p.min[1]} Min. fließt zur Hälfte mit ein` : ' · keine Vorsaison'}.`;
    const flag = ok
      ? `<span class="cs-tag ok" title="Ab ${RM} Saison-Minuten gilt die DNA als verlässlich.">verlässlich (ab ${RM} Min.)</span>`
      : `<span class="cs-tag warn" title="Unter ${RM} Saison-Minuten ist die Produktion ein kleiner Datensatz. Das Modell stützt sich dann vor allem auf Recruiting, Alter, Größe${prev ? ' und die Vorsaison' : ''}.">kleiner Datensatz · ab ${RM} Min. verlässlich</span>`;
    const sgn = v => (v >= 0 ? '+' : '') + de(v, 2);
    // Spinnennetz: z → 0..1 mit z = 0 (Ø NBA-Rotationsspieler) auf dem Mittelring, ±1,5 z am Rand.
    // Die 9 Kategorien ordnet MFHFB.charts.radar automatisch im Hub-Standard (STL oben …).
    const toR = z => Math.max(0, Math.min(1, 0.5 + z / 3));
    const radar = MFHFB.charts.radar({
      axes: DCATS.map(([k, l]) => ({ label: `${l} ${sgn(d.nz[k])}` })),
      series: [
        { name: p.n, vals: DCATS.map(([k]) => toR(d.nz[k])), tips: DCATS.map(([k, l]) => `${p.n} · ${l}: erwartetes NBA-z ${sgn(d.nz[k])} · Übersetzung r ${de(cr[k], 2)}`) },
        { name: 'Ø NBA-Rotationsspieler', vals: DCATS.map(() => 0.5), tips: DCATS.map(([, l]) => `Ø NBA-Rotationsspieler · ${l}: z 0`) },
      ],
      size: 300, label: 'NBA-DNA ' + p.n,
    });
    return `<div class="card cs-box">${head}
      <div class="cs-box-sub">${flag} ${minLine}</div>
      <div class="cs-rgrid" style="grid-template-columns:1fr 1fr 1fr">
        <div class="cs-rcell"><small>NBA-Rotation</small><b class="cs-ev ${d.rot >= 0.5 ? 'hoch' : d.rot >= 0.2 ? 'mittel' : 'niedrig'}">${pct(d.rot)}</b><span>Saison mit 40+ Spielen, 18+ Min.</span></div>
        <div class="cs-rcell"><small>${tip('Real-Life-Impact', whyImp)}</small><b class="cs-ev ${(d.imp || 0) >= 0.4 ? 'hoch' : (d.imp || 0) >= 0.15 ? 'mittel' : 'niedrig'}">${d.imp == null ? '—' : pct(d.imp)}</b><span>Saison 1.000+ Min. mit BPM ≥ 0</span></div>
        <div class="cs-rcell"><small>Fantasy-Top-150</small><b class="cs-ev ${d.fan >= 0.4 ? 'hoch' : d.fan >= 0.15 ? 'mittel' : 'niedrig'}">${pct(d.fan)}</b><span>9-Cat, ersten 4 NBA-Jahre</span></div>
      </div>
      ${typBlock(ctx, d, whyTyp)}
      <div class="cs-list-head">Fantasy-Profil 9-Cat, falls er es schafft (z · Mittelring = Ø Rotationsspieler)</div>
      <div class="cs-radar">${MFHFB.charts.chips([p.n, 'Ø NBA-Rotationsspieler'])}${radar}</div>
      <div class="cs-list-head">Ähnliche Ex-College-Spieler mit NBA-Karriere</div>
      <div class="table-wrap"><table class="table compact"><tbody>${(d.comps || []).map(c => `<tr><td class="strong">${e(c[0])}</td><td class="num">${c[1] - 1}/${String(c[1]).slice(2)}</td><td class="small">${e(c[3].startsWith('Top') ? `beste NBA-Saison #${c[3].slice(4)}` : c[3])}</td></tr>`).join('')}</tbody></table></div>
    </div>`;
  }

  // Typ-Regler: Fantasy-Typ ◀ ● ▶ Impact-Typ (±2 BPM-Punkte) + Treiber + erwartete NBA-BPM
  function typBlock(ctx, d, why) {
    const e = ctx.ui.esc, t = d.typ;
    if (!t) return '';
    const pos = Math.max(2, Math.min(98, 50 + t.v * 25));
    const word = t.v >= 0.5 ? 'eher Impact-Typ' : t.v <= -0.5 ? 'eher Fantasy-Typ' : 'ausgeglichen';
    const sg = v => (v >= 0 ? '+' : '−') + de(Math.abs(v));
    const list = arr => arr.map(x => e(x[0])).join(', ') || '—';
    return `<div class="cs-list-head">${tip('Real-Life-Impact ↔ Fantasy-Wert', why)}</div>
      <div class="cs-typ">
        <div class="cs-typ-scale" role="img" aria-label="${e(word)}, ${sg(t.v)} BPM-Punkte"><span>Fantasy-Typ</span><div class="cs-typ-track"><i style="left:${pos}%"></i></div><span>Impact-Typ</span></div>
        <div class="cs-typ-txt"><b>${e(word)}</b> · ${sg(t.v)} BPM-Punkte ${t.v >= 0 ? 'mehr' : 'weniger'} Real-Life-Impact, als sein Fantasy-Wert erwarten lässt${d.bpm != null ? ` · erwartete NBA-BPM ${sg(d.bpm)} <small class="muted">(falls 1.000+ Min.; 0 = Liga-Schnitt)</small>` : ''}</div>
        <div class="cs-typ-why"><span class="up">▶ Impact-Typ:</span> ${list(t.plus)}<br><span class="down">◀ Fantasy-Typ:</span> ${list(t.minus)}</div>
      </div>`;
  }

  // ---------- Big Board ----------
  function boardBox(ctx, b) {
    const e = ctx.ui.esc;
    if (!b) return '';
    const strip = s => String(s || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    return `<div class="card" style="margin-top:14px"><div class="card-head"><h2>📋 MFHFB Big Board 2027</h2><span class="muted small">MFHFB-Fantasy-Rang #${e(b.pick)}${b.tier ? ' · ' + e(b.tier) : ''} · Stand Sommer 2026</span></div>
      <div class="cs-pad">${b.measurements ? `<p><b>${e(strip(b.measurements))}</b></p>` : ''}${b.fantasy ? `<p>${e(strip(b.fantasy))}</p>` : ''}${b.scouting ? `<p class="muted">${e(strip(b.scouting))}</p>` : ''}${b.link ? `<p><a href="${e(b.link)}" target="_blank" rel="noopener">Mehr zum Spieler ↗</a></p>` : ''}</div></div>`;
  }

  // ---------- Liste ----------
  function filtered(ctx, I, st) {
    const q = nk(st.q);
    let L = I.C.p.filter(p => (st.grp === 'all' || p.b === st.grp) && (st.cls === 'all' || p.cl === st.cls)
      && (!q || nk(p.n).includes(q) || nk(p.t).includes(q)) && (!st.board || konsOf(I, p)));
    if (ctx.league.key === 'cbb' && st.own !== 'all') L = L.filter(p => (st.own === 'free') === !ownerOf(ctx, I, p));
    const key = {
      board: p => -p.sc, chance: p => -p.dr.p, rec: p => -(p.rec || 0), bpm: p => -((p.s && p.s[9]) || -99),
      konsens: p => { const k = konsOf(I, p); return k ? k.rank : 1000 - p.sc; },
    }[st.sort] || (p => -p.sc);
    return L.slice().sort((a, b) => key(a) - key(b));
  }
  // Konsens-Spieler ohne College-Datensatz (international, noch kein Spiel)
  function boardOnly(I) {
    return ((I.KB && I.KB.players) || []).filter(k => !I.byName.has(nk(k.name)));
  }
  function listHtml(ctx, st) {
    const e = ctx.ui.esc, I = index(ctx.data), L = filtered(ctx, I, st).slice(0, 300);
    const curve = I.C.meta.tthq, T = (curve && curve.teams) || 12;
    const right = p => {
      const k = expPick(I, p);
      if (isTthq(ctx)) return `${slotFmt(tthqSlot(curve, k), T)} <small>${Math.round(p.dr.p * 100)}%</small>`;
      return `~${Math.round(k)} <small>${Math.round(p.dr.p * 100)}%</small>`;
    };
    const rows = L.map((p, i) => { const kb = konsOf(I, p), o = ownerOf(ctx, I, p);
      return `<a class="dna-row${String(p.id) === String(st.sel) ? ' active' : ''}" href="${ctx.href('collegescouting', p.id)}">
        <span class="dna-idx">${i + 1}</span>
        <span class="dna-nm">${e(p.n)} ${konsTag(e, I, kb)} <small>${e(p.t)} · ${e(p.cl)}${o ? ' · ' + e(o.short || o.name) : ''}</small></span>
        <span class="dna-avg">${right(p)}</span></a>`; }).join('');
    const q = nk(st.q);
    const extra = st.board ? boardOnly(I).filter(k => !q || nk(k.name).includes(q) || nk(k.school).includes(q)).map(k => `<div class="dna-row" title="Kein College-Datensatz in dieser Saison (international oder noch ohne Spiel)"><span class="dna-idx">·</span><span class="dna-nm">${e(k.name)} ${konsTag(e, I, k)} <small>${e(k.school || '')} · keine College-Daten</small></span><span class="dna-avg">${isTthq(ctx) ? slotFmt(tthqSlot(curve, k.rank), T) + ' <small>K</small>' : 'K~' + k.rank}</span></div>`).join('') : '';
    return rows + extra || '<div class="muted" style="padding:12px">Keine Treffer.</div>';
  }

  function resolve(ctx) {
    const st = getState(ctx), I = index(ctx.data);
    const par = ctx.params[0] ? decodeURIComponent(ctx.params[0]) : null;
    let sel = null;
    if (par) sel = I.byId.get(String(par)) || I.byName.get(nk(par)) || null;
    if (!sel && st.sel) sel = I.byId.get(String(st.sel)) || null;
    if (!sel) sel = filtered(ctx, I, st)[0] || null;
    return { ...st, sel: sel ? sel.id : null };
  }

  function mainHtml(ctx, st) {
    const e = ctx.ui.esc, I = index(ctx.data), p = I.byId.get(String(st.sel));
    if (!p) return ctx.ui.empty('Kein Prospect gewählt', 'Links einen Prospect auswählen.', '🎓');
    const b = boardOf(I, p), kb = konsOf(I, p), o = ownerOf(ctx, I, p), C = I.C;
    const age = p.age != null ? `${de(p.age)} J. am Draft-Tag` : `≈ ${de(p.ageEst)} J. (Klassen-Schnitt, kein Geburtsdatum)`;
    const stat = C.meta.stat || [];
    const line = (s, lbl) => (s ? `<tr><td>${lbl}</td>${s.map((v, i) => `<td class="num">${v == null ? '—' : i < 1 ? v : de(v)}</td>`).join('')}</tr>` : '');
    const season = C.meta.season, sl = `${season - 1}/${String(season).slice(2)}`, sp = `${season - 2}/${String(season - 1).slice(2)}`;
    return `
      <div class="dna-head">
        <div><h2 class="dna-title display">${e(p.n)}</h2>
          <div class="page-sub">${e(p.t)} · ${e(p.c)} · ${e(p.cl)}${p.ht ? ' · ' + e(p.ht.replace('-', "'")) + '"' : ''} · ${e(p.role || '')} · ${e(age)}</div></div>
        <div class="dna-badge" title="Rang nach Board-Score (Draft-Chance × Pick-Wert) unter ${C.p.length} Prospects"><b>#${p.rk}</b><small>Modell-Board</small></div>
      </div>
      <div class="dna-tags">${[
        p.rec != null ? `Recruiting-Perzentil <b>${de(p.rec)}</b>` : 'ohne Recruiting-Rang',
        kb ? `Konsens-Board <b>#${kb.rank}</b>` : null,
        b ? `MFHFB-Fantasy-Board <b>#${e(b.pick)}</b>` : null,
        o ? `Fantasy-Team: <b>${e(o.name)}</b>` : ctx.league.key === 'cbb' ? 'Fantasy: <b>frei</b>' : null,
      ].filter(Boolean).join(' · ')}</div>
      <div class="cs-grid" style="margin-bottom:14px">
        <div data-comp>${compBox(ctx, I, p)}</div>
        <div>${dnaBox(ctx, I, p)}</div>
      </div>
      <div class="table-wrap"><table class="table compact" data-nosort><thead><tr><th>Saison</th>${stat.map(s => `<th class="num">${e(s)}</th>`).join('')}</tr></thead>
        <tbody>${line(p.s, sl + (p.min[0] < 700 ? '*' : ''))}${line(p.sp, sp)}</tbody></table></div>
      ${p.min[0] < 700 ? `<div class="muted cs-hint">* laufende Saison, ${p.min[0]} Min. — Per-Game-Werte noch wackelig.</div>` : ''}
      <div data-range>${rangeBox(ctx, I, p)}</div>
      ${boardBox(ctx, b)}`;
  }

  MFHFB.pages.register({
    id: 'collegescouting',
    section: 'players',
    label: 'College Scouting',
    icon: '🎓',
    applies: A,
    data: DATA,
    title: ({ data, params }) => {
      if (!params[0] || !data.COLLEGE_PROSPECTS) return 'College Scouting';
      const I = index(data), par = decodeURIComponent(params[0]);
      const p = I.byId.get(par) || I.byName.get(nk(par));
      return p ? `${p.n} · College Scouting` : 'College Scouting';
    },
    render(ctx) {
      const { ui, data } = ctx, e = ui.esc;
      const C = data.COLLEGE_PROSPECTS;
      if (!C || !C.p) return ui.empty('Keine College-Scouting-Daten', 'Die Datei erzeugt der CBB Sync (Schritt „College Scouting“).', '🎓');
      const st = resolve(ctx);
      ctx._bbcs = st;
      const M = C.meta, stand = new Date(M.built).toLocaleDateString('de-DE');
      const seg = (key, opts) => `<div class="seg" role="group">${opts.map(([k, l]) => `<button type="button" class="seg-btn${String(st[key]) === k ? ' active' : ''}" data-set="${key}" data-val="${k}">${l}</button>`).join('')}</div>`;
      return `
        <div class="page-head">
          <h1 class="page-title display">${tip('🎓 College Scouting', 'Basketball-Gegenstück zum NFL College Scouting: College Production Comp, NBA-DNA und Draft Range je College-Spieler. Quellen: Barttorvik (Spieler-Saisons seit 2008 inkl. späterem NBA-Pick, Geburtsdatum, Recruiting-Rang), BBM (NBA-Saisons für die NBA-DNA), Konsens-Board (Tankathon, ESPN, Bleacher Report, FanSided; wöchentlich gemittelt, nur Anzeige), MFHFB-Fantasy-Board 2027. Alle Vergleiche sind Ähnlichkeits-, keine Erfolgsprognosen. Internationale Prospects ohne College-Saison stehen nur über das Konsens-Board drin.')}</h1>
          <div class="page-sub">Saison ${M.season - 1}/${String(M.season).slice(2)} · ${C.p.length} College-Prospects (Draft-Chance ab 5 % oder Top-Recruit) · Stand ${stand}${isTthq(ctx) ? ' · rechts: typischer TTHQ-Draft-Slot' : ''}</div>
        </div>
        <div class="controls">
          ${seg('grp', GROUPS)}
          <select class="select" data-cls aria-label="Klasse">${CLS.map(([k, l]) => `<option value="${k}"${st.cls === k ? ' selected' : ''}>${l}</option>`).join('')}</select>
          ${ctx.league.key === 'cbb' ? seg('own', [['all', 'Alle'], ['free', 'Frei'], ['owned', 'Gerostert']]) : ''}
          <label class="cs-chk"><input type="checkbox" data-board${st.board ? ' checked' : ''}> nur Konsens-Board (inkl. international)</label>
        </div>
        <div class="dna-layout">
          <aside class="card dna-side">
            <input type="search" class="search" placeholder="Spieler oder Schule …" value="${e(st.q)}" data-q aria-label="Prospect suchen">
            <div class="cs-lctl"><select class="select" data-sort aria-label="Sortierung">${SORTS.map(([k, l]) => `<option value="${k}"${st.sort === k ? ' selected' : ''}>Sortierung: ${l}</option>`).join('')}</select></div>
            <div class="dna-list-head"><span>Prospect</span><span title="${isTthq(ctx) ? 'Typischer TTHQ-Draft-Slot für den erwarteten NBA-Pick (Modell; K = laut Konsens bei Spielern ohne College-Daten) · Draft-Chance' : 'Erwarteter NBA-Pick (Modell; K = Konsens bei Spielern ohne College-Daten) · Draft-Chance'}">${isTthq(ctx) ? 'TTHQ · Chance' : 'NBA-Pick · Chance'}</span></div>
            <div class="dna-list" data-list>${listHtml(ctx, st)}</div>
          </aside>
          <div class="dna-main" data-main>${mainHtml(ctx, st)}</div>
        </div>`;
    },
    mount(root, ctx) {
      const st = ctx._bbcs || resolve(ctx);
      const save = (patch, full = true) => { ctx.store.setJSON('bbcs', { ...getState(ctx), ...patch }); if (full) ctx.refresh(); };
      ctx.store.setJSON('bbcs', { ...getState(ctx), sel: st.sel });
      root.querySelectorAll('[data-set]').forEach(b => b.addEventListener('click', () => save({ [b.dataset.set]: b.dataset.val })));
      const cls = root.querySelector('[data-cls]'); if (cls) cls.addEventListener('change', () => save({ cls: cls.value }));
      const so = root.querySelector('[data-sort]'); if (so) so.addEventListener('change', () => save({ sort: so.value }));
      const bo = root.querySelector('[data-board]'); if (bo) bo.addEventListener('change', () => save({ board: bo.checked }));
      const q = root.querySelector('[data-q]');
      if (q) q.addEventListener('input', () => { save({ q: q.value }, false); root.querySelector('[data-list]').innerHTML = listHtml(ctx, { ...st, q: q.value }); });
      root.addEventListener('click', ev => {
        const b = ev.target.closest('[data-comp]'); if (!b || b.tagName !== 'BUTTON') return;
        picked.comp = +b.dataset.comp;
        const I = index(ctx.data), p = I.byId.get(String(st.sel)), host = root.querySelector('div[data-comp]');
        if (p && host) host.innerHTML = compBox(ctx, I, p);
      });
      const list = root.querySelector('[data-list]'), act = root.querySelector('.dna-row.active');
      if (list && act) list.scrollTop = Math.max(0, act.offsetTop - list.offsetTop - list.clientHeight / 2);
    },
  });
})();
