/* =====================  Mistake bank  =====================
   Every question answered wrongly in the daily drill, A-level quizzes, IQ test and practical quizzes is saved here
   (a full copy, so generated questions come back exactly as they were). A question leaves the bank once it has
   been answered correctly twice in a row. Stored in localStorage under 'mistakes'. */

const MB_MAX=300;
function mbList(){return loadJSON('mistakes',[]);}
const mbKey=it=>(String(it.prompt)+'|'+String(it.right)).replace(/<[^>]+>/g,'').slice(0,300);
/* it: {src, prompt, stem?, right, wrong:[3], explain, vid?, yt?} */
function mbAdd(it){
  if(!it||!it.prompt||!it.right||!it.wrong||it.wrong.length<3)return;
  const L=mbList(),k=mbKey(it),i=L.findIndex(x=>x.k===k);
  const rec={k,src:it.src||'',prompt:it.prompt,stem:it.stem||'',right:it.right,wrong:it.wrong.slice(0,3),explain:it.explain||'',vid:it.vid||null,yt:it.yt||null,n:0,t:Date.now()};
  if(i>=0)L.splice(i,1);
  L.push(rec);
  saveJSON('mistakes',L.slice(-MB_MAX));
}
function mbAnswer(k,ok){
  const L=mbList(),i=L.findIndex(x=>x.k===k);if(i<0)return false;
  if(ok){L[i].n++;if(L[i].n>=2){L.splice(i,1);saveJSON('mistakes',L);return true;}}
  else L[i].n=0;
  L[i].last=Date.now();saveJSON('mistakes',L);return false;
}

let MB=null;
function mbHome(){
  leave();
  const L=mbList(),bySrc={};L.forEach(x=>{bySrc[x.src]=(bySrc[x.src]||0)+1;});
  app.innerHTML=
  '<div class="stack"><div class="stack" style="gap:8px"><p class="eyebrow">Daily training</p><h1>Review mistakes</h1>'+
  '<p class="muted">Every question you get wrong in the drill, A-level quizzes, IQ test and practical quizzes lands here. Get it right twice in a row and it leaves the bank.</p></div>'+
  '<div class="facts"><div class="fact"><b>'+L.length+'</b><span>to review</span></div><div class="fact"><b>'+L.filter(x=>x.n===1).length+'</b><span>one more to go</span></div><div class="fact"><b>'+loadJSON('mistakes-cleared',0)+'</b><span>cleared</span></div></div>'+
  '<button class="btn" id="mbgo"'+(L.length?'':' disabled')+'>'+(L.length?'Review '+Math.min(10,L.length)+' mistakes':'No mistakes to review')+'</button>'+
  (L.length?'<div class="card stack"><h2>Where they came from</h2><div class="cats">'+Object.entries(bySrc).map(([s,n])=>'<div class="cr"><span class="n">'+s+'</span><span class="v">'+n+'</span><div class="t"><i style="width:'+(100*n/L.length)+'%"></i></div></div>').join('')+'</div></div>':'')+
  '</div>';
  document.getElementById('mbgo').onclick=mbStart;
}
function mbStart(){
  /* questions needing one more correct answer first, then the oldest */
  const L=mbList().sort((a,b)=>(b.n-a.n)||((a.last||a.t)-(b.last||b.t))).slice(0,10);
  MB={items:shuffle(L).map(x=>Object.assign({},x,{opts:shuffle([{h:x.right,ok:true}].concat(x.wrong.map(w=>({h:w,ok:false}))))})),i:0,ok:0,res:[],cleared:0};
  mbRender();
}
function mbRender(){
  setBack(()=>{if(confirm('Stop reviewing? Answers so far are saved.'))mbHome();});
  setScratch(true);
  const it=MB.items[MB.i];
  app.innerHTML=
  '<div class="stack"><div class="top"><span class="count">'+(MB.i+1)+' / '+MB.items.length+'</span><span class="eyebrow">'+it.src+(it.n===1?' · one more':'')+'</span></div>'+
  '<div class="bar"><i style="width:'+(MB.i/MB.items.length*100)+'%"></i></div>'+
  '<div class="card"><p class="prompt">'+it.prompt+'</p>'+it.stem+'<div class="opts">'+it.opts.map((o,k)=>'<button class="opt'+(/<svg/.test(o.h)?' vis':'')+'" data-k="'+k+'"><span class="k">'+LETTERS[k]+'</span><span>'+o.h+'</span></button>').join('')+'</div><div id="mbfb"></div></div></div>';
  const btns=[...app.querySelectorAll('.opt')];
  btns.forEach(b=>b.onclick=()=>{
    const k=+b.dataset.k,ok=it.opts[k].ok;
    btns.forEach((x,j)=>{x.disabled=true;if(it.opts[j].ok)x.classList.add('right');});
    if(!ok)b.classList.add('wrong');
    const gone=mbAnswer(it.k,ok);
    if(ok)MB.ok++;if(gone){MB.cleared++;saveJSON('mistakes-cleared',loadJSON('mistakes-cleared',0)+1);}
    MB.res.push({ok,prompt:it.prompt,stem:it.stem,chosen:it.opts[k].h,right:it.right,explain:it.explain,vid:it.vid,yt:it.yt});
    document.getElementById('mbfb').innerHTML='<div class="fb"><b class="'+(ok?'ok':'no')+'">'+(ok?(gone?'Correct: cleared from the bank.':'Correct: once more to clear it.'):'Not quite.')+'</b><p class="note">'+it.explain+'</p>'+videoLinks(it)+
      '<button class="btn" id="mbnx">'+(MB.i+1<MB.items.length?'Next':'Finish')+'</button></div>';
    document.getElementById('mbnx').onclick=()=>{MB.i++;if(MB.i<MB.items.length)mbRender();else mbDone();};
  });
  window.scrollTo(0,0);
}
function mbDone(){
  setBack(mbHome);setScratch(false);
  app.innerHTML='<div class="stack"><p class="eyebrow">Review mistakes</p><h1>'+MB.ok+' / '+MB.items.length+'</h1>'+
   '<p class="muted">'+MB.cleared+' cleared from the bank, '+mbList().length+' left.</p>'+
   reviewHtml(MB.res)+
   '<button class="btn" id="mbagain"'+(mbList().length?'':' disabled')+'>Review more</button><button class="btn ghost" id="mbback">Back</button></div>';
  document.getElementById('mbagain').onclick=mbStart;
  document.getElementById('mbback').onclick=mbHome;
  window.scrollTo(0,0);
}
