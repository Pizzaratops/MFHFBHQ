exec(open('tr.py').read().split("nop=lambda")[0])
import numpy as np
def ra(v,t,G=1590): return 0 if v<=0 else v*(0.1+0.076*(v/G)**8+0.24*min(v/t,1.5)**1.3)
def solve(d,t):
    lo,hi=0,max(t,1)
    while ra(hi,t)<d: hi*=2
    for _ in range(50):
        m=(lo+hi)/2
        if ra(m,t)<d: lo=m
        else: hi=m
    return lo
def eff(A,B):
    sA,sB=sum(A),sum(B); t=max(A+B); rA=sum(ra(v,t) for v in A); rB=sum(ra(v,t) for v in B)
    if rA>=rB: return sB+solve(rA-rB,t), sB
    return sA, sA+solve(rB-rA,t)
for kind in ['matt','real','blend']:
  for cons in ['geo','ktceff','none']:
    for ua in [True,False]:
        f=curve(kind); errs=[]
        for t in players:
            if any(x['isPick'] for x in t['sideA']+t['sideB']): continue
            d=t['date']
            A=side_val(t['sideA'],f,None,None,d,ua); B=side_val(t['sideB'],f,None,None,d,ua)
            if cons=='ktceff': a,b=eff(A,B)
            else: a=total(A,cons,0,0); b=total(B,cons,0,0)
            errs.append(abs(np.log(a/b)))
        print(kind,cons,ua,round(np.mean(errs),3),round(np.median(errs),3),[round(np.exp(e),2) for e in errs])
print('--- fit KTC strength c (blend, no age)')
f=curve('blend')
for c in [0.0,0.04,0.08,0.12,0.16,0.20,0.24]:
    def ra(v,t,G=1590,c=c): return 0 if v<=0 else v*(0.1+0.076*(v/G)**8+c*min(v/t,1.5)**1.3)
    globals()['ra']=ra
    errs=[]
    for t in players:
        if any(x['isPick'] for x in t['sideA']+t['sideB']): continue
        A=side_val(t['sideA'],f,None,None,t['date'],False); B=side_val(t['sideB'],f,None,None,t['date'],False)
        a,b=eff(A,B); errs.append(abs(np.log(a/b)))
    e4=sorted(errs)[:4]
    print(c, round(np.mean(errs),3), 'ohne Ausreißer', round(np.mean([e for e in errs if e<0.8]),3), [round(np.exp(e),2) for e in errs])
for g in [1.0,0.9,0.8,0.7]:
    errs=[]
    for t in players:
        if any(x['isPick'] for x in t['sideA']+t['sideB']): continue
        A=sorted(side_val(t['sideA'],f,None,None,t['date'],False),reverse=True); B=sorted(side_val(t['sideB'],f,None,None,t['date'],False),reverse=True)
        a=sum(v*g**i for i,v in enumerate(A)); b=sum(v*g**i for i,v in enumerate(B)); errs.append(abs(np.log(a/b)))
    print('geo',g, round(np.mean(errs),3),'ohne Ausreißer', round(np.mean([e for e in errs if e<0.8]),3))
