"use strict";
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
//print a message indicating the number of people you are inviting to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
var myFriends = ["Areeba", "Jiya", "Haniya", "Aliha", "Manahil"];
console.log(`I am inviting ${myFriends.length} friends to the dinner which are following:\n`);
for (let i = 0; i < myFriends.length; i++) {
    console.log(`${i + 1}. ${myFriends[i]}`);
}
