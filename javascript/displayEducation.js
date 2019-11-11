"use strict";

const educationContainer = document.querySelector(".education-container");

// function displayEducation(education) {
//     education.forEach(education => {
//         let div = document.createElement("div");
//         div.className = "card-education flip-box";

//         let educationViewTemplate = `
//         <div class = "flip-box-inner">
//             <div class= "flip-box-front">
//                 <h3 class="centered">${education.schoolName}</h3>
//                 <p class="centered"> ${education.period}</p>
//             </div>
//             <div class= "flip-box-back">
//                 <p class="">${education.courseName}</p>
//                 <p class="">${education.description}</p>
//             </div>
//         </div>
//         `;

//         div.innerHTML = educationViewTemplate;
//         educationContainer.appendChild(div);
//     });
// };
// displayEducation(education);

/// This code works, but IE does not support arrow functions and ${}... 

function displayEducation(education) {
    let div = document.createElement("div");
    div.className = "card-education flip-box";

    div.innerHTML = 
        '<div class = "flip-box-inner">' +
            '<div class= "flip-box-front">' +
                '<h3 class="centered">' + education.schoolName + '</h3>'+
                '<p class="centered">' + education.period +'</p>'+
            '</div>' +
            '<div class= "flip-box-back">'+
                '<p class="centered">' + education.courseName +'</p>' +
                '<p class="centered">' + education.description +'</p>' +
            '</div>'+
        '</div>'     
    ;
    educationContainer.appendChild(div);
}

educationData.forEach(displayEducation);