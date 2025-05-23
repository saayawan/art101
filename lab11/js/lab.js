/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Saaya Wan
   Date: 19 May 2025
*/


/*// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  return inputString.split('').sort().join('');
}
*/

/*// click listener for button
$("#submit").click(function(){
  // get value of input field
  const userName = $("#user-name").val();
  
  // sort it
  const userNameSorted = sortString(userName);
  
  // append a new div to our output div
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});
*/

$(document).ready(function() {

  function sortString(inputString) {
    return inputString.split('').sort().join('');
  }

  function anagram(inputString) {
    const arr = inputString.split('');
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
  }

  $("#submit").click(function(){
    const userName = $("#user-name").val();
    const sortedName = sortString(userName);
    $("#output").append(`<p><strong>Sorted:</strong> ${sortedName}</p>`);
  });

  $("#anagram").click(function(){
    const userName = $("#user-name").val();
    const mixedName = anagram(userName);
    $("#output").append(`<p><strong>Anagram:</strong> ${mixedName}</p>`);
  });

  $("#glitch").click(function(){
    $("body").css("background-color", "black");
    $("*").css("color", "lime");
    $("#output").append("<p>⚠️ Glitch Activated ⚠️</p>");
    setTimeout(() => {
      $("body").css("background-color", "");
      $("*").css("color", "");
    }, 2000);
  });

  $("#dark-mode").click(function(){
    $("body").toggleClass("dark-mode");
  });

  setInterval(() => {
    $("body").css("background-color", "black");
    $("*").css("color", "magenta");
    $("#output").append("<p><em>The matrix pulses... </em></p>");
    setTimeout(() => {
      $("body").css("background-color", "");
      $("*").css("color", "");
    }, 1000);
  }, 10000);
});
