//dataset
const dataset = [
  {
    country:
      "<div class='myCustomCell'><span>United Kingdom</span><img src='https://snippet.dhtmlx.com/codebase/data/combobox/01/img/gb.png'></div>",
    capital: 'London',
    population: '8 908 081',
  },
  {
    country:
      "<div class='myCustomCell'><span>Sweden</span><img src='https://snippet.dhtmlx.com/codebase/data/combobox/01/img/se.png'></div>",
    capital: 'Stockholm',
    population: '962 154',
  },
  {
    country:
      "<div class='myCustomCell'><span>Italy</span><img src='https://snippet.dhtmlx.com/codebase/data/combobox/01/img/it.png'></div>",
    capital: 'Rome',
    population: '2 873 104',
  },
  {
    country:
      "<div class='myCustomCell'><span>Germany</span><img src='https://snippet.dhtmlx.com/codebase/data/combobox/01/img/de.png'></div>",
    capital: 'Berlin',
    population: '3 748 148',
  },
  {
    country:
      "<div class='myCustomCell'><span>Belarus</span><img src='https://snippet.dhtmlx.com/codebase/data/combobox/01/img/by.png'></div>",
    capital: 'Minsk',
    population: '1 702 061',
  },
  {
    country:
      "<div class='myCustomCell'><span>France</span><img src='https://snippet.dhtmlx.com/codebase/data/combobox/01/img/fr.png'></div>",
    capital: 'Paris',
    population: '2 241 346',
  },
];

const columns = [
  {
    width: 200,
    id: 'country',
    header: [{ text: 'Country' }],
    htmlEnable: true,
    filter: true,
  },
  { width: 150, id: 'capital', header: [{ text: 'Capital' }] },
  { width: 150, id: 'population', header: [{ text: 'Population' }] },
];

// First task
var grid = new dhx.Grid('grid', {
  columns: columns,
  data: dataset,
});

function show(row, col) {
  dhx.alert({
    header: 'DHTMLX Alert Box',
    text: `You clicked on cell with row Id: ${row.id} and sell Id: ${
      (col.id, col.header[0].id)
    }`,
    buttonsAlignment: 'center',
    buttons: ['ok'],
  });
}

grid.events.on('CellClick', function (row, col) {
  show(row, col);
});

// Second task
const searchBoxContainer = document.getElementById('searchBoxContainer');

// Initialize state
let items = [];

const inputContainer = document.createElement('div');
inputContainer.classList.add('input-container');

const inputField = document.createElement('input');
inputField.placeholder = 'Search or add item...';
inputContainer.appendChild(inputField);

const clearIcon = document.createElement('span');
clearIcon.classList.add('clear-icon', 'material-symbols-outlined');
clearIcon.innerText = 'close';
clearIcon.style.display = 'none'; // Hide initially
inputContainer.appendChild(clearIcon);

const addButton = document.createElement('button');
addButton.classList.add('add-button', 'material-symbols-outlined');
addButton.innerText = 'add';
inputContainer.appendChild(addButton);

searchBoxContainer.appendChild(inputContainer);

// Create dropdown container
const dropdown = document.createElement('div');
dropdown.classList.add('dropdown');
searchBoxContainer.appendChild(dropdown);

// Add input change event
inputField.addEventListener('input', () => {
  clearIcon.style.display = inputField.value ? 'block' : 'none';
});

// Clear input
clearIcon.addEventListener('click', () => {
  inputField.value = '';
  clearIcon.style.display = 'none';
  inputField.focus();
});

// Add new item to dropdown
const addItem = () => {
  const itemText = inputField.value.trim();
  if (itemText && !items.includes(itemText)) {
    items.push(itemText);
    renderDropdown();
  }
  inputField.value = '';
  clearIcon.style.display = 'none';
  dropdown.style.display = 'block';
};

addButton.addEventListener('click', addItem);

// Render dropdown items
const renderDropdown = () => {
  dropdown.innerHTML = '';
  items.forEach((item) => {
    const dropdownItem = document.createElement('div');
    dropdownItem.classList.add('dropdown-item');
    dropdownItem.innerHTML = `<span class="history material-symbols-outlined">history</span> ${item}`;
    dropdownItem.addEventListener('click', () => {
      inputField.value = item;
      dropdown.style.display = 'none';
    });
    dropdown.appendChild(dropdownItem);
  });
  dropdown.style.display = 'block';
};

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!searchBoxContainer.contains(e.target)) {
    dropdown.style.display = 'none';
  }
});
