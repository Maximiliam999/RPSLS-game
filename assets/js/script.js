var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissor = document.getElementById("scissor");
var lizard = document.getElementById("lizard");
var spock = document.getElementById("spock");
var manScore = 0;
var machineScore = 0;
var machineChoice;
var manChoice;


function randomNumber() {
   var machine = Math.floor(Math.random() * 5) + 1;

   switch (machine) {
      case 0:
         machineChoice = "Rock";
         break;
      case 1:
         machineChoice = "Paper";
         break;
      case 2:
         machineChoice = "Scissor";
         break;
      case 3:
         machineChoice = "Lizard";
         break;
      case 4:
         machineChoice = "Spock";
         break;
   }


}

function rockChoice() {
   randomNumber();
   manChoice = "Rock";
   document.getElementById("manresult").innerHTML = manChoice;
   document.getElementById("machineresult").innerHTML = machineChoice;
   if (manChoice === machineChoice) {
      document.getElementById("result").innerHTML = "It's a Tie!";
   } else if (machineChoice == "Scissor" || machineChoice == "Lizard") {
      document.getElementById("result").innerHTML = "You Win!";
      manScore++;
      
   } else {
      document.getElementById("result").innerHTML = "You Lose!";
      machineScore++;
   }

   updateScore();
}


function paperChoice() {
   randomNumber();
   manChoice = "Paper";
   document.getElementById("manresult").innerHTML = manChoice;
   document.getElementById("machineresult").innerHTML = machineChoice;
   if (manChoice === machineChoice) {
      document.getElementById("result").innerHTML = "It's a Tie!";
   } else if (machineChoice === "Rock" || machineChoice == "Spock") {
      document.getElementById("result").innerHTML = "You Win!";
      manScore++;
   } else {
      document.getElementById("result").innerHTML = "You Lose!";
      machineScore++;
   }
   updateScore();
}


function scissorChoice() {
   randomNumber();
   manChoice = "Scissor";
   document.getElementById("manresult").innerHTML = manChoice;
   document.getElementById("machineresult").innerHTML = machineChoice;
   if (manChoice === machineChoice) {
      document.getElementById("result").innerHTML = "It's a Tie!";

   } else if (machineChoice === "paper" || machineChoice == "lizard") {
      document.getElementById("result").innerHTML = "You Win!";
      manScore++;
   } else {
      document.getElementById("result").innerHTML = "You Lose!";
      machineScore++;
   }
   updateScore();
}


function lizardChoice() {
   randomNumber();
   manChoice = "Lizard";
   document.getElementById("manresult").innerHTML = manChoice;
   document.getElementById("machineresult").innerHTML = machineChoice;
   if (manChoice === machineChoice) {
      document.getElementById("result").innerHTML = "It's a Tie!";
   } else if (machineChoice === "Spock" || machineChoice == "Paper") {
      document.getElementById("result").innerHTML = "You Win!";
      manScore++;
   } else {
      document.getElementById("result").innerHTML = "You Lose!";
      machineScore++;
   }
  updateScore();
}

function spockChoice() {
   randomNumber();
   manChoice = "Spock";
   document.getElementById("manresult").innerHTML = manChoice;
   document.getElementById("machineresult").innerHTML = machineChoice;
   if (manChoice === machineChoice) {
      document.getElementById("result").innerHTML = "It's a Tie!";
   } else if (machineChoice === "Scissor" || machineChoice === "Rock") {
      document.getElementById("result").innerHTML = "You Win!";
      manScore++;
   } else {
      document.getElementById("result").innerHTML = "You Lose!";
      machineScore++;
   }
  updateScore();

}

function updateScore() {
   document.getElementById("machineScore").innerHTML = machineScore;
   document.getElementById("manScore").innerHTML = manScore;
   if(manScore===5) {
      alert("You Win!")
      document.location.reload();
      clearInterval(interval);
   }  
   else if(machineScore===5){
      alert("You Lose!")
      document.location.reload();
      clearInterval(interval);
   } 
}



rock.addEventListener('click', rockChoice);
paper.addEventListener('click', paperChoice);
scissor.addEventListener('click', scissorChoice);
lizard.addEventListener('click', lizardChoice);
spock.addEventListener('click', spockChoice);