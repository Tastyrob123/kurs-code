/* ============================================================
   notion-ai-fr-unser-system — #tsnainext Abschnitt 09 Seitenabschluss (Learnings-Orbs + "Naechste Lektion")
   Katalog 09, Muster 1:1 #tskmnext. 4 Learnings aus dem Lektionsinhalt destilliert.
   ⚠️ PFLICHT-CHECK "__tsNext-Falle": der Slug MUSS zusaetzlich in der PAGES-Map des globalen
   Pagers stehen, sonst loescht der Pager #ts-next-wrap direkt nach dem Mount wieder.
   Eintrag ist gesetzt: /notion-ai-fr-unser-system -> /allgemeine-tipps (Robert 21.07.2026, Reihenfolge 16-17-18).
   ============================================================ */
(function(){
  if(window.__tsnainext) return;
  function on(){ return /\/notion-ai-fr-unser-system\/?$/.test(location.pathname); }
  var NEXT_URL='https://gastronomie-ai-masterclass.super.site/allgemeine-tipps';
  var LEARN=[
    'Du weißt, warum Notion AI <b>in deinen Daten sitzt</b> — und ein Chat daneben nur erklären kann, wovon es abhängt.',
    'Du kannst <b>Tabellen und Formeln beschreiben</b>, statt sie Spalte für Spalte selbst zu bauen.',
    'Du weißt, dass <b>Abfragequalität Übung braucht</b> — und behältst dabei dein Nutzungsguthaben im Blick.',
    'Du kannst <b>Szenarien durchrechnen</b> — fällt eine Zutat aus, siehst du sofort, was das im Wareneinsatz bedeutet.'
  ];
  var CSS=`
  #tsnainext{width:100%;margin-top:44px;padding:0 clamp(20px,4vw,56px);box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif;color:#fff}
  #tsnainext *{box-sizing:border-box}
  #tsnainext .tsl-head{text-align:center;margin-bottom:66px}
  #tsnainext .tsl-eyebrow{font-family:"Lineal Web","Lineal TS",-apple-system,sans-serif;font-weight:600;font-size:.62rem;letter-spacing:.16em;text-transform:uppercase;color:#c7b489;display:block;margin-bottom:14px}
  #tsnainext .tsl-title{font-family:"Lineal Web","Lineal TS",-apple-system,sans-serif;font-weight:600;font-size:clamp(30px,5vw,46px);line-height:1.05;color:#fff;margin:0}
  #tsnainext .tsl-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:clamp(20px,3vw,40px);max-width:1180px;margin:0 auto}
  #tsnainext .tsl-cell{display:flex;justify-content:center}
  #tsnainext .tsl-orb{position:relative;width:100%;max-width:250px;aspect-ratio:1;border-radius:50%;display:flex;align-items:center;justify-content:center;text-align:center;padding:14%;
    background:radial-gradient(120% 120% at 30% 26%,rgba(199,180,137,.20),rgba(255,255,255,.03) 46%,rgba(255,255,255,.015));
    border:1px solid rgba(255,255,255,.12);box-shadow:0 30px 60px -30px rgba(0,0,0,.85),inset 0 1px 0 rgba(255,255,255,.06),inset 0 0 40px rgba(199,180,137,.06);
    opacity:0;transform:translateY(22px);filter:blur(8px);transition:opacity .8s ease,transform .9s cubic-bezier(.16,1,.3,1),filter .8s ease,border-color .4s ease,box-shadow .4s ease}
  #tsnainext .tsl-orb::after{content:"";position:absolute;top:14%;left:16%;width:26%;height:20%;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.22),rgba(255,255,255,0) 70%);pointer-events:none}
  #tsnainext.in .tsl-orb{opacity:1;transform:none;filter:none;animation:tslFloat 7s ease-in-out infinite}
  #tsnainext.in .tsl-cell:nth-child(1) .tsl-orb{transition-delay:0s;animation-delay:0s}
  #tsnainext.in .tsl-cell:nth-child(2) .tsl-orb{transition-delay:.14s;animation-delay:-1.6s}
  #tsnainext.in .tsl-cell:nth-child(3) .tsl-orb{transition-delay:.28s;animation-delay:-3.2s}
  #tsnainext.in .tsl-cell:nth-child(4) .tsl-orb{transition-delay:.42s;animation-delay:-4.8s}
  #tsnainext .tsl-orb:hover{border-color:rgba(199,180,137,.5);box-shadow:0 30px 60px -28px rgba(0,0,0,.85),0 0 34px rgba(199,180,137,.2),inset 0 1px 0 rgba(255,255,255,.06)}
  #tsnainext .tsl-t{position:relative;z-index:1;color:rgba(255,255,255,.9);font-size:clamp(12.5px,1.15vw,15px);font-weight:500;line-height:1.5;max-width:22ch}
  #tsnainext .tsl-t b{color:#c7b489;font-weight:700}
  /* Keyframe MUSS hier stehen: der einzige tslFloat im Repo lebt im #tskmnext-CSS und wird
     nur auf /key-metrics injiziert -> hier fehlte er, die Orbs standen still. */
  @keyframes tslFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-11px)}}
  #tsnainext #ts-next{display:inline-flex;align-items:center;gap:9px;height:44px;padding:0 28px;border-radius:9999px;background:#c7b489;color:#05060b;font-family:inherit;font-size:14px;font-weight:700;letter-spacing:.01em;border:none;cursor:pointer;text-decoration:none;transition:background .3s ease,transform .3s ease,box-shadow .3s ease}
  #tsnainext #ts-next:hover{background:#d8c9ab;transform:translateY(-1px);box-shadow:0 14px 30px -12px rgba(199,180,137,.6)}
  #tsnainext #ts-next svg{width:16px;height:16px}
  @media(max-width:1079px){ #tsnainext .tsl-grid{grid-template-columns:repeat(2,1fr)} }
  @media(max-width:520px){ #tsnainext .tsl-grid{grid-template-columns:1fr} }
  @media(prefers-reduced-motion:reduce){ #tsnainext .tsl-orb{opacity:1;transform:none;filter:none;animation:none} }
  `;
  function injectCSS(){ if(document.getElementById('tsnainext-css'))return; var s=document.createElement('style'); s.id='tsnainext-css'; s.textContent=CSS; document.head.appendChild(s); }
  function build(){
    var el=document.createElement('div'); el.id='tsnainext';
    var orbs=LEARN.map(function(t){ return '<div class="tsl-cell"><div class="tsl-orb"><p class="tsl-t">'+t+'</p></div></div>'; }).join('');
    el.innerHTML=
'<div class="tsl-head">'+
  '<span class="tsl-eyebrow">Was du mitnimmst</span>'+
  '<h2 class="tsl-title">Learnings</h2>'+
'</div>'+
'<div class="tsl-grid">'+orbs+'</div>'+
'';
    return el;
  }
  function mount(){
    if(!on()){ var e=document.getElementById('tsnainext'); if(e&&e.parentNode)e.parentNode.removeChild(e); return; }
    if(document.getElementById('tsnainext')) return;
    var anchor=document.getElementById('tsnaiemp')||document.getElementById('tsnai2mac')||document.getElementById('tsnaivid');
    if(!anchor||!anchor.parentNode) return;
    injectCSS();
    var el=build();
    anchor.parentNode.insertBefore(el, anchor.nextSibling);
    var io=new IntersectionObserver(function(ev){ if(ev[0].isIntersecting){ el.classList.add('in'); io.disconnect(); } },{threshold:.2});
    io.observe(el);
    var r=el.getBoundingClientRect(); if(r.top<window.innerHeight && r.bottom>0) el.classList.add('in');
  }
  window.__tsnainext=true;
  mount();
  document.addEventListener('DOMContentLoaded', mount);
  new MutationObserver(mount).observe(document.documentElement,{childList:true,subtree:true});
})();
