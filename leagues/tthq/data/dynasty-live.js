// ============================================================
//  DYNASTY LIVE — Saison-Form gegen Erwartung
// ============================================================
//  AUTO-GENERIERT von scripts/build-dynasty-live.js (tthq-sync).
//  Nicht von Hand editieren. Zuletzt aktualisiert: 2026-11-14
//  Stand der Saisondaten: 2026-11-12
//
//  Nur signifikante Bewegungen (≥ 8 Spiele, |shift| ≥ 0.08).
//  liveRank ersetzt im Trade Analyzer/Finder den Dynasty-Rang, wenn
//  "Live-Form" eingeschaltet ist (Standard). data/rankings.js bleibt unverändert.
//
//  Shape: { name, baseRank, liveRank, delta, games, expRank, seasonRank, shift, source }
//  delta > 0 = besser als erwartet (Rang steigt), delta < 0 = schlechter.
//  expRank/seasonRank = Rang im gemeinsamen Pool (Projection vs. Saison).
// ============================================================

const DYNASTY_LIVE_META = {"mode":"season","date":"2026-11-12","pool":343,"expectation":"snapshots/projections-2026-27-opening-night.js"};

const DYNASTY_LIVE = [
  { name: "Scottie Barnes", baseRank: 12, liveRank: 14, delta: -2, games: 8, expRank: 16, seasonRank: 75, shift: -0.13, source: "season" },
  { name: "Alperen Şengün", baseRank: 14, liveRank: 12, delta: 2, games: 10, expRank: 56, seasonRank: 15, shift: 0.12, source: "season" },
  { name: "Amen Thompson", baseRank: 17, liveRank: 20, delta: -3, games: 12, expRank: 17, seasonRank: 82, shift: -0.18, source: "season" },
  { name: "Darryn Peterson", baseRank: 21, liveRank: 18, delta: 3, games: 12, expRank: 156, seasonRank: 67, shift: 0.13, source: "season" },
  { name: "Trey Murphy III", baseRank: 25, liveRank: 28, delta: -3, games: 9, expRank: 14, seasonRank: 66, shift: -0.11, source: "season" },
  { name: "Brandon Miller", baseRank: 35, liveRank: 40, delta: -5, games: 10, expRank: 41, seasonRank: 126, shift: -0.13, source: "season" },
  { name: "Josh Giddey", baseRank: 36, liveRank: 42, delta: -6, games: 10, expRank: 53, seasonRank: 184, shift: -0.14, source: "season" },
  { name: "Darius Garland", baseRank: 42, liveRank: 48, delta: -6, games: 10, expRank: 37, seasonRank: 159, shift: -0.13, source: "season" },
  { name: "Walker Kessler", baseRank: 44, liveRank: 39, delta: 5, games: 13, expRank: 36, seasonRank: 11, shift: 0.12, source: "season" },
  { name: "Darius Acuff Jr.", baseRank: 51, liveRank: 44, delta: 7, games: 11, expRank: 190, seasonRank: 68, shift: 0.15, source: "season" },
  { name: "Zach Edey", baseRank: 53, liveRank: 63, delta: -10, games: 10, expRank: 28, seasonRank: 129, shift: -0.17, source: "season" },
  { name: "Matas Buzelis", baseRank: 54, liveRank: 68, delta: -14, games: 10, expRank: 32, seasonRank: 186, shift: -0.23, source: "season" },
  { name: "Desmond Bane", baseRank: 56, liveRank: 64, delta: -8, games: 10, expRank: 22, seasonRank: 110, shift: -0.14, source: "season" },
  { name: "Kel'el Ware", baseRank: 66, liveRank: 86, delta: -20, games: 12, expRank: 30, seasonRank: 188, shift: -0.27, source: "season" },
  { name: "Naz Reid", baseRank: 67, liveRank: 75, delta: -8, games: 12, expRank: 59, seasonRank: 162, shift: -0.11, source: "season" },
  { name: "Kevin Durant", baseRank: 69, liveRank: 75, delta: -6, games: 12, expRank: 9, seasonRank: 28, shift: -0.08, source: "season" },
  { name: "James Harden", baseRank: 71, liveRank: 79, delta: -8, games: 12, expRank: 29, seasonRank: 90, shift: -0.11, source: "season" },
  { name: "Derrick White", baseRank: 74, liveRank: 82, delta: -8, games: 12, expRank: 21, seasonRank: 65, shift: -0.1, source: "season" },
  { name: "Zion Williamson", baseRank: 76, liveRank: 65, delta: 11, games: 11, expRank: 95, seasonRank: 16, shift: 0.16, source: "season" },
  { name: "Kyshawn George", baseRank: 85, liveRank: 75, delta: 10, games: 13, expRank: 119, seasonRank: 54, shift: 0.12, source: "season" },
  { name: "Yaxel Lendeborg", baseRank: 86, liveRank: 76, delta: 10, games: 12, expRank: 90, seasonRank: 34, shift: 0.12, source: "season" },
  { name: "Jabari Smith Jr.", baseRank: 91, liveRank: 77, delta: 14, games: 12, expRank: 82, seasonRank: 19, shift: 0.17, source: "season" },
  { name: "Mikal Bridges", baseRank: 92, liveRank: 104, delta: -12, games: 11, expRank: 66, seasonRank: 212, shift: -0.12, source: "season" },
  { name: "Anthony Black", baseRank: 100, liveRank: 83, delta: 17, games: 8, expRank: 131, seasonRank: 23, shift: 0.19, source: "season" },
  { name: "Ryan Rollins", baseRank: 103, liveRank: 123, delta: -20, games: 12, expRank: 52, seasonRank: 200, shift: -0.17, source: "season" },
  { name: "Ace Bailey", baseRank: 106, liveRank: 97, delta: 9, games: 12, expRank: 144, seasonRank: 81, shift: 0.09, source: "season" },
  { name: "Brandin Podziemski", baseRank: 108, liveRank: 98, delta: 10, games: 10, expRank: 78, seasonRank: 30, shift: 0.1, source: "season" },
  { name: "Miles Bridges", baseRank: 120, liveRank: 106, delta: 14, games: 11, expRank: 102, seasonRank: 27, shift: 0.12, source: "season" },
  { name: "Rudy Gobert", baseRank: 123, liveRank: 139, delta: -16, games: 11, expRank: 86, seasonRank: 275, shift: -0.12, source: "season" },
  { name: "Aday Mara", baseRank: 126, liveRank: 114, delta: 12, games: 12, expRank: 262, seasonRank: 141, shift: 0.1, source: "season" },
  { name: "Andrew Nembhard", baseRank: 131, liveRank: 120, delta: 11, games: 10, expRank: 155, seasonRank: 60, shift: 0.09, source: "season" },
  { name: "Ayo Dosunmu", baseRank: 133, liveRank: 116, delta: 17, games: 12, expRank: 101, seasonRank: 26, shift: 0.13, source: "season" },
  { name: "Wendell Carter Jr.", baseRank: 145, liveRank: 131, delta: 14, games: 11, expRank: 125, seasonRank: 43, shift: 0.1, source: "season" },
  { name: "Davion Mitchell", baseRank: 154, liveRank: 135, delta: 19, games: 11, expRank: 171, seasonRank: 45, shift: 0.13, source: "season" },
  { name: "Neemias Queta", baseRank: 156, liveRank: 173, delta: -17, games: 12, expRank: 60, seasonRank: 157, shift: -0.1, source: "season" },
  { name: "Andrew Wiggins", baseRank: 157, liveRank: 175, delta: -18, games: 11, expRank: 69, seasonRank: 202, shift: -0.11, source: "season" },
  { name: "Gui Santos", baseRank: 169, liveRank: 188, delta: -19, games: 9, expRank: 109, seasonRank: 280, shift: -0.11, source: "season" },
  { name: "Daniss Jenkins", baseRank: 180, liveRank: 159, delta: 21, games: 11, expRank: 192, seasonRank: 72, shift: 0.12, source: "season" },
  { name: "Zaccharie Risacher", baseRank: 191, liveRank: 176, delta: 15, games: 12, expRank: 203, seasonRank: 121, shift: 0.08, source: "season" },
  { name: "Jalen Smith", baseRank: 197, liveRank: 176, delta: 21, games: 10, expRank: 140, seasonRank: 41, shift: 0.11, source: "season" },
  { name: "DeMar DeRozan", baseRank: 210, liveRank: 228, delta: -18, games: 9, expRank: 97, seasonRank: 238, shift: -0.08, source: "season" },
  { name: "Nolan Traoré", baseRank: 229, liveRank: 200, delta: 29, games: 10, expRank: 304, seasonRank: 116, shift: 0.14, source: "season" },
  { name: "Meleek Thomas", baseRank: 252, liveRank: 214, delta: 38, games: 9, expRank: 305, seasonRank: 88, shift: 0.16, source: "season" },
  { name: "Nikola Vučević", baseRank: 253, liveRank: 275, delta: -22, games: 11, expRank: 130, seasonRank: 287, shift: -0.08, source: "season" },
  { name: "Duncan Robinson", baseRank: 305, liveRank: 274, delta: 31, games: 11, expRank: 173, seasonRank: 31, shift: 0.11, source: "season" },
  { name: "Jaxson Hayes", baseRank: 311, liveRank: 287, delta: 24, games: 11, expRank: 186, seasonRank: 85, shift: 0.08, source: "season" },
  { name: "Ziaire Williams", baseRank: 342, liveRank: 295, delta: 47, games: 10, expRank: 219, seasonRank: 62, shift: 0.15, source: "season" },
  { name: "Quenton Jackson", baseRank: 521, liveRank: 475, delta: 46, games: 12, expRank: 270, seasonRank: 119, shift: 0.09, source: "season" }
];
