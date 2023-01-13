# Man vs Machine

Man vs Machine is a website where you can challenge your machine in a responsive javascript game of 
rock, paper, scissor,lizard and spock. The site targets people who love games especially rock, paper scissor 
but with more of a challenge with the two new moves, lizard and spock.

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
- Game Buttons
- Round result
- Scoreboard


## Validator Testing 

- HTML 
    - No errors were found when passing through the official W3C Validator
- CSS
    - One error found, using border-style with a value of "solid 2px" changed from border-style to just border. 
- JavaScript
    - No errors were found when passing through the official Jshint Validator
        - The following metrics were returned
        - There are 6 functions in this file.
        - Largest function has 13 statments in it, while the median is 12
        - The most complex function has a cyclomatic complexity value of 6 while the median is 4.