// ============================================================
//  FIRST DOWN — Play-Call-Spiel + Quiz „Was jetzt?" (26.11.2026)
// ============================================================
//  Idee nach Four Verts (Football-Play-Calling). Du callst Offense
//  oder Defense, die CPU antwortet mit Tendenzen der Bears bzw. Lions
//  (aus dem MFHFB-Bericht Bears @ Lions, Stand 26.11.2026).
//  Ausgang = vereinfachtes Wahrscheinlichkeitsmodell (MODEL) plus
//  Teamprofil-Modifikatoren, keine echte Prognose.
// ============================================================
(function () {
  'use strict';
  const { OPLAYS, DCALLS, buildSim, staticSim, PixelView, TopView } = window.FDSIM;
  const $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  const rnd = Math.random;
  const gauss = () => { let u = 0, v = 0; while (!u) u = rnd(); while (!v) v = rnd(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
  const pickW = w => { const ks = Object.keys(w); let s = ks.reduce((a, k) => a + w[k], 0), r = rnd() * s; for (const k of ks) { r -= w[k]; if (r <= 0) return k; } return ks[ks.length - 1]; };

  // ---------- Teams ----------
  const TEAMS = {
    CHI: {
      abbr: 'CHI', name: 'Bears', full: 'Chicago Bears', emoji: '🐻',
      helmet: '#0b162a', stripe: '#c83803', jersey: '#0b162a', trim: '#c83803', pants: '#e9e4d6', end: '#0b162a',
      off: { run: 0.4, deep: 0.05, intAdd: 0.01 },
      def: { run: 0.3, third: -0.06, rushSack: 0.03 },
      notes: {
        off: ['Laufen viel: 142 Rushing Yards pro Spiel (Platz 3), meiste Ballbesitzzeit der Liga.', 'Caleb Williams wirft tief und verlängert Spielzüge.', 'Aber: Turnover-Probleme (Differenz −4).'],
        def: ['Jeffery Simmons: Druck schon mit vier Rushern, Blitz-Rate von 38 % auf 19 % gesunken.', 'Beste Third-Down-Defense der Liga (22,8 %), dort kommt der Blitz von Dennis Allen.', 'Wacklig gegen den Lauf.'],
      },
    },
    DET: {
      abbr: 'DET', name: 'Lions', full: 'Detroit Lions', emoji: '🦁',
      helmet: '#b0b7bc', stripe: '#0076b6', jersey: '#0076b6', trim: '#b0b7bc', pants: '#b0b7bc', end: '#0076b6',
      off: { run: 0.6, screen: 1.5, pa: 0.05 },
      def: { run: -0.6, man: -0.04, lateSack: -0.03 },
      notes: {
        off: ['Jahmyr Gibbs führt die NFL bei Rushing Yards an.', 'Plan: früh laufen, dann Play-Action, keine Third-and-longs.', 'Gibbs ist auch Passziel (Screens, Checkdowns).'],
        def: ['Seit Week 5 top gegen den Lauf: nur 75 Rushing Yards pro Spiel.', 'Viel Manndeckung, bei Blitzes 63,1 % (vorher 38,5 %).', 'Ohne Aidan Hutchinson fehlt der späte Druck.'],
      },
    },
  };

  // ---------- Modell ----------
  // Lauf: m = Ø Yards, sd = Streuung, bp = Chance auf Big Play. Pass: c = Completion,
  // yac = Yards nach dem Fang, sack/int = Wahrscheinlichkeit, bp = Big Play nach dem Fang.
  const MODEL = {
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
  // Warum hat der Call funktioniert (oder nicht)?
  const WHY = {
    box: { run: 'Gegen 8 in der Box hat der Lauf kaum Platz: ein Verteidiger mehr, als Blocker da sind.', deep: 'Nur ein Safety tief: Genau dafür ist der tiefe Ball da (wie die Packers gegen Bagent, nur umgekehrt).', pa: 'Die Box beißt auf die Lauf-Täuschung an, dahinter ist Platz.', quick: 'Die Cornerbacks stehen allein: Ein schneller Pass ist sicher.', mid: 'Linebacker und Safety rücken vor, die Mitte dahinter wird frei.', screen: 'Viele Verteidiger vorne, aber ein Screen bringt den Ball schnell an ihnen vorbei.' },
    c2: { run: 'Cover 2 lässt nur sechs Mann in der Box: gute Zeit zum Laufen.', deep: 'Zwei Safeties tief: Der lange Ball ist zugestellt.', mid: 'Der Dig landet zwischen Linebackern und Safeties, die klassische Lücke der Cover 2.', quick: 'Die Cornerbacks lauern kurz außen: Kurze Pässe bringen wenig.', screen: 'Die Defense schaut auf den Ball und tackelt sofort: wenig Raum.', pa: 'Die Safeties bleiben tief, die Täuschung bringt wenig.' },
    man: { run: 'Die Verteidiger schauen auf ihre Männer: ordentlich Raum für den Lauf.', quick: 'Gegen Manndeckung muss der Receiver sein Duell gewinnen: Slants sind dafür gemacht.', deep: 'Eins gegen eins in der Tiefe: Wer schneller ist, gewinnt.', mid: 'Enge Deckung auf jeder Route: Der QB braucht Zeit, bis einer frei ist.', screen: 'Die Verteidiger laufen ihren Receivern hinterher, der HB hat ein wenig Platz.', pa: 'Die Manndecker achten auf ihre Receiver, nicht auf die Lauf-Täuschung.' },
    blitz: { run: 'Blitzer stehen in den Lücken: Entweder bleibt der Lauf stecken oder er bricht durch.', quick: 'Hot Route: Der Ball ist weg, bevor der Blitz ankommt.', screen: 'Screen gegen Blitz: Die Verteidiger rennen am Ball vorbei, der perfekte Konter.', deep: 'Lange Route gegen Blitz: Der QB hat keine Zeit, aber wenn der Pass ankommt, ist niemand mehr hinten.', mid: 'Fünf Schritte zurück gegen sechs Rusher: kaum Zeit.', pa: 'Die Täuschung kostet Zeit, die der QB gegen einen Blitz nicht hat.' },
  };
  const whyKey = o => OPLAYS[o].kind === 'run' ? 'run' : o;

  function resolve(o, d, st) {
    const off = TEAMS[st.offTeam].off, def = TEAMS[st.defTeam].def;
    const m = Object.assign({}, MODEL[o][d]);
    if (OPLAYS[o].kind === 'run') {
      let mean = m.m + (off.run || 0) + (def.run || 0);
      if ((o === 'power' || o === 'iso') && st.toGo <= 2) mean += 1.0;
      if (rnd() < 0.012) return { type: 'fumble', yards: Math.max(-3, Math.round(mean + gauss() * 1.5)) };
      let y = mean + gauss() * m.sd;
      if (rnd() < m.bp) y += 8 + rnd() * 25;
      return { type: 'run', yards: Math.max(-4, Math.round(y)) };
    }
    let c = m.c, sack = m.sack, int = m.int + (off.intAdd || 0), yac = m.yac;
    if (o === 'deep' || o === 'pa') c += (off.deep || 0) + (o === 'pa' ? (off.pa || 0) : 0);
    if (o === 'screen') yac += off.screen || 0;
    if (st.down === 3) c += def.third || 0;
    if (d === 'man') c += def.man || 0;
    if (d === 'c2' || d === 'man') sack += def.rushSack || 0;
    if (o === 'deep' || o === 'mid' || o === 'pa') sack = Math.max(0.01, sack + (def.lateSack || 0));
    if (rnd() < sack) return { type: 'sack' };
    if (rnd() < int) return { type: 'int' };
    if (rnd() > c) return { type: 'inc' };
    let y = Math.max(0, yac + gauss() * m.sd);
    if (rnd() < m.bp) y += 8 + rnd() * 20;
    return { type: 'comp', yac: y };
  }

  // ---------- CPU ----------
  function situation(st) { return st.toGo <= 2 ? 'short' : (st.toGo >= 7 && st.down >= 2) ? 'long' : 'normal'; }
  function cpuDefense(st) {
    const s = situation(st);
    const w = s === 'short' ? { box: 0.55, man: 0.2, blitz: 0.15, c2: 0.1 } : s === 'long' ? { c2: 0.35, man: 0.25, blitz: 0.3, box: 0.1 } : { box: 0.25, c2: 0.3, man: 0.3, blitz: 0.15 };
    if (st.defTeam === 'DET') { w.man *= 1.3; w.blitz *= 1.2; }
    else { w.c2 *= 1.15; w.man *= 1.15; w.blitz *= st.down === 3 ? 1.4 : 0.5; }
    return pickW(w);
  }
  function cpuOffense(st) {
    const s = situation(st);
    const w = s === 'short' ? { power: 0.3, iso: 0.2, iz: 0.2, quick: 0.15, pa: 0.15 } : s === 'long' ? { quick: 0.25, mid: 0.3, deep: 0.15, screen: 0.2, pa: 0.05, iz: 0.05 } : { iz: 0.2, oz: 0.12, power: 0.08, quick: 0.15, mid: 0.15, deep: 0.08, screen: 0.08, pa: 0.14 };
    if (st.offTeam === 'CHI') { ['iz', 'oz', 'power', 'iso'].forEach(k => { if (w[k]) w[k] *= 1.25; }); if (w.deep) w.deep *= 1.3; }
    else { ['iz', 'oz'].forEach(k => { if (w[k]) w[k] *= 1.3; }); if (w.pa) w.pa *= 1.3; if (w.screen) w.screen *= 1.3; }
    return pickW(w);
  }
  function cpuFourth(st) {
    const toGoal = 100 - st.yl;
    if (st.toGo <= 1 && st.yl >= 40) return 'go';
    if (toGoal + 17 <= 52) return 'fg';
    if (st.yl >= 60 && st.toGo <= 3) return 'go';
    return 'punt';
  }
  const fgProb = dist => dist <= 30 ? 0.97 : dist <= 40 ? 0.9 : dist <= 50 ? 0.75 : dist <= 55 ? 0.55 : 0.3;

  // ---------- Zustand ----------
  let G = null;
  const AU = (n) => window.FDAUDIO && window.FDAUDIO.fx(n);
    const ordinal = n => ['', '1ST', '2ND', '3RD', '4TH'][n];
  function spot(st) { const y = st.yl; return y === 50 ? 'Mittellinie' : y < 50 ? `eigene ${y}` : `gegnerische ${100 - y}`; }
  function spotShort(st) { const y = st.yl; return y === 50 ? '50' : y < 50 ? `${st.offTeam} ${y}` : `${st.defTeam} ${100 - y}`; }

  function newGame(user, mode) {
    const cpu = user === 'CHI' ? 'DET' : 'CHI';
    let order;
    if (mode === 'off') order = [user];
    else if (mode === 'def') order = [cpu];
    else { const first = rnd() < 0.5 ? user : cpu; const second = first === user ? cpu : user; order = [first, second, first, second, first, second]; }
    if (window.FDAUDIO) FDAUDIO.start();
    G = { user, cpu, mode, order, idx: -1, score: { CHI: 0, DET: 0 }, log: [], stats: { CHI: { yds: 0, plays: 0 }, DET: { yds: 0, plays: 0 } } };
    nextDrive();
  }
  function nextDrive() {
    G.idx++;
    if (G.idx >= G.order.length) return endGame();
    const off = G.order[G.idx];
    G.st = { offTeam: off, defTeam: off === 'CHI' ? 'DET' : 'CHI', yl: 25, down: 1, toGo: 10, plays: 0 };
    G.phase = 'call'; G.pending = null; G.sub = null; G.showTip = false;
    G.log.unshift({ head: true, text: `Drive ${G.idx + 1}/${G.order.length}: ${TEAMS[off].full} ab der eigenen 25` });
    renderAll();
  }
  const userOnOffense = () => G.st.offTeam === G.user;

  // ---------- Spielzug ----------
  function runPlay(o, d) {
    const st = G.st;
    const dec = resolve(o, d, st);
    const sim = buildSim(o, d, dec, st.yl);
    G.disguised = G.pending && G.pending.look && G.pending.look !== d;
    G.pending = null; G.sub = null; G.showTip = false;
    G.phase = 'anim';
    G.last = { o, d, sim, ctx: { yl: st.yl, toGo: st.toGo, offTeam: TEAMS[st.offTeam], defTeam: TEAMS[st.defTeam] } };
    renderCalls();
    play(G.last, () => applyResult(o, d, sim));
  }
  function applyResult(o, d, sim) {
    const st = G.st, before = Object.assign({}, st);
    st.plays++; G.stats[st.offTeam].plays++;
    let text = `${TEAMS[st.offTeam].name}: <b>${OPLAYS[o].name}</b> gegen <b>${DCALLS[d].name}</b> → `;
    const why = (G.disguised ? 'Achtung, die Defense hat getäuscht: Sie zeigte etwas anderes, als sie gespielt hat. ' : '') + WHY[d][whyKey(o)];
    let end = null;
    if (sim.type === 'int') { text += '<b>Interception!</b>'; end = 'turnover'; }
    else if (sim.type === 'fumble') { text += `<b>Fumble!</b> Ballverlust nach ${sim.yards} Yards`; end = 'turnover'; }
    else if (sim.safety) { G.score[st.defTeam] += 2; text += '<b>Safety!</b> 2 Punkte für die Defense'; end = 'safety'; }
    else if (sim.td) { G.score[st.offTeam] += 7; G.stats[st.offTeam].yds += sim.yards; text += `<b>Touchdown!</b> (${sim.yards} Yards, inkl. Extrapunkt 7 Punkte)`; end = 'td'; }
    else {
      const y = sim.type === 'inc' ? 0 : sim.yards;
      G.stats[st.offTeam].yds += y;
      text += sim.type === 'inc' ? 'Incomplete' : sim.type === 'sack' ? `Sack, ${y} Yards` : (y >= 0 ? `+${y} Yards` : `${y} Yards`);
      st.yl += y;
      if (y >= st.toGo) { st.down = 1; st.toGo = Math.min(10, 100 - st.yl); text += ' · <b>First Down!</b>'; setTimeout(() => AU('firstdown'), 250); }
      else { st.down++; st.toGo -= y; if (st.down > 4) { text += ' · Turnover on Downs'; end = 'downs'; } }
    }
    G.log.unshift({ text: `<span class="dd">${ordinal(before.down)} & ${before.toGo}</span> ${text}<br><small>${why}</small>` });
    G.lastWhy = { text, why, end };
    if (end) { G.phase = 'driveover'; G.driveEnd = end; }
    else G.phase = 'call';
    renderAll();
  }
  function fourth(choice) {
    const st = G.st, team = TEAMS[st.offTeam];
    if (choice === 'go') { G.phase = 'call'; G.goForIt = true; renderAll(); return; }
    let text;
    if (choice === 'punt') { text = `${team.name} punten. Drive vorbei.`; G.driveEnd = 'punt'; AU('whistle'); }
    else {
      const dist = 100 - st.yl + 17, ok = rnd() < fgProb(dist);
      if (ok) G.score[st.offTeam] += 3;
      AU(ok ? 'fieldgoal' : 'miss');
      text = `${team.name}: Field Goal aus ${dist} Yards … ${ok ? '<b>drin! +3</b>' : '<b>daneben!</b>'}`;
      G.driveEnd = ok ? 'fg' : 'fgmiss';
    }
    G.log.unshift({ text: `<span class="dd">4TH & ${st.toGo}</span> ${text}` });
    G.lastWhy = { text, why: '', end: G.driveEnd };
    G.phase = 'driveover';
    renderAll();
  }
  function endGame() {
    G.phase = 'end';
    if (G.mode === 'game') AU(G.score[G.user] > G.score[G.cpu] ? 'win' : G.score[G.user] < G.score[G.cpu] ? 'lose' : 'whistle');
    else AU('whistle');
    renderAll();
  }

  // ---------- Animation ----------
  let view = 'pixel', pv = null, tv = null, anim = null;
  function play(entry, done) {
    stopAnim();
    pv.reset(); tv.reset();
    const sim = entry.sim; let fi = 0, last = 0, acc = 0;
    const speed = () => +($('#gSpeed .on') || { dataset: { s: 1 } }).dataset.s;
    $('#gLabel').hidden = true;
    AU('snap');
    const step = ts => {
      if (!last) last = ts;
      acc += (ts - last) / 1000 * speed(); last = ts;
      while (acc >= sim.dt && fi < sim.frames.length - 1) { fi++; acc -= sim.dt; }
      drawFrame(sim, fi, entry.ctx);
      if (sim.frames[fi].t >= sim.labelAt && $('#gLabel').hidden && sim.label) showLabel(sim.label, sim);
      if (fi < sim.frames.length - 1) anim = requestAnimationFrame(step);
      else { anim = null; if (done) done(); }
    };
    anim = requestAnimationFrame(step);
  }
  function stopAnim() { if (anim) cancelAnimationFrame(anim); anim = null; }
  function drawFrame(sim, fi, ctx) { if (view === 'pixel') pv.draw(sim, fi, ctx); else tv.draw(sim, fi, ctx); }
  function showLabel(t, sim) {
    const l = $('#gLabel');
    l.textContent = t; l.hidden = false;
    l.className = 'g-label' + (sim.td ? ' td' : sim.turnover || sim.type === 'sack' || sim.safety ? ' bad' : '');
    AU(sim.td ? 'touchdown' : sim.turnover || sim.safety ? 'turnover' : sim.type === 'sack' ? 'sack' : sim.type === 'inc' ? 'incomplete' : 'tackle');
  }
  function showIdle() {
    if (!G || !G.st || !G.pending) return;
    const st = G.st, pd = G.pending;
    const sim = pd.look ? staticSim('iz', pd.look) : staticSim(pd.o, 'c2');
    const ctx = { yl: st.yl, toGo: st.toGo, offTeam: TEAMS[st.offTeam], defTeam: TEAMS[st.defTeam] };
    G.idle = { sim, ctx };
    pv.reset(); tv.reset();
    drawFrame(sim, 0, ctx);
  }


  // ---------- Was man vor dem Snap sieht ----------
  const LOOKS = {
    box: { title: '8 in der Box', desc: 'Ein Safety ist nach vorne gerückt, nur einer steht noch tief.', tip: 'Vorne viele Leute, hinten nur einer. Ein Lauf hat es schwer, hinter der Box ist Platz.' },
    c2: { title: '2 Safeties tief', desc: 'Beide Safeties stehen weit hinten, vorne nur sechs Mann.', tip: 'Tief ist es dicht, vorne dünn. Laufen oder in die Mitte zwischen die Reihen werfen.' },
    man: { title: 'Cornerbacks eng am Mann', desc: 'Die Verteidiger stehen direkt vor ihren Receivern, ein Safety tief.', tip: 'Manndeckung: Jeder Receiver muss sein Duell gewinnen. Schnelle Routen oder ein Lauf helfen.' },
    blitz: { title: 'Linebacker an der Line', desc: 'Linebacker und Nickelback stehen ganz vorne: Ein Blitz droht.', tip: 'Gleich kommen viele auf den QB. Der Ball muss schnell weg, ein Screen lässt sie ins Leere laufen.' },
  };
  function formationLook(o, st) {
    const i21 = FD_NODES[OPLAYS[o].node].diagram.off === 'i21';
    const s = situation(st);
    const title = i21 ? 'I-Formation mit Fullback' : 'Shotgun, 3 Wide Receiver';
    const desc = i21 ? '2 Running Backs, 1 Tight End, QB direkt hinter dem Center.' : '1 Running Back, 1 Tight End, QB 5 Yards hinter dem Center.';
    const tip = i21 && s === 'short' ? 'Fullback plus kurze Distanz: Fast sicher kommt ein Lauf.'
      : s === 'long' ? `${ordinal(st.down)} & ${st.toGo}: Die Offense braucht viele Yards, wahrscheinlich ein Pass.`
      : i21 ? 'Mit Fullback wird meist gelaufen, aber Play-Action ist möglich.' : 'Alles ist möglich, aber aus der Shotgun kommt öfter ein Pass.';
    return { title, desc, tip };
  }
  function prepareCall() {
    if (G.pending) return;
    if (userOnOffense()) {
      const d = cpuDefense(G.st);
      const keys = Object.keys(DCALLS).filter(k => k !== d);
      G.pending = { d, look: rnd() < 0.2 ? keys[Math.floor(rnd() * keys.length)] : d };
    } else G.pending = { o: cpuOffense(G.st) };
    showIdle();
  }

  // ---------- Darstellung ----------
  function renderAll() {
    const el = $('#game');
    if (!G) { el.hidden = true; $('#setup').hidden = false; return; }
    $('#setup').hidden = true; el.hidden = false;
    const st = G.st;
    $('#gScore').innerHTML = ['CHI', 'DET'].map(k => `<div class="sb-team${st && st.offTeam === k ? ' poss' : ''}${G.user === k ? ' you' : ''}" style="--tc:${TEAMS[k].jersey}"><span>${TEAMS[k].emoji} ${k}</span><b>${G.score[k]}</b>${G.user === k ? '<i>DU</i>' : ''}</div>`).join('') +
      `<div class="sb-mid">${G.phase === 'end' ? 'FINAL' : `${ordinal(st.down) || '4TH'} &amp; ${st.toGo}<small>BALL ${esc(spotShort(st))} · DRIVE ${G.idx + 1}/${G.order.length}</small>`}</div>`;
    renderPanel();
    $('#gLog').innerHTML = G.log.slice(0, 30).map(l => l.head ? `<li class="head">${l.text}</li>` : `<li>${l.text}</li>`).join('');
  }
  function renderCalls() {
    $('#gPanel').innerHTML = `<div class="g-reveal"><div><small>${TEAMS[G.st.offTeam].name} Offense</small><b>${OPLAYS[G.last.o].icon} ${OPLAYS[G.last.o].name}</b></div><span>vs</span><div><small>${TEAMS[G.st.defTeam].name} Defense</small><b>${DCALLS[G.last.d].icon} ${DCALLS[G.last.d].name}</b></div></div><p class="muted">Snap …</p>`;
  }
  function card(key, item, act) {
    return `<button class="g-call" data-${act}="${key}"><b>${item.icon} ${esc(item.name)}</b><span>${esc(item.short)}</span></button>`;
  }
  function renderPanel() {
    const p = $('#gPanel'), st = G.st;
    if (G.phase === 'end') {
      const u = G.score[G.user], c = G.score[G.cpu];
      const verdict = G.mode === 'game' ? (u > c ? 'Gewonnen! 🎉' : u < c ? 'Verloren.' : 'Unentschieden.') : G.mode === 'off' ? `Dein Drive: ${u} Punkte.` : `Gegner-Drive: ${c} Punkte zugelassen.`;
      p.innerHTML = `<h3>${verdict}</h3>
        <p>${TEAMS.CHI.name} ${G.stats.CHI.yds} Yards in ${G.stats.CHI.plays} Spielzügen · ${TEAMS.DET.name} ${G.stats.DET.yds} Yards in ${G.stats.DET.plays} Spielzügen.</p>
        <div class="g-row"><button class="fd-btn fd-play" data-act="again">Nochmal</button><button class="fd-btn" data-act="setup">Anderes Team / Modus</button></div>`;
      return;
    }
    if (G.phase === 'driveover') {
      const msg = { td: 'Touchdown! 🏈', fg: 'Field Goal!', fgmiss: 'Field Goal daneben.', punt: 'Punt.', turnover: 'Ballverlust!', downs: 'Turnover on Downs.', safety: 'Safety!' }[G.driveEnd] || 'Drive vorbei.';
      p.innerHTML = `<h3>${msg}</h3>${G.lastWhy && G.lastWhy.why ? `<p class="g-why">💡 ${G.lastWhy.why}</p>` : ''}
        <div class="g-row"><button class="fd-btn fd-play" data-act="nextdrive">${G.idx + 1 < G.order.length ? 'Nächster Drive →' : 'Zum Ergebnis →'}</button><button class="fd-btn" data-act="replay">↺ Nochmal ansehen</button></div>`;
      return;
    }
    if (G.phase === 'anim') return;
    const lastLine = G.lastWhy && G.st.plays ? `<p class="g-why">💡 ${G.lastWhy.why}</p>` : '';
    const replayBtn = G.last && G.st.plays ? '<button class="fd-btn g-mini" data-act="replay">↺ Letzten Spielzug ansehen</button>' : '';
    // 4th Down
    if (st.down === 4 && !G.goForIt) {
      if (userOnOffense()) {
        const dist = 100 - st.yl + 17;
        p.innerHTML = `${lastLine}<h3>4th & ${st.toGo}: Was jetzt?</h3><p>Ball an der ${esc(spot(st))}. Punten, Field Goal oder ausspielen?</p>
          <div class="g-calls">
            <button class="g-call" data-fourth="punt"><b>🦵 Punt</b><span>Ball weit wegkicken, Drive vorbei</span></button>
            ${dist <= 58 ? `<button class="g-call" data-fourth="fg"><b>🥅 Field Goal</b><span>${dist} Yards, ca. ${Math.round(fgProb(dist) * 100)} % Treffer</span></button>` : ''}
            <button class="g-call" data-fourth="go"><b>🔥 Ausspielen</b><span>Schaffst du ${st.toGo} Yards nicht, ist der Ball weg</span></button>
          </div>${replayBtn}`;
      } else {
        const c = cpuFourth(st);
        if (c === 'go') { G.goForIt = true; renderPanel(); return; }
        fourth(c); return;
      }
      return;
    }
    prepareCall();
    const pend = G.pending;
    const tipBtn = G.showTip ? '' : '<button class="g-tipbtn" data-act="tip">💡 Tipp</button>';
    if (userOnOffense()) {
      const L = LOOKS[pend.look];
      const head = `<div class="g-look"><small>Du siehst</small><b>${L.title}</b><span>${L.desc}</span>${G.showTip ? `<em>💡 ${L.tip}</em>` : tipBtn}</div>`;
      let body;
      if (!G.sub) body = `<p class="g-q">Was tust du?</p><div class="g-cats">
          <button class="g-cat" data-cat="run"><b>🏃 Lauf</b><span>Ball an den HB</span></button>
          <button class="g-cat" data-cat="pass"><b>🎯 Pass</b><span>Kurz, mittel, tief, Screen</span></button>
          <button class="g-cat" data-o="pa"><b>🎭 Play-Action</b><span>Lauf antäuschen, werfen</span></button></div>`;
      else body = `<p class="g-q">${G.sub === 'run' ? 'Welcher Lauf?' : 'Welcher Pass?'} <button class="g-back" data-act="back">← zurück</button></p>
          <div class="g-calls">${(G.sub === 'run' ? ['iz', 'oz', 'power', 'iso'] : ['quick', 'mid', 'deep', 'screen']).map(k => card(k, OPLAYS[k], 'o')).join('')}</div>`;
      p.innerHTML = `${lastLine}${head}${body}${replayBtn}`;
    } else {
      const F = formationLook(pend.o, st);
      const head = `<div class="g-look"><small>Du siehst</small><b>${F.title}</b><span>${F.desc}</span>${G.showTip ? `<em>💡 ${F.tip}</em>` : tipBtn}</div>`;
      let body;
      if (!G.sub) body = `<p class="g-q">Was tust du?</p><div class="g-cats">
          <button class="g-cat" data-d="box"><b>🧱 Lauf stoppen</b><span>8 Mann in die Box</span></button>
          <button class="g-cat" data-cat="cover"><b>🕸️ Pass verteidigen</b><span>Mann- oder Raumdeckung</span></button>
          <button class="g-cat" data-d="blitz"><b>⚡ Blitz</b><span>6 Mann auf den QB</span></button></div>`;
      else body = `<p class="g-q">Welche Deckung? <button class="g-back" data-act="back">← zurück</button></p>
          <div class="g-calls">${['c2', 'man'].map(k => card(k, DCALLS[k], 'd')).join('')}</div>`;
      p.innerHTML = `${lastLine}${head}${body}${replayBtn}`;
    }
  }

  // ---------- Setup ----------
  function renderSetup() {
    $('#setupTeams').innerHTML = ['CHI', 'DET'].map(k => {
      const t = TEAMS[k];
      return `<label class="g-team" style="--tc:${t.jersey}"><input type="radio" name="team" value="${k}"${k === 'CHI' ? ' checked' : ''}>
        <div><b>${t.emoji} ${t.full}</b>
        <h5>Offense</h5><ul>${t.notes.off.map(n => `<li>${n}</li>`).join('')}</ul>
        <h5>Defense</h5><ul>${t.notes.def.map(n => `<li>${n}</li>`).join('')}</ul></div></label>`;
    }).join('');
  }

  // ---------- Quiz ----------
  const QUIZ = [
    { q: '1st & 10. Die Defense zieht einen Safety nach vorne: 8 in der Box, nur einer tief. Was callst du?', look: ['iz', 'box'], side: 'off',
      opts: ['Inside Zone', 'Play-Action', 'Iso mit Fullback'], a: 1, play: ['iz', 'pa', 'iso'],
      why: 'Acht Mann gegen sechs Blocker: Ein Lauf wird schwer. Aber hinten steht nur ein Safety. Play-Action lässt die Box auf den Lauf reinfallen und wirft dahinter. Genau deshalb konnten die Packers gegen Bagent (kein tiefer Ball) so spielen und Detroit gegen Caleb Williams nicht.' },
    { q: '3rd & 8. Linebacker und Nickelback stehen direkt an der Line: Die Defense will blitzen. Was callst du?', look: ['quick', 'blitz'], side: 'off',
      opts: ['Tiefer Pass', 'Screen', 'Power'], a: 1, play: ['deep', 'screen', 'power'],
      why: 'Sechs Rusher heißt: Der QB hat keine Zeit für lange Routen. Ein Screen lässt die Blitzer durch und wirft den Ball genau dorthin, wo sie fehlen. Ein kurzer Pass zur Hot Route wäre auch richtig.' },
    { q: '2nd & 10. Zwei Safeties stehen tief (Cover 2). Welcher Pass hat die besten Chancen?', look: ['mid', 'c2'], side: 'off',
      opts: ['Go (ganz tief)', 'Dig (12 Yards, dann quer)', 'Hitch (5 Yards)'], a: 1, play: ['deep', 'mid', 'quick'],
      why: 'Die Tiefe ist durch zwei Safeties zu, kurz außen lauern die Cornerbacks. Die Lücke der Cover 2 liegt zwischen Linebackern und Safeties, genau dort landet der Dig.' },
    { q: 'Du bist die Defense. 3rd & 1, die Offense kommt mit Fullback in der I-Formation. Was callst du?', look: ['iso', 'c2'], side: 'def',
      opts: ['Cover 2', '8 in der Box', 'Prevent: alle tief'], a: 1, play: ['c2', 'box'],
      why: 'Fullback, kurze Distanz: Fast sicher kommt ein Lauf. Mehr Verteidiger als Blocker in der Box ist die Antwort.' },
    { q: 'Du bist die Defense. 3rd & 12. Was ist das Wichtigste?', look: ['mid', 'c2'], side: 'def',
      opts: ['Alles nach vorne, Lauf stoppen', 'Den Ball vor sich halten und vor der First-Down-Linie tackeln', 'Jeden Spieler blitzen'], a: 1,
      why: 'Bei Third-and-long reicht der Defense ein Tackle vor der gelben Linie. Raumdeckung mit Safeties tief verhindert den großen Gewinn. Danach muss die Offense punten.' },
    { q: 'Wer darf keinen Vorwärtspass fangen?', opts: ['Der Tight End', 'Der Center', 'Der Halfback'], a: 1,
      why: 'Die fünf Offensive Linemen sind keine erlaubten Passempfänger. TE, HB, FB und WR dürfen fangen.' },
    { q: 'Was heißt „11 Personnel"?', opts: ['1 Running Back, 1 Tight End, also 3 Wide Receiver', '11 Spieler auf dem Feld', '1 Wide Receiver und 1 Tight End'], a: 0,
      why: 'Erste Ziffer = Running Backs, zweite = Tight Ends. Der Rest der fünf Ballträger-Positionen sind Wide Receiver.' },
    { q: 'Was passiert nach einem Incomplete-Pass?', opts: ['Der Ball liegt da, wo er auf den Boden fiel', 'Der Ball geht zurück an die alte Stelle, ein Down ist verbraucht', 'Die Defense bekommt den Ball'], a: 1,
      why: 'Kein Raumgewinn, aber ein Versuch weniger. Außerdem stoppt die Uhr.' },
    { q: 'Ein Guard verlässt seinen Platz, läuft hinter der Line zur anderen Seite und blockt dort vorneweg. Wie heißt das?', opts: ['Pull (typisch für Power)', 'Blitz', 'Screen'], a: 0,
      why: 'Beim Power-Lauf „pullt" der Guard und steht an der Lücke als Extra-Blocker.' },
    { q: 'Bears @ Lions: Warum ist Detroits Plan „erst eng decken, dann Druck" gegen Caleb Williams riskant?', opts: ['Williams kann nicht tief werfen', 'Hutchinson fehlt als Finisher, und Williams verlängert Spielzüge wie kaum ein anderer', 'Detroit hat keine Cornerbacks'], a: 1,
      why: 'Die Coverage nimmt die ersten Optionen weg, der Druck soll spät kommen. Ohne Hutchinson (und vielleicht ohne Wonnum) fehlt der Spieler, der den QB am Ende erreicht. Williams hält den Ball im Schnitt 3,27 Sekunden.' },
    { q: 'Bears @ Lions: Was ermöglicht Jeffery Simmons der Bears-Defense?', opts: ['Mehr Blitzes', 'Druck schon mit vier Rushern, sieben bleiben in der Deckung', 'Er deckt den Slot'], a: 1,
      why: 'In seinen ersten zwei Spielen kamen 5 von 7 Sacks mit vier oder weniger Rushern. Die Blitz-Rate fiel von 38 % auf 19 %.' },
    { q: 'Bears @ Lions: Wie will Detroit die beste Third-Down-Defense der Liga umgehen?', opts: ['Viele tiefe Pässe auf Third Down', 'Mit Gibbs auf First und Second Down Raum gewinnen, damit es kein Third-and-long gibt', 'Immer auf Fourth Down ausspielen'], a: 1,
      why: 'Gegner verwandeln gegen die Bears nur 22,8 % der Third Downs. Läuft Gibbs auf Early Downs für 4 bis 6 Yards, kann Goff aus Play-Action werfen statt in Third-and-long.' },
  ];
  let Q = null;
  function startQuiz() {
    const order = QUIZ.map((_, i) => i).sort(() => rnd() - 0.5);
    Q = { order, i: 0, right: 0, answered: false };
    renderQuiz();
  }
  function renderQuiz() {
    const box = $('#quiz');
    if (Q.i >= Q.order.length) {
      box.innerHTML = `<div class="q-card"><h3>Fertig: ${Q.right} von ${Q.order.length} richtig ${Q.right >= 10 ? '🏆' : Q.right >= 7 ? '👍' : '📚'}</h3>
        <div class="g-row"><button class="fd-btn fd-play" data-q="restart">Nochmal</button><a class="fd-btn" href="index.html">Im Lernbereich nachlesen</a></div></div>`;
      return;
    }
    const q = QUIZ[Q.order[Q.i]];
    box.innerHTML = `<div class="q-card">
      <div class="q-top"><span>Frage ${Q.i + 1}/${Q.order.length}</span><span>${Q.right} richtig</span></div>
      ${q.look ? '<canvas id="qCanvas" class="q-canvas"></canvas>' : ''}
      <h3>${esc(q.q)}</h3>
      <div class="q-opts">${q.opts.map((o, i) => `<button class="q-opt" data-a="${i}">${esc(o)}</button>`).join('')}</div>
      <div id="qAfter"></div></div>`;
    if (q.look) {
      const tv2 = TopView($('#qCanvas'));
      const team = TEAMS.CHI, def = TEAMS.DET;
      tv2.draw(staticSim(q.look[0], q.look[1]), 0, { yl: 25, toGo: 10, offTeam: team, defTeam: def });
    }
  }
  function answer(i) {
    if (Q.answered) return;
    Q.answered = true;
    const q = QUIZ[Q.order[Q.i]];
    const ok = i === q.a;
    if (ok) Q.right++;
    if (window.FDAUDIO) FDAUDIO.start();
    AU(ok ? 'right' : 'wrong');
    document.querySelectorAll('.q-opt').forEach((b, k) => { b.disabled = true; b.classList.toggle('right', k === q.a); b.classList.toggle('wrong', k === i && !ok); });
    const canTry = q.play && q.play[i];
    $('#qAfter').innerHTML = `<p class="q-res ${ok ? 'ok' : 'no'}">${ok ? 'Richtig!' : 'Nicht ganz.'}</p><p>${esc(q.why)}</p>
      <div class="g-row">${canTry ? `<button class="fd-btn" data-q="try" data-k="${i}">▶ Deinen Call im Spiel ausprobieren</button>` : ''}<button class="fd-btn fd-play" data-q="next">Weiter →</button></div>`;
    $('.q-top span:last-child').textContent = `${Q.right} richtig`;
  }
  function tryCall(i) {
    const q = QUIZ[Q.order[Q.i]];
    const st = { offTeam: 'CHI', defTeam: 'DET', yl: 25, down: 1, toGo: 10 };
    let o, d;
    if (q.side === 'off') { o = q.play[i]; d = q.look[1]; } else { o = q.look[0]; d = q.play[i]; }
    const dec = resolve(o, d, st);
    const sim = buildSim(o, d, dec, 25);
    // Spielansicht kurz im Quiz-Canvas zeigen
    const cv = $('#qCanvas');
    const r = view === 'pixel' ? PixelView(cv) : TopView(cv);
    cv.classList.toggle('pix', view === 'pixel');
    const ctx = { yl: 25, toGo: 10, offTeam: TEAMS.CHI, defTeam: TEAMS.DET };
    let fi = 0, last = 0, acc = 0;
    const step = ts => { if (!last) last = ts; acc += (ts - last) / 1000; last = ts; while (acc >= sim.dt && fi < sim.frames.length - 1) { fi++; acc -= sim.dt; } r.draw(sim, fi, ctx); if (fi < sim.frames.length - 1) requestAnimationFrame(step); else { const p = document.createElement('p'); p.className = 'q-res'; p.textContent = `Ergebnis diesmal: ${sim.label}${sim.label === 'INCOMPLETE' || sim.turnover ? '' : ''} (es ist Zufall dabei)`; $('#qAfter').prepend(p); } };
    requestAnimationFrame(step);
  }

  // ---------- Bedienung ----------
  document.addEventListener('click', e => {
    const t = e.target.closest('button, a');
    if (!t) return;
    if (t.dataset.o && G && G.phase === 'call') { G.goForIt = false; runPlay(t.dataset.o, G.pending.d); }
    else if (t.dataset.d && G && G.phase === 'call') { G.goForIt = false; runPlay(G.pending.o, t.dataset.d); }
    else if (t.dataset.cat && G) { G.sub = t.dataset.cat; AU('click'); renderPanel(); }
    else if (t.dataset.act === 'back') { G.sub = null; renderPanel(); }
    else if (t.dataset.act === 'tip') { G.showTip = true; renderPanel(); }
    else if (t.dataset.fourth) fourth(t.dataset.fourth);
    else if (t.dataset.act === 'nextdrive') nextDrive();
    else if (t.dataset.act === 'replay' && G.last) { const ph = G.phase; play(G.last, () => { G.phase = ph; }); }
    else if (t.dataset.act === 'again') newGame(G.user, G.mode);
    else if (t.dataset.act === 'setup') { G = null; renderAll(); }
    else if (t.dataset.act === 'start') { const team = document.querySelector('input[name=team]:checked').value; const mode = document.querySelector('input[name=mode]:checked').value; newGame(team, mode); }
    else if (t.dataset.view) {
      view = t.dataset.view;
      document.querySelectorAll('[data-view]').forEach(b => b.classList.toggle('on', b === t));
      $('#gPix').hidden = view !== 'pixel'; $('#gTop').hidden = view === 'pixel';
      if (G && G.last && G.phase !== 'call') { const f = G.last.sim.frames.length - 1; drawFrame(G.last.sim, f, G.last.ctx); }
      else if (G && G.idle) drawFrame(G.idle.sim, 0, G.idle.ctx);
    }
    else if (t.dataset.s) { document.querySelectorAll('#gSpeed button').forEach(b => b.classList.toggle('on', b === t)); }
    else if (t.dataset.a != null && t.classList.contains('q-opt')) answer(+t.dataset.a);
    else if (t.dataset.q === 'next') { Q.i++; Q.answered = false; renderQuiz(); }
    else if (t.dataset.q === 'restart') startQuiz();
    else if (t.dataset.q === 'try') { t.disabled = true; tryCall(+t.dataset.k); }
  });

  function route() {
    const h = location.hash.replace(/^#\/?/, '') || 'spiel';
    const quiz = h === 'quiz';
    document.querySelectorAll('[data-tab]').forEach(a => a.classList.toggle('on', a.dataset.tab === (quiz ? 'quiz' : 'spiel')));
    $('#spielArea').hidden = quiz; $('#quiz').hidden = !quiz;
    if (quiz && !Q) startQuiz();
  }

  pv = PixelView($('#gPix'));
  tv = TopView($('#gTop'));
  renderSetup();
  window.addEventListener('hashchange', route);
  route();
  window.__fdgame = { resolve, MODEL, TEAMS, cpuDefense, cpuOffense };
})();
