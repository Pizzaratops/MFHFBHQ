// ============================================================
//  FIRST DOWN KIDS — Inhalte (8–12 Jahre), alles frei erfunden
//  Maskottchen: Bruno, der Football-Dachs
// ============================================================

const KIDS_COLORS = [
  { key: 'rot', name: 'Feuerrot', jersey: '#e63946', trim: '#ffd166', helmet: '#ffd166', stripe: '#e63946', pants: '#ffffff', end: '#e63946' },
  { key: 'blau', name: 'Ozeanblau', jersey: '#1d70b8', trim: '#ffffff', helmet: '#ffffff', stripe: '#1d70b8', pants: '#ffd166', end: '#1d70b8' },
  { key: 'gruen', name: 'Froschgrün', jersey: '#2a9d4b', trim: '#fff3b0', helmet: '#fff3b0', stripe: '#2a9d4b', pants: '#ffffff', end: '#2a9d4b' },
  { key: 'lila', name: 'Zauberlila', jersey: '#7b2cbf', trim: '#ff9f1c', helmet: '#ff9f1c', stripe: '#7b2cbf', pants: '#ffffff', end: '#7b2cbf' },
];

const KIDS_TEAMS = {
  wuermer: { name: 'Wackel-Würmer', emoji: '🪱', jersey: '#f4a261', trim: '#6d4c41', helmet: '#6d4c41', stripe: '#f4a261', pants: '#fff3e0', end: '#f4a261', def: { box: 1, c2: 1.3, man: 1, blitz: 0.3 } },
  monster: { name: 'Matsch-Monster', emoji: '👾', jersey: '#6a994e', trim: '#3d2b1f', helmet: '#3d2b1f', stripe: '#a7c957', pants: '#a7c957', end: '#6a994e', def: { box: 3, c2: 0.6, man: 0.6, blitz: 0.3 } },
  kraken: { name: 'Kitzel-Kraken', emoji: '🐙', jersey: '#ff6fb5', trim: '#3a0ca3', helmet: '#3a0ca3', stripe: '#ff6fb5', pants: '#ffffff', end: '#ff6fb5', def: { box: 0.5, c2: 2, man: 2, blitz: 0.3 } },
  bienen: { name: 'Blitz-Bienen', emoji: '🐝', jersey: '#ffd60a', trim: '#1b1b1b', helmet: '#1b1b1b', stripe: '#ffd60a', pants: '#1b1b1b', end: '#1b1b1b', def: { box: 0.5, c2: 0.5, man: 0.8, blitz: 3 } },
  drachen: { name: 'Donner-Drachen', emoji: '🐉', jersey: '#c1121f', trim: '#fdf0d5', helmet: '#fdf0d5', stripe: '#c1121f', pants: '#003049', end: '#c1121f', def: { box: 1.6, c2: 1, man: 1, blitz: 1 } },
};

// Wie der Spieler die Calls sieht: drei große Knöpfe, darunter kindgerechte Varianten
const KIDS_CALLS = {
  run: { label: '🏃 Laufen', sub: { iz: 'Durch die Mitte', oz: 'Außen herum' } },
  pass: { label: '🎯 Werfen', sub: { quick: 'Ganz kurz', mid: 'Mittel weit', deep: 'Super weit' } },
  trick: { label: '🎭 Trick', sub: { pa: 'Täuschen, dann werfen', screen: 'Hinter die Mauer' } },
};
const KIDS_LOOKS = {
  box: { t: 'Vorne stehen GANZ viele Verteidiger 😬', tip: 'Vorne ist alles voll. Hinten ist Platz: Werfen!' },
  c2: { t: 'Hinten passen zwei Aufpasser auf 👀', tip: 'Weit werfen ist schwer. Vorne ist Platz: Laufen oder kurz werfen!' },
  man: { t: 'Jeder Fänger hat einen Schatten 👥', tip: 'Schau genau: Einer schüttelt seinen Schatten ab!' },
  blitz: { t: 'Die Verteidiger wollen alle losstürmen! 🐝', tip: 'Schnell sein! Ganz kurz werfen oder der Trick hinter die Mauer.' },
};
const KIDS_WHY = {
  box: { run: 'Vorne war alles voll, da kommt man schwer durch.', pass: 'Vorne waren alle, hinten war Platz zum Fangen!', trick: 'Die Verteidiger sind auf den Trick reingefallen!' },
  c2: { run: 'Vorne waren nur wenige, perfekt zum Laufen!', pass: 'Hinten haben zwei aufgepasst. Kurz klappt besser als weit.', trick: 'Die Aufpasser hinten haben den Trick durchschaut.' },
  man: { run: 'Alle haben auf ihren Fänger geschaut, also Platz zum Laufen!', pass: 'Wer seinen Schatten abschüttelt, ist frei!', trick: 'Die Schatten haben gut aufgepasst.' },
  blitz: { run: 'Viele kamen nach vorne. Mal klappt es, mal nicht.', pass: 'Der Ball musste schnell weg. Kurz ist super, weit wird knapp!', trick: 'Hinter die Mauer: Die Stürmer sind am Ball vorbeigerannt!' },
};

