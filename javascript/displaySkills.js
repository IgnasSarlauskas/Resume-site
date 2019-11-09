const skillsContainer = document.querySelector(".skills-container");

function displaySkills(skills) {
  skills.forEach(skills => {
    let div = document.createElement("div");
    div.className = "centered skills-content";

    let skillsViewTemplate = `
      <p class="">${skills.skillOne}</p>
      <p class=""> ${skills.skillTwo}</p>
      <p class="">${skills.skillThree}</p>
      <p class="">${skills.skillFour}</p>
      <p class=""> ${skills.skillFive}</p>
      <p class="">${skills.skillSix}</p>
      <p class="">${skills.skillSeven}</p>
      <p class="">${skills.skillEight}</p>
    `;

    div.innerHTML = skillsViewTemplate;
    skillsContainer.appendChild(div);
  });
};

displaySkills(skillsData);