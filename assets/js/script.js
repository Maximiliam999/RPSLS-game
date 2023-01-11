var rock = document.getElementById("rock");
var paper = document.getElementById("scissor");
var scissor = document.getElementById("scissor");
var lizard = document.getElementById("lizard");
var spock = document.getElementById("spock");
let manScore= 0; 
let machineScore= 0;
let machine;

function manChoice() {
   if (rock.clicked === true) {
     let manChoice = "rock";
   } else if (paper.clicked === true) {
     let manChoice = "paper";
   } else if (scissor.clicked === true) {
     let manChoice = "scissor";
   } else if (lizard.clicked === true) {
     let manChoice = "lizard";
   } else if (spock.clicked === true) {
     let manChoice = "spock";
   }
   machineChoice();
}





function machineChoice() {
const randNum = Math.floor(Math.random() * 5) + 1;

switch(randNum){
    case 1: machine="rock";
    break;
    case 2: machine="paper";
    break;
    case 3: machine="scissors";
    break;
    case 4: machine="lizard";
    break;
    case 5: machine="spock";
    break;
}
 checkResult();
}

function checkResult(){
    
if (manChoise === machinceChoise) {
    return "It\"s a tie, the CPU also chose" + machinceChoise + ".";
} else if (manChoise === "rock"){
    if (machinceChoise === "paper" || "spock"){
        return "You lose";
        machineScore++;
    } else if (machinceChoise === "scissors" || "lizard"){
        return "You win";
        manScore++;
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
            machineScore++;
        } else if(machineChoice === "paper" || "lizard"){
            return "You win";
            manScore++;
        }
    } else if(manChoice === "lizard"){
        if(machineChoice === "rock" || "scissor"){
            return "You lose";
            manScore++;
        } else if (machineChoice === "paper" || "spock"){
            return "You win";
            manScore++;
        }
    } else if(manChoice === "spock"){
        if(machineChoice === "paper" || "lizard"){
            return "You lose";
            machineScore++;
        } else if (machineChoice === "rock" || "scissor"){
            return "You win";
            manScore++;
        }
    }

}
rock.addEventListener('click', myChoice);
paper.addEventListener('click', myChoice);
scissor.addEventListener('click', myChoice);
lizard.addEventListener('click', myChoice);
spock.addEventListener('click', myChoice);
