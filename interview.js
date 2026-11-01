/* =====================  Mock interview  =====================
   Simulates an Oxford-style physics interview: two problems back to back, thinking aloud,
   hints on request, tutor follow-ups, then a self-review with the worked answers and an
   optional recording of yourself. Recordings stay in memory and are never uploaded. */

const IV_CRIT=[['clear','Explained my thinking out loud'],['assume','Stated assumptions and simplified'],['hints','Used hints and moved forward'],['check','Checked units and sanity of the answer']];
let iv=null;
/* Tutor twists: after you answer, the tutor changes a condition. [twist, what a good response does], by topic. */
const IV_TWISTS=[
 [['Your estimate turns out to be ten times too big. Which assumption would you revisit first, and why?','Name the least certain input, say how it scales the answer, and suggest one measurement that would pin it down.'],
  ['How would you improve your estimate if you could make one quick measurement?','Pick the input with the biggest uncertainty and describe a simple, practical way to measure it.']],
 [['Now include air resistance. What changes, qualitatively?','Say which quantities shrink or shift, whether the answer still depends on mass, and what happens at low and high speed.'],
  ['What if the whole experiment were done on the Moon?','Identify which results depend on g (times, heights, forces) and how each scales when g is six times smaller.'],
  ['Double the mass. Which of your results change, and which stay the same?','Separate mass-independent results (free-fall times, many speeds) from those that scale with mass (forces, energies, momenta).']],
 [['What happens in the limit of very large x, or very small x?','Find the dominant term, simplify, and check that it matches the behaviour you found or sketched.'],
  ['Can you check your answer with a simple special case?','Substitute an easy value (0, 1, a symmetric case) and confirm that the result makes sense.']],
 [['What if the wave travelled through water instead of air?','Say how the wave speed changes and therefore what happens to the wavelength at fixed frequency, and any effect on diffraction or refraction.'],
  ['What if the frequency were doubled?','Track wavelength, speed (medium-dependent), and any frequency-dependent effects such as scattering or diffraction.']],
 [['Replace the DC supply with AC. What changes?','Discuss induced effects (inductance, eddy currents), time-varying forces, and whether averages or peak values matter.'],
  ['Double all the charges (or currents). How do the forces and energies scale?','Use the formula: forces go as q₁q₂ or I² and energies similarly, so say the scaling factor explicitly.']],
 [['What if the process happened twice as fast?','Discuss whether there is time for heat to flow (adiabatic versus isothermal) and how that changes temperatures or efficiency.'],
  ['Now do it in a vacuum. What changes?','Remove conduction and convection through air, leaving radiation, and say how much slower or faster heat transfer would be.']],
 [['What would change on a planet with twice the Earth\'s radius but the same density?','Use g ∝ ρR, so g doubles; then follow the effect through orbits, escape speed or whatever the problem used.'],
  ['What if the star were twice as massive at the same distance?','Use the formula: orbital speed ∝ √M and period ∝ 1/√M, and say how the other results scale.']],
 [['How would you test your explanation with a simple experiment at home?','Propose a controlled experiment: change one variable, keep the others fixed, and predict the result if your explanation is right.'],
  ['Give another everyday example of the same physics.','Spot the underlying principle and find a different situation where it is the key idea, explaining briefly why.']]
];
function ivTwist(q){const t=IV_TWISTS[q.t]||IV_TWISTS[7];return pick(t);}

function ivHistory(){return loadJSON('iv-history',[]);}
function ivStopRec(){
  if(iv&&iv.rec&&iv.rec.state!=='inactive'){try{iv.rec.stop();}catch(e){}}
  if(iv&&iv.stream){iv.stream.getTracks().forEach(t=>t.stop());iv.stream=null;}
}
function ivCleanup(){clearInterval(iv&&iv.tick);ivStopRec();}

