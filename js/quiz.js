function qs(n){ return new URLSearchParams(location.search).get(n); }

const category = qs('category') || 'general';
const bookKey  = qs('book') || null;
const level    = qs('level') || 'easy';

const titleEl  = document.getElementById('quizTitle');
const qMetaEl  = document.getElementById('qMeta');
const qTextEl  = document.getElementById('qText');
const optsEl   = document.getElementById('options');
const pBar     = document.getElementById('progressBar');

let pool=[], idx=0, score=0, wrong=[], answers=[];

function isOld(k){ return (window.BOOKS?.OLD||[]).some(b=>b.key===k); }
function isNew(k){ return (window.BOOKS?.NEW||[]).some(b=>b.key===k); }

function buildPool(){
  const all=[];
  Object.values(window.QUESTIONS||{}).forEach(arr=> arr.forEach(q=> all.push(q)));

  // primary filter
  all.forEach(q=>{
    if (q.difficulty !== level) return;
    if (bookKey){ if (q.bookKey===bookKey) pool.push(q); return; }
    if (category==='old' && isOld(q.bookKey)) pool.push(q);
    else if (category==='new' && isNew(q.bookKey)) pool.push(q);
    else if (category==='general') pool.push(q);
    else if (q.category === category) pool.push(q); // topic
  });

  // fallback if empty, ignore difficulty
  if (!pool.length){
    all.forEach(q=>{
      if (bookKey && q.bookKey!==bookKey) return;
      if (category==='old' && !isOld(q.bookKey)) return;
      if (category==='new' && !isNew(q.bookKey)) return;
      if (!['old','new','general'].includes(category) && q.category !== category) return;
      pool.push(q);
    });
  }

  // shuffle + limit 10
  for(let i=pool.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [pool[i],pool[j]]=[pool[j],pool[i]]; }
  pool = pool.slice(0,10);
  
  // Initialize answers array
  answers = new Array(pool.length).fill(null);

  titleEl.textContent = (bookKey
    ? `${(window.BOOKS.OLD.concat(window.BOOKS.NEW).find(b=>b.key===bookKey)||{}).name||'Book'}`
    : category.charAt(0).toUpperCase()+category.slice(1)) + ` • ${level}`;
}

function toneOK(){ try{ const c=window.__ac||(window.__ac=new (window.AudioContext||window.webkitAudioContext)()); const o=c.createOscillator(), g=c.createGain(); o.type='sine'; o.frequency.value=880; g.gain.value=.05; o.connect(g); g.connect(c.destination); o.start(); setTimeout(()=>o.stop(),140);}catch(e){} }
function toneBad(){ try{ const c=window.__ac||(window.__ac=new (window.AudioContext||window.webkitAudioContext)()); const o=c.createOscillator(), g=c.createGain(); o.type='square'; o.frequency.value=220; g.gain.value=.06; o.connect(g); g.connect(c.destination); o.start(); setTimeout(()=>o.stop(),200);}catch(e){} }

function render(){
  const q = pool[idx]; if(!q){ qTextEl.textContent='No question.'; return; }
  qMetaEl.textContent = `Q ${idx+1}/${pool.length} • ${q.book}`;
  qTextEl.textContent = q.question;

  optsEl.innerHTML = '';
  q.options.forEach((opt,i)=>{
    const b=document.createElement('button');
    b.className='option'; b.textContent=opt;
    
    // Check if this question was already answered
    if (answers[idx] !== null) {
      b.disabled = true;
      if (i === q.answer) {
        b.classList.add('correct');
      } else if (i === answers[idx]) {
        b.classList.add('wrong');
      }
    } else {
      b.onclick=()=> choose(b,i,q);
    }
    
    optsEl.appendChild(b);
  });

  pBar.style.width = (((idx)/Math.max(1,pool.length))*100)+'%';
}

function choose(btn,i,q){
  // Don't allow choosing if already answered
  if (answers[idx] !== null) return;
  
  // Store the answer
  answers[idx] = i;
  
  const buttons=[...document.querySelectorAll('.option')];
  buttons.forEach(b=> b.disabled=true);
  if (i===q.answer){ btn.classList.add('correct'); toneOK(); score++; }
  else { btn.classList.add('wrong'); toneBad(); const correctBtn = buttons[q.answer]; correctBtn && correctBtn.classList.add('correct'); wrong.push({q:q.question, correct:q.options[q.answer], your:q.options[i]}); }
  pBar.style.width = (((idx+1)/Math.max(1,pool.length))*100)+'%';

  setTimeout(()=>{
    if (idx < pool.length-1){ idx++; render(); }
    else finish();
  }, 1600);
}

function finish(){
  const res = { score, total: pool.length, title: titleEl.textContent, type: (bookKey?`book:${bookKey}`:category), wrong };
  localStorage.setItem('faith_last_result', JSON.stringify(res));
  nav.replace('results.html');
}

document.getElementById('prevBtn').onclick = ()=> { 
  if(idx>0){ 
    idx--; 
    render(); 
  } 
};
document.getElementById('nextBtn').onclick = ()=> { if(idx<pool.length-1){ idx++; render(); } else finish(); };
document.getElementById('endBtn').onclick  = ()=> { if (confirm('End quiz?')) finish(); };

// Initialize
window.addEventListener('load', ()=>{
  buildPool(); render();
  document.body.addEventListener('click', ()=>{ try{ window.__ac && window.__ac.resume && window.__ac.resume(); }catch(e){} }, {once:true});
});
