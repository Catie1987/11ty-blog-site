let list = document.querySelector(".slider-list");
let items = document.querySelectorAll(".slider-list img");
let dots = document.querySelectorAll(".pagination-dots .dot");
let prev = document.querySelector(".prev-button");
let next = document.querySelector(".next-button");

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function() {
 if(active + 1 > lengthItems) {
    active = 0;
 } else {
    active = active + 1;
 }

 reloadSlider();

}

prev.onclick = function() {
    if(active - 1 < 0) {
        active = lengthItems;
    } else {
        active = active - 1;
    }
    reloadSlider();
}

function reloadSlider(){
    let checkLeft = active * items[active].width;
    list.style.translate = -checkLeft + 'px';
    dots.forEach((dot) => {
        dot.classList.remove("active");
    });
    dots[active].classList.add("active");
    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=> {next.click()},5000);
}

dots.forEach((dot, key)=>{
    dot.addEventListener("click", function() {
        active = key;
        reloadSlider();
    })
});

let refreshSlider = setInterval(()=> {next.click()},5000);