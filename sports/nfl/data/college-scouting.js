// ============================================================
//  COLLEGE_SCOUTING — College Production Comp (WR, TE, RB, QB)
// ============================================================
//  AUTO-GENERIERT von scripts/sync-college-scouting.js. Nicht von Hand
//  editieren. Siehe claude/college-scouting-concept.md (Projekt-Doc)
//  fuer die Methodik.
//
//  COLLEGE_SCOUTING.seasons[Jahr][Pos] = Spieler-Saisons dieses Jahrgangs
//    (Mindest-Volumen gefiltert) -- vollstaendige Historie 2013-2026,
//    dient als Cache-Grundlage (abgeschlossene Jahrgaenge werden beim naechsten
//    Lauf NICHT neu von CFBD geholt) UND als Vergleichs-Universum fuer die
//    Mahalanobis-Distanz.
//  COLLEGE_SCOUTING.recent[Pos] = nur die 4 juengsten
//    Jahrgaenge, flach -- das sind die tatsaechlich Draft-relevanten Prospects,
//    fuers Frontend direkt nutzbar (keine Notwendigkeit, durch "seasons" zu
//    iterieren).
//  COLLEGE_SCOUTING.comps[Pos][playerId] = Top-10-Comps (Mahalanobis-
//    Distanz) fuer genau diese "recent"-Spieler.
//
//  TODO (v2, siehe Projekt-Doc Abschnitt 7): Early-Signal-Fallback fuer
//  Spieler unter dem Mindest-Volumen (z.B. frueh in der laufenden Saison),
//  NFL Profile Comp (RAS + Draft-Kapital-Kurve).
// ============================================================

const COLLEGE_SCOUTING = {
  "meta": {
    "lastSync": "2026-09-30T15:49:29.073Z",
    "currentSeason": 2026,
    "years": [
      2013,
      2014,
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025,
      2026
    ],
    "features": {
      "WR": [
        "recShare",
        "ydShare",
        "tdShare",
        "avgPPA",
        "usageOverall"
      ],
      "TE": [
        "recShare",
        "ydShare",
        "tdShare",
        "avgPPA",
        "usageOverall"
      ],
      "RB": [
        "rushCarShare",
        "recYdShare",
        "avgPpaRush",
        "avgPpaPass",
        "usageRush"
      ],
      "QB": [
        "avgPpaPass",
        "avgPpaRush",
        "usagePass",
        "usageRush",
        "compPct"
      ]
    }
  },
  "seasons": {},
  "recent": {
    "WR": [],
    "TE": [],
    "RB": [],
    "QB": []
  },
  "comps": {
    "WR": {},
    "TE": {},
    "RB": {},
    "QB": {}
  },
  "feats": {
    "WR": {},
    "TE": {},
    "RB": {},
    "QB": {}
  }
};
