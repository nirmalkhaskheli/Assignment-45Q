"use strict";
//Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations.
// You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
//Start with your program from Exercise 14. Add a print statement at the end of your program
// stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of 
//the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
var myFriends = ["Soniya", "Areeba", "Haniya", "Priya"];
console.log(`Due to some reasons${myFriends[1]} will not come on dinner.`);
myFriends[1] = "Manahil";
console.log(` New list of my friend who are coming to dinner:`);
for (let i = 0; i < myFriends.length; i++) {
    console.log(`${i}. ${myFriends[i]}`);
}
