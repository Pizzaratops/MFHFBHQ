import re, json, gzip, csv, glob, unicodedata, math, collections
R='/home/claude/mfhfbhq/'
def norm(n):
    n=unicodedata.normalize('NFD',n); n=''.join(c for c in n if unicodedata.category(c)!='Mn')
    n=re.sub(r"[.'’]","",n.lower()); n=re.sub(r"\b(jr|sr|ii|iii|iv)\b","",n)
    return re.sub(r"\s+"," ",n).strip()
def bbm():
    out={}
    for f in sorted(glob.glob(R+'sports/nba/data/last-season-stats-*.js')):
        y=int(f[-10:-6])+1  # end year
        txt=open(f).read()
        rows=[]
        for m in re.finditer(r'\{ name: "([^"]+)".*?games: (\d+).*?composite: (-?[\d.]+)',txt):
            rows.append((norm(m.group(1)),int(m.group(2)),float(m.group(3))))
        out[y]=rows
    return out
def ages():
    a={}
    with gzip.open(R+'sports/cbb/scripts/model/cache/nba-advanced.csv.gz','rt') as f:
        for r in csv.DictReader(f):
            try: a[(norm(r['player']),int(r['season']))]=float(r['age'])
            except: pass
    return a
def draft():
    d=[]
    with gzip.open(R+'sports/cbb/scripts/model/cache/nba-draft-history.csv.gz','rt') as f:
        for r in csv.DictReader(f):
            d.append((int(r['season']),int(float(r['overall_pick'])),norm(r['player'])))
    return d
