// ============================================================
//  DYNASTY LIVE — Saison-Form gegen Erwartung
// ============================================================
//  AUTO-GENERIERT von scripts/build-dynasty-live.js (tthq-sync).
//  Nicht von Hand editieren. Zuletzt aktualisiert: 2026-11-21
//  Stand der Saisondaten: 2026-11-20
//
//  Nur signifikante Bewegungen (≥ 8 Spiele, |shift| ≥ 0.08).
//  liveRank ersetzt im Trade Analyzer/Finder den Dynasty-Rang, wenn
//  "Live-Form" eingeschaltet ist (Standard). data/rankings.js bleibt unverändert.
//
//  Shape: { name, baseRank, liveRank, delta, games, expRank, seasonRank, shift, source }
//  delta > 0 = besser als erwartet (Rang steigt), delta < 0 = schlechter.
//  expRank/seasonRank = Rang im gemeinsamen Pool (Projection vs. Saison).
// ============================================================

const DYNASTY_LIVE_META = {"mode":"season","date":"2026-11-20","pool":343,"expectation":"snapshots/projections-2026-27-opening-night.js"};

const DYNASTY_LIVE = [
  { name: "Alperen Şengün", baseRank: 14, liveRank: 12, delta: 2, games: 14, expRank: 56, seasonRank: 13, shift: 0.17, source: "season" },
  { name: "Amen Thompson", baseRank: 17, liveRank: 20, delta: -3, games: 15, expRank: 17, seasonRank: 56, shift: -0.15, source: "season" },
  { name: "Donovan Mitchell", baseRank: 20, liveRank: 22, delta: -2, games: 16, expRank: 8, seasonRank: 28, shift: -0.1, source: "season" },
  { name: "Darryn Peterson", baseRank: 21, liveRank: 19, delta: 2, games: 16, expRank: 157, seasonRank: 90, shift: 0.1, source: "season" },
  { name: "Trey Murphy III", baseRank: 25, liveRank: 28, delta: -3, games: 9, expRank: 14, seasonRank: 66, shift: -0.11, source: "season" },
  { name: "Trae Young", baseRank: 33, liveRank: 38, delta: -5, games: 16, expRank: 27, seasonRank: 87, shift: -0.13, source: "season" },
  { name: "LaMelo Ball", baseRank: 34, liveRank: 40, delta: -6, games: 16, expRank: 33, seasonRank: 95, shift: -0.15, source: "season" },
  { name: "Brandon Miller", baseRank: 35, liveRank: 41, delta: -6, games: 13, expRank: 41, seasonRank: 142, shift: -0.16, source: "season" },
  { name: "Josh Giddey", baseRank: 36, liveRank: 42, delta: -6, games: 14, expRank: 53, seasonRank: 162, shift: -0.16, source: "season" },
  { name: "Darius Garland", baseRank: 42, liveRank: 47, delta: -5, games: 14, expRank: 37, seasonRank: 108, shift: -0.12, source: "season" },
  { name: "Walker Kessler", baseRank: 44, liveRank: 40, delta: 4, games: 15, expRank: 36, seasonRank: 15, shift: 0.1, source: "season" },
  { name: "Darius Acuff Jr.", baseRank: 51, liveRank: 44, delta: 7, games: 14, expRank: 191, seasonRank: 83, shift: 0.14, source: "season" },
  { name: "Zach Edey", baseRank: 53, liveRank: 63, delta: -10, games: 12, expRank: 28, seasonRank: 111, shift: -0.17, source: "season" },
  { name: "Matas Buzelis", baseRank: 54, liveRank: 65, delta: -11, games: 14, expRank: 32, seasonRank: 109, shift: -0.19, source: "season" },
  { name: "Desmond Bane", baseRank: 56, liveRank: 62, delta: -6, games: 13, expRank: 22, seasonRank: 59, shift: -0.1, source: "season" },
  { name: "Tyler Herro", baseRank: 60, liveRank: 68, delta: -8, games: 15, expRank: 43, seasonRank: 120, shift: -0.12, source: "season" },
  { name: "Collin Murray-Boyles", baseRank: 63, liveRank: 68, delta: -5, games: 14, expRank: 80, seasonRank: 130, shift: -0.08, source: "season" },
  { name: "Kel'el Ware", baseRank: 66, liveRank: 89, delta: -23, games: 16, expRank: 30, seasonRank: 167, shift: -0.3, source: "season" },
  { name: "Naz Reid", baseRank: 67, liveRank: 76, delta: -9, games: 15, expRank: 59, seasonRank: 161, shift: -0.12, source: "season" },
  { name: "Kevin Durant", baseRank: 69, liveRank: 77, delta: -8, games: 16, expRank: 9, seasonRank: 30, shift: -0.1, source: "season" },
  { name: "Jaden McDaniels", baseRank: 70, liveRank: 64, delta: 6, games: 16, expRank: 51, seasonRank: 23, shift: 0.09, source: "season" },
  { name: "Derrick White", baseRank: 74, liveRank: 86, delta: -12, games: 15, expRank: 21, seasonRank: 85, shift: -0.15, source: "season" },
  { name: "Zion Williamson", baseRank: 76, liveRank: 64, delta: 12, games: 15, expRank: 96, seasonRank: 21, shift: 0.17, source: "season" },
  { name: "Reed Sheppard", baseRank: 84, liveRank: 91, delta: -7, games: 13, expRank: 94, seasonRank: 156, shift: -0.08, source: "season" },
  { name: "Kyshawn George", baseRank: 85, liveRank: 72, delta: 13, games: 16, expRank: 120, seasonRank: 48, shift: 0.16, source: "season" },
  { name: "Cedric Coward", baseRank: 87, liveRank: 72, delta: 15, games: 15, expRank: 99, seasonRank: 24, shift: 0.19, source: "season" },
  { name: "Jabari Smith Jr.", baseRank: 91, liveRank: 80, delta: 11, games: 16, expRank: 83, seasonRank: 33, shift: 0.13, source: "season" },
  { name: "Mikal Bridges", baseRank: 92, liveRank: 105, delta: -13, games: 15, expRank: 67, seasonRank: 190, shift: -0.13, source: "season" },
  { name: "Coby White", baseRank: 95, liveRank: 104, delta: -9, games: 8, expRank: 92, seasonRank: 280, shift: -0.09, source: "season" },
  { name: "Anthony Black", baseRank: 100, liveRank: 84, delta: 16, games: 11, expRank: 132, seasonRank: 37, shift: 0.18, source: "season" },
  { name: "Ryan Rollins", baseRank: 103, liveRank: 125, delta: -22, games: 14, expRank: 52, seasonRank: 199, shift: -0.19, source: "season" },
  { name: "Ace Bailey", baseRank: 106, liveRank: 98, delta: 8, games: 16, expRank: 146, seasonRank: 93, shift: 0.08, source: "season" },
  { name: "Miles Bridges", baseRank: 120, liveRank: 105, delta: 15, games: 14, expRank: 103, seasonRank: 31, shift: 0.13, source: "season" },
  { name: "Rudy Gobert", baseRank: 123, liveRank: 144, delta: -21, games: 15, expRank: 87, seasonRank: 297, shift: -0.16, source: "season" },
  { name: "Aday Mara", baseRank: 126, liveRank: 110, delta: 16, games: 15, expRank: 266, seasonRank: 127, shift: 0.14, source: "season" },
  { name: "Ayo Dosunmu", baseRank: 133, liveRank: 118, delta: 15, games: 16, expRank: 102, seasonRank: 38, shift: 0.12, source: "season" },
  { name: "Wendell Carter Jr.", baseRank: 145, liveRank: 132, delta: 13, games: 14, expRank: 126, seasonRank: 55, shift: 0.1, source: "season" },
  { name: "Moussa Diabaté", baseRank: 147, liveRank: 132, delta: 15, games: 13, expRank: 133, seasonRank: 61, shift: 0.11, source: "season" },
  { name: "Joan Beringer", baseRank: 148, liveRank: 163, delta: -15, games: 16, expRank: 128, seasonRank: 211, shift: -0.09, source: "season" },
  { name: "Davion Mitchell", baseRank: 154, liveRank: 120, delta: 34, games: 15, expRank: 172, seasonRank: 19, shift: 0.25, source: "season" },
  { name: "Neemias Queta", baseRank: 156, liveRank: 172, delta: -16, games: 14, expRank: 61, seasonRank: 144, shift: -0.1, source: "season" },
  { name: "Andrew Wiggins", baseRank: 157, liveRank: 175, delta: -18, games: 15, expRank: 70, seasonRank: 172, shift: -0.11, source: "season" },
  { name: "Aaron Nesmith", baseRank: 162, liveRank: 178, delta: -16, games: 14, expRank: 100, seasonRank: 219, shift: -0.1, source: "season" },
  { name: "Cameron Johnson", baseRank: 164, liveRank: 178, delta: -14, games: 10, expRank: 73, seasonRank: 173, shift: -0.08, source: "season" },
  { name: "Gui Santos", baseRank: 169, liveRank: 195, delta: -26, games: 13, expRank: 110, seasonRank: 301, shift: -0.14, source: "season" },
  { name: "Mitchell Robinson", baseRank: 175, liveRank: 191, delta: -16, games: 14, expRank: 115, seasonRank: 233, shift: -0.09, source: "season" },
  { name: "Daniss Jenkins", baseRank: 180, liveRank: 160, delta: 20, games: 14, expRank: 194, seasonRank: 88, shift: 0.12, source: "season" },
  { name: "Jaylen Wells", baseRank: 190, liveRank: 175, delta: 15, games: 16, expRank: 212, seasonRank: 128, shift: 0.08, source: "season" },
  { name: "Jalen Smith", baseRank: 197, liveRank: 168, delta: 29, games: 13, expRank: 142, seasonRank: 32, shift: 0.16, source: "season" },
  { name: "Cam Spencer", baseRank: 199, liveRank: 180, delta: 19, games: 16, expRank: 143, seasonRank: 65, shift: 0.1, source: "season" },
  { name: "DeMar DeRozan", baseRank: 210, liveRank: 235, delta: -25, games: 12, expRank: 98, seasonRank: 266, shift: -0.11, source: "season" },
  { name: "Nolan Traoré", baseRank: 229, liveRank: 197, delta: 32, games: 13, expRank: 307, seasonRank: 125, shift: 0.15, source: "season" },
  { name: "Meleek Thomas", baseRank: 252, liveRank: 212, delta: 40, games: 14, expRank: 308, seasonRank: 116, shift: 0.17, source: "season" },
  { name: "Nikola Vučević", baseRank: 253, liveRank: 277, delta: -24, games: 12, expRank: 131, seasonRank: 298, shift: -0.09, source: "season" },
  { name: "Luke Kornet", baseRank: 265, liveRank: 288, delta: -23, games: 16, expRank: 130, seasonRank: 242, shift: -0.08, source: "season" },
  { name: "Duncan Robinson", baseRank: 305, liveRank: 278, delta: 27, games: 12, expRank: 174, seasonRank: 45, shift: 0.09, source: "season" },
  { name: "Jaxson Hayes", baseRank: 311, liveRank: 281, delta: 30, games: 13, expRank: 187, seasonRank: 76, shift: 0.1, source: "season" },
  { name: "Ziaire Williams", baseRank: 342, liveRank: 304, delta: 38, games: 13, expRank: 222, seasonRank: 96, shift: 0.12, source: "season" },
  { name: "Tyrese Proctor", baseRank: 388, liveRank: 347, delta: 41, games: 16, expRank: 286, seasonRank: 159, shift: 0.11, source: "season" },
  { name: "Sidy Cissoko", baseRank: 429, liveRank: 392, delta: 37, games: 15, expRank: 320, seasonRank: 196, shift: 0.09, source: "season" },
  { name: "Quenton Jackson", baseRank: 521, liveRank: 469, delta: 52, games: 16, expRank: 274, seasonRank: 124, shift: 0.11, source: "season" }
];
