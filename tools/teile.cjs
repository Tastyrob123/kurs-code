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
const globaleNamen = new Set();
let prevEnd = 0;
let idx = 0;

/* Jeder Block laeuft spaeter in einer Funktion (damit Kern-Stuecke und Seitenteile in der
   Original-Reihenfolge verzahnt laufen koennen). Oberste var-/function-Deklarationen werden
   dafuer zu window-Eigenschaften. let/const/class oder var in obersten if/for-Bloecken:
   Abbruch -> deploy.sh baut ein Paket wie frueher. */
function funktionsTauglich(st) {
  const start = st.start, end = st.end;
  if (st.type === 'VariableDeclaration') {
    if (st.kind !== 'var') throw new Error('oberstes ' + st.kind + ' in Zeile ' + src.slice(0, start).split('\n').length);
    return st.declarations.map((d) => {
      if (d.id.type !== 'Identifier') throw new Error('var mit Muster in Zeile ' + src.slice(0, start).split('\n').length);
      globaleNamen.add(d.id.name);
      return d.init ? 'window[' + JSON.stringify(d.id.name) + ']=' + src.slice(d.init.start, d.init.end) + ';' : '';
    }).join('\n');
  }
  if (st.type === 'FunctionDeclaration') {
    globaleNamen.add(st.id.name);
    return 'window[' + JSON.stringify(st.id.name) + ']=' + src.slice(start, end) + ';';
  }
  if (st.type === 'ClassDeclaration') throw new Error('oberste class in Zeile ' + src.slice(0, start).split('\n').length);
  /* var in obersten Steuer-Bloecken (if/for/try ...) ausserhalb von Funktionen */
  let tief = false;
  walk.recursive(st, null, {
    Function() {},
    VariableDeclaration(n, state, c) { if (n.kind === 'var') tief = true; for (const d of n.declarations) if (d.init) c(d.init, state); },
  });
  if (tief) throw new Error('var in oberstem Steuer-Block, Zeile ' + src.slice(0, start).split('\n').length);
  return src.slice(start, end);
}

for (const st of ast.body) {
  const code = src.slice(prevEnd, st.end);   /* inkl. vorangehender Kommentare/Leerraum */
  const fcode = funktionsTauglich(st);
  prevEnd = st.end;
  const pos = idx++;
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
  /* window-Namen, die der Block setzt bzw. liest (fuer die Teilen-Sicherung unten) */
  const setzt = new Set(), liest = new Set();
  walk.full(st, (n) => {
    if (n.type === 'MemberExpression' && n.object.type === 'Identifier' && n.object.name === 'window') {
      const k = n.computed ? (n.property.type === 'Literal' ? n.property.value : null) : n.property.name;
      if (k) liest.add(k);
    }
    if (n.type === 'AssignmentExpression' && n.left.type === 'MemberExpression' && n.left.object.type === 'Identifier' && n.left.object.name === 'window') {
      const k = n.left.computed ? (n.left.property.type === 'Literal' ? n.left.property.value : null) : n.left.property.name;
      if (k) setzt.add(k);
    }
    if (n.type === 'Identifier') liest.add(n.name);
  });
  blocks.push({ code, fcode, pos, page, vorab, gates: uniq, setzt, liest, line: src.slice(0, st.start).split('\n').length });
}

/* Teilen-Sicherung (01.11.2026, Fund Modul 2: Kopf-Styles von L2.0 fehlten auf anderen Seiten):
   Setzt ein seitengebundener Block einen window-Namen, den ein Block mit anderen Seiten-
   Pruefungen (oder der Kern) benutzt, bleibt er im Kern und laeuft wie frueher ueberall. */
