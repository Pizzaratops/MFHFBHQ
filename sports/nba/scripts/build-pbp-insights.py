#!/usr/bin/env python3
# ============================================================
#  PbP-Insights: Profiteure, Rollen, Teams, Back-to-backs, Fouls, Wurfprofil
#  (seit 23.10.2026, täglich im nba-sync)
# ============================================================
#  DATENQUELLE: Ramiro Bentes, github.com/ramirobentes/nba_data – fremdes
#  Projekt, frei veröffentlichte Play-by-Play-Parquets. Wir übernehmen die
#  Daten unverändert und rechnen nur daraus (siehe Quellen & Dank).
#
#  Ausgabe: sports/nba/data/pbp-insights.js (PBP_INSIGHTS) für
#  tools/nba-insights.js (Seite „Rollen & Matchups“), Matchup-Planer und Waiver.
#  Vorsaison-Werte (Team-Profile, B2B-Historie, On/Off-Paare) liegen als
#  scripts/data/pbp-prior-<Saison>.json im Repo und werden nur gebaut, wenn
#  sie fehlen (einmal pro Saison, braucht die zwei Vorsaison-Dateien).
#
#  Was die Backtests (2016–2026, Details: README „PbP-Insights“) ergeben haben:
#   - Minuten-Trend: letzte 3 Spiele zählen extra (β 0,3) → Minuten der
#     nächsten 10 Spiele −4 % Fehler, alle Kategorien −1 bis −3 %.
#   - Back-to-backs: 2. Abend fehlen Stammspieler 21 % statt 15 %; die
#     Extra-Quote eines Spielers hält sich (r 0,31 Vorjahr → jetzt).
#   - Gegner + Pace: kleiner, aber stabiler Effekt je Spiel (−0,2 bis −0,4 %).
#   - Blowouts (≥ 20): 14 % bei gleich starken Teams, 30 % bei großem Gefälle;
#     Starter mit ≥ 30 Min. spielen dann ~4,8 Min. weniger.
#   - Garbage-Time-Abwertung und Wurfprofil für Dynasty-Ausbrüche: KEIN Gewinn
#     → nur als Info angezeigt, nicht eingerechnet.
#
#  Aufruf (im Ordner sports/nba): python3 scripts/build-pbp-insights.py [--force]
# ============================================================
import json, math, os, re, sys, tempfile
from datetime import date, datetime, timedelta

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import pbp_lib as L  # noqa: E402

OUT = os.path.join(HERE, '..', 'data', 'pbp-insights.js')
FORCE = '--force' in sys.argv
CREDIT = 'Play-by-Play: Ramiro Bentes, github.com/ramirobentes/nba_data'
CATS = ['pts', 'reb', 'ast', 'stl', 'blk', 'tpm', 'tov']

today = date.today()
END = today.year + (1 if today.month >= 8 else 0)  # Datei-Jahr = Saisonende
SEASON = f'{END - 1}-{str(END % 100).zfill(2)}'
PRIOR_PATH = os.path.join(HERE, 'data', f'pbp-prior-{SEASON}.json')

# Backtest-Parameter (siehe Kopf)
BETA_TREND = 0.3          # Gewicht letzte 3 Spiele für die nächsten 10
K_MIN = 4                 # Dämpfung Minuten (wie Live Projections)
K_POSS = 1500             # Dämpfung Gegner-Faktoren (Possessions)
K_PACE_G = 15             # Dämpfung Pace (Spiele)
K_B2B = 25                # Dämpfung B2B-Extra-Quote (2. Abende)
K_ONOFF = 600             # Dämpfung Off-Court-Raten (Minuten), Backtest: 600 am besten
# Minuten-Zuwachs, wenn X fehlt (Backtest 2024–2026, 2.121 Paare, Test 2025-26:
# RMSE 5,64 → 4,56): Δ = a + b·On/Off-Schätzung + c·Y-Minuten + d·X-Minuten
DMIN = (3.406, 0.093, -0.229, 0.137)
BLOW_LOGIT = (-1.9221, 0.0777)  # P(|Margin| ≥ 20) = σ(a + b·|Netto-Differenz|)
BLOW_MIN_LOSS = 4.75      # Minuten weniger für Starter (≥ 30 Min.) im Blowout


