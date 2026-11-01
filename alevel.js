/* =====================  A-level practice  =====================
   AQA Physics (7408), Edexcel Mathematics (9MA0) and AQA Economics (7136), organised by
   specification topic. Written questions are original, in exam style; calculation questions
   are generated fresh every time so they never run out.
   Bank format: [topic, prompt, [correct, wrong, wrong, wrong], explanation]. */

/* ---- number formatting ---- */
function nf(x,sf=3){
  if(x===0)return '0';
  const a=Math.abs(x);
  if(a>=1e5||a<1e-3){const e=Math.floor(Math.log10(a)),m=+(x/Math.pow(10,e)).toPrecision(sf);
    return (m===10?'1':String(m)).replace('-','−')+' × 10'+sup(m===10?e+1:e);}
  return String(+x.toPrecision(sf)).replace('-','−');
}
const mn=n=>String(n).replace('-','−');
/* wrong answers from common slips: factor errors, powers of ten, squaring mistakes */
function numOpts(x,unit,sf=3,extra){
  const u=unit?(unit==='%'?'%':' '+unit):'',r=nf(x,sf)+u;
  const cands=(extra||[]).concat([x*2,x/2,x*10,x/10,x*4,x/4,x*3,x*1.5]).map(v=>nf(v,sf)+u);
  const out=[],seen=new Set([r]);
  for(const c of cands){if(out.length===3)break;if(!seen.has(c)){seen.add(c);out.push(c);}}
  return [r,out];
}
const G=(topic,prompt,pair,explain)=>({topic,prompt,right:pair[0],wrong:pair[1],explain});
const gq=(topic,prompt,right,wrong,explain)=>({topic,prompt,right,wrong,explain});
const C=(n,k)=>{let r=1;for(let i=1;i<=k;i++)r=r*(n-k+i)/i;return Math.round(r);};
const gcd=(a,b)=>b?gcd(b,a%b):Math.abs(a);
const frac=(p,q)=>{const g=gcd(p,q);p/=g;q/=g;if(q<0){p=-p;q=-q;}return q===1?String(p):p+'/'+q;};
const signed=(c,x,first)=>c===0?'':(c<0?(first?'−':' − '):(first?'':' + '))+(Math.abs(c)===1&&x?'':Math.abs(c))+x;

