// ============================================================
//  DYNASTY LIVE — Saison-Form gegen Erwartung
// ============================================================
//  AUTO-GENERIERT von scripts/build-dynasty-live.js (tthq-sync).
//  Nicht von Hand editieren. Zuletzt aktualisiert: 2026-11-15
//  Stand der Saisondaten: 2026-11-15
//
//  Nur signifikante Bewegungen (≥ 8 Spiele, |shift| ≥ 0.08).
//  liveRank ersetzt im Trade Analyzer/Finder den Dynasty-Rang, wenn
//  "Live-Form" eingeschaltet ist (Standard). data/rankings.js bleibt unverändert.
//
//  Shape: { name, baseRank, liveRank, delta, games, expRank, seasonRank, shift, source }
//  delta > 0 = besser als erwartet (Rang steigt), delta < 0 = schlechter.
//  expRank/seasonRank = Rang im gemeinsamen Pool (Projection vs. Saison).
// ============================================================

const DYNASTY_LIVE_META = {"mode":"season","date":"2026-11-15","pool":333,"expectation":"snapshots/projections-2026-27-opening-night.js"};

const DYNASTY_LIVE = [
  { name: "Scottie Barnes", baseRank: 12, liveRank: 14, delta: -2, games: 8, expRank: 16, seasonRank: 73, shift: -0.13, source: "season" },
  { name: "Alperen Şengün", baseRank: 14, liveRank: 12, delta: 2, games: 11, expRank: 56, seasonRank: 10, shift: 0.16, source: "season" },
  { name: "Amen Thompson", baseRank: 17, liveRank: 21, delta: -4, games: 13, expRank: 17, seasonRank: 84, shift: -0.19, source: "season" },
  { name: "Donovan Mitchell", baseRank: 20, liveRank: 22, delta: -2, games: 13, expRank: 8, seasonRank: 32, shift: -0.11, source: "season" },
  { name: "Darryn Peterson", baseRank: 21, liveRank: 18, delta: 3, games: 13, expRank: 154, seasonRank: 50, shift: 0.18, source: "season" },
  { name: "Trey Murphy III", baseRank: 25, liveRank: 28, delta: -3, games: 9, expRank: 14, seasonRank: 65, shift: -0.11, source: "season" },
  { name: "Brandon Miller", baseRank: 35, liveRank: 40, delta: -5, games: 10, expRank: 41, seasonRank: 128, shift: -0.13, source: "season" },
  { name: "Josh Giddey", baseRank: 36, liveRank: 41, delta: -5, games: 12, expRank: 53, seasonRank: 159, shift: -0.14, source: "season" },
  { name: "Darius Garland", baseRank: 42, liveRank: 48, delta: -6, games: 11, expRank: 37, seasonRank: 142, shift: -0.13, source: "season" },
  { name: "Walker Kessler", baseRank: 44, liveRank: 39, delta: 5, games: 13, expRank: 36, seasonRank: 11, shift: 0.12, source: "season" },
  { name: "Darius Acuff Jr.", baseRank: 51, liveRank: 44, delta: 7, games: 12, expRank: 188, seasonRank: 76, shift: 0.14, source: "season" },
  { name: "Zach Edey", baseRank: 53, liveRank: 63, delta: -10, games: 10, expRank: 28, seasonRank: 130, shift: -0.17, source: "season" },
  { name: "Matas Buzelis", baseRank: 54, liveRank: 67, delta: -13, games: 12, expRank: 32, seasonRank: 144, shift: -0.22, source: "season" },
  { name: "Desmond Bane", baseRank: 56, liveRank: 64, delta: -8, games: 11, expRank: 22, seasonRank: 92, shift: -0.13, source: "season" },
  { name: "OG Anunoby", baseRank: 65, liveRank: 71, delta: -6, games: 12, expRank: 34, seasonRank: 98, shift: -0.08, source: "season" },
  { name: "Kel'el Ware", baseRank: 66, liveRank: 87, delta: -21, games: 13, expRank: 30, seasonRank: 174, shift: -0.27, source: "season" },
  { name: "Naz Reid", baseRank: 67, liveRank: 75, delta: -8, games: 12, expRank: 59, seasonRank: 160, shift: -0.11, source: "season" },
  { name: "Kevin Durant", baseRank: 69, liveRank: 75, delta: -6, games: 13, expRank: 9, seasonRank: 28, shift: -0.09, source: "season" },
  { name: "James Harden", baseRank: 71, liveRank: 77, delta: -6, games: 13, expRank: 29, seasonRank: 66, shift: -0.08, source: "season" },
  { name: "Derrick White", baseRank: 74, liveRank: 82, delta: -8, games: 12, expRank: 21, seasonRank: 64, shift: -0.1, source: "season" },
  { name: "Zion Williamson", baseRank: 76, liveRank: 65, delta: 11, games: 13, expRank: 94, seasonRank: 19, shift: 0.16, source: "season" },
  { name: "Reed Sheppard", baseRank: 84, liveRank: 92, delta: -8, games: 10, expRank: 92, seasonRank: 175, shift: -0.09, source: "season" },
  { name: "Kyshawn George", baseRank: 85, liveRank: 75, delta: 10, games: 13, expRank: 118, seasonRank: 52, shift: 0.13, source: "season" },
  { name: "Cedric Coward", baseRank: 87, liveRank: 76, delta: 11, games: 12, expRank: 97, seasonRank: 30, shift: 0.14, source: "season" },
  { name: "Jabari Smith Jr.", baseRank: 91, liveRank: 78, delta: 13, games: 13, expRank: 82, seasonRank: 24, shift: 0.15, source: "season" },
  { name: "Mikal Bridges", baseRank: 92, liveRank: 104, delta: -12, games: 12, expRank: 66, seasonRank: 199, shift: -0.12, source: "season" },
  { name: "Anthony Black", baseRank: 100, liveRank: 85, delta: 15, games: 9, expRank: 130, seasonRank: 34, shift: 0.16, source: "season" },
  { name: "Ryan Rollins", baseRank: 103, liveRank: 124, delta: -21, games: 13, expRank: 52, seasonRank: 200, shift: -0.18, source: "season" },
  { name: "Ace Bailey", baseRank: 106, liveRank: 94, delta: 12, games: 13, expRank: 143, seasonRank: 70, shift: 0.11, source: "season" },
  { name: "Miles Bridges", baseRank: 120, liveRank: 106, delta: 14, games: 11, expRank: 101, seasonRank: 27, shift: 0.12, source: "season" },
  { name: "Rudy Gobert", baseRank: 123, liveRank: 141, delta: -18, games: 12, expRank: 86, seasonRank: 287, shift: -0.13, source: "season" },
  { name: "Aday Mara", baseRank: 126, liveRank: 113, delta: 13, games: 13, expRank: 260, seasonRank: 133, shift: 0.11, source: "season" },
  { name: "Ayo Dosunmu", baseRank: 133, liveRank: 115, delta: 18, games: 13, expRank: 100, seasonRank: 25, shift: 0.14, source: "season" },
  { name: "Wendell Carter Jr.", baseRank: 145, liveRank: 130, delta: 15, games: 12, expRank: 124, seasonRank: 43, shift: 0.11, source: "season" },
  { name: "Davion Mitchell", baseRank: 154, liveRank: 126, delta: 28, games: 13, expRank: 169, seasonRank: 26, shift: 0.2, source: "season" },
  { name: "Neemias Queta", baseRank: 156, liveRank: 173, delta: -17, games: 12, expRank: 60, seasonRank: 155, shift: -0.1, source: "season" },
  { name: "Andrew Wiggins", baseRank: 157, liveRank: 177, delta: -20, games: 13, expRank: 69, seasonRank: 198, shift: -0.12, source: "season" },
  { name: "Aaron Nesmith", baseRank: 162, liveRank: 176, delta: -14, games: 12, expRank: 98, seasonRank: 203, shift: -0.08, source: "season" },
  { name: "Gui Santos", baseRank: 169, liveRank: 190, delta: -21, games: 10, expRank: 108, seasonRank: 289, shift: -0.12, source: "season" },
  { name: "Daniss Jenkins", baseRank: 180, liveRank: 164, delta: 16, games: 12, expRank: 190, seasonRank: 95, shift: 0.09, source: "season" },
  { name: "Jalen Smith", baseRank: 197, liveRank: 174, delta: 23, games: 11, expRank: 139, seasonRank: 38, shift: 0.13, source: "season" },
  { name: "DeMar DeRozan", baseRank: 210, liveRank: 231, delta: -21, games: 10, expRank: 96, seasonRank: 258, shift: -0.1, source: "season" },
  { name: "Nolan Traoré", baseRank: 229, liveRank: 203, delta: 26, games: 11, expRank: 299, seasonRank: 134, shift: 0.12, source: "season" },
  { name: "Meleek Thomas", baseRank: 252, liveRank: 216, delta: 36, games: 11, expRank: 300, seasonRank: 108, shift: 0.15, source: "season" },
  { name: "Nikola Vučević", baseRank: 253, liveRank: 277, delta: -24, games: 12, expRank: 129, seasonRank: 293, shift: -0.09, source: "season" },
  { name: "Duncan Robinson", baseRank: 305, liveRank: 279, delta: 26, games: 12, expRank: 171, seasonRank: 45, shift: 0.09, source: "season" },
  { name: "Jaxson Hayes", baseRank: 311, liveRank: 286, delta: 25, games: 12, expRank: 184, seasonRank: 85, shift: 0.08, source: "season" },
  { name: "Ziaire Williams", baseRank: 342, liveRank: 294, delta: 48, games: 10, expRank: 217, seasonRank: 60, shift: 0.15, source: "season" },
  { name: "Tyrese Proctor", baseRank: 388, liveRank: 344, delta: 44, games: 13, expRank: 280, seasonRank: 137, shift: 0.12, source: "season" },
  { name: "Quenton Jackson", baseRank: 521, liveRank: 473, delta: 48, games: 14, expRank: 267, seasonRank: 121, shift: 0.1, source: "season" }
];
