let personName :string = '';

personName = prompt('What is your name?') || ' ';

let lowercase :string = personName.toLowerCase() ;
let uppercase :string = personName.toUpperCase() ;
let titlecase :string = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase()).join(' ')

if(personName !== null && personName !== ''){
    alert(`Hello ${personName}, Here are your name in:
    Lowercase: ${lowercase}
    Uppercase: ${uppercase}
    Titlecase: ${titlecase}`)
}
else{
    alert('Plese fill your name !')
}