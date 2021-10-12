const hamburgerElement = document.querySelector("a>i");
const menuElement = document.querySelector(".hamburger-menu");
//console.log(menuElement);
//console.log(hamburgerElement);

hamburgerElement.addEventListener("click", function () {
    menuElement.classList.add("active")
})


