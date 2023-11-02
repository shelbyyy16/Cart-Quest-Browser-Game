Project 1 - Browser Base Game

## Game type
Simon

## User Stories
1. As a player, I would like to start when I am ready
2. As a player, when I am ready I would like to see the Computer sequence
3. As a player, I would like to click buttons for my sequence selection
4. As a player I would like to press submit when I am done selecting my answers
5. As a player, after I submit my sequence I would like to know if I won or lost
6. ICEBOX: As a player, I would like to see how many rounds I have won/lost
7. ICEBOX: As a player, I would like to see my current streaks of wins


## Wire frame: 
https://www.canva.com/design/DAFyetwRWbA/Z-CWeIO4n2uwTOq4rvOt-w/edit?utm_content=DAFyetwRWbA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton



## SETUP:
- Defiine game variables 
- Define game array

## INIT:
- Randomize the game array
- start game 

## RENDER
- Gameboard populates
- Display start button

## SHOW PATTERN
-Randomized pattern is shown visually ont he screen for player to memorize
-Display message "Player's turn"

## PLAYER TURN
-Add event listener for button clicks
-Add event listener for start button
-Player presses button corresponding with pattern -> add push () function
-Player presses submit button (event listener)

## CALCULATE
-Compares game array to players array
-If arrays match, player winds round
-display win/loss
-display play again button

## PLAY AGAIN
-randomize array again
-goes back to render

## COLOR SCHEME
Light Blue: rgb(119, 168, 199);
Faded Red: rgb(219, 96, 96)
White: rgb(240, 240, 240)
Pale Yellow: rgb(249, 226, 125)
Navy Blue: rgb(51, 57, 140)