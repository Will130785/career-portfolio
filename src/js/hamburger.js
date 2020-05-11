export const hamburger = () => {
    //Event listener for hamburger
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavContent = document.querySelector(".mobile-nav__list");
const mobileNavLinks = document.querySelectorAll(".mobile-nav__list--link");
const navBar = document.querySelector(".navbar");
const navContent = document.querySelector(".navbar__list");


let navbarActive = 0;

    hamburger.addEventListener("click", e => {
        if(navbarActive === 0) {
            mobileNavContent.style.height = "25rem";
        
            mobileNavLinks.forEach(link => {
            link.style.display = "block";
        })

        navbarActive = 1;
            
        } else if(navbarActive === 1) {
            mobileNavContent.style.height = "0";

            mobileNavLinks.forEach(link => {
                link.style.display = "none";
                // link.style.animation = "mobileNavLinksFade .8s";
            })

            navbarActive = 0;
        }

    })

}  

