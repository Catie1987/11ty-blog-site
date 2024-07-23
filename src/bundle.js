const body = document.querySelector("body"),
switchMode = body.querySelector(".switch-mode"),
toggleBtn = body.querySelector(".switch-btn"),
sunMode = body.querySelector(".sun"),
moonMode = body.querySelector(".moon"),
showMenu = body.querySelector(".menu-btn"),
showMenuIcon = body.querySelector(".hamburger-icon"),
userCont = body.querySelector(".user-container"),
userTab = body.querySelector(".user-tab"),
userIcon = body.querySelector(".usericon"),
navlink = body.querySelector("header nav");

showMenu.addEventListener("click", () => {
  showMenuIcon.classList.toggle("active");
  
  if (showMenuIcon.classList.contains("active")) {
    navlink.classList.add("show");
  } else {
    navlink.classList.remove("show");
  }


});

userCont.addEventListener("click", () => {
    userTab.classList.toggle("show");
    userIcon.classList.toggle("rotate");
});

switchMode.addEventListener("click", () => {
    toggleBtn.classList.toggle("right");
      if (toggleBtn.className.includes("right")) {
        moonMode.classList.add("active");
        sunMode.classList.remove("active");
        body.classList.add("dark");
      } else {
        moonMode.classList.remove("active");
        sunMode.classList.add("active");
        body.classList.remove("dark");
      };
  });
