import './index.css';
import goblinImg from './goblin.png';

const field = document.querySelector('#field');

for (let i = 0; i < 16; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  field.append(cell);
}

const cells = document.querySelectorAll('.cell');

const goblin = document.createElement('img');
goblin.src = goblinImg;
goblin.classList.add('goblin');
goblin.alt = 'goblin';

let currentIndex = -1;
let gameInterval;

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
  cells[currentIndex].append(goblin);
  cells[currentIndex].classList.add('goblin-cell');
}

function startGame() {
  gameInterval = setInterval(moveGoblin, 1000);
  setTimeout(moveGoblin, 500);
}

function stopGame() {
  if (gameInterval) {
    clearInterval(gameInterval);
    gameInterval = null;
    console.log('🛑 Гоблин остановлен!');
  }
}

const stopBtn = document.createElement('button');
stopBtn.textContent = '🛑 Stop Goblin';
stopBtn.style.cssText = `
  position: fixed; 
  top: 10px; 
  right: 10px; 
  padding: 12px 20px; 
  font-size: 16px; 
  font-weight: bold;
  background: #ff4444;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  z-index: 1000;
`;
stopBtn.onclick = stopGame;
document.body.append(stopBtn);

startGame();

window.addEventListener('beforeunload', stopGame);
