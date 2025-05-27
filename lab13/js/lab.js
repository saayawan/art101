/*
 * Author: Saaya Wan
 * Created: May 26 th 2025
 * Lab 13 - Loops
 * This script loops through numbers 1 to 200 and outputs "Fizz", "Buzz", "Boom"
 * based on whether the number is divisible by 3, 5, or 7 (or combinations).
 */

// Function to generate FizzBuzzBoom output


function fizzBuzzBoom() {
  let outputStr = "";

  for (let i = 1; i <= 200; i++) {
    let str = "";

    // Check divisibility
    if (i % 3 === 0) str += "Fizz!";
    if (i % 5 === 0) str += "Buzz!";
    if (i % 7 === 0) str += "Boom!";

    // If not divisible by any, use the number itself
    if (str === "") str = i;

    // Add to final output string
    outputStr += str + "<br>";
  }

  // Send to output div
  $("#output").html(outputStr);
}

// Call the function when the page is ready
$(document).ready(function () {
  fizzBuzzBoom();
});




/*// BONUS!!!! Define factors and their output words
const FACTOR1 = 3;
const WORD1 = "Fizz";

const FACTOR2 = 5;
const WORD2 = "Buzz";

const FACTOR3 = 7;
const WORD3 = "Boom";

const FACTOR4 = 11;
const WORD4 = "Bang";

// FizzBuzz function
function fizzBuzz() {
  let outputStr = "";  // We'll build this string to output at the end

  for (let i = 1; i <= 200; i++) {
    let str = "";

    if (i % FACTOR1 === 0) str += WORD1;
    if (i % FACTOR2 === 0) str += WORD2;
    if (i % FACTOR3 === 0) str += WORD3;
    if (i % FACTOR4 === 0) str += WORD4;

    if (str === "") str = i;

    outputStr += str + "<br>";
  }

  // Display result in output div
  $("#output").html(outputStr);
}

// Call the function once the page is ready
$(document).ready(function () {
  fizzBuzz();
});

*/