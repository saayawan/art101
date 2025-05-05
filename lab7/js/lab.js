/*
 * Author: Saaya Wan
 * Created: 2025-05-4
 * Lab 7: Functions   
*/

function sortUserName() {
  // Ask the user for their name
  let userName = window.prompt("Hi! What's your name?");
  
  // Split, sort, and re-join the name
  let sortedName = userName.split('').sort().join('');
  
  // Return a fun message
  return "I've fixed your name: " + sortedName;
}

// Output the result to the page
document.getElementById("output").innerHTML = "<p>" + sortUserName() + "</p>";

