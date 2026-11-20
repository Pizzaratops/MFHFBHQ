// ============================================================
//  DYNASTY LIVE — Saison-Form gegen Erwartung
// ============================================================
//  AUTO-GENERIERT von scripts/build-dynasty-live.js (tthq-sync).
//  Nicht von Hand editieren. Zuletzt aktualisiert: 2026-11-20
//  Stand der Saisondaten: 2026-11-18
//
//  Nur signifikante Bewegungen (≥ 8 Spiele, |shift| ≥ 0.08).
//  liveRank ersetzt im Trade Analyzer/Finder den Dynasty-Rang, wenn
//  "Live-Form" eingeschaltet ist (Standard). data/rankings.js bleibt unverändert.
//
//  Shape: { name, baseRank, liveRank, delta, games, expRank, seasonRank, shift, source }
//  delta > 0 = besser als erwartet (Rang steigt), delta < 0 = schlechter.
//  expRank/seasonRank = Rang im gemeinsamen Pool (Projection vs. Saison).
// ============================================================

const DYNASTY_LIVE_META = {"mode":"season","date":"2026-11-18","pool":353,"expectation":"snapshots/projections-2026-27-opening-night.js"};

const DYNASTY_LIVE = [
  { name: "Alperen Şengün", baseRank: 14, liveRank: 12, delta: 2, games: 14, expRank: 56, seasonRank: 13, shift: 0.17, source: "season" },
  { name: "Amen Thompson", baseRank: 17, liveRank: 20, delta: -3, games: 15, expRank: 17, seasonRank: 55, shift: -0.14, source: "season" },
  { name: "Darryn Peterson", baseRank: 21, liveRank: 19, delta: 2, games: 16, expRank: 159, seasonRank: 91, shift: 0.1, source: "season" },
  { name: "Trey Murphy III", baseRank: 25, liveRank: 28, delta: -3, games: 9, expRank: 14, seasonRank: 65, shift: -0.11, source: "season" },
  { name: "Trae Young", baseRank: 33, liveRank: 38, delta: -5, games: 16, expRank: 27, seasonRank: 86, shift: -0.13, source: "season" },
  { name: "LaMelo Ball", baseRank: 34, liveRank: 39, delta: -5, games: 15, expRank: 33, seasonRank: 89, shift: -0.14, source: "season" },
  { name: "Brandon Miller", baseRank: 35, liveRank: 41, delta: -6, games: 12, expRank: 41, seasonRank: 141, shift: -0.16, source: "season" },
  { name: "Josh Giddey", baseRank: 36, liveRank: 42, delta: -6, games: 14, expRank: 53, seasonRank: 162, shift: -0.16, source: "season" },
  { name: "Darius Garland", baseRank: 42, liveRank: 48, delta: -6, games: 13, expRank: 37, seasonRank: 122, shift: -0.13, source: "season" },
  { name: "Walker Kessler", baseRank: 44, liveRank: 40, delta: 4, games: 15, expRank: 36, seasonRank: 17, shift: 0.09, source: "season" },
  { name: "Darius Acuff Jr.", baseRank: 51, liveRank: 44, delta: 7, games: 14, expRank: 193, seasonRank: 79, shift: 0.15, source: "season" },
  { name: "Zach Edey", baseRank: 53, liveRank: 62, delta: -9, games: 12, expRank: 28, seasonRank: 108, shift: -0.16, source: "season" },
  { name: "Matas Buzelis", baseRank: 54, liveRank: 65, delta: -11, games: 14, expRank: 32, seasonRank: 106, shift: -0.19, source: "season" },
  { name: "Desmond Bane", baseRank: 56, liveRank: 61, delta: -5, games: 13, expRank: 22, seasonRank: 56, shift: -0.09, source: "season" },
  { name: "Tyler Herro", baseRank: 60, liveRank: 67, delta: -7, games: 14, expRank: 43, seasonRank: 110, shift: -0.11, source: "season" },
  { name: "Ivica Zubac", baseRank: 62, liveRank: 68, delta: -6, games: 10, expRank: 54, seasonRank: 175, shift: -0.09, source: "season" },
  { name: "Collin Murray-Boyles", baseRank: 63, liveRank: 68, delta: -5, games: 14, expRank: 81, seasonRank: 131, shift: -0.08, source: "season" },
  { name: "Kel'el Ware", baseRank: 66, liveRank: 87, delta: -21, games: 15, expRank: 30, seasonRank: 161, shift: -0.28, source: "season" },
  { name: "Naz Reid", baseRank: 67, liveRank: 74, delta: -7, games: 14, expRank: 59, seasonRank: 137, shift: -0.1, source: "season" },
  { name: "Kevin Durant", baseRank: 69, liveRank: 76, delta: -7, games: 16, expRank: 9, seasonRank: 29, shift: -0.1, source: "season" },
  { name: "James Harden", baseRank: 71, liveRank: 78, delta: -7, games: 15, expRank: 29, seasonRank: 70, shift: -0.1, source: "season" },
  { name: "Derrick White", baseRank: 74, liveRank: 86, delta: -12, games: 15, expRank: 21, seasonRank: 84, shift: -0.15, source: "season" },
  { name: "Zion Williamson", baseRank: 76, liveRank: 65, delta: 11, games: 15, expRank: 97, seasonRank: 22, shift: 0.16, source: "season" },
  { name: "Reed Sheppard", baseRank: 84, liveRank: 91, delta: -7, games: 13, expRank: 95, seasonRank: 157, shift: -0.08, source: "season" },
  { name: "Kyshawn George", baseRank: 85, liveRank: 72, delta: 13, games: 16, expRank: 121, seasonRank: 47, shift: 0.17, source: "season" },
  { name: "Cedric Coward", baseRank: 87, liveRank: 74, delta: 13, games: 14, expRank: 100, seasonRank: 28, shift: 0.17, source: "season" },
  { name: "Jabari Smith Jr.", baseRank: 91, liveRank: 80, delta: 11, games: 16, expRank: 84, seasonRank: 34, shift: 0.13, source: "season" },
  { name: "Mikal Bridges", baseRank: 92, liveRank: 105, delta: -13, games: 14, expRank: 67, seasonRank: 204, shift: -0.13, source: "season" },
  { name: "Anthony Black", baseRank: 100, liveRank: 83, delta: 17, games: 11, expRank: 133, seasonRank: 36, shift: 0.18, source: "season" },
  { name: "Ryan Rollins", baseRank: 103, liveRank: 125, delta: -22, games: 13, expRank: 52, seasonRank: 212, shift: -0.19, source: "season" },
  { name: "Ace Bailey", baseRank: 106, liveRank: 97, delta: 9, games: 16, expRank: 147, seasonRank: 92, shift: 0.09, source: "season" },
  { name: "Miles Bridges", baseRank: 120, liveRank: 105, delta: 15, games: 14, expRank: 104, seasonRank: 30, shift: 0.14, source: "season" },
  { name: "Rudy Gobert", baseRank: 123, liveRank: 143, delta: -20, games: 14, expRank: 88, seasonRank: 311, shift: -0.15, source: "season" },
  { name: "Aday Mara", baseRank: 126, liveRank: 110, delta: 16, games: 15, expRank: 269, seasonRank: 128, shift: 0.14, source: "season" },
  { name: "Ayo Dosunmu", baseRank: 133, liveRank: 116, delta: 17, games: 15, expRank: 103, seasonRank: 31, shift: 0.14, source: "season" },
  { name: "Wendell Carter Jr.", baseRank: 145, liveRank: 131, delta: 14, games: 14, expRank: 127, seasonRank: 54, shift: 0.1, source: "season" },
  { name: "Moussa Diabaté", baseRank: 147, liveRank: 133, delta: 14, games: 12, expRank: 134, seasonRank: 61, shift: 0.1, source: "season" },
  { name: "Joan Beringer", baseRank: 148, liveRank: 161, delta: -13, games: 15, expRank: 129, seasonRank: 208, shift: -0.09, source: "season" },
  { name: "Davion Mitchell", baseRank: 154, liveRank: 120, delta: 34, games: 15, expRank: 174, seasonRank: 19, shift: 0.25, source: "season" },
  { name: "Neemias Queta", baseRank: 156, liveRank: 172, delta: -16, games: 14, expRank: 61, seasonRank: 140, shift: -0.1, source: "season" },
  { name: "Andrew Wiggins", baseRank: 157, liveRank: 175, delta: -18, games: 15, expRank: 71, seasonRank: 172, shift: -0.11, source: "season" },
  { name: "Aaron Nesmith", baseRank: 162, liveRank: 178, delta: -16, games: 13, expRank: 101, seasonRank: 223, shift: -0.09, source: "season" },
  { name: "Cameron Johnson", baseRank: 164, liveRank: 178, delta: -14, games: 10, expRank: 74, seasonRank: 174, shift: -0.08, source: "season" },
  { name: "Gui Santos", baseRank: 169, liveRank: 192, delta: -23, games: 12, expRank: 111, seasonRank: 285, shift: -0.13, source: "season" },
  { name: "Mitchell Robinson", baseRank: 175, liveRank: 191, delta: -16, games: 14, expRank: 116, seasonRank: 238, shift: -0.09, source: "season" },
  { name: "Daniss Jenkins", baseRank: 180, liveRank: 160, delta: 20, games: 14, expRank: 196, seasonRank: 87, shift: 0.12, source: "season" },
  { name: "Jalen Smith", baseRank: 197, liveRank: 168, delta: 29, games: 13, expRank: 143, seasonRank: 32, shift: 0.16, source: "season" },
  { name: "Cam Spencer", baseRank: 199, liveRank: 180, delta: 19, games: 15, expRank: 144, seasonRank: 64, shift: 0.1, source: "season" },
  { name: "DeMar DeRozan", baseRank: 210, liveRank: 235, delta: -25, games: 12, expRank: 99, seasonRank: 268, shift: -0.11, source: "season" },
  { name: "Nolan Traoré", baseRank: 229, liveRank: 196, delta: 33, games: 13, expRank: 312, seasonRank: 123, shift: 0.16, source: "season" },
  { name: "Meleek Thomas", baseRank: 252, liveRank: 212, delta: 40, games: 13, expRank: 313, seasonRank: 111, shift: 0.17, source: "season" },
  { name: "Nikola Vučević", baseRank: 253, liveRank: 278, delta: -25, games: 12, expRank: 132, seasonRank: 304, shift: -0.09, source: "season" },
  { name: "Duncan Robinson", baseRank: 305, liveRank: 278, delta: 27, games: 12, expRank: 176, seasonRank: 46, shift: 0.09, source: "season" },
  { name: "Jaxson Hayes", baseRank: 311, liveRank: 280, delta: 31, games: 13, expRank: 189, seasonRank: 75, shift: 0.11, source: "season" },
  { name: "Ziaire Williams", baseRank: 342, liveRank: 304, delta: 38, games: 13, expRank: 224, seasonRank: 96, shift: 0.12, source: "season" },
  { name: "Tyrese Proctor", baseRank: 388, liveRank: 342, delta: 46, games: 15, expRank: 291, seasonRank: 147, shift: 0.13, source: "season" },
  { name: "Quenton Jackson", baseRank: 521, liveRank: 466, delta: 55, games: 15, expRank: 277, seasonRank: 115, shift: 0.11, source: "season" }
];
