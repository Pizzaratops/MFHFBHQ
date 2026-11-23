import json, numpy as np
BT=json.load(open('/tmp/bt2.json')); TV={int(k):v for k,v in json.load(open('/tmp/tv.json')).items()}
RV=np.array(BT['rank_value']); RV=RV/RV[0]*1590
blend=lambda r:(TV.get(r,0)*RV[min(r,400)-1])**.5
pr={int(k):v for k,v in BT['pick_rank'].items()}
# smooth pick->rank: fit log-linear
ks=np.arange(1,61); rr=np.array([pr[k] for k in ks]); c=np.polyfit(np.log(ks),np.log(rr),2)
prs=lambda n: float(np.exp(np.polyval(c,np.log(n))))
nba=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,27,28,34,35,37,52]
slot=[1,2,3,4,5,6,7,8,9,10,11,12,14,15,17,18,19,23,24,25,26,29,30,31,33,35,38,39,40,45,47]
s2n=lambda s: float(np.interp(s,slot,nba))
out={}
for s in range(1,49):
    n=s2n(s); r=prs(n); v=blend(int(round(r))); out[s]=(n,r,v)
for s in [1,2,3,4,5,6,8,10,12,13,16,18,20,24,28,32,36,40,44,48]: print(s, 'NBA≈%.1f'%out[s][0],'rank≈%.0f'%out[s][1],'value %.0f'%out[s][2], 'matt %.0f'%TV[int(round(out[s][1]))])
for rnd in range(4):
    for nm,(a,b) in [('early',(1,4)),('mid',(5,8)),('late',(9,12))]:
        vs=[out[rnd*12+i][2] for i in range(a,b+1)]
        print(f'R{rnd+1} {nm}: {np.mean(vs):.0f}', end='  ')
    print()
print('avg R1', np.mean([out[i][2] for i in range(1,13)]))
json.dump({s:out[s][2] for s in out},open('/tmp/slotval.json','w'))
print('Herro rank60 blend', blend(60), ' rank30',blend(30),' rank83',blend(83))
