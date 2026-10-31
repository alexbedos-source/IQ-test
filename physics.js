/* =====================  Physics interview practice  =====================
   Open-ended questions in the style used at Oxford physics interviews.
   These are written for this app (not copied from Oxford), each with
   progressive hints and a worked answer. Official material is linked, not copied. */

const PHY_TOPICS=['Estimation','Mechanics','Maths and graphs','Waves and optics','Electricity and magnetism','Thermal physics','Gravity and astrophysics','Everyday physics'];

const PHY=[
/* ---------- Estimation ---------- */
{id:'e1',t:0,l:1,q:'Estimate the mass of the air in the room you are sitting in.',
 h:['Break it into two numbers you can estimate separately: the volume of the room and the density of air.',
    'A typical room might be 5 m × 4 m × 2.5 m. Air density at room conditions is about 1.2 kg/m³. If you did not know that, you could get it from the molar mass of air (≈ 29 g/mol) and the fact that a mole of gas occupies about 24 litres.'],
 a:'<p>Volume ≈ 5 × 4 × 2.5 = 50 m³. Density of air ≈ 1.2 kg/m³ (29 g per 24 litres).</p><p>Mass ≈ 50 × 1.2 ≈ <b>60 kg</b>, roughly the mass of a person, which surprises most people.</p><p>What tutors look for: stating assumptions clearly, sensible round numbers, and a sanity check at the end.</p>'},
{id:'e2',t:0,l:2,q:'Roughly how many atoms are there in your body?',
 h:['Your body is mostly water. Start from your mass.',
    'One mole of water (18 g) contains three atoms per molecule, so the average mass per atom is about 6 g/mol. Avogadro\'s number is 6 × 10²³.'],
 a:'<p>Take 70 kg, treated as water. Average atomic mass ≈ 18/3 = 6 g/mol, so moles of atoms ≈ 70 000 / 6 ≈ 1.2 × 10⁴.</p><p>Atoms ≈ 1.2 × 10⁴ × 6 × 10²³ ≈ <b>7 × 10²⁷</b>.</p><p>Including heavier carbon and oxygen in tissue barely changes the order of magnitude: the answer is "about 10²⁸".</p>'},
{id:'e3',t:0,l:2,q:'How much does the Earth\'s atmosphere weigh?',
 h:['What does atmospheric pressure actually measure?',
    'Pressure at the surface is the weight of the air above each square metre: about 10⁵ Pa. Multiply by the surface area of the Earth (radius ≈ 6400 km).'],
 a:'<p>Surface area = 4πR² ≈ 4π × (6.4 × 10⁶)² ≈ 5 × 10¹⁴ m².</p><p>Total weight = pressure × area ≈ 10⁵ × 5 × 10¹⁴ = 5 × 10¹⁹ N, so the mass is about 5 × 10¹⁹ / 10 ≈ <b>5 × 10¹⁸ kg</b>.</p><p>A neat follow-up: this is about a millionth of the Earth\'s mass (6 × 10²⁴ kg).</p>'},
{id:'e4',t:0,l:2,q:'Estimate the power output of the Sun, using only things you could measure on Earth.',
 h:['How much solar power falls on each square metre at the top of the atmosphere? (It is a little over 1 kW.)',
    'That power is spread evenly over a sphere whose radius is the Earth–Sun distance, 1.5 × 10¹¹ m.'],
 a:'<p>Solar constant ≈ 1.4 kW/m². Sphere area = 4π(1.5 × 10¹¹)² ≈ 2.8 × 10²³ m².</p><p>Power ≈ 1.4 × 10³ × 2.8 × 10²³ ≈ <b>4 × 10²⁶ W</b>.</p><p>You could then ask how long the Sun could shine by burning chemical fuel (thousands of years) versus fusion (billions), which is how nuclear energy was inferred historically.</p>'},
{id:'e5',t:0,l:1,q:'How fast does human hair grow, in metres per second?',
 h:['Think about how often people get haircuts, and how much is cut off.',
    'About 1 cm per month is a reasonable figure. How many seconds are in a month?'],
 a:'<p>About 1 cm per month. A month ≈ 30 × 24 × 3600 ≈ 2.6 × 10⁶ s.</p><p>Speed ≈ 0.01 / 2.6 × 10⁶ ≈ <b>4 × 10⁻⁹ m/s</b>, or about 4 nm per second.</p><p>Fun comparison: that is a few atomic diameters every second.</p>'},
{id:'e6',t:0,l:3,q:'How many of the air molecules from Julius Caesar\'s last breath are in your next breath?',
 h:['You need two numbers: how many molecules are in one breath, and how many are in the whole atmosphere.',
    'A breath is about half a litre, and a mole of gas is about 24 litres. The atmosphere has mass ≈ 5 × 10¹⁸ kg and molar mass ≈ 0.029 kg/mol.',
    'Assume Caesar\'s breath has had 2000 years to mix evenly through the atmosphere. The expected number you inhale is (molecules per breath)² / (molecules in atmosphere).'],
 a:'<p>One breath ≈ 0.5/24 mol ≈ 0.02 mol ≈ 1.2 × 10²² molecules.</p><p>Atmosphere ≈ 5 × 10¹⁸ / 0.029 ≈ 1.7 × 10²⁰ mol ≈ 10⁴⁴ molecules.</p><p>The fraction of the atmosphere that was Caesar\'s breath is 1.2 × 10²² / 10⁴⁴ ≈ 10⁻²². Your breath of 10²² molecules therefore contains about <b>one</b> of his molecules on average.</p><p>Good things to mention: the mixing assumption, and that some molecules (e.g. CO₂, water) are recycled by plants and the sea.</p>'},
{id:'e7',t:0,l:1,q:'Roughly how much energy is stored in an AA battery? Is that a lot?',
 h:['Batteries are labelled with a voltage and sometimes a capacity in milliamp-hours.',
    'An AA cell is 1.5 V with a capacity of about 2000 mAh. Energy = voltage × charge.'],
 a:'<p>Charge = 2 A·h = 2 × 3600 = 7200 C. Energy = 1.5 × 7200 ≈ <b>10⁴ J</b>.</p><p>Comparison: lifting yourself (70 kg) up about 15 m, or a single biscuit (≈ 2 × 10⁵ J) contains twenty times more energy. Chemical fuels are far more energy-dense than batteries.</p>'},

/* ---------- Mechanics ---------- */
{id:'m1',t:1,l:3,q:'Imagine a straight tunnel drilled through the centre of the Earth. You jump in. Describe your motion and estimate how long it takes to reach the other side.',
 h:['Assume uniform density and no air resistance. Inside a uniform sphere, only the mass closer to the centre than you pulls on you.',
    'The enclosed mass scales as r³ and gravity as M/r², so the force is proportional to r. What kind of motion has a restoring force proportional to displacement?',
    'Simple harmonic motion with ω² = g/R. The period is 2π√(R/g).'],
 a:'<p>At radius r, enclosed mass is M(r/R)³, so g(r) = g·r/R. The force points to the centre and is proportional to distance: simple harmonic motion with ω = √(g/R).</p><p>Period T = 2π√(R/g) = 2π√(6.4 × 10⁶ / 9.8) ≈ 2π × 800 ≈ 5000 s ≈ 84 minutes. The trip across is half a period: <b>about 42 minutes</b>.</p><p>Nice extras: you pass the centre at about 8 km/s, and the period equals that of a satellite skimming the surface. In fact the trip takes 42 minutes for <em>any</em> straight tunnel between two points, not just through the centre.</p>'},
{id:'m2',t:1,l:1,q:'Ignoring air resistance, at what angle should you throw a ball to get it as far as possible? What changes if there is air resistance?',
 h:['Split the launch velocity into horizontal and vertical parts. Time in the air depends on the vertical part; distance depends on both.',
    'Range R = v² sin(2θ) / g. When is sin(2θ) largest?'],
 a:'<p>Time of flight = 2v sinθ / g, horizontal speed = v cosθ, so R = 2v² sinθ cosθ / g = v² sin2θ / g. This is maximised at <b>θ = 45°</b>.</p><p>With air resistance, the ball loses speed faster on long, high paths, so the best angle is lower (often 35–40° for a ball). Launching from a height above the landing point also lowers the optimum, which is why shot-putters release at about 37°.</p>'},
{id:'m3',t:1,l:2,q:'You are in a rowing boat on a small pond, holding a heavy rock. You throw the rock into the water. Does the water level of the pond go up, down, or stay the same?',
 h:['While the rock is in the boat, how much water does it displace? (Think about floating.)',
    'A floating object displaces its own weight of water. A sunken object displaces its own volume. Which is bigger for a rock?'],
 a:'<p>In the boat, the rock adds to the floating weight, so it displaces water equal to its <em>weight</em>. Rock is about 2.5 times denser than water, so that is 2.5 times its own volume.</p><p>On the bottom, it displaces only its own <em>volume</em>.</p><p>So less water is displaced afterwards: the level <b>falls</b>, slightly.</p>'},
{id:'m4',t:1,l:2,q:'A solid ball rolls without slipping down a ramp. An identical block slides down an identical, frictionless ramp. Which reaches the bottom first, and why?',
 h:['Use energy conservation. Where does the lost gravitational energy go in each case?',
    'For the rolling ball, some energy goes into spinning. For a solid sphere the rotational energy is (1/5)mv², compared with (1/2)mv² translational.'],
 a:'<p>Sliding block: mgh = ½mv², so v² = 2gh.</p><p>Rolling solid sphere: mgh = ½mv² + ½Iω² with I = (2/5)mr², ω = v/r, giving mgh = (7/10)mv², so v² = (10/7)gh.</p><p>The block is faster at every height, so <b>the sliding block wins</b>. The rolling ball "wastes" 2/7 of its energy on spinning. Notice the answer does not depend on mass or radius, only on the shape (a hollow ball would be slower still).</p>'},
{id:'m5',t:1,l:1,q:'If you can jump 50 cm high on Earth, how high could you jump on the Moon?',
 h:['Your legs give you the same take-off speed on the Moon as on Earth.',
    'The height reached is v²/2g. The Moon\'s surface gravity is about one sixth of Earth\'s.'],
 a:'<p>Same take-off speed v, height h = v²/2g. With g six times smaller, h is <b>six times larger: about 3 m</b>.</p><p>Refinements to mention: "jump height" usually means the rise of your centre of mass; a bulky spacesuit would reduce it a lot; and the time in the air, 2v/g, is also six times longer.</p>'},
{id:'m6',t:1,l:3,q:'A ladder leans against a smooth (frictionless) wall, standing on a rough floor. What is the smallest coefficient of friction that stops it slipping, if it makes angle θ with the floor?',
 h:['Draw the forces: weight at the middle, a horizontal push from the wall, and a normal force plus friction at the floor.',
    'Balance horizontal and vertical forces, then take moments about the foot of the ladder to avoid unknowns there.'],
 a:'<p>Let the ladder have length L and weight W. Floor: normal N, friction F. Wall: horizontal force P.</p><p>Vertical: N = W. Horizontal: F = P. Moments about the foot: P·L sinθ = W·(L/2) cosθ, so P = W / (2 tanθ).</p><p>No slip needs F ≤ μN, i.e. <b>μ ≥ 1 / (2 tanθ)</b>.</p><p>Check: a steep ladder (θ near 90°) needs almost no friction; a nearly flat one needs huge friction. That matches experience.</p>'},
{id:'m7',t:1,l:1,q:'Gravity on the International Space Station is about 90% as strong as on the ground. So why do astronauts float?',
 h:['What is the ISS actually doing?',
    'Think about what you feel in a lift whose cable has snapped.'],
 a:'<p>At 400 km altitude, g is about (6371/6771)² ≈ 0.88 of its surface value. The astronauts are not weightless in the sense of "no gravity".</p><p>They and the station are both in <b>free fall</b>, moving sideways fast enough (about 7.7 km/s) that they keep missing the Earth. Everything falls together, so nothing pushes on anything else, and that is what we feel as weightlessness.</p>'},

/* ---------- Maths and graphs ---------- */
{id:'g1',t:2,l:2,q:'Sketch the graph of y = x sin x.',
 h:['Is the function odd, even, or neither?',
    'Where is it zero? Between which two lines does it oscillate?'],
 a:'<p><b>Even</b> (x and sin x are both odd, so the product is even): the graph is symmetric about the y-axis.</p><p>Zero at x = 0 (where it touches zero like x², since x sin x ≈ x² near 0) and at every x = nπ.</p><p>It oscillates between the lines y = x and y = −x, touching them near x = (n + ½)π. So it is a wave whose amplitude grows linearly: a "widening funnel" shape.</p>'},
{id:'g2',t:2,l:2,q:'Sketch y = x e<sup>−x</sup>. Where is its maximum?',
 h:['What happens as x → +∞ and x → −∞?',
    'Differentiate with the product rule and set the derivative to zero.'],
 a:'<p>For large positive x, e<sup>−x</sup> beats x, so y → 0 from above. For large negative x, both factors grow in size with x negative, so y → −∞. It passes through the origin.</p><p>dy/dx = e<sup>−x</sup>(1 − x) = 0 at <b>x = 1</b>, where y = 1/e ≈ 0.37.</p><p>There is also a point of inflection at x = 2 (second derivative e<sup>−x</sup>(x − 2) = 0).</p>'},
{id:'g3',t:2,l:3,q:'Without a calculator, which is bigger: e<sup>π</sup> or π<sup>e</sup>?',
 h:['Take logarithms. Compare π ln e with e ln π.',
    'Dividing by eπ, you are comparing (ln x)/x at x = e and x = π. Where is (ln x)/x largest?'],
 a:'<p>Compare ln(e<sup>π</sup>) = π with ln(π<sup>e</sup>) = e ln π. Divide both by eπ: compare 1/e = (ln e)/e with (ln π)/π.</p><p>f(x) = (ln x)/x has f′(x) = (1 − ln x)/x², which is zero at x = e: f has its maximum at e. So (ln π)/π &lt; (ln e)/e.</p><p>Therefore <b>e<sup>π</sup> &gt; π<sup>e</sup></b>. (Numerically 23.1 vs 22.5.)</p>'},
{id:'g4',t:2,l:2,q:'Does 1 + 1/2 + 1/3 + 1/4 + … add up to a finite number?',
 h:['Try grouping the terms: 1/3 + 1/4, then 1/5 + … + 1/8, and so on.',
    'Each group is at least as big as one half.'],
 a:'<p>Group: 1/3 + 1/4 &gt; 2 × 1/4 = 1/2. Then 1/5 + 1/6 + 1/7 + 1/8 &gt; 4 × 1/8 = 1/2. Each doubling block adds more than 1/2.</p><p>Infinitely many halves means the sum <b>diverges</b>, even though the terms go to zero. It grows very slowly, like ln n: a million terms only sum to about 14.4.</p><p>Contrast with 1 + 1/4 + 1/9 + … which converges (to π²/6).</p>'},
{id:'g5',t:2,l:3,q:'Sketch y = sin(1/x).',
 h:['What happens for large |x|? (1/x is small.)',
    'As x approaches 0, how fast does 1/x change? How many oscillations are there between x = 0.01 and x = 0.02?'],
 a:'<p>For large |x|, sin(1/x) ≈ 1/x: the graph approaches 0, from above on the right and below on the left. The function is <b>odd</b>.</p><p>The largest value 1 occurs last at x = 2/π ≈ 0.64. Zeros sit at x = 1/(nπ), which crowd together near 0.</p><p>Close to the origin the graph oscillates between −1 and +1 infinitely often, ever faster. It is undefined at x = 0 and has no limit there.</p>'},
{id:'g6',t:2,l:2,q:'How many zeros are there at the end of 100! (100 factorial)?',
 h:['A trailing zero comes from a factor of 10 = 2 × 5. Which is rarer among the numbers 1 to 100: factors of 2 or of 5?',
    'Count multiples of 5, then remember that 25, 50, 75 and 100 each contribute an extra 5.'],
 a:'<p>Factors of 2 are plentiful, so count factors of 5.</p><p>Multiples of 5 up to 100: 20. Multiples of 25: 4 more. Total <b>24</b>.</p><p>General rule: ⌊n/5⌋ + ⌊n/25⌋ + ⌊n/125⌋ + …</p>'},
{id:'g7',t:2,l:3,q:'Differentiate y = x<sup>x</sup>.',
 h:['Neither the power rule nor the exponential rule applies directly, because both base and exponent vary.',
    'Take logs first: ln y = x ln x, then differentiate both sides.'],
 a:'<p>ln y = x ln x. Differentiating: (1/y)(dy/dx) = ln x + 1.</p><p>So <b>dy/dx = x<sup>x</sup>(ln x + 1)</b>.</p><p>Follow-up: the minimum of x<sup>x</sup> for x &gt; 0 is at ln x = −1, i.e. x = 1/e.</p>'},

/* ---------- Waves and optics ---------- */
{id:'w1',t:3,l:2,q:'Why is the sky blue? And why are sunsets red?',
 h:['Sunlight contains all colours. Something in the atmosphere scatters some colours more than others.',
    'Scattering by molecules much smaller than the wavelength (Rayleigh scattering) is proportional to 1/λ⁴.'],
 a:'<p>Air molecules scatter short wavelengths much more strongly: intensity ∝ 1/λ⁴, so blue (450 nm) is scattered about 4–5 times more than red (700 nm). Looking away from the Sun, you see this scattered light, so the sky looks blue.</p><p>Why not violet? The Sun emits less violet, some is absorbed high up, and our eyes are less sensitive to it.</p><p>At sunset, light travels through far more atmosphere to reach you. Most of the blue is scattered out of the direct beam on the way, leaving <b>red and orange</b>.</p>'},
{id:'w2',t:3,l:2,q:'Why does a rainbow form an arc, and where must the Sun be when you see one?',
 h:['Light enters a spherical raindrop, reflects once off the back, and comes out again. The angle it is deviated by has a "preferred" value.',
    'That angle is about 42° for red light, measured from the point directly opposite the Sun.'],
 a:'<p>Light refracts into a drop, reflects once inside and refracts out. The returning light piles up near a deviation of about 138°, i.e. <b>42° from the antisolar point</b> (the shadow of your head). Different colours have slightly different angles because of dispersion: red on the outside (42°), violet inside (40°).</p><p>All drops that send light to your eye at 42° lie on a cone around your line of sight, so you see a circle, cut off by the ground into an arc.</p><p>The Sun must be <b>behind you</b> and fairly low: if it is higher than 42°, the whole bow is below the horizon. From a plane you can see a full circle.</p>'},
{id:'w3',t:3,l:1,q:'Why does a straw look bent where it enters a glass of water?',
 h:['Light from the underwater part of the straw changes direction as it crosses from water into air.',
    'Your brain assumes light travels in straight lines.'],
 a:'<p>Light from the submerged part refracts away from the normal as it leaves water (n ≈ 1.33) into air. Your eye traces the rays back in straight lines, so the underwater part appears higher than it is.</p><p>Looking straight down, objects appear at about <b>3/4 of their real depth</b> (real depth ÷ n). So the straw appears bent upwards at the surface.</p>'},
{id:'w4',t:3,l:2,q:'Why can you hear someone talking around a corner, but you cannot see them?',
 h:['Both sound and light are waves. What determines how much a wave spreads after passing through a gap?',
    'Compare the wavelength of each wave with the size of a doorway.'],
 a:'<p>Waves spread significantly (diffract) when the gap is comparable to their wavelength.</p><p>Speech has wavelengths around 0.3–3 m (λ = v/f with v = 340 m/s), similar to a doorway, so it diffracts strongly round corners. Visible light has λ ≈ 500 nm, about a million times smaller than the door, so it barely diffracts and travels in effectively straight lines.</p><p>Bonus: low notes go round corners better than high ones, which is why you hear the bass from a distant party.</p>'},
{id:'w5',t:3,l:1,q:'Why does a guitar string sound higher when you tighten it or press it against a fret?',
 h:['The note is set by the frequency of the standing wave on the string.',
    'The fundamental has a wavelength of twice the vibrating length, and wave speed on a string is √(T/μ), where T is tension and μ is mass per unit length.'],
 a:'<p>Fundamental frequency f = v/2L = (1/2L)√(T/μ).</p><p><b>Tightening</b> increases T, so f rises. <b>Pressing a fret</b> shortens L, so f rises. Thicker strings (larger μ) give lower notes.</p><p>Each fret shortens the string by a factor of 2<sup>1/12</sup>, so 12 frets halve the length and raise the note by an octave.</p>'},
{id:'w6',t:3,l:2,q:'How do noise-cancelling headphones work? Why are they better at blocking a low hum than a sudden clap?',
 h:['A microphone listens to the outside noise. What could the speaker play to cancel it?',
    'Producing the exact inverse wave takes processing time. Is that delay more of a problem for long or short wavelengths?'],
 a:'<p>A microphone picks up ambient sound, and the electronics play the same wave inverted (180° out of phase). The two superpose and <b>interfere destructively</b>.</p><p>Steady, low-frequency sound is predictable and has long wavelengths, so a small timing delay is a tiny fraction of a cycle. Sudden or high-pitched sounds change too quickly to predict, and a fixed delay is a large fraction of their period, so cancellation fails. The ear cups block high frequencies passively instead.</p>'},

/* ---------- Electricity and magnetism ---------- */
{id:'x1',t:4,l:1,q:'Why can a bird sit safely on a high-voltage power line?',
 h:['Current flows because of a potential difference. What is the potential difference between the bird\'s two feet?',
    'The wire between its feet has a tiny resistance compared with the bird\'s body.'],
 a:'<p>Both feet touch the same wire, a few centimetres apart. The voltage drop along that short length of thick copper is minute (millivolts), so almost no current goes through the bird.</p><p>Danger comes from touching two things at different potentials at once: a wire and the pylon, or two wires. That is why large birds with wide wingspans are at risk.</p>'},
{id:'x2',t:4,l:2,q:'If you drop a strong magnet down a vertical copper pipe, it falls very slowly. Why? Copper is not magnetic.',
 h:['As the magnet falls, the magnetic flux through each ring of the pipe is changing.',
    'A changing flux induces a current (Faraday). Which way does that current\'s own magnetic field push (Lenz)?'],
 a:'<p>The falling magnet changes the flux through rings of copper above and below it, inducing circulating <b>eddy currents</b>. By Lenz\'s law these currents create fields that oppose the change: the ring below repels the magnet and the ring above attracts it, both slowing it down.</p><p>The braking force grows with speed, so the magnet quickly reaches a slow terminal velocity. Its lost gravitational energy becomes heat in the pipe. The same principle is used in train and roller-coaster brakes.</p>'},
{id:'x3',t:4,l:2,q:'How does a microwave oven heat food?',
 h:['Water molecules have a permanent electric dipole.',
    'The oven fills with an electromagnetic wave oscillating at about 2.45 GHz. What does an oscillating electric field do to a dipole?'],
 a:'<p>The oven\'s field oscillates billions of times a second. Polar molecules, mainly water, keep trying to rotate to line up with it. Their jostling against neighbouring molecules converts that motion into random thermal energy: <b>dielectric heating</b>.</p><p>Common misconception: it is not a resonance of the water molecule. 2.45 GHz is chosen as a practical compromise for penetration depth (a few cm) and licensing. Dry foods and ice heat poorly because their molecules cannot rotate freely.</p>'},
{id:'x4',t:4,l:1,q:'After rubbing a balloon on your hair, it sticks to a neutral wall. How can a charged object attract something with no charge?',
 h:['The wall has no net charge, but its charges can still move a little.',
    'Which charges in the wall end up closer to the balloon?'],
 a:'<p>The balloon picks up extra electrons (negative). Near it, the molecules of the wall become slightly <b>polarised</b>: their positive ends shift towards the balloon and negative ends away.</p><p>The attracted positive charges are closer than the repelled negative ones, and electric force falls with distance, so attraction wins. This is <b>induced polarisation</b>, the same reason a charged comb picks up bits of paper.</p>'},
{id:'x5',t:4,l:1,q:'Why is electricity sent across the country at hundreds of thousands of volts?',
 h:['The power delivered is P = VI. Energy is lost as heat in the cables.',
    'The power lost in a cable of resistance R is I²R.'],
 a:'<p>For a fixed power P = VI, raising the voltage lowers the current. Cable losses are I²R, so <b>10 times the voltage means 100 times less heating loss</b>.</p><p>Transformers make it easy to step voltage up for transmission and back down for homes. That is a big reason the grid uses alternating current.</p>'},

/* ---------- Thermal physics ---------- */
{id:'h1',t:5,l:1,q:'A metal bench and a wooden bench have been outside all night at the same temperature. Why does the metal one feel much colder to sit on?',
 h:['Your skin senses heat flow, not temperature directly.',
    'Which material carries heat away from your skin faster?'],
 a:'<p>Both are at the same temperature, below your skin temperature. Metal has a much higher thermal conductivity, so it draws heat from your skin quickly and your skin surface cools. Wood is a poor conductor, so the contact point warms up to near skin temperature almost immediately.</p><p>Your nerves sense the rate of heat loss, so metal <b>feels</b> colder. On a hot day, the metal bench feels hotter for the same reason.</p>'},
{id:'h2',t:5,l:2,q:'Why does ice float, and why does that matter for life on Earth?',
 h:['Floating means the solid is less dense than the liquid. That is unusual. What is special about how water molecules bond?',
    'Think about what happens to a lake in winter if ice were denser and sank.'],
 a:'<p>In ice, hydrogen bonds lock water molecules into an open hexagonal lattice, which takes up more space than the disordered liquid. Ice is about 9% less dense, so it floats.</p><p>Lakes freeze from the top down. The ice layer insulates the water below, which stays liquid (near 4 °C, where water is densest). If ice sank, lakes would fill with ice from the bottom up and could freeze solid, making aquatic life much harder.</p>'},
{id:'h3',t:5,l:1,q:'Why does food cook faster in a pressure cooker?',
 h:['What sets the temperature of boiling water?',
    'Boiling happens when the vapour pressure of the water equals the surrounding pressure.'],
 a:'<p>Water boils when its vapour pressure equals the pressure above it. Sealing the pot raises the pressure to about 2 atmospheres, which pushes the boiling point up to about <b>120 °C</b>.</p><p>Cooking chemistry speeds up strongly with temperature, so food cooks in roughly a third of the time. On a high mountain the opposite happens: water boils below 100 °C and pasta takes longer.</p>'},
{id:'h4',t:5,l:2,q:'Could you cool a sealed, insulated room by leaving the fridge door open?',
 h:['A fridge is a heat pump: it moves heat from inside to the coils at the back. Where are both of those now?',
    'Consider the room plus fridge as one system. What energy goes into it?'],
 a:'<p>No: the room <b>warms up</b>. With the door open, the fridge just moves heat from one part of the room to another. Meanwhile it draws electrical energy, which all ends up as heat in the room.</p><p>Energy conservation for the sealed room: the only energy flow in is electrical work, so its temperature must rise. An air conditioner works because it dumps its heat outside.</p>'},
{id:'h5',t:5,l:2,q:'Why can you put your hand into a 200 °C oven for a moment, but you would be badly scalded by 100 °C water?',
 h:['What matters is how quickly heat flows into your hand, not just the temperature.',
    'Compare the density, heat capacity and thermal conductivity of air and water. Is there anything else hot steam or water can do?'],
 a:'<p>Air is about a thousand times less dense than water and a poor conductor, so it can deliver heat only slowly. A thin layer of air next to your skin cools down quickly.</p><p>Water conducts about 25 times better and has huge heat capacity per volume, so it keeps delivering heat. Steam is even worse: when it condenses on your skin it releases latent heat (2.3 MJ/kg).</p>'},
{id:'h6',t:5,l:1,q:'Why does blowing on hot soup cool it down?',
 h:['Soup cools mainly by evaporation from its surface.',
    'What does the air just above the soup contain, and what does blowing do to it?'],
 a:'<p>Evaporation removes the fastest molecules, taking latent heat with them. Above the soup, a layer of humid air builds up and slows further evaporation.</p><p>Blowing <b>replaces that humid layer with drier air</b>, so evaporation speeds up. It also increases convective heat loss. (Your breath is warmer than the room, but that matters much less.)</p>'},

/* ---------- Gravity and astrophysics ---------- */
{id:'a1',t:6,l:2,q:'Why do we always see the same face of the Moon?',
 h:['It is not because the Moon does not spin. How long does one spin take compared with one orbit?',
    'The Earth\'s gravity raises tidal bulges on the Moon. What happens if they are not lined up with the Earth?'],
 a:'<p>The Moon spins exactly once per orbit (about 27 days), so the same side always faces us: it is <b>tidally locked</b>.</p><p>Early on it spun faster. Earth\'s gravity stretched it into a slight bulge; friction dragged the bulge ahead of the Earth–Moon line, and Earth\'s pull on the misaligned bulge created a torque that slowed the spin until it matched the orbit. The same process is slowly lengthening Earth\'s day.</p>'},
{id:'a2',t:6,l:2,q:'How could you work out the mass of the Earth?',
 h:['You know g at the surface and the radius of the Earth. What else do you need?',
    'Newton\'s law gives g = GM/R². G was measured in the lab by Cavendish.'],
 a:'<p>g = GM/R², so M = gR²/G = 9.8 × (6.4 × 10⁶)² / (6.7 × 10⁻¹¹) ≈ <b>6 × 10²⁴ kg</b>.</p><p>The hard part historically was G, measured by Cavendish with a torsion balance in 1798 (sometimes described as "weighing the Earth"). Alternatively, the Moon\'s orbit gives GM directly from Kepler\'s third law. Dividing by the volume gives an average density of about 5500 kg/m³, twice that of surface rock, so the core must be dense.</p>'},
{id:'a3',t:6,l:3,q:'Why are there two high tides a day, not one?',
 h:['The tide is caused not by the Moon\'s gravity itself, but by how its strength varies across the Earth.',
    'The near side is pulled more than the centre; the centre is pulled more than the far side. What does each look like from the Earth\'s point of view?'],
 a:'<p>Relative to the Earth\'s centre, water on the near side is pulled towards the Moon a bit more strongly, and water on the far side a bit less strongly. Both stretch the oceans along the Earth–Moon line, making <b>two bulges</b> on opposite sides.</p><p>The Earth turns under both bulges each day, giving two high tides about 12 h 25 min apart (the extra 25 min because the Moon moves along its orbit). The Sun adds a smaller tidal effect: spring tides happen when the two line up.</p>'},
{id:'a4',t:6,l:1,q:'How long does sunlight take to reach us? What does that tell you about looking at the night sky?',
 h:['Earth–Sun distance ≈ 1.5 × 10¹¹ m; speed of light ≈ 3 × 10⁸ m/s.'],
 a:'<p>t = 1.5 × 10¹¹ / 3 × 10⁸ = 500 s ≈ <b>8 minutes 20 seconds</b>.</p><p>Every observation is of the past. The nearest stars appear as they were years ago; distant galaxies as they were millions or billions of years ago. That is how astronomers can study the early universe directly.</p>'},
{id:'a5',t:6,l:2,q:'If the Sun suddenly collapsed into a black hole of the same mass, what would happen to the Earth\'s orbit?',
 h:['Outside a spherical mass, how does gravity depend on its size?',
    'Newton\'s shell theorem: a spherical body attracts external objects as if all its mass were at its centre.'],
 a:'<p>Nothing would change about the orbit. Outside the Sun, its gravity depends only on its mass and our distance, not its radius. The Earth would keep orbiting once a year.</p><p>Of course, it would get very cold and dark. A black hole of the Sun\'s mass would be only about 6 km across. Black holes only "suck things in" if you get very close.</p>'},
{id:'a6',t:6,l:3,q:'Why are planets round, but small asteroids are lumpy and potato-shaped?',
 h:['Think about a competition between two things: gravity and the strength of rock.',
    'The pressure from gravity at the centre of a body grows roughly as density² × radius². At what size does it beat the strength of rock?'],
 a:'<p>Gravity pulls every bit of a body towards the centre, which would make it a sphere. Rock resists deformation with a strength of roughly 10⁷–10⁸ Pa.</p><p>Central pressure ~ Gρ²R². With ρ ≈ 3000 kg/m³, this reaches 10⁷–10⁸ Pa when R is a few hundred kilometres. Bodies larger than <b>about 200–400 km</b> are crushed into spheres; smaller ones keep irregular shapes. Ice is weaker, so icy moons become round at smaller sizes.</p>'},

/* ---------- Everyday physics ---------- */
{id:'d1',t:7,l:1,q:'Why does a spinning ice skater speed up when they pull their arms in? Where does the extra kinetic energy come from?',
 h:['Is there any external torque on the skater?',
    'Angular momentum L = Iω is conserved. Rotational kinetic energy is L²/2I.'],
 a:'<p>With no external torque, angular momentum Iω is conserved. Pulling the arms in reduces the moment of inertia I, so ω increases.</p><p>Kinetic energy L²/2I <b>increases</b>. The extra energy comes from the work the skater\'s muscles do pulling their arms inwards against the "outward" tendency of the spinning arms.</p>'},
{id:'d2',t:7,l:2,q:'Why does a kettle get noisy and then quieter just before it boils?',
 h:['Bubbles first form at the hot element at the bottom. What happens when they rise into cooler water above?',
    'Steam bubbles that suddenly condense collapse violently.'],
 a:'<p>Early on, steam bubbles form at the element but rise into cooler water, where the steam condenses and the bubbles <b>collapse</b> with a sharp snap. Thousands of these give the loud hissing roar.</p><p>As the whole kettle approaches 100 °C, bubbles survive all the way to the surface without collapsing. The violent implosions stop, so it gets quieter, then you hear the gentler bubbling of a full boil.</p>'},
{id:'d3',t:7,l:2,q:'Should you walk or run in the rain to stay drier?',
 h:['Split the rain hitting you into rain landing on your head and shoulders, and rain you walk into with your front.',
    'How does each part depend on your speed, for a fixed distance?'],
 a:'<p>Rain on <b>top</b> of you is proportional to the time spent in the rain, so going faster reduces it.</p><p>Rain hitting your <b>front</b> is the rain in the volume you sweep through, which depends only on the distance, not your speed.</p><p>So overall, <b>run</b>. (If the wind blows rain at your back, there is an ideal speed matching the wind.) Good answers set up a simple model before concluding.</p>'},
{id:'d4',t:7,l:3,q:'A shower curtain blows inwards towards you when you turn on the shower. Why?',
 h:['There is no single agreed answer; tutors want to see you propose and test explanations.',
    'Candidates: hot air rising (convection), moving air and Bernoulli\'s principle, and a vortex set up by the spray.'],
 a:'<p>Possible explanations:</p><p>• <b>Convection</b>: hot water warms the air, which rises and draws in air at the bottom. But the effect also happens with cold water, so this cannot be the whole story.</p><p>• <b>Bernoulli</b>: the spray drags air along, and faster-moving air is at lower pressure, so the curtain is pushed in.</p><p>• <b>Vortex</b>: computer simulations (2001) suggest the spray drives a rotating vortex with a low-pressure core that pulls the curtain inwards.</p><p>The point is to reason: suggest an experiment to tell them apart, such as using cold water to rule out convection.</p>'}
];

