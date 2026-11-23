import pickle, numpy as np, collections, json
from sklearn.ensemble import GradientBoostingRegressor
sv,st,pm,pick=pickle.load(open('/tmp/bt.pkl','rb'))
X=np.array([[s[6],s[7],s[3],s[2]] for s in st]); Y=np.array([s[8] for s in st]); yrs=np.array([s[0] for s in st])
pred=np.zeros(len(Y))
for y in sorted(set(yrs)):  # leave-one-season-out
    m=yrs!=y
    g=GradientBoostingRegressor(n_estimators=200,max_depth=3,learning_rate=0.05,subsample=0.8,random_state=0).fit(X[m],Y[m])
    pred[~m]=g.predict(X[~m])
print('R2 oos',1-((Y-pred)**2).sum()/((Y-Y.mean())**2).sum())
# smooth pick curve: fit a*exp(-b*(p-1))+c on means, weighted
ps=np.arange(1,61); pv=np.array([pm.get(p,0) for p in ps])
from scipy.optimize import curve_fit
f=lambda p,a,b,c: a*np.exp(-b*(p-1))+c
(a,b,c),_=curve_fit(f,ps,pv,p0=(10,0.1,0.5),maxfev=20000)
ps_s=f(ps,a,b,c); print('pick fit a,b,c',a,b,c)
# also nonparam check: bucket means
for lo,hi in [(1,3),(4,6),(7,10),(11,14),(15,20),(21,30),(31,45),(46,60)]:
    v=[x for p in range(lo,hi+1) for x in pick[p]]; print(f'NBA {lo}-{hi}: mean FV {np.mean(v):.2f}  fit {np.mean(ps_s[lo-1:hi]):.2f}  hit>5: {np.mean(np.array(v)>5):.2f}')
# synthetic dynasty rank per season: veterans pred + draft class (pick smoothed)
real=collections.defaultdict(list); pick_rank=collections.defaultdict(list)
for y in sorted(set(yrs)):
    m=yrs==y
    pool=[(pred[i],Y[i],'v',None) for i in np.where(m)[0]]
    pool+=[(ps_s[p-1],None,'p',p) for p in ps]
    pool.sort(key=lambda t:-t[0])
    for r,(pr,real_v,kind,p) in enumerate(pool,1):
        if kind=='v': real[r].append(real_v)
        else: pick_rank[p].append(r)
ranks=np.arange(1,401)
rv=np.array([np.mean(real[r]) if real[r] else 0 for r in ranks])
# smooth realized curve by rank with rolling window
def smooth(v,w):
    out=[]
    for i in range(len(v)):
        lo=max(0,i-w(i)); hi=min(len(v),i+w(i)+1); out.append(np.mean(v[lo:hi]))
    return np.array(out)
rs=smooth(rv,lambda i:max(1,int(i*0.15)))
json.dump({'rank_value':rs.tolist(),'pick_fv':ps_s.tolist(),'pick_rank':{int(p):float(np.median(v)) for p,v in pick_rank.items()}},open('/tmp/bt2.json','w'))
TV=json.load(open('/tmp/tv.json'))
print('rank  realizedFV  scaled(#1=1590)  TradeTable')
k=1590/rs[0]
for r in [1,2,3,5,8,10,15,20,25,30,40,50,60,75,83,100,125,150,200,250,300]:
    print(r, round(rs[r-1],2), round(rs[r-1]*k), TV[str(r)])
print('NBA pick -> synthetic dynasty rank (median)')
for p in [1,2,3,4,5,6,8,10,12,14,15,17,20,25,30,35,40,50,60]:
    print(p, np.median(pick_rank[p]))
