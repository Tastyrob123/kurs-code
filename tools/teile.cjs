/* ------------------------------------------------------------------
   kurs.js -> Kern + Seitenteile (Ladezeit, 01.11.2026)

   Problem: kurs.min.js enthielt den Code ALLER Seiten (2,6 MB). Jede Seite
   musste alles laden, parsen und ausfuehren, bevor der Inhalt erscheint.

   Loesung beim Bauen (laeuft in deploy.sh, niemand muss anders schreiben):
   Jeder oberste Block in kurs.js wird gelesen. Ist er eindeutig an bestimmte
   Seiten gebunden (er enthaelt 1..MAX Adress-Pruefungen der Form
   /\/slug\/?$/ und sonst keine Adress-Muster), wandert er in ein Seitenteil
   teile/<hash>.js. Alles andere bleibt im Kern (kurs.min.js), in der
   Original-Reihenfolge. Der Kern beginnt mit einem kleinen Lader, der fuer
   die aktuelle Adresse (und bei jedem Seitenwechsel) die passenden Teile
   nachlaedt, in Original-Reihenfolge.

   Ausgabe:  kurs.min.js (Kern, minifiziert)  +  teile/*.js (minifiziert)
   Nutzung:  node tools/teile.cjs            (im Repo-Wurzelordner)
   Ohne Erfolg (Parserfehler o. ae.) endet das Skript mit Code 1, deploy.sh
   faellt dann auf das alte Einzelpaket zurueck.
   ------------------------------------------------------------------ */
'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');
const acorn = require('./vendor/acorn.js');
const walk = require('./vendor/acorn-walk.js');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'kurs.js');
const OUTDIR = path.join(ROOT, 'teile');
const MAX_GATES = 30;       /* mehr Adress-Pruefungen -> seitenuebergreifend -> Kern */

/* Bloecke, die trotz Adress-Pruefung im Kern bleiben muessen (seitenuebergreifend). Erkennung per Text. */
/* Bloecke, die SOFORT im Starter laufen (vor der React-Uebernahme). Nur solche, die das
   Seiten-HTML nicht umbauen (nur Attribute von Videos), sonst wirft React Fehler #418. */
const VORAB = ['window.__tsMO', 'window.__tsLazyVid'];
const IMMER_KERN = [
  'window.__tsNext',        /* globaler Weiter-Knopf (PAGES-Liste ueber alle Seiten) */
  'window.__tsVeil',        /* Seitenschleier */
  'window.__tsMO',
  'window.__tsLazyVid',
];

const src = fs.readFileSync(SRC, 'utf8');
const ast = acorn.parse(src, { ecmaVersion: 'latest', sourceType: 'script', allowHashBang: true });

function isPathLike(re) {
  /* Muster, die eine Adresse pruefen: beginnen mit \/ oder ^\/ oder (?: ... und enthalten Buchstaben */
  return /^(\^)?(\\\/|\(\?:)/.test(re.pattern) && /[a-z]{3}/i.test(re.pattern);
}
function isGate(re) {
  /* Seiten-Pruefung: Adress-Muster, das am Ende verankert ist ($) */
  return isPathLike(re) && /\$\)?$/.test(re.pattern);
}

/* Kommentare vor einem Block gehoeren zum Block (nur fuer Lesbarkeit der Teile egal, Kern minifiziert eh) */
const blocks = [];
let prevEnd = 0;
for (const st of ast.body) {
  const code = src.slice(prevEnd, st.end);   /* inkl. vorangehender Kommentare/Leerraum */
  prevEnd = st.end;
  const gates = [];
  let otherPath = 0;
  walk.full(st, (n) => {
    if (n.type === 'Literal' && n.regex) {
      if (isGate(n.regex)) gates.push(n.regex);
      else if (isPathLike(n.regex)) otherPath++;
    }
  });
  const uniq = [];
  const seen = new Set();
  for (const g of gates) { const k = g.pattern + '/' + g.flags; if (!seen.has(k)) { seen.add(k); uniq.push(g); } }
  const pinned = IMMER_KERN.some((m) => code.includes(m + '=') || code.includes(m + ' =') || code.includes('if(' + m + ')') || code.includes('if (' + m + ')'));
  const vorab = VORAB.some((m) => code.includes(m + '=') || code.includes(m + ' =') || code.includes('if(' + m + ')') || code.includes('if (' + m + ')'));
  const page = !vorab && st.type === 'ExpressionStatement' && !pinned && otherPath === 0 && uniq.length >= 1 && uniq.length <= MAX_GATES;
  blocks.push({ code, page, vorab, gates: uniq, line: src.slice(0, st.start).split('\n').length });
}
const rest = src.slice(prevEnd);

/* Teile: aufeinanderfolgende? Nein -- gruppiert nach identischem Gate-Satz, Reihenfolge = erstes Vorkommen. */
const groups = new Map();
for (const b of blocks) {
  if (!b.page) continue;
  const key = b.gates.map((g) => '/' + g.pattern + '/' + g.flags).sort().join(' ');
  if (!groups.has(key)) groups.set(key, { gates: b.gates, blocks: [], first: b.line });
  groups.get(key).blocks.push(b);
}

