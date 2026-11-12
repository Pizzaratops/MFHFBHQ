// ============================================================
//  DYNASTY LIVE — Saison-Form gegen Erwartung
// ============================================================
//  AUTO-GENERIERT von scripts/build-dynasty-live.js (tthq-sync).
//  Nicht von Hand editieren. Zuletzt aktualisiert: 2026-11-12
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

const DYNASTY_LIVE_META = {"mode":"season","date":"2026-11-10","pool":339,"expectation":"snapshots/projections-2026-27-opening-night.js"};

const DYNASTY_LIVE = [
  { name: "Alperen Şengün", baseRank: 14, liveRank: 12, delta: 2, games: 9, expRank: 56, seasonRank: 13, shift: 0.13, source: "season" },
  { name: "Amen Thompson", baseRank: 17, liveRank: 20, delta: -3, games: 11, expRank: 17, seasonRank: 85, shift: -0.17, source: "season" },
  { name: "Donovan Mitchell", baseRank: 20, liveRank: 22, delta: -2, games: 11, expRank: 8, seasonRank: 31, shift: -0.09, source: "season" },
  { name: "Darryn Peterson", baseRank: 21, liveRank: 19, delta: 2, games: 11, expRank: 154, seasonRank: 71, shift: 0.11, source: "season" },
  { name: "Trey Murphy III", baseRank: 25, liveRank: 28, delta: -3, games: 9, expRank: 14, seasonRank: 61, shift: -0.11, source: "season" },
  { name: "Trae Young", baseRank: 33, liveRank: 37, delta: -4, games: 11, expRank: 27, seasonRank: 87, shift: -0.11, source: "season" },
  { name: "LaMelo Ball", baseRank: 34, liveRank: 37, delta: -3, games: 11, expRank: 33, seasonRank: 68, shift: -0.08, source: "season" },
  { name: "Brandon Miller", baseRank: 35, liveRank: 40, delta: -5, games: 10, expRank: 41, seasonRank: 125, shift: -0.12, source: "season" },
  { name: "Josh Giddey", baseRank: 36, liveRank: 40, delta: -4, games: 9, expRank: 53, seasonRank: 156, shift: -0.12, source: "season" },
  { name: "Darius Garland", baseRank: 42, liveRank: 48, delta: -6, games: 10, expRank: 37, seasonRank: 154, shift: -0.13, source: "season" },
  { name: "Walker Kessler", baseRank: 44, liveRank: 39, delta: 5, games: 12, expRank: 36, seasonRank: 9, shift: 0.13, source: "season" },
  { name: "Darius Acuff Jr.", baseRank: 51, liveRank: 43, delta: 8, games: 11, expRank: 188, seasonRank: 60, shift: 0.17, source: "season" },
  { name: "Zach Edey", baseRank: 53, liveRank: 61, delta: -8, games: 9, expRank: 28, seasonRank: 113, shift: -0.14, source: "season" },
  { name: "Matas Buzelis", baseRank: 54, liveRank: 66, delta: -12, games: 9, expRank: 32, seasonRank: 160, shift: -0.2, source: "season" },
  { name: "Desmond Bane", baseRank: 56, liveRank: 65, delta: -9, games: 9, expRank: 22, seasonRank: 130, shift: -0.14, source: "season" },
  { name: "Kel'el Ware", baseRank: 66, liveRank: 86, delta: -20, games: 11, expRank: 30, seasonRank: 198, shift: -0.26, source: "season" },
  { name: "Naz Reid", baseRank: 67, liveRank: 74, delta: -7, games: 11, expRank: 59, seasonRank: 148, shift: -0.09, source: "season" },
  { name: "James Harden", baseRank: 71, liveRank: 81, delta: -10, games: 11, expRank: 29, seasonRank: 117, shift: -0.13, source: "season" },
  { name: "Derrick White", baseRank: 74, liveRank: 84, delta: -10, games: 11, expRank: 21, seasonRank: 89, shift: -0.13, source: "season" },
  { name: "Zion Williamson", baseRank: 76, liveRank: 65, delta: 11, games: 10, expRank: 94, seasonRank: 14, shift: 0.15, source: "season" },
  { name: "Kyshawn George", baseRank: 85, liveRank: 74, delta: 11, games: 11, expRank: 118, seasonRank: 45, shift: 0.13, source: "season" },
  { name: "Yaxel Lendeborg", baseRank: 86, liveRank: 76, delta: 10, games: 11, expRank: 90, seasonRank: 32, shift: 0.12, source: "season" },
  { name: "Jabari Smith Jr.", baseRank: 91, liveRank: 76, delta: 15, games: 11, expRank: 82, seasonRank: 15, shift: 0.18, source: "season" },
  { name: "Mikal Bridges", baseRank: 92, liveRank: 102, delta: -10, games: 10, expRank: 66, seasonRank: 192, shift: -0.1, source: "season" },
  { name: "Ryan Rollins", baseRank: 103, liveRank: 120, delta: -17, games: 11, expRank: 52, seasonRank: 183, shift: -0.15, source: "season" },
  { name: "Miles Bridges", baseRank: 120, liveRank: 106, delta: 14, games: 10, expRank: 101, seasonRank: 25, shift: 0.12, source: "season" },
  { name: "Rudy Gobert", baseRank: 123, liveRank: 138, delta: -15, games: 10, expRank: 86, seasonRank: 286, shift: -0.12, source: "season" },
  { name: "Aday Mara", baseRank: 126, liveRank: 113, delta: 13, games: 11, expRank: 260, seasonRank: 129, shift: 0.11, source: "season" },
  { name: "Ayo Dosunmu", baseRank: 133, liveRank: 118, delta: 15, games: 11, expRank: 100, seasonRank: 27, shift: 0.12, source: "season" },
  { name: "Wendell Carter Jr.", baseRank: 145, liveRank: 129, delta: 16, games: 10, expRank: 123, seasonRank: 34, shift: 0.12, source: "season" },
  { name: "Moussa Diabaté", baseRank: 147, liveRank: 132, delta: 15, games: 9, expRank: 130, seasonRank: 48, shift: 0.1, source: "season" },
  { name: "Davion Mitchell", baseRank: 154, liveRank: 134, delta: 20, games: 11, expRank: 169, seasonRank: 41, shift: 0.14, source: "season" },
  { name: "Neemias Queta", baseRank: 156, liveRank: 173, delta: -17, games: 11, expRank: 60, seasonRank: 167, shift: -0.1, source: "season" },
  { name: "Andrew Wiggins", baseRank: 157, liveRank: 175, delta: -18, games: 11, expRank: 69, seasonRank: 197, shift: -0.11, source: "season" },
  { name: "Daniel Gafford", baseRank: 161, liveRank: 145, delta: 16, games: 11, expRank: 148, seasonRank: 52, shift: 0.1, source: "season" },
  { name: "Gui Santos", baseRank: 169, liveRank: 184, delta: -15, games: 8, expRank: 108, seasonRank: 248, shift: -0.09, source: "season" },
  { name: "Daniss Jenkins", baseRank: 180, liveRank: 166, delta: 14, games: 10, expRank: 190, seasonRank: 95, shift: 0.08, source: "season" },
  { name: "Nolan Traoré", baseRank: 229, liveRank: 200, delta: 29, games: 10, expRank: 301, seasonRank: 115, shift: 0.14, source: "season" },
  { name: "Meleek Thomas", baseRank: 252, liveRank: 219, delta: 33, games: 8, expRank: 302, seasonRank: 96, shift: 0.14, source: "season" },
  { name: "Duncan Robinson", baseRank: 305, liveRank: 274, delta: 31, games: 10, expRank: 171, seasonRank: 28, shift: 0.11, source: "season" },
  { name: "Jaxson Hayes", baseRank: 311, liveRank: 285, delta: 26, games: 10, expRank: 184, seasonRank: 75, shift: 0.09, source: "season" },
  { name: "Ziaire Williams", baseRank: 342, liveRank: 299, delta: 43, games: 9, expRank: 217, seasonRank: 64, shift: 0.13, source: "season" },
  { name: "Quenton Jackson", baseRank: 521, liveRank: 471, delta: 50, games: 11, expRank: 268, seasonRank: 102, shift: 0.1, source: "season" }
];
