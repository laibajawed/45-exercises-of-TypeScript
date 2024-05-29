"use strict";
let guest_list = ['Imran Khan', 'Nawaz shareef', 'Asif ali zardari'];
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Mrs.' + guest_list[i] + ',\n\n It is our pleasure to inivte you to our party.\n\n Thank you!');
}
let absent_guest = 'Imran Khan';
let new_guest = 'Kamran Tessori ';
guest_list[0] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr. ' + guest_list[i] + ',\n\n It is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
console.log(`Mr . ${absent_guest} is not coming to the party.`);
