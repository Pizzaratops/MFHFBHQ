// ============================================================
//  NFL_PROFILE_COMP — "Rollenprofil aehnelt X vor dessen Draft"
// ============================================================
//  AUTO-GENERIERT von scripts/build-nfl-profile-comp.js. Nicht von Hand
//  editieren. Siehe claude/college-scouting-concept.md Abschnitt 2 + 7.
//
//  NFL_PROFILE_COMP.comps[Pos][playerId] = Top-10-historische Comps
//  (Mahalanobis auf Production+Groesse-Features, siehe meta.matchFeatures),
//  angereichert mit dem TATSAECHLICHEN Draft-Ergebnis + RAS-Score DIESES
//  Comps (nicht des Prospects selbst -- der hat beides noch nicht).
//
//  NFL_PROFILE_COMP.feats[Pos][id] = Perzentil (0-100) je Match-Feature, fuer
//  Prospects UND deren Comps (gleiche id-Basis) -- Basis fuer die Radar-
//  Grafik im Frontend (js/college-scouting-card.js).
//
//  WICHTIG (UI-Sprache, siehe Projekt-Doc Abschnitt 6): "Profiliert wie ...
//  (Pre-Draft-Rollenarchetyp, KEINE Erfolgsprognose)" -- niemals mit College
//  Production Comp vermischen oder als Talent-/Erfolgsvorhersage labeln.
// ============================================================

const NFL_PROFILE_COMP = {
  "meta": {
    "builtAt": "2026-09-30T14:29:12.348Z",
    "matchFeatures": {
      "QB": [
        "avgPpaPass",
        "avgPpaRush",
        "usagePass",
        "usageRush",
        "compPct",
        "heightIn",
        "weightLb"
      ],
      "RB": [
        "rushCarShare",
        "recYdShare",
        "avgPpaRush",
        "avgPpaPass",
        "usageRush",
        "heightIn",
        "weightLb"
      ],
      "WR": [
        "recShare",
        "ydShare",
        "tdShare",
        "avgPPA",
        "usageOverall",
        "heightIn",
        "weightLb"
      ],
      "TE": [
        "recShare",
        "ydShare",
        "tdShare",
        "avgPPA",
        "usageOverall",
        "heightIn",
        "weightLb"
      ]
    }
  },
  "comps": {
    "QB": {},
    "RB": {},
    "WR": {},
    "TE": {}
  },
  "stats": {
    "QB": {
      "poolSize": 0,
      "matched": 0,
      "unmatched": 564,
      "targetsWithComps": 0
    },
    "RB": {
      "poolSize": 0,
      "matched": 0,
      "unmatched": 1262,
      "targetsWithComps": 0
    },
    "WR": {
      "poolSize": 0,
      "matched": 0,
      "unmatched": 1499,
      "targetsWithComps": 0
    },
    "TE": {
      "poolSize": 0,
      "matched": 0,
      "unmatched": 733,
      "targetsWithComps": 0
    }
  },
  "feats": {
    "QB": {},
    "RB": {},
    "WR": {},
    "TE": {}
  }
};
