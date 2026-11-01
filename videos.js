/* =====================  Video explanations  =====================
   Short narrated lessons played in the app: each scene shows an equation, graph, diagram or key points while the
   phone's built-in voice reads the narration (captions are always shown, so it also works muted).
   Each lesson maps to an A-level subject and topic; review screens link wrong answers to the matching lesson,
   plus a YouTube search for more. Lessons are original. Append only.
   Scene: {h: heading, show: visual HTML, say: narration in plain words (it is spoken aloud)}. */

/* ---- visual helpers ---- */
const VEQ=(...lines)=>'<div class="v-eq">'+lines.map(l=>'<p>'+l+'</p>').join('')+'</div>';
const VLI=items=>'<ul class="v-li">'+items.map(i=>'<li>'+i+'</li>').join('')+'</ul>';
/* graphs are drawn when the scene is shown (plotSvg lives in drill.js) */
const VGR=(fn,cap)=>()=>'<div class="v-gr">'+plotSvg(fn)+(cap?'<p class="note">'+cap+'</p>':'')+'</div>';
/* simple economics/physics diagram on a 100 × 100 grid. items: ['l',x1,y1,x2,y2,label,cls] lines; ['t',x,y,text] text; ['d',x,y] dot */
function VDG(xl,yl,items){
  const X=x=>14+x*0.8,Y=y=>90-y*0.8;
  let s='<svg class="v-dg" viewBox="0 0 100 100" role="img" aria-label="diagram"><line x1="14" y1="90" x2="96" y2="90" class="ax"/><line x1="14" y1="90" x2="14" y2="4" class="ax"/>'+
    '<text x="95" y="98" text-anchor="end">'+xl+'</text><text x="16" y="8">'+yl+'</text>';
  items.forEach(it=>{
    if(it[0]==='l')s+='<line x1="'+X(it[1])+'" y1="'+Y(it[2])+'" x2="'+X(it[3])+'" y2="'+Y(it[4])+'" class="'+(it[6]||'c1')+'"/>'+(it[5]?'<text x="'+(X(it[3])+1)+'" y="'+(Y(it[4])+(it[4]>it[2]?-1:4))+'" class="lb">'+it[5]+'</text>':'');
    if(it[0]==='t')s+='<text x="'+X(it[1])+'" y="'+Y(it[2])+'" class="lb">'+it[3]+'</text>';
    if(it[0]==='d')s+='<circle cx="'+X(it[1])+'" cy="'+Y(it[2])+'" r="1.6" class="dot"/>';
    if(it[0]==='p')s+='<polygon points="'+it[1].map(([x,y])=>X(x)+','+Y(y)).join(' ')+'" class="area"/>';
  });
  return s+'</svg>';
}

