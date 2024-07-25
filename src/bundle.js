const body = document.querySelector("body"),
showMenu = body.querySelector(".menu-btn"),
showMenuIcon = body.querySelector(".hamburger-icon"),
userCont = body.querySelector(".user-container"),
userTab = body.querySelector(".user-tab"),
userIcon = body.querySelector(".usericon"),
navlink = body.querySelector("header nav"),
navhead = body.querySelector("header nav .nav-list a");

navhead.addEventListener("click" , () => {
  navhead.classList.add("active");
  });

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


