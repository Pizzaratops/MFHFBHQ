// ============================================================
//  FIRST DOWN KIDS — Spiel-Logik & Oberfläche (26.11.2026)
// ============================================================
//  Kinder-Version (8–12 J.): einfache Sprache, Maskottchen Bruno,
//  Lesehilfe immer an, kein Zeitdruck, keine Niederlagen (Punkte-Jagd:
//  3 Drives, Sterne nach Punkten), Abzeichen. Nutzt die Simulation
//  und die Pixel-Ansicht aus sim.js.
// ============================================================
(function () {
  'use strict';
  const { OPLAYS, buildSim, staticSim, readOptions, PixelView, TopView } = window.FDSIM;
  const $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  const rnd = Math.random, clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const gauss = () => { let u = 0, v = 0; while (!u) u = rnd(); while (!v) v = rnd(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
  const pickW = w => { const ks = Object.keys(w); let s = ks.reduce((a, k) => a + w[k], 0), r = rnd() * s; for (const k of ks) { r -= w[k]; if (r <= 0) return k; } return ks[0]; };
  const AU = n => window.FDAUDIO && window.FDAUDIO.fx(n);
  const app = $('#kApp');

  // ---------- Bruno (Pixel-Dachs, selbst gezeichnet) ----------
  const BRUNO = {
    happy: ['....oo....oo....', '...ogdo..odgo...', '...oggoooogdo...', '..oggwwkkwwggo..', '.ogggwwkkwwgggo.', '.orrrrrrrrrrrro.', '.ogkkwwkkwwkkgo.', '.ogkowwkkwwokgo.', '.ogkkwwkkwwkkgo.', '.oggkwwwwwwkggo.', '..oggwwppwwggo..', '..ogggwoowgggo..', '...oggwwwwggo...', '....ooggggoo....', '......oooo......'],
    wow: ['....oo....oo....', '...ogdo..odgo...', '...oggoooogdo...', '..oggwwkkwwggo..', '.ogggwwkkwwgggo.', '.orrrrrrrrrrrro.', '.ogkkwwkkwwkkgo.', '.ogkowwkkwwokgo.', '.ogkkwwkkwwkkgo.', '.oggkwwwwwwkggo.', '..oggwwppwwggo..', '..ogggwooWgggo..', '...oggwooWggo...', '....ooggggoo....', '......oooo......'],
  };
  const BPAL = { o: '#1a1a1a', g: '#8a8f98', d: '#5b6068', w: '#ffffff', k: '#2b2b2b', p: '#f28fa0', r: '#ff7a1a', W: '#ffffff' };
  const brunoImg = {};
  function brunoSrc(mood) {
    if (brunoImg[mood]) return brunoImg[mood];
    const rows = BRUNO[mood] || BRUNO.happy, cv = document.createElement('canvas'); cv.width = 16; cv.height = 16;
    const g = cv.getContext('2d');
    rows.forEach((r, y) => { for (let x = 0; x < 16; x++) { const c = r[x]; if (c && c !== '.') { g.fillStyle = BPAL[c]; g.fillRect(x, y, 1, 1); } } });
    return (brunoImg[mood] = cv.toDataURL());
  }
  const bruno = (text, mood) => `<div class="k-bruno"><img src="${brunoSrc(mood || 'happy')}" alt="Bruno der Dachs" class="pix"><div class="k-bubble">${text}</div></div>`;

  // ---------- Speicherstand ----------
  const KEY = 'mfhfb:fd-kids';
  let K = null;
  try { K = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(K)); } catch (e) {} };
  const myTeam = () => Object.assign({ name: K.name, emoji: '⭐' }, KIDS_COLORS.find(c => c.key === K.color) || KIDS_COLORS[0]);
  const unlocked = n => { const s = new Set(); for (let i = 0; i < n; i++) KIDS_LEVELS[i].unlock.forEach(k => s.add(k)); return s; };

  // ---------- Auflösung (etwas freundlicher als bei den Großen) ----------
  const M = {
    iz: { box: 1.6, c2: 5, man: 4.4, blitz: 3 }, oz: { box: 1.4, c2: 4.6, man: 4.2, blitz: 2.4 },
    yac: { quick: 3, mid: 3, deep: 4, screen: 6, pa: 5 },
    sack: { quick: 0.02, mid: 0.06, deep: 0.08, screen: 0.01, pa: 0.08 },
  };
  function resolve(o, d, pick) {
    if (OPLAYS[o].kind === 'run') {
      const open = pick ? pick.open : 0.8;
      let y = (M[o] ? M[o][d] : 3) + 0.8 + 3.4 * (open - 0.75) + gauss() * 3;
      if (rnd() < 0.05 + 0.08 * open) y += 8 + rnd() * 25;
      return { type: 'run', yards: Math.max(-3, Math.round(y)) };
    }
    if (o === 'screen') { const blz = d === 'blitz'; if (rnd() > (blz ? 0.9 : 0.82)) return { type: 'inc' }; return { type: 'comp', yac: Math.max(0, (blz ? 10 : 4) + gauss() * 4) }; }
    const open = pick ? pick.open : 0.6, depth = pick ? pick.depth : 8;
    const c = 0.42 + 0.5 * open - Math.max(0, depth - 8) * 0.01;
    const int = 0.004 + 0.045 * (1 - open);
    if (rnd() < int) return { type: 'int' };
    if (rnd() > c) return { type: 'inc' };
    let y = Math.max(0, M.yac[o] * (0.4 + open) + gauss() * 3); if (rnd() < 0.06 + 0.1 * open) y += 8 + rnd() * 20;
    return { type: 'comp', yac: y };
  }
  const sackRoll = (o, d) => OPLAYS[o].kind !== 'run' && rnd() < (M.sack[o] || 0.03) * (d === 'blitz' ? 2.2 : 1);
  const callKind = o => OPLAYS[o].kind === 'run' ? 'run' : (o === 'pa' || o === 'screen') ? 'trick' : 'pass';

  // ---------- Viewer ----------
  function viewerHTML() {
    return `<div class="c-viewer k-viewer"><div class="g-screen c-screen"><canvas class="pix c-pix"></canvas><canvas class="c-top" hidden></canvas><div class="c-ovl" hidden></div><div class="g-label" hidden></div></div>
      <div class="g-ctrl"><div class="fd-seg"><button type="button" data-kview="pixel">👾 Spiel-Bild</button><button type="button" data-kview="top">🗺️ Von oben</button></div>
      <button class="fd-btn" type="button" data-act="fs">⛶ Groß</button></div></div>`;
  }
  let V = null, view = 'pixel';
  function makeViewer() {
    const root = $('.k-viewer'), pixC = root.querySelector('.c-pix'), topC = root.querySelector('.c-top');
    const v = { pv: PixelView(pixC), tv: TopView(topC), ovl: root.querySelector('.c-ovl'), label: root.querySelector('.g-label'), raf: 0 };
    v.cur = () => view === 'top' ? v.tv : v.pv;
    v.sync = () => { pixC.hidden = view === 'top'; topC.hidden = view !== 'top'; root.querySelectorAll('[data-kview]').forEach(b => b.classList.toggle('on', b.dataset.kview === view)); };
    v.sync();
    v.draw = (sim, fi, ctx) => { v.cur().draw(sim, fi, ctx); v.last = { sim, fi, ctx }; };
    v.stop = () => { cancelAnimationFrame(v.raf); };
    v.play = (sim, ctx, from, stopT, done) => {
      v.stop(); if (!from) { v.pv.reset(); v.tv.reset(); v.label.hidden = true; }
      let fi = from || 0, last = 0, acc = 0, labeled = !!from && sim.frames[fi].t >= sim.labelAt;
      const step = ts => {
        if (!last) last = ts; acc += (ts - last) / 1000 * 0.85; last = ts;
        while (acc >= sim.dt && fi < sim.frames.length - 1) { if (stopT != null && sim.frames[fi + 1].t > stopT) break; fi++; acc -= sim.dt; }
        v.draw(sim, fi, ctx);
        if (!labeled && sim.label && sim.frames[fi].t >= sim.labelAt) { labeled = true; showLabel(sim); }
        const atStop = stopT != null && (fi >= sim.frames.length - 1 || sim.frames[fi + 1].t > stopT);
        if (atStop || fi >= sim.frames.length - 1) { done && done(fi); return; }
        v.raf = requestAnimationFrame(step);
      };
      v.raf = requestAnimationFrame(step);
    };
    function showLabel(sim) {
      const kid = { 'TOUCHDOWN!': 'TOUCHDOWN! 🎉', 'SACK!': 'UMGEWORFEN! 😵', 'INCOMPLETE': 'NICHT GEFANGEN', 'INTERCEPTION!': 'ABGEFANGEN! 😱', 'FUMBLE!': 'BALL VERLOREN! 😱' };
      v.label.textContent = kid[sim.label] || sim.label.replace('YARDS', 'YARDS').replace('KEIN RAUMGEWINN', 'KEIN SCHRITT VOR');
      v.label.hidden = false; v.label.className = 'g-label' + (sim.td ? ' td' : sim.turnover || sim.type === 'sack' ? ' bad' : '');
      AU(sim.td ? 'touchdown' : sim.turnover ? 'turnover' : sim.type === 'sack' ? 'sack' : sim.type === 'inc' ? 'incomplete' : 'tackle');
    }
    return v;
  }
  // Read ohne Zeitdruck, Lesehilfe immer an
  function askRead(ro, ctx, frame, onPick) {
    V.ovl.innerHTML = ''; V.ovl.hidden = false;
    ro.opts.forEach(o => {
      const p = ro.kind === 'run' ? [o.x, 1.5] : frame.P[o.id];
      const [fx, fy] = V.cur().project(p, ctx);
      const lvl = ro.kind === 'run' ? o.open : o.rel;
      const b = document.createElement('button');
      b.className = 'c-pick' + (lvl >= 0.85 ? ' open' : lvl >= 0.45 ? ' mid' : ' shut') + (ro.kind === 'run' ? ' lane' : '');
      b.style.left = clamp(fx * 100, 4, 96) + '%'; b.style.top = clamp(fy * 100, 6, 94) + '%';
      b.innerHTML = `<span>${ro.kind === 'run' ? o.name : (lvl >= 0.85 ? '😀' : lvl >= 0.45 ? '😐' : '😬')}</span>`;
      b.addEventListener('click', e => { e.stopPropagation(); V.ovl.hidden = true; AU('click'); onPick(o); });
      V.ovl.appendChild(b);
    });
    const h = document.createElement('div'); h.className = 'c-ovl-hint'; h.textContent = ro.kind === 'run' ? 'Wo ist die Lücke? Grün = frei!' : 'Wer ist frei? Grün = frei!';
    V.ovl.appendChild(h);
  }

  // ---------- Bildschirme ----------
  let R = { s: K ? 'hub' : 'start' };
  function go(s, x) { if (V) V.stop(); V = null; R = Object.assign({ s }, x || {}); render(); scrollTo({ top: 0 }); }
  function render() { ({ start, hub, learn, level, drill, game, done, quiz })[R.s](); }

  function start() {
    app.innerHTML = `<section class="k-card">
      ${bruno('Hallo! Ich bin <b>Bruno</b>, der Football-Dachs! Wie soll dein Team heißen?', 'happy')}
      <input class="c-input k-input" id="kName" maxlength="20" placeholder="z. B. Die Super-Raketen">
      <h4 class="k-h4">Welche Farbe?</h4>
      <div class="c-colors">${KIDS_COLORS.map((c, i) => `<label class="c-color" style="--a:${c.jersey};--b:${c.trim}"><input type="radio" name="kcol" value="${c.key}"${i ? '' : ' checked'}><span></span>${c.name}</label>`).join('')}</div>
      <button class="k-big" data-act="create">Los geht's! 🚀</button></section>`;
  }
  function hub() {
    const me = myTeam(), badges = KIDS_LEVELS.filter(l => K.levels[l.n] && K.levels[l.n].stars > 0);
    const stars = Object.values(K.levels).reduce((a, x) => a + (x.stars || 0), 0);
    app.innerHTML = `<section class="k-hub">
      <div class="k-team" style="--tc:${me.jersey};--tc2:${me.trim}"><b>${esc(K.name)}</b><span>⭐ ${stars}/15 Sterne · ${badges.map(b => b.badge).join(' ') || 'noch keine Abzeichen'}</span></div>
      ${bruno(stars ? 'Toll gemacht! Was willst du als Nächstes machen?' : 'Was willst du machen? Fang am besten mit „Football in 5 Minuten“ an!', 'happy')}
      <div class="k-tiles">
        <button class="k-tile t1" data-act="learn"><b>📖 Football in 5 Minuten</b><span>Bruno erklärt dir alles</span></button>
        <button class="k-tile t2" data-act="quiz"><b>❓ Quiz</b><span>10 Fragen, wie viel weißt du?</span></button>
      </div>
      <h3 class="k-h3">🏕️ Brunos Trainingslager</h3>
      <div class="k-levels">${KIDS_LEVELS.map(l => { const st = K.levels[l.n], open = l.n <= K.level, t = KIDS_TEAMS[l.opp];
        return `<button class="k-level${open ? '' : ' locked'}${l.n === K.level ? ' cur' : ''}" ${open ? `data-level="${l.n}"` : 'disabled'} style="--oc:${t.jersey}">
          <small>Level ${l.n}</small><b>${esc(l.title)}</b><span>gegen ${t.emoji} ${esc(t.name)}</span>
          <em>${open ? (st ? '★'.repeat(st.stars) + '☆'.repeat(3 - st.stars) + (st.stars ? ' ' + l.badge : '') : 'Spielen ▶') : '🔒'}</em></button>`; }).join('')}</div>
      <details class="c-settings"><summary>⚙️ Für Eltern</summary><p class="g-note">Alles ist erfunden und läuft nur hier im Browser, der Spielstand wird nur auf diesem Gerät gespeichert. Ohne Zeitdruck und ohne Niederlagen. Die Erwachsenen-Version findest du unter <a href="index.html">First Down</a>.</p><button class="fd-btn" data-act="reset">Neu anfangen</button></details></section>`;
  }
  function learn() {
    const i = R.i || 0, c = KIDS_LEARN[i];
    app.innerHTML = `<section class="k-learn">
      <div class="c-crumb"><a href="#" data-act="hub">← Zurück</a> · Football in 5 Minuten · ${i + 1}/${KIDS_LEARN.length}</div>
      <div class="k-progress">${KIDS_LEARN.map((_, k) => `<i class="${k <= i ? 'on' : ''}"></i>`).join('')}</div>
      <div class="c-lgrid"><div>${c.demo ? '<canvas class="c-demo" id="kDemo"></canvas><button class="fd-btn" data-act="demo">↺ Nochmal zeigen</button>' : '<canvas class="c-demo" id="kDemo"></canvas>'}</div>
      <div class="k-card"><h2 class="k-title">${c.t}</h2>${bruno(esc(c.x), 'happy')}
        <div class="g-row">${i > 0 ? '<button class="fd-btn" data-act="lprev">← Zurück</button>' : ''}<button class="k-big" data-act="lnext">${i < KIDS_LEARN.length - 1 ? 'Weiter →' : 'Fertig! 🎉'}</button></div></div></div></section>`;
    playDemo(c);
  }
  function playDemo(c) {
    const cv = $('#kDemo'); if (!cv) return;
    const tv = TopView(cv), ctx = { yl: (c.demo && c.demo.yl) || 30, toGo: 10, offTeam: myTeam(), defTeam: KIDS_TEAMS.wuermer };
    if (!c.demo) { tv.draw(staticSim('iz', 'c2'), 0, ctx); return; }
    const dm = c.demo, ro = readOptions(dm.o, dm.d, 7), opts = { seed: 7 };
    if (dm.target && ro) opts.target = ro.best;
    if (dm.lane && ro) opts.lane = ro.opts.find(x => x.id === ro.best).x;
    const sim = buildSim(dm.o, dm.d, dm.dec, ctx.yl, opts);
    let fi = 0, last = 0, acc = 0; cancelAnimationFrame(R.demoRaf);
    const step = ts => { if (!last) last = ts; acc += (ts - last) / 1000 * 0.8; last = ts; while (acc >= sim.dt && fi < sim.frames.length - 1) { fi++; acc -= sim.dt; } tv.draw(sim, fi, ctx); if (fi < sim.frames.length - 1 && document.body.contains(cv)) R.demoRaf = requestAnimationFrame(step); };
    R.demoRaf = requestAnimationFrame(step);
  }
  function level() {
    const l = KIDS_LEVELS[R.n - 1], i = R.i || 0;
    app.innerHTML = `<section class="k-card k-mid"><div class="c-crumb"><a href="#" data-act="hub">← Zurück</a> · Level ${l.n}: ${esc(l.title)}</div>
      <h2 class="k-title">Level ${l.n}: ${esc(l.title)}</h2>${bruno(esc(l.bruno[i]), i % 2 ? 'wow' : 'happy')}
      <div class="g-row">${i < l.bruno.length - 1 ? '<button class="k-big" data-act="bnext">Weiter →</button>' : '<button class="k-big" data-act="todrill">Zum Training! 💪</button>'}</div></section>`;
  }
  // ---------- Training (3 Reads) ----------
  function drill() {
    const l = KIDS_LEVELS[R.n - 1];
    if (R.di == null) { R.di = 0; R.ok = 0; }
    if (R.di >= l.drills.length) {
      app.innerHTML = `<section class="k-card k-mid">${bruno(`${R.ok} von ${l.drills.length} richtig! ${R.ok >= 2 ? 'Super! 🎉' : 'Gut probiert!'} Jetzt spielst du gegen die ${KIDS_TEAMS[l.opp].emoji} ${esc(KIDS_TEAMS[l.opp].name)}.`, 'wow')}
        <p class="k-note">Du hast 3 Angriffe. Je mehr Punkte, desto mehr Sterne: 7 Punkte = ★, 14 = ★★, 21 = ★★★.</p>
        <button class="k-big" data-act="togame">Anpfiff! 📣</button></section>`;
      return;
    }
    const dr = l.drills[R.di], ctx = { yl: 30, toGo: 10, offTeam: myTeam(), defTeam: KIDS_TEAMS[l.opp] }, seed = Math.floor(rnd() * 1e9);
    app.innerHTML = `<section class="c-play"><div class="c-crumb"><a href="#" data-act="hub">← Zurück</a> · Level ${l.n} · Training ${R.di + 1}/3</div>
      <div class="g-grid c-grid"><div>${viewerHTML()}</div><div class="k-card" id="kPanel">${bruno(OPLAYS[dr.o].kind === 'run' ? 'Wir laufen! Nach dem Start bleibt das Bild stehen. Tipp auf die grüne Lücke!' : 'Wir werfen! Nach dem Start bleibt das Bild stehen. Tipp auf den Fänger mit dem grünen Kreis!', 'happy')}<button class="k-big" data-act="ksnap">🏈 Start!</button></div></div></section>`;
    V = makeViewer();
    const ro = readOptions(dr.o, dr.d, seed);
    const pre = buildSim(dr.o, dr.d, OPLAYS[dr.o].kind === 'run' ? { type: 'run', yards: 0 } : { type: 'inc' }, 30, { seed });
    V.draw(pre, 0, ctx);
    R.snap = () => {
      $('#kPanel').innerHTML = bruno('Schau genau hin … 👀', 'wow');
      AU('snap');
      V.play(pre, ctx, 0, ro.tDec, fi => askRead(ro, ctx, pre.frames[fi], pick => {
        const ok = ro.kind === 'run' ? pick.open >= 0.9 : pick.rel >= 0.85;
        if (ok) R.ok++;
        AU(ok ? 'right' : 'wrong');
        const dec = resolve(dr.o, dr.d, pick);
        V.play(buildSim(dr.o, dr.d, dec, 30, Object.assign({ seed }, ro.kind === 'run' ? { lane: pick.x } : { target: pick.id })), ctx, fi, null);
        const best = ro.opts.find(x => x.id === ro.best);
        $('#kPanel').innerHTML = bruno(ok ? 'Richtig! 🎉 Genau da war Platz!' : `Fast! ${ro.kind === 'run' ? `Die Lücke ${best.name} war freier.` : 'Der Fänger mit dem grünen Kreis hatte mehr Platz.'}`, ok ? 'wow' : 'happy') + '<button class="k-big" data-act="dnext">Weiter →</button>';
      }));
    };
  }
  // ---------- Punkte-Jagd ----------
  function newGame() { R.G = { drive: 0, pts: 0, st: null, log: [], phase: 'call', sub: null, good: 0, tot: 0 }; nextDrive(); }
  function nextDrive() {
    const G = R.G; G.drive++;
    if (G.drive > 3) return go('done', { n: R.n, G });
    G.st = { yl: 25, down: 1, toGo: 10 }; G.phase = 'call'; G.pend = null; G.fb = '';
    if (V) game();
  }
  function game() {
    const l = KIDS_LEVELS[R.n - 1], G = R.G, opp = KIDS_TEAMS[l.opp];
    if (!document.querySelector('.k-viewer')) {
      app.innerHTML = `<section class="c-play"><div class="c-crumb"><a href="#" data-act="hub">← Zurück</a> · Level ${l.n} · Spiel</div>
        <div class="g-score c-score k-score" id="kScore"></div>
        <div class="g-grid c-grid"><div>${viewerHTML()}</div><div class="k-card" id="kPanel"></div></div></section>`;
      V = makeViewer();
    }
    const st = G.st;
    $('#kScore').innerHTML = `<div class="sb-team you" style="--tc:${myTeam().jersey}"><span>⭐ ${esc(K.name.slice(0, 12))}</span><b>${G.pts}</b></div><div class="sb-team" style="--tc:${opp.jersey}"><span>${opp.emoji} ${esc(opp.name.slice(0, 12))}</span><b>🛡️</b></div>
      <div class="sb-mid">${G.phase === 'end' ? 'ENDE' : `${st.down}. VERSUCH · NOCH ${st.toGo}<small>ANGRIFF ${G.drive}/3 · ZIEL ${100 - st.yl} YARDS</small>`}</div>`;
    panel();
  }
  const ctxNow = () => ({ yl: R.G.st.yl, toGo: R.G.st.toGo, offTeam: myTeam(), defTeam: KIDS_TEAMS[KIDS_LEVELS[R.n - 1].opp] });
  function panel() {
    const G = R.G, p = $('#kPanel'), st = G.st, l = KIDS_LEVELS[R.n - 1];
    if (G.phase === 'over') { p.innerHTML = `${G.fb}${bruno(G.overMsg, 'wow')}<button class="k-big" data-act="knextdrive">${G.drive < 3 ? 'Nächster Angriff →' : 'Zum Ergebnis 🏆'}</button>`; return; }
    if (G.phase === 'anim') { p.innerHTML = bruno('Los geht\'s! 🏈', 'wow'); return; }
    if (!G.pend) {
      const opp = KIDS_TEAMS[l.opp], d = pickW(opp.def);
      G.pend = { d, seed: Math.floor(rnd() * 1e9) };
      V.pv.reset(); V.tv.reset();
      V.draw(staticSim('iz', d), 0, ctxNow());
    }
    const L = KIDS_LOOKS[G.pend.d], un = unlocked(R.n);
    const kinds = Object.keys(KIDS_CALLS).filter(k => Object.keys(KIDS_CALLS[k].sub).some(o => un.has(o)));
    const head = `${G.fb}<div class="g-look k-look"><small>Du siehst</small><b>${L.t}</b>${G.tip ? `<em>💡 ${L.tip}</em>` : '<button class="g-tipbtn" data-act="ktip">💡 Bruno fragen</button>'}</div>`;
    let body;
    if (!G.sub) body = `<p class="g-q">Was machst du?</p><div class="g-cats k-cats">${kinds.map(k => { const subs = Object.keys(KIDS_CALLS[k].sub).filter(o => un.has(o)); return `<button class="g-cat k-cat" ${subs.length === 1 ? `data-ko="${subs[0]}"` : `data-ksub="${k}"`}><b>${KIDS_CALLS[k].label}</b>${subs.length === 1 ? `<span>${KIDS_CALLS[k].sub[subs[0]]}</span>` : ''}</button>`; }).join('')}</div>`;
    else body = `<p class="g-q">Wie genau? <button class="g-back" data-act="kback">← zurück</button></p><div class="g-cats k-cats">${Object.keys(KIDS_CALLS[G.sub].sub).filter(o => un.has(o)).map(o => `<button class="g-cat k-cat" data-ko="${o}"><b>${KIDS_CALLS[G.sub].sub[o]}</b></button>`).join('')}</div>`;
    p.innerHTML = head + body;
  }
  function play(o) {
    const G = R.G, st = G.st, d = G.pend.d, seed = G.pend.seed, ctx = ctxNow();
    G.phase = 'anim'; panel(); AU('snap');
    const after = (sim, ro, pick) => apply(o, d, sim, ro, pick);
    if (sackRoll(o, d)) { const s = buildSim(o, d, { type: 'sack' }, st.yl, { seed }); V.play(s, ctx, 0, null, () => after(s)); return; }
    const ro = readOptions(o, d, seed);
    if (!ro) { const s = buildSim(o, d, resolve(o, d, null), st.yl, { seed }); V.play(s, ctx, 0, null, () => after(s)); return; }
    const pre = buildSim(o, d, OPLAYS[o].kind === 'run' ? { type: 'run', yards: 0 } : { type: 'inc' }, st.yl, { seed });
    V.play(pre, ctx, 0, ro.tDec, fi => askRead(ro, ctx, pre.frames[fi], pick => {
      const s = buildSim(o, d, resolve(o, d, pick), st.yl, Object.assign({ seed }, ro.kind === 'run' ? { lane: pick.x } : { target: pick.id }));
      V.play(s, ctx, fi, null, () => after(s, ro, pick));
    }));
  }
  function apply(o, d, sim, ro, pick) {
    const G = R.G, st = G.st; let end = null;
    const goodCall = { box: ['pass', 'trick'], c2: ['run', 'pass'], man: ['run', 'pass'], blitz: ['pass', 'trick'] }[d].indexOf(callKind(o)) >= 0 && !(d === 'blitz' && (o === 'deep' || o === 'pa')) && !(d === 'c2' && o === 'deep');
    G.tot++; if (goodCall) G.good++;
    let fb = `${goodCall ? '✅' : '🤔'} ${KIDS_WHY[d][callKind(o)]}`;
    if (ro && pick) { const ok = ro.kind === 'run' ? pick.open >= 0.9 : pick.rel >= 0.85; G.tot++; if (ok) G.good++; fb += `<br>${ok ? '✅ Gut gesehen, da war Platz!' : '🤔 Ein anderer war freier (grüner Kreis).'}`; }
    if (sim.turnover) end = 'Oh nein, der Ball ist weg! Nicht schlimm, nächster Angriff!';
    else if (sim.td) { G.pts += 7; end = 'TOUCHDOWN! 🎉 Das sind 7 Punkte für dich!'; }
    else {
      const y = sim.type === 'inc' ? 0 : sim.yards;
      st.yl = Math.max(1, st.yl + y);
      if (y >= st.toGo) { st.down = 1; st.toGo = Math.min(10, 100 - st.yl); fb += '<br>🎯 <b>Geschafft! 4 neue Versuche!</b>'; setTimeout(() => AU('firstdown'), 200); }
      else { st.down++; st.toGo -= y; if (st.down > 4) end = 'Die 4 Versuche sind vorbei. Nächster Angriff!'; }
    }
    G.fb = `<div class="c-fb">${fb}</div>`; G.pend = null; G.sub = null; G.tip = false;
    if (end) { G.phase = 'over'; G.overMsg = end; } else G.phase = 'call';
    game();
  }
  function done() {
    const l = KIDS_LEVELS[R.n - 1], G = R.G, stars = G.pts >= 21 ? 3 : G.pts >= 14 ? 2 : G.pts >= 7 ? 1 : 0;
    const prev = K.levels[l.n] ? K.levels[l.n].stars : 0;
    K.levels[l.n] = { stars: Math.max(prev, stars) };
    if (l.n === K.level && l.n < KIDS_LEVELS.length) K.level = l.n + 1;
    save();
    AU(stars ? 'win' : 'whistle');
    app.innerHTML = `<section class="k-card k-mid k-done">
      <div class="k-stars">${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}</div>
      <h2 class="k-title">${G.pts} Punkte!</h2>
      ${stars ? `<div class="k-badge">${l.badge}<span>Abzeichen: <b>${l.badgeName}</b></span></div>` : ''}
      ${bruno(stars ? `Wahnsinn, ${stars === 3 ? 'drei Sterne! Du bist ein echter Profi!' : 'super gespielt! Schaffst du beim nächsten Mal noch mehr?'}` : 'Gut gekämpft! Probier es gleich nochmal, beim zweiten Mal klappt es oft besser.', 'wow')}
      <p class="k-note">Gute Entscheidungen: ${G.tot ? Math.round(G.good / G.tot * 100) : 0} %</p>
      <div class="g-row"><button class="k-big" data-act="hub">Zum Trainingslager →</button><button class="fd-btn" data-level="${l.n}">Nochmal spielen</button></div></section>`;
    if (stars) confetti();
  }
  function confetti() {
    const box = document.createElement('div'); box.className = 'k-confetti';
    for (let i = 0; i < 60; i++) { const s = document.createElement('i'); s.style.left = rnd() * 100 + '%'; s.style.background = ['#ffd60a', '#ff6fb5', '#4cc9f0', '#80ed99', '#ff7a1a'][i % 5]; s.style.animationDelay = rnd() * 0.8 + 's'; s.style.animationDuration = 1.8 + rnd() * 1.2 + 's'; box.appendChild(s); }
    document.body.appendChild(box); setTimeout(() => box.remove(), 3500);
  }
  // ---------- Quiz ----------
  function quiz() {
    if (R.qi == null) { R.qi = 0; R.qok = 0; R.order = KIDS_QUIZ.map((_, i) => i).sort(() => rnd() - 0.5); }
    if (R.qi >= KIDS_QUIZ.length) {
      app.innerHTML = `<section class="k-card k-mid"><h2 class="k-title">${R.qok} von ${KIDS_QUIZ.length} richtig!</h2>${bruno(R.qok >= 8 ? 'Du bist ein Football-Genie! 🧠🏈' : R.qok >= 5 ? 'Richtig gut! 👍' : 'Schau dir „Football in 5 Minuten“ an, dann klappt es noch besser!', 'wow')}
        <div class="g-row"><button class="k-big" data-act="quiz">Nochmal</button><button class="fd-btn" data-act="hub">Zurück</button></div></section>`;
      if (R.qok >= 8) confetti();
      return;
    }
    const q = KIDS_QUIZ[R.order[R.qi]];
    app.innerHTML = `<section class="k-card k-mid"><div class="c-crumb"><a href="#" data-act="hub">← Zurück</a> · Quiz ${R.qi + 1}/${KIDS_QUIZ.length} · ${R.qok} richtig</div>
      <h2 class="k-title k-q">${esc(q.q)}</h2><div class="k-answers">${q.o.map((o, i) => `<button class="k-ans" data-ka="${i}">${esc(o)}</button>`).join('')}</div><div id="kAfter"></div></section>`;
  }

  // ---------- Vollbild ----------
  function fs() {
    const el = app, on = document.fullscreenElement || document.body.classList.contains('pseudo-fs');
    if (on) { if (document.fullscreenElement) document.exitFullscreen(); document.body.classList.remove('pseudo-fs'); return; }
    const req = el.requestFullscreen || el.webkitRequestFullscreen;
    if (req) Promise.resolve(req.call(el)).then(() => { try { screen.orientation.lock('landscape').catch(() => {}); } catch (e) {} }).catch(() => document.body.classList.add('pseudo-fs'));
    else document.body.classList.add('pseudo-fs');
  }

  // ---------- Klicks ----------
  let resetArmed = 0;
  document.addEventListener('click', e => {
    const t = e.target.closest('button, a'); if (!t) return;
    const a = t.dataset.act; if (t.tagName === 'A' && a) e.preventDefault();
    if (a === 'create') { K = { name: ($('#kName').value || '').trim() || 'Die Super-Raketen', color: (document.querySelector('input[name=kcol]:checked') || {}).value || 'rot', level: 1, levels: {} }; save(); if (window.FDAUDIO) FDAUDIO.start(); go('hub'); }
    else if (a === 'hub') go('hub');
    else if (a === 'learn') { if (window.FDAUDIO) FDAUDIO.start(); go('learn', { i: 0 }); }
    else if (a === 'lnext') { if (R.i < KIDS_LEARN.length - 1) { R.i++; learn(); scrollTo({ top: 0 }); } else { confetti(); AU('win'); go('hub'); } }
    else if (a === 'lprev') { R.i--; learn(); }
    else if (a === 'demo') playDemo(KIDS_LEARN[R.i]);
    else if (t.dataset.level) { if (window.FDAUDIO) FDAUDIO.start(); go('level', { n: +t.dataset.level, i: 0 }); }
    else if (a === 'bnext') { R.i++; level(); }
    else if (a === 'todrill') go('drill', { n: R.n });
    else if (a === 'ksnap' && R.snap) { t.disabled = true; R.snap(); }
    else if (a === 'dnext') { R.di++; if (V) V.stop(); V = null; drill(); }
    else if (a === 'togame') { if (V) V.stop(); V = null; R = { s: 'game', n: R.n }; newGame(); game(); scrollTo({ top: 0 }); }
    else if (a === 'knextdrive') nextDrive();
    else if (t.dataset.ksub) { R.G.sub = t.dataset.ksub; AU('click'); panel(); }
    else if (a === 'kback') { R.G.sub = null; panel(); }
    else if (a === 'ktip') { R.G.tip = true; panel(); }
    else if (t.dataset.ko && R.G && R.G.phase === 'call') play(t.dataset.ko);
    else if (a === 'quiz') { if (window.FDAUDIO) FDAUDIO.start(); go('quiz', { qi: null }); }
    else if (t.dataset.ka != null) {
      const q = KIDS_QUIZ[R.order[R.qi]], i = +t.dataset.ka, ok = i === q.a;
      if (ok) R.qok++; AU(ok ? 'right' : 'wrong');
      document.querySelectorAll('.k-ans').forEach((b, k) => { b.disabled = true; b.classList.toggle('right', k === q.a); b.classList.toggle('wrong', k === i && !ok); });
      $('#kAfter').innerHTML = bruno((ok ? 'Richtig! 🎉 ' : 'Nicht ganz! ') + esc(q.why), ok ? 'wow' : 'happy') + '<button class="k-big" data-act="qnext">Weiter →</button>';
    }
    else if (a === 'qnext') { R.qi++; quiz(); }
    else if (t.dataset.kview) { view = t.dataset.kview; if (V) { V.sync(); if (V.last) V.draw(V.last.sim, V.last.fi, V.last.ctx); } }
    else if (a === 'fs') fs();
    else if (a === 'reset') { const now = Date.now(); if (now - resetArmed < 4000) { K = null; try { localStorage.removeItem(KEY); } catch (er) {} go('start'); } else { resetArmed = now; t.textContent = 'Sicher? Nochmal klicken'; } }
  });

  render();
  window.__fdkids = { get K() { return K; }, get R() { return R; } };
})();