const VIDEOS=[
/* ---------------- Physics (AQA) ---------------- */
{id:'p0',subj:'phy',topic:0,title:'Uncertainties and units',scenes:[
 {h:'Two kinds of error',show:VLI(['<b>Random</b>: unpredictable scatter. Reduce it by repeating and averaging.','<b>Systematic</b>: every reading shifted the same way, like a zero error. Repeating does not help: fix the method or calibrate.']),say:'There are two kinds of error. Random errors scatter your readings unpredictably, and you reduce them by repeating and averaging. Systematic errors shift every reading the same way, like a zero error, so repeating does not help. You have to fix the method or calibrate the instrument.'},
 {h:'Percentage uncertainty',show:VEQ('% uncertainty = (absolute uncertainty ÷ value) × 100','2.50 ± 0.05 m → 0.05 ÷ 2.50 × 100 = 2%'),say:'Percentage uncertainty is the absolute uncertainty divided by the value, times one hundred. A length of 2.5 metres plus or minus 0.05 has a two percent uncertainty.'},
 {h:'Combining uncertainties',show:VLI(['Add or subtract quantities → <b>add absolute</b> uncertainties','Multiply or divide → <b>add percentage</b> uncertainties','Raise to a power n → <b>multiply the percentage</b> by n']),say:'When you add or subtract quantities, add their absolute uncertainties. When you multiply or divide, add their percentage uncertainties. When you raise something to a power, multiply its percentage uncertainty by that power.'},
 {h:'Example: volume of a sphere',show:VEQ('V = (4/3)πr³','r has 2% uncertainty','V has 3 × 2% = 6%'),say:'For example, the volume of a sphere depends on the radius cubed. If the radius has a two percent uncertainty, the volume has three times two, which is six percent.'},
 {h:'Checking units',show:VEQ('F = ma → N = kg m s^(−2)','E = Fd → J = kg m^2 s^(−2)'),say:'Always check that equations balance in base units. A newton is a kilogram metre per second squared, and a joule is a kilogram metre squared per second squared. If the units do not match, the equation is wrong.'}]},
{id:'p1',subj:'phy',topic:1,title:'The photoelectric effect',scenes:[
 {h:'What is observed',show:VLI(['Light above a <b>threshold frequency</b> releases electrons instantly','Below it, nothing happens, however bright the light','Brighter light → more electrons, not faster ones']),say:'Shine light on a clean metal and electrons are released, but only if the frequency is above a threshold. Below it, nothing happens however bright the light is. Making the light brighter gives more electrons, not faster ones.'},
 {h:'The photon explanation',show:VEQ('E = hf','one photon → one electron'),say:'Einstein explained this with photons. Light arrives in packets of energy h f. Each photon gives all its energy to one electron, so what matters is the energy of each photon, which depends on frequency.'},
 {h:'The equation',show:VEQ('hf = φ + E_k(max)','φ = work function'),say:'The photon energy pays the work function, the minimum energy to escape the surface. Whatever is left becomes the maximum kinetic energy of the electron.'},
 {h:'The graph',show:VGR(x=>x>1?0.8*(x-1):NaN,'E_k(max) against f: gradient h, x-intercept the threshold frequency f₀'),say:'Plot maximum kinetic energy against frequency and you get a straight line. The gradient is the Planck constant, and it crosses the frequency axis at the threshold frequency.'},
 {h:'Why it matters',show:VLI(['Wave theory predicted a delay and no threshold','The photon model fits every observation','Evidence that light behaves as particles']),say:'Wave theory predicted a time delay and no threshold, which is not what happens. The photon model fits every observation, so the photoelectric effect is key evidence that light behaves as particles.'}]},
{id:'p2',subj:'phy',topic:2,title:'Stationary waves',scenes:[
 {h:'How they form',show:VLI(['Two waves, same frequency, opposite directions','They superpose','Fixed <b>nodes</b> (zero amplitude) and <b>antinodes</b> (maximum)']),say:'A stationary wave forms when two waves of the same frequency travel in opposite directions and superpose. You get fixed nodes, where the amplitude is zero, and antinodes, where it is greatest.'},
 {h:'The shape',show:VGR(x=>2*Math.sin(Math.PI*x/2.5),'Nodes are half a wavelength apart'),say:'Adjacent nodes are half a wavelength apart. Points between two neighbouring nodes move in phase, and points in neighbouring loops move in antiphase.'},
 {h:'Harmonics on a string',show:VEQ('l = nλ/2','f = (n/2l)√(T/μ)'),say:'A string fixed at both ends fits a whole number of half wavelengths. The first harmonic has one loop. Its frequency rises with tension, and falls with length and with mass per unit length.'},
 {h:'Stationary vs progressive',show:VLI(['Stationary: no net energy transfer','Amplitude varies with position','Progressive: energy moves; every point has the same amplitude']),say:'Unlike a progressive wave, a stationary wave transfers no net energy, and its amplitude depends on position. In a progressive wave every point has the same amplitude.'}]},
{id:'p3',subj:'phy',topic:3,title:'Projectiles and SUVAT',scenes:[
 {h:'The SUVAT equations',show:VEQ('v = u + at','s = ut + ½at²','v² = u² + 2as','s = ½(u + v)t'),say:'For constant acceleration, use the SUVAT equations. Pick the one that contains the three quantities you know and the one you want.'},
 {h:'Independence',show:VLI(['Horizontal: constant velocity (no air resistance)','Vertical: acceleration g downwards','Time links the two']),say:'In projectile motion, the horizontal and vertical motions are independent. Horizontally the velocity is constant. Vertically the acceleration is g. The time of flight links the two.'},
 {h:'Worked example',show:VEQ('Thrown horizontally at 5 m/s from 20 m','t = √(2h/g) = √(40/9.8) ≈ 2.0 s','range = 5 × 2.0 = 10 m'),say:'A ball is thrown horizontally at five metres per second from twenty metres up. Vertically, it falls from rest, so the time is the square root of two h over g, about two seconds. Horizontally, it travels five times two, which is ten metres.'},
 {h:'The path',show:VGR(x=>x>=0?3-0.25*x*x:NaN,'A parabola'),say:'The path is a parabola. With air resistance, the range and maximum height are both smaller, and the path is no longer symmetrical.'}]},
{id:'p4',subj:'phy',topic:4,title:'Circuits: Kirchhoff and potential dividers',scenes:[
 {h:'Kirchhoff\'s first law',show:VEQ('Σ I_in = Σ I_out'),say:'Kirchhoff\'s first law says the current into a junction equals the current out. It comes from conservation of charge.'},
 {h:'Kirchhoff\'s second law',show:VEQ('Σ emf = Σ IR (round any loop)'),say:'The second law says that around any closed loop, the sum of the e m fs equals the sum of the potential differences. It comes from conservation of energy.'},
 {h:'Potential divider',show:VEQ('V_out = V_in × R₂ / (R₁ + R₂)'),say:'In a potential divider, the supply voltage is shared in proportion to the resistances. The output across R two is V in times R two over the total resistance.'},
 {h:'Sensors',show:VLI(['LDR: resistance falls as light increases','NTC thermistor: resistance falls as temperature rises','Put the sensor where the output should rise or fall']),say:'Replace one resistor with a light dependent resistor or a thermistor to make a sensor circuit. Their resistance falls with more light or higher temperature, so the output voltage changes.'},
 {h:'Internal resistance',show:VEQ('V = ε − Ir'),say:'Real cells have internal resistance. The terminal voltage is the e m f minus the lost volts, I r. Plot V against I and the intercept is the e m f, and the gradient is minus r.'}]},
{id:'p5',subj:'phy',topic:5,title:'Simple harmonic motion',scenes:[
 {h:'The definition',show:VEQ('a = −ω²x'),say:'Simple harmonic motion is when acceleration is proportional to displacement and always directed back towards the equilibrium position.'},
 {h:'Displacement over time',show:VGR(x=>2*Math.cos(1.2*x),'x = A cos ωt'),say:'If you start at maximum displacement, the displacement follows a cosine curve. The period does not depend on the amplitude.'},
 {h:'Speed and energy',show:VLI(['Speed greatest at equilibrium: v_max = ωA','Acceleration greatest at the extremes','Kinetic and potential energy swap; total stays constant']),say:'The speed is greatest at the equilibrium position and zero at the extremes, where the acceleration is greatest. Kinetic and potential energy swap back and forth while the total stays constant.'},
 {h:'Examples',show:VEQ('Mass–spring: T = 2π√(m/k)','Pendulum: T = 2π√(l/g)'),say:'A mass on a spring and a pendulum swinging through small angles are both simple harmonic. Notice the pendulum\'s period does not depend on its mass.'},
 {h:'Damping and resonance',show:VLI(['Damping removes energy: amplitude decays','Critical damping: fastest return with no oscillation','Resonance: driving frequency = natural frequency']),say:'Damping removes energy so the amplitude decays. Critical damping returns the system to equilibrium fastest without oscillating. Resonance happens when the driving frequency matches the natural frequency, giving a large amplitude.'}]},
{id:'p6',subj:'phy',topic:6,title:'Capacitor discharge',scenes:[
 {h:'Storing charge',show:VEQ('C = Q/V','E = ½QV = ½CV²'),say:'A capacitor stores charge. Capacitance is charge per volt, and the energy stored is a half Q V, which is the area under a graph of charge against voltage.'},
 {h:'Exponential decay',show:VGR(x=>x>=0?3*Math.exp(-0.7*x):NaN,'Q, V and I all decay exponentially'),say:'Discharging through a resistor, the charge, voltage and current all fall exponentially. The bigger the charge left, the faster it flows away.'},
 {h:'The time constant',show:VEQ('V = V₀ e^(−t/RC)','after t = RC, V = 0.37 V₀'),say:'The time constant is R times C. After one time constant the voltage has fallen to about thirty seven percent of its starting value.'},
 {h:'Getting a straight line',show:VEQ('ln V = ln V₀ − t/RC','gradient = −1/RC'),say:'Take natural logs and you get a straight line. Plot ln V against time, and the gradient is minus one over R C. This is how you find the time constant in the required practical.'}]},
{id:'p7',subj:'phy',topic:7,title:'Binding energy, fission and fusion',scenes:[
 {h:'Mass defect',show:VLI(['A nucleus has less mass than its separate nucleons','The missing mass is the <b>mass defect</b>']),say:'A nucleus has slightly less mass than the protons and neutrons that make it up. The difference is called the mass defect.'},
 {h:'Binding energy',show:VEQ('E = Δm c²','1 u ≈ 931.5 MeV'),say:'The mass defect corresponds to the binding energy, using E equals m c squared. Binding energy is the energy needed to pull the nucleus apart.'},
 {h:'The curve',show:VGR(x=>x>-4.5?(2.6*(1-Math.exp(-(x+4.5)*1.2))-0.12*(x+4.5)):NaN,'Binding energy per nucleon peaks near iron-56'),say:'Plot binding energy per nucleon against nucleon number. It rises steeply, peaks near iron fifty six, then falls slowly.'},
 {h:'Fission and fusion',show:VLI(['Fusion of light nuclei moves up the curve','Fission of heavy nuclei also moves up the curve','Higher binding energy per nucleon → energy released']),say:'Both fusing light nuclei and splitting heavy ones move towards iron, increasing binding energy per nucleon. That increase is released as energy.'}]},
/* ---------------- Maths (Edexcel) ---------------- */
{id:'m0',subj:'maths',topic:0,title:'Proof',scenes:[
 {h:'Types of proof',show:VLI(['Deduction: logical steps from known facts','Exhaustion: check every case','Counter-example: one case disproves a claim','Contradiction: assume the opposite, reach something impossible']),say:'There are four main types of proof. Deduction uses logical steps. Exhaustion checks every case. A single counter-example disproves a claim. And proof by contradiction assumes the opposite and shows it leads to something impossible.'},
 {h:'Deduction example',show:VEQ('(2a + 1) + (2b + 1) = 2(a + b + 1)','so odd + odd = even'),say:'Write any odd number as two a plus one. Adding two odd numbers gives two times a plus b plus one, which is a multiple of two, so it is even.'},
 {h:'Contradiction: √2 is irrational',show:VLI(['Assume √2 = a/b in lowest terms','Then a² = 2b², so a is even: a = 2k','Then b² = 2k², so b is even too','Both even contradicts lowest terms']),say:'Assume the root of two is a over b in lowest terms. Squaring gives a squared equals two b squared, so a is even. Substituting shows b is even too. But then the fraction was not in lowest terms, a contradiction.'}]},
{id:'m1',subj:'maths',topic:1,title:'Circles and straight lines',scenes:[
 {h:'Straight lines',show:VEQ('y − y₁ = m(x − x₁)','parallel: same m','perpendicular: m₁m₂ = −1'),say:'The equation of a line through a point with gradient m is y minus y one equals m times x minus x one. Parallel lines share a gradient. Perpendicular gradients multiply to minus one.'},
 {h:'Circle equation',show:VEQ('(x − a)² + (y − b)² = r²','centre (a, b), radius r'),say:'A circle with centre a, b and radius r has this equation. It comes straight from Pythagoras.'},
 {h:'Completing the square',show:VEQ('x² + y² − 6x + 4y − 12 = 0','(x − 3)² − 9 + (y + 2)² − 4 = 12','(x − 3)² + (y + 2)² = 25'),say:'To find the centre from an expanded equation, complete the square in x and in y. Here the centre is three, minus two, and the radius is five.'},
 {h:'Tangents',show:VLI(['A tangent is perpendicular to the radius at that point','Find the radius gradient, then use m₁m₂ = −1']),say:'A tangent is perpendicular to the radius where it touches. Find the gradient of the radius, take the negative reciprocal, and use the point to write the tangent\'s equation.'}]},
{id:'m2',subj:'maths',topic:2,title:'Sequences, series and the binomial expansion',scenes:[
 {h:'Arithmetic series',show:VEQ('uₙ = a + (n − 1)d','Sₙ = (n/2)(2a + (n − 1)d)'),say:'In an arithmetic sequence you add the same difference each time. These formulas give the nth term and the sum of the first n terms.'},
 {h:'Geometric series',show:VEQ('uₙ = arⁿ⁻¹','S∞ = a/(1 − r), only if |r| < 1'),say:'In a geometric sequence you multiply by the common ratio. The series has a sum to infinity only when the ratio is between minus one and one.'},
 {h:'Binomial expansion',show:VEQ('(a + b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳ bʳ'),say:'For a positive whole number n, the binomial expansion uses n choose r coefficients, the numbers in Pascal\'s triangle.'},
 {h:'Example',show:VEQ('Coefficient of x² in (1 + 2x)⁵','⁵C₂ × 2² = 10 × 4 = 40'),say:'For the x squared term in one plus two x to the fifth, take five choose two, which is ten, times two squared, which is four. The coefficient is forty.'},
 {h:'Non-integer powers',show:VEQ('(1 + x)ⁿ = 1 + nx + n(n − 1)x²/2! + …','valid for |x| < 1'),say:'For fractional or negative powers, the series goes on forever, and it is only valid when x is between minus one and one.'}]},
{id:'m3',subj:'maths',topic:3,title:'Trigonometry essentials',scenes:[
 {h:'Exact values',show:VEQ('sin 30° = 1/2, cos 30° = √3/2','sin 45° = cos 45° = √2/2','tan 60° = √3'),say:'Learn the exact values for thirty, forty five and sixty degrees. They come from an equilateral triangle cut in half and from a right-angled isosceles triangle.'},
 {h:'Key identities',show:VEQ('sin²θ + cos²θ = 1','tan θ = sin θ / cos θ','sin 2θ = 2 sin θ cos θ'),say:'The key identities: sine squared plus cosine squared is one, tan is sine over cosine, and sine of two theta is two sine theta cos theta.'},
 {h:'Solving equations',show:VGR(x=>2*Math.sin(x),'sin x = k has two solutions per cycle'),say:'Sine equations usually have two solutions in each full turn. For sine, the second solution is one hundred and eighty degrees minus the first.'},
 {h:'Radians',show:VEQ('π rad = 180°','arc s = rθ, sector A = ½r²θ','small θ: sin θ ≈ θ, cos θ ≈ 1 − θ²/2'),say:'Pi radians is one hundred and eighty degrees. In radians, arc length is r theta and sector area is a half r squared theta. For small angles, sine theta is about theta.'}]},
{id:'m4',subj:'maths',topic:4,title:'Exponentials and logarithms',scenes:[
 {h:'Log laws',show:VEQ('log(ab) = log a + log b','log(a/b) = log a − log b','log(aⁿ) = n log a'),say:'The three log laws: the log of a product is the sum of the logs, the log of a quotient is the difference, and powers come down in front.'},
 {h:'e and ln',show:VGR(x=>Math.exp(x/2)-1,'eˣ: its gradient equals its value'),say:'The exponential function e to the x is special because its gradient equals its value. The natural log, ln, is its inverse.'},
 {h:'Solving',show:VEQ('3ˣ = 20','x = ln 20 / ln 3 ≈ 2.73'),say:'To solve an equation with the unknown in the power, take logs of both sides. Here x equals ln twenty over ln three, about two point seven three.'},
 {h:'Straight-line graphs',show:VLI(['y = axⁿ → plot log y against log x: gradient n','y = abˣ → plot log y against x: gradient log b']),say:'Logs turn curves into straight lines. For y equals a x to the n, plot log y against log x. For y equals a b to the x, plot log y against x.'}]},
{id:'m5',subj:'maths',topic:5,title:'Differentiation and the chain rule',scenes:[
 {h:'Power rule',show:VEQ('d/dx (xⁿ) = nxⁿ⁻¹'),say:'To differentiate x to the n, bring the power down in front and reduce the power by one.'},
 {h:'Chain rule',show:VEQ('dy/dx = dy/du × du/dx','(3x + 1)⁵ → 5(3x + 1)⁴ × 3 = 15(3x + 1)⁴'),say:'For a function of a function, differentiate the outside, keep the inside the same, then multiply by the derivative of the inside.'},
 {h:'Product and quotient',show:VEQ('(uv)′ = u′v + uv′','(u/v)′ = (u′v − uv′)/v²'),say:'For a product, it is the first derived times the second, plus the first times the second derived. The quotient rule is similar, divided by the bottom squared.'},
 {h:'Stationary points',show:VGR(x=>(x*x*x-3*x)/3,'y = x³ − 3x: maximum at x = −1, minimum at x = 1'),say:'At stationary points the gradient is zero. Use the second derivative: negative means a maximum, positive means a minimum.'}]},
{id:'m6',subj:'maths',topic:6,title:'Integration by parts and substitution',scenes:[
 {h:'Integration basics',show:VEQ('∫xⁿ dx = xⁿ⁺¹/(n + 1) + C','definite integral = signed area'),say:'Integration reverses differentiation. Raise the power by one and divide by the new power, and remember the constant. A definite integral gives the signed area under the curve.'},
 {h:'By parts',show:VEQ('∫u (dv/dx) dx = uv − ∫v (du/dx) dx'),say:'Integration by parts comes from the product rule. Choose u to be the part that gets simpler when you differentiate it, like x or ln x.'},
 {h:'Example',show:VEQ('∫x eˣ dx','u = x, dv/dx = eˣ','= x eˣ − ∫eˣ dx = (x − 1)eˣ + C'),say:'For the integral of x e to the x, let u be x. Then it is x e to the x minus the integral of e to the x, which gives x minus one, times e to the x, plus C.'},
 {h:'Substitution',show:VEQ('∫2x e^(x²) dx, let u = x²','du = 2x dx → ∫eᵘ du = e^(x²) + C'),say:'Substitution reverses the chain rule. If you can see a function and its derivative, substitute u for the function. Here it becomes the integral of e to the u.'}]},
{id:'m7',subj:'maths',topic:7,title:'Vectors and Newton–Raphson',scenes:[
 {h:'Vectors',show:VEQ('|ai + bj| = √(a² + b²)','AB = b − a'),say:'The magnitude of a vector comes from Pythagoras. The vector from A to B is the position vector of B minus the position vector of A.'},
 {h:'Newton–Raphson',show:VEQ('xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)'),say:'Newton Raphson finds roots by following the tangent down to the x axis, again and again.'},
 {h:'Example',show:VEQ('f(x) = x² − 2, x₀ = 1','x₁ = 1 − (−1)/2 = 1.5','x₂ = 1.5 − 0.25/3 ≈ 1.4167'),say:'To find the root of two, use f of x equals x squared minus two, starting at one. One step gives one point five, the next gives about one point four one six seven, already close.'},
 {h:'When it fails',show:VLI(['f′(xₙ) close to zero: the tangent is nearly flat','A poor starting value can jump to another root']),say:'It fails when the gradient is close to zero, because the tangent is nearly flat and sends you far away, or when a poor starting value leads to a different root.'}]},
{id:'m8',subj:'maths',topic:8,title:'Normal distribution and hypothesis tests',scenes:[
 {h:'The normal distribution',show:VGR(x=>3*Math.exp(-x*x/2),'Symmetric bell curve: 68%, 95%, 99.7% within 1, 2, 3 SD'),say:'The normal distribution is a symmetric bell curve. About sixty eight, ninety five and ninety nine point seven percent of values lie within one, two and three standard deviations of the mean.'},
 {h:'Standardising',show:VEQ('Z = (X − μ)/σ'),say:'To compare with the standard normal, subtract the mean and divide by the standard deviation.'},
 {h:'Binomial model',show:VLI(['Fixed number of trials n','Two outcomes, constant probability p','Independent trials','Mean np']),say:'Use a binomial distribution when there is a fixed number of independent trials, each with two outcomes and a constant probability of success.'},
 {h:'Hypothesis test steps',show:VLI(['State H₀ and H₁','Choose significance level','Find the probability of the result (or more extreme) under H₀','Compare and conclude in context']),say:'To run a hypothesis test, state the null and alternative hypotheses, choose a significance level, find the probability of a result this extreme assuming the null hypothesis, then compare and conclude in context.'}]},
{id:'m9',subj:'maths',topic:9,title:'Mechanics: forces and connected particles',scenes:[
 {h:'Newton\'s second law',show:VEQ('F = ma (resultant force)'),say:'Resolve forces and apply F equals m a in each direction. Always use the resultant force.'},
 {h:'Friction',show:VEQ('F ≤ μR','limiting: F = μR'),say:'Friction can take any value up to mu R. When the object is moving or about to slip, friction equals mu R.'},
 {h:'Connected particles',show:VEQ('3 kg and 2 kg over a smooth pulley','a = (3 − 2)g / 5 ≈ 1.96 m/s²'),say:'For two masses over a smooth pulley, the net force is the difference in weights and the total mass accelerates together. Here the acceleration is one fifth of g.'},
 {h:'Moments',show:VLI(['Moment = force × perpendicular distance','In equilibrium: resultant force zero and moments balance']),say:'For a rigid body in equilibrium, the resultant force is zero and the moments about any point balance.'}]},
{id:'mg',subj:'maths',topic:5,extra:'graphs',title:'Sketching graphs quickly',scenes:[
 {h:'Start with intercepts',show:VLI(['x = 0 gives the y-intercept','y = 0 gives the roots']),say:'To sketch a graph, start with the intercepts. Put x equals zero for the y intercept, and y equals zero for the roots.'},
 {h:'Symmetry',show:VLI(['Even, f(−x) = f(x): symmetric about the y-axis (x², cos x)','Odd, f(−x) = −f(x): rotational symmetry (x³, sin x)']),say:'Check symmetry. Even functions are mirror images in the y axis. Odd functions have rotational symmetry about the origin.'},
 {h:'Asymptotes and large x',show:VGR(x=>1/x,'y = 1/x: asymptotes x = 0 and y = 0'),say:'Look for asymptotes, where the function blows up or levels off. For large x, exponentials beat powers, and powers beat logs.'},
 {h:'Transformations',show:VEQ('f(x) + a: up a','f(x + a): left a','af(x): stretch vertically','f(ax): squash horizontally by a'),say:'Transformations: adding outside moves the graph up. Adding inside moves it left. Multiplying outside stretches it vertically, and multiplying inside squashes it horizontally.'}]},
/* ---------------- Economics (AQA) ---------------- */
{id:'e0',subj:'econ',topic:0,title:'Price elasticity of demand',scenes:[
 {h:'Definition',show:VEQ('PED = %ΔQd / %ΔP'),say:'Price elasticity of demand measures how strongly quantity demanded responds to a change in price.'},
 {h:'Elastic or inelastic',show:VDG('Q','P',[['l',10,90,90,10,'Elastic: flat-ish','c1'],['l',40,95,55,5,'Inelastic: steep','c2']]),say:'If demand is elastic, the value is bigger than one in size, and the curve looks flatter. If it is inelastic, the value is less than one, and the curve looks steeper.'},
 {h:'Total revenue',show:VLI(['Elastic: cut price → revenue rises','Inelastic: raise price → revenue rises','Unit elastic: revenue unchanged']),say:'Firms care because of revenue. If demand is elastic, cutting price raises revenue. If it is inelastic, raising price raises revenue.'},
 {h:'What makes demand inelastic?',show:VLI(['Few substitutes','Necessities and addictive goods','Small share of income','Short time period']),say:'Demand is more inelastic when there are few substitutes, for necessities, when the good is a small part of income, and in the short run.'}]},
{id:'e1',subj:'econ',topic:1,title:'Externalities and market failure',scenes:[
 {h:'Social cost',show:VEQ('MSC = MPC + marginal external cost'),say:'A negative externality is a cost to third parties. The social cost is the private cost plus the external cost.'},
 {h:'Over-production',show:VDG('Q','P, costs',[['l',5,85,90,15,'MSB','c1'],['l',5,15,90,75,'MPC','c2'],['l',5,35,80,90,'MSC','c3'],['d',45,47],['d',63,59],['p',[[45,47],[63,59],[45,64]]]]),say:'The free market produces where private cost meets benefit. But at that output, social cost is higher than social benefit, so too much is produced. The triangle is the welfare loss.'},
 {h:'Fixes',show:VLI(['Pigouvian tax equal to the external cost','Regulation and fines','Tradable pollution permits','Subsidies for positive externalities']),say:'The government can tax the good to make producers pay the external cost, regulate it, or use tradable permits. For positive externalities, it can subsidise.'},
 {h:'Government failure',show:VLI(['Hard to measure external costs','Unintended consequences','Regulatory capture']),say:'But intervention can make things worse. External costs are hard to measure, policies have unintended consequences, and regulators can be captured by industry.'}]},
{id:'e2',subj:'econ',topic:2,title:'Market structures',scenes:[
 {h:'Profit maximisation',show:VEQ('MC = MR'),say:'Every firm that maximises profit produces where marginal cost equals marginal revenue.'},
 {h:'Perfect competition',show:VLI(['Many firms, identical products, free entry','Price takers','Long run: normal profit, P = MC (allocatively efficient)']),say:'In perfect competition, many firms sell identical products and take the market price. Free entry means only normal profit in the long run, and price equals marginal cost.'},
 {h:'Monopoly',show:VLI(['One firm, high barriers to entry','Higher price, lower output','Supernormal profit, deadweight loss','But maybe economies of scale and innovation']),say:'A monopoly faces high barriers to entry. It charges more and produces less, earning supernormal profit and creating a deadweight loss, though it may benefit from economies of scale and fund innovation.'},
 {h:'Oligopoly',show:VLI(['A few interdependent firms','Kinked demand: prices sticky','Game theory: collusion vs competition']),say:'In an oligopoly, a few firms depend on each other\'s decisions. The kinked demand curve explains sticky prices, and game theory shows the temptation to collude or cheat.'}]},
{id:'e3',subj:'econ',topic:3,title:'The labour market',scenes:[
 {h:'Demand for labour',show:VEQ('MRP = MPP × MR'),say:'Labour demand is derived from demand for the product. Firms hire until the marginal revenue product of a worker equals the wage.'},
 {h:'Supply of labour',show:VLI(['Wages and non-wage benefits','Training and qualifications needed','Population and migration']),say:'Labour supply to a job depends on the wage, non wage benefits, the training required, and the size of the working population.'},
 {h:'Monopsony and the minimum wage',show:VLI(['Monopsony: one big employer pays less and hires fewer','Minimum wage: may cause unemployment in a competitive market','Under monopsony it can raise both wages and jobs']),say:'A monopsony employer pays lower wages and hires fewer workers. A minimum wage can cause unemployment in a competitive market, but under monopsony it can raise both wages and employment.'},
 {h:'Inequality',show:VLI(['Lorenz curve and Gini coefficient (0 = equal, 1 = unequal)','Causes: skills, wealth, discrimination','Policies: progressive tax, benefits, education']),say:'Inequality is measured with the Lorenz curve and the Gini coefficient. Causes include skills, inherited wealth and discrimination, and policies include progressive taxes, benefits and education.'}]},
{id:'e4',subj:'econ',topic:4,title:'Aggregate demand and supply',scenes:[
 {h:'Aggregate demand',show:VEQ('AD = C + I + G + (X − M)'),say:'Aggregate demand is total spending: consumption, investment, government spending and net exports.'},
 {h:'The AD/AS diagram',show:VDG('Real GDP','Price level',[['l',10,85,85,15,'AD','c1'],['l',10,15,85,85,'SRAS','c2'],['l',70,5,70,95,'LRAS','c3'],['d',47,50]]),say:'Equilibrium is where aggregate demand meets short run aggregate supply. The vertical long run supply curve shows the economy\'s potential output.'},
 {h:'Inflation',show:VLI(['Demand-pull: AD shifts right','Cost-push: SRAS shifts left (e.g. oil prices)']),say:'Demand pull inflation happens when aggregate demand grows too fast. Cost push inflation comes from rising costs shifting short run supply to the left.'},
 {h:'The multiplier',show:VEQ('k = 1 / MPW','MPW = 0.25 → k = 4'),say:'An injection of spending leads to a bigger rise in GDP, because one person\'s spending is another\'s income. The multiplier is one over the marginal propensity to withdraw.'}]},
{id:'e5',subj:'econ',topic:5,title:'Macroeconomic policy',scenes:[
 {h:'Monetary policy',show:VLI(['Bank of England MPC sets Bank Rate','Target: 2% CPI inflation','Higher rates → less borrowing and spending']),say:'The Bank of England\'s Monetary Policy Committee sets interest rates to hit a two percent inflation target. Higher rates discourage borrowing and spending.'},
 {h:'Quantitative easing',show:VLI(['Central bank creates money to buy bonds','Lowers long-term interest rates','Used when Bank Rate is near zero']),say:'Quantitative easing means the central bank creates money to buy bonds, pushing down long term interest rates. It was used when rates were already close to zero.'},
 {h:'Fiscal policy',show:VLI(['Government spending and taxation','Automatic stabilisers','Risk of crowding out and rising debt']),say:'Fiscal policy uses government spending and taxes. Automatic stabilisers like benefits work without new decisions. Borrowing can crowd out private investment and add to debt.'},
 {h:'Supply-side policy',show:VLI(['Education and training','Infrastructure','Lower barriers and regulation','Shifts LRAS right: growth without inflation']),say:'Supply side policies, like education, infrastructure and deregulation, raise the economy\'s productive capacity, allowing growth without inflation.'}]},
{id:'e6',subj:'econ',topic:6,title:'Financial markets and bonds',scenes:[
 {h:'Types of market',show:VLI(['Money market: short-term lending','Capital market: shares and bonds','Foreign exchange market']),say:'Financial markets include the money market for short term lending, the capital market for shares and bonds, and the foreign exchange market.'},
 {h:'Bond prices and yields',show:VEQ('yield = coupon / price','£5 coupon, price £100 → 5%','price rises to £125 → 4%'),say:'A bond pays a fixed coupon. If its price rises, the yield falls. For example, a five pound coupon on a hundred pound bond is five percent, but if the price rises to a hundred and twenty five, the yield drops to four percent.'},
 {h:'How banks create money',show:VLI(['A new loan creates a new deposit','Balance liquidity, profitability and security']),say:'Commercial banks create money by lending: a new loan creates a matching deposit. They must balance liquidity, profitability and security.'},
 {h:'Market failure in finance',show:VLI(['Moral hazard','Asymmetric information','Systemic risk','Regulation: PRA, FCA, capital requirements']),say:'Finance suffers from moral hazard, asymmetric information and systemic risk, so regulators like the Prudential Regulation Authority and the Financial Conduct Authority set rules, including capital requirements.'}]},
{id:'e7',subj:'econ',topic:7,title:'International trade and exchange rates',scenes:[
 {h:'Comparative advantage',show:VLI(['Specialise where your opportunity cost is lowest','Trade makes both countries better off','Even if one is better at everything']),say:'Countries should specialise in what they produce at the lowest opportunity cost. Trade then benefits both, even if one country is better at producing everything.'},
 {h:'Protectionism',show:VLI(['Tariffs: taxes on imports','Quotas: limits on quantity','Reasons: infant industries, jobs, security','Costs: higher prices, retaliation']),say:'Protectionism includes tariffs and quotas. Governments use them to protect infant industries or jobs, but they raise prices and invite retaliation.'},
 {h:'Balance of payments',show:VLI(['Current account: goods, services, income','Financial account: investment flows','The accounts balance overall']),say:'The current account records trade in goods and services and income flows. The financial account records investment. Overall, the balance of payments balances.'},
 {h:'Exchange rates',show:VLI(['Depreciation: exports cheaper, imports dearer','J-curve: current account may worsen first','Marshall–Lerner: improves if PEDx + PEDm > 1']),say:'A depreciation makes exports cheaper and imports dearer. The current account may get worse at first, the J curve, but improves if the Marshall Lerner condition holds.'}]}
];

