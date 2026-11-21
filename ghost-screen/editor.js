// ============================================================
//  GHOST SCREEN — Zeichen-Editor (21.11.2026)
// ============================================================
//  Aufstellung: Spieler ziehen, Formation wählen, Ballführer festlegen.
//  Schritte: Spieler antippen → auf das Feld tippen = Laufweg-Punkte.
//  Punkte lassen sich ziehen. Pro Spieler „am Ende Screen stellen“,
//  für den Ballführer Pass oder Wurf am Ende des Schritts.
//  Speichern im Browser (customs.js), Testen = Ansicht mit Stufen.
// ============================================================
(function () {
  const GS = window.GS, U = GS.ui;
  const $ = id => document.getElementById(id);
  const esc = U.esc, el = U.el;
  const OIDS = ['O1', 'O2', 'O3', 'O4', 'O5'];
  const clampPt = p => [Math.max(-7.3, Math.min(7.3, Math.round(p[0] * 10) / 10)), Math.max(0.3, Math.min(10.3, Math.round(p[1] * 10) / 10))];

  const E = { cp: null, k: -1, sel: null, mode: null, undo: [], dirty: false, drag: null };

  function open(id) {
    const found = id ? GS.loadCustoms().find(x => x.id === id) : null;
    E.cp = found ? JSON.parse(JSON.stringify(found)) : GS.newCustom();
    E.isNew = !found;
    E.k = E.isNew ? -1 : 0; E.sel = null; E.mode = null; E.undo = []; E.dirty = false;
    document.title = (E.isNew ? 'Neues Play' : E.cp.name) + ' · Ghost Screen';
    renderShell(); renderAll();
    window.scrollTo({ top: 0 });
  }

  function snapshot() { E.undo.push(JSON.stringify(E.cp)); if (E.undo.length > 60) E.undo.shift(); E.dirty = true; }
  function undo() { if (!E.undo.length) return; E.cp = JSON.parse(E.undo.pop()); if (E.k >= E.cp.steps.length) E.k = E.cp.steps.length - 1; renderAll(); }
  const step = () => E.cp.steps[E.k];
  const state = () => GS.customStateAt(E.cp, Math.max(0, E.k));

  // ---------- Grundgerüst ----------
  function renderShell() {
    $('editor').innerHTML = `
      <div class="ed-top">
        <div class="ed-names">
          <input id="edName" class="ed-input ed-name" maxlength="40" placeholder="Name des Plays, z. B. Doppelblock" aria-label="Name des Plays">
          <input id="edShort" class="ed-input" maxlength="160" placeholder="Kurz: Worum geht es? (optional)" aria-label="Kurzbeschreibung">
        </div>
        <div class="ed-top-actions">
          <button type="button" class="gs-btn-ghost" data-ed="undo" title="Rückgängig">↶ Rückgängig</button>
          <button type="button" class="gs-btn-ghost" data-ed="close">Schließen</button>
          <button type="button" class="gs-btn-ghost" data-ed="save">💾 Speichern</button>
          <button type="button" class="gs-btn-primary" data-ed="test">▶ Speichern &amp; testen</button>
        </div>
      </div>
      <nav class="ed-steps" id="edSteps"></nav>
      <div class="ed-grid">
        <div class="ed-board-wrap">
          <svg id="edCourt" viewBox="-7.6 -0.45 15.2 10.95" role="img" aria-label="Spielfeld zum Zeichnen"></svg>
          <div class="ed-hint" id="edHint"></div>
        </div>
        <aside class="ed-panel" id="edPanel"></aside>
      </div>`;
    $('edName').value = E.cp.name === 'Neues Play' && E.isNew ? '' : E.cp.name;
    $('edShort').value = E.cp.short || '';
    $('edName').addEventListener('input', e => { E.cp.name = e.target.value; E.dirty = true; });
    $('edShort').addEventListener('input', e => { E.cp.short = e.target.value; E.dirty = true; });
    const svg = $('edCourt');
    U.courtBase(svg);
    E.layer = el('g', {}, svg);
    svg.addEventListener('pointerdown', onDown);
    svg.addEventListener('pointermove', onMove);
    svg.addEventListener('pointerup', onUp);
    svg.addEventListener('pointercancel', onUp);
  }

  function renderAll() { renderSteps(); renderPanel(); draw(); }

  function renderSteps() {
    $('edSteps').innerHTML = `<button type="button" class="gs-stage${E.k === -1 ? ' on' : ''}" data-ed="step" data-k="-1">Aufstellung</button>` +
      E.cp.steps.map((s, i) => `<button type="button" class="gs-stage${E.k === i ? ' on' : ''}" data-ed="step" data-k="${i}">Schritt ${i + 1}</button>`).join('') +
      `<button type="button" class="gs-stage ed-add" data-ed="add-step">＋ Schritt</button>`;
  }

  function renderPanel() {
    const P = $('edPanel');
    if (E.k === -1) {
      P.innerHTML = `<h3>Aufstellung</h3>
        <p class="ed-note">Zieh die Spieler auf ihre Startplätze oder nimm eine Formation.</p>
        <div class="ed-chips">${Object.keys(GS.FORMATIONS).map(f => `<button type="button" class="ed-chip" data-ed="formation" data-f="${esc(f)}">${esc(f)}</button>`).join('')}</div>
        <h4>Wer hat den Ball?</h4>
        <div class="ed-chips">${OIDS.map(id => `<button type="button" class="ed-chip${E.cp.ball === id ? ' on' : ''}" data-ed="ball" data-id="${id}">${id.slice(1)}</button>`).join('')}</div>
        <button type="button" class="gs-btn-primary ed-go" data-ed="step" data-k="0">Weiter: Schritt 1 zeichnen →</button>`;
      $('edHint').textContent = 'Spieler ziehen, um sie zu verschieben.';
      return;
    }
    const st = step(), s = state(), holder = s.ball;
    const sel = E.sel;
    let selBox = '';
    if (sel) {
      const mv = st.moves[sel];
      const n = mv ? mv.pts.length : 0;
      selBox = `<div class="ed-sel"><h4>Spieler ${sel.slice(1)}${sel === holder ? ' 🏀' : ''}</h4>
        <p class="ed-note">${n ? `${n} Punkt${n > 1 ? 'e' : ''} im Laufweg${sel === holder ? ' (mit Ball = Dribbling)' : ''}. Tippe weiter aufs Feld für mehr, Punkte kannst Du ziehen.` : 'Tippe aufs Feld, wo er hinlaufen soll – Punkt für Punkt.'}</p>
        <div class="ed-chips">
          <button type="button" class="ed-chip" data-ed="pt-back" ${n ? '' : 'disabled'}>↶ Letzter Punkt weg</button>
          <button type="button" class="ed-chip" data-ed="path-clear" ${n ? '' : 'disabled'}>Weg löschen</button>
        </div>
        <label class="ed-check"><input type="checkbox" data-ed="screen" ${mv && mv.screen ? 'checked' : ''} ${n ? '' : 'disabled'}> Am Ende einen Screen (Block) stellen</label>
        ${sel === holder ? `<div class="ed-chips">
          <button type="button" class="ed-chip${E.mode === 'pass' ? ' on' : ''}" data-ed="pass-mode">🏀 Pass zu …</button>
          <button type="button" class="ed-chip${st.shot === sel ? ' on' : ''}" data-ed="shot">🎯 Wurf</button></div>` : ''}
        <button type="button" class="ed-link" data-ed="deselect">Auswahl aufheben</button>
      </div>`;
    }
    const passTxt = st.pass ? `Pass ${st.pass[0].slice(1)} → ${st.pass[1].slice(1)} <button type="button" class="ed-x" data-ed="pass-del" aria-label="Pass löschen">✕</button>` : '–';
    const shotTxt = st.shot ? `Wurf von ${st.shot.slice(1)} <button type="button" class="ed-x" data-ed="shot-del" aria-label="Wurf löschen">✕</button>` : '–';
    P.innerHTML = `<h3>Schritt ${E.k + 1}</h3>
      <label class="ed-label">Was passiert hier? (Text für die Kinder)
        <textarea id="edText" class="ed-input" rows="3" maxlength="200" placeholder="z. B. 4 und 5 stellen einen Doppelblock für 2.">${esc(st.text || '')}</textarea></label>
      ${s.shot ? '<p class="ed-warn">Es wurde schon geworfen – nach dem Wurf passiert nichts mehr.</p>' : ''}
      ${sel ? selBox : `<p class="ed-note">👆 Tippe einen Spieler an, um seinen Laufweg in diesem Schritt zu zeichnen. Alle Laufwege eines Schritts passieren gleichzeitig, Pass und Wurf kommen am Ende des Schritts.</p>`}
      <div class="ed-summary"><div>Am Ende: ${passTxt}</div><div>${shotTxt}</div><div>Ball hat: ${holder.slice(1)}</div></div>
      <div class="ed-chips ed-step-actions">
        <button type="button" class="ed-chip" data-ed="add-step">＋ Neuer Schritt</button>
        ${E.cp.steps.length > 1 ? '<button type="button" class="ed-chip danger" data-ed="del-step">Schritt löschen</button>' : ''}
      </div>`;
    $('edText').addEventListener('input', e => { step().text = e.target.value; E.dirty = true; });
    $('edHint').textContent = E.mode === 'pass' ? 'Tippe den Mitspieler an, der den Pass bekommt.' : sel ? `Zeichnen für Spieler ${sel.slice(1)}: aufs Feld tippen.` : 'Spieler antippen zum Zeichnen.';
  }

  // ---------- Zeichnen ----------
  function zig(pts) {
    const out = [pts[0]]; let side = 1;
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1], b = pts[i], l = GS.hyp(a, b), n = Math.max(1, Math.floor(l / 0.32));
      const dx = (b[0] - a[0]) / l, dy = (b[1] - a[1]) / l;
      for (let j = 1; j < n; j++) { const px = a[0] + dx * l * j / n, py = a[1] + dy * l * j / n; out.push([px - dy * 0.13 * side, py + dx * 0.13 * side]); side = -side; }
      out.push(b);
    }
    return out;
  }
  const d = pts => pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(2) + ' ' + p[1].toFixed(2)).join(' ');
  function bar(g, at, from, cls) {
    const l = GS.hyp(at, from) || 1, ux = (at[0] - from[0]) / l, uy = (at[1] - from[1]) / l;
    const c = [at[0] + ux * 0.1, at[1] + uy * 0.1];
    el('path', { d: `M ${c[0] - uy * 0.45} ${c[1] + ux * 0.45} L ${c[0] + uy * 0.45} ${c[1] - ux * 0.45}`, class: cls }, g);
  }

  function draw() {
    const g = E.layer; g.innerHTML = '';
    if (E.k === -1) {
      OIDS.forEach(id => player(g, id, E.cp.start[id], id === E.cp.ball));
      return;
    }
    const s = state(), st = step(), holder = s.ball;
    // vorheriger Schritt zart
    if (E.k > 0) {
      const prev = E.cp.steps[E.k - 1], ps = GS.customStateAt(E.cp, E.k - 1);
      for (const id in prev.moves) { const pts = [ps.pos[id]].concat(prev.moves[id].pts); el('path', { d: d(pts), class: 'ed-prev' }, g); }
    }
    // Screens aus dem letzten Schritt stehen noch
    if (E.k > 0) {
      const prev = E.cp.steps[E.k - 1], ps = GS.customStateAt(E.cp, E.k - 1);
      for (const id in prev.moves) {
        const mv = prev.moves[id]; if (!mv.screen || !mv.pts.length || st.moves[id]) continue;
        const pts = [ps.pos[id]].concat(mv.pts);
        bar(g, s.pos[id], pts[pts.length - 2], 'scr live');
      }
    }
    // aktuelle Laufwege
    const ends = {};
    OIDS.forEach(id => { const mv = st.moves[id]; ends[id] = mv && mv.pts.length ? mv.pts[mv.pts.length - 1] : s.pos[id]; });
    for (const id in st.moves) {
      const mv = st.moves[id]; if (!mv.pts.length) continue;
      const pts = [s.pos[id]].concat(mv.pts);
      el('path', { d: d(id === holder ? zig(pts) : pts), class: 'dg-o' + (E.sel === id ? ' ed-active' : ''), 'marker-end': mv.screen ? '' : 'url(#arrO)' }, g);
      if (mv.screen) bar(g, pts[pts.length - 1], pts[pts.length - 2], 'scr');
      el('circle', { cx: ends[id][0], cy: ends[id][1], r: 0.36, class: 'ed-ghost' }, g);
      const t = el('text', { x: ends[id][0], y: ends[id][1] + 0.13, class: 'ed-ghost-t' }, g); t.textContent = id.slice(1);
    }
    if (st.pass) {
      const a = ends[st.pass[0]], b = ends[st.pass[1]];
      const l = GS.hyp(a, b) || 1, ux = (b[0] - a[0]) / l, uy = (b[1] - a[1]) / l;
      el('path', { d: `M ${a[0] + ux * 0.5} ${a[1] + uy * 0.5} L ${b[0] - ux * 0.5} ${b[1] - uy * 0.5}`, class: 'dg-pass', 'marker-end': 'url(#arrP)' }, g);
    }
    if (st.shot) { const a = ends[st.shot]; el('path', { d: `M ${a[0]} ${a[1]} L ${GS.RIM[0]} ${GS.RIM[1]}`, class: 'dg-shot' }, g); }
    // Spieler am Anfang des Schritts
    OIDS.forEach(id => player(g, id, s.pos[id], id === holder));
    // ziehbare Punkte des gewählten Spielers
    if (E.sel && st.moves[E.sel]) st.moves[E.sel].pts.forEach((p, i) => { el('circle', { cx: p[0], cy: p[1], r: 0.22, class: 'ed-handle', 'data-h': i }, g); });
  }

  function player(g, id, p, hasBall) {
    const grp = el('g', { class: 'pl off ed-pl' + (E.sel === id ? ' sel' : '') + (E.mode === 'pass' && id !== state().ball ? ' target' : ''), transform: `translate(${p[0]} ${p[1]})`, 'data-p': id }, g);
    if (E.sel === id) el('circle', { r: 0.68, class: 'ed-selring' }, grp);
    el('circle', { r: 0.45 }, grp);
    const t = el('text', { y: 0.18 }, grp); t.textContent = id.slice(1);
    if (hasBall) el('circle', { cx: 0.33, cy: 0.3, r: 0.17, class: 'ball' }, grp);
  }

  // ---------- Zeiger ----------
  function svgPt(e) {
    const svg = $('edCourt'), pt = svg.createSVGPoint();
    pt.x = e.clientX; pt.y = e.clientY;
    const r = pt.matrixTransform(svg.getScreenCTM().inverse());
    return [r.x, r.y];
  }
  function onDown(e) {
    const p = svgPt(e);
    const h = e.target.closest('[data-h]'), pl = e.target.closest('[data-p]');
    if (h && E.sel) { snapshot(); E.drag = { kind: 'handle', i: Number(h.dataset.h) }; $('edCourt').setPointerCapture(e.pointerId); return; }
    if (pl) {
      const id = pl.dataset.p;
      if (E.k === -1) { snapshot(); E.drag = { kind: 'start', id }; $('edCourt').setPointerCapture(e.pointerId); return; }
      if (E.mode === 'pass') {
        const holder = state().ball;
        if (id !== holder) { snapshot(); step().pass = [holder, id]; step().shot = null; E.mode = null; renderPanel(); draw(); }
        return;
      }
      E.sel = E.sel === id ? null : id; E.mode = null; renderPanel(); draw(); return;
    }
    if (E.k >= 0 && E.sel) {
      snapshot();
      const st = step();
      st.moves[E.sel] = st.moves[E.sel] || { pts: [] };
      if (st.moves[E.sel].pts.length >= 20) return;
      st.moves[E.sel].pts.push(clampPt(p));
      renderPanel(); draw();
    } else if (E.k >= 0) {
      $('edHint').textContent = 'Erst einen Spieler antippen, dann aufs Feld tippen.';
    }
  }
  function onMove(e) {
    if (!E.drag) return;
    const p = clampPt(svgPt(e));
    if (E.drag.kind === 'start') E.cp.start[E.drag.id] = p;
    else if (E.drag.kind === 'handle') step().moves[E.sel].pts[E.drag.i] = p;
    draw();
  }
  function onUp() { if (E.drag) { E.drag = null; draw(); } }

  // ---------- Knöpfe ----------
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-ed]');
    if (!b || $('editor').hidden) return;
    const a = b.dataset.ed;
    if (a === 'screen') return; // Checkbox: über change
    switch (a) {
      case 'step': E.k = Number(b.dataset.k); E.sel = null; E.mode = null; renderAll(); break;
      case 'add-step': snapshot(); E.cp.steps.splice(E.k + 1, 0, { text: '', moves: {}, pass: null, shot: null }); E.k = E.k + 1; E.sel = null; E.mode = null; renderAll(); break;
      case 'del-step': if (E.cp.steps.length > 1) { snapshot(); E.cp.steps.splice(E.k, 1); E.k = Math.max(0, E.k - 1); E.sel = null; renderAll(); } break;
      case 'formation': snapshot(); E.cp.start = JSON.parse(JSON.stringify(GS.FORMATIONS[b.dataset.f])); draw(); break;
      case 'ball': snapshot(); E.cp.ball = b.dataset.id; renderPanel(); draw(); break;
      case 'pt-back': { const mv = step().moves[E.sel]; if (mv && mv.pts.length) { snapshot(); mv.pts.pop(); if (!mv.pts.length) delete step().moves[E.sel]; renderPanel(); draw(); } break; }
      case 'path-clear': snapshot(); delete step().moves[E.sel]; renderPanel(); draw(); break;
      case 'pass-mode': E.mode = E.mode === 'pass' ? null : 'pass'; renderPanel(); draw(); if (E.mode) $('edCourt').scrollIntoView({ block: 'nearest', behavior: 'smooth' }); break;
      case 'shot': snapshot(); step().shot = step().shot === E.sel ? null : E.sel; if (step().shot) step().pass = null; renderPanel(); draw(); break;
      case 'pass-del': snapshot(); step().pass = null; renderPanel(); draw(); break;
      case 'shot-del': snapshot(); step().shot = null; renderPanel(); draw(); break;
      case 'deselect': E.sel = null; E.mode = null; renderPanel(); draw(); break;
      case 'undo': undo(); break;
      case 'save': save(false); break;
      case 'test': save(true); break;
      case 'close':
        if (!E.dirty || confirm('Ungespeicherte Änderungen verwerfen?')) { E.dirty = false; location.hash = E.isNew ? '#/' : '#/eigen-' + E.cp.id + '/1'; }
        break;
    }
  });
  document.addEventListener('change', e => {
    if (e.target.matches('[data-ed="screen"]') && E.sel && step().moves[E.sel]) {
      snapshot(); if (e.target.checked) step().moves[E.sel].screen = true; else delete step().moves[E.sel].screen; draw();
    }
  });
  document.addEventListener('keydown', e => {
    if ($('editor').hidden) return;
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z' && !e.target.closest('input,textarea')) { e.preventDefault(); undo(); }
    if (e.key === 'Escape') { E.sel = null; E.mode = null; renderPanel(); draw(); }
  });

  function save(thenTest) {
    if (!E.cp.name || !E.cp.name.trim() || E.cp.name === 'Neues Play') { $('edName').focus(); U.toast('Gib dem Play erst einen Namen.'); return; }
    const hasMove = E.cp.steps.some(s => Object.keys(s.moves).length || s.pass || s.shot);
    if (!hasMove) { U.toast('Zeichne mindestens einen Laufweg, Pass oder Wurf.'); return; }
    const cp = GS.cleanCustom(E.cp);
    if (!GS.upsertCustom(cp)) { U.toast('Speichern ging nicht (Browser-Speicher voll oder gesperrt). Nutze Export.'); return; }
    E.cp = JSON.parse(JSON.stringify(cp)); E.dirty = false; E.isNew = false;
    U.renderLib();
    if (thenTest) location.hash = '#/eigen-' + cp.id + '/1';
    else U.toast('Gespeichert – in der Bibliothek unter „Eigene Plays“.');
  }

  window.addEventListener('beforeunload', e => { if (E.dirty && !$('editor').hidden) { e.preventDefault(); e.returnValue = ''; } });

  GS.editor = { open };
})();
