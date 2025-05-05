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


// Author: Saaya Wan
// Created: 2025-05-04
// Lab 7: Functions - Bonus Questions

// 1. Ask for the user's name and remove spaces
function getCleanName() {
  let userName = window.prompt("Hi! What's your name?");
  return userName.replace(/\s+/g, ''); // removes all spaces
}

// 2. Shuffle the name to create an anagram
function shuffleName(name) {
  let array = name.split('');
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join('');
}

// 3. Output the final result inside a styled <div>
function displayAnagram() {
  let cleanName = getCleanName();
  let anagram = shuffleName(cleanName);
  let outputEl = document.getElementById("output");
  outputEl.innerHTML = `<div class="name-output">Here's your anagram: ${anagram}</div>`;
}

// Call the function once the page loads
window.onload = displayAnagram;