#!/usr/bin/env node
/* ------------------------------------------------------------------
   Erstes Bild je Seite (Ladezeit, 01.11.2026)

   Problem: Das grosse Titelbild jeder Lektion setzt erst das Seitenmodul
   ein, und das laeuft erst, wenn super.so (React) die Seite uebernommen
   hat. Das Bild wurde also spaet angefragt und hielt den Seitenschleier
   0,4 bis 1,3 s laenger zu.

   Dieses Werkzeug ruft jede Kursseite live auf (Desktop 1000 px und Handy
   390 px), wartet, bis sie steht, und schreibt die Bilder im ersten Bild,
   die NICHT schon im HTML von super.so stehen, nach tools/erstbild.json.
   tools/teile.cjs baut die Liste in den Starter ein, der Starter laedt die
   Bilder dann sofort beim Seitenstart (und fuer die naechste Lektion vorab).

   Fehlt eine Seite oder ist ein Eintrag veraltet, passiert nichts
   Schlimmes: Das Bild wird dann wie bisher spaeter geladen. Auf jedem
   Geraet merkt sich der Seitenschleier ausserdem die echten Bilder je
   Seite (localStorage), die gehen der Liste vor.

   Nutzung:  node tools/erstbild.mjs [seitenliste.txt]
   Ohne Liste: alle Seiten aus der Seitenleiste + die Weiter-Ziele.
   Laeuft mit einer einzigen Chrome-Instanz (eigenes Profil), ~3 Minuten.
   ------------------------------------------------------------------ */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'tools', 'erstbild.json');
