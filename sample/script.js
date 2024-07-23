const body = document.querySelector("body"),
 switchMode = body.querySelector(".switch-mode"),
 sunMode = body.querySelector(".sun"),
 moonMode = body.querySelector(".moon"),
 toggleBtn = body.querySelector(".switch-btn"),
 showMenu = body.querySelector(".menu-btn"),
 showMenuIcon = body.querySelector(".hamburger-icon"),
 dropMenu = body.querySelector(".drop-menu"),
 navlink = body.querySelector(".navbar .links");


 showMenu.addEventListener("click", () => {
    showMenuIcon.classList.toggle("active");
    
    if (showMenuIcon.classList.contains("active")) {
      navlink.classList.add("show");
    } else {
      navlink.classList.remove("show");
    }

  
  });

  switchMode.addEventListener("click", () => {
    toggleBtn.classList.toggle("left");
      if (toggleBtn.className.includes("left")) {
        moonMode.classList.remove("active");
        sunMode.classList.add("active");
        body.classList.add("light");
      } else {
        moonMode.classList.add("active");
        sunMode.classList.remove("active");
        body.classList.remove("light");
      };
  });

  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');
  window.onscroll = () => {
    sections.forEach(sec => {
      let top =window.scrollY;
      let offset = sec.offsetTop - 150;
      let height =sec.offsetHeight;
      let id = sec.getAttribute('id');
  
      if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
      };
    });
  };

  const stack = document.querySelector(".stack");
  const cards = Array.from(stack.children)
    .reverse()
    .filter((child) => child.classList.contains("card"));
  
  cards.forEach((card) => stack.appendChild(card));
  
  function moveCard() {
    const lastCard = stack.lastElementChild;
    if (lastCard.classList.contains("card")) {
      lastCard.classList.add("swap");
  
      setTimeout(() => {
        lastCard.classList.remove("swap");
        stack.insertBefore(lastCard, stack.firstElementChild);
      }, 1200);
    }
  }
  
  let autoplayInterval = setInterval(moveCard, 4000);
  
  stack.addEventListener("click", function (e) {
    const card = e.target.closest(".card");
    if (card && card === stack.lastElementChild) {
      card.classList.add("swap");
  
      setTimeout(() => {
        card.classList.remove("swap");
        stack.insertBefore(card, stack.firstElementChild);
      }, 1200);
    }
  });
