/* To-Do: get add box shadow to drop down menu */
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const boxshadow = document.querySelector(".boxshadow"); /* Define boxshadow as a constant, using the .boxshadow CSS class */
 
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