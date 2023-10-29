Project 1 - Browser Base Game

## Game type
Simon

## User Stories
1. As a player, I would like to start when I am ready
2. As a player, when I am ready I would like to see the Simon pattern
3. As a player, I would like to click buttons for my Simon selection
4. As a user I would like to press submit when I am done selecting my answers
5. As a user, after I submit my patter I would like to know if I won or lost
6. ICEBOX: As a player, I would like to see how many rounds I have won/lost
7. ICEBOX: As a player, I would like to see my current streaks of wins


## Wire frame: 
https://www.canva.com/design/DAFyetwRWbA/Z-CWeIO4n2uwTOq4rvOt-w/edit?utm_content=DAFyetwRWbA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton



## SETUP:
- Defiine game variables 
- Define game array

## INIT:
- Randomize the game array

## RENDER
- Gameboard populates
- Display start button

## SHOW PAATTERN
-Randomized pattern is shown visually ont he screen for player to memorize
-Display message "Player's turn"

## PLAYER TURN
-Add event listener for button clicks
-Add event listener for start button
-Player presses button corresponding with pattern 
-Player presses submit button

## CALCULATE
-Compares game array to players array
-If arrays match, player winds round
-display win/loss
-display play again button

## PLAY AGAIN
-randomize array again
-goes back to render



