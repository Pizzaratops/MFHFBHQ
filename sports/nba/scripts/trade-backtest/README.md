# Trade-Value-Backtest (23.11.2026)

Reihenfolge: `python3 bt1.py` (BBM 2004–2026 + bbref-Alter + Draft-History → /tmp/bt.pkl),
`python3 bt2.py` (Realized-Value-Kurve je Dynasty-Rang, NBA-Pick → Rang-Äquivalent → /tmp/bt2.json),
`python3 pv.py` (TTHQ-Slot → Wert), `python3 lot.py` (TTHQ-Lottery-Simulation), `python3 tr.py` (Abgleich mit den echten TTHQ-Trades aus trade-history.js).
Hilfsdateien: /tmp/tv.json = TRADE_VALUE_TABLE aus tools/nba-trades.js, /tmp/trades.json, /tmp/lot.json (siehe Bericht claude/trade-values-research.md im Projekt).
Parameter per ENV: REPL (Ersatzniveau, Std. 156), DELTA (Abzinsung, 0.85), H (Jahre, 7).
