let toggleBtn = document.querySelector(".toggle-icon");
toggleBtn.addEventListener("click", function () {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
});

let links = document.getElementsByClassName("link");
// console.log(links);
for (i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav responsive") {
      x.className = " topnav";
    }
  });
};