// ============================================================
//  FIRST DOWN — Darstellung: Feld (SVG), Animation, Karten
// ============================================================
(function () {
  'use strict';
  const NS = 'http://www.w3.org/2000/svg';
  const W = 53.3, TOP = 26, H = 36;           // sichtbar: d = +26 … −10
  const Y = d => TOP - d;
  const $ = s => document.querySelector(s);

  const NAMES = {
    LT: 'Left Tackle (Offensive Line)', LG: 'Left Guard (Offensive Line)', C: 'Center (Offensive Line): gibt den Snap',
    RG: 'Right Guard (Offensive Line)', RT: 'Right Tackle (Offensive Line)', TE: 'Tight End', QB: 'Quarterback',
    HB: 'Halfback / Running Back', FB: 'Fullback', X: 'Wide Receiver außen links', SL: 'Wide Receiver im Slot', Z: 'Wide Receiver außen rechts',
    LE: 'Defensive End', RE: 'Defensive End', DT1: 'Defensive Tackle', DT2: 'Defensive Tackle',
    LB1: 'Linebacker', LB2: 'Linebacker', LB3: 'Linebacker', CB1: 'Cornerback', CB2: 'Cornerback', NB: 'Nickelback (deckt den Slot)',
    FS: 'Safety', SS: 'Safety',
  };
  const SPEED = { T: 2.6, G: 2.6, C: 2.6, QB: 3.2, HB: 6.5, FB: 5.5, TE: 6, WR: 7.2, DE: 4, DT: 3.6, LB: 5, CB: 6.6, NB: 6.6, S: 6.6 };

  // ---------- Glossar-Markup ----------
  const GL = FD_GLOSSARY;
  const glossKey = k => Object.keys(GL).find(g => g.toLowerCase() === k.toLowerCase());
  function rich(s) {
    if (!s) return '';
    return s.replace(/\{([^}|]+)(?:\|([^}]+))?\}/g, (m, k, label) => {
      const key = glossKey(k.trim());
      const shown = label || k;
      if (!key) return shown;
      return `<span class="term" tabindex="0" data-tip="${esc(key + ': ' + GL[key])}">${shown}</span>`;
    });
  }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); }

  // ---------- Pfad-Mathematik ----------
  // Track: Liste von Segmenten {t0,t1,a,b} plus Pausen; pos(t)
  function buildTrack(start, spec, role, delay0) {
    const sp = (spec && spec.speed) || SPEED[role] || 5;
    const segs = [];
    let t = delay0 + (spec && spec.delay || 0), cur = start;
    (spec && spec.path || []).forEach(w => {
      const nx = [start[0] + w[0], start[1] + w[1]];
      const dist = Math.hypot(nx[0] - cur[0], nx[1] - cur[1]);
      const dur = Math.max(dist / sp, 0.05);
      segs.push({ t0: t, t1: t + dur, a: cur, b: nx });
      t += dur; cur = nx;
      if (w[2]) { segs.push({ t0: t, t1: t + w[2], a: cur, b: cur }); t += w[2]; }
    });
    return { start, segs, end: t, last: cur };
  }
  function trackPos(tr, t) {
    if (!tr.segs.length || t <= tr.segs[0].t0) return tr.start;
    for (const s of tr.segs) {
      if (t <= s.t1) { const f = (t - s.t0) / (s.t1 - s.t0 || 1); return [s.a[0] + (s.b[0] - s.a[0]) * f, s.a[1] + (s.b[1] - s.a[1]) * f]; }
    }
    return tr.last;
  }
  const lerp = (a, b, f) => [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f];
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  // ---------- Szene aus Diagramm ----------
  function buildScene(dg) {
    const snap = dg.snap || 0;
    const players = [];
    const offF = FD_OFF[dg.off] || {}, defF = dg.def ? FD_DEF[dg.def] : null;
    Object.keys(offF).forEach(id => {
      const [x, d, lab] = offF[id];
      const spec = dg.paths && dg.paths[id];
      players.push({ id, side: 'off', lab, role: lab, start: [x, d], spec, track: buildTrack([x, d], spec, lab, snap) });
    });
    if (defF) Object.keys(defF).forEach(id => {
      const [x, d, lab] = defF[id];
      const spec = dg.dpaths && dg.dpaths[id];
      const p = { id, side: 'def', lab, role: lab, start: [x, d], spec };
      if (!(spec && spec.follow)) p.track = buildTrack([x, d], spec, lab, 0);
      players.push(p);
    });
    const byId = {}; players.forEach(p => { byId[p.id] = p; });
    const pos = (p, t) => {
      if (p.track) {
        if (sackInfo && p.id === 'QB' && t > sackInfo.at) return trackPos(p.track, sackInfo.at);
        return trackPos(p.track, t);
      }
      const tgt = byId[p.spec.follow];
      const tp = pos(tgt, Math.max(0, t - snap - (p.spec.lag || 0)) + snap);
      const want = [tp[0] + p.spec.off[0], tp[1] + p.spec.off[1]];
      return lerp(p.start, want, clamp((t - snap) / 0.6, 0, 1));
    };
    const sackInfo = dg.sack ? { by: dg.sack.by, at: dg.sack.at + snap } : null;

    // Ball-Ereignisse
    const ev = [];
    if (byId.C && byId.QB) ev.push({ type: 'snap', t0: snap, t1: snap + 0.22, to: 'QB' });
    (dg.ball || []).forEach(b => {
      if (b[0] === 'pass') ev.push({ type: 'pass', to: b[1], t0: b[2] + snap, t1: b[2] + snap + b[3] });
      else ev.push({ type: b[0], to: b[1], t0: b[2] + snap, t1: b[2] + snap });
    });
    ev.sort((a, b) => a.t0 - b.t0);
    // Wurfpunkt / Fangpunkt vorab berechnen
    let holder = 'C';
    ev.forEach(e => {
      e.from = holder;
      if (e.type === 'pass') { e.a = pos(byId[holder], e.t0); e.b = pos(byId[e.to], e.t1); }
      if (e.type === 'snap' || e.type === 'pass' || e.type === 'hand') holder = e.to;
    });
    const ballPos = t => {
      let h = 'C';
      for (const e of ev) {
        if (t < e.t0) break;
        if (e.type === 'pass' && t < e.t1) { const f = (t - e.t0) / (e.t1 - e.t0); const p = lerp(e.a, e.b, f); return { p, air: Math.sin(f * Math.PI) }; }
        if (e.type === 'snap' && t < e.t1) { const f = (t - e.t0) / (e.t1 - e.t0); return { p: lerp(pos(byId.C, t), pos(byId.QB, t), f), air: 0 }; }
        if (e.type !== 'fake') h = e.to;
      }
      const hp = byId[h] ? pos(byId[h], t) : [26.65, 0];
      return { p: [hp[0] + 0.55, hp[1] + 0.35], air: 0, holder: h };
    };
    let end = snap + 0.6;
    players.forEach(p => { if (p.track) end = Math.max(end, p.track.end); });
    ev.forEach(e => { end = Math.max(end, e.t1 + 0.8); });
    if (sackInfo) end = Math.max(end, sackInfo.at + 1);
    end = Math.max(end, 1.2) + 0.6;
    return { players, byId, pos, ev, ballPos, end, snap, sack: sackInfo, hasBall: !!(byId.C && byId.QB) };
  }

  // ---------- SVG ----------
  const el = (tag, attrs, parent) => {
    const n = document.createElementNS(NS, tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  };
  function drawField(svg) {
    svg.innerHTML = '';
    el('rect', { x: 0, y: 0, width: W, height: H, class: 'turf' }, svg);
    // Streifen alle 5 Yards
    for (let d = -10; d < 26; d += 5) if (((d + 10) / 5) % 2 === 0) el('rect', { x: 0, y: Y(d + 5), width: W, height: 5, class: 'stripe' }, svg);
    for (let d = -10; d <= 26; d++) {
      const yd = 25 + d;
      if (yd % 5 === 0) el('line', { x1: 0, x2: W, y1: Y(d), y2: Y(d), class: 'yl' }, svg);
      else {
        [[0.3, 1.2], [W - 1.2, W - 0.3], [23.0, 23.9], [29.4, 30.3]].forEach(([a, b]) => el('line', { x1: a, x2: b, y1: Y(d), y2: Y(d), class: 'hash' }, svg));
      }
      if (yd % 10 === 0 && yd > 0 && yd <= 50) {
        [[6, 90], [W - 6, -90]].forEach(([x, r]) => {
          const t = el('text', { x, y: Y(d), class: 'ydnum', transform: `rotate(${r} ${x} ${Y(d)})` }, svg);
          t.textContent = yd;
        });
      }
    }
    el('line', { x1: 0, x2: W, y1: Y(0), y2: Y(0), class: 'los' }, svg);
    el('line', { x1: 0, x2: W, y1: Y(10), y2: Y(10), class: 'fdl' }, svg);
    const l1 = el('text', { x: W - 0.6, y: Y(0) - 0.4, class: 'linelab los-t' }, svg); l1.textContent = 'Line of Scrimmage';
    const l2 = el('text', { x: W - 0.6, y: Y(10) - 0.4, class: 'linelab fdl-t' }, svg); l2.textContent = 'First Down (+10)';
  }

  let scene = null, svgLayers = null, tNow = 0, playing = false, last = 0, speed = 1, raf = 0, showLines = true;

  function renderDiagram(dg) {
    const svg = $('#field');
    drawField(svg);
    scene = buildScene(dg);
    const gZones = el('g', { class: 'zones' }, svg);
    (dg.zones || []).forEach(([x, d, rx, rd, lab]) => {
      el('ellipse', { cx: x, cy: Y(d), rx, ry: rd, class: 'zone' }, gZones);
      const t = el('text', { x, y: Y(d) - rd + 1.1, class: 'zone-t' }, gZones); t.textContent = lab;
    });
    const gLines = el('g', { class: 'routes' }, svg);
    // Laufwege
    scene.players.forEach(p => {
      if (!p.spec) return;
      let pts;
      if (p.track) pts = [p.start].concat(p.track.segs.filter(s => s.a !== s.b).map(s => s.b));
      else {
        pts = [];
        for (let t = 0; t <= scene.end; t += 0.1) pts.push(scene.pos(p, t));
      }
      if (pts.length < 2) return;
      const dStr = pts.map((q, i) => (i ? 'L' : 'M') + q[0].toFixed(2) + ' ' + Y(q[1]).toFixed(2)).join(' ');
      const cls = 'route ' + p.side + (p.spec.block ? ' blk' : '') + (p.spec.follow ? ' follow' : '');
      el('path', { d: dStr, class: cls }, gLines);
      const a = pts[pts.length - 2], b = pts[pts.length - 1];
      const ang = Math.atan2(Y(b[1]) - Y(a[1]), b[0] - a[0]);
      if (p.spec.block) {
        const nx = Math.cos(ang + Math.PI / 2) * 0.7, ny = Math.sin(ang + Math.PI / 2) * 0.7;
        el('line', { x1: b[0] - nx, y1: Y(b[1]) - ny, x2: b[0] + nx, y2: Y(b[1]) + ny, class: 'blkbar ' + p.side }, gLines);
      } else {
        const s = 0.75, x = b[0], y = Y(b[1]);
        const p1 = [x - s * Math.cos(ang - 0.45), y - s * Math.sin(ang - 0.45)], p2 = [x - s * Math.cos(ang + 0.45), y - s * Math.sin(ang + 0.45)];
        el('path', { d: `M${p1[0]} ${p1[1]} L${x} ${y} L${p2[0]} ${p2[1]}`, class: 'arrow ' + p.side }, gLines);
      }
    });
    // Pass-Linien
    scene.ev.filter(e => e.type === 'pass').forEach(e => {
      el('path', { d: `M${e.a[0]} ${Y(e.a[1])} L${e.b[0]} ${Y(e.b[1])}`, class: 'passline' }, gLines);
    });
    gLines.style.display = showLines ? '' : 'none';

    const gPl = el('g', { class: 'players' }, svg);
    const focusAll = dg.focusAll, focusDef = dg.focusDef;
    scene.players.forEach(p => {
      const g = el('g', { class: 'pl ' + p.side + (dg.offFaint && p.side === 'off' ? ' faint' : '') }, gPl);
      el('circle', { r: 0.82 }, g);
      const t = el('text', { y: 0.29 }, g); t.textContent = p.lab;
      const ti = el('title', {}, g); ti.textContent = NAMES[p.id] || p.lab;
      p.g = g;
    });
    const ball = el('ellipse', { rx: 0.5, ry: 0.32, class: 'ball' }, svg);
    const burst = el('g', { class: 'burst' }, svg);
    el('circle', { r: 2.2 }, burst);
    const bt = el('text', { y: 0.5 }, burst); bt.textContent = 'SACK';
    svgLayers = { ball, burst, gLines };
    $('#caption').innerHTML = rich(dg.caption || '');
    const animated = scene.players.some(p => p.spec);
    $('#controls').hidden = !animated;
    tNow = 0; drawAt(0);
    stop();
    if (animated) setTimeout(() => { if (!playing && tNow === 0) play(); }, 450);
  }

  function drawAt(t) {
    if (!scene) return;
    scene.players.forEach(p => {
      const q = scene.pos(p, t);
      p.g.setAttribute('transform', `translate(${q[0].toFixed(3)} ${Y(q[1]).toFixed(3)})`);
    });
    const b = svgLayers.ball;
    if (scene.hasBall) {
      const bp = scene.ballPos(t);
      const s = 1 + bp.air * 0.7;
      b.setAttribute('transform', `translate(${bp.p[0].toFixed(3)} ${Y(bp.p[1]).toFixed(3)}) scale(${s})`);
      b.style.display = '';
    } else b.style.display = 'none';
    const bu = svgLayers.burst;
    if (scene.sack && t >= scene.sack.at) {
      const q = scene.pos(scene.byId.QB, t);
      bu.setAttribute('transform', `translate(${q[0]} ${Y(q[1]) + 0.2})`);
      bu.style.display = '';
    } else bu.style.display = 'none';
    const scrub = $('#scrub');
    scrub.value = Math.round((t / scene.end) * 1000);
    $('#time').textContent = t.toFixed(1).replace('.', ',') + ' s';
  }

  function frame(ts) {
    if (!playing) return;
    const dt = last ? (ts - last) / 1000 : 0; last = ts;
    tNow += dt * speed;
    if (tNow >= scene.end) { tNow = scene.end; drawAt(tNow); stop(); return; }
    drawAt(tNow);
    raf = requestAnimationFrame(frame);
  }
  function play() {
    if (!scene) return;
    if (tNow >= scene.end) tNow = 0;
    playing = true; last = 0; $('#playBtn').textContent = '⏸';
    raf = requestAnimationFrame(frame);
  }
  function stop() { playing = false; cancelAnimationFrame(raf); $('#playBtn').textContent = '▶'; }

  // ---------- Baum-Navigation ----------
  const NODES = FD_NODES;
  const parent = {};
  (function () {
    const q = ['o-start', 'd-start'], seen = new Set(q);
    while (q.length) {
      const id = q.shift();
      (NODES[id].choices || []).forEach(c => { if (!seen.has(c.to)) { seen.add(c.to); parent[c.to] = id; q.push(c.to); } });
    }
  })();
  const crumbs = id => { const a = []; let c = id; while (c) { a.unshift(c); c = parent[c]; } return a; };
  const shortTitle = id => NODES[id].crumb || NODES[id].title.replace(/:.*$/, '');

  function block(label, cls, html) { return html ? `<div class="fd-blk ${cls}"><h4>${label}</h4><p>${rich(html)}</p></div>` : ''; }

  function render(id) {
    const n = NODES[id] || NODES['o-start'];
    if (!NODES[id]) id = 'o-start';
    document.body.dataset.side = n.side;
    document.querySelectorAll('[data-side-btn]').forEach(b => b.classList.toggle('on', b.dataset.sideBtn === n.side));
    $('#crumbs').innerHTML = crumbs(id).map((c, i, a) => i === a.length - 1
      ? `<span class="on">${esc(shortTitle(c))}</span>` : `<a href="#/${c}">${esc(shortTitle(c))}</a>`).join('<i>›</i>');
    const seeLab = n.side === 'off' ? '🛡️ Was sieht die Defense dabei?' : '🏈 Was macht die Offense dagegen?';
    $('#card').innerHTML = `
      <div class="fd-kicker">${esc(n.kicker || '')}</div>
      <h1>${esc(n.title)}</h1>
      <p class="fd-text">${rich(n.text)}</p>
      ${n.list ? `<ul class="fd-list">${n.list.map(l => `<li>${rich(l)}</li>`).join('')}</ul>` : ''}
      ${block('Wer macht was?', 'who', n.who)}
      ${block('Warum?', 'why', n.why)}
      ${block('Risiko', 'risk', n.risk)}
      ${n.example ? `<div class="fd-ex"><h4>🐻 vs 🦁 Beispiel aus 2026 <small>${esc(FD_STAND)}</small></h4><p>${rich(n.example)}</p></div>` : ''}
      ${n.result ? `<p class="fd-result">📏 ${rich(n.result)}</p>` : ''}
      ${n.ask ? `<p class="fd-ask">${rich(n.ask)}</p>` : ''}
      <div class="fd-choices">${(n.choices || []).map(c => `
        <a class="fd-choice${c.ghost ? ' ghost' : ''}${parent[c.to] === id ? ' fwd' : ''}" href="#/${c.to}"><b>${esc(c.label)}</b><span>${esc(c.sub || '')}</span></a>`).join('')}
      </div>
      ${n.see ? `<a class="fd-see" href="#/${n.see}">${seeLab}</a>` : ''}
      ${id === 'o-start' || id === 'd-start' ? '<div><a class="fd-cta" href="karriere.html">🏆 Karriere starten</a><a class="fd-cta" href="spiel.html#/spiel">🎮 Schnelles Spiel</a><a class="fd-cta" href="spiel.html#/quiz">❓ Quiz</a></div>' : ''}`;
    renderDiagram(n.diagram || { off: 'gun11', def: 'nickel' });
    if (window.innerWidth < 900) window.scrollTo({ top: 0 });
  }
  function route() { render((location.hash.replace(/^#\/?/, '') || 'o-start')); }

  // ---------- Glossar-Liste ----------
  function renderGlossary() {
    const keys = Object.keys(GL).sort((a, b) => a.localeCompare(b, 'de'));
    $('#glossary').innerHTML = keys.map(k => `<div><dt>${esc(k)}</dt><dd>${esc(GL[k])}</dd></div>`).join('');
  }

  // ---------- Tooltips (Hover + Tippen) ----------
  const tip = $('#tip');
  function showTip(t) {
    tip.textContent = t.dataset.tip; tip.hidden = false;
    const r = t.getBoundingClientRect(), tw = Math.min(320, window.innerWidth - 20);
    tip.style.maxWidth = tw + 'px';
    const left = clamp(r.left + r.width / 2 - tw / 2, 10, window.innerWidth - tw - 10);
    tip.style.left = left + 'px';
    const th = tip.offsetHeight;
    tip.style.top = (r.top - th - 8 > 0 ? r.top - th - 8 : r.bottom + 8) + window.scrollY + 'px';
  }
  document.addEventListener('mouseover', e => { const t = e.target.closest('.term'); if (t) showTip(t); });
  document.addEventListener('mouseout', e => { if (e.target.closest('.term')) tip.hidden = true; });
  document.addEventListener('focusin', e => { const t = e.target.closest('.term'); if (t) showTip(t); });
  document.addEventListener('focusout', e => { if (e.target.closest('.term')) tip.hidden = true; });
  document.addEventListener('click', e => { const t = e.target.closest('.term'); if (t) { showTip(t); e.preventDefault(); } else if (!e.target.closest('#tip')) tip.hidden = true; });

  // ---------- Bedienung ----------
  $('#playBtn').addEventListener('click', () => playing ? stop() : play());
  $('#restartBtn').addEventListener('click', () => { stop(); tNow = 0; drawAt(0); play(); });
  $('#scrub').addEventListener('input', e => { stop(); tNow = (e.target.value / 1000) * scene.end; drawAt(tNow); });
  document.querySelectorAll('[data-speed]').forEach(b => b.addEventListener('click', () => {
    speed = +b.dataset.speed; document.querySelectorAll('[data-speed]').forEach(x => x.classList.toggle('on', x === b));
  }));
  $('#linesBtn').addEventListener('click', e => {
    showLines = !showLines; e.currentTarget.classList.toggle('on', showLines);
    if (svgLayers) svgLayers.gLines.style.display = showLines ? '' : 'none';
  });
  document.querySelectorAll('[data-side-btn]').forEach(b => b.addEventListener('click', () => {
    const cur = NODES[location.hash.replace(/^#\/?/, '')] ;
    const want = b.dataset.sideBtn;
    if (cur && cur.side === want) return;
    location.hash = '#/' + (cur && cur.see ? cur.see : (want === 'off' ? 'o-start' : 'd-start'));
  }));
  $('#themeBtn').addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const nx = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nx);
    try { localStorage.setItem('mfhfb:theme', nx); } catch (err) {}
  });
  $('#copyBtn').addEventListener('click', () => {
    const url = location.href;
    (navigator.clipboard ? navigator.clipboard.writeText(url) : Promise.reject()).then(() => toast('Link kopiert'), () => toast(url));
  });
  function toast(t) { const n = $('#toast'); n.textContent = t; n.hidden = false; clearTimeout(toast.h); toast.h = setTimeout(() => { n.hidden = true; }, 1800); }
  document.addEventListener('keydown', e => { if (e.code === 'Space' && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) { e.preventDefault(); playing ? stop() : play(); } });

  window.addEventListener('hashchange', route);
  renderGlossary();
  route();
  if (typeof window !== 'undefined') window.__fd = { buildScene };
})();