def r(x, d=2):
    return None if x is None or (isinstance(x, float) and math.isnan(x)) else round(float(x), d)


def old_meta():
    if not os.path.exists(OUT):
        return {}
    m = re.search(r'^//  META (\{.*\})$', open(OUT, encoding='utf-8').read(), re.M)
    return json.loads(m.group(1)) if m else {}


# ---------- 0) Gate: nur bei neuer Datei ----------
cur_url = L.url('pbp', END)
stamp = L.head_stamp(cur_url)
if stamp is None:
    print(f'pbp {END} (noch) nicht veröffentlicht – nichts zu tun.')
    sys.exit(0)
prev = old_meta()
if not FORCE and prev.get('assetUpdated') == stamp and prev.get('season') == SEASON and os.path.exists(PRIOR_PATH):
    print(f'pbp {END} unverändert seit {stamp} – nichts zu tun.')
    sys.exit(0)

L.ensure()
import numpy as np  # noqa: E402
import pandas as pd  # noqa: E402

TMP = tempfile.mkdtemp()


def season_frames(end_year):
    path = L.download(L.url('pbp', end_year), os.path.join(TMP, f'pbp_{end_year}.parquet'))
    df = L.load(path)
    ev = L.stat_events(df)
    st = L.stints(df)
    pm = L.player_minutes(st)
    sts = L.starters(df)
    return df, ev, st, pm, sts


def team_games(df, ev):
    """Je (Spiel, Team): Possessions, Punkte, Gegner, Garbage-Sekunden, Kategorien und Zugelassenes."""
    g = df.groupby(['game_id', 'game_date', 'team_home', 'team_away']).agg(
        ph=('poss_home', 'sum') if 'poss_home' in df else ('secs_played', 'size'),
        pa=('poss_away', 'sum') if 'poss_away' in df else ('secs_played', 'size'),
        hs=('hs', 'max'), vs=('vs', 'max')).reset_index()
    gts = df[df['garbage_time'] > 0].groupby('game_id')['secs_played'].sum()
    rows = []
    for side, o in (('home', 'away'), ('away', 'home')):
        rows.append(pd.DataFrame({'game_id': g.game_id, 'game_date': g.game_date, 'team': g['team_' + side], 'opp': g['team_' + o],
                                  'poss': g['ph' if side == 'home' else 'pa'], 'opp_poss': g['pa' if side == 'home' else 'ph'],
                                  'score': g['hs' if side == 'home' else 'vs'], 'opp_score': g['vs' if side == 'home' else 'hs'],
                                  'home': side == 'home', 'gt_secs': g.game_id.map(gts).fillna(0)}))
    t = pd.concat(rows, ignore_index=True)
    tc = ev[ev.stat.isin(CATS)].groupby(['game_id', 'team', 'stat']).val.sum().unstack(fill_value=0).reset_index()
    for c in CATS:
        if c not in tc:
            tc[c] = 0.0
    t = t.merge(tc[['game_id', 'team', *CATS]], on=['game_id', 'team'], how='left')
    al = tc[['game_id', 'team', *CATS]].rename(columns={'team': 'opp', **{c: 'al_' + c for c in CATS}})
    t = t.merge(al, on=['game_id', 'opp'], how='left').fillna(0)
    return t


def team_profiles(t):
    """Team-Profil einer Saison: Pace, Rating, zugelassene Raten je Kategorie."""
    lg_pace = t.poss.mean()
    lg_rate = {c: t[c].sum() / max(1, t.poss.sum()) for c in CATS}
    out = {}
    for tm, g in t.groupby('team'):
        out[tm] = {'gp': int(len(g)), 'poss': float(g.poss.sum()), 'opp_poss': float(g.opp_poss.sum()),
                   'pace': float(g.poss.mean()), 'net': float((g.score - g.opp_score).mean()),
                   'ortg': float(g.score.sum() / max(1, g.poss.sum()) * 100), 'drtg': float(g.opp_score.sum() / max(1, g.opp_poss.sum()) * 100),
                   'al': {c: float(g['al_' + c].sum()) for c in CATS}}
    return out, float(lg_pace), lg_rate


