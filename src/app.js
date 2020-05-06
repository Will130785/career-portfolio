import "./scss/main.scss";

//Grab scroll position
let prevScrollPos = window.pageYOffset;

// Function to controll navbar during scroll
window.onscroll = function() {
    //Grab current scroll position
    let currentScrollPos = window.pageYOffset;
    //Check position of scroll and displah navbar accordingly
    if(prevScrollPos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
        document.getElementById("nav").style.opacity = "1";
    } else {
        document.getElementById("nav").style.top = "-50px";
        document.getElementById("nav").style.opacity = "0";
    }
    prevScrollPos = currentScrollPos;
}


//Function to repeat landing section animation
setInterval(() => {
    document.querySelector(".landing__title").classList.toggle("title-animation");
    document.querySelector(".landing__sub").classList.toggle("sub-animation");
}, 4000);

//Event listeners for intro, contact, skills, game and instructions buttons
const introducingLink = document.querySelector(".about__content--intro");
const contactLink = document.querySelector(".about__content--contact");
const skillsLink = document.querySelector(".about__content--skills");
const gameLink = document.querySelector(".education__game--game");
const instructionLink = document.querySelector(".education__game--inst");
const introducing = document.querySelector(".about__card-intro");
const contact = document.querySelector(".about__card-contact");
const skills = document.querySelector(".about__card-skills");
const game = document.querySelector(".game-container");
const instruction = document.querySelector(".instruction-container");

introducingLink.addEventListener("click", () => {
    introducingLink.classList.add("active");
    contactLink.classList.remove("active");
    skillsLink.classList.remove("active");

    introducing.style.display = "block";
    contact.style.display = "none";
    skills.style.display = "none";
});

contactLink.addEventListener("click", () => {
    introducingLink.classList.remove("active");
    contactLink.classList.add("active");
    skillsLink.classList.remove("active");

    introducing.style.display = "none";
    contact.style.display = "block";
    skills.style.display = "none";
});

skillsLink.addEventListener("click", () => {
    introducingLink.classList.remove("active");
    contactLink.classList.remove("active");
    skillsLink.classList.add("active");

    introducing.style.display = "none";
    contact.style.display = "none";
    skills.style.display = "block";
});

gameLink.addEventListener("click", () => {
    gameLink.classList.add("active");
    instructionLink.classList.remove("active");

    game.style.display = "grid";
    instruction.style.display = "none";
});

instructionLink.addEventListener("click", () => {
    gameLink.classList.remove("active");
    instructionLink.classList.add("active");

    game.style.display = "none";
    instruction.style.display = "flex";
});

//Event listener for hamburger
const hamburger = document.querySelectorAll(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavContent = document.querySelector(".mobile-nav__list");

let navbarActive = 0;

hamburger.forEach((burger) => {

    burger.addEventListener("click", e => {
        if(navbarActive === 0) {
            mobileNav.style.height = "200px";
            mobileNavContent.style.display = "block";
            navbarActive = 1;
        } else if(navbarActive === 1) {
            mobileNav.style.height = "0px";
            mobileNavContent.style.display = "none";
            navbarActive = 0;
        }
    });

});