function ivHome(){
  leave();
  const h=ivHistory().slice(-6).reverse();
  app.innerHTML=
  '<div class="stack">'+
  '<div class="stack" style="gap:8px"><p class="eyebrow">Interview prep</p><h1>Mock interview</h1>'+
  '<p class="muted">Two problems back to back, like a real interview. Think out loud from the start, as if a tutor were listening. Ask for hints when stuck: using them well is part of what tutors look for. Afterwards, compare with the worked answers and rate yourself.</p></div>'+
  '<div class="card stack"><h2>Setup</h2>'+
   '<div class="chips" id="ivlevel">'+[['Mixed',0],['Gentler',1],['Harder',3]].map(([n,v],i)=>'<button class="chip'+(i===0?' on':'')+'" data-l="'+v+'">'+n+'</button>').join('')+'</div>'+
   '<label class="tog"><input type="checkbox" id="ivrec"> Record my voice so I can listen back</label>'+
   '<label class="tog"><input type="checkbox" id="ivtw" checked> Tutor twists: the tutor changes the problem after you answer</label>'+
   '<p class="note">Recording stays on this phone during the session only. Nothing is uploaded. If your phone blocks the microphone, the interview still works without it.</p></div>'+
  '<button class="btn" id="ivgo">Start mock interview</button>'+
  '<div class="card stack"><h2>Real interview tips</h2><ul class="rules">'+
   '<li>Talk through what you are doing, even when unsure. Silence gives the tutor nothing to work with.</li>'+
   '<li>Start simple: draw a diagram, name your assumptions, try an easy limiting case.</li>'+
   '<li>When given a hint, use it straight away and say how it changes your approach.</li>'+
   '<li>Check answers with units and common sense, and say so out loud.</li>'+
   '<li>It is fine not to know a fact. Reasoning from what you do know is the point.</li>'+
  '</ul></div>'+
  (h.length?'<div class="card stack"><h2>Past sessions</h2><div class="hist">'+h.map(x=>'<div class="hrow"><span class="d">'+dateTxt(x.t)+'</span><span class="m">'+x.ids.length+' q</span><span class="r">'+x.hints+' hints</span><span class="q">'+x.score.toFixed(1)+'</span></div>').join('')+'</div><p class="note">Score is your average self-rating out of 5.</p></div>':'')+
  '<button class="btn ghost" id="ivback">Home</button>'+
  '</div>';
  let level=0;
  app.querySelectorAll('#ivlevel .chip').forEach(b=>b.onclick=()=>{level=+b.dataset.l;app.querySelectorAll('#ivlevel .chip').forEach(c=>c.classList.toggle('on',c===b));});
  document.getElementById('ivgo').onclick=()=>ivStart(level,document.getElementById('ivrec').checked,document.getElementById('ivtw').checked);
  document.getElementById('ivback').onclick=home;
}

function ivPick(level){
  const used=new Set(ivHistory().slice(-10).flatMap(x=>x.ids));
  let pool=PHY.filter(q=>q.f.length&&(level===0||(level===1?q.l<=2:q.l>=2)));
  const fresh=pool.filter(q=>!used.has(q.id));if(fresh.length>=2)pool=fresh;
  const a=pick(pool),rest=pool.filter(q=>q.id!==a.id&&q.t!==a.t);
  return [a,pick(rest.length?rest:pool.filter(q=>q.id!==a.id))];
}

async function ivStart(level,record,twists){
  iv={qs:ivPick(level),k:0,stage:'main',hints:[0,0],times:[0,0],fu:0,t0:Date.now(),qt0:Date.now(),chunks:[],audio:null};
  iv.tw=twists?iv.qs.map(ivTwist):null;
  cleanups.push(ivCleanup);
  if(record&&navigator.mediaDevices&&window.MediaRecorder){
    try{
      iv.stream=await navigator.mediaDevices.getUserMedia({audio:true});
      iv.rec=new MediaRecorder(iv.stream);
      iv.rec.ondataavailable=e=>{if(e.data&&e.data.size)iv.chunks.push(e.data);};
      iv.rec.onstop=()=>{if(iv&&iv.chunks.length)iv.audio=URL.createObjectURL(new Blob(iv.chunks,{type:iv.rec.mimeType||'audio/mp4'}));if(iv&&iv.onaudio)iv.onaudio();};
      iv.rec.start(1000);
    }catch(e){iv.recError=true;}
  }else if(record)iv.recError=true;
  iv.tick=setInterval(()=>{const el=document.getElementById('ivclock');if(el&&iv)el.textContent=fmt((Date.now()-iv.qt0)/1000);},500);
  ivRender();
}

