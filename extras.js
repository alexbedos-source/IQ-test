/* =====================  Confidence check, question reports, Mixed 15, Sketch the graph  ===================== */

/* ---------- confidence check ----------
   Optional row above the answers: Guess / Fairly sure / Certain. Each answer then updates calibration stats
   ('confidence' in localStorage), shown on the Progress page. */
const CONF_LEVELS=[['g','Guess'],['f','Fairly sure'],['s','Certain']];
let CONF=null,QCUR=null,QSKIP=null;
function qTools(it,src,opts){
  CONF=null;QCUR={it,src};QSKIP=null;
  const open=opts&&opts.noConf;
  return '<div class="qtools">'+(open?'<span></span>':
    '<div class="conf" role="group" aria-label="How sure are you?"><span class="note">How sure?</span>'+CONF_LEVELS.map(([k,n])=>'<button data-conf="'+k+'">'+n+'</button>').join('')+'</div>')+
    '<div class="qact">'+(open?'':'<button class="qskip">Haven\'t learnt this yet</button>')+
    '<button class="qsave'+(isSaved(it)?' on':'')+'" aria-label="Save this question">'+(isSaved(it)?'★ Saved':'☆ Save')+'</button>'+
    '<button class="qflag" aria-label="Report a problem with this question">⚑ Report</button></div></div>';
}
/* "Haven't learnt this yet": reveal the answer with a short explanation and move on. It is not counted as right or
   wrong, does not go into the mistake bank, and does not affect accuracy stats. Each quiz screen calls
   skipSetup after rendering; record() stores the skipped item in that quiz's results for the review. */
function skipSetup(it,fbId,link,isLast,record,onNext){
  QSKIP=()=>{
    const btns=[...app.querySelectorAll('.opt')];if(!btns.length||btns[0].disabled)return;
    btns.forEach((x,j)=>{x.disabled=true;if(it.opts[j].ok)x.classList.add('right');});
    document.querySelectorAll('[data-conf],.qskip').forEach(b=>b.disabled=true);CONF=null;QSKIP=null;
    if(record)record({ok:false,skip:true,chosen:null,prompt:it.prompt,stem:it.stem||'',right:it.right,explain:it.explain,vid:link&&link.vid,yt:link&&link.yt});
    document.getElementById(fbId).innerHTML='<div class="fb"><b class="sk">Not covered yet: here is the key idea</b>'+(it.explain?'<p class="note">'+it.explain+'</p>':'')+
      videoLinks(link||{})+'<button class="btn" id="qsknx">'+(isLast?'Finish':'Next')+'</button></div>';
    document.getElementById('qsknx').onclick=onNext;
  };
}
/* score heading that leaves out skipped questions */
function scoreLine(ok,res){const sk=res.filter(r=>r.skip).length,n=res.length-sk;
  return (n?'<h1>'+ok+' / '+n+'</h1>':'<h1>Nothing scored</h1>')+(sk?'<p class="note">'+sk+' marked "haven\'t learnt this yet" (not counted).</p>':'');}
document.addEventListener('click',e=>{
  const c=e.target.closest('[data-conf]');
  if(c){CONF=c.dataset.conf;c.parentNode.querySelectorAll('[data-conf]').forEach(b=>b.classList.toggle('on',b===c));}
  if(e.target.closest('.qflag'))reportOpen();
  if(e.target.closest('.qskip')&&QSKIP)QSKIP();
  const sv=e.target.closest('.qsave');if(sv&&QCUR){const on=toggleSaved(QCUR.it,QCUR.src);sv.classList.toggle('on',on);sv.textContent=on?'★ Saved':'☆ Save';}
});
function confRecord(ok){
  if(!CONF)return;
  const st=loadJSON('confidence',{g:{n:0,ok:0},f:{n:0,ok:0},s:{n:0,ok:0}});
  st[CONF].n++;if(ok)st[CONF].ok++;saveJSON('confidence',st);CONF=null;
  document.querySelectorAll('[data-conf]').forEach(b=>b.disabled=true);
}
/* once an option is chosen, the skip button no longer applies */
document.addEventListener('click',e=>{if(e.target.closest('.opt'))document.querySelectorAll('.qskip').forEach(b=>b.disabled=true);},true);
/* a short verdict for the Progress page */
function confSummary(){
  const st=loadJSON('confidence',null);if(!st)return null;
  const pc=k=>st[k].n?Math.round(100*st[k].ok/st[k].n):null;
  let tip='Tap how sure you are before answering to build up this picture.';
  if(st.s.n>=5&&pc('s')<80)tip='You are often wrong when "certain": slow down and double-check before committing on those.';
  else if(st.g.n>=5&&pc('g')>=50)tip='Your guesses are right more often than you think: trust your reasoning a bit more.';
  else if(st.s.n>=5)tip='Well calibrated: when you feel certain, you are usually right.';
  return {st,pc,tip};
}

