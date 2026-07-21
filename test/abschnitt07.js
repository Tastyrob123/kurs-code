/* ============================================================
   notion-ai-fr-unser-system — #tsnaiemp Abschnitt 07 Empfehlungs-Kachel "Empfehlung zur Nutzung"
   Katalog 07: Verhalten 1:1 wie #tszein/#tskmemp — Scroll-Entrance, Cursor-Tilt, Glow-Follow,
   Heartbeat, Sync-Highlight alle 2600 ms + goldene Bezier-Linie mit Punkten an beiden Enden.
   Grid minmax(280px,1fr) / 1.5fr, width min(1000px,95vw), margin 34px auto, radius 20px, Gold-Top-Line.
   Linke Animation themenpassend (Katalog-Pflicht): der Umgang mit Notion AI in vier Stufen.
   ============================================================ */
(function(){
  if(window.__tsnaiemp) return; window.__tsnaiemp=true;
  function on(){ return /\/notion-ai-fr-unser-system\/?$/.test(location.pathname); }
  var EASE="cubic-bezier(.16,1,.3,1)";
  var STEPS=[
    ['01','Seite verknüpfen'],
    ['02','Konkret fragen'],
    ['03','Nachschärfen'],
    ['04','Guthaben im Blick']
  ];
  var POINTS=[
    'Verknüpfe die Seite, um die es geht, direkt mit dem Chat. Notion AI kommt zwar überall an deine Informationen, findet die richtige Stelle aber schneller, wenn du sie ihm zeigst.',
    'Frag so konkret wie möglich und nenne die Datenbank beim Namen. „Was kostet die Portion" ist beliebig, „Wareneinsatz je Portion aus DB XI für dieses Gericht" ist eindeutig.',
    'Lass dich nicht frustrieren, wenn die Antworten in den ersten Wochen nicht sitzen. Jedes Backoffice ist anders gebaut, und wie du mit deinem sprechen musst, findest du nur durch Ausprobieren heraus. Bei mir hat das gedauert.',
    'Behalte das Nutzungsguthaben im Auge. Notion AI steckt in einem Monatsabo, und wenn du dein Guthaben aufgebraucht hast, wird die weitere Nutzung zusätzlich berechnet.'
  ];

  var CSS=`
  #tsnaiemp{position:relative;width:min(1000px,95vw);margin:34px auto;padding:clamp(26px,4vw,44px) clamp(24px,4.5vw,50px);
    border-radius:20px;box-sizing:border-box;overflow:hidden;
    font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif;color:#fff;
    background:linear-gradient(165deg,rgba(255,255,255,.05),rgba(255,255,255,0));
    border:1px solid rgba(255,255,255,.10);
    box-shadow:0 40px 90px -50px rgba(0,0,0,.95),inset 0 0 60px rgba(199,180,137,.045);
    transform:perspective(1100px) rotateX(9deg) translateY(34px) scale(.97);opacity:0;
    transition:transform .9s ${EASE},opacity .9s ${EASE}}
  #tsnaiemp *{box-sizing:border-box}
  #tsnaiemp.in{opacity:1;transform:perspective(1100px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translateY(0) scale(1)}
  #tsnaiemp.in{transition:transform .16s ease-out,opacity .9s ${EASE}}
  #tsnaiemp::after{content:"";position:absolute;top:0;left:8%;right:8%;height:1px;pointer-events:none;
    background:linear-gradient(90deg,rgba(199,180,137,0),rgba(199,180,137,.55),rgba(199,180,137,0))}
  #tsnaiemp::before{content:"";position:absolute;width:560px;height:560px;border-radius:50%;pointer-events:none;
    left:var(--gx,50%);top:var(--gy,50%);transform:translate(-50%,-50%);opacity:0;transition:opacity .4s ease;
    background:radial-gradient(circle,rgba(199,180,137,.10),rgba(199,180,137,0) 62%)}
  #tsnaiemp:hover::before{opacity:1}
  #tsnaiemp.beat{animation:naiEmpBeat 2.6s ${EASE} infinite}
  @keyframes naiEmpBeat{0%,72%,100%{box-shadow:0 40px 90px -50px rgba(0,0,0,.95),inset 0 0 60px rgba(199,180,137,.045)}
    86%{box-shadow:0 40px 90px -50px rgba(0,0,0,.95),inset 0 0 60px rgba(199,180,137,.045),0 0 42px -6px rgba(199,180,137,.32)}}

  #tsnaiemp .emp-grid{position:relative;z-index:2;display:grid;grid-template-columns:minmax(280px,1fr) 1.5fr;
    gap:clamp(28px,4.5vw,56px);align-items:center}

  /* linke Spalte: die themenpassende Animation */
  #tsnaiemp .db-hd{font-family:"Lineal Web","Lineal TS",-apple-system,sans-serif;font-weight:600;
    font-size:1.4rem;line-height:1.2;color:#fff;margin:0 0 18px}
  #tsnaiemp .db-hd span{color:#c7b489}
  #tsnaiemp .db-row{display:flex;flex-direction:column;gap:10px}
  #tsnaiemp .tb{display:flex;align-items:center;gap:11px;padding:10px 14px;border-radius:11px;
    border:1px solid rgba(255,255,255,.1);
    background:linear-gradient(rgba(255,255,255,.03),rgba(255,255,255,.03)),#05060b;
    opacity:0;transform:translateY(10px);
    transition:opacity .6s ${EASE},transform .6s ${EASE},border-color .5s ${EASE},box-shadow .5s ${EASE},background .5s ${EASE}}
  #tsnaiemp.in .tb{opacity:1;transform:none}
  #tsnaiemp.in .tb:nth-child(1){transition-delay:.10s}
  #tsnaiemp.in .tb:nth-child(2){transition-delay:.22s}
  #tsnaiemp.in .tb:nth-child(3){transition-delay:.34s}
  #tsnaiemp.in .tb:nth-child(4){transition-delay:.46s}
  #tsnaiemp .tb-n{flex:none;width:25px;height:25px;border-radius:50%;display:inline-flex;align-items:center;
    justify-content:center;font-size:11px;font-weight:700;letter-spacing:.03em;font-variant-numeric:tabular-nums;
    background:rgba(255,255,255,.06);color:rgba(255,255,255,.42);transition:background .5s ${EASE},color .5s ${EASE}}
  #tsnaiemp .tb-l{font-size:13.5px;font-weight:600;color:rgba(255,255,255,.6);transition:color .5s ${EASE}}
  #tsnaiemp .tb.on{border-color:rgba(199,180,137,.5);
    background:linear-gradient(rgba(199,180,137,.11),rgba(199,180,137,.11)),#05060b;
    box-shadow:0 0 0 1px rgba(199,180,137,.14),0 14px 34px -14px rgba(199,180,137,.45)}
  #tsnaiemp .tb.on .tb-n{background:#c7b489;color:#05060b}
  #tsnaiemp .tb.on .tb-l{color:#fff}

  /* Verbindungslinie */
  #tsnaiemp .emp-link{position:absolute;inset:0;z-index:1;pointer-events:none;overflow:visible}
  #tsnaiemp .emp-link path{fill:none;stroke:#c7b489;stroke-width:1.4;stroke-opacity:.55;
    stroke-linecap:round;stroke-dasharray:var(--len,300);stroke-dashoffset:var(--len,300);
    transition:stroke-dashoffset .55s ${EASE}}
  #tsnaiemp .emp-link.draw path{stroke-dashoffset:0}
  #tsnaiemp .emp-link circle{fill:#c7b489;opacity:0;transition:opacity .4s ${EASE}}
  #tsnaiemp .emp-link.draw circle{opacity:.9}

  /* rechte Spalte */
  #tsnaiemp .emph{font-family:"Lineal Web","Lineal TS",-apple-system,sans-serif;font-weight:600;
    font-size:1.45rem;line-height:1.25;color:#fff;margin:0 0 12px}
  #tsnaiemp .emph .eg{color:#c7b489}
  #tsnaiemp .p{font-size:.96rem;line-height:1.7;color:rgba(255,255,255,.68);margin:0 0 16px}
  #tsnaiemp .tsz-ol{list-style:none;counter-reset:naiemp;margin:0;padding:0;display:flex;flex-direction:column;gap:8px}
  #tsnaiemp .tsz-ol li{counter-increment:naiemp;position:relative;padding:9px 13px 9px 38px;border-radius:10px;
    font-size:.92rem;line-height:1.6;color:rgba(255,255,255,.62);border:1px solid transparent;
    transition:color .5s ${EASE},background .5s ${EASE},border-color .5s ${EASE},box-shadow .5s ${EASE}}
  #tsnaiemp .tsz-ol li::before{content:counter(naiemp,decimal-leading-zero);position:absolute;left:13px;top:9px;
    font-size:11px;font-weight:700;color:rgba(255,255,255,.32);font-variant-numeric:tabular-nums;
    transition:color .5s ${EASE}}
  #tsnaiemp .tsz-ol li.lit{color:#fff;border-color:rgba(199,180,137,.34);
    background:linear-gradient(rgba(199,180,137,.07),rgba(199,180,137,.07)),#05060b;
    box-shadow:0 12px 30px -16px rgba(199,180,137,.4)}
  #tsnaiemp .tsz-ol li.lit::before{color:#c7b489}

  @media(max-width:900px){
    #tsnaiemp .emp-grid{grid-template-columns:1fr}
    #tsnaiemp .emp-link{display:none}
    #tsnaiemp{transform:none;opacity:1}
  }
  @media(prefers-reduced-motion:reduce){
    #tsnaiemp,#tsnaiemp.in{transform:none;opacity:1;animation:none;transition:none}
    #tsnaiemp .tb{opacity:1;transform:none}
    #tsnaiemp .emp-link{display:none}
  }
  `;

  var HTML=
  '<svg class="emp-link" aria-hidden="true"><path d=""/><circle r="3.2" cx="0" cy="0"/><circle r="3.2" cx="0" cy="0"/></svg>'+
  '<div class="emp-grid">'+
    '<div class="emp-anim">'+
      '<h3 class="db-hd">Dein Umgang mit <span>Notion AI</span></h3>'+
      '<div class="db-row">'+
        STEPS.map(function(s){ return '<div class="tb"><span class="tb-n">'+s[0]+'</span><span class="tb-l">'+s[1]+'</span></div>'; }).join('')+
      '</div>'+
    '</div>'+
    '<div class="emp-txt">'+
      '<h3 class="emph">Empfehlung zur <span class="eg">Nutzung</span></h3>'+
      '<p class="p">Notion AI wird mit der Zeit besser, weil du besser darin wirst, es zu fragen. Vier Dinge, die dir diesen Weg abkürzen:</p>'+
      '<ol class="tsz-ol">'+POINTS.map(function(p){ return '<li>'+p+'</li>'; }).join('')+'</ol>'+
    '</div>'+
  '</div>';

  function injectCSS(){ if(document.getElementById('tsnaiemp-css'))return;
    var s=document.createElement('style'); s.id='tsnaiemp-css'; s.textContent=CSS; document.head.appendChild(s); }

  function arm(root){
    var reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
    var tbs=[].slice.call(root.querySelectorAll('.tb'));
    var lis=[].slice.call(root.querySelectorAll('.tsz-ol li'));
    var svg=root.querySelector('.emp-link');
    var path=svg.querySelector('path');
    var cs=[].slice.call(svg.querySelectorAll('circle'));
    var cur=-1, timer=null;

    function link(i){
      if(reduced||innerWidth<=900||!tbs[i]||!lis[i]) return;
      var rb=root.getBoundingClientRect(), a=tbs[i].getBoundingClientRect(), b=lis[i].getBoundingClientRect();
      var x1=a.right-rb.left, y1=a.top-rb.top+a.height/2;
      var x2=b.left-rb.left,  y2=b.top-rb.top+b.height/2;
      var mx=(x1+x2)/2;
      var d='M '+x1+' '+y1+' C '+mx+' '+y1+', '+mx+' '+y2+', '+x2+' '+y2;
      path.setAttribute('d',d);
      var len=path.getTotalLength ? path.getTotalLength() : 300;
      path.style.setProperty('--len',len);
      cs[0].setAttribute('cx',x1); cs[0].setAttribute('cy',y1);
      cs[1].setAttribute('cx',x2); cs[1].setAttribute('cy',y2);
      svg.classList.remove('draw'); void svg.offsetWidth; svg.classList.add('draw');
    }
    function step(){
      cur=(cur+1)%tbs.length;
      tbs.forEach(function(t,j){ t.classList.toggle('on',j===cur); });
      lis.forEach(function(l,j){ l.classList.toggle('lit',j===cur); });
      link(cur);
    }
    function start(){ if(timer||reduced) return; step(); timer=setInterval(step,2600); }
    function stop(){ if(timer){ clearInterval(timer); timer=null; } }

    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(e.isIntersecting){ root.classList.add('in'); start(); } else { stop(); }
      });
    },{threshold:.3});
    io.observe(root);
    var r=root.getBoundingClientRect();
    if(r.top<innerHeight && r.bottom>0){ root.classList.add('in'); start(); }

    root.addEventListener('pointermove',function(e){
      if(matchMedia('(pointer:coarse)').matches) return;
      var b=root.getBoundingClientRect();
      var px=(e.clientX-b.left)/b.width, py=(e.clientY-b.top)/b.height;
      root.style.setProperty('--ry',((px-.5)*5).toFixed(2)+'deg');
      root.style.setProperty('--rx',((.5-py)*4).toFixed(2)+'deg');
      root.style.setProperty('--gx',(px*100).toFixed(1)+'%');
      root.style.setProperty('--gy',(py*100).toFixed(1)+'%');
    });
    root.addEventListener('pointerenter',function(){ root.classList.add('beat'); });
    root.addEventListener('pointerleave',function(){
      root.classList.remove('beat');
      root.style.setProperty('--ry','0deg'); root.style.setProperty('--rx','0deg');
    });
    addEventListener('resize',function(){ if(cur>=0) link(cur); },{passive:true});
    document.addEventListener('visibilitychange',function(){ if(document.hidden) stop(); else start(); });
  }

  function mount(){
    if(!on()){ var o=document.getElementById('tsnaiemp'); if(o&&o.parentNode)o.parentNode.removeChild(o); return; }
    if(document.getElementById('tsnaiemp')) return;
    var a=document.getElementById('tsnai2mac'); if(!a||!a.parentNode) return;
    injectCSS();
    var el=document.createElement('section'); el.id='tsnaiemp'; el.innerHTML=HTML;
    a.parentNode.insertBefore(el, a.nextSibling);
    arm(el);
  }
  mount();
  document.addEventListener('DOMContentLoaded',mount);
  new MutationObserver(mount).observe(document.documentElement,{childList:true,subtree:true});
})();

