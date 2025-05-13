/*
   lab.js - Lab 9: Libraries & jQuery

   Requirements: jQuery must be loaded for this script to work.

   Author: Saaya Wan
   Date: 12th May 2025
*/

// Add buttons to each section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#problems").append("<button id='button-problems'>Make Special</button>");
$("#reflection").append("<button id='button-reflection'>Make Special</button>");

// Add click listeners to toggle the 'special' class
$("#button-challenge").click(function() {
  $("#challenge").toggleClass("special");
});

$("#button-problems").click(function() {
  $("#problems").toggleClass("special");
});

$("#button-reflection").click(function() {
  $("#reflection").toggleClass("special");
});

// Add dynamic content to the #output div
$("#output").append("<p>This output was added using jQuery!</p>");
