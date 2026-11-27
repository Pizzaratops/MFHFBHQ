// ============================================================
//  FIRST DOWN KARRIERE — Inhalte: Wochen, Lektionen, Drills, Teams
//  Alle Teams und Spieler sind frei erfunden.
//  {Begriff} im Text = Glossar-Tooltip (FD_GLOSSARY aus tree.js).
// ============================================================

const CAREER_COLORS = [
  { key: 'mfhfb', name: 'Orange/Navy', jersey: '#e84a0c', trim: '#13294b', helmet: '#13294b', stripe: '#e84a0c', pants: '#f2efe8', end: '#13294b' },
  { key: 'forest', name: 'Grün/Gold', jersey: '#1f6b3a', trim: '#e8b923', helmet: '#e8b923', stripe: '#1f6b3a', pants: '#e8b923', end: '#1f6b3a' },
  { key: 'crimson', name: 'Rot/Schwarz', jersey: '#b3122e', trim: '#111111', helmet: '#111111', stripe: '#b3122e', pants: '#f4f4f4', end: '#b3122e' },
  { key: 'royal', name: 'Lila/Silber', jersey: '#5b2a86', trim: '#c0c6cc', helmet: '#c0c6cc', stripe: '#5b2a86', pants: '#c0c6cc', end: '#5b2a86' },
];

// Stil: off = Gewichte der Offense-Plays, def = Gewichte der Defense-Calls
const CAREER_TEAMS = {
  docker: { city: 'Hafenstadt', name: 'Docker', emoji: '⚓', abbr: 'HAF', jersey: '#4a6b8a', trim: '#d9dee5', helmet: '#d9dee5', stripe: '#4a6b8a', pants: '#d9dee5', end: '#4a6b8a',
    style: 'Ausgeglichen, macht wenig Druck.', off: { iz: 2, quick: 2, mid: 1, oz: 1 }, def: { box: 1, c2: 1.2, man: 1, blitz: 0.4 }, rating: 64 },
  mammuts: { city: 'Steinbruch', name: 'Mammuts', emoji: '🦣', abbr: 'STB', jersey: '#6b4f3a', trim: '#e3c79a', helmet: '#3b2b20', stripe: '#e3c79a', pants: '#e3c79a', end: '#6b4f3a',
    style: 'Stellt fast immer viele Leute in die Box.', off: { iz: 2, power: 2, iso: 1, quick: 1 }, def: { box: 3, c2: 0.6, man: 0.8, blitz: 0.4 }, rating: 67 },
  kraken: { city: 'Küstenstadt', name: 'Kraken', emoji: '🐙', abbr: 'KÜS', jersey: '#0d7c86', trim: '#f2c14e', helmet: '#0d7c86', stripe: '#f2c14e', pants: '#f4f4f4', end: '#0d7c86',
    style: 'Wechselt zwischen Cover 2 und Manndeckung.', off: { quick: 2, mid: 2, iz: 1.5, deep: 0.8 }, def: { box: 0.6, c2: 2, man: 1.6, blitz: 0.4 }, rating: 70 },
  hornissen: { city: 'Nordwald', name: 'Hornissen', emoji: '🐝', abbr: 'NOR', jersey: '#f5c400', trim: '#141414', helmet: '#141414', stripe: '#f5c400', pants: '#141414', end: '#141414',
    style: 'Blitzt ständig.', off: { quick: 2, iz: 1.5, screen: 1, mid: 1 }, def: { box: 0.6, c2: 0.6, man: 1, blitz: 2.6 }, rating: 72 },
  yetis: { city: 'Eisental', name: 'Yetis', emoji: '❄️', abbr: 'EIS', jersey: '#e9f1f7', trim: '#3a6ea5', helmet: '#3a6ea5', stripe: '#e9f1f7', pants: '#3a6ea5', end: '#3a6ea5',
    style: 'Harte Box und enge Manndeckung.', off: { power: 2, iso: 2, iz: 1, pa: 1 }, def: { box: 2.2, c2: 0.5, man: 2, blitz: 0.8 }, rating: 74 },
  skorpione: { city: 'Wüstental', name: 'Skorpione', emoji: '🦂', abbr: 'WÜS', jersey: '#c8752a', trim: '#2b2b2b', helmet: '#2b2b2b', stripe: '#c8752a', pants: '#e8d9b5', end: '#c8752a',
    style: 'Laufen, laufen, laufen.', off: { iz: 3, oz: 2, power: 2, iso: 1.5, pa: 1, quick: 0.8 }, def: { box: 1, c2: 1, man: 1, blitz: 1 }, rating: 76 },
  moewen: { city: 'Sturmhafen', name: 'Möwen', emoji: '🕊️', abbr: 'STU', jersey: '#1d3557', trim: '#f1faee', helmet: '#f1faee', stripe: '#1d3557', pants: '#f1faee', end: '#1d3557',
    style: 'Wirft viel, besonders kurz und mittel.', off: { quick: 3, mid: 2.5, deep: 1.2, screen: 1.2, iz: 1 }, def: { box: 0.5, c2: 2, man: 1.2, blitz: 0.8 }, rating: 78 },
  greifen: { city: 'Goldküste', name: 'Greifen', emoji: '🦅', abbr: 'GOL', jersey: '#2a2a2a', trim: '#d4af37', helmet: '#d4af37', stripe: '#2a2a2a', pants: '#d4af37', end: '#2a2a2a',
    style: 'Der Champion: kann alles.', off: { iz: 1.5, oz: 1, power: 1, quick: 1.5, mid: 1.5, deep: 1, screen: 1, pa: 1.2 }, def: { box: 1, c2: 1, man: 1, blitz: 1 }, rating: 82 },
};

