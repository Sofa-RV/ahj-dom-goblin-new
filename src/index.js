const field = document.querySelector('#field');

for (let i = 0; i < 16; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  field.appendChild(cell);
}

const cells = document.querySelectorAll('.cell');

const goblin = document.createElement('img');
goblin.src = 'https://raw.githubusercontent.com/netology-code/ahj-homeworks/AHJ-50/dom/pic/goblin.png';
goblin.classList.add('goblin');
goblin.alt = 'goblin';

let currentIndex = -1;

function moveGoblin() {
  cells.forEach(cell => {
    cell.innerHTML = '';
    cell.classList.remove('goblin-cell');
  });

  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * 16);
  } while (newIndex === currentIndex);
  
  currentIndex = newIndex;
  cells[currentIndex].appendChild(goblin);
  cells[currentIndex].classList.add('goblin-cell');
}

setInterval(moveGoblin, 1000);
setTimeout(moveGoblin, 500);
