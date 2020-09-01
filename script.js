// TODO: add code here
function init(){

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){

            const container = document.getElementById("container");

            // 26.6.3. Bonus Missions
            // Display the astronauts sorted from most to least time in space.
            json.sort(function(a,b){return b.hoursInSpace - a.hoursInSpace});


            // Make the "Active: true" text green, for astronauts that are still active (active is true).
            json.forEach(astronaut => {
                container.innerHTML += (`
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                            <ul>
                                <li>Hours in space: ${astronaut.hoursInSpace}</li>
                                <li ${(astronaut.active)?'style=color:green;':''}>Active: ${astronaut.active}</li>
                                <li>Skills: ${astronaut.skills.join(", ")}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${astronaut.picture}">
                    </div>
                `);
            });

            // Add a count of astronauts to the page.
            const h1 = document.querySelector("h1");
            h1.innerHTML += `: ${json.length}`;
        });


    });

};

window.onload = init;