/* ---------- report a question ----------
   Opens a pre-filled GitHub issue (label: question-report) in the browser. The scheduled updates read
   open reports and fix the questions. Also kept locally so the app can show how many were sent. */
const strip=h=>String(h||'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
function reportOpen(){
  if(!QCUR)return;
  const old=document.getElementById('rsheet');if(old)old.remove();
  const it=QCUR.it,sh=document.createElement('div');sh.id='rsheet';
  sh.innerHTML='<div class="rs-box stack"><h2>Report this question</h2><p class="note">'+strip(it.prompt).slice(0,160)+'</p>'+
    '<div class="chips" id="rsr">'+['Wrong answer','Unclear','Typo or formatting','Too easy','Too hard','Other'].map((r,i)=>'<button class="chip'+(i?'':' on')+'">'+r+'</button>').join('')+'</div>'+
    '<textarea id="rsn" rows="3" placeholder="What is wrong? (optional)"></textarea>'+
    '<p class="note">This opens GitHub with the report filled in. Tap "Submit new issue" there, and the next scheduled update will fix it. The report is public on the project page and contains only the question text and your note.</p>'+
    '<button class="btn" id="rsgo">Open GitHub to send</button><button class="btn ghost" id="rsx">Cancel</button></div>';
  document.body.appendChild(sh);
  let reason='Wrong answer';
  sh.querySelectorAll('#rsr .chip').forEach(b=>b.onclick=()=>{reason=b.textContent;sh.querySelectorAll('#rsr .chip').forEach(x=>x.classList.toggle('on',x===b));});
  sh.querySelector('#rsx').onclick=()=>sh.remove();
  sh.onclick=e=>{if(e.target===sh)sh.remove();};
  sh.querySelector('#rsgo').onclick=()=>{
    const note=sh.querySelector('#rsn').value.trim();
    const body=['**Source:** '+strip(QCUR.src),'**Reason:** '+reason,note?'**Note:** '+note:'','','**Question:** '+strip(it.prompt),
      it.right?'**Marked correct:** '+strip(it.right):'',(it.wrong&&it.wrong.length)?'**Other options:** '+it.wrong.map(strip).join(' | '):'',
      it.explain?'**Explanation shown:** '+strip(it.explain):'','','App version '+(window.IQ_V||'?')+' · '+new Date().toISOString().slice(0,10)].filter((x,i,a)=>x!==''||a[i-1]!=='').join('\n');
    const url='https://github.com/alexbedos-source/IQ-test/issues/new?labels=question-report&title='+encodeURIComponent('Question report: '+strip(it.prompt).slice(0,70))+'&body='+encodeURIComponent(body.slice(0,3000));
    const L=loadJSON('reports',[]);L.push({t:Date.now(),src:strip(QCUR.src),q:strip(it.prompt).slice(0,200),reason,note});saveJSON('reports',L.slice(-100));
    window.open(url,'_blank','noopener');sh.remove();
  };
}

/* ---------- generic quiz runner (used by Mixed 15) ----------
   items: {src, prompt, stem?, right, wrong:[3], explain, vid?, yt?} */
let QR=null;
function quizRun(cfg){QR=Object.assign({i:0,ok:0,res:[]},cfg);QR.items=QR.items.map(it=>Object.assign({},it,{opts:shuffle([{h:it.right,ok:true}].concat(it.wrong.slice(0,3).map(w=>({h:w,ok:false}))))}));qrRender();}
function qrRender(){
  const it=QR.items[QR.i];
  setBack(()=>{if(confirm('Leave this quiz? Answers so far are kept.'))QR.back();});
  setScratch(true);
  app.innerHTML=
  '<div class="stack"><div class="top"><span class="count">'+(QR.i+1)+' / '+QR.items.length+'</span><span class="eyebrow">'+it.src+'</span></div>'+
  '<div class="bar"><i style="width:'+(QR.i/QR.items.length*100)+'%"></i></div>'+
  '<div class="card"><p class="prompt">'+it.prompt+'</p>'+(it.stem||'')+qTools(it,it.src)+
   '<div class="opts">'+it.opts.map((o,k)=>'<button class="opt" data-k="'+k+'"><span class="k">'+LETTERS[k]+'</span><span>'+o.h+'</span></button>').join('')+'</div><div id="qrfb"></div></div></div>';
  const btns=[...app.querySelectorAll('.opt')];
  btns.forEach(b=>b.onclick=()=>{
    const k=+b.dataset.k,ok=it.opts[k].ok;confRecord(ok);
    btns.forEach((x,j)=>{x.disabled=true;if(it.opts[j].ok)x.classList.add('right');});
    if(!ok){b.classList.add('wrong');mbAdd(it);}
    if(ok)QR.ok++;
    QR.res.push({ok,prompt:it.prompt,stem:it.stem,chosen:it.opts[k].h,right:it.right,explain:it.explain,vid:it.vid,yt:it.yt});
    document.getElementById('qrfb').innerHTML='<div class="fb"><b class="'+(ok?'ok':'no')+'">'+(ok?'Correct.':'Not quite.')+'</b>'+(it.explain?'<p class="note">'+it.explain+'</p>':'')+
      '<button class="btn" id="qrnx">'+(QR.i+1<QR.items.length?'Next':'Finish')+'</button></div>';
    document.getElementById('qrnx').onclick=()=>{QR.i++;if(QR.i<QR.items.length)qrRender();else qrDone();};
  });
  skipSetup(it,'qrfb',{vid:it.vid,yt:it.yt},QR.i+1>=QR.items.length,r=>QR.res.push(r),()=>{QR.i++;if(QR.i<QR.items.length)qrRender();else qrDone();});
  window.scrollTo(0,0);
}
function qrDone(){
  setScratch(false);setBack(QR.back);
  if(QR.onDone)QR.onDone(QR);
  app.innerHTML='<div class="stack"><p class="eyebrow">'+QR.title+'</p>'+scoreLine(QR.ok,QR.res)+reviewHtml(QR.res)+
    '<button class="btn" id="qragain">Another round</button><button class="btn ghost" id="qrback">Back</button></div>';
  document.getElementById('qragain').onclick=QR.again;
  document.getElementById('qrback').onclick=QR.back;
  window.scrollTo(0,0);
}

/* ---------- Mixed 15 ----------
   15 questions interleaved across subjects: A-level Physics, Maths, Economics, drill skills and flashcards.
   Mixing topics (interleaving) improves long-term retention more than blocked practice. */
function mixedItems(){
  const out=[],al=(si,n)=>alSet(AL_SUBJECTS[si],-1,n).slice(0,n).map(it=>{const s=AL_SUBJECTS[si];
    return {src:s.name+' · '+s.topics[it.topic],prompt:it.prompt,right:it.right,wrong:it.wrong,explain:it.explain,vid:videoFor(s.key,it.topic),yt:SUBJ_BOARD[s.key]+' '+s.topics[it.topic]+' explained'};});
  out.push(...al(0,4),...al(1,3),...al(2,3));
  for(let i=0;i<3;i++){const it=drillGen(rnd(7));out.push(Object.assign({src:'Drill · '+DRILL_TYPES[it.type],prompt:it.prompt,stem:it.stem||'',right:it.right,wrong:it.wrong,explain:it.explain},drillLink(it.type)));}
  /* flashcards as multiple choice: the other options are answers to cards from the same topic */
  shuffle(CARDS.slice()).slice(0,2).forEach(c=>{
    const others=shuffle(CARDS.filter(x=>x.id!==c.id&&x.cat===c.cat)).slice(0,3).map(x=>x.back);
    if(others.length===3)out.push({src:'Flashcard · '+CARD_CATS[c.cat],prompt:c.front+'?',right:c.back,wrong:others,explain:'',vid:videoFor('phy',c.cat)});
  });
  return shuffle(out.filter(it=>it.wrong&&it.wrong.length>=3&&new Set([it.right].concat(it.wrong.slice(0,3))).size===4));
}
function mixedHome(){
  leave();
  const h=loadJSON('mixed-history',[]);
  app.innerHTML='<div class="stack"><div class="stack" style="gap:8px"><p class="eyebrow">Daily training</p><h1>Mixed 15</h1>'+
    '<p class="muted">Fifteen questions shuffled across AQA Physics, Edexcel Maths, AQA Economics, quick drill skills and flashcards. Switching between topics feels harder, but it makes what you learn stick much better than doing one topic at a time.</p></div>'+
    '<div class="facts"><div class="fact"><b>'+h.length+'</b><span>rounds</span></div><div class="fact"><b>'+(h.length?h[h.length-1].ok+'/'+h[h.length-1].n:'–')+'</b><span>last score</span></div><div class="fact"><b>'+(h.length?Math.max(...h.map(x=>x.ok)):'–')+'</b><span>best</span></div></div>'+
    '<button class="btn" id="mxgo">Start Mixed 15</button></div>';
  document.getElementById('mxgo').onclick=mixedStart;
}
function mixedStart(){
  quizRun({title:'Mixed 15',items:mixedItems(),back:mixedHome,again:mixedStart,
    onDone:q=>{const h=loadJSON('mixed-history',[]);h.push({t:Date.now(),ok:q.ok,n:q.items.length});saveJSON('mixed-history',h.slice(-100));}});
}

/* ---------- Sketch the graph ----------
   Sketch on the scratchpad (with axes), then reveal the true graph and its key features, and rate yourself. */
const SKETCH=[
 {id:'k1',f:'y = x² − 2',fn:x=>x*x-2,feat:['Even: symmetric about the y-axis','Minimum at (0, −2)','Crosses the x-axis at x = ±√2 ≈ ±1.41']},
 {id:'k2',f:'y = (x − 1)(x + 2)',fn:x=>(x-1)*(x+2),feat:['Roots at x = 1 and x = −2','y-intercept −2','Minimum halfway between the roots: (−0.5, −2.25)']},
 {id:'k3',f:'y = x³ − 3x',fn:x=>x*x*x-3*x,feat:['Odd: rotational symmetry about the origin','Roots at 0 and ±√3 ≈ ±1.73','Maximum at (−1, 2), minimum at (1, −2)']},
 {id:'k4',f:'y = 1/x',fn:x=>1/x,feat:['Asymptotes x = 0 and y = 0','Odd: branches in the first and third quadrants','Decreasing on each branch']},
 {id:'k5',f:'y = 1/(x − 1)',fn:x=>1/(x-1),feat:['Vertical asymptote x = 1, horizontal asymptote y = 0','y-intercept −1','The graph of 1/x shifted 1 to the right']},
 {id:'k6',f:'y = eˣ',fn:Math.exp,feat:['y-intercept 1','Always positive; tends to 0 as x → −∞','Increases faster and faster: its gradient equals its value']},
 {id:'k7',f:'y = e^(−x²)',fn:x=>Math.exp(-x*x),feat:['Even, bell-shaped','Maximum 1 at x = 0','Tends to 0 quickly either side; points of inflection at x = ±1/√2']},
 {id:'k8',f:'y = x e^(−x)',fn:x=>x*Math.exp(-x),feat:['Passes through the origin','Maximum at x = 1, y = 1/e ≈ 0.37','Tends to 0 as x → ∞ and to −∞ as x → −∞']},
 {id:'k9',f:'y = ln x',fn:x=>x>0?Math.log(x):NaN,feat:['Only defined for x > 0','Root at x = 1; vertical asymptote x = 0','Increases ever more slowly']},
 {id:'k10',f:'y = sin x',fn:Math.sin,feat:['Odd; period 2π','Roots at multiples of π','Maximum 1 at x = π/2, minimum −1 at x = −π/2']},
 {id:'k11',f:'y = x sin x',fn:x=>x*Math.sin(x),feat:['Even','Roots at x = nπ, and it touches zero at the origin','Oscillates between the lines y = x and y = −x']},
 {id:'k12',f:'y = |x − 1|',fn:x=>Math.abs(x-1),feat:['V-shape with its vertex at (1, 0)','y-intercept 1','Gradient −1 to the left of the vertex, +1 to the right']},
 {id:'k13',f:'y = 1/(1 + x²)',fn:x=>1/(1+x*x),feat:['Even; maximum 1 at x = 0','Always positive','Tends to 0 as x → ±∞ (asymptote y = 0)']},
 {id:'k14',f:'y = √x',fn:x=>x>=0?Math.sqrt(x):NaN,feat:['Only defined for x ≥ 0','Starts at the origin with a vertical tangent','Increasing, curving downwards (concave)']},
 {id:'k15',f:'y = 2x/(x² + 1)',fn:x=>2*x/(x*x+1),feat:['Odd, through the origin','Maximum 1 at x = 1, minimum −1 at x = −1','Tends to 0 as x → ±∞']},
 {id:'k16',f:'y = 2^(−x)',fn:x=>Math.pow(2,-x),feat:['y-intercept 1','Decreasing, always positive','Tends to 0 as x → ∞; grows quickly as x → −∞']},
 {id:'k17',f:'y = tan x',fn:Math.tan,feat:['Odd; period π','Roots at multiples of π','Vertical asymptotes at x = ±π/2, ±3π/2, …']},
 {id:'k18',f:'y = x² e^(−x)',fn:x=>x*x*Math.exp(-x),feat:['Touches zero at the origin (a minimum)','Maximum at x = 2, y = 4/e² ≈ 0.54','Tends to 0 as x → ∞ and to +∞ as x → −∞']},
 {id:'k19',f:'y = cos 2x',fn:x=>Math.cos(2*x),feat:['Even; period π','Maximum 1 at x = 0','Roots at x = ±π/4, ±3π/4, …']},
 {id:'k20',f:'y = 2x − x²',fn:x=>2*x-x*x,feat:['Roots at x = 0 and x = 2','Maximum at (1, 1)','An upside-down parabola, symmetric about x = 1']},
 {id:'k21',f:'y = x³ − 4x',fn:x=>x*x*x-4*x,feat:['Odd: rotational symmetry about the origin','Roots at x = 0 and x = ±2','Maximum at x = −2/√3 (y ≈ 3.08), minimum at x = 2/√3 (y ≈ −3.08)']},
 {id:'k22',f:'y = 1/(x² − 1)',fn:x=>1/(x*x-1),feat:['Even; vertical asymptotes at x = ±1, horizontal asymptote y = 0','Between the asymptotes it is negative, with a maximum of −1 at x = 0','Outside them it is positive, falling towards 0 for large |x|']}
];
function sketchHome(){
  leave();
  const R=loadJSON('sketch',{}),done=Object.keys(R).length,nailed=Object.values(R).filter(r=>r.r==='good').length;
  app.innerHTML='<div class="stack"><div class="stack" style="gap:8px"><p class="eyebrow">Interview prep</p><h1>Sketch the graph</h1>'+
    '<p class="muted">Oxford tutors often ask you to sketch a function and talk through it. Sketch on the pad (axes included), find intercepts, symmetry, turning points, asymptotes and what happens for large x. Then reveal the real graph.</p></div>'+
    '<div class="facts"><div class="fact"><b>'+SKETCH.length+'</b><span>functions</span></div><div class="fact"><b>'+done+'</b><span>tried</span></div><div class="fact"><b>'+nailed+'</b><span>nailed</span></div></div>'+
    '<button class="btn" id="skgo">Sketch a function</button></div>';
  document.getElementById('skgo').onclick=()=>sketchQ(sketchNext());
}
function sketchNext(){
  const R=loadJSON('sketch',{}),rank=s=>!R[s.id]?0:R[s.id].r==='miss'?1:R[s.id].r==='part'?2:3;
  const best=Math.min(...SKETCH.map(rank));return pick(SKETCH.filter(s=>rank(s)===best));
}
function sketchQ(s){
  setBack(sketchHome);setScratch(true);
  app.innerHTML='<div class="stack"><p class="eyebrow">Sketch the graph</p>'+
    '<div class="card stack"><p class="prompt">Sketch <span class="mathx">'+s.f+'</span></p>'+
    '<details class="fu"><summary>What to look for</summary><p>Where it crosses the axes · symmetry (odd or even) · turning points · asymptotes · behaviour as x → ±∞ · where it is undefined.</p></details>'+
    '<div id="skans"></div></div>'+
    '<button class="btn ghost" id="skpad">Open sketchpad with axes</button><button class="btn" id="skrev">Reveal the graph</button><div id="skrate"></div></div>';
  document.getElementById('skpad').onclick=()=>scratchOpen(true);
  document.getElementById('skrev').onclick=()=>{
    document.getElementById('skans').innerHTML='<div class="answer"><b>The graph</b>'+plotSvg(s.fn)+'<p class="note">Axes run from −5 to 5 horizontally and −3.5 to 3.5 vertically.</p><b>Key features</b><ul class="rules">'+s.feat.map(f=>'<li>'+f+'</li>').join('')+'</ul></div>';
    document.getElementById('skrev').style.display='none';
    document.getElementById('skrate').innerHTML='<div class="card stack"><p class="prompt" style="font-size:1rem">How did your sketch compare?</p><div class="row3">'+
      [['good','Nailed it','ok'],['part','Partly','sk'],['miss','Missed it','no']].map(([k,n,c])=>'<button class="btn ghost rate '+c+'" data-r="'+k+'">'+n+'</button>').join('')+'</div></div>';
    document.getElementById('skrate').querySelectorAll('.rate').forEach(b=>b.onclick=()=>{const R=loadJSON('sketch',{});R[s.id]={r:b.dataset.r,t:Date.now()};saveJSON('sketch',R);sketchQ(sketchNext());});
  };
  window.scrollTo(0,0);
}

/* ---------- saved (bookmarked) questions ----------
   ☆ Save on any question keeps a copy in 'saved'. Multiple-choice ones can be practised together;
   physics interview questions open in the normal practice screen. */
const savedKey=it=>it.phyId?'phy:'+it.phyId:(String(it.prompt)+'|'+String(it.right)).replace(/<[^>]+>/g,'').slice(0,300);
function savedList(){return loadJSON('saved',[]);}
function isSaved(it){const k=savedKey(it);return savedList().some(x=>x.k===k);}
function toggleSaved(it,src){
  const L=savedList(),k=savedKey(it),i=L.findIndex(x=>x.k===k);
  if(i>=0){L.splice(i,1);saveJSON('saved',L);return false;}
  L.push({k,src:strip(src),phy:it.phyId||null,prompt:it.prompt,stem:it.stem||'',right:it.right||'',wrong:(it.wrong||[]).slice(0,3),explain:it.explain||'',vid:it.vid||null,yt:it.yt||null,t:Date.now()});
  saveJSON('saved',L.slice(-300));return true;
}
function savedHome(){
  leave();
  const L=savedList(),mc=L.filter(x=>!x.phy&&x.wrong.length>=3),ph=L.filter(x=>x.phy);
  app.innerHTML='<div class="stack"><div class="stack" style="gap:8px"><p class="eyebrow">Daily training</p><h1>Saved questions</h1>'+
    '<p class="muted">Questions you starred with ☆ Save. Practise the multiple-choice ones together, or open a saved interview question.</p></div>'+
    '<button class="btn" id="svgo"'+(mc.length?'':' disabled')+'>'+(mc.length?'Practise '+Math.min(15,mc.length)+' saved questions':'No saved multiple-choice questions yet')+'</button>'+
    (L.length?'<div class="card"><h2 style="margin-bottom:6px">All saved ('+L.length+')</h2>'+L.slice().reverse().map(x=>
      '<div class="qrow svrow"><span class="mark ok">★</span><span class="qt"'+(x.phy?' data-phy="'+x.phy+'" role="button"':'')+'>'+strip(x.prompt).slice(0,140)+'<br><span class="note">'+x.src+(x.phy?' · tap to open':'')+'</span></span><button class="svx" data-k="'+encodeURIComponent(x.k)+'" aria-label="Remove">✕</button></div>').join('')+'</div>'
     :'<p class="note">Nothing saved yet. Tap ☆ Save on any question to keep it here.</p>')+'</div>';
  document.getElementById('svgo').onclick=()=>quizRun({title:'Saved questions',items:shuffle(mc.slice()).slice(0,15).map(x=>({src:x.src,prompt:x.prompt,stem:x.stem,right:x.right,wrong:x.wrong,explain:x.explain,vid:x.vid,yt:x.yt})),back:savedHome,again:()=>document.getElementById('svgo')?savedHome():savedHome()});
  app.querySelectorAll('[data-phy]').forEach(el=>el.onclick=()=>{const q=PHY.find(p=>p.id===el.dataset.phy);if(q){leave();setBack(savedHome);phyQuestion(q);setBack(savedHome);}});
  app.querySelectorAll('.svx').forEach(b=>b.onclick=()=>{const k=decodeURIComponent(b.dataset.k);saveJSON('saved',savedList().filter(x=>x.k!==k));savedHome();});
}
