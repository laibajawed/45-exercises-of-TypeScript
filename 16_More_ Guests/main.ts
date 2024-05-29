let guestList : string[] =['Imran Khan','Nawaz','Asif Ali Zardari' ];

// for(let i=0; i<guestList.length; i++){
    
//     console.log('Dear Mr.' + guestList[i] + ',\n\nIt is our plesure to invite you in our party.\n\nThank you!\n\n')
// }

let absentGuest : string = 'Imran Khan';
let newGuest : string = 'Kamran Tessori';

guestList[0] = newGuest;

for(let i=0; i<guestList.length; i++){
    
    console.log('Dear Mr.' + guestList[i] + ',\n\nIt is our plesure to invite you in our party.\n\nThank you!\n\n')
}

console.log (`Mr. ${absentGuest} is not coming to the party`);

console.log(' Good news! We found a big table so we are inviting three more guests.')

guestList.unshift('Sie Zia Khan');
guestList.splice(2,0,'Maryam Nawaz');
guestList.push('Billawal Bhutto Zardari');

for(let i=0; i<guestList.length; i++){
    
    console.log('Dear Mr.' + guestList[i] + ',\n\nIt is our plesure to invite you in our party.\n\nThank you!\n\n')
}

