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
    return the result e.g "You lose, paper beats rock!"

Create a function named game that takes argument (bestOf)
    Execute a loop using bestOf argument
        run computerPlay function and store result in computerChoice variable;
        run userChoice;
        run function playRound(computerChoice, userChoice);
    return overall result

*/

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

