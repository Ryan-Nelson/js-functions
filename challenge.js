const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

// const bandNumber = 1

// const takeNumber = function () {
//     const addnewnum = bandNumber ++ ;

//   printToDom(`<h2>${newnum}" " ${takeNumber}</h2>`, 'allTheNumbers');  // you should already have this function written from the class lecture
// };

// takeNumber("Galactic Scum") // This should display "1. Galactic Scum" in the DOM
// takeNumber("Underdogs") // This should display "2. Underdogs" in the DOM


let bandNumber = 1

const takeNumber = (bandName) => {

    const bandString = `<h3>${bandNumber}. ${bandName}</h3>`;
    bandNumber ++;
  printToDom(bandString, 'bandz');  // you should already have this function written from the class lecture
};

takeNumber("Galactic Scum") // This should display "1. Galactic Scum" in the DOM
takeNumber("Underdogs") // This should display "2. Underdogs" in the DOM