#!/usr/bin/env python3
# ============================================================
#  Analyse: Welche College-Stats sagen REAL-LIFE-IMPACT in der NBA voraus — und welche
#  eher FANTASY-Wert (9-Cat)? (20.11.2026, lokal, Ergebnis in claude/college-scouting-basketball.md)
# ============================================================
#  Basis: letzte College-Saison 2010–2022 (Barttorvik, Profil wie train-prospect-model.py)
#  → erste 4 NBA-Saisons. Impact aus Basketball-Reference (cache/nba-advanced.csv.gz:
#  BPM, VORP, Win Shares), Fantasy aus den BBM-Exporten (9-Cat-Rang).
#  Ausgabe: Text-Report + cache/impact-analysis.json
# ============================================================
import os, json, importlib.util
import numpy as np, pandas as pd
from scipy.stats import spearmanr
from sklearn.linear_model import LogisticRegression, Ridge
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import roc_auc_score

HERE = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location('tpm', os.path.join(HERE, 'train-prospect-model.py'))
m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m)


def nba_adv():
    A = pd.read_csv(os.path.join(HERE, 'cache', 'nba-advanced.csv.gz'))
    A = A.sort_values('mp').drop_duplicates(['player_id', 'season'], keep='last')  # 2TM/3TM-Gesamtzeile
    A['k'] = A.player.map(m.nkey)
    S = pd.read_csv(os.path.join(HERE, 'cache', 'nba-allstar.csv.gz'))
    A['allstar'] = A.set_index(['player_id', 'season']).index.isin(S.set_index(['player_id', 'season']).index)
    return A


def outcomes(R, A):
    first = A.groupby('player_id').season.min()
    ids = A.groupby('k').player_id.unique().to_dict()
    by = {pid: g.set_index('season') for pid, g in A.groupby('player_id')}
    out = []
    for k, L in zip(R.k, R.year):
        cand = [p for p in ids.get(k, []) if L < first[p] <= L + 3]
        if len(cand) != 1: out.append(None); continue
        g = by[cand[0]]; S = g[(g.index > L) & (g.index <= L + 4)]
        big = S[S.mp >= 1000]
        out.append(dict(pid=cand[0], mp=float(S.mp.sum()), vorp=float(S.vorp.sum()), ws=float(S.ws.sum()),
                        bestBpm=float(big.bpm.max()) if len(big) else None,
                        bestObpm=float(big.loc[big.bpm.idxmax(), 'obpm']) if len(big) else None,
                        bestDbpm=float(big.loc[big.bpm.idxmax(), 'dbpm']) if len(big) else None,
                        impact=bool(((S.mp >= 1000) & (S.bpm >= 0)).any()),
                        starter=bool(((S.mp >= 1500) & (S.bpm >= 1.5)).any()),
                        allstar=bool(S.allstar.any())))
    return out


