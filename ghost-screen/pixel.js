// ============================================================
//  GHOST SCREEN — Pixel-Ansicht (22.11.2026)
// ============================================================
//  Zweite Darstellung derselben Simulation im Retro-Look:
//  kleine Pixelspieler (selbst gezeichnet, keine fremden Grafiken),
//  Laufanimation, Dribbling, Pässe mit Bogen, Würfe in den erhöhten
//  Korb, „KORB!“-Effekt. Gezeichnet auf ein kleines Canvas (256×184),
//  das per CSS hochskaliert wird (image-rendering: pixelated).
//  Sicht von der Mittellinie auf den Korb, leicht geneigt.
// ============================================================
(function () {
  const GS = window.GS;
  const W = 256, H = 184, MX = 16.4, MY = 12.4, OX = (W - 15.2 * MX) / 2, TOP = 36;
  const RIMH = 25, HAND = 9;
  const sx = x => OX + (x + 7.6) * MX;
  const sy = y => TOP + y * MY;

  const C = {
    crowdBg: '#1a2036', wall: '#2b3554', apron: '#24324f', floor: '#dca46a', plank: '#cc915a', paint: '#3f6fa6', paintPlank: '#3a659a',
    line: '#fff8ea', rim: '#ff6a1a', board: '#e9eef7', boardEdge: '#9aa6bd', net: '#ffffff',
    off: '#e84a0c', offDark: '#a63206', offTrim: '#ffd2b8', def: '#1d3f73', defDark: '#0d1f3d', defTrim: '#9fc0ff',
    shoe: '#f4f4f4', shoeD: '#2a2a2a', shadow: 'rgba(0,0,0,.28)', open: '#2ee66b', route: '#ffe066', pass: '#ffffff', ball: '#e2721f', ballD: '#8a3a0a',
  };
  const SKIN = ['#f3cfa9', '#e0ac7e', '#c58a5c', '#9b623a', '#6e4224', '#f0bf98'];
  const HAIR = ['#2a1b12', '#5a3a1e', '#c99a3e', '#121212', '#7a3f1d', '#d8c38a'];

  // 3×5-Pixelschrift
  const FONT = {
    '0': '111101101101111', '1': '010110010010111', '2': '111001111100111', '3': '111001111001111', '4': '101101111001001',
    '5': '111100111001111', '6': '111100111101111', '7': '111001010010010', '8': '111101111101111', '9': '111101111001111',
    'K': '101110100110101', 'O': '111101101101111', 'R': '110101110101101', 'B': '110101110101110', '!': '010010010000010',
    'D': '110101101101110', 'E': '111100110100111', 'I': '111010010010111', 'X': '101101010101101', 'F': '111100110100100',
    'W': '101101101111101', 'U': '101101101101111', 'A': '010101111101101', 'L': '100100100100111', 'T': '111010010010010',
    'G': '111100101101111', 'S': '111100111001111', 'P': '111101111100100', 'N': '110101101101101', 'Y': '101101010010010',
    'M': '101111111101101', 'H': '101101111101101', 'C': '111100100100111', 'V': '101101101101010', ' ': '000000000000000', '-': '000000111000000',
  };
  function text(ctx, str, x, y, color, shadow) {
    let cx = Math.round(x);
    for (const ch of str) {
      const g = FONT[ch] || FONT[' '];
      for (let i = 0; i < 15; i++) if (g[i] === '1') {
        if (shadow) { ctx.fillStyle = shadow; ctx.fillRect(cx + (i % 3) + 1, Math.round(y) + Math.floor(i / 3) + 1, 1, 1); }
        ctx.fillStyle = color; ctx.fillRect(cx + (i % 3), Math.round(y) + Math.floor(i / 3), 1, 1);
      }
      cx += 4;
    }
  }
  const textW = str => str.length * 4 - 1;

  // Kleiner Zufall mit festem Startwert (Zuschauer sehen immer gleich aus)
  function rng(seed) { let s = seed; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }

  // ---------- Statischer Hintergrund (einmal gezeichnet) ----------
  let bg = null;
  function buildBg() {
    bg = document.createElement('canvas'); bg.width = W; bg.height = H;
    const g = bg.getContext('2d');
    // Zuschauer
    g.fillStyle = C.crowdBg; g.fillRect(0, 0, W, 22);
    const r = rng(7), cols = ['#e84a0c', '#ffffff', '#ffd166', '#4cc9f0', '#f72585', '#90be6d', '#13294b', '#c0c0c0', '#ff9f1c'];
    for (let row = 0; row < 4; row++) for (let x = 1 + (row % 2) * 2; x < W - 1; x += 4) {
      if (r() < 0.12) continue;
      const y = 2 + row * 5;
      g.fillStyle = SKIN[Math.floor(r() * SKIN.length)]; g.fillRect(x, y, 2, 2);
      g.fillStyle = cols[Math.floor(r() * cols.length)]; g.fillRect(x - 0.5 | 0, y + 2, 3, 2);
    }
    g.fillStyle = C.wall; g.fillRect(0, 21, W, 3);
    for (let x = 6; x < W; x += 34) { g.fillStyle = '#e84a0c'; g.fillRect(x, 22, 14, 1); }
    g.fillStyle = C.apron; g.fillRect(0, 24, W, H - 24);
    // Boden mit Dielen
    const x0 = Math.round(sx(-7.5)), x1 = Math.round(sx(7.5)), y0 = Math.round(sy(0));
    g.fillStyle = C.floor; g.fillRect(x0, y0, x1 - x0, H - y0);
    g.fillStyle = C.plank; for (let y = y0 + 3; y < H; y += 4) g.fillRect(x0, y, x1 - x0, 1);
    // Zone
    const px0 = Math.round(sx(-2.45)), px1 = Math.round(sx(2.45)), py1 = Math.round(sy(5.8));
    g.fillStyle = C.paint; g.fillRect(px0, y0, px1 - px0, py1 - y0);
    g.fillStyle = C.paintPlank; for (let y = y0 + 3; y < py1; y += 4) g.fillRect(px0, y, px1 - px0, 1);
    // Linien
    g.fillStyle = C.line;
    const dot = (x, y) => g.fillRect(Math.round(sx(x)), Math.round(sy(y)), 1, 1);
    const seg = (xa, ya, xb, yb) => { const n = Math.ceil(Math.hypot((xb - xa) * MX, (yb - ya) * MY)); for (let i = 0; i <= n; i++) dot(xa + (xb - xa) * i / n, ya + (yb - ya) * i / n); };
    const arc = (cx, cy, rad, a0, a1, dash) => { const n = Math.ceil(rad * MX * Math.abs(a1 - a0)); for (let i = 0; i <= n; i++) { if (dash && Math.floor(i / 3) % 2) continue; const a = a0 + (a1 - a0) * i / n; dot(cx + Math.cos(a) * rad, cy + Math.sin(a) * rad); } };
    seg(-7.5, 0, 7.5, 0); seg(-7.5, 0, -7.5, 11); seg(7.5, 0, 7.5, 11);
    seg(-2.45, 0, -2.45, 5.8); seg(2.45, 0, 2.45, 5.8); seg(-2.45, 5.8, 2.45, 5.8);
    arc(0, 5.8, 1.8, 0, Math.PI); arc(0, 5.8, 1.8, Math.PI, 2 * Math.PI, true);
    seg(-6.6, 0, -6.6, 2.99); seg(6.6, 0, 6.6, 2.99);
    const a = Math.atan2(2.99 - 1.575, 6.6);
    arc(0, 1.575, 6.75, a, Math.PI - a);
    arc(0, 1.575, 1.25, 0, Math.PI);
  }

  // ---------- Korb ----------
  function drawHoop(ctx, swish) {
    const cx = Math.round(sx(0)), floorY = Math.round(sy(GS.RIM[1])), ry = floorY - RIMH;
    // Ständer hinter der Grundlinie
    ctx.fillStyle = '#56607a'; ctx.fillRect(cx - 1, ry - 14, 2, Math.round(sy(-0.4)) - (ry - 14));
    ctx.fillStyle = '#3c4560'; ctx.fillRect(cx - 4, Math.round(sy(-0.4)), 8, 2);
    // Brett
    ctx.fillStyle = C.boardEdge; ctx.fillRect(cx - 12, ry - 14, 24, 13);
    ctx.fillStyle = C.board; ctx.fillRect(cx - 11, ry - 13, 22, 11);
    ctx.fillStyle = C.rim; ctx.fillRect(cx - 4, ry - 8, 8, 1); ctx.fillRect(cx - 4, ry - 8, 1, 5); ctx.fillRect(cx + 3, ry - 8, 1, 5);
    // Netz
    ctx.fillStyle = swish ? '#ffe066' : C.net;
    for (let i = 0; i < 6; i++) { const w = 7 - Math.floor(i / 2); for (let x = -w / 2; x < w / 2; x += 2) ctx.fillRect(Math.round(cx + x + (i % 2)), ry + 1 + i, 1, 1); }
    // Ring
    ctx.fillStyle = C.rim; ctx.fillRect(cx - 4, ry - 1, 9, 1); ctx.fillRect(cx - 4, ry + 1, 9, 1); ctx.fillRect(cx - 5, ry, 1, 1); ctx.fillRect(cx + 5, ry, 1, 1);
    return { x: cx, y: ry };
  }

  // ---------- Pixelspieler ----------
  function sprite(ctx, o) {
    const x = Math.round(o.x), y = Math.round(o.y), f = o.face < 0 ? -1 : 1;
    const team = o.team === 'off' ? [C.off, C.offDark, C.offTrim] : [C.def, C.defDark, C.defTrim];
    const px = (dx, dy, w, h, col) => { ctx.fillStyle = col; const ax = f > 0 ? x + dx : x - dx - w + 1; ctx.fillRect(ax, y + dy, w, h); };
    // Schatten / frei-Ring
    ctx.fillStyle = C.shadow; ctx.fillRect(x - 4, y, 9, 2); ctx.fillRect(x - 3, y - 1, 7, 1); ctx.fillRect(x - 3, y + 2, 7, 1);
    if (o.open > 0) {
      ctx.globalAlpha = Math.min(1, o.open);
      ctx.fillStyle = C.open;
      for (let i = 0; i < 24; i++) { const a = i / 24 * Math.PI * 2; ctx.fillRect(Math.round(x + Math.cos(a) * 7), Math.round(y + 0.5 + Math.sin(a) * 3), 1, 1); }
      ctx.globalAlpha = 1;
    }
    const step = o.moving ? o.frame : 0;
    // Beine + Schuhe
    const lA = step === 1 ? -1 : step === 2 ? 1 : 0;
    const stance = o.pose === 'screen' ? 1 : 0;
    px(-2 + lA - stance, -4, 2, 3, o.skin); px(1 - lA + stance, -4, 2, 3, o.skin);
    px(-2 + lA - stance, -1, 2, 1, C.shoe); px(1 - lA + stance, -1, 2, 1, C.shoe);
    px(-3 + lA - stance, -1, 1, 1, C.shoeD); px(3 - lA + stance, -1, 1, 1, C.shoeD);
    // Hose
    px(-2, -6, 5, 2, team[1]);
    // Trikot
    px(-3, -11, 7, 5, team[0]);
    px(-3, -11, 7, 1, team[2]);
    px(0, -9, 1, 2, team[2]);
    // Arme
    if (o.pose === 'up') { px(-4, -16, 1, 6, o.skin); px(4, -16, 1, 6, o.skin); }
    else if (o.pose === 'shoot') { px(1, -18, 1, 7, o.skin); px(2, -18, 1, 7, o.skin); px(-4, -10, 1, 3, o.skin); }
    else if (o.pose === 'screen') { px(-3, -9, 7, 1, o.skin); px(-4, -11, 1, 3, o.skin); px(4, -11, 1, 3, o.skin); }
    else { const sw = o.moving ? (step === 1 ? 1 : -1) : 0; px(-4, -11 + (sw > 0 ? 1 : 0), 1, 4, o.skin); px(4, -11 + (sw < 0 ? 1 : 0), 1, 4, o.skin); }
    // Kopf
    px(-2, -15, 4, 4, o.skin);
    px(-2, -16, 4, 2, o.hair); px(-2, -15, 1, 2, o.hair);
    px(1, -13, 1, 1, '#1a1a1a');
    // Nummer
    const label = o.label;
    const lw = textW(label) + 2, lx = x - Math.floor(lw / 2), ly = y - (o.pose === 'up' || o.pose === 'shoot' ? 26 : 23);
    ctx.fillStyle = o.team === 'off' ? C.off : C.def; ctx.fillRect(lx, ly, lw, 7);
    ctx.fillStyle = 'rgba(0,0,0,.35)'; ctx.fillRect(lx, ly + 7, lw, 1);
    text(ctx, label, lx + 1, ly + 1, '#ffffff');
  }

  function ballSprite(ctx, x, y, elev, shadow) {
    if (shadow) { ctx.fillStyle = C.shadow; ctx.fillRect(Math.round(x) - 1, Math.round(y), 3, 1); }
    const bx = Math.round(x) - 1, by = Math.round(y - elev) - 2;
    ctx.fillStyle = C.ballD; ctx.fillRect(bx, by, 3, 3);
    ctx.fillStyle = C.ball; ctx.fillRect(bx, by, 2, 2);
    ctx.fillStyle = '#ffb27a'; ctx.fillRect(bx, by, 1, 1);
  }

  // ---------- Bild ----------
  const skinOf = id => SKIN[(id.charCodeAt(1) * 7 + (id[0] === 'X' ? 3 : 0)) % SKIN.length];
  const hairOf = id => HAIR[(id.charCodeAt(1) * 5 + (id[0] === 'X' ? 2 : 0)) % HAIR.length];

  function render(canvas, o) {
    if (!bg) buildBg();
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(bg, 0, 0);
    const c = o.c, fr = o.fr, t = o.t;
    const prev = o.prevFr;
    // Laufwege des Schritts (gepunktet)
    if (o.lines) {
      const [ta, tb] = o.lines;
      const f0 = Math.floor(ta / GS.DT), f1 = Math.min(c.frames.length - 1, Math.ceil(tb / GS.DT));
      ctx.fillStyle = C.route;
      c.oIds.forEach(id => {
        const a = c.frames[f0].o[id], b = c.frames[f1].o[id];
        if (GS.hyp(a, b) < 0.5) return;
        for (let f = f0; f <= f1; f += 3) { const p = c.frames[f].o[id]; ctx.fillRect(Math.round(sx(p[0])), Math.round(sy(p[1])), 1, 1); }
        const e = c.frames[f1].o[id]; ctx.fillRect(Math.round(sx(e[0])) - 1, Math.round(sy(e[1])) - 1, 3, 3);
      });
      ctx.fillStyle = C.pass;
      c.ballEv.forEach(e => { if (e.pass && e.t >= ta - 0.05 && e.t < tb) for (let u = 0; u <= 1; u += 0.06) { const p = c.passPoint(e, u); ctx.fillRect(Math.round(sx(p[0])), Math.round(sy(p[1])), 1, 1); } });
    }
    // Screens
    c.screens.forEach(s => {
      if (t < s.t0 || t > s.t1) return;
      ctx.fillStyle = s.ghost ? 'rgba(255,224,102,.6)' : C.route;
      for (let k = -4; k <= 4; k++) ctx.fillRect(Math.round(sx(s.at[0] + s.dir[0] * k * 0.11)), Math.round(sy(s.at[1] + s.dir[1] * k * 0.11)), 1, 1);
    });
    // Wurf-Infos
    const shot = c.ballEv.find(e => e.shot);
    const swish = shot && t >= shot.t1 && t < shot.t1 + 1.2;
    const hoop = drawHoop(ctx, swish);
    const holder = fr.ball.mode === 'hold' ? fr.ball.who : null;
    // Spieler sammeln
    const list = [];
    const add = (id, team) => {
      const p = team === 'off' ? fr.o[id] : fr.d[id];
      const q = prev ? (team === 'off' ? prev.o[id] : prev.d[id]) : p;
      const vx = p[0] - q[0], vy = p[1] - q[1], sp = Math.hypot(vx, vy) / 0.08;
      let pose = null;
      if (team === 'off') {
        if (shot && shot.shot === id && t >= shot.t - 0.25 && t < shot.t + 0.35) pose = 'shoot';
        else if (c.screens.some(s => s.by === id && t >= s.t0 && t <= s.t1 && !s.ghost)) pose = 'screen';
      } else if (holder && GS.hyp(p, fr.o[holder]) < 1.8) pose = 'up';
      else if (shot && t >= shot.t - 0.1 && t < shot.t + 0.4 && GS.hyp(p, fr.o[shot.shot]) < 2.2) pose = 'up';
      let open = 0;
      if (team === 'off' && c.hasD && o.actors && o.actors.has(id)) open = Math.max(0, Math.min(1, (GS.separation(fr, id) - 1.6) / 0.6));
      list.push({ id, team, x: sx(p[0]), y: sy(p[1]), face: Math.abs(vx) > 0.01 ? vx : (team === 'def' ? (fr.o['O' + id.slice(1)] ? fr.o['O' + id.slice(1)][0] - p[0] : 1) : (GS.RIM[0] - p[0]) || 1),
        moving: sp > 0.6, frame: 1 + Math.floor(t * (sp > 4 ? 9 : 6)) % 2, pose, open, skin: skinOf(id), hair: hairOf(id), label: team === 'off' ? id.slice(1) : 'X' + id.slice(1) });
    };
    c.oIds.forEach(id => add(id, 'off'));
    c.dIds.forEach(id => add(id, 'def'));
    list.sort((a, b) => a.y - b.y);
    // Ball bestimmen
    let ball = null;
    const b = fr.ball;
    if (b.p && b.mode === 'hold' && holder) {
      const me = list.find(s => s.id === holder);
      const dir = me.face < 0 ? -1 : 1;
      if (me.pose === 'shoot') ball = { x: me.x + 1.5 * dir, y: me.y, elev: 19, shadow: false, front: true };
      else if (me.moving) ball = { x: me.x + 5 * dir, y: me.y, elev: Math.abs(Math.cos(t * 9.5)) * HAND, shadow: true, front: true };
      else ball = { x: me.x + 5 * dir, y: me.y, elev: HAND - 1, shadow: true, front: true };
    } else if (b.p && b.mode === 'pass') {
      const e = c.ballEv.find(ev => ev.pass && t >= ev.t && t < ev.t1);
      const z = b.z || 0;
      ball = { x: sx(b.p[0]), y: sy(b.p[1]), elev: HAND + (e && e.lob ? z * 14 : z * 10), shadow: true };
    } else if (b.p && b.mode === 'shot' && shot) {
      const u = Math.max(0, Math.min(1, (t - shot.t) / (shot.t1 - shot.t)));
      const p0 = c.opos(shot.shot, shot.t);
      const x0 = sx(p0[0]) + 2, y0 = sy(p0[1]);
      const fx = x0 + (hoop.x - x0) * u, floorY = y0 + (sy(GS.RIM[1]) - y0) * u;
      const h = shot.kind === 'layup' ? 6 : shot.kind === 'jumper' ? 22 : 30;
      ball = { x: fx, y: floorY, elev: 19 + (RIMH - 19) * u + Math.sin(Math.PI * u) * h, shadow: true };
    } else if (shot && t >= shot.t1 && t < shot.t1 + 0.45) {
      const u = (t - shot.t1) / 0.45;
      ball = { x: hoop.x, y: sy(GS.RIM[1]), elev: RIMH * (1 - u), shadow: true };
    }
    // Zeichnen: Spieler, Ball vor dem Ballführer
    list.forEach(s => {
      sprite(ctx, s);
      if (ball && ball.front && s.id === holder) { ballSprite(ctx, ball.x, ball.y, ball.elev, ball.shadow); ball.done = true; }
    });
    if (ball && !ball.done) ballSprite(ctx, ball.x, ball.y, ball.elev, ball.shadow);
    // KORB!
    if (swish) {
      const msg = shot.kind === 'three' ? 'DREIER!' : 'KORB!';
      const k = (t - shot.t1) / 1.2;
      const yy = Math.round(sy(3.6)) - Math.round(k * 8);
      const scale = 2;
      const tmp = document.createElement('canvas'); tmp.width = textW(msg) + 2; tmp.height = 7;
      text(tmp.getContext('2d'), msg, 0, 0, '#ffe066', '#7a2a00');
      ctx.globalAlpha = k > 0.75 ? (1 - k) / 0.25 : 1;
      ctx.drawImage(tmp, Math.round(hoop.x - tmp.width * scale / 2), yy, tmp.width * scale, tmp.height * scale);
      ctx.globalAlpha = 1;
    }
  }

  GS.pixel = { W, H, render };
})();
