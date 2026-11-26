// ============================================================
//  FIRST DOWN — Inhalt: Entscheidungsbaum Offense + Defense
//  Koordinaten: x = Yards von der linken Seitenlinie (0–53,3),
//  d = Yards vor (+) bzw. hinter (−) der Line of Scrimmage.
//  Laufwege (paths) sind Wegpunkte RELATIV zur Startposition:
//  [dx, dd] oder [dx, dd, Pause in s]. block:true = T-Strich am Ende.
//  {Begriff} im Text = Glossar-Tooltip (FD_GLOSSARY).
//  Beispiele: Stand vor Bears @ Lions, 26.11.2026 (Week 12).
// ============================================================

const FD_STAND = 'Stand vor Bears @ Lions, Thanksgiving 26.11.2026';

// ---------- Aufstellungen ----------
const FD_OFF = {
  // 11 Personnel aus der Shotgun: 1 HB, 1 TE, 3 WR
  gun11: {
    LT: [22.65, -0.9, 'T'], LG: [24.65, -0.9, 'G'], C: [26.65, -0.8, 'C'], RG: [28.65, -0.9, 'G'], RT: [30.65, -0.9, 'T'],
    TE: [32.8, -1.0, 'TE'], QB: [26.65, -5, 'QB'], HB: [24.6, -5, 'HB'],
    X: [4.5, -0.8, 'WR'], SL: [13, -1.5, 'WR'], Z: [47.5, -1.5, 'WR'],
  },
  // 21 Personnel, I-Formation: QB unter dem Center, FB vor dem HB
  i21: {
    LT: [22.65, -0.9, 'T'], LG: [24.65, -0.9, 'G'], C: [26.65, -0.8, 'C'], RG: [28.65, -0.9, 'G'], RT: [30.65, -0.9, 'T'],
    TE: [32.8, -1.0, 'TE'], QB: [26.65, -2.0, 'QB'], FB: [26.65, -4.5, 'FB'], HB: [26.65, -7, 'HB'],
    X: [4.5, -0.8, 'WR'], Z: [47.5, -1.5, 'WR'],
  },
};
const FD_DEF = {
  // Nickel (4-2-5) gegen 3 WR, zwei tiefe Safeties
  nickel: {
    LE: [20.9, 1.3, 'DE'], DT1: [25.65, 1.3, 'DT'], DT2: [29.65, 1.3, 'DT'], RE: [34.6, 1.3, 'DE'],
    LB1: [24.0, 5, 'LB'], LB2: [29.6, 5, 'LB'],
    CB1: [4.5, 6, 'CB'], NB: [13, 5, 'NB'], CB2: [47.5, 6, 'CB'],
    FS: [18, 13, 'S'], SS: [36, 13, 'S'],
  },
  // Base 4-3 gegen 2 RB
  base43: {
    LE: [20.9, 1.3, 'DE'], DT1: [25.65, 1.3, 'DT'], DT2: [29.65, 1.3, 'DT'], RE: [34.6, 1.3, 'DE'],
    LB1: [23.6, 5, 'LB'], LB2: [27.6, 5.5, 'LB'], LB3: [32.8, 4.5, 'LB'],
    CB1: [4.5, 6, 'CB'], CB2: [47.5, 6, 'CB'],
    FS: [20, 13, 'S'], SS: [34, 12, 'S'],
  },
};

// ---------- wiederverwendbare Bausteine ----------
const PASS_SET = { block: true, path: [[0, -1.3]] };
const RUSH = (dx = 0) => ({ path: [[dx * 0.3, -1.2], [dx, -2.2]] });

// Inside Zone nach rechts (Shotgun)
const D_INSIDE_ZONE = {
  off: 'gun11', def: 'nickel',
  paths: {
    LT: { block: true, path: [[1.2, 1.1]] }, LG: { block: true, path: [[1.2, 1.2]] }, C: { block: true, path: [[1.1, 1.2]] },
    RG: { block: true, path: [[1.1, 1.2]] }, RT: { block: true, path: [[1.0, 1.2]] }, TE: { block: true, path: [[1.0, 1.3]] },
    HB: { delay: 0.25, path: [[2.6, 0.4], [5.0, 5.2], [5.6, 10.5]] },
    QB: { delay: 0.8, path: [[-1.8, -0.6]] },
    X: { block: true, path: [[0, 4]] }, Z: { block: true, path: [[0, 4.5]] }, SL: { block: true, path: [[1, 5]] },
  },
  dpaths: {
    LE: { path: [[0.6, -0.4]] }, DT1: { path: [[0.4, -0.3]] }, DT2: { path: [[0.4, -0.3]] }, RE: { path: [[0.3, -0.3]] },
    LB1: { delay: 0.4, path: [[2.5, -0.8]] }, LB2: { delay: 0.4, path: [[0.8, -0.6]] },
    SS: { delay: 0.6, path: [[-3, -4]] },
  },
  ball: [['hand', 'HB', 0.72]],
  caption: 'Alle Blocker schieben gemeinsam nach rechts. Der HB sucht sich die Lücke, die dabei aufgeht.',
};

// Grund-Passschutz für Passspiele
const OL_PASS = { LT: PASS_SET, LG: PASS_SET, C: PASS_SET, RG: PASS_SET, RT: PASS_SET };
const DL_RUSH = { LE: RUSH(1.2), DT1: RUSH(0.3), DT2: RUSH(-0.3), RE: RUSH(-1.2) };

