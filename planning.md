Project 1 - Browser Base Game

Game type: Simon
ICEBOX: Make the game cooking based, variables would be ingredients

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

function nextRound() {
    playerSequence = []  // Clear the player's input sequence
    displayMessage(`Round ${round}`)
    generateSimonSequence()  // Generate and show the computer's sequence
    playSimonSequence()
    gameActive = true
}

function playSimonSequence() {
    // Code to play the computer's sequence (e.g., by highlighting buttons or playing sounds)
}

function playerInput(color) {
    if (gameActive) {
        playerSequence.push(color)
        // Code to check if the player's input matches the current simonSequence
        // If correct, continue to the next round; if not, display "Game Over."
    }
}

function displayMessage(message) {
    // Code to display messages on the screen
}

// Main game loop (controlled by player's interaction)
while (gameStarted) {
    // Listen for player input (e.g., button clicks)
    // Call playerInput() function when a button is clicked
}

// Initialize the game
startGame()