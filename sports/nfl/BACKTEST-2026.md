# NFL-Prognosen — Backtest Saison 2026 (Stand Woche 5, 15.10.2026)

Daten: Server-Snapshots (MATCHUP_SNAPSHOTS) BWP W1–5 (60 Team-Wochen) und DOPE W4–5 (28),
817 Snapshot-Starter mit echten Liga-Punkten; dazu nflverse `stats_player_week` 2024–2026
(~7.500 Spieler-Wochen QB/RB/WR/TE, walk-forward) und Play-by-Play 2024–2026.

## 1. Matchup-Planer (sports/nfl/matchup-engine.js)

| Pos | n | Ø Proj. | Ø Ist | Bias | MAE | Korrelation | SD Rest | Sigma alt |
|---|---|---|---|---|---|---|---|---|
| QB | 85 | 17,5 | 18,1 | +0,6 | 7,1 | 0,20 | 8,9 | 7 |
| RB | 204 | 13,3 | 13,9 | +0,6 | 6,4 | 0,52 | 8,0 | 7,5 |
| WR | 260 | 12,4 | 12,2 | −0,2 | 7,6 | 0,32 | 9,6 | 8 |
| TE | 104 | 10,5 | 10,5 | 0,0 | 6,3 | 0,25 | 7,7 | 5,5 |
| K | 86 | 8,0 | 9,0 | +1,0 | 4,5 | −0,11 | 5,7 | 3,5 |
| DST | 78 | 6,4 | 6,2 | −0,1 | 4,2 | 0,13 | 5,3 | 4 |

- Mittelwerte praktisch unverzerrt, Sieger-Trefferquote 77 % (44 Matchups).
- **Problem: Streuung zu klein** → Win% zu sicher (Team: Abweichung/Sigma 1,17 statt 1,0).
- **Geändert:** Sigma neu (QB 8,5 · K 5,5 · DST 5,3 · RB/WR/TE wachsen mit der Projektion,
  z. B. WR 8 Pkt. → ±6, 20 Pkt. → ±10) und Team-Sigma ×1,1 (Korrelation im Team).
  Danach Abweichung/Sigma ≈ 1,1, Brier 0,1891 → 0,1885. Mittelwerte (und damit alte
  Snapshots) unverändert.
- **Getestet, nicht übernommen:** Gegner-FPA und Vegas-Team-Total als Faktor auf die
  Spieler-Projektion. 2026: −0,4 bis −1,6 % MAE, 2025 (5.880 Zeilen): QB/TE sogar schlechter,
  RB/WR ±0,5 %. Kein stabiler Effekt → die FPA-Badges bleiben reine Info.
- Vorjahres-Gewicht der Spieler-Baseline: flach zwischen k = 3 und 12, Mix g/(g+3) bleibt.

## 2. Matchup Advantage — Gesamt-Fazit (walk-forward, nur Daten vor dem Spiel)

| Saison | klar | leicht | Vegas-Favorit | Uneinig: Tool / Vegas |
|---|---|---|---|---|
| 2025 (K=4) | 69,9 % (107/153) | 60,8 % (59/97) | 65,3 % | 23 / 24 von 47 |
| 2026 W1–5 (K=4) | 61,1 % (22/36) | 34,4 % (11/32) | 64,1 % (50/78) | 4 / 15 von 19 |

- Vorjahres-Gewicht K: 2025 bestätigt K=4 (K=2: 69,2 %, K=8: 68,3 %, K=12: 64,3 % bei „klar“).
  2026 sähe K=8 besser aus, aber nur 36 Tipps → nicht geändert.
- **Neu:** Der Sync rechnet das Saison-Tracking jede Woche mit (`seasonTrack`,
  `scripts/lib/units.js`), die Seite zeigt „Saison 2026 bisher …“ im Fazit und in der Tabelle.
- Fazit bleibt: leichter Vorteil ≈ Münzwurf, bei Widerspruch Vegas glauben.
