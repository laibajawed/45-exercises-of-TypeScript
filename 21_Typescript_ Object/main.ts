//  Write a program that creates Objects containing these items.

interface person {
    age:number,
    name:string,
    nationality:string,
    student: boolean,
}

let person :person ={
    age : 16,
    name : 'Rayan',
    nationality : 'Pakistan',
    student : true
}

console.log(person);

interface car{
    maker:string,
    color:string,
    automatic:boolean,
}

let car = {
    maker :'toyota',
    color : 'Black',
    automatic : true,
}

console.log(car);