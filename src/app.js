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

//Event listeners for portfolio modal
const projects = document.querySelectorAll(".portfolio__card");
const modal = document.querySelector(".modal");
const exitModal = document.querySelectorAll(".modal__content--exit");
//Individual project modal content
const modalOne = document.querySelector(".modal__content--1");
const modalTwo = document.querySelector(".modal__content--2");
const modalThree = document.querySelector(".modal__content--3");
const modalFour = document.querySelector(".modal__content--4");
const modalFive = document.querySelector(".modal__content--5");
const modalSix = document.querySelector(".modal__content--6");
const modalSeven = document.querySelector(".modal__content--7");
const modalEight = document.querySelector(".modal__content--8");
const modalNine = document.querySelector(".modal__content--9");

projects.forEach(project => {
    project.addEventListener("click", e => {

        modal.style.display = "block";
        if(project.classList.contains("portfolio__card--1")) {
            modalOne.style.display = "grid";
            modalTwo.style.display = "none";
            modalThree.style.display = "none";
            modalFour.style.display = "none";
            modalFive.style.display = "none";
            modalSix.style.display = "none";
            modalSeven.style.display = "none";
            modalEight.style.display = "none";
            modalNine.style.display = "none";
        } else if(project.classList.contains("portfolio__card--2")) {
            modalOne.style.display = "none";
            modalTwo.style.display = "grid";
            modalThree.style.display = "none";
            modalFour.style.display = "none";
            modalFive.style.display = "none";
            modalSix.style.display = "none";
            modalSeven.style.display = "none";
            modalEight.style.display = "none";
            modalNine.style.display = "none";
        } else if(project.classList.contains("portfolio__card--3")) {
            modalOne.style.display = "none";
            modalTwo.style.display = "none";
            modalThree.style.display = "grid";
            modalFour.style.display = "none";
            modalFive.style.display = "none";
            modalSix.style.display = "none";
            modalSeven.style.display = "none";
            modalEight.style.display = "none";
            modalNine.style.display = "none";
        } else if(project.classList.contains("portfolio__card--4")) {
            modalOne.style.display = "none";
            modalTwo.style.display = "none";
            modalThree.style.display = "none";
            modalFour.style.display = "grid";
            modalFive.style.display = "none";
            modalSix.style.display = "none";
            modalSeven.style.display = "none";
            modalEight.style.display = "none";
            modalNine.style.display = "none";
        } else if(project.classList.contains("portfolio__card--5")) {
            modalOne.style.display = "none";
            modalTwo.style.display = "none";
            modalThree.style.display = "none";
            modalFour.style.display = "none";
            modalFive.style.display = "grid";
            modalSix.style.display = "none";
            modalSeven.style.display = "none";
            modalEight.style.display = "none";
            modalNine.style.display = "none";
        } else if(project.classList.contains("portfolio__card--6")) {
            modalOne.style.display = "none";
            modalTwo.style.display = "none";
            modalThree.style.display = "none";
            modalFour.style.display = "none";
            modalFive.style.display = "none";
            modalSix.style.display = "grid";
            modalSeven.style.display = "none";
            modalEight.style.display = "none";
            modalNine.style.display = "none";
        } else if(project.classList.contains("portfolio__card--7")) {
            modalOne.style.display = "none";
            modalTwo.style.display = "none";
            modalThree.style.display = "none";
            modalFour.style.display = "none";
            modalFive.style.display = "none";
            modalSix.style.display = "none";
            modalSeven.style.display = "grid";
            modalEight.style.display = "none";
            modalNine.style.display = "none";
        } else if(project.classList.contains("portfolio__card--8")) {
            modalOne.style.display = "none";
            modalTwo.style.display = "none";
            modalThree.style.display = "none";
            modalFour.style.display = "none";
            modalFive.style.display = "none";
            modalSix.style.display = "none";
            modalSeven.style.display = "none";
            modalEight.style.display = "grid";
            modalNine.style.display = "none";
        } else if(project.classList.contains("portfolio__card--9")) {
            modalOne.style.display = "none";
            modalTwo.style.display = "none";
            modalThree.style.display = "none";
            modalFour.style.display = "none";
            modalFive.style.display = "none";
            modalSix.style.display = "none";
            modalSeven.style.display = "none";
            modalEight.style.display = "none";
            modalNine.style.display = "grid";
        }

    })

});


modal.addEventListener("click", e => {
    if(e.target === modal){
        modal.style.display = "none";
    }
});