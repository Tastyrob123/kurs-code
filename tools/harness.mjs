#!/usr/bin/env node
/* Harness: baut den super.so-DOM unter dem ECHTEN Slug nach und laedt die LOKALE kurs.js/kurs.css.
   Damit laesst sich ein Seitenmodul testen, BEVOR es deployt wird.
   Nutzung:  node tools/harness.mjs <slug> [port]
   Dann:     http://localhost:<port>/<slug>
*/
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const slug = process.argv[2] || '';
const port = Number(process.argv[3] || 8899);

const page = (slug) => `<!doctype html><html lang="de"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Harness ${slug}</title>
<link rel="stylesheet" href="/kurs.css">
<style>
  html,body{margin:0;padding:0;background:#05060b;color:#fff;
    font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif}
  .super-content{max-width:none;margin:0 auto;padding-bottom:120px}
  .notion-root{min-height:2px}
</style></head>
<body class="super-body page__${slug}">
  <div class="super-content">
    <header class="notion-header page"><h1 class="notion-header__title">${slug}</h1></header>
    <div class="notion-root"></div>
  </div>
  <script src="/kurs.js"></script>
</body></html>`;

const types = { '.js': 'application/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.json': 'application/json' };

http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  const file = path.join(ROOT, url.replace(/^\/+/, ''));
  if (url !== '/' && fs.existsSync(file) && fs.statSync(file).isFile()) {
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream',
      'Cache-Control': 'no-store' });
    let buf = fs.readFileSync(file);
    // Live-Asset-Basis auf den lokalen Stand umbiegen, damit noch nicht deployte
    // Bilder/Platzhalter im Harness sichtbar werden.
    if (/\.(js|css)$/.test(file)) {
      buf = Buffer.from(String(buf).replaceAll('https://tastyrob123.github.io/kurs-code/', '/'));
    }
    return res.end(buf);
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
  res.end(page(url.replace(/^\/+|\/+$/g, '') || slug));
}).listen(port, () => console.log(`harness http://localhost:${port}/${slug}`));