/* ---------- follow-up questions ----------
   Tutors rarely stop at the first answer. Each entry: [follow-up question, short answer]. */
const PHY_FOLLOW={
 e1:[['How many molecules of air is that?','60 kg ÷ 0.029 kg/mol ≈ 2000 mol, so about 2000 × 6 × 10²³ ≈ 10²⁷ molecules.'],
     ['The room is heated from 15 °C to 25 °C at constant pressure. Roughly how much air leaves?','At fixed pressure and volume the mass inside scales as 1/T. 1 − 288/298 ≈ 3%, so about 2 kg leaves through gaps.']],
 e2:[['Roughly how many cells are in your body?','Body volume ≈ 0.07 m³; a typical cell is (10 μm)³ = 10⁻¹⁵ m³, giving ~10¹³–10¹⁴. Careful counts give about 3 × 10¹³, many of them small red blood cells.'],
     ['So how many atoms are in a typical cell?','7 × 10²⁷ ÷ 3 × 10¹³ ≈ 2 × 10¹⁴ atoms.']],
 e3:[['If the atmosphere had sea-level density all the way up, how thick would it be?','h = P/(ρg) = 10⁵/(1.2 × 9.8) ≈ 8.5 km, about the height of Everest. This is the "scale height".'],
     ['Why does pressure fall roughly exponentially with height?','dP/dh = −ρg, and for an isothermal ideal gas ρ ∝ P. So dP/dh ∝ −P, giving P = P₀e^(−h/H) with H = kT/mg ≈ 8 km.']],
 e4:[['How much mass does the Sun lose each second?','Δm = P/c² = 4 × 10²⁶ / 9 × 10¹⁶ ≈ 4 × 10⁹ kg/s, about four million tonnes a second.'],
     ['Estimate the Sun\'s surface temperature (radius 7 × 10⁸ m).','σT⁴ = P/(4πR²) ≈ 4 × 10²⁶ / 6 × 10¹⁸ ≈ 6 × 10⁷ W/m², so T⁴ ≈ 10¹⁵ and T ≈ 5800 K.']],
 e5:[['You have about 10⁵ hairs. What total length do you grow per day?','10⁵ × 1 cm/month ≈ 1 km/month, or roughly 35 m a day.'],
     ['Roughly what mass of hair protein is that per day?','Hair diameter ≈ 70 μm gives cross-section ≈ 4 × 10⁻⁹ m². 35 m × 4 × 10⁻⁹ m² × 1300 kg/m³ ≈ 0.2 g per day.']],
 e6:[['Which assumption is weakest?','Mixing is fine: air mixes around the globe within a year or two. The bigger issue is exchange: oxygen and CO₂ are recycled by plants and the oceans. Nitrogen (78%) is almost inert, so the answer stays about one.'],
     ['Would the answer be the same for a breath someone took yesterday?','No. It takes a year or two for a breath to spread through the whole atmosphere, especially between hemispheres, so it would not yet be evenly mixed.']],
 e7:[['Compare a battery\'s energy per kilogram with petrol.','An AA is about 23 g, so 10⁴ J / 0.023 kg ≈ 0.4 MJ/kg. Petrol is about 46 MJ/kg, roughly 100 times more.'],
     ['How long could one AA run a 0.1 W LED?','10⁴ J / 0.1 W = 10⁵ s, a little over a day.']],
 m1:[['What is your maximum speed, and where?','At the centre: v = ωR = √(gR) = √(9.8 × 6.4 × 10⁶) ≈ 7.9 km/s, the same as low orbital speed.'],
     ['The real Earth is denser in the middle. Is the real trip faster or slower?','Faster. Gravity stays roughly constant (even rises slightly) for the first ~3000 km down, so you speed up more. Realistic models give about 38 minutes.']],
 m2:[['Show that 30° and 60° give the same range.','R ∝ sin2θ, and sin60° = sin120°. Any pair of angles adding to 90° gives the same range.'],
     ['Throwing from the top of a cliff, is the best angle above or below 45°?','Below. The extra fall height gives more time in the air, so it pays to put more of the speed into horizontal motion.']],
 m3:[['What if you throw a block of wood (which floats) overboard instead?','No change. Floating in the boat or in the water, it displaces its own weight of water either way.'],
     ['What happens to the boat\'s height in the water after the rock goes over?','The boat rises: it now displaces less water because it carries less weight.']],
 m4:[['Rank by speed at the bottom: hoop, solid sphere, solid cylinder, hollow sphere.','Fastest has the smallest I/mr²: solid sphere (2/5), solid cylinder (1/2), hollow sphere (2/3), hoop (1).'],
     ['Rolling needs friction, so why is no energy lost to it?','Static friction acts at the contact point, which is momentarily at rest, so it does no work. It only converts energy between translation and rotation.']],
 m5:[['How small would an asteroid have to be for you to jump off it entirely?','Take-off speed ≈ 3 m/s. Escape speed = R√(8πGρ/3); with ρ ≈ 2000 kg/m³ that is about 10⁻³ × R. So R ≈ 3 km or less.'],
     ['Why did Apollo astronauts hop rather than walk?','Walking is like an inverted pendulum, with maximum speed about √(gL). On the Moon that is only about 1 m/s, so bounding was faster and easier.']],
 m6:[['A person climbs the ladder. Where is it most likely to slip?','Near the top. Their weight then acts further from the foot, increasing the torque and the friction needed.'],
     ['What changes if the wall is also rough?','Wall friction carries some of the weight, so less floor friction is needed. With coefficients μ₁ (floor) and μ₂ (wall), the limiting angle obeys tanθ = (1 − μ₁μ₂)/(2μ₁).']],
 m7:[['What is the period of the ISS\'s orbit?','T = 2π√(r³/GM) with r ≈ 6.8 × 10⁶ m gives about 5500 s, roughly 92 minutes: 16 sunrises a day.'],
     ['Why does the ISS need regular boosts?','The very thin atmosphere at 400 km causes drag. It drops to a lower orbit (and, counter-intuitively, speeds up), so engines periodically raise it again.']],
 g1:[['Where exactly are the turning points?','dy/dx = sin x + x cos x = 0, i.e. tan x = −x. These approach x = (n + ½)π for large x.'],
     ['Now sketch y = (sin x)/x.','Even, equal to 1 at x = 0 (the limit), zeros at x = nπ (n ≠ 0), and oscillating with an envelope ±1/x that dies away.']],
 g2:[['Evaluate the integral of x e^(−x) from 0 to ∞.','By parts: [−x e^(−x)] + ∫e^(−x) dx = 0 + 1 = 1.'],
     ['Sketch y = x² e^(−x).','Touches zero at the origin (minimum), maximum at x = 2 with value 4/e² ≈ 0.54, tends to 0 as x → ∞ and to +∞ as x → −∞.']],
 g3:[['Which is bigger: 2¹⁰⁰ or 100¹⁰?','100¹⁰ = 10²⁰ ≈ 2^66.4 (using 2¹⁰ ≈ 10³), so 2¹⁰⁰ is far bigger.'],
     ['Find two different whole numbers with xʸ = yˣ.','2 and 4: 2⁴ = 4² = 16. It is the only such pair of positive integers.']],
 g4:[['Roughly how many terms do you need for the sum to exceed 10?','The sum ≈ ln n + 0.577, so ln n ≈ 9.4 and n ≈ 12 000.'],
     ['You stack identical books at the edge of a table. How far can the top one overhang?','With n books the best overhang is ½(1 + ½ + ⅓ + … + 1/n) book lengths. That grows without limit, though very slowly.']],
 g5:[['Sketch y = x sin(1/x).','It oscillates between the lines y = x and y = −x, so it is squeezed to 0 at the origin. It tends to 1 as x → ±∞ (since sin u/u → 1).'],
     ['How many zeros does sin(1/x) have between x = 0.01 and x = 0.1?','Zeros at x = 1/(nπ) need 10 ≤ nπ ≤ 100, so n = 4 to 31: 28 zeros.']],
 g6:[['How many zeros are at the end of 1000!?','200 + 40 + 8 + 1 = 249.'],
     ['Roughly how many digits does 100! have?','Stirling: log₁₀(n!) ≈ n log₁₀(n/e) + ½log₁₀(2πn) ≈ 156.6 + 1.4 = 158.0, so 158 digits.']],
 g7:[['What is the limit of xˣ as x → 0 from above?','xˣ = e^(x ln x), and x ln x → 0, so the limit is 1.'],
     ['Integrate ln x.','By parts with u = ln x, dv = dx: x ln x − x + C.']],
 w1:[['Why are clouds white?','Water droplets are much larger than the wavelength of light, so they scatter all colours about equally (Mie scattering).'],
     ['What colour is the daytime sky on the Moon, and on Mars?','Black on the Moon, which has no atmosphere. Mars has a thin, dusty atmosphere: a butterscotch sky by day and bluish sunsets, because the fine dust scatters blue light forwards.']],
 w2:[['Why is the sky darker just outside the bow than inside it?','Light reflected once inside drops can only be deviated to angles inside 42°, so the inside is brighter. The dim band is Alexander\'s dark band.'],
     ['Where does the fainter second rainbow come from?','Two internal reflections. It appears at about 51°, with the colours reversed.']],
 w3:[['A swimming pool is 2 m deep. How deep does it look from directly above?','Real depth ÷ n = 2/1.33 ≈ 1.5 m.'],
     ['What is the critical angle for light going from water to air, and what does a diver see looking up?','sin c = 1/1.33, so c ≈ 49°. The whole sky is squeezed into a bright circle of half-angle 49° overhead (Snell\'s window); outside it the surface acts as a mirror.']],
 w4:[['Why do ships use low-pitched foghorns?','Low frequencies diffract round obstacles more and are absorbed less by air, so they carry further.'],
     ['Why can\'t an optical microscope see individual atoms?','Resolution is limited to about half the wavelength, ~200 nm, while atoms are ~0.1 nm. You need much shorter wavelengths, e.g. electrons.']],
 w5:[['If you touch the string lightly at its midpoint and pluck, what do you hear?','A note an octave higher. Touching forces a node at the middle, which kills the fundamental and leaves the second harmonic.'],
     ['Why does a guitar need a hollow body?','A thin string moves very little air. The string drives the soundboard, which has a large area and couples the vibration efficiently to the air.']],
 w6:[['Where does the energy go when two sounds cancel?','Cancellation is local. Elsewhere the waves add constructively, and some energy goes back into the speaker. Energy is redistributed, not destroyed.'],
     ['Why can\'t you cancel noise throughout a whole room the same way?','The cancelling wave only matches the noise at one point. A short distance away (a fraction of a wavelength) the phases no longer line up.']],
 x1:[['Estimate the voltage between the bird\'s feet.','A line might carry ~1000 A with resistance ~5 × 10⁻⁵ Ω/m. Over 5 cm that is 2.5 × 10⁻⁶ Ω, so about 2.5 mV.'],
     ['Why can high-voltage lines be dangerous even without touching them?','Air breaks down at about 3 MV/m. Near a line at hundreds of kV, a spark can jump a gap of tens of centimetres.']],
 x2:[['How would a thicker pipe wall change the fall?','More copper means larger eddy currents and a larger braking force, so a slower terminal speed.'],
     ['What if the pipe had a slit cut along its whole length?','The current loops around the pipe are broken, so the eddy currents and braking are much weaker. The magnet falls faster.']],
 x3:[['Why does a microwave heat unevenly, and how could you use that to measure c?','Standing waves give hot spots λ/2 ≈ 6 cm apart. Melt chocolate without the turntable, measure the spacing d, then c = 2d × 2.45 GHz.'],
     ['Why doesn\'t the metal mesh in the door let microwaves out?','The holes are a few mm across, much smaller than the 12 cm wavelength, so the mesh behaves like a solid metal sheet. Visible light (λ ≈ 500 nm) passes straight through.']],
 x4:[['Why does the balloon fall off after a while?','Its charge leaks away, mainly through moisture in the air, faster on humid days.'],
     ['Why does a charged rod bend a thin stream of water?','Water molecules are polar. In the non-uniform field they line up and are pulled towards the stronger field near the rod.']],
 x5:[['Why not use even higher voltages?','Insulation, arcing and corona discharge get worse, pylons must be taller with wider spacing, and the equipment costs more.'],
     ['Why is AC usual, and when is DC used instead?','Transformers make AC easy to step up and down. For very long or undersea cables, high-voltage DC wins because it avoids losses from the cable\'s capacitance.']],
 h1:[['At what temperature would metal and wood feel the same?','At skin temperature (about 33 °C), when no heat flows either way.'],
     ['Why do tiles feel colder than carpet in the same room?','Same reason: tiles conduct heat away from your feet much faster than carpet, which traps air.']],
 h2:[['Why is water densest at 4 °C?','Two effects compete. Cooling packs molecules closer (normal contraction), but below about 4 °C open, hydrogen-bonded, ice-like clusters start to dominate and the liquid expands.'],
     ['Does pressure melting explain why ice skates glide?','Barely. A skater\'s pressure (~10⁶ Pa) lowers the melting point by only about 0.1 K. Frictional heating and a naturally liquid-like surface layer matter more.']],
 h3:[['Estimate the force on the lid of a pressure cooker.','Excess pressure ≈ 1 atm = 10⁵ Pa on a lid of radius 11 cm (area ≈ 0.04 m²): about 4000 N, the weight of 400 kg.'],
     ['At what temperature does water boil on Everest?','Pressure there is about a third of an atmosphere, so water boils at about 70 °C.']],
 h4:[['How could you actually cool the room?','Put the hot side outside the room, which is exactly what an air conditioner does.'],
     ['A fridge draws 100 W and removes 300 W of heat from inside. How much heat comes out of the back?','Energy conservation: 300 + 100 = 400 W.']],
 h5:[['Why can people survive a sauna at 90 °C?','Dry air delivers heat slowly, and sweating cools the skin by evaporation. Throwing water on the coals raises the humidity and it suddenly feels much hotter.'],
     ['How do people walk across hot embers without burning?','Embers and ash are poor conductors with low heat capacity, and each foot touches only briefly, so little heat is delivered.']],
 h6:[['Why does a lid keep soup hot for so much longer?','It stops evaporation (the main loss) and convection of air across the surface.'],
     ['Why do you feel cold getting out of a pool on a windy day?','Wind carries away humid air, so water evaporates fast from your skin, taking latent heat with it.']],
 a1:[['Is the Moon moving away from us? Why?','Yes, about 3.8 cm per year. The Earth\'s tidal bulge runs ahead of the Moon and pulls it forwards, transferring angular momentum from Earth\'s spin to the Moon\'s orbit.'],
     ['Will the Earth ever become tidally locked to the Moon?','In principle, after tens of billions of years. The Sun will become a red giant long before then.']],
 a2:[['Estimate the mass of the Sun from the Earth\'s orbit.','GM = 4π²r³/T². With r = 1.5 × 10¹¹ m and T = 3.2 × 10⁷ s, GM ≈ 1.3 × 10²⁰, so M ≈ 2 × 10³⁰ kg.'],
     ['How would you measure G in a laboratory?','A Cavendish torsion balance: small masses on a rod hanging from a thin fibre are attracted by large masses. The tiny twist, calibrated by the oscillation period, gives the force.']],
 a3:[['Which has the bigger tidal effect, the Sun or the Moon?','Tidal force scales as M/d³. Moon: 7 × 10²² / (3.8 × 10⁸)³; Sun: 2 × 10³⁰ / (1.5 × 10¹¹)³. The Moon\'s effect is about 2.2 times the Sun\'s.'],
     ['Why isn\'t high tide exactly when the Moon is overhead?','The oceans cannot respond instantly: water has inertia, there is friction, and continents get in the way. Real tides lag the Moon by hours, and vary a lot from place to place.']],
 a4:[['If the Sun vanished, when would the Earth stop orbiting?','About 8 minutes later. Changes in gravity also travel at the speed of light.'],
     ['How was the speed of light first measured?','Rømer (1676) noticed that eclipses of Jupiter\'s moon Io came later when Jupiter was further away, and from the delay estimated c.']],
 a5:[['How small would the Sun have to be to become a black hole?','The Schwarzschild radius is 2GM/c² = 2 × 6.7 × 10⁻¹¹ × 2 × 10³⁰ / 9 × 10¹⁶ ≈ 3 km.'],
     ['What density is that?','2 × 10³⁰ kg in a sphere of radius 3 km gives about 2 × 10¹⁹ kg/m³, denser than an atomic nucleus.']],
 a6:[['Roughly how tall can a mountain be on Earth?','The rock at the base fails when ρgh exceeds its strength (~3 × 10⁸ Pa): h ≈ 3 × 10⁸ / (3000 × 10) ≈ 10 km. Everest is 8.8 km.'],
     ['Why is Mars\'s Olympus Mons so much taller (about 22 km)?','Gravity on Mars is about 0.38 g, so the same rock strength supports a mountain roughly 2.6 times taller.']],
 d1:[['How does a falling cat turn over without breaking angular-momentum conservation?','It changes shape: it twists its front and back halves in opposite directions with different moments of inertia, so the total angular momentum stays zero while the orientation changes.'],
     ['Why doesn\'t a spinning top fall over?','Gravity\'s torque changes the direction of the angular momentum instead of tipping the top. The axis slowly circles round: precession.']],
 d2:[['Why do bubbles keep forming at the same spots?','Nucleation sites: scratches and tiny pockets of trapped gas make it much easier for a bubble to start.'],
     ['Why can water heated in a microwave "explode" when disturbed?','In a smooth container with no nucleation sites it can superheat above 100 °C. A spoon or a jolt triggers sudden violent boiling.']],
 d3:[['If the wind blows rain at your back at speed w, how fast should you go?','At about speed w, so relative to you the rain falls straight down and none hits your front or back.'],
     ['Does your shape matter?','Yes. A small front area reduces the speed-independent part, and leaning forward can shield your front.']],
 d4:[['Design an experiment to tell the explanations apart.','Use cold water to rule out convection, use smoke or light paper strips to show the flow pattern, and measure the pressure inside and outside the curtain.'],
     ['Why do you feel pulled towards a fast train passing close by?','The train drags air along with it, and the moving air near it is at lower pressure, so the higher-pressure still air behind you pushes you towards the train.']]
};

