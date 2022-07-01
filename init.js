let userWin = 0;
let computerWin = 0;
const selectorButtons = document.querySelectorAll('.rps-selector');
let gamesPlayed = 0;
const resultsDiv = document.querySelector('.display-results');
const resultsText = document.createElement('p');

function computerPlay(){
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(`random number is ${randomNumber}`);
    let choices = ['scissors', 'paper', 'rock'];
    return choices[randomNumber];
}

function playRound (user, computer){
    if(user === computer){
        return "It's a tie!"
    } else if(user === 'scissors'){
        switch (computer){
            case 'paper':
                userWin++
                return 'You win';
            case 'rock':
                computerWin++
                return 'You lose';
        }
    } else if(user === 'paper'){
        switch (computer){
            case 'rock':
                userWin++
                return 'You win';
            case 'scissors':
                computerWin++
                return 'You lose';
        }
    } else {
        switch (computer){
            case 'scissors':
                userWin++
                return 'You win';
            case 'paper':
                computerWin++
                return 'You lose';
        }
    }
}

function resetGame(){
    gamesPlayed = 0;
    userWin = 0;
    computerWin = 0;
    resultsDiv.removeChild(resultsDiv.firstChild);
}

function overallWinner(userWin, computerWin){
    if(userWin === computerWin){
        return "It's a tie game, guess you'll have to play again!"
    } else if (userWin > computerWin){
        return "Congratulations, you're the overall winner!"
    } else {
        return "Hahaha you heckin' loser"
    }
}

// function playGame(bestOf = 5){
    
//     for (let i = 0; i < bestOf; i++) {

//         let userChoice = userInput();
//         let computerChoice = computerPlay();
//         let theResult = playRound(userChoice, computerChoice);

//         console.log(
//             `
//             This round:
//             User: ${userChoice}
//             Computer: ${computerChoice}

//             Result:
//             ${theResult}

//             Score:
//             User: ${userWin}
//             Computer: ${computerWin}
//             `
//         );

//      }

//      console.log(overallWinner(userWin, computerWin));

// }

selectorButtons.forEach(button => button.addEventListener('click', () => {
    let playerChoice = button.querySelector('p').innerText.toLowerCase();
    let computerChoice = computerPlay();
    let result = playRound(playerChoice, computerChoice);
    gamesPlayed++;

    console.log(
        `
        Player: ${playerChoice}
        Computer: ${computerChoice}
        Result: ${result}
        Score: ${computerWin} - ${userWin}
        Gamer Played: ${gamesPlayed}
        `
    )

    if (gamesPlayed < 3) {
        resultsText.textContent = `Players choice is: ${playerChoice}
        Computer choice is ${computerChoice}
        The result is: ${result}`
    } else {
        resultsText.textContent = `Players choice is: ${playerChoice}
        Computer choice is ${computerChoice}
        The result is: ${result}
        ${overallWinner(userWin, computerWin)}`
    }
    
    resultsDiv.appendChild(resultsText);
    
}));

document.querySelector('.reset').addEventListener('click', resetGame);