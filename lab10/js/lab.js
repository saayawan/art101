// lab.js - jQuery DOM Manipulation & Bonus Chat Features
// Author: Saaya Wan
// Date: 15 May 2025

function generateRandomText() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  return text.slice(randStart, randStart + randLen);
}

function shuffleText(text) {
  const array = text.split("");
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join("");
}

$(document).ready(function () {
  // Generate text on button click
  $("#make-convo").click(function () {
    const newText = generateRandomText();
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
  });

  let isLeft = true;

  function addMessage(text) {
    const direction = isLeft ? "left" : "right";
    const bubble = `<div class="text ${direction}"><p>${text}</p></div>`;
    $("#output").append(bubble);
    isLeft = !isLeft;
  }

  // BROKEN VERSION:
  // $("#snd-message").click(function () {

  // FIXED VERSION:
  $("#send-message").click(function () {
    console.log("Button clicked"); // Confirm event is triggered
    const userInput = $("#user-input").val().trim();
    if (userInput !== "") {
      const shuffled = shuffleText(userInput);
      addMessage("Anagram: " + shuffled);
      $("#user-input").val(""); // Clear input
    }
  });

  // Also send on Enter key
  $("#user-input").keypress(function (e) {
    if (e.which === 13) {
      $("#send-message").click();
    }
  });
});