/* ---------- more questions ---------- */
PHY.push(
{id:'n1',t:2,l:3,q:'What is the integral of e<sup>−x²</sup> from −∞ to ∞?',
 h:['There is no elementary antiderivative, so a trick is needed. Call the integral I and consider I².',
    'Write I² as a double integral over the whole plane and switch to polar coordinates, where dx dy = r dr dθ.'],
 a:'<p>I² = ∫∫ e<sup>−(x²+y²)</sup> dx dy = ∫₀<sup>2π</sup>∫₀<sup>∞</sup> e<sup>−r²</sup> r dr dθ = 2π × ½ = π.</p><p>So <b>I = √π</b>.</p><p>This Gaussian integral appears everywhere in physics: the normal distribution, the speeds of gas molecules, and the ground state of the quantum harmonic oscillator.</p>',
 f:[['What is the integral of x² e<sup>−x²</sup> over the same range?','By parts (or differentiating ∫e^(−ax²) = √(π/a) with respect to a): √π/2.'],
    ['What is the integral of e<sup>−x²</sup> from 0 to ∞?','By symmetry, half: √π/2.']]},
{id:'n2',t:2,l:2,q:'Two friends agree to meet at a café between 12:00 and 13:00. Each arrives at a random time and waits 15 minutes before leaving. What is the probability they meet?',
 h:['Draw a square: one person\'s arrival time on each axis.',
    'They meet if their arrival times differ by at most 15 minutes. Which region of the square is that?'],
 a:'<p>On the 60 × 60 square, they fail to meet in two corner triangles where |x − y| &gt; 15. Each triangle has legs of 45, so the total area is 45² = 2025 out of 3600.</p><p>P(meet) = 1 − (45/60)² = 1 − 9/16 = <b>7/16</b>.</p>',
 f:[['What if each waits 20 minutes?','1 − (40/60)² = 5/9.'],
    ['What if one waits 15 minutes and the other 30?','The two corner triangles now differ: ½(45/60)² + ½(30/60)² = 0.28 + 0.125, so P(meet) = 19/32 ≈ 0.59.']]},
{id:'n3',t:2,l:2,q:'How many times a day do the hands of a clock make a right angle?',
 h:['Think about how often the minute hand laps the hour hand.',
    'Relative to the hour hand, the minute hand makes 11 full turns in 12 hours. How many right angles per relative turn?'],
 a:'<p>The minute hand gains one full turn on the hour hand 11 times every 12 hours. In each relative turn the angle passes 90° twice (at 90° and 270°).</p><p>So 22 times in 12 hours, and <b>44 times a day</b>.</p>',
 f:[['How many times a day do the hands overlap?','Once per relative turn: 22 times a day.'],
    ['At what time after 12:00 do they first overlap?','After 12/11 hours, about 1:05:27.']]},
{id:'n4',t:1,l:2,q:'A rope fits snugly around the Earth\'s equator. You add 1 m to its length and hold it evenly above the ground all the way round. How high is it? Could a cat crawl under it?',
 h:['How is the circumference related to the radius?',
    'If C = 2πr, how much does r change when C increases by 1 m?'],
 a:'<p>Δr = ΔC / 2π = 1/(2π) ≈ <b>16 cm</b>. A cat could crawl under.</p><p>The surprise is that the answer does not depend on the size of the Earth at all: the same extra metre around a football gives the same 16 cm gap.</p>',
 f:[['Instead, you pull the rope up at a single point until it is taut. Roughly how high does that point go?','The rope leaves the Earth along two tangents. Extra length 2R(tanθ − θ) ≈ 2Rθ³/3 = 1 m gives θ ≈ 6 × 10⁻³ rad, and height ≈ Rθ²/2 ≈ 120 m. Astonishingly high!'],
    ['Why is the second answer so different?','The extra length grows only as θ³ while the height grows as θ², so a tiny bit of slack allows a surprisingly large lift at one point.']]},
{id:'n5',t:6,l:3,q:'If the Earth suddenly stopped in its orbit, how long would it take to fall into the Sun?',
 h:['A straight-line fall is the limit of a very thin ellipse. Kepler\'s third law still applies.',
    'The thin ellipse has a semi-major axis of half the Earth–Sun distance. The fall is half of one orbit of that ellipse.'],
 a:'<p>A radial fall is a degenerate ellipse with semi-major axis a = r/2. By Kepler\'s third law, its period is T × (1/2)<sup>3/2</sup> = T/(2√2).</p><p>The fall takes half of that: T/(4√2) = 365/5.66 ≈ <b>65 days</b>.</p>',
 f:[['How long would the Moon take to fall to the Earth?','Same ratio: 27.3 days / 5.66 ≈ 4.8 days.'],
    ['How fast would the Earth be going when it hit the Sun?','Roughly the escape speed at the Sun\'s surface, about 620 km/s.']]},
{id:'n6',t:3,l:1,q:'Why do you seem to hear the sea when you hold a shell to your ear?',
 h:['Is the sound still there if you are in a very quiet room?',
    'The cavity inside the shell has natural frequencies, like an organ pipe.'],
 a:'<p>The shell\'s cavity <b>resonates</b>: it amplifies the background noise around you at its own natural frequencies, giving a whooshing, sea-like sound. In a soundproof room you hear almost nothing.</p><p>A cupped hand or a mug does the same thing.</p>',
 f:[['Why does a bigger shell give a lower-pitched sound?','A larger cavity has longer resonant wavelengths, so lower frequencies.'],
    ['Why does the pitch rise as you fill a bottle with water?','The air column above the water gets shorter, so its resonant frequency rises.']]},
{id:'n7',t:4,l:2,q:'Why does a compass point north? What would it do at the North Pole?',
 h:['The Earth has a magnetic field roughly like a bar magnet. Which way does a compass\'s "north" end point?',
    'Near the magnetic poles, the field lines point steeply into or out of the ground.'],
 a:'<p>The needle lines up with the Earth\'s magnetic field. Its north pole is attracted to the Earth\'s magnetic pole in the Arctic, which is therefore magnetically a <b>south</b> pole.</p><p>At the magnetic pole the field is almost vertical: the needle tries to point straight down, so a horizontal compass swings aimlessly. (The magnetic pole is also hundreds of kilometres from the geographic pole and drifts over time.)</p>',
 f:[['How does the Earth produce its field?','A geodynamo: convection in the liquid iron outer core, twisted by the Earth\'s rotation, generates electric currents and so a magnetic field.'],
    ['Why can\'t it just be a giant permanent magnet?','The core is far hotter than iron\'s Curie temperature (about 770 °C), above which permanent magnetism disappears.']]},
{id:'n8',t:0,l:1,q:'Estimate how long a full kettle takes to boil.',
 h:['How much water, and how much does its temperature rise?',
    'Use Q = mcΔT with c = 4200 J/kg K, and the kettle\'s power rating (around 3 kW).'],
 a:'<p>1.5 kg of water from 20 °C to 100 °C: Q = 1.5 × 4200 × 80 ≈ 5 × 10⁵ J.</p><p>At 3 kW, t ≈ 5 × 10⁵ / 3000 ≈ 170 s, <b>about 3 minutes</b>. In reality a bit longer, because some heat warms the kettle and the air.</p>',
 f:[['How much does that cost?','5 × 10⁵ J ≈ 0.14 kWh, so at about 25p per kWh, roughly 3–4p.'],
    ['How much longer would it take to boil it all away?','Latent heat 2.26 MJ/kg × 1.5 kg ≈ 3.4 MJ, about seven times longer again (~19 minutes).']]},
{id:'n9',t:6,l:2,q:'If the universe is huge and full of stars, why is the night sky dark?',
 h:['In an infinite, unchanging universe, every line of sight would eventually end on a star. Which assumption must fail?',
    'Think about the age of the universe and its expansion.'],
 a:'<p>This is <b>Olbers\' paradox</b>. In an infinite, eternal, static universe the whole sky would be as bright as the Sun\'s surface.</p><p>The resolution: the universe has a finite age (about 13.8 billion years), so we only see light from a finite volume, and stars have finite lifetimes. Expansion also redshifts distant light, weakening it.</p>',
 f:[['Why do stars twinkle but planets mostly don\'t?','Stars are point sources, so atmospheric turbulence shifts their light around. Planets show a small disc, so the fluctuations average out.'],
    ['What does the redshift of distant galaxies tell us?','They are moving away, faster the further they are (Hubble\'s law), which is the evidence that the universe is expanding.']]},
{id:'n10',t:7,l:3,q:'When you stir a cup of tea and stop, the tea leaves gather in the middle of the bottom rather than flying outwards. Why?',
 h:['In the spinning tea, pressure increases outwards to provide the centripetal force. Is that the same at every depth?',
    'Near the bottom, friction slows the water. Does the same pressure gradient still balance it there?'],
 a:'<p>The rotating tea needs an inward force, supplied by a pressure that rises towards the rim (the surface dips in the middle). Near the bottom, friction slows the water, so it needs less centripetal force, but the same pressure gradient still acts.</p><p>The excess inward push drives a flow <b>inward along the bottom</b>, up the middle and out at the top. The leaves are swept to the centre and are too heavy to rise, so they pile up there. Einstein explained this in 1926.</p>',
 f:[['Why do rivers erode the outside of bends?','The same secondary flow: at a bend, surface water moves outwards and bottom water inwards, carrying sediment to the inside bank and scouring the outside.'],
    ['What shape is the surface of the spinning tea?','A paraboloid: z = ω²r²/(2g).']]},
{id:'n11',t:1,l:1,q:'Estimate the fastest speed a car can drive round a roundabout without skidding.',
 h:['What provides the centripetal force?',
    'Friction: μmg ≥ mv²/r. Estimate μ for tyres on dry tarmac and a sensible radius.'],
 a:'<p>Friction provides the centripetal force: v<sub>max</sub> = √(μgr). With μ ≈ 0.8 and r ≈ 15 m, v ≈ √(0.8 × 9.8 × 15) ≈ 11 m/s, <b>about 40 km/h (25 mph)</b>.</p><p>The mass cancels, so a lorry and a car have the same limit (in this simple model).</p>',
 f:[['Why are bends on fast roads and racetracks banked?','Part of the normal force then points towards the centre, so less (or no) friction is needed.'],
    ['How does the limit change on ice?','μ drops to about 0.1, so v drops by √8 ≈ 3: about 4 m/s.']]},
{id:'n12',t:0,l:1,q:'How much power does your body use, on average? Compare it with a light bulb.',
 h:['Start from the food energy you eat per day.',
    'About 2500 kcal, and 1 kcal ≈ 4200 J. How many seconds are in a day?'],
 a:'<p>2500 kcal × 4200 J ≈ 10⁷ J per day. Divided by 86 400 s, that is <b>about 120 W</b>: similar to an old-fashioned light bulb.</p><p>That is why a crowded room warms up quickly.</p>',
 f:[['How much of that does your brain use?','About 20%, or roughly 20 W.'],
    ['How many stairs could the energy in one biscuit (~200 kJ) lift you?','One stair raises 70 kg by 0.17 m: about 120 J. So ~1700 stairs at 100% efficiency, but muscles are ~25% efficient, so about 400.']]}
);
PHY.push(
{id:'p1',t:0,l:2,q:'Roughly how many photons per second does a 100 W light bulb give out?',
 h:['What is the energy of one visible photon? Use E = hc/λ with λ ≈ 500 nm, or remember it is a couple of electronvolts.',
    'Divide the power by the energy per photon. Then think: is all 100 W visible light?'],
 a:'<p>A 500 nm photon has E = hc/λ ≈ 4 × 10⁻¹⁹ J (about 2.5 eV).</p><p>If all 100 W were visible: 100 / 4 × 10⁻¹⁹ ≈ <b>3 × 10²⁰ photons per second</b>.</p><p>An old filament bulb turns only about 5% into visible light, so about 10¹⁹ visible photons per second, with the rest as infrared.</p>',
 f:[['How many of those enter your eye from 10 m away?','Pupil area ≈ 2 × 10⁻⁵ m²; sphere area at 10 m ≈ 1300 m². Fraction ≈ 1.5 × 10⁻⁸, so about 10¹¹–10¹² photons per second.'],
    ['Why don\'t you notice individual photons?','The numbers are enormous. Fully dark-adapted rod cells can respond to single photons, but you need several arriving together to consciously see a flash.']]},
{id:'p2',t:1,l:1,q:'You stand on bathroom scales in a lift that accelerates upwards at 2 m/s². Your mass is 60 kg. What do the scales read?',
 h:['Scales measure the normal contact force, not your mass directly.',
    'Apply Newton\'s second law: N − mg = ma.'],
 a:'<p>N = m(g + a) = 60 × (9.8 + 2) ≈ 710 N. Scales calibrated in kilograms divide by g, so they read about <b>72 kg</b>.</p><p>Accelerating downwards, they would read less. When moving at constant speed, they read your true 60 kg.</p>',
 f:[['What do the scales read if the cable snaps?','Zero: you and the scales fall together in free fall.'],
    ['Why do you feel heavier at the bottom of a swing?','You are accelerating upwards towards the centre of the circle, so the seat must push with N = mg + mv²/r.']]},
{id:'p3',t:3,l:1,q:'Why do you hear thunder after you see the lightning? How could you use that?',
 h:['Compare the speeds of light and sound.',
    'Sound travels at about 340 m/s. How far does it go in 3 seconds?'],
 a:'<p>Light arrives almost instantly; sound travels at about 340 m/s. The delay tells you the distance: about <b>3 seconds per kilometre</b> (or 5 seconds per mile).</p><p>If the gap is shrinking, the storm is coming towards you.</p>',
 f:[['Why does thunder rumble rather than make a single bang?','The bolt is kilometres long, so sound from different parts arrives at different times, plus echoes off the ground and clouds.'],
    ['Why can you sometimes see lightning but hear no thunder at all?','Beyond about 15–25 km, sound is refracted upwards (air is cooler higher up, so sound bends away from the ground) and absorbed.']]},
{id:'p4',t:4,l:1,q:'Why does a TV remote still work when you point it at the wall instead of the TV?',
 h:['What kind of signal does the remote send?',
    'What happens to infrared light when it hits a matt wall?'],
 a:'<p>The remote flashes an <b>infrared</b> LED in a coded pattern. A matt wall reflects infrared diffusely in all directions, like visible light, so enough reaches the TV\'s sensor.</p>',
 f:[['How can you check whether a remote\'s LED is working?','Look at it through a phone camera: the sensor detects near-infrared, so the LED appears to flash.'],
    ['Why can\'t our eyes see infrared?','Infrared photons have too little energy to trigger the light-sensitive pigments in the retina.']]},
{id:'p5',t:5,l:2,q:'Why does a bicycle pump get hot when you pump up a tyre?',
 h:['You do work on the air when you push the handle. Where does that energy go?',
    'A quick compression does not leave time for heat to escape. This is called an adiabatic change.'],
 a:'<p>Compressing the gas quickly does work on it, raising its internal energy and therefore its temperature, because there is little time for heat to escape (an <b>adiabatic</b> compression). Friction between the piston and barrel adds some heat too.</p><p>For air (γ = 1.4) compressed quickly from 1 to 3 atmospheres: T₂ = T₁ × 3<sup>0.29</sup> ≈ 293 × 1.37 ≈ 400 K, a rise of about 100 °C in the air itself. The metal barrel warms more gently.</p>',
 f:[['Why does an aerosol can get cold when you spray it?','The gas expands and the liquid propellant evaporates, both of which take energy from the can.'],
    ['How does a fridge use the same idea?','Refrigerant is compressed (heating it, so it releases heat outside) and then expanded (cooling it, so it absorbs heat inside).']]},
{id:'p6',t:6,l:2,q:'How do we know what the Sun is made of, without going there?',
 h:['When light passes through a cooler gas, certain wavelengths are absorbed.',
    'Each element has a unique pattern of spectral lines.'],
 a:'<p><b>Spectroscopy</b>. Sunlight split into a spectrum shows dark absorption lines (Fraunhofer lines), where atoms in the Sun\'s cooler outer layers absorb specific wavelengths. Each element\'s pattern acts as a fingerprint.</p><p>Matching the lines identifies the elements; their strengths, with atomic physics, give the amounts. Cecilia Payne showed in 1925 that the Sun is mostly hydrogen and helium.</p>',
 f:[['How was helium discovered?','As an unknown yellow spectral line in sunlight during the 1868 eclipse, decades before it was found on Earth. It is named after Helios, the Sun.'],
    ['How can spectra tell us that a star is moving away from us?','The whole pattern of lines is shifted to longer wavelengths (redshift), by an amount that gives the speed.']]},
{id:'p7',t:2,l:1,q:'Is 0.999… (recurring forever) equal to 1?',
 h:['Call it x. What is 10x?',
    'Subtract x from 10x.'],
 a:'<p>Yes. Let x = 0.999… Then 10x = 9.999…, so 10x − x = 9 and x = <b>1</b> exactly.</p><p>Another view: if they were different numbers, there would have to be a number between them, and there is none. It is also the geometric series 9/10 + 9/100 + … = (9/10)/(1 − 1/10) = 1.</p>',
 f:[['Write 0.272727… as a fraction.','100x − x = 27, so x = 27/99 = 3/11.'],
    ['What is 1/2 + 1/4 + 1/8 + …?','1: a geometric series with a = ½ and r = ½.']]},
{id:'p8',t:7,l:2,q:'How does a drinking straw work? Could you drink through a 15 m straw?',
 h:['When you suck, what are you actually doing to the air in the straw?',
    'What pushes the liquid up, and what is the most it can push?'],
 a:'<p>You lower the pressure inside the straw; atmospheric pressure on the drink\'s surface pushes the liquid up. You don\'t pull it.</p><p>Even with a perfect vacuum, atmospheric pressure can only support a column of height h = p/(ρg) = 10⁵/(1000 × 9.8) ≈ <b>10 m</b> of water. A 15 m straw cannot work, however hard you suck.</p>',
 f:[['Would a straw work on the Moon (inside a pressurised base)?','Inside a pressurised base, yes. Outside, with no air pressure, nothing would push the drink up (and it would boil anyway).'],
    ['How do tall trees lift water more than 10 m, then?','Water is pulled up as a continuous column under tension: evaporation from the leaves draws water up, and cohesion between water molecules stops the column breaking.']]}
);
PHY.push(
{id:'q1',t:7,l:2,q:'Why is it much easier to balance a broom upright on your hand than a pencil?',
 h:['Both are inverted pendulums: if they tilt slightly, they fall further. What sets how quickly the tilt grows?',
    'Use dimensional analysis: the only time scale from length L and g is √(L/g). Compare that with your reaction time.'],
 a:'<p>An upright stick that tilts by a small angle θ falls with θ growing roughly as e<sup>t/τ</sup>, where τ ~ √(L/g). For a rod pivoted at its end, τ = √(2L/3g).</p><p>Pencil (L ≈ 0.15 m): τ ≈ 0.1 s. Broom (L ≈ 1.5 m): τ ≈ 0.3 s. Human reactions take about 0.2 s, so you can correct a broom in time but not a pencil. <b>Longer objects fall over more slowly.</b></p>',
 f:[['Why is a broom easier to balance with the heavy brush at the top?','Raising the centre of mass increases the effective pendulum length (I/md), so it topples even more slowly.'],
    ['Released 1° from vertical, roughly how long does a pencil take to fall over?','θ ≈ θ₀ cosh(t/τ). Growing from 0.017 rad to about 1 rad needs cosh ≈ 60, so t ≈ 4.8τ ≈ 0.5 s.']]},
{id:'q2',t:4,l:2,q:'Why does your hair stand on end when you touch a Van de Graaff generator?',
 h:['When you touch the dome, charge spreads over your body, including every hair.',
    'What do like charges do to each other?'],
 a:'<p>Charge flows from the dome onto you and spreads over your surface. Every hair gets charge of the <b>same sign</b>, so the hairs repel each other and your head, and spread out as far apart as possible.</p><p>It only works if you stand on an insulator, so the charge cannot escape to the ground. Fine, dry hair works best.</p>',
 f:[['Why must you stand on an insulating mat?','Otherwise the charge simply flows through you to earth and never builds up.'],
    ['Why is the dome large and smooth? Roughly what voltage can a 30 cm diameter dome reach?','Sharp points concentrate the field and leak charge (corona discharge). For a sphere E = V/r, and air breaks down at about 3 MV/m, so V ≈ 3 × 10⁶ × 0.15 ≈ 450 kV.']]},
{id:'q3',t:5,l:1,q:'Why can you see your breath on a cold day but not on a warm one?',
 h:['Your breath is warm and saturated with water vapour. What happens to it when it mixes with cold air?',
    'Cold air can hold much less water vapour than warm air.'],
 a:'<p>Exhaled air is at about 35 °C and nearly saturated with water vapour. Mixing with cold air cools it below its <b>dew point</b>, so the vapour condenses into a cloud of tiny droplets: you see a little cloud.</p><p>On a warm day the mixture never cools enough to become saturated, so the vapour stays invisible.</p>',
 f:[['Why do aircraft leave contrails?','Engine exhaust contains water vapour. At altitude the air is around −40 °C, so the vapour quickly condenses and freezes into ice crystals.'],
    ['Why does a cold drink "sweat" in summer?','Air touching the cold glass is cooled below its dew point, so water condenses on the surface.']]},
{id:'q4',t:3,l:2,q:'Why does your voice sound higher after breathing in helium?',
 h:['How does the speed of sound depend on the gas it travels through?',
    'Your vocal tract is a resonator: its resonant frequencies depend on the wave speed. Does the vibration rate of your vocal cords change much?'],
 a:'<p>Sound travels about three times faster in helium, because its atoms are much lighter (v = √(γRT/M)). The resonances of your throat and mouth (the "formants" that give your voice its character) shift to much higher frequencies.</p><p>Surprisingly, your vocal cords vibrate at nearly the same rate, so the fundamental pitch barely changes. What changes is the <b>timbre</b>, which makes your voice sound squeaky and higher.</p>',
 f:[['By roughly what factor is sound faster in helium than in air?','√((γ_He/γ_air)(M_air/M_He)) = √((1.67/1.4)(29/4)) ≈ 2.9.'],
    ['What would breathing sulfur hexafluoride (a very heavy gas) do?','Sound is slower in it, so the resonances shift down and your voice sounds much deeper. (Like helium, it is dangerous to breathe, because it displaces oxygen.)']]}
);
PHY.forEach(q=>{q.f=q.f||PHY_FOLLOW[q.id]||[];});

