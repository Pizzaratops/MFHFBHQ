// Prüfscript (Node): node ghost-screen/check.js
// Misst je Stufe den Abstand zum nächsten Verteidiger bei Ballannahme und Wurf
// und meldet Zusammenstöße (Spieler näher als 0,6 m).
require('./engine.js');
require('./plays.js');
const GS = globalThis.GS;
let problems = 0;
for (const play of GS.PLAYS) {
  play.stages.forEach((st, si) => {
    const c = GS.compile(st);
    const rows = [];
    c.ballEv.forEach(e => {
      if (e.pass) {
        const fr = c.frameAt(e.t1);
        const s = c.hasD ? GS.separation(fr, e.to) : Infinity;
        // Pass-Linie frei? kleinster Abstand eines Verteidigers zur Ballbahn
        let lane = Infinity;
        for (let t = e.t; t <= e.t1; t += 0.03) { const f = c.frameAt(t); if (!f.ball.p) continue; for (const k in f.d) lane = Math.min(lane, GS.hyp(f.ball.p, f.d[k])); }
        rows.push(`  Pass ${e.from}→${e.to} @${e.t.toFixed(2)}–${e.t1.toFixed(2)}  frei ${s.toFixed(2)} m  Passweg ${lane.toFixed(2)} m${e.lob ? ' (Lob)' : ''}`);
        if (c.hasD && lane < 0.6 && !e.lob) { rows.push('   ⚠ Verteidiger in der Passbahn'); problems++; }
      }
      if (e.shot) {
        const prev = c.ballEv.filter(x => x.pass && x.t < e.t).pop();
        if (prev && prev.t1 > e.t - 0.05) { rows.push('   ⚠ Wurf bevor der Pass ankommt'); problems++; }
        const fr = c.frameAt(e.t);
        const s = c.hasD ? GS.separation(fr, e.shot) : Infinity;
        rows.push(`  Wurf ${e.shot} (${e.kind}) @${e.t.toFixed(2)}  frei ${s.toFixed(2)} m`);
        if (c.hasD && s < (e.kind === 'layup' ? 1.0 : 1.5)) { rows.push('   ⚠ Wurf zu eng verteidigt'); problems++; }
      }
    });
    // Zusammenstöße
    const hits = new Set();
    c.frames.forEach(fr => {
      const all = Object.entries(fr.o).map(([k, p]) => [k, p]).concat(Object.entries(fr.d));
      for (let i = 0; i < all.length; i++) for (let j = i + 1; j < all.length; j++) {
        const dd = GS.hyp(all[i][1], all[j][1]);
        if (dd < 0.6) hits.add(`${all[i][0]}/${all[j][0]} @${fr.t.toFixed(1)} (${dd.toFixed(2)})`);
      }
    });
    console.log(`${play.name} · ${si + 1} ${st.tab}  (${c.dur.toFixed(1)} s)`);
    rows.forEach(r => console.log(r));
    if (hits.size) { const arr = [...hits]; console.log('   Kontakt: ' + arr.slice(0, 6).join(', ') + (arr.length > 6 ? ` … (+${arr.length - 6})` : '')); }
  });
}
console.log(problems ? `\n${problems} Warnungen` : '\nKeine Warnungen');