// Lernkarten „Football in 5 Minuten“ (Bruno erzählt)
const KIDS_LEARN = [
  { t: 'Das Ziel 🏁', x: 'Zwei Teams spielen auf einem langen Rasen. Jedes Team will den Ball ganz nach hinten in die bunte Zone tragen, die Endzone. Das ist ein Touchdown und bringt 6 Punkte. Danach gibt es meistens noch 1 Punkt mit einem Kick.', demo: { o: 'iz', d: 'c2', dec: { type: 'run', yards: 75 }, yl: 30 } },
  { t: 'Vier Versuche 🔢', x: 'Dein Team hat 4 Versuche. Schaffst du dabei 10 Yards nach vorne (ein Yard ist ungefähr ein großer Schritt), bekommst du wieder 4 neue Versuche. Die gelbe Linie zeigt dir, wo die 10 Yards geschafft sind.', demo: { o: 'iz', d: 'c2', dec: { type: 'run', yards: 11 } } },
  { t: 'Wer ist wer? 🧢', x: 'Der Quarterback (QB) ist der Chef: Er bekommt den Ball und wirft oder gibt ihn ab. Der Running Back (HB) ist der Läufer. Die Wide Receiver (WR) sind die Fänger. Vorne stehen fünf starke Blocker, die den Weg frei machen.', demo: null, pic: 'positions' },
  { t: 'Laufen 🏃', x: 'Beim Laufen gibt der QB den Ball dem Läufer. Der rennt durch eine Lücke. Am besten dorthin, wo keiner steht!', demo: { o: 'iz', d: 'c2', lane: 'best', dec: { type: 'run', yards: 6 } } },
  { t: 'Werfen 🎯', x: 'Beim Werfen laufen die Fänger los. Der QB sucht den, der am meisten Platz hat, und wirft ihm den Ball zu. Fängt er ihn, geht es weiter nach vorne!', demo: { o: 'quick', d: 'c2', target: 'best', dec: { type: 'comp', yac: 4 } } },
  { t: 'Die Verteidigung 🛡️', x: 'Die anderen wollen das verhindern. Sie halten den Läufer fest (das heißt Tackle) oder fangen den Ball selbst. Das ist eine Interception, dann haben sie den Ball!', demo: { o: 'mid', d: 'man', target: 'best', dec: { type: 'int' } } },
  { t: 'Alle stürmen los! 🐝', x: 'Manchmal rennen ganz viele Verteidiger auf den QB zu. Das heißt Blitz. Dann muss der Ball schnell weg, sonst wird der QB umgeworfen (ein Sack).', demo: { o: 'deep', d: 'blitz', dec: { type: 'sack' } } },
  { t: 'Der Trick 🎭', x: 'Beim Täuschen tut der QB so, als würde er den Ball dem Läufer geben. Die Verteidiger rennen zum Läufer, und hinten wird es frei. Dann wirft er!', demo: { o: 'pa', d: 'box', target: 'best', dec: { type: 'comp', yac: 8 } } },
];

