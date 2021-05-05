// toggle responsive navigation
const navigationToggler = document.querySelector(".toggle-navigation");
const hiddenNav = document.querySelector(".navigation-links");
navigationToggler.addEventListener("click", function () {
    hiddenNav.classList.toggle("nav-active");
    navigationToggler.classList.toggle("toggler-active")
})

//map
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}