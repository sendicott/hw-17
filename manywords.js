/**
 * Use your function from the previous problem to find the
 * word in a list with the highest score. Write a function
 * that, given a list of words, returns the word with the 
 * highest score.
 */

let testString = "No winning words about death to me, shining Odysseus! By God I would rather slave on earth for another man - some dirt poor tenant farmer who scrapes to keep alive - than down here over all the breathless dead.";



// if (['a', 'e', 'i', 'o', 'u'].indexOf(letter) !== -1) {
// }

// 3. appends an array of letter scores to each object
function assignScore(letter) {
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
        return 2;
    } else {
        return 1;
    }
}

// 4. reduce array of scores to single number
function reduceScore(letterObject, objectLetter) {
    return letterObject + objectLetter;
}

// 2. turns each word into an object with .name, .array of letters, and array of scores
function wordSplit(word) {
    let splitWord = {
        name: word,
        letters: word.split(""),
        score: word.split("").map(assignScore).reduce(reduceScore, 0),
    }
    return splitWord;
}

// 5. compare the scores of each word object and return the highest
function pickTheBest(snowball, snowflake) {
    if (snowball.score > snowflake.score) {
        return snowball;
    } else {
        return snowflake;
    }
}

// LAST: should run all the function pieces
function kitAndCaboodle(sentence) {
    // 1. turns sentence into array of words
    let wordArray = sentence.split(" ");
    // console.log(wordArray);
    // 2. turns array of words into an array of objects with score appended
    let objectArray = wordArray.map(wordSplit);
    let greaterGood = objectArray.reduce(pickTheBest, objectArray[0]);
    return greaterGood.name + ": " + greaterGood.score;
    
}

console.log(testString);
console.log(kitAndCaboodle(testString));


