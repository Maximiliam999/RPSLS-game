const playerText = document.getElementById("playerText");
const machinceText= document.getElementsById("machineText");
const resultText= document.getElementById("resultText");
const scoreBoard= document.getElementById("score-board")
const btnChoice= document.getElementsByClassName("Btn-choice");
let manScore= 0; 
let machineScore= 0;

function manChoice() {
    
}


function machineChoice() {
let machine = Math.floor(Math.random() * 5) + 1;

switch(choice){
    case 0: machine="rock";
    break;
    case 1: machine="paper";
    break;
    case 2: machine="scissors";
    break;
    case 3: machine="lizard";
    break;
    case 4: machine="spock";
    break;
}

}

function checkResult(){
    
if (manChoise === machinceChoise) {
    return "It\"s a tie, the CPU also chose" + machinceChoise + ".";
} else if (manChoise === "rock"){
    if (machinceChoise === "paper" || "spock"){
        return "You lose";
        cpuScore++;
    } else if (machinceChoise === "scissors" || "lizard"){
        return "You win";
        userScore++;
    }
    } else if(manChoice === "paper"){
        if(machineChoice === "scissors"|| "lizard"){
            return "You lose";
            machineScore++;
        } else if(machineChoice === "rock" || "spock"){
            return "You win";
            manScore++;
        } 
        
    } else if(manChoice === "scissors"){
        if(machineChoice === "rock" || "spock"){
            return "You lose";
            machineScore++ 
        } else if(machineChoice === "paper" || "lizard"){
            return "You win";
            manScore++
        }
    } else if(manChoice === "lizard"){
        if(machineChoice === "rock" || "scissor"){
            return "You lose";
            manScore++;
        } else if (machineChoice === "paper" || "spock"){
            return "You win";
            manScore++
        }
    } else if(manChoice === "spock"){
        if(machineChoice === "paper" || "lizard"){
            return "You lose";
            machineScore++
        } else if (machineChoice === "rock" || "scissor"){
            return "You win";
            manScore++
        }
    }

}