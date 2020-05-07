export const hamburger = () => {
    //Event listener for hamburger
const hamburger = document.querySelectorAll(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavContent = document.querySelector(".mobile-nav__list");
const mobileNavLinks = document.querySelectorAll(".mobile-nav__list--link");
const navBar = document.querySelector(".navbar");

let navbarActive = 0;

hamburger.forEach((burger) => {

    burger.addEventListener("click", e => {
        if(navbarActive === 0) {
            navBar.style.display = "none"
            mobileNav.style.height = "200px";
            mobileNavLinks.forEach(link => {
                link.style.display = "block";
            });
            mobileNavContent.style.display = "block";
            navbarActive = 1;
        } else if(navbarActive === 1) {
            navBar.style.display = "flex";
            mobileNav.style.height = "0px";
            mobileNavLinks.forEach(link => {
                link.style.display = "none";
            });
            mobileNavContent.style.display = "none";
            navbarActive = 0;
        }
    });

});
}