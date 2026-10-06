// ============================================================
//  LIVE DRAFT 2026 (TTHQ) — wer hat wen gepickt, laufend gepflegt
// ============================================================
//  Seite: #/tthq/livedraft („🔴 Live 2026 Draft“, tools/nba-livedraft.js)
//  Wird von Hand gepflegt: pro Pick eine Zeile in "picks" ergänzen,
//  "aktualisiert" anpassen, pushen. Der Hub lädt diese Datei IMMER aus
//  diesem Repo (auch vor dem NBA-Cutover), siehe files in js/leagues.js.
//
//  Pick-Format:
//    { pick: "1.1", spieler: "AJ Dybantsa", datum: "2026-10-01" }
//  pick     = "<Runde>.<Slot>" wie im Full Draft Board (Slot-Reihenfolge
//             aus DRAFT_2026_SLOT_ORDER, jede Runde gleich).
//  spieler  = Name wie auf ESPN. NBA-Team, Position, Rookie/Sophomore
//             kommen automatisch aus BEST_AVAILABLE_BOARD.
//  optional: team (Fantasy-Team-ID, falls der Pick während des Drafts
//             getradet wurde), nba / pos / exp ("rookie"|"sophomore"|
//             "veteran") für Spieler, die nicht im Board stehen,
//             notiz (Freitext, z. B. "via Trade").
//  "ignorieren" (optional): Liste von Spielernamen, die bei ESPN stehen, aber nicht
//  wirklich gezogen wurden (z. B. falsch eingetragen) -- werden im Board übersprungen.
//  "amZug" (optional) überschreibt den automatisch ermittelten nächsten
//  Pick, z. B. wenn ein Team übersprungen wird: amZug: "1.4"
// ============================================================

const LIVE_DRAFT = {
  jahr: 2026,
  runden: 4,
  start: "2026-10-01T02:00:00+02:00",
  aktualisiert: "2026-10-06T14:00:00+02:00",
  // ESPN-Einträge, die NICHT gezogen wurden (Eintragsfehler im Offline Draft) -- Board überspringt sie:
  ignorieren: ["Kobi Simmons"],
  picks: [
    { pick: "1.7", spieler: "Mikel Brown Jr.", datum: "2026-10-02" },
    { pick: "1.8", spieler: "Yaxel Lendeborg", datum: "2026-10-02" },
    { pick: "1.9", spieler: "Hannes Steinbach", datum: "2026-10-02" },
    { pick: "1.10", spieler: "Morez Johnson Jr.", datum: "2026-10-02" },
    { pick: "1.11", spieler: "Kingston Flemings", datum: "2026-10-02" },
    { pick: "1.12", spieler: "Brayden Burries", datum: "2026-10-02" },
    { pick: "2.1", spieler: "Yanic Konan Niederhäuser", datum: "2026-10-02" },
    { pick: "2.2", spieler: "Allen Graves", datum: "2026-10-03", notiz: "via Cooking Show (Trade)" },
    { pick: "2.3", spieler: "Aday Mara", datum: "2026-10-03" },
    { pick: "2.4", spieler: "Nikola Jović", datum: "2026-10-03" },
    { pick: "2.5", spieler: "Cameron Carr", datum: "2026-10-03" },
    { pick: "2.6", spieler: "Labaron Philon Jr.", datum: "2026-10-03" },
    { pick: "3.1", spieler: "Sergio de Larrea", datum: "2026-10-05" },
    { pick: "3.2", spieler: "Ebuka Okorie", datum: "2026-10-05" },
    { pick: "3.3", spieler: "Mario Hezonja", datum: "2026-10-05" },
    { pick: "3.4", spieler: "Sam Merrill", datum: "2026-10-05" },
    { pick: "3.5", spieler: "Dailyn Swain", datum: "2026-10-05" },
    { pick: "3.6", spieler: "Joshua Jefferson", datum: "2026-10-06" },
    { pick: "3.7", spieler: "Karim Lopez", datum: "2026-10-06" },
    { pick: "3.8", spieler: "Grayson Allen", datum: "2026-10-06" },
  ],
};