def main():
    D = m.load(); cage = m.class_age(D)
    pool = D[(D.minPct >= 20) & (D.gp >= 8)]
    means = {c: float(pool[c].mean()) for c in m.RATES + ['htIn']}
    D['L'] = D.groupby('pid').year.transform('max')
    T = D[(D.year == D.L) & D.year.between(2010, 2022) & (D.gp >= 5) & (D['min'] >= 200)].copy()
    T['k'] = T['name'].map(m.nkey)
    T = T[T.groupby(['k', 'year']).pid.transform('count') == 1]
    PR = m.profiles(D, T, cage, means)
    A = nba_adv()
    O = outcomes(T, A)
    T['nba'] = [o is not None and o['mp'] > 0 for o in O]
    for c in ['mp', 'vorp', 'ws']: T[c] = [o[c] if o else 0.0 for o in O]
    for c in ['impact', 'starter', 'allstar']: T[c] = [bool(o and o[c]) for o in O]
    for c in ['bestBpm', 'bestObpm', 'bestDbpm']: T[c] = [o[c] if o else np.nan for o in O]
    # Fantasy-Ziel wie build_dna (BBM, Top-150 in den ersten 4 Jahren)
    NBA = m.load_nba(); first, seas = {}, {}
    for y in sorted(NBA):
        rows = [r for r in NBA[y] if r.get('games')]
        elig = sorted([r for r in rows if r['games'] >= 40], key=lambda r: -(r.get('composite') or -99))
        rk = {m.nkey(r['name']): i + 1 for i, r in enumerate(elig)}
        for r in rows:
            kk = m.nkey(r['name']); first.setdefault(kk, y); seas.setdefault(kk, {})[y] = dict(r, rank=rk.get(kk))
    def fan(k, L):
        if k not in first or first[k] <= L: return (False, np.nan)
        S = [seas[k][y] for y in range(L + 1, L + 5) if y in seas[k]]
        comp = [s['composite'] for s in S if s['games'] >= 40 and s.get('composite') is not None]
        return (any(s['games'] >= 40 and s['rank'] and s['rank'] <= 150 for s in S), max(comp) if comp else np.nan)
    F = [fan(k, L) for k, L in zip(T.k, T.year)]
    T['fan'] = [f[0] for f in F]; T['fanBest'] = [f[1] for f in F]

    print(f'Trainings-Zeilen 2010–2022: {len(T)} · NBA (bbref) {int(T.nba.sum())} · Impact (Saison ≥1000 Min. & BPM ≥ 0) {int(T.impact.sum())} · '
          f'Starter-Niveau (≥1500 Min. & BPM ≥ +1,5) {int(T.starter.sum())} · All-Star {int(T.allstar.sum())} · Fantasy-Top-150 {int(T.fan.sum())}')
    both = T.impact & T.fan
    print(f'Überschneidung: Impact & Fantasy {int(both.sum())} · nur Impact {int((T.impact & ~T.fan).sum())} · nur Fantasy {int((~T.impact & T.fan).sum())}')
    print('  nur Impact (Beispiele):', ', '.join(T[T.impact & ~T.fan].sort_values('vorp', ascending=False).name.head(12)))
    print('  nur Fantasy (Beispiele):', ', '.join(T[~T.impact & T.fan].sort_values('fanBest', ascending=False).name.head(12)))

    feats = list(dict.fromkeys(m.FEATS + m.CATF_EXTRA + ['astTo']))
    PR['astTo'] = PR.astPct / PR.toPct.clip(lower=1)
    X = PR[feats]

    # ---------- 1) Einzelzusammenhänge (Spearman) — unter Spielern, die die NBA erreichten ----------
    N = T.nba & (T.mp >= 500)
    rows = []
    for f in feats:
        ri = spearmanr(X.loc[N, f], T.loc[N, 'vorp']).correlation
        rb = spearmanr(X.loc[N & T.bestBpm.notna(), f], T.loc[N & T.bestBpm.notna(), 'bestBpm']).correlation
        rf = spearmanr(X.loc[N & T.fanBest.notna(), f], T.loc[N & T.fanBest.notna(), 'fanBest']).correlation
        rows.append((f, ri, rb, rf))
    U = pd.DataFrame(rows, columns=['feat', 'rVorp', 'rBestBpm', 'rFantasy']).set_index('feat')
    U['diff'] = U.rVorp - U.rFantasy
    print(f'\n1) Einzelzusammenhang unter NBA-Spielern (≥500 NBA-Min., n={int(N.sum())}): College-Stat ↔ NBA-VORP (4 J.) / beste BPM / bester Fantasy-Wert')
    print(U.sort_values('diff', ascending=False).round(2).to_string())

    # ---------- 2) Modelle: P(Impact) vs P(Fantasy) — standardisierte Gewichte + Backtest ----------
    tr, te = T.year <= 2016, T.year >= 2017
    rel = (T.bpm >= 3) | (T.rec >= 80) | T.nba
    def fit(cols, y, mask, C=0.3):
        sc = StandardScaler().fit(X.loc[mask, cols]); lg = LogisticRegression(C=C, max_iter=5000).fit(sc.transform(X.loc[mask, cols]), y[mask]); return sc, lg
    res = {}
    P = {}
    for tgt in ['impact', 'starter', 'fan', 'nba']:
        sc, lg = fit(feats, T[tgt], tr)
        p = lg.predict_proba(sc.transform(X.loc[te, feats]))[:, 1]; P[tgt] = pd.Series(p, index=T.index[te])
        res[tgt] = dict(auc=roc_auc_score(T[tgt][te], p), aucRel=roc_auc_score(T[tgt][te & rel], P[tgt][te & rel]))
    # Gegenprobe: sagt das FANTASY-Modell Impact genauso gut voraus? (Dann bräuchte es kein eigenes)
    res['fan→impact'] = dict(auc=roc_auc_score(T.impact[te], P['fan']), aucRel=roc_auc_score(T.impact[te & rel], P['fan'][te & rel]))
    res['impact→fan'] = dict(auc=roc_auc_score(T.fan[te], P['impact']), aucRel=roc_auc_score(T.fan[te & rel], P['impact'][te & rel]))
    print('\n2) Backtest ≤2016 → 2017–22 (AUC alle / relevante Spieler):')
    for k, v in res.items(): print(f'   {k:12s} {v["auc"]:.3f} / {v["aucRel"]:.3f}')
    # VORP-Rangfolge unter Gedrafteten/NBA-Spielern: Impact-Modell vs Fantasy-Modell
    nte = te & T.nba
    rv_i = spearmanr(P['impact'][nte], T.vorp[nte]).correlation; rv_f = spearmanr(P['fan'][nte], T.vorp[nte]).correlation
    rf_i = spearmanr(P['impact'][nte], T.fanBest[nte].fillna(-15)).correlation; rf_f = spearmanr(P['fan'][nte], T.fanBest[nte].fillna(-15)).correlation
    print(f'   Unter NBA-Spielern 2017–22: ρ(Impact-Modell, VORP) {rv_i:.3f} vs ρ(Fantasy-Modell, VORP) {rv_f:.3f} · ρ(Impact-Modell, Fantasy-Wert) {rf_i:.3f} vs ρ(Fantasy-Modell, Fantasy-Wert) {rf_f:.3f}')

    sc_i, lg_i = fit(feats, T.impact, T.year <= 2022); sc_f, lg_f = fit(feats, T.fan, T.year <= 2022)
    W = pd.DataFrame({'impact': lg_i.coef_[0], 'fantasy': lg_f.coef_[0]}, index=feats)
    W['diff'] = W.impact - W.fantasy
    print('\n3) Standardisierte Modell-Gewichte (alle Jahre) — positiv = spricht dafür:')
    print(W.sort_values('diff', ascending=False).round(2).to_string())

    # ---------- 4) Gegenrechnen: Wo widersprechen sich die Modelle 2017–22, und wer hatte recht? ----------
    t = T[te].assign(pi=P['impact'], pf=P['fan'])
    t['gap'] = t.pi - t.pf
    hi = t[(t.pi >= 0.25)].sort_values('gap', ascending=False).head(15)
    lo = t[(t.pf >= 0.25)].sort_values('gap').head(15)
    show = lambda d: d[['name', 'team', 'year', 'pi', 'pf', 'impact', 'fan', 'vorp', 'bestBpm', 'fanBest']].round(2).to_string(index=False)
    print('\n4a) Impact-Modell deutlich höher als Fantasy-Modell (2017–22) — tatsächlich Impact/Fantasy?')
    print(show(hi)); print(f'   → Impact-Quote {hi.impact.mean():.0%}, Fantasy-Quote {hi.fan.mean():.0%}')
    print('4b) Fantasy-Modell deutlich höher als Impact-Modell:')
    print(show(lo)); print(f'   → Impact-Quote {lo.impact.mean():.0%}, Fantasy-Quote {lo.fan.mean():.0%}')
    # Kalibrierung Impact-Modell
    cal = t.assign(b=pd.cut(t.pi, [0, .05, .15, .3, .5, .7, 1.0])).groupby('b', observed=True).agg(n=('impact', 'size'), pred=('pi', 'mean'), real=('impact', 'mean')).round(3)
    print('\n5) Kalibrierung Impact-Modell 2017–22:'); print(cal.to_string())

    J = {'n': int(len(T)), 'nNba': int(T.nba.sum()), 'nImpact': int(T.impact.sum()), 'nStarter': int(T.starter.sum()), 'nFan': int(T.fan.sum()),
         'overlap': {'both': int(both.sum()), 'onlyImpact': int((T.impact & ~T.fan).sum()), 'onlyFan': int((~T.impact & T.fan).sum())},
         'univariate': U.round(3).reset_index().to_dict('records'), 'weights': W.round(3).reset_index().rename(columns={'index': 'feat'}).to_dict('records'),
         'backtest': {k: {kk: round(vv, 3) for kk, vv in v.items()} for k, v in res.items()},
         'rankVorp': {'impactModel': round(rv_i, 3), 'fantasyModel': round(rv_f, 3)}, 'rankFantasy': {'impactModel': round(rf_i, 3), 'fantasyModel': round(rf_f, 3)},
         'gapHiImpact': {'impactRate': round(float(hi.impact.mean()), 3), 'fanRate': round(float(hi.fan.mean()), 3)},
         'gapHiFan': {'impactRate': round(float(lo.impact.mean()), 3), 'fanRate': round(float(lo.fan.mean()), 3)}}
    json.dump(J, open(os.path.join(HERE, 'cache', 'impact-analysis.json'), 'w'), indent=1, ensure_ascii=False)


if __name__ == '__main__':
    main()
