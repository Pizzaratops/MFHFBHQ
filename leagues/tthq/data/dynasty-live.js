// ============================================================
//  DYNASTY LIVE — Saison-Form gegen Erwartung
// ============================================================
//  AUTO-GENERIERT von scripts/build-dynasty-live.js (tthq-sync).
//  Nicht von Hand editieren. Zuletzt aktualisiert: 2026-11-17
//  Stand der Saisondaten: 2026-11-16
//
//  Nur signifikante Bewegungen (≥ 8 Spiele, |shift| ≥ 0.08).
//  liveRank ersetzt im Trade Analyzer/Finder den Dynasty-Rang, wenn
//  "Live-Form" eingeschaltet ist (Standard). data/rankings.js bleibt unverändert.
//
//  Shape: { name, baseRank, liveRank, delta, games, expRank, seasonRank, shift, source }
//  delta > 0 = besser als erwartet (Rang steigt), delta < 0 = schlechter.
//  expRank/seasonRank = Rang im gemeinsamen Pool (Projection vs. Saison).
// ============================================================

const DYNASTY_LIVE_META = {"mode":"season","date":"2026-11-16","pool":343,"expectation":"snapshots/projections-2026-27-opening-night.js"};

const DYNASTY_LIVE = [
  { name: "Alperen Şengün", baseRank: 14, liveRank: 12, delta: 2, games: 13, expRank: 56, seasonRank: 10, shift: 0.18, source: "season" },
  { name: "Dylan Harper", baseRank: 16, liveRank: 14, delta: 2, games: 14, expRank: 75, seasonRank: 35, shift: 0.12, source: "season" },
  { name: "Amen Thompson", baseRank: 17, liveRank: 20, delta: -3, games: 14, expRank: 17, seasonRank: 55, shift: -0.14, source: "season" },
  { name: "Darryn Peterson", baseRank: 21, liveRank: 17, delta: 4, games: 14, expRank: 157, seasonRank: 50, shift: 0.19, source: "season" },
  { name: "Trey Murphy III", baseRank: 25, liveRank: 28, delta: -3, games: 9, expRank: 14, seasonRank: 65, shift: -0.11, source: "season" },
  { name: "Trae Young", baseRank: 33, liveRank: 37, delta: -4, games: 15, expRank: 27, seasonRank: 70, shift: -0.1, source: "season" },
  { name: "Brandon Miller", baseRank: 35, liveRank: 41, delta: -6, games: 11, expRank: 41, seasonRank: 152, shift: -0.16, source: "season" },
  { name: "Josh Giddey", baseRank: 36, liveRank: 43, delta: -7, games: 13, expRank: 53, seasonRank: 188, shift: -0.17, source: "season" },
  { name: "Darius Garland", baseRank: 42, liveRank: 48, delta: -6, games: 12, expRank: 37, seasonRank: 137, shift: -0.13, source: "season" },
  { name: "Walker Kessler", baseRank: 44, liveRank: 39, delta: 5, games: 14, expRank: 36, seasonRank: 12, shift: 0.12, source: "season" },
  { name: "Keyonte George", baseRank: 45, liveRank: 49, delta: -4, games: 13, expRank: 64, seasonRank: 116, shift: -0.08, source: "season" },
  { name: "Darius Acuff Jr.", baseRank: 51, liveRank: 46, delta: 5, games: 13, expRank: 191, seasonRank: 102, shift: 0.1, source: "season" },
  { name: "Zach Edey", baseRank: 53, liveRank: 62, delta: -9, games: 11, expRank: 28, seasonRank: 114, shift: -0.16, source: "season" },
  { name: "Matas Buzelis", baseRank: 54, liveRank: 67, delta: -13, games: 13, expRank: 32, seasonRank: 129, shift: -0.21, source: "season" },
  { name: "Desmond Bane", baseRank: 56, liveRank: 61, delta: -5, games: 12, expRank: 22, seasonRank: 56, shift: -0.09, source: "season" },
  { name: "Tyler Herro", baseRank: 60, liveRank: 66, delta: -6, games: 13, expRank: 43, seasonRank: 99, shift: -0.09, source: "season" },
  { name: "Kel'el Ware", baseRank: 66, liveRank: 87, delta: -21, games: 14, expRank: 30, seasonRank: 165, shift: -0.27, source: "season" },
  { name: "Naz Reid", baseRank: 67, liveRank: 75, delta: -8, games: 13, expRank: 59, seasonRank: 169, shift: -0.12, source: "season" },
  { name: "Kevin Durant", baseRank: 69, liveRank: 76, delta: -7, games: 15, expRank: 9, seasonRank: 28, shift: -0.09, source: "season" },
  { name: "James Harden", baseRank: 71, liveRank: 78, delta: -7, games: 14, expRank: 29, seasonRank: 73, shift: -0.1, source: "season" },
  { name: "Derrick White", baseRank: 74, liveRank: 84, delta: -10, games: 14, expRank: 21, seasonRank: 76, shift: -0.13, source: "season" },
  { name: "Zion Williamson", baseRank: 76, liveRank: 64, delta: 12, games: 13, expRank: 96, seasonRank: 17, shift: 0.17, source: "season" },
  { name: "Reed Sheppard", baseRank: 84, liveRank: 94, delta: -10, games: 12, expRank: 94, seasonRank: 190, shift: -0.11, source: "season" },
  { name: "Kyshawn George", baseRank: 85, liveRank: 73, delta: 12, games: 15, expRank: 120, seasonRank: 51, shift: 0.15, source: "season" },
  { name: "Cedric Coward", baseRank: 87, liveRank: 74, delta: 13, games: 13, expRank: 99, seasonRank: 26, shift: 0.17, source: "season" },
  { name: "Jabari Smith Jr.", baseRank: 91, liveRank: 82, delta: 9, games: 15, expRank: 83, seasonRank: 38, shift: 0.11, source: "season" },
  { name: "Mikal Bridges", baseRank: 92, liveRank: 104, delta: -12, games: 13, expRank: 67, seasonRank: 201, shift: -0.13, source: "season" },
  { name: "Anthony Black", baseRank: 100, liveRank: 82, delta: 18, games: 10, expRank: 132, seasonRank: 29, shift: 0.19, source: "season" },
  { name: "Ryan Rollins", baseRank: 103, liveRank: 124, delta: -21, games: 13, expRank: 52, seasonRank: 204, shift: -0.19, source: "season" },
  { name: "Ace Bailey", baseRank: 106, liveRank: 97, delta: 9, games: 14, expRank: 146, seasonRank: 84, shift: 0.09, source: "season" },
  { name: "Miles Bridges", baseRank: 120, liveRank: 107, delta: 13, games: 12, expRank: 103, seasonRank: 33, shift: 0.11, source: "season" },
  { name: "Rudy Gobert", baseRank: 123, liveRank: 140, delta: -17, games: 12, expRank: 87, seasonRank: 287, shift: -0.13, source: "season" },
  { name: "Aday Mara", baseRank: 126, liveRank: 111, delta: 15, games: 14, expRank: 265, seasonRank: 128, shift: 0.13, source: "season" },
  { name: "Ayo Dosunmu", baseRank: 133, liveRank: 116, delta: 17, games: 13, expRank: 102, seasonRank: 27, shift: 0.14, source: "season" },
  { name: "Moussa Diabaté", baseRank: 147, liveRank: 133, delta: 14, games: 11, expRank: 133, seasonRank: 58, shift: 0.1, source: "season" },
  { name: "Davion Mitchell", baseRank: 154, liveRank: 123, delta: 31, games: 14, expRank: 172, seasonRank: 23, shift: 0.22, source: "season" },
  { name: "Neemias Queta", baseRank: 156, liveRank: 173, delta: -17, games: 13, expRank: 61, seasonRank: 157, shift: -0.11, source: "season" },
  { name: "Andrew Wiggins", baseRank: 157, liveRank: 174, delta: -17, games: 14, expRank: 70, seasonRank: 170, shift: -0.11, source: "season" },
  { name: "Aaron Nesmith", baseRank: 162, liveRank: 176, delta: -14, games: 12, expRank: 100, seasonRank: 207, shift: -0.08, source: "season" },
  { name: "Gui Santos", baseRank: 169, liveRank: 190, delta: -21, games: 10, expRank: 110, seasonRank: 290, shift: -0.12, source: "season" },
  { name: "Mitchell Robinson", baseRank: 175, liveRank: 190, delta: -15, games: 13, expRank: 115, seasonRank: 232, shift: -0.08, source: "season" },
  { name: "Daniss Jenkins", baseRank: 180, liveRank: 164, delta: 16, games: 12, expRank: 193, seasonRank: 95, shift: 0.09, source: "season" },
  { name: "Zaccharie Risacher", baseRank: 191, liveRank: 175, delta: 16, games: 14, expRank: 204, seasonRank: 125, shift: 0.09, source: "season" },
  { name: "Jalen Smith", baseRank: 197, liveRank: 168, delta: 29, games: 12, expRank: 142, seasonRank: 30, shift: 0.16, source: "season" },
  { name: "DeMar DeRozan", baseRank: 210, liveRank: 231, delta: -21, games: 10, expRank: 98, seasonRank: 261, shift: -0.1, source: "season" },
  { name: "Nolan Traoré", baseRank: 229, liveRank: 201, delta: 28, games: 11, expRank: 307, seasonRank: 132, shift: 0.13, source: "season" },
  { name: "Meleek Thomas", baseRank: 252, liveRank: 215, delta: 37, games: 12, expRank: 308, seasonRank: 113, shift: 0.16, source: "season" },
  { name: "Nikola Vučević", baseRank: 253, liveRank: 278, delta: -25, games: 12, expRank: 131, seasonRank: 302, shift: -0.09, source: "season" },
  { name: "Duncan Robinson", baseRank: 305, liveRank: 277, delta: 28, games: 12, expRank: 174, seasonRank: 41, shift: 0.1, source: "season" },
  { name: "Jaxson Hayes", baseRank: 311, liveRank: 286, delta: 25, games: 12, expRank: 187, seasonRank: 86, shift: 0.08, source: "season" },
  { name: "Ziaire Williams", baseRank: 342, liveRank: 293, delta: 49, games: 11, expRank: 221, seasonRank: 64, shift: 0.15, source: "season" },
  { name: "Tyrese Proctor", baseRank: 388, liveRank: 343, delta: 45, games: 14, expRank: 286, seasonRank: 143, shift: 0.12, source: "season" },
  { name: "Quenton Jackson", baseRank: 521, liveRank: 471, delta: 50, games: 14, expRank: 273, seasonRank: 121, shift: 0.1, source: "season" }
];
