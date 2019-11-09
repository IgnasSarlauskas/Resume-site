const aboutMeContainer = document.querySelector(".about-me-container");

function displayAboutMe(aboutMe) {
    aboutMe.forEach(aboutMe => {
        let div = document.createElement("div");
        div.className = "centered about-content";

        let aboutMeViewTemplate = `
        <p class="centered">${aboutMe.aboutOne}</p>
        <p class="centered">${aboutMe.aboutTwo}</p>
        <p class="">${aboutMe.aboutThree}</p>
        `;

        div.innerHTML = aboutMeViewTemplate;
        aboutMeContainer.appendChild(div);
    });
};

displayAboutMe(aboutMeData);