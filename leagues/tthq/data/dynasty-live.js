// ============================================================
//  DYNASTY LIVE — Saison-Form gegen Erwartung
// ============================================================
//  AUTO-GENERIERT von scripts/build-dynasty-live.js (tthq-sync).
//  Nicht von Hand editieren. Zuletzt aktualisiert: 2026-11-11
//  Stand der Saisondaten: 2026-11-10
//
//  Nur signifikante Bewegungen (≥ 8 Spiele, |shift| ≥ 0.08).
//  liveRank ersetzt im Trade Analyzer/Finder den Dynasty-Rang, wenn
//  "Live-Form" eingeschaltet ist (Standard). data/rankings.js bleibt unverändert.
//
//  Shape: { name, baseRank, liveRank, delta, games, expRank, seasonRank, shift, source }
//  delta > 0 = besser als erwartet (Rang steigt), delta < 0 = schlechter.
//  expRank/seasonRank = Rang im gemeinsamen Pool (Projection vs. Saison).
// ============================================================

const DYNASTY_LIVE_META = {"mode":"season","date":"2026-11-10","pool":337,"expectation":"snapshots/projections-2026-27-opening-night.js"};

const DYNASTY_LIVE = [
  { name: "Alperen Şengün", baseRank: 14, liveRank: 12, delta: 2, games: 9, expRank: 56, seasonRank: 14, shift: 0.12, source: "season" },
  { name: "Amen Thompson", baseRank: 17, liveRank: 20, delta: -3, games: 11, expRank: 17, seasonRank: 86, shift: -0.17, source: "season" },
  { name: "Donovan Mitchell", baseRank: 20, liveRank: 22, delta: -2, games: 11, expRank: 8, seasonRank: 33, shift: -0.1, source: "season" },
  { name: "Darryn Peterson", baseRank: 21, liveRank: 19, delta: 2, games: 10, expRank: 154, seasonRank: 68, shift: 0.11, source: "season" },
  { name: "Trey Murphy III", baseRank: 25, liveRank: 28, delta: -3, games: 9, expRank: 14, seasonRank: 60, shift: -0.1, source: "season" },
  { name: "Franz Wagner", baseRank: 31, liveRank: 34, delta: -3, games: 9, expRank: 39, seasonRank: 106, shift: -0.1, source: "season" },
  { name: "Trae Young", baseRank: 33, liveRank: 37, delta: -4, games: 11, expRank: 27, seasonRank: 83, shift: -0.1, source: "season" },
  { name: "Brandon Miller", baseRank: 35, liveRank: 40, delta: -5, games: 10, expRank: 41, seasonRank: 124, shift: -0.12, source: "season" },
  { name: "Josh Giddey", baseRank: 36, liveRank: 40, delta: -4, games: 9, expRank: 53, seasonRank: 156, shift: -0.12, source: "season" },
  { name: "Darius Garland", baseRank: 42, liveRank: 47, delta: -5, games: 9, expRank: 37, seasonRank: 149, shift: -0.12, source: "season" },
  { name: "Walker Kessler", baseRank: 44, liveRank: 39, delta: 5, games: 12, expRank: 36, seasonRank: 10, shift: 0.12, source: "season" },
  { name: "Darius Acuff Jr.", baseRank: 51, liveRank: 45, delta: 6, games: 10, expRank: 188, seasonRank: 72, shift: 0.13, source: "season" },
  { name: "Zach Edey", baseRank: 53, liveRank: 61, delta: -8, games: 9, expRank: 28, seasonRank: 115, shift: -0.14, source: "season" },
  { name: "Matas Buzelis", baseRank: 54, liveRank: 66, delta: -12, games: 9, expRank: 32, seasonRank: 160, shift: -0.2, source: "season" },
  { name: "Desmond Bane", baseRank: 56, liveRank: 63, delta: -7, games: 8, expRank: 22, seasonRank: 108, shift: -0.12, source: "season" },
  { name: "Kel'el Ware", baseRank: 66, liveRank: 86, delta: -20, games: 11, expRank: 30, seasonRank: 198, shift: -0.26, source: "season" },
  { name: "Naz Reid", baseRank: 67, liveRank: 73, delta: -6, games: 11, expRank: 59, seasonRank: 147, shift: -0.09, source: "season" },
  { name: "James Harden", baseRank: 71, liveRank: 81, delta: -10, games: 11, expRank: 29, seasonRank: 118, shift: -0.13, source: "season" },
  { name: "Derrick White", baseRank: 74, liveRank: 84, delta: -10, games: 11, expRank: 21, seasonRank: 88, shift: -0.13, source: "season" },
  { name: "Zion Williamson", baseRank: 76, liveRank: 65, delta: 11, games: 10, expRank: 94, seasonRank: 15, shift: 0.15, source: "season" },
  { name: "Kyshawn George", baseRank: 85, liveRank: 74, delta: 11, games: 11, expRank: 118, seasonRank: 44, shift: 0.14, source: "season" },
  { name: "Yaxel Lendeborg", baseRank: 86, liveRank: 77, delta: 9, games: 11, expRank: 90, seasonRank: 34, shift: 0.11, source: "season" },
  { name: "Jabari Smith Jr.", baseRank: 91, liveRank: 77, delta: 14, games: 11, expRank: 82, seasonRank: 16, shift: 0.17, source: "season" },
  { name: "Mikal Bridges", baseRank: 92, liveRank: 102, delta: -10, games: 10, expRank: 66, seasonRank: 191, shift: -0.1, source: "season" },
  { name: "Ryan Rollins", baseRank: 103, liveRank: 120, delta: -17, games: 11, expRank: 52, seasonRank: 182, shift: -0.15, source: "season" },
  { name: "Miles Bridges", baseRank: 120, liveRank: 105, delta: 15, games: 9, expRank: 101, seasonRank: 19, shift: 0.13, source: "season" },
  { name: "Rudy Gobert", baseRank: 123, liveRank: 138, delta: -15, games: 10, expRank: 86, seasonRank: 285, shift: -0.12, source: "season" },
  { name: "Aday Mara", baseRank: 126, liveRank: 114, delta: 12, games: 10, expRank: 259, seasonRank: 131, shift: 0.1, source: "season" },
  { name: "Ayo Dosunmu", baseRank: 133, liveRank: 117, delta: 16, games: 11, expRank: 100, seasonRank: 26, shift: 0.12, source: "season" },
  { name: "Wendell Carter Jr.", baseRank: 145, liveRank: 132, delta: 13, games: 9, expRank: 123, seasonRank: 40, shift: 0.1, source: "season" },
  { name: "Moussa Diabaté", baseRank: 147, liveRank: 133, delta: 14, games: 9, expRank: 130, seasonRank: 50, shift: 0.1, source: "season" },
  { name: "Davion Mitchell", baseRank: 154, liveRank: 135, delta: 19, games: 10, expRank: 169, seasonRank: 42, shift: 0.13, source: "season" },
  { name: "Neemias Queta", baseRank: 156, liveRank: 173, delta: -17, games: 11, expRank: 60, seasonRank: 165, shift: -0.1, source: "season" },
  { name: "Andrew Wiggins", baseRank: 157, liveRank: 174, delta: -17, games: 10, expRank: 69, seasonRank: 200, shift: -0.1, source: "season" },
  { name: "Daniel Gafford", baseRank: 161, liveRank: 145, delta: 16, games: 11, expRank: 148, seasonRank: 52, shift: 0.1, source: "season" },
  { name: "Gui Santos", baseRank: 169, liveRank: 184, delta: -15, games: 8, expRank: 108, seasonRank: 249, shift: -0.09, source: "season" },
  { name: "Daniss Jenkins", baseRank: 180, liveRank: 166, delta: 14, games: 10, expRank: 190, seasonRank: 94, shift: 0.08, source: "season" },
  { name: "Nolan Traoré", baseRank: 229, liveRank: 200, delta: 29, games: 10, expRank: 300, seasonRank: 116, shift: 0.14, source: "season" },
  { name: "Meleek Thomas", baseRank: 252, liveRank: 219, delta: 33, games: 8, expRank: 301, seasonRank: 95, shift: 0.14, source: "season" },
  { name: "Kris Dunn", baseRank: 303, liveRank: 278, delta: 25, games: 9, expRank: 151, seasonRank: 30, shift: 0.09, source: "season" },
  { name: "Duncan Robinson", baseRank: 305, liveRank: 274, delta: 31, games: 10, expRank: 171, seasonRank: 28, shift: 0.11, source: "season" },
  { name: "Jaxson Hayes", baseRank: 311, liveRank: 285, delta: 26, games: 9, expRank: 184, seasonRank: 69, shift: 0.09, source: "season" },
  { name: "Ziaire Williams", baseRank: 342, liveRank: 299, delta: 43, games: 9, expRank: 217, seasonRank: 64, shift: 0.13, source: "season" },
  { name: "Quenton Jackson", baseRank: 521, liveRank: 470, delta: 51, games: 11, expRank: 267, seasonRank: 101, shift: 0.1, source: "season" }
];
