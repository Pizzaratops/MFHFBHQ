// First Down: erweitertes Playbook (Formationen, Spielzüge, Defense-Calls)
// Koordinaten wie in tree.js: x = Yards von links (0–53,3, Mitte 26,65), d = Yards vor (+) / hinter (−) der Line of Scrimmage.
// Wird vor sim.js geladen; sim.js übernimmt FD_PLAYBOOK in OPLAYS/DCALLS.

// ---------- Formationen ----------
const FD_OL = { LT: [22.65, -0.9, 'T'], LG: [24.65, -0.9, 'G'], C: [26.65, -0.8, 'C'], RG: [28.65, -0.9, 'G'], RT: [30.65, -0.9, 'T'] };
Object.assign(FD_OFF, {
  // 11 Personnel, Trips rechts: drei WR auf der rechten Seite
  trips: Object.assign({}, FD_OL, {
    TE: [20.6, -1.0, 'TE'], QB: [26.65, -5, 'QB'], HB: [28.8, -5, 'HB'],
    X: [4.5, -0.8, 'WR'], SL: [35.5, -1.5, 'WR'], SL2: [41.5, -1.5, 'WR'], Z: [48, -0.8, 'WR'],
  }),
  // 11 Personnel, Bunch rechts: drei WR eng im Dreieck
  bunch: Object.assign({}, FD_OL, {
    TE: [20.6, -1.0, 'TE'], QB: [26.65, -5, 'QB'], HB: [24.6, -5, 'HB'],
    X: [4.5, -0.8, 'WR'], Z: [40.5, -0.8, 'WR'], SL: [42.2, -2.3, 'WR'], SL2: [38.8, -2.3, 'WR'],
  }),
  // 13 Personnel: 1 RB, 3 TE, 1 WR, QB unter dem Center
  h13: Object.assign({}, FD_OL, {
    TE: [32.8, -1.0, 'TE'], TE2: [20.5, -1.0, 'TE'], TE3: [35.2, -2.3, 'TE'], QB: [26.65, -1.6, 'QB'], HB: [26.65, -6.5, 'HB'],
    X: [6, -0.8, 'WR'],
  }),
  // 20 Personnel: 2 RB nebeneinander in der Shotgun, 3 WR, kein TE
  p20: Object.assign({}, FD_OL, {
    QB: [26.65, -5, 'QB'], HB: [24.3, -5.2, 'HB'], H: [29.0, -5.2, 'FB'],
    X: [4.5, -0.8, 'WR'], SL: [13, -1.5, 'WR'], Z: [47.5, -1.5, 'WR'],
  }),
});

const FD_B = { block: true };
const blk = path => ({ block: true, path });
const OL_RUN_R = (dx, dd) => ({ LT: blk([[dx, dd]]), LG: blk([[dx, dd + 0.1]]), C: blk([[dx, dd + 0.1]]), RG: blk([[dx, dd + 0.1]]), RT: blk([[dx, dd + 0.1]]) });
const OL_PRO = { LT: blk([[0, -1.3]]), LG: blk([[0, -1.3]]), C: blk([[0, -1.3]]), RG: blk([[0, -1.3]]), RT: blk([[0, -1.3]]) };
const OL_PA = { LT: blk([[0.9, 0.8]]), LG: blk([[0.9, 0.9]]), C: blk([[0.8, 0.9]]), RG: blk([[0.8, 0.9]]), RT: blk([[0.8, 0.9]]) };

