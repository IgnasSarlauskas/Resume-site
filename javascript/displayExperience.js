const experienceContainer = document.querySelector(".experience-container");

function displayExperience(experience) {
    experience.forEach(experience => {
        let div = document.createElement("div");
        div.className = "card-experience";

        let experienceViewTemplate = `
        <h3 class="centered">${experience.workPlaceName}</h3>
        <h4 class="centered">${experience.period}</h4>
        <p class="">${experience.jobTitle}</p>
        <p class="">${experience.jobDescription}</p>
        <p class="bold">Main Responsibilities:</p>
        <p class="">${experience.responsibility1}</p>
        <p class="">${experience.responsibility2}</p>
        <p class="">${experience.responsibility3}</p>
        <hr>
        `;

        div.innerHTML = experienceViewTemplate;
        experienceContainer.appendChild(div);
    });
};

displayExperience(workExperienceData);