// Spielerpositionen im Kader (je 6 Schlüsselspieler)
const CAREER_SLOTS = [
  { key: 'qb', pos: 'QB', name: 'Quarterback', what: 'Trifft genauer, mehr Completions' },
  { key: 'rb', pos: 'RB', name: 'Running Back', what: 'Mehr Yards beim Lauf' },
  { key: 'wr', pos: 'WR', name: 'Wide Receiver', what: 'Fängt mehr, mehr Yards nach dem Fang' },
  { key: 'ol', pos: 'OL', name: 'Offensive Line', what: 'Weniger Sacks, bessere Lauflücken' },
  { key: 'edge', pos: 'EDGE', name: 'Pass Rusher', what: 'Mehr Sacks gegen den Gegner' },
  { key: 'cb', pos: 'CB', name: 'Cornerback', what: 'Gegner fängt weniger' },
];
const CAREER_FIRST = ['Jonas', 'Malik', 'Theo', 'Luca', 'Deniz', 'Noah', 'Emil', 'Kofi', 'Mats', 'Elias', 'Yusuf', 'Finn', 'Arda', 'Levi', 'Ben', 'Tariq', 'Jannik', 'Oskar', 'Samu', 'Milan'];
const CAREER_LAST = ['Brandt', 'Okafor', 'Keller', 'Yilmaz', 'Hartmann', 'Mensah', 'Vogt', 'Kowalski', 'Lindqvist', 'Adeyemi', 'Becker', 'Petrović', 'Sommer', 'Nakamura', 'Wolff', 'Haddad', 'Krüger', 'Osei', 'Lange', 'Moreau'];