const SITE = 'https://gastronomie-ai-masterclass.super.site';
const IMG_BASE = 'https://tastyrob123.github.io/kurs-code/';
const PARALLEL = 4;
const VPS = { d: { w: 1000, h: 650, dpr: 2, mobile: false }, m: { w: 390, h: 844, dpr: 3, mobile: true } };

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const PORT = 9300 + Math.floor(Math.random() * 500);
const prof = fs.mkdtempSync(path.join(os.tmpdir(), 'erstbild-'));
const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${prof}`,
  '--no-first-run', '--no-default-browser-check', '--disable-extensions', '--mute-audio', 'about:blank',
], { stdio: 'ignore' });
const cleanup = () => { try { chrome.kill('SIGTERM'); } catch (e) {} try { fs.rmSync(prof, { recursive: true, force: true }); } catch (e) {} };
process.on('exit', cleanup); process.on('SIGINT', () => { cleanup(); process.exit(1); });

class CDP {
  constructor(url) { this.ws = new WebSocket(url); this.id = 0; this.cb = new Map(); this.h = []; }
  open() { return new Promise((res, rej) => { this.ws.onopen = res; this.ws.onerror = rej; this.ws.onmessage = (m) => this.msg(JSON.parse(m.data)); }); }
  msg(d) { if (d.id && this.cb.has(d.id)) { const { res, rej } = this.cb.get(d.id); this.cb.delete(d.id); d.error ? rej(new Error(JSON.stringify(d.error))) : res(d.result); } else this.h.forEach((f) => f(d)); }
  send(method, params = {}, sessionId) { const id = ++this.id; this.ws.send(JSON.stringify({ id, method, params, sessionId })); return new Promise((res, rej) => this.cb.set(id, { res, rej })); }
}

async function seitenliste(cdp) {
  const arg = process.argv[2];
  if (arg) return fs.readFileSync(arg, 'utf8').split('\n').map((s) => s.trim()).filter((s) => s.startsWith('/'));
  /* Alle Eintraege der Seitenleiste (aufgeklappt) + Weiter-Ziele aus kurs.js; Weiter-Knoepfe,
     die beim Durchlauf auftauchen, kommen unten noch dazu. */
  const set = new Set(['/']);
  const { targetId } = await cdp.send('Target.createTarget', { url: SITE + '/' });
  const { sessionId: s } = await cdp.send('Target.attachToTarget', { targetId, flatten: true });
  await sleep(4000);
  const r = await cdp.send('Runtime.evaluate', { awaitPromise: true, returnByValue: true, expression: `(async () => {
    for (let k = 0; k < 3; k++) { document.querySelectorAll('.super-navigation-menu__list.closed .super-navigation-menu__list-header').forEach((h) => h.click()); await new Promise((r) => setTimeout(r, 500)); }
    return [...document.querySelectorAll('.super-navigation-menu a[href], .super-sidebar a[href]')].map((a) => new URL(a.href).pathname);
  })()` }, s).catch(() => null);
  await cdp.send('Target.closeTarget', { targetId }).catch(() => {});
  for (const p of (r && r.result && r.result.value) || []) set.add(p.replace(/\/$/, '') || '/');
  const src = fs.readFileSync(path.join(ROOT, 'kurs.js'), 'utf8');
  for (const m of src.matchAll(/(?:href|next)\s*:\s*'(\/[a-z0-9\-/]+)'/g)) set.add(m[1]);
  return [...set].filter((p) => !/^\/(_next|styles|api)\b/.test(p)).sort();
}

const AUSWERTEN = `(() => {
  const vh = innerHeight, vw = innerWidth, out = [];
  const add = (u) => { if (u && !/^data:/.test(u) && out.indexOf(u) < 0) out.push(u); };
  document.querySelectorAll('main img').forEach((im) => {
    const b = im.getBoundingClientRect(); if (b.width < 8 || b.height < 8 || b.bottom <= 0 || b.top >= vh || b.left >= vw || b.right <= 0) return;
    const cs = getComputedStyle(im); if (cs.display === 'none' || cs.visibility === 'hidden') return;
    add(im.currentSrc || im.src);
  });
  document.querySelectorAll('main *').forEach((e, k) => {
    if (k > 4000 || e.tagName === 'IMG') return;
    const q = e.getBoundingClientRect(); if (q.width < 120 || q.height < 80 || q.bottom <= 0 || q.top >= vh) return;
    const m = (getComputedStyle(e).backgroundImage || '').match(/url\\(["']?([^"')]+)["']?\\)/); if (m) add(m[1]);
  });
  const n = document.querySelector('#ts-next');
  return { bilder: out, weiter: n ? n.getAttribute('href') : null, reveal: document.documentElement.classList.contains('ts-reveal') };
})()`;

async function eine(cdp, p, vp, html) {
  const { targetId } = await cdp.send('Target.createTarget', { url: 'about:blank' });
  const { sessionId: s } = await cdp.send('Target.attachToTarget', { targetId, flatten: true });
  try {
    await cdp.send('Page.enable', {}, s);
    await cdp.send('Emulation.setDeviceMetricsOverride', { width: vp.w, height: vp.h, deviceScaleFactor: vp.dpr, mobile: vp.mobile }, s);
    if (vp.mobile) await cdp.send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 }, s);
    await cdp.send('Page.navigate', { url: SITE + p }, s);
    let r = null;
    for (let i = 0; i < 60; i++) {
      await sleep(250);
      const x = await cdp.send('Runtime.evaluate', { expression: AUSWERTEN, returnByValue: true }, s).catch(() => null);
      if (x && x.result && x.result.value && x.result.value.reveal) { await sleep(700); r = (await cdp.send('Runtime.evaluate', { expression: AUSWERTEN, returnByValue: true }, s)).result.value; break; }
    }
    if (!r) return null;
    if (r.weiter && /^\/[a-z0-9\-/]+$/.test(r.weiter) && !seiten.includes(r.weiter)) { seiten.push(r.weiter); for (const k of Object.keys(VPS)) auftraege.push([r.weiter, k]); }
    /* nur Bilder, die nicht schon im super.so-HTML stehen (die laedt der Browser ohnehin sofort) */
    return r.bilder.filter((u) => { const pfad = u.replace(/^https?:\/\/[^/]+/, '').split('?')[0]; return !html.includes(pfad.slice(-40)); });
  } finally { await cdp.send('Target.closeTarget', { targetId }).catch(() => {}); }
}

let ws;
for (let i = 0; i < 50 && !ws; i++) { try { ws = (await (await fetch(`http://127.0.0.1:${PORT}/json/version`)).json()).webSocketDebuggerUrl; } catch (e) { await sleep(200); } }
const cdp = new CDP(ws); await cdp.open();
const seiten = await seitenliste(cdp);
const erg = { d: {}, m: {} };
let fertig = 0, leer = 0;
const auftraege = [];
for (const p of seiten) for (const k of Object.keys(VPS)) auftraege.push([p, k]);
const htmlCache = new Map();
async function arbeiter() {
  while (auftraege.length) {
    const [p, k] = auftraege.shift();
    if (!htmlCache.has(p)) htmlCache.set(p, fetch(SITE + p).then((r) => (r.ok ? r.text() : '')).catch(() => ''));
    const html = await htmlCache.get(p);
    if (!html) continue;
    const b = await eine(cdp, p, VPS[k], html).catch(() => null);
    fertig++;
    if (b && b.length) erg[k][p] = b.map((u) => (u.startsWith(IMG_BASE) ? '~' + u.slice(IMG_BASE.length) : u));
    else leer++;
    if (fertig % 20 === 0) console.log(`   ${fertig}/${seiten.length * 2}`);
  }
}
await Promise.all(Array.from({ length: PARALLEL }, arbeiter));
const sortiert = (o) => Object.fromEntries(Object.keys(o).sort().map((k) => [k, o[k]]));
fs.writeFileSync(OUT, JSON.stringify({ stand: new Date().toISOString().slice(0, 10), basis: IMG_BASE, d: sortiert(erg.d), m: sortiert(erg.m) }, null, 1) + '\n');
console.log(`✓ tools/erstbild.json: ${Object.keys(erg.d).length} Seiten Desktop, ${Object.keys(erg.m).length} Handy (${seiten.length} geprueft, ${leer} ohne eigenes Erstbild)`);
cleanup(); process.exit(0);
