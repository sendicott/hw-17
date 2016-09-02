/**
 * In many programs (like VS Code), a text space is divided up into a 
 * bunch of rows and a bunch of columns. When you press tab, you move 
 * ahead several spaces in the same row. Let's say a program will move 
 * the cursor to every fourth position (space 0, space 3, space 7, space 
 * 11, etc) after the user presses tab
 * 
 * Write a function that, given an input of a current position, returns the 
 * space the cursor should move to when the users presses tab.
 * 
 * For example, if the user is in position 3, tab(3) should move them to 
 * position 7. tab(4) should also move them to position 7, as should tab(5).
 */

/**
 * 1. Take number and make a for loop
 * 2. Count down in 4s, starting from the number itself
 * 3. Once lower than 4, calculate its distance from 0
 * 4. Use that distance to calculate how much further it 
 *      needs to reach next tab
 */

// positions = 0, 3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51


function tabitha(currentPosition) {
    let countdown = currentPosition + 1;
    console.log(currentPosition + ": " + countdown);
    while (countdown > 4) {
        countdown = countdown - 4;
        console.log(currentPosition + ": " + countdown);        
    }
    return currentPosition + (4 - countdown);
}

// console.log(tabitha(17)); //  19
// console.log(tabitha(33)); //  35
// console.log(tabitha(6)); //  7
// console.log(tabitha(42)); // 43
console.log(tabitha(47)); // 51
