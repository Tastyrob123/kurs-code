// Sniff: alle api/v3-Responses beim Seitenload abgreifen, collection-Schemas einsammeln
const target = process.argv[2];
const list = await (await fetch("http://127.0.0.1:9333/json/list")).json();
const page = list.find(t => t.type === "page");
const ws = new WebSocket(page.webSocketDebuggerUrl);
let id = 0; const pend = new Map(); const responses = [];
function send(m, p){ return new Promise((res, rej) => { const i = ++id; pend.set(i, {res, rej}); ws.send(JSON.stringify({id: i, method: m, params: p || {}})); }); }
ws.onmessage = (ev) => {
  const m = JSON.parse(ev.data);
  if (m.id && pend.has(m.id)) { const p = pend.get(m.id); pend.delete(m.id); m.error ? p.rej(new Error(JSON.stringify(m.error))) : p.res(m.result); return; }
  if (m.method === "Network.responseReceived" && /api\/v3/.test(m.params.response.url)) {
    responses.push({reqId: m.params.requestId, url: m.params.response.url});
  }
};
await new Promise(r => ws.onopen = r);
await send("Network.enable");
await send("Page.enable");
await send("Page.navigate", {url: target});
await new Promise(r => setTimeout(r, 15000));  // Laden + XHRs abwarten

const schemas = {};
for (const resp of responses) {
  try {
    const body = await send("Network.getResponseBody", {requestId: resp.reqId});
    const j = JSON.parse(body.body);
    const colls = (j.recordMap && j.recordMap.collection) || {};
    for (const [cid, wrap] of Object.entries(colls)) {
      const v = wrap.value && (wrap.value.value || wrap.value);
      if (v && v.schema) schemas[cid] = v.schema;
    }
  } catch(e) {}
}
console.log("URLS:", responses.length, "COLLECTIONS:", Object.keys(schemas).join(","));
require_fs: {
  const fs = await import("fs");
  fs.writeFileSync(process.argv[3] || "/tmp/schemas.json", JSON.stringify(schemas));
}
process.exit(0);
