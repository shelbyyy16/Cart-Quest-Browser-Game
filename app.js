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

//Randomize the game array//

function generateSequence() {
  masterSequence.sort(() => Math.random() - 0.5);
  computerSequence.push(...masterSequence.slice(0, 4));
}

generateSequence();
console.log(computerSequence);

//Event listener for start button
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", startGame);

//Start game function

function startGame() {
  alert("Watch the pattern carefully! Press start to see the pattern again");
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
    await sleep(1000);
    button.classList.remove("shake");
    await sleep(1000);
  }
  alert("Repeat the pattern and press submit");
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
  console.log("Submit button clicked!");

  const sequencesMatch = compareSequences();
  if (sequencesMatch) {
    alert("Delicious! The sequences match. Press NEXT for the next level");
  } else {
    alert(
      "You burned the meal! Your sequence didn't match. Press START to play again"
    );
  }
}

//Event listener for restart button, that activates the restartGame function

const restartButton = document.getElementById("restart-button");

restartButton.addEventListener("click", () => {
  restartGame();
});

//Function to restart the game

function restartGame() {
  masterSequence.length = 0;
  computerSequence.length = 0;
  playerSequence.length = 0;
  generateSequence();
}

//Event listener for next button, that activates generateHarderSequence to make the next level harder

const nextButton = document.getElementById("next-button");

nextButtonButton.addEventListener("click", () => {
    generateHarderSequence();
});

function generateHarderSequence() {
  masterSequence.sort(() => Math.random() - 0.5);
  computerSequence.push(...masterSequence.slice(0, elementsToAdd));

  elementsToAdd++;
}

