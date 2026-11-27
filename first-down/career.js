// ============================================================
//  FIRST DOWN KARRIERE — Spiel-Logik & Oberfläche (26.11.2026)
// ============================================================
//  Mischung aus Retro Bowl (Karriere, Kader, Coach-Punkte) und
//  Four Verts (Play-Calling), aber zum Lernen: Jede Woche Lektion
//  → Drill → Spiel. Kern ist der Read: Nach dem Snap friert das
//  Bild ein, du wählst den freien Receiver bzw. die Lauflücke.
//  Ausgang hängt vom Call (Modell) UND vom Read (Abstand im Bild) ab.
// ============================================================
(function () {
  'use strict';
  const { OPLAYS, DCALLS, buildSim, staticSim, readOptions, PixelView, TopView } = window.FDSIM;
  const $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  const rnd = Math.random;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const gauss = () => { let u = 0, v = 0; while (!u) u = rnd(); while (!v) v = rnd(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
  const pickW = w => { const ks = Object.keys(w).filter(k => w[k] > 0); let s = ks.reduce((a, k) => a + w[k], 0), r = rnd() * s; for (const k of ks) { r -= w[k]; if (r <= 0) return k; } return ks[ks.length - 1]; };
  const AU = n => window.FDAUDIO && window.FDAUDIO.fx(n);
  const ordinal = n => ['', '1ST', '2ND', '3RD', '4TH'][n] || '4TH';

  // ---------- Modell (gleiche Werte wie game.js) ----------
  const M = {
    iz: { box: { m: 1.4, sd: 2.2, bp: 0.01 }, c2: { m: 4.6, sd: 3.2, bp: 0.04 }, man: { m: 4.0, sd: 3, bp: 0.03 }, blitz: { m: 2.6, sd: 4.2, bp: 0.07 } },
    oz: { box: { m: 1.2, sd: 3, bp: 0.015 }, c2: { m: 4.2, sd: 4.2, bp: 0.05 }, man: { m: 3.8, sd: 3.8, bp: 0.04 }, blitz: { m: 1.9, sd: 4.8, bp: 0.08 } },
    power: { box: { m: 2.4, sd: 2, bp: 0.01 }, c2: { m: 4.1, sd: 2.6, bp: 0.03 }, man: { m: 3.8, sd: 2.5, bp: 0.03 }, blitz: { m: 2.5, sd: 3.3, bp: 0.05 } },
    iso: { box: { m: 2.2, sd: 1.8, bp: 0.005 }, c2: { m: 3.8, sd: 2.3, bp: 0.02 }, man: { m: 3.6, sd: 2.3, bp: 0.02 }, blitz: { m: 2.3, sd: 3, bp: 0.04 } },
    quick: { box: { c: 0.74, yac: 2.5, sd: 2.5, sack: 0.02, int: 0.015, bp: 0.03 }, c2: { c: 0.62, yac: 1.2, sd: 2, sack: 0.03, int: 0.025, bp: 0.01 }, man: { c: 0.60, yac: 2, sd: 2.5, sack: 0.03, int: 0.025, bp: 0.03 }, blitz: { c: 0.72, yac: 4, sd: 4, sack: 0.06, int: 0.02, bp: 0.08 } },
    mid: { box: { c: 0.60, yac: 2.5, sd: 3, sack: 0.06, int: 0.025, bp: 0.03 }, c2: { c: 0.60, yac: 2.5, sd: 3, sack: 0.06, int: 0.025, bp: 0.03 }, man: { c: 0.48, yac: 2.5, sd: 3, sack: 0.06, int: 0.035, bp: 0.03 }, blitz: { c: 0.40, yac: 3.5, sd: 4, sack: 0.18, int: 0.04, bp: 0.06 } },
    deep: { box: { c: 0.44, yac: 3, sd: 5, sack: 0.08, int: 0.04, bp: 0.15 }, c2: { c: 0.22, yac: 1.5, sd: 3, sack: 0.08, int: 0.07, bp: 0.04 }, man: { c: 0.34, yac: 3, sd: 5, sack: 0.09, int: 0.05, bp: 0.10 }, blitz: { c: 0.38, yac: 5, sd: 7, sack: 0.22, int: 0.05, bp: 0.20 } },
    screen: { box: { c: 0.86, yac: 5.5, sd: 4, sack: 0.01, int: 0.01, bp: 0.04 }, c2: { c: 0.84, yac: 3, sd: 3, sack: 0.01, int: 0.015, bp: 0.02 }, man: { c: 0.84, yac: 4, sd: 3.5, sack: 0.01, int: 0.015, bp: 0.03 }, blitz: { c: 0.88, yac: 9, sd: 6, sack: 0.01, int: 0.01, bp: 0.15 } },
    pa: { box: { c: 0.62, yac: 4, sd: 4, sack: 0.08, int: 0.025, bp: 0.12 }, c2: { c: 0.46, yac: 2.5, sd: 3.5, sack: 0.08, int: 0.04, bp: 0.04 }, man: { c: 0.46, yac: 3, sd: 4, sack: 0.09, int: 0.04, bp: 0.06 }, blitz: { c: 0.34, yac: 3.5, sd: 4.5, sack: 0.22, int: 0.04, bp: 0.08 } },
  };
  const AIR = { quick: 7, mid: 12, deep: 22, screen: -2, pa: 15 };
  const EY = (o, d) => { const m = M[o][d]; if (OPLAYS[o].kind === 'run') return m.m + m.bp * 15; return (1 - m.sack) * (m.c * (AIR[o] + m.yac + m.bp * 15)) - m.sack * 7 - m.int * 15; };
  const WHY = {
    box: { run: 'Gegen 8 in der Box hat der Lauf kaum Platz.', pass: 'Nur ein Safety tief: Hinter der Box ist Platz für Pässe.', pa: 'Die Box beißt auf die Lauf-Täuschung an.', screen: 'Der Screen bringt den Ball schnell an der vollen Box vorbei.' },
    c2: { run: 'Cover 2 lässt nur sechs Mann in der Box: gute Zeit zum Laufen.', pass: 'Zwei Safeties tief: Lange Pässe sind schwer, die Lücke liegt in der Mitte.', pa: 'Die Safeties bleiben tief, die Täuschung bringt wenig.', screen: 'Die Raumdeckung sieht den Screen und tackelt sofort.' },
    man: { run: 'Die Verteidiger schauen auf ihre Männer: Platz für den Lauf.', pass: 'Manndeckung: Wer sein Duell gewinnt, ist frei.', pa: 'Die Manndecker kleben an ihren Receivern, nicht am Lauf.', screen: 'Die Verteidiger laufen ihren Receivern hinterher.' },
    blitz: { run: 'Blitzer stehen in den Lücken: hopp oder top.', pass: 'Gegen den Blitz muss der Ball schnell weg, lange Routen haben keine Zeit.', pa: 'Die Täuschung kostet Zeit, die du gegen einen Blitz nicht hast.', screen: 'Screen gegen Blitz: Die Verteidiger rennen am Ball vorbei.' },
  };
  const whyOf = (o, d) => { const k = OPLAYS[o].kind === 'run' ? 'run' : o === 'pa' ? 'pa' : o === 'screen' ? 'screen' : 'pass'; return WHY[d][k]; };
  const LOOKS = {
    box: { title: '8 in der Box', desc: 'Ein Safety ist nach vorne gerückt, nur einer steht tief.', tip: 'Vorne viele, hinten einer: werfen, Play-Action oder tief.' },
    c2: { title: '2 Safeties tief', desc: 'Beide Safeties stehen weit hinten, vorne nur sechs Mann.', tip: 'Tief ist zu, vorne ist dünn: laufen oder in die Mitte werfen.' },
    man: { title: 'Cornerbacks eng am Mann', desc: 'Die Verteidiger stehen direkt vor ihren Receivern.', tip: 'Manndeckung: kurze Pässe mit schnellem Richtungswechsel oder laufen.' },
    blitz: { title: 'Linebacker an der Line', desc: 'Linebacker und Nickelback stehen ganz vorne: Ein Blitz droht.', tip: 'Ball schnell weg: kurzer Pass oder Screen.' },
  };

  // ---------- Glossar-Tooltips ----------
  const GL = FD_GLOSSARY;
  const gk = k => Object.keys(GL).find(g => g.toLowerCase() === k.toLowerCase());
  const rich = s => (s || '').replace(/\{([^}|]+)(?:\|([^}]+))?\}/g, (m, k, l) => { const key = gk(k.trim()); return key ? `<span class="term" tabindex="0" data-tip="${esc(key + ': ' + GL[key])}">${l || k}</span>` : (l || k); });
  const tipEl = document.createElement('div'); tipEl.className = 'fd-tip'; tipEl.hidden = true; document.body.appendChild(tipEl);
  function showTip(t) { tipEl.textContent = t.dataset.tip; tipEl.hidden = false; const r = t.getBoundingClientRect(), tw = Math.min(320, innerWidth - 20); tipEl.style.maxWidth = tw + 'px'; tipEl.style.left = clamp(r.left + r.width / 2 - tw / 2, 10, innerWidth - tw - 10) + 'px'; const th = tipEl.offsetHeight; tipEl.style.top = (r.top - th - 8 > 0 ? r.top - th - 8 : r.bottom + 8) + scrollY + 'px'; }
  document.addEventListener('mouseover', e => { const t = e.target.closest('.term'); if (t) showTip(t); });
  document.addEventListener('mouseout', e => { if (e.target.closest('.term')) tipEl.hidden = true; });

  // ---------- Speicherstand ----------
  const KEY = 'mfhfb:fd-career';
  let S = null;
  try { S = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
  function newCareer(name, colorKey) {
    const names = {}, used = new Set();
    CAREER_SLOTS.forEach(sl => { let n; do { n = CAREER_FIRST[Math.floor(rnd() * CAREER_FIRST.length)] + ' ' + CAREER_LAST[Math.floor(rnd() * CAREER_LAST.length)]; } while (used.has(n)); used.add(n); names[sl.key] = n; });
    const ratings = {}; CAREER_SLOTS.forEach(sl => { ratings[sl.key] = 66; });
    S = { v: 1, name: name || 'Mein Team', color: colorKey || 'mfhfb', week: 1, weeks: {}, points: 0, ratings, names, help: null, view: 'pixel' };
    save();
  }

  // ---------- Teams & Ratings ----------
  const myTeam = () => Object.assign({ name: S.name, abbr: (S.name.replace(/[^A-Za-zÄÖÜäöü]/g, '').slice(0, 3) || 'DU').toUpperCase(), emoji: '🏈' }, CAREER_COLORS.find(c => c.key === S.color) || CAREER_COLORS[0]);
  const oppTeam = w => CAREER_TEAMS[CAREER_WEEKS[w - 1].opp];
  const oppRatings = w => { const r = oppTeam(w).rating; const o = {}; CAREER_SLOTS.forEach((sl, i) => { o[sl.key] = clamp(r + ((i * 7 + w * 3) % 7) - 3, 50, 99); }); return o; };
  const unlocked = w => { const s = new Set(); for (let i = 0; i < w; i++) CAREER_WEEKS[i].unlock.forEach(k => s.add(k)); if (w >= 8) Object.keys(OPLAYS).forEach(k => s.add(k)); return s; };
  const offPlays = w => Object.keys(OPLAYS).filter(k => unlocked(w).has(k));
  const helpOn = w => S.help === null ? CAREER_WEEKS[w - 1].help : S.help;

  // ---------- Auflösung ----------
  // ro = Read-Optionen, pick = gewählte Option (oder null bei Screen/Sack-Check)
  function sackRoll(o, d, off, def) {
    if (OPLAYS[o].kind === 'run') return false;
    const p = M[o][d].sack - (off.ol - 75) * 0.002 + (def.edge - 75) * 0.0025;
    return rnd() < Math.max(0.005, p);
  }
  // Warum war der Pass incomplete? (Damit es sich nicht nach reinem Zufall anfühlt.)
  const INC_LABEL = { pbu: 'ABGEWEHRT!', over: 'ZU WEIT!', drop: 'DROP!', miss: 'DANEBEN!' };
  const INC_WHY = {
    pbu: 'Der Verteidiger war dran und hat den Ball weggeschlagen.',
    over: 'Der Ball war zu weit – tiefe Würfe sind schwerer zu treffen.',
    drop: 'Fallen gelassen – das passiert auch Profis.',
    miss: 'Knapp daneben geworfen.'
  };
  function resolvePlay(o, d, st, off, def, ro, pick) {
    const m = M[o][d];
    if (OPLAYS[o].kind === 'run') {
      const open = pick ? pick.open : 0.8;
      let mean = m.m + 0.6 + 3.2 * (open - 0.75) + (off.rb - 75) * 0.03 + (off.ol - 75) * 0.02;
      if ((o === 'power' || o === 'iso') && st.toGo <= 2) mean += 1;
      if (rnd() < 0.01) return { type: 'fumble', yards: Math.max(-2, Math.round(mean)) };
      let y = mean + gauss() * m.sd; if (rnd() < m.bp) y += 8 + rnd() * 25;
      return { type: 'run', yards: Math.max(-4, Math.round(y)) };
    }
    let c, int, yacF = 1;
    if (!pick) { c = m.c; int = m.int; }
    else {
      const open = pick.open, depth = pick.depth;
      c = 0.32 + 0.58 * open - Math.max(0, depth - 8) * 0.011;
      int = 0.006 + 0.08 * (1 - open) + Math.max(0, depth) * 0.0012;
      yacF = 0.4 + 1.1 * open;
    }
    c += (off.qb - 75) * 0.003 + (off.wr - 75) * 0.002 - (def.cb - 75) * 0.0025;
    const pc = clamp(c, 0.05, 0.95);
    if (rnd() < int) return { type: 'int', pc };
    if (rnd() > pc) {
      const why = !pick || pick.open < 0.5 ? 'pbu' : pick.depth >= 16 && rnd() < 0.6 ? 'over' : rnd() < 0.35 ? 'drop' : 'miss';
      return { type: 'inc', pc, why, label: INC_LABEL[why] };
    }
    let y = Math.max(0, m.yac * yacF + gauss() * m.sd + (off.wr - 75) * 0.03); if (rnd() < m.bp) y += 8 + rnd() * 20;
    return { type: 'comp', yac: y, pc };
  }
  function cpuPick(ro, qb) {
    if (!ro) return null;
    if (rnd() < 0.5 + (qb - 75) * 0.012) return ro.opts.find(x => x.id === (ro.bestEv || ro.best));
    return ro.opts[Math.floor(rnd() * ro.opts.length)];
  }
  function situation(st) { return st.toGo <= 2 ? 'short' : (st.toGo >= 7 && st.down >= 2) ? 'long' : 'normal'; }
  function cpuD(team, st) {
    const w = Object.assign({ box: 0.1, c2: 0.1, man: 0.1, blitz: 0.1 }, team.def), s = situation(st);
    if (s === 'short') { w.box *= 2.5; w.c2 *= 0.4; } else if (s === 'long') { w.box *= 0.3; w.c2 *= 1.5; w.blitz *= 1.4; }
    return pickW(w);
  }
  function cpuO(team, st) {
    const w = Object.assign({}, team.off), s = situation(st);
    Object.keys(w).forEach(k => { const run = OPLAYS[k].kind === 'run'; if (s === 'short') w[k] *= run || k === 'pa' ? 1.8 : 0.6; if (s === 'long') w[k] *= run ? 0.25 : k === 'mid' || k === 'quick' ? 1.6 : 1; });
    return pickW(w);
  }
  const fgProb = d => d <= 30 ? 0.97 : d <= 40 ? 0.9 : d <= 50 ? 0.75 : d <= 55 ? 0.55 : 0.3;
  const autoFourth = st => { const dist = 100 - st.yl + 17; if (st.toGo <= 1 && st.yl >= 50) return 'go'; if (dist <= 47) return 'fg'; return 'punt'; };

  // ---------- Viewer (8-bit / Taktik, Read-Overlay, Vollbild) ----------
  function viewerHTML(id) {
    return `<div class="c-viewer" id="${id}">
      <div class="g-screen c-screen">
        <canvas class="pix c-pix"></canvas><canvas class="c-top" hidden></canvas>
        <div class="c-ovl" hidden></div>
        <div class="c-timer" hidden><i></i></div>
        <div class="g-label" hidden></div>
      </div>
      <div class="g-ctrl">
        <div class="fd-seg" role="group" aria-label="Ansicht"><button type="button" data-cview="pixel">👾 8-bit</button><button type="button" data-cview="top">Taktik</button></div>
        <div class="fd-seg" role="group" aria-label="Tempo"><button type="button" data-cspeed="0.5">½×</button><button type="button" data-cspeed="1" class="on">1×</button></div>
        <button class="fd-btn" type="button" data-act="fs" title="Vollbild">⛶ Vollbild</button>
      </div></div>`;
  }
  let speed = 1;
  function makeViewer(root) {
    const pixC = root.querySelector('.c-pix'), topC = root.querySelector('.c-top');
    const V = { root, pv: PixelView(pixC), tv: TopView(topC), ovl: root.querySelector('.c-ovl'), label: root.querySelector('.g-label'), timer: root.querySelector('.c-timer'), raf: 0 };
    V.cur = () => S.view === 'top' ? V.tv : V.pv;
    V.sync = () => { pixC.hidden = S.view === 'top'; topC.hidden = S.view !== 'top'; root.querySelectorAll('[data-cview]').forEach(b => b.classList.toggle('on', b.dataset.cview === S.view)); };
    V.sync();
    V.draw = (sim, fi, ctx) => { V.cur().draw(sim, fi, ctx); V.last = { sim, fi, ctx }; };
    V.redraw = () => { if (V.last) V.draw(V.last.sim, V.last.fi, V.last.ctx); };
    V.stop = () => { cancelAnimationFrame(V.raf); V.raf = 0; };
    V.play = (sim, ctx, from, stopT, done) => {
      V.stop(); if (!from) { V.pv.reset(); V.tv.reset(); V.label.hidden = true; }
      let fi = from || 0, last = 0, acc = (!from && sim.routes && ctx.routes !== false) ? -1.1 : 0, labeled = !!from && sim.frames[fi].t >= sim.labelAt;
      const step = ts => {
        if (!last) last = ts; acc += (ts - last) / 1000 * speed; last = ts;
        while (acc >= sim.dt && fi < sim.frames.length - 1) { if (stopT != null && sim.frames[fi + 1].t > stopT) break; fi++; acc -= sim.dt; }
        V.draw(sim, fi, ctx);
        if (!labeled && sim.label && sim.frames[fi].t >= sim.labelAt) { labeled = true; V.showLabel(sim); }
        const atStop = stopT != null && (fi >= sim.frames.length - 1 || sim.frames[fi + 1].t > stopT);
        if (atStop) { V.raf = 0; done && done(fi); return; }
        if (fi < sim.frames.length - 1) V.raf = requestAnimationFrame(step); else { V.raf = 0; done && done(fi); }
      };
      V.raf = requestAnimationFrame(step);
    };
    V.showLabel = sim => {
      V.label.textContent = sim.label; V.label.hidden = false;
      V.label.className = 'g-label' + (sim.td ? ' td' : sim.turnover || sim.type === 'sack' || sim.safety ? ' bad' : '');
      AU(sim.td ? 'touchdown' : sim.turnover || sim.safety ? 'turnover' : sim.type === 'sack' ? 'sack' : sim.type === 'inc' ? 'incomplete' : 'tackle');
    };
    V.project = (p, ctx) => V.cur().project(p, ctx);
    return V;
  }

  // Read-Overlay: Optionen antippen, Zeitlimit
  // Bewertung eines Reads: nicht nur „wer ist frei“, sondern was bringt der Wurf?
  // Wert = Fangchance × (Raumgewinn + Bonus, wenn es für den First Down reicht) − INT-Risiko.
  function scoreRead(ro, st) {
    if (!ro) return ro;
    if (ro.kind === 'run') ro.opts.forEach(o => { o.ev = o.open; });
    else ro.opts.forEach(o => {
      const pc = clamp(0.32 + 0.58 * o.open - Math.max(0, o.depth - 8) * 0.011, 0.05, 0.95);
      const gain = o.depth + 3 * (0.4 + 1.1 * o.open), bonus = gain >= st.toGo ? 4 : 0;
      const int = 0.006 + 0.08 * (1 - o.open) + Math.max(0, o.depth) * 0.0012;
      o.pc = pc; o.gain = gain; o.ev = pc * (gain + bonus) - int * 15;
    });
    // Zwei WRs eindeutig benennen (Seitenansicht: oben/unten, Vogelperspektive: links/rechts)
    if (ro.kind === 'pass') { const top = S && S.view === 'top'; ro.opts.forEach(o => { if (o.lab === 'WR' && o.C) o.lab = `WR ${o.C[0] < 26.65 ? (top ? 'links' : 'oben') : (top ? 'rechts' : 'unten')}`; });
      ro.opts.forEach(o => { const twin = ro.opts.find(x => x !== o && x.lab.split(' ')[0] === 'WR' && x.lab.split(' ').slice(0, 2).join(' ') === o.lab.split(' ').slice(0, 2).join(' ')); if (twin && o.lab.split(' ').length === 2) { const out = Math.abs(o.C[0] - 26.65) > Math.abs(twin.C[0] - 26.65); o.lab += out ? ' außen' : ' innen'; twin.lab += out ? ' innen' : ' außen'; } }); }
    const best = ro.opts.reduce((m, o) => o.ev > m.ev ? o : m), lo = Math.min(...ro.opts.map(o => o.ev));
    ro.bestEv = best.id;
    ro.opts.forEach(o => { o.q = best.ev === lo ? 1 : (o.ev - lo) / (best.ev - lo); });
    return ro;
  }
  const goodRead = (ro, pick) => !!pick && (ro.kind === 'run' ? pick.open >= 0.9 : (pick.id === ro.bestEv || pick.q >= 0.85));
  // Entscheidung ≠ Ergebnis: erklärt Glück und Pech
  function luckLine(ro, pick, sim, st) {
    if (!ro) return '';
    const okR = goodRead(ro, pick), r5 = v => Math.round(v * 20) * 5, pct = pick && pick.pc != null ? r5(pick.pc) : null, best = bestOf(ro), bpct = best && best.pc != null ? r5(best.pc) : null;
    const gotIt = sim.td || (sim.type !== 'inc' && sim.type !== 'int' && sim.type !== 'sack' && sim.type !== 'fumble' && sim.yards >= st.toGo);
    const flop = sim.type === 'inc' || sim.type === 'int' || (ro.kind === 'run' && sim.yards <= 0);
    if (ro.kind === 'pass') {
      if (okR && flop && pct != null) return `🎲 <b>Pech:</b> Die Fangchance lag bei etwa ${pct} %. Die Entscheidung war trotzdem richtig – auf Dauer zahlt sie sich aus.`;
      if (!okR && pick && gotIt && pct != null) return pct < bpct ? `🍀 <b>Glück gehabt:</b> Die Fangchance lag bei etwa ${pct} %, beim besten Read bei ${bpct} %. Auf Dauer kostet so ein Wurf Punkte.`
        : '🍀 <b>Hat geklappt</b> – aber der beste Read bringt im Schnitt mehr Raumgewinn. Auf Dauer zählt die Entscheidung.';
    } else {
      if (okR && flop) return '🎲 <b>Pech:</b> Gute Lücke, aber ein Verteidiger hat sich losgerissen. Richtig entschieden war es trotzdem.';
      if (!okR && pick && sim.yards >= 8) return '🍀 <b>Glück gehabt:</b> Trotz zugestellter Lücke ging es weit. Darauf kann man sich nicht verlassen.';
    }
    return '';
  }
  const incLine = sim => sim.type === 'inc' && sim.why ? `🏈 <b>Warum incomplete?</b> ${INC_WHY[sim.why]}` : '';
  const bestOf = ro => ro.kind === 'run' ? ro.opts.reduce((m, o) => o.open > m.open ? o : m) : ro.opts.find(x => x.id === ro.bestEv);
  // Denselben Snap noch einmal abspielen, diesmal mit dem besten Read (ändert nichts am Spielstand)
  function replayBest(V, ctx, o, d, ro, yl, seed, onEnd) {
    const best = bestOf(ro), m = M[o][d];
    const dec = ro.kind === 'run' ? { type: 'run', yards: Math.max(1, Math.round(m.m + 0.6 + 3.2 * (best.open - 0.75))) }
      : best.pc >= 0.5 ? { type: 'comp', yac: m.yac * (0.4 + 1.1 * best.open) } : { type: 'inc', label: 'INCOMPLETE' };
    const sim = buildSim(o, d, dec, yl, Object.assign({ seed }, ro.kind === 'run' ? { lane: best.x } : { target: best.id }));
    V.ovl.innerHTML = `<div class="c-ovl-hint">▶ Bester Read: ${esc(ro.kind === 'run' ? best.name : best.lab)}${ro.kind === 'pass' ? ` · Fangchance ~${Math.round(best.pc * 20) * 5} %` : ''}</div>`;
    V.ovl.hidden = false; setPlaying(true); AU('snap');
    V.play(sim, ctx, 0, null, () => { V.ovl.hidden = true; V.ovl.innerHTML = ''; setPlaying(false); if (onEnd) onEnd(); });
  }
  const replayBtn = '<button class="fd-btn c-replay" data-act="replay">▶ Zeig mir den besten Read</button>';
  function askRead(V, ro, ctx, frame, help, onPick) {
    V.ovl.innerHTML = ''; V.ovl.hidden = false;
    const btns = ro.opts.map(o => {
      const p = ro.kind === 'run' ? [o.x, 1.5] : frame.P[o.id];
      const [fx, fy] = V.project(p, ctx);
      const b = document.createElement('button');
      b.className = 'c-pick' + (ro.kind === 'run' ? ' lane' : '');
      b.dataset.oid = o.id;
      b.style.left = clamp(fx * 100, 4, 96) + '%'; b.style.top = clamp(fy * 100, 6, 94) + '%';
      b.innerHTML = ro.kind === 'run' ? `<span>${o.name}</span>` : `<span>${o.lab.split(' ')[0]}</span>`;
      b.addEventListener('click', ev => { ev.stopPropagation(); finish(o); });
      V.ovl.appendChild(b); return b;
    });
    const hint = document.createElement('div'); hint.className = 'c-ovl-hint';
    hint.textContent = ro.kind === 'run' ? 'Welche Lücke?' : 'Wohin wirfst du?';
    V.ovl.appendChild(hint);
    if (help) {
      const tb = document.createElement('button'); tb.className = 'c-ovl-tip'; tb.textContent = '💡 Tipp';
      tb.addEventListener('click', ev => { ev.stopPropagation(); tb.remove(); const best = ro.kind === 'run' ? ro.opts.reduce((m, o) => o.open > m.open ? o : m).id : ro.bestEv; btns.forEach(b => { if (b.dataset.oid === best) b.classList.add('best'); }); });
      V.ovl.appendChild(tb);
    }
    const T = help ? 12 : 7; let left = T, done = false;
    V.timer.hidden = false; const bar = V.timer.querySelector('i');
    const iv = setInterval(() => { left -= 0.1; bar.style.width = clamp(left / T * 100, 0, 100) + '%'; if (left <= 0) finish(null); }, 100);
    function finish(o) { if (done) return; done = true; clearInterval(iv); V.ovl.hidden = true; V.ovl.innerHTML = ''; V.timer.hidden = true; AU('click'); onPick(o); }
    return btns;
  }
  // Während des Spielzugs: Feld groß, Panel ausblenden
  function setPlaying(on) {
    document.body.classList.toggle('fd-playing', on);
    if (on) { const sc = document.querySelector('.c-screen'); if (sc && !document.fullscreenElement) sc.scrollIntoView({ block: 'center', behavior: 'smooth' }); }
    setTimeout(() => R.V && R.V.redraw(), 60);
  }

  // ---------- App-Zustand ----------
  let R = { screen: S ? 'hub' : 'start' };
  const app = $('#cApp');
  function go(screen, extra) { R = Object.assign({ screen }, extra || {}); render(); scrollTo({ top: 0 }); }
  function render() {
    if (R.V) R.V.stop();
    R.V = null;
    if (!S && R.screen !== 'start') R.screen = 'start';
    ({ start: renderStart, hub: renderHub, lesson: renderLesson, drill: renderDrill, game: renderGame, result: renderResult })[R.screen]();
  }

  // ---------- Start ----------
  function renderStart() {
    app.innerHTML = `<section class="g-setup">
      <h1 class="g-h1">Karriere: Rookie Coach</h1>
      <p>Du übernimmst ein Football-Team als neuer Head Coach. In <b>8 Wochen</b> lernst du Schritt für Schritt, was Offense und Defense sehen und entscheiden: erst eine kurze Lektion, dann ein Drill, dann das Spiel. Nach dem Snap friert das Bild ein, und du liest selbst: Wo ist die Lücke? Wer ist frei?</p>
      <h4>Teamname</h4><input class="c-input" id="cName" maxlength="24" placeholder="z. B. Wolfsburg Wölfe" value="">
      <h4>Farben</h4><div class="c-colors">${CAREER_COLORS.map((c, i) => `<label class="c-color" style="--a:${c.jersey};--b:${c.trim}"><input type="radio" name="ccol" value="${c.key}"${i ? '' : ' checked'}><span></span>${c.name}</label>`).join('')}</div>
      <button class="fd-btn fd-play g-start" data-act="create">Los geht's ▶</button>
      <p class="g-note">Alle Teams und Spieler sind erfunden. Der Spielstand wird in diesem Browser gespeichert. Der Ausgang eines Spielzugs hängt von deinem Call, deinem Read und etwas Zufall ab, ein vereinfachtes Modell.</p></section>`;
  }

  // ---------- Büro (Hub) ----------
  function record() { let w = 0, l = 0, t = 0; Object.values(S.weeks).forEach(x => { if (!x.result) return; if (x.result.us > x.result.them) w++; else if (x.result.us < x.result.them) l++; else t++; }); return `${w}-${l}${t ? '-' + t : ''}`; }
  function renderHub() {
    const me = myTeam();
    const totalStars = Object.values(S.weeks).reduce((a, x) => a + starCount(x), 0);
    app.innerHTML = `<section class="c-hub">
      <div class="c-teamhead" style="--tc:${me.jersey};--tc2:${me.trim}">
        <div><small>Head Coach von</small><b>${esc(S.name)}</b></div>
        <div class="c-stat"><small>Bilanz</small><b>${record()}</b></div>
        <div class="c-stat"><small>Sterne</small><b>${totalStars}/24</b></div>
        <div class="c-stat"><small>Coach-Punkte</small><b>${S.points}</b></div>
      </div>
      <h3 class="c-h3">Saison: 8 Lernwochen</h3>
      <div class="c-weeks">${CAREER_WEEKS.map(w => weekTile(w)).join('')}</div>
      <h3 class="c-h3">Dein Kader ${S.points ? `<small>${S.points} Punkt${S.points > 1 ? 'e' : ''} zum Verteilen: +3 pro Klick</small>` : '<small>Sterne bringen Coach-Punkte, damit verbesserst du Spieler.</small>'}</h3>
      <div class="c-roster">${CAREER_SLOTS.map(sl => `<div class="c-player"><span class="c-pos">${sl.pos}</span><div><b>${esc(S.names[sl.key])}</b><small>${sl.what}</small></div><span class="c-rt">${S.ratings[sl.key]}</span>${S.points && S.ratings[sl.key] < 99 ? `<button class="c-up" data-up="${sl.key}" title="+3">＋</button>` : ''}</div>`).join('')}</div>
      <details class="c-settings"><summary>⚙️ Einstellungen</summary>
        <label><input type="checkbox" id="cHelp" ${S.help === true ? 'checked' : ''}> 💡-Tipp beim Read immer anbieten (sonst nur in Woche 1–3)</label>
        <button class="fd-btn" data-act="reset">Karriere neu starten</button>
      </details></section>`;
  }
  const starCount = x => x && x.stars ? (x.stars.drill ? 1 : 0) + (x.stars.win ? 1 : 0) + (x.stars.reads ? 1 : 0) : 0;
  function weekTile(w) {
    const st = S.weeks[w.n], open = w.n <= S.week, cur = w.n === S.week, opp = CAREER_TEAMS[w.opp];
    const stars = st ? ['drill', 'win', 'reads'].map(k => st.stars && st.stars[k] ? '★' : '☆').join('') : '';
    return `<button class="c-week${cur ? ' cur' : ''}${open ? '' : ' locked'}" ${open ? `data-week="${w.n}"` : 'disabled'} style="--oc:${opp.jersey}">
      <small>Woche ${w.n}${st && st.result ? ` · ${st.result.us}:${st.result.them}` : ''}</small>
      <b>${esc(w.title)}</b><span>vs ${opp.emoji} ${esc(opp.city + ' ' + opp.name)}</span>
      <em>${open ? (stars || (cur ? 'Jetzt spielen ▶' : '')) : '🔒'}</em></button>`;
  }

  // ---------- Lektion ----------
  function renderLesson() {
    const w = CAREER_WEEKS[R.week - 1], i = R.i || 0, card = w.lesson[i];
    const opp = CAREER_TEAMS[w.opp];
    app.innerHTML = `<section class="c-lesson">
      <div class="c-crumb"><a href="#" data-act="hub">← Büro</a> · Woche ${w.n}: ${esc(w.title)} · <b>Lektion</b> → Drill → Spiel vs ${esc(opp.name)}</div>
      ${i === 0 ? `<p class="c-goal">🎯 ${esc(w.goal)}</p>` : ''}
      <div class="c-lgrid">
        <div>${card.demo ? '<canvas class="c-demo" id="cDemo"></canvas><button class="fd-btn" data-act="demo">↺ Nochmal</button>' : '<div class="c-nodemo">🏈</div>'}</div>
        <div class="q-card"><div class="q-top"><span>Lektion ${i + 1}/${w.lesson.length}</span><span>Woche ${w.n}</span></div>
          <h3>${esc(card.t)}</h3><p class="c-ltext">${rich(card.x)}</p>
          ${card.more ? `<a class="c-more" href="index.html#/${card.more}" target="_blank" rel="noopener">📖 Mehr dazu im Lernbereich</a>` : ''}
          ${i === w.lesson.length - 1 ? `<p class="c-tip">💡 ${esc(w.tip)}</p>` : ''}
          <div class="g-row">${i > 0 ? '<button class="fd-btn" data-act="lprev">← Zurück</button>' : ''}<button class="fd-btn fd-play" data-act="lnext">${i < w.lesson.length - 1 ? 'Weiter →' : 'Zum Drill →'}</button></div>
        </div></div></section>`;
    if (card.demo) playDemo(card.demo);
  }
  function playDemo(dm) {
    const cv = $('#cDemo'); if (!cv) return;
    const tv = TopView(cv);
    const seed = 7;
    const ro = readOptions(dm.o, dm.d, seed);
    const opts = { seed };
    if (dm.target && ro) opts.target = dm.target === 'best' ? ro.best : dm.target;
    if (dm.lane && ro) opts.lane = ro.opts.find(x => x.id === (dm.lane === 'best' ? ro.best : dm.lane)).x;
    const sim = buildSim(dm.o, dm.d, dm.dec, 30, opts);
    const ctx = { yl: 30, toGo: 10, offTeam: myTeam(), defTeam: oppTeam(R.week) };
    let fi = 0, last = 0, acc = 0;
    cancelAnimationFrame(R.demoRaf);
    const step = ts => { if (!last) last = ts; acc += (ts - last) / 1000; last = ts; while (acc >= sim.dt && fi < sim.frames.length - 1) { fi++; acc -= sim.dt; } tv.draw(sim, fi, ctx); if (fi < sim.frames.length - 1 && document.body.contains(cv)) R.demoRaf = requestAnimationFrame(step); };
    R.demoRaf = requestAnimationFrame(step);
  }

  // ---------- Drill ----------
  function renderDrill() {
    const w = CAREER_WEEKS[R.week - 1];
    if (R.di == null) { R.di = 0; R.dok = 0; }
    if (R.di >= w.drills.length) {
      const ok = R.dok >= 2;
      markStar(w.n, 'drill', ok);
      app.innerHTML = `<section class="q-card c-mid"><h3>Drill: ${R.dok} von ${w.drills.length} richtig ${ok ? '★' : ''}</h3>
        <p>${ok ? 'Stark, Stern verdient! Jetzt ab ins Spiel.' : 'Kein Stern diesmal, aber du kannst trotzdem spielen oder den Drill wiederholen.'}</p>
        <div class="g-row"><button class="fd-btn fd-play" data-act="startgame">Zum Spiel vs ${esc(oppTeam(w.n).name)} →</button><button class="fd-btn" data-act="redrill">Drill wiederholen</button></div></section>`;
      return;
    }
    const dr = w.drills[R.di];
    const st = Object.assign({ down: 1, toGo: 10, yl: 30 }, dr.st || {});
    const q = dr.type === 'read' ? `Read-Training: ${OPLAYS[dr.o].name} gegen ${DCALLS[dr.d].name}. Nach dem Snap friert das Bild ein: ${OPLAYS[dr.o].kind === 'run' ? 'Welche Lücke?' : 'Wer ist frei?'}`
      : dr.type === 'call' ? `${ordinal(st.down)} & ${st.toGo}. Du siehst: ${LOOKS[dr.look].title}. Was callst du?`
      : `Du bist die Defense. ${ordinal(st.down)} & ${st.toGo}. Die Offense kommt in ${FD_NODES[OPLAYS[dr.o].node].diagram.off === 'i21' ? 'der I-Formation mit Fullback' : 'der Shotgun mit 3 Wide Receivern'}. Was callst du?`;
    app.innerHTML = `<section class="c-play">
      <div class="c-crumb"><a href="#" data-act="hub">← Büro</a> · Woche ${w.n}: Lektion → <b>Drill ${R.di + 1}/${w.drills.length}</b> → Spiel</div>
      <div class="g-grid c-grid"><div>${viewerHTML('cV')}</div>
      <div class="g-panel" id="cPanel"><h3>Drill ${R.di + 1}</h3><p>${esc(q)}</p><div id="cAsk"></div></div></div></section>`;
    R.V = makeViewer($('#cV'));
    const ctx = { yl: st.yl, toGo: st.toGo, offTeam: myTeam(), defTeam: oppTeam(w.n) };
    const seed = Math.floor(rnd() * 1e9);
    const neutral = { qb: 72, rb: 72, wr: 72, ol: 72, edge: 72, cb: 72 };
    const done = (ok, text, extra) => {
      if (ok) R.dok++;
      AU(ok ? 'right' : 'wrong');
      $('#cAsk').innerHTML = `<p class="q-res ${ok ? 'ok' : 'no'}">${ok ? 'Richtig!' : 'Nicht ganz.'}</p><p>${text}</p>${extra || ''}<button class="fd-btn fd-play" data-act="dnext">Weiter →</button>`;
    };
    if (dr.type === 'read') {
      const ro = scoreRead(readOptions(dr.o, dr.d, seed), st);
      const pre = buildSim(dr.o, dr.d, OPLAYS[dr.o].kind === 'run' ? { type: 'run', yards: 0 } : { type: 'inc' }, st.yl, { seed });
      $('#cAsk').innerHTML = '<button class="fd-btn fd-play" data-act="snap">🏈 Snap!</button>';
      R.V.draw(pre, 0, ctx);
      R.onSnap = () => {
        $('#cAsk').innerHTML = '<p class="muted">Schau genau hin …</p>';
        setPlaying(true);
        R.V.play(pre, ctx, 0, ro.tDec, fi => {
          askRead(R.V, ro, ctx, pre.frames[fi], true, pick => {
            const bestO = ro.opts.find(x => x.id === (ro.kind === 'run' ? ro.best : ro.bestEv));
            const ok = goodRead(ro, pick);
            const dec = resolvePlay(dr.o, dr.d, st, neutral, neutral, ro, pick || bestO);
            const fin = buildSim(dr.o, dr.d, dec, st.yl, Object.assign({ seed }, ro.kind === 'run' ? { lane: (pick || bestO).x } : { target: (pick || bestO).id }));
            const extra = [incLine(fin), luckLine(ro, pick, fin, st)].filter(Boolean).map(x => `<p class="c-luck">${x}</p>`).join('') + (ok ? '' : replayBtn);
            R.onReplay = ok ? null : () => replayBest(R.V, ctx, dr.o, dr.d, ro, st.yl, seed);
            R.V.play(fin, ctx, fi, null, () => { setPlaying(false); done(ok, readFeedback(ro, pick, st), extra); });
          });
        });
      };
    } else if (dr.type === 'call') {
      R.V.draw(staticSim('iz', dr.look), 0, ctx);
      const plays = offPlays(w.n);
      $('#cAsk').innerHTML = `<div class="g-calls">${plays.map(k => `<button class="g-call" data-dpick="${k}"><b>${OPLAYS[k].icon} ${OPLAYS[k].name}</b><span>${OPLAYS[k].short}</span></button>`).join('')}</div>`;
      R.onDPick = k => {
        const best = Math.max(...plays.map(p => EY(p, dr.look)));
        const goodSet = plays.filter(p => EY(p, dr.look) >= best - 1.0);
        const ok = goodSet.indexOf(k) >= 0;
        const ro = readOptions(k, dr.look, seed);
        const pick = ro ? ro.opts.find(x => x.id === ro.best) : null;
        const dec = resolvePlay(k, dr.look, st, neutral, neutral, ro, pick);
        const fin = buildSim(k, dr.look, dec, st.yl, Object.assign({ seed }, ro ? (ro.kind === 'run' ? { lane: pick.x } : { target: pick.id }) : {}));
        R.V.play(fin, ctx, 0, null);
        done(ok, `${whyOf(k, dr.look)} ${ok ? '' : `Besser gewesen: ${goodSet.map(p => OPLAYS[p].name).join(' oder ')}.`}`);
      };
    } else {
      const ctxD = { yl: st.yl, toGo: st.toGo, offTeam: oppTeam(w.n), defTeam: myTeam() };
      R.V.draw(staticSim(dr.o, 'c2'), 0, ctxD);
      $('#cAsk').innerHTML = `<div class="g-calls">${Object.keys(DCALLS).map(k => `<button class="g-call" data-dpick="${k}"><b>${DCALLS[k].icon} ${DCALLS[k].name}</b><span>${DCALLS[k].short}</span></button>`).join('')}</div>`;
      R.onDPick = k => {
        const vals = Object.keys(DCALLS).map(d => EY(dr.o, d)), best = Math.min(...vals);
        const goodSet = Object.keys(DCALLS).filter(d => EY(dr.o, d) <= best + 1.0);
        const ok = goodSet.indexOf(k) >= 0;
        const ro = readOptions(dr.o, k, seed); const pick = ro ? ro.opts.find(x => x.id === ro.best) : null;
        const dec = resolvePlay(dr.o, k, st, neutral, neutral, ro, pick);
        R.V.play(buildSim(dr.o, k, dec, st.yl, Object.assign({ seed }, ro ? (ro.kind === 'run' ? { lane: pick.x } : { target: pick.id }) : {})), ctxD, 0, null);
        done(ok, `Die Offense spielte ${OPLAYS[dr.o].name}. ${whyOf(dr.o, k)} ${ok ? '' : `Besser gewesen: ${goodSet.map(d => DCALLS[d].name).join(' oder ')}.`}`);
      };
    }
  }
  function readFeedback(ro, pick, st) {
    const sep = o => `${o.sep >= 15 ? '15+' : o.sep.toFixed(0)} ${o.sep >= 0.5 && o.sep < 1.5 ? 'Yard' : 'Yards'} Platz`;
    const dep = o => { const v = Math.max(0, Math.round(o.depth)); return `${v} ${v === 1 ? 'Yard' : 'Yards'} tief`; };
    if (ro.kind === 'run') {
      const best = ro.opts.reduce((m, o) => o.open > m.open ? o : m);
      if (!pick) return `Zu lange gezögert! Die beste Lücke war ${best.name}.`;
      return pick.open >= 0.9 ? `Gute Lücke: ${pick.name} war am wenigsten zugestellt.` : `Die Lücke ${best.name} war freier, vor ${pick.name} standen mehr Verteidiger.`;
    }
    const best = ro.opts.find(x => x.id === ro.bestEv);
    if (!pick) return `Zu lange gezögert! Die beste Wahl war ${best.lab} (${sep(best)}, ${dep(best)}).`;
    if (goodRead(ro, pick)) return `Guter Read: ${pick.lab} hatte ${sep(pick)} und war ${dep(pick)}${pick.gain >= st.toGo ? ', genug für den First Down' : ''}.`;
    if (pick.open >= best.open - 0.05 && pick.depth < best.depth) return `${pick.lab} war frei, aber nur ${dep(pick)}${st.toGo > pick.gain ? ` – du brauchtest ${st.toGo}` : ''}. Mehr gebracht hätte ${best.lab} (${sep(best)}, ${dep(best)}).`;
    if (pick.depth > best.depth + 4) return `${pick.lab} war tief, aber zu eng gedeckt (${sep(pick)}). Sicherer und besser: ${best.lab} (${sep(best)}, ${dep(best)}).`;
    return `${pick.lab} war zu eng gedeckt (${sep(pick)}). Besser: ${best.lab} (${sep(best)}, ${dep(best)}).`;
  }

  // ---------- Spiel ----------
  function startGame(n) {
    const w = CAREER_WEEKS[n - 1];
    R = { screen: 'game', week: n, G: { opp: w.opp, us: 0, them: 0, order: ['me', 'op', 'me', 'op', 'me', 'op'], idx: -1, log: [], good: 0, total: 0, st: null, phase: 'intro' } };
    if (window.FDAUDIO) FDAUDIO.start();
    render();
  }
  function offRatings() { return S.ratings; }
  function renderGame() {
    const w = CAREER_WEEKS[R.week - 1], G = R.G, opp = oppTeam(R.week), me = myTeam();
    app.innerHTML = `<section class="c-play">
      <div class="c-crumb"><a href="#" data-act="hub">← Büro</a> · Woche ${w.n}: Lektion → Drill → <b>Spiel</b></div>
      <div class="g-score c-score" id="cScore"></div>
      <div class="g-grid c-grid"><div>${viewerHTML('cV')}</div>
        <div><div class="g-panel" id="cPanel"></div><aside class="g-side c-log"><h4>Spielverlauf</h4><ol class="g-log" id="cLog"></ol></aside></div></div></section>`;
    R.V = makeViewer($('#cV'));
    if (G.phase === 'intro') { nextDrive(); return; }
    paint();
  }
  function paint() {
    const G = R.G, opp = oppTeam(R.week), me = myTeam(), st = G.st;
    const offIsMe = st && st.off === 'me';
    $('#cScore').innerHTML = [['me', me, G.us], ['op', opp, G.them]].map(([k, t, sc]) => `<div class="sb-team${st && st.off === k ? ' poss' : ''}${k === 'me' ? ' you' : ''}" style="--tc:${t.jersey}"><span>${t.emoji} ${esc(k === 'me' ? me.abbr : t.abbr)}</span><b>${sc}</b>${k === 'me' ? '<i>DU</i>' : ''}</div>`).join('') +
      `<div class="sb-mid">${G.phase === 'end' ? 'FINAL' : st ? `${ordinal(st.down)} &amp; ${st.toGo}<small>BALL ${st.yl === 50 ? '50' : st.yl < 50 ? (offIsMe ? me.abbr : opp.abbr) + ' ' + st.yl : (offIsMe ? opp.abbr : me.abbr) + ' ' + (100 - st.yl)} · DRIVE ${G.idx + 1}/6</small>` : ''}</div>`;
    $('#cLog').innerHTML = G.log.slice(0, 40).map(l => `<li class="${l.head ? 'head' : ''}">${l.t}</li>`).join('');
    panel();
  }
  const ctxOf = () => { const G = R.G, st = G.st; const me = myTeam(), opp = oppTeam(R.week); return { yl: st.yl, toGo: st.toGo, offTeam: st.off === 'me' ? me : opp, defTeam: st.off === 'me' ? opp : me }; };
  function nextDrive() {
    const G = R.G, w = CAREER_WEEKS[R.week - 1];
    G.idx++;
    if (G.idx >= G.order.length) return endGame();
    const off = G.order[G.idx];
    G.st = { off, yl: 25, down: 1, toGo: 10 };
    G.pending = null; G.sub = null; G.showTip = false;
    G.log.unshift({ head: true, t: `Drive ${G.idx + 1}/6: ${off === 'me' ? esc(S.name) : esc(oppTeam(R.week).city + ' ' + oppTeam(R.week).name)} ab der eigenen 25` });
    if (off === 'op' && !w.defense) { G.phase = 'auto'; autoDrive(); }
    else G.phase = 'call';
    paint();
  }
  // Gegner-Drive ohne eigene Calls (Woche 1–5): Assistent coacht die Defense
  function autoDrive() {
    const G = R.G, st = G.st, opp = oppTeam(R.week), oR = oppRatings(R.week), my = offRatings();
    let plays = 0, text = '';
    while (plays < 25) {
      plays++;
      if (st.down === 4) {
        const c = autoFourth(st);
        if (c === 'punt') { text = 'punten'; break; }
        if (c === 'fg') { const dist = 100 - st.yl + 17, ok = rnd() < fgProb(dist); if (ok) G.them += 3; text = ok ? `Field Goal aus ${dist} Yards (+3)` : `Field Goal aus ${dist} Yards daneben`; break; }
      }
      const o = cpuO(opp, st), d = pickW({ box: 1, c2: 1, man: 1, blitz: 0.5 });
      let dec;
      if (sackRoll(o, d, oR, my)) dec = { type: 'sack' };
      else { const ro = readOptions(o, d, Math.floor(rnd() * 1e9)); const pick = cpuPick(ro, oR.qb); dec = resolvePlay(o, d, st, oR, my, ro, pick); if (dec.type === 'comp') dec.yards = Math.round((pick ? pick.depth : AIR[o]) + dec.yac); }
      const y = dec.type === 'run' || dec.type === 'comp' ? dec.yards : dec.type === 'sack' ? -7 : 0;
      if (dec.type === 'int' || dec.type === 'fumble') { text = dec.type === 'int' ? 'verlieren den Ball per Interception' : 'verlieren den Ball per Fumble'; break; }
      if (st.yl + y >= 100) { G.them += 7; text = 'erzielen einen Touchdown (+7)'; break; }
      st.yl = Math.max(1, st.yl + y);
      if (y >= st.toGo) { st.down = 1; st.toGo = Math.min(10, 100 - st.yl); } else { st.down++; st.toGo -= y; if (st.down > 4) { text = 'scheitern auf 4th Down'; break; } }
    }
    G.autoText = `${opp.emoji} ${opp.name} ${text} (${plays} Spielzüge). Deine Defense wurde vom Assistenz-Coach gecallt, ab Woche 6 übernimmst du.`;
    G.log.unshift({ t: G.autoText });
    if (/Touchdown/.test(text)) AU('turnover'); else AU('whistle');
  }
  function prepare() {
    const G = R.G; if (G.pending) return;
    const st = G.st, opp = oppTeam(R.week), seed = Math.floor(rnd() * 1e9);
    if (st.off === 'me') { const d = cpuD(opp, st); const others = Object.keys(DCALLS).filter(k => k !== d); G.pending = { d, look: rnd() < 0.15 ? others[Math.floor(rnd() * others.length)] : d, seed }; }
    else G.pending = { o: cpuO(opp, st), seed };
    const ctx = ctxOf();
    R.V.pv.reset(); R.V.tv.reset();
    R.V.draw(G.pending.look ? staticSim('iz', G.pending.look) : staticSim(G.pending.o, 'c2'), 0, ctx);
  }
  function panel() {
    const G = R.G, w = CAREER_WEEKS[R.week - 1], p = $('#cPanel'), st = G.st;
    const last = G.fb ? `<div class="c-fb">${G.fb}</div>` : '';
    if (G.phase === 'end') {
      p.innerHTML = `<h3>${G.us > G.them ? 'Sieg! 🎉' : G.us < G.them ? 'Niederlage.' : 'Unentschieden.'}</h3><p>${G.us}:${G.them} gegen ${esc(oppTeam(R.week).name)}.</p><button class="fd-btn fd-play" data-act="toresult">Zur Auswertung →</button>`;
      return;
    }
    if (G.phase === 'auto') { p.innerHTML = `${last}<h3>Gegner am Ball</h3><p>${G.autoText}</p><button class="fd-btn fd-play" data-act="nextdrive">Weiter →</button>`; return; }
    if (G.phase === 'over') { p.innerHTML = `${last}<h3>${G.overMsg}</h3><button class="fd-btn fd-play" data-act="nextdrive">${G.idx + 1 < 6 ? 'Nächster Drive →' : 'Zum Ergebnis →'}</button>`; return; }
    if (G.phase === 'anim') { p.innerHTML = `${last}<p class="muted">${G.animMsg || 'Snap …'}</p>`; return; }
    // 4th Down
    if (st.down === 4 && !G.goForIt) {
      if (st.off === 'me' && unlocked(R.week).has('4th')) {
        const dist = 100 - st.yl + 17;
        p.innerHTML = `${last}<h3>4th &amp; ${st.toGo}: Was jetzt?</h3><div class="g-cats">
          <button class="g-cat" data-fourth="punt"><b>🦵 Punt</b><span>Drive vorbei</span></button>
          ${dist <= 58 ? `<button class="g-cat" data-fourth="fg"><b>🥅 Field Goal</b><span>${dist} Yards, ~${Math.round(fgProb(dist) * 100)} %</span></button>` : ''}
          <button class="g-cat" data-fourth="go"><b>🔥 Ausspielen</b><span>${st.toGo} Yards nötig</span></button></div>`;
        return;
      }
      const c = autoFourth(st);
      if (c === 'go') G.goForIt = true;
      else { fourth(c, st.off === 'me'); return; }
    }
    prepare();
    const pd = G.pending, help = helpOn(R.week);
    const tipBtn = G.showTip ? '' : '<button class="g-tipbtn" data-act="tip">💡 Tipp</button>';
    if (st.off === 'me') {
      const L = LOOKS[pd.look], plays = offPlays(R.week);
      const runs = plays.filter(k => OPLAYS[k].kind === 'run'), passes = plays.filter(k => OPLAYS[k].kind === 'pass' && k !== 'pa');
      const head = `<div class="g-look"><small>Du siehst</small><b>${L.title}</b><span>${L.desc}</span>${G.showTip ? `<em>💡 ${L.tip}</em>` : tipBtn}</div>`;
      let body;
      if (!G.sub) body = `<p class="g-q">Was tust du?</p><div class="g-cats">
        <button class="g-cat" ${runs.length === 1 ? `data-o="${runs[0]}"` : 'data-cat="run"'}><b>🏃 Lauf</b><span>${runs.length === 1 ? OPLAYS[runs[0]].name : 'Ball an den HB'}</span></button>
        <button class="g-cat" ${passes.length === 1 ? `data-o="${passes[0]}"` : 'data-cat="pass"'}><b>🎯 Pass</b><span>${passes.length === 1 ? OPLAYS[passes[0]].name : 'Kurz bis tief'}</span></button>
        ${plays.indexOf('pa') >= 0 ? '<button class="g-cat" data-o="pa"><b>🎭 Play-Action</b><span>Täuschen, werfen</span></button>' : ''}</div>`;
      else body = `<p class="g-q">${G.sub === 'run' ? 'Welcher Lauf?' : 'Welcher Pass?'} <button class="g-back" data-act="back">← zurück</button></p><div class="g-calls">${(G.sub === 'run' ? runs : passes).map(k => `<button class="g-call" data-o="${k}"><b>${OPLAYS[k].icon} ${OPLAYS[k].name}</b><span>${OPLAYS[k].short}</span></button>`).join('')}</div>`;
      p.innerHTML = `${last}${head}${body}`;
    } else {
      const i21 = FD_NODES[OPLAYS[pd.o].node].diagram.off === 'i21', s = situation(st);
      const tip = i21 && s === 'short' ? 'Fullback plus kurze Distanz: fast sicher ein Lauf.' : s === 'long' ? 'Viele Yards nötig: wahrscheinlich ein Pass.' : i21 ? 'Mit Fullback wird meist gelaufen.' : 'Aus der Shotgun kommt öfter ein Pass.';
      const head = `<div class="g-look"><small>Du siehst</small><b>${i21 ? 'I-Formation mit Fullback' : 'Shotgun, 3 Wide Receiver'}</b><span>${ordinal(st.down)} &amp; ${st.toGo} für ${esc(oppTeam(R.week).name)}.</span>${G.showTip ? `<em>💡 ${tip}</em>` : tipBtn}</div>`;
      const body = !G.sub ? `<p class="g-q">Was tust du?</p><div class="g-cats">
        <button class="g-cat" data-d="box"><b>🧱 Lauf stoppen</b><span>8 in die Box</span></button>
        <button class="g-cat" data-cat="cover"><b>🕸️ Pass verteidigen</b><span>Mann oder Raum</span></button>
        <button class="g-cat" data-d="blitz"><b>⚡ Blitz</b><span>6 auf den QB</span></button></div>`
        : `<p class="g-q">Welche Deckung? <button class="g-back" data-act="back">← zurück</button></p><div class="g-calls">${['c2', 'man'].map(k => `<button class="g-call" data-d="${k}"><b>${DCALLS[k].icon} ${DCALLS[k].name}</b><span>${DCALLS[k].short}</span></button>`).join('')}</div>`;
      p.innerHTML = `${last}${head}${body}`;
    }
  }
  function fourth(c, auto) {
    const G = R.G, st = G.st, who = st.off === 'me' ? S.name : oppTeam(R.week).name;
    if (c === 'go') { G.goForIt = true; panel(); return; }
    let t;
    if (c === 'punt') { t = `${esc(who)}: Punt.`; AU('whistle'); G.overMsg = 'Punt. Drive vorbei.'; }
    else { const dist = 100 - st.yl + 17, ok = rnd() < fgProb(dist); if (ok) { if (st.off === 'me') G.us += 3; else G.them += 3; } AU(ok ? 'fieldgoal' : 'miss'); t = `${esc(who)}: Field Goal aus ${dist} Yards ${ok ? 'drin (+3)' : 'daneben'}.`; G.overMsg = ok ? 'Field Goal! +3' : 'Field Goal daneben.'; }
    if (auto) t += ' <small>(Entscheidung vom Assistenz-Coach, ab Woche 7 entscheidest du)</small>';
    G.log.unshift({ t: `<span class="dd">4TH & ${st.toGo}</span> ${t}` });
    G.fb = null; G.phase = 'over'; paint();
  }
  // ----- Spielzug mit Read (eigene Offense) -----
  function offPlay(o) {
    const G = R.G, st = G.st, pd = G.pending, d = pd.d, seed = pd.seed, ctx = ctxOf();
    const my = offRatings(), oR = oppRatings(R.week);
    G.phase = 'anim'; G.animMsg = `${OPLAYS[o].icon} ${OPLAYS[o].name} gegen ${DCALLS[d].icon} ${DCALLS[d].name}${pd.look !== d ? ' (getäuscht!)' : ''}`; G.fb = null; G.replay = null; G.goForIt = false; panel();
    AU('snap');
    if (sackRoll(o, d, my, oR)) { setPlaying(true); const sim = buildSim(o, d, { type: 'sack' }, st.yl, { seed }); R.V.play(sim, ctx, 0, null, () => applyPlay(o, d, sim, null, null)); return; }
    const ro = scoreRead(readOptions(o, d, seed), st);
    setPlaying(true);
    if (!ro) { const dec = resolvePlay(o, d, st, my, oR, null, null); const sim = buildSim(o, d, dec, st.yl, { seed }); R.V.play(sim, ctx, 0, null, () => applyPlay(o, d, sim, null, null)); return; }
    const pre = buildSim(o, d, OPLAYS[o].kind === 'run' ? { type: 'run', yards: 0 } : { type: 'inc' }, st.yl, { seed });
    R.V.play(pre, ctx, 0, ro.tDec, fi => {
      askRead(R.V, ro, ctx, pre.frames[fi], helpOn(R.week), pick => {
        let dec, sim;
        if (!pick && ro.kind === 'pass') { dec = { type: 'sack' }; sim = buildSim(o, d, dec, st.yl, { seed }); R.V.play(sim, ctx, fi, null, () => applyPlay(o, d, sim, ro, null)); return; }
        const use = pick || ro.opts.find(x => x.id === 'M') || ro.opts[0];
        dec = resolvePlay(o, d, st, my, oR, ro, use);
        sim = buildSim(o, d, dec, st.yl, Object.assign({ seed }, ro.kind === 'run' ? { lane: use.x } : { target: use.id }));
        R.V.play(sim, ctx, fi, null, () => applyPlay(o, d, sim, ro, pick));
      });
    });
  }
  // ----- Spielzug als Defense -----
  function defPlay(d) {
    const G = R.G, st = G.st, pd = G.pending, o = pd.o, ctx = ctxOf(), oR = oppRatings(R.week), my = offRatings();
    G.phase = 'anim'; G.animMsg = `${DCALLS[d].icon} ${DCALLS[d].name} gegen ${OPLAYS[o].icon} ${OPLAYS[o].name}`; G.fb = null; G.replay = null; G.goForIt = false; panel();
    AU('snap');
    let dec, opts = { seed: pd.seed };
    if (sackRoll(o, d, oR, my)) dec = { type: 'sack' };
    else { const ro = readOptions(o, d, pd.seed); const pick = cpuPick(ro, oR.qb); dec = resolvePlay(o, d, st, oR, my, ro, pick); if (pick) Object.assign(opts, ro.kind === 'run' ? { lane: pick.x } : { target: pick.id }); }
    const sim = buildSim(o, d, dec, st.yl, opts);
    setPlaying(true);
    R.V.play(sim, ctx, 0, null, () => applyPlay(o, d, sim, null, null, true));
  }
  function applyPlay(o, d, sim, ro, pick, asDef) {
    const G = R.G, st = G.st, w = CAREER_WEEKS[R.week - 1], before = Object.assign({}, st);
    const meOff = st.off === 'me';
    let res, end = null;
    if (sim.type === 'int' || sim.type === 'fumble') { res = sim.type === 'int' ? 'Interception!' : 'Fumble!'; end = 'Ballverlust!'; }
    else if (sim.safety) { if (meOff) G.them += 2; else G.us += 2; res = 'Safety!'; end = 'Safety!'; }
    else if (sim.td) { if (meOff) G.us += 7; else G.them += 7; res = `Touchdown! (${sim.yards} Yards)`; end = meOff ? 'Touchdown! 🏈' : 'Touchdown für den Gegner.'; }
    else {
      const y = sim.type === 'inc' ? 0 : sim.yards;
      res = sim.type === 'inc' ? 'Incomplete' : sim.type === 'sack' ? `Sack, ${y} Yards` : (y >= 0 ? `+${y} Yards` : `${y} Yards`);
      st.yl += y;
      if (y >= st.toGo) { st.down = 1; st.toGo = Math.min(10, 100 - st.yl); res += ' · <b>First Down!</b>'; setTimeout(() => AU('firstdown'), 200); }
      else { st.down++; st.toGo -= y; if (st.down > 4) { res += ' · Turnover on Downs'; end = 'Turnover on Downs.'; } }
    }
    // Feedback: Call + Read
    const fb = [];
    if (!asDef) {
      const plays = offPlays(R.week), best = Math.max(...plays.map(p => EY(p, d)));
      const good = EY(o, d) >= best - 1.0; G.total++; if (good) G.good++;
      fb.push(`${good ? '✅' : '❌'} <b>Call:</b> ${whyOf(o, d)}${G.pending && G.pending.look !== d ? ' (Die Defense hatte getäuscht.)' : ''}`);
      if (ro) {
        const okR = goodRead(ro, pick); G.total++; if (okR) G.good++;
        fb.push(`${okR ? '✅' : '❌'} <b>Read:</b> ${readFeedback(ro, pick, before)}`);
        const ll = luckLine(ro, pick, sim, before); if (ll) fb.push(ll);
        if (!okR) G.replay = { o, d, ro, yl: before.yl, toGo: before.toGo, seed: G.pending.seed };
      }
      const il = incLine(sim); if (il) fb.push(il);
    } else {
      const vals = Object.keys(DCALLS).map(x => EY(o, x)), best = Math.min(...vals), good = EY(o, d) <= best + 1.0; G.total++; if (good) G.good++;
      fb.push(`${good ? '✅' : '❌'} <b>Call:</b> Die Offense spielte ${OPLAYS[o].name}. ${whyOf(o, d)}`);
    }
    G.fb = fb.join('<br>') + (G.replay ? replayBtn : '');
    setPlaying(false);
    G.log.unshift({ t: `<span class="dd">${ordinal(before.down)} & ${before.toGo}</span> ${esc(asDef ? DCALLS[d].name + ' vs ' + OPLAYS[o].name : OPLAYS[o].name + ' vs ' + DCALLS[d].name)} → ${res}` });
    G.pending = null; G.sub = null; G.showTip = false;
    if (end) { G.phase = 'over'; G.overMsg = end; } else G.phase = 'call';
    paint();
  }
  function endGame() {
    const G = R.G; G.phase = 'end';
    AU(G.us > G.them ? 'win' : G.us < G.them ? 'lose' : 'whistle');
    paint();
  }
  function markStar(n, key, val) {
    S.weeks[n] = S.weeks[n] || { stars: {} };
    const had = S.weeks[n].stars[key];
    if (val && !had) { S.weeks[n].stars[key] = true; S.points++; }
    save();
  }
  function renderResult() {
    const G = R.G, n = R.week, w = CAREER_WEEKS[n - 1];
    const pct = G.total ? Math.round(G.good / G.total * 100) : 0;
    const win = G.us > G.them, readsOk = pct >= 70;
    const before = S.points;
    markStar(n, 'win', win); markStar(n, 'reads', readsOk);
    S.weeks[n].result = { us: G.us, them: G.them };
    if (n === S.week && n < 8) S.week = n + 1;
    save();
    const st = S.weeks[n].stars, gained = S.points - before;
    const nxt = CAREER_WEEKS[n];
    app.innerHTML = `<section class="q-card c-mid">
      <div class="q-top"><span>Woche ${n} · Auswertung</span><span>${esc(w.title)}</span></div>
      <h3>${win ? 'Sieg' : G.us < G.them ? 'Niederlage' : 'Unentschieden'} ${G.us}:${G.them} gegen ${esc(oppTeam(n).name)}</h3>
      <ul class="c-stars"><li>${st.drill ? '★' : '☆'} Drill bestanden</li><li>${st.win ? '★' : '☆'} Spiel gewonnen</li><li>${st.reads ? '★' : '☆'} Gute Entscheidungen (≥ 70 %): ${pct} %</li></ul>
      <p>${gained ? `+${gained} Coach-Punkt${gained > 1 ? 'e' : ''}! Verteile sie im Büro auf deine Spieler.` : 'Keine neuen Sterne diesmal.'}</p>
      ${n === 8 ? '<p class="c-tip">🏆 Du hast alle 8 Lernwochen geschafft! Du kannst jede Woche wiederholen und Sterne sammeln.</p>' : nxt ? `<p>Als Nächstes: <b>Woche ${n + 1}: ${esc(nxt.title)}</b> gegen ${CAREER_TEAMS[nxt.opp].emoji} ${esc(CAREER_TEAMS[nxt.opp].city + ' ' + CAREER_TEAMS[nxt.opp].name)}.</p>` : ''}
      <div class="g-row"><button class="fd-btn fd-play" data-act="hub">Ins Büro →</button><button class="fd-btn" data-week="${n}">Woche wiederholen</button></div></section>`;
  }

  // ---------- Vollbild ----------
  function toggleFS() {
    const el = $('#cApp');
    const isFs = document.fullscreenElement || document.webkitFullscreenElement || document.body.classList.contains('pseudo-fs');
    if (isFs) {
      if (document.fullscreenElement) document.exitFullscreen(); else if (document.webkitFullscreenElement) document.webkitExitFullscreen();
      document.body.classList.remove('pseudo-fs');
    } else {
      const req = el.requestFullscreen || el.webkitRequestFullscreen;
      if (req) Promise.resolve(req.call(el)).then(() => { try { screen.orientation && screen.orientation.lock && screen.orientation.lock('landscape').catch(() => {}); } catch (e) {} }).catch(() => document.body.classList.add('pseudo-fs'));
      else document.body.classList.add('pseudo-fs');
    }
    setTimeout(() => R.V && R.V.redraw(), 200);
  }
  document.addEventListener('fullscreenchange', () => { document.body.classList.toggle('is-fs', !!document.fullscreenElement); setTimeout(() => R.V && R.V.redraw(), 150); });

  // ---------- Klicks ----------
  document.addEventListener('click', e => {
    const t = e.target.closest('button, a, input');
    if (!t) return;
    const a = t.dataset.act;
    if (t.tagName === 'A' && a) e.preventDefault();
    if (a === 'create') { newCareer(($('#cName').value || '').trim(), (document.querySelector('input[name=ccol]:checked') || {}).value); if (window.FDAUDIO) FDAUDIO.start(); go('hub'); }
    else if (a === 'hub') { R.G = null; go('hub'); }
    else if (t.dataset.week) { const n = +t.dataset.week; if (window.FDAUDIO) FDAUDIO.start(); go('lesson', { week: n, i: 0 }); }
    else if (a === 'lnext') { const w = CAREER_WEEKS[R.week - 1]; if (R.i < w.lesson.length - 1) { R.i++; renderLesson(); scrollTo({ top: 0 }); } else go('drill', { week: R.week }); }
    else if (a === 'lprev') { R.i--; renderLesson(); }
    else if (a === 'demo') playDemo(CAREER_WEEKS[R.week - 1].lesson[R.i].demo);
    else if (a === 'snap' && R.onSnap) { AU('snap'); R.onSnap(); }
    else if (t.dataset.dpick && R.onDPick) { document.querySelectorAll('[data-dpick]').forEach(b => { b.disabled = true; }); R.onDPick(t.dataset.dpick); R.onDPick = null; }
    else if (a === 'dnext') { R.di++; renderDrill(); }
    else if (a === 'replay') {
      t.disabled = true;
      const G = R.G;
      if (G && G.replay && G.phase !== 'anim') {
        const rp = G.replay, prev = G.phase, ctx = { yl: rp.yl, toGo: rp.toGo, offTeam: myTeam(), defTeam: oppTeam(R.week) }; G.phase = 'replay';
        replayBest(R.V, ctx, rp.o, rp.d, rp.ro, rp.yl, rp.seed, () => { G.phase = prev; t.disabled = false; });
      } else if (!G && R.onReplay) { R.onReplay(); setTimeout(() => { t.disabled = false; }, 4000); }
    }
    else if (a === 'redrill') go('drill', { week: R.week });
    else if (a === 'startgame') startGame(R.week);
    else if (a === 'nextdrive') nextDrive();
    else if (a === 'toresult') go('result', { week: R.week, G: R.G });
    else if (t.dataset.o && R.G && R.G.phase === 'call') offPlay(t.dataset.o);
    else if (t.dataset.d && R.G && R.G.phase === 'call') defPlay(t.dataset.d);
    else if (t.dataset.cat && R.G) { R.G.sub = t.dataset.cat; AU('click'); panel(); }
    else if (a === 'back' && R.G) { R.G.sub = null; panel(); }
    else if (a === 'tip' && R.G) { R.G.showTip = true; panel(); }
    else if (t.dataset.fourth) fourth(t.dataset.fourth);
    else if (t.dataset.up && S.points > 0) { S.ratings[t.dataset.up] = Math.min(99, S.ratings[t.dataset.up] + 3); S.points--; save(); AU('right'); renderHub(); }
    else if (t.id === 'cHelp') { S.help = t.checked ? true : null; save(); }
    else if (a === 'reset') { if (confirmReset()) { S = null; try { localStorage.removeItem(KEY); } catch (er) {} go('start'); } }
    else if (t.dataset.cview) { S.view = t.dataset.cview; save(); if (R.V) { R.V.sync(); R.V.redraw(); } }
    else if (t.dataset.cspeed) { speed = +t.dataset.cspeed; document.querySelectorAll('[data-cspeed]').forEach(b => b.classList.toggle('on', b === t)); }
    else if (a === 'fs') toggleFS();
  });
  // Zurücksetzen ohne Browser-Dialog: zweimal klicken
  let resetArmed = 0;
  function confirmReset() { const now = Date.now(); if (now - resetArmed < 4000) return true; resetArmed = now; const b = document.querySelector('[data-act=reset]'); if (b) b.textContent = 'Sicher? Nochmal klicken zum Löschen'; return false; }

  render();
  window.__fdcareer = { get S() { return S; }, get R() { return R; }, EY, resolvePlay };
})();
