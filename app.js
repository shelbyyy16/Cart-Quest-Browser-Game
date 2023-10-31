console.log("js:loaded");

window.addEventListener("load", (event) => {
  beginMessage();
})


function beginMessage() {
  messageText.innerHTML = "Press start to begin";

  // Add a click event listener to the start button
  startButton.addEventListener("click", function () {
    messageText.innerHTML = ""; // Clear the message when the start button is clicked
  });
}

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
startButton.addEventListener("click", startGame,)

//Start game function

function startGame() {
  startMessage();
  generateSequence();
  //alert("Watch the pattern carefully! Press start to see the pattern again");
  //console.log("Watch the pattern carefully! Press start to see the pattern again");
  displaySequence();
  hideStartButton();
  showSubmitButton();
}

//Display randomized pattern on game board. Using async/await to make buttons shake one after another, instead of all at the same time
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function displaySequence() {
  await sleep(2000);
  
  for (const id of computerSequence) {
    const button = document.getElementById(id);
    button.classList.add("shake");
    await sleep(1300);
    button.classList.remove("shake");
    await sleep(1000);
  }
}

//Event listener for player clicking grid-buttons(placed above in buttons.forEach)
//Function that adds clicked buttons to playerSequence array

function handleButtonClick(clickedId) {
  playerSequence.push(clickedId);
  console.log("Button " + clickedId + " was clicked. playerSequence: " + playerSequence.join(", ")
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
    showNextButton();
    winMessage();
  } else {
    losses += 1;
    showStartButton();
    loseMessage();
  }
  hideSubmitButton();
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
  startMessage();
  generateHarderSequence();
  displaySequence();
  hideNextButton();
  showSubmitButton();
}

//Display messages to player
//Use a setTimeout to display the message for 10 seconds, then show a second message
const messageText = document.getElementById("message-text");

function startMessage() {
  setTimeout(() => {
    messageText.innerHTML = "Watch the pattern carefully!";
    setTimeout(() => {
      messageText.innerHTML = "Now, repeat the pattern and press submit.";
      setTimeout(() => {
        messageText.innerHTML = "";
      }, 10000);
    }, 2000); // Delay for 2 seconds before displaying the second message
  }, 100); // Total delay of 7 seconds before the first message
}

function winMessage() {
  messageText.innerHTML = "You got everything on the list! You rockstar";
  setTimeout(() => {
    messageText.innerHTML = "Press next to continue to the next level";
    setTimeout(() => {
      messageText.innerHTML = "";
    }, 5000);
  }, 2000);
}

function loseMessage() {
  messageText.innerHTML = "Oh no! You forgot something on the list";
  setTimeout(() => {
    messageText.innerHTML = "Press start to try again";
    setTimeout(() => {
      messageText.innerHTML = "";
    }, 5000);
  }, 2000);
}
//console.log(startMessage);

//Function to update wins and losses
function updateStats() {
  const winsElement = document.getElementById("wins");
  const lossesElement = document.getElementById("losses");

  winsElement.innerHTML = `Wins: ${wins}`;
  lossesElement.innerHTML = `Losses: ${losses}`;
}

//Functions to make the toggle buttons appear and disappear when not in use

// Function to show the "START" button
function showStartButton() {
  const startButton = document.getElementById("start-button");
  startButton.style.display = "block";
}

// Function to hide the "START" button
function hideStartButton() {
  const startButton = document.getElementById("start-button");
  startButton.style.display = "none";
}

// Function to show the "SUBMIT" button
function showSubmitButton() {
  const submitButton = document.getElementById("submit-button");
  submitButton.style.display = "block";
}

// Function to hide the "SUBMIT" button
function hideSubmitButton() {
  const submitButton = document.getElementById("submit-button");
  submitButton.style.display = "none";
}

// Function to show the "RESTART" button
function showRestartButton() {
  const restartButton = document.getElementById("restart-button");
  restartButton.style.display = "block";
}

// Function to hide the "RESTART" button
function hideRestartButton() {
  const restartButton = document.getElementById("restart-button");
  restartButton.style.display = "none";
}

// Function to show the "NEXT" button
function showNextButton() {
  const nextButton = document.getElementById("next-button");
  nextButton.style.display = "block";
}

// Function to hide the "NEXT" button
function hideNextButton() {
  const nextButton = document.getElementById("next-button");
  nextButton.style.display = "none";
}
