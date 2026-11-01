(window.__tsQ=window.__tsQ||[]).push([[9,function(){(function(){var E="https://tastyrob123.github.io/kurs-code/img/key-metrics/hero-cover-placeholder.svg",w="https://tastyrob123.github.io/kurs-code/assets/au80tp.png";function f(){return/\/key-metrics\/?$/.test(location.pathname)}var b=`
  .ts-body{
    max-width:860px;margin:56px auto 0;padding:0 clamp(24px,4vw,56px);
    font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif;
    text-align:center;
  }
  .ts-body h3{
    font-family:"Lineal TS",-apple-system,BlinkMacSystemFont,"SF Pro Display",sans-serif;
    font-weight:600;letter-spacing:-.015em;color:#fff;
    font-size:clamp(25px,2.8vw,32px);line-height:1.2;
    margin:32px 0 14px;
  }
  .ts-body h3:first-child{margin-top:0}
  .ts-body p{
    font-size:15.5px;line-height:1.62;color:rgba(255,255,255,.86);
    margin:0 0 13px;
  }
  .ts-body p:last-child{margin-bottom:0}
  .ts-body ul{margin:6px auto 16px;padding:0;list-style:none;max-width:640px;text-align:left}
  .ts-body li{
    font-size:15.5px;line-height:1.62;color:rgba(255,255,255,.86);
    margin:0 0 10px;padding-left:22px;position:relative;
  }
  .ts-body li::before{
    content:"";position:absolute;left:0;top:10px;width:5px;height:5px;border-radius:50%;
    background:#c7b489;
  }
  .ts-body li b, .ts-body p b{color:#c7b489;font-weight:600}
  `;function v(){if(!document.getElementById("tskm-intro-css")){var u=document.createElement("style");u.id="tskm-intro-css",u.textContent=b,document.head.appendChild(u)}}function h(){if(f()){var u=document.querySelector(".super-content");if(u){if(document.querySelector(".ts-hero")){document.getElementById("tskm-intro")||y(u);return}var d=document.createElement("div");d.className="ts-hero",d.innerHTML='<img class="ts-hero__img" alt="Key Metrics \u2014 Kostenauswertung Master" src="'+E+'" fetchpriority="high" decoding="async"><div class="ts-hero__text"><img class="ts-hero__logo" alt="Tasty Studios" src="'+w+'" fetchpriority="high" decoding="async"><div class="ts-hero__eyebrow">Modul 2 \xB7 Ausbau</div><h1 class="ts-hero__title">Key <span class="ts-gold">Metrics</span></h1></div>';var e=u.querySelector(".notion-root");e?u.insertBefore(d,e):u.appendChild(d),Array.prototype.forEach.call(u.querySelectorAll('.notion-image img[src*="logo_vektor"]'),function(i){var s=i.closest(".notion-image");s&&(s.style.display="none")});var r=document.querySelector(".notion-header.page");r&&(r.style.display="none"),y(u)}}}function y(u){if(!document.getElementById("tskm-intro")){v();var d=u.querySelector(".ts-hero");if(d){var e=document.createElement("div");e.id="tskm-intro",e.innerHTML=`
<div class="ts-body">
  <p>Diese Datenbank \u2014 <b>DB XX, die Kostenauswertung Master</b> \u2014 ist die Landkarte \xFCber alle Zahlen, die dein Betrieb t\xE4glich produziert. Du f\xFCtterst sie mit den rohen Werten aus dem Tagesgesch\xE4ft, den Rest rechnet sie selbst: Aus einzelnen Buchungen werden <b>belastbare Kennzahlen</b>, die du lesen kannst.</p>
  <p>Hier stehen sie beieinander: <b>Umsatz</b>, Durchschnittsbon und Umsatz pro Tag, dazu Wareneinsatz und die <b>Deckungsbeitr\xE4ge I bis III</b> in Euro und Prozent. Daneben deine <b>Personalkosten und die Produktivit\xE4t pro Stunde</b> \u2014 und die Kan\xE4le drumherum: Lieferando, Wolt, Online-Rate, Google- und Mystery-Shopper-Score.</p>
</div>`,d.parentNode.insertBefore(e,d.nextSibling)}}}h(),document.addEventListener("DOMContentLoaded",h),window.__tsMO(h).observe(document.documentElement,{childList:!0,subtree:!0})})()}],[10,function(){(function(){if(window.__tskm)return;function E(){return/\/key-metrics\/?$/.test(location.pathname)}var w=[{k:"Umsatz Netto",v:"2.480 \u20AC"},{k:"Wareneinsatz",v:"704 \u20AC"},{k:"Personalkosten",v:"620 \u20AC"},{k:"Geleistete Stunden",v:"52 h"},{k:"Transaktionen",v:"253"}],f=[{k:"Wareneinsatz",to:28.4,fmt:"pct"},{k:"Durchschnittsbon",to:9.8,fmt:"eur"},{k:"Deckungsbeitrag I",to:71.6,fmt:"pct"},{k:"Deckungsbeitrag II",to:46.6,fmt:"pct"},{k:"Deckungsbeitrag III",to:34.5,fmt:"pct"},{k:"Produktivit\xE4t",to:48,fmt:"eurh"}];function b(t,l){return l==="pct"?t.toFixed(1).replace(".",",")+" %":l==="eur"?t.toFixed(2).replace(".",",")+" \u20AC":Math.round(t)+" \u20AC/h"}var v=`
  #tskm{width:100vw;max-width:100vw;margin:60px 0 16px;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);padding:0 clamp(20px,5vw,72px);box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif;color:#fff}
  #tskm *{box-sizing:border-box}
  #tskm .km-head{max-width:860px;margin:0 auto 44px;text-align:center}
  #tskm .km-eyebrow{display:inline-flex;align-items:center;gap:9px;font-size:.62rem;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#c7b489;margin-bottom:12px}
  #tskm .km-eyebrow::before{content:"";width:7px;height:7px;border-radius:50%;background:#c7b489;box-shadow:0 0 12px rgba(199,180,137,.7)}
  #tskm .km-title{font-family:"Lineal TS",-apple-system,BlinkMacSystemFont,"SF Pro Display",sans-serif;font-weight:600;letter-spacing:-.01em;line-height:1.08;text-wrap:balance;font-size:clamp(1.9rem,4.4vw,2.9rem);margin:0 0 16px}
  #tskm .km-title span{color:#c7b489}
  #tskm .km-sub{font-size:16.5px;line-height:1.6;color:rgba(255,255,255,.8);margin:0}

  /* Buehne: DEFAULT sichtbar (Fallback = fertiges Cockpit). Entrance nur via inline-style in play(). */
  #tskm .km-wrap{max-width:1080px;margin:0 auto}
  #tskm .km-stage{position:relative;display:grid;grid-template-columns:minmax(160px,1fr) minmax(150px,.95fr) minmax(280px,1.55fr);align-items:center;gap:clamp(26px,4.4vw,72px)}
  #tskm svg.km-lines{position:absolute;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none;z-index:1}
  #tskm .km-line{fill:none;stroke:rgba(199,180,137,.32);stroke-width:1.4;stroke-linecap:round;opacity:0}
  #tskm .km-line.on{opacity:1}

  #tskm .km-col{position:relative;z-index:2;display:flex;flex-direction:column;gap:11px}
  #tskm .km-col-lbl{font-size:9.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.4);text-align:center;margin-bottom:3px}
  #tskm .km-in{display:flex;flex-direction:column;gap:2px;background:linear-gradient(rgba(255,255,255,.035),rgba(255,255,255,.035)),#05060b;border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:9px 14px}
  #tskm .km-wrap.playing .km-in{opacity:0;transform:translateX(-14px) scale(.96);animation:kmIn .6s cubic-bezier(.34,1.56,.64,1) both}
  #tskm .km-in-k{font-size:9.5px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:rgba(255,255,255,.5)}
  #tskm .km-in-v{font-size:14px;font-weight:600;color:#fff;font-variant-numeric:tabular-nums}

  #tskm .km-core{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:linear-gradient(rgba(199,180,137,.07),rgba(199,180,137,.07)),#05060b;border:1px solid rgba(199,180,137,.4);border-radius:20px;padding:24px 16px;box-shadow:0 26px 60px -30px rgba(0,0,0,.92)}
  #tskm .km-wrap.playing .km-core{opacity:0;transform:scale(.9);animation:kmCore .7s cubic-bezier(.16,1,.3,1) .5s both}
  #tskm .km-core.pulse{animation:kmPulse 1.5s cubic-bezier(.16,1,.3,1)}
  #tskm .km-core-ico{width:46px;height:46px;border-radius:13px;background:rgba(199,180,137,.14);border:1px solid rgba(199,180,137,.4);display:flex;align-items:center;justify-content:center;margin-bottom:2px}
  #tskm .km-core-ico svg{width:24px;height:24px}
  #tskm .km-core-name{font-family:"Lineal TS",-apple-system,sans-serif;font-weight:600;font-size:15px;color:#efe6d2;text-align:center;line-height:1.15}
  #tskm .km-core-tag{font-size:9.5px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.45)}

  #tskm .km-kpis{position:relative;z-index:2;display:grid;grid-template-columns:1fr 1fr;gap:12px}
  /* Opake Basis unter dem transparenten Kachel-Ton: sonst scheinen die Verbindungslinien durch die Kachel
     (Robert-Korrektur 21.07.2026 \u2014 Striche duerfen nie durch die Kacheln laufen). Ton bleibt exakt rgba(255,255,255,.04). */
  #tskm .km-kpi{background:linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04)),#05060b;border:1px solid rgba(199,180,137,.24);border-radius:14px;padding:12px 15px;transition:opacity .5s ease,transform .6s cubic-bezier(.16,1,.3,1),border-color .5s ease,box-shadow .5s ease}
  #tskm .km-wrap.playing .km-kpi{opacity:.38;transform:translateY(8px);border-color:rgba(255,255,255,.12)}
  #tskm .km-wrap.playing .km-kpi.lit{opacity:1;transform:none;border-color:rgba(199,180,137,.5);box-shadow:0 0 0 1px rgba(199,180,137,.14),0 16px 34px -16px rgba(199,180,137,.42)}
  #tskm .km-kpi-k{font-size:9.5px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:5px}
  #tskm .km-kpi-v{font-family:"Lineal TS",-apple-system,sans-serif;font-weight:600;font-size:clamp(18px,2vw,22px);color:#efe6d2;font-variant-numeric:tabular-nums;letter-spacing:-.01em}

  #tskm .km-note{max-width:660px;margin:22px auto 0;font-size:12px;color:rgba(255,255,255,.4);text-align:center}
  #tskm .km-foot{display:flex;justify-content:center;margin-top:26px}
  #tskm .km-replay{display:inline-flex;align-items:center;gap:9px;background:transparent;border:1px solid rgba(199,180,137,.45);color:#d8c9ab;border-radius:999px;padding:10px 22px;font-family:inherit;font-size:13px;font-weight:600;letter-spacing:.01em;cursor:pointer;transition:background .4s ease,border-color .4s ease,color .4s ease,transform .4s ease}
  #tskm .km-replay:hover{background:rgba(199,180,137,.12);border-color:rgba(199,180,137,.7);color:#efe6d2;transform:translateY(-1px)}
  #tskm .km-replay svg{width:15px;height:15px}

  @keyframes kmIn{to{opacity:1;transform:none}}
  @keyframes kmCore{to{opacity:1;transform:none}}
  @keyframes kmPulse{0%{box-shadow:0 26px 60px -30px rgba(0,0,0,.92),0 0 0 0 rgba(199,180,137,0)}42%{box-shadow:0 26px 60px -30px rgba(0,0,0,.92),0 0 36px 4px rgba(199,180,137,.36)}100%{box-shadow:0 26px 60px -30px rgba(0,0,0,.92),0 0 0 0 rgba(199,180,137,0)}}

  @media(max-width:820px){
    #tskm .km-stage{grid-template-columns:1fr;gap:20px}
    #tskm svg.km-lines{display:none}
    #tskm .km-col{flex-direction:row;flex-wrap:wrap;justify-content:center}
    #tskm .km-in{flex:1 1 40%;min-width:140px}
    #tskm .km-core{max-width:280px;margin:0 auto}
    #tskm .km-col-lbl{flex-basis:100%}
  }
  @media(prefers-reduced-motion:reduce){
    #tskm .km-wrap.playing .km-in,#tskm .km-wrap.playing .km-core{animation:none!important;opacity:1!important;transform:none!important}
    #tskm .km-wrap.playing .km-kpi{opacity:1!important;transform:none!important}
  }
  `;function h(){var t=document.createElement("div");t.id="tskm";var l=document.createElement("style");l.textContent=v,t.appendChild(l);var a=w.map(function(n){return'<div class="km-in"><span class="km-in-k">'+n.k+'</span><span class="km-in-v">'+n.v+"</span></div>"}).join(""),c=f.map(function(n){return'<div class="km-kpi" data-to="'+n.to+'" data-fmt="'+n.fmt+'"><div class="km-kpi-k">'+n.k+'</div><div class="km-kpi-v">'+b(n.to,n.fmt)+"</div></div>"}).join(""),k=document.createElement("div");for(k.innerHTML=`
<div class="km-head">
  <div class="km-eyebrow">So entsteht dein Cockpit</div>
  <h2 class="km-title">Aus dem Tagesgesch\xE4ft wird dein <span>Cockpit</span>.</h2>
  <p class="km-sub">Du tr\xE4gst die rohen Werte eines Tages ein \u2014 die Auswertung rechnet daraus live die Kennzahlen, mit denen du deinen Laden steuerst.</p>
</div>
<div class="km-wrap">
  <div class="km-stage">
    <svg class="km-lines" preserveAspectRatio="none"></svg>
    <div class="km-col">
      <div class="km-col-lbl">Deine Rohwerte</div>
      ${a}
    </div>
    <div class="km-core">
      <div class="km-core-ico"><svg viewBox="0 0 24 24" fill="none" stroke="#c7b489" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M9 20V4M14 20v-7M19 20V8"/></svg></div>
      <div class="km-core-name">Kostenauswertung</div>
      <div class="km-core-tag">Master \xB7 DB XX</div>
    </div>
    <div class="km-kpis">${c}</div>
  </div>
  <p class="km-note">Beispielwerte eines Betriebstags \u2014 die echten Zahlen rechnet deine Datenbank selbst.</p>
  <div class="km-foot">
    <button class="km-replay" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>Neu abspielen</button>
  </div>
</div>`;k.firstChild;)t.appendChild(k.firstChild);return Array.prototype.forEach.call(t.querySelectorAll(".km-in"),function(n,m){n.style.animationDelay=200+m*130+"ms"}),t.querySelector(".km-replay").addEventListener("click",function(){i(t,!0)}),t}function y(t,l,a,c){var k=(a-t)*.5,n="M "+t+" "+l+" C "+(t+k)+" "+l+" "+(a-k)+" "+c+" "+a+" "+c,m=document.createElementNS("http://www.w3.org/2000/svg","path");return m.setAttribute("d",n),m.setAttribute("class","km-line"),m}function u(t){var l=t.querySelector(".km-stage"),a=t.querySelector(".km-lines");if(!l||!a)return[];var c=l.getBoundingClientRect();if(!c.width)return[];for(a.setAttribute("viewBox","0 0 "+c.width+" "+c.height);a.firstChild;)a.removeChild(a.firstChild);var k=[],n=[],m=t.querySelector(".km-core").getBoundingClientRect(),g=m.left-c.left,M=m.right-c.left,_=m.top-c.top+m.height/2;return Array.prototype.forEach.call(t.querySelectorAll(".km-in"),function(z){var o=z.getBoundingClientRect(),S=y(o.right-c.left,o.top-c.top+o.height/2,g,_);a.appendChild(S),k.push(S)}),Array.prototype.forEach.call(t.querySelectorAll(".km-kpi"),function(z){var o=z.getBoundingClientRect(),S=y(M,_,o.left-c.left,o.top-c.top+o.height/2);a.appendChild(S),n.push(S)}),k.concat(n).map(function(z){return{p:z,left:k.indexOf(z)>=0}})}function d(t){var l=t.getTotalLength();t.style.strokeDasharray=l,t.style.strokeDashoffset=l,t.style.transition="none",t.getBoundingClientRect()}function e(t,l){t.style.transition="stroke-dashoffset .62s cubic-bezier(.16,1,.3,1) "+l+"ms, opacity .3s ease "+l+"ms",t.classList.add("on"),t.style.strokeDashoffset="0"}function r(t,l,a){var c=1050,k=null,n=0;function m(g){k||(k=g);var M=Math.min(1,(g-k)/c),_=1-Math.pow(1-M,3);if(M>=1){t.textContent=b(l,a);return}g-n>=38&&(t.textContent=b(l*_,a),n=g),requestAnimationFrame(m)}requestAnimationFrame(m)}function i(t,l){if(!t||t.__playing||t.__played&&!l)return;t.__played=!0,t.__playing=!0;var a=t.querySelector(".km-wrap");if(!a){t.__playing=!1;return}var c=t.querySelectorAll(".km-kpi"),k=window.matchMedia&&window.matchMedia("(prefers-reduced-motion:reduce)").matches;if(k){a.classList.add("playing"),Array.prototype.forEach.call(c,function(o){o.classList.add("lit"),o.querySelector(".km-kpi-v").textContent=b(parseFloat(o.getAttribute("data-to")),o.getAttribute("data-fmt"))});var n=u(t);n.forEach(function(o){o.p.classList.add("on"),o.p.style.strokeDasharray="none"}),t.__playing=!1;return}t.__timers&&t.__timers.forEach(clearTimeout),t.__timers=[];function m(o,S){t.__timers.push(setTimeout(o,S))}Array.prototype.forEach.call(c,function(o){o.classList.remove("lit"),o.querySelector(".km-kpi-v").textContent=b(0,o.getAttribute("data-fmt"))});var g=t.querySelector(".km-core");g.classList.remove("pulse"),a.classList.remove("playing"),a.offsetWidth,a.classList.add("playing"),a.style.transition="none",a.style.opacity="0",a.style.transform="translateY(22px)",a.offsetWidth,a.style.transition="opacity .85s ease, transform .95s cubic-bezier(.16,1,.3,1)",a.style.opacity="1",a.style.transform="none";var M=u(t);M.forEach(function(o){d(o.p)});var _=0,z=0;M.forEach(function(o){o.left&&(e(o.p,900+_*90),_++)}),M.forEach(function(o){o.left||(e(o.p,1780+z*110),z++)}),m(function(){g.classList.add("pulse")},1500),m(function(){g.classList.remove("pulse")},3050),Array.prototype.forEach.call(c,function(o,S){m(function(){o.classList.add("lit"),r(o.querySelector(".km-kpi-v"),parseFloat(o.getAttribute("data-to")),o.getAttribute("data-fmt"))},1980+S*175)}),m(function(){t.__playing=!1},3600)}function s(){if(!document.getElementById("tskmwk")){var t=document.getElementById("tskm")||document.getElementById("tskm-intro");if(t&&t.parentNode){var l=document.createElement("div");l.id="tskmwk",t.parentNode.insertBefore(l,t.nextSibling)}}}function p(){if(!E()){var t=document.getElementById("tskm");t&&t.parentNode&&t.parentNode.removeChild(t);return}if(s(),!document.getElementById("tskm")){var l=document.getElementById("tskm-intro");if(l){var a=h();l.parentNode.insertBefore(a,l.nextSibling),s(),L()}}}function L(){if(E()){var t=document.getElementById("tskm");if(!(!t||t.__played)){var l=t.getBoundingClientRect();l.top<window.innerHeight*.82&&l.bottom>60&&i(t)}}}var B=null;function D(){clearTimeout(B),B=setTimeout(function(){var t=document.getElementById("tskm");if(t&&t.__played){var l=u(t);l.forEach(function(a){a.p.classList.add("on"),a.p.style.strokeDasharray="none",a.p.style.strokeDashoffset="0"})}L()},160)}window.__tskm=!0,p(),document.addEventListener("DOMContentLoaded",p),window.__tsMO(p).observe(document.documentElement,{childList:!0,subtree:!0}),window.addEventListener("scroll",L,{passive:!0}),window.addEventListener("resize",D)})()}],[11,function(){(function(){if(window.__tskmvid)return;function E(){return/\/key-metrics\/?$/.test(location.pathname)}var w="https://tastyrob123.github.io/kurs-code/img/key-metrics/macbook-placeholder.svg",f=`
  #tskmvid{width:min(1180px,94vw);margin:56px auto 0;padding:0 clamp(16px,3vw,40px);box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif;color:#fff}
  #tskmvid *{box-sizing:border-box}
  #tskmvid .kv-row{display:flex;flex-direction:column;gap:26px}
  @media(min-width:768px){ #tskmvid .kv-row{flex-direction:row;align-items:center;gap:18px} #tskmvid .kv-pc,#tskmvid .kv-text{flex:0 0 calc((100% - 18px)*.5);width:calc((100% - 18px)*.5);min-width:0} }
  #tskmvid .kv-pc{display:flex;align-items:center;justify-content:center;position:relative}
  #tskmvid .kv-mac{position:relative;display:block;width:100%;cursor:pointer;line-height:0}
  #tskmvid .kv-mac img{width:100%;height:auto;display:block;filter:drop-shadow(0 22px 50px rgba(0,0,0,.55));transition:transform .5s cubic-bezier(.16,1,.3,1)}
  #tskmvid .kv-mac:hover img{transform:scale(1.02)}
  #tskmvid .kv-play{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none}
  #tskmvid .kv-play span{width:76px;height:76px;border-radius:50%;background:rgba(255,255,255,.16);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.55);display:flex;align-items:center;justify-content:center;transition:transform .3s ease,background .3s ease;margin-top:-6%}
  #tskmvid .kv-mac:hover .kv-play span{transform:scale(1.08);background:rgba(255,255,255,.26)}
  #tskmvid .kv-play span::after{content:"";border-style:solid;border-width:12px 0 12px 20px;border-color:transparent transparent transparent #fff;margin-left:5px}
  #tskmvid .kv-title{font-family:"Lineal TS",-apple-system,BlinkMacSystemFont,"SF Pro Display",sans-serif;font-weight:600;letter-spacing:-.02em;line-height:1.15;font-size:42px;text-align:center;white-space:nowrap;margin:0 0 18px}
  @media(max-width:900px){ #tskmvid .kv-title{font-size:clamp(1.9rem,4.4vw,42px);white-space:normal} }
  #tskmvid .kv-title .ts-gold{color:#c7b489}
  #tskmvid .kv-text p{font-size:15.5px;line-height:1.62;color:rgba(255,255,255,.86);margin:0 0 13px;text-align:left}
  #tskmvid .kv-text p:last-child{margin-bottom:0}
  #tskmvid .kv-text b{color:#c7b489;font-weight:600}
  #tskmvid .kv-outro{max-width:900px;margin:34px auto 0;text-align:center}
  #tskmvid .kv-outro p{font-size:15.5px;line-height:1.62;color:rgba(255,255,255,.86);margin:0}
  #tskmvid .kv-outro b{color:#c7b489;font-weight:600}
  /* 03 zeigt seinen Text auch auf Mobile (Ausblenden gilt nur fuer den Ergebnis-Blick 05) */

  /* Lightbox-Platzhalter */
  #tskmvid-lb{position:fixed;inset:0;z-index:9999;display:none;align-items:center;justify-content:center;background:rgba(4,5,10,.82);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}
  #tskmvid-lb.on{display:flex}
  #tskmvid-lb .kv-lb-box{width:min(900px,92vw);aspect-ratio:16/9;border-radius:16px;background:#0b0d14;border:1px solid rgba(199,180,137,.4);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.55);font-size:14px;text-align:center;padding:24px}
  #tskmvid-lb .kv-lb-close{position:absolute;top:22px;right:26px;width:40px;height:40px;border-radius:50%;background:rgba(11,13,20,.9);border:1px solid rgba(255,255,255,.3);color:#fff;font-size:20px;cursor:pointer;display:flex;align-items:center;justify-content:center}
  `;function b(){if(!document.getElementById("tskmvid-css")){var e=document.createElement("style");e.id="tskmvid-css",e.textContent=f,document.head.appendChild(e)}}function v(){var e=document.createElement("div");e.id="tskmvid",e.innerHTML=`
<div class="kv-row">
  <div class="kv-pc">
    <div class="kv-mac" role="button" tabindex="0" aria-label="Erkl\xE4rvideo abspielen">
      <img src="${w}" alt="Kostenauswertung Master \u2014 Erkl\xE4rvideo" loading="lazy" decoding="async">
      <div class="kv-play"><span></span></div>
    </div>
  </div>
  <div class="kv-text">
    <h2 class="kv-title">Was du misst, kannst du <span class="ts-gold">f\xFChren</span>.</h2>
    <p>Key Metrics sind die wenigen Zahlen, an denen du wirklich erkennst, ob dein Betrieb gesund l\xE4uft. Nicht der Umsatz allein z\xE4hlt, sondern das, was am Ende eines Monats von ihm \xFCbrig bleibt.</p>
    <p>Daf\xFCr tr\xE4gst du pro Monat nur ein, was ohnehin bei dir anf\xE4llt: <b>Umsatz, Wareneinsatz, Personalkosten</b>, geleistete Stunden und \xD6ffnungstage. Daraus entstehen <b>Deckungsbeitrag I, II und III</b>, dein Wareneinsatz in Prozent, die Produktivit\xE4t pro Stunde und der Durchschnittsbon.</p>
    <p>Alles beginnt beim Rahmen \u2014 der <b>Kostenauswertung Master</b>. Sie ist die Datenbank, auf der jede weitere Zahl aufbaut, noch bevor die erste Formel dazukommt.</p>
  </div>
</div>
<div class="kv-outro"><p>Leg jetzt in Notion eine leere Seite an und nenn sie <b>Kostenauswertung Master</b> \u2014 genau so geschrieben, den Namen brauchst du sp\xE4ter wieder. Keine Tabelle, keine Vorlage, die leere Seite reicht. Alles Weitere bauen wir gemeinsam: Direkt unter diesem Abschnitt entsteht deine Datenbank <b>Karte f\xFCr Karte</b>, und mit der ersten Spalte geht es gleich weiter.</p></div>`;var r=e.querySelector(".kv-mac");return r.addEventListener("click",y),r.addEventListener("keydown",function(i){(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),y())}),e}function h(){if(document.getElementById("tskmvid-lb"))return document.getElementById("tskmvid-lb");var e=document.createElement("div");return e.id="tskmvid-lb",e.innerHTML='<button class="kv-lb-close" aria-label="Schlie\xDFen">\xD7</button><div class="kv-lb-box">Das Erkl\xE4rvideo folgt \u2014 es wird nach Fertigstellung aller Lektionen aufgenommen und hier eingebettet.</div>',e.addEventListener("click",function(r){(r.target===e||r.target.className==="kv-lb-close")&&u()}),document.body.appendChild(e),document.addEventListener("keydown",function(r){r.key==="Escape"&&u()}),e}function y(){var e=h();e.classList.add("on")}function u(){var e=document.getElementById("tskmvid-lb");e&&e.classList.remove("on")}function d(){if(!E()){var e=document.getElementById("tskmvid");e&&e.parentNode&&e.parentNode.removeChild(e);return}if(!document.getElementById("tskmvid")){var r=document.getElementById("tskmwk"),i=document.getElementById("tskm");b();var s=v();if(r&&r.parentNode)r.parentNode.insertBefore(s,r);else if(i&&i.parentNode)i.parentNode.insertBefore(s,i.nextSibling);else return}}window.__tskmvid=!0,d(),document.addEventListener("DOMContentLoaded",d),window.__tsMO(d).observe(document.documentElement,{childList:!0,subtree:!0})})()}],[12,function(){(function(){if(window.__tskmtrend)return;window.__tskmtrend=!0;function E(){return/\/key-metrics\/?$/.test(location.pathname)}var w=["Jan","Feb","M\xE4r","Apr","Mai","Jun"],f=[27.6,28.1,28.4,29.3,30.8,30.2],b=28,v=580,h=300,y=46,u=20,d=28,e=36,r=26,i=32;function s(n){return y+n*(v-y-u)/(f.length-1)}function p(n){return d+(i-n)/(i-r)*(h-d-e)}function L(n){return n.toFixed(1).replace(".",",")+" %"}var B=`
  #tskmtrend{width:100vw;max-width:100vw;margin:64px 0 16px;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);padding:0 clamp(20px,5vw,72px);box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif;color:#fff}
  #tskmtrend *{box-sizing:border-box}
  #tskmtrend .tt-head{max-width:820px;margin:0 auto 34px;text-align:center}
  #tskmtrend .tt-eyebrow{display:inline-flex;align-items:center;gap:9px;font-size:.62rem;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#c7b489;margin-bottom:12px}
  #tskmtrend .tt-eyebrow::before{content:"";width:7px;height:7px;border-radius:50%;background:#c7b489;box-shadow:0 0 12px rgba(199,180,137,.7)}
  /* Zweit-Animation hat ihren EIGENEN Titel-Standard (kleiner als die Haupt-Erklaeranimation -> Hierarchie) */
  #tskmtrend .tt-title{font-family:"Lineal TS",-apple-system,BlinkMacSystemFont,"SF Pro Display",sans-serif;font-weight:600;letter-spacing:-.02em;line-height:1.12;font-size:clamp(24px,3.2vw,36px);margin:0 0 12px}
  #tskmtrend .tt-title span{color:#c7b489}
  #tskmtrend .tt-sub{font-size:15.5px;line-height:1.62;color:rgba(255,255,255,.86);margin:0;max-width:640px;margin-left:auto;margin-right:auto}

  #tskmtrend .tt-wrap{max-width:1080px;margin:0 auto;display:grid;grid-template-columns:minmax(210px,.62fr) minmax(320px,1fr);gap:clamp(24px,3.6vw,52px);align-items:center}
  #tskmtrend .tt-rowlbl{font-size:9.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.4);margin-bottom:10px}
  #tskmtrend .tt-rows{display:flex;flex-direction:column;gap:7px}
  /* opake Basis (Katalog 02): sonst scheinen Linien/Hintergrund durch */
  #tskmtrend .tt-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:9px 13px;border-radius:10px;
    background:linear-gradient(rgba(255,255,255,.035),rgba(255,255,255,.035)),#05060b;border:1px solid rgba(255,255,255,.10);
    transition:border-color .45s ease,box-shadow .45s ease,background .45s ease}
  #tskmtrend .tt-row .m{font-size:12.5px;font-weight:600;color:rgba(255,255,255,.62);letter-spacing:.02em}
  #tskmtrend .tt-row .v{font-size:14px;font-weight:700;color:#efe6d2;font-variant-numeric:tabular-nums}
  #tskmtrend .tt-row.lit{border-color:rgba(199,180,137,.5);box-shadow:0 0 0 1px rgba(199,180,137,.13),0 14px 30px -16px rgba(199,180,137,.4)}
  #tskmtrend .tt-row.over{border-color:rgba(227,93,118,.55);box-shadow:0 0 0 1px rgba(227,93,118,.14),0 14px 30px -16px rgba(227,93,118,.42)}
  #tskmtrend .tt-row.over .v{color:#e35d76}
  #tskmtrend .tt-chart{position:relative}
  #tskmtrend svg{display:block;width:100%;height:auto;overflow:visible}
  #tskmtrend .tt-grid{stroke:rgba(255,255,255,.07);stroke-width:1}
  #tskmtrend .tt-ax{fill:rgba(255,255,255,.42);font-size:11px;font-family:inherit}
  #tskmtrend .tt-mx{fill:rgba(255,255,255,.55);font-size:11.5px;font-weight:600;font-family:inherit;text-anchor:middle}
  #tskmtrend .tt-target{stroke:rgba(255,255,255,.34);stroke-width:1.5;stroke-dasharray:5 6}
  #tskmtrend .tt-tlabel{fill:rgba(255,255,255,.5);font-size:11px;font-weight:600;font-family:inherit}
  #tskmtrend .tt-line{fill:none;stroke:#c7b489;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;filter:drop-shadow(0 2px 7px rgba(199,180,137,.32))}
  #tskmtrend .tt-dot circle{fill:#c7b489;stroke:#05060b;stroke-width:2}
  #tskmtrend .tt-dot.over circle{fill:#e35d76}
  #tskmtrend .tt-dot text{fill:#efe6d2;font-size:11.5px;font-weight:700;font-family:inherit;font-variant-numeric:tabular-nums}
  #tskmtrend .tt-dot.over text{fill:#e35d76}
  #tskmtrend .tt-note{max-width:700px;margin:26px auto 0;font-size:15.5px;line-height:1.62;color:rgba(255,255,255,.86);text-align:center}
  #tskmtrend .tt-note b{color:#c7b489;font-weight:600}
  #tskmtrend .tt-note .warn{color:#e35d76;font-weight:600}
  #tskmtrend .tt-foot{display:flex;justify-content:center;margin-top:24px}
  #tskmtrend .tt-replay{display:inline-flex;align-items:center;gap:9px;background:transparent;border:1px solid rgba(199,180,137,.45);color:#d8c9ab;border-radius:999px;padding:10px 22px;font-family:inherit;font-size:13px;font-weight:600;cursor:pointer;transition:background .4s ease,border-color .4s ease,color .4s ease,transform .4s ease}
  #tskmtrend .tt-replay:hover{background:rgba(199,180,137,.12);border-color:rgba(199,180,137,.7);color:#efe6d2;transform:translateY(-1px)}
  #tskmtrend .tt-replay svg{width:15px;height:15px}

  /* --- Animationszustaende: NUR waehrend .playing. Default = Endzustand (P10) --- */
  #tskmtrend .tt-wrap.playing .tt-row{opacity:0;transform:translateX(-12px);animation:ttRow .55s cubic-bezier(.34,1.56,.64,1) both}
  #tskmtrend .tt-wrap.playing .tt-target,#tskmtrend .tt-wrap.playing .tt-tlabel{opacity:0;animation:ttFade .5s ease forwards}
  #tskmtrend .tt-wrap.playing .tt-dot{opacity:0;transform:scale(.4);animation:ttDot .5s cubic-bezier(.34,1.56,.64,1) both}
  #tskmtrend .tt-wrap.playing .tt-row:not(.lit):not(.over){border-color:rgba(255,255,255,.10);box-shadow:none}
  @keyframes ttRow{to{opacity:1;transform:none}}
  @keyframes ttFade{to{opacity:1}}
  @keyframes ttDot{to{opacity:1;transform:none}}

  @media(max-width:860px){
    #tskmtrend .tt-wrap{grid-template-columns:1fr;gap:22px}
    #tskmtrend .tt-rows{display:grid;grid-template-columns:1fr 1fr;gap:8px}
  }
  @media(prefers-reduced-motion:reduce){
    #tskmtrend .tt-wrap.playing .tt-row,#tskmtrend .tt-wrap.playing .tt-dot,
    #tskmtrend .tt-wrap.playing .tt-target,#tskmtrend .tt-wrap.playing .tt-tlabel{animation:none!important;opacity:1!important;transform:none!important}
  }
  `;function D(){if(!document.getElementById("tskmtrend-css")){var n=document.createElement("style");n.id="tskmtrend-css",n.textContent=B,document.head.appendChild(n)}}function t(){var n=document.createElement("div");n.id="tskmtrend";for(var m="",g=0;g<w.length;g++){var M=f[g]>b;m+='<div class="tt-row'+(M?" over":" lit")+'" data-i="'+g+'"><span class="m">'+w[g]+'</span><span class="v">'+L(f[g])+"</span></div>"}for(var _="",z=r;z<=i;z+=2)_+='<line class="tt-grid" x1="'+y+'" y1="'+p(z).toFixed(1)+'" x2="'+(v-u)+'" y2="'+p(z).toFixed(1)+'"/><text class="tt-ax" x="'+(y-9)+'" y="'+(p(z)+4).toFixed(1)+'" text-anchor="end">'+z+"</text>";for(var o="",S=0;S<w.length;S++)o+='<text class="tt-mx" x="'+s(S).toFixed(1)+'" y="'+(h-e+20)+'">'+w[S]+"</text>";for(var F="",I=0;I<f.length;I++)F+=(I?" L ":"M ")+s(I).toFixed(1)+" "+p(f[I]).toFixed(1);for(var A="",x=0;x<f.length;x++){var C=f[x]>b,N=x===0?"start":x===f.length-1?"end":"middle",T=x===0?s(x)+9:x===f.length-1?s(x)-9:s(x);A+='<g class="tt-dot'+(C?" over":"")+'" data-i="'+x+'" style="transform-origin:'+s(x).toFixed(1)+"px "+p(f[x]).toFixed(1)+'px"><circle cx="'+s(x).toFixed(1)+'" cy="'+p(f[x]).toFixed(1)+'" r="5.4"/><text text-anchor="'+N+'" x="'+T.toFixed(1)+'" y="'+(p(f[x])-13).toFixed(1)+'">'+f[x].toFixed(1).replace(".",",")+"</text></g>"}return n.innerHTML=`
<div class="tt-head">
  <div class="tt-eyebrow">Kennzahlen \xFCber die Zeit</div>
  <h2 class="tt-title">Der Trend zeigt es <span>fr\xFCher</span>.</h2>
  <p class="tt-sub">Eine einzelne Zahl sagt wenig. Erst die Reihe \xFCber die Monate zeigt, wohin es l\xE4uft \u2014 hier dein Wareneinsatz gegen die Ziellinie von 28 %.</p>
</div>
<div class="tt-wrap">
  <div>
    <div class="tt-rowlbl">Kostenauswertung Master</div>
    <div class="tt-rows">${m}</div>
  </div>
  <div class="tt-chart">
    <svg viewBox="0 0 ${v} ${h}" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      ${_}${o}
      <line class="tt-target" x1="${y}" y1="${p(b).toFixed(1)}" x2="${v-u}" y2="${p(b).toFixed(1)}"/>
      <text class="tt-tlabel" x="${v-u}" y="${(p(b)-8).toFixed(1)}" text-anchor="end">Ziel 28 %</text>
      <path class="tt-line" d="${F}"/>
      ${A}
    </svg>
  </div>
</div>
<p class="tt-note">Schon ab <span class="warn">Februar</span> liegt der Wareneinsatz \xFCber der Ziellinie \u2014 ab <span class="warn">April</span> zieht er deutlich weg. Die Kennzahl warnt dich, <b>bevor</b> der Monatsabschluss es tut.</p>
<div class="tt-foot"><button class="tt-replay" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>Neu abspielen</button></div>`,n.querySelector(".tt-replay").addEventListener("click",function(){l(n,!0)}),n}function l(n,m){if(!n||n.__playing||n.__played&&!m)return;n.__played=!0,n.__playing=!0;var g=n.querySelector(".tt-wrap");if(!g){n.__playing=!1;return}var M=window.matchMedia&&window.matchMedia("(prefers-reduced-motion:reduce)").matches,_=n.querySelectorAll(".tt-row"),z=n.querySelectorAll(".tt-dot"),o=n.querySelector(".tt-line");n.__t&&n.__t.forEach(clearTimeout),n.__t=[];function S(x,C){n.__t.push(setTimeout(x,C))}if(M){g.classList.remove("playing"),o.style.strokeDasharray="none",o.style.strokeDashoffset="0",n.__playing=!1;return}g.classList.remove("playing"),g.offsetWidth,g.classList.add("playing"),_.forEach(function(x,C){x.classList.remove("lit","over"),x.style.animationDelay=200+C*120+"ms"}),z.forEach(function(x,C){x.style.animationDelay=1500+C*150+"ms"});var F=n.querySelector(".tt-target"),I=n.querySelector(".tt-tlabel");F.style.animationDelay="1050ms",I.style.animationDelay="1150ms";var A=o.getTotalLength();o.style.transition="none",o.style.strokeDasharray=A,o.style.strokeDashoffset=A,o.getBoundingClientRect(),o.style.transition="stroke-dashoffset 1.05s cubic-bezier(.16,1,.3,1) 1650ms",o.style.strokeDashoffset="0",_.forEach(function(x,C){S(function(){x.classList.add(f[C]>b?"over":"lit")},1560+C*150)}),S(function(){n.__playing=!1},3400)}function a(){if(E()){var n=document.getElementById("tskmtrend");if(!(!n||n.__played)){var m=n.getBoundingClientRect();m.top<window.innerHeight*.82&&m.bottom>60&&l(n)}}}function c(n){for(var m=null,g=0;g<n.length;g++){var M=document.getElementById(n[g]);M&&(m=M)}return m}function k(){if(!E()){var n=document.getElementById("tskmtrend");n&&n.parentNode&&n.parentNode.removeChild(n);return}if(!document.getElementById("tskmtrend")){var m=c(["tskmwk","tskm2mac"]);if(!(!m||!m.parentNode)){D();var g=t();m.parentNode.insertBefore(g,m.nextSibling),a()}}}k(),document.addEventListener("DOMContentLoaded",k),window.__tsMO(k).observe(document.documentElement,{childList:!0,subtree:!0}),window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a)})()}],[13,function(){(function(){if(window.__tskm2mac)return;function E(){return/\/key-metrics\/?$/.test(location.pathname)}function w(i){for(var s=null,p=0;p<i.length;p++){var L=document.getElementById(i[p]);L&&(s=L)}return s}var f="https://tastyrob123.github.io/kurs-code/img/key-metrics/macbook-placeholder.svg",b="https://tastyrob123.github.io/kurs-code/img/key-metrics/db-scroll-placeholder.svg",v=`
  #tskm2mac{width:min(1180px,94vw);margin:clamp(30px,4vh,58px) auto 0;padding:0 clamp(16px,3vw,40px);box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif;color:#fff}
  #tskm2mac *{box-sizing:border-box}
  #tskm2mac .km2-row{display:flex;flex-direction:column;gap:26px}
  @media(min-width:768px){ #tskm2mac .km2-row{flex-direction:row;align-items:center;gap:clamp(20px,4vw,64px)} #tskm2mac .km2-text,#tskm2mac .km2-pc{flex:1 1 50%;min-width:0} }
  /* Katalog 05: native h3-Groesse clamp(25px,2.8vw,32px)/1.2, linksbuendig, Abstaende 28/12 (Robert-Korrektur 21.07.2026 \u2014 war 34.4px, ueber dem Cap) */
  #tskm2mac .km2-title{font-family:"Lineal TS",-apple-system,BlinkMacSystemFont,"SF Pro Display",sans-serif;font-weight:600;letter-spacing:-.015em;line-height:1.2;font-size:clamp(25px,2.8vw,32px);margin:28px 0 12px;text-align:left}
  #tskm2mac .km2-title .ts-gold{color:#c7b489}
  #tskm2mac .km2-text p{font-size:15.5px;line-height:1.62;color:rgba(255,255,255,.86);margin:0 0 13px;text-align:left}
  #tskm2mac .km2-text p:last-child{margin-bottom:0}
  #tskm2mac .km2-text b{color:#c7b489;font-weight:600}
  #tskm2mac .km2-pc{display:flex;flex-direction:column;align-items:center}
  #tskm2mac .km2-tile{position:relative;display:block;width:100%;max-width:520px;cursor:pointer;line-height:0;background:transparent}
  #tskm2mac .km2-tile img{width:100%;height:auto;display:block;filter:drop-shadow(0 18px 44px rgba(0,0,0,.5));transition:transform .5s cubic-bezier(.16,1,.3,1)}
  #tskm2mac .km2-tile:hover img{transform:translateY(-4px) scale(1.02)}
  #tskm2mac .km2-cap{margin-top:12px;font-size:15px;font-weight:600;color:#fff;text-align:center}
  #tskm2mac .km2-cap .g{color:#c7b489}
  #tskm2mac .km2-hint{margin-top:5px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.4);text-align:center;animation:km2pulse 2.6s ease-in-out infinite}
  @keyframes km2pulse{0%,100%{opacity:.4}50%{opacity:.85}}
  @media(max-width:820px){ #tskm2mac .km2-text{display:none} }
  #tskm2mac-lb{position:fixed;inset:0;z-index:9999;display:none;align-items:center;justify-content:center;background:rgba(4,5,10,.85);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);padding:clamp(16px,4vh,48px)}
  #tskm2mac-lb.on{display:flex}
  #tskm2mac-lb .km2-lb-screen{width:min(1000px,94vw);max-height:88vh;overflow-y:auto;border-radius:14px;border:1px solid rgba(199,180,137,.4);background:#0b0d14;box-shadow:0 30px 80px rgba(0,0,0,.7)}
  #tskm2mac-lb .km2-lb-screen img{width:100%;height:auto;display:block}
  #tskm2mac-lb .km2-lb-screen::-webkit-scrollbar{width:8px}
  #tskm2mac-lb .km2-lb-screen::-webkit-scrollbar-thumb{background:rgba(199,180,137,.4);border-radius:8px}
  #tskm2mac-lb .km2-lb-close{position:absolute;top:20px;right:24px;width:42px;height:42px;border-radius:50%;background:rgba(11,13,20,.92);border:1px solid rgba(255,255,255,.32);color:#fff;font-size:22px;cursor:pointer;display:flex;align-items:center;justify-content:center}
  `;function h(){if(!document.getElementById("tskm2mac-css")){var i=document.createElement("style");i.id="tskm2mac-css",i.textContent=v,document.head.appendChild(i)}}function y(){var i=document.createElement("div");i.id="tskm2mac",i.innerHTML=`
<div class="km2-row">
  <div class="km2-text">
    <h3 class="km2-title">Ein Monat, eine <span class="ts-gold">Zeile</span>.</h3>
    <p>So sieht die Kostenauswertung Master aus, wenn sie l\xE4uft: Du tr\xE4gst am Monatsende deine Werte ein, die fertigen <b>Kennzahlen</b> stehen Sekunden sp\xE4ter daneben. Keine Nebenrechnung, keine zweite Tabelle.</p>
    <p>Weil jede Zeile gleich aufgebaut ist, lassen sich die <b>Monate direkt nebeneinanderlegen</b>. Was sich verschoben hat, steht untereinander statt in zwei getrennten Auswertungen, die du erst gegeneinander halten m\xFCsstest.</p>
    <p>Und genau dort f\xE4llt der eine Monat auf, der <b>aus der Reihe springt</b>. Du siehst ihn, bevor du ihn am Kontostand merkst, und kannst nachsehen, was in diesem Monat anders lief: im Einkauf oder im Dienstplan.</p>
  </div>
  <div class="km2-pc">
    <div class="km2-tile" role="button" tabindex="0" aria-label="Datenbank vergr\xF6\xDFern">
      <img src="${f}" alt="Kostenauswertung Master \u2014 fertige Datenbank" loading="lazy" decoding="async">
    </div>
    <div class="km2-cap">Kostenauswertung Master <span class="g">\u2013 Live Beispiel</span></div>
    <div class="km2-hint">Klicke zum Vergr\xF6\xDFern</div>
  </div>
</div>`;var s=i.querySelector(".km2-tile");return s.addEventListener("click",d),s.addEventListener("keydown",function(p){(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),d())}),i}function u(){if(document.getElementById("tskm2mac-lb"))return document.getElementById("tskm2mac-lb");var i=document.createElement("div");return i.id="tskm2mac-lb",i.innerHTML='<button class="km2-lb-close" aria-label="Schlie\xDFen">\xD7</button><div class="km2-lb-screen"><img src="'+b+'" alt="Kostenauswertung Master \u2014 Ganzansicht" loading="lazy" decoding="async"></div>',i.addEventListener("click",function(s){(s.target===i||s.target.className==="km2-lb-close")&&e()}),document.body.appendChild(i),document.addEventListener("keydown",function(s){s.key==="Escape"&&e()}),i}function d(){var i=u();i.classList.add("on");var s=i.querySelector(".km2-lb-screen");s&&(s.scrollTop=0)}function e(){var i=document.getElementById("tskm2mac-lb");i&&i.classList.remove("on")}function r(){if(!E()){var i=document.getElementById("tskm2mac");i&&i.parentNode&&i.parentNode.removeChild(i);return}if(!document.getElementById("tskm2mac")){var s=w(["tskmwk"]);if(!(!s||!s.parentNode)){h();var p=y();s.parentNode.insertBefore(p,s.nextSibling)}}}window.__tskm2mac=!0,r(),document.addEventListener("DOMContentLoaded",r),window.__tsMO(r).observe(document.documentElement,{childList:!0,subtree:!0})})()}],[14,function(){(function(){if(window.__tskmemp)return;function E(){return/\/key-metrics\/?$/.test(location.pathname)}function w(e){for(var r=null,i=0;i<e.length;i++){var s=document.getElementById(e[i]);s&&(r=s)}return r}var f=[{n:"01",l:"Werte eintragen"},{n:"02",l:"Kennzahlen lesen"},{n:"03",l:"Ausrei\xDFer finden"},{n:"04",l:"Ursache angehen"}],b=`
  #tskmemp{width:min(1000px,95vw);margin:34px auto;padding:clamp(26px,4vw,44px) clamp(24px,4.5vw,50px);box-sizing:border-box;position:relative;border-radius:20px;overflow:hidden;
    background:linear-gradient(165deg,rgba(255,255,255,.05),rgba(255,255,255,0));border:1px solid rgba(255,255,255,.10);
    box-shadow:0 30px 70px -34px rgba(0,0,0,.9),inset 0 1px 0 rgba(255,255,255,.05);
    font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif;color:#fff;
    transform:perspective(1100px) rotateX(9deg) translateY(34px) scale(.97);opacity:0;transition:transform .9s cubic-bezier(.16,1,.3,1),opacity .9s ease}
  #tskmemp.in{transform:perspective(1100px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg));opacity:1}
  #tskmemp *{box-sizing:border-box}
  #tskmemp::after{content:"";position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,rgba(199,180,137,0),rgba(199,180,137,.7),rgba(199,180,137,0))}
  #tskmemp::before{content:"";position:absolute;width:560px;height:560px;border-radius:50%;left:var(--gx,50%);top:var(--gy,50%);transform:translate(-50%,-50%);pointer-events:none;opacity:0;transition:opacity .4s ease;background:radial-gradient(circle,rgba(199,180,137,.10),rgba(199,180,137,0) 62%)}
  #tskmemp.glow::before{opacity:1}
  #tskmemp.beat{animation:tskmempBeat 2.6s ease-in-out}
  @keyframes tskmempBeat{0%,100%{box-shadow:0 30px 70px -34px rgba(0,0,0,.9),inset 0 1px 0 rgba(255,255,255,.05)}50%{box-shadow:0 30px 80px -30px rgba(0,0,0,.9),0 0 44px rgba(199,180,137,.22),inset 0 1px 0 rgba(255,255,255,.05)}}
  #tskmemp .emp-grid{position:relative;display:grid;grid-template-columns:minmax(260px,1fr) 1.5fr;gap:clamp(28px,4.5vw,56px);align-items:center}
  #tskmemp svg.emp-link{position:absolute;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none;z-index:3}
  #tskmemp .emp-link path{fill:none;stroke:rgba(199,180,137,.7);stroke-width:1.4;stroke-linecap:round;opacity:0;transition:opacity .4s ease}
  #tskmemp .emp-link path.on{opacity:1}
  #tskmemp .emp-link circle{fill:#efe6d2;opacity:0;transition:opacity .4s ease}
  #tskmemp .emp-link circle.on{opacity:1}
  /* left animation */
  #tskmemp .emp-anim{position:relative;z-index:2;display:flex;flex-direction:column;gap:11px}
  #tskmemp .emp-anim-hd{font-family:"Lineal TS",-apple-system,sans-serif;font-weight:600;font-size:1.15rem;color:#fff;margin:0 0 6px}
  #tskmemp .emp-anim-hd span{color:#c7b489}
  #tskmemp .emp-step{display:flex;align-items:center;gap:13px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.10);border-radius:13px;padding:11px 15px;transition:background .5s ease,border-color .5s ease,box-shadow .5s ease;opacity:0;transform:translateX(-10px)}
  #tskmemp.in .emp-step{opacity:1;transform:none;transition:background .5s ease,border-color .5s ease,box-shadow .5s ease,opacity .6s ease,transform .6s ease}
  #tskmemp.in .emp-step:nth-child(1){transition-delay:.15s}#tskmemp.in .emp-step:nth-child(2){transition-delay:.28s}#tskmemp.in .emp-step:nth-child(3){transition-delay:.41s}#tskmemp.in .emp-step:nth-child(4){transition-delay:.54s}
  #tskmemp .emp-step.on{background:rgba(199,180,137,.13);border-color:rgba(199,180,137,.5);box-shadow:0 0 0 1px rgba(199,180,137,.14),0 14px 30px -16px rgba(199,180,137,.4)}
  #tskmemp .emp-step-n{flex:0 0 auto;width:30px;height:30px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:rgba(255,255,255,.55);background:rgba(255,255,255,.06);transition:background .5s ease,color .5s ease}
  #tskmemp .emp-step.on .emp-step-n{background:#c7b489;color:#05060b}
  #tskmemp .emp-step-l{font-size:14px;font-weight:600;color:rgba(255,255,255,.75)}
  #tskmemp .emp-step.on .emp-step-l{color:#fff}
  /* right text */
  #tskmemp .emp-text{position:relative;z-index:2}
  #tskmemp .emp-h{font-family:"Lineal TS",-apple-system,sans-serif;font-weight:600;font-size:1.45rem;color:#fff;margin:0 0 10px}
  #tskmemp .emp-h .eg{color:#c7b489}
  #tskmemp .emp-intro{font-size:.96rem;line-height:1.7;color:rgba(255,255,255,.86);margin:0 0 16px}
  #tskmemp .emp-ol{list-style:none;margin:0;padding:0;counter-reset:emp}
  #tskmemp .emp-ol li{position:relative;counter-increment:emp;padding:10px 14px 10px 44px;border-radius:11px;font-size:.92rem;line-height:1.55;color:rgba(255,255,255,.62);transition:background .5s ease,color .5s ease,box-shadow .5s ease;margin-bottom:6px}
  #tskmemp .emp-ol li::before{content:counter(emp,decimal-leading-zero);position:absolute;left:14px;top:10px;font-size:11px;font-weight:700;color:#c7b489;font-variant-numeric:tabular-nums}
  #tskmemp .emp-ol li.lit{background:rgba(199,180,137,.10);color:#fff;box-shadow:inset 0 0 0 1px rgba(199,180,137,.22)}
  #tskmemp .emp-ol li b{color:#c7b489;font-weight:600}
  @media(max-width:900px){ #tskmemp .emp-grid{grid-template-columns:1fr;gap:26px} #tskmemp svg.emp-link{display:none} }
  @media(prefers-reduced-motion:reduce){ #tskmemp{transform:none;opacity:1} #tskmemp .emp-step{opacity:1;transform:none} }
  `;function v(){if(!document.getElementById("tskmemp-css")){var e=document.createElement("style");e.id="tskmemp-css",e.textContent=b,document.head.appendChild(e)}}function h(){var e=document.createElement("div");e.id="tskmemp";var r=f.map(function(i,s){return'<div class="emp-step" data-i="'+s+'"><span class="emp-step-n">'+i.n+'</span><span class="emp-step-l">'+i.l+"</span></div>"}).join("");return e.innerHTML=`
<div class="emp-grid">
  <svg class="emp-link" preserveAspectRatio="none"><path/><circle r="3.5" class="c1"/><circle r="3.5" class="c2"/></svg>
  <div class="emp-anim">
    <div class="emp-anim-hd">Deine <span>Monatsroutine</span></div>
    ${r}
  </div>
  <div class="emp-text">
    <h3 class="emp-h">Empfehlung zur <span class="eg">Nutzung</span></h3>
    <p class="emp-intro">Damit die Kostenauswertung Master dir wirklich etwas bringt, mach sie zu einer festen Monatsroutine:</p>
    <ol class="emp-ol">
      <li data-i="0">Am Monatsende die echten Werte eintragen: Umsatz aus Store, Lieferando und Wolt, Wareneinsatz, Personalkosten, geleistete Stunden und \xD6ffnungstage.</li>
      <li data-i="1">Die fertigen Kennzahlen durchgehen \u2014 vor allem <b>Wareneinsatz in Prozent</b>, deine Deckungsbeitr\xE4ge und die Produktivit\xE4t pro Stunde.</li>
      <li data-i="2">Ausrei\xDFer suchen: eine Zahl, die aus der Reihe f\xE4llt. Klettert dein Wareneinsatz \xFCber deinen Zielwert, ist das dein Signal.</li>
      <li data-i="3">Der Ursache nachgehen \u2014 Einkaufspreise, Portionsgr\xF6\xDFen und Verkaufspreise pr\xFCfen \u2014 und den n\xE4chsten Monat daran messen.</li>
    </ol>
  </div>
</div>`,e}function y(e){var r=e.querySelector(".emp-grid"),i=e.querySelector(".emp-link"),s=e.querySelector(".emp-step.on"),p=e.querySelector(".emp-ol li.lit"),L=i.querySelector("path"),B=i.querySelector(".c1"),D=i.querySelector(".c2");if(!s||!p){L.classList.remove("on"),B.classList.remove("on"),D.classList.remove("on");return}var t=r.getBoundingClientRect(),l=s.getBoundingClientRect(),a=p.getBoundingClientRect(),c=l.right-t.left,k=l.top-t.top+l.height/2,n=a.left-t.left,m=a.top-t.top+a.height/2,g=(n-c)*.5;L.setAttribute("d","M "+c+" "+k+" C "+(c+g)+" "+k+" "+(n-g)+" "+m+" "+n+" "+m),B.setAttribute("cx",c),B.setAttribute("cy",k),D.setAttribute("cx",n),D.setAttribute("cy",m),L.classList.add("on"),B.classList.add("on"),D.classList.add("on")}function u(e){var r=e.querySelectorAll(".emp-step"),i=e.querySelectorAll(".emp-ol li"),s=-1,p=null;function L(){s=(s+1)%r.length,Array.prototype.forEach.call(r,function(a,c){a.classList.toggle("on",c===s)}),Array.prototype.forEach.call(i,function(a,c){a.classList.toggle("lit",c===s)}),requestAnimationFrame(function(){y(e)})}function B(){p||(L(),p=setInterval(L,2600))}function D(){p&&(clearInterval(p),p=null)}var t=window.matchMedia&&window.matchMedia("(prefers-reduced-motion:reduce)").matches,l=new IntersectionObserver(function(a){a[0].isIntersecting?(e.classList.add("in"),t||B()):D()},{threshold:.3});l.observe(e),window.matchMedia&&window.matchMedia("(hover:hover)").matches&&(e.addEventListener("mousemove",function(a){var c=e.getBoundingClientRect(),k=(a.clientX-c.left)/c.width,n=(a.clientY-c.top)/c.height;e.style.setProperty("--ry",((k-.5)*5).toFixed(2)+"deg"),e.style.setProperty("--rx",((.5-n)*4).toFixed(2)+"deg"),e.style.setProperty("--gx",(k*100).toFixed(1)+"%"),e.style.setProperty("--gy",(n*100).toFixed(1)+"%"),e.classList.add("glow")}),e.addEventListener("mouseenter",function(){e.classList.add("beat")}),e.addEventListener("mouseleave",function(){e.style.setProperty("--ry","0deg"),e.style.setProperty("--rx","0deg"),e.classList.remove("glow","beat")})),window.addEventListener("resize",function(){requestAnimationFrame(function(){y(e)})}),t&&(e.classList.add("in"),r[0]&&r[0].classList.add("on"),i[0]&&i[0].classList.add("lit"))}function d(){if(!E()){var e=document.getElementById("tskmemp");e&&e.parentNode&&e.parentNode.removeChild(e);return}if(!document.getElementById("tskmemp")){var r=w(["tskmwk","tskm2mac","tskmtrend"]);if(!(!r||!r.parentNode)){v();var i=h();r.parentNode.insertBefore(i,r.nextSibling),u(i)}}}window.__tskmemp=!0,d(),document.addEventListener("DOMContentLoaded",d),window.__tsMO(d).observe(document.documentElement,{childList:!0,subtree:!0})})()}],[15,function(){(function(){if(window.__tskmnext)return;function E(){return/\/key-metrics\/?$/.test(location.pathname)}function w(d){for(var e=null,r=0;r<d.length;r++){var i=document.getElementById(d[r]);i&&(e=i)}return e}var f="/operations-area",b=["Du hast die <b>Kostenauswertung Master</b> gebaut \u2014 jeder Monat eine Zeile mit allen Kennzahlen.","Du verstehst <b>Deckungsbeitrag I, II und III</b> \u2014 und was zwischen den Stufen abgezogen wird.","Du wei\xDFt, wie <b>Wareneinsatz&nbsp;%</b>, Produktivit\xE4t und Durchschnittsbon entstehen.","Du kannst <b>Monate vergleichen</b> und Ausrei\xDFer erkennen, bevor sie die Marge kosten."],v=`
  #tskmnext{width:100%;margin-top:44px;padding:0 clamp(20px,4vw,56px);box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif;color:#fff}
  #tskmnext *{box-sizing:border-box}
  #tskmnext .tsl-head{text-align:center;margin-bottom:66px}
  #tskmnext .tsl-eyebrow{font-family:"Lineal TS",-apple-system,sans-serif;font-weight:600;font-size:.62rem;letter-spacing:.16em;text-transform:uppercase;color:#c7b489;display:block;margin-bottom:14px}
  #tskmnext .tsl-title{font-family:"Lineal TS",-apple-system,sans-serif;font-weight:600;font-size:clamp(30px,5vw,46px);line-height:1.05;color:#fff;margin:0}
  #tskmnext .tsl-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:clamp(20px,3vw,40px);max-width:1180px;margin:0 auto}
  #tskmnext .tsl-cell{display:flex;justify-content:center}
  #tskmnext .tsl-orb{position:relative;width:100%;max-width:250px;aspect-ratio:1;border-radius:50%;display:flex;align-items:center;justify-content:center;text-align:center;padding:14%;
    background:radial-gradient(120% 120% at 30% 26%,rgba(199,180,137,.20),rgba(255,255,255,.03) 46%,rgba(255,255,255,.015));
    border:1px solid rgba(255,255,255,.12);box-shadow:0 30px 60px -30px rgba(0,0,0,.85),inset 0 1px 0 rgba(255,255,255,.06),inset 0 0 40px rgba(199,180,137,.06);
    opacity:0;transform:translateY(22px);filter:blur(8px);transition:opacity .8s ease,transform .9s cubic-bezier(.16,1,.3,1),filter .8s ease,border-color .4s ease,box-shadow .4s ease}
  #tskmnext .tsl-orb::after{content:"";position:absolute;top:14%;left:16%;width:26%;height:20%;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.22),rgba(255,255,255,0) 70%);pointer-events:none}
  #tskmnext.in .tsl-orb{opacity:1;transform:none;filter:none;animation:tslFloat 7s ease-in-out infinite}
  #tskmnext.in .tsl-cell:nth-child(1) .tsl-orb{transition-delay:0s;animation-delay:0s}
  #tskmnext.in .tsl-cell:nth-child(2) .tsl-orb{transition-delay:.14s;animation-delay:-1.6s}
  #tskmnext.in .tsl-cell:nth-child(3) .tsl-orb{transition-delay:.28s;animation-delay:-3.2s}
  #tskmnext.in .tsl-cell:nth-child(4) .tsl-orb{transition-delay:.42s;animation-delay:-4.8s}
  #tskmnext .tsl-orb:hover{border-color:rgba(199,180,137,.5);box-shadow:0 30px 60px -28px rgba(0,0,0,.85),0 0 34px rgba(199,180,137,.2),inset 0 1px 0 rgba(255,255,255,.06)}
  #tskmnext .tsl-t{position:relative;z-index:1;color:rgba(255,255,255,.9);font-size:clamp(12.5px,1.15vw,15px);font-weight:500;line-height:1.5;max-width:22ch}
  #tskmnext .tsl-t b{color:#c7b489;font-weight:700}
  @keyframes tslFloat{0%,100%{translate:0 0}50%{translate:0 -11px}}
  #tskmnext #ts-next-wrap{display:flex;justify-content:center;margin:48px 0 72px}
  #tskmnext #ts-next{display:inline-flex;align-items:center;gap:9px;height:44px;padding:0 28px;border-radius:9999px;background:#c7b489;color:#05060b;font-family:inherit;font-size:14px;font-weight:700;letter-spacing:.01em;border:none;cursor:pointer;text-decoration:none;transition:background .3s ease,transform .3s ease,box-shadow .3s ease}
  #tskmnext #ts-next:hover{background:#d8c9ab;transform:translateY(-1px);box-shadow:0 14px 30px -12px rgba(199,180,137,.6)}
  #tskmnext #ts-next svg{width:16px;height:16px}
  @media(max-width:1079px){ #tskmnext .tsl-grid{grid-template-columns:repeat(2,1fr)} }
  @media(max-width:520px){ #tskmnext .tsl-grid{grid-template-columns:1fr} }
  @media(prefers-reduced-motion:reduce){ #tskmnext .tsl-orb{opacity:1;transform:none;filter:none;animation:none} }
  `;function h(){if(!document.getElementById("tskmnext-css")){var d=document.createElement("style");d.id="tskmnext-css",d.textContent=v,document.head.appendChild(d)}}function y(){var d=document.createElement("div");d.id="tskmnext";var e=b.map(function(i){return'<div class="tsl-cell"><div class="tsl-orb"><p class="tsl-t">'+i+"</p></div></div>"}).join("");d.innerHTML=`
<div class="tsl-head">
  <span class="tsl-eyebrow">Was du mitnimmst</span>
  <h2 class="tsl-title">Learnings</h2>
</div>
<div class="tsl-grid">${e}</div>
<div id="ts-next-wrap">
  <a id="ts-next" href="${f}">N\xE4chste Lektion <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
</div>`;var r=d.querySelector("#ts-next");return r.addEventListener("click",function(i){i.preventDefault(),window.location.assign(f)}),d}function u(){if(!E()){var d=document.getElementById("tskmnext");d&&d.parentNode&&d.parentNode.removeChild(d);return}if(!document.getElementById("tskmnext")){var e=w(["tskmwk","tskm2mac","tskmtrend","tskmemp"]);if(!(!e||!e.parentNode)){h();var r=y();e.parentNode.insertBefore(r,e.nextSibling);var i=new IntersectionObserver(function(p){p[0].isIntersecting&&(r.classList.add("in"),i.disconnect())},{threshold:.2});i.observe(r);var s=r.getBoundingClientRect();s.top<window.innerHeight&&s.bottom>0&&r.classList.add("in")}}}window.__tskmnext=!0,u(),document.addEventListener("DOMContentLoaded",u),window.__tsMO(u).observe(document.documentElement,{childList:!0,subtree:!0})})()}],[153,function(){(function(){if(window.__tsn2kmvid)return;window.__tsn2kmvid=!0;var E="\xD6ffne in deiner Vorlage die Seite <b>Kostenauswertung Master</b>. Dort tr\xE4gst du ab jetzt einmal im Monat deine Zahlen ein, eine Zeile pro Monat. Wie sie aufgebaut ist, siehst du direkt unter diesem Abschnitt, <b>Karte f\xFCr Karte</b>.";function w(){if(/\/key-metrics\/?$/.test(location.pathname)){for(var f=document.querySelectorAll("#tskmvid p"),b=0;b<f.length;b++)/Leg jetzt in Notion eine leere Seite/.test(f[b].textContent)&&(f[b].innerHTML=E);for(var v=document.querySelectorAll("#tsl .tsl-t, .il-learn .il-orb"),h=0;h<v.length;h++)/^Du hast die Kostenauswertung Master gebaut/.test(v[h].textContent)&&(v[h].textContent="Die Kostenauswertung Master h\xE4lt jeden Monat in einer Zeile mit allen Kennzahlen.")}}w(),window.__tsMO(w).observe(document.documentElement,{childList:!0,subtree:!0})})()}]]);
