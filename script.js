// Write your JavaScript code here!
    

window.addEventListener("load", function() {
    
   let listedPlanets;
//    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
//        //Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let chosenPlanet = pickPlanet(listedPlanets);
        const name = chosenPlanet.name;
        const diameter = chosenPlanet.diameter;
        const star = chosenPlanet.star;
        const distance = chosenPlanet.distance;
        const moons = chosenPlanet.moons;
        const imageUrl = chosenPlanet.image;
        console.log(chosenPlanet)
        console.log(chosenPlanet.name)
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
    });

    let form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let pilotInput = document.querySelector("input[name=pilotName]");
        let pilot = pilotInput.value;
 
        let copilotInput = document.querySelector("input[name=copilotName]");
        let copilot = copilotInput.value;
 
        let fuelInput = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = Number(fuelInput.value);
 
        let cargoInput = document.querySelector("input[name=cargoMass]");
        let cargoLevel = Number(cargoInput.value);
        
        formSubmission(document, listedPlanets, pilot, copilot, fuelLevel, cargoLevel);

        const pilotStatus = document.getElementById("pilotStatus");
        const copilotStatus = document.getElementById("copilotStatus");
        const fuelStatus = document.getElementById("fuelStatus");
        const cargoStatus = document.getElementById("cargoStatus");
        
        pilotStatus.innerHTML = `Pilot ${pilot} Ready`;
        copilotStatus.innerHTML = `Co-Pliot ${copilot} Ready`;

        const faultyItems = document.getElementById("faultyItems");
        const launchStatus = document.getElementById("launchStatus");

        if (fuelLevel < 10000) {
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = `There is not enough fuel for the journey.`
            launchStatus.innerHTML = `Shuttle not ready for launch.`
            launchStatus.style.color = "red";
        };

        if (cargoLevel > 10000) {
            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML = `There is too much mass for the shuttle to take off.`
            launchStatus.innerHTML = `Shuttle not ready for launch.`
            launchStatus.style.color = "red";
        };


    });

    
    
});

