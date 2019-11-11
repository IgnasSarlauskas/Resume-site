// "use strict";

const aboutMeContainer = document.querySelector(".about-me-container");

function displayAboutMe(aboutMe) {
    let div = document.createElement("div");
    div.className = "centered about-content";

    // div.innerHTML = `
    //     <p class="centered">"' + aboutMe.aboutOne + '"</p>
    //     <p class="centered">${aboutMe.aboutTwo}</p>
    //     <p class="">${aboutMe.aboutThree}</p>
    //     `;
    /// This code works, but IE does not support arrow functions and ${}...

    div.innerHTML = 
        '<p>' + aboutMe.aboutOne + '</p>' +
        '<p>' + aboutMe.aboutTwo + '</p>' +
        '<p>' + aboutMe.aboutThree + '</p>' 
    ;
    aboutMeContainer.appendChild(div);
}

aboutMeData.forEach(displayAboutMe);


// displayAboutMe(aboutMeData);