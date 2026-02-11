/**
 * Quiz Data - All questions and answers stored here
 * Structure: quizData.round1, quizData.round2, quizData.rapidFire
 */

const quizData = {
    // Round 1: General Subjective Round
    round1: {
        physics: [
            { q: "What is Newton's First Law of Motion?", a: "An object at rest stays at rest, and an object in motion stays in motion with the same speed and direction unless acted upon by an unbalanced force." },
            { q: "Define acceleration.", a: "Acceleration is the rate of change of velocity with respect to time." },
            { q: "What is the SI unit of force?", a: "Newton (N)" },
            { q: "State Ohm's Law.", a: "The current through a conductor is directly proportional to the voltage across it, provided temperature remains constant. V = IR" },
            { q: "What is the speed of light in vacuum?", a: "Approximately 3 × 10^8 meters per second (299,792,458 m/s)" },
            { q: "Define kinetic energy.", a: "Kinetic energy is the energy possessed by an object due to its motion. KE = ½mv²" },
            { q: "What is the principle of conservation of energy?", a: "Energy cannot be created or destroyed, only transformed from one form to another." },
            { q: "What is the difference between mass and weight?", a: "Mass is the amount of matter in an object (constant), while weight is the force of gravity on that mass (varies with location)." },
            { q: "Define refraction of light.", a: "Refraction is the bending of light as it passes from one medium to another with different optical densities." },
            { q: "What is the unit of electric current?", a: "Ampere (A)" },
            { q: "State Archimedes' Principle.", a: "When a body is partially or fully immersed in a fluid, it experiences an upward buoyant force equal to the weight of the fluid displaced." },
            { q: "What is terminal velocity?", a: "The constant speed that a freely falling object eventually reaches when the resistance of the medium equals the driving force." },
            { q: "Define wavelength.", a: "Wavelength is the distance between two consecutive crests or troughs of a wave." },
            { q: "What is the first law of thermodynamics?", a: "The change in internal energy of a system equals the heat added to the system minus the work done by the system." },
            { q: "What is inertia?", a: "Inertia is the resistance of any physical object to any change in its velocity, including changes to speed or direction." },
            { q: "Define electric potential difference.", a: "Electric potential difference is the work done per unit charge to move a charge between two points in an electric field." },
            { q: "What is the Doppler effect?", a: "The change in frequency or wavelength of a wave in relation to an observer moving relative to the wave source." },
            { q: "State Coulomb's Law.", a: "The electrostatic force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them." },
            { q: "What is the photoelectric effect?", a: "The emission of electrons when electromagnetic radiation, such as light, hits a material." },
            { q: "Define power in physics.", a: "Power is the rate at which work is done or energy is transferred. P = W/t, measured in watts." }
        ],
        chemistry: [
            { q: "What is the chemical formula of water?", a: "H₂O" },
            { q: "Define an acid.", a: "An acid is a substance that donates protons (H⁺ ions) or accepts electrons." },
            { q: "What is the atomic number of carbon?", a: "6" },
            { q: "State the periodic law.", a: "The properties of elements are periodic functions of their atomic numbers." },
            { q: "What is Avogadro's number?", a: "6.022 × 10²³ (the number of particles in one mole of a substance)" },
            { q: "Define oxidation.", a: "Oxidation is the loss of electrons or an increase in oxidation state." },
            { q: "What is the pH of pure water at 25°C?", a: "7 (neutral)" },
            { q: "Name the three states of matter.", a: "Solid, liquid, and gas" },
            { q: "What is a covalent bond?", a: "A chemical bond formed by the sharing of electron pairs between atoms." },
            { q: "Define catalyst.", a: "A substance that increases the rate of a chemical reaction without being consumed in the process." },
            { q: "What is the main gas in Earth's atmosphere?", a: "Nitrogen (approximately 78%)" },
            { q: "What is the chemical formula of table salt?", a: "NaCl (Sodium Chloride)" },
            { q: "Define isotopes.", a: "Atoms of the same element with the same number of protons but different numbers of neutrons." },
            { q: "What is the valency of oxygen?", a: "2" },
            { q: "Name the process of converting liquid to gas.", a: "Vaporization or boiling" },
            { q: "What is an exothermic reaction?", a: "A chemical reaction that releases heat energy to the surroundings." },
            { q: "Define molarity.", a: "Molarity is the number of moles of solute per liter of solution." },
            { q: "What is the chemical symbol for gold?", a: "Au (from Latin 'aurum')" },
            { q: "What is electrolysis?", a: "A process that uses electric current to drive a non-spontaneous chemical reaction." },
            { q: "Define reduction in chemistry.", a: "Reduction is the gain of electrons or a decrease in oxidation state." }
        ],
        biology: [
            { q: "What is the powerhouse of the cell?", a: "Mitochondria" },
            { q: "Define photosynthesis.", a: "The process by which plants convert light energy into chemical energy (glucose) using carbon dioxide and water." },
            { q: "What is the basic unit of life?", a: "The cell" },
            { q: "Name the process of cell division in somatic cells.", a: "Mitosis" },
            { q: "What is DNA?", a: "Deoxyribonucleic acid - the molecule that carries genetic instructions for development and function." },
            { q: "Define osmosis.", a: "The movement of water molecules from an area of higher concentration to lower concentration through a semi-permeable membrane." },
            { q: "What is the largest organ in the human body?", a: "The skin" },
            { q: "Name the pigment responsible for green color in plants.", a: "Chlorophyll" },
            { q: "What is the function of red blood cells?", a: "To transport oxygen from the lungs to body tissues." },
            { q: "Define homeostasis.", a: "The maintenance of a stable internal environment despite external changes." },
            { q: "What is the human heart composed of?", a: "Cardiac muscle tissue" },
            { q: "Name the male and female reproductive cells.", a: "Sperm (male) and Egg/Ovum (female)" },
            { q: "What is the function of the nervous system?", a: "To coordinate and control body activities by transmitting signals." },
            { q: "Define evolution.", a: "The process of change in all forms of life over generations through natural selection." },
            { q: "What is the role of ribosomes?", a: "Protein synthesis" },
            { q: "Name the process by which plants lose water vapor.", a: "Transpiration" },
            { q: "What is a gene?", a: "A segment of DNA that codes for a specific protein or trait." },
            { q: "Define ecosystem.", a: "A community of living organisms interacting with their physical environment." },
            { q: "What is the function of the liver?", a: "Filtering blood, producing bile, storing vitamins, and metabolizing nutrients." },
            { q: "Name the structural and functional unit of the kidney.", a: "Nephron" }
        ],
        mathematics: [
            { q: "What is the value of π (pi) to two decimal places?", a: "3.14" },
            { q: "Define a prime number.", a: "A natural number greater than 1 that has exactly two factors: 1 and itself." },
            { q: "What is the Pythagorean theorem?", a: "In a right triangle, a² + b² = c², where c is the hypotenuse." },
            { q: "What is the sum of angles in a triangle?", a: "180 degrees" },
            { q: "Define the quadratic formula.", a: "x = (-b ± √(b² - 4ac)) / 2a" },
            { q: "What is the area of a circle?", a: "A = πr²" },
            { q: "Define logarithm.", a: "The logarithm of a number is the exponent to which a base must be raised to produce that number." },
            { q: "What is the factorial of 5?", a: "120 (5! = 5 × 4 × 3 × 2 × 1 = 120)" },
            { q: "State the formula for compound interest.", a: "A = P(1 + r/n)^(nt), where A is amount, P is principal, r is rate, n is compounding frequency, t is time." },
            { q: "What is the slope-intercept form of a line?", a: "y = mx + b, where m is slope and b is y-intercept." },
            { q: "Define derivative in calculus.", a: "The derivative represents the instantaneous rate of change of a function at a point." },
            { q: "What is the probability of rolling a 6 on a fair die?", a: "1/6 or approximately 0.167" },
            { q: "What is the formula for the volume of a sphere?", a: "V = (4/3)πr³" },
            { q: "Define an arithmetic sequence.", a: "A sequence where each term is obtained by adding a constant difference to the previous term." },
            { q: "What is the value of e (Euler's number) to two decimal places?", a: "2.72" },
            { q: "Define a function.", a: "A relation where each input (x) has exactly one output (y)." },
            { q: "What is the binomial theorem?", a: "A formula for expanding expressions of the form (a + b)ⁿ." },
            { q: "What is the sum of the first n natural numbers?", a: "n(n + 1)/2" },
            { q: "Define matrix.", a: "A rectangular array of numbers arranged in rows and columns." },
            { q: "What is the fundamental theorem of algebra?", a: "Every non-constant polynomial equation has at least one complex root." }
        ]
    },

    // Round 2: Visual / Image Round - supports images and videos
    round2: {
        visual: [
            { q: "Identify this famous scientist.", a: "Albert Einstein - Known for the theory of relativity and E=mc²", type: "image", src: "assets/round2/einstein.jpg" },
            { q: "Name this laboratory equipment.", a: "Microscope - Used to magnify small objects invisible to the naked eye", type: "image", src: "assets/round2/microscope.jpg" },
            { q: "Identify this periodic table element symbol.", a: "Fe - Iron (Ferrum in Latin)", type: "image", src: "assets/round2/iron-symbol.jpg" },
            { q: "What type of angle is shown here?", a: "Right angle - Exactly 90 degrees", type: "image", src: "assets/round2/right-angle.jpg" },
            { q: "Name this human organ.", a: "The Heart - The muscular organ that pumps blood throughout the body", type: "image", src: "assets/round2/heart.jpg" },
            { q: "Identify this geometric shape.", a: "Hexagon - A six-sided polygon", type: "image", src: "assets/round2/hexagon.jpg" },
            { q: "What is this chemical apparatus called?", a: "Bunsen Burner - Used for heating in laboratories", type: "image", src: "assets/round2/bunsen-burner.jpg" },
            { q: "Name this famous mathematical constant symbol.", a: "π (Pi) - The ratio of a circle's circumference to its diameter", type: "image", src: "assets/round2/pi-symbol.jpg" },
            { q: "Identify this cell structure.", a: "Nucleus - The control center of the cell containing DNA", type: "image", src: "assets/round2/nucleus.jpg" },
            { q: "What does this road sign represent?", a: "Speed Limit - Indicates maximum legal speed", type: "image", src: "assets/round2/speed-limit.jpg" },
            { q: "Watch this video and identify the process shown.", a: "Cell Division (Mitosis) - The process of cell replication", type: "video", src: "assets/round2/mitosis.mp4" },
            { q: "Identify this type of triangle.", a: "Equilateral Triangle - All three sides and angles are equal (60° each)", type: "image", src: "assets/round2/equilateral-triangle.jpg" },
            { q: "Watch this video and name the phenomenon.", a: "Photosynthesis - Plants converting light energy into chemical energy", type: "video", src: "assets/round2/photosynthesis.mp4" },
            { q: "Name this planet.", a: "Saturn - The sixth planet, famous for its prominent ring system", type: "image", src: "assets/round2/saturn.jpg" },
            { q: "Identify this mathematical graph type.", a: "Parabola - The graph of a quadratic function", type: "image", src: "assets/round2/parabola.jpg" },
            { q: "What laboratory glassware is this?", a: "Erlenmeyer Flask - Used for mixing and heating liquids", type: "image", src: "assets/round2/erlenmeyer-flask.jpg" },
            { q: "Name this part of a plant cell.", a: "Chloroplast - Contains chlorophyll for photosynthesis", type: "image", src: "assets/round2/chloroplast.jpg" },
            { q: "Identify this physical quantity symbol.", a: "Ω (Omega) - Represents electrical resistance in ohms", type: "image", src: "assets/round2/omega-symbol.jpg" },
            { q: "What is this scientific instrument?", a: "Telescope - Used to observe distant objects in space", type: "image", src: "assets/round2/telescope.jpg" },
            { q: "Watch this video and identify the chemical reaction type.", a: "Combustion Reaction - A rapid chemical reaction with oxygen producing heat and light", type: "video", src: "assets/round2/combustion.mp4" }
        ]
    },

    // Round 3: Rapid Fire Round - 9 sets of 5 questions each
    rapidFire: [
        // Set 1
        [
            { q: "What is 7 × 8?", a: "56" },
            { q: "What gas do plants absorb from the atmosphere?", a: "Carbon Dioxide (CO₂)" },
            { q: "Who wrote 'Romeo and Juliet'?", a: "William Shakespeare" },
            { q: "What is the capital of Nepal?", a: "Kathmandu" },
            { q: "How many sides does a pentagon have?", a: "5" }
        ],
        // Set 2
        [
            { q: "What is the square root of 144?", a: "12" },
            { q: "What is H₂O commonly known as?", a: "Water" },
            { q: "In which year did Nepal become a republic?", a: "2008" },
            { q: "What is the largest mammal?", a: "Blue Whale" },
            { q: "How many continents are there?", a: "7" }
        ],
        // Set 3
        [
            { q: "What is 15% of 200?", a: "30" },
            { q: "What planet is known as the Red Planet?", a: "Mars" },
            { q: "Who is known as the Father of the Nation in India?", a: "Mahatma Gandhi" },
            { q: "What is the chemical symbol for gold?", a: "Au" },
            { q: "How many bones are in the adult human body?", a: "206" }
        ],
        // Set 4
        [
            { q: "What is 9 × 12?", a: "108" },
            { q: "What is the hardest natural substance?", a: "Diamond" },
            { q: "Which is the longest river in the world?", a: "Nile River" },
            { q: "What does DNA stand for?", a: "Deoxyribonucleic Acid" },
            { q: "How many degrees are in a circle?", a: "360" }
        ],
        // Set 5
        [
            { q: "What is the cube of 4?", a: "64" },
            { q: "What is the speed of light?", a: "300,000 km/s (or 3 × 10⁸ m/s)" },
            { q: "Who painted the Mona Lisa?", a: "Leonardo da Vinci" },
            { q: "What is the smallest prime number?", a: "2" },
            { q: "How many colors are in a rainbow?", a: "7" }
        ],
        // Set 6
        [
            { q: "What is 25 × 4?", a: "100" },
            { q: "What gas do humans exhale?", a: "Carbon Dioxide" },
            { q: "What is the national game of Nepal?", a: "Volleyball" },
            { q: "What is the formula for area of rectangle?", a: "Length × Width" },
            { q: "How many teeth does an adult human have?", a: "32" }
        ],
        // Set 7
        [
            { q: "What is the value of π to 2 decimal places?", a: "3.14" },
            { q: "What is the powerhouse of the cell?", a: "Mitochondria" },
            { q: "Who discovered gravity?", a: "Isaac Newton" },
            { q: "What is the freezing point of water?", a: "0°C (32°F)" },
            { q: "How many players are in a cricket team?", a: "11" }
        ],
        // Set 8
        [
            { q: "What is 11 × 11?", a: "121" },
            { q: "What element has the chemical symbol O?", a: "Oxygen" },
            { q: "What is the tallest mountain in the world?", a: "Mount Everest" },
            { q: "What is the sum of angles in a triangle?", a: "180 degrees" },
            { q: "How many days are in a leap year?", a: "366" }
        ],
        // Set 9
        [
            { q: "What is the square of 15?", a: "225" },
            { q: "What is the largest planet in our solar system?", a: "Jupiter" },
            { q: "Who invented the telephone?", a: "Alexander Graham Bell" },
            { q: "What is the chemical formula of methane?", a: "CH₄" },
            { q: "How many hours are in 3 days?", a: "72" }
        ]
    ]
};

// Export for module systems (optional, for future compatibility)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = quizData;
}
