"use strict";
// You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guestList = ['Imran Khan', 'Nawaz', 'Asif Ali Zardari'];
let absentGuest = 'Imran Khan';
let newGuest = 'Kamran Tessori';
guestList[0] = newGuest;
// for(let i=0; i<guestList.length; i++){
//     console.log('Dear Mr.' + guestList[i] + ',\n\nIt is our plesure to invite you in our party.\n\nThank you!\n\n')
// }
console.log(`Mr. ${absentGuest} is not coming to the party`);
console.log(' Good news! We found a big table so we are inviting three more guests.');
guestList.unshift('Sir Zia Khan');
guestList.splice(2, 0, 'Maryam Nawaz');
guestList.push('Billawal Bhutto Zardari');

//here i printed the array of 6 guests
for (let i = 0; i < guestList.length; i++) {
    console.log('Dear Mr.' + guestList[i] + ',\n\nIt is our plesure to invite you in our party.\n\nThank you!\n\n');
}

// sorry message for not inviting the guest
console.log('Sorry we can not arrange big table, only two people will bw invited');

// removed the guests
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry Mr. ${removeGuest}, You are not invited for dinner.`);
}
// the two remaining guest
for (let i = 0; i < guestList.length; i++) {
    console.log('Dear Mr.' + guestList[i] + ',\n\nYou are still invited.\n\nThank you!\n\n');
}
// i removed all the guest array 
guestList.splice(0, 2);
console.log(guestList);
