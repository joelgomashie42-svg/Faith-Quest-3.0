// Animated letters + bounce-drop icon, then route to Home
const NAME = "FAITH QUEST";
const wrap = document.getElementById('titleWrap');
const icon = document.getElementById('splashIcon');

function whoosh(){
  try{
    const ctx = window.__ac || (window.__ac = new (window.AudioContext||window.webkitAudioContext)());
    const o=ctx.createOscillator(), g=ctx.createGain(); o.connect(g); g.connect(ctx.destination);
    o.type='sine'; o.frequency.value=880; g.gain.value=0.02; o.start();
    setTimeout(()=>{ o.frequency.value=420; g.gain.value=0.012 }, 90);
    setTimeout(()=> o.stop(), 230);
  }catch(e){}
}

function animateName(){
  wrap.innerHTML='';
  [...NAME].forEach((c,i)=>{
    const s=document.createElement('span'); s.className='letter'; s.textContent = c===' ' ? '\u00A0' : c;
    wrap.appendChild(s);
    setTimeout(()=>{
      s.style.transition='transform 520ms cubic-bezier(.2,1.2,.4,1), opacity 260ms';
      s.style.opacity='1'; s.style.transform='translateY(0)';
      s.animate([{transform:'translateY(-40px)'},{transform:'translateY(6px)'},{transform:'translateY(0)'}],
                {duration:520,easing:'ease-out'});
      whoosh();
    }, i*120);
  });

  // Icon bounce after letters
  setTimeout(()=>{
    icon.style.opacity=1;
    icon.animate(
      [{transform:'translateY(-160px) scale(.7)',opacity:0},
       {transform:'translateY(16px) scale(1.04)',opacity:1},
       {transform:'translateY(0) scale(1)',opacity:1}],
      {duration:640,easing:'cubic-bezier(.2,1.3,.3,1)'}
    );
  }, NAME.length*120 + 120);

  // Route to Home
  setTimeout(()=> nav.replace('home.html'), NAME.length*120 + 2200);
}

window.addEventListener('load', ()=>{
  animateName();
  // enable audio after first touch
  document.body.addEventListener('click', ()=>{ try{ window.__ac && window.__ac.resume && window.__ac.resume(); }catch(e){} }, {once:true});
});