const PHY_SOURCES=[
 ['Oxford Physics mock interview pack (official)','https://www.physics.ox.ac.uk/system/files/file_attachments/mock%20interview%20pack%20211122.pdf'],
 ['University of Oxford: interviews and sample questions','https://www.ox.ac.uk/interviews'],
 ['Oxford PAT past papers (useful for interview practice)','https://www.physics.ox.ac.uk/study/undergraduates/how-apply/physics-aptitude-test/pat-past-papers']
];

/* ---------- state ---------- */
const RATE={got:['Got it','ok'],hint:['Needed hints','sk'],stuck:['Stuck','no']};
let phyFilter=-1, phyTick=null;
const phyRatings=()=>loadJSON('phy-ratings',{});
function phyPool(){return PHY.filter(q=>phyFilter<0||q.t===phyFilter);}
function phyNext(exclude){
  const R=phyRatings(),pool=phyPool().filter(q=>q.id!==exclude);
  if(!pool.length)return phyPool()[0];
  const rank=q=>{const r=R[q.id];return !r?0:r.r==='stuck'?1:r.r==='hint'?2:3;};
  const best=Math.min(...pool.map(rank));
  let cand=pool.filter(q=>rank(q)===best);
  if(best===3){const oldest=Math.min(...cand.map(q=>R[q.id].t));cand=cand.filter(q=>R[q.id].t===oldest);}
  return pick(cand);
}
const lvl=l=>'●'.repeat(l)+'○'.repeat(3-l);

