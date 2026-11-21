// ============================================================
//  GHOST SCREEN — Engine (21.11.2026)
// ============================================================
//  Rechnet eine Stufe (Stage) aus plays.js in Einzelbilder um:
//   • Angriff: Keyframes [t, x, y] (Sekunden, Meter), weich interpoliert
//   • Verteidigung: Regeln je Zeitpunkt ('man', 'trail', 'via', 'go', 'stay'),
//     jeder Verteidiger läuft mit begrenztem Tempo zu seinem Zielpunkt —
//     dadurch kommt er nach einem Screen oder Cut automatisch zu spät.
//   • Ball: hold / pass / shot (Flugzeit aus der Distanz)
//  Koordinaten: x quer (−7,5 … 7,5, links negativ), y = Abstand zur
//  Grundlinie (Korb oben bei y = 1,575). Maße nach FIBA.
//  Läuft im Browser und in Node (Prüfscript scripts/ghost-check.js).
// ============================================================
(function (root) {
  const GS = root.GS = root.GS || {};
  const RIM = [0, 1.575];
  const DT = 1 / 30;
  GS.RIM = RIM;
  GS.DT = DT;

  const hyp = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
  const unit = (dx, dy) => { const l = Math.hypot(dx, dy) || 1; return [dx / l, dy / l]; };
  const toward = (from, to) => unit(to[0] - from[0], to[1] - from[1]);

  // ---------- Angriff: Keyframes ----------
  function pathAt(kf, t) {
    const n = kf.length;
    if (n === 1 || t <= kf[0][0]) return [kf[0][1], kf[0][2]];
    if (t >= kf[n - 1][0]) return [kf[n - 1][1], kf[n - 1][2]];
    let i = 0;
    while (i < n - 2 && kf[i + 1][0] <= t) i++;
    const a = kf[i], b = kf[i + 1];
    const u = (t - a[0]) / ((b[0] - a[0]) || 1);
    if (a[1] === b[1] && a[2] === b[2]) return [a[1], a[2]];
    // Nachbarpunkte für Catmull-Rom; an Haltepunkten keine Ausholbewegung
    const prev = i > 0 && !(kf[i - 1][1] === a[1] && kf[i - 1][2] === a[2]) ? kf[i - 1] : a;
    const next = i + 2 < n && !(kf[i + 2][1] === b[1] && kf[i + 2][2] === b[2]) ? kf[i + 2] : b;
    const out = [];
    for (let k = 1; k <= 2; k++) {
      const p0 = prev[k], p1 = a[k], p2 = b[k], p3 = next[k];
      const u2 = u * u, u3 = u2 * u;
      out.push(0.5 * (2 * p1 + (-p0 + p2) * u + (2 * p0 - 5 * p1 + 4 * p2 - p3) * u2 + (-p0 + 3 * p1 - 3 * p2 + p3) * u3));
    }
    return out;
  }
  GS.pathAt = pathAt;

  // ---------- Ball ----------
  // Ereignisse: {t, hold:'O1'} · {t, pass:['O1','O2']} · {t, shot:'O2', kind:'layup'|'jumper'|'three'}
  function prepBall(stage, opos) {
    const ev = (stage.ball || []).map(e => Object.assign({}, e)).sort((a, b) => a.t - b.t);
    ev.forEach(e => {
      if (e.pass) {
        const [from, to] = e.pass;
        let d = 0.5;
        const v = e.lob ? 8 : e.bounce ? 9.5 : 11;
        for (let k = 0; k < 4; k++) d = Math.max(0.35, hyp(opos(from, e.t), opos(to, e.t + d)) / v);
        e.t1 = e.t + d;
        e.from = from; e.to = to;
      } else if (e.shot) {
        e.t1 = e.t + (e.kind === 'layup' ? 0.45 : 0.95);
      }
    });
    return ev;
  }
  function ballState(ev, t) {
    let cur = null;
    for (const e of ev) { if (e.t <= t) cur = e; else break; }
    if (!cur) return { mode: 'none' };
    if (cur.hold) return { mode: 'hold', who: cur.hold };
    if (cur.pass) return t < cur.t1 ? { mode: 'pass', e: cur, u: (t - cur.t) / (cur.t1 - cur.t) } : { mode: 'hold', who: cur.to };
    if (cur.shot) return t < cur.t1 ? { mode: 'shot', e: cur, u: (t - cur.t) / (cur.t1 - cur.t) } : { mode: 'done', e: cur };
    return { mode: 'none' };
  }

  // ---------- Kompilieren ----------
  // Zwei Durchgänge: erst gerade Pässe, dann werden Pässe, die zu nah an einem
  // Verteidiger vorbeigehen, leicht um ihn herum gebogen (wie ein echter Pass
  // am Arm vorbei).
  function compile(stage) {
    const O = stage.o || {}, D = stage.defense === false ? {} : (stage.d || {});
    const oIds = Object.keys(O), dIds = Object.keys(D);
    const opos = (id, t) => pathAt(O[id], t);
    const ballEv = prepBall(stage, opos);
    const last = ballEv[ballEv.length - 1];
    const dur = stage.dur || Math.max(...oIds.map(id => O[id][O[id].length - 1][0]), last ? (last.t1 || last.t) + 0.6 : 2);
    const nF = Math.ceil(dur / DT) + 1;
    const rules = {};
    dIds.forEach(id => { rules[id] = D[id].map(r => ({ t: r[0], m: r[1], a: r[2], o: r[3] || {} })).sort((a, b) => a.t - b.t); });

    const passPoint = (e, u) => {
      const a = opos(e.from, e.t), b = opos(e.to, e.t1);
      const m = [(a[0] + b[0]) / 2 + (e.bend ? e.bend[0] : 0), (a[1] + b[1]) / 2 + (e.bend ? e.bend[1] : 0)];
      const w = 1 - u;
      return [w * w * a[0] + 2 * w * u * m[0] + u * u * b[0], w * w * a[1] + 2 * w * u * m[1] + u * u * b[1]];
    };
    const ballPosAt = (t) => {
      const s = ballState(ballEv, t);
      if (s.mode === 'hold') return { p: opos(s.who, t), z: 0, s };
      if (s.mode === 'pass') {
        const z = s.e.lob ? Math.sin(Math.PI * s.u) * 1.3
          : s.e.bounce ? (s.u < 0.62 ? 0.3 * Math.sin(Math.PI * s.u / 0.62) : 0.22 * Math.sin(Math.PI * (s.u - 0.62) / 0.38))
          : Math.sin(Math.PI * s.u) * 0.35;
        return { p: passPoint(s.e, s.u), z, s };
      }
      if (s.mode === 'shot') {
        const a = opos(s.e.shot, s.e.t);
        const h = s.e.kind === 'layup' ? 0.5 : 1.6;
        return { p: [a[0] + (RIM[0] - a[0]) * s.u, a[1] + (RIM[1] - a[1]) * s.u], z: Math.sin(Math.PI * s.u) * h, s };
      }
      if (s.mode === 'done') return { p: RIM.slice(), z: 0, s };
      return { p: null, z: 0, s };
    };

    function build() {
      const dpos = {}, viaIdx = {}, lastRule = {}, stuck = {};
      const frames = new Array(nF);
      for (let f = 0; f < nF; f++) {
        const t = Math.min(dur, f * DT);
        const o = {};
        oIds.forEach(id => { o[id] = opos(id, t); });
        const bp = ballPosAt(t);
        const holder = bp.s.mode === 'hold' ? bp.s.who : null;
        const shotUp = bp.s.mode === 'shot' || bp.s.mode === 'done';
        const B = bp.p || o[oIds[0]] || RIM;
        const desired = (r, id) => {
          if (shotUp && dpos[id]) return dpos[id];           // nach dem Wurf bleibt die Verteidigung stehen
          if (r.m === 'go') return r.a;
          if (r.m === 'stay') return dpos[id] || [0, 5];
          if (r.m === 'via') {
            const pts = r.a; let i = viaIdx[id] || 0;
            const cur = dpos[id] || pts[0];
            while (i < pts.length - 1 && hyp(cur, pts[i]) < 0.35) i++;
            viaIdx[id] = i;
            return pts[i];
          }
          const T = o[r.a];
          if (!T) return dpos[id] || [0, 5];
          if (r.m === 'trail') {
            const P = opos(r.a, Math.max(0, t - (r.o.lag || 0.3)));
            const u = toward(P, RIM);
            return [P[0] + u[0] * 0.6, P[1] + u[1] * 0.6];
          }
          const ur = toward(T, RIM);
          if (holder === r.a) { const g = r.o.gap || 1.0; return [T[0] + ur[0] * g, T[1] + ur[1] * g]; }
          const ub = toward(T, B);
          if (r.o.deny) return [T[0] + ub[0] * 0.95 + ur[0] * 0.45, T[1] + ub[1] * 0.95 + ur[1] * 0.45];
          if (r.o.help) { const mid = [(B[0] + RIM[0]) / 2, (B[1] + RIM[1]) / 2]; return [T[0] + (mid[0] - T[0]) * r.o.help, T[1] + (mid[1] - T[1]) * r.o.help]; }
          return [T[0] + ur[0] * 1.2 + ub[0] * 0.7, T[1] + ur[1] * 1.2 + ub[1] * 0.7];
        };
        const d = {};
        dIds.forEach(id => {
          const rs = rules[id];
          let r = rs[0];
          for (const x of rs) if (x.t <= t) r = x;
          if (lastRule[id] !== r) { lastRule[id] = r; viaIdx[id] = 0; }
          const want = desired(r, id);
          if (!dpos[id]) dpos[id] = want.slice();
          else {
            const sp = (r.o.speed || 6.0) * DT * (stuck[id] > 0 ? 0.3 : 1);
            if (stuck[id] > 0) stuck[id] -= DT;
            const cur = dpos[id];
            const dd = hyp(cur, want);
            if (dd <= sp) dpos[id] = want.slice();
            else { const u = toward(cur, want); dpos[id] = [cur[0] + u[0] * sp, cur[1] + u[1] * sp]; }
          }
          // Niemand läuft durch einen anderen Spieler hindurch: rausschieben
          const me = dpos[id];
          const push = (q, r) => {
            const dd = hyp(me, q);
            if (dd < r && dd > 1e-6) { const u = toward(q, me); me[0] = q[0] + u[0] * r; me[1] = q[1] + u[1] * r; }
            else if (dd <= 1e-6) { me[0] += r; }
          };
          for (const k in o) {
            const before = hyp(me, o[k]);
            push(o[k], 0.68);
            // Eigene Plays: Wer gegen einen Angreifer läuft (Screen), hängt kurz fest
            if (stage.screenDrag && before < 0.66 && !(r.m === 'man' && r.a === k)) stuck[id] = 0.35;
          }
          for (const k in d) push(d[k], 0.62);
          d[id] = me.slice();
        });
        frames[f] = { t, o, d, ball: { p: bp.p, z: bp.z, mode: bp.s.mode, who: holder } };
      }
      return frames;
    }

    let frames = build();
    if (dIds.length) {
      let bent = false;
      ballEv.forEach(e => {
        if (!e.pass || e.lob) return;
        const a = opos(e.from, e.t), b = opos(e.to, e.t1);
        const len = hyp(a, b); if (len < 1) return;
        const n = [-(b[1] - a[1]) / len, (b[0] - a[0]) / len];
        let worst = null;
        for (let u = 0.12; u <= 0.9; u += 0.02) {
          const S = [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u];
          const fr = frames[Math.min(nF - 1, Math.round((e.t + u * (e.t1 - e.t)) / DT))];
          for (const k in fr.d) {
            const P = fr.d[k];
            const dd = hyp(S, P);
            if (dd < 0.85 && (!worst || dd < worst.dd)) worst = { dd, u, off: (P[0] - S[0]) * n[0] + (P[1] - S[1]) * n[1] };
          }
        }
        if (!worst) return;
        const need = 0.85 - Math.abs(worst.off);
        if (need <= 0) return;
        const k = Math.min(2.2, need / (2 * worst.u * (1 - worst.u)));
        const sgn = worst.off >= 0 ? -1 : 1;
        e.bend = [n[0] * k * sgn, n[1] * k * sgn];
        bent = true;
      });
      if (bent) frames = build();
    }

    // Screens: Balken quer zur Laufrichtung des Abgeschirmten
    const screens = (stage.screens || []).map(s => {
      const mid = (s.t0 + s.t1) / 2;
      const P = opos(s.by, mid), F = opos(s.for, s.t0);
      const u = toward(P, F);
      return Object.assign({}, s, { at: [P[0] + u[0] * 0.38, P[1] + u[1] * 0.38], dir: [-u[1], u[0]] });
    });

    const frameAt = (t) => frames[Math.max(0, Math.min(nF - 1, Math.round(t / DT)))];
    return { stage, dur, frames, frameAt, ballEv, screens, oIds, dIds, opos, passPoint, hasD: dIds.length > 0 };
  }
  GS.compile = compile;

  // Abstand zum nächsten Verteidiger (für „frei“-Ringe und das Prüfscript)
  GS.separation = function (fr, id) {
    let m = Infinity;
    for (const k in fr.d) m = Math.min(m, hyp(fr.o[id], fr.d[k]));
    return m;
  };
  GS.hyp = hyp;
})(typeof window !== 'undefined' ? window : globalThis);
