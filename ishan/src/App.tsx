import "./index.css";

const elements = [
  { number: 1, symbol: "H", name: "Hydrogen", group: 1, period: 1 },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  { number: 2, symbol: "He", name: "Helium", group: 18, period: 1 },

  { number: 3, symbol: "Li", name: "Lithium", group: 1, period: 2 },

  { number: 4, symbol: "Be", name: "Beryllium", group: 2, period: 2 },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  { number: 5, symbol: "B", name: "Boron", group: 13, period: 2 },
  { number: 6, symbol: "C", name: "Carbon", group: 14, period: 2 },
  { number: 7, symbol: "N", name: "Nitrogen", group: 15, period: 2 },
  { number: 8, symbol: "O", name: "Oxygen", group: 16, period: 2 },
  { number: 9, symbol: "F", name: "Fluorine", group: 17, period: 2 },
  { number: 10, symbol: "Ne", name: "Neon", group: 18, period: 2 },

  { number: 11, symbol: "Na", name: "Sodium", group: 1, period: 3 },
  { number: 12, symbol: "Mg", name: "Magnesium", group: 2, period: 3 },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  { number: 13, symbol: "Al", name: "Aluminium", group: 13, period: 3 },
  { number: 14, symbol: "Si", name: "Silicon", group: 14, period: 3 },
  { number: 15, symbol: "P", name: "Phosphorus", group: 15, period: 3 },
  { number: 16, symbol: "S", name: "Sulfur", group: 16, period: 3 },
  { number: 17, symbol: "Cl", name: "Chlorine", group: 17, period: 3 },
  { number: 18, symbol: "Ar", name: "Argon", group: 18, period: 3 },

  { number: 19, symbol: "K", name: "Potassium", group: 1, period: 4 },
  { number: 20, symbol: "Ca", name: "Calcium", group: 2, period: 4 },
  { number: 21, symbol: "Sc", name: "Scandium", group: 3, period: 4 },
  { number: 22, symbol: "Ti", name: "Titanium", group: 4, period: 4 },
  { number: 23, symbol: "V", name: "Vanadium", group: 5, period: 4 },
  { number: 24, symbol: "Cr", name: "Chromium", group: 6, period: 4 },
  { number: 25, symbol: "Mn", name: "Manganese", group: 7, period: 4 },
  { number: 26, symbol: "Fe", name: "Iron", group: 8, period: 4 },
  { number: 27, symbol: "Co", name: "Cobalt", group: 9, period: 4 },
  { number: 28, symbol: "Ni", name: "Nickel", group: 10, period: 4 },
  { number: 29, symbol: "Cu", name: "Copper", group: 11, period: 4 },
  { number: 30, symbol: "Zn", name: "Zinc", group: 12, period: 4 },
  { number: 31, symbol: "Ga", name: "Gallium", group: 13, period: 4 },
  { number: 32, symbol: "Ge", name: "Germanium", group: 14, period: 4 },
  { number: 33, symbol: "As", name: "Arsenic", group: 15, period: 4 },
  { number: 34, symbol: "Se", name: "Selenium", group: 16, period: 4 },
  { number: 35, symbol: "Br", name: "Bromine", group: 17, period: 4 },
  { number: 36, symbol: "Kr", name: "Krypton", group: 18, period: 4 },

  { number: 37, symbol: "Rb", name: "Rubidium", group: 1, period: 5 },
  { number: 38, symbol: "Sr", name: "Strontium", group: 2, period: 5 },
  { number: 39, symbol: "Y", name: "Yttrium", group: 3, period: 5 },
  { number: 40, symbol: "Zr", name: "Zirconium", group: 4, period: 5 },
  { number: 41, symbol: "Nb", name: "Niobium", group: 5, period: 5 },
  { number: 42, symbol: "Mo", name: "Molybdenum", group: 6, period: 5 },
  { number: 43, symbol: "Tc", name: "Technetium", group: 7, period: 5 },
  { number: 44, symbol: "Ru", name: "Ruthenium", group: 8, period: 5 },
  { number: 45, symbol: "Rh", name: "Rhodium", group: 9, period: 5 },
  { number: 46, symbol: "Pd", name: "Palladium", group: 10, period: 5 },
  { number: 47, symbol: "Ag", name: "Silver", group: 11, period: 5 },
  { number: 48, symbol: "Cd", name: "Cadmium", group: 12, period: 5 },
  { number: 49, symbol: "In", name: "Indium", group: 13, period: 5 },
  { number: 50, symbol: "Sn", name: "Tin", group: 14, period: 5 },
  { number: 51, symbol: "Sb", name: "Antimony", group: 15, period: 5 },
  { number: 52, symbol: "Te", name: "Tellurium", group: 16, period: 5 },
  { number: 53, symbol: "I", name: "Iodine", group: 17, period: 5 },
  { number: 54, symbol: "Xe", name: "Xenon", group: 18, period: 5 },

  { number: 55, symbol: "Cs", name: "Cesium", group: 1, period: 6 },
  { number: 56, symbol: "Ba", name: "Barium", group: 2, period: 6 },

  { number: 57, symbol: "La", name: "Lanthanum", group: 3, period: 6 },
  { number: 58, symbol: "Ce", name: "Cerium", group: 3, period: 6 },
  { number: 59, symbol: "Pr", name: "Praseodymium", group: 3, period: 6 },
  { number: 60, symbol: "Nd", name: "Neodymium", group: 3, period: 6 },
  { number: 61, symbol: "Pm", name: "Promethium", group: 3, period: 6 },
  { number: 62, symbol: "Sm", name: "Samarium", group: 3, period: 6 },
  { number: 63, symbol: "Eu", name: "Europium", group: 3, period: 6 },
  { number: 64, symbol: "Gd", name: "Gadolinium", group: 3, period: 6 },
  { number: 65, symbol: "Tb", name: "Terbium", group: 3, period: 6 },
  { number: 66, symbol: "Dy", name: "Dysprosium", group: 3, period: 6 },
  { number: 67, symbol: "Ho", name: "Holmium", group: 3, period: 6 },
  { number: 68, symbol: "Er", name: "Erbium", group: 3, period: 6 },
  { number: 69, symbol: "Tm", name: "Thulium", group: 3, period: 6 },
  { number: 70, symbol: "Yb", name: "Ytterbium", group: 3, period: 6 },
  { number: 71, symbol: "Lu", name: "Lutetium", group: 3, period: 6 },

  { number: 72, symbol: "Hf", name: "Hafnium", group: 4, period: 6 },
  { number: 73, symbol: "Ta", name: "Tantalum", group: 5, period: 6 },
  { number: 74, symbol: "W", name: "Tungsten", group: 6, period: 6 },
  { number: 75, symbol: "Re", name: "Rhenium", group: 7, period: 6 },
  { number: 76, symbol: "Os", name: "Osmium", group: 8, period: 6 },
  { number: 77, symbol: "Ir", name: "Iridium", group: 9, period: 6 },
  { number: 78, symbol: "Pt", name: "Platinum", group: 10, period: 6 },
  { number: 79, symbol: "Au", name: "Gold", group: 11, period: 6 },
  { number: 80, symbol: "Hg", name: "Mercury", group: 12, period: 6 },
  { number: 81, symbol: "Tl", name: "Thallium", group: 13, period: 6 },
  { number: 82, symbol: "Pb", name: "Lead", group: 14, period: 6 },
  { number: 83, symbol: "Bi", name: "Bismuth", group: 15, period: 6 },
  { number: 84, symbol: "Po", name: "Polonium", group: 16, period: 6 },
  { number: 85, symbol: "At", name: "Astatine", group: 17, period: 6 },
  { number: 86, symbol: "Rn", name: "Radon", group: 18, period: 6 },

  { number: 87, symbol: "Fr", name: "Francium", group: 1, period: 7 },
  { number: 88, symbol: "Ra", name: "Radium", group: 2, period: 7 },

  { number: 89, symbol: "Ac", name: "Actinium", group: 3, period: 7 },
  { number: 90, symbol: "Th", name: "Thorium", group: 3, period: 7 },
  { number: 91, symbol: "Pa", name: "Protactinium", group: 3, period: 7 },
  { number: 92, symbol: "U", name: "Uranium", group: 3, period: 7 },
  { number: 93, symbol: "Np", name: "Neptunium", group: 3, period: 7 },
  { number: 94, symbol: "Pu", name: "Plutonium", group: 3, period: 7 },
  { number: 95, symbol: "Am", name: "Americium", group: 3, period: 7 },
  { number: 96, symbol: "Cm", name: "Curium", group: 3, period: 7 },
  { number: 97, symbol: "Bk", name: "Berkelium", group: 3, period: 7 },
  { number: 98, symbol: "Cf", name: "Californium", group: 3, period: 7 },
  { number: 99, symbol: "Es", name: "Einsteinium", group: 3, period: 7 },
  { number: 100, symbol: "Fm", name: "Fermium", group: 3, period: 7 },
  { number: 101, symbol: "Md", name: "Mendelevium", group: 3, period: 7 },
  { number: 102, symbol: "No", name: "Nobelium", group: 3, period: 7 },
  { number: 103, symbol: "Lr", name: "Lawrencium", group: 3, period: 7 },

  { number: 104, symbol: "Rf", name: "Rutherfordium", group: 4, period: 7 },
  { number: 105, symbol: "Db", name: "Dubnium", group: 5, period: 7 },
  { number: 106, symbol: "Sg", name: "Seaborgium", group: 6, period: 7 },
  { number: 107, symbol: "Bh", name: "Bohrium", group: 7, period: 7 },
  { number: 108, symbol: "Hs", name: "Hassium", group: 8, period: 7 },
  { number: 109, symbol: "Mt", name: "Meitnerium", group: 9, period: 7 },
  { number: 110, symbol: "Ds", name: "Darmstadtium", group: 10, period: 7 },
  { number: 111, symbol: "Rg", name: "Roentgenium", group: 11, period: 7 },
  { number: 112, symbol: "Cn", name: "Copernicium", group: 12, period: 7 },
  { number: 113, symbol: "Nh", name: "Nihonium", group: 13, period: 7 },
  { number: 114, symbol: "Fl", name: "Flerovium", group: 14, period: 7 },
  { number: 115, symbol: "Mc", name: "Moscovium", group: 15, period: 7 },
  { number: 116, symbol: "Lv", name: "Livermorium", group: 16, period: 7 },
  { number: 117, symbol: "Ts", name: "Tennessine", group: 17, period: 7 },
  { number: 118, symbol: "Og", name: "Oganesson", group: 18, period: 7 },
];

function App() {
  return (
    <div>
      <div className="header bg-black text-yellow-300 font-bold uppercase text-center text-5xl p-5">
        <h1>Periodic table</h1>
      </div>

      <div className="body grid h-200 grid-cols-18 p-5 gap-2 bg-black px-10 py-10 text-green-300">
        {elements.map((element, index) => {
          return (
            <div
              className={`flex flex-col ${index === 1 || index === 2  || index === 3 || index === 4 || index === 5 || index === 6 || index === 7 || index === 8 || index === 9 || index === 10 || index === 11 || index === 12 || index === 13 || index === 14 || index === 15 || index === 16 || index === 20 || index === 21 || index === 22 || index === 23 || index === 24 || index === 25 || index === 27 || index === 28 || index === 29 || index === 26 || index === 38 || index === 39 || index === 40 || index === 41 || index === 42 || index === 43 || index === 44 || index === 45 || index === 46 || index === 47 ? "" : "border-2"} text-center text-sm flex align-center justify-center `}
            >
              <p>{element.symbol}</p>
              {/* <div>{element.name} </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
