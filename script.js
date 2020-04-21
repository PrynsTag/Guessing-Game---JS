let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
   randomNumber = Math.floor(Math.random() * 10);
   return randomNumber;
}

const getAbsoluteDistance = (x, y) => {
    return Math.abs(x - y);
}

const compareGuesses = (userGuess, computerGuess, generateTarget) => {
    if (getAbsoluteDistance(userGuess, generateTarget) <= getAbsoluteDistance(computerGuess, generateTarget)) {
        return true;
    } else {
        return false;
    }
}

const updateScore = score => {
    score = compareGuesses();
    if (score === true) {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}

const advanceRound = () => {
    currentRoundNumber += 1;
}