function phyHome(){
  leave();
  const R=phyRatings(),pool=phyPool();
  const cnt={got:0,hint:0,stuck:0};pool.forEach(q=>{if(R[q.id])cnt[R[q.id].r]++;});
  const unseen=pool.length-cnt.got-cnt.hint-cnt.stuck;
  app.innerHTML=
  '<div class="stack">'+
  '<div class="stack" style="gap:8px"><p class="eyebrow">Practice · not scored</p><h1>Physics interview</h1>'+
  '<p class="muted">Open-ended questions in the style of Oxford physics interviews. Think aloud, work on paper, use hints the way an interviewer would nudge you, then compare with the worked answer.</p></div>'+
  '<div class="chips">'+['All'].concat(PHY_TOPICS).map((n,i)=>'<button class="chip'+(phyFilter===i-1?' on':'')+'" data-t="'+(i-1)+'">'+n+'</button>').join('')+'</div>'+
  '<div class="facts four"><div class="fact"><b>'+unseen+'</b><span>new</span></div><div class="fact"><b class="no">'+cnt.stuck+'</b><span>stuck</span></div><div class="fact"><b class="sk">'+cnt.hint+'</b><span>hints</span></div><div class="fact"><b class="ok">'+cnt.got+'</b><span>got it</span></div></div>'+
  '<button class="btn" id="pnext">Next question</button>'+
  '<div class="card"><h2 style="margin-bottom:6px">All questions</h2>'+
   pool.map(q=>{const r=R[q.id];return '<button class="qrow" data-id="'+q.id+'"><span class="mark '+(r?RATE[r.r][1]:'sk')+'">'+(r?(r.r==='got'?'✓':r.r==='hint'?'~':'✗'):'·')+'</span><span class="qt">'+q.q+'</span><span class="lv">'+lvl(q.l)+'</span></button>';}).join('')+'</div>'+
  '<div class="card stack"><h2>Official resources</h2><ul class="src">'+PHY_SOURCES.map(s=>'<li><a href="'+s[1]+'" target="_blank" rel="noopener">'+s[0]+'</a></li>').join('')+'</ul>'+
   '<p class="note">Questions here are written for practice in the style tutors use; they are not official Oxford questions. Interviews reward clear reasoning and responding to hints far more than knowing the answer already.</p></div>'+
  '<button class="btn ghost" id="phome">Home</button>'+
  '</div>';
  app.querySelectorAll('.chip').forEach(b=>b.onclick=()=>{phyFilter=+b.dataset.t;phyHome();});
  app.querySelectorAll('.qrow').forEach(b=>b.onclick=()=>phyQuestion(PHY.find(q=>q.id===b.dataset.id)));
  document.getElementById('pnext').onclick=()=>phyQuestion(phyNext());
  document.getElementById('phome').onclick=home;
  window.scrollTo(0,0);
}

