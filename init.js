/*
Create a function named computerPlay that
    generates a random number between 1 and 3 stored in variable randomNumber;
    convert random number to rock, paper or scissors stored in variable choice;
    return choice;

Create user input prompt with three choices (rock, paper or scissors) and store in variable userChoice;
    Make user input case insensitive, convert to all lower case;

Create a function named playRound that
    takes two parameters (computerChoice, userChoice);
    compares the parameters to determine a winner;
        if user 
    return the result e.g "You lose, paper beats rock!"

Create a function named game that takes argument (bestOf)
    Execute a loop using bestOf argument
        run computerPlay function and store result in computerChoice variable;
        run userChoice;
        run function playRound(computerChoice, userChoice);
    return overall result

*/
let userWin = 0;
let computerWin = 0;

function computerPlay(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            return 'scissors';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'rock';
    }
}

function userInput (){
    let theInput = prompt('Scissors, paper or rock?').toLowerCase(); 
    if(theInput === 'scissors' || theInput === 'paper' || theInput === 'rock'){
        return theInput;
    } else {
        while(theInput !== 'scissors' && theInput !== 'paper' && theInput !== 'rock'){
            theInput = prompt('please try again');
        }
        return theInput;
    }
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

function overallWinner(userWin, computerWin){
    if(userWin === computerWin){
        return "It's a tie game, guess you'll have to play again!"
    } else if (userWin > computerWin){
        return "Congratulations, you're the overall winner!"
    } else {
        return "Hahaha you heckin' loser"
    }
}

function game(bestOf = 3){
    
    for (let i = 0; i < bestOf; i++) {

        let userChoice = userInput();
        let computerChoice = computerPlay();
        let theResult = playRound(userChoice, computerChoice);

        console.log(
            `
            This round:
            User: ${userChoice}
            Computer: ${computerChoice}

            Result:
            ${theResult}

            Score:
            User: ${userWin}
            Computer: ${computerWin}
            `
        );

     }

     console.log(overallWinner(userWin, computerWin));

}

game();


