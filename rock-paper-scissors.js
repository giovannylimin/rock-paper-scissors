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