function phyQuestion(q){
  clearInterval(phyTick);setBack(phyHome);
  let shown=0,end=0;
  app.innerHTML=
  '<div class="stack">'+
  '<div class="top"><span class="eyebrow">'+PHY_TOPICS[q.t]+' · '+lvl(q.l)+'</span><span class="timer" id="ptimer"></span></div>'+
  '<div class="card stack"><p class="prompt">'+q.q+'</p>'+
   '<div id="hints" class="stack" style="gap:10px"></div>'+
   '<div id="ans"></div></div>'+
  '<div class="row2"><button class="btn ghost" id="ptime">Start 5 min timer</button><button class="btn ghost" id="phint">Hint 1 of '+q.h.length+'</button></div>'+
  '<button class="btn" id="pans">Show worked answer</button>'+
  '<div id="rate"></div>'+
  '<button class="btn ghost" id="pback">Back to questions</button>'+
  '</div>';
  const $=id=>document.getElementById(id);
  $('ptime').onclick=()=>{
    if(end){clearInterval(phyTick);end=0;$('ptimer').textContent='';$('ptime').textContent='Start 5 min timer';return;}
    end=Date.now()+300000;$('ptime').textContent='Stop timer';
    const up=()=>{const left=(end-Date.now())/1000,el=$('ptimer');if(!el){clearInterval(phyTick);return;}
      el.textContent=fmt(left);el.classList.toggle('low',left<=60);if(left<=0){clearInterval(phyTick);el.textContent='Time';}};
    up();phyTick=setInterval(up,250);
  };
  $('phint').onclick=()=>{
    if(shown>=q.h.length)return;
    $('hints').insertAdjacentHTML('beforeend','<div class="hint"><b>Hint '+(shown+1)+'</b><p>'+q.h[shown]+'</p></div>');
    shown++;
    $('phint').textContent=shown<q.h.length?'Hint '+(shown+1)+' of '+q.h.length:'No more hints';
    $('phint').disabled=shown>=q.h.length;
  };
  $('pans').onclick=()=>{
    $('ans').innerHTML='<div class="answer"><b>Worked answer</b>'+q.a+'</div>'+
      (q.f.length?'<div class="stack" style="gap:8px;margin-top:14px"><b>A tutor might then ask</b>'+
        q.f.map(f=>'<details class="fu"><summary>'+f[0]+'</summary><p>'+f[1]+'</p></details>').join('')+'</div>':'');
    $('pans').style.display='none';
    $('rate').innerHTML='<div class="card stack"><p class="prompt" style="font-size:1rem">How did you do?</p><div class="row3">'+
      Object.entries(RATE).map(([k,v])=>'<button class="btn ghost rate '+v[1]+'" data-r="'+k+'">'+v[0]+'</button>').join('')+'</div></div>';
    $('rate').querySelectorAll('.rate').forEach(b=>b.onclick=()=>{
      const R=phyRatings();R[q.id]={r:b.dataset.r,t:Date.now()};saveJSON('phy-ratings',R);
      phyQuestion(phyNext(q.id));
    });
    $('ans').scrollIntoView({behavior:'smooth',block:'start'});
  };
  $('pback').onclick=phyHome;
  window.scrollTo(0,0);
}
