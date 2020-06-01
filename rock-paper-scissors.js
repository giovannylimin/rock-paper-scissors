function get(query){
  return document.querySelector(query);
}

const header = get("header");
const headerTitle = get("header h1");
const headerPara = get("header p");
const selection = get("#selection");
const option = document.querySelectorAll("#option button")
const play = get("#play");
const help = get("#selection .details");
const playerWindow = get("#playerSelect");
const computerWindow = get("#computerSelect");
const rock = get (".rock");
const paper = get (".paper");
const scissors = get (".scissors");
const mark = get (".mark")


play.addEventListener("click", previewSelection);
for(let i=0; i<option.length; i++){
  option[i].disabled = true;
}

function previewSelection(event){
  header.style.opacity = 0;
  play.style.opacity = 0;
  selection.style.transform = "translate(0, 25vh) scale(0.8, 0.8)";
  for(let i=0; i<option.length; i++){
    option[i].disabled = false;
  }
  hoverableOptions();
  setTimeout(()=>{
    help.style = "opacity: 1; transition: 0.5s linear; animation: help 1s infinite alternate;";
    play.style = "display: none;";
  }, 800)
  playerWindow.style = "opacity: 1; left: 10vw ; transition: 1s"
  computerWindow.style = "opacity: 1; right: 10vw ; transition: 1s"
 
}

let playerChoice;
let computerChoice;

function hoverableOptions(){
  selection.style.diplay = "block;"
for(let i=0; i<option.length; i++){
  
  option[i].addEventListener("mouseover", ()=>{
    option[i].style = "border-color: rgb(255, 255, 255); box-shadow: 0 0  2vw  rgb(255, 255, 255); transform: scale(1.1,1.1); transition : border 0s, transform 0.5s;"
  })
  option[i].addEventListener("mouseout", ()=>{
    option[i].style = "transition : 0.5s;"
  })
  option[i].addEventListener("click", ()=>{
    playerChoice = option[i].className;
    computerChoice = computerPlay();
    previewResult();
  })
}
}
function computerPlay(){
  const computerChoice = [`rock`, `paper`, `scissors`];
  const randomIndex = Math.floor(Math.random()*(computerChoice.length));
  return computerChoice[randomIndex];
}

function previewResult(){
  selection.disabled = 0;
  selection.style = "opacity: 0; display: none;"
  changeBackground("player");
  changeBackground("computer");
  determineWinner();
  header.style.opacity = 1;
  play.textContent = "replay";
  setTimeout(()=> play.style = "display: block, opacity: 1, transform: translate(0, 50vh);", 800)
  
}

function changeBackground(who){
  let i;
  if(who == "player") i = 0;
  else if(who == "computer") i = 1;

  let choice = [playerChoice, computerChoice];
  let backgroundPosition;

  if(choice[i] == "rock"){
    backgroundPosition = "background-position: 59% 36%, 0 0;"
  }else if(choice[i] == "paper"){
    backgroundPosition = "background-position: -4% 38%, 0 0;"
  }else if(choice[i] == "scissors"){
    backgroundPosition = "background-position: -2% 65%, 0 0;"
  }
  
  if(i == 0){
    playerWindow.style = backgroundPosition +"left: 25vw; top: 27vh;" + " opacity: 1; background-image: url(img/hand-sprite.png), linear-gradient( 225deg, rgb(195,202,208) 0%, rgb(231,241,253) 100%); background-size: 47vw, 100%;";
    playerWindow.style.transition = "left 0.8s, top 0.8s";
  }else if (i == 1){
    computerWindow.style = backgroundPosition + "right: 25vw; top: 27vh;" + "opacity: 1; background-image: url(img/hand-sprite.png), linear-gradient( 225deg, rgb(195,202,208) 0%, rgb(213,222,231) 12%, rgb(231,241,253) 56%); background-size: 47vw, 100%;";
    computerWindow.style.transition = "right 0.8s, top 0.8s";
    mark.style.opacity = 0;
  }
}

function determineWinner(){
  let title;
  let para;
  
  if(computerChoice == playerChoice){
    title = `It's a tie!`;
    para = `Both have choosen: ${computerChoice}`;
  }else if(computerChoice == `rock`){
    switch(true){
      case playerChoice == `paper` :
      playerScore++;
      title = `You Win!`;
      para = `Paper beats Rock`;
      break;
      case playerChoice == `scissors` :
      computerScore++;
      title = `You Lose!`
      para = `Rock beats Scissors`;
      break;
    }
  }else if (computerChoice == `paper`){
    switch(true){
      case playerChoice == `rock` :
      computerScore++;
      title = `You Lose!`
      para = `Paper beats Rock`;
      break;
      case playerChoice == `scissors` :
      playerScore++;
      title = `You Win!`
      para = `Scissors beats Paper`;
      break;
    }
  } else if (computerChoice == `scissors`){
      switch(true){
        case playerChoice == `rock` : 
        playerScore++;
        title = `You win!`
        para = `Rock beats Scissors`;
        break;
        case playerChoice == `paper`:
        computerScore++;
        title = `You lose!`
        para = `Scissors beats Paper`;
        break;
    }
  }
  headerTitle.textContent = title;
  headerPara.textContent = para;
}




let playerScore = 0;
let computerScore = 0;
      /*function computerPlay(){
        const computerChoice = [`rock`, `paper`, `scissors`];
        const randomIndex = Math.floor(Math.random()*(computerChoice.length));
        return computerChoice[randomIndex];
      }*/
      /*function playerPlay(){
        const playerChoice = prompt("Rock, Paper, or Scissors?");
        const playerChoiceFin = playerChoice.toLocaleLowerCase(); 
        if(playerChoiceFin == `rock` || playerChoiceFin == `paper` || playerChoiceFin == `scissors` ){
          return playerChoiceFin;
        }else{
          alert(`Error! Check your spelling. Please choose Rock, Paper or Scissors. (No Elephant :D )`)
          playerPlay();
        }
      }*/
      /*function playRound (){
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
        */