/* =====================  PHYSICS (AQA)  ===================== */
const AL_PHY_TOPICS=['Measurements and errors','Particles and radiation','Waves','Mechanics and materials','Electricity','Further mechanics and thermal','Fields','Nuclear physics'];
const AL_PHY_BANK=[
 [0,'Which of these is an SI base unit?',['Ampere','Volt','Newton','Joule'],'The base units are kg, m, s, A, K, mol and cd. The volt, newton and joule are derived.'],
 [0,'A length is measured as 2.50 ± 0.05 m. What is the percentage uncertainty?',['2%','0.05%','5%','0.2%'],'0.05 ÷ 2.50 × 100 = 2%.'],
 [0,'How can random errors be reduced?',['Repeat readings and take a mean','Recalibrate the instrument','Subtract the zero error','Use a different unit'],'Averaging reduces random scatter. Calibration and zero errors are systematic.'],
 [0,'The radius of a sphere has a 2% uncertainty. What is the uncertainty in its volume?',['6%','2%','4%','8%'],'V ∝ r³, so percentage uncertainties multiply by the power: 3 × 2% = 6%.'],
 [1,'Which particle is a lepton?',['Muon','Proton','Pion','Neutron'],'Leptons: electron, muon, tau and their neutrinos. Protons and neutrons are baryons; pions are mesons.'],
 [1,'What is the quark composition of a proton?',['uud','udd','uds','uū'],'Charges: +2/3 + 2/3 − 1/3 = +1.'],
 [1,'In β⁻ decay a neutron becomes a proton and emits:',['An electron and an electron antineutrino','A positron and an electron neutrino','An alpha particle','Only a gamma photon'],'Charge and lepton number are conserved: the electron (L = +1) is balanced by the antineutrino (L = −1).'],
 [1,'The work function of a metal is:',['The minimum energy needed to free an electron from its surface','The energy of the incident photon','The maximum kinetic energy of the photoelectrons','The threshold frequency'],'hf = φ + Ek(max): photons must supply at least φ.'],
 [1,'Which quantity is not always conserved in weak interactions?',['Strangeness','Charge','Baryon number','Lepton number'],'Strangeness is conserved in strong interactions but can change by ±1 in weak interactions.'],
 [1,'Increasing the intensity of light above the threshold frequency increases:',['The number of photoelectrons emitted per second','The maximum kinetic energy of the photoelectrons','The work function','The threshold frequency'],'Intensity means more photons, not more energetic ones.'],
 [2,'In a stationary wave, the distance between adjacent nodes is:',['Half a wavelength','One wavelength','A quarter of a wavelength','Two wavelengths'],'Nodes are λ/2 apart.'],
 [2,'Polarisation provides evidence that light is:',['A transverse wave','A longitudinal wave','Made of particles','Faster than sound'],'Only transverse waves can be polarised.'],
 [2,'Total internal reflection needs light to travel:',['From a higher to a lower refractive index, beyond the critical angle','From a lower to a higher refractive index','Perpendicular to the boundary','Through a vacuum'],'sin c = n₂/n₁ only exists when n₁ > n₂.'],
 [2,'Using a grating with more lines per mm, the bright maxima become:',['More widely spaced','Closer together','Narrower but closer','Unchanged'],'d sinθ = nλ: smaller d gives larger θ.'],
 [2,'Two waves are coherent if they have:',['The same frequency and a constant phase difference','The same amplitude','The same speed','The same direction of travel'],'Coherence is needed for a stable interference pattern.'],
 [3,'The area under a velocity–time graph gives:',['Displacement','Acceleration','Force','Momentum'],'Area = velocity × time.'],
 [3,'A ball is thrown horizontally. Ignoring air resistance, its horizontal velocity:',['Stays constant','Increases','Decreases','Becomes zero at the top'],'No horizontal force acts, so horizontal velocity is constant.'],
 [3,'The Young modulus is defined as:',['Tensile stress ÷ tensile strain','Force ÷ extension','Stress × strain','Strain ÷ stress'],'E = σ/ε, with units of Pa.'],
 [3,'The area under a force–extension graph equals:',['The work done in stretching (elastic energy if elastic)','The spring constant','The Young modulus','The breaking stress'],'Work = ∫F dx.'],
 [3,'An object moves at constant velocity. The resultant force on it is:',['Zero','Equal to its weight','In the direction of motion','Opposite to its motion'],'Newton\'s first law.'],
 [4,'Emf is the energy transferred per unit charge:',['By the source to the charges','By the charges to the external circuit only','In the internal resistance','Per second'],'ε = E/Q for the source; pd is energy per charge transferred by the charges.'],
 [4,'Why does the resistance of a filament lamp rise with current?',['Its temperature rises, so ions vibrate more and impede electrons','Its length increases','More charge carriers are released','Its cross-section increases'],'Higher temperature means more collisions between electrons and the lattice.'],
 [4,'As the temperature of an NTC thermistor rises, its resistance:',['Decreases','Increases','Stays constant','Falls to zero'],'More charge carriers are released as it heats up.'],
 [4,'Terminal pd is less than emf when current flows because of:',['Lost volts across the internal resistance','The voltmeter\'s resistance','Superconductivity','Kirchhoff\'s first law'],'V = ε − Ir.'],
 [4,'Kirchhoff\'s first law is a consequence of conservation of:',['Charge','Energy','Momentum','Mass'],'Current into a junction equals current out.'],
 [5,'In simple harmonic motion, the acceleration is:',['Proportional to displacement and directed towards equilibrium','Constant','Greatest at equilibrium','Proportional to velocity'],'a = −ω²x.'],
 [5,'Resonance occurs when:',['The driving frequency equals the natural frequency','Damping is very heavy','The amplitude is zero','The system is undriven'],'Energy transfer to the oscillator is then most efficient.'],
 [5,'The internal energy of an ideal gas depends only on:',['Its temperature','Its volume','Its pressure','Its density'],'There are no intermolecular forces, so all internal energy is kinetic: proportional to T.'],
 [5,'Specific latent heat is the energy needed to:',['Change the state of 1 kg of a substance without changing its temperature','Raise the temperature of 1 kg by 1 K','Heat a substance to its boiling point','Melt any mass completely'],'Q = mL.'],
 [5,'Why does the centripetal force do no work on an object in uniform circular motion?',['It is perpendicular to the velocity','The speed changes','It is very small','It acts away from the centre'],'Work = Fs cosθ with θ = 90°.'],
 [6,'Gravitational potential at a point is:',['The work done per unit mass to bring a small mass from infinity to that point','Always positive','The force per unit mass','Independent of distance'],'V = −GM/r, which is negative and zero at infinity.'],
 [6,'The time constant of an RC circuit is:',['RC','R/C','1/(RC)','½RC'],'After one time constant, charge falls to about 37% of its initial value when discharging.'],
 [6,'A geostationary satellite has an orbital period of:',['24 hours','12 hours','90 minutes','27 days'],'It must match the Earth\'s rotation (strictly a sidereal day, about 23 h 56 min).'],
 [6,'The force on a current-carrying wire in a magnetic field is greatest when the wire is:',['Perpendicular to the field','Parallel to the field','At 45° to the field','Stationary'],'F = BIl sinθ.'],
 [6,'Lenz\'s law is a consequence of conservation of:',['Energy','Charge','Momentum','Mass'],'If induced currents aided the change, energy would be created from nothing.'],
 [6,'Electric field strength between parallel plates is:',['V/d','Vd','d/V','V/d²'],'A uniform field: E = V/d.'],
 [7,'Rutherford\'s alpha scattering experiment showed that:',['Most of the atom is empty space, with a small, dense, positive nucleus','Electrons orbit in fixed shells','Atoms are indivisible','The nucleus contains neutrons'],'Most alphas passed straight through; a few were deflected through large angles.'],
 [7,'Which radiation is the most strongly ionising?',['Alpha','Beta','Gamma','Radio waves'],'Alphas are massive and doubly charged, so they interact strongly.'],
 [7,'Nuclear radius depends on nucleon number A as:',['R = r₀A^(1/3)','R = r₀A','R = r₀A²','R = r₀/A'],'Nuclear density is roughly constant, so volume ∝ A.'],
 [7,'Fission of heavy nuclei releases energy because the products have:',['Greater binding energy per nucleon','Smaller binding energy per nucleon','More total mass','More protons in total'],'Moving towards iron on the binding energy curve releases energy.'],
 [7,'In a thermal fission reactor, the moderator:',['Slows neutrons down','Absorbs neutrons','Cools the core','Shields workers from radiation'],'Slow (thermal) neutrons are more likely to cause fission of U-235.'] ,[0,'The precision of a set of measurements describes:',['How close repeated measurements are to each other','How close they are to the true value','The smallest scale division','The percentage uncertainty'],'Accuracy is closeness to the true value.']
 ,[1,'When an electron and a positron at rest annihilate, they produce:',['Two gamma photons travelling in opposite directions','One gamma photon','A neutrino','A proton'],'Two photons are needed to conserve momentum.']
 ,[1,'The exchange particle of the electromagnetic force is the:',['Virtual photon','W boson','Gluon','Pion'],'W bosons carry the weak force; gluons the strong force between quarks.']
 ,[2,'For constructive interference, the path difference must be:',['A whole number of wavelengths','Half a wavelength','Any value','Exactly zero'],'Destructive interference needs (n + ½)λ.']
 ,[2,'When light passes from air into glass, its:',['Speed and wavelength decrease; frequency is unchanged','Speed and wavelength increase','Speed decreases and wavelength increases','Frequency decreases'],'Frequency is set by the source.']
 ,[3,'An object reaches terminal velocity when:',['Drag equals its weight, so the resultant force is zero','Its acceleration is greatest','Drag is zero','Its velocity is zero'],'It then falls at constant speed.']
 ,[3,'Impulse is equal to:',['Change in momentum','Force × distance','Mass × acceleration','Kinetic energy'],'Impulse = FΔt = Δp: the area under a force–time graph.']
 ,[4,'Two identical resistors in parallel have a combined resistance of:',['Half of one resistor','Twice one resistor','The same as one resistor','A quarter of one resistor'],'1/R = 2/R₁.']
 ,[4,'A superconductor has:',['Zero resistance below its critical temperature','Very high resistance','Zero resistance at all temperatures','Resistance that rises when cooled'],'Used in MRI scanners and particle accelerators.']
 ,[5,'At absolute zero, particles have:',['Their minimum possible internal energy','No mass','Maximum kinetic energy','A temperature of 0 °C'],'0 K = −273.15 °C.']
 ,[5,'For an ideal gas at constant temperature (Boyle\'s law):',['pV is constant','p/T is constant','V/T is constant','p is constant'],'Halving the volume doubles the pressure.']
 ,[6,'Field lines around an isolated positive point charge point:',['Radially outwards','Radially inwards','In circles around it','Parallel to each other'],'They show the direction of force on a positive test charge.']
 ,[6,'In an ideal transformer, Vs/Vp equals:',['Ns/Np','Np/Ns','Is/Ip','1'],'Step-up transformers have more turns on the secondary.']
 ,[6,'The escape velocity from a planet depends on:',['The planet\'s mass and radius','The mass of the escaping object','The launch direction','The planet\'s atmosphere only'],'v = √(2GM/R), independent of the object\'s mass.']
 ,[7,'When measuring a radioactive source\'s count rate, background radiation should be:',['Measured separately and subtracted','Ignored','Doubled','Added on'],'This gives the corrected count rate due to the source alone.']
 ,[7,'Binding energy is:',['The energy needed to separate a nucleus into its individual nucleons','The energy of an emitted alpha particle','The kinetic energy of the nucleons','The energy released in beta decay'],'It equals the mass defect × c².']

 ,[0,'A systematic error:',['Shifts every reading by the same amount or proportion','Varies unpredictably between readings','Is reduced by averaging repeats','Only affects digital meters'],'For example a zero error. Repeating readings does not remove it.']
 ,[0,'A micrometer reads to 0.01 mm. A wire\'s diameter is 0.52 mm, with uncertainty ±0.01 mm. The percentage uncertainty is about:',['2%','0.01%','5%','0.5%'],'0.01/0.52 × 100 ≈ 1.9%.']
 ,[3,'At a fixed deceleration, braking distance depends on initial speed v as:',['v² (double the speed, four times the distance)','v','√v','It does not depend on speed'],'v² = 2as gives s ∝ v².']
 ,[5,'The root-mean-square speed of gas molecules is proportional to:',['√T (absolute temperature)','T','T²','1/T'],'½m(c_rms)² = (3/2)kT.']
 ,[0,'Which instrument is best for measuring the diameter of a wire of about 0.5 mm?',['Micrometer screw gauge','Metre rule','Vernier caliper reading to 0.1 mm','Tape measure'],'A micrometer resolves 0.01 mm, giving the smallest percentage uncertainty.']
 ,[2,'Two waves of equal amplitude meet in antiphase. The resultant amplitude is:',['Zero','Double one amplitude','Equal to one amplitude','Half of one amplitude'],'Complete destructive superposition.']
 ,[4,'A current of 2 A flows for 5 minutes. How much charge passes?',['600 C','10 C','24 C','7200 C'],'Q = It = 2 × 300 s.']
 ,[7,'In β⁻ decay, the proton number Z and nucleon number A change by:',['Z increases by 1; A unchanged','Z decreases by 1; A unchanged','Z decreases by 2; A decreases by 4','Neither changes'],'A neutron turns into a proton, an electron and an antineutrino.']
 ,[0,'A student times 10 oscillations as 12.4 s with an uncertainty of ±0.2 s. What is the uncertainty in the period?',['±0.02 s','±0.2 s','±0.12 s','±2 s'],'Dividing by 10 divides the absolute uncertainty by 10: T = 1.24 ± 0.02 s.']
 ,[1,'Which of these particles is a baryon?',['Neutron','Pion','Electron','Kaon'],'Baryons are hadrons made of three quarks. Pions and kaons are mesons; electrons are leptons.']
 ,[3,'A ball is thrown vertically upwards. At its highest point, its acceleration is:',['9.81 m/s² downwards','Zero','9.81 m/s² upwards','Changing direction'],'Gravity acts the whole time; only the velocity is momentarily zero.']
 ,[7,'The range of alpha particles in air is about:',['A few centimetres','A few millimetres','A few metres','Several kilometres'],'They are strongly ionising, so they lose their energy quickly.']
];
const AL_PHY_GEN=[
 [4,()=>{const [a,b,r]=pick([[6,3,2],[12,4,3],[10,10,5],[20,5,4],[6,12,4],[30,6,5],[8,8,4],[15,10,6]]);
   return G(4,'A '+a+' Ω and a '+b+' Ω resistor are connected in parallel. What is the combined resistance?',numOpts(r,'Ω',3,[a+b,(a+b)/2,a*b]),'1/R = 1/'+a+' + 1/'+b+', so R = '+a+' × '+b+' / ('+a+' + '+b+') = '+r+' Ω.');}],
 [4,()=>{const V=pick([6,9,12,24]),R=pick([2,3,4,6,8]),P=V*V/R;
   return G(4,'A '+V+' V supply is connected across a '+R+' Ω resistor. What power is dissipated?',numOpts(P,'W',3,[V/R,V*R,V*V*R]),'P = V²/R = '+V+'² / '+R+' = '+nf(P)+' W.');}],
 [4,()=>{const e=pick([6,9,12]),r=pick([0.5,1,2]),R=pick([4,5,10]),I=e/(R+r),V=I*R;
   return G(4,'A cell of emf '+e+' V and internal resistance '+r+' Ω is connected to a '+R+' Ω resistor. What is the terminal pd?',numOpts(V,'V',3,[e,e/R*r,e-e/R]),'I = ε/(R + r) = '+nf(I)+' A, so V = IR = '+nf(V)+' V.');}],
 [1,()=>{const [l,E]=pick([[620,2],[496,2.5],[413,3],[310,4],[248,5]]);
   return G(1,'What is the energy of a photon of wavelength '+l+' nm, in eV?',numOpts(E,'eV',2,[E*2,1240*l/1e6]),'E = hc/λ ≈ 1240 eV nm ÷ '+l+' nm = '+E+' eV.');}],
 [1,()=>{const f=pick([7,8,9,10]),phi=pick([2.0,2.3,2.5]),E=6.63e-34*f*1e14/1.6e-19-phi;
   return G(1,'Light of frequency '+f+' × 10¹⁴ Hz falls on a metal with work function '+phi+' eV. What is the maximum kinetic energy of the photoelectrons? (h = 6.63 × 10⁻³⁴ J s)',numOpts(E,'eV',2,[E+phi,phi,E+2*phi]),'hf = '+nf(6.63e-34*f*1e14/1.6e-19,3)+' eV, so Ek(max) = hf − φ = '+nf(E,2)+' eV.');}],
 [2,()=>{const f=pick([50,200,256,440,1000]),l=pick([0.5,1.2,2,3.4]),v=f*l;
   return G(2,'A wave has frequency '+f+' Hz and wavelength '+l+' m. What is its speed?',numOpts(v,'m/s',3,[f/l,l/f]),'v = fλ = '+f+' × '+l+' = '+nf(v)+' m/s.');}],
 [2,()=>{const l=pick([500,600,650]),D=pick([1.5,2,2.5]),s=pick([0.25,0.5,0.8]),w=l*1e-9*D/(s*1e-3);
   return G(2,'Young\'s slits: λ = '+l+' nm, slit separation '+s+' mm, screen distance '+D+' m. What is the fringe spacing?',numOpts(w*1e3,'mm',2),'w = λD/s = '+l+' × 10⁻⁹ × '+D+' / '+s+' × 10⁻³ = '+nf(w*1e3,2)+' mm.');}],
 [3,()=>{const m=pick([2,5,0.5,1.5,1200]),v=pick([3,4,10,20]),E=0.5*m*v*v;
   return G(3,'What is the kinetic energy of a '+m+' kg object moving at '+v+' m/s?',numOpts(E,'J',3,[m*v,m*v*v]),'Ek = ½mv² = ½ × '+m+' × '+v+'² = '+nf(E)+' J.');}],
 [3,()=>{const h=pick([5,10,20,45,80]),t=Math.sqrt(2*h/9.81);
   return G(3,'An object is dropped from rest from a height of '+h+' m. How long does it take to land? (g = 9.81 m/s², no air resistance)',numOpts(t,'s',3,[2*h/9.81,h/9.81,Math.sqrt(h/9.81)]),'s = ½gt², so t = √(2h/g) = √(2 × '+h+' / 9.81) = '+nf(t)+' s.');}],
 [3,()=>{const F=pick([100,250,500]),A=pick([1,2,5])*1e-6,L=pick([1,2]),dL=pick([0.5,1,2])*1e-3,E=F*L/(A*dL);
   return G(3,'A wire of length '+L+' m and cross-sectional area '+nf(A)+' m² stretches by '+dL*1e3+' mm under '+F+' N. What is its Young modulus?',numOpts(E,'Pa',2),'E = FL/(AΔL) = '+nf(E,2)+' Pa.');}],
 [3,()=>{const m1=pick([2,3,4]),u1=pick([4,6,8]),m2=pick([1,2,6]),v=m1*u1/(m1+m2);
   return G(3,'A '+m1+' kg trolley moving at '+u1+' m/s hits and sticks to a stationary '+m2+' kg trolley. What is their common speed?',numOpts(v,'m/s',3,[u1/2,m1*u1/m2]),'Momentum is conserved: '+m1+' × '+u1+' = ('+m1+' + '+m2+')v, so v = '+nf(v)+' m/s.');}],
 [5,()=>{const m=pick([0.2,0.5,1,2]),k=pick([20,50,80,200]),T=2*Math.PI*Math.sqrt(m/k);
   return G(5,'A '+m+' kg mass oscillates on a spring with k = '+k+' N/m. What is the period?',numOpts(T,'s',3,[Math.sqrt(m/k),2*Math.PI*Math.sqrt(k/m),2*Math.PI*m/k]),'T = 2π√(m/k) = '+nf(T)+' s.');}],
 [5,()=>{const m=pick([0.5,1,2]),dT=pick([10,20,30,50]),c=pick([4200,900,390]),Q=m*c*dT;
   return G(5,'How much energy raises '+m+' kg of a material (c = '+c+' J kg⁻¹ K⁻¹) by '+dT+' K?',numOpts(Q,'J',3,[c*dT,m*c]),'Q = mcΔT = '+m+' × '+c+' × '+dT+' = '+nf(Q)+' J.');}],
 [5,()=>{const n=pick([1,2,0.5]),T=pick([273,300,350]),V=pick([0.01,0.02,0.05]),p=n*8.31*T/V;
   return G(5,n+' mol of an ideal gas at '+T+' K occupies '+V+' m³. What is its pressure? (R = 8.31)',numOpts(p,'Pa',3),'p = nRT/V = '+nf(p)+' Pa.');}],
 [6,()=>{const C=pick([10,47,100,220])*1e-6,V=pick([6,9,12]),E=0.5*C*V*V;
   return G(6,'A '+nf(C*1e6)+' μF capacitor is charged to '+V+' V. How much energy does it store?',numOpts(E,'J',3,[C*V,C*V*V]),'E = ½CV² = '+nf(E)+' J.');}],
 [6,()=>{const k=pick([2,3,4]);const g=9.81/(k*k);
   return G(6,'At what gravitational field strength would you be at '+k+' Earth radii from the Earth\'s centre? (g = 9.81 N/kg at the surface)',numOpts(g,'N/kg',3,[9.81/k,9.81*k]),'g ∝ 1/r², so g = 9.81/'+k+'² = '+nf(g)+' N/kg.');}],
 [6,()=>{const R=pick([10,47,100])*1e3,C=pick([10,100,220])*1e-6;
   return G(6,'What is the time constant of a '+nf(R/1e3)+' kΩ resistor with a '+nf(C*1e6)+' μF capacitor?',numOpts(R*C,'s',3,[R/C,1/(R*C)]),'τ = RC = '+nf(R*C)+' s.');}],
 [7,()=>{const n=pick([2,3,4,5]),A0=pick([800,1600,3200,640]);
   return G(7,'A sample has an activity of '+A0+' Bq. What is its activity after '+n+' half-lives?',numOpts(A0/Math.pow(2,n),'Bq',3,[A0/n/2,A0/(2*n)]),'Halve '+n+' times: '+A0+' ÷ 2'+sup(n)+' = '+nf(A0/Math.pow(2,n))+' Bq.');}],
 [7,()=>{const t=pick([5,8,10,30]),lam=Math.LN2/t;
   return G(7,'A nuclide has a half-life of '+t+' days. What is its decay constant?',numOpts(lam,'day⁻¹',3,[1/t,t/Math.LN2]),'λ = ln2/t½ = 0.693/'+t+' = '+nf(lam)+' day⁻¹.');}],
 [0,()=>{const L=pick([2.0,4.0,5.0]),dL=pick([0.1,0.2]),W=pick([1.0,2.0,2.5]),dW=pick([0.05,0.1]),p=100*(dL/L+dW/W);
   return G(0,'A rectangle is ('+L.toFixed(1)+' ± '+dL+') m by ('+W.toFixed(1)+' ± '+dW+') m. What is the percentage uncertainty in its area?',numOpts(p,'%',2,[100*Math.abs(dL/L-dW/W),100*dL/L,100*(dL+dW)/(L+W)]),'Add percentage uncertainties: '+nf(100*dL/L,2)+'% + '+nf(100*dW/W,2)+'% = '+nf(p,2)+'%.');}]
];

