/**
 * Write a function that accepts a name (string) and returns 
 * a 'score' for the string, where each vowel is worth two 
 * points and each consonant is worth one point.
 */

//---------------------loop---------------------
let testString = "defender";

// function loopScore(name) {
//     let score = 0;
//     name = name.split("");
//     console.log(name);
//     // let vowels = ["a", "e", "i", "o", "u"];
//     for (let i = 0; i < name.length; i++) {
//         // for (let j = 0; j < vowels.length; j++) {
//             if (name[i] === "a" || name[i] === "e" || name[i] === "i" || name[i] === "o" || name[i] === "u") {
//                 score = score + 2;
//             } else {
//                 score = score + 1;
//             }
//         // }
//     }
//     return score;
// }

// console.log(loopScore(testString));
//---------------------loop---------------------

//---------------------functional tools---------------------
function assignScore(letter) {
    // let letterArray = [];
    if (letter === "a"|| letter === "e" || letter === "i" || letter === "o" || letter === "u") {
        letter = 
        {
            name: letter,
            score: 2,
        }
    } else {
        letter = 
        {
            name: letter,
            score: 1,
        }
    }
    // letterArray.push(letter);
    console.log(letter);
    return letter;
}

function reduceScore(letterObject, objectLetter) {
    return letterObject + objectLetter.score;
}

let finalScore = testString.split("").map(assignScore).reduce(reduceScore, 0);

console.log(finalScore);
//---------------------functional tools---------------------
