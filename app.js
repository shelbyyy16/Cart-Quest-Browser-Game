console.log("js:loaded");

//Display pop up message with game instructions

window.addEventListener("load", (event) => {
  beginMessage();
  showMessage();
});

function beginMessage() {
  messageText.innerHTML = "Press start to begin";

  startButton.addEventListener("click", function () {
    messageText.innerHTML = ""; 
  });
}

//Master Array to store all game board button id's
const buttons = document.querySelectorAll(".grid-button");
const masterSequence = [];
buttons.forEach((button) => {
  masterSequence.push(button.id);
  button.addEventListener("click", () => handleButtonClick(button.id));
});

//Computer empty array and Player empty arrray
const computerSequence = [];
const playerSequence = [];

//Stats
let wins = 0;
let losses = 0;

//Randomize the game array

function generateSequence() {
  computerSequence.length = 0;
  playerSequence.length = 0;
  masterSequence.sort(() => Math.random() - 0.5);
  computerSequence.push(...masterSequence.slice(0, 4));
  console.log(computerSequence);
}

//Add additional element to array each level to increase difficulty
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
  startMessage();
  generateSequence();
  displaySequence();
  hideStartButton();
  showSubmitButton();
}

//Display randomized pattern on game board. Using async/await to make buttons shake one after another, instead of all at the same time
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function displaySequence() {
  await sleep(4000);

  for (const id of computerSequence) {
    const button = document.getElementById(id);
    button.style.backgroundColor = "rgb(249, 226, 125)";
    button.classList.add("shake");
    await sleep(1300);
    button.style.backgroundColor = "";
    button.classList.remove("shake");
    await sleep(1000);
  }

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
}

//Event listener for next button, that activates generateHarderSequence 

const nextButton = document.getElementById("next-button");

nextButton.addEventListener("click", () => {
  nextLevel();
});

function nextLevel() {
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
    }, 8000);
  }, 100);
}

function winMessage() {
  setTimeout(() => {
    messageText.innerHTML = "You got everything on the list!";
    setTimeout(() => {
      messageText.innerHTML = "Press next to move to the next level";
      setTimeout(() => {
        messageText.innerHTML = "";
      }, 9000); 
    }, 9000); 
  }, 100);
}

function loseMessage() {
  setTimeout(() => {
    messageText.innerHTML = "Oh no! You forgot something on the list";
    setTimeout(() => {
      messageText.innerHTML = "Press start to try again";
      setTimeout(() => {
        messageText.innerHTML = "";
      }, 9000); 
    }, 9000); 
  }, 100);
}


//Function to update wins and losses
function updateStats() {
  const winsElement = document.getElementById("wins");
  const lossesElement = document.getElementById("losses");

  winsElement.innerHTML = `Wins: ${wins}`;
  lossesElement.innerHTML = `Losses: ${losses}`;
}

//Functions to make the toggle buttons appear and disappear when not in use

function showStartButton() {
  const startButton = document.getElementById("start-button");
  startButton.style.display = "block";
}

function hideStartButton() {
  const startButton = document.getElementById("start-button");
  startButton.style.display = "none";
}

function showSubmitButton() {
  const submitButton = document.getElementById("submit-button");
  submitButton.style.display = "block";
}

function hideSubmitButton() {
  const submitButton = document.getElementById("submit-button");
  submitButton.style.display = "none";
}

function showNextButton() {
  const nextButton = document.getElementById("next-button");
  nextButton.style.display = "block";
}

function hideNextButton() {
  const nextButton = document.getElementById("next-button");
  nextButton.style.display = "none";
}

//Function to display a rules to the player before they begin

const messageBox = document.getElementById("message-box");
const closeButton = document.getElementById("close-button");
function showMessage(message) {
  const messageContent = messageBox.querySelector("p");
  messageContent.textContent = message;
  messageBox.style.display = "block";
}
function hideMessage() {
  messageBox.style.display = "none";
}
closeButton.addEventListener("click", hideMessage);



