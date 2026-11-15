// ============================================================
//  PROSPECT_CONSENSUS — Konsens-Override für die 📈 Draft Range
// ============================================================
//  VON HAND GEPFLEGT (kein Sync überschreibt diese Datei).
//
//  Das Draft-Range-Modell (prospect-draft-model.js) zieht jeden Spieler
//  Richtung historischer Durchschnitt und unterschätzt deshalb echte
//  Ausnahme-Prospects. Für Spieler, bei denen Mock Drafts und Dynasty-
//  Rankings einig sind, steht hier der Konsens; die Box zeigt ihn statt
//  des Modells an (Modellwert bleibt als Vergleich sichtbar).
//
//  Schlüssel = rawId aus COLLEGE_SCOUTING (CFBD-Athleten-ID).
//    nfl    = erwarteter NFL-Pick   { lo, mid, hi }
//    rank   = Dynasty-Rookie-Rang 1QB { lo, mid, hi }
//    rankSF = dasselbe für Superflex (optional, sonst = rank)
//    chance = Draft-Chance 0–1 (optional)
//    asof / source = Stand und Quellen (erscheinen im Tooltip)
//  Eintrag nach dem NFL-Draft des Jahrgangs wieder entfernen.
// ============================================================

const PROSPECT_CONSENSUS = {
  "5079720": {
    name: "Jeremiah Smith", pos: "WR",
    nfl: { lo: 1, mid: 1, hi: 3 },
    rank: { lo: 1, mid: 1, hi: 1 },
    rankSF: { lo: 1, mid: 1, hi: 2 },
    chance: 0.99,
    asof: "2026-11-15",
    source: "Mock Drafts von PFF, Fox und Yahoo (jeweils Pick 1), Stick to the Model 99,0/100, C.J. Freel Big Board 2.0 (#1)",
  },
};
