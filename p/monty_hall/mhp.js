let doors = [0, 0, 0]; // Initialize doors with no prizes
let playerChoice = null;
let revealedDoor = null;
let wins = 0;
let losses = 0;

function updateScore() {
    document.getElementById("win-count").textContent = wins;
    document.getElementById("loss-count").textContent = losses;
}

function resetGame() {
    doors = [0, 0, 0];
    doors[Math.floor(Math.random() * 3)] = 1; // Place the car randomly
    playerChoice = null;
    revealedDoor = null;
    document.getElementById("message").textContent = "Choose a door!";
    document.getElementById("switch-btn").style.display = "none";
    document.getElementById("stay-btn").style.display = "none";
    document.querySelectorAll('.door').forEach(door => door.classList.remove('selected', 'revealed', 'win', 'lose'));
}

function chooseDoor(doorNumber) {
    playerChoice = doorNumber;
    document.querySelectorAll('.door').forEach((door, index) => {
        door.classList.toggle('selected', index === doorNumber - 1);
    });
    revealDoor();
}

function revealDoor() {
    let possibleDoors = [0, 1, 2].filter(d => d !== playerChoice - 1 && doors[d] === 0);
    revealedDoor = possibleDoors[Math.floor(Math.random() * possibleDoors.length)];
    document.querySelectorAll('.door')[revealedDoor].classList.add('revealed');
    document.getElementById("message").textContent = "Do you want to switch or stay?";
    document.getElementById("switch-btn").style.display = "inline";
    document.getElementById("stay-btn").style.display = "inline";
}

function switchDoor() {
    playerChoice = [0, 1, 2].find(d => d !== playerChoice - 1 && d !== revealedDoor) + 1;
    endGame();
}

function stay() {
    endGame();
}

function endGame() {
    let won = doors[playerChoice - 1] === 1;
    if (won) {
        wins++;
        document.getElementById("message").textContent = "You won a car!";
    } else {
        losses++;
        document.getElementById("message").textContent = "You lost! It was a goat.";
    }
    updateScore();
    document.querySelectorAll('.door')[playerChoice - 1].classList.add(won ? 'win' : 'lose');
    document.getElementById("switch-btn").style.display = "none";
    document.getElementById("stay-btn").style.display = "none";
    setTimeout(resetGame, 2000); // Reset after 3 seconds
}

resetGame(); // Initialize the game on page load
