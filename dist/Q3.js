"use strict";
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
//uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
var personName = "nirmal";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
let firstLetter = personName.charAt(0).toUpperCase();
let restLetters = personName.slice(1).toLowerCase();
let titleCase = firstLetter + restLetters;
console.log(titleCase);
