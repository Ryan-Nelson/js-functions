const bananaDiv = document.getElementById('banana');
bananaDiv.innerHTML = 'im a banana';

let counter = 0;
counter += 1;
counter ++;
counter = counter + 1;

// counter = 3

console.log('counter: ', counter)



const greetingElement = document.getElementById("greetingElement");
const firstName = 'Ryan';
const lastName = 'Nelson';
greetingElement.innerHTML = 'Hello my name is' + firstName + ' ' +lastName;


greetingElement.innerHTML = `Hello my name is ${firstName} ${lastName}`;



let name = 'callan';
let age = '100000000';


// let person = {
//     name: name,
//     age: age
// };


let person = {
    name, age
};
console.log('person:', person.name)