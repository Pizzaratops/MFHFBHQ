from load import *
import numpy as np
B=bbm(); A=ages(); D=draft()
print('seasons',sorted(B)[:3],sorted(B)[-3:], {y:len(v) for y,v in list(B.items())[:2]})
import os
REPL=int(os.environ.get("REPL",156))
sv={}  # (name,season)->value above replacement, games-weighted
for y,rows in B.items():
    comps=sorted([c for _,g,c in rows if g>=20],reverse=True)
    rep=comps[REPL-1] if len(comps)>=REPL else comps[-1]
    for n,g,c in rows:
        sv[(n,y)]=max(0.0,(c-rep))*min(g,72)/72
# missing 2018 -> mean of 2017/2019
names=set(n for n,_ in sv)
for n in names:
    if (n,2017) in sv or (n,2019) in sv:
        sv[(n,2018)]=(sv.get((n,2017),0)+sv.get((n,2019),0))/2
DELTA=float(os.environ.get("DELTA",0.85)); H=int(os.environ.get("H",7))
def fv(n,s):  # value of seasons s+1..s+H
    return sum(DELTA**(k-1)*sv.get((n,s+k),0) for k in range(1,H+1))
json.dump({'note':'ok'},open('/tmp/x.json','w'))
# --- picks: draft year d -> first season d+1 ; FV from state "s=d"
pick=collections.defaultdict(list)
for d,p,n in D:
    if d+H<=2026 and d>=2008: pick[p].append(fv(n,d))
pm={p:np.mean(v) for p,v in pick.items()}
# --- players: state at end of season s (s<=2026-H), features rank-by-composite & age
st=[]
for y,rows in B.items():
    if y+H>2026 or y==2018: continue
    rk=sorted([(c,n,g) for n,g,c in rows],reverse=True)
    for i,(c,n,g) in enumerate(rk):
        age=A.get((n,y))
        if age is None: continue
        st.append((y,n,i+1,age,c,g,sv.get((n,y),0),sv.get((n,y-1),0),fv(n,y)))
print('states',len(st),'draft classes',sorted(set(d for d,_,_ in D if d+H<=2026))[:3])
import pickle; pickle.dump((sv,st,pm,pick),open('/tmp/bt.pkl','wb'))
for p in [1,2,3,4,5,8,10,12,15,20,25,30,40,50,60]:
    print(p, round(pm.get(p,0),2), len(pick[p]))