const gateKey = (b) => b.gates.map((g) => '/' + g.pattern + '/' + g.flags).sort().join(' ');
let geteilt = 0;
for (let runde = 0; runde < 5; runde++) {
  let neu = 0;
  for (const b of blocks) {
    if (!b.page) continue;
    const k = gateKey(b);
    for (const name of b.setzt) {
      if (blocks.some((o) => o !== b && (!o.page || gateKey(o) !== k) && o.liest.has(name))) { b.page = false; neu++; geteilt++; break; }
    }
  }
  if (!neu) break;
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
const eintrag = (pos, code) => '[' + pos + ',function(){\n' + code + '\n}]';
gl.forEach((g, i) => {
  roh['t' + i] = '(window.__tsQ=window.__tsQ||[]).push([' + g.blocks.map((b) => eintrag(b.pos, b.fcode)).join(',\n') + ']);\n';
});
/* Kern = alles Seitenuebergreifende (ohne Vorab-Bloecke), als Stuecke zwischen den Seitenbloecken */
const stuecke = [];
let aktuell = null;
for (const b of blocks) {
  if (b.vorab) continue;
  if (b.page) { aktuell = null; continue; }
  if (!aktuell) { aktuell = { pos: b.pos, code: [] }; stuecke.push(aktuell); }
  aktuell.code.push(b.fcode);
}
/* Kern in mehreren Dateien (01.11.2026): je Kern-Stueck eine Datei mit Inhalts-Hash. Nach einem
   Ausrollen laedt der Browser nur die Stuecke neu, die sich geaendert haben (bisher jedes Mal den
   ganzen Kern, 556 KB). Sehr kleine Stuecke reisen mit dem naechsten mit. */
const namen = JSON.stringify([...globaleNamen]);
const kernDateien = [];
let sammel = [];
stuecke.forEach((k, i) => {
  sammel.push(k);
  const laenge = sammel.reduce((a, x) => a + x.code.join('\n').length, 0);
  if (laenge >= 6000 || i === stuecke.length - 1) { kernDateien.push(sammel); sammel = []; }
});
kernDateien.forEach((gruppe, i) => {
  roh['kern' + i] = (i === 0 ? namen + '.forEach(function(n){ if(!(n in window)) window[n]=void 0; });\n' : '')
    + '(window.__tsQ=window.__tsQ||[]).push([' + gruppe.map((k) => eintrag(k.pos, k.code.join('\n'))).join(',\n') + ']);\n';
});
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
const kernFiles = [];
let kernBytes = 0;
kernDateien.forEach((g, i) => {
  const code = min['kern' + i];
  const kernHash = crypto.createHash('sha1').update(code).digest('hex').slice(0, 10);
  const kernFile = 'teile/kern-' + kernHash + '.js';
  used.add('kern-' + kernHash + '.js');
  if (!PRUEFEN) fs.writeFileSync(path.join(ROOT, kernFile), code);
  kernFiles.push(kernFile); kernBytes += code.length;
});
if (!min.starter.includes('__TS_TEILE__')) throw new Error('Lader-Platzhalter fehlt im Starter');
/* Erstes Bild je Seite (tools/erstbild.json, erzeugt von tools/erstbild.mjs): der Starter laedt diese
   Bilder sofort beim Seitenstart. Fehlt die Datei, laeuft alles wie vorher. */
let erstbild = null;
try { const e = JSON.parse(fs.readFileSync(path.join(__dirname, 'erstbild.json'), 'utf8')); erstbild = { d: e.d || {}, m: e.m || {} }; } catch (e) {}
const starterMin = min.starter.replace('__TS_TEILE__', JSON.stringify(Object.assign({ k: kernFiles, t: manifest.map((m) => [m.re, m.f]) }, erstbild ? { b: erstbild } : {})));
if (PRUEFEN) {
  /* Nur pruefen: passt das ausgelieferte kurs.min.js (+ Kern/Teile) zu kurs.js? Nichts schreiben. */
  let alt = ''; try { alt = fs.readFileSync(path.join(ROOT, 'kurs.min.js'), 'utf8'); } catch (e) {}
  const fehlt = manifest.filter((m) => !fs.existsSync(path.join(ROOT, m.f))).length + kernFiles.filter((f) => !fs.existsSync(path.join(ROOT, f))).length;
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
console.log('   ✓ Starter kurs.min.js ' + kb(starterMin.length) + ' · Kern ' + kb(kernBytes) + ' (' + stuecke.length + ' Stuecke in ' + kernFiles.length + ' Dateien) · ' + manifest.length + ' Seitenteile zusammen ' + kb(teilBytes)
  + ' · ' + blocks.filter((b) => b.page).length + '/' + blocks.length + ' Bloecke seitengebunden' + (geteilt ? ' (' + geteilt + ' geteilt -> Kern)' : ''));
