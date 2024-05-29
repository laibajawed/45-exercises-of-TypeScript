"use strict";
// create a variable called alien colour
let alienColour = 'green';
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if (alienColour === 'green') {
    console.log("player just earned 5 points!");
}
// • Write one version of this program that passes the if test and another that fails
alienColour = 'yellow';
//  (The version that fails will have no output.)
if (alienColour === 'green') {
    console.log("player just earned 5 points!");
}