/* =====================  MATHS (Edexcel)  ===================== */
const AL_MATHS_TOPICS=['Proof and algebra','Coordinate geometry','Sequences and series','Trigonometry','Exponentials and logarithms','Differentiation','Integration','Vectors and numerical methods','Statistics','Mechanics'];
const AL_MATHS_BANK=[
 [0,'Which value of n is a counter-example to "n² + n + 41 is prime for every positive integer n"?',['n = 40','n = 1','n = 10','n = 2'],'40² + 40 + 41 = 1681 = 41².'],
 [0,'What is the remainder when x³ − 2x + 4 is divided by (x − 2)?',['8','4','0','−8'],'Remainder theorem: f(2) = 8 − 4 + 4 = 8.'],
 [0,'Simplify (x² − 9)/(x² + x − 6).',['(x − 3)/(x − 2)','(x + 3)/(x − 2)','(x − 3)/(x + 2)','x − 3'],'(x − 3)(x + 3) / ((x + 3)(x − 2)).'],
 [0,'Write 3/((x + 1)(x + 2)) in partial fractions.',['3/(x + 1) − 3/(x + 2)','3/(x + 1) + 3/(x + 2)','1/(x + 1) + 2/(x + 2)','3/(x + 2) − 3/(x + 1)'],'3 = A(x + 2) + B(x + 1): x = −1 gives A = 3, x = −2 gives B = −3.'],
 [0,'Proof by contradiction that √2 is irrational starts by assuming:',['√2 = a/b with a and b integers with no common factor','√2 is irrational','a and b are both even','√2 is an integer'],'You then show a and b must both be even, contradicting the assumption.'],
 [1,'Lines perpendicular to y = 2x + 1 have gradient:',['−1/2','2','1/2','−2'],'Perpendicular gradients multiply to −1.'],
 [1,'The tangent to a circle at a point is perpendicular to:',['The radius at that point','The x-axis','The chord through that point','The diameter parallel to it'],'This is a standard circle theorem used in coordinate geometry.'],
 [2,'What is the sum to infinity of 8 + 4 + 2 + …?',['16','14','12','It has no sum'],'a/(1 − r) = 8/(1 − ½) = 16.'],
 [2,'A geometric series has a sum to infinity only if:',['|r| < 1','r > 1','r = 1','a < 1'],'Otherwise the terms do not shrink to zero.'],
 [3,'What is the exact value of cos 30°?',['√3/2','1/2','√2/2','√3'],'From the 30-60-90 triangle with sides 1, √3, 2.'],
 [3,'How many degrees is π/3 radians?',['60°','30°','120°','45°'],'π radians = 180°.'],
 [3,'sec²θ − tan²θ equals:',['1','0','cos²θ','2 tanθ'],'Divide sin²θ + cos²θ = 1 by cos²θ: tan²θ + 1 = sec²θ.'],
 [3,'For small θ in radians, cos θ is approximately:',['1 − θ²/2','θ','1','1 − θ'],'The small-angle approximation from the Maclaurin series.'],
 [4,'Solve eˣ = 5.',['x = ln 5','x = 5e','x = log₅ e','x = 5/e'],'Take natural logs of both sides.'],
 [4,'log₂ 8 + log₂ 4 equals:',['5','12','32','log₂ 12'],'3 + 2 = 5 (or log₂ 32).'],
 [4,'Plotting log y against log x gives a straight line when:',['y = axⁿ','y = abˣ','y = ax + b','y = a + ln x'],'log y = log a + n log x: gradient n, intercept log a.'],
 [5,'A stationary point is a local maximum if d²y/dx² is:',['Negative','Positive','Zero','Undefined'],'The gradient is decreasing through zero.'],
 [5,'d/dx (sin x) = cos x requires x to be measured in:',['Radians','Degrees','Gradians','Any unit'],'The standard derivatives of trig functions assume radians.'],
 [6,'If a curve lies below the x-axis, the definite integral over that interval is:',['Negative','Positive','Zero','Equal to the area'],'Take the modulus to get the area.'],
 [6,'Integration by parts is ∫u (dv/dx) dx =',['uv − ∫v (du/dx) dx','uv + ∫v (du/dx) dx','u′v − ∫uv′ dx','∫u dx × ∫v dx'],'It comes from the product rule.'],
 [7,'The Newton–Raphson formula is:',['xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)','xₙ₊₁ = xₙ + f(xₙ)/f′(xₙ)','xₙ₊₁ = f(xₙ)','xₙ₊₁ = xₙ − f′(xₙ)/f(xₙ)'],'It follows the tangent to where it crosses the x-axis.'],
 [7,'A sign change of f(x) between x = a and x = b shows a root exists if f is:',['Continuous on the interval','Increasing','A polynomial of degree 2','Positive at a'],'A discontinuity (e.g. an asymptote) can also cause a sign change.'],
 [8,'For a normal distribution, roughly what proportion of values lie within 2 standard deviations of the mean?',['95%','68%','99.7%','50%'],'The 68–95–99.7 rule.'],
 [8,'In a hypothesis test, the significance level is:',['The probability of rejecting H₀ when it is true','The probability that H₀ is true','The probability of accepting H₁','The test statistic'],'It is the chance of a Type I error.'],
 [8,'For X ~ B(n, p), the mean is:',['np','np(1 − p)','n/p','√(np)'],'np(1 − p) is the variance.'],
 [8,'Two events A and B are independent if:',['P(A ∩ B) = P(A) × P(B)','P(A ∩ B) = 0','P(A) + P(B) = 1','P(A | B) = P(B)'],'Mutually exclusive events have P(A ∩ B) = 0, which is different.'],
 [9,'A particle on a rough plane is on the point of slipping. The friction force is:',['μR (limiting friction)','Zero','Greater than μR','Equal to mg'],'Friction reaches its maximum μR at the point of slipping.'],
 [9,'Newton\'s third law pairs of forces act on:',['Different bodies','The same body','Only stationary bodies','Only in collisions'],'They are equal and opposite, on different objects.'],
 [9,'The moment of a force about a point is:',['Force × perpendicular distance from the point to the line of action','Force × distance along the line of action','Force ÷ distance','Mass × acceleration'],'Units: N m.'] ,[1,'The equation of a circle with centre (a, b) and radius r is:',['(x − a)² + (y − b)² = r²','(x + a)² + (y + b)² = r²','x² + y² = r','(x − a)² + (y − b)² = r'],'From Pythagoras.']
 ,[2,'The nth term of an arithmetic sequence is:',['a + (n − 1)d','a + nd','arⁿ⁻¹','n/2 (2a + (n − 1)d)'],'The last option is the sum of n terms.']
 ,[3,'The solutions of sin x = 0.5 for 0° ≤ x < 360° are:',['30° and 150°','30° and 210°','30° and 330°','60° and 120°'],'Sine is positive in the first and second quadrants: x and 180° − x.']
 ,[4,'If y = abˣ, a graph of ln y against x is a straight line with gradient:',['ln b','b','ln a','a'],'ln y = ln a + x ln b.']
 ,[5,'d/dx (sin(x²)) =',['2x cos(x²)','cos(x²)','2x sin(x²)','cos(2x)'],'Chain rule: cos(x²) × 2x.']
 ,[5,'d/dx (e³ˣ) =',['3e³ˣ','e³ˣ','e³ˣ/3','3x e³ˣ⁻¹'],'Chain rule.']
 ,[6,'The trapezium rule over-estimates an area when the curve is:',['Convex (curving upwards)','Concave (curving downwards)','A straight line','Below the x-axis'],'The straight tops of the trapezia lie above a convex curve.']
 ,[8,'Data have mean 50 and standard deviation 5. Using mean ± 3 standard deviations, which value is an outlier?',['67','62','40','55'],'The limits are 35 and 65.']
 ,[8,'A strong correlation between two variables does not prove:',['That one causes the other','That they are related','That there is a trend','Anything about linearity'],'There may be a third factor or coincidence.']
 ,[9,'At the top of its path, a projectile has:',['Zero vertical velocity','Zero horizontal velocity','Zero acceleration','Its maximum speed'],'Acceleration is still g downwards.']

 ,[1,'Two straight lines are parallel if they have:',['The same gradient','Gradients that multiply to −1','The same y-intercept','Gradients that add to zero'],'Perpendicular lines have gradients that multiply to −1.']
 ,[1,'What is the midpoint of (2, 5) and (8, −1)?',['(5, 2)','(6, 3)','(10, 4)','(3, 3)'],'Average the coordinates: ((2 + 8)/2, (5 − 1)/2).']
 ,[2,'A sequence has uₙ₊₁ = 2uₙ − 1 and u₁ = 3. What is u₃?',['9','5','7','11'],'u₂ = 2 × 3 − 1 = 5, then u₃ = 2 × 5 − 1 = 9.']
 ,[6,'Find ∫ 1/(2x) dx.',['½ ln|x| + C','2 ln|x| + C','ln|x| + C','−1/(2x²) + C'],'Take out the constant ½, then ∫ 1/x dx = ln|x|.']
 ,[7,'For a = 2i + 3j and b = 4i − j, what is a + b?',['6i + 2j','6i + 4j','8i − 3j','2i − 4j'],'Add the i and j components separately.']
 ,[7,'The iteration xₙ₊₁ = g(xₙ) fails to converge to a root when, near the root:',['|g′(x)| > 1','g is continuous','The starting value is positive','The root is an integer'],'It converges when |g′(x)| < 1 near the root.']
 ,[1,'The line y = 3x + c is a tangent to y = x² + 1. What is c?',['−5/4','5/4','1','−1'],'x² − 3x + 1 − c = 0 must have a repeated root: 9 − 4(1 − c) = 0, so c = −5/4.']
 ,[2,'Evaluate the sum of (2r + 1) for r = 1 to 10.',['120','110','121','100'],'2 × (1 + 2 + … + 10) + 10 = 2 × 55 + 10 = 120.']
 ,[4,'Solve 2 ln x = ln 9.',['x = 3','x = 4.5','x = 9','x = ±3'],'ln x² = ln 9 gives x² = 9, and ln x needs x > 0, so x = 3.']
 ,[5,'Where are the stationary points of y = x³ − 6x² + 9x?',['x = 1 and x = 3','x = 0 and x = 3','x = 1 and x = 2','x = 2 and x = 3'],'dy/dx = 3x² − 12x + 9 = 3(x − 1)(x − 3).']
 ,[6,'Find the area under y = 1/x from x = 1 to x = e.',['1','e','e − 1','1/e'],'[ln x] from 1 to e = 1 − 0 = 1.']
 ,[7,'What is the angle between the vectors i + j and i − j?',['90°','45°','0°','60°'],'Their scalar product is 1 − 1 = 0, so they are perpendicular.']
 ,[9,'A 1000 kg car brakes uniformly from 20 m/s to rest in 50 m. What is the braking force?',['4000 N','2000 N','400 N','20 000 N'],'a = v²/(2s) = 400/100 = 4 m/s², so F = ma = 4000 N.']
 ,[0,'Which value of n disproves "2ⁿ − 1 is prime for every n ≥ 2"?',['n = 4','n = 3','n = 5','n = 7'],'2⁴ − 1 = 15 = 3 × 5. For n = 3, 5, 7 the values 7, 31, 127 are prime.']
 ,[1,'What is the radius of the circle x² + y² − 4x + 6y − 3 = 0?',['4','3','16','√3'],'(x − 2)² + (y + 3)² = 3 + 4 + 9 = 16, so r = 4.']
 ,[2,'A geometric series has first term 5 and common ratio 2. What is the sum of the first 6 terms?',['315','320','160','63'],'S₆ = 5(2⁶ − 1)/(2 − 1) = 5 × 63 = 315.']
 ,[3,'How many solutions does cos x = 0.3 have for 0° ≤ x < 720°?',['4','2','1','8'],'Two solutions in each 360°, over two full turns.']
 ,[4,'If log₂ x = 5, what is x?',['32','10','25','2.5'],'x = 2⁵ = 32.']
 ,[6,'Evaluate ∫₀^(π/2) cos x dx.',['1','0','π/2','−1'],'[sin x] from 0 to π/2 = 1 − 0.']
];
const AL_MATHS_GEN=[
 [0,()=>{let r1,r2;do{r1=rint(-7,7);r2=rint(-7,7);}while(!r1||!r2||r1===r2||r1===-r2);
   const b=-(r1+r2),c=r1*r2,eq='x²'+signed(b,'x')+signed(c,'')+' = 0',ans=(a,b)=>'x = '+mn(Math.min(a,b))+' or x = '+mn(Math.max(a,b));
   return gq(0,'Solve '+eq+'.',ans(r1,r2),[ans(-r1,-r2),ans(r1,-r2),ans(-r1,r2)],'Factorise: (x'+signed(-r1,'')+')(x'+signed(-r2,'')+') = 0.');}],
 [0,()=>{const a=rint(1,4),b=rint(-8,8),c=rint(-6,6),d=b*b-4*a*c;
   const r=d>0?'Two distinct real roots':d===0?'One repeated root':'No real roots';
   return gq(0,'How many real roots does '+signed(a,'x²',true)+signed(b,'x')+signed(c,'')+' = 0 have?',r,['Two distinct real roots','One repeated root','No real roots','Infinitely many roots'].filter(x=>x!==r),'Discriminant b² − 4ac = '+b+'² − 4 × '+a+' × '+c+' = '+d+'.');}],
 [1,()=>{const a=rint(-5,5),b=rint(-5,5),r=pick([2,3,4,5,6]),D=-2*a,E=-2*b,F=a*a+b*b-r*r;
   const eq='x² + y²'+signed(D,'x')+signed(E,'y')+signed(F,'')+' = 0',cc=(p,q)=>'('+mn(p)+', '+mn(q)+')';
   return gq(1,'Find the centre of the circle '+eq+'.',cc(a,b),[cc(-a,b),cc(a,-b),cc(-a,-b),cc(D,E)].filter(x=>x!==cc(a,b)),'Complete the square: (x'+signed(-a,'')+')² + (y'+signed(-b,'')+')² = '+r*r+', so the centre is '+cc(a,b)+' and the radius '+r+'.');}],
 [1,()=>{const x1=rint(-5,5),y1=rint(-5,5),dx=pick([3,4,6,8,5,12]),dy={3:4,4:3,6:8,8:6,5:12,12:5}[dx];
   return G(1,'Find the distance between ('+x1+', '+y1+') and ('+(x1+dx)+', '+(y1+dy)+').',numOpts(Math.hypot(dx,dy),'',3,[dx+dy,Math.abs(dx-dy),dx*dx+dy*dy]),'√('+dx+'² + '+dy+'²) = '+Math.hypot(dx,dy)+'.');}],
 [2,()=>{const a=rint(2,10),d=rint(2,6),n=pick([10,12,15,20]),S=n*(2*a+(n-1)*d)/2;
   return G(2,'An arithmetic series has first term '+a+' and common difference '+d+'. Find the sum of the first '+n+' terms.',numOpts(S,'',4,[n*(a+(n-1)*d),n*(2*a+n*d)/2,a+(n-1)*d]),'Sₙ = n/2 [2a + (n − 1)d] = '+n+'/2 × ['+2*a+' + '+(n-1)*d+'] = '+S+'.');}],
 [2,()=>{const a=pick([6,12,18,24,36]),[rn,rd]=pick([[1,2],[1,3],[2,3],[1,4],[-1,2]]),S=a*rd/(rd-rn);
   return gq(2,'Find the sum to infinity of the geometric series with first term '+a+' and common ratio '+frac(rn,rd)+'.',nf(S),[nf(a*rd/(rd+rn)),nf(a/(1-rn)),nf(a*rn/rd/(1-rn/rd))].concat([nf(2*S),nf(S/2)]).filter((v,i,arr)=>v!==nf(S)&&arr.indexOf(v)===i).slice(0,3),'S∞ = a/(1 − r) = '+a+'/(1 − '+frac(rn,rd)+') = '+nf(S)+'.');}],
 [2,()=>{const n=rint(4,7),k=pick([2,3]),a=pick([2,3,-2]),c=C(n,k)*Math.pow(a,k);
   return G(2,'Find the coefficient of x'+sup(k)+' in the expansion of (1 '+(a<0?'− ':'+ ')+Math.abs(a)+'x)'+sup(n)+'.',numOpts(c,'',4,[C(n,k)*a,C(n,k),Math.pow(a,k)]),'ⁿCₖ aᵏ = '+C(n,k)+' × ('+a+')'+sup(k)+' = '+c+'.');}],
 [3,()=>{const T={sin:{0:'0',30:'1/2',45:'√2/2',60:'√3/2',90:'1'},cos:{0:'1',30:'√3/2',45:'√2/2',60:'1/2',90:'0'},tan:{0:'0',30:'√3/3',45:'1',60:'√3'}};
   const f=pick(['sin','cos','tan']),ang=pick(Object.keys(T[f])),r=T[f][ang];
   const all=['0','1/2','√2/2','√3/2','1','√3','√3/3','2'].filter(x=>x!==r);
   const rad={0:'0',30:'π/6',45:'π/4',60:'π/3',90:'π/2'}[ang];
   return gq(3,'What is the exact value of '+f+'('+(Math.random()<.5?ang+'°':rad)+')?',r,shuffle(all).slice(0,3),f+' '+ang+'° = '+r+'.');}],
 [4,()=>{const b=pick([2,3,5]),n=rint(2,5),v=Math.pow(b,n);
   return gq(4,'Solve '+b+'ˣ = '+v+'.','x = '+n,['x = '+(n+1),'x = '+v/b,'x = '+(n-1)],v+' = '+b+sup(n)+'.');}],
 [4,()=>{const k=rint(2,9),a=pick([2,3,5]);
   return gq(4,'Simplify ln('+a+'e'+sup(k)+').',k+' + ln '+a,[k+' ln '+a,String(a*k),'ln '+a+' − '+k],'ln('+a+') + ln(e'+sup(k)+') = ln '+a+' + '+k+'.');}],
 [5,()=>{const a=rint(1,3),b=rint(-4,4),c=rint(-6,6),k=rint(-2,3),g=3*a*k*k+2*b*k+c;
   return G(5,'Find the gradient of y = '+signed(a,'x³',true)+signed(b,'x²')+signed(c,'x')+' at x = '+k+'.',numOpts(g,'',3,[a*k*k*k+b*k*k+c*k,3*a*k+2*b+c,a*k*k+b*k+c].map(v=>v===g?g+7:v)),'dy/dx = '+signed(3*a,'x²',true)+signed(2*b,'x')+signed(c,'')+'; at x = '+k+' this is '+g+'.');}],
 [5,()=>{const a=rint(1,4),b=rint(1,6)*2*a;
   const xs=b/(2*a);
   return gq(5,'Find the x-coordinate of the stationary point of y = '+signed(a,'x²',true)+signed(-b,'x')+' + 1.',String(xs),[String(-xs),String(b),String(xs*2)],'dy/dx = '+2*a+'x − '+b+' = 0 gives x = '+xs+'.');}],
 [6,()=>{const a=pick([3,6,9]),b=pick([2,4,6]),k=rint(1,3),I=a*k*k*k/3+b*k*k/2;
   return G(6,'Evaluate ∫₀'+sup(k)+' ('+a+'x² + '+b+'x) dx.',numOpts(I,'',4,[2*a*k+b,a*k*k*k+b*k*k,a*k*k+b*k]),'['+a/3+'x³ + '+b/2+'x²] from 0 to '+k+' = '+I+'.');}],
 [6,()=>{const k=pick([2,3,4,5]);
   return gq(6,'Find ∫ e'+sup(k+'x')+' dx.','e'+sup(k+'x')+'/'+k+' + C',[k+'e'+sup(k+'x')+' + C','e'+sup(k+'x')+' + C','e'+sup((k+1)+'x')+'/'+(k+1)+' + C'],'Reverse the chain rule.');}],
 [7,()=>{const [a,b,m]=pick([[3,4,5],[5,12,13],[6,8,10],[8,15,17],[2,3,'√13'],[1,1,'√2']]);
   return gq(7,'Find the magnitude of the vector '+a+'i + '+b+'j.',String(m),[String(a+b),String(a*a+b*b),String(Math.abs(b-a)||7)].filter(x=>x!==String(m)),'√('+a+'² + '+b+'²) = '+m+'.');}],
 [8,()=>{const xs=[...Array(5)].map(()=>rint(1,20));const s=xs.reduce((a,b)=>a+b,0);const sorted=xs.slice().sort((a,b)=>a-b);
   return G(8,'Find the mean of '+xs.join(', ')+'.',numOpts(s/5,'',3,[sorted[2],s,s/4]),'Sum = '+s+', so the mean = '+s+'/5 = '+nf(s/5)+'.');}],
 [8,()=>{const n=pick([4,5,6]),k=rint(1,n-1),p=C(n,k),q=Math.pow(2,n);
   return gq(8,'X ~ B('+n+', 0.5). Find P(X = '+k+').',frac(p,q),[frac(1,q),frac(k,n),frac(p+1,q)].filter(x=>x!==frac(p,q)),'ⁿCₖ (0.5)ⁿ = '+p+'/'+q+' = '+frac(p,q)+'.');}],
 [9,()=>{const a=pick([2,3,4,1.5]),t=pick([3,4,5,6]),s=0.5*a*t*t;
   return G(9,'A particle starts from rest with constant acceleration '+a+' m/s². How far does it travel in '+t+' s?',numOpts(s,'m',3,[a*t,a*t*t]),'s = ut + ½at² = ½ × '+a+' × '+t+'² = '+nf(s)+' m.');}],
 [9,()=>{const u=pick([10,15,20,25]),g=9.8,h=u*u/(2*g);
   return G(9,'A ball is projected vertically upwards at '+u+' m/s. Find its greatest height. (g = 9.8 m/s²)',numOpts(h,'m',3,[u*u/g,u/g,u*u/(2*9.8*2)]),'v² = u² − 2gs with v = 0: s = u²/(2g) = '+nf(h)+' m.');}],
 [9,()=>{const m=pick([2,4,5,10]),F=pick([10,20,30]),mu=pick([0.2,0.25,0.5]),a=(F-mu*m*9.8)/m;
   return a>0?G(9,'A '+m+' kg block on a rough horizontal surface (μ = '+mu+') is pulled by a horizontal force of '+F+' N. Find its acceleration. (g = 9.8)',numOpts(a,'m/s²',3,[F/m,mu*9.8]),'Friction = μmg = '+nf(mu*m*9.8)+' N. a = (F − friction)/m = '+nf(a)+' m/s².'):null;}]
];