// Brunos Trainingslager: 5 Level
const KIDS_LEVELS = [
  { n: 1, title: 'Laufen oder Werfen?', badge: '🥉', badgeName: 'Erster Touchdown', opp: 'wuermer', unlock: ['iz', 'quick'],
    bruno: ['Hallo! Ich bin Bruno, der Football-Dachs 🦡. Ich zeige dir, wie Football geht!', 'Du kannst laufen oder werfen. Nach dem Start bleibt das Bild stehen: Dann tippst du die Lücke oder den Fänger an. Wenn du unsicher bist, frag mich mit dem 💡-Knopf!'],
    drills: [{ o: 'iz', d: 'c2' }, { o: 'quick', d: 'c2' }, { o: 'quick', d: 'blitz' }] },
  { n: 2, title: 'Zähl die Verteidiger!', badge: '🔍', badgeName: 'Adlerauge', opp: 'monster', unlock: ['oz', 'mid', 'deep'],
    bruno: ['Schau vor dem Start, wo die Verteidiger stehen.', 'Vorne ganz viele? Dann werfen! Hinten zwei Aufpasser? Dann laufen!'],
    drills: [{ o: 'iz', d: 'box' }, { o: 'deep', d: 'box' }, { o: 'oz', d: 'c2' }] },
  { n: 3, title: 'Wer ist frei?', badge: '👀', badgeName: 'Schatten-Jäger', opp: 'kraken', unlock: [],
    bruno: ['Manchmal hat jeder Fänger einen Schatten, der ihm überallhin folgt.', 'Einer schüttelt seinen Schatten immer ab. Finde ihn!'],
    drills: [{ o: 'quick', d: 'man' }, { o: 'mid', d: 'c2' }, { o: 'mid', d: 'man' }] },
  { n: 4, title: 'Alle stürmen los!', badge: '⚡', badgeName: 'Blitzschnell', opp: 'bienen', unlock: ['screen'],
    bruno: ['Die Blitz-Bienen stürmen ständig los! 🐝', 'Dann muss der Ball ganz schnell weg. Oder du machst den Trick hinter die Mauer: Die Stürmer rennen am Ball vorbei!'],
    drills: [{ o: 'quick', d: 'blitz' }, { o: 'quick', d: 'blitz' }, { o: 'mid', d: 'blitz' }] },
  { n: 5, title: 'Der große Trick', badge: '🏆', badgeName: 'Trick-Meister', opp: 'drachen', unlock: ['pa'],
    bruno: ['Jetzt lernst du meinen Lieblings-Trick: Täuschen!', 'Tu so, als ob du läufst. Wenn vorne alle zum Läufer rennen, wirfst du nach hinten. Das klappt am besten, wenn vorne ganz viele stehen!'],
    drills: [{ o: 'pa', d: 'box' }, { o: 'pa', d: 'box' }, { o: 'deep', d: 'box' }] },
];

const KIDS_QUIZ = [
  { q: 'Wie viele Punkte bringt ein Touchdown?', o: ['3 Punkte', '6 Punkte', '10 Punkte'], a: 1, why: 'Ein Touchdown bringt 6 Punkte. Mit dem Kick danach meistens 7!' },
  { q: 'Wie viele Versuche hast du für 10 Yards?', o: ['2 Versuche', '4 Versuche', '10 Versuche'], a: 1, why: 'Du hast 4 Versuche. Schaffst du die 10 Yards, gibt es 4 neue!' },
  { q: 'Wer ist der Chef, der den Ball wirft?', o: ['Der Quarterback', 'Der Schiedsrichter', 'Der Trainer'], a: 0, why: 'Der Quarterback (QB) bekommt den Ball und wirft oder gibt ihn ab.' },
  { q: 'Vorne stehen GANZ viele Verteidiger. Was machst du?', o: ['Durch die Mitte laufen', 'Werfen, hinten ist Platz', 'Aufgeben'], a: 1, why: 'Wenn vorne alle stehen, ist hinten Platz. Werfen!' },
  { q: 'Was ist ein Tackle?', o: ['Ein Tanz', 'Wenn man den Läufer festhält und stoppt', 'Ein Schuh'], a: 1, why: 'Beim Tackle stoppt ein Verteidiger den Spieler mit dem Ball.' },
  { q: 'Was passiert bei einer Interception?', o: ['Die Verteidigung fängt den Ball', 'Es gibt 6 Punkte', 'Das Spiel ist vorbei'], a: 0, why: 'Fängt ein Verteidiger den Ball, gehört er jetzt seinem Team.' },
  { q: 'Alle Verteidiger stürmen los (Blitz). Was hilft?', o: ['Ganz weit werfen und lange warten', 'Ganz schnell und kurz werfen', 'Den Ball verstecken'], a: 1, why: 'Bei einem Blitz muss der Ball schnell weg. Kurz werfen!' },
  { q: 'Wo musst du den Ball hinbringen?', o: ['In die Endzone', 'Zum Trainer', 'In die Mitte'], a: 0, why: 'Die Endzone ist die bunte Zone am Ende. Dort gibt es den Touchdown.' },
  { q: 'Wozu sind die starken Blocker vorne da?', o: ['Sie fangen den Ball', 'Sie machen den Weg frei', 'Sie zählen die Punkte'], a: 1, why: 'Die Blocker schieben die Verteidiger weg, damit Läufer und QB Platz haben.' },
  { q: 'Was ist Täuschen (Play-Action)?', o: ['So tun, als ob man läuft, und dann werfen', 'Den Ball fallen lassen', 'Weglaufen'], a: 0, why: 'Die Verteidiger rennen zum Läufer, und hinten wird es frei!' },
];
