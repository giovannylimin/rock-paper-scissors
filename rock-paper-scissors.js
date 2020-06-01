function get(query){
  return document.querySelector(query);
}

const header = get("header");
const selection = get("#selection");
const option = document.querySelectorAll("#option button")
const play = get("#play");
const help = get("#selection .details");
const playerWindow = get("#playerSelect");
const computerWindow = get("#computerSelect");
const rock = get (".rock");
const paper = get (".paper");
const scissors = get (".scissors");


play.addEventListener("click", previewSelection);

function previewSelection(event){
  header.style.opacity = 0;
  play.style.opacity = 0;
  selection.style.transform = "translate(0, 25vh) scale(0.8, 0.8)";
  for(let i=0; i<option.length; i++){
    option[i].style.borderColor = "rgb(255, 255, 255)";
    option[i].disabled = false;
  }
  setTimeout(()=>{
  help.style = "opacity: 1; transition: 0.5s linear;";
}, 800)
   playerWindow.style = "opacity: 1; transform: translate(30vw, 0); transition: 1s"
  computerWindow.style = "opacity: 1; transform: translate(-30vw, 0); transition: 1s"
 
}



let playerScore = 0;
      let computerScore = 0;
      function computerPlay(){
        const computerChoice = [`rock`, `paper`, `scissors`];
        const randomIndex = Math.floor(Math.random()*(computerChoice.length));
        return computerChoice[randomIndex];
      }
      function playerPlay(){
        const playerChoice = prompt("Rock, Paper, or Scissors?");
        const playerChoiceFin = playerChoice.toLocaleLowerCase(); 
        if(playerChoiceFin == `rock` || playerChoiceFin == `paper` || playerChoiceFin == `scissors` ){
          return playerChoiceFin;
        }else{
          alert(`Error! Check your spelling. Please choose Rock, Paper or Scissors. (No Elephant :D )`)
          playerPlay();
        }
      }
      function playRound (){
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        if(computerSelection == playerSelection){
          return `It's a tie! Both have choosen: ${computerSelection}`;
        }else if(computerSelection == `rock`){
          switch(true){
            case playerSelection == `paper` :
            playerScore++;
            return `You Win! Paper beats Rock`;
            break;
            case playerSelection == `scissors` :
            computerScore++;
            return `You Lose! Rock beats Scissors`;
            break;
          }
        }else if (computerSelection == `paper`){
          switch(true){
            case playerSelection == `rock` :
            computerScore++;
            return `You Lose! Paper beats Rock`;
            break;
            case playerSelection == `scissors` :
            playerScore++;
            return `You Win! Scissors beats Paper`;
            break;
          }
        } else if (computerSelection == `scissors`){
            switch(true){
              case playerSelection == `rock` : 
              playerScore++;
              return `You win! Rock beats Scissors`;
              break;
              case playerSelection == `paper`:
              computerScore++;
              return `You lose! Scissors beats Paper`;
              break;
          }
        }
      }
      function game(){
        playerScore = 0;
        computerScore = 0;
        console.log(playRound());
        console.log(playRound());
        console.log(playRound());
        console.log(playRound());
        console.log(playRound());
        function whoWin(){
          if (playerScore > computerScore){
          return `Congratulations, You Win This Game!`;
          } else if (playerScore < computerScore){
          return `Oh No, You Lose!`;
          } else {
          return `Whoops, No One Wins...`
          }          
        }
        console.log(whoWin());
        console.log(`Your score: ${playerScore}, Computer's score: ${computerScore}.`)
        }

