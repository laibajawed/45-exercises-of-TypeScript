// • Tests for equality  with strings
console.log("equality test with strings:","Apple" === "Apple");

// • Tests inequality with strings
console.log("equality test with strings:",("Apple" as string) != "orange");

// • Tests using the lower case function
console.log("Lower case function test:","HELLO".toLowerCase() === "hello");

// • Numerical tests involving equality 
console.log("equality test with numbers:", 26 === 26);

// • Numerical tests involving inequality
console.log("equality test with numbers:", (26 as number) != 35);

// greater than 
console.log("Greater than test:",10 > 5);

// greater less than
console.log("Greater less than test:",5 < 10);

// greater than or equal to
console.log("Greater than or equal to test:",10 >= 10);

// less than or equal to
console.log("Less than or equal to test:", 5 <= 10);

// • Tests using "and" operators
console.log("And operator tests ", 5 ===5  && 10>5);

// • Tests using "or" operators
console.log("And operator tests ", 5 ===5  || false);

// • Test whether an item is in a array
const fruits:string[]= ["Amrood", "Rayan", "Laiba"];
console.log('test "Amrood" in the array:',fruits.includes("Amrood"));

// • Test whether an item is not in a array
console.log('test "Apple" not in the array:',!fruits.includes("Apple"));