/* =====================  ECONOMICS (AQA)  ===================== */
const AL_ECON_TOPICS=['Markets and prices','Market failure and government','Firms and market structures','Labour market and inequality','Macro performance and AD/AS','Macroeconomic policy','Financial markets','International economy'];
const AL_ECON_BANK=[
 [0,'Price rises and quantity demanded falls by a larger percentage. Demand is:',['Price elastic','Price inelastic','Unit elastic','Perfectly inelastic'],'|PED| > 1 means a proportionately larger response in quantity.'],
 [0,'A fall in the price of tea (a substitute for coffee) is most likely to:',['Shift the demand curve for coffee to the left','Shift the demand curve for coffee to the right','Cause a movement along the coffee demand curve','Shift the supply curve for coffee to the left'],'Some consumers switch to the cheaper substitute.'],
 [0,'Income elasticity of demand is negative for:',['Inferior goods','Normal goods','Luxury goods','Complementary goods'],'Demand falls as income rises.'],
 [0,'The burden of an indirect tax on a good with very inelastic demand falls mainly on:',['Consumers','Producers','The government','Workers'],'Producers can pass most of the tax on as higher prices.'],
 [0,'Consumer surplus is the difference between:',['What consumers are willing to pay and what they actually pay','Price and cost of production','Total revenue and total cost','Demand and supply at a given price'],'The area below the demand curve and above the price.'],
 [0,'A maximum price set below the equilibrium price causes:',['Excess demand (a shortage)','Excess supply (a surplus)','No change','A rise in the market price'],'At the lower price, quantity demanded exceeds quantity supplied.'],
 [0,'Cross elasticity of demand between two complements is:',['Negative','Positive','Zero','Always greater than 1'],'A price rise in one reduces demand for the other.'],
 [1,'A good that is non-excludable and non-rival is a:',['Public good','Merit good','Demerit good','Private good'],'For example, street lighting or national defence.'],
 [1,'Pollution from a factory harming local residents is:',['A negative externality of production','A positive externality of consumption','Asymmetric information','A merit good'],'A cost to third parties not reflected in the price.'],
 [1,'At the free-market output of a good with negative production externalities:',['Marginal social cost exceeds marginal social benefit','Marginal social benefit exceeds marginal social cost','The market is allocatively efficient','There is no welfare loss'],'The market over-produces, creating a deadweight loss.'],
 [1,'Why might merit goods such as education be under-consumed in a free market?',['Consumers may undervalue the long-term benefits (imperfect information)','They are non-rival','They are too cheap to produce','Firms always make losses on them'],'There are also positive externalities.'],
 [1,'Government failure occurs when intervention:',['Leads to a worse allocation of resources than before','Is expensive','Is opposed by firms','Raises tax revenue'],'For example, through unintended consequences or poor information.'],
 [1,'The free-rider problem means public goods tend to be:',['Under-provided or not provided by the market','Over-provided by the market','Always provided by charities','Sold at too high a price'],'People can benefit without paying, so firms cannot charge.'],
 [2,'A firm maximises profit where:',['Marginal cost equals marginal revenue','Average cost equals average revenue','Marginal revenue is zero','Total revenue is greatest'],'Producing one more unit adds as much to cost as to revenue.'],
 [2,'In the long run in perfect competition, firms earn:',['Normal profit','Supernormal profit','Losses','Monopoly profit'],'Free entry and exit removes supernormal profit.'],
 [2,'A natural monopoly arises when:',['Economies of scale are so large that one firm can supply the whole market at the lowest cost','The government bans competition','A firm holds a patent','Demand is perfectly elastic'],'Examples include water and rail networks.'],
 [2,'A firm should shut down in the short run if price falls below:',['Average variable cost','Average total cost','Marginal cost','Average fixed cost'],'Below AVC it cannot even cover its variable costs.'],
 [2,'The kinked demand curve model explains price rigidity in:',['Oligopoly','Perfect competition','Monopoly','Monopolistic competition'],'Rivals match price cuts but not price rises.'],
 [2,'Allocative efficiency occurs where:',['Price equals marginal cost','Price equals average cost','Marginal revenue equals zero','Average cost is minimised'],'Productive efficiency is the minimum point of average cost.'],
 [2,'Price discrimination requires that the firm can:',['Separate markets with different price elasticities and prevent resale','Produce at minimum average cost','Sell an identical product in perfect competition','Set price equal to marginal cost'],'It also needs some price-setting power.'],
 [3,'Labour demand is a derived demand because:',['It depends on demand for the goods and services labour produces','It is set by the government','Workers choose their hours','It never changes'],'Firms hire workers to produce output that sells.'],
 [3,'Compared with a competitive labour market, a monopsony employer tends to:',['Pay a lower wage and employ fewer workers','Pay a higher wage and employ more workers','Pay the same wage','Employ more workers at a lower wage'],'It employs where MRP = MC of labour, then pays the lower supply-curve wage.'],
 [3,'In a competitive labour market, a minimum wage above equilibrium is predicted to cause:',['Unemployment (an excess supply of labour)','A labour shortage','No effect','Lower wages'],'Under monopsony, a minimum wage can instead raise both wages and employment.'],
 [3,'The Gini coefficient measures:',['Inequality of income or wealth','Inflation','Unemployment','Economic growth'],'0 is perfect equality; 1 is maximum inequality.'],
 [3,'Which makes labour supply to an occupation more inelastic?',['Long training and specialist qualifications','Low skill requirements','Many workers able to switch in','High unemployment'],'Supply cannot respond quickly to higher wages.'],
 [3,'The marginal revenue product of labour is:',['The extra revenue from employing one more worker','The wage rate','Output per worker','The cost of training a worker'],'MRP = MPP × MR.'],
 [4,'Which is a component of aggregate demand?',['Net exports (X − M)','Saving','Taxation','Imports alone'],'AD = C + I + G + (X − M).'],
 [4,'A rise in consumer confidence is most likely to:',['Shift AD to the right','Shift AD to the left','Shift SRAS to the left','Shift LRAS to the right'],'Households spend more and save less.'],
 [4,'Cost-push inflation can be caused by:',['A rise in oil prices','A rise in consumer spending','A fall in interest rates','Higher house prices boosting spending'],'Higher costs shift SRAS left. The others cause demand-pull inflation.'],
 [4,'Real GDP is nominal GDP adjusted for:',['Inflation','Population','Exchange rates','Unemployment'],'GDP per capita adjusts for population.'],
 [4,'A negative output gap means:',['Actual output is below potential output','Actual output is above potential output','Inflation is very high','The economy is at full employment'],'There is spare capacity, often with cyclical unemployment.'],
 [4,'If the marginal propensity to withdraw is 0.25, the multiplier is:',['4','0.25','1.25','25'],'Multiplier = 1/MPW = 1/0.25.'],
 [4,'Structural unemployment is caused by:',['A mismatch between workers\' skills or locations and available jobs','A fall in aggregate demand in a recession','People moving between jobs','Seasonal changes in demand'],'Those are cyclical, frictional and seasonal unemployment respectively.'],
 [5,'In the UK, Bank Rate is set by:',['The Bank of England\'s Monetary Policy Committee','HM Treasury','Parliament','The Office for Budget Responsibility'],'The MPC has been operationally independent since 1997.'],
 [5,'The UK government\'s inflation target for the Bank of England is:',['2% CPI','0%','5% RPI','Between 3% and 5%'],'The target is symmetric: missing by more than 1 percentage point triggers an open letter.'],
 [5,'Raising interest rates is most likely to:',['Reduce consumption and investment','Increase borrowing','Weaken the currency','Increase house prices'],'Borrowing becomes more expensive and saving more attractive.'],
 [5,'Which is a supply-side policy?',['Spending on education and training','Cutting interest rates','Raising welfare benefits','Quantitative easing'],'It raises productive capacity, shifting LRAS right.'],
 [5,'A budget deficit occurs when:',['Government spending exceeds tax revenue in a year','The national debt falls','Imports exceed exports','Tax revenue exceeds spending'],'Deficits add to the national debt.'],
 [5,'Quantitative easing involves the central bank:',['Creating money to buy assets such as government bonds','Raising taxes','Cutting government spending','Fixing the exchange rate'],'It aims to lower long-term interest rates and boost spending.'],
 [5,'Automatic stabilisers include:',['Unemployment benefits that rise in a recession','Interest rate changes by the central bank','New infrastructure projects','Tariffs on imports'],'They work without new government decisions.'],
 [6,'When bond prices rise, their yields:',['Fall','Rise','Stay the same','Double'],'A fixed coupon divided by a higher price gives a lower yield.'],
 [6,'Commercial banks create money mainly by:',['Making loans','Printing banknotes','Selling government bonds','Collecting taxes'],'A new loan creates a matching new deposit.'],
 [6,'Moral hazard in banking means:',['Banks take bigger risks expecting to be bailed out','Banks refuse to lend','Customers withdraw deposits suddenly','Banks charge high interest'],'They do not bear the full cost of failure.'],
 [6,'The lender of last resort is:',['The central bank','The Treasury','The largest commercial bank','The stock exchange'],'It lends to solvent banks facing liquidity problems.'],
 [6,'The liquidity of an asset is:',['How quickly it can be turned into cash without losing value','Its rate of return','Its risk','Its size'],'Cash is the most liquid asset.'],
 [7,'Comparative advantage means producing a good at a:',['Lower opportunity cost','Lower absolute cost','Higher quality','Faster rate'],'Trade can benefit both countries even if one is better at everything.'],
 [7,'A depreciation of the pound is likely to:',['Make UK exports cheaper abroad','Make imports cheaper in the UK','Reduce inflation','Permanently worsen the current account'],'It may worsen the current account at first (the J-curve) before it improves.'],
 [7,'A tariff is:',['A tax on imports','A limit on the quantity of imports','A subsidy to exporters','A ban on trade'],'A quota limits the quantity.'],
 [7,'The current account of the balance of payments includes:',['Trade in goods and services','Foreign direct investment','Purchases of foreign shares','Changes in reserves'],'FDI and portfolio investment are in the financial account.'],
 [7,'The Marshall–Lerner condition says a depreciation improves the current account if:',['The sum of the price elasticities of demand for exports and imports exceeds 1','Exports exceed imports','Inflation is below 2%','Interest rates rise'],'Volumes must respond enough to outweigh the price change.'],
 [7,'A customs union differs from a free trade area because members:',['Adopt a common external tariff','Share a single currency','Allow free movement of labour only','Stop trading with each other'],'A free trade area only removes internal tariffs.'] ,[0,'A subsidy to producers shifts the supply curve:',['Right (downwards) by the amount of the subsidy','Left (upwards)','Right only in the long run','Not at all'],'It lowers firms\' costs at every output.']
 ,[0,'Price elasticity of supply is usually greater in the long run because:',['Firms have time to adjust capacity and inputs','Consumers find substitutes','Prices are fixed in the short run','Costs always fall over time'],'Factors of production become more mobile over time.']
 ,[0,'If demand is price inelastic, a price rise will:',['Increase total revenue','Decrease total revenue','Leave total revenue unchanged','Reduce demand to zero'],'Quantity falls proportionately less than price rises.']
 ,[0,'Joint supply means:',['Producing one good also produces another, e.g. beef and leather','Two firms supply the same market','Goods consumed together','One firm supplies two unrelated markets'],'More beef production automatically raises leather supply.']
 ,[1,'A Pigouvian tax aims to:',['Make producers pay the external cost of a negative externality','Raise as much revenue as possible','Reduce income inequality','Subsidise merit goods'],'It internalises the externality, ideally set equal to the marginal external cost.']
 ,[1,'Tradable pollution permits work by:',['Capping total emissions and letting firms buy and sell the right to pollute','Banning pollution entirely','Taxing consumers','Subsidising clean firms only'],'Firms that can cut emissions cheaply sell permits to those that cannot.']
 ,[1,'Asymmetric information occurs when:',['One party to a transaction knows more than the other','Prices are too high','A good is non-rival','The government sets a price'],'For example, a used-car seller knows more than the buyer.']
 ,[1,'Regulatory capture means:',['Regulators come to act in the interests of the firms they regulate','Firms take over government departments','An industry is nationalised','Consumers write the regulations'],'A form of government failure.']
 ,[2,'Diseconomies of scale cause:',['Long-run average cost to rise as output grows','Average cost to fall','Fixed costs to disappear','Marginal revenue to rise'],'Often due to communication and coordination problems in large firms.']
 ,[2,'A perfectly contestable market has:',['No barriers to entry or exit','A single seller','Identical products and perfect information only','Government price controls'],'The threat of entry keeps incumbents\' prices down.']
 ,[2,'A concentration ratio measures:',['The combined market share of the largest firms','Total industry profit','The height of barriers to entry','Price elasticity of demand'],'A 5-firm ratio of 80% suggests oligopoly.']
 ,[2,'Sunk costs are:',['Costs that cannot be recovered on leaving the market','Variable costs','Costs that fall with output','The opportunity cost of capital'],'High sunk costs are a barrier to entry and exit.']
 ,[3,'In a competitive labour market, a trade union that raises wages above equilibrium may:',['Reduce employment','Always increase employment','Have no effect on employment','Lower wages'],'Firms demand fewer workers at the higher wage.']
 ,[3,'Human capital refers to:',['The skills, knowledge and experience of workers','The machinery workers use','Money lent to workers','The number of workers'],'Education and training increase it.']
 ,[3,'Which is an example of geographical immobility of labour?',['High house prices make it hard to move to a job in another region','A worker lacks the skills for a new industry','Wages are higher in London','A firm relocates abroad'],'Lacking skills is occupational immobility.']
 ,[3,'Relative poverty means:',['Having income well below the typical level in society (e.g. below 60% of median income)','Lacking basic necessities to survive','Having no income','Being unemployed'],'Absolute poverty is about lacking basic necessities.']
 ,[4,'Which objective conflicts most directly with low inflation in the short run?',['Low unemployment','A balanced budget','A stable exchange rate','Low inequality'],'The short-run Phillips curve trade-off.']
 ,[4,'The short-run Phillips curve shows:',['An inverse relationship between inflation and unemployment','A positive relationship between growth and inflation','That unemployment does not affect inflation','Long-run economic growth'],'In the long run it is often argued to be vertical.']
 ,[4,'Deflation can be harmful because:',['Consumers delay spending, expecting lower prices','Exports become less competitive','It always raises benefit payments','Interest rates rise automatically'],'It also increases the real burden of debt.']
 ,[4,'The Consumer Prices Index measures changes in:',['The prices of a representative basket of consumer goods and services','The value of total output','Average wages','House prices only'],'It is weighted by household spending patterns.']
 ,[5,'Expansionary fiscal policy involves:',['Raising government spending or cutting taxes','Raising interest rates','Selling bonds to reduce the money supply','Cutting public spending'],'It shifts AD to the right.']
 ,[5,'Crowding out suggests that government borrowing may:',['Raise interest rates and reduce private investment','Increase private investment','Lower interest rates','Reduce the national debt'],'Government competes with firms for loanable funds.']
 ,[5,'A progressive tax is one where:',['The proportion of income paid in tax rises as income rises','Everyone pays the same amount','Everyone pays the same percentage','Lower earners pay a higher percentage'],'UK income tax is progressive.']
 ,[5,'Forward guidance is when a central bank:',['Signals its likely future policy to influence expectations','Lends to banks overnight','Sets the exchange rate','Prints banknotes'],'It can affect long-term interest rates today.']
 ,[6,'Banks are required to hold capital mainly to:',['Absorb losses and reduce the risk of failure','Increase lending','Raise interest rates','Fund government spending'],'Capital requirements were tightened after the 2008 crisis.']
 ,[6,'Systemic risk is the risk that:',['The failure of one institution spreads through the whole financial system','One firm\'s share price falls','Inflation rises','The exchange rate changes'],'Banks are interconnected through lending to each other.']
 ,[6,'If market interest rates rise, the price of existing fixed-rate bonds:',['Falls','Rises','Stays the same','Doubles'],'Their fixed coupon is less attractive than new bonds.']
 ,[6,'Speculation in financial markets means:',['Buying or selling assets to profit from expected price changes','Insuring against risk','Long-term saving in a bank','Lending to the government'],'It can add liquidity but also volatility.']
 ,[7,'A country with a current account deficit is:',['Paying out more for imports and income abroad than it earns from exports and income','Exporting more than it imports','Running a budget deficit','Losing reserves only'],'It must be financed by a financial account surplus.']
 ,[7,'Globalisation refers to:',['Growing integration of economies through trade, capital flows and technology','Higher tariffs worldwide','The spread of state ownership','Fixed exchange rates'],'Driven by falling transport and communication costs.']
 ,[7,'Under a floating exchange rate, a rise in UK interest rates is likely to:',['Strengthen the pound','Weaken the pound','Have no effect on the pound','Fix the value of the pound'],'Higher returns attract inflows of hot money.']
 ,[7,'The terms of trade compare:',['Average export prices with average import prices','Export volumes with import volumes','The exchange rate with inflation','Tariff levels between countries'],'Index of export prices ÷ index of import prices × 100.']

 ,[6,'The main role of the Bank of England\'s Prudential Regulation Authority is to:',['Supervise banks and insurers so they stay safe and sound','Set Bank Rate','Collect taxes','Set the inflation target'],'The MPC sets Bank Rate; the government sets the inflation target.']
 ,[6,'Primary markets differ from secondary markets because in primary markets:',['New securities are issued to raise funds','Existing shares are traded between investors','Only currencies are traded','Prices are set by the government'],'Secondary markets, such as the stock exchange, trade existing securities.']
 ,[7,'If the pound appreciates, UK exporters are most likely to find that:',['Their goods become more expensive in foreign currencies','Their goods become cheaper abroad','UK import prices rise','Nothing changes for them'],'Foreign buyers need more of their own currency for each pound.']
 ,[0,'A good with an income elasticity of demand greater than +1 is a:',['Luxury (superior) good','Inferior good','Necessity','Giffen good'],'Demand rises proportionately more than income.']
 ,[3,'The marginal revenue product of labour falls as more workers are hired mainly because of:',['Diminishing marginal returns','Rising wages','Cheaper capital','Economies of scale'],'With other factors fixed, each extra worker adds less output.']
];
const AL_ECON_GEN=[
 [0,()=>{const p=pick([10,20,25,50]),q=pick([5,10,15,20,40]),ped=-(q/p);
   const lab=v=>nf(v,2)+' ('+(Math.abs(v)>1?'elastic':Math.abs(v)<1?'inelastic':'unit elastic')+')';
   const wrongLab=nf(ped,2)+' ('+(Math.abs(ped)>1?'inelastic':'elastic')+')';
   return gq(0,'Price rises by '+p+'% and quantity demanded falls by '+q+'%. What is the price elasticity of demand?',lab(ped),[lab(-p/q),wrongLab,lab(-ped)],'PED = %ΔQd / %ΔP = −'+q+'/'+p+' = '+nf(ped,2)+'.');}],
 [4,()=>{const mpw=pick([0.2,0.25,0.4,0.5]),dG=pick([10,20,50]),k=1/mpw;
   return G(4,'The marginal propensity to withdraw is '+mpw+'. Government spending rises by £'+dG+' bn. By how much does GDP eventually rise?',[('£'+nf(dG*k)+' bn'),['£'+nf(dG*mpw)+' bn','£'+nf(dG)+' bn','£'+nf(dG/(1+mpw))+' bn']],'Multiplier = 1/MPW = '+nf(k)+', so ΔGDP = '+nf(k)+' × '+dG+' = £'+nf(dG*k)+' bn.');}],
 [4,()=>{const a=pick([100,104,110]),b=pick([105,108,113,115]),r=100*(b-a)/a;
   return G(4,'A price index rises from '+a+' to '+b+'. What is the rate of inflation?',numOpts(r,'%',3,[b-a,100*(b-a)/b]),'(' +b+' − '+a+')/'+a+' × 100 = '+nf(r)+'%.');}],
 [4,()=>{const n=pick([3,4,5,6]),r=pick([1,2,2.5]),real=n-r;
   return gq(4,'Nominal GDP grows by '+n+'% while inflation is '+r+'%. Approximately what is real GDP growth?',nf(real)+'%',[nf(n+r)+'%',nf(n*r)+'%',nf(r)+'%'].filter(x=>x!==nf(real)+'%'),'Real growth ≈ nominal growth − inflation.');}]
];