def onoff_pairs(ev, st, pm, top_n=5, min_secs=400 * 60):
    """Je Team: für die Top-N-Minutenspieler X, wie spielen Mitspieler Y mit X auf dem Feld / ohne ihn.
    Plus ganze Spiele ohne X (verpasst)."""
    pairs = []
    tot = pm.groupby(['team', 'player']).agg(secs=('secs', 'sum'), gp=('game_id', 'nunique')).reset_index()
    tot['mpg'] = tot.secs / 60 / tot.gp.clip(lower=1)
    games_by_team = pm.groupby('team').game_id.unique()
    played = pm.groupby(['team', 'player']).game_id.apply(set)
    for tm, g in tot.groupby('team'):
        # Stars = meiste Minuten pro Spiel (nicht Summe – sonst fallen lange Verletzte raus)
        stars = g[(g.secs >= min_secs) & (g.mpg >= 24)].sort_values('mpg', ascending=False).head(top_n).player.tolist()
        tst = st[st.team == tm]
        tev = ev[(ev.team == tm) & ev.stat.isin(CATS)]
        tpm = pm[pm.team == tm]
        mates = g.player.tolist()
        for X in stars:
            pat = r'(?:^|\s)' + re.escape(X) + r'(?:,|$)'
            on = tst.lineup.str.contains(pat, regex=True)
            # Minuten von Y mit / ohne X
            sec = {}
            for flag, part in (('on', tst[on]), ('off', tst[~on])):
                acc = {}
                for lu, s in zip(part.lineup, part.secs):
                    for p in lu.split(','):
                        n = L.strip_id(p)
                        if n:
                            acc[n] = acc.get(n, 0) + s
                sec[flag] = acc
                sec[flag + '_team'] = float(part.secs.sum())
            evon = tev.lineup.str.contains(pat, regex=True)
            s_on = tev[evon].groupby(['player', 'stat']).val.sum().unstack(fill_value=0)
            s_off = tev[~evon].groupby(['player', 'stat']).val.sum().unstack(fill_value=0)
            xg = played.get((tm, X), set())
            missed = [gid for gid in games_by_team[tm] if gid not in xg]
            for Y in mates:
                if Y == X:
                    continue
                yon, yoff = sec['on'].get(Y, 0), sec['off'].get(Y, 0)
                if yon + yoff < 120 * 60:
                    continue
                row = {'team': tm, 'x': X, 'y': Y, 'min_on': yon / 60, 'min_off': yoff / 60,
                       'team_on': sec['on_team'] / 60, 'team_off': sec['off_team'] / 60}
                for c in CATS:
                    row['on_' + c] = float(s_on.loc[Y, c]) if Y in s_on.index and c in s_on else 0.0
                    row['off_' + c] = float(s_off.loc[Y, c]) if Y in s_off.index and c in s_off else 0.0
                ym = tpm[tpm.player == Y]
                yw, yo = ym[ym.game_id.isin(xg)], ym[ym.game_id.isin(missed)]
                row.update({'g_with': int(len(yw)), 'min_with': float(yw.secs.sum() / 60), 'g_missed': int(len(yo)), 'min_missed': float(yo.secs.sum() / 60)})
                pairs.append(row)
    return pd.DataFrame(pairs)


def b2b_table(pm, t):
    """Je Spieler: Spiele am 2. Abend eines Back-to-backs vs. sonst, gespielt/verpasst."""
    tg = t[['game_id', 'game_date', 'team']].drop_duplicates().sort_values('game_date').copy()
    tg['prev'] = tg.groupby('team').game_date.shift()
    tg['b2b'] = (pd.to_datetime(tg.game_date) - pd.to_datetime(tg.prev)).dt.days.eq(1)
    recs = []
    for (pl, tm), g in pm.groupby(['player', 'team']):
        tt = tg[(tg.team == tm) & (tg.game_date >= g.game_date.min()) & (tg.game_date <= g.game_date.max())]
        if len(tt) < 20:
            continue
        mpg = g.secs.sum() / 60 / len(g)
        played = tt.game_id.isin(set(g.game_id))
        recs.append({'player': pl, 'mpg': mpg, 'b2b_n': int(tt.b2b.sum()), 'b2b_miss': int((~played & tt.b2b).sum()),
                     'reg_n': int((~tt.b2b).sum()), 'reg_miss': int((~played & ~tt.b2b).sum())})
    return pd.DataFrame(recs)