/* Alle Dateien in EINEM esbuild-Lauf minifizieren (ein Aufruf je Datei dauerte 40 s) */
function minifyAll(map) {
  const os = require('os');
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'ts_teile_'));
  const ins = [];
  for (const [name, code] of Object.entries(map)) { const f = path.join(tmp, name + '.js'); fs.writeFileSync(f, code); ins.push(f); }
  execFileSync('npx', ['--yes', 'esbuild', ...ins, '--minify', '--target=es2015', '--outdir=' + path.join(tmp, 'out'), '--log-level=error'], { stdio: ['ignore', 'ignore', 'inherit'] });
  const res = {};
  for (const name of Object.keys(map)) res[name] = fs.readFileSync(path.join(tmp, 'out', name + '.js'), 'utf8');
  fs.rmSync(tmp, { recursive: true, force: true });
  return res;
}

/* Teil-Dateien schreiben (Name = Inhalts-Hash -> nie veraltet im Cache) */
fs.mkdirSync(OUTDIR, { recursive: true });
const roh = {};
const gl = [...groups.values()];
gl.forEach((g, i) => {
  /* Ereignis-Bruecke: Bloecke, die auf DOMContentLoaded/load warten, laufen auch, wenn das Teil spaeter kommt */
  roh['t' + i] = 'window.__tsTeilA&&window.__tsTeilA();try{\n' + g.blocks.map((b) => b.code).join('\n') + '\n}finally{window.__tsTeilE&&window.__tsTeilE();}\n';
});
/* Kern = alles Seitenuebergreifende (ohne Vorab-Bloecke) */
let kern = '';
for (const b of blocks) if (!b.page && !b.vorab) kern += b.code + '\n';
kern += rest;
/* Kern laeuft nach DOMContentLoaded -> Ereignis-Bruecke wie bei den Teilen. Ohne try-Block,
   damit oberste var-Deklarationen (TSISL_* u. a.) global bleiben. */
roh.kern = 'window.__tsTeilA&&window.__tsTeilA();\n' + kern + '\n;window.__tsTeilE&&window.__tsTeilE();\n';
/* Starter = kurs.min.js: Vorab-Bloecke + Lader. Manifest wird nach dem Minifizieren eingesetzt. */
let starter = '';
for (const b of blocks) if (b.vorab) starter += b.code + '\n';
starter += fs.readFileSync(path.join(__dirname, 'teile-lader.js'), 'utf8') + '\n';
roh.starter = starter;
const min = minifyAll(roh);
const manifest = [];
const used = new Set();
let teilBytes = 0;
const PRUEFEN = process.argv.includes('--pruefen');
gl.forEach((g, i) => {
  const code = min['t' + i];
  const hash = crypto.createHash('sha1').update(code).digest('hex').slice(0, 10);
  const file = 'teile/' + hash + '.js';
  if (!PRUEFEN) fs.writeFileSync(path.join(ROOT, file), code);
  used.add(hash + '.js');
  teilBytes += code.length;
  manifest.push({ first: g.first, re: g.gates.map((x) => [x.pattern, x.flags]), f: file });
});
manifest.sort((a, b) => a.first - b.first);
const kernHash = crypto.createHash('sha1').update(min.kern).digest('hex').slice(0, 10);
const kernFile = 'teile/kern-' + kernHash + '.js';
used.add('kern-' + kernHash + '.js');
if (!PRUEFEN) fs.writeFileSync(path.join(ROOT, kernFile), min.kern);
if (!min.starter.includes('__TS_TEILE__')) throw new Error('Lader-Platzhalter fehlt im Starter');
const starterMin = min.starter.replace('__TS_TEILE__', JSON.stringify({ k: kernFile, t: manifest.map((m) => [m.re, m.f]) }));
if (PRUEFEN) {
  /* Nur pruefen: passt das ausgelieferte kurs.min.js (+ Kern/Teile) zu kurs.js? Nichts schreiben. */
  let alt = ''; try { alt = fs.readFileSync(path.join(ROOT, 'kurs.min.js'), 'utf8'); } catch (e) {}
  const fehlt = manifest.filter((m) => !fs.existsSync(path.join(ROOT, m.f))).length + (fs.existsSync(path.join(ROOT, kernFile)) ? 0 : 1);
  process.exit(alt === starterMin && fehlt === 0 ? 0 : 3);
}
fs.writeFileSync(path.join(ROOT, 'kurs.min.js'), starterMin);

/* Alte Teile entfernen, die keiner mehr braucht -- ABER nur aeltere als 14 Tage
   (gecachte Seiten/alter ?v= koennen sie noch anfragen). */
const now = Date.now();
for (const f of fs.readdirSync(OUTDIR)) {
  if (used.has(f) || !f.endsWith('.js')) continue;
  const st = fs.statSync(path.join(OUTDIR, f));
  if (now - st.mtimeMs > 14 * 864e5) fs.unlinkSync(path.join(OUTDIR, f));
}

const kb = (n) => Math.round(n / 1024) + ' KB';
console.log('   ✓ Starter kurs.min.js ' + kb(starterMin.length) + ' · Kern ' + kb(min.kern.length) + ' · ' + manifest.length + ' Seitenteile zusammen ' + kb(teilBytes)
  + ' · ' + blocks.filter((b) => b.page).length + '/' + blocks.length + ' Bloecke seitengebunden');