/* ---- subjects ---- */
const AL_SUBJECTS=[
 {key:'phy',name:'Physics',board:'AQA',topics:AL_PHY_TOPICS,bank:AL_PHY_BANK,gen:AL_PHY_GEN},
 {key:'maths',name:'Mathematics',board:'Edexcel',topics:AL_MATHS_TOPICS,bank:AL_MATHS_BANK,gen:AL_MATHS_GEN},
 {key:'econ',name:'Economics',board:'AQA',topics:AL_ECON_TOPICS,bank:AL_ECON_BANK,gen:AL_ECON_GEN}
];
AL_SUBJECTS.forEach(s=>{s.items=s.bank.map((b,i)=>({id:s.key+i,topic:b[0],prompt:b[1],right:b[2][0],wrong:b[2].slice(1),explain:b[3]}));});

function alStats(){return loadJSON('alevel',{});}
function alValid(it){return it&&it.wrong&&it.wrong.length>=3&&new Set([it.right].concat(it.wrong.slice(0,3))).size===4&&!/undefined|NaN/.test(it.prompt+it.right+it.wrong.join());}
/* 10 questions: written items not seen recently first, topped up with generated ones */
function alSet(s,topic,n=10){
  const seen=loadJSON('alevel-seen',[]);
  const inTopic=it=>topic<0||it.topic===topic;
  const fresh=shuffle(s.items.filter(it=>inTopic(it)&&!seen.includes(it.id)));
  const old=shuffle(s.items.filter(it=>inTopic(it)&&seen.includes(it.id)));
  const gens=s.gen.filter(g=>topic<0||g[0]===topic);
  const out=[];
  const nGen=gens.length?Math.max(Math.ceil(n*0.4),n-fresh.length):0;
  for(let i=0;i<nGen*20&&out.length<nGen;i++){const it=pick(gens)[1]();if(alValid(it))out.push(Object.assign(it,{id:null,wrong:it.wrong.slice(0,3)}));}
  for(const it of fresh.concat(old)){if(out.length>=n)break;out.push(it);}
  saveJSON('alevel-seen',seen.concat(out.filter(x=>x.id).map(x=>x.id)).slice(-150));
  return shuffle(out).slice(0,n).map(it=>Object.assign({},it,{opts:shuffle([{h:it.right,ok:true}].concat(it.wrong.map(w=>({h:w,ok:false}))))}));
}

