"use strict";
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, 
//and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned
//5 points for shooting the alien.
Object.defineProperty(exports, "__esModule", { value: true });
//• If the alien’s color isn’t green, print a statement that the player
// just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block.
let alienColor = "Green";
if (alienColor === "Green") {
    console.log("Player just earned 5 points for shooting aliens");
}
else {
    console.log("Player just earned 10 points.");
}
if (alienColor === "blue") {
    console.log("I am from if statement");
}
else {
    console.log("I am from else  statement.");
}
