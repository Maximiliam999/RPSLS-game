# Man vs Machine

Man vs Machine is a website where you can challenge your machine in a responsive javascript game of 
rock, paper, scissor,lizard and spock. The site targets people who love games especially rock, paper scissor 
but with more of a challenge with the two new moves, lizard and spock.

![Screenshot of am i responsive](/assets/images/amiresponsive.png "check responsiveness on diffrent screen sizes")

## Features

- Heading 
    - At the top of the page for the user to see title of the game.

![screenshot of title at the top of the screen](/assets/images/titleofgame.png "game title")

- The game text area 
    - Shows the user their choice and also the machine's choice.

![Screenshot of the user and the machine's choices](/assets/images/gamechoicetext.png "man and machine choices")


- Result 
    - The area displays whether the user or the machine won the round.

![Screenshot of the result of each round](/assets/images/gameresult.png "result of each round")

- The game buttons area 

    - This area is what allows the user to play the game.
    - There is one button for each move. Pressing one will lock it in as your option and start the game

![Screenshot of the five buttons or moves the user can make](/assets/images/btnchoices.png "all moves available to the user")


- Scoreboard
    - For the user to keep track on the score in the game.

![Screenshot of scoreboard](/assets/images/scoreboard.png "score of the user and the machine")

- Instructions 
    - Contains three sections.
    - "What is man vs the machine" short explanation on what the site is.
    - "How to play" short explanation on how the user can start the game.
    - "Rules" an explanation to help the user on what move wins over what move.

![Screenshot of the instructions](/assets/images/instructions.png "Instructions for users")

## Running Tests
- User and machine choice
    - The preview of both the user and machine choices works on both Google Chrome and Microsoft Edge 
    - Works on all screen sizes tablet, cellphones and laptops.

![Screenshot of choices on tablet/phone](/assets/images/gamechoicetextphonetablet.png "choices as seen on tablet or phone")

- Game Buttons
    - Buttons have been tested and works on diffrent devices, on both Microsoft Edge and Google Chrome.
    - On phone screens the buttons will instead stack on top of eachother and the frame will cover the white space next to it by removing margins using media queries.
    - On tablet the frame will remove the white space on each side by removing margins using media queries.
- Round result
    - To make sure the right result text shows up for example "you win!" if you win the game has been tested and it will show the correct text for every move.
    - It has been tested on both Google Chrome and Microsoft Edge and works on both.
    - It is in the same frame as game buttons and the user and machine choices and will take the same media queries that have been tested. 
- Scoreboard
    - The scoreboard have been tested and works on diffrent devices, on both Microsoft Edge and Google Chrome.
    - It has been tested and works on tablet and phone screens. 

## Lighthouse testing
![Screenshot of lighthouse test](/assets/images/lighthousetest.png "Result of lighthouse testing")

## Validator Testing 

- HTML 
    - No errors were found when passing through the official W3C Validator. https://validator.w3.org/

- CSS
    - One error found when passing through the official W3C Validator , using border-style with a value of "solid 2px" changed from border-style to just border. 
    https://jigsaw.w3.org/css-validator/

- JavaScript
    - No errors were found when passing through the official Jshint Validator. https://jshint.com/
        - The following metrics were returned.
        - There are 6 functions in this file.
        - Largest function has 13 statments in it, while the median is 12.
        - The most complex function has a cyclomatic complexity value of 6 while the median is 4.

## Deployment

- This site was deployed to GitHub pages by following these steps.
    - Go to GitHub repository and then click the settings tab.
    - Then click pages and go to branch and select main. 
    - Wait for a bit and a link to your  website will be provided at the top of the page.
The link can be found here: https://maximiliam999.github.io/RPSLS-game/
## Credits

- Content 
    - The code for restarting the game is taken from https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win

- Media 
    - The icons were taken from https://fontawesome.com/icons
    - And the font was taken from https://fonts.google.com/