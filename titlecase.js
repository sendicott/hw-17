/**
 * Convert a string to title case 
 * (The First Letter Of Each Word Is Capitalized)
 */

let testCase = "But you, Achilles, there's not a man in the world more blest than you - there never has been, never will be one. Time was, when you were alive, we Argives honored you as a god, and now down here, I see, you lord it over the dead in all your power. So grieve no more at dying, great Achilles.";

function capitalize(word) {
    let titleCase = word.charAt(0).toUpperCase() + word.slice(1);
    return titleCase;
}

function wholeNineYards(sentence) {
    // 1. Break string sentence into array of words
    let wordArray = sentence.split(" ");
    // 2. Break array of words into an array of an array of letters
    let letterArray = wordArray.map(capitalize);
    return letterArray.join(" ");
}

console.log(wholeNineYards(testCase));