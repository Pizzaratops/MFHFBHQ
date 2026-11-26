// ============================================================
//  DYNASTY LIVE — Saison-Form gegen Erwartung
// ============================================================
//  AUTO-GENERIERT von scripts/build-dynasty-live.js (tthq-sync).
//  Nicht von Hand editieren. Zuletzt aktualisiert: 2026-11-26
//  Stand der Saisondaten: 2026-11-25
//
//  Nur signifikante Bewegungen (≥ 8 Spiele, |shift| ≥ 0.08).
//  liveRank ersetzt im Trade Analyzer/Finder den Dynasty-Rang, wenn
//  "Live-Form" eingeschaltet ist (Standard). data/rankings.js bleibt unverändert.
//
//  Shape: { name, baseRank, liveRank, delta, games, expRank, seasonRank, shift, source }
//  delta > 0 = besser als erwartet (Rang steigt), delta < 0 = schlechter.
//  expRank/seasonRank = Rang im gemeinsamen Pool (Projection vs. Saison).
// ============================================================

const DYNASTY_LIVE_META = {"mode":"season","date":"2026-11-25","pool":347,"expectation":"snapshots/projections-2026-27-opening-night.js"};

const DYNASTY_LIVE = [
  { name: "Alperen Şengün", baseRank: 14, liveRank: 12, delta: 2, games: 16, expRank: 56, seasonRank: 12, shift: 0.19, source: "season" },
  { name: "Amen Thompson", baseRank: 17, liveRank: 20, delta: -3, games: 17, expRank: 17, seasonRank: 61, shift: -0.17, source: "season" },
  { name: "Donovan Mitchell", baseRank: 20, liveRank: 22, delta: -2, games: 18, expRank: 8, seasonRank: 22, shift: -0.09, source: "season" },
  { name: "Darryn Peterson", baseRank: 21, liveRank: 19, delta: 2, games: 19, expRank: 160, seasonRank: 105, shift: 0.09, source: "season" },
  { name: "Trey Murphy III", baseRank: 25, liveRank: 28, delta: -3, games: 11, expRank: 14, seasonRank: 63, shift: -0.12, source: "season" },
  { name: "Trae Young", baseRank: 33, liveRank: 37, delta: -4, games: 19, expRank: 27, seasonRank: 66, shift: -0.11, source: "season" },
  { name: "LaMelo Ball", baseRank: 34, liveRank: 40, delta: -6, games: 18, expRank: 33, seasonRank: 90, shift: -0.15, source: "season" },
  { name: "Brandon Miller", baseRank: 35, liveRank: 40, delta: -5, games: 15, expRank: 41, seasonRank: 110, shift: -0.14, source: "season" },
  { name: "Josh Giddey", baseRank: 36, liveRank: 43, delta: -7, games: 18, expRank: 53, seasonRank: 155, shift: -0.17, source: "season" },
  { name: "VJ Edgecombe", baseRank: 41, liveRank: 37, delta: 4, games: 18, expRank: 65, seasonRank: 36, shift: 0.1, source: "season" },
  { name: "Darius Garland", baseRank: 42, liveRank: 47, delta: -5, games: 16, expRank: 37, seasonRank: 93, shift: -0.11, source: "season" },
  { name: "Stephon Castle", baseRank: 43, liveRank: 38, delta: 5, games: 18, expRank: 149, seasonRank: 75, shift: 0.13, source: "season" },
  { name: "Darius Acuff Jr.", baseRank: 51, liveRank: 46, delta: 5, games: 17, expRank: 194, seasonRank: 114, shift: 0.1, source: "season" },
  { name: "Zach Edey", baseRank: 53, liveRank: 63, delta: -10, games: 14, expRank: 28, seasonRank: 108, shift: -0.18, source: "season" },
  { name: "Matas Buzelis", baseRank: 54, liveRank: 67, delta: -13, games: 18, expRank: 32, seasonRank: 109, shift: -0.22, source: "season" },
  { name: "Ivica Zubac", baseRank: 62, liveRank: 67, delta: -5, games: 13, expRank: 54, seasonRank: 140, shift: -0.08, source: "season" },
  { name: "Collin Murray-Boyles", baseRank: 63, liveRank: 69, delta: -6, games: 15, expRank: 81, seasonRank: 136, shift: -0.09, source: "season" },
  { name: "Kel'el Ware", baseRank: 66, liveRank: 89, delta: -23, games: 18, expRank: 30, seasonRank: 154, shift: -0.3, source: "season" },
  { name: "Naz Reid", baseRank: 67, liveRank: 77, delta: -10, games: 17, expRank: 59, seasonRank: 173, shift: -0.14, source: "season" },
  { name: "Kevin Durant", baseRank: 69, liveRank: 75, delta: -6, games: 18, expRank: 9, seasonRank: 23, shift: -0.08, source: "season" },
  { name: "Jaden McDaniels", baseRank: 70, liveRank: 62, delta: 8, games: 18, expRank: 51, seasonRank: 17, shift: 0.12, source: "season" },
  { name: "Derrick White", baseRank: 74, liveRank: 89, delta: -15, games: 17, expRank: 21, seasonRank: 98, shift: -0.18, source: "season" },
  { name: "Zion Williamson", baseRank: 76, liveRank: 65, delta: 11, games: 17, expRank: 97, seasonRank: 28, shift: 0.15, source: "season" },
  { name: "Jalen Suggs", baseRank: 82, liveRank: 93, delta: -11, games: 9, expRank: 70, seasonRank: 219, shift: -0.12, source: "season" },
  { name: "Reed Sheppard", baseRank: 84, liveRank: 94, delta: -10, games: 15, expRank: 95, seasonRank: 181, shift: -0.12, source: "season" },
  { name: "Kyshawn George", baseRank: 85, liveRank: 72, delta: 13, games: 19, expRank: 121, seasonRank: 51, shift: 0.17, source: "season" },
  { name: "Cedric Coward", baseRank: 87, liveRank: 73, delta: 14, games: 17, expRank: 100, seasonRank: 30, shift: 0.18, source: "season" },
  { name: "Ausar Thompson", baseRank: 90, liveRank: 82, delta: 8, games: 16, expRank: 68, seasonRank: 35, shift: 0.09, source: "season" },
  { name: "Jabari Smith Jr.", baseRank: 91, liveRank: 81, delta: 10, games: 18, expRank: 84, seasonRank: 40, shift: 0.11, source: "season" },
  { name: "Mikal Bridges", baseRank: 92, liveRank: 106, delta: -14, games: 18, expRank: 67, seasonRank: 191, shift: -0.14, source: "season" },
  { name: "Coby White", baseRank: 95, liveRank: 104, delta: -9, games: 10, expRank: 93, seasonRank: 235, shift: -0.09, source: "season" },
  { name: "Keegan Murray", baseRank: 97, liveRank: 107, delta: -10, games: 10, expRank: 60, seasonRank: 161, shift: -0.09, source: "season" },
  { name: "Anthony Black", baseRank: 100, liveRank: 92, delta: 8, games: 14, expRank: 134, seasonRank: 83, shift: 0.08, source: "season" },
  { name: "Ryan Rollins", baseRank: 103, liveRank: 128, delta: -25, games: 16, expRank: 52, seasonRank: 211, shift: -0.22, source: "season" },
  { name: "Ace Bailey", baseRank: 106, liveRank: 98, delta: 8, games: 19, expRank: 148, seasonRank: 99, shift: 0.08, source: "season" },
  { name: "Payton Pritchard", baseRank: 112, liveRank: 125, delta: -13, games: 18, expRank: 66, seasonRank: 150, shift: -0.11, source: "season" },
  { name: "Egor Dëmin", baseRank: 117, liveRank: 128, delta: -11, games: 10, expRank: 125, seasonRank: 231, shift: -0.09, source: "season" },
  { name: "Miles Bridges", baseRank: 120, liveRank: 104, delta: 16, games: 16, expRank: 104, seasonRank: 31, shift: 0.14, source: "season" },
  { name: "Rudy Gobert", baseRank: 123, liveRank: 143, delta: -20, games: 17, expRank: 88, seasonRank: 267, shift: -0.15, source: "season" },
  { name: "Aday Mara", baseRank: 126, liveRank: 107, delta: 19, games: 16, expRank: 268, seasonRank: 112, shift: 0.16, source: "season" },
  { name: "Ayo Dosunmu", baseRank: 133, liveRank: 117, delta: 16, games: 18, expRank: 103, seasonRank: 37, shift: 0.13, source: "season" },
  { name: "Christian Braun", baseRank: 142, liveRank: 122, delta: 20, games: 16, expRank: 94, seasonRank: 33, shift: 0.15, source: "season" },
  { name: "Wendell Carter Jr.", baseRank: 145, liveRank: 130, delta: 15, games: 17, expRank: 127, seasonRank: 55, shift: 0.11, source: "season" },
  { name: "Moussa Diabaté", baseRank: 147, liveRank: 126, delta: 21, games: 15, expRank: 135, seasonRank: 48, shift: 0.15, source: "season" },
  { name: "Davion Mitchell", baseRank: 154, liveRank: 124, delta: 30, games: 17, expRank: 174, seasonRank: 32, shift: 0.21, source: "season" },
  { name: "Neemias Queta", baseRank: 156, liveRank: 175, delta: -19, games: 17, expRank: 61, seasonRank: 148, shift: -0.12, source: "season" },
  { name: "Andrew Wiggins", baseRank: 157, liveRank: 178, delta: -21, games: 17, expRank: 71, seasonRank: 186, shift: -0.13, source: "season" },
  { name: "Daniel Gafford", baseRank: 161, liveRank: 148, delta: 13, games: 18, expRank: 153, seasonRank: 82, shift: 0.09, source: "season" },
  { name: "Aaron Nesmith", baseRank: 162, liveRank: 178, delta: -16, games: 15, expRank: 101, seasonRank: 212, shift: -0.09, source: "season" },
  { name: "Gui Santos", baseRank: 169, liveRank: 195, delta: -26, games: 14, expRank: 111, seasonRank: 293, shift: -0.14, source: "season" },
  { name: "Mitchell Robinson", baseRank: 175, liveRank: 191, delta: -16, games: 14, expRank: 116, seasonRank: 240, shift: -0.09, source: "season" },
  { name: "Daniss Jenkins", baseRank: 180, liveRank: 159, delta: 21, games: 17, expRank: 196, seasonRank: 91, shift: 0.13, source: "season" },
  { name: "Jalen Smith", baseRank: 197, liveRank: 161, delta: 36, games: 15, expRank: 144, seasonRank: 24, shift: 0.2, source: "season" },
  { name: "Cam Spencer", baseRank: 199, liveRank: 174, delta: 25, games: 18, expRank: 145, seasonRank: 52, shift: 0.14, source: "season" },
  { name: "DeMar DeRozan", baseRank: 210, liveRank: 239, delta: -29, games: 15, expRank: 99, seasonRank: 276, shift: -0.13, source: "season" },
  { name: "Nolan Traoré", baseRank: 229, liveRank: 200, delta: 29, games: 14, expRank: 310, seasonRank: 146, shift: 0.13, source: "season" },
  { name: "Bennett Stirtz", baseRank: 234, liveRank: 207, delta: 27, games: 18, expRank: 341, seasonRank: 170, shift: 0.12, source: "season" },
  { name: "Jordan Poole", baseRank: 244, liveRank: 222, delta: 22, games: 13, expRank: 235, seasonRank: 103, shift: 0.1, source: "season" },
  { name: "Meleek Thomas", baseRank: 252, liveRank: 211, delta: 41, games: 16, expRank: 311, seasonRank: 122, shift: 0.18, source: "season" },
  { name: "Nikola Vučević", baseRank: 253, liveRank: 277, delta: -24, games: 14, expRank: 133, seasonRank: 278, shift: -0.09, source: "season" },
  { name: "Duncan Robinson", baseRank: 305, liveRank: 279, delta: 26, games: 12, expRank: 176, seasonRank: 47, shift: 0.09, source: "season" },
  { name: "Ziaire Williams", baseRank: 342, liveRank: 313, delta: 29, games: 15, expRank: 224, seasonRank: 125, shift: 0.09, source: "season" },
  { name: "Matisse Thybulle", baseRank: 384, liveRank: 346, delta: 38, games: 18, expRank: 155, seasonRank: 58, shift: 0.1, source: "season" },
  { name: "Tyrese Proctor", baseRank: 388, liveRank: 357, delta: 31, games: 18, expRank: 289, seasonRank: 193, shift: 0.08, source: "season" },
  { name: "Sidy Cissoko", baseRank: 429, liveRank: 391, delta: 38, games: 17, expRank: 325, seasonRank: 204, shift: 0.09, source: "season" },
  { name: "Caleb Martin", baseRank: 481, liveRank: 436, delta: 45, games: 14, expRank: 326, seasonRank: 119, shift: 0.1, source: "season" },
  { name: "Quenton Jackson", baseRank: 521, liveRank: 470, delta: 51, games: 18, expRank: 276, seasonRank: 133, shift: 0.1, source: "season" }
];
