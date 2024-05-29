// Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner
let guestList = ['Imran Khan', 'Nawaz', 'Asif Ali Zardari'];
let absentGuest = 'Imran Khan';
let newGuest = 'Kamran Tessori';
guestList[0] = newGuest;
// for(let i=0; i<guestList.length; i++){
//     console.log('Dear Mr.' + guestList[i] + ',\n\nIt is our plesure to invite you in our party.\n\nThank you!\n\n')
// }
// console.log(`Mr. ${absentGuest} is not coming to the party`);
// console.log(' Good news! We found a big table so we are inviting three more guests.');

// added three guests in array
guestList.unshift('Sir Zia Khan');
guestList.splice(2, 0, 'Maryam Nawaz');
guestList.push('Billawal Bhutto Zardari');

//here i printed the array of 6 guests
// for (let i = 0; i < guestList.length; i++) {
//  console.log('Dear Mr.' + guestList[i] + ',\n\nIt is our plesure to invite you in our party.\n\nThank you!\n\n');
// }

// sorry message for not inviting the guest
// console.log('Sorry we can not arrange big table, only two people will bw invited');

// removed the guests
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    // console.log(`Sorry Mr. ${removeGuest}, You are not invited for dinner.`);
}
// the two remaining guest
// for (let i = 0; i < guestList.length; i++) {
//     console.log('Dear Mr.' + guestList[i] + ',\n\nYou are still invited.\n\nThank you!\n\n');
// }

// i removed all the guest array 
guestList.splice(0, 2);
console.log(guestList);


// exercise 19
// print a message indicating the number of people you are inviting to dinner
console.log(`Total Number Of Guest Are: ${guestList.length}`);