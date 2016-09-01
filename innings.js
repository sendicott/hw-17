/**
 * Write a function that accepts an array of numbers (score per inning) 
 * of a baseball game and returns the total score for the game.
 */


// I definitely did not have to look up how many innings in a game...
let scoreRay = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function innings(scorePerInning, inningPerScore) {
    return scorePerInning + inningPerScore;
}

// returns undefined
let total = scoreRay.reduce(innings, 0);

console.log(total);