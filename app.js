console.log('js:loaded')

//Master Array to store all game board button id's//
const buttons = document.querySelectorAll(".grid-button");
const masterSequence = []
buttons.forEach(button => {
    masterSequence.push(button.id);
});
console.log(masterSequence);

//Computer empty array and Player empty arrray//
const computerSequence = []
const playerSequence = []

console.log(computerSequence);
console.log(playerSequence);

//Randomize the game array//

function generateSequence(){
    masterSequence.sort(() => Math.random() - 0.5);
    computerSequence.push(...masterSequence.slice(0, 4));
}

generateSequence()
console.log(computerSequence);

//Event listener for start button
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", startGame);

//Start game function (inclu)

function startGame() {
    alert ("Watch the pattern carefully!")
}


//Display randomized pattern on game board
function displaySequence() {
    // Iterate through the computerSequence and highlight/shake the corresponding tile
}