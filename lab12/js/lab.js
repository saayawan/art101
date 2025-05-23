/*
 * Author: Saaya Wan
 * Date: 2025-05-22
 * Lab 12: Sorting Hat with Bonus Features
 */

function sortingHat(str) {
  // Hash the name to get a number
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i);
  }

  // Get a number between 0–3
  const mod = Math.abs(hash) % houseArray.length;

  // Return the corresponding house object
  return houseArray[mod];
}

// Define the houses as an array of objects
const houseArray = [
  {
    name: "Gryffindor",
    description: "Brave, daring, and chivalrous.",
    image: "gryffindor.jpeg"
  },
  {
    name: "Ravenclaw",
    description: "Wise, creative, and intelligent.",
    image: "ravenclaw.webp"
  },
  {
    name: "Hufflepuff",
    description: "Loyal, patient, and hardworking.",
    image: "hufflepuff.webp"
  },
  {
    name: "Slytherin",
    description: "Cunning, ambitious, and resourceful.",
    image: "slytherin.jpg"
  }
];

$("#button").click(function () {
  const name = $("#input").val();
  if (!name) {
    $("#output").html("<p>Please enter a name!</p>");
    return;
  }

  const house = sortingHat(name);

  $("#output").html(`
    <p>The Sorting Hat has sorted you into <strong>${house.name}</strong>!</p>
    <p>${house.description}</p>
    <img src="img/${house.image}" alt="${house.name} emblem" width="200">
  `);
});
