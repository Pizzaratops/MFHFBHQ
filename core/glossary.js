// ============================================================
//  Glossar — Erklärungen per Hover, überall
// ============================================================
//  02.11.2026 auf Wunsch: Begriffe in Spaltenköpfen, Umschaltern und
//  Kennzahl-Kacheln bekommen automatisch einen Tooltip (title), wenn die
//  Seite selbst keinen setzt. Gilt für alle Ligen und Seiten — neue Seiten
//  sind automatisch abgedeckt, solange ihre Beschriftung hier steht.
//
//  Erkannt werden: <th>, .seg-btn, .th-sort, .chip-link, .pick,
//  .n32-kpi-l, .stat-label. Abgleich ohne Emojis/Pfeile, Groß/klein egal.
//  Neue Begriffe einfach unten ergänzen (Schlüssel = sichtbarer Text).
// ============================================================

(function () {
  const G = {
    // ---- Tabelle / Bilanz ----
    '#': 'Platz in der aktuellen Sortierung',
    'w-l': 'Siege-Niederlagen (Unentschieden als dritte Zahl)',
    'w-l-t': 'Siege-Niederlagen-Unentschieden',
    'bilanz': 'Siege-Niederlagen (Unentschieden als dritte Zahl)',
    'pct': 'Siegquote: (Siege + ½ Unentschieden) ÷ Spiele',
    'quote': 'Siegquote: (Siege + ½ Unentschieden) ÷ Spiele',
    'gb': 'Games Behind: Spiele Rückstand auf den Tabellenführer',
    'pf': 'Points For: erzielte Punkte gesamt',
    'pa': 'Points Against: Punkte der Gegner gesamt',
    'pf/w': 'Ø Punkte pro Woche',
    'all-play': 'Bilanz, wenn man jede Woche gegen alle anderen Teams gespielt hätte — zeigt die echte Stärke, unabhängig vom Spielplan',
    'glück': 'Echte Siege minus Siege laut All-Play-Erwartung. Plus = Glück mit dem Spielplan, Minus = Pech',
    'form': 'Ergebnisse bzw. Schnitt der letzten Wochen',
    'trend': 'Platzveränderung gegenüber der Vorwoche (▲ besser, ▼ schlechter)',
    'median': 'Bonus-Spiel gegen den Median der Woche: mehr Punkte als die Hälfte der Liga = zusätzlicher Sieg',
    'h2h': 'Head-to-Head: Ergebnis gegen den direkten Gegner',
    'duell': 'Fantasy-Punkte gegen die Fantasy-Punkte des echten Gegners (NFL 32 / NBA 30)',
    '👑': 'Wochensiege: wie oft das Team die meisten Punkte der Woche hatte',
    'diff': 'Differenz',
    '±': 'Veränderung bzw. Differenz',
    'σ': 'Summe', 'Σ': 'Summe',
    'max': 'Bester Wert', 'min': 'Schwächster Wert bzw. Minuten (je nach Tabelle)',
    'ø': 'Durchschnitt', 'ø pkt.': 'Ø Punkte pro Woche', 'ø punkte': 'Ø Punkte pro Woche', 'ø/sp.': 'Ø Punkte pro Spiel',
    'ø platz': 'Durchschnittliche Platzierung', 'ø wochenrang': 'Durchschnittlicher Platz in den einzelnen Wochen',
    'vs nfl': 'Platz hier minus Platz nach echter NFL-Bilanz: Plus = Fantasy besser als die echte Bilanz',
    'vs nba': 'Platz hier minus Platz nach echter NBA-Bilanz: Plus = Fantasy besser als die echte Bilanz',
    'nfl': 'Echte NFL-Bilanz zum Vergleich', 'nba': 'NBA-Team bzw. echte NBA-Bilanz',
    // ---- Umschalter Wertung ----
    'kategorien': 'Jede Kategorie zählt als eigenes Spiel: eine Woche 6:3 gewonnen = 6-3 in der Bilanz (ESPN „H2H Each Category“)',
    'matchups': 'Pro Woche nur ein Ergebnis: Wer mehr Kategorien gewinnt, bekommt einen Sieg (6:3 = 1-0, ESPN „Most Categories“)',
    'tabelle (w-l)': 'Tabellenplatz nach Bilanz, bei Gleichstand nach Punkten',
    'tabelle (all-play)': 'Platz nach All-Play-Quote (jede Woche gegen alle), Tiebreak Ø Punkte',
    'punkte kumuliert': 'Platz nach den bis dahin gesammelten Punkten',
    'wochenrang': 'Platz nur in der jeweiligen Woche, ohne Vorwochen',
    'nur h2h': 'Nur das Duell gegen den echten Gegner zählt',
    'h2h + median (bonus-w)': 'Zusätzlich zum Duell ein Bonus-Spiel gegen den Median der Woche (wie DOPE)',
    'kumulativ': 'Alle Wochen bis hierhin zusammengerechnet', 'saison kumuliert': 'Alle Wochen bis hierhin zusammengerechnet',
    'nur diese woche': 'Nur die gewählte Woche, ohne Vorwochen',
    'beste aufstellung': 'Optimale Aufstellung nach Projektion statt der aktuell eingetragenen',
    'wie in fantrax': 'So wie die Aufstellung gerade in Fantrax eingetragen ist',
    // ---- Spieler-Werte ----
    'proj.': 'Projektion (Fantasy-Wert für den Rest der Saison)', 'proj': 'Projektion', 'proj./spiel': 'Projizierte Punkte pro Spiel',
    'z': 'Z-Score: Abstand zum Durchschnitt in Standardabweichungen (über alle Kategorien summiert)',
    'z/spiel': 'Z-Score pro Spiel aus der Projektion', 'z-score': 'Summe der Kategorie-Z-Werte',
    'wert': 'Wert auf der jeweiligen Skala der Seite (Trade-/Dynasty-/Wochenwert)',
    'sp.': 'Spiele', 'gp': 'Games Played: Spiele', 'spiele': 'Spiele',
    'min.': 'Minuten pro Spiel', 'usg': 'Usage: Anteil der Team-Ballbesitze, die der Spieler beendet',
    'l14': 'Schnitt der letzten 14 Tage', 'l3': 'Schnitt der letzten 3 Spiele', 'letzte 3': 'Schnitt der letzten 3 Spiele/Wochen',
    '7 tage': 'Nächste 7 Tage (Starts in der besten Aufstellung / Spiele)',
    'rest-fp': 'Erwartete Fantasy-Punkte im Rest der Saison (Spiele × Projektion)',
    'fp': 'Fantasy-Punkte', 'fp/sp.': 'Fantasy-Punkte pro Spiel', 'fp/g real': 'Echte Fantasy-Punkte pro Spiel', 'fp/g proj': 'Projizierte Fantasy-Punkte pro Spiel',
    'ppr/sp.': 'PPR-Punkte pro Spiel',
    'impact': 'Spieler-Impact (RAPM): Plus/Minus pro 100 Ballbesitze, bereinigt um Mit- und Gegenspieler',
    'tier': 'Stufe gleich starker Spieler',
    'dyn': 'Dynasty-Wert/-Rang', 'dyn. #': 'Dynasty-Rang', 'dynasty-wert': 'Langfristiger Wert über mehrere Jahre',
    'jetzt-wert': 'Wert nur für die laufende Saison',
    'target share': 'Anteil der Team-Targets, die an den Spieler gehen', 'snaps': 'Anteil gespielter Snaps',
    'konfidenz': 'Wie sicher die Projektion ist (Datenlage)', 'sicher': 'Wie sicher die Projektion ist (Datenlage)',
    'perzentil': 'Anteil der Spieler, die schlechter sind (90 = besser als 90 %)',
    // ---- Kategorien (Basketball) ----
    'pts': 'Punkte', 'reb': 'Rebounds', 'ast': 'Assists', 'stl': 'Steals', 'blk': 'Blocks', 'to': 'Turnover (weniger ist besser)', '3pm': 'Getroffene Dreier',
    'fg%': 'Feldwurfquote (gewichtet nach Würfen)', 'ft%': 'Freiwurfquote (gewichtet nach Würfen)',
    'fgm-a': 'Feldwürfe getroffen-versucht', 'ftm-a': 'Freiwürfe getroffen-versucht', 'ft-rate': 'Freiwurfversuche pro Feldwurfversuch',
    'pace': 'Ballbesitze pro Spiel (Tempo)',
    // ---- Dynasty-Ranglisten (TTHQ) ----
    'mfhfb-rangliste': 'MFHFB-Dynasty-Ranking: Durchschnitt aus MFHFB, Hashtag Basketball und Matt Lawson',
    'mfhfb': 'Rang im MFHFB-Dynasty-Ranking', 'matt': 'Rang bei Matt Lawson (9-Cat Dynasty)', 'hashtag': 'Rang bei Hashtag Basketball (Dynasty)',
    'verlauf': 'Wie sich Ränge über die Zeit verändert haben', 'gerostert': 'Spieler, die bei einem Fantasy-Team im Kader stehen', 'frei': 'Spieler ohne Fantasy-Team (Waiver/Free Agent)',
    // ---- Draft / Auktion ----
    'rnd': 'Runde', 'rd.': 'Runde', 'pick': 'Pick-Nummer', 'adp': 'Average Draft Position',
    'nil': 'Zuschlag in der NIL-Auktion', 'limit': 'Bis hierhin mitbieten (risikobereinigt)', 'gebot': 'Aktuelles Höchstgebot', 'restzeit': 'Zeit, bis das Höchstgebot gewinnt',
    // ---- NFL ----
    'off. epa': 'Offense: Expected Points Added pro Play', 'def. epa': 'Defense: zugelassene Expected Points Added pro Play',
    'carries / wopr': 'Läufe bzw. Weighted Opportunity Rating (Targets + Air Yards)', 'air yds': 'Air Yards: Pass-Distanz in der Luft',
  };
  const norm = s => String(s || '').replace(/[\u{1F300}-\u{1FAFF}☀-➿️▲▼✨📋]/gu, '').replace(/\s+/g, ' ').trim().toLowerCase();
  const LOOKUP = new Map(Object.entries(G).map(([k, v]) => [norm(k) || k, v]));
  const SEL = 'th, .seg-btn, .th-sort, .chip-link, .pick, .n32-kpi-l, .stat-label';

  function annotate(root) {
    (root.querySelectorAll ? root.querySelectorAll(SEL) : []).forEach(el => {
      if (el.title || el.dataset.gloss) return;
      const host = el.closest('[title]'); if (host && host !== el) return;
      const raw = el.textContent;
      const k = norm(raw), v = LOOKUP.get(k) || LOOKUP.get(raw.trim());
      el.dataset.gloss = '1';
      if (v) { el.title = v; el.classList.add('has-gloss'); }
    });
  }
  let t = null;
  const run = () => { t = null; annotate(document); };
  new MutationObserver(() => { if (!t) t = setTimeout(run, 60); }).observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener('DOMContentLoaded', run);

  window.MFHFB = window.MFHFB || {};
  MFHFB.glossary = { terms: G, annotate };
})();
