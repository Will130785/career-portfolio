export const closeMobNav = () => {

const navLinks = document.querySelectorAll(".mobile-nav__list--link");

navLinks.forEach(link => {

    link.addEventListener("click", e => {
        navBar.style.display = "flex";
        mobileNav.style.height = "0px";
    })

});

}