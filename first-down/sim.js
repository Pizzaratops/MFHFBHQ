// ============================================================
//  FIRST DOWN — Spiel-Simulation + Renderer (26.11.2026)
// ============================================================
//  buildSim(): Offense-Play (aus tree.js) gegen Defense-Call,
//  Ausgang vorher gewürfelt (game.js), hier in Bewegung übersetzt.
//  Ergebnis: Frames (alle 1/30 s) mit Positionen + Ball.
//  Zwei Renderer: 8-bit-Seitenansicht (Canvas 256×160, NES-Look,
//  selbst gezeichnete Pixel-Spieler) und Taktik-Ansicht von oben.
//  Koordinaten wie tree.js: x = Yards von links, d = Yards vor LOS.
// ============================================================
(function () {
  'use strict';
  const SPEED = { T: 2.6, G: 2.6, C: 2.6, QB: 3.2, HB: 6.5, FB: 5.5, TE: 6, WR: 7.2, DE: 4, DT: 3.6, LB: 5.4, CB: 6.6, NB: 6.6, S: 6.6 };
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const lerp = (a, b, f) => [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f];
  const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);

  function track(start, spec, role) {
    const sp = (spec && spec.speed) || SPEED[role] || 5;
    const segs = [];
    let t = (spec && spec.delay) || 0, cur = start;
    ((spec && spec.path) || []).forEach(w => {
      const nx = [start[0] + w[0], start[1] + w[1]];
      const dur = Math.max(dist(nx, cur) / sp, 0.05);
      segs.push({ t0: t, t1: t + dur, a: cur, b: nx });
      t += dur; cur = nx;
      if (w[2]) { segs.push({ t0: t, t1: t + w[2], a: cur, b: cur }); t += w[2]; }
    });
    return { start, segs, end: t, last: cur };
  }
  function tpos(tr, t) {
    if (!tr || !tr.segs.length || t <= tr.segs[0].t0) return tr ? tr.start : [0, 0];
    for (const s of tr.segs) if (t <= s.t1) return lerp(s.a, s.b, (t - s.t0) / (s.t1 - s.t0 || 1));
    return tr.last;
  }

  // ---------- Playbooks ----------
  const OPLAYS = {
    iz: { node: 'o-run-iz', kind: 'run', name: 'Inside Zone', short: 'Lauf durch die Mitte', icon: '🏃' },
    oz: { node: 'o-run-oz', kind: 'run', name: 'Outside Zone', short: 'Lauf nach außen', icon: '🏃' },
    power: { node: 'o-run-power', kind: 'run', name: 'Power', short: 'Guard zieht rüber, stark bei kurzen Distanzen', icon: '💪' },
    iso: { node: 'o-run-iso', kind: 'run', name: 'Iso mit FB', short: 'Fullback räumt vorneweg', icon: '💪' },
    quick: { node: 'o-pass-quick', kind: 'pass', name: 'Kurzer Pass', short: 'Slant, Ball nach 1 Sekunde weg', icon: '🎯' },
    mid: { node: 'o-pass-mid', kind: 'pass', name: 'Mittlerer Pass', short: 'Dig hinter die Linebacker', icon: '🎯' },
    deep: { node: 'o-pass-deep', kind: 'pass', name: 'Tiefer Pass', short: 'Post über den Safety, Big Play oder nichts', icon: '🚀' },
    screen: { node: 'o-pass-screen', kind: 'pass', name: 'Screen', short: 'Kurz zum HB, Blocker davor', icon: '🧱' },
    pa: { node: 'o-pass-pa', kind: 'pass', name: 'Play-Action', short: 'Lauf antäuschen, dann werfen', icon: '🎭' },
  };
  const DCALLS = {
    box: { name: '8 in der Box', short: 'Lauf stoppen, nur 1 Safety tief', icon: '🧱', node: 'd-box' },
    c2: { name: 'Cover 2', short: 'Raumdeckung, 2 Safeties tief, 4 Rusher', icon: '🕸️', node: 'd-zone' },
    man: { name: 'Man Cover 1', short: 'Manndeckung, 1 Safety tief, 4 Rusher', icon: '🔒', node: 'd-man' },
    blitz: { name: 'Blitz', short: '6 Rusher, Manndeckung dahinter', icon: '⚡', node: 'd-blitz' },
  };

  // ---------- Defense-Pakete ----------
  function defPackage(dKey, form, offIds) {
    const has = id => offIds.indexOf(id) >= 0;
    const fol = (id, off, lag) => has(id) ? { follow: id, off: off || [0, 1.2], lag: lag == null ? 0.25 : lag } : { path: [[0, 2]] };
    const specs = { LE: RUSH(1.2), DT1: RUSH(0.3), DT2: RUSH(-0.3), RE: RUSH(-1.2) };
    const starts = {};
    let sacker = 'DT1';
    const n = form === 'nickel';
    if (dKey === 'box') {
      starts.SS = n ? [31.5, 6.5] : [31, 6]; starts.FS = [26.65, 14.5];
      Object.assign(specs, { CB1: fol('X'), CB2: fol('Z'), SS: { path: [[0, -1.2]] }, FS: { path: [[0, 2]] }, LB1: { path: [[0.6, -1.2]] }, LB2: { path: [[-0.4, -1.2]] } });
      if (n) specs.NB = fol('SL', [0, 1.2]); else specs.LB3 = { path: [[-0.5, -1.2]] };
    } else if (dKey === 'c2') {
      Object.assign(specs, { CB1: { path: [[3.5, -2]] }, CB2: { path: [[-3.5, -2]] }, FS: { path: [[-5, 6]] }, SS: { path: [[4, 6]] } });
      if (n) Object.assign(specs, { NB: { path: [[5, 4]] }, LB1: { path: [[-1.5, 4]] }, LB2: { path: [[4, 4]] } });
      else Object.assign(specs, { LB1: { path: [[-3, 4]] }, LB2: { path: [[0, 5]] }, LB3: { path: [[2, 4]] }, FS: { path: [[-7, 6]] }, SS: { path: [[6, 7]] } });
    } else if (dKey === 'man') {
      starts.CB1 = [4.5, 2]; starts.CB2 = [47.5, 2]; if (n) starts.NB = [13, 2];
      Object.assign(specs, { CB1: fol('X'), CB2: fol('Z'), FS: { path: [[n ? 8.65 : 6.65, 3]] }, LB2: fol('HB', [0, 3.2], 0.2), LB1: { path: [[0, 2.5]] } });
      if (n) Object.assign(specs, { NB: fol('SL', [0, 1.1]), SS: fol('TE', [0.4, 1.1], 0.4) });
      else Object.assign(specs, { LB3: fol('TE', [0.4, 1.1], 0.4), SS: fol('FB', [0, 2.5], 0.3) });
    } else if (dKey === 'blitz') {
      sacker = 'LB1';
      Object.assign(specs, { CB1: fol('X'), CB2: fol('Z'), FS: { path: [[n ? 8.65 : 6.65, 1]] }, LB1: { path: [[0.8, -3], [1.4, -4.6]] }, LB2: fol('TE', [0, 1.2], 0.3) });
      if (n) Object.assign(specs, { NB: { delay: 0.05, path: [[6, -3], [9.5, -4.2]] }, SS: fol('HB', [0, 3.5], 0.3) });
      else Object.assign(specs, { LB3: { path: [[-1.5, -3], [-3.5, -4.4]] }, SS: fol('FB', [0, 2.5], 0.3) });
      if (n) { starts.NB = [17, 2.6]; starts.LB1 = [25.0, 2.8]; } else { starts.LB1 = [24.2, 2.8]; starts.LB3 = [32.5, 2.6]; }
    }
    return { specs, starts, sacker };
  }

  // ---------- Simulation ----------
  // dec: {type:'run'|'fumble', yards} | {type:'sack'|'int'|'inc'} | {type:'comp', yac}
  function mulberry(a) { return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function setup(oKey, dKey, seed) {
    const O = OPLAYS[oKey];
    const dg = FD_NODES[O.node].diagram;
    const offF = FD_OFF[dg.off];
    const formD = dg.off === 'i21' ? 'base43' : 'nickel';
    const defF = FD_DEF[formD];
    const pk = defPackage(dKey, formD, Object.keys(offF));
    if (seed != null) {
      const r = mulberry(seed);
      const follows = Object.keys(pk.specs).filter(k => pk.specs[k].follow);
      if (follows.length) {
        const win = follows[Math.floor(r() * follows.length)];
        follows.forEach(k => { const sp = pk.specs[k]; pk.specs[k] = Object.assign({}, sp, { lag: sp.lag + (k === win ? 0.5 : r() * 0.15), off: k === win ? [sp.off[0] * 2 + (r() - 0.5) * 2, sp.off[1] + 1.2] : sp.off }); });
      }
      Object.keys(pk.specs).forEach(k => {
        const sp = pk.specs[k];
        if (sp.follow || !sp.path || !sp.path.length) return;
        const last = sp.path[sp.path.length - 1];
        if (last[1] < 0) return; // Rusher
        const path = sp.path.slice(0, -1).concat([[last[0] + (r() - 0.5) * 3.5, last[1] + (r() - 0.5) * 2.5]]);
        pk.specs[k] = Object.assign({}, sp, { path });
      });
    }
    const A = [], byId = {};
    Object.keys(offF).forEach(id => {
      const [x, d, lab] = offF[id];
      const a = { id, side: 'off', lab, start: [x, d], tr: track([x, d], dg.paths && dg.paths[id], lab) };
      A.push(a); byId[id] = a;
    });
    Object.keys(defF).forEach(id => {
      const [x, d, lab] = defF[id];
      const start = pk.starts[id] || [x, d];
      const spec = pk.specs[id] || null;
      const a = { id, side: 'def', lab, start, spec, tr: spec && spec.follow ? null : track(start, spec, lab) };
      A.push(a); byId[id] = a;
    });
    const sPos = (a, t) => a.tr ? tpos(a.tr, t) : a.start;
    const defPre = (a, t) => {
      if (a.tr) return tpos(a.tr, t);
      const tg = byId[a.spec.follow];
      const tp = sPos(tg, Math.max(0, t - a.spec.lag));
      return lerp(a.start, [tp[0] + a.spec.off[0], tp[1] + a.spec.off[1]], clamp(t / 0.6, 0, 1));
    };
    const ball = dg.ball || [];
    const hand = ball.find(b => b[0] === 'hand');
    const pass = ball.find(b => b[0] === 'pass');
    return { O, dg, A, byId, sPos, defPre, pk, hand, pass, defF };
  }

  // ---------- Read: Wer ist frei? Welche Lücke? ----------
  const LANE_NAMES = { L: 'Links', M: 'Mitte', R: 'Rechts' };
  const READS = { quick: ['X', 'SL', 'Z', 'TE'], mid: ['X', 'SL', 'Z', 'TE'], deep: ['X', 'SL', 'Z'], pa: ['X', 'SL', 'Z', 'HB'], screen: null };
  function readOptions(oKey, dKey, seed) {
    const S = setup(oKey, dKey, seed);
    const { O, dg, A, byId, sPos, defPre, hand, pass } = S;
    const defs = A.filter(a => a.side === 'def');
    const rusher = a => a.spec && a.spec.path && a.spec.path.length && (a.start[1] + a.spec.path[a.spec.path.length - 1][1]) < 0;
    if (O.kind === 'run') {
      const th = hand ? hand[2] : 0.7;
      const P = sPos(byId[hand ? hand[1] : 'HB'], th);
      const cx = clamp(P[0] + 1, 8, 45);
      const lanes = [['L', cx - 5], ['M', cx], ['R', cx + 5]].map(([id, x]) => {
        let crowd = 0;
        defs.forEach(a => { const q = defPre(a, th + 0.5); crowd += Math.exp(-((q[0] - x) ** 2 + (q[1] - 1.5) ** 2) / 10); });
        return { id, name: LANE_NAMES[id], x, crowd };
      });
      const mx = Math.max(...lanes.map(l => 1 / (0.3 + l.crowd)));
      lanes.forEach(l => { l.open = (1 / (0.3 + l.crowd)) / mx; });
      return { kind: 'run', tDec: th, opts: lanes, best: lanes.reduce((b, l) => l.open > b.open ? l : b).id };
    }
    const tp = pass[2];
    const Pq = sPos(byId.QB, tp);
    if (!READS[oKey]) return null;
    const recv = READS[oKey].filter(id => byId[id] && dg.paths && dg.paths[id] && !dg.paths[id].block);
    const opts = recv.map(id => {
      const a = byId[id];
      let f = 0.5, C = sPos(a, tp + f);
      for (let k = 0; k < 2; k++) { f = Math.max(0.35, dist(Pq, C) / 20); C = sPos(a, tp + f); }
      let sep = 99;
      defs.forEach(dd => { if (rusher(dd)) return; sep = Math.min(sep, dist(defPre(dd, tp + f), C)); });
      return { id, lab: a.lab, C, flight: f, sep, depth: C[1] };
    });
    opts.forEach(o => { o.open = clamp((o.sep - 0.8) / 5, 0.05, 1); });
    const mx = Math.max(...opts.map(o => o.open));
    opts.forEach(o => { o.rel = o.open / mx; });
    return { kind: 'pass', tDec: tp, opts, best: opts.reduce((b, o) => o.open > b.open ? o : b).id };
  }

  function buildSim(oKey, dKey, dec, yl, opts) {
    opts = opts || {};
    const { O, dg, A, byId, sPos, defPre, pk, hand, pass } = setup(oKey, dKey, opts.seed);
    const toGoal = 100 - yl;
    const R = { yards: 0, label: '', td: false, turnover: false, safety: false, type: dec.type, labelAt: 0, pc: dec.pc, why: dec.why };

    let cM = null, tCM = 0;
    let carrier = null, cS = null, cE = null, tC0 = 0, tC1 = 0, tReact = 1e9, noTackle = false;
    let sacker = null, tSack = 0, Q = null, picker = null, tf = 0, tp = 0, C = null, Pq = null, endT = 0, fumbleRec = null;

    if (O.kind === 'run') {
      const th = hand ? hand[2] : 0.7;
      carrier = byId[hand ? hand[1] : 'HB'];
      const P = sPos(carrier, th);
      let y = dec.yards;
      if (y >= toGoal) { y = toGoal; R.td = true; }
      if (yl + y <= 0) { R.safety = true; }
      const endD = R.td ? toGoal + 3 : y;
      const last = carrier.tr.last;
      let ex = clamp(P[0] + (last[0] - P[0]) * 0.8 + (Math.random() - 0.5) * 3, 3, 50);
      if (opts.lane != null) { ex = clamp(opts.lane + (Math.random() - 0.5) * 2.5, 3, 50); if (endD > 1.2) cM = [opts.lane, 1]; }
      cS = P; cE = [ex, endD]; tC0 = th;
      tCM = cM ? th + dist(cS, cM) / 6.3 : 0;
      tC1 = (cM ? tCM + dist(cM, cE) / 6.3 : th + dist(cS, cE) / 6.3);
      tC1 = Math.max(tC1, th + 0.7);
      tReact = th + 0.25; noTackle = R.td;
      R.yards = y;
      if (dec.type === 'fumble') { R.turnover = true; R.label = 'FUMBLE!'; }
      else R.label = R.td ? 'TOUCHDOWN!' : R.safety ? 'SAFETY!' : yardLabel(y);
      R.labelAt = tC1; endT = tC1 + (dec.type === 'fumble' ? 1.2 : 0.9);
    } else {
      tp = pass[2]; tf = pass[2] + pass[3];
      const target = byId[opts.target || pass[1]];
      if (opts.target) {
        const q0 = sPos(byId.QB, tp); let f = 0.5, c0 = sPos(target, tp + f);
        for (let k = 0; k < 2; k++) { f = Math.max(0.35, dist(q0, c0) / 20); c0 = sPos(target, tp + f); }
        tf = tp + f;
      }
      if (dec.type === 'sack') {
        sacker = byId[pk.sacker] || byId.DT1;
        tSack = tp + 0.15;
        Q = sPos(byId.QB, tSack);
        let y = Math.round(Q[1]) - 1;
        if (yl + y <= 0) R.safety = true;
        R.yards = y; R.label = R.safety ? 'SAFETY!' : 'SACK!'; R.labelAt = tSack; endT = tSack + 1.1;
      } else {
        Pq = sPos(byId.QB, tp);
        C = sPos(target, tf);
        if (dec.type === 'comp') {
          let total = Math.round(C[1] + dec.yac);
          if (total >= toGoal) { total = toGoal; R.td = true; }
          const endD = R.td ? toGoal + 3 : Math.max(total, C[1]);
          carrier = target; cS = C;
          cE = [clamp(C[0] + (26.65 - C[0]) * 0.25 + (Math.random() - 0.5) * 4, 3, 50), endD];
          tC0 = tf; tC1 = tf + Math.max(0.4, dist(cS, cE) / 6.6); tReact = tf + 0.1; noTackle = R.td;
          R.yards = total; R.label = R.td ? 'TOUCHDOWN!' : yardLabel(total); R.labelAt = tC1; endT = tC1 + 0.9;
        } else if (dec.type === 'inc') {
          R.label = dec.label || 'INCOMPLETE'; R.labelAt = tf + 0.2; endT = tf + 1.3;
        } else if (dec.type === 'int') {
          let best = null, bd = 1e9;
          A.forEach(a => { if (a.side === 'def') { const d = dist(defPre(a, tf), C); if (d < bd) { bd = d; best = a; } } });
          picker = best; R.turnover = true; R.label = 'INTERCEPTION!'; R.labelAt = tf + 0.2; endT = tf + 1.8;
        }
      }
    }

    // ---------- Frames ----------
    const dt = 1 / 30, frames = [];
    let prev = null, tackler = null, tackS = null, pickS = null, pickE = null, sackS = null;
    const nT = Math.ceil((endT + 0.6) / dt);
    for (let i = 0; i <= nT; i++) {
      const t = i * dt, P = {};
      // Offense
      A.forEach(a => {
        if (a.side !== 'off') return;
        if (carrier && a === carrier && t >= tC0) P[a.id] = cM ? (t < tCM ? lerp(cS, cM, clamp((t - tC0) / (tCM - tC0), 0, 1)) : lerp(cM, cE, clamp((t - tCM) / (tC1 - tCM), 0, 1))) : lerp(cS, cE, clamp((t - tC0) / (tC1 - tC0), 0, 1));
        else if (Q && a.id === 'QB' && t >= tSack) P[a.id] = Q;
        else if (picker && t > tf + 0.35 && prev) P[a.id] = chase(prev[a.id], prev[picker.id], SPEED[a.lab] * 0.8, 1.0, dt);
        else P[a.id] = sPos(a, t);
      });
      // Defense
      const cPos = carrier && t >= tC0 ? P[carrier.id] : null;
      if (carrier && !tackler && !noTackle && t >= tReact) {
        let best = null, bd = 1e9;
        A.forEach(a => { if (a.side === 'def') { const d = dist(prev ? prev[a.id] : a.start, cE); if (d < bd) { bd = d; best = a; } } });
        tackler = best; tackS = prev ? prev[best.id] : best.start;
      }
      A.forEach(a => {
        if (a.side !== 'def') return;
        if (sacker && a === sacker) {
          if (!sackS) sackS = defPre(a, 0.35);
          P[a.id] = t < 0.35 ? defPre(a, t) : t >= tSack ? [Q[0] + 0.4, Q[1] + 0.6] : lerp(sackS, [Q[0] + 0.4, Q[1] + 0.6], (t - 0.35) / (tSack - 0.35));
        } else if (picker && a === picker) {
          if (!pickS) { pickS = defPre(a, tp); pickE = [C[0], C[1] - 7]; }
          P[a.id] = t < tp ? defPre(a, t) : t < tf ? lerp(pickS, C, (t - tp) / (tf - tp)) : lerp(C, pickE, clamp((t - tf) / 1.3, 0, 1));
        } else if (tackler && a === tackler) {
          const tgt = [cE[0] + 0.3, cE[1] + 0.7];
          P[a.id] = lerp(tackS, tgt, clamp((t - tReact) / (tC1 - tReact), 0, 1));
        } else if (t >= tReact && prev && cPos) {
          P[a.id] = chase(prev[a.id], cPos, SPEED[a.lab] * 0.9, 1.3, dt);
        } else if (dec.type === 'inc' && t >= tf - 0.2 && prev) {
          P[a.id] = chase(prev[a.id], C, SPEED[a.lab] * 0.7, 1.0, dt);
        } else {
          let p = defPre(a, t);
          // Blitzer bleiben ohne Sack am Blocker hängen
          P[a.id] = p;
        }
      });
      // Ball
      let b;
      if (t < 0.22) b = { p: lerp(P.C, P.QB, t / 0.22), air: 0.2 };
      else if (O.kind === 'run') {
        const h = t >= (hand ? hand[2] : 0.7) ? carrier.id : 'QB';
        b = { p: P[h], air: 0, held: h };
        if (dec.type === 'fumble' && t > tC1) {
          if (!fumbleRec) {
            let best = null, bd = 1e9;
            A.forEach(a => { if (a.side === 'def' && a !== tackler) { const d = dist(P[a.id], cE); if (d < bd) { bd = d; best = a; } } });
            fumbleRec = best || tackler;
          }
          const f = clamp((t - tC1) / 0.5, 0, 1);
          const loose = [cE[0] + 1.5, cE[1] + 1];
          b = f < 1 ? { p: lerp(cE, loose, f), air: Math.sin(f * Math.PI) * 0.6 } : { p: P[fumbleRec.id], air: 0, held: fumbleRec.id };
          if (f >= 1) P[fumbleRec.id] = loose;
        }
      } else if (Q || t < tp) b = { p: P.QB, air: 0, held: 'QB' };
      else if (t < tf) { const f = (t - tp) / (tf - tp); b = { p: lerp(Pq, C, f), air: Math.sin(f * Math.PI) * (1 + (tf - tp)) }; }
      else if (carrier) b = { p: P[carrier.id], air: 0, held: carrier.id };
      else if (picker) b = { p: P[picker.id], air: 0, held: picker.id };
      else { const f = clamp((t - tf) / 0.35, 0, 1); const away = [C[0] + (C[0] - Pq[0]) * 0.08, C[1] + 2]; b = { p: lerp(C, away, f), air: (1 - f) * 0.5, ground: f >= 1 }; }
      frames.push({ t, P, ball: b });
      prev = P;
    }
    const actors = A.map(a => ({ id: a.id, side: a.side, lab: a.lab }));
    R.tDec = O.kind === 'run' ? (hand ? hand[2] : 0.7) : (pass ? pass[2] : 0);
    return Object.assign(R, { frames, actors, dt, end: frames[frames.length - 1].t, ballHolderEnd: frames[frames.length - 1].ball.held });
  }
  function chase(from, to, sp, stopAt, dt) {
    const d = dist(from, to);
    if (d <= stopAt) return from;
    const step = Math.min(sp * dt, d - stopAt);
    return [from[0] + (to[0] - from[0]) / d * step, from[1] + (to[1] - from[1]) / d * step];
  }
  function yardLabel(y) { return y > 0 ? '+' + y + ' YARDS' : y === 0 ? 'KEIN RAUMGEWINN' : y + ' YARDS'; }

  // ============================================================
  //  Renderer 1: Retro-Seitenansicht (16-bit-Look, v2)
  // ============================================================
  //  Spieler als selbst gezeichnete Sprites mit dunklem Umriss und
  //  mehreren Schattierungen (Helm mit Glanzlicht, Schulterpolster,
  //  Rückennummer), Feld vorgerendert mit Rasentextur, Tribüne mit
  //  Parallaxe, Flutlicht, Ball mit Flugspur, Konfetti, Staub.
  const PW = 384, PH = 240, FT = 58, FB = 232, PX = 7, LS = 4.4, MARG = 26;
  const DIG = { 0: '111101101101111', 1: '010110010010111', 2: '111001111100111', 3: '111001111001111', 4: '101101111001001', 5: '111100111001111', 6: '111100111101111', 7: '111001001001001', 8: '111101111101111', 9: '111101111001111' };
  const BODY = [
    '....ooooo......',
    '...oHHSHHo.....',
    '..oHHHSHLHo....',
    '..oHHHHSHHMo...',
    '..ohHHHHHKMo...',
    '..ohhHHHKKMo...',
    '...oohhoKko....',
    '.oooTTTTTTooo..',
    'oTTJJJJJJJJTTo.',
    'oTJJJNNJJJJJKo.',
    '.ojJJNNJJJjKKo.',
    '.ojjJJJJJjjoKo.',
    '..ojJJJJJjo.oo.',
    '..oTTTTTTTo....',
    '..oPPPPPPpo....',
    '..oPPPpPPPo....',
  ];
  const LEGS = [
    ['..oPPooPPPo....', '..oWWo.oWWo....', '..oWWo.oWWo....', '..oWWo.oWWo....', '.oBBBo.oBBBo...', '.ooooo.ooooo...'],
    ['..oPPo.oPPPo...', '.oPPo...oWWWo..', '.oWWo....oWWo..', 'oWWo.....oWWo..', 'oBBo.....oBBBo.', 'ooo.......oooo.'],
    ['...oPPoPPo.....', '...oWWoWWo.....', '..oWWo.oWWo....', '..oWWo..oWo....', '.oBBo...oBBo...', '.ooo....ooo....'],
  ];
  const hex2 = h => { h = h.replace('#', ''); if (h.length === 3) h = h.split('').map(c => c + c).join(''); return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]; };
  const mix = (h, t, f) => { const a = hex2(h), b = hex2(t); return 'rgb(' + a.map((v, i) => Math.round(v + (b[i] - v) * f)).join(',') + ')'; };
  const lum = h => { const [r, g, b] = hex2(h); return (0.299 * r + 0.587 * g + 0.114 * b) / 255; };
  const spriteCache = {};
  function spriteCanvas(team, side, frame, flip, ball) {
    const key = [team.jersey, team.trim, team.helmet, side, frame, flip, ball].join('|');
    if (spriteCache[key]) return spriteCache[key];
    const off = side === 'off';
    const J = off ? team.jersey : '#f1f1f1', T = off ? team.trim : team.jersey;
    const pal = {
      o: '#0d0f16', H: team.helmet, h: mix(team.helmet, '#000000', 0.35), L: mix(team.helmet, '#ffffff', 0.55), S: team.stripe,
      M: '#c9ced6', K: '#e7b088', k: '#b5774f', T, J, j: mix(J, '#000000', 0.28),
      N: off ? (lum(team.jersey) > 0.6 ? team.trim : '#ffffff') : team.jersey,
      P: team.pants, p: mix(team.pants, '#000000', 0.25), W: off ? mix(team.trim, '#ffffff', 0.35) : '#ffffff', B: '#1b1b1f',
    };
    const rows = BODY.concat(LEGS[frame]);
    const cv = document.createElement('canvas'); cv.width = 15; cv.height = rows.length;
    const g = cv.getContext('2d');
    rows.forEach((r, y) => { for (let x = 0; x < 15; x++) { const c = r[x]; if (!c || c === '.') continue; g.fillStyle = pal[c]; g.fillRect(flip ? 14 - x : x, y, 1, 1); } });
    if (ball) { const bx = flip ? 1 : 10; g.fillStyle = '#0d0f16'; g.fillRect(bx, 9, 4, 4); g.fillStyle = '#8a4a1c'; g.fillRect(bx + 1, 10, 2, 2); g.fillStyle = '#c47a3a'; g.fillRect(bx + 1, 10, 1, 1); }
    spriteCache[key] = cv;
    return cv;
  }
  function digit5(g, n, x, y, scale, col) { const s = DIG[n]; g.fillStyle = col; for (let i = 0; i < 15; i++) if (s[i] === '1') g.fillRect(x + (i % 3) * scale, y + Math.floor(i / 3) * scale, scale, scale); }
  function fieldCanvas(offTeam, defTeam) {
    const W = 120 * PX, H = Math.round(53.3 * LS) + MARG * 2;
    const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
    const g = cv.getContext('2d');
    let seed = 99; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    const fx = u => Math.round((u + 10) * PX), fy = x => Math.round(MARG + x * LS);
    // Seitenbereich
    g.fillStyle = '#2b5e28'; g.fillRect(0, 0, W, H);
    g.fillStyle = '#a0522d'; g.fillRect(0, 2, W, 6); g.fillStyle = '#8a4526'; for (let x = 0; x < W; x += 9) g.fillRect(x, 4, 4, 1);
    // Rasenstreifen
    for (let u = 0; u < 100; u += 5) { g.fillStyle = Math.floor(u / 5) % 2 ? '#3a8433' : '#469a3e'; g.fillRect(fx(u), fy(0), 5 * PX, fy(53.3) - fy(0)); }
    // Endzonen mit Diagonalstreifen
    [[-10, offTeam.end], [100, defTeam.end]].forEach(([u0, col]) => {
      g.fillStyle = col; g.fillRect(fx(u0), fy(0), 10 * PX, fy(53.3) - fy(0));
      g.save(); g.beginPath(); g.rect(fx(u0), fy(0), 10 * PX, fy(53.3) - fy(0)); g.clip();
      g.fillStyle = mix(col, '#000000', 0.25);
      for (let k = -60; k < 300; k += 12) { g.beginPath(); g.moveTo(fx(u0) + k, fy(0)); g.lineTo(fx(u0) + k + 6, fy(0)); g.lineTo(fx(u0) + k + 6 - 300, fy(0) + 300); g.lineTo(fx(u0) + k - 300, fy(0) + 300); g.fill(); }
      g.restore();
    });
    // Textur
    for (let i = 0; i < 9000; i++) { const x = Math.floor(rnd() * W), y = fy(0) + Math.floor(rnd() * (fy(53.3) - fy(0))); g.fillStyle = rnd() < 0.5 ? 'rgba(0,0,0,.08)' : 'rgba(255,255,255,.06)'; g.fillRect(x, y, 1, 1); }
    // Linien
    g.fillStyle = 'rgba(255,255,255,.85)';
    for (let u = 0; u <= 100; u += 5) g.fillRect(fx(u) - (u % 50 === 0 ? 1 : 0), fy(0), u === 0 || u === 100 ? 3 : 2, fy(53.3) - fy(0));
    for (let u = 1; u < 100; u++) { if (u % 5 === 0) continue; [1.2, 23.6, 29.7, 52.1].forEach(lx => g.fillRect(fx(u), fy(lx) - 1, 1, 3)); }
    g.fillStyle = '#ffffff'; g.fillRect(fx(-10), fy(0) - 2, 120 * PX, 2); g.fillRect(fx(-10), fy(53.3), 120 * PX, 2);
    // Zahlen
    for (let u = 10; u < 100; u += 10) {
      const v = u <= 50 ? u : 100 - u, s = String(v);
      [12, 39].forEach(lx => { const y = fy(lx), w = s.length * 8 - 2, x0 = fx(u) - w / 2; s.split('').forEach((ch, i) => { digit5(g, +ch, x0 + i * 8 + 1, y + 1, 2, 'rgba(0,0,0,.35)'); digit5(g, +ch, x0 + i * 8, y, 2, 'rgba(255,255,255,.9)'); }); });
    }
    // Torstangen (gelb) am Ende der Endzonen
    [fx(-10) + 1, fx(110) - 3].forEach(x => { g.fillStyle = '#f5d000'; g.fillRect(x, fy(23.6), 2, fy(29.7) - fy(23.6)); });
    return cv;
  }
  function crowdCanvas() {
    const W = 1024, H = FT;
    const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
    const g = cv.getContext('2d');
    let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    const grd = g.createLinearGradient(0, 0, 0, 30); grd.addColorStop(0, '#070a1c'); grd.addColorStop(1, '#151c40'); g.fillStyle = grd; g.fillRect(0, 0, W, 30);
    // Flutlichtmasten
    for (let x = 60; x < W; x += 256) { g.fillStyle = '#2a2f45'; g.fillRect(x + 6, 6, 2, 24); g.fillStyle = '#fff6c8'; g.fillRect(x, 2, 14, 5); g.fillStyle = 'rgba(255,246,200,.12)'; g.beginPath(); g.arc(x + 7, 5, 14, 0, Math.PI * 2); g.fill(); }
    // Tribünenreihen
    const COLS = ['#d94a38', '#f2d16b', '#e8e8e8', '#5b8dd9', '#e88b3a', '#9b59b6', '#3fb37f', '#f0a3b5'];
    const rowsN = Math.floor((FT - 38) / 4);
    for (let r = 0; r < rowsN; r++) {
      const y = 30 + r * 4;
      g.fillStyle = r % 2 ? '#262c4a' : '#2d3456'; g.fillRect(0, y, W, 4);
      for (let x = (r % 2) * 2; x < W; x += 4) { if (rnd() < 0.12) continue; g.fillStyle = COLS[Math.floor(rnd() * COLS.length)]; g.fillRect(x, y, 2, 2); g.fillStyle = '#e7b088'; if (rnd() < 0.5) g.fillRect(x, y - 1, 2, 1); }
    }
    // Banden
    const by = FT - 6; g.fillStyle = '#0d1630'; g.fillRect(0, by, W, 6);
    for (let x = 0; x < W; x += 64) { g.fillStyle = x % 128 ? '#e84a0c' : '#13294b'; g.fillRect(x + 2, by + 1, 60, 4); g.fillStyle = 'rgba(255,255,255,.55)'; for (let k = 8; k < 56; k += 6) g.fillRect(x + k, by + 2, 3, 2); }
    return cv;
  }
  function PixelView(canvas) {
    const g = canvas.getContext('2d');
    canvas.width = PW; canvas.height = PH;
    g.imageSmoothingEnabled = false;
    let cam = 30, camX = 26.65, lsc = LS, fieldCv = null, fieldKey = '';
    const crowd = crowdCanvas();
    const scan = document.createElement('canvas'); scan.width = PW; scan.height = PH;
    (function () { const s = scan.getContext('2d'); s.fillStyle = 'rgba(0,0,0,.07)'; for (let y = 0; y < PH; y += 2) s.fillRect(0, y, PW, 1); const v = s.createRadialGradient(PW / 2, PH / 2, PH * 0.45, PW / 2, PH / 2, PH * 0.95); v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(1, 'rgba(0,0,0,.35)'); s.fillStyle = v; s.fillRect(0, 0, PW, PH); })();
    const sy = x => Math.round(FT + (FB - FT) / 2 + (x - camX) * lsc);
    const sx = u => Math.round(PW / 2 + (u - cam) * PX);

    function draw(sim, fi, ctx) {
      const fr = sim.frames[Math.min(fi, sim.frames.length - 1)];
      const yl = ctx.yl, key = ctx.offTeam.end + ctx.defTeam.end;
      if (key !== fieldKey) { fieldCv = fieldCanvas(ctx.offTeam, ctx.defTeam); fieldKey = key; }
      const bu = yl + fr.ball.p[1];
      cam += (clamp(bu + 5, 14, 86) - cam) * (fi === 0 ? 1 : 0.12);
      // Seitlich so weit herauszoomen, dass alle Spieler ins Bild passen
      let mn = 99, mx = -99;
      sim.actors.forEach(a => { const q = fr.P[a.id]; if (Math.abs(q[1] - fr.ball.p[1]) > 30) return; mn = Math.min(mn, q[0]); mx = Math.max(mx, q[0]); });
      const span = Math.max(14, mx - mn + 7);
      const lst = clamp((FB - FT - 26) / span, 2.4, LS);
      lsc += (lst - lsc) * (fi === 0 ? 1 : 0.12);
      const half = (FB - FT) / 2 / lsc;
      let cxT = (mn + mx) / 2 + 1.2;
      cxT = clamp(cxT, fr.ball.p[0] - half + 3, fr.ball.p[0] + half - 3);
      camX += (cxT - camX) * (fi === 0 ? 1 : 0.12);
      // Tribüne (Parallaxe)
      const cx = ((cam * PX * 0.45) % 512 + 512) % 512;
      g.drawImage(crowd, cx, 0, PW, FT, 0, 0, PW, FT);
      if (fi % 3 === 0) for (let k = 0; k < 3; k++) { g.fillStyle = 'rgba(255,255,255,.9)'; g.fillRect(Math.floor(Math.random() * PW), 30 + Math.floor(Math.random() * (FT - 40)), 2, 2); }
      // Feld
      const srcH = (FB - FT) * LS / lsc, srcX = (cam + 10) * PX - PW / 2, srcY = MARG + camX * LS - srcH / 2;
      g.fillStyle = '#2b5e28'; g.fillRect(0, FT, PW, PH - FT);
      g.drawImage(fieldCv, Math.round(srcX), srcY, PW, srcH, 0, FT, PW, FB - FT);
      g.fillStyle = '#2b5e28'; g.fillRect(0, FB, PW, PH - FB);
      const yTop = Math.max(FT, sy(0)), yBot = Math.min(FB, sy(53.3));
      g.fillStyle = 'rgba(80,140,255,.85)'; g.fillRect(sx(yl) - 1, yTop, 2, yBot - yTop);
      if (ctx.toGo && yl + ctx.toGo < 100) { g.fillStyle = 'rgba(255,225,40,.9)'; g.fillRect(sx(yl + ctx.toGo) - 1, yTop, 2, yBot - yTop); }
      g.save(); g.beginPath(); g.rect(0, FT - 14, PW, PH - FT + 14); g.clip();
      // Spieler
      const prev = sim.frames[Math.max(0, fi - 2)];
      const list = sim.actors.map(a => ({ a, p: fr.P[a.id] })).sort((m, n) => m.p[0] - n.p[0]);
      list.forEach(({ a, p }) => {
        const q = prev.P[a.id], moving = Math.hypot(p[0] - q[0], p[1] - q[1]) > 0.04;
        const facing = a.side === 'off' ? (p[1] < q[1] - 0.03 ? -1 : 1) : (p[1] > q[1] + 0.03 ? 1 : -1);
        const frame = moving ? 1 + (Math.floor(fi / 4) % 2) : 0;
        const x = sx(yl + p[1]), y = sy(p[0]);
        if (x < -12 || x > PW + 12) return;
        g.fillStyle = 'rgba(0,0,0,.3)'; g.fillRect(x - 6, y - 1, 12, 2); g.fillRect(x - 4, y - 2, 8, 4);
        const hasBall = fr.ball.held === a.id && fi > 7;
        g.drawImage(spriteCanvas(a.side === 'off' ? ctx.offTeam : ctx.defTeam, a.side, frame, facing < 0, hasBall), x - 7, y - 22);
      });
      // Ball + Flugspur
      if (!fr.ball.held || fi <= 7) {
        for (let k = 5; k >= 1; k--) {
          const pf = sim.frames[Math.max(0, fi - k)]; if (pf.ball.held || !pf.ball.air) continue;
          g.fillStyle = `rgba(255,240,200,${0.08 * (6 - k)})`; g.fillRect(sx(yl + pf.ball.p[1]) - 1, sy(pf.ball.p[0]) - 10 - Math.round(pf.ball.air * 22), 3, 2);
        }
        const bx = sx(yl + fr.ball.p[1]), by = sy(fr.ball.p[0]), h = Math.round(fr.ball.air * 22);
        g.fillStyle = 'rgba(0,0,0,.35)'; g.fillRect(bx - 2, by - 1, 5, 2);
        const yy = by - 10 - h;
        g.fillStyle = '#0d0f16'; g.fillRect(bx - 3, yy - 1, 7, 4); g.fillStyle = '#8a4a1c'; g.fillRect(bx - 2, yy, 5, 2); g.fillStyle = '#c47a3a'; g.fillRect(bx - 2, yy, 2, 1); g.fillStyle = '#f4f4f4'; g.fillRect(bx, yy, 1, 1);
      }
      // Effekte
      const t = fr.t;
      if (sim.label && t >= sim.labelAt) {
        const age = t - sim.labelAt;
        const holder = fr.ball.held ? fr.P[fr.ball.held] : fr.ball.p;
        const hx = sx(yl + holder[1]), hy = sy(holder[0]);
        if (sim.td) {
          let s2 = 11;
          for (let k = 0; k < 70; k++) { s2 = (s2 * 16807) % 2147483647; const r1 = s2 / 2147483647; s2 = (s2 * 16807) % 2147483647; const r2 = s2 / 2147483647; const px0 = r1 * PW, py0 = ((r2 * PH * 1.4 + age * 60 * (0.6 + r1)) % (PH + 20)) - 20; g.fillStyle = ['#ffd84d', '#ff6b5a', '#5bd0ff', '#7dff8a', '#ffffff'][k % 5]; g.fillRect(Math.round(px0 + Math.sin(age * 4 + k) * 4), Math.round(py0), 2, 3); }
        } else if (age < 0.5 && sim.type !== 'inc') {
          const r = Math.round(3 + age * 18); g.fillStyle = `rgba(230,220,190,${0.6 - age})`;
          [[-r, 0], [r, 0], [-r / 2, -2], [r / 2, -2], [0, -3]].forEach(([dx, dy]) => g.fillRect(hx + dx - 2, hy + dy - 2, 4, 3));
        }
      }
      g.restore();
      g.drawImage(scan, 0, 0);
    }
    const project = (p, ctx) => [sx(ctx.yl + p[1]) / PW, (sy(p[0]) - 10) / PH];
    return { draw, project, reset: () => { cam = 30; camX = 26.65; lsc = LS; } };
  }

  // ============================================================
  //  Renderer 2: Taktik-Ansicht von oben (Canvas)
  // ============================================================
  function TopView(canvas) {
    const g = canvas.getContext('2d');
    const S = 10, W = 53.3 * S, VIEW = 38;
    canvas.width = Math.round(W); canvas.height = VIEW * S;
    let camD = 8, lastTop = 0;
    function draw(sim, fi, ctx) {
      const fr = sim.frames[Math.min(fi, sim.frames.length - 1)];
      const yl = ctx.yl, bd = fr.ball.p[1];
      const want = clamp(bd + 6, 12, 120);
      camD += (Math.max(16, want) - camD) * (fi === 0 ? 1 : 0.1);
      const top = camD + VIEW / 2 - 6; lastTop = top;
      const Y = d => (top - d) * S;
      g.fillStyle = '#3f7d3a'; g.fillRect(0, 0, canvas.width, canvas.height);
      for (let u = -10; u < 110; u += 5) {
        const d0 = u - yl;
        const inEnd = u < 0 || u >= 100;
        g.fillStyle = inEnd ? (u < 0 ? ctx.offTeam.end : ctx.defTeam.end) : (Math.floor(u / 5) % 2 ? '#44863f' : '#3f7d3a');
        g.fillRect(0, Y(d0 + 5), canvas.width, 5 * S);
      }
      g.strokeStyle = 'rgba(255,255,255,.55)'; g.lineWidth = 1.2;
      for (let u = 0; u <= 100; u += 5) { const y = Y(u - yl); g.beginPath(); g.moveTo(0, y); g.lineTo(canvas.width, y); g.stroke(); }
      g.fillStyle = 'rgba(255,255,255,.5)'; g.font = '700 16px "Barlow Condensed", sans-serif'; g.textAlign = 'center';
      for (let u = 10; u < 100; u += 10) { const y = Y(u - yl); g.fillText(String(u <= 50 ? u : 100 - u), 40, y + 6); g.fillText(String(u <= 50 ? u : 100 - u), canvas.width - 40, y + 6); }
      g.lineWidth = 3;
      g.strokeStyle = '#3b82f6'; g.beginPath(); g.moveTo(0, Y(0)); g.lineTo(canvas.width, Y(0)); g.stroke();
      if (ctx.toGo && yl + ctx.toGo < 100) { g.strokeStyle = '#facc15'; g.beginPath(); g.moveTo(0, Y(ctx.toGo)); g.lineTo(canvas.width, Y(ctx.toGo)); g.stroke(); }
      sim.actors.forEach(a => {
        const p = fr.P[a.id];
        const x = p[0] * S, y = Y(p[1]);
        g.beginPath(); g.arc(x, y, 8.5, 0, Math.PI * 2);
        g.fillStyle = a.side === 'off' ? ctx.offTeam.jersey : '#f4f4f4'; g.fill();
        g.lineWidth = 2; g.strokeStyle = a.side === 'off' ? '#ffffff' : ctx.defTeam.jersey; g.stroke();
        g.fillStyle = a.side === 'off' ? '#ffffff' : ctx.defTeam.jersey;
        g.font = '800 9px "Barlow Condensed", sans-serif'; g.fillText(a.lab, x, y + 3.2);
      });
      const b = fr.ball, bx = b.p[0] * S + (b.held ? 6 : 0), by = Y(b.p[1]) - (b.held ? 0 : b.air * 10);
      g.fillStyle = '#8b4513'; g.beginPath(); g.ellipse(bx, by, 5, 3.4, 0, 0, Math.PI * 2); g.fill();
      g.strokeStyle = '#fff'; g.lineWidth = 1; g.stroke();
    }
    const project = (p) => [p[0] * S / canvas.width, ((lastTop - p[1]) * S) / canvas.height];
    return { draw, project, reset: () => { camD = 8; } };
  }

  // Statische Szene (für Quiz-Bilder): Aufstellung ohne Bewegung
  function staticSim(oKey, dKey) {
    const s = buildSim(oKey, dKey, OPLAYS[oKey].kind === 'run' ? { type: 'run', yards: 3 } : { type: 'inc' }, 25);
    return Object.assign({}, s, { frames: [s.frames[0]] });
  }

  window.FDSIM = { OPLAYS, DCALLS, buildSim, staticSim, readOptions, PixelView, TopView };
})();