function ivRender(){
  setBack(()=>{if(confirm('Leave the interview without reviewing it?'))ivHome();});
  setScratch(true);
  const q=iv.qs[iv.k],$=id=>document.getElementById(id);
  const recBadge=iv.rec&&iv.rec.state==='recording'?'<span class="recdot">● REC</span>':iv.recError?'<span class="note">No mic</span>':'';
  let body='';
  if(iv.stage==='main'){
    body='<p class="prompt">'+q.q+'</p><div id="ivh" class="stack" style="gap:10px">'+
      q.h.slice(0,iv.hints[iv.k]).map((h,i)=>'<div class="hint"><b>Hint '+(i+1)+'</b><p>'+h+'</p></div>').join('')+'</div>';
  }else if(iv.stage==='twist'){
    body='<p class="note">Original question: '+q.q+'</p><p class="eyebrow" style="margin-top:6px">Twist: the tutor changes the problem</p><p class="prompt">'+iv.tw[iv.k][0]+'</p>'+
      '<p class="note">Say out loud what changes, what stays the same, and check a limiting case.</p>';
  }else{
    const f=q.f[iv.fu];
    body='<p class="note">Original question: '+q.q+'</p><p class="eyebrow" style="margin-top:6px">The tutor follows up</p><p class="prompt">'+f[0]+'</p>';
  }
  app.innerHTML=
  '<div class="stack">'+
  '<div class="top"><span class="count">Problem '+(iv.k+1)+' of '+iv.qs.length+'</span><span class="timer" id="ivclock">'+fmt((Date.now()-iv.qt0)/1000)+'</span></div>'+
  '<div class="ivbar">'+recBadge+'<span class="note">Aim for about 8–10 minutes per problem</span></div>'+
  '<div class="card stack"><p class="eyebrow">'+PHY_TOPICS[q.t]+'</p>'+body+'</div>'+
  (iv.stage==='twist'?'<button class="btn" id="ivtwok">I\'ve answered the twist</button>':iv.stage==='main'?
    '<div class="row2"><button class="btn ghost" id="ivhint"'+(iv.hints[iv.k]>=q.h.length?' disabled':'')+'>'+(iv.hints[iv.k]>=q.h.length?'No more hints':'Ask for a hint')+'</button><button class="btn" id="ivdone">I\'ve answered</button></div>':
    '<button class="btn" id="ivnext">'+(iv.fu+1<q.f.length?'Next follow-up':iv.k+1<iv.qs.length?'Next problem':'Finish and review')+'</button>')+
  '<button class="btn ghost" id="ivquit">End interview</button>'+
  '</div>';
  if(iv.stage==='main'){
    $('ivhint').onclick=()=>{iv.hints[iv.k]++;ivRender();};
    $('ivdone').onclick=()=>{iv.stage=iv.tw?'twist':'follow';iv.fu=0;ivRender();};
  }else if(iv.stage==='twist'){
    $('ivtwok').onclick=()=>{iv.stage='follow';iv.fu=0;ivRender();};
  }else{
    $('ivnext').onclick=()=>{
      if(iv.fu+1<q.f.length){iv.fu++;ivRender();return;}
      iv.times[iv.k]=(Date.now()-iv.qt0)/1000;
      if(iv.k+1<iv.qs.length){iv.k++;iv.stage='main';iv.qt0=Date.now();ivRender();}else ivReview();
    };
  }
  $('ivquit').onclick=()=>{if(confirm('End the interview and go to the review?')){iv.times[iv.k]=(Date.now()-iv.qt0)/1000;iv.qs=iv.qs.slice(0,iv.k+1);ivReview();}};
  window.scrollTo(0,0);
}