# ---------- 1) Vorsaison-Cache ----------
def build_prior():
    print(f'Baue Vorsaison-Cache {PRIOR_PATH} …')
    out = {'season': SEASON, 'built': today.isoformat(), 'source': CREDIT}
    df, ev, st, pm, sts = season_frames(END - 1)
    t = team_games(df, ev)
    prof, lg_pace, lg_rate = team_profiles(t)
    out['teams'] = prof
    out['lg_pace'] = lg_pace
    out['lg_rate'] = lg_rate
    agg = pm.groupby('player').agg(gp=('game_id', 'nunique'), secs=('secs', 'sum'))
    out['mpg'] = {p: round(v.secs / 60 / v.gp, 2) for p, v in agg.iterrows() if v.gp >= 5}
    # Liga-Streuung je Kategorie (pro Spiel, Rotationsspieler) für den „Wert“ der Profiteure
    pg = ev[ev.stat.isin(CATS)].groupby(['player', 'game_id', 'stat']).val.sum().unstack(fill_value=0).groupby('player').mean()
    rot = agg[(agg.gp >= 30) & (agg.secs / 60 / agg.gp >= 15)].index
    out['cat_sd'] = {c: float(pg.loc[pg.index.intersection(rot), c].std()) for c in CATS if c in pg}
    out['pairs'] = onoff_pairs(ev, st, pm).round(2).to_dict('records')
    b1 = b2b_table(pm, t)
    df2, ev2, st2, pm2, _ = season_frames(END - 2)
    b2 = b2b_table(pm2, team_games(df2, ev2))
    bb = pd.concat([b1, b2])
    st_ = bb[bb.mpg >= 24]  # Liga-Bezug wie im Backtest: Stammspieler
    out['b2b_lg'] = {'b2b': float(st_.b2b_miss.sum() / max(1, st_.b2b_n.sum())), 'reg': float(st_.reg_miss.sum() / max(1, st_.reg_n.sum()))}
    b = bb.groupby('player').sum(numeric_only=True)
    out['b2b'] = {p: [int(v.b2b_n), int(v.b2b_miss), int(v.reg_n), int(v.reg_miss)] for p, v in b.iterrows() if v.b2b_n >= 3}
    os.makedirs(os.path.dirname(PRIOR_PATH), exist_ok=True)
    json.dump(out, open(PRIOR_PATH, 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
    print(f'  Vorsaison: {len(prof)} Teams, {len(out["pairs"])} On/Off-Paare, {len(out["b2b"])} B2B-Spieler.')
    return out


prior = json.load(open(PRIOR_PATH, encoding='utf-8')) if os.path.exists(PRIOR_PATH) else build_prior()

# ---------- 2) Laufende Saison ----------
df, ev, st, pm, sts = season_frames(END)
if len(df) < 1000:
    print('Zu wenig Daten in der laufenden Saison – Abbruch, alte Datei bleibt.')
    sys.exit(0)
through = df.game_date.max()
t = team_games(df, ev)
prof, lg_pace_cur, lg_rate_cur = team_profiles(t)
lg_pace = (lg_pace_cur * len(t) + prior['lg_pace'] * 200) / (len(t) + 200)
lg_rate = {c: (lg_rate_cur[c] * t.poss.sum() + prior['lg_rate'][c] * 20000) / (t.poss.sum() + 20000) for c in CATS}

# ---------- 3) Teams: Pace, Gegner-Faktoren, Blowouts, Garbage Time ----------
teams = {}
for tm in sorted(set(t.team) | set(prior['teams'])):
    c, p = prof.get(tm), prior['teams'].get(tm)
    gp = c['gp'] if c else 0
    p_pace = p['pace'] if p else prior['lg_pace']
    pace = ((c['pace'] * gp if c else 0) + p_pace * K_PACE_G) / (gp + K_PACE_G)
    p_net = (p['net'] * 0.5) if p else 0.0   # Vorjahres-Netto halb zurück zur Mitte
    net = ((c['net'] * gp if c else 0) + p_net * 10) / (gp + 10)
    fac = {}
    for cat in CATS:
        prior_rate = lg_rate[cat] * (1 + 0.5 * ((p['al'][cat] / max(1, p['opp_poss'])) / prior['lg_rate'][cat] - 1)) if p else lg_rate[cat]
        al = c['al'][cat] if c else 0.0
        op = c['opp_poss'] if c else 0.0
        fac[cat] = (al + prior_rate * K_POSS) / (op + K_POSS) / lg_rate[cat]
    tg = t[t.team == tm]
    teams[tm] = {'gp': gp, 'pace': r(pace, 1), 'paceF': r(pace / lg_pace, 3), 'net': r(net, 1),
                 'ortg': r(c['ortg'], 1) if c else None, 'drtg': r(c['drtg'], 1) if c else None,
                 'allowF': {k: r(v, 3) for k, v in fac.items()},
                 'blowRate': r(((tg.score - tg.opp_score).abs() >= 20).mean(), 3) if gp else None,
                 'gtMin': r(tg.gt_secs.mean() / 60, 1) if gp else None}

# ---------- 4) Spieler: Rolle, Trend, Fouls, Wurfprofil, Garbage Time, B2B ----------
pm = pm.merge(sts, on=['game_id', 'team', 'player'], how='left').fillna({'start': 0})
pm = pm.sort_values('game_date')
evp = ev.groupby(['player', 'stat']).val.sum().unstack(fill_value=0)
evgt = ev[ev.garbage_time > 0].groupby(['player', 'stat']).val.sum().unstack(fill_value=0)
# Team-Clutch-Minuten (enge Schlussphase) je Spiel als Bezug
team_clutch = st.groupby(['game_id', 'team']).clutch_secs.sum()
b2b_lg = prior['b2b_lg']
lg_extra = b2b_lg['b2b'] - b2b_lg['reg']
players = {}
for pl, g in pm.groupby('player'):
    n = len(g)
    mins = (g.secs / 60).tolist()
    avg = sum(mins) / n
    pmpg = prior['mpg'].get(pl)
    base = pmpg if pmpg is not None else avg
    live = base + (avg - base) * n / (n + K_MIN)
    last3 = sum(mins[-3:]) / min(3, n)
    trend = live + BETA_TREND * (last3 - live) if n >= 3 else live
    cl = g.clutch_secs.sum() / 60
    tcl = sum(team_clutch.get((gid, tm), 0) for gid, tm in zip(g.game_id, g.team)) / 60
    s = evp.loc[pl] if pl in evp.index else pd.Series(dtype=float)
    sg = evgt.loc[pl] if pl in evgt.index else pd.Series(dtype=float)
    get = lambda S, k: float(S.get(k, 0) or 0)
    fga, fgm = get(s, 'fga'), get(s, 'fgm')
    pf = get(s, 'pf')
    pf_games = ev[(ev.player == pl) & (ev.stat == 'pf')].groupby('game_id').val.sum()
    e = {'team': g.team.iloc[-1], 'gp': n, 'starts': int(g.start.sum()), 'startLast3': int(g.start.tail(3).sum()),
         'min': r(avg, 1), 'minPrior': r(pmpg, 1), 'minLive': r(live, 1), 'last3': r(last3, 1), 'trend10': r(trend, 1),
         'clutchMin': r(cl / n, 1), 'clutchShare': r(cl / tcl, 2) if tcl >= 3 else None,
         'gtMinShare': r(g.gt_secs.sum() / max(1, g.secs.sum()), 3), 'gtPtsShare': r(get(sg, 'pts') / get(s, 'pts'), 3) if get(s, 'pts') >= 10 else None,
         'pf36': r(pf / max(1, g.secs.sum() / 60) * 36, 1) if avg >= 8 else None, 'pf5': int((pf_games >= 5).sum()), 'fouledOut': int((pf_games >= 6).sum()),
         'rimRate': r(get(s, 'rima') / fga, 3) if fga >= 15 else None, 'tpaRate': r(get(s, 'tpa') / fga, 3) if fga >= 15 else None,
         'ftRate': r(get(s, 'fta') / fga, 3) if fga >= 15 else None, 'uastShare': r(get(s, 'uast') / fgm, 3) if fgm >= 8 else None}
    bh = prior['b2b'].get(pl)
    if bh and avg >= 20:
        bn, bm, rn, rm = bh
        extra_obs = bm / bn - rm / max(1, rn)
        extra = lg_extra + (extra_obs - lg_extra) * bn / (bn + K_B2B)
        reg = (rm + b2b_lg['reg'] * 20) / (rn + 20)
        e['b2b'] = {'p': r(min(0.95, max(0.0, reg + extra)), 3), 'extra': r(extra, 3), 'n': bn, 'miss': bm}
    players[pl] = e

# ---------- 5) Profiteure: wenn X fehlt ----------
cat_sd = prior.get('cat_sd') or {c: 1.0 for c in CATS}
cur_pairs = onoff_pairs(ev, st, pm.drop(columns=['start']), top_n=5, min_secs=60 * 60)
pp = pd.DataFrame(prior['pairs'])
cur_team = {p: v['team'] for p, v in players.items()}
# Wer diese Saison noch nicht gespielt hat: Team aus der Consensus (Stand des letzten Quellen-Updates)
import unicodedata  # noqa: E402


def nkey(n):
    n = unicodedata.normalize('NFKD', n).encode('ascii', 'ignore').decode().lower()
    n = re.sub(r"[.'’`]", '', n)
    return re.sub(r'\s+', ' ', re.sub(r'\b(jr|sr|ii|iii|iv)\b', '', n)).strip()


CONS_TEAM_FIX = {'PHO': 'PHX', 'NOR': 'NOP', 'GS': 'GSW', 'NY': 'NYK', 'SA': 'SAS', 'NO': 'NOP', 'UTAH': 'UTA', 'WSH': 'WAS'}
try:
    src = open(os.path.join(HERE, '..', 'data', 'projections-consensus.js'), encoding='utf-8').read()
    cons = json.loads(src[src.index('const PROJECTIONS_CONSENSUS = ') + 30:src.rstrip().rstrip(';').rindex('}') + 1])
    cons_team = {nkey(n): CONS_TEAM_FIX.get(v.get('team'), v.get('team')) for n, v in cons.items()}
except Exception as e:  # Consensus fehlt/kaputt → nur PbP-Teams
    print('Hinweis: Consensus-Teams nicht lesbar:', e)
    cons_team = {}
for nm in set(pp.x if len(pp) else []) | set(pp.y if len(pp) else []) | set(prior['mpg']):
    if nm not in cur_team and cons_team.get(nkey(nm)):
        cur_team[nm] = cons_team[nkey(nm)]
# Paare zusammenführen: Vorsaison nur, wenn X und Y JETZT im selben Team spielen wie damals
num_cols = ['min_on', 'min_off', 'team_on', 'team_off', 'g_with', 'min_with', 'g_missed', 'min_missed'] + [f'{a}_{c}' for a in ('on', 'off') for c in CATS]
frames = []
if len(cur_pairs):
    frames.append(cur_pairs)
if len(pp):
    keep = pp[[cur_team.get(x) == tm and cur_team.get(y) == tm for tm, x, y in zip(pp.team, pp.x, pp.y)]]
    frames.append(keep)
pairs = pd.concat(frames).groupby(['team', 'x', 'y'], as_index=False)[num_cols].sum() if frames else pd.DataFrame()
stars = {}
if len(pairs):
    for (tm, X), g in pairs.groupby(['team', 'x']):
        if cur_team.get(X) != tm:
            continue
        xm = players.get(X, {}).get('minLive') or prior['mpg'].get(X)
        if not xm or xm < 24:
            continue
        cand = []
        for _, q in g.iterrows():
            Y = q.y
            if cur_team.get(Y) != tm:
                continue
            ymin = players.get(Y, {}).get('minLive') or prior['mpg'].get(Y) or 0
            tot_min = q.min_on + q.min_off
            if tot_min < 150:
                continue
            s_on = q.min_on / max(1, q.team_on)
            s_off = q.min_off / max(1, q.team_off)
            dmin_onoff = (s_off - s_on) * xm
            dmin = DMIN[0] + DMIN[1] * dmin_onoff + DMIN[2] * ymin + DMIN[3] * xm
            dmin = max(-4.0, min(40.0 - ymin, dmin))
            cand.append((q, Y, ymin, tot_min, dmin))
        # Die Minuten von X können nur einmal verteilt werden: Summe der Zuwächse ≤ X-Minuten
        pos = sum(c[4] for c in cand if c[4] > 0)
        scale = xm / pos if pos > xm else 1.0
        rows = []
        for q, Y, ymin, tot_min, dmin in cand:
            if dmin > 0:
                dmin *= scale
            new_min = ymin + dmin
            d = {}
            val = 0.0
            for c in CATS:
                r_all = (q['on_' + c] + q['off_' + c]) / max(1, tot_min)
                r_off = (q['off_' + c] + r_all * K_ONOFF) / (q.min_off + K_ONOFF)
                d[c] = new_min * r_off - ymin * r_all
                sd = cat_sd.get(c) or 1.0
                val += (-1 if c == 'tov' else 1) * d[c] / sd
            rows.append({'y': Y, 'dMin': r(dmin, 1), 'min': r(ymin, 1), **{c: r(v, 2) for c, v in d.items()}, 'val': r(val, 2),
                         'minOff': int(q.min_off), 'gMissed': int(q.g_missed)})
        rows.sort(key=lambda x: -x['val'])
        if rows:
            stars[X] = {'team': tm, 'min': r(xm, 1), 'gMissed': int(g.g_missed.max()), 'top': rows[:8]}

# ---------- 6) Schreiben ----------
meta = {'season': SEASON, 'through': through, 'games': int(df.game_id.nunique()), 'players': len(players), 'teams': len(teams),
        'assetUpdated': stamp, 'source': CREDIT, 'lgPace': r(lg_pace, 1),
        'params': {'betaTrend': BETA_TREND, 'kB2B': K_B2B, 'kPoss': K_POSS, 'blowLogit': BLOW_LOGIT, 'blowMinLoss': BLOW_MIN_LOSS},
        'b2bLeague': {k: r(v, 3) for k, v in b2b_lg.items()}}
head = f"""// ============================================================
//  PbP-Insights der laufenden Saison (Profiteure, Rollen, Teams, B2B, Fouls)
//  {CREDIT} (nicht unser Projekt, frei veröffentlichte Daten)
//  Erzeugt von scripts/build-pbp-insights.py am {today.isoformat()} · Saison {SEASON} · Stand {through}
//  Gelesen von tools/nba-insights.js, tools/nba-planner.js, tools/nba-waiver.js
//  META {json.dumps({'season': SEASON, 'assetUpdated': stamp})}
// ============================================================
"""
# Team-Kürzel wie im Hub (nba.js canonTeam: NOR, PHO …), damit Seiten direkt nachschlagen können
HUB = {'NOP': 'NOR', 'PHX': 'PHO'}
teams = {HUB.get(k, k): v for k, v in teams.items()}
for v in players.values():
    v['team'] = HUB.get(v['team'], v['team'])
for v in stars.values():
    v['team'] = HUB.get(v['team'], v['team'])
body = json.dumps({'meta': meta, 'teams': teams, 'players': dict(sorted(players.items())), 'stars': stars}, ensure_ascii=False, separators=(',', ':'))
open(OUT, 'w', encoding='utf-8').write(head + 'const PBP_INSIGHTS = ' + body + ';\n')
print(f'{OUT}: {len(players)} Spieler, {len(teams)} Teams, {len(stars)} Stars mit Profiteuren · Stand {through} · {os.path.getsize(OUT) // 1024} KB')
