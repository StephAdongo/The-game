function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber){
        case 0:
            return "rock";
            case 1:
                return "paper";
                case 2:
                    return "scissors";
    }
}
function getHumanChoice() {
   let input = prompt("What`s your input?");
   if (input ==="rock") {
    return("rock");
   }
   if (input ==="paper"){
    return("paper");
   }
   if(input ==="scissors") {
    return("scissors");
   }
}
const humanScore = 0;
const computerScore = 0;

function playRound(humanChoice, computerChoice) {
   humanChoice = humanChoice.toLowerCase();
   if ( humanChoice === computerChoice) {
    console.log("Tie");
   }
   
}