// ---------- Spielzüge ----------
// base: Grund-Play fürs Ergebnis-Modell; vs: Bonus/Malus gegen bestimmte Defense-Calls
// (Pass: Completion-Quote ±, Lauf: Yards ±); air: typische Wurftiefe.
const FD_PLAYBOOK = {
  plays: {
    verts: {
      kind: 'pass', name: 'Four Verts', short: 'Vier Receiver laufen tief · 11 Personnel', icon: '🚀', node: 'o-pass-deep', base: 'deep', air: 20,
      vs: { press: 0.10, c0: 0.14, man: 0.05, box: 0.05, blitz: 0.04, c3: 0.05, c2: -0.06, c4: -0.10 },
      diagram: {
        off: 'gun11', paths: Object.assign({}, OL_PRO, {
          QB: { path: [[0, -3]] }, HB: blk([[1.4, 0.6]]),
          X: { path: [[0, 25]] }, SL: { path: [[1.5, 8], [2, 24]] }, TE: { path: [[0.5, 8], [1, 22]] }, Z: { path: [[0, 25]] },
        }),
        ball: [['pass', 'SL', 2.5, 0.9]],
      },
    },
    smash: {
      kind: 'pass', name: 'Smash', short: 'Hitch kurz + Corner dahinter · 11 Personnel', icon: '🎯', node: 'o-pass-mid', base: 'mid', air: 10,
      vs: { c2: 0.10, c4: 0.04, c3: 0.02, man: -0.04, press: -0.06 },
      diagram: {
        off: 'gun11', paths: Object.assign({}, OL_PRO, {
          QB: { path: [[0, -2.2]] }, HB: blk([[1.4, 0.6]]),
          X: { path: [[0, 6], [0.4, 5]] }, SL: { path: [[0, 9], [-6, 15]] }, TE: { path: [[0, 9], [6, 15]] }, Z: { path: [[0, 6], [-0.4, 5]] },
        }),
        ball: [['pass', 'SL', 1.9, 0.75]],
      },
    },
    mesh: {
      kind: 'pass', name: 'Mesh aus Bunch', short: 'Zwei Crosser kreuzen sich · Bunch rechts', icon: '✖️', node: 'o-pass-quick', base: 'mid', air: 6,
      vs: { man: 0.09, press: 0.11, blitz: 0.05, c0: 0.06, c2: -0.02, fire: -0.03 },
      diagram: {
        off: 'bunch', paths: Object.assign({}, OL_PRO, {
          QB: { path: [[0, -2.2]] }, HB: blk([[1.4, 0.6]]),
          Z: { path: [[0, 10], [5, 16]] }, SL: { path: [[4, 1], [9, 2]] }, SL2: { path: [[-2, 2], [-20, 3.5]] },
          TE: { path: [[2, 2], [18, 3]] }, X: { path: [[0, 11], [11, 11]] },
        }),
        ball: [['pass', 'SL2', 2.0, 0.6]],
      },
    },
    flood: {
      kind: 'pass', name: 'Flood aus Trips', short: 'Drei Etagen auf einer Seite · Trips rechts', icon: '🌊', node: 'o-pass-mid', base: 'mid', air: 13,
      vs: { c3: 0.09, fire: 0.06, c4: 0.03, man: -0.03, press: -0.04 },
      diagram: {
        off: 'trips', paths: Object.assign({}, OL_PRO, {
          QB: { path: [[0, -2.8]] }, HB: blk([[-1.4, 0.6]]), TE: blk([[0, -1.2]]),
          Z: { path: [[0, 24]] }, SL2: { path: [[0, 10], [6, 14]] }, SL: { path: [[3, 0.8], [9, 2]] }, X: { path: [[0, 12], [11, 12]] },
        }),
        ball: [['pass', 'SL2', 2.3, 0.8]],
      },
    },
    stick: {
      kind: 'pass', name: 'Stick aus Trips', short: 'Schneller Hitch + Flat · Trips rechts', icon: '📍', node: 'o-pass-quick', base: 'quick', air: 6,
      vs: { c3: 0.06, c2: 0.03, c4: 0.04, box: 0.02, press: -0.05 },
      diagram: {
        off: 'trips', paths: Object.assign({}, OL_PRO, {
          QB: { path: [[0, -1.5]] }, HB: blk([[-1.4, 0.6]]), TE: blk([[0, -1.2]]),
          Z: { path: [[0, 22]] }, SL2: { path: [[0, 5.5], [-0.5, 5]] }, SL: { path: [[3, 0.5], [8, 1.5]] }, X: { path: [[0.8, 3], [7, 8]] },
        }),
        ball: [['pass', 'SL2', 1.4, 0.45]],
      },
    },
    pa13: {
      kind: 'pass', name: 'Play-Action Shot (13)', short: 'Lauf antäuschen, tiefer Post · 3 TE', icon: '🎭', node: 'o-pass-pa', base: 'pa', air: 18,
      vs: { box: 0.08, c0: 0.08, press: 0.05, man: 0.03, c2: -0.05, c4: -0.06 },
      diagram: {
        off: 'h13', paths: Object.assign({}, OL_PA, {
          TE: blk([[0.6, 0.8]]), TE2: blk([[0.6, 0.8]]),
          QB: { path: [[0.4, -0.6, 0.35], [0, -6.5]] }, HB: { delay: 0.15, path: [[1.2, 3], [1.5, 4.5]] },
          TE3: { path: [[-2, 5], [-20, 13]] }, X: { path: [[0, 11], [8, 22]] },
        }),
        ball: [['fake', 'HB', 0.7], ['pass', 'X', 2.9, 1.0]],
      },
    },
    iz13: {
      kind: 'run', name: 'Inside Zone (13)', short: 'Mit 3 TE durch die Mitte drücken', icon: '🦬', node: 'o-run-iz', base: 'iz',
      vs: { box: 1.0, blitz: 0.5, c0: 0.4, c2: -0.3, c4: -0.2 },
      diagram: {
        off: 'h13', paths: Object.assign({}, OL_RUN_R(1.1, 1.1), {
          TE: blk([[1, 1.3]]), TE2: blk([[1, 1.3]]), TE3: blk([[1.2, 1.5]]), X: blk([[0, 4]]),
          QB: { path: [[0.6, -1.2], [-0.8, -2]] }, HB: { delay: 0.2, path: [[1.4, 2.5], [3.5, 6.5], [4, 12]] },
        }),
        ball: [['hand', 'HB', 0.8]],
      },
    },
    toss20: {
      kind: 'run', name: 'Toss (20)', short: 'Ball schnell nach außen, 2. RB blockt vorneweg', icon: '🌪️', node: 'o-run-oz', base: 'oz',
      vs: { box: 0.6, man: 0.5, press: 0.6, c3: 0.2, c2: -0.2, fire: -0.4 },
      diagram: {
        off: 'p20', paths: Object.assign({}, OL_RUN_R(2.6, 0.6), {
          QB: { path: [[0.5, -0.3]] }, H: { block: true, delay: 0.1, path: [[4.5, 2], [11, 5]] }, HB: { delay: 0.15, path: [[4.5, 0], [12.5, 3], [14, 10]] },
          X: blk([[0, 4]]), SL: blk([[0.6, 4.5]]), Z: blk([[-0.5, 5]]),
        }),
        ball: [['hand', 'HB', 0.5]],
      },
    },
    draw: {
      kind: 'run', name: 'Draw', short: 'Pass antäuschen, dann Lauf · gegen den Blitz', icon: '🪤', node: 'o-run-iz', base: 'iz',
      vs: { blitz: 1.6, c0: 2.2, fire: 1.2, c2: 0.4, c4: 0.3, box: -0.6 },
      diagram: {
        off: 'gun11', paths: {
          LT: blk([[0, -1.1, 0.5], [0.4, 0.8]]), LG: blk([[0, -1.1, 0.5], [0.4, 0.9]]), C: blk([[0, -1.1, 0.5], [0.3, 0.9]]), RG: blk([[0, -1.1, 0.5], [0.3, 0.9]]), RT: blk([[0, -1.1, 0.5], [0.2, 0.8]]),
          TE: blk([[0, -1, 0.4], [0.5, 1.5]]), QB: { path: [[0, -2.2, 0.3]] },
          HB: { delay: 0.95, path: [[1.6, 0.6], [2.1, 5.5], [2.4, 11]] },
          X: blk([[0, 7]]), SL: blk([[0.5, 7]]), Z: blk([[0, 7]]),
        },
        ball: [['hand', 'HB', 1.1]],
      },
    },
  },
  // Defense-Calls: base = Mischung bestehender Calls fürs Ergebnis-Modell
  defs: {
    c3: { name: 'Cover 3', short: '1 Safety tief, 3 Mann teilen hinten das Feld', icon: '🔺', node: 'd-zone', mix: { box: 0.45, c2: 0.55 } },
    c4: { name: 'Cover 4 (Quarters)', short: '4 Mann tief, kaum etwas geht lang', icon: '🧊', node: 'd-zone', mix: { c2: 0.8, box: 0.2 } },
    press: { name: 'Press Man', short: 'CBs direkt am Receiver, 1 Safety tief', icon: '🤜', node: 'd-man', mix: { man: 1 } },
    c0: { name: 'Cover 0 Blitz', short: '6 Rusher, keiner bleibt tief!', icon: '💣', node: 'd-blitz', mix: { blitz: 0.8, man: 0.2 } },
    fire: { name: 'Fire Zone', short: 'Zone-Blitz: 5 Rusher, dahinter Raumdeckung', icon: '🔥', node: 'd-blitz', mix: { blitz: 0.5, c2: 0.5 } },
  },
  // Wie die neuen Defense-Calls die Grund-Plays zusätzlich verändern (nach dem Mischen)
  defMods: {
    press: { quick: { c: -0.05 }, mid: { c: -0.02 }, deep: { c: 0.08, bp: 0.05 }, pa: { c: 0.03 } },
    c0: { quick: { c: 0.02 }, deep: { c: 0.12, bp: 0.10, sack: 0.04 }, mid: { sack: 0.05 }, pa: { sack: 0.04, c: 0.04 }, screen: { yac: 2 }, run: { sd: 1, bp: 0.04 } },
    fire: { quick: { c: -0.07, int: 0.01 }, screen: { c: -0.05 }, deep: { c: -0.05 } },
    c3: { deep: { c: -0.04 } },
    c4: { deep: { c: -0.08 }, run: { m: 0.3 } },
  },
  // Was die Defense vor dem Snap zeigt (Karriere „Du siehst …")
  looks: {
    c3: { title: '1 Safety tief, CBs weit weg', desc: 'Ein Safety steht mittig tief, die Cornerbacks mit viel Abstand.', tip: 'Cover 3: Die Seiten-Etagen (Flood) und schnelle Pässe vor den CBs sind offen.' },
    c4: { title: '2 Safeties tief, CBs mit Abstand', desc: 'Vier Verteidiger stehen weit hinten, vorne nur sieben.', tip: 'Tief ist dicht: laufen oder kurz und mittel werfen.' },
    press: { title: 'Cornerbacks drücken direkt an der Line', desc: 'Die CBs stehen Nase an Nase mit den Receivern, ein Safety tief.', tip: 'Press: Wer am CB vorbeikommt, ist tief frei. Bunch-Formationen helfen gegen das Drücken.' },
    c0: { title: 'Kein Safety tief!', desc: 'Alle stehen vorne, die Mitte hinten ist leer.', tip: 'Cover 0: Ein schneller Wurf oder eine tiefe Route gegen Manndeckung ohne Hilfe – oder ein Draw.' },
    fire: { title: 'Blitz-Look, aber CBs weit weg', desc: 'Linebacker an der Line, die Cornerbacks halten aber Abstand.', tip: 'Fire Zone: Hinter den Blitzern steht Raumdeckung. Schnelle kurze Pässe sind gefährlich, Draw und Flood funktionieren.' },
  },
  why: {
    c3: { run: 'Cover 3 bringt 7 Mann nach vorne: Laufen geht, ist aber kein Selbstläufer.', pass: 'Cover 3: Drei Mann tief, vier darunter. Die Seiten und die Lücken zwischen den Zonen sind offen.', deep: 'Drei tiefe Zonen gegen vier tiefe Routen: Einer ist meistens frei.', pa: 'Der eine Safety muss aufpassen, die Täuschung bringt etwas.', screen: 'Die Zonen-Verteidiger sehen den Screen kommen.' },
    c4: { run: 'Quarters lässt nur 7 Mann vorne: gute Zeit für einen Lauf.', pass: 'Vier Mann tief: Kurze und mittlere Pässe sind der Weg.', deep: 'Gegen vier tiefe Verteidiger hat ein langer Ball kaum eine Chance.', pa: 'Die Safeties bleiben tief, die Täuschung bringt wenig.', screen: 'Viel Platz vorne, aber die Raumdeckung reagiert.' },
    press: { run: 'Die CBs sind mit den Receivern beschäftigt: Platz für den Lauf.', pass: 'Press Man: Kurze Routen werden gestört, wer vorbeikommt, ist frei.', deep: 'Wer den Press schlägt, läuft dem CB davon: tiefe Routen sind die Antwort.', pa: 'Die Manndecker kleben an ihren Receivern, nicht am Lauf.', screen: 'Die Verteidiger laufen ihren Receivern hinterher.' },
    c0: { run: 'Alle stürmen in die Lücken: entweder gar nichts oder ein langer Lauf.', pass: 'Cover 0: Der Ball muss schnell raus, dafür hat niemand Hilfe von hinten.', deep: 'Kein Safety tief: Gewinnt dein Receiver sein Duell, ist es ein Touchdown.', pa: 'Die Täuschung kostet Zeit, aber hinten ist alles offen.', screen: 'Screen gegen Cover 0: Alle rennen am Ball vorbei.' },
    fire: { run: 'Die Blitzer stehen in den Lücken, aber der Draw nutzt ihren Schwung.', pass: 'Fire Zone: Hinter dem Blitz lauern Zonen-Verteidiger auf den schnellen Wurf.', deep: 'Drei Mann tief: Lange Bälle sind schwer, und der Druck kommt schnell.', pa: 'Die Täuschung kostet Zeit gegen den Blitz.', screen: 'Die fallenden Verteidiger stehen genau im Screen.' },
  },
};
if (typeof module !== 'undefined') module.exports = { FD_PLAYBOOK };
