## SETUP:
- Define game array
const masterSequence = [] // Array to store all game board button ids

- Defiine game variables 
let computerSequence = [] // Array to store the computer-generated sequence
let playerSequence = [] // Array to store the player's input sequence

- Stats
let wins = 0;
let losses = 0;

## RENDER
- Gameboard populate
    -9 clickable buttons, title, message display area and start button
- Display start button
- Display Instructions/Welcome menu

## INIT:
- Randomize the game array
function generateSequence() {
    // randomly adds 4 ids from masterSequence to computerSequence
}

-randomize harder sequence
function generateHarderSequence() {
    // randomly adds 4 ids from masterSequence to computerSequence
    // ++i each level to make sequence harder
}

## SHOW SEQUENCE
-Click Start game
-Add event listener for start button
startButton.addEventListener('click', startGame);
startGame();
    // Remove start button from screen
    // kicks off display pattern
    // triggers start message

-Randomized pattern is shown visually on the screen for player to memorize
function displaySequence() {
    // Iterate through the computerSequence and highlight/shake the corresponding tile
}

-Display start message (with timers to display 2 messages, one after another)
function startMessage() {
    // Display start message message 
}

## PLAYER TURN
-Add event listener for button clicks
button1.addEventListener('click', () => handleButtonClick(1));

-Player presses button corresponding with sequence -> add, ".push()"
function handleButtonClick(clickedId) {
  playerSequence.push(clickedId);
}

-Add event listener for "submit" button
submitButton.addEventListener('click', submit);
// Submit button kicks off sequenceMatch()

## CALCULATE
-Compare game array to players array
function compareSequences() {
    // Compares playerSequence with computerSequence
    // If it matches, kick off winMessage
    // If it doesn't match, kick off loseMessage
}

## PLAY AGAIN

- if player wins nextLevel function is triggered
function nextLevel()
    //clears computer and player arrays
    //plays start message
    //generates a harder sequence
    //shows sequence
    
- if player loses startGame() is triggered again
