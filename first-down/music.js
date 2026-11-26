// ============================================================
//  FIRST DOWN — Musik & Sounds (26.11.2026, v2 „Agenten-Action“)
// ============================================================
//  Eigene Komposition „Blitz Protocol“ (E-Moll, 152 BPM, 16 Takte),
//  live per Web Audio erzeugt, im Stil später 90er-Konsolen-Soundtracks:
//  Synth-Bass (Säge + Filter), Vibrato-Lead mit Echo, Bläser-Stöße
//  (verstimmte Sägen), Pad, Drums, Hall. Keine Audiodateien, keine
//  fremden Melodien. Startet erst nach einem Klick, An/Aus gemerkt.
// ============================================================
(function () {
  'use strict';
  const KEY = 'mfhfb:fd-sound';
  let on = true;
  try { on = localStorage.getItem(KEY) !== 'off'; } catch (e) {}
  let ac = null, master = null, music = null, fxBus = null, noiseBuf = null, timer = null, playing = false, nextT = 0, step = 0, duckUntil = 0;

  const SEMI = { C: -9, 'C#': -8, Db: -8, D: -7, 'D#': -6, Eb: -6, E: -5, F: -4, 'F#': -3, Gb: -3, G: -2, 'G#': -1, Ab: -1, A: 0, 'A#': 1, Bb: 1, B: 2 };
  const hz = n => { const m = /^([A-G][#b]?)(\d)$/.exec(n); return 440 * Math.pow(2, (SEMI[m[1]] + (m[2] - 4) * 12) / 12); };
  const semi = (f, s) => f * Math.pow(2, s / 12);

  // ---------- Komposition (Einheit: Achtel) ----------
  const BPM = 152, E8 = 60 / BPM / 2;
  const CH = { Em: { root: 'E2', tones: ['E4', 'G4', 'B4'] }, C: { root: 'C2', tones: ['C4', 'E4', 'G4'] }, Am: { root: 'A1', tones: ['A3', 'C4', 'E4'] }, B: { root: 'B1', tones: ['B3', 'D#4', 'F#4'] } };
  // 16 Takte: Intro (4) – Thema A (8) – Höhepunkt B (4)
  const BARS = ['Em', 'Em', 'C', 'B', 'Em', 'Em', 'C', 'B', 'Em', 'Am', 'C', 'B', 'Em', 'C', 'Am', 'B'];
  const LEAD = [
    [null, 8], [null, 8], [null, 8], [null, 6], ['B4', 1], ['D#5', 1],
    ['B4', 2], ['E5', 1], ['G5', 1], ['F#5', 2], ['E5', 2],
    ['D5', 1], ['E5', 1], ['B4', 2], [null, 2], ['G4', 1], ['A4', 1],
    ['C5', 2], ['E5', 1], ['G5', 1], ['A5', 2], ['G5', 1], ['E5', 1],
    ['F#5', 3], ['D#5', 1], ['B4', 4],
    ['E5', 1], ['E5', 1], ['G5', 1], ['B5', 2], ['A5', 1], ['G5', 1], ['F#5', 1],
    ['A5', 2], ['G5', 1], ['E5', 1], ['C5', 2], ['E5', 2],
    ['G5', 1], ['F#5', 1], ['E5', 1], ['D5', 1], ['C5', 2], ['B4', 2],
    ['D#5', 2], ['F#5', 2], ['B5', 3], [null, 1],
    ['E5', 6], ['G5', 1], ['B5', 1], ['G5', 6], ['E5', 1], ['G5', 1], ['A5', 4], ['C6', 4], ['B5', 6], ['F#5', 1], ['D#5', 1],
  ];
  const leadGrid = [];
  LEAD.forEach(([n, l]) => { leadGrid.push({ n, l }); for (let i = 1; i < l; i++) leadGrid.push(null); });
  const BASSPAT = [0, 0, 12, 0, 10, 0, 12, 7];
  const TOTAL = BARS.length * 8;

  // ---------- Audio-Grundgerüst ----------
  function makeImpulse(ctx, sec, decay) {
    const len = Math.floor(ctx.sampleRate * sec), buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) { const d = buf.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay); }
    return buf;
  }
  function build(ctx) {
    ac = ctx;
    master = ac.createGain(); master.gain.value = 0.72; master.connect(ac.destination);
    const comp = ac.createDynamicsCompressor(); comp.threshold.value = -16; comp.ratio.value = 4; comp.connect(master);
    music = ac.createGain(); music.gain.value = 0.55; music.connect(comp);
    fxBus = ac.createGain(); fxBus.gain.value = 1;
    const rev = ac.createConvolver(); rev.buffer = makeImpulse(ac, 1.8, 3); const revG = ac.createGain(); revG.gain.value = 0.35;
    const dly = ac.createDelay(1); dly.delayTime.value = E8 * 3; const fb = ac.createGain(); fb.gain.value = 0.3; const dlyG = ac.createGain(); dlyG.gain.value = 0.25;
    fxBus.connect(rev); rev.connect(revG); revG.connect(comp);
    fxBus.connect(dly); dly.connect(fb); fb.connect(dly); dly.connect(dlyG); dlyG.connect(comp);
    noiseBuf = ac.createBuffer(1, ac.sampleRate, ac.sampleRate);
    const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }
  function ctx() {
    if (ac) return ac;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    build(new AC());
    return ac;
  }
  function env(g, t, a, peak, hold, rel) {
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + a);
    g.gain.setValueAtTime(peak, t + a + hold); g.gain.exponentialRampToValueAtTime(0.0001, t + a + hold + rel);
  }
  function bass(f, t, dur) {
    const o = ac.createOscillator(), o2 = ac.createOscillator(), fl = ac.createBiquadFilter(), g = ac.createGain();
    o.type = 'sawtooth'; o2.type = 'square'; o.frequency.value = f; o2.frequency.value = f / 2;
    fl.type = 'lowpass'; fl.Q.value = 6; fl.frequency.setValueAtTime(1400, t); fl.frequency.exponentialRampToValueAtTime(220, t + dur);
    const g2 = ac.createGain(); g2.gain.value = 0.35;
    o.connect(fl); o2.connect(g2); g2.connect(fl); fl.connect(g); g.connect(music);
    env(g, t, 0.005, 0.5, dur * 0.4, dur * 0.55);
    o.start(t); o2.start(t); o.stop(t + dur + 0.05); o2.stop(t + dur + 0.05);
  }
  function lead(f, t, dur, vol) {
    const o = ac.createOscillator(), o2 = ac.createOscillator(), fl = ac.createBiquadFilter(), g = ac.createGain(), lfo = ac.createOscillator(), lg = ac.createGain();
    o.type = 'sawtooth'; o2.type = 'square'; o.frequency.value = f; o2.frequency.value = f * 1.004;
    lfo.frequency.value = 5.8; lg.gain.setValueAtTime(0, t); lg.gain.linearRampToValueAtTime(f * 0.012, t + Math.min(0.25, dur));
    lfo.connect(lg); lg.connect(o.frequency); lg.connect(o2.frequency);
    fl.type = 'lowpass'; fl.frequency.value = 3200; fl.Q.value = 2;
    const m2 = ac.createGain(); m2.gain.value = 0.5;
    o.connect(fl); o2.connect(m2); m2.connect(fl); fl.connect(g); g.connect(music); g.connect(fxBus);
    env(g, t, 0.012, vol || 0.22, Math.max(0.02, dur - 0.1), 0.12);
    [o, o2, lfo].forEach(x => { x.start(t); x.stop(t + dur + 0.2); });
  }
  function brass(tones, t, dur, vol) {
    tones.forEach(n => [-7, 0, 7].forEach(det => {
      const o = ac.createOscillator(), fl = ac.createBiquadFilter(), g = ac.createGain();
      o.type = 'sawtooth'; o.frequency.value = hz(n); o.detune.value = det;
      fl.type = 'lowpass'; fl.frequency.setValueAtTime(600, t); fl.frequency.linearRampToValueAtTime(3000, t + 0.04); fl.frequency.exponentialRampToValueAtTime(900, t + dur);
      o.connect(fl); fl.connect(g); g.connect(music); g.connect(fxBus);
      env(g, t, 0.01, (vol || 0.05), dur * 0.5, dur * 0.5);
      o.start(t); o.stop(t + dur + 0.05);
    }));
  }
  function pad(tones, t, dur) {
    tones.forEach(n => { const o = ac.createOscillator(), g = ac.createGain(); o.type = 'triangle'; o.frequency.value = hz(n) / 2; o.connect(g); g.connect(music); g.connect(fxBus); env(g, t, 0.2, 0.05, dur - 0.4, 0.3); o.start(t); o.stop(t + dur + 0.1); });
  }
  function kick(t) { const o = ac.createOscillator(), g = ac.createGain(); o.type = 'sine'; o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(42, t + 0.12); o.connect(g); g.connect(music); env(g, t, 0.002, 0.9, 0.03, 0.15); o.start(t); o.stop(t + 0.25); }
  function noise(t, dur, vol, type, freq, out) {
    const s = ac.createBufferSource(), f = ac.createBiquadFilter(), g = ac.createGain();
    s.buffer = noiseBuf; f.type = type; f.frequency.value = freq; if (type === 'bandpass') f.Q.value = 1.2;
    s.connect(f); f.connect(g); g.connect(out || music);
    env(g, t, 0.002, vol, 0.005, dur); s.start(t); s.stop(t + dur + 0.05);
  }
  function snare(t, v) { noise(t, 0.16, v || 0.45, 'bandpass', 1800); const o = ac.createOscillator(), g = ac.createGain(); o.type = 'triangle'; o.frequency.setValueAtTime(220, t); o.frequency.exponentialRampToValueAtTime(140, t + 0.08); o.connect(g); g.connect(music); env(g, t, 0.002, 0.3, 0.01, 0.08); o.start(t); o.stop(t + 0.15); }
  function hat(t, open) { noise(t, open ? 0.18 : 0.035, open ? 0.12 : 0.09, 'highpass', 8000); }

  function scheduleStep(i, t) {
    const bar = Math.floor(i / 8), e = i % 8, ch = CH[BARS[bar]];
    const intro = bar < 4, climax = bar >= 12;
    bass(semi(hz(ch.root), BASSPAT[e]), t, E8 * 0.9);
    if (e === 0 && !intro) pad(ch.tones, t, E8 * 8);
    if (intro && e === 0 && bar % 2 === 1) brass(ch.tones, t, E8 * 1.6, 0.045);
    if (climax && (e === 0 || e === 3 || e === 6)) brass(ch.tones, t, E8 * 0.9, 0.05);
    if (!intro && !climax && bar % 4 === 3 && (e === 4 || e === 6)) brass(ch.tones, t, E8 * 0.8, 0.04);
    const L = leadGrid[i];
    if (L && L.n) lead(hz(L.n), t, L.l * E8 * 0.95, climax ? 0.2 : 0.22);
    if (e === 0 || e === 3 || e === 5) kick(t);
    if (e === 2 || e === 6) snare(t);
    hat(t, e === 7);
    if (bar % 4 === 3 && e >= 6) snare(t + E8 / 2, 0.3);
    if (bar === 15 && e >= 4) { snare(t, 0.35); snare(t + E8 / 2, 0.4); }
  }
  function tick() {
    while (nextT < ac.currentTime + 0.15) {
      if (nextT >= duckUntil) scheduleStep(step, nextT);
      nextT += E8; step = (step + 1) % TOTAL;
    }
  }
  function startMusic() {
    if (!on || !ctx()) return;
    if (ac.state === 'suspended') ac.resume();
    if (playing) return;
    playing = true; step = 0; nextT = ac.currentTime + 0.08;
    timer = setInterval(tick, 25);
  }
  function stopMusic() { playing = false; if (timer) clearInterval(timer); timer = null; }

  // ---------- Jingles & Effekte ----------
  function tone(type, f, t, dur, vol, slide) {
    const o = ac.createOscillator(), g = ac.createGain();
    o.type = type; o.frequency.setValueAtTime(f, t); if (slide) o.frequency.exponentialRampToValueAtTime(slide, t + dur);
    o.connect(g); g.connect(master); g.connect(fxBus); env(g, t, 0.005, vol, Math.max(0.01, dur - 0.05), 0.05); o.start(t); o.stop(t + dur + 0.1);
  }
  function seq(notes, unit, fn, startAt) {
    let t = startAt || ac.currentTime + 0.02;
    notes.forEach(([n, l]) => { if (n) fn(n, t, l * unit); t += l * unit; });
    return t;
  }
  const leadN = (n, t, d) => lead(hz(n), t, d * 0.95, 0.3);
  const brassN = (n, t, d) => brass([n], t, d, 0.09);
  function duck(sec) { duckUntil = ac.currentTime + sec; }
  const FX = {
    touchdown() {
      duck(2.6); const t0 = ac.currentTime + 0.02;
      brass(['E4', 'G4', 'B4'], t0, 0.18, 0.08); brass(['E4', 'G4', 'B4'], t0 + 0.2, 0.18, 0.08); brass(['C4', 'E4', 'G4'], t0 + 0.4, 0.3, 0.08); brass(['D4', 'F#4', 'A4'], t0 + 0.75, 0.3, 0.08); brass(['E4', 'G#4', 'B4'], t0 + 1.1, 1.2, 0.09);
      seq([['B5', 1], ['B5', 1], ['C6', 2], ['D6', 2], ['E6', 7]], 0.18, leadN, t0);
      kick(t0); kick(t0 + 0.4); kick(t0 + 1.1); snare(t0 + 0.2); snare(t0 + 0.75); noise(t0 + 1.1, 1.2, 0.3, 'highpass', 6000);
    },
    firstdown() { duck(0.7); const t = ac.currentTime + 0.02; brass(['B4', 'D#5', 'F#5'], t, 0.12, 0.07); brass(['E5', 'G5', 'B5'], t + 0.14, 0.35, 0.08); },
    fieldgoal() { duck(1.3); seq([['B4', 1], ['E5', 1], ['G5', 1], ['B5', 4]], 0.13, brassN); },
    miss() { duck(1.1); seq([['G4', 2], ['F#4', 2], ['E4', 4]], 0.14, brassN); },
    turnover() { duck(1.8); seq([['E4', 2], ['D#4', 2], ['D4', 2], ['C#4', 6]], 0.13, brassN); noise(ac.currentTime + 0.02, 0.6, 0.15, 'lowpass', 400); },
    sack() { const t = ac.currentTime + 0.01; kick(t); noise(t, 0.3, 0.6, 'lowpass', 600); },
    tackle() { noise(ac.currentTime + 0.01, 0.14, 0.35, 'bandpass', 700); },
    incomplete() { const t = ac.currentTime + 0.01; tone('square', hz('E5'), t, 0.1, 0.12); tone('square', hz('C5'), t + 0.12, 0.18, 0.12); },
    snap() { const t = ac.currentTime + 0.01; tone('square', 196, t, 0.05, 0.12); noise(t, 0.05, 0.2, 'highpass', 3000); },
    whistle() { const t = ac.currentTime + 0.01; const o = ac.createOscillator(), g = ac.createGain(), lfo = ac.createOscillator(), lg = ac.createGain(); o.type = 'sine'; o.frequency.value = 2900; lfo.frequency.value = 30; lg.gain.value = 160; lfo.connect(lg); lg.connect(o.frequency); o.connect(g); g.connect(master); env(g, t, 0.02, 0.12, 0.35, 0.06); o.start(t); lfo.start(t); o.stop(t + 0.5); lfo.stop(t + 0.5); },
    click() { tone('square', hz('A5'), ac.currentTime + 0.005, 0.04, 0.08); },
    right() { seq([['B5', 1], ['E6', 2]], 0.08, leadN); },
    wrong() { seq([['E4', 1], ['D#4', 2]], 0.1, brassN); },
    win() { duck(3.2); const t0 = ac.currentTime + 0.02; [['E4', 'G4', 'B4'], ['C4', 'E4', 'G4'], ['D4', 'F#4', 'A4'], ['E4', 'G#4', 'B4']].forEach((c, i) => brass(c, t0 + i * 0.35, i === 3 ? 1.6 : 0.3, 0.09)); seq([['G5', 2], ['A5', 2], ['B5', 2], ['E6', 8]], 0.175, leadN, t0); },
    lose() { duck(2.4); seq([['B4', 3], ['A4', 3], ['G4', 3], ['E4', 8]], 0.15, brassN); },
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

  // Vorschau als WAV (Test/Download): rendert den Song offline
  const clampS = v => Math.max(-1, Math.min(1, v));
  async function renderWav(seconds) {
    const sr = 44100, off = new OfflineAudioContext(2, sr * seconds, sr);
    const saved = { ac, master, music, fxBus, noiseBuf };
    build(off);
    let t = 0.05, i = 0;
    while (t < seconds - 0.2) { scheduleStep(i % TOTAL, t); t += E8; i++; }
    const buf = await off.startRendering();
    ({ ac, master, music, fxBus, noiseBuf } = saved);
    const n = buf.length, data = new DataView(new ArrayBuffer(44 + n * 4));
    const w = (o, s) => { for (let k = 0; k < s.length; k++) data.setUint8(o + k, s.charCodeAt(k)); };
    w(0, 'RIFF'); data.setUint32(4, 36 + n * 4, true); w(8, 'WAVEfmt '); data.setUint32(16, 16, true); data.setUint16(20, 1, true); data.setUint16(22, 2, true);
    data.setUint32(24, sr, true); data.setUint32(28, sr * 4, true); data.setUint16(32, 4, true); data.setUint16(34, 16, true); w(36, 'data'); data.setUint32(40, n * 4, true);
    const L = buf.getChannelData(0), Rr = buf.getChannelData(1);
    for (let k = 0; k < n; k++) { data.setInt16(44 + k * 4, clampS(L[k]) * 32767, true); data.setInt16(46 + k * 4, clampS(Rr[k]) * 32767, true); }
    return new Blob([data], { type: 'audio/wav' });
  }

  window.FDAUDIO = { start: startMusic, stop: stopMusic, fx, isOn: () => on, renderWav };
})();
