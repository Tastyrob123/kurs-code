/* ============================================================
   TS Starter + Teile-Lader (Ladezeit, 01.11.2026). Wird beim Bauen
   (tools/teile.cjs) als kurs.min.js ausgeliefert.

   1. Laedt SOFORT (parallel zu allem anderen) den Kern teile/kern-<hash>.js
      und die Seitenteile, die diese Adresse braucht (rel=preload).
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
  var M=__TS_TEILE__, T=M.t;
  var cs=document.currentScript, base='https://tastyrob123.github.io/kurs-code/';
  if(cs && cs.src && /kurs\.min\.js/.test(cs.src)) base=cs.src.replace(/kurs\.min\.js.*$/,'');
  var RE=T.map(function(t){ return t[0].map(function(r){ try{ return new RegExp(r[0],r[1]); }catch(e){ return /$^/; } }); });
  var st={}, offen=0, warte=[], frei=false, schlange=[];
  window.__tsTeile={liste:T, kern:M.k, status:st};

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

  function fertig(){ if(offen>0 || !frei) return; var w=warte; warte=[]; for(var i=0;i<w.length;i++){ try{ w[i](); }catch(e){} } }
  window.__tsTeileBereit=function(cb){ if(offen===0 && frei) cb(); else warte.push(cb); };

  var kopf=document.head||document.documentElement;
  function vorladen(f){ var l=document.createElement('link'); l.rel='preload'; l.as='script'; l.href=base+f; kopf.appendChild(l); }
  function ausfuehren(f){
    offen++;
    var s=document.createElement('script'); s.src=base+f; s.async=false;
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
  vorladen(M.k);
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
  (function warte(){
    if(uebernommen() || performance.now()-t0>5000){
      frei=true; window.__tsStartMs=Math.round(performance.now());
      ausfuehren(M.k);
      var q=schlange; schlange=[]; for(var i=0;i<q.length;i++) ausfuehren(q[i]);
      fertig();
      return;
    }
    setTimeout(warte, 12);
  })();

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
  function vor(ev){
    var a=ev.target && ev.target.closest ? ev.target.closest('a[href]') : null; if(!a) return;
    try{ var u=new URL(a.href, location.href); if(u.origin===location.origin) lade(u.pathname); }catch(e){}
  }
  dAdd.call(document,'pointerover',vor,{passive:true,capture:true});
  dAdd.call(document,'touchstart',vor,{passive:true,capture:true});
  dAdd.call(document,'focusin',vor,true);
})();
