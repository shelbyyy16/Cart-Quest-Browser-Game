# A glow snippet:
This is my first async function that I have worked with, and I really like how it came out. It was a it of a learning curve but I like how you can have multiple things running within one code block.

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

# A grow snippet:
I was able to get multiple messages to display, one after another, by nesting timers within one function. But, I found it difficult to get the timing that I wanted because the timers cut eachother off/start at the same time. I would love a cleaner, less confusing way of doing this.

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