## SETUP:
- Define game array
const masterSequence = [] // Array to store all game board button ids

- Defiine game variables 
let computerSequence = [] // Array to store the computer-generated sequence
let playerSequence = [] // Array to store the player's input sequence



## INIT:
- Randomize the game array
function generateSequence() {
    // randomly adds 4 ids from masterSequence to computerSequence
}

## RENDER
- Gameboard populate
    -9 clickable buttons, title, message display area and start button
- Display start button

## SHOW PATTERN
-Click Start game
-Add event listener for start button
startButton.addEventListener('click', startGame);
startGame();
    // Remove start button from screen
    // kicks off display pattern
-Randomized pattern is shown visually on the screen for player to memorize
function displaySequence() {
    // Iterate through the computerSequence and highlight/shake the corresponding tile
}

-Display message "Player's turn"
function displayMessage(message) {
    // Display players turn message 
}

## PLAYER TURN
-Add event listener for button clicks
button1.addEventListener('click', () => handleButtonClick(1));

-Player presses button corresponding with pattern -> add, ".push()"
function handleButtonClick(id) {
    // Add the clicked button id to the playerSequence
}

 playerSequence.push(color)

-Add event listener for "submit" button
submitButton.addEventListener('click', submit);
// Submit button kicks off checkPlayerInput()

## CALCULATE
-Compare game array to players array
function checkPlayerInput() {
    // Compares playerSequence with computerSequence
    // If it matches, kick off gameWin()
    // If it doesn't match, kick off gameOver()
}

-display win/loss
// Handle game over
function gameOver() {
    // Display a game over message
}

// Handle a win
function gameWin() {
    // Display a win message
}

## PLAY AGAIN
-randomize array again
// Start a new game
function startGame() {
    // Reset game variables
    // Generate a new sequence
    // Display the sequence to the user
}
