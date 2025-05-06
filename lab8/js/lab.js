/*
 * Author: Saaya Wan
 * Created: 6 May 2025
 * Lab 8 - Anonymous Functions and Callbacks
 * This script uses the map() function with both named and anonymous callbacks
 */

// Step 1: Create an array of numbers
let numbers = [2, 4, 6, 8];
console.log("Original numbers: (" + numbers.length + ") [" + numbers.join(", ") + "]");

// Step 2: Named function to double each number
function double(x) {
    // Multiply input number by 2
    return x * 2;
}

// Step 3: Use map() with the named function
let doubled = numbers.map(double);
console.log("Doubled numbers: (" + doubled.length + ") [" + doubled.join(", ") + "]");

// Step 4: Use map() with an anonymous function to square each number
let squared = numbers.map(function(x) {
    return x * x;
});
console.log("Squared numbers: (" + squared.length + ") [" + squared.join(", ") + "]");

// Bonus: Display results using jQuery in the HTML #output div
$(document).ready(function() {
    let resultHTML = `
        <h3>Original numbers: (${numbers.length}) [${numbers.join(", ")}]</h3>
        <h3>Doubled numbers: (${doubled.length}) [${doubled.join(", ")}]</h3>
        <h3>Squared numbers: (${squared.length}) [${squared.join(", ")}]</h3>
    `;
    $('#output').html(resultHTML); // Display the results in the #output div
});
