/*
 * Author: Saaya Wan
 * Created: 2025-05-4
 * Lab 7: Functions   
*/

// -------- Original Version (Commented Out) -------- //
//function sortUserName() {
  // Ask the user for their name
  //let userName = window.prompt("Hi! What's your name?");
  
  // Split, sort, and re-join the name
  // let sortedName = userName.split('').sort().join(''); 

  // Return a fun message
  //return "I've fixed your name: " + sortedName;}

// Output the result to the page
//document.getElementById("output").innerHTML = "<p>" + sortUserName() + "</p>";



// -------- Bonus Version -------- //

//function processUserName() {
  // Ask for the user's name
  //let name = window.prompt("Hi! What's your name?");

  // Bonus 1: Remove spaces
  //let cleaned = name.replaceAll(" ", "");

  // Convert to array, shuffle it (simple random sort), and join back
 // let shuffled = cleaned.split('').sort(() => 0.5 - Math.random()).join('');

  // Bonus 2: Capitalize the result
 // let finalName = shuffled.charAt(0).toUpperCase() + shuffled.slice(1);

  // Create message
 // let result = "I've fixed your name: " + finalName;

  // Bonus 3: Output in a styled <div>
//  document.getElementById("output").innerHTML = '<div class="name-output">' + result + '</div>';}

// Run the function after page loads to avoid double prompt
//window.onload = processUserName;


/*
 * Author: Saaya Wan
 * Created: 2025-05-04
 * Lab 7: Functions
 */

// Function to ask for user name and return sorted version
function sortUserName() {
  let userName = window.prompt("Hi! What's your name?");
  let sortedName = userName.split('').sort().join('');
  return "I've fixed your name: " + sortedName;
}

// Run when document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  let result = sortUserName();
  let outputEl = document.getElementById("output");
  outputEl.innerHTML = `<p class="name-output">${result}</p>`;
});
