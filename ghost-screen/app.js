// ============================================================
//  GHOST SCREEN — Oberfläche (21.11.2026)
// ============================================================
//  Bibliothek → Aktion → Stufen (ohne D, mit D, Varianten).
//  Board als SVG in Metern, Abspielen per requestAnimationFrame,
//  Entscheidungsfragen halten die Animation an.
//  Deep Link: #/<aktion>/<stufe>  (z. B. #/iverson-cut/3)
// ============================================================
(function () {
  const GS = window.GS;
  const NS = 'http://www.w3.org/2000/svg';
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const fmt = t => t.toFixed(1).replace('.', ',') + ' s';
  const store = {
    get: k => { try { return localStorage.getItem('mfhfb:ghost:' + k); } catch (e) { return null; } },
    set: (k, v) => { try { localStorage.setItem('mfhfb:ghost:' + k, v); } catch (e) {} },
  };

  const S = {
    play: null, si: 0, c: null, t: 0, playing: false,
    speed: Number(store.get('speed')) || 1, lines: store.get('lines') || 'step',
    asked: false, askOpen: false, solved: false, lastTs: 0,
  };

  // ---------- SVG-Helfer ----------
  function el(tag, attrs, parent) {
    const n = document.createElementNS(NS, tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  const svg = $('court');
  const L = {};

  function drawCourt() {
    svg.innerHTML = '';
    const defs = el('defs', {}, svg);
    [['arrO', 'arr-o'], ['arrD', 'arr-d'], ['arrP', 'arr-o']].forEach(([id, cls]) => {
      const m = el('marker', { id, viewBox: '0 0 10 10', refX: 7, refY: 5, markerWidth: 4.2, markerHeight: 4.2, orient: 'auto-start-reverse' }, defs);
      el('path', { d: 'M0 0 L10 5 L0 10 Z', class: cls }, m);
    });
    const g = el('g', { class: 'court' }, svg);
    el('rect', { x: -7.5, y: 0, width: 15, height: 10.5, class: 'floor' }, g);
    el('rect', { x: -2.45, y: 0, width: 4.9, height: 5.8, class: 'paint' }, g);
    el('path', { d: 'M -7.5 10.5 V 0 H 7.5 V 10.5', class: 'line' }, g);
    el('path', { d: 'M -2.45 0 V 5.8 H 2.45 V 0', class: 'line' }, g);
    el('path', { d: 'M -1.8 5.8 A 1.8 1.8 0 0 0 1.8 5.8', class: 'line' }, g);
    el('path', { d: 'M -1.8 5.8 A 1.8 1.8 0 0 1 1.8 5.8', class: 'line dash' }, g);
    el('path', { d: 'M -6.6 0 V 2.99 A 6.75 6.75 0 0 0 6.6 2.99 V 0', class: 'line' }, g);
    el('path', { d: 'M -1.25 1.2 V 1.575 A 1.25 1.25 0 0 0 1.25 1.575 V 1.2', class: 'line thin' }, g);
    [1.75, 2.6, 3.45, 4.3].forEach(y => { el('path', { d: `M -2.45 ${y} h -0.15 M 2.45 ${y} h 0.15`, class: 'line thin' }, g); });
    el('path', { d: 'M -0.9 1.2 H 0.9', class: 'board-line' }, g);
    el('circle', { cx: 0, cy: 1.575, r: 0.225, class: 'rim' }, g);
    L.diagram = el('g', { class: 'diagram' }, svg);
    L.live = el('g', { class: 'live' }, svg);
    L.rings = el('g', {}, svg);
    L.players = el('g', {}, svg);
    L.ball = el('g', { class: 'ball-g' }, svg);
    L.ballShadow = el('ellipse', { rx: 0.17, ry: 0.08, class: 'ball-shadow' }, L.ball);
    L.ballDot = el('circle', { r: 0.17, class: 'ball' }, L.ball);
    L.swish = el('circle', { cx: 0, cy: 1.575, r: 0.3, class: 'swish' }, svg);
  }

  function buildPlayers() {
    L.players.innerHTML = ''; L.rings.innerHTML = '';
    L.p = {}; L.r = {};
    const c = S.c;
    const actors = new Set();
    c.ballEv.forEach(e => { if (e.pass) { actors.add(e.from); actors.add(e.to); } if (e.shot) actors.add(e.shot); if (e.hold) actors.add(e.hold); });
    S.actors = actors;
    c.oIds.forEach(id => {
      L.r[id] = el('circle', { r: 0.72, class: 'open-ring' }, L.rings);
      const g = el('g', { class: 'pl off' }, L.players);
      el('circle', { r: 0.45 }, g);
      const tx = el('text', { y: 0.18 }, g); tx.textContent = id.slice(1);
      L.p[id] = g;
    });
    c.dIds.forEach(id => {
      const g = el('g', { class: 'pl def' }, L.players);
      el('circle', { r: 0.45 }, g);
      const tx = el('text', { y: 0.13 }, g); tx.textContent = id;
      L.p[id] = g;
    });
  }

  // ---------- Bild zur Zeit t ----------
  function frameAt(t) {
    const c = S.c, i = Math.max(0, Math.min(c.frames.length - 1, t / GS.DT));
    const a = c.frames[Math.floor(i)], b = c.frames[Math.min(c.frames.length - 1, Math.ceil(i))], u = i - Math.floor(i);
    const mix = (p, q) => [p[0] + (q[0] - p[0]) * u, p[1] + (q[1] - p[1]) * u];
    const o = {}, d = {};
    for (const k in a.o) o[k] = mix(a.o[k], b.o[k]);
    for (const k in a.d) d[k] = mix(a.d[k], b.d[k]);
    const ball = Object.assign({}, a.ball);
    if (a.ball.p && b.ball.p && a.ball.mode === b.ball.mode) { ball.p = mix(a.ball.p, b.ball.p); ball.z = a.ball.z + (b.ball.z - a.ball.z) * u; }
    return { t, o, d, ball };
  }

  function render() {
    const c = S.c; if (!c) return;
    const fr = frameAt(S.t);
    for (const id in fr.o) L.p[id].setAttribute('transform', `translate(${fr.o[id][0].toFixed(3)} ${fr.o[id][1].toFixed(3)})`);
    for (const id in fr.d) L.p[id].setAttribute('transform', `translate(${fr.d[id][0].toFixed(3)} ${fr.d[id][1].toFixed(3)})`);
    // frei-Ringe
    for (const id in fr.o) {
      const ring = L.r[id];
      let op = 0;
      if (c.hasD && S.actors.has(id)) { const s = GS.separation(fr, id); op = Math.max(0, Math.min(1, (s - 1.6) / 0.6)); }
      ring.setAttribute('cx', fr.o[id][0]); ring.setAttribute('cy', fr.o[id][1]);
      ring.style.opacity = op;
    }
    // Ball
    const b = fr.ball;
    if (b.p) {
      let x = b.p[0], y = b.p[1];
      if (b.mode === 'hold') { x += 0.33; y += 0.3; }
      const sc = 1 + (b.z || 0) * 0.55;
      L.ball.style.display = b.mode === 'done' ? 'none' : '';
      L.ballDot.setAttribute('cx', x); L.ballDot.setAttribute('cy', y - (b.z || 0) * 0.5); L.ballDot.setAttribute('r', 0.17 * sc);
      L.ballShadow.setAttribute('cx', x); L.ballShadow.setAttribute('cy', y + 0.05);
      L.ballShadow.style.opacity = b.z > 0.05 ? 0.35 : 0;
    } else L.ball.style.display = 'none';
    // Korb!
    const shot = c.ballEv.find(e => e.shot);
    if (shot && S.t >= shot.t1) {
      const k = Math.min(1, (S.t - shot.t1) / 0.6);
      L.swish.setAttribute('r', 0.3 + k * 0.9); L.swish.style.opacity = 1 - k;
    } else L.swish.style.opacity = 0;
    // Screens, die gerade stehen
    L.live.innerHTML = '';
    c.screens.forEach(s => { if (S.t >= s.t0 && S.t <= s.t1) screenBar(L.live, s, s.ghost ? 'scr ghost live' : 'scr live'); });
    // Steuerung
    $('scrub').value = Math.round(S.t / c.dur * 1000);
    $('time').textContent = fmt(S.t);
    const cur = stepIndex(S.t);
    if (cur !== S.curStep) { S.curStep = cur; markStep(); drawDiagram(); }
  }

  function screenBar(g, s, cls) {
    const h = 0.48;
    el('path', { d: `M ${s.at[0] - s.dir[0] * h} ${s.at[1] - s.dir[1] * h} L ${s.at[0] + s.dir[0] * h} ${s.at[1] + s.dir[1] * h}`, class: cls }, g);
  }

  // ---------- Diagramm-Linien ----------
  function stepIndex(t) {
    const st = S.c.stage.steps || [];
    let i = 0;
    st.forEach((s, k) => { if (s[0] <= t + 1e-6) i = k; });
    return i;
  }
  function stepWindow() {
    const st = S.c.stage.steps || [];
    if (S.lines === 'all' || !st.length) return [0, S.c.dur];
    const i = S.curStep || 0;
    return [st[i][0], i + 1 < st.length ? st[i + 1][0] : S.c.dur];
  }
  function polyD(pts) { return pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(2) + ' ' + p[1].toFixed(2)).join(' '); }
  function trim(pts, end) {
    // Linie endet vor dem Spielerkreis
    let rest = end;
    const out = pts.slice();
    while (out.length > 1 && rest > 0) {
      const a = out[out.length - 2], b = out[out.length - 1];
      const l = GS.hyp(a, b);
      if (l > rest) { const u = (l - rest) / l; out[out.length - 1] = [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u]; rest = 0; }
      else { out.pop(); rest -= l; }
    }
    return out;
  }
  function zigzag(pts) {
    const out = [pts[0]]; let acc = 0, side = 1;
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1], b = pts[i], l = GS.hyp(a, b);
      if (!l) continue;
      const dx = (b[0] - a[0]) / l, dy = (b[1] - a[1]) / l;
      let pos = 0;
      while (acc + (l - pos) >= 0.32) {
        pos += 0.32 - acc; acc = 0;
        const px = a[0] + dx * pos, py = a[1] + dy * pos;
        out.push([px - dy * 0.13 * side, py + dx * 0.13 * side]); side = -side;
      }
      acc += l - pos;
    }
    out.push(pts[pts.length - 1]);
    return out;
  }

  function drawDiagram() {
    const g = L.diagram; g.innerHTML = '';
    if (S.lines === 'off' || !S.c) return;
    const c = S.c, [ta, tb] = stepWindow();
    const f0 = Math.floor(ta / GS.DT), f1 = Math.min(c.frames.length - 1, Math.ceil(tb / GS.DT));
    const scrIn = c.screens.filter(s => s.t0 >= ta - 0.05 && s.t0 < tb + 0.15);
    // Verteidiger (zart)
    c.dIds.forEach(id => {
      const pts = []; for (let f = f0; f <= f1; f += 2) pts.push(c.frames[f].d[id]);
      let len = 0; for (let i = 1; i < pts.length; i++) len += GS.hyp(pts[i - 1], pts[i]);
      if (len < 0.7) return;
      el('path', { d: polyD(trim(pts, 0.45)), class: 'dg-d', 'marker-end': 'url(#arrD)' }, g);
    });
    // Angreifer
    c.oIds.forEach(id => {
      const pts = []; let drib = 0, n = 0;
      for (let f = f0; f <= f1; f += 2) { const fr = c.frames[f]; pts.push(fr.o[id]); n++; if (fr.ball.mode === 'hold' && fr.ball.who === id) drib++; }
      let len = 0; for (let i = 1; i < pts.length; i++) len += GS.hyp(pts[i - 1], pts[i]);
      if (len < 0.5) return;
      const isScreener = scrIn.some(s => s.by === id && GS.hyp(c.opos(id, s.t0), pts[pts.length - 1]) < 0.4);
      let p = trim(pts, isScreener ? 0.2 : 0.5);
      if (drib / n > 0.5) p = zigzag(p);
      el('path', { d: polyD(p), class: 'dg-o', 'marker-end': isScreener ? '' : 'url(#arrO)' }, g);
    });
    scrIn.forEach(s => screenBar(g, s, s.ghost ? 'scr ghost' : 'scr'));
    // Pässe und Würfe
    c.ballEv.forEach(e => {
      if (e.pass && e.t >= ta - 0.05 && e.t < tb) {
        const pts = []; for (let u = 0; u <= 1.0001; u += 0.1) pts.push(c.passPoint(e, u));
        el('path', { d: polyD(trim(pts, 0.5)), class: 'dg-pass' + (e.lob ? ' lob' : ''), 'marker-end': 'url(#arrP)' }, g);
      }
      if (e.shot && e.t >= ta - 0.05 && e.t < tb) {
        const a = c.opos(e.shot, e.t);
        el('path', { d: `M ${a[0]} ${a[1]} L ${GS.RIM[0]} ${GS.RIM[1]}`, class: 'dg-shot' }, g);
      }
    });
  }

  // ---------- Glossar ----------
  const terms = Object.keys(GS.GLOSSARY).sort((a, b) => b.length - a.length);
  const termRe = new RegExp('(?<![\\wÄÖÜäöüß])(' + terms.map(t => t.replace(/[.*+?^${}()|[\]\\&]/g, m => m === '&' ? '&amp;' : '\\' + m)).join('|') + ')(?![\\wÄÖÜäöüß])', 'g');
  function linkTerms(text) {
    const seen = new Set();
    return esc(text).replace(termRe, (m) => {
      const key = m.replace('&amp;', '&');
      if (seen.has(key)) return m;
      seen.add(key);
      return `<span class="term" tabindex="0" data-term="${esc(key)}">${m}</span>`;
    });
  }
  const tip = document.createElement('div'); tip.className = 'gs-tip'; tip.hidden = true; document.body.appendChild(tip);
  function showTip(t) {
    const k = t.dataset.term; tip.innerHTML = `<b>${esc(k)}</b> ${esc(GS.GLOSSARY[k] || '')}`; tip.hidden = false;
    const r = t.getBoundingClientRect(), w = Math.min(280, window.innerWidth - 16);
    tip.style.width = w + 'px';
    tip.style.left = Math.max(8, Math.min(window.innerWidth - w - 8, r.left + r.width / 2 - w / 2)) + 'px';
    const below = r.bottom + 8 + tip.offsetHeight < window.innerHeight;
    tip.style.top = (below ? r.bottom + 8 : r.top - tip.offsetHeight - 8) + window.scrollY + 'px';
  }
  document.addEventListener('mouseover', e => { const t = e.target.closest('.term'); if (t) showTip(t); });
  document.addEventListener('mouseout', e => { if (e.target.closest('.term')) tip.hidden = true; });
  document.addEventListener('focusin', e => { const t = e.target.closest('.term'); if (t) showTip(t); });
  document.addEventListener('focusout', e => { if (e.target.closest('.term')) tip.hidden = true; });

  // ---------- Panels ----------
  function renderLib() {
    $('lib').innerHTML = `<div class="gs-lib-intro"><b>Aktionen</b><span>Such Dir eine Aktion aus. Jede hat Stufen: erst ohne Verteidigung, dann mit – und was Du tust, wenn die Verteidigung anders reagiert.</span></div>` +
      GS.CATS.map(cat => `<div class="gs-lib-cat"><h3>${esc(cat)}</h3>${GS.PLAYS.filter(p => p.cat === cat).map(p => `
        <a class="gs-lib-item${S.play && S.play.id === p.id ? ' on' : ''}" href="#/${p.id}/1">
          <b>${esc(p.name)}</b><span>${esc(p.short)}</span>
          <em>${esc(p.level)} · ${p.stages.length} Stufen</em>
        </a>`).join('')}</div>`).join('');
  }
  function renderHead() {
    const p = S.play;
    $('head').innerHTML = `<div class="gs-chips"><span class="chip">${esc(p.cat)}</span><span class="chip">${esc(p.level)}</span></div>
      <h1>${esc(p.name)}</h1><p>${linkTerms(p.short)}</p>`;
  }
  function stageLabel(st, i) {
    if (i === 0) return '1 · Ohne Verteidigung';
    if (i === 1) return '2 · Mit Verteidigung';
    return `${i + 1} · ${st.tab}`;
  }
  function renderStages() {
    const p = S.play;
    $('stages').innerHTML = p.stages.map((st, i) =>
      (i === 2 ? '<span class="gs-stage-sep">Wenn die Verteidigung anders reagiert:</span>' : '') +
      `<a class="gs-stage${i === S.si ? ' on' : ''}${i >= 2 ? ' var' : ''}" href="#/${p.id}/${i + 1}">${esc(stageLabel(st, i))}</a>`).join('');
  }
  function renderStageInfo() {
    const st = S.c.stage, i = S.si;
    let h;
    if (i === 0) h = `<p><b>Stufe 1 – ohne Verteidigung.</b> Schau Dir erst nur die Laufwege an: Wer läuft wohin, wer passt wann?</p>`;
    else if (i === 1) h = `<p><b>Stufe 2 – mit Verteidigung.</b> So reagiert die Verteidigung normalerweise – und darum funktioniert die Aktion.</p>`;
    else {
      h = `<p><b>🛡️ Die Verteidigung:</b> ${linkTerms(st.defenseText || '')}</p>`;
      h += S.solved || !st.ask ? `<p class="gs-answer"><b>💡 Lösung:</b> ${linkTerms(st.answer || '')}</p>` : `<p class="gs-answer muted"><b>💡 Lösung:</b> Spiel die Szene ab – an der wichtigen Stelle hält sie an und Du entscheidest.</p>`;
    }
    $('stageInfo').innerHTML = h;
  }
  function renderSteps() {
    const st = S.c.stage.steps || [];
    $('steps').innerHTML = st.map((s, i) => `<li data-i="${i}"><button type="button" data-seek="${s[0]}"><span>${linkTerms(s[1])}</span></button></li>`).join('');
    S.curStep = -1;
  }
  function markStep() {
    document.querySelectorAll('#steps li').forEach(li => li.classList.toggle('on', Number(li.dataset.i) === S.curStep));
    const st = S.c.stage.steps || [], cur = st[S.curStep];
    $('caption').innerHTML = cur ? `<b>${S.curStep + 1}/${st.length}</b> <span>${linkTerms(cur[1])}</span>` : '';
  }
  function renderExplain() {
    const p = S.play;
    $('explain').innerHTML = `<div><h3>Warum funktioniert das?</h3><p>${linkTerms(p.why)}</p></div>
      <div><h3>Darauf kommt es an</h3><ul>${p.points.map(x => `<li>${linkTerms(x)}</li>`).join('')}</ul></div>`;
  }

  // ---------- Overlays ----------
  function askBox(html) { const o = $('askBox'); if (!html) { o.hidden = true; o.innerHTML = ''; return; } o.innerHTML = html; o.hidden = false; o.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }
  function overlay(html) { const o = $('overlay'); if (!html) { o.hidden = true; o.innerHTML = ''; return; } o.innerHTML = html; o.hidden = false; }
  function showStart() { overlay(`<button class="gs-big-play" type="button" data-act="play" aria-label="Abspielen">▶</button>`); }
  function showAsk() {
    const a = S.c.stage.ask;
    S.askOpen = true; S.playing = false; syncPlay();
    askBox(`<div class="gs-ask"><div class="gs-ask-k">Was würdest Du tun?</div><p class="gs-ask-q">${linkTerms(a.q)}</p>
      <div class="gs-ask-opts">${a.opts.map((o, i) => `<button type="button" data-opt="${i}">${esc(o[0])}</button>`).join('')}</div>
      <div class="gs-ask-fb" id="askFb"></div>
      <button type="button" class="gs-ask-skip" data-act="skip">Überspringen – Lösung zeigen</button></div>`);
  }
  function answer(i) {
    const a = S.c.stage.ask, o = a.opts[i];
    const btn = document.querySelector(`[data-opt="${i}"]`);
    btn.classList.add(o[1] ? 'right' : 'wrong'); btn.disabled = true;
    $('askFb').innerHTML = `<p class="${o[1] ? 'ok' : 'no'}">${o[1] ? '✅' : '❌'} ${linkTerms(o[2])}</p>` +
      (o[1] ? `<button type="button" class="gs-btn-primary" data-act="resume">Weiter ▶ So sieht's aus</button>` : '<p class="hint">Probier eine andere Antwort.</p>');
    if (o[1]) { S.solved = true; renderStageInfo(); }
  }
  function showEnd() {
    const p = S.play, nextStage = S.si + 1 < p.stages.length;
    const idx = GS.PLAYS.indexOf(p), nextPlay = GS.PLAYS[idx + 1];
    const next = nextStage ? `<a class="gs-btn-primary" href="#/${p.id}/${S.si + 2}">Weiter: ${esc(stageLabel(p.stages[S.si + 1], S.si + 1))} →</a>`
      : nextPlay ? `<a class="gs-btn-primary" href="#/${nextPlay.id}/1">Nächste Aktion: ${esc(nextPlay.name)} →</a>` : '';
    overlay(`<div class="gs-end"><button type="button" class="gs-btn-ghost" data-act="restart">↺ Nochmal</button>${next}</div>`);
  }

  // ---------- Abspielen ----------
  function syncPlay() { document.querySelector('.gs-play').textContent = S.playing ? '⏸' : '▶'; }
  function play() {
    if (S.askOpen) return;
    if (S.t >= S.c.dur - 1e-3) { S.t = 0; S.asked = false; }
    S.playing = true; overlay(null); syncPlay(); S.lastTs = performance.now();
  }
  function pause() { S.playing = false; syncPlay(); }
  function seek(t) {
    S.t = Math.max(0, Math.min(S.c.dur, t));
    const a = S.c.stage.ask;
    if (a && S.t < a.t) S.asked = false;
    if (a && S.t > a.t) S.asked = true;
    S.askOpen = false; overlay(null); askBox(null);
    render();
  }
  function tick(ts) {
    if (S.playing && S.c) {
      const dt = Math.min(0.1, (ts - S.lastTs) / 1000) * S.speed;
      let nt = S.t + dt;
      const a = S.c.stage.ask;
      if (a && !S.asked && S.t <= a.t && nt >= a.t) { S.t = a.t; S.asked = true; render(); showAsk(); }
      else if (nt >= S.c.dur) { S.t = S.c.dur; pause(); render(); showEnd(); }
      else { S.t = nt; render(); }
    }
    S.lastTs = ts;
    requestAnimationFrame(tick);
  }

  // ---------- Laden ----------
  function load(playId, stageNo) {
    const p = GS.PLAYS.find(x => x.id === playId) || GS.PLAYS[0];
    const si = Math.max(0, Math.min(p.stages.length - 1, (stageNo || 1) - 1));
    const samePlay = S.play === p;
    S.play = p; S.si = si; S.c = GS.compile(p.stages[si]);
    S.t = 0; S.playing = false; S.asked = false; S.askOpen = false; S.solved = false; S.curStep = -1;
    document.title = `${p.name} · Ghost Screen`;
    buildPlayers(); renderLib(); renderHead(); renderStages(); renderStageInfo(); renderSteps(); renderExplain();
    askBox(null); render(); syncPlay(); showStart();
    if (!samePlay) window.scrollTo({ top: 0 });
    document.body.classList.remove('lib-open'); document.querySelector('[data-act="lib"]').setAttribute('aria-expanded', 'false');
  }
  function route() {
    const m = location.hash.match(/^#\/([\w-]+)(?:\/(\d+))?/);
    load(m ? m[1] : null, m && m[2] ? Number(m[2]) : 1);
  }

  // ---------- Ereignisse ----------
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-act],[data-opt],[data-seek],[data-speed],[data-lines]');
    if (!b) { if (document.body.classList.contains('lib-open') && !e.target.closest('#lib')) document.body.classList.remove('lib-open'); return; }
    if (b.dataset.opt !== undefined) return answer(Number(b.dataset.opt));
    if (b.dataset.seek !== undefined) { const wasPlaying = S.playing; seek(Number(b.dataset.seek) + 0.001); if (wasPlaying) play(); return; }
    if (b.dataset.speed) { S.speed = Number(b.dataset.speed); store.set('speed', S.speed); syncSegs(); return; }
    if (b.dataset.lines) { S.lines = b.dataset.lines; store.set('lines', S.lines); syncSegs(); drawDiagram(); return; }
    switch (b.dataset.act) {
      case 'play': S.playing ? pause() : play(); break;
      case 'restart': S.asked = false; S.askOpen = false; seek(0); play(); break;
      case 'prev': { const st = S.c.stage.steps; const i = stepIndex(S.t); const back = S.t - st[i][0] < 0.4 && i > 0 ? i - 1 : i; pause(); seek(st[back][0] + 0.001); break; }
      case 'next': { const st = S.c.stage.steps; const i = stepIndex(S.t); pause(); if (i + 1 < st.length) seek(st[i + 1][0] + 0.001); else seek(S.c.dur); break; }
      case 'resume': S.askOpen = false; askBox(null); play(); break;
      case 'skip': S.askOpen = false; S.solved = true; renderStageInfo(); askBox(null); play(); break;
      case 'lib': { const open = !document.body.classList.contains('lib-open'); document.body.classList.toggle('lib-open', open); b.setAttribute('aria-expanded', String(open)); break; }
      case 'copy': {
        const url = location.href;
        (navigator.clipboard ? navigator.clipboard.writeText(url) : Promise.reject()).then(() => toast('Link kopiert – direkt zu dieser Stufe.'), () => toast(url));
        break;
      }
      case 'theme': {
        const cur = document.documentElement.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        const nx = cur === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', nx);
        try { localStorage.setItem('mfhfb:theme', nx); } catch (err) {}
        break;
      }
    }
  });
  $('scrub').addEventListener('input', e => { pause(); seek(Number(e.target.value) / 1000 * S.c.dur); });
  document.addEventListener('keydown', e => {
    if (e.target.closest('input,textarea,select') || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === ' ') { e.preventDefault(); if (!S.askOpen) (S.playing ? pause() : play()); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); document.querySelector('[data-act="next"]').click(); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); document.querySelector('[data-act="prev"]').click(); }
  });
  function syncSegs() {
    document.querySelectorAll('[data-speed]').forEach(b => b.classList.toggle('on', Number(b.dataset.speed) === S.speed));
    document.querySelectorAll('[data-lines]').forEach(b => b.classList.toggle('on', b.dataset.lines === S.lines));
  }
  let toastT;
  function toast(msg) { const t = $('toast'); t.textContent = msg; t.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => { t.hidden = true; }, 2600); }

  drawCourt(); syncSegs();
  window.addEventListener('hashchange', route);
  route();
  requestAnimationFrame(tick);
})();
