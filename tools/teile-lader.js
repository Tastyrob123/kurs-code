/* ============================================================
   TS Starter + Teile-Lader (Ladezeit, 01.11.2026). Wird beim Bauen
   (tools/teile.cjs) als kurs.min.js ausgeliefert.

   1. Laedt SOFORT (parallel zu allem anderen) den Kern teile/kern-<hash>.js
      (seit 01.11.2026 mehrere Dateien) und die Seitenteile, die diese Adresse
      braucht (rel=preload), dazu die Bilder im ersten Bild (tools/erstbild.json).
   2. Fuehrt sie erst aus, wenn super.so (React) die Seite uebernommen hat.
      Vorher veraendertes HTML liess React auf JEDER Seite mit Fehler #418
      abbrechen und die ganze Seite im Browser neu zeichnen (gemessen
      01.11.2026: 67 von 118 Seiten, mit leerem kurs.min.js 0).
   3. Bei Seitenwechseln ohne Neuladen und beim Zeigen auf einen Link laedt
      er die Teile der naechsten Adresse nach.
   window.__tsTeileBereit(cb): cb, sobald Kern + Teile der Adresse liefen.
   ============================================================ */
(function(){
  if(window.__tsTeile) return;
  var M=__TS_TEILE__, T=M.t, K=[].concat(M.k);
  var cs=document.currentScript, base='https://tastyrob123.github.io/kurs-code/';
  if(cs && cs.src && /kurs\.min\.js/.test(cs.src)) base=cs.src.replace(/kurs\.min\.js.*$/,'');
  var RE=T.map(function(t){ return t[0].map(function(r){ try{ return new RegExp(r[0],r[1]); }catch(e){ return /$^/; } }); });
  var st={}, offen=0, warte=[], frei=false, schlange=[];
  window.__tsTeile={liste:T, kern:K, status:st};

  /* Ereignis-Bruecke: Code, der nach DOMContentLoaded/load ausgefuehrt wird,
     bekommt diese Ereignisse trotzdem (sonst wuerde ein Block, der darauf wartet, nie starten). */
  var dAdd=document.addEventListener, wAdd=window.addEventListener;
  function bruecke(orig, ziel){
    return function(typ, fn, opt){
      if(typeof fn==='function' && ((typ==='DOMContentLoaded' && document.readyState!=='loading') || (typ==='load' && ziel===window && document.readyState==='complete'))){
        setTimeout(function(){ try{ fn.call(ziel,{type:typ,target:ziel}); }catch(e){ setTimeout(function(){ throw e; }); } },0);
        return;
      }
      return orig.call(this, typ, fn, opt);
    };
  }
  window.__tsTeilA=function(){ document.addEventListener=bruecke(dAdd,document); window.addEventListener=bruecke(wAdd,window); };
  window.__tsTeilE=function(){ document.addEventListener=dAdd; window.addEventListener=wAdd; };

  /* Ausfuehren in Original-Reihenfolge: Kern-Stuecke und Seitenbloecke tragen ihre Position
     aus kurs.js. Erst wenn alles Angeforderte da ist, laeuft alles sortiert durch. Ein Fehler
     in einem Block haelt die anderen nicht mehr an. */
  var Q=window.__tsQ=window.__tsQ||[];
  function abarbeiten(){
    var alle=[]; while(Q.length) alle=alle.concat(Q.shift());
    if(!alle.length) return;
    alle.sort(function(a,b){ return a[0]-b[0]; });
    window.__tsTeilA();
    try{ for(var i=0;i<alle.length;i++){ try{ alle[i][1](); }catch(e){ (function(x){ setTimeout(function(){ throw x; }); })(e); } } }
    finally{ window.__tsTeilE(); }
    anstossen();
  }
  function fertig(){ if(offen>0 || !frei) return; abarbeiten(); var w=warte; warte=[]; for(var i=0;i<w.length;i++){ try{ w[i](); }catch(e){} } }
  window.__tsTeileBereit=function(cb){ if(offen===0 && frei) cb(); else warte.push(cb); };

  var kopf=document.head||document.documentElement;
  /* Nach jedem Durchlauf die Seiten-Beobachter einmal anstossen: Teile, die spaeter kommen
     (Seitenwechsel), melden sich bei Bibliotheken an, die nur bei DOM-Aenderungen aufbauen
     (z. B. window.__tsn4). Eine leere Aenderung im body loest genau diesen Aufbau aus. */
  function anstossen(){ try{ var b=document.body; if(!b) return; var c=document.createComment('ts'); b.appendChild(c); b.removeChild(c); }catch(e){} }
  function vorladen(f){ var l=document.createElement('link'); l.rel='preload'; l.as='script'; l.href=base+f; kopf.appendChild(l); }

  /* Erstes Bild: Die Titelbilder setzen die Seitenmodule erst nach der React-Uebernahme ein.
     Ohne Vorladen kam die Anfrage 0,4 bis 1,3 s zu spaet und hielt den Schleier zu (gemessen
     01.11.2026). Quelle: was dieses Geraet auf der Seite zuletzt wirklich sah (localStorage,
     schreibt der Seitenschleier), sonst die Liste tools/erstbild.json (M.b). */
  var B=M.b||{}, handy=(window.innerWidth||1000)<700, bildDa={};
  function erstbilder(p){
    p=(p||'/').replace(/\/+$/,'')||'/';
    var l=null; try{ l=JSON.parse(localStorage.getItem('ts-eb:'+(handy?'m':'d')+p)||'null'); }catch(e){}
    if(!l){ var t=(handy?B.m:B.d)||{}; l=t[p]||null; }
    return (l||[]).map(function(u){ return u.charAt(0)==='~' ? base+u.slice(1) : u; });
  }
  function bildVorladen(p, jetzt){
    erstbilder(p).forEach(function(u){
      if(bildDa[u]) return; bildDa[u]=1;
      if(jetzt){ var l=document.createElement('link'); l.rel='preload'; l.as='image'; l.href=u; try{ l.fetchPriority='high'; }catch(e){} kopf.appendChild(l); }
      else { var im=new Image(); try{ im.fetchPriority='low'; }catch(e){} im.decoding='async'; im.src=u; }
    });
  }
  window.__tsErstbilder=erstbilder;
  bildVorladen(location.pathname, true);
  function ausfuehren(f){
    offen++;
    var s=document.createElement('script'); s.src=base+f; s.async=true;
    s.onload=s.onerror=function(){ offen--; fertig(); };
    kopf.appendChild(s);
  }
  function lade(p){
    for(var i=0;i<T.length;i++){
      var f=T[i][1]; if(st[f]) continue;
      var hit=false; for(var j=0;j<RE[i].length;j++){ RE[i][j].lastIndex=0; if(RE[i][j].test(p)){ hit=true; break; } }
      if(!hit) continue;
      st[f]=1;
      if(frei) ausfuehren(f); else { vorladen(f); schlange.push(f); }
    }
    fertig();
  }
  window.__tsTeileLade=lade;
  K.forEach(vorladen);
  lade(location.pathname);

  /* Warten, bis React die Seite uebernommen hat (Wurzel nicht mehr "dehydriert",
     keine Arbeit mehr geplant). Rueckfall: ohne React-Wurzel 1,2 s nach
     DOMContentLoaded, sonst spaetestens 5 s nach Start (frueher loszulegen
     loest Fehler #418 aus und kostet mehr, als es spart). */
  var t0=performance.now(), tDcl=0;
  function uebernommen(){
    var ck=null; for(var k in document){ if(k.indexOf('__reactContainer')===0){ ck=k; break; } }
    if(!ck) return document.readyState!=='loading' && tDcl && performance.now()-tDcl>1200;
    try{ var r=document[ck].stateNode, ms=r.current.memoizedState; return !!ms && ms.isDehydrated===false && !r.callbackNode; }catch(e){ return false; }
  }
  if(document.readyState!=='loading') tDcl=performance.now();
  else dAdd.call(document,'DOMContentLoaded',function(){ tDcl=performance.now(); });
  /* Unsichtbar vorbereitete Seite (Prerender, siehe unten): React uebernimmt im Hintergrund, die
     Module laufen aber erst im Moment des Zeigens. Sonst liefen Titel-Animation und Auftritte
     unsichtbar ab. Bilder und Teile liegen dann schon im Speicher, die Seite steht sofort. */
  var H0=document.documentElement;
  if(document.prerendering){
    H0.classList.add('ts-pre');
    dAdd.call(document,'prerenderingchange',function(){ H0.classList.remove('ts-pre'); t0=performance.now(); warteReact(); },{once:true});
  }
  function warteReact(){
    if(document.prerendering) return;
    if(uebernommen() || performance.now()-t0>5000){
      frei=true; window.__tsStartMs=Math.round(performance.now());
      K.forEach(ausfuehren);
      var q=schlange; schlange=[]; for(var i=0;i<q.length;i++) ausfuehren(q[i]);
      fertig();
      return;
    }
    setTimeout(warteReact, 12);
  }
  warteReact();

  /* Seitenwechsel ohne Neuladen (super.so/Next): pushState/replaceState/popstate + Rueckfall-Abfrage */
  var last=location.pathname;
  function chk(){ if(location.pathname!==last){ last=location.pathname; lade(last); } }
  ['pushState','replaceState'].forEach(function(k){
    var o=history[k]; if(!o) return;
    history[k]=function(){ var r=o.apply(this,arguments); try{ chk(); }catch(e){} return r; };
  });
  wAdd.call(window,'popstate',chk);
  setInterval(chk,300);
  /* Vorab: Zeigt jemand auf einen Link, liegen dessen Teile schon bereit, bevor er klickt. */
  var vorT=null;
  function vor(ev){
    var a=ev.target && ev.target.closest ? ev.target.closest('a[href]') : null; if(!a) return;
    try{ var u=new URL(a.href, location.href); if(u.origin===location.origin){ lade(u.pathname);
      /* Titelbild erst, wenn der Zeiger kurz ruht (nicht beim Ueberstreichen der Seitenleiste) */
      clearTimeout(vorT); vorT=setTimeout(function(){ bildVorladen(u.pathname, false); }, ev.type==='pointerover' ? 150 : 0); } }catch(e){}
  }
  dAdd.call(document,'pointerout',function(){ clearTimeout(vorT); },{passive:true,capture:true});

  /* Naechste Lektion vorbereiten (01.11.2026): Jeder Seitenwechsel ist ein voller Seitenaufruf
     (gemessen: Klick auf Weiter bis alles steht 1,6-1,8 s). Taucht der Weiter-Knopf auf, laedt der
     Browser die naechste Seite unsichtbar komplett fertig (Chrome/Edge: Speculation Rules), der
     Klick zeigt sie dann sofort. Safari und andere: Titelbild + Teile der naechsten Seite vorab.
     Fuer alle anderen Links: fertig laden, sobald der Zeiger kurz darauf ruht. */
  var spec=false, SPEC_AN=false;   /* Schritt 2 des Ausrollens schaltet die Vorbereitung ein */
  try{ spec=SPEC_AN && !!(HTMLScriptElement.supports && HTMLScriptElement.supports('speculationrules')); }catch(e){}
  function regel(obj){ var s=document.createElement('script'); s.type='speculationrules'; s.textContent=JSON.stringify(obj); kopf.appendChild(s); }
  /* Eine Seite, die selbst gerade unsichtbar vorbereitet wird, bereitet erst nach dem Zeigen weiter vor. */
  function sichtbarDann(fn){ if(document.prerendering) dAdd.call(document,'prerenderingchange',fn,{once:true}); else fn(); }
  if(spec) sichtbarDann(function(){
    try{ regel({prerender:[{source:'document', where:{and:[{href_matches:'/*'},{not:{href_matches:'/_next/*'}},{not:{selector_matches:'[target=_blank], [download]'}}]}, eagerness:'moderate'}]}); }catch(e){}
  });
  var weiterFertig={};
  function weiterVorbereiten(){
    var a=document.getElementById('ts-next'); if(!a) return;
    var u; try{ u=new URL(a.href, location.href); }catch(e){ return; }
    if(u.origin!==location.origin || u.pathname===location.pathname || weiterFertig[u.pathname]) return;
    weiterFertig[u.pathname]=1;
    lade(u.pathname); bildVorladen(u.pathname, false);
    if(spec){ try{ regel({prerender:[{source:'list', urls:[u.pathname], eagerness:'immediate'}]}); }catch(e){} }
  }
  /* erst wenn die eigene Seite steht und ihre Auftritte gelaufen sind, in einer ruhigen Pause,
     damit die naechste ihr weder Leitung noch Rechenzeit wegnimmt */
  function ruhigDann(fn){ setTimeout(function(){ if(window.requestIdleCallback) requestIdleCallback(fn,{timeout:2000}); else fn(); }, 1200); }
  var wv=false;
  function weiterStart(){ if(wv) return; wv=true; sichtbarDann(function(){ ruhigDann(function(){ weiterVorbereiten(); setInterval(weiterVorbereiten, 1500); }); }); }
  dAdd.call(document,'ts:reveal',weiterStart);
  if(document.documentElement.classList.contains('ts-reveal')) weiterStart();
  dAdd.call(document,'pointerover',vor,{passive:true,capture:true});
  dAdd.call(document,'touchstart',vor,{passive:true,capture:true});
  dAdd.call(document,'focusin',vor,true);
})();
