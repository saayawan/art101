/*
  lab.js - This simple JavaScript/jQuery script appends new elements to an output div

  Requirements: jQuery must be loaded for this script to work.

  Author: Saaya Wan
  Date: 15th May 2025
*/

// Function to generate random text
function generateRandomText() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  return text.slice(randStart, randStart + randLen);
}

// When page is ready...
$(document).ready(function() {
  $("#make-convo").click(function() {
    const newText = generateRandomText();
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
  });
});