let AL=null,alFrom=null;
function alHome(){
  leave();
  const st=alStats();
  app.innerHTML=
  '<div class="stack"><div class="stack" style="gap:8px"><p class="eyebrow">A-level practice</p><h1>Your A-levels</h1>'+
  '<p class="muted">Exam-style questions by specification topic, with worked explanations. Calculation questions are generated fresh every time.</p></div>'+
  AL_SUBJECTS.map((s,i)=>{const t=st[s.key]||{};let ok=0,n=0;for(const k in t){ok+=t[k].ok;n+=t[k].n;}
    return '<button class="hubcard" data-i="'+i+'"><b>'+s.name+' <span class="note">'+s.board+'</span></b><span>'+s.topics.length+' topics · '+(n?Math.round(100*ok/n)+'% correct over '+n+' questions':'not started')+'</span></button>';}).join('')+
  '</div>';
  app.querySelectorAll('.hubcard').forEach(b=>b.onclick=()=>alSubject(+b.dataset.i,alHome));
}
/* from: the screen the back arrow should return to (home or the all-subjects page) */
function alSubject(si,from){
  if(from)alFrom=from;
  leave();setBack(alFrom||home);
  const s=AL_SUBJECTS[si],st=(alStats()[s.key])||{};
  let topic=-1;
  const draw=()=>{
    app.innerHTML=
    '<div class="stack"><div class="stack" style="gap:8px"><p class="eyebrow">'+s.board+' A-level</p><h1>'+s.name+'</h1></div>'+
    '<div class="chips">'+['Mixed'].concat(s.topics).map((n,i)=>'<button class="chip'+(topic===i-1?' on':'')+'" data-t="'+(i-1)+'">'+n+'</button>').join('')+'</div>'+
    '<button class="btn" id="algo">Start quiz</button>'+
    '<div class="card stack"><h2>Accuracy by topic</h2><div class="cats">'+s.topics.map((n,i)=>{const t=st[i]||{ok:0,n:0};
      return '<div class="cr"><span class="n">'+n+'</span><span class="v">'+(t.n?Math.round(100*t.ok/t.n)+'%':'–')+'</span><div class="t"><i style="width:'+(t.n?100*t.ok/t.n:0)+'%"></i></div></div>';}).join('')+'</div>'+
     '<p class="note">Weakest topics are the best use of revision time.</p></div></div>';
    app.querySelectorAll('.chip').forEach(b=>b.onclick=()=>{topic=+b.dataset.t;draw();});
    document.getElementById('algo').onclick=()=>{AL={si,topic,items:alSet(s,topic),i:0,ok:0,res:[]};alRender();};
  };
  draw();
}
function alRender(){
  const s=AL_SUBJECTS[AL.si],it=AL.items[AL.i];
  setScratch(true);
  setBack(()=>{if(confirm('Leave this quiz? Answers so far are kept in your stats.'))alSubject(AL.si);});
  app.innerHTML=
  '<div class="stack"><div class="top"><span class="count">'+(AL.i+1)+' / '+AL.items.length+'</span><span class="eyebrow">'+s.topics[it.topic]+'</span></div>'+
  '<div class="bar"><i style="width:'+(AL.i/AL.items.length*100)+'%"></i></div>'+
  '<div class="card"><p class="prompt">'+it.prompt+'</p><div class="opts">'+it.opts.map((o,k)=>'<button class="opt" data-k="'+k+'"><span class="k">'+LETTERS[k]+'</span><span>'+o.h+'</span></button>').join('')+'</div><div id="alfb"></div></div></div>';
  const btns=[...app.querySelectorAll('.opt')];
  btns.forEach(b=>b.onclick=()=>{
    const k=+b.dataset.k,ok=it.opts[k].ok;
    btns.forEach((x,j)=>{x.disabled=true;if(it.opts[j].ok)x.classList.add('right');});
    if(!ok)b.classList.add('wrong');
    const st=alStats(),ss=st[s.key]=st[s.key]||{},t=ss[it.topic]=ss[it.topic]||{ok:0,n:0};t.n++;if(ok)t.ok++;saveJSON('alevel',st);
    if(ok)AL.ok++;
    const link={vid:videoFor(s.key,it.topic),yt:SUBJ_BOARD[s.key]+' '+s.topics[it.topic]+' explained'};
    (AL.res=AL.res||[]).push(Object.assign({ok,prompt:it.prompt,chosen:it.opts[k].h,right:it.right,explain:it.explain},link));
    if(!ok)mbAdd(Object.assign({src:s.name+' · '+s.topics[it.topic],prompt:it.prompt,right:it.right,wrong:it.wrong,explain:it.explain},link));
    document.getElementById('alfb').innerHTML='<div class="fb"><b class="'+(ok?'ok':'no')+'">'+(ok?'Correct.':'Not quite.')+'</b><p class="note">'+it.explain+'</p><button class="btn" id="alnx">'+(AL.i+1<AL.items.length?'Next':'Finish')+'</button></div>';
    document.getElementById('alnx').onclick=()=>{AL.i++;if(AL.i<AL.items.length)alRender();else alDone();};
  });
  window.scrollTo(0,0);
}
function alDone(){
  setScratch(false);
  setBack(()=>alSubject(AL.si));
  app.innerHTML='<div class="stack"><p class="eyebrow">'+AL_SUBJECTS[AL.si].name+'</p><h1>'+AL.ok+' / '+AL.items.length+'</h1>'+
   reviewHtml(AL.res||[])+
   '<button class="btn" id="alagain">Another 10</button><button class="btn ghost" id="alback">Back to topics</button></div>';
  document.getElementById('alagain').onclick=()=>{AL.items=alSet(AL_SUBJECTS[AL.si],AL.topic);AL.i=0;AL.ok=0;AL.res=[];alRender();};
  window.scrollTo(0,0);
  document.getElementById('alback').onclick=()=>alSubject(AL.si);
}
