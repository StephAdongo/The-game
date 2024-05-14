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
   else if (humanChoice==="rock" && computerChoice ==="paper") {
    console.log("You lose!Paper beats Rock");
   }
   if (humanChoice==="paper" && computerChoice==="rock") {
    console.log("You win! Paper beats rock");
   }
   if (humanChoice==="scissors" && computerChoice==="paper") {
    console.log("You win! Scissors cut Paper");
   }
   if (humanChoice==="rock" && computerChoice==="scissors") {
    console.log("You win! Rock beats Scissors");
   }
   if (humanChoice==="paper" && computerChoice==="scissors") {
    console.log("You lose!Scissors cut Paper");
   }
   else if(humanChoice==="scissors" && computerChoice==="rock") {
    console.log("You lose! Rock beats Scissors");
   }
} 

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(); 
const results=playRound(humanSelection, computerSelection);

  function playGame () {
    const humanScore = 0;
    const computerScore = 0;
    for(i = 0;i < 4; i++) {
       const computerChoice =  getComputerChoice();
       const humanChoice = prompt("Rock, Paper, Scissors");

       playRound(humanChoice.toLowerCase(), computerChoice);
    }
    if (humanScore>computerScore) {
        console.log("You win!");
    }
    else if(computerScore>humanScore) {
        console.log("You lose!");
    }
    
 }
   
 playGame();
  
