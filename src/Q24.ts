//More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
//If you want to try more comparisons, write more tests. Have at least one True and one False result 
//for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, 
//greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in an array

//• Test whether an item is not in an array

let apple ="apple";
let upperCase = "APPLE";
let twenty = 20;
let thirty = 30;
let fruits :string[] =["apple","banana","mango"];

//test for equality and inequality with string


console.log("Is apple equal to apple?");
console.log(apple=="apple");

console.log("Is apple  not equal to apple?");
console.log(apple!="apple");

//Test using lowerCase function


console.log("Is APPLE  equal to apple after converting into lowerCase?");
console.log(upperCase.toLowerCase()  =="apple");

console.log("Is APPLE  equal to apple after converting into lowerCase?");
console.log(upperCase.toLowerCase()  !="apple");

//Numerical test
//Equal to

 console.log("Is twenty  equal to thirty?");
console.log(twenty == thirty);

console.log("Is twenty  not equal to thirty?");
console.log(twenty != thirty);


//Greater than
console.log("Is twenty  greater than ten?");
console.log(20 > 10);

//Smaller than

console.log("Is twenty less than ten?");
console.log(20 < 10);

//greater than or equal to

console.log("Is twenty  greater than or equal to ten?");
console.log(20 >= 10);

//less than or equal to

console.log("Is twenty  less than  or equal to ten?");
console.log(20 <= 10);

//tests using "and or "or" operators 
//using &&
console.log("twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10  && twenty > 10);

console.log("twenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10  && twenty > 30);

//using or
console.log("20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 ||  20 == 20);

console.log("20 is greater than 50 or 20 is  not equal to 20");
console.log(20 > 50 ||  20 != 20);

//test wether and item is include in array

console.log("Is mango included in my array");
console.log(fruits.includes("mango"));

console.log("Is mango not included in my array");
console.log(!fruits.includes("mango"));



















