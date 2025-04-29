/*
 * Author: Saaya Wan
 * Created: 2025-04-28
 * Lab 6: JavaScript Arrays & Objects
*/

// Declare transport methods
let myTransport = ["bike", "bus", "walking", "car", "scooter"];

// Declare primary ride object
let myMainRide = {
  make: "Mercedes-Benz",
  model: "AMG G-Class",
  color: "Matte Black",
  year: 2021,
  ownIt: true,
  age: function() {
    return new Date().getFullYear() - this.year;
  }
};

// Output to document
document.writeln("Getting around: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
