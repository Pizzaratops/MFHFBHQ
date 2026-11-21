// ============================================================
//  GHOST SCREEN — Aktionen (21.11.2026)
// ============================================================
//  Jede Aktion hat Stufen: 1 ohne Verteidigung, 2 mit Verteidigung,
//  danach Varianten „Wenn die Verteidigung anders reagiert“ mit einer
//  Entscheidungsfrage (ask) und der Lösung.
//
//  Format einer Stufe:
//   o:      Angriff, je Spieler Keyframes [t, x, y] (Sekunden, Meter)
//   d:      Verteidigung, je Spieler Regeln [t, modus, ziel, optionen]
//           'man' Ziel (opts: deny, help 0–1) · 'trail' Ziel (hinterherlaufen)
//           'via' [[x,y]…] · 'go' [x,y] · 'stay'   — opts.speed in m/s
//   ball:   {t, hold} · {t, pass:[von, zu], lob|bounce} · {t, shot, kind}
//   screens:{by, for, t0, t1, ghost}
//   steps:  [t, Text] — Erklärung, läuft mit
//   ask:    {t, q, opts:[[Antwort, richtig?, Erklärung]]}
//  Koordinaten: x quer (links negativ), y = Abstand zur Grundlinie,
//  Korb bei (0 | 1,575). FIBA-Maße.
//  Aktionen und Begriffe: Allgemeinwissen, Erklärungen in eigenen Worten.
//  Ghost Screen u. a. nach Coach's Clipboard (siehe Quellen in der App).
// ============================================================
(function (root) {
  const GS = root.GS = root.GS || {};

  // Spots
  const TOP = [0, 8.7], WR = [5.7, 6.0], WL = [-5.7, 6.0], CR = [6.9, 1.3], CL = [-6.9, 1.3];
  const at = p => [[0, p[0], p[1]]];

  // Standard-Verteidigung: jeder deckt seinen Mann
  const manAll = (extra = {}) => Object.assign({
    X1: [[0, 'man', 'O1']], X2: [[0, 'man', 'O2']], X3: [[0, 'man', 'O3']],
    X4: [[0, 'man', 'O4']], X5: [[0, 'man', 'O5']],
  }, extra);

  const STAGE1 = 'Ohne Verteidigung', STAGE2 = 'Mit Verteidigung';

  // ==========================================================
  // 1. GIVE & GO
  // ==========================================================
  const gg = (() => {
    const O1 = [[0, 0, 8.7], [0.9, 0, 8.7], [1.25, -0.9, 8.4], [1.4, -0.9, 8.4], [1.9, 1.0, 6.4], [2.35, 1.0, 4.2], [2.7, 0.7, 2.6]];
    const O2 = [[0, 5.7, 6.0], [0.75, 5.7, 6.0], [1.15, 5.2, 6.3]];
    const O3 = [[0, -5.7, 6.0], [1.5, -5.7, 6.0], [2.6, -2.2, 8.2]];
    const base = { O1, O2, O3, O4: at(CL), O5: at(CR) };
    const ball = [{ t: 0, hold: 'O1' }, { t: 0.8, pass: ['O1', 'O2'] }, { t: 1.95, pass: ['O2', 'O1'] }, { t: 2.6, shot: 'O1', kind: 'layup' }];
    const dBite = manAll({
      X1: [[0, 'man', 'O1'], [1.0, 'go', [-1.6, 7.6], { speed: 4 }], [1.5, 'stay'], [1.75, 'trail', 'O1', { speed: 5.2 }]],
      X4: [[0, 'man', 'O4', { help: 0.35 }]],
    });
    return {
      id: 'give-and-go', name: 'Give & Go', cat: 'Grundlagen', level: 'Einsteiger',
      short: 'Pass spielen und sofort zum Korb schneiden.',
      why: 'Nach einem Pass schauen Verteidiger gern zum Ball und vergessen ihren Gegenspieler. Wer genau dann schneidet, ist einen Schritt vorne. Give & Go ist die einfachste Aktion im Basketball und funktioniert in jedem Alter.',
      points: ['Nach dem Pass nicht stehen bleiben: Erst ein Schritt weg (Täuschung), dann hart zum Korb.', 'Beim Schneiden die Hand hoch – zeig, wo der Ball hin soll.', 'Der Passgeber spielt in den Lauf, nicht dahin, wo der Schneidende gerade ist.', 'Wer schneidet, macht Platz: Ein Mitspieler rückt nach (hier 3 auf den Top).'],
      stages: [
        {
          tab: STAGE1, defense: false, dur: 3.5, o: base, ball,
          steps: [
            [0, '1 hat den Ball oben (Top). 2 steht auf dem rechten Flügel, 3, 4 und 5 sorgen für Platz (Spacing).'],
            [0.8, '1 passt zu 2 – das ist das „Give“.'],
            [1.2, '1 macht einen Schritt weg vom Ball: eine Täuschung, damit sein Verteidiger mitgeht.'],
            [1.45, 'Dann schneidet 1 hart zum Korb – das „Go“. Hand hoch, Ziel zeigen!'],
            [1.95, '2 spielt den Ball zurück in den Lauf von 1.'],
            [2.6, 'Korbleger. 3 rückt nach oben, damit der Top nicht leer bleibt.'],
          ],
        },
        {
          tab: STAGE2, dur: 3.5, o: base, d: dBite, ball,
          steps: [
            [0, 'Jetzt mit Verteidigung: Jeder Angreifer hat seinen Gegenspieler (X1 deckt 1, X2 deckt 2 …).'],
            [0.8, 'Pass zu 2. X2 rückt an den Ball, die anderen Verteidiger verschieben mit.'],
            [1.0, '1 täuscht nach links an – X1 fällt darauf rein und geht mit.'],
            [1.45, 'Jetzt schneidet 1 vor X1 vorbei zum Korb (Front Cut). X1 muss sich umdrehen und ist zu spät.'],
            [1.95, '2 passt in den Lauf – 1 ist frei (grüner Ring).'],
            [2.6, 'Korbleger.'],
          ],
        },
        {
          tab: 'X1 springt zum Ball', dur: 3.7,
          defenseText: 'X1 macht es richtig: Nach dem Pass springt er Richtung Ball (Jump to the Ball) und steht zwischen 1 und dem Ball.',
          answer: 'Backcut: hinter dem Verteidiger vorbei zum Korb.',
          o: { ...base, O1: [[0, 0, 8.7], [0.9, 0, 8.7], [1.3, 0.9, 8.3], [1.45, 0.9, 8.3], [1.95, -0.5, 6.4], [2.4, -0.6, 4.2], [2.75, -0.4, 2.6]] },
          d: manAll({
            X1: [[0, 'man', 'O1'], [0.95, 'go', [1.4, 7.5], { speed: 5 }], [1.5, 'stay'], [1.95, 'trail', 'O1', { speed: 5 }]],
            X4: [[0, 'man', 'O4', { help: 0.35 }]],
          }),
          ball: [{ t: 0, hold: 'O1' }, { t: 0.8, pass: ['O1', 'O2'] }, { t: 2.0, pass: ['O2', 'O1'], bounce: true }, { t: 2.8, shot: 'O1', kind: 'layup' }],
          ask: {
            t: 1.05, q: 'X1 springt Richtung Ball und steht jetzt zwischen Dir und 2. Wohin schneidest Du?',
            opts: [
              ['Vorne vorbei, zwischen X1 und dem Ball', false, 'Genau da steht X1 – der Pass wird abgefangen.'],
              ['Hinter X1 vorbei zum Korb (Backcut)', true, 'Richtig! Wer zum Ball springt, steht mit dem Rücken zum Korb. Hinter ihm ist der Weg frei.'],
              ['Stehen bleiben und warten', false, 'Dann hat 2 keine Anspielstation und die Aktion ist vorbei.'],
            ],
          },
          steps: [
            [0, 'Gleicher Start: 1 passt gleich zu 2.'],
            [0.8, 'Pass zu 2.'],
            [0.95, 'X1 springt Richtung Ball und versperrt den Weg vorne vorbei.'],
            [1.3, '1 täuscht den Schnitt nach vorne an …'],
            [1.45, '… und schneidet hinter X1 vorbei zum Korb (Backcut).'],
            [2.0, 'Bodenpass von 2 – 1 ist frei.'],
            [2.8, 'Korbleger.'],
          ],
        },
        {
          tab: 'Help kommt aus der Ecke', dur: 4.8,
          defenseText: 'X4 sieht 1 frei zum Korb laufen, verlässt seinen Mann in der Ecke und hilft unter dem Korb (Help Defense).',
          answer: 'Abstoppen und den Ball dahin passen, wo der Helfer herkommt: zu 4 in die Ecke.',
          o: { ...base, O1: [[0, 0, 8.7], [0.9, 0, 8.7], [1.25, -0.9, 8.4], [1.4, -0.9, 8.4], [1.9, 1.0, 6.4], [2.35, 1.0, 4.2], [2.55, 0.9, 3.5]] },
          d: manAll({
            X1: dBite.X1,
            X4: [[0, 'man', 'O4', { help: 0.35 }], [2.0, 'go', [0.4, 2.8], { speed: 6.5 }], [3.15, 'man', 'O4', { speed: 5.5 }]],
          }),
          ball: [{ t: 0, hold: 'O1' }, { t: 0.8, pass: ['O1', 'O2'] }, { t: 1.95, pass: ['O2', 'O1'] }, { t: 2.75, pass: ['O1', 'O4'], lob: true }, { t: 3.9, shot: 'O4', kind: 'three' }],
          ask: {
            t: 2.5, q: 'X4 verlässt seinen Gegenspieler und hilft unter dem Korb. Was machst Du?',
            opts: [
              ['Trotzdem zum Korb', false, 'X4 steht schon da: Offensivfoul oder geblockter Wurf.'],
              ['Pass in die linke Ecke zu 4', true, 'Richtig! Wer hilft, lässt jemanden frei – meistens den in der Ecke.'],
              ['Zurück zu 2 passen', false, 'Sicher, aber 4 ist ganz frei. Das ist die bessere Lösung.'],
            ],
          },
          steps: [
            [0, 'Gleicher Start: Give & Go, X1 fällt auf die Täuschung rein.'],
            [1.45, '1 schneidet frei zum Korb.'],
            [2.0, 'X4 sieht die Gefahr und kommt aus der Ecke zur Hilfe (Help Defense).'],
            [2.55, '1 stoppt ab (Jump Stop) und schaut, wer frei ist.'],
            [2.75, 'Pass über X4 hinweg in die Ecke zu 4 …'],
            [3.9, '… freier Dreier, bevor X4 wieder da ist.'],
          ],
        },
      ],
    };
  })();

  // ==========================================================
  // 2. BACKDOOR CUT
  // ==========================================================
  const bd = (() => {
    const O1 = [[0, 0, 8.7], [0.6, 0, 8.7], [1.2, 1.3, 8.5]];
    const O2 = [[0, 5.7, 6.0], [0.6, 5.7, 6.0], [1.1, 4.6, 7.1], [1.2, 4.6, 7.1], [1.8, 3.0, 3.8], [2.3, 1.0, 2.3]];
    const base = { O1, O2, O3: at(WL), O4: at(CL), O5: at(CR) };
    const ball = [{ t: 0, hold: 'O1' }, { t: 1.6, pass: ['O1', 'O2'], bounce: true }, { t: 2.3, shot: 'O2', kind: 'layup' }];
    const dDeny = manAll({
      X2: [[0, 'man', 'O2', { deny: true }], [1.2, 'trail', 'O2', { speed: 5.2, lag: 0.4 }]],
      X4: [[0, 'man', 'O4', { help: 0.35 }]],
    });
    return {
      id: 'backdoor', name: 'Backdoor Cut', cat: 'Grundlagen', level: 'Einsteiger',
      short: 'Wenn Dir jemand den Passweg zumacht: hinter ihm zum Korb.',
      why: 'Ein Verteidiger, der den Passweg zumacht (Deny), steht zwischen Dir und dem Ball – also nicht mehr zwischen Dir und dem Korb. Genau diesen Weg nimmt der Backdoor Cut. Er bestraft aggressive Verteidigung.',
      points: ['Erst dem Ball entgegen gehen, damit der Verteidiger mit nach oben kommt.', 'Mit dem äußeren Fuß stoppen und explosiv zum Korb.', 'Der Passgeber spielt meist einen Bodenpass – der kommt am Verteidiger vorbei.', 'Backdoor nur, wenn Dir jemand den Passweg zumacht. Steht er locker, hol Dir den Ball.'],
      stages: [
        {
          tab: STAGE1, defense: false, dur: 3.2, o: base, ball,
          steps: [
            [0, '2 steht auf dem Flügel. Normalerweise kommt er dem Ball entgegen, um ihn zu fangen.'],
            [0.6, '2 läuft Richtung Ball, als wollte er den Pass haben …'],
            [1.15, '… stoppt mit dem äußeren Fuß und schneidet hinten herum zum Korb (Backdoor).'],
            [1.6, '1 spielt einen Bodenpass in den Lauf.'],
            [2.3, 'Korbleger.'],
          ],
        },
        {
          tab: STAGE2, dur: 3.2, o: base, d: dDeny, ball,
          steps: [
            [0, 'X2 verteidigt aggressiv: Er steht im Passweg (Deny) und will den Pass abfangen.'],
            [0.6, '2 kommt dem Ball entgegen – X2 geht mit und bleibt im Passweg.'],
            [1.15, 'Genau jetzt: X2 steht zu weit oben. 2 schneidet hinter ihm zum Korb.'],
            [1.6, 'X2 muss sich umdrehen – zu spät. Bodenpass von 1.'],
            [2.3, 'Korbleger. Merke: Wer den Passweg zumacht, macht den Weg zum Korb auf.'],
          ],
        },
        {
          tab: 'X2 spielt locker', dur: 2.9,
          defenseText: 'X2 macht den Passweg nicht zu. Er bleibt locker zwischen 2 und dem Korb.',
          answer: 'Kein Backdoor! V-Cut: kurz rein und wieder raus, Ball auf dem Flügel fangen.',
          o: { ...base, O2: [[0, 5.7, 6.0], [0.6, 5.7, 6.0], [1.0, 5.1, 4.6], [1.1, 5.1, 4.6], [1.55, 6.0, 6.4]] },
          d: manAll({ X4: [[0, 'man', 'O4', { help: 0.35 }]] }),
          ball: [{ t: 0, hold: 'O1' }, { t: 1.45, pass: ['O1', 'O2'] }],
          ask: {
            t: 0.85, q: 'X2 steht zwischen Dir und dem Korb – nicht im Passweg. Was ist jetzt richtig?',
            opts: [
              ['Backdoor zum Korb', false, 'Der Weg zum Korb ist zu – X2 steht ja schon dort.'],
              ['V-Cut: rein und wieder raus, Ball fangen', true, 'Richtig! Backdoor nur, wenn Dir jemand den Passweg zumacht. Sonst hol Dir den Ball.'],
              ['In die Ecke laufen', false, 'Dann ist der Flügel leer und 1 hat keine Anspielstation.'],
            ],
          },
          steps: [
            [0, 'Diesmal spielt X2 locker: Er bleibt zwischen 2 und dem Korb (kein Deny).'],
            [0.6, '2 geht ein paar Schritte Richtung Korb (V-Cut) …'],
            [1.05, '… und kommt schnell wieder raus zum Flügel.'],
            [1.45, 'Jetzt ist der Passweg frei.'],
            [2.0, '2 hat den Ball mit Blick zum Korb (Triple Threat): Wurf, Drive oder Pass.'],
          ],
        },
        {
          tab: 'X2 ahnt den Backdoor', dur: 3.6,
          defenseText: 'X2 deckt eng, rechnet aber schon mit dem Backdoor und sprintet beim ersten Schritt Richtung Korb.',
          answer: 'Zurück raus auf den Flügel – X2 steht jetzt unter dem Korb.',
          o: { ...base, O2: [[0, 5.7, 6.0], [0.6, 5.7, 6.0], [1.1, 4.6, 7.1], [1.2, 4.6, 7.1], [1.6, 3.7, 5.2], [1.7, 3.7, 5.2], [2.2, 5.9, 5.7]] },
          d: manAll({
            X2: [[0, 'man', 'O2', { deny: true }], [1.15, 'go', [2.4, 3.2], { speed: 6.6 }], [2.5, 'man', 'O2', { speed: 5.2 }]],
            X4: [[0, 'man', 'O4', { help: 0.35 }]],
          }),
          ball: [{ t: 0, hold: 'O1' }, { t: 2.05, pass: ['O1', 'O2'] }, { t: 2.75, shot: 'O2', kind: 'three' }],
          ask: {
            t: 1.62, q: 'X2 hat den Backdoor geahnt und ist schon auf dem Weg zum Korb. Was machst Du?',
            opts: [
              ['Weiter zum Korb', false, 'X2 ist zuerst da – kein Pass möglich.'],
              ['Zurück raus auf den Flügel', true, 'Richtig! X2 steht jetzt unter dem Korb, der Flügel ist leer.'],
              ['In der Zone stehen bleiben', false, 'Dort stehst Du nur im Weg – und nach drei Sekunden ist es ein Fehler.'],
            ],
          },
          steps: [
            [0, 'X2 deckt wieder eng (Deny) – aber diesmal wartet er auf den Backdoor.'],
            [0.6, '2 kommt dem Ball entgegen.'],
            [1.15, '2 schneidet zum Korb – X2 sprintet sofort mit und ist zuerst da.'],
            [1.65, '2 merkt es und dreht um: zurück auf den Flügel.'],
            [2.05, 'Pass zu 2 – X2 steht noch unter dem Korb.'],
            [2.75, 'Freier Wurf.'],
          ],
        },
      ],
    };
  })();

  // ==========================================================
  // 3. PIN DOWN
  // ==========================================================
  const pd = (() => {
    const O1 = [[0, 0, 8.7], [0.8, -1.6, 8.4]];
    const O2 = [[0, -2.5, 2.0], [0.6, -2.5, 2.0], [1.1, -2.9, 1.3], [1.4, -2.9, 1.3], [1.8, -4.5, 3.0], [2.1, -5.2, 4.6], [2.45, -5.6, 5.9], [2.55, -5.6, 6.0]];
    const O4 = [[0, -5.5, 5.9], [0.5, -5.5, 5.9], [1.3, -3.7, 3.5], [2.2, -3.7, 3.5], [2.7, -3.0, 2.8]];
    const base = { O1, O2, O3: at(WR), O4, O5: at(CR) };
    const help = { X3: [[0, 'man', 'O3', { help: 0.35 }]], X5: [[0, 'man', 'O5', { help: 0.35 }]] };
    const scr = [{ by: 'O4', for: 'O2', t0: 1.3, t1: 2.15 }];
    const ball = [{ t: 0, hold: 'O1' }, { t: 2.15, pass: ['O1', 'O2'] }, { t: 2.8, shot: 'O2', kind: 'three' }];
    return {
      id: 'pin-down', name: 'Pin Down', cat: 'Screens ohne Ball', level: 'Fortgeschritten',
      short: 'Ein Mitspieler stellt unten einen Screen, Du kommst frei zum Flügel.',
      why: 'Beim Pin Down (Down Screen) stellt ein Mitspieler mit dem Rücken zum Ball einen Screen für jemanden, der unter dem Korb steht. Der Verteidiger muss um den Screen herum – und verliert dabei Zeit. Je nachdem, wie er das macht, gibt es eine andere richtige Antwort.',
      points: ['Den Verteidiger vorbereiten: erst Richtung Grundlinie, dann los (V-Cut).', 'Eng am Screen vorbei – Schulter an Schulter, kein Abstand.', 'Lies den Verteidiger: hinter Dir → Curl zum Korb, über die Abkürzung → in die Ecke, Hilfe vom Screener-Verteidiger → der Screener ist frei.', 'Der Screener steht still, bis der Mitspieler vorbei ist (sonst Foul).'],
      stages: [
        {
          tab: STAGE1, defense: false, dur: 3.6, o: base, screens: scr, ball,
          steps: [
            [0, '2 steht unten am Block. 4 kommt vom Flügel herunter und stellt einen Screen (Block) für 2 – mit dem Rücken zum Ball. Das heißt Pin Down.'],
            [0.6, '2 läuft erst Richtung Grundlinie: So bringt er seinen Verteidiger in die richtige Position (V-Cut).'],
            [1.4, 'Dann läuft 2 eng um den Screen herum nach oben – Schulter an Schulter mit 4.'],
            [2.15, '1 passt zu 2 auf dem Flügel.'],
            [2.8, 'Wurf. 4 dreht sich nach dem Screen zum Ball und geht Richtung Korb.'],
          ],
        },
        {
          tab: STAGE2, dur: 3.6, o: base, screens: scr, ball,
          d: manAll({ ...help, X2: [[0, 'man', 'O2'], [1.45, 'go', [-3.6, 2.75], { speed: 5 }], [1.75, 'stay'], [2.3, 'trail', 'O2', { speed: 5.5 }]] }),
          steps: [
            [0, 'Mit Verteidigung: X2 bleibt eng an 2, X4 bei 4.'],
            [1.4, '2 läuft um den Screen. X2 will hinterher – und läuft in 4 hinein. Er bleibt am Screen hängen.'],
            [2.3, 'X2 ist wieder frei und läuft hinterher, hat aber zwei Meter verloren.'],
            [2.15, 'Pass zu 2.'],
            [2.8, 'Freier Wurf, bevor X2 da ist.'],
          ],
        },
        {
          tab: 'X2 klebt am Rücken', dur: 3.9,
          defenseText: 'X2 kommt gut um den Screen und läuft 2 direkt hinterher (Trail).',
          answer: 'Curl: eng um den Screen herum und nach innen zum Korb.',
          o: { ...base, O4: [[0, -5.5, 5.9], [0.5, -5.5, 5.9], [1.3, -3.7, 3.5]], O2: [[0, -2.5, 2.0], [0.6, -2.5, 2.0], [1.1, -2.9, 1.3], [1.4, -2.9, 1.3], [1.8, -4.5, 3.0], [2.05, -4.3, 4.3], [2.3, -3.0, 4.5], [2.65, -1.3, 3.4], [2.9, -0.5, 2.5]] },
          screens: scr,
          d: manAll({
            ...help,
            X2: [[0, 'man', 'O2'], [1.4, 'trail', 'O2', { speed: 6.0, lag: 0.45 }]],
            X4: [[0, 'man', 'O4'], [1.3, 'go', [-3.0, 2.5]], [2.7, 'man', 'O4']],
          }),
          ball: [{ t: 0, hold: 'O1' }, { t: 2.45, pass: ['O1', 'O2'] }, { t: 3.1, shot: 'O2', kind: 'layup' }],
          ask: {
            t: 1.85, q: 'X2 läuft Dir direkt hinterher (Trail). Was machst Du?',
            opts: [
              ['Eng um den Screen herum zum Korb (Curl)', true, 'Richtig! Er ist hinter Dir – also ist vor Dir der Weg zum Korb frei.'],
              ['Trotzdem raus zum Flügel', false, 'Geht, aber X2 ist direkt bei Dir. Kein freier Wurf.'],
              ['Stoppen und warten', false, 'Dann holt X2 Dich ein und der Screen war umsonst.'],
            ],
          },
          steps: [
            [0, 'Gleicher Start: 4 stellt den Pin Down für 2.'],
            [1.4, '2 läuft los – X2 kommt gut um den Screen und klebt an seinem Rücken.'],
            [1.85, 'Statt nach außen zu laufen, dreht 2 eng um den Screen nach innen (Curl).'],
            [2.45, 'Pass von 1 in den Lauf.'],
            [3.1, 'Korbleger. X2 ist immer noch hinter ihm.'],
          ],
        },
        {
          tab: 'X2 nimmt die Abkürzung', dur: 4.0,
          defenseText: 'X2 läuft nicht hinterher, sondern nimmt die Abkürzung über den Screen und wartet schon auf dem Flügel.',
          answer: 'Fade: in die Ecke ausweichen – 4 steht zwischen X2 und Dir.',
          o: { ...base, O2: [[0, -2.5, 2.0], [0.6, -2.5, 2.0], [1.1, -2.9, 1.3], [1.4, -2.9, 1.3], [1.75, -4.3, 2.5], [2.3, -6.6, 1.6], [2.4, -6.8, 1.5]] },
          screens: scr,
          d: manAll({
            ...help,
            X2: [[0, 'man', 'O2'], [1.35, 'via', [[-1.5, 3.2], [-2.5, 4.9], [-4.8, 5.1]], { speed: 6.8 }], [2.75, 'man', 'O2', { speed: 6 }]],
          }),
          ball: [{ t: 0, hold: 'O1' }, { t: 2.1, pass: ['O1', 'O2'] }, { t: 3.05, shot: 'O2', kind: 'three' }],
          ask: {
            t: 1.6, q: 'X2 nimmt die Abkürzung über den Screen und wartet schon auf dem Flügel.',
            opts: [
              ['Trotzdem zum Flügel', false, 'Dort steht X2 schon – der Pass wird abgefangen.'],
              ['In die Ecke ausweichen (Fade)', true, 'Richtig! X2 ist oben, 4 steht zwischen ihm und Dir. Die Ecke ist frei.'],
              ['Curl nach innen', false, 'Innen steht X4 – da ist es eng.'],
            ],
          },
          steps: [
            [0, 'Gleicher Start: 4 stellt den Pin Down für 2.'],
            [1.35, 'X2 rennt über den Screen hinweg zum Flügel – er will vor 2 dort sein.'],
            [1.75, '2 sieht das und weicht in die Ecke aus (Fade).'],
            [2.1, 'Langer Pass von 1 in die Ecke.'],
            [3.05, 'Freier Dreier. X2 muss erst um 4 herum.'],
          ],
        },
        {
          tab: 'X4 springt raus', dur: 3.6,
          defenseText: 'X4 verlässt kurz 4, springt vor 2 raus und stoppt ihn (Show), damit X2 Zeit hat, zurückzukommen.',
          answer: 'Slip: Der Screener 4 läuft sofort zum Korb – sein Verteidiger ist ja weg.',
          o: { ...base, O2: [[0, -2.5, 2.0], [0.6, -2.5, 2.0], [1.1, -2.9, 1.3], [1.4, -2.9, 1.3], [1.8, -4.5, 3.0], [2.05, -4.6, 3.4], [2.6, -4.6, 3.4], [3.1, -5.6, 5.9]], O4: [[0, -5.5, 5.9], [0.5, -5.5, 5.9], [1.3, -3.7, 3.5], [1.75, -3.7, 3.5], [2.0, -2.6, 3.6], [2.35, -1.0, 2.6], [2.5, -0.6, 2.2]] },
          screens: [{ by: 'O4', for: 'O2', t0: 1.3, t1: 1.8 }],
          d: manAll({
            ...help,
            X2: [[0, 'man', 'O2'], [1.45, 'go', [-3.6, 2.75], { speed: 5 }], [1.75, 'stay'], [2.15, 'trail', 'O2', { speed: 6 }]],
            X4: [[0, 'man', 'O4'], [1.65, 'go', [-4.9, 4.25], { speed: 6.5 }], [2.2, 'man', 'O4', { speed: 5.5 }]],
          }),
          ball: [{ t: 0, hold: 'O1' }, { t: 2.1, pass: ['O1', 'O4'] }, { t: 2.75, shot: 'O4', kind: 'layup' }],
          ask: {
            t: 1.85, q: 'X4 springt vor 2 raus, um ihn zu stoppen (Show). Wer ist jetzt frei?',
            opts: [
              ['2 – einfach weiterlaufen', false, 'X4 steht genau vor ihm.'],
              ['4 – läuft sofort zum Korb (Slip)', true, 'Richtig! X4 hat 4 verlassen, um 2 zu stoppen. Der Screener ist jetzt frei.'],
              ['1 – selbst werfen', false, 'X1 steht vor Dir – kein guter Wurf.'],
            ],
          },
          steps: [
            [0, 'Gleicher Start: 4 stellt den Pin Down für 2.'],
            [1.4, 'X2 bleibt am Screen hängen.'],
            [1.65, 'Damit 2 nicht frei wird, springt X4 vor ihn (Show). Dafür lässt er 4 allein.'],
            [1.8, '4 merkt das und läuft sofort zum Korb (Slip).'],
            [2.1, 'Pass von 1 zu 4.'],
            [2.75, 'Korbleger.'],
          ],
        },
      ],
    };
  })();

  // ==========================================================
  // 4. IVERSON CUT
  // ==========================================================
  const iv = (() => {
    const O2 = [[0, 5.7, 5.6], [0.6, 5.7, 5.6], [1.15, 3.1, 6.75], [1.7, 0, 6.9], [2.25, -3.1, 6.75], [2.8, -5.6, 5.8], [2.9, -5.7, 5.8]];
    const base = { O1: [[0, 0, 8.9]], O2, O3: at(CL), O4: [[0, -2.5, 5.8]], O5: [[0, 2.5, 5.8]] };
    const scr = [{ by: 'O5', for: 'O2', t0: 0.95, t1: 1.5 }, { by: 'O4', for: 'O2', t0: 1.85, t1: 2.4 }];
    const ball = [{ t: 0, hold: 'O1' }, { t: 2.5, pass: ['O1', 'O2'] }, { t: 3.15, shot: 'O2', kind: 'three' }];
    const X3h = { X3: [[0, 'man', 'O3', { help: 0.3 }]] };
    return {
      id: 'iverson-cut', name: 'Iverson Cut', cat: 'Screens ohne Ball', level: 'Fortgeschritten',
      short: 'Quer über das Feld, oben an zwei Screens vorbei.',
      why: 'Beim Iverson Cut läuft ein Spieler vom einen Flügel zum anderen und nutzt dabei zwei Screens an den Ecken der Freiwurflinie (Horns). Sein Verteidiger muss durch zwei Screens – dabei passieren Fehler. Benannt ist er nach Allen Iverson, für den die Philadelphia 76ers den Laufweg berühmt gemacht haben.',
      points: ['Oberhalb der Screens laufen, eng an den Screenern vorbei.', 'Tempo wechseln: locker starten, an den Screens beschleunigen.', 'Lies Deinen Verteidiger: unten herum → hinter dem zweiten Screen stoppen; im Passweg → Backdoor; Switch → der Screener ist frei.', 'Die Screener (4 und 5) bleiben stehen, bis der Läufer vorbei ist.'],
      stages: [
        {
          tab: STAGE1, defense: false, dur: 4.0, o: base, screens: scr, ball,
          steps: [
            [0, 'Horns-Aufstellung: 4 und 5 stehen an den Ecken der Freiwurflinie (Elbows), 1 hat oben den Ball.'],
            [0.6, '2 startet vom rechten Flügel quer über das Feld …'],
            [0.95, '… oberhalb der beiden Screens von 5 und 4 entlang. Das ist der Iverson Cut.'],
            [2.25, 'Am Ende kommt 2 auf dem linken Flügel an.'],
            [2.5, 'Pass von 1 …'],
            [3.15, '… und Wurf.'],
          ],
        },
        {
          tab: STAGE2, dur: 4.0, o: base, screens: scr, ball,
          d: manAll({ ...X3h, X2: [[0, 'man', 'O2'], [0.7, 'trail', 'O2', { speed: 4.4, lag: 0.35 }], [2.95, 'man', 'O2', { speed: 5 }]] }),
          steps: [
            [0, 'Mit Verteidigung. X4 und X5 bleiben bei ihren Screenern, X2 bei 2.'],
            [0.7, '2 startet. X2 folgt ihm über die Screens …'],
            [1.0, '… und läuft erst in 5, dann in 4 hinein. Jeder Screen kostet ihn Zeit.'],
            [2.5, '2 kommt frei auf dem Flügel an. Pass von 1.'],
            [3.15, 'Freier Wurf, X2 kommt zu spät.'],
          ],
        },
        {
          tab: 'X2 läuft unten herum', dur: 3.7,
          defenseText: 'X2 läuft nicht durch die Screens, sondern unten herum (unter den Screens) und will vor 2 auf dem Flügel sein.',
          answer: 'Hinter dem zweiten Screen stoppen und den Ball fordern.',
          o: { ...base, O2: [[0, 5.7, 5.6], [0.6, 5.7, 5.6], [1.15, 3.1, 6.75], [1.7, 0, 6.9], [2.15, -2.4, 7.2], [2.3, -2.5, 7.25]] },
          screens: [{ by: 'O5', for: 'O2', t0: 0.95, t1: 1.5 }],
          d: manAll({
            ...X3h,
            X2: [[0, 'man', 'O2'], [0.75, 'via', [[3.0, 4.4], [0, 4.2], [-3.6, 4.7], [-4.9, 5.3]], { speed: 6.3 }], [2.75, 'via', [[-3.7, 6.3], [-3.1, 6.7]], { speed: 5 }]],
          }),
          ball: [{ t: 0, hold: 'O1' }, { t: 2.3, pass: ['O1', 'O2'] }, { t: 2.85, shot: 'O2', kind: 'jumper' }],
          ask: {
            t: 1.75, q: 'X2 läuft unten herum (unter den Screens) und will vor Dir auf dem Flügel sein.',
            opts: [
              ['Weiter zum Flügel', false, 'Dort wartet X2 schon.'],
              ['Hinter dem zweiten Screen stoppen und Ball fordern', true, 'Richtig! 4 steht jetzt zwischen Dir und X2 – Du hast Platz für den Wurf.'],
              ['Zum Korb schneiden', false, 'Unten steht X2 – genau da, wo Du hin willst.'],
            ],
          },
          steps: [
            [0, 'Gleicher Start: Iverson Cut über die Screens von 5 und 4.'],
            [0.75, 'X2 läuft unten herum, unter den Screens durch.'],
            [1.75, '2 merkt es und stoppt direkt hinter dem Screen von 4.'],
            [2.3, 'Kurzer Pass von 1.'],
            [2.85, 'Wurf aus der Mitteldistanz – X2 hängt hinter 4 fest.'],
          ],
        },
        {
          tab: 'X2 steht im Passweg', dur: 4.6,
          defenseText: 'X2 kommt schnell über die Screens und springt vor 2 in den Passweg (Deny).',
          answer: 'Backdoor: hinter X2 zum Korb.',
          o: { ...base, O1: [[0, 0, 8.9], [2.6, 0, 8.9], [3.0, -1.4, 8.6]], O2: [[0, 5.7, 5.6], [0.6, 5.7, 5.6], [1.15, 3.1, 6.75], [1.7, 0, 6.9], [2.25, -3.1, 6.75], [2.6, -4.6, 6.2], [2.7, -4.6, 6.2], [3.15, -3.3, 3.6], [3.5, -1.7, 2.6], [3.7, -1.0, 2.2]] },
          screens: scr,
          d: manAll({
            X2: [[0, 'man', 'O2'], [0.7, 'trail', 'O2', { speed: 6.8, lag: 0.25 }], [2.0, 'go', [-4.4, 7.0], { speed: 7 }], [2.85, 'trail', 'O2', { speed: 4.6, lag: 0.55 }]],
          }),
          ball: [{ t: 0, hold: 'O1' }, { t: 3.05, pass: ['O1', 'O2'], lob: true }, { t: 3.95, shot: 'O2', kind: 'layup' }],
          ask: {
            t: 2.62, q: 'X2 ist schnell über die Screens gekommen und steht jetzt vor Dir im Passweg.',
            opts: [
              ['Trotzdem den Ball fordern', false, 'X2 fängt den Pass ab oder Du bekommst ihn weit draußen.'],
              ['Hinter X2 zum Korb (Backdoor)', true, 'Richtig! Er steht oben im Passweg – hinter ihm ist der Weg zum Korb frei.'],
              ['In die Ecke laufen', false, 'Da steht schon 3. Ihr steht Euch im Weg.'],
            ],
          },
          steps: [
            [0, 'Gleicher Start: Iverson Cut über die Screens von 5 und 4.'],
            [0.7, 'X2 kommt diesmal gut durch die Screens.'],
            [2.0, 'Er springt vor 2 in den Passweg – der Pass auf den Flügel ist zu.'],
            [2.65, '2 stoppt mit dem äußeren Fuß und schneidet hinter X2 zum Korb (Backdoor).'],
            [3.05, '1 dribbelt kurz für einen besseren Winkel und spielt den Pass über die Verteidigung (Lob).'],
            [3.95, 'Korbleger.'],
          ],
        },
        {
          tab: 'Switch am ersten Screen', dur: 3.5,
          defenseText: 'X5 und X2 tauschen ihre Gegenspieler (Switch): X5 übernimmt den Läufer 2, X2 soll 5 decken.',
          answer: 'Slip: 5 läuft sofort zum Korb – X2 steht noch oben hinter ihm.',
          o: { ...base, O5: [[0, 2.5, 5.8], [1.6, 2.5, 5.8], [2.05, 1.2, 3.8], [2.4, 0.6, 2.5]] },
          screens: [{ by: 'O5', for: 'O2', t0: 0.95, t1: 1.55 }],
          d: manAll({
            ...X3h,
            X5: [[0, 'man', 'O5'], [1.1, 'man', 'O2', { speed: 6.5 }]],
            X2: [[0, 'man', 'O2'], [0.7, 'trail', 'O2', { speed: 5.5 }], [1.25, 'trail', 'O5', { speed: 4.2, lag: 0.75 }]],
          }),
          ball: [{ t: 0, hold: 'O1' }, { t: 1.85, pass: ['O1', 'O5'], lob: true }, { t: 2.75, shot: 'O5', kind: 'layup' }],
          ask: {
            t: 1.45, q: 'X5 übernimmt Dich (Switch). Wer ist jetzt frei?',
            opts: [
              ['2 läuft weiter zum Flügel', false, 'X5 ist jetzt bei Dir.'],
              ['5 rollt sofort zum Korb (Slip)', true, 'Richtig! X2 steht oben hinter 5 – der Weg zum Korb ist frei.'],
              ['1 wirft von oben', false, 'X1 steht direkt vor Dir.'],
            ],
          },
          steps: [
            [0, 'Gleicher Start: Iverson Cut.'],
            [1.1, 'Am ersten Screen tauschen X5 und X2: X5 geht mit 2, X2 soll 5 nehmen.'],
            [1.6, 'Beim Tausch entsteht eine Lücke: 5 läuft sofort zum Korb (Slip).'],
            [1.85, 'Lob von 1 über die Verteidigung.'],
            [2.75, 'Korbleger. 2 läuft trotzdem weiter und nimmt X5 mit.'],
          ],
        },
      ],
    };
  })();

  // ==========================================================
  // 5. PICK & ROLL
  // ==========================================================
  const pr = (() => {
    const O1 = [[0, 0, 8.8], [0.6, 0, 8.8], [1.0, -0.7, 8.9], [1.4, -0.7, 8.9], [1.85, 1.0, 8.7], [2.3, 2.4, 7.4], [2.75, 2.6, 5.6]];
    const O5 = [[0, 2.5, 2.3], [0.3, 2.5, 2.3], [1.3, 0.95, 7.8], [2.0, 0.95, 7.8], [2.5, 0.6, 5.6], [3.0, 0.4, 3.2], [3.2, 0.35, 2.6]];
    const base = { O1, O2: at(CR), O3: at(CL), O4: at(WL), O5 };
    const scr = [{ by: 'O5', for: 'O1', t0: 1.3, t1: 2.0 }];
    const helpD = { X2: [[0, 'man', 'O2', { help: 0.3 }]], X3: [[0, 'man', 'O3', { help: 0.3 }]] };
    const X1over = [[0, 'man', 'O1'], [1.45, 'via', [[0.25, 8.35]], { speed: 4.5 }], [1.75, 'stay'], [2.45, 'trail', 'O1', { speed: 5, lag: 0.5 }]];
    return {
      id: 'pick-and-roll', name: 'Pick & Roll', cat: 'Screens mit Ball', level: 'Fortgeschritten',
      short: 'Screen für den Ballführer, danach rollt der Screener zum Korb.',
      why: 'Beim Pick & Roll stellt ein Mitspieler einen Screen für den Ballführer. Jetzt müssen zwei Verteidiger zwei Angreifer stoppen – und sich blitzschnell absprechen. Egal, was sie machen, einer von beiden Angreifern hat für einen Moment einen Vorteil. Die wichtigste Aktion im modernen Basketball.',
      points: ['Ballführer: erst einen Schritt weg vom Screen (Verteidiger vorbereiten), dann eng vorbei.', 'Screener: stehen bleiben, bis der Ballführer vorbei ist – dann sofort zum Korb rollen.', 'Den Screener-Verteidiger lesen: springt raus → Pass zum Rollenden; bleibt unten → selbst werfen; Switch → Mismatch ausnutzen.', 'Geht der Ballverteidiger unter dem Screen durch: hinter dem Screen werfen.'],
      stages: [
        {
          tab: STAGE1, defense: false, dur: 4.0, o: base, screens: scr,
          ball: [{ t: 0, hold: 'O1' }, { t: 2.6, pass: ['O1', 'O5'] }, { t: 3.15, shot: 'O5', kind: 'layup' }],
          steps: [
            [0, '5 kommt von unten hoch und stellt einen Screen (Block) für den Ballführer 1. Das ist der Pick & Roll.'],
            [0.6, '1 dribbelt erst einen Schritt weg vom Screen – so steht sein Verteidiger richtig, um geblockt zu werden.'],
            [1.4, 'Dann dribbelt 1 eng am Screen vorbei (Schulter an Schulter).'],
            [2.0, '5 dreht sich ab und rollt zum Korb (Roll).'],
            [2.6, '1 passt in den Lauf von 5 …'],
            [3.15, '… Korbleger.'],
          ],
        },
        {
          tab: STAGE2, dur: 4.0, screens: scr,
          o: { ...base, O1: [[0, 0, 8.8], [0.6, 0, 8.8], [1.0, -0.7, 8.9], [1.4, -0.7, 8.9], [1.85, 1.0, 8.7], [2.3, 2.6, 8.5], [2.6, 3.1, 8.0]] },
          d: manAll({ ...helpD, X1: X1over, X5: [[0, 'man', 'O5'], [1.6, 'via', [[1.9, 7.1], [2.0, 8.0]], { speed: 7 }], [2.5, 'man', 'O5', { speed: 5 }]] }),
          ball: [{ t: 0, hold: 'O1' }, { t: 2.55, pass: ['O1', 'O5'] }, { t: 3.2, shot: 'O5', kind: 'layup' }],
          steps: [
            [0, 'Mit Verteidigung. Achte auf X5: Er deckt den Screener.'],
            [1.4, '1 kommt über den Screen, X1 bleibt hängen und läuft hinterher.'],
            [1.7, 'X5 springt vor den Ballführer (Hedge/Show), damit 1 nicht einfach durchziehen kann.'],
            [2.0, 'Dafür ist 5 für einen Moment allein: Er rollt sofort zum Korb.'],
            [2.55, '1 passt über den Hedge hinweg zu 5.'],
            [3.2, 'Korbleger. X5 kommt zu spät zurück.'],
          ],
        },
        {
          tab: 'X5 bleibt unten (Drop)', dur: 3.5, screens: scr,
          defenseText: 'X5 springt nicht raus, sondern bleibt tief vor dem Korb (Drop). Er will den Weg zum Korb und den Pass zu 5 zumachen.',
          answer: 'Pull-up: aus dem Dribbling werfen, bevor X1 wieder da ist.',
          o: { ...base, O1: [[0, 0, 8.8], [0.6, 0, 8.8], [1.0, -0.7, 8.9], [1.4, -0.7, 8.9], [1.85, 1.0, 8.7], [2.3, 2.4, 7.4], [2.55, 2.5, 6.7]] },
          d: manAll({ ...helpD, X1: X1over, X5: [[0, 'man', 'O5'], [1.5, 'go', [1.0, 5.0], { speed: 5 }], [2.2, 'go', [1.3, 4.5]]] }),
          ball: [{ t: 0, hold: 'O1' }, { t: 2.65, shot: 'O1', kind: 'jumper' }],
          ask: {
            t: 2.3, q: 'X5 bleibt tief unter dem Korb (Drop). Was machst Du?',
            opts: [
              ['Wurf aus dem Dribbling (Pull-up)', true, 'Richtig! X5 schützt den Korb, X1 ist hinter Dir – die Mitteldistanz ist frei.'],
              ['Pass zu 5', false, 'X5 steht genau zwischen Dir und 5.'],
              ['Weiter zum Korb', false, 'Da wartet X5 – meistens der Größte auf dem Feld.'],
            ],
          },
          steps: [
            [0, 'Gleicher Start: Pick & Roll.'],
            [1.5, 'X5 geht zurück Richtung Korb (Drop) und wartet dort.'],
            [1.85, '1 kommt über den Screen, X1 hängt hinter ihm.'],
            [2.3, 'Zwischen X1 (hinten) und X5 (unten) ist Platz: 1 stoppt an der Freiwurflinie …'],
            [2.65, '… und wirft aus dem Dribbling (Pull-up).'],
          ],
        },
        {
          tab: 'Switch', dur: 4.1, screens: scr,
          defenseText: 'X1 und X5 tauschen (Switch): Der große X5 verteidigt jetzt den Ballführer, der kleine X1 den Screener 5.',
          answer: 'Mismatch: 5 rollt ab und nimmt den kleinen X1 mit unter den Korb.',
          o: { ...base, O1: [[0, 0, 8.8], [0.6, 0, 8.8], [1.0, -0.7, 8.9], [1.4, -0.7, 8.9], [1.85, 1.0, 8.7], [2.3, 2.3, 8.2], [2.6, 2.6, 8.0]], O5: [[0, 2.5, 2.3], [0.3, 2.5, 2.3], [1.3, 0.95, 7.8], [2.0, 0.95, 7.8], [2.5, 0.6, 5.4], [2.95, 0.3, 3.0]] },
          d: manAll({ ...helpD, X5: [[0, 'man', 'O5'], [1.6, 'man', 'O1', { speed: 6.5 }]], X1: [[0, 'man', 'O1'], [1.5, 'via', [[0.2, 7.3]], { speed: 5 }], [1.9, 'trail', 'O5', { speed: 5, lag: 0.6 }], [2.6, 'go', [0.45, 4.15], { speed: 5 }]] }),
          ball: [{ t: 0, hold: 'O1' }, { t: 2.7, pass: ['O1', 'O5'], lob: true }, { t: 3.45, shot: 'O5', kind: 'layup' }],
          ask: {
            t: 2.1, q: 'Switch! Jetzt verteidigt X5 (groß) den Ballführer und X1 (klein) den Screener 5. Was jetzt?',
            opts: [
              ['5 rollt ab und nimmt den kleinen X1 mit unter den Korb', true, 'Richtig! Groß gegen Klein unter dem Korb – das ist ein Mismatch. Hoher Pass zu 5.'],
              ['1 dribbelt weiter gegen X5', false, 'Kann klappen, ist aber schwer. Unter dem Korb habt Ihr den leichteren Vorteil.'],
              ['Neu aufbauen, Ball zurück', false, 'Dann verschenkt Ihr den Vorteil.'],
            ],
          },
          steps: [
            [0, 'Gleicher Start: Pick & Roll.'],
            [1.5, 'Die Verteidiger tauschen: X5 geht zum Ballführer, X1 bleibt bei 5.'],
            [2.0, '5 rollt zum Korb und hält den kleineren X1 mit dem Körper hinter sich.'],
            [2.7, '1 spielt einen hohen Pass (Lob) zu 5.'],
            [3.45, 'Korbleger – groß gegen klein.'],
          ],
        },
        {
          tab: 'X1 geht unten durch', dur: 3.0, screens: scr,
          defenseText: 'X1 geht nicht über den Screen, sondern unten durch, zwischen 5 und dem Korb (Under).',
          answer: 'Hinter dem Screen stoppen und werfen.',
          o: { ...base, O1: [[0, 0, 8.8], [0.6, 0, 8.8], [1.0, -0.7, 8.9], [1.4, -0.7, 8.9], [1.85, 0.9, 8.85], [2.0, 1.1, 8.85]] },
          d: manAll({ ...helpD, X5: [[0, 'man', 'O5'], [1.3, 'go', [1.7, 7.3], { speed: 5 }]], X1: [[0, 'man', 'O1'], [1.45, 'via', [[0.3, 7.0], [1.1, 6.2], [2.6, 7.0]], { speed: 6 }], [2.3, 'man', 'O1']] }),
          ball: [{ t: 0, hold: 'O1' }, { t: 2.15, shot: 'O1', kind: 'three' }],
          ask: {
            t: 1.8, q: 'X1 geht unter dem Screen durch (zwischen 5 und dem Korb).',
            opts: [
              ['Hinter dem Screen stoppen und werfen', true, 'Richtig! Der Screen steht jetzt zwischen Dir und X1 – Zeit für den Wurf.'],
              ['Zum Korb ziehen', false, 'Unten wartet X1 schon, dazu X5.'],
              ['Pass zu 5', false, '5 hat noch gar nicht abgerollt.'],
            ],
          },
          steps: [
            [0, 'Gleicher Start: Pick & Roll.'],
            [1.45, 'X1 geht unter dem Screen durch.'],
            [1.85, '1 stoppt direkt hinter dem Screen – 5 steht zwischen ihm und X1.'],
            [2.15, 'Freier Dreier.'],
          ],
        },
      ],
    };
  })();

  // ==========================================================
  // 6. GHOST SCREEN
  // ==========================================================
  const gh = (() => {
    const O1 = [[0, 0, 8.8], [0.8, -0.5, 8.9], [1.6, 0.2, 8.9]];
    const O4 = [[0, 5.4, 6.6], [0.4, 5.4, 6.6], [1.6, 1.4, 7.95], [2.15, 4.6, 8.05], [2.25, 4.8, 8.05]];
    const base = { O1, O2: at(CR), O3: at(CL), O4, O5: [[0, 3.6, 1.0]] };
    const ghostMark = [{ by: 'O4', for: 'O1', t0: 1.4, t1: 1.62, ghost: true }];
    const helpD = { X2: [[0, 'man', 'O2', { help: 0.2 }]], X3: [[0, 'man', 'O3', { help: 0.3 }]] };
    return {
      id: 'ghost-screen', name: 'Ghost Screen', cat: 'Screens mit Ball', level: 'Fortgeschritten',
      short: 'So tun, als käme ein Screen – und im letzten Moment weglaufen.',
      why: 'Beim Ghost Screen kommt ein Mitspieler, als wollte er einen Screen für den Ballführer stellen. Die Verteidiger stellen sich auf einen Pick & Roll ein. Doch kurz vorher sprintet der Screener weg – nach außen (Flare) oder zum Korb (Slip). Die Verteidigung hat auf einen Screen reagiert, den es nie gab. Besonders gut gegen Teams, die gern tauschen (Switch).',
      points: ['Der Screener trabt locker – es soll nach einem echten Screen aussehen.', 'Kurz vor dem Kontakt explosiv weg.', 'Flare, wenn der Screener-Verteidiger zum Ball springt; Drive, wenn er mit raus läuft; Slip, wenn beide oben stehen.', 'Funktioniert am besten mit einem guten Schützen als Screener.'],
      stages: [
        {
          tab: STAGE1, defense: false, dur: 3.5, o: base, screens: ghostMark,
          ball: [{ t: 0, hold: 'O1' }, { t: 2.05, pass: ['O1', 'O4'] }, { t: 2.7, shot: 'O4', kind: 'three' }],
          steps: [
            [0, '4 ist ein guter Schütze. Er trabt Richtung Ball, als wollte er einen Screen für 1 stellen – wie beim Pick & Roll.'],
            [1.4, 'Kurz vor dem Screen sprintet er weg. Er stellt den Screen nur zum Schein: Ghost Screen.'],
            [1.65, 'Hier springt 4 nach außen an die Dreierlinie (Flare).'],
            [2.05, 'Pass zu 4 …'],
            [2.7, '… und Dreier.'],
          ],
        },
        {
          tab: STAGE2, dur: 3.5, o: base, screens: ghostMark,
          d: manAll({
            ...helpD,
            X4: [[0, 'man', 'O4'], [1.2, 'go', [1.9, 6.9], { speed: 4.5 }], [1.75, 'stay'], [2.35, 'man', 'O4', { speed: 5.5 }]],
            X1: [[0, 'man', 'O1'], [1.3, 'go', [0.6, 8.0], { speed: 3 }], [1.9, 'man', 'O1']],
          }),
          ball: [{ t: 0, hold: 'O1' }, { t: 2.05, pass: ['O1', 'O4'] }, { t: 2.6, shot: 'O4', kind: 'three' }],
          steps: [
            [0, 'Mit Verteidigung. Alle rechnen mit einem Pick & Roll.'],
            [1.2, 'X4 macht sich bereit, vor den Ballführer zu springen (Hedge). X1 stellt sich so hin, dass er über den Screen kommt.'],
            [1.6, '4 springt weg (Flare). X4 hat sich auf den Pick & Roll eingestellt und steht falsch.'],
            [2.05, 'Pass zu 4.'],
            [2.6, 'Freier Dreier. Genau das ist die Idee: Die Verteidigung reagiert auf einen Screen, der nie kommt.'],
          ],
        },
        {
          tab: 'X4 läuft mit raus', dur: 3.5, screens: ghostMark,
          defenseText: 'X4 fällt nicht darauf rein und läuft mit 4 raus. X1 hat sich aber schon auf den Screen eingestellt und steht rechts.',
          answer: 'Drive: Der Ballführer zieht nach links zum Korb – die Mitte ist leer.',
          o: { ...base, O1: [[0, 0, 8.8], [0.8, -0.5, 8.9], [1.6, 0.2, 8.9], [1.75, 0.2, 8.9], [2.2, -1.0, 6.6], [2.6, -0.9, 4.4], [2.9, -0.6, 3.0]] },
          d: manAll({
            ...helpD,
            X1: [[0, 'man', 'O1'], [1.3, 'go', [0.8, 8.0], { speed: 4 }], [1.75, 'trail', 'O1', { speed: 5, lag: 0.6 }]],
          }),
          ball: [{ t: 0, hold: 'O1' }, { t: 2.95, shot: 'O1', kind: 'layup' }],
          ask: {
            t: 1.65, q: 'X4 läuft mit 4 raus, X1 hat sich schon auf den Screen rechts eingestellt. Was machst Du mit dem Ball?',
            opts: [
              ['Pass zu 4', false, 'X4 ist direkt bei ihm.'],
              ['Nach links zum Korb ziehen', true, 'Richtig! X1 steht rechts, X4 ist draußen – die Mitte ist leer.'],
              ['Auf einen echten Screen warten', false, 'Dann ist der Moment vorbei.'],
            ],
          },
          steps: [
            [0, 'Gleicher Start: 4 kommt zum Ghost Screen.'],
            [1.3, 'X1 stellt sich auf den Screen von rechts ein.'],
            [1.6, '4 springt weg – aber X4 läuft diesmal mit.'],
            [1.75, 'Jetzt ist die Mitte leer: 1 zieht nach links zum Korb (Drive).'],
            [2.95, 'Korbleger.'],
          ],
        },
        {
          tab: 'Beide Verteidiger oben', dur: 3.7, screens: ghostMark,
          defenseText: 'Die Verteidiger wollen tauschen (Switch): X1 springt schon raus auf die Flare-Seite, X4 übernimmt den Ballführer.',
          answer: 'Slip: 4 schneidet zum Korb – niemand steht zwischen ihm und dem Korb.',
          o: { ...base, O4: [[0, 5.4, 6.6], [0.4, 5.4, 6.6], [1.6, 1.4, 7.95], [2.05, 0.8, 5.4], [2.45, 0.5, 2.9], [2.6, 0.4, 2.5]] },
          d: manAll({
            ...helpD,
            X1: [[0, 'man', 'O1'], [1.25, 'go', [2.7, 8.6], { speed: 6.5 }]],
            X4: [[0, 'man', 'O4'], [1.35, 'man', 'O1', { speed: 6 }]],
          }),
          ball: [{ t: 0, hold: 'O1' }, { t: 2.0, pass: ['O1', 'O4'], lob: true }, { t: 2.9, shot: 'O4', kind: 'layup' }],
          ask: {
            t: 1.5, q: 'X1 springt schon raus auf die Flare-Seite, X4 übernimmt den Ballführer (Switch). Was macht 4?',
            opts: [
              ['Trotzdem raus an die Dreierlinie (Flare)', false, 'Da wartet X1 schon.'],
              ['Zum Korb schneiden (Slip)', true, 'Richtig! Beide Verteidiger sind oben – niemand ist zwischen 4 und dem Korb.'],
              ['Stehen bleiben und doch den Screen stellen', false, 'Gegen einen Switch bringt der Screen nichts.'],
            ],
          },
          steps: [
            [0, 'Gleicher Start: 4 kommt zum Ghost Screen.'],
            [1.25, 'X1 rechnet mit dem Flare und springt schon nach außen. X4 geht zum Ballführer.'],
            [1.6, '4 sieht: Beide Verteidiger sind oben. Er schneidet zum Korb (Slip).'],
            [2.0, 'Hoher Pass von 1.'],
            [2.9, 'Korbleger.'],
          ],
        },
      ],
    };
  })();

  GS.PLAYS = [gg, bd, pd, iv, pr, gh];
  GS.CATS = ['Grundlagen', 'Screens ohne Ball', 'Screens mit Ball'];

  // Glossar: Begriffe in den Texten bekommen automatisch eine Erklärung (Hover/Tippen)
  GS.GLOSSARY = {
    'Screen': 'Ein Angreifer stellt sich einem Verteidiger in den Weg, damit ein Mitspieler frei wird. Auf Deutsch: Block.',
    'Screener': 'Der Spieler, der den Screen stellt.',
    'Pick & Roll': 'Screen für den Ballführer – danach rollt der Screener zum Korb.',
    'Ghost Screen': 'Ein Screen zum Schein: Der Screener läuft kurz vorher weg.',
    'Pin Down': 'Screen nach unten, mit dem Rücken zum Ball, für einen Spieler unter dem Korb (auch Down Screen).',
    'Iverson Cut': 'Laufweg quer über das Feld, oben an zwei Screens vorbei.',
    'Horns': 'Aufstellung mit zwei Spielern an den Ecken der Freiwurflinie – sieht aus wie Hörner.',
    'Backdoor': 'Schnitt hinter dem Verteidiger vorbei zum Korb, wenn er den Passweg zumacht.',
    'Backcut': 'Schnitt hinter dem Verteidiger vorbei zum Korb.',
    'Front Cut': 'Schnitt vor dem Verteidiger vorbei, zwischen ihm und dem Ball.',
    'V-Cut': 'Erst in eine Richtung laufen, dann scharf in die andere – wie ein V. So wird man frei.',
    'Flare': 'Der Spieler läuft vom Ball weg nach außen an die Dreierlinie.',
    'Slip': 'Der Screener läuft zum Korb, bevor (oder statt) er den Screen richtig stellt.',
    'Curl': 'Eng um den Screen herum nach innen Richtung Korb drehen.',
    'Fade': 'Vom Screen weg nach außen ausweichen, meistens in die Ecke.',
    'Roll': 'Nach dem Screen dreht sich der Screener ab und läuft zum Korb.',
    'Pull-up': 'Wurf direkt aus dem Dribbling.',
    'Switch': 'Zwei Verteidiger tauschen ihre Gegenspieler.',
    'Hedge': 'Der Verteidiger des Screeners springt kurz vor den Ballführer, um ihn zu bremsen.',
    'Show': 'Wie Hedge: kurz vor den Angreifer springen und ihn bremsen.',
    'Drop': 'Der Verteidiger des Screeners bleibt tief vor dem Korb.',
    'Under': 'Der Verteidiger geht unter dem Screen durch, zwischen Screener und Korb.',
    'Trail': 'Der Verteidiger läuft seinem Gegenspieler direkt hinterher.',
    'Deny': 'Der Verteidiger stellt sich in den Passweg, damit sein Gegenspieler den Ball nicht bekommt.',
    'Help Defense': 'Ein Verteidiger verlässt seinen Gegenspieler, um einem Mitspieler zu helfen.',
    'Jump to the Ball': 'Nach einem Pass springt der Verteidiger Richtung Ball, um Schnitte zu verhindern.',
    'Mismatch': 'Ungleiches Duell, zum Beispiel ein großer Angreifer gegen einen kleinen Verteidiger.',
    'Lob': 'Hoher Pass über die Verteidigung hinweg.',
    'Bodenpass': 'Pass, der einmal auf den Boden tippt – schwer abzufangen.',
    'Spacing': 'Abstände zwischen den Angreifern. Gutes Spacing heißt: viel Platz für jeden.',
    'Triple Threat': 'Ball sicher, Blick zum Korb: Du kannst werfen, dribbeln oder passen.',
    'Jump Stop': 'Mit beiden Füßen gleichzeitig landen und stoppen.',
    'Top': 'Mitte oben an der Dreierlinie.',
    'Elbows': 'Die Ecken der Freiwurflinie.',
    'Block': 'Die Stelle neben dem Korb am Rand der Zone (oder: ein anderes Wort für Screen).',
    'Flügel': 'Seitlich an der Dreierlinie, etwa auf Höhe der Freiwurflinie (Wing).',
    'Ecke': 'Ganz außen an der Grundlinie (Corner).',
    'Zone': 'Das Rechteck unter dem Korb (Paint).',
    'Mitteldistanz': 'Wurf von innerhalb der Dreierlinie, aber nicht direkt am Korb.',
  };
})(typeof window !== 'undefined' ? window : globalThis);
