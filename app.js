console.log("js:loaded");

//Master Array to store all game board button id's//
const buttons = document.querySelectorAll(".grid-button");
const masterSequence = [];
buttons.forEach((button) => {
  masterSequence.push(button.id);
  button.addEventListener("click", () => handleButtonClick(button.id));
});

//Computer empty array and Player empty arrray//
const computerSequence = [];
const playerSequence = [];

//console.log(computerSequence);
//console.log(playerSequence);

//Stats
let wins = 0;
let losses = 0;
let streak = 0;
console.log(`Wins: ${wins}, Loses: ${losses}`);

//Randomize the game array//

function generateSequence() {
  computerSequence.length = 0;
  playerSequence.length = 0;
  masterSequence.sort(() => Math.random() - 0.5);
  computerSequence.push(...masterSequence.slice(0, 4));
  console.log(computerSequence);
}

let elementsToAdd = 5;

function generateHarderSequence() {
  masterSequence.sort(() => Math.random() - 0.5);
  computerSequence.push(...masterSequence.slice(0, elementsToAdd));

  elementsToAdd++;
  console.log(computerSequence);
}

//Event listener for start button
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", startGame);

//Start game function

function startGame() {
  displayMessage();
  generateSequence();
  //alert("Watch the pattern carefully! Press start to see the pattern again");
  //console.log("Watch the pattern carefully! Press start to see the pattern again");
  displaySequence();
}

//Display randomized pattern on game board. Using async/await to make buttons shake one after another, instead of all at the same time
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function displaySequence() {
  for (const id of computerSequence) {
    const button = document.getElementById(id);
    button.classList.add("shake");
    await sleep(1300);
    button.classList.remove("shake");
    await sleep(1000);
  }
  //alert("Repeat the pattern and press submit");
  //console.log("Repeat the pattern and press submit");
}

//Event listener for player clicking grid-buttons(placed above in buttons.forEach)
//Function that adds clicked buttons to playerSequence array

function handleButtonClick(clickedId) {
  playerSequence.push(clickedId);
  console.log(
    "Button " +
      clickedId +
      " was clicked. playerSequence: " +
      playerSequence.join(", ")
  );
}

//Event listener for Submit button
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", submitButtonClick);

//Function to compare playerSequence to computerSequence
function compareSequences() {
  if (playerSequence.length !== computerSequence.length) {
    return false;
  }

  for (let i = 0; i < playerSequence.length; i++) {
    if (playerSequence[i] !== computerSequence[i]) {
      return false;
    }
  }
  return true;
}

//compareSequences triggered by pressing "Submit" button
function submitButtonClick() {
  //console.log("Submit button clicked!");

  const sequencesMatch = compareSequences();
  if (sequencesMatch) {
    wins += 1;
    //alert("Delicious! The sequences match. Press NEXT for the next level");
    //console.log(
     // "Delicious! The sequences match. Press NEXT for the next level"
    //);
  } else {
    losses += 1;
    //alert( "You burned the meal! Your sequence didn't match. Press START to play again");
   // console.log(
      //"You burned the meal! Your sequence didn't match. Press START to play again"
    //);
  }
  updateStats();
  console.log(`Wins: ${wins}, Loses: ${losses}`);
}

//Event listener for restart button, that activates the restartGame function

const restartButton = document.getElementById("restart-button");

restartButton.addEventListener("click", () => {
  restartGame();
});

//Function to restart the game (reset Wins, Losses, and Current Streak)

function restartGame() {
  //console.log("Restart button clicked!");
  wins = 0;
  losses = 0;
  console.log(`Wins: ${wins}, Loses: ${losses}`);
}

//Event listener for next button, that activates generateHarderSequence to make the next level harder

const nextButton = document.getElementById("next-button");

nextButton.addEventListener("click", () => {
  nextLevel();
});

function nextLevel() {
  //console.log("Next button clicked!");
  //masterSequence.length = 0;
  computerSequence.length = 0;
  playerSequence.length = 0;
  displayMessage()
  generateHarderSequence();
  displaySequence();
}

//Display messages to player
//Use a setTimeout to display the message for 10 seconds, then show a second message
const messageText = document.getElementById("message-text");

function displayMessage() {
  messageText.innerHTML = "Watch the pattern carefully!";
  setTimeout(() => {
    messageText.innerHTML = "Now, repeat the pattern and press submit.";
    setTimeout(() => {
      messageText.innerHTML = "";
    }, 10000);
  }, 9000);
}
//console.log(displayMessage);

//Function to update wins, losses and streaks
function updateStats() {
  const winsElement = document.getElementById("wins");
  const lossesElement = document.getElementById("losses");

  winsElement.innerHTML = `Wins: ${wins}`;
  lossesElement.innerHTML = `Losses: ${losses}`;
}