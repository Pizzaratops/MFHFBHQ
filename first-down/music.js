// ============================================================
//  FIRST DOWN — 8-bit-Musik & Sounds (26.11.2026)
// ============================================================
//  Eigene Chiptune-Komposition, live per Web Audio API erzeugt
//  (keine Audiodateien, keine fremden Melodien). NES-Besetzung:
//  2× Rechteck (Melodie/Begleitung), Dreieck (Bass), Rauschen (Drums).
//  Startet erst nach einem Klick (Browser-Regel). An/Aus wird gemerkt.
// ============================================================
(function () {
  'use strict';
  const KEY = 'mfhfb:fd-sound';
  let on = true;
  try { on = localStorage.getItem(KEY) !== 'off'; } catch (e) {}
  let ac = null, master = null, musicGain = null, noiseBuf = null, timer = null, playing = false, nextT = 0, step = 0, duckUntil = 0;

  const SEMI = { C: -9, 'C#': -8, Db: -8, D: -7, 'D#': -6, Eb: -6, E: -5, F: -4, 'F#': -3, Gb: -3, G: -2, 'G#': -1, Ab: -1, A: 0, 'A#': 1, Bb: 1, B: 2 };
  const hz = n => { const m = /^([A-G][#b]?)(\d)$/.exec(n); return 440 * Math.pow(2, (SEMI[m[1]] + (m[2] - 4) * 12) / 12); };

  // ---------- Song: „Two-Minute Drill" (eigene Komposition) ----------
  // Einheit = Achtel. [Note, Länge in Achteln]; null = Pause.
  const LEAD = [
    ['G4', 1], ['C5', 1], ['E5', 1], ['G5', 2], ['E5', 1], ['G5', 2],
    ['F5', 1], ['E5', 1], ['D5', 1], ['C5', 1], ['D5', 2], ['G4', 2],
    ['A4', 1], ['C5', 1], ['F5', 1], ['A5', 2], ['G5', 1], ['F5', 1], ['E5', 1],
    ['D5', 2], ['E5', 1], ['D5', 1], ['C5', 4],
    ['E5', 1], ['E5', 1], ['E5', 1], ['G5', 2], ['E5', 1], ['C5', 2],
    ['F5', 1], ['F5', 1], ['F5', 1], ['A5', 2], ['F5', 1], ['D5', 2],
    ['G5', 1], ['F5', 1], ['E5', 1], ['D5', 1], ['C5', 1], ['D5', 1], ['E5', 1], ['G5', 1],
    ['C6', 2], ['G5', 2], ['C5', 2], [null, 2],
  ];
  const CHORDS = ['C', 'G', 'F', 'G', 'C', 'F', 'G', 'C'];
  const BASS = { C: ['C3', 'G3', 'C3', 'G3'], G: ['G2', 'D3', 'G2', 'D3'], F: ['F2', 'C3', 'F2', 'C3'] };
  const STAB = { C: ['E4', 'G4'], G: ['D4', 'B3'], F: ['F4', 'A4'] };
  const BPM = 138, EIGHTH = 60 / BPM / 2, BARS = 8;
  // Melodie in Achtel-Raster auflösen
  const leadGrid = [];
  LEAD.forEach(([n, l]) => { leadGrid.push({ n, l }); for (let i = 1; i < l; i++) leadGrid.push(null); });

  function ctx() {
    if (ac) return ac;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ac = new AC();
    master = ac.createGain(); master.gain.value = 0.16; master.connect(ac.destination);
    musicGain = ac.createGain(); musicGain.gain.value = 1; musicGain.connect(master);
    noiseBuf = ac.createBuffer(1, ac.sampleRate * 0.5, ac.sampleRate);
    const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return ac;
  }
  function tone(type, f, t, dur, vol, out, slide) {
    const o = ac.createOscillator(), g = ac.createGain();
    o.type = type; o.frequency.setValueAtTime(f, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(slide, t + dur);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + 0.005);
    g.gain.setValueAtTime(vol, t + Math.max(0.01, dur - 0.03)); g.gain.linearRampToValueAtTime(0, t + dur);
    o.connect(g); g.connect(out || master); o.start(t); o.stop(t + dur + 0.02);
  }
  function noise(t, dur, vol, hp, out) {
    const s = ac.createBufferSource(), f = ac.createBiquadFilter(), g = ac.createGain();
    s.buffer = noiseBuf; f.type = 'highpass'; f.frequency.value = hp;
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    s.connect(f); f.connect(g); g.connect(out || master); s.start(t); s.stop(t + dur + 0.02);
  }

  function scheduleStep(i, t) {
    const bar = Math.floor(i / 8) % BARS, e = i % 8, ch = CHORDS[bar];
    const L = leadGrid[i % leadGrid.length];
    if (L && L.n) tone('square', hz(L.n), t, L.l * EIGHTH * 0.92, 0.32, musicGain);
    if (e % 2 === 0) tone('triangle', hz(BASS[ch][e / 2]), t, EIGHTH * 1.8, 0.75, musicGain);
    if (e % 2 === 1) tone('square', hz(STAB[ch][(e >> 1) % 2]), t, EIGHTH * 0.45, 0.12, musicGain);
    // Drums: Kick 1+3, Snare 2+4, Hi-Hat jede Achtel
    if (e === 0 || e === 4) tone('triangle', 150, t, 0.09, 0.9, musicGain, 45);
    if (e === 2 || e === 6) noise(t, 0.12, 0.35, 1500, musicGain);
    noise(t, 0.03, 0.08, 7000, musicGain);
  }
  function tick() {
    while (nextT < ac.currentTime + 0.12) {
      if (nextT >= duckUntil) scheduleStep(step, nextT);
      nextT += EIGHTH; step = (step + 1) % (BARS * 8);
    }
  }
  function startMusic() {
    if (!on || !ctx()) return;
    if (ac.state === 'suspended') ac.resume();
    if (playing) return;
    playing = true; step = 0; nextT = ac.currentTime + 0.05;
    timer = setInterval(tick, 25);
  }
  function stopMusic() { playing = false; if (timer) clearInterval(timer); timer = null; }

  // ---------- Jingles & Effekte ----------
  function seq(notes, unit, type, vol, startAt) {
    let t = startAt || ac.currentTime + 0.02;
    notes.forEach(([n, l]) => { if (n) tone(type || 'square', hz(n), t, l * unit * 0.95, vol || 0.4); t += l * unit; });
    return t;
  }
  function duck(sec) { duckUntil = ac.currentTime + sec; }
  const FX = {
    touchdown() {
      duck(2.4);
      const t0 = ac.currentTime + 0.02;
      seq([['C5', 1], ['E5', 1], ['G5', 1], ['C6', 3], ['G5', 1], ['C6', 5]], 0.11, 'square', 0.42, t0);
      seq([['E4', 1], ['G4', 1], ['C5', 1], ['E5', 3], ['D5', 1], ['E5', 5]], 0.11, 'square', 0.2, t0);
      seq([['C3', 6], ['G2', 1], ['C3', 5]], 0.11, 'triangle', 0.8, t0);
      for (let i = 0; i < 6; i++) noise(t0 + i * 0.11, 0.08, 0.25, 2000);
    },
    firstdown() { duck(0.7); seq([['G5', 1], ['C6', 2]], 0.09, 'square', 0.35); },
    fieldgoal() { duck(1.1); seq([['C5', 1], ['G5', 1], ['C6', 1], ['E6', 3]], 0.1, 'square', 0.35); },
    miss() { duck(1); seq([['G4', 2], ['C4', 4]], 0.12, 'square', 0.3); },
    turnover() { duck(1.6); seq([['E4', 2], ['Eb4', 2], ['D4', 2], ['Db4', 6]], 0.12, 'square', 0.35); seq([['C3', 2], ['B2', 2], ['Bb2', 2], ['A2', 6]], 0.12, 'triangle', 0.7); },
    sack() { noise(ac.currentTime + 0.01, 0.25, 0.6, 200); tone('triangle', 120, ac.currentTime + 0.01, 0.2, 0.9, master, 40); },
    tackle() { noise(ac.currentTime + 0.01, 0.12, 0.35, 400); },
    incomplete() { tone('square', hz('E5'), ac.currentTime + 0.01, 0.1, 0.25); tone('square', hz('C5'), ac.currentTime + 0.12, 0.18, 0.25); },
    snap() { tone('square', 220, ac.currentTime + 0.01, 0.05, 0.25); noise(ac.currentTime + 0.01, 0.04, 0.2, 3000); },
    whistle() { const t = ac.currentTime + 0.01; const o = ac.createOscillator(), g = ac.createGain(), lfo = ac.createOscillator(), lg = ac.createGain(); o.type = 'square'; o.frequency.value = 2600; lfo.frequency.value = 28; lg.gain.value = 120; lfo.connect(lg); lg.connect(o.frequency); g.gain.setValueAtTime(0.0, t); g.gain.linearRampToValueAtTime(0.12, t + 0.02); g.gain.setValueAtTime(0.12, t + 0.35); g.gain.linearRampToValueAtTime(0, t + 0.42); o.connect(g); g.connect(master); o.start(t); lfo.start(t); o.stop(t + 0.45); lfo.stop(t + 0.45); },
    click() { tone('square', hz('A5'), ac.currentTime + 0.005, 0.04, 0.18); },
    right() { seq([['C6', 1], ['G6', 2]], 0.07, 'square', 0.3); },
    wrong() { seq([['C4', 1], ['C4', 2]], 0.08, 'square', 0.3); },
    win() { duck(3); seq([['C5', 1], ['C5', 1], ['C5', 1], ['C5', 3], ['Ab4', 3], ['Bb4', 3], ['C5', 2], ['Bb4', 1], ['C5', 6]], 0.1, 'square', 0.4); },
    lose() { duck(2.2); seq([['G4', 3], ['F#4', 3], ['F4', 3], ['E4', 8]], 0.13, 'square', 0.35); },
  };
  function fx(name) { if (!on || !ctx()) return; if (ac.state === 'suspended') ac.resume(); try { FX[name] && FX[name](); } catch (e) {} }

  function setOn(v) {
    on = v;
    try { localStorage.setItem(KEY, v ? 'on' : 'off'); } catch (e) {}
    if (v) startMusic(); else stopMusic();
    ui();
  }
  function ui() {
    document.querySelectorAll('[data-sound]').forEach(b => { b.textContent = on ? '🔊' : '🔇'; b.title = on ? 'Musik & Sound aus' : 'Musik & Sound an'; b.setAttribute('aria-pressed', String(on)); });
  }
  document.addEventListener('click', e => { if (e.target.closest('[data-sound]')) setOn(!on); });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ui); else ui();

  window.FDAUDIO = { start: startMusic, stop: stopMusic, fx, isOn: () => on };
})();
