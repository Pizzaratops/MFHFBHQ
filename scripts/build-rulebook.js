// Baut leagues/<liga>/data/rulebook.js aus dem Markdown eines Claude Docs (## = Abschnitt).
// Aufruf: node scripts/build-rulebook.js regelwerk.md leagues/<liga>/data/rulebook.js "<Titel>" "<Doc-URL>"
// Braucht das npm-Paket marked.
// node build-rulebook.js <md> <out.js> <title> <docUrl>
const fs = require('fs');
const { marked } = require('marked');
const [md, out, title, url] = process.argv.slice(2);
const secs = fs.readFileSync(md, 'utf8').split(/^(?=## )/m).map(s => s.trim()).filter(Boolean);
const RB = { title, updated: new Date().toISOString().slice(0, 10), sections: secs.map(s => {
  const [h, ...rest] = s.split('\n');
  return { title: h.replace(/^##\s*/, ''), html: marked.parse(rest.join('\n').trim()).trim() };
}) };
fs.writeFileSync(out, `// ============================================================
//  RULEBOOK — ${title} (angezeigt auf "Regeln & Erklärung")
// ============================================================
//  Quelle: Claude Doc "${title}"
//  ${url}
//  Generiert aus Markdown; bei Änderungen am Doc neu erzeugen.
// ============================================================

const RULEBOOK = ${JSON.stringify(RB, null, 1)};
`);
console.log(RB.sections.length, 'Abschnitte');
