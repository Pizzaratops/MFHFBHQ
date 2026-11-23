// ============================================================
//  PROSPECT_TIERS — Experten-Tiers + Big-Board-Rang (College Scouting)
// ============================================================
//  VON HAND GEPFLEGT (kein Sync überschreibt diese Datei).
//
//  Quelle 1: Dane Brugler (The Athletic), NFL Draft 2027 Big Board,
//            Stand 12.11.2026 → bru = Rang auf dem Board.
//  Quelle 2: C.J. Freel (Substack „Building Tiers w/ Brugler's Big Board“),
//            nimmt Bruglers Rang als theoretisches Draft Capital und sortiert
//            die fantasy-relevanten Spieler in Dynasty-Rookie-Tiers → tier.
//  Reihenfolge innerhalb eines Tiers ist laut Freel KEIN Ranking.
//
//  Schlüssel = rawId aus COLLEGE_SCOUTING (CFBD-Athleten-ID).
//  Nach dem NFL-Draft 2027 den Jahrgang entfernen bzw. durch den
//  nächsten ersetzen.
// ============================================================

const PROSPECT_TIERS = {
  draft: 2027,
  sources: {
    bru:   { label: 'Brugler Big Board', by: 'Dane Brugler, The Athletic', asof: '2026-11-12' },
    freel: { label: 'Freel-Tiers', by: 'C.J. Freel, Substack', asof: '2026-11-23',
             url: 'https://cjfreel.substack.com/p/building-tiers-w-bruglers-big-board' },
  },
  // Reihenfolge = Rangfolge der Tiers. rookie = grober Richtwert im
  // 12er-Rookie-Draft (1QB), eigene Übersetzung, nicht von Freel.
  tiers: [
    { key: 'elite',   label: 'Elite / Blue Chip',  short: 'ELITE',     rookie: '1.01' },
    { key: 'high1',   label: 'High 1st Round',     short: 'H1',  rookie: '1.01–1.04' },
    { key: 'clear1',  label: 'Clear 1st Round',    short: 'C1', rookie: '1.04–1.09' },
    { key: 'fringe1', label: 'Fringe 1st Round',   short: 'F1',rookie: '1.08–1.12' },
    { key: 'high2',   label: 'High 2nd Round',     short: 'H2',  rookie: '2.01–2.05' },
  ],
  players: {
    // Elite
    '5079720': { name: 'Jeremiah Smith',     pos: 'WR', team: 'Ohio State',     bru: 1,  tier: 'elite' },
    // High 1st
    '5219834': { name: 'Drew Mestemaker',    pos: 'QB', team: 'Oklahoma State', bru: 2,  tier: 'high1',  note: 'Upside rechtfertigt High 1 trotz QB-Abschlag.' },
    '5146735': { name: 'Charlie Becker',     pos: 'WR', team: 'Indiana',        bru: 5,  tier: 'high1' },
    '5079322': { name: 'Jadan Baugh',        pos: 'RB', team: 'Florida',        bru: 13, tier: 'high1',  note: 'RB mit Erstrunden-Kapital: hohe Trefferquote; Landing Spot vorausgesetzt.' },
    '5079600': { name: 'Nick Marsh',         pos: 'WR', team: 'Indiana',        bru: 17, tier: 'high1',  note: 'Profil, Upside und Alter heben ihn trotz Mid-1st-Bust-Risiko.' },
    // Clear 1st
    '5079369': { name: 'C.J. Carr',          pos: 'QB', team: 'Notre Dame',     bru: 10, tier: 'clear1', note: 'Wenig Mobilität → kein High 1.' },
    '5173431': { name: 'Wayshawn Parker',    pos: 'RB', team: 'Utah',           bru: 50, tier: 'clear1', note: 'Auch #50 ist bei RB starkes Kapital.' },
    '5079420': { name: "Trey'Dez Green",     pos: 'TE', team: 'LSU',            bru: 14, tier: 'clear1', note: 'Athletik, Produktion, früher Declare; TE bleibt riskant.' },
    '5141684': { name: 'Austin Simmons',     pos: 'QB', team: 'Missouri',       bru: 20, tier: 'clear1' },
    '4911529': { name: 'Trinidad Chambliss', pos: 'QB', team: 'Ole Miss',       bru: 22, tier: 'clear1', note: 'Rushing hebt ihn.' },
    '4870906': { name: 'Arch Manning',       pos: 'QB', team: 'Texas',          bru: 25, tier: 'clear1', note: 'Leistung fraglich, aber Rushing-QB aus Runde 1 → Clear 1.' },
    // Fringe 1st
    '5031157': { name: 'Reed Harris',        pos: 'WR', team: 'Arizona State',  bru: 23, tier: 'fringe1', note: 'Draft-Slot und Produktionsprofil passen nicht zusammen.' },
    '5114311': { name: 'Jackson Harris',     pos: 'WR', team: 'LSU',            bru: 33, tier: 'fringe1', note: 'Draft-Slot und Produktionsprofil passen nicht zusammen.' },
    '5084771': { name: 'K.J. Duff',          pos: 'WR', team: 'Rutgers',        bru: 36, tier: 'fringe1', note: 'Draft-Slot und Produktionsprofil passen nicht zusammen.' },
    '5121169': { name: 'Darian Mensah',      pos: 'QB', team: 'Miami',          bru: 27, tier: 'fringe1' },
    '4870921': { name: 'Dante Moore',        pos: 'QB', team: 'Oregon',         bru: 32, tier: 'fringe1' },
    '4875127': { name: 'LaNorris Sellers',   pos: 'QB', team: 'South Carolina', bru: 41, tier: 'fringe1', note: 'Konsens eher Clear 1; Rushing-Upside kann den Wert schnell steigen lassen.' },
    // High 2nd
    '4922988': { name: 'Jamari Johnson',     pos: 'TE', team: 'Oregon',         bru: 37, tier: 'high2', note: 'TEs außerhalb Runde 1 gehen ohne TEP meist 2.02–2.05.' },
    '5138451': { name: 'Luke Reynolds',      pos: 'TE', team: 'Virginia Tech',  bru: 40, tier: 'high2' },
    '5079376': { name: 'Cam Coleman',        pos: 'WR', team: 'Texas',          bru: 43, tier: 'high2', note: 'Knapp an Fringe 1, Profil passt eher zu früher 2. Runde.' },
  },
};
