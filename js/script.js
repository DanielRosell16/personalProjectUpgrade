import {planets} from './planets.js';

// console.log(planets);

import {species} from './species.js';

// console.log(species);


let simplePlanetsArr = planets.map((planet) => {
    return {
        fullName: planet.name,
        population: planet.population,
        climate: planet.climate,
        dateCreated: planet.created,
    }
})

// console.log(simplePlanetsArr);

let simpleSpeciesArr = species.map((specie) => {
    return {
        fullName: specie.name,
        location: specie.homeworld,
        language: specie.language,
        averHeight: specie.average_height,
        typeOfSpecies: specie.classification,
    }
})

// console.log(simpleSpeciesArr);

//reusable functions

//function to select HTML elements
function selectElement(selectString) {
    return document.querySelector(selectString)
}

//function to create HTML element
function createElement(elementTypeString) {
    return document.createElement(elementTypeString)
}

//function to apped
function appendElement(elementToAppendTo, appendTo) {
    appendTo.append(elementToAppendTo)
}


//this is for displaying the planets names

simplePlanetsArr.forEach((planet) => {
    let nameElement = createElement('p');

    nameElement.innerHTML = planet.fullName;

    let planetFig = selectElement('#planetsSection');

    planetFig.append(nameElement);


    // console.log(simplePlanetsArr);

})

//this is for displaying the species names

simpleSpeciesArr.forEach((specie) => {
    let nameElement = createElement('p');

    nameElement.innerHTML = specie.fullName;

    let specieFig = selectElement('#speciesSection');

    specieFig.append(nameElement);

    // console.log(simpleSpeciesArr)

})

const buttonElement = selectElement('#planetsSection');

buttonElement.addEventListener('click', function(event) {
    alert('Element clicked through function!');
})

const btnElement = selectElement('#speciesSection');

btnElement.addEventListener('click', function(event) {
    alert('Element clicked through function!');
})