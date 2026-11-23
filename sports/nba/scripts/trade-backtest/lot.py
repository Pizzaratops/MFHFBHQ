import json, numpy as np
rng=np.random.default_rng(1)
ODDS=np.array([14,14,14,12.5,10.5,9,7.5,6,4.5,3,2,1.5,1,0.5])/100
def lottery():
    order=[]; pool=list(range(14))
    for _ in range(4):
        w=ODDS[pool]/ODDS[pool].sum(); t=rng.choice(pool,p=w); order.append(t); pool.remove(t)
    return order+sorted(pool)  # remaining by record (index = badness)
N=200000
# P(TT slot | chooser k) ; chooser k takes NBA team of badness k (0..10)
P=np.zeros((11,12))
for _ in range(N):
    o=lottery(); chosen=[t for t in o if t<11]
    for slot,t in enumerate(chosen): P[t,slot]+=1
P/=N
SV={int(k):v for k,v in json.load(open('/tmp/slotval.json')).items()}
val=np.array([SV[s] for s in range(1,13)])
print('Chooser (1=Letzter) -> P(Slot 1..4), E[slot], EV R1-Wert (Backtest-Skala)')
EV=[]
for k in range(11):
    ev=(P[k]*val).sum(); EV.append(ev)
    print(f'{k+1:2d}: P(1-4)={P[k,:4].sum():.2f}  E[slot]={(P[k]*np.arange(1,13)).sum():.2f}  EV={ev:.0f}')
EV.append(val[11]); print('12 (Champion): slot 12, EV', round(val[11]))
# current-season projection
L=json.load(open('/tmp/lot.json')); tt=L['tt']; n=len(tt)
cw=np.array([t['cw'] for t in tt]); cl=np.array([t['cl'] for t in tt]); mw=np.array([t['mw'] for t in tt])
p=(cw+36*0.5)/(cw+cl+36)
WEEKS=13; S=20000; finish=np.zeros((n,12))
for _ in range(S):
    ps=np.clip(p+rng.normal(0,0.04,n),0.2,0.8)  # strength uncertainty
    w=mw.astype(float).copy()
    for wk in range(WEEKS):
        perm=rng.permutation(n)
        for a,b in zip(perm[::2],perm[1::2]):
            pa=ps[a]/(ps[a]+ps[b]); ca=rng.binomial(9,pa); 
            if ca>4.5: w[a]+=1
            else: w[b]+=1
    rank=np.argsort(-(w+rng.random(n)*0.1))  # best first
    top4=rank[:4]; sw=ps[top4]**3; champ=rng.choice(top4,p=sw/sw.sum())
    rest=[i for i in rank if i!=champ][::-1]  # worst first
    for k,i in enumerate(rest): finish[i,k]+=1
    finish[champ,11]+=1
finish/=S
print('\nTeam (aktuell) -> P(Chooser-Position), EV R1 2027')
res=[]
for i,t in enumerate(tt):
    ev=(finish[i]*np.array(EV)).sum(); res.append((ev,t['name'],f"{t['mw']}-{t['ml']}",(finish[i][:4]).sum()))
for ev,nm,r,pl in sorted(res,reverse=True): print(f'{nm:32s} {r}  P(Pos 1-4)={pl:.2f}  EV={ev:.0f}')
print('Ø', np.mean([r[0] for r in res]))
json.dump({'P':P.tolist(),'EVchooser':EV},open('/tmp/lotres.json','w'))
