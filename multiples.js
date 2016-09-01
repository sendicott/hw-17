// import test from 'ava';

/**
 * Write a function that accepts an array of numbers and returns 
 * all of the numbers that are divisible by both 3 and 5.
 * 
 * Write two versions: one with loops and one with functional
 * tools (map, filter, reduce, find).
 */

let testArray = [1, 3, 5, 12, 15, 20, 25, 5, 10, 30];

//---------------------loop---------------------
function multiples(arrayOfNumbers) {
    let divisibleArray = [];
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] % 3 === 0 && arrayOfNumbers[i] % 5 === 0) {
            divisibleArray.push(arrayOfNumbers[i]);
        }
    }
    return divisibleArray;
}

// console.log(multiples(testArray));
//---------------------loop---------------------

//---------------------functional tools---------------------
function makesTheCut(arrayOfNumbers) {
    if (arrayOfNumbers % 3 === 0 && arrayOfNumbers % 5 === 0) {
        return true;
    } else {
        return false;
    }
}

let filteredAnswer = testArray.filter(makesTheCut);

console.log(filteredAnswer);
//---------------------functional tools---------------------

// test(function (current) {
//     current.deepEqual(multiples(testArray), [15, 30]);
// });