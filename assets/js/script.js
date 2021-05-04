// toggle responsive navigation
const navigationToggler = document.querySelector(".toggle-navigation");
const hiddenNav = document.querySelector(".navigation-links");
navigationToggler.addEventListener("click", function () {
    hiddenNav.classList.toggle("nav-active");
    navigationToggler.classList.toggle("toggler-active")
})