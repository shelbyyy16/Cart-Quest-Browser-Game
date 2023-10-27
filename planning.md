Project 1 - Browser Base Game

Game type: Simon
Game Title: Stuck between FlavorQuest. Dish Dynasty or Flavor Frenzy

Wire frame: https://www.canva.com/design/DAFyetwRWbA/Z-CWeIO4n2uwTOq4rvOt-w/edit?utm_content=DAFyetwRWbA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

// Define game variables and arrays
let simonSequence = []      // Array to store the computer-generated sequence
let playerSequence = []     // Array to store the player's input sequence
let round = 1               // Track the current round
let gameStarted = false     // Track whether the game has started
let gameActive = false      // Track whether it's the player's turn to respond

// Define game functions
function startGame() {
    gameStarted = true
    displayMessage("Get ready to play!")
    setTimeout(() => {
        nextRound()
    }, 1000)  // Delay before starting the first round
}

