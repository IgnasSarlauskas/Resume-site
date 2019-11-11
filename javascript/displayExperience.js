"use strict";

const experienceContainer = document.querySelector(".experience-container");

// function displayExperience(experience) {
//     experience.forEach(experience => {
//         let div = document.createElement("div");
//         div.className = "card-experience";

//         let experienceViewTemplate = `
//         <h3 class="centered">${experience.workPlaceName}</h3>
//         <h4 class="centered">${experience.period}</h4>
//         <p class="">${experience.jobTitle}</p>
//         <p class="">${experience.jobDescription}</p>
//         <p class="bold">Main Responsibilities:</p>
//         <p class="">${experience.responsibility1}</p>
//         <p class="">${experience.responsibility2}</p>
//         <p class="">${experience.responsibility3}</p>
//         <hr>
//         `;

//         div.innerHTML = experienceViewTemplate;
//         experienceContainer.appendChild(div);
//     });
// };

/// This code works, but IE does not support arrow functions and ${}...

function displayExperience(experience) {
    let div = document.createElement("div");
    div.className = "card-experience";

    div.innerHTML = 
        '<h3 class="centered">' + experience.workPlaceName + '</h3>' +
        '<h4 class="centered">' + experience.period + '</h4>'+
        '<p>' + experience.jobTitle + '</p>' +
        '<p>' + experience.jobDescription + '</p>' +
        '<p class="bold"> Main Responsibilities: </p>' +
        '<p>' + experience.responsibility1 + '</p>' +
        '<p>' + experience.responsibility2 + '</p>' +
        '<p>' + experience.responsibility3 + '</p>' +
        '<hr>'
    ;
    experienceContainer.appendChild(div);

}

workExperienceData.forEach(displayExperience);