// ---------- Glossar ----------
const FD_GLOSSARY = {
  'Down': 'Ein Versuch. Die Offense hat 4 Downs, um 10 Yards zu schaffen. Schafft sie es, gibt es wieder einen 1st Down.',
  '1st & 10': 'Erster Versuch, noch 10 Yards bis zum neuen First Down. Die Ausgangslage jeder neuen Angriffsserie.',
  'Yard': 'Rund 0,91 Meter. Das Feld ist 100 Yards lang (plus zwei Endzonen) und 53,3 Yards breit.',
  'Line of Scrimmage': 'Die gedachte Linie, an der der Ball liegt. Vor dem Snap darf niemand sie überqueren. In der Skizze die blaue Linie.',
  'First-Down-Linie': '10 Yards vor dem Ball. Wer sie erreicht, hat wieder vier Versuche. Im Fernsehen die gelbe Linie, in der Skizze auch.',
  'Snap': 'Der Center gibt den Ball zwischen seinen Beinen an den Quarterback. Damit beginnt der Spielzug.',
  'Play Caller': 'Der Coach, der den Spielzug ansagt, meist der Offensive Coordinator (OC), manchmal der Head Coach selbst. Er funkt ihn in den Helm des QB.',
  'Huddle': 'Der Kreis vor dem Spielzug, in dem der QB der Mannschaft das Play ansagt.',
  'Personnel': 'Welche Spieler auf dem Feld stehen, als Zahl: erste Ziffer = Running Backs, zweite = Tight Ends. 11 = 1 RB, 1 TE, also 3 WR. 21 = 2 RB, 1 TE, 2 WR.',
  'Shotgun': 'Der QB steht etwa 5 Yards hinter dem Center und bekommt den Ball zugeworfen. Gut für Pässe, weil er schon Abstand zur Defense hat.',
  'Under Center': 'Der QB steht direkt hinter dem Center und bekommt den Ball in die Hand. Typisch für Laufspiele und Play-Action.',
  'QB': 'Quarterback: Spielmacher. Bekommt den Ball bei jedem Snap, wirft oder übergibt.',
  'Offensive Line': 'Die fünf Blocker vorne: Left Tackle, Left Guard, Center, Right Guard, Right Tackle. Sie dürfen keine Vorwärtspässe fangen.',
  'HB': 'Halfback (auch Running Back, RB): der Hauptläufer. Bekommt den Ball übergeben, blockt bei Pässen oder läuft selbst kurze Routen.',
  'FB': 'Fullback: kräftiger Back vor dem HB. Läuft selten selbst, sondern räumt dem HB als Vorblocker den Weg frei.',
  'TE': 'Tight End: halb Blocker, halb Passempfänger. Steht direkt neben der Offensive Line.',
  'WR': 'Wide Receiver: Passempfänger außen. Schnell, läuft Routen, blockt bei Läufen nur kurz.',
  'Slot': 'Der Raum zwischen Offensive Line und äußerem WR. Ein Slot-Receiver steht dort, oft gegen den Nickelback.',
  'Handoff': 'Der QB übergibt den Ball direkt von Hand zu Hand an einen Back.',
  'Gap': 'Die Lücke zwischen zwei Blockern. A-Gap: neben dem Center, B-Gap: zwischen Guard und Tackle, C-Gap: außerhalb des Tackles.',
  'Zone-Block': 'Blocker sichern eine Richtung bzw. einen Bereich statt eines festen Gegners. Alle bewegen sich gemeinsam.',
  'Pull': 'Ein Guard verlässt seinen Platz, läuft hinter der Line zur anderen Seite und blockt dort vorneweg.',
  'Route': 'Der vorher festgelegte Laufweg eines Passempfängers.',
  'Dropback': 'Der QB geht nach dem Snap ein paar Schritte zurück, um zu werfen. Je tiefer der Pass, desto länger der Dropback.',
  'Pocket': 'Der Schutzraum, den die Offensive Line um den werfenden QB bildet.',
  'Slant': 'Kurze Route: 2–3 Schritte gerade, dann schräg nach innen.',
  'Hitch': 'Kurze Route: 5–6 Yards gerade, dann umdrehen und zum QB schauen.',
  'Out': 'Route: gerade, dann scharf Richtung Seitenlinie.',
  'Dig': 'Mittlere Route: 10–15 Yards gerade, dann quer nach innen.',
  'Curl': 'Mittlere Route: 10–12 Yards gerade, dann zurück zum QB drehen.',
  'Go': 'Tiefe Route: einfach so schnell wie möglich geradeaus.',
  'Post': 'Tiefe Route: gerade, dann schräg Richtung Mitte, zu den Torstangen (Goalposts).',
  'Seam': 'Tiefe Route gerade durch die Lücke zwischen den Verteidigungszonen, oft vom TE oder Slot.',
  'Screen': 'Kurzer Pass hinter oder an der Line, vor dem sich Blocker aufbauen. Die Verteidiger werden absichtlich durchgelassen.',
  'Play-Action': 'Der QB täuscht einen Handoff an und wirft dann. Die Verteidiger sollen kurz auf den Lauf reinfallen.',
  'Checkdown': 'Der sichere kurze Notfall-Pass zum Back, wenn tief nichts frei ist.',
  'Incomplete': 'Der Pass wird nicht gefangen. Die Uhr stoppt, der Ball geht zurück an die alte Stelle, ein Down ist verbraucht.',
  'Interception': 'Ein Verteidiger fängt den Pass. Ballverlust.',
  'Turnover': 'Ballverlust: Interception oder Fumble (fallen gelassener Ball, den der Gegner aufnimmt).',
  'Sack': 'Der QB wird mit dem Ball hinter der Line of Scrimmage zu Boden gebracht. Raumverlust.',
  'DE': 'Defensive End: Verteidiger außen an der Line. Jagt den QB (Edge Rusher).',
  'DT': 'Defensive Tackle: Verteidiger innen an der Line, gegen Center und Guards. Stopft Läufe, drückt von innen auf den QB.',
  'Edge': 'Die Außenseite der Line. „Edge Rusher" sind die Pass Rusher, die von dort kommen.',
  'Pass Rusher': 'Verteidiger, die beim Pass den QB angreifen.',
  'LB': 'Linebacker: zweite Reihe der Defense. Stoppt Läufe und deckt kurze Pässe in der Mitte.',
  'CB': 'Cornerback: deckt die äußeren Receiver.',
  'NB': 'Nickelback: der fünfte Defensive Back, deckt meistens den Slot-Receiver.',
  'Nickel': 'Defense mit fünf Defensive Backs statt vier, die Standardantwort auf drei Receiver.',
  'S': 'Safety: letzte Verteidigungslinie, steht tief und verhindert lange Pässe.',
  'Box': 'Der Bereich direkt vor der Offensive Line. Je mehr Verteidiger in der Box stehen, desto schwerer wird ein Lauf.',
  '2-High': 'Zwei Safeties stehen tief. Schützt gut gegen lange Pässe, lässt aber weniger Leute für den Lauf.',
  '1-High': 'Nur ein Safety steht tief, der zweite rückt nach vorne. Stärker gegen den Lauf, riskanter gegen tiefe Pässe.',
  'Man Coverage': 'Manndeckung: Jeder Verteidiger hat einen festen Gegenspieler und folgt ihm überallhin.',
  'Zone Coverage': 'Raumdeckung: Jeder Verteidiger bewacht einen Bereich und deckt, wer hineinläuft.',
  'Cover 2': 'Zonendeckung mit zwei tiefen Safeties, die sich die Tiefe teilen. Die Cornerbacks bleiben kurz außen.',
  'Blitz': 'Mehr als vier Verteidiger (z. B. Linebacker oder Safety) greifen den QB an. Mehr Druck, aber weniger Leute in der Deckung.',
  'Vier-Mann-Rush': 'Nur die vier Spieler der Defensive Line greifen den QB an, sieben bleiben in der Deckung.',
  'Pressure': 'Der QB wird bedrängt (gehetzt, getroffen oder gesackt), auch wenn es nicht zum Sack kommt.',
  'Hot Route': 'Schnelle Notfall-Route bei einem Blitz: Der QB wirft sofort dorthin, wo der blitzende Verteidiger fehlt.',
  'Third Down': 'Der dritte Versuch. Schafft man hier die Yards nicht, wird im vierten Versuch meist gepuntet (Ball weit zum Gegner gekickt).',
  'Third-and-long': 'Dritter Versuch mit vielen fehlenden Yards (etwa 7+). Die Defense weiß fast sicher: Jetzt kommt ein Pass.',
  'Early Downs': 'First und Second Down. Wer hier Raum gewinnt, kommt nicht in schwere Third Downs.',
  'Ballbesitzzeit': 'Wie lange ein Team im Spiel den Ball hat. Viel Laufspiel lässt die Uhr laufen.',
  'EPA': 'Expected Points Added: wie viele Punkte ein Spielzug im Schnitt mehr (oder weniger) wert gemacht hat als erwartet. Plus ist gut für die Offense.',
  'Coordinator': 'Assistenztrainer für einen Mannschaftsteil: Offensive Coordinator (OC) für den Angriff, Defensive Coordinator (DC) für die Verteidigung.',
};

