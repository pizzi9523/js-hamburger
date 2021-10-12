const hamburgerElement = document.querySelector("a>i");
const menuElement = document.querySelector(".hamburger-menu");
const closeElement = document.querySelector(".close");
//console.log(menuElement);
//console.log(hamburgerElement);

hamburgerElement.addEventListener("click", function () {
    menuElement.classList.add("active")
})

closeElement.addEventListener("click", function () {
    menuElement.classList.remove("active")
})



