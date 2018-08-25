// input = animal ex. fishoutput = 
// output = animal product ex. fish stix

function nuggetizer(animal){
    return `${animal} stix`;
};
console.log('fish:', nuggetizer('fish'));
console.log('cat:', nuggetizer('cat'));
console.log('bear:', nuggetizer('bear'));


const nuggetizer2 = (animal) => {
    return `${animal} jerky`
};
console.log('deer:', nuggetizer2('deer'));
const nomnom = (person, food) => {
    return `${person} devoured ${food}`;
}

const bearSticks = nuggetizer('bear');

console.log(nomnom('ryan', bearSticks)); 


const numberadder = (num) => {
    const finalNumber = num + 3;
    printToDom(`<h2>${finalNumber}</h2>`, 'allTheNumbers');

};

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

// console.log(`num: `, numberadder(22));
numberadder(22)
numberadder(2)
numberadder(27)
numberadder(44)



printToDom('')