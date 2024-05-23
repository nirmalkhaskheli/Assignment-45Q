//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
//uppercase, and titlecase.





var personName:string="nirmal";
console.log(personName.toLowerCase());

console.log( personName.toUpperCase());

let firstLetter:string =personName.charAt(0).toUpperCase();
let restLetters:string =personName.slice(1) .toLowerCase();
let titleCase =firstLetter+restLetters;
console.log(titleCase);