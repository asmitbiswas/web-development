document.body.title = "Amazing snake and ladder game "
const board = document.getElementById('board');
const rollDiceButton = document.getElementById('rollDice');
const status = document.getElementById('status');

const boardSize = 10.4;
const cells = [];
let playerPosition = 0;

const snakes = {
    10:1,
    12:1,
    99:1,
    96:1,
    23:1,
    11:1,
    22:1,
    26:2,
    30:5,
    40:1,
    100:12,
    102:1,
    105:26,
    99:2,
    120:1,





};

const ladders = {
    1:10,
    9:20,
    22:51,
    34:100,
    100:121
    


};

function createBoard() {
    for (let i = 0; i < boardSize * boardSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = `cell-${i + 1}`;
        cell.textContent = i + 1;
        cells.push(cell);
        board.appendChild(cell);
    }
}

function movePlayer(position) {
    cells[playerPosition].innerHTML = playerPosition + 1;
    playerPosition = position;
    cells[playerPosition].innerHTML = `<div class="player"></div>`;
}

function rollDice() {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    let newPosition = playerPosition + diceValue;

    if (newPosition > 111) {
        newPosition = 111;
    }

    if (snakes[newPosition + 1]) {
        newPosition = snakes[newPosition + 1] - 1;
    } else if (ladders[newPosition + 1]) {
        newPosition = ladders[newPosition + 1] - 1;
    }

    movePlayer(newPosition);

    if (newPosition === 111) {
        status.textContent = 'Congratulations! You won!';
        rollDiceButton.disabled = true;
    } else {
        status.textContent = `You rolled a ${diceValue}. Move to ${newPosition + 1}.`;
    }
}

rollDiceButton.addEventListener('click', rollDice);

createBoard();
movePlayer(0);