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

//Event listeners for intro, contact and skills buttons
const introducingLink = document.querySelector(".about__content--intro");
const contactLink = document.querySelector(".about__content--contact");
const skillsLink = document.querySelector(".about__content--skills");
const introducing = document.querySelector(".about__card-intro");
const contact = document.querySelector(".about__card-contact");
const skills = document.querySelector(".about__card-skills");

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