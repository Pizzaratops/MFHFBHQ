import json, numpy as np, itertools
from scipy.optimize import minimize
T=json.load(open('/tmp/trades.json')); TV={int(k):v for k,v in json.load(open('/tmp/tv.json')).items()}
BT=json.load(open('/tmp/bt2.json')); RV=np.array(BT['rank_value']); RV=RV/RV[0]*1590
# date -> year approx
mon={'Januar':1,'Februar':2,'März':3,'April':4,'Mai':5,'Juni':6,'Juli':7,'August':8,'September':9,'Oktober':10,'November':11,'Dezember':12}
def age(dob,d):
    if not dob: return 26
    m,y=d.split(); return int(y)+mon[m]/12-int(dob[:4])-int(dob[5:7])/12
def agem(a):
    for lim,v in [(19,1.5),(21,1.35),(23,1.2),(25,1.08),(27,1),(29,.82),(31,.62),(33,.42),(35,.22)]:
        if a<=lim: return v
    return .08
players=[]; picks=[]
for t in T:
    if any(x.get('rank',0)>400 for x in t['sideA']+t['sideB'] if not x['isPick']): continue
    players.append(t)
def curve(kind,p=None):
    if kind=='matt': return lambda r: TV.get(r,0)
    if kind=='real': return lambda r: RV[min(r,400)-1]
    if kind=='pow': return lambda r: 1590*r**(-p)
    if kind=='blend': return lambda r: (TV.get(r,0)*RV[min(r,400)-1])**.5
def side_val(side,f,cons,pickv,d,useage):
    vals=[]
    for x in side:
        if x['isPick']: vals.append(pickv(x,d))
        else: vals.append(f(x['rank'])*(agem(age(x.get('dob'),d)) if useage else 1))
    return vals
def total(vals,cons,tmax,gmax):
    vals=sorted(vals,reverse=True)
    if cons=='none': return sum(vals)
    if cons=='geo': return sum(v*0.8**i for i,v in enumerate(vals))
    if cons=='ktc':  # raw adjustment, compare RA sums
        return sum(v*(0.1+0.076*(v/gmax)**8+0.24*(v/tmax)**1.3) for v in vals)
def score(f,cons,pickv,useage,only_players=True,verbose=False):
    errs=[]
    for t in players:
        allx=t['sideA']+t['sideB']
        if only_players and any(x['isPick'] for x in allx): continue
        d=t['date']
        A=side_val(t['sideA'],f,cons,pickv,d,useage); B=side_val(t['sideB'],f,cons,pickv,d,useage)
        tmax=max(A+B); gmax=1590*1.5 if useage else 1590
        a=total(A,cons,tmax,gmax); b=total(B,cons,tmax,gmax)
        e=abs(np.log(max(a,1)/max(b,1))); errs.append(e)
        if verbose: print(f'  {d:15s} A={a:7.0f} B={b:7.0f}  ratio {a/max(b,1):.2f}  ', ', '.join(x.get('name','?')[:14] for x in t['sideA']),'<>',', '.join(x.get('name','?')[:14] for x in t['sideB']))
    return np.mean(errs), len(errs)
nop=lambda x,d:0
for kind in ['matt','real','blend']:
    for cons in ['none','geo','ktc']:
        for ua in [True,False]:
            m,n=score(curve(kind),cons,nop,ua); print(f'{kind:6s} {cons:5s} age={ua!s:5s}  mean|log ratio|={m:.3f}  (n={n})')
best=None
for p in np.arange(0.3,1.31,0.05):
    for cons in ['none','geo','ktc']:
        for ua in [True,False]:
            m,_=score(curve('pow',p),cons,nop,ua)
            if best is None or m<best[0]: best=(m,p,cons,ua)
print('best power', best)
print('--- detail matt/geo/age (current tool):'); score(curve('matt'),'geo',nop,True,verbose=True)
print('--- detail blend/ktc/noage:'); score(curve('blend'),'ktc',nop,False,verbose=True)
print('=== implied pick values (blend curve, KTC raw adj, no age); solve for the pick group on one side')
from scipy.optimize import brentq
f=curve('blend')
def ra_sum(vals,tmax,gmax=1590): return sum(v*(0.1+0.076*(v/gmax)**8+0.24*(v/tmax)**1.3) for v in vals)
for t in T:
    allx=t['sideA']+t['sideB']
    if not any(x['isPick'] for x in allx): continue
    # assume all picks in trade share one per-pick value x scaled by round: R1=1, R2=.3, R3=.15, R4=.1 (only to split groups)
    def vals(side,x): return [ (x if x['isPick'] else 0) for x in side]
    def fn(x):
        A=[(x if p['isPick'] else f(p['rank'])) for p in t['sideA']]; B=[(x if p['isPick'] else f(p['rank'])) for p in t['sideB']]
        tm=max(A+B); return ra_sum(A,tm)-ra_sum(B,tm)
    try: x=brentq(fn,0.1,3000)
    except Exception as e: x=float('nan')
    # rank equivalent
    req=min(range(1,600),key=lambda r:abs(f(r)-x)) if x==x else None
    desc=lambda s:', '.join((f"{p['year']}R{p['round']}" if p['isPick'] else f"{p['name'][:12]}#{p['rank']}") for p in s)
    print(f"{t['date']:15s} pick≈{x:6.1f} (≈Rang {req})  {desc(t['sideA'])} <> {desc(t['sideB'])}")
