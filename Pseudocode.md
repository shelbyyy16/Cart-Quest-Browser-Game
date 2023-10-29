## SETUP:
- Define game array
let masterSequence = [] // Array to store all game board options

- Defiine game variables 
let simonSequence = [] // Array to store the computer-generated sequence
let playerSequence= [] // Array to store the player's input sequence



## INIT:
- Randomize the game array
function generateSequence() {
    // Add a random number (1-4) to the sequence
}

-Start game
startGame();

## RENDER
- Gameboard populates
- Display start button

## SHOW PATTERN
-Randomized pattern is shown visually on the screen for player to memorize
function displaySequence() {
    // Iterate through the sequence and highlight/shake the corresponding tile
}

-Display message "Player's turn"
function displayMessage(message) {
    // Code to display messages on the screen
}

## PLAYER TURN
-Add event listener for button clicks
button1.addEventListener('click', () => handleButtonClick(1));

-Add event listener for start button
startButton.addEventListener('click', startGame);

-Player presses button corresponding with pattern 
function handleButtonClick(buttonSymbol) {
    // Add the clicked button symbol to the player's sequence
    // Check if the player's sequence matches the game sequence
    // If it matches, go to the next level
    // If it doesn't match, start a new game
}

-Add event listener for "submit" button
submitButton.addEventListener('click', submit);

## CALCULATE
-Compares game array to players array
function checkPlayerInput() {
    // Compare playerSequence with computer sequence
}
-If arrays match, player winds round

-display win/loss
// Handle game over
function gameOver() {
    // Display a game over message
}

// Handle a win
function gameWin() {
    // Display a win message
}
-display play again button

## PLAY AGAIN
-randomize array again
// Start a new game
function startGame() {
    // Reset game variables
    // Generate a new sequence
    // Display the sequence to the user
}












function displayMessage(message) {
    // Code to display messages on the screen
}


// Initialize the game
startGame()

1. SETUP

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

2. INIT

function nextRound() {
    playerSequence = []  // Clear the player's input sequence
    displayMessage(`Round ${round}`)
    generateSimonSequence()  // Generate and show the computer's sequence
    playSimonSequence()
    gameActive = true
}

3. SHUFFLE ARRAY

-Function takes master array and randomizes it and populates it to the computer array

4. ARRAY IS SHOWN TO PLAY FOR X AMOUNT OF TIME

function playSimonSequence() {
    // Code to play the computer's sequence (e.g., by highlighting buttons or playing sounds)
}

5. PLAYER INPUTS THEYRE CHOICES

function playerInput(color) {
    if (gameActive) {
        playerSequence.push(color)
        // Code to check if the player's input matches the current simonSequence
        // If correct, continue to the next round; if not, display "Game Over."
    }
}

6. CONPUTER INTERPRETS PLAYER ANSWER
// Main game loop (controlled by player's interaction)
while (gameStarted) {
    // Listen for player input (e.g., button clicks)
    // Call playerInput() function when a button is clicked
}

6. COMPUTER COMPARES GAME ARRAY TO PLAYER ARRAY

7. IF PLAYER IS CORRECT A NEW ARRAY IS RANDOMIZED

function nextRound() {
    playerSequence = []  // Clear the player's input sequence
    displayMessage(`Round ${round}`)
    generateSimonSequence()  // Generate and show the computer's sequence
    playSimonSequence()
    gameActive = true
}
