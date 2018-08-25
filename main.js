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


greetingElement.innerHTML = `Hello my name is ${firstName} ${lastName}`;.
