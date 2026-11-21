// ============================================================
//  GHOST SCREEN — Eigene Plays (21.11.2026)
// ============================================================
//  Format eines gezeichneten Plays (klein gehalten, passt in einen Link):
//   { v: 1, id, name, short,
//     start: { O1: [x, y], … O5 },          Aufstellung (Meter)
//     ball: 'O1',                            wer am Anfang den Ball hat
//     steps: [ { text,                       Erklärung zu diesem Schritt
//                moves: { O2: { pts: [[x, y], …], screen: true } },
//                pass: ['O1', 'O2'] | null,   Pass am Ende des Schritts
//                shot: 'O2' | null } ] }      Wurf am Ende des Schritts
//
//  Umrechnung in Stufen für die Engine: Alle Laufwege eines Schritts
//  laufen gleichzeitig, danach kommt der Pass, dann der nächste Schritt.
//  Stufe 2 = automatische Mann-Verteidigung (X1 deckt 1 …); die Engine
//  lässt Verteidiger nicht durch Screener laufen, dadurch wirken Screens.
//
//  Speicher: localStorage 'mfhfb:ghost:plays' (nur dieser Browser).
//  Teilen: #/p/<Code> (Base64 des JSON), Export/Import als .json-Datei.
//  Für alle sichtbar: Plays in vereins-plays.js (GS.VEREIN) eintragen.
// ============================================================
(function (root) {
  const GS = root.GS = root.GS || {};
  const RUN = 4.6, DRIBBLE = 3.8;
  const OIDS = ['O1', 'O2', 'O3', 'O4', 'O5'];
  const hyp = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
  const r1 = n => Math.round(n * 10) / 10;

  GS.FORMATIONS = {
    '5-Out': { O1: [0, 8.7], O2: [5.7, 6.0], O3: [-5.7, 6.0], O4: [-6.9, 1.3], O5: [6.9, 1.3] },
    '4-Out 1-In': { O1: [0, 8.7], O2: [5.7, 6.0], O3: [-5.7, 6.0], O4: [-6.9, 1.3], O5: [2.5, 2.2] },
    'Horns': { O1: [0, 8.8], O2: [6.9, 1.3], O3: [-6.9, 1.3], O4: [-2.5, 5.8], O5: [2.5, 5.8] },
    '1-4 High': { O1: [0, 8.8], O2: [5.7, 6.0], O3: [-5.7, 6.0], O4: [-2.5, 5.8], O5: [2.5, 5.8] },
    'Box': { O1: [0, 8.8], O2: [2.5, 5.8], O3: [-2.5, 5.8], O4: [-2.5, 2.2], O5: [2.5, 2.2] },
  };

  GS.newCustom = function () {
    return { v: 1, id: 'u' + Date.now().toString(36), name: 'Neues Play', short: '', start: JSON.parse(JSON.stringify(GS.FORMATIONS['5-Out'])), ball: 'O1', steps: [{ text: '', moves: {}, pass: null, shot: null }] };
  };

  // Wer hat zu Beginn von Schritt k den Ball? Und wo stehen alle?
  GS.customStateAt = function (cp, k) {
    const pos = {}; OIDS.forEach(id => { pos[id] = cp.start[id].slice(); });
    let ball = cp.ball, shot = false;
    for (let i = 0; i < k && i < cp.steps.length; i++) {
      const st = cp.steps[i];
      for (const id in st.moves) { const p = st.moves[id].pts; if (p.length) pos[id] = p[p.length - 1].slice(); }
      if (st.pass) ball = st.pass[1];
      if (st.shot) shot = true;
    }
    return { pos, ball, shot };
  };

  // ---------- Umrechnung in eine Aktion mit zwei Stufen ----------
  GS.customToPlay = function (cp, opts = {}) {
    const kf = {}; OIDS.forEach(id => { kf[id] = [[0, cp.start[id][0], cp.start[id][1]]]; });
    const pos = {}; OIDS.forEach(id => { pos[id] = cp.start[id].slice(); });
    const ball = [{ t: 0, hold: cp.ball }], steps = [], screens = [];
    let holder = cp.ball, T = 0.5, pendingScreens = [];
    const passDur = (a, b) => Math.max(0.35, hyp(a, b) / 11);
    cp.steps.forEach((st, i) => {
      const T0 = T;
      let D = Object.keys(st.moves).length ? 0.8 : 0.05;
      const ends = {};
      for (const id in st.moves) {
        const pts = st.moves[id].pts.filter(p => p && p.length === 2);
        if (!pts.length) continue;
        const v = id === holder ? DRIBBLE : RUN;
        let t = T0, cur = pos[id];
        kf[id].push([T0, cur[0], cur[1]]);
        pts.forEach(p => { t += Math.max(0.15, hyp(cur, p) / v); kf[id].push([t, p[0], p[1]]); cur = p; });
        ends[id] = t; pos[id] = cur.slice();
        D = Math.max(D, t - T0);
      }
      const Tend = T0 + D;
      // Screens aus dem letzten Schritt stehen, bis dieser Schritt fertig ist
      // (läuft der Screener selbst weiter, z. B. Roll, endet der Screen kurz danach)
      pendingScreens.forEach(s => { s.t1 = st.moves[s.by] ? T0 + 0.3 : Tend; screens.push(s); });
      pendingScreens = [];
      for (const id in st.moves) if (st.moves[id].screen && ends[id] !== undefined) pendingScreens.push({ by: id, t0: ends[id], t1: null });
      steps.push([T0, st.text && st.text.trim() ? st.text.trim() : `Schritt ${i + 1}`]);
      T = Tend + 0.15;
      if (st.pass && st.pass[0] === holder && st.pass[1] !== holder) {
        const [from, to] = st.pass;
        const dur = passDur(pos[from], pos[to]);
        // Läuft der Empfänger, kommt der Pass in den Lauf: er landet, wenn er ankommt
        let t = T;
        if (ends[to] !== undefined) t = Math.max(T0 + 0.2, ends[from] !== undefined ? ends[from] + 0.1 : T0, ends[to] - dur);
        ball.push({ t, pass: [from, to] });
        T = Math.max(T, t + dur + 0.15);
        if (ends[to] !== undefined) T = t + dur + 0.15;
        holder = to;
      }
      if (st.shot && st.shot === holder) {
        const d = hyp(pos[holder], GS.RIM);
        ball.push({ t: T, shot: holder, kind: d < 2.2 ? 'layup' : d < 6.6 ? 'jumper' : 'three' });
        T += 1.0;
      }
    });
    pendingScreens.forEach(s => { s.t1 = s.t0 + 1.2; screens.push(s); });
    const dur = T + 0.6;
    // Für wen ist der Screen? Der Mitspieler, der am nächsten vorbeiläuft
    const opos = (id, t) => GS.pathAt(kf[id], t);
    screens.forEach(s => {
      let best = null;
      OIDS.forEach(id => {
        if (id === s.by) return;
        // nur wer sich in der Zeit bewegt (sonst wäre der Nachbar im Doppelblock „gemeint“)
        if (hyp(opos(id, s.t0), opos(id, s.t1 + 0.6)) < 1) return;
        for (let t = s.t0; t <= s.t1 + 0.6; t += 0.1) { const d = hyp(opos(id, t), opos(s.by, s.t0)); if (!best || d < best.d) best = { d, id }; }
      });
      s.for = best ? best.id : (s.by === 'O1' ? 'O2' : 'O1');
    });
    const o = kf;
    // Mann-Deckung, etwas langsamer als die Angreifer: Verteidiger reagieren, Screens kosten Zeit
    const d = {}; OIDS.forEach((id, i) => { d['X' + (i + 1)] = [[0, 'man', id, { speed: 4.4 }]]; });
    const name = cp.name || 'Eigenes Play';
    return {
      id: opts.id || 'eigen-' + cp.id, name, cat: opts.cat || 'Eigene Plays', level: opts.level || 'Eigenes Play',
      short: cp.short || 'Selbst gezeichnet.', custom: cp, source: opts.source || 'local',
      why: cp.short || 'Selbst gezeichnetes Play. In Stufe 2 verteidigt jeder Verteidiger automatisch seinen Gegenspieler (Mann-Deckung) – so siehst Du, ob die Screens und Schnitte wirklich jemanden frei machen.',
      points: ['Grüner Ring = frei. Wird bei Stufe 2 niemand frei, ändere Laufwege oder Timing.', 'Screens wirken, wenn der Mitspieler eng am Screener vorbeiläuft.', 'Mit „Bearbeiten“ kannst Du jederzeit weiterzeichnen.'],
      stages: [
        { tab: 'Ohne Verteidigung', defense: false, dur, o, ball, screens, steps },
        { tab: 'Mit Verteidigung', dur, o, d, ball, screens, steps, screenDrag: true },
      ],
    };
  };

  // ---------- Speicher ----------
  const KEY = 'mfhfb:ghost:plays';
  GS.loadCustoms = function () { try { const a = JSON.parse(localStorage.getItem(KEY) || '[]'); return Array.isArray(a) ? a.filter(GS.validCustom) : []; } catch (e) { return []; } };
  GS.saveCustoms = function (list) { try { localStorage.setItem(KEY, JSON.stringify(list)); return true; } catch (e) { return false; } };
  GS.upsertCustom = function (cp) {
    const list = GS.loadCustoms(); const i = list.findIndex(x => x.id === cp.id);
    if (i >= 0) list[i] = cp; else list.unshift(cp);
    return GS.saveCustoms(list);
  };
  GS.deleteCustom = function (id) { GS.saveCustoms(GS.loadCustoms().filter(x => x.id !== id)); };

  // ---------- Prüfen, Runden, Code ----------
  const okPt = p => Array.isArray(p) && p.length === 2 && p.every(n => typeof n === 'number' && isFinite(n)) && Math.abs(p[0]) <= 8 && p[1] >= -1 && p[1] <= 12;
  GS.validCustom = function (cp) {
    if (!cp || typeof cp !== 'object' || !cp.start || !Array.isArray(cp.steps)) return false;
    if (!OIDS.every(id => okPt(cp.start[id]))) return false;
    if (!OIDS.includes(cp.ball)) return false;
    return cp.steps.every(st => st && typeof st === 'object' && st.moves && typeof st.moves === 'object' &&
      Object.keys(st.moves).every(id => OIDS.includes(id) && Array.isArray(st.moves[id].pts) && st.moves[id].pts.every(okPt)));
  };
  GS.cleanCustom = function (cp) {
    const s = x => String(x || '').replace(/[<>]/g, '').slice(0, 300);
    const out = { v: 1, id: String(cp.id || 'u' + Date.now().toString(36)).replace(/[^\w-]/g, '').slice(0, 24) || 'u' + Date.now().toString(36), name: s(cp.name).slice(0, 40) || 'Eigenes Play', short: s(cp.short).slice(0, 160), start: {}, ball: cp.ball, steps: [] };
    OIDS.forEach(id => { out.start[id] = cp.start[id].map(r1); });
    cp.steps.slice(0, 20).forEach(st => {
      const m = {};
      for (const id in st.moves) { const pts = st.moves[id].pts.slice(0, 20).map(p => p.map(r1)); if (pts.length) m[id] = st.moves[id].screen ? { pts, screen: true } : { pts }; }
      out.steps.push({ text: s(st.text).slice(0, 200), moves: m, pass: Array.isArray(st.pass) && st.pass.every(x => OIDS.includes(x)) ? st.pass.slice(0, 2) : null, shot: OIDS.includes(st.shot) ? st.shot : null });
    });
    return out;
  };
  GS.encodeCustom = function (cp) {
    const json = JSON.stringify(GS.cleanCustom(cp));
    const bytes = new TextEncoder().encode(json);
    let bin = ''; bytes.forEach(b => { bin += String.fromCharCode(b); });
    return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  };
  GS.decodeCustom = function (code) {
    try {
      const b = code.replace(/-/g, '+').replace(/_/g, '/');
      const bin = atob(b + '='.repeat((4 - b.length % 4) % 4));
      const cp = JSON.parse(new TextDecoder().decode(Uint8Array.from(bin, c => c.charCodeAt(0))));
      return GS.validCustom(cp) ? GS.cleanCustom(cp) : null;
    } catch (e) { return null; }
  };
  // Import: JSON-Text, Link oder Code
  GS.parseImport = function (text) {
    const t = String(text || '').trim();
    if (!t) return null;
    const m = t.match(/#\/p\/([\w-]+)/);
    if (m) return GS.decodeCustom(m[1]);
    if (t[0] === '{' || t[0] === '[') {
      try { const j = JSON.parse(t); const arr = Array.isArray(j) ? j : [j]; const ok = arr.filter(GS.validCustom).map(GS.cleanCustom); return ok.length ? (Array.isArray(j) ? ok : ok[0]) : null; } catch (e) { return null; }
    }
    return GS.decodeCustom(t);
  };
})(typeof window !== 'undefined' ? window : globalThis);
