console.log('js:loaded')

//Master Array to store all game board button id's//
const masterSequence = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
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
