// Element data (subset for simplicity, now includes atomic mass)
const elements = {
  H: { name: "Hydrogen", atomicNumber: 1, symbol: "H", atomicMass: 1.008, description: "The lightest and most abundant element in the universe." },
  He: { name: "Helium", atomicNumber: 2, symbol: "He", atomicMass: 4.0026, description: "A noble gas used in balloons and cooling applications." },
  Li: { name: "Lithium", atomicNumber: 3, symbol: "Li", atomicMass: 6.94, description: "A soft metal used in rechargeable batteries." },
  Be: { name: "Beryllium", atomicNumber: 4, symbol: "Be", atomicMass: 9.0122, description: "A lightweight metal used in aerospace applications." },
  B: { name: "Boron", atomicNumber: 5, symbol: "B", atomicMass: 10.81, description: "An element used in glassmaking and detergents." },
  C: { name: "Carbon", atomicNumber: 6, symbol: "C", atomicMass: 12.011, description: "A key element in organic chemistry, found in all life forms." },
  N: { name: "Nitrogen", atomicNumber: 7, symbol: "N", atomicMass: 14.007, description: "A major component of Earth's atmosphere." },
  O: { name: "Oxygen", atomicNumber: 8, symbol: "O", atomicMass: 15.999, description: "Essential for respiration and combustion." },
  F: { name: "Fluorine", atomicNumber: 9, symbol: "F", atomicMass: 18.998, description: "A highly reactive gas used in toothpaste and water treatment." },
  Ne: { name: "Neon", atomicNumber: 10, symbol: "Ne", atomicMass: 20.180, description: "A noble gas used in bright advertising signs." }
};

// Function to generate the periodic table
function generateTable() {
  const table = document.getElementById('table');
  for (const symbol in elements) {
    const elementDiv = document.createElement('div');
    elementDiv.className = 'element';
    elementDiv.textContent = elements[symbol].symbol;
    elementDiv.setAttribute('data-symbol', symbol);
    elementDiv.addEventListener('click', showDetails);
    table.appendChild(elementDiv);
  }
}

// Function to display element details
function showDetails(event) {
  const symbol = event.target.getAttribute('data-symbol');
  const element = elements[symbol];
  const details = document.getElementById('details');
  details.innerHTML = `
    <h2>${element.name}</h2>
    <p><strong>Symbol:</strong> ${element.symbol}</p>
    <p><strong>Atomic Number:</strong> ${element.atomicNumber}</p>
    <p><strong>Atomic Mass:</strong> ${element.atomicMass}</p>
    <p><strong>Description:</strong> ${element.description}</p>
  `;
}

// Generate the table on page load
generateTable();