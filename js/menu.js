const toggle = document.querySelector(".toggle"); // Define CSS class .toggle as a constant named toggle
const menu = document.querySelector(".menu");

/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<span class='fas fa-bars'></span>";
    } else {
        menu.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<span class='fas fa-times'></span>";
    }
}

/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);