// ---------- Knoten ----------
const FD_NODES = {

  // ================= OFFENSE =================
  'o-start': {
    side: 'off', title: '1st & 10: Was jetzt?', kicker: 'Die Situation',
    text: 'Die Offense hat den Ball an der eigenen 25-Yard-Linie. {1st & 10} heißt: Sie hat vier {Down|Versuche}, um 10 {Yard|Yards} zu schaffen. In der Skizze ist die blaue Linie die {Line of Scrimmage}, die gelbe die {First-Down-Linie}.',
    why: 'Vor jedem Spielzug sagt der {Play Caller} ein Play an. Die erste und wichtigste Frage: laufen oder werfen?',
    example: 'Bei den Bears ist Head Coach Ben Johnson das Gehirn der Offense. Er war vorher {Coordinator|Offensive Coordinator} in Detroit. Die Lions kennen seine Spielzüge, er kennt ihre.',
    diagram: { off: 'gun11', def: 'nickel', caption: 'Vor dem Snap: Orange = Offense (11 Personnel), Navy = Defense (Nickel). Klick auf „Wer steht da?" für die Positionen.' },
    choices: [
      { to: 'o-run', label: 'Run', sub: 'Laufen: sicher, kleiner Gewinn' },
      { to: 'o-pass', label: 'Pass', sub: 'Werfen: mehr Raum, mehr Risiko' },
      { to: 'o-positions', label: 'Wer steht da?', sub: 'Die Positionen kurz erklärt', ghost: true },
    ],
    see: 'd-start',
  },

  'o-positions': {
    side: 'off', title: 'Wer steht da?', kicker: 'Positionen der Offense',
    text: 'Elf Spieler pro Seite. Bei der Offense müssen mindestens sieben direkt an der {Line of Scrimmage} stehen.',
    list: [
      '<b>{QB}</b>: bekommt jeden Ball, entscheidet in Sekunden.',
      '<b>{Offensive Line}</b> (T, G, C, G, T): fünf Blocker. Dürfen keine Pässe fangen.',
      '<b>{HB}</b>: Läufer. Bei Pässen blockt er oder läuft eine kurze Route.',
      '<b>{FB}</b>: Vorblocker für den HB. Heute selten, steht nur in manchen Formationen.',
      '<b>{TE}</b>: kann blocken wie ein Lineman und fangen wie ein Receiver.',
      '<b>{WR}</b>: schnelle Passempfänger, außen und im {Slot}.',
    ],
    example: 'Bei den Bears ist Colston Loveland seit Cole Kmets Saisonaus der einzige etablierte {TE}. Bei Detroit spielt Amon-Ra St. Brown die meisten Snaps im {Slot}. Jahmyr Gibbs ist {HB} und gleichzeitig Passziel aus dem Backfield.',
    diagram: { off: 'gun11', def: null, focusAll: true, caption: 'Shotgun mit 11 Personnel: 1 HB, 1 TE, 3 WR. Fahr mit der Maus über die Spieler.' },
    choices: [{ to: 'o-start', label: 'Zurück zur Entscheidung', sub: 'Run oder Pass?' }],
  },

  'o-run': {
    side: 'off', title: 'Run', kicker: 'Laufspiel',
    text: 'Der {QB} übergibt den Ball per {Handoff} an den {HB}. Die {Offensive Line} schiebt die Verteidiger weg, der HB läuft durch die Lücke.',
    why: 'Ein Lauf ist sicher: kaum Risiko eines Ballverlusts, die Uhr läuft weiter. Schon 4 Yards machen aus 1st & 10 ein bequemes 2nd & 6.',
    risk: 'Stehen viele Verteidiger in der {Box}, bleibt der Lauf oft bei 0–2 Yards stecken. Dann wird der nächste Versuch schwer.',
    example: 'Die Bears laufen für 142 Yards pro Spiel (Platz 3) und haben die meiste {Ballbesitzzeit} der Liga (34:07 Minuten pro Spiel, laut Jon Gruden). Aber Detroit lässt seit Week 5 nur 75 Rushing Yards pro Spiel zu, ebenfalls Platz 3. Stärke trifft auf Stärke.',
    ask: 'Wer blockt wie? Davon hängt ab, wohin der Lauf geht.',
    diagram: D_INSIDE_ZONE,
    choices: [
      { to: 'o-run-iz', label: 'Inside Zone', sub: 'Alle schieben zusammen, HB sucht die Lücke' },
      { to: 'o-run-oz', label: 'Outside Zone', sub: 'Alle laufen zur Seite, HB nach außen' },
      { to: 'o-run-power', label: 'Power', sub: 'Ein Guard zieht rüber und blockt vorneweg' },
      { to: 'o-run-iso', label: 'Iso mit Fullback', sub: 'Der FB räumt den Linebacker weg' },
    ],
    see: 'd-box',
  },

  'o-run-iz': {
    side: 'off', title: 'Inside Zone', kicker: 'Run · Zone-Block innen',
    text: 'Alle Blocker machen einen {Zone-Block}: Sie bewegen sich gemeinsam einen Schritt in dieselbe Richtung und nehmen, wer vor ihnen auftaucht. Der {HB} zielt auf die Mitte ({Gap|A- oder B-Gap}) und sucht sich die Lücke, die dabei aufgeht.',
    who: 'Blocken: die 5 Linemen plus der {TE}. Die {WR} blocken außen ihren Cornerback.',
    why: 'Einfach, schwer auszurechnen. Der HB entscheidet erst im Lauf, wo es durchgeht.',
    risk: 'Gewinnt ein starker {DT} innen sein Duell, ist die Mitte zu.',
    example: 'Genau hier wird es interessant, wenn Detroit läuft: Die Bears haben mit Jeffery Simmons seit der Trade Deadline einen {DT}, der innen allein Spielzüge zerstört. Ihre Run-Defense gilt trotzdem als ihr wackligster Teil.',
    result: 'Typisch: 3–5 Yards → 2nd & 5 bis 7.',
    diagram: D_INSIDE_ZONE,
    choices: [{ to: 'o-run', label: 'Andere Laufart', sub: 'Zurück zu „Run"' }, { to: 'o-pass-pa', label: 'Nächster Schritt: Play-Action', sub: 'Läuft der Lauf, wirkt die Täuschung' }],
    see: 'd-box',
  },

  'o-run-oz': {
    side: 'off', title: 'Outside Zone', kicker: 'Run · Zone-Block außen',
    text: 'Die Blocker laufen alle seitwärts Richtung Seitenlinie. Der {HB} läuft parallel mit und will außen um die Verteidigung herum. Macht die Defense außen zu, schneidet er zurück nach innen.',
    who: 'Blocken: alle Linemen und der {TE} in dieselbe Richtung, die {WR} halten außen ihre Cornerbacks fest.',
    why: 'Zieht die ganze Defense in die Breite. Gut für schnelle Backs, die einen Haken schlagen können.',
    risk: 'Ein schneller Verteidiger von außen ({DE}) kann den Lauf hinter der Line stoppen.',
    example: 'Jahmyr Gibbs führt die NFL bei Rushing Yards an (1.098 nach Week 11). Mit seinem Tempo ist er der Typ Back, für den so ein Lauf gemacht ist.',
    result: 'Typisch: oft 2–4 Yards, manchmal ein langer Lauf, wenn der Haken sitzt.',
    diagram: {
      off: 'gun11', def: 'nickel',
      paths: {
        LT: { block: true, path: [[2.6, 0.5]] }, LG: { block: true, path: [[2.6, 0.6]] }, C: { block: true, path: [[2.6, 0.7]] },
        RG: { block: true, path: [[2.6, 0.7]] }, RT: { block: true, path: [[2.6, 0.7]] }, TE: { block: true, path: [[2.4, 0.9]] },
        HB: { delay: 0.2, path: [[2.6, 0.2], [10.6, 3.4], [12.6, 9.5]] }, QB: { delay: 0.8, path: [[-1.5, -0.7]] },
        X: { block: true, path: [[0, 4]] }, SL: { block: true, path: [[0.6, 4.5]] }, Z: { block: true, path: [[-0.5, 5]] },
      },
      dpaths: {
        LE: { path: [[1.8, -0.2]] }, DT1: { path: [[1.8, -0.2]] }, DT2: { path: [[1.8, -0.2]] }, RE: { path: [[1.5, -0.6]] },
        LB1: { delay: 0.3, path: [[5, -0.5]] }, LB2: { delay: 0.3, path: [[5, 0]] }, SS: { delay: 0.5, path: [[2, -5]] },
      },
      ball: [['hand', 'HB', 0.66]],
      caption: 'Alle laufen nach rechts. Der HB rennt mit und biegt außen am TE vorbei nach vorne ab.',
    },
    choices: [{ to: 'o-run', label: 'Andere Laufart', sub: 'Zurück zu „Run"' }],
    see: 'd-box',
  },

  'o-run-power': {
    side: 'off', title: 'Power', kicker: 'Run · Gap-Block mit Pull',
    text: 'Hier blockt jeder einen festen Gegner. Auf der Laufseite blocken die Linemen schräg nach innen. Der linke Guard verlässt seinen Platz ({Pull}), läuft hinter der Line rüber und blockt als Vorblocker den {LB}. Der {FB} räumt den Verteidiger außen ({DE}) weg.',
    who: 'Blocken: Laufseite schräg nach innen, Guard zieht rüber, FB auf den DE. Der {HB} läuft hinter dem Guard her.',
    why: 'An der Lücke stehen plötzlich mehr Blocker als Verteidiger. Gut für kurze Distanzen und kräftige Läufer.',
    risk: 'Braucht Zeit. Kommt ein Verteidiger durch die Lücke, die der Guard verlassen hat, ist der Lauf tot.',
    example: 'Allgemein: Gegen eine Defense, die wie Detroit seit Week 5 sehr wenig Laufraum zulässt, braucht man genau solche Extra-Blocker an einer Stelle.',
    result: 'Typisch: 3–4 Yards, gut auch bei 3rd & 1.',
    diagram: {
      off: 'i21', def: 'base43',
      paths: {
        LT: { block: true, path: [[0.6, 1.0]] }, LG: { block: true, path: [[0.3, -1.1], [6.6, -1.0], [7.0, 4.0]] },
        C: { block: true, path: [[-0.9, 1.1]] }, RG: { block: true, path: [[-1.0, 1.2]] }, RT: { block: true, path: [[-1.0, 1.2]] },
        TE: { block: true, path: [[-1.4, 1.6]] },
        FB: { block: true, delay: 0.1, path: [[6.9, 5.0]] },
        QB: { path: [[0.6, -1.2], [-0.6, -2.2, 0.3]] },
        HB: { delay: 0.35, path: [[0.6, 2.6], [5.0, 6.4], [5.6, 13]] },
        X: { block: true, path: [[0, 4]] }, Z: { block: true, path: [[0, 5]] },
      },
      dpaths: {
        LE: { path: [[0.8, -0.7]] }, DT1: { path: [[0.3, -0.3]] }, DT2: { path: [[0.2, -0.3]] }, RE: { path: [[-0.4, -1.2]] },
        LB2: { delay: 0.3, path: [[2.0, -1.0]] }, LB3: { delay: 0.3, path: [[-0.8, -1.2]] }, SS: { delay: 0.5, path: [[-3, -5]] },
      },
      ball: [['hand', 'HB', 0.9]],
      caption: 'Der linke Guard (G) zieht hinter der Line nach rechts, der FB nimmt den DE. Der HB folgt dem Guard durch die Lücke.',
    },
    choices: [{ to: 'o-run', label: 'Andere Laufart', sub: 'Zurück zu „Run"' }],
    see: 'd-box',
  },

  'o-run-iso': {
    side: 'off', title: 'Iso mit Fullback', kicker: 'Run · FB als Vorblocker',
    text: 'Die Linemen blocken ihren direkten Gegner. Genau einer bleibt frei: der {LB} in der Mitte. Den „isoliert" der {FB} und rennt ihn um. Der {HB} läuft direkt hinter dem FB durch dieselbe Lücke.',
    who: 'HB oder FB? Der {HB} ist der Läufer mit Tempo und Ballgefühl. Der {FB} ist der Vorblocker, ein Lineman mit Anlauf. Er trägt den Ball fast nie.',
    why: 'Direkt, kraftvoll, schnell an der Line. Der HB hat einen Bodyguard vor sich.',
    risk: 'Braucht einen echten FB auf dem Feld. Das verrät der Defense früh: Jetzt wird wahrscheinlich gelaufen.',
    result: 'Typisch: 2–4 Yards, selten groß, selten negativ.',
    diagram: {
      off: 'i21', def: 'base43',
      paths: {
        LT: { block: true, path: [[-0.4, 1.0]] }, LG: { block: true, path: [[0.4, 1.2]] }, C: { block: true, path: [[-0.4, 1.0]] },
        RG: { block: true, path: [[0.3, 1.2]] }, RT: { block: true, path: [[0.6, 1.0]] }, TE: { block: true, path: [[0.8, 1.1]] },
        FB: { block: true, path: [[-2.9, 9.3]] },
        QB: { path: [[-0.6, -1.3], [0.4, -2.3, 0.2]] },
        HB: { delay: 0.15, path: [[-1.2, 4.0], [-2.9, 8.2], [-3.5, 15]] },
        X: { block: true, path: [[0, 4]] }, Z: { block: true, path: [[0, 5]] },
      },
      dpaths: {
        LE: { path: [[0.3, -0.4]] }, DT1: { path: [[0.2, -0.3]] }, DT2: { path: [[0, -0.3]] }, RE: { path: [[0, -0.3]] },
        LB1: { delay: 0.3, path: [[0.8, -1.0]] }, LB2: { delay: 0.3, path: [[-1.5, -0.5]] }, LB3: { delay: 0.3, path: [[-1.5, -0.5]] },
      },
      ball: [['hand', 'HB', 0.82]],
      caption: 'Der FB rennt durch die Lücke links neben dem Center und blockt den Linebacker. Der HB folgt ihm.',
    },
    choices: [{ to: 'o-run', label: 'Andere Laufart', sub: 'Zurück zu „Run"' }],
    see: 'd-box',
  },

  'o-pass': {
    side: 'off', title: 'Pass', kicker: 'Passspiel',
    text: 'Der {QB} macht einen {Dropback}, die {Offensive Line} bildet die {Pocket} um ihn. Die Receiver laufen vorher festgelegte {Route|Routen}, der QB sucht den freien Mann.',
    why: 'Ein Pass bringt mehr Raum: 10, 20, manchmal 50 Yards in einem Zug.',
    risk: 'Drei Dinge können schiefgehen: {Incomplete} (Versuch verschenkt), {Sack} (Raumverlust) oder {Interception} (Ballverlust).',
    example: 'Bei Turnovers haben die Bears gerade ein Problem: Aus den letzten 17 Drives aus der eigenen Hälfte kamen 7 {Turnover} und kein Touchdown (laut Jon Gruden). Turnover-Differenz Bears −4, Lions +2.',
    ask: 'Welche Art Pass? Faustregel: je tiefer, desto länger muss die Line halten.',
    diagram: {
      off: 'gun11', def: 'nickel',
      paths: Object.assign({}, OL_PASS, {
        QB: { path: [[0, -1.8]] }, HB: { block: true, path: [[1.4, 0.6]] },
        X: { path: [[0, 12], [11, 12]] }, SL: { path: [[0, 16]] }, Z: { path: [[0, 11], [-1, 9.6]] }, TE: { path: [[-1.5, 5], [-11, 6]] },
      }),
      dpaths: Object.assign({}, DL_RUSH, {
        LB1: { path: [[-2, 4]] }, LB2: { path: [[1, 4]] }, NB: { path: [[1, 6]] },
        CB1: { path: [[0, 4]] }, CB2: { path: [[0, 3]] }, FS: { path: [[-1, 3]] }, SS: { path: [[0, 3]] },
      }),
      ball: [['pass', 'Z', 2.1, 0.5]],
      caption: 'Fünf Blocker plus der HB schützen den QB. Vier Receiver laufen Routen in verschiedene Tiefen.',
    },
    choices: [
      { to: 'o-pass-quick', label: 'Kurz (Quick Game)', sub: '0–7 Yards, Ball nach 2 Sekunden weg' },
      { to: 'o-pass-mid', label: 'Mittel', sub: '10–20 Yards, braucht gute Line' },
      { to: 'o-pass-deep', label: 'Tief', sub: '20+ Yards, Big Play oder nichts' },
      { to: 'o-pass-screen', label: 'Screen', sub: 'Kurz zum HB, Blocker davor' },
      { to: 'o-pass-pa', label: 'Play-Action', sub: 'Lauf antäuschen, dann werfen' },
    ],
    see: 'd-coverage',
  },

  'o-pass-quick': {
    side: 'off', title: 'Kurzer Pass (Quick Game)', kicker: 'Pass · 0–7 Yards',
    text: 'Der {QB} macht nur drei schnelle Schritte und wirft sofort. Die Receiver laufen kurze Routen: {Slant}, {Hitch} oder {Out}.',
    who: 'Ziel: meistens die {WR}, oft im {Slot}. Der {HB} bleibt zum Blocken drin.',
    why: 'Der Ball ist weg, bevor die Defense am QB ist. Fast so sicher wie ein Lauf, und die beste Antwort auf einen {Blitz}.',
    risk: 'Kleiner Gewinn. Lauert ein Verteidiger auf der Route, droht eine {Interception}.',
    example: 'Gegen den {Blitz} der Saints brachte Caleb Williams nur 5 von 12 Pässen für 36 Yards an, dazu eine Interception. Jon Gruden erwartet deshalb, dass Detroit ihn heute mit Blitzes testet. Schnelle, kurze Pässe sind die Gegenwaffe.',
    result: 'Typisch: 5–7 Yards → 2nd & 3 bis 5.',
    diagram: {
      off: 'gun11', def: 'nickel',
      paths: Object.assign({}, OL_PASS, {
        QB: { path: [[0, -1.5]] }, HB: { block: true, path: [[1.4, 0.6]] },
        X: { path: [[0.8, 3.5], [8, 8.5]] }, SL: { path: [[0, 4.5], [-5.5, 4.5]] },
        Z: { path: [[0, 6], [-0.4, 5]] }, TE: { path: [[3, 2], [8, 2.5]] },
      }),
      dpaths: Object.assign({}, DL_RUSH, {
        LB1: { path: [[-1, 3]] }, LB2: { path: [[1.5, 2.5]] }, NB: { path: [[-1, 1]] },
        CB1: { delay: 0.3, path: [[0.5, -1], [4, 1.5]] }, CB2: { path: [[0, -1]] }, FS: { path: [[0, 2]] }, SS: { path: [[0, 2]] },
      }),
      ball: [['pass', 'X', 1.25, 0.45]],
      caption: 'Drei Schritte, Wurf. Der äußere WR läuft einen Slant schräg nach innen, vor den Cornerback.',
    },
    choices: [{ to: 'o-pass', label: 'Andere Passart', sub: 'Zurück zu „Pass"' }],
    see: 'd-blitz',
  },

  'o-pass-mid': {
    side: 'off', title: 'Mittlerer Pass', kicker: 'Pass · 10–20 Yards',
    text: 'Der {QB} geht fünf Schritte zurück. Die Receiver laufen {Dig}- und {Curl}-Routen in die Lücken der Verteidigung, genau zwischen Linebackern und Safeties.',
    who: 'Ziel: {WR} und {TE}. Der TE ist hier wertvoll, weil Linebacker ihn decken müssen und meist langsamer sind.',
    why: 'Mit einem Pass ist der First Down geschafft. Das ist das Brot-und-Butter-Passspiel.',
    risk: 'Die Line muss knapp 3 Sekunden halten. Wirft der QB in die Mitte und ein Linebacker steht im Weg, kommt es zur {Interception}.',
    example: 'Detroit fehlen Linebacker Jack Campbell und Jimmy Rolder für die Saison. Das öffnet Raum in der Mitte für Bears-{TE} Colston Loveland. Umgekehrt sucht Detroit dort Sam LaPorta, wenn die Bears-Linebacker auf Gibbs fixiert sind.',
    result: 'Typisch: 12–15 Yards → neuer 1st & 10.',
    diagram: {
      off: 'gun11', def: 'nickel',
      paths: Object.assign({}, OL_PASS, {
        QB: { path: [[0, -2.2]] }, HB: { block: true, path: [[1.4, 0.6]] },
        X: { path: [[0, 12], [12, 12.5]] }, SL: { path: [[0, 16]] }, Z: { path: [[0, 11], [-1, 9.6]] },
        TE: { path: [[-1, 6], [-9, 8]] },
      }),
      dpaths: Object.assign({}, DL_RUSH, {
        LB1: { path: [[-3.5, 5]] }, LB2: { path: [[1.5, 5]] }, NB: { path: [[0, 7]] },
        CB1: { path: [[0, 5]] }, CB2: { path: [[0, 3]] }, FS: { path: [[-2, 4]] }, SS: { path: [[1, 4]] },
      }),
      ball: [['pass', 'X', 2.45, 0.55]],
      caption: 'Der äußere WR läuft 12 Yards gerade, dann quer nach innen (Dig). Er fängt hinter den Linebackern, vor den Safeties.',
    },
    choices: [{ to: 'o-pass', label: 'Andere Passart', sub: 'Zurück zu „Pass"' }],
    see: 'd-zone',
  },

  'o-pass-deep': {
    side: 'off', title: 'Tiefer Pass', kicker: 'Pass · 20+ Yards',
    text: 'Der {QB} geht weit zurück, die Receiver laufen {Go} oder {Post}. Oft bleiben {TE} und {HB} zum Blocken drin, damit der QB genug Zeit hat.',
    who: 'Ziel: der schnellste {WR}. TE und HB blocken.',
    why: 'Ein Treffer bringt 30, 40 Yards oder direkt den Touchdown. Schon die Drohung zwingt die Defense, Safeties tief zu lassen. Das öffnet wiederum Platz für den Lauf.',
    risk: 'Braucht viel Zeit (3+ Sekunden) und einen QB mit starkem Arm. Klappt es nicht, ist es meist {Incomplete}, manchmal ein {Sack}.',
    example: 'Der Bagent-Vergleich: Im Oktober in Green Bay spielte Backup-QB Tyson Bagent, der den tiefen Ball nicht werfen kann. Die Packers brauchten deshalb hinten nur einen {S|Safety}, der zweite rückte nach vorne und verstopfte das Laufspiel (Bears verloren 7-31). Gegen Caleb Williams geht das nicht. Er kann aus jeder Lage tief werfen, und er hält den Ball im Schnitt 3,27 Sekunden, länger als fast jeder andere QB.',
    result: 'Ergebnis: entweder 25+ Yards oder 0 Yards → 2nd & 10.',
    diagram: {
      off: 'gun11', def: 'nickel',
      paths: Object.assign({}, OL_PASS, {
        QB: { path: [[0, -3]] }, HB: { block: true, path: [[1.4, 0.6]] }, TE: { block: true, path: [[0.4, -0.6]] },
        X: { path: [[0, 23]] }, SL: { path: [[0, 10], [2, 12]] }, Z: { path: [[0, 11], [-9, 22.5]] },
      }),
      dpaths: Object.assign({}, DL_RUSH, {
        LB1: { path: [[-2, 4]] }, LB2: { path: [[2, 4]] }, NB: { path: [[0.5, 8]] },
        CB1: { path: [[0, 12]] }, CB2: { delay: 0.3, path: [[0, 8], [-5, 14]] }, FS: { path: [[0, 6]] }, SS: { delay: 0.4, path: [[-1, 5]] },
      }),
      ball: [['pass', 'Z', 2.75, 0.95]],
      caption: 'TE und HB bleiben zum Blocken. Der rechte WR läuft einen Post Richtung Mitte, über den Safety hinweg.',
    },
    choices: [{ to: 'o-pass', label: 'Andere Passart', sub: 'Zurück zu „Pass"' }],
    see: 'd-box',
  },

  'o-pass-screen': {
    side: 'off', title: 'Screen', kicker: 'Pass · kurz hinter die Line',
    text: 'Ein Trick-Pass: Die Linemen tun kurz so, als würden sie blocken, und lassen die Verteidiger dann absichtlich durch. Dann laufen sie zur Seite und bauen eine Wand. Der {QB} wirft kurz zum {HB}, der hinter dieser Wand losläuft.',
    who: 'Ziel: meistens der {HB}, manchmal ein {WR}. Die WR laufen tief, um ihre Verteidiger wegzulocken.',
    why: 'Die Defense rennt mit Schwung auf den QB zu und steht plötzlich falsch. Am besten gegen einen {Blitz} oder sehr aggressiven Pass Rush.',
    risk: 'Durchschaut die Defense den Screen, steht ein Verteidiger genau im Weg. Dann bleibt es bei 0 Yards oder weniger.',
    example: 'Jahmyr Gibbs ist auch als Passempfänger gefährlich: Gegen New England fing er 7 Pässe für 99 Yards, zusätzlich zu 153 Rushing Yards. Ein Back, der beides kann, macht Screens besonders gefährlich.',
    result: 'Typisch: 5–8 Yards, mit Glück viel mehr.',
    diagram: {
      off: 'gun11', def: 'nickel',
      paths: {
        LT: PASS_SET, LG: PASS_SET,
        C: { block: true, speed: 5, path: [[0, -1.1, 0.5], [4.5, -1.6], [7, 1.5]] },
        RG: { block: true, speed: 5, path: [[0, -1.1, 0.4], [3.5, -1.6], [5.5, 1.8]] },
        RT: { block: true, speed: 5, path: [[0, -1.1, 0.4], [2.6, -1.4], [4.5, 2.6]] },
        QB: { path: [[0, -3.5]] }, HB: { path: [[1.4, 0.6, 0.6], [7.5, 2.8, 0.3], [10, 8], [11, 15]] },
        TE: { path: [[1, 4], [1, 10]] }, X: { path: [[0, 16]] }, SL: { path: [[0, 15]] }, Z: { path: [[0, 12], [-1, 18]] },
      },
      dpaths: {
        LE: { path: [[1.5, -2.5], [3.2, -6]] }, DT1: { path: [[0.5, -3], [0.8, -6]] }, DT2: { path: [[-0.5, -3], [-1.5, -5.8]] }, RE: { path: [[-1.5, -3], [-5.5, -5.5]] },
        LB1: { path: [[-1, 3]] }, LB2: { delay: 0.6, path: [[1, 2], [3, -0.5]] }, NB: { path: [[0, 6]] },
        CB1: { path: [[0, 9]] }, CB2: { path: [[0, 8]] }, FS: { path: [[0, 4]] }, SS: { path: [[0, 2]] },
      },
      ball: [['pass', 'HB', 1.95, 0.4]],
      caption: 'Die Verteidiger dürfen durch. Drei Linemen laufen nach rechts und blocken vor dem HB, der den kurzen Pass fängt.',
    },
    choices: [{ to: 'o-pass', label: 'Andere Passart', sub: 'Zurück zu „Pass"' }],
    see: 'd-four',
  },

  'o-pass-pa': {
    side: 'off', title: 'Play-Action', kicker: 'Pass · Lauf antäuschen',
    text: 'Der {QB} hält dem {HB} den Ball hin, als wäre es ein Lauf, zieht ihn aber zurück und wirft. Die Linemen blocken erst wie bei einem Lauf.',
    who: 'Ziel: {WR} oder {TE} hinter den Linebackern. Der {HB} läuft nach der Täuschung weiter, damit die Defense ihm folgt.',
    why: 'Die {LB|Linebacker} machen beim Lauf einen Schritt nach vorne. Genau dieser Schritt öffnet den Raum hinter ihnen.',
    risk: 'Funktioniert nur, wenn die Defense den Lauf fürchtet. Wenn nicht, verliert der QB durch die Täuschung wertvolle Zeit.',
    example: 'Das ist Detroits Plan: Gelingen Gibbs auf First Down regelmäßig 4 bis 6 Yards, kann Jared Goff aus Play-Action werfen statt in {Third-and-long} gegen die beste Third-Down-Defense der Liga.',
    result: 'Typisch: 15+ Yards, wenn die Linebacker anbeißen.',
    diagram: {
      off: 'gun11', def: 'nickel',
      paths: {
        LT: { block: true, path: [[0.9, 0.8]] }, LG: { block: true, path: [[0.9, 0.9]] }, C: { block: true, path: [[0.8, 0.9]] },
        RG: { block: true, path: [[0.8, 0.9]] }, RT: { block: true, path: [[0.8, 0.9]] }, TE: { block: true, path: [[0.6, 0.8]] },
        QB: { path: [[0.5, -0.2, 0.45], [-0.3, -2.6]] }, HB: { delay: 0.2, path: [[2.4, 0.3], [4.5, 4], [6, 5]] },
        X: { path: [[0, 21]] }, SL: { path: [[0, 9], [2.5, 17]] }, Z: { path: [[0, 7], [-21, 15]] },
      },
      dpaths: {
        LE: { path: [[0.4, -0.5], [1.5, -3.5]] }, DT1: { path: [[0.2, -0.3]] }, DT2: { path: [[0.2, -0.3]] }, RE: { path: [[0, -0.4]] },
        LB1: { delay: 0.25, path: [[1.6, -1.8, 0.3], [0.5, 2]] }, LB2: { delay: 0.25, path: [[0.6, -2, 0.3], [-1, 1.5]] },
        NB: { path: [[0.5, 6]] }, CB1: { path: [[0, 12]] }, CB2: { path: [[0, 6]] }, FS: { path: [[0, 4]] }, SS: { delay: 0.3, path: [[-2, -3, 0.3], [-4, 1]] },
      },
      ball: [['fake', 'HB', 0.65], ['pass', 'Z', 2.75, 0.7]],
      caption: 'Täuschung zum HB, die Linebacker steigen nach vorne ein. Hinter ihnen kreuzt der rechte WR quer übers Feld.',
    },
    choices: [{ to: 'o-pass', label: 'Andere Passart', sub: 'Zurück zu „Pass"' }],
    see: 'd-box',
  },

  // ================= DEFENSE =================
  'd-start': {
    side: 'def', title: '1st & 10: Was sieht die Defense?', kicker: 'Die Situation',
    text: 'Die Defense weiß nicht, was kommt. Sie sieht nur, wer auf dem Feld steht ({Personnel}) und wie die Offense sich aufstellt. Hier: 3 {WR}, 1 {TE}, 1 {HB}, der {QB} in der {Shotgun}.',
    why: 'Der Defensive {Coordinator} entscheidet vorher drei Dinge: Wie viele Leute stelle ich gegen den Lauf? Wie decke ich die Receiver? Wie viele greifen den QB an?',
    example: 'Die Bears-Defense unter Dennis Allen lässt Gegner nur 22,8 % ihrer Third Downs verwandeln, Ligabestwert und unter dem NFL-Rekord (Patriots 2019, 24,1 %). Für die Lions heißt das: Auf First Down muss etwas gehen, bevor es {Third Down} wird.',
    diagram: { off: 'gun11', def: 'nickel', focusDef: true, caption: 'Gegen 3 WR stellt die Defense meist Nickel auf: 4 an der Line, 2 Linebacker, 5 Defensive Backs.' },
    choices: [
      { to: 'd-box', label: 'Lauf stoppen', sub: 'Mehr Leute nach vorne in die Box' },
      { to: 'd-coverage', label: 'Pass verteidigen', sub: 'Mann- oder Raumdeckung?' },
      { to: 'd-pressure', label: 'QB unter Druck setzen', sub: 'Mit vier oder mit Blitz?' },
      { to: 'd-positions', label: 'Wer steht da?', sub: 'Die Positionen kurz erklärt', ghost: true },
    ],
    see: 'o-start',
  },

  'd-positions': {
    side: 'def', title: 'Wer steht da?', kicker: 'Positionen der Defense',
    text: 'Die Defense stellt sich in drei Reihen auf.',
    list: [
      '<b>Defensive Line</b>: zwei {DE} außen, zwei {DT} innen. Kämpfen gegen die Offensive Line.',
      '<b>{LB}</b>: zweite Reihe. Stoppen Läufe, decken kurze Pässe in der Mitte.',
      '<b>{CB}</b>: decken die äußeren Receiver.',
      '<b>{NB}</b>: fünfter Defensive Back, deckt meist den {Slot}.',
      '<b>{S}</b>: die letzte Reihe, tief gegen lange Pässe.',
    ],
    example: 'Detroit fehlt mit Aidan Hutchinson (Kreuzbandriss) der beste {DE}. Bei den Bears fehlt Nickelback Kyler Gordon, der normalerweise den Slot deckt, also Amon-Ra St. Brown.',
    diagram: { off: 'gun11', def: 'nickel', focusDef: true, offFaint: true, caption: 'Nickel-Defense. Fahr mit der Maus über die Spieler.' },
    choices: [{ to: 'd-start', label: 'Zurück zur Entscheidung', sub: 'Was macht die Defense?' }],
  },

  'd-box': {
    side: 'def', title: 'Lauf stoppen: 8 in der Box', kicker: 'Defense gegen den Lauf',
    text: 'Ein {S|Safety} rückt vor dem Snap nach vorne. Jetzt stehen acht Verteidiger in der {Box}, gegen nur sechs Blocker. Hinten bleibt nur ein Safety tief ({1-High}).',
    why: 'Mehr Verteidiger als Blocker heißt: Einer ist immer frei und stoppt den Läufer.',
    risk: 'Hinten fehlt ein Mann. Die {CB|Cornerbacks} stehen allein gegen die Receiver, ein tiefer Pass oder {Play-Action} kann sofort ein Touchdown sein.',
    example: 'Das machten die Packers gegen Backup Tyson Bagent: Weil er nicht tief werfen kann, kostete der achte Mann vorne kein Risiko. Gegen Caleb Williams ist genau dieser Plan gefährlich, weil er den tiefen Ball wirft.',
    result: 'Gegen den Lauf: oft 0–2 Yards. Gegen einen Pass: offene Tiefe.',
    diagram: {
      off: 'gun11', def: 'nickel', snap: 1.4,
      paths: D_INSIDE_ZONE.paths,
      dpaths: {
        SS: { path: [[-4.5, -6.5]] }, FS: { path: [[8.65, 2]] },
        LE: { delay: 1.4, path: [[0.6, -0.4]] }, DT1: { delay: 1.4, path: [[0.4, -0.3]] }, DT2: { delay: 1.4, path: [[0.4, -0.3]] }, RE: { delay: 1.4, path: [[0.3, -0.5]] },
        LB1: { delay: 1.8, path: [[2.5, -0.8]] }, LB2: { delay: 1.8, path: [[0.8, -1]] },
      },
      ball: [['hand', 'HB', 0.72]],
      caption: 'Vor dem Snap rückt der rechte Safety nach vorne, der linke geht in die Mitte. Der Lauf trifft auf acht Mann.',
    },
    choices: [{ to: 'd-start', label: 'Andere Idee', sub: 'Zurück zur Situation' }],
    see: 'o-pass-deep',
  },

  'd-coverage': {
    side: 'def', title: 'Pass verteidigen', kicker: 'Coverage',
    text: 'Zwei Grundideen: Entweder bekommt jeder Verteidiger einen festen Gegenspieler ({Man Coverage}), oder jeder bewacht einen Bereich ({Zone Coverage}).',
    why: 'Die Wahl hängt vom Gegner ab: Welche Receiver sind schneller als meine Verteidiger? Was kann der QB besonders gut?',
    example: 'Detroit hat seine Defense seit Week 5 umgebaut: Bei Blitzes spielen die Lions jetzt in 63,1 % der Fälle Manndeckung statt 38,5 %. Seitdem kassieren sie viel weniger Punkte.',
    diagram: { off: 'gun11', def: 'nickel', focusDef: true, caption: 'Gleiche Aufstellung, zwei Möglichkeiten. Wähle unten.' },
    choices: [
      { to: 'd-man', label: 'Man Coverage', sub: 'Jeder hat seinen Mann' },
      { to: 'd-zone', label: 'Zone (Cover 2)', sub: 'Jeder hat seinen Raum' },
    ],
    see: 'o-pass',
  },

  'd-man': {
    side: 'def', title: 'Man Coverage', kicker: 'Coverage · Manndeckung',
    text: 'Jeder Verteidiger folgt seinem Receiver überallhin, wie im Basketball die Manndeckung. Oft bleibt ein {S|Safety} tief als Absicherung.',
    why: 'Die ersten, schnellen Optionen des QB sind zu. Er muss den Ball länger halten, und in der Zeit soll der {Pass Rusher|Pass Rush} ihn erwischen.',
    risk: 'Ist ein Receiver schneller als sein Verteidiger, ist er frei. Und hält der QB lange genug durch, findet er irgendwann eine Lücke.',
    example: 'Detroits Prinzip: erst decken, dann Druck. Damit das aufgeht, muss am Ende jemand den QB erreichen. Genau dieser Spieler fehlt: Hutchinson ist für die Saison raus, DJ Wonnum (7 Sacks) ist fraglich. Und Caleb Williams ist ein QB, der Spielzüge so lange verlängert wie kaum ein anderer.',
    result: 'Gelingt es: Incomplete oder Sack. Sonst: ein Receiver gewinnt sein Duell.',
    diagram: {
      off: 'gun11', def: 'nickel',
      paths: Object.assign({}, OL_PASS, {
        QB: { path: [[0, -2.2]] }, HB: { block: true, path: [[1.4, 0.6]] },
        X: { path: [[0, 12], [11, 12.5]] }, SL: { path: [[0, 5], [-6, 5]] }, Z: { path: [[0, 10], [-1, 8.8]] }, TE: { path: [[1.5, 4], [1.5, 13]] },
      }),
      dpaths: Object.assign({}, DL_RUSH, {
        CB1: { follow: 'X', lag: 0.25, off: [0.6, 1.0] }, NB: { follow: 'SL', lag: 0.25, off: [0, 1.0] },
        CB2: { follow: 'Z', lag: 0.25, off: [0, 1.0] }, SS: { follow: 'TE', lag: 0.4, off: [0.4, 1.0] },
        LB1: { path: [[0, 3]] }, LB2: { follow: 'HB', lag: 0.2, off: [0, 3.5] }, FS: { path: [[8.6, 3]] },
      }),
      ball: [['pass', 'Z', 2.4, 0.5]],
      caption: 'Jeder Verteidiger klebt an seinem Receiver. Ein Safety bleibt tief in der Mitte als Absicherung.',
    },
    choices: [{ to: 'd-coverage', label: 'Andere Deckung', sub: 'Zurück zu „Pass verteidigen"' }],
    see: 'o-pass-quick',
  },

  'd-zone': {
    side: 'def', title: 'Zone: Cover 2', kicker: 'Coverage · Raumdeckung',
    text: 'Jeder Verteidiger läuft in seinen Bereich und deckt, wer hineinkommt. Bei {Cover 2} teilen sich zwei {S|Safeties} die Tiefe, die {CB|Cornerbacks} bleiben kurz außen, die {LB|Linebacker} decken die Mitte.',
    why: 'Alle schauen auf den QB statt auf ihren Mann. Lange Pässe sind schwer, und wer den Ball fängt, wird sofort getackelt.',
    risk: 'Zwischen den Zonen gibt es Lücken. Ein guter QB wirft genau dorthin, zum Beispiel einen {Dig} hinter die Linebacker.',
    example: 'Gegen Zone Coverage lag Caleb Williams Anfang November bei der {EPA}-Effizienz auf Platz 2 der Liga. Raumdeckung allein ist gegen ihn also auch kein Selbstläufer.',
    result: 'Gelingt es: kurzer Gewinn, keine Big Plays. Sonst: Pass in die Lücke.',
    diagram: {
      off: 'gun11', def: 'nickel',
      zones: [[9, 4, 6, 3, 'Flat'], [44, 4, 6, 3, 'Flat'], [19, 9, 5.5, 3.5, 'Hook'], [34, 9, 5.5, 3.5, 'Hook'], [26.65, 10, 4, 3.5, 'Mitte'], [13, 19, 11, 4.5, 'tiefe Hälfte'], [40, 19, 11, 4.5, 'tiefe Hälfte']],
      paths: Object.assign({}, OL_PASS, {
        QB: { path: [[0, -2.2]] }, HB: { block: true, path: [[1.4, 0.6]] },
        X: { path: [[0, 12], [12, 12.5]] }, SL: { path: [[0, 15]] }, Z: { path: [[0, 10], [-1, 8.8]] }, TE: { path: [[3, 2], [9, 3]] },
      }),
      dpaths: Object.assign({}, DL_RUSH, {
        CB1: { path: [[4, -2]] }, CB2: { path: [[-3.5, -2]] }, NB: { path: [[5, 4]] },
        LB1: { path: [[-1.5, 4]] }, LB2: { path: [[4, 4]] },
        FS: { path: [[-5, 6]] }, SS: { path: [[4, 6]] },
      }),
      ball: [['pass', 'X', 2.45, 0.55]],
      caption: 'Jeder läuft in seine Zone (schattiert). Der Dig des linken WR landet genau in der Lücke zwischen Hook und Safety.',
    },
    choices: [{ to: 'd-coverage', label: 'Andere Deckung', sub: 'Zurück zu „Pass verteidigen"' }],
    see: 'o-pass-mid',
  },

  'd-pressure': {
    side: 'def', title: 'QB unter Druck setzen', kicker: 'Pass Rush',
    text: 'Wie viele Verteidiger greifen den QB an? Normalerweise vier (die Defensive Line). Kommen mehr dazu, ist es ein {Blitz}.',
    why: 'Jeder zusätzliche Angreifer erhöht den Druck, fehlt aber hinten in der Deckung. Das ist der ewige Tausch.',
    example: 'Die Bears haben dieses Spiel neu gelöst: Seit Jeffery Simmons da ist, blitzen sie nur noch bei 19 % der Dropbacks statt 38 % und kommen trotzdem zu mehr Druck.',
    diagram: { off: 'gun11', def: 'nickel', focusDef: true, caption: 'Vier an der Line greifen immer an. Die Frage ist, ob Linebacker oder Nickelback mitkommen.' },
    choices: [
      { to: 'd-four', label: 'Vier-Mann-Rush', sub: 'Vier jagen, sieben decken' },
      { to: 'd-blitz', label: 'Blitz', sub: 'Sechs jagen, nur fünf decken' },
    ],
    see: 'o-pass',
  },

  'd-four': {
    side: 'def', title: 'Vier-Mann-Rush', kicker: 'Pass Rush · nur die Line',
    text: 'Nur die vier Spieler der Defensive Line greifen an. Sieben Verteidiger bleiben in der Deckung.',
    why: 'Das Beste aus beiden Welten, wenn die vier gut genug sind: Druck auf den QB und trotzdem volle Deckung hinten.',
    risk: 'Gewinnt keiner der vier sein Duell, hat der QB ewig Zeit. Dann findet er irgendwann einen freien Mann.',
    example: 'In seinen ersten zwei Spielen für Chicago kamen die Bears auf 7 Sacks und 28 {Pressure|Pressures}, davon 5 Sacks und 24 Pressures mit vier oder weniger Pass Rushern. Simmons gewinnt innen eins gegen eins, und weil er Aufmerksamkeit zieht, bekommt Montez Sweat außen mehr Eins-gegen-eins-Duelle. Gegen Jared Goff ist das der vermutlich klügste Plan, weil Detroit Blitzes traditionell gut bestraft.',
    result: 'Gelingt es: Sack oder überhasteter Wurf, ohne dass hinten jemand fehlt.',
    diagram: {
      off: 'gun11', def: 'nickel',
      paths: Object.assign({}, OL_PASS, {
        LG: { block: true, path: [[0, -1.3], [0.3, -3.2]] },
        QB: { path: [[0, -2.2], [-1.2, -2.6]] }, HB: { block: true, path: [[1.4, 0.6]] },
        X: { path: [[0, 12], [11, 12.5]] }, SL: { path: [[0, 15]] }, Z: { path: [[0, 10], [-1, 8.8]] }, TE: { path: [[3, 2], [9, 3]] },
      }),
      dpaths: {
        LE: RUSH(1.2), DT2: RUSH(-0.3), RE: RUSH(-1.2),
        DT1: { path: [[-0.5, -1.6], [0.2, -3.4, 0.2], [-0.2, -8.6]] },
        CB1: { path: [[0, 4]] }, CB2: { path: [[0, 3]] }, NB: { path: [[2, 6]] },
        LB1: { path: [[-2, 4]] }, LB2: { path: [[2, 4]] }, FS: { path: [[-1, 4]] }, SS: { path: [[0, 4]] },
      },
      sack: { by: 'DT1', at: 2.35 },
      caption: 'Nur vier greifen an, sieben decken. Der linke DT gewinnt innen sein Duell gegen den Guard: Sack.',
    },
    choices: [{ to: 'd-pressure', label: 'Andere Idee', sub: 'Zurück zu „Druck"' }],
    see: 'o-pass-screen',
  },

  'd-blitz': {
    side: 'def', title: 'Blitz', kicker: 'Pass Rush · mehr als vier',
    text: 'Zu den vier Linemen kommen ein {LB|Linebacker} oder der {NB|Nickelback} dazu. Jetzt greifen sechs an, gegen sechs Blocker (5 Linemen plus HB). Jeder Blocker muss sein Duell gewinnen, ein einziger Fehler und der QB wird getroffen.',
    why: 'Schneller, garantierter Druck. Der QB muss sofort werfen oder wird gesackt.',
    risk: 'Hinten fehlen zwei Verteidiger. Wirft der QB schnell zur {Hot Route} oder per {Screen}, ist der Receiver allein auf weiter Flur.',
    example: 'Dennis Allen ist für sein Blitz-Paket auf {Third Down} bekannt, und die Bears halten Gegner dort bei 22,8 %. Umgekehrt erwartet Jon Gruden, dass Detroit Williams mit Blitzes testet. Die Saints hatten damit Erfolg (5 von 12, 36 Yards, 1 Interception).',
    result: 'Gelingt es: Sack oder Fehlwurf. Sonst: ein freier Receiver und ein großer Gewinn.',
    diagram: {
      off: 'gun11', def: 'nickel',
      paths: Object.assign({}, OL_PASS, {
        QB: { path: [[0, -1.2]] }, HB: { block: true, path: [[-1.0, 0.8]] },
        X: { path: [[0, 10]] }, SL: { path: [[0.8, 2.5], [7, 6]] }, Z: { path: [[0, 6], [-0.4, 5]] }, TE: { path: [[1, 4], [1, 10]] },
      }),
      dpaths: Object.assign({}, DL_RUSH, {
        LB1: { path: [[0.8, -3], [1.6, -8]] }, NB: { delay: 0.1, path: [[6, -3], [11, -5]] },
        LB2: { follow: 'TE', lag: 0.3, off: [0, 1.2] },
        CB1: { follow: 'X', lag: 0.25, off: [0, 1.2] }, CB2: { follow: 'Z', lag: 0.25, off: [0, 1.2] },
        FS: { path: [[8.6, 1]] }, SS: { delay: 0.3, path: [[-4, -1]] },
      }),
      ball: [['pass', 'SL', 1.05, 0.4]],
      caption: 'Linebacker und Nickelback kommen mit. Der Slot-WR ist dadurch frei: schneller Slant, Ball nach einer Sekunde weg.',
    },
    choices: [{ to: 'd-pressure', label: 'Andere Idee', sub: 'Zurück zu „Druck"' }],
    see: 'o-pass-quick',
  },
};

if (typeof module !== 'undefined') module.exports = { FD_NODES, FD_GLOSSARY, FD_OFF, FD_DEF, FD_STAND };
