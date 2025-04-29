/*
 * Author: Saaya Wan
 * Created: April 24, 2025
 * Description: Variables for my Benz AMG G-Class vehicle.
 */

var make = "Mercedes-Benz";
var model = "AMG G-Class";
var color = "Matte Black";
var year = 2021;
var ownIt = true;
var currentYear = new Date().getFullYear();
var age = currentYear - year;

document.writeln("Make: " + make + "<br>");
document.writeln("Model: " + model + "<br>");
document.writeln("Color: " + color + "<br>");
document.writeln("Year: " + year + "<br>");
document.writeln("Own It: " + ownIt + "<br>");
document.writeln("Vehicle Age: " + age + "<br>");