// ---------- Die 8 Lernwochen ----------
// unlock: neue Plays/Calls; lesson: Karten mit Demo (o gegen d, Ausgang);
// drills: read = Wer ist frei? / call = Was callst du gegen diesen Look? / dcall = Defense-Call
const CAREER_WEEKS = [
  {
    n: 1, title: 'Lauf oder Pass', opp: 'docker', unlock: ['iz', 'quick'], help: true, defense: false,
    goal: 'Verstehe die Downs und mache deine ersten Reads: Lücke beim Lauf, freier Mann beim Pass.',
    lesson: [
      { t: 'Vier Versuche für zehn Yards', x: 'Deine Offense hat vier {Down|Versuche}, um 10 {Yard|Yards} zu schaffen. Klappt es, gibt es wieder einen {1st & 10}. Klappt es nicht, wird im vierten Versuch meist gepuntet. Die blaue Linie ist die {Line of Scrimmage}, die gelbe die {First-Down-Linie}.', demo: { o: 'iz', d: 'c2', dec: { type: 'run', yards: 5 } }, more: 'o-start' },
      { t: 'Der Lauf und deine erste Entscheidung', x: 'Beim Lauf übergibt der {QB} an den {HB}. Kurz danach friert das Bild ein: Du entscheidest, durch welche Lücke er läuft. Nimm die Lücke, vor der am wenigsten Verteidiger stehen.', demo: { o: 'iz', d: 'c2', lane: 'best', dec: { type: 'run', yards: 6 } }, more: 'o-run-iz' },
      { t: 'Der kurze Pass', x: 'Beim kurzen Pass macht der QB drei Schritte und wirft sofort. Das Bild friert ein, bevor er wirft: Tippe den Receiver an, bei dem sich der Wurf am meisten lohnt: viel Platz zum nächsten Verteidiger, und tief genug, um voranzukommen. Ein freier Mann hinter der gelben Linie ist oft besser als ein freier Mann davor. In den ersten Wochen hilft dir der 💡-Tipp.', demo: { o: 'quick', d: 'c2', target: 'best', dec: { type: 'comp', yac: 3 } }, more: 'o-pass-quick' },
    ],
    tip: 'Merksatz: Raum ist alles. Lauf dorthin, wo keiner steht, wirf dorthin, wo keiner deckt.',
    drills: [{ type: 'read', o: 'iz', d: 'box' }, { type: 'read', o: 'quick', d: 'c2' }, { type: 'read', o: 'quick', d: 'blitz' }],
  },
  {
    n: 2, title: 'Zähl die Box', opp: 'mammuts', unlock: ['oz', 'mid', 'deep'], help: true, defense: false,
    goal: 'Schau vor dem Snap auf die Safeties: Wie viele stehen tief? Daraus folgt Lauf oder Pass.',
    lesson: [
      { t: '8 in der Box', x: 'Rückt ein {S|Safety} nach vorne, stehen acht Verteidiger in der {Box}, gegen nur sechs Blocker. Ein Lauf hat es dann sehr schwer.', demo: { o: 'iz', d: 'box', lane: 'best', dec: { type: 'run', yards: 1 } }, more: 'd-box' },
      { t: 'Hinten ist jetzt Platz', x: 'Wer vorne einen Mann mehr hat, hat hinten einen weniger. Nur noch ein Safety steht tief ({1-High}). Genau dann lohnt sich der {Go|tiefe Pass}.', demo: { o: 'deep', d: 'box', target: 'best', dec: { type: 'comp', yac: 4 } }, more: 'o-pass-deep' },
      { t: '2 Safeties tief', x: 'Stehen beide Safeties weit hinten ({2-High}), ist der lange Ball zu. Dafür sind vorne nur sechs Mann: Jetzt ist die Zeit zum Laufen.', demo: { o: 'oz', d: 'c2', lane: 'best', dec: { type: 'run', yards: 7 } }, more: 'o-run-oz' },
    ],
    tip: 'Merksatz: Ein Safety tief = werfen. Zwei Safeties tief = laufen.',
    drills: [{ type: 'call', look: 'box' }, { type: 'call', look: 'c2' }, { type: 'read', o: 'deep', d: 'box' }],
  },
  {
    n: 3, title: 'Mann oder Raum?', opp: 'kraken', unlock: ['mesh', 'smash'], help: true, defense: false,
    goal: 'Erkenne Manndeckung und Raumdeckung und finde den freien Mann.',
    lesson: [
      { t: 'Manndeckung', x: 'Bei {Man Coverage} folgt jeder Verteidiger seinem Receiver. Du erkennst sie vor dem Snap oft daran, dass die {CB|Cornerbacks} ganz eng vor den Receivern stehen. Wer sein Duell gewinnt, ist frei, und das ist jedes Mal ein anderer.', demo: { o: 'quick', d: 'man', target: 'best', dec: { type: 'comp', yac: 4 } }, more: 'd-man' },
      { t: 'Raumdeckung', x: 'Bei {Zone Coverage} bewacht jeder einen Bereich. Zwischen den Bereichen gibt es Lücken. Ein {Dig} hinter den Linebackern landet oft genau dort.', demo: { o: 'mid', d: 'c2', target: 'best', dec: { type: 'comp', yac: 3 } }, more: 'd-zone' },
    ],
    tip: 'Merksatz: Gegen Mann such den Gewinner. Gegen Raum such die Lücke.',
    drills: [{ type: 'read', o: 'quick', d: 'man' }, { type: 'read', o: 'mid', d: 'c2' }, { type: 'read', o: 'mid', d: 'man' }],
  },
  {
    n: 4, title: 'Blitz!', opp: 'hornissen', unlock: ['screen', 'verts', 'draw'], help: false, defense: false,
    goal: 'Erkenne einen Blitz vor dem Snap und lass ihn ins Leere laufen. Ab jetzt ohne 💡-Tipp.',
    lesson: [
      { t: 'So sieht ein Blitz aus', x: 'Stehen Linebacker oder der {NB|Nickelback} direkt an der Line, droht ein {Blitz}: Sechs Verteidiger kommen auf den QB. Lange Routen haben dann keine Zeit.', demo: { o: 'deep', d: 'blitz', dec: { type: 'sack' } }, more: 'd-blitz' },
      { t: 'Hot Route', x: 'Wo ein Blitzer herkommt, fehlt hinten ein Verteidiger. Ein schneller Pass genau dorthin ({Hot Route}) ist die Antwort. Der Ball muss in einer Sekunde weg sein.', demo: { o: 'quick', d: 'blitz', target: 'best', dec: { type: 'comp', yac: 6 } }, more: 'o-pass-quick' },
      { t: 'Screen', x: 'Noch fieser: Beim {Screen} lässt deine Line die Blitzer absichtlich durch und baut vor dem HB eine Wand. Die Verteidiger rennen am Ball vorbei.', demo: { o: 'screen', d: 'blitz', dec: { type: 'comp', yac: 12 } }, more: 'o-pass-screen' },
    ],
    tip: 'Merksatz: Blitz = Ball schnell weg. Kurzer Pass oder Screen.',
    drills: [{ type: 'call', look: 'blitz' }, { type: 'read', o: 'quick', d: 'blitz' }, { type: 'call', look: 'man' }],
  },
  {
    n: 5, title: 'Täuschen und Wucht', opp: 'yetis', unlock: ['pa', 'power', 'iso', 'iz13', 'pa13', 'toss20'], help: false, defense: false,
    goal: 'Play-Action gegen eine Box, die auf den Lauf wartet, und Power-Läufe bei kurzer Distanz.',
    lesson: [
      { t: 'Play-Action', x: 'Der QB täuscht einen Handoff an. Die Linebacker machen einen Schritt nach vorne, und hinter ihnen wird es frei. Das klappt am besten, wenn die Defense den Lauf fürchtet, also gegen 8 in der Box.', demo: { o: 'pa', d: 'box', target: 'best', dec: { type: 'comp', yac: 5 } }, more: 'o-pass-pa' },
      { t: 'Power und Iso', x: 'Bei 3rd & 1 brauchst du Wucht: Beim {Pull} zieht ein Guard auf die andere Seite und blockt vorneweg, beim Iso räumt der {FB} den Linebacker weg.', demo: { o: 'power', d: 'man', lane: 'best', dec: { type: 'run', yards: 4 } }, more: 'o-run-power' },
    ],
    tip: 'Merksatz: Die Box beißt an, dahinter ist Platz. Kurze Distanz = Power.',
    drills: [{ type: 'call', look: 'box' }, { type: 'read', o: 'pa', d: 'box' }, { type: 'call', look: 'c2', st: { down: 3, toGo: 1 } }],
  },
  {
    n: 6, title: 'Seitenwechsel: Defense', opp: 'skorpione', unlock: ['D'], help: false, defense: true,
    goal: 'Ab jetzt callst du auch die Defense. Lies Formation und Situation.',
    lesson: [
      { t: 'Was die Formation verrät', x: 'Kommt die Offense mit {FB|Fullback} in der I-Formation, wird meist gelaufen: Stell 8 in die Box. Aus der {Shotgun} mit drei Receivern kommt öfter ein Pass.', demo: { o: 'power', d: 'box', dec: { type: 'run', yards: 0 } }, more: 'd-start' },
      { t: 'Pass verteidigen', x: 'Erwartest du einen Pass, wähle eine Deckung: {Cover 2} hält den Ball vor dir und verhindert lange Pässe, {Man Coverage} macht die schnellen Optionen zu.', demo: { o: 'deep', d: 'c2', dec: { type: 'inc' } }, more: 'd-coverage' },
      { t: 'Blitz als Waffe', x: 'Ein {Blitz} bringt schnellen Druck, aber gegen einen Screen oder Quick Pass bist du hinten dünn. Am besten bei langen Distanzen, wenn die Offense werfen muss.', demo: { o: 'mid', d: 'blitz', dec: { type: 'sack' } }, more: 'd-blitz' },
    ],
    tip: 'Merksatz: Fullback und kurze Distanz = Lauf stoppen. Viele Yards nötig = Pass verteidigen.',
    drills: [{ type: 'dcall', o: 'iso', st: { down: 3, toGo: 1 } }, { type: 'dcall', o: 'mid', st: { down: 3, toGo: 9 } }, { type: 'dcall', o: 'iz', st: { down: 1, toGo: 10 } }],
  },
  {
    n: 7, title: 'Third Down und 4th Down', opp: 'moewen', unlock: ['4th', 'flood', 'stick'], help: false, defense: true,
    goal: 'Schwere Situationen: 3rd & long und die Entscheidung auf 4th Down triffst ab jetzt du.',
    lesson: [
      { t: '3rd & long', x: 'Bei {Third-and-long} weiß die Defense, dass ein Pass kommt. Als Offense brauchst du einen Pass, der über die gelbe Linie geht, zum Beispiel einen {Dig}. Als Defense reicht ein Tackle vor der Linie.', demo: { o: 'mid', d: 'c2', target: 'best', dec: { type: 'comp', yac: 2 } }, more: 'o-pass-mid' },
      { t: '4th Down: Punt, Field Goal oder ausspielen?', x: 'Faustregel: Weit weg vom gegnerischen Endzone = Punt. Nah genug = Field Goal (Distanz = Yards bis zur Endzone + 17, weil die Torstangen hinten in der Endzone stehen und der Kick 7 Yards hinter der Line ausgeführt wird). Nur noch 1 Yard und in der gegnerischen Hälfte = ausspielen kann sich lohnen.', more: 'o-start' },
    ],
    tip: 'Merksatz: Auf 4th Down entscheidet die Feldposition.',
    drills: [{ type: 'call', look: 'c2', st: { down: 3, toGo: 9 } }, { type: 'dcall', o: 'quick', st: { down: 3, toGo: 8 } }, { type: 'read', o: 'mid', d: 'man' }],
  },
  {
    n: 8, title: 'Finale', opp: 'greifen', unlock: [], help: false, defense: true,
    goal: 'Alles, was du gelernt hast, gegen den Champion.',
    lesson: [
      { t: 'Deine Checkliste', x: '1. Safeties zählen: einer tief = werfen, zwei tief = laufen. 2. Linebacker an der Line = Blitz: Ball schnell weg. 3. Cornerbacks eng = Manndeckung: such den Gewinner. 4. Beim Lauf die leere Lücke, beim Pass den Mann mit Platz. 5. Defense: Formation und Distanz lesen.', demo: { o: 'pa', d: 'box', target: 'best', dec: { type: 'comp', yac: 20 } } },
    ],
    tip: 'Merksatz: Erst schauen, dann callen, dann lesen.',
    drills: [{ type: 'call', look: 'blitz' }, { type: 'read', o: 'deep', d: 'c2' }, { type: 'dcall', o: 'power', st: { down: 2, toGo: 2 } }],
  },
];
