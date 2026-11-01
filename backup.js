/* =====================  Backup and restore  =====================
   iOS deletes a home-screen web app's storage if its icon is removed, so this saves every bit of progress
   (all localStorage keys for this site) to a JSON file and restores it again. Nothing leaves the phone
   unless the owner chooses where to save the file. */

const BK_APP='iq-lab';
function bkCollect(){
  const data={};
  for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);data[k]=localStorage.getItem(k);}
  return {app:BK_APP,version:1,saved:new Date().toISOString(),data};
}
function bkSummary(data){
  const j=k=>{try{return JSON.parse(data[k]||'null');}catch(e){return null;}};
  const parts=[];
  const iq=j('iq10-history');if(iq&&iq.length)parts.push(iq.length+' IQ results');
  const ph=j('phy-ratings');if(ph)parts.push(Object.keys(ph).length+' physics ratings');
  const dr=j('drill');if(dr&&dr.days)parts.push(Object.keys(dr.days).length+' drill days');
  const cs=j('cards');if(cs&&cs.s)parts.push(Object.keys(cs.s).length+' flashcards started');
  const mb=j('mistakes');if(mb&&mb.length)parts.push(mb.length+' saved mistakes');
  const iv=j('iv-history');if(iv&&iv.length)parts.push(iv.length+' mock interviews');
  return parts.length?parts.join(', '):'no progress yet';
}
function bkFileName(){const d=new Date();return 'delta-backup-'+d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')+'.json';}
async function bkExport(){
  const json=JSON.stringify(bkCollect()),name=bkFileName();
  const blob=new Blob([json],{type:'application/json'});
  try{
    const file=new File([blob],name,{type:'application/json'});
    if(navigator.canShare&&navigator.canShare({files:[file]})){await navigator.share({files:[file],title:'Delta backup'});return 'shared';}
  }catch(e){if(e&&e.name==='AbortError')return 'cancelled';}
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();
  setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},2000);
  return 'downloaded';
}
/* returns an error message, or null when the text is a valid backup */
function bkCheck(text){
  let b;try{b=JSON.parse(text);}catch(e){return 'That is not a valid backup file.';}
  if(!b||b.app!==BK_APP||typeof b.data!=='object')return 'That file is not a Delta backup.';
  return null;
}
function bkRestore(text){
  const b=JSON.parse(text);
  Object.entries(b.data).forEach(([k,v])=>{if(typeof v==='string')localStorage.setItem(k,v);});
  return b;
}
function backupHome(){
  leave();
  const cur=bkCollect(),last=loadJSON('backup-last',null);
  app.innerHTML=
  '<div class="stack"><div class="stack" style="gap:8px"><p class="eyebrow">Study tools</p><h1>Backup and restore</h1>'+
  '<p class="muted">Your progress is stored only on this phone. If you remove the Delta icon from your home screen, iOS deletes it. Save a backup now and then (to iCloud Drive or Files) so you can always get it back.</p></div>'+
  '<div class="card stack"><h2>Save a backup</h2><p class="note">Currently saved on this phone: '+bkSummary(cur.data)+'.</p>'+
   '<p class="note">Last backup: '+(last?dateTxt(last):'never')+'.</p>'+
   '<button class="btn" id="bkexp">Save backup file</button><button class="btn ghost" id="bkcopy">Copy backup as text</button><p class="note" id="bkmsg"></p></div>'+
  '<div class="card stack"><h2>Restore</h2><p class="note">Choose a backup file, or paste backup text. Restoring replaces the matching progress on this phone.</p>'+
   '<label class="btn ghost" style="text-align:center">Choose backup file<input type="file" id="bkfile" accept=".json,application/json,text/plain" hidden></label>'+
   '<textarea id="bktext" rows="3" placeholder="…or paste backup text here"></textarea><button class="btn ghost" id="bkpaste">Restore from pasted text</button><p class="note" id="bkrmsg"></p></div>'+
  '</div>';
  const $=id=>document.getElementById(id);
  $('bkexp').onclick=async()=>{const r=await bkExport();if(r!=='cancelled'){saveJSON('backup-last',Date.now());}
    $('bkmsg').textContent=r==='shared'?'Saved. Choose "Save to Files" to keep it in iCloud Drive.':r==='downloaded'?'Backup file created. On iPhone, tap Share then "Save to Files".':'Cancelled.';};
  $('bkcopy').onclick=async()=>{const t=JSON.stringify(bkCollect());
    try{await navigator.clipboard.writeText(t);saveJSON('backup-last',Date.now());$('bkmsg').textContent='Copied. Paste it into a note somewhere safe.';}
    catch(e){$('bktext').value=t;$('bkmsg').textContent='Copy failed: the backup text is in the box below. Select all and copy it.';}};
  const restore=text=>{
    const err=bkCheck(text);if(err){$('bkrmsg').textContent=err;return;}
    const b=JSON.parse(text);
    if(!confirm('Restore the backup from '+(b.saved?new Date(b.saved).toLocaleString():'an unknown date')+'?\n\nIt contains: '+bkSummary(b.data)+'.\n\nThis replaces matching progress on this phone.'))return;
    bkRestore(text);$('bkrmsg').textContent='Restored. Your progress is back.';
  };
  $('bkfile').onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>restore(String(r.result));r.readAsText(f);};
  $('bkpaste').onclick=()=>restore($('bktext').value.trim());
}
