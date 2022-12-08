// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const destinationInfo = document.getElementById("missionTarget");
   console.log(destinationInfo);
   destinationInfo.innerHTML = `
   
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src= "${imageUrl}">
                `
          };

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    }else if (isNaN(testInput) === false) {
        return "Is a Number";
    }else if (isNaN(testInput)) {
        return "Not a Number";
}
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    let isPilot = validateInput(pilot);
    let isCopilot = validateInput(copilot);
    let isFuelLevel = validateInput(fuelLevel);
    let isCargoLevel = validateInput(cargoLevel);
    
    if (isPilot === "Empty" || isCopilot === "Empty" || isFuelLevel === "Empty" || isCargoLevel === "Empty") {
        alert("All fields are required!");
    }else if (isPilot === "Is a Number" || isCopilot === "Is a Number") {
        alert("Pilot and Copilot fields require a name.");
    }else if (isFuelLevel !== "Is a Number" || isCargoLevel !== "Is a Number") {
        alert("Fuel Level and Cargo Level must be numbers.");
    };
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
    .then( function(response) {
        return response.json()
       // response.json();
        });

    return planetsReturned;
};

function pickPlanet(planets) {
    let i = Math.floor(Math.random() * 6);
    let planetPicked = planets[i];
    return planetPicked;
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