function ivReview(){
  clearInterval(iv.tick);setBack(ivHome);setScratch(false);
  const total=(Date.now()-iv.t0)/1000;
  iv.onaudio=()=>{const el=document.getElementById('ivaudio');if(el&&iv.audio)el.innerHTML='<audio controls src="'+iv.audio+'" style="width:100%"></audio>';};
  ivStopRec();
  app.innerHTML=
  '<div class="stack">'+
  '<p class="eyebrow">Review</p><h1>How did it go?</h1>'+
  '<div class="facts"><div class="fact"><b>'+fmt(total)+'</b><span>total time</span></div><div class="fact"><b>'+iv.qs.length+'</b><span>problems</span></div><div class="fact"><b>'+iv.hints.slice(0,iv.qs.length).reduce((a,b)=>a+b,0)+'</b><span>hints used</span></div></div>'+
  (iv.rec||iv.recError?'<div class="card stack"><h2>Your recording</h2><div id="ivaudio">'+(iv.recError?'<p class="note">The microphone was not available, so nothing was recorded. On iPhone, check Settings → Safari → Microphone, or record with Voice Memos alongside.</p>':'<p class="note">Preparing…</p>')+'</div>'+
   '<p class="note">Listen for: long silences, unexplained jumps, and whether you said your assumptions out loud. The recording disappears when you leave this screen.</p></div>':'')+
  iv.qs.map((q,i)=>'<div class="card stack"><p class="eyebrow">Problem '+(i+1)+' · '+fmt(iv.times[i])+' · '+iv.hints[i]+' hint'+(iv.hints[i]===1?'':'s')+'</p><p class="prompt">'+q.q+'</p>'+
    '<details class="fu"><summary>Worked answer</summary><div class="answer">'+q.a+'</div></details>'+
    (iv.tw&&iv.tw[i]?'<details class="fu"><summary>Twist: '+iv.tw[i][0]+'</summary><p>A strong answer: '+iv.tw[i][1]+'</p></details>':'')+
    q.f.map(f=>'<details class="fu"><summary>Follow-up: '+f[0]+'</summary><p>'+f[1]+'</p></details>').join('')+'</div>').join('')+
  '<div class="card stack"><h2>Rate yourself</h2>'+
   IV_CRIT.map(([k,n])=>'<div class="crit"><span>'+n+'</span><div class="stars" data-k="'+k+'">'+[1,2,3,4,5].map(v=>'<button data-v="'+v+'">'+v+'</button>').join('')+'</div></div>').join('')+
   '<textarea id="ivnote" rows="3" placeholder="Notes for next time (optional)"></textarea></div>'+
  '<button class="btn" id="ivsave">Save session</button>'+
  '<button class="btn ghost" id="ivskip">Leave without saving</button>'+
  '</div>';
  iv.onaudio();
  const scores={};
  app.querySelectorAll('.stars').forEach(g=>g.querySelectorAll('button').forEach(b=>b.onclick=()=>{
    scores[g.dataset.k]=+b.dataset.v;g.querySelectorAll('button').forEach(x=>x.classList.toggle('on',+x.dataset.v<=+b.dataset.v));}));
  document.getElementById('ivsave').onclick=()=>{
    const vals=IV_CRIT.map(([k])=>scores[k]||0).filter(v=>v);
    const h=ivHistory();
    h.push({t:Date.now(),ids:iv.qs.map(q=>q.id),hints:iv.hints.slice(0,iv.qs.length).reduce((a,b)=>a+b,0),secs:Math.round(total),
      scores,score:vals.length?vals.reduce((a,b)=>a+b,0)/vals.length:0,note:document.getElementById('ivnote').value.slice(0,500)});
    saveJSON('iv-history',h.slice(-50));
    ivHome();
  };
  document.getElementById('ivskip').onclick=ivHome;
  window.scrollTo(0,0);
}