const SUBJ_NAMES={phy:'Physics',maths:'Maths',econ:'Economics'};
const SUBJ_BOARD={phy:'AQA A level physics',maths:'Edexcel A level maths',econ:'AQA A level economics'};
function videoFor(subj,topic,extra){const v=VIDEOS.find(v=>v.subj===subj&&(extra?v.extra===extra:(v.topic===topic&&!v.extra)));return v?v.id:null;}
function ytUrl(q){return 'https://www.youtube.com/results?search_query='+encodeURIComponent(q);}
/* links shown under a reviewed question: our lesson (if one matches) and a YouTube search */
function videoLinks(x){
  if(!x||(!x.vid&&!x.yt))return '';
  const v=x.vid&&VIDEOS.find(v=>v.id===x.vid);
  const q=x.yt||(v?SUBJ_BOARD[v.subj]+' '+v.title+' explained':'');
  return '<div class="vlinks">'+(v?'<button class="vbtn" data-vid="'+v.id+'">▶ Watch: '+v.title+'</button>':'')+
    (q?'<a class="vyt" href="'+ytUrl(q)+'" target="_blank" rel="noopener">More on YouTube</a>':'')+'</div>';
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-vid]');if(b){e.preventDefault();playVideo(b.dataset.vid);}});

/* ---- player (an overlay, so the screen underneath, e.g. a review, is kept) ---- */
let VP=null;
const speakText=s=>s.replace(/<[^>]+>/g,'');
function playVideo(id){
  const v=VIDEOS.find(x=>x.id===id);if(!v)return;
  closeVideo();
  const ov=document.createElement('div');ov.id='vplayer';
  ov.innerHTML='<div class="vp-top"><span class="eyebrow">'+SUBJ_NAMES[v.subj]+' · lesson</span><button class="vp-x" aria-label="Close">✕</button></div>'+
    '<h2 class="vp-title">'+v.title+'</h2><div class="vp-dots">'+v.scenes.map((_,i)=>'<i data-i="'+i+'"></i>').join('')+'</div>'+
    '<div class="vp-stage"></div><p class="vp-cap"></p>'+
    '<div class="vp-ctl"><button data-a="prev" aria-label="Previous">⏮</button><button data-a="play" class="vp-play" aria-label="Play or pause">⏸</button><button data-a="next" aria-label="Next">⏭</button><button data-a="voice" aria-label="Voice on or off">🔊</button></div>';
  document.body.appendChild(ov);document.body.classList.add('vp-open');
  const voice=loadJSON('video-voice',true);
  VP={v,i:0,playing:true,voice:voice&&'speechSynthesis' in window,timer:null,ov,token:0};
  ov.querySelector('[data-a="voice"]').textContent=VP.voice?'🔊':'🔇';
  ov.querySelector('.vp-x').onclick=closeVideo;
  ov.querySelector('.vp-ctl').onclick=e=>{const a=e.target.closest('button');if(!a)return;
    if(a.dataset.a==='prev')vpGo(Math.max(0,VP.i-1));
    if(a.dataset.a==='next')vpGo(VP.i+1);
    if(a.dataset.a==='play'){VP.playing=!VP.playing;a.textContent=VP.playing?'⏸':'▶';if(VP.playing)vpGo(VP.i>=VP.v.scenes.length?0:VP.i);else vpStop();}
    if(a.dataset.a==='voice'){VP.voice=!VP.voice&&'speechSynthesis' in window;saveJSON('video-voice',VP.voice);a.textContent=VP.voice?'🔊':'🔇';if(VP.playing)vpGo(VP.i);}};
  ov.querySelector('.vp-dots').onclick=e=>{const d=e.target.closest('i');if(d)vpGo(+d.dataset.i);};
  const w=loadJSON('videos-watched',{});w[id]=Date.now();saveJSON('videos-watched',w);
  vpGo(0);
}
function vpStop(){clearTimeout(VP&&VP.timer);if(window.speechSynthesis)speechSynthesis.cancel();}
function vpGo(i){
  if(!VP)return;vpStop();
  const tok=++VP.token,v=VP.v;
  if(i>=v.scenes.length){VP.i=i;VP.playing=false;VP.ov.querySelector('.vp-play').textContent='▶';
    VP.ov.querySelector('.vp-stage').innerHTML='<div class="v-end"><p class="prompt">That\'s the lesson.</p><button class="btn" id="vpre">Watch again</button><button class="btn ghost" id="vpclose">Close</button></div>';
    VP.ov.querySelector('.vp-cap').textContent='';VP.ov.querySelectorAll('.vp-dots i').forEach(d=>d.classList.add('on'));
    document.getElementById('vpre').onclick=()=>{VP.playing=true;VP.ov.querySelector('.vp-play').textContent='⏸';vpGo(0);};
    document.getElementById('vpclose').onclick=closeVideo;return;}
  VP.i=i;const s=v.scenes[i];
  VP.ov.querySelector('.vp-stage').innerHTML='<p class="eyebrow">'+s.h+'</p><div class="vp-show">'+(typeof s.show==='function'?s.show():s.show)+'</div>';
  VP.ov.querySelector('.vp-cap').textContent=speakText(s.say);
  VP.ov.querySelectorAll('.vp-dots i').forEach((d,j)=>{d.classList.toggle('on',j<=i);d.classList.toggle('cur',j===i);});
  if(!VP.playing)return;
  const next=()=>{if(VP&&tok===VP.token&&VP.playing)VP.timer=setTimeout(()=>vpGo(i+1),700);};
  const words=speakText(s.say).split(/\s+/).length;
  if(VP.voice){
    const u=new SpeechSynthesisUtterance(speakText(s.say));
    const vs=speechSynthesis.getVoices(),gb=vs.find(x=>/en-GB/i.test(x.lang));if(gb)u.voice=gb;
    u.lang='en-GB';u.rate=1;u.onend=next;u.onerror=()=>{VP.timer=setTimeout(()=>vpGo(i+1),words*380);};
    speechSynthesis.speak(u);
    /* safety net in case the speech engine never reports the end */
    VP.timer=setTimeout(()=>{if(VP&&tok===VP.token&&VP.playing&&!speechSynthesis.speaking)vpGo(i+1);},words*600+4000);
  }else VP.timer=setTimeout(next,Math.max(3500,words*330));
}
function closeVideo(){vpStop();const o=document.getElementById('vplayer');if(o)o.remove();document.body.classList.remove('vp-open');VP=null;}

function videosHome(){
  leave();
  const w=loadJSON('videos-watched',{});
  const grp=s=>'<div class="card"><h2 style="margin-bottom:6px">'+SUBJ_NAMES[s]+'</h2>'+VIDEOS.filter(v=>v.subj===s).map(v=>
    '<button class="qrow" data-vid="'+v.id+'"><span class="mark '+(w[v.id]?'ok':'sk')+'">'+(w[v.id]?'✓':'▶')+'</span><span class="qt"><b>'+v.title+'</b><br><span class="note">'+v.scenes.length+' scenes</span></span><span></span></button>').join('')+'</div>';
  app.innerHTML='<div class="stack"><div class="stack" style="gap:8px"><p class="eyebrow">Daily training</p><h1>Video lessons</h1>'+
    '<p class="muted">Short narrated lessons, one for every topic. Your phone reads them aloud (turn the sound up, or read the captions). When you get a question wrong, the review links straight to the matching lesson.</p></div>'+
    grp('phy')+grp('maths')+grp('econ')+'</div>';
  cleanups.push(closeVideo);
}
