export const tabs = () => {

    //Event listeners for intro, contact, skills, game and instructions buttons
const introducingLink = document.querySelector(".about__content--intro");
const contactLink = document.querySelector(".about__content--contact");
const skillsLink = document.querySelector(".about__content--skills");
const gameLink = document.querySelector(".education__game--game");
const instructionLink = document.querySelector(".education__game--inst");
const introducing = document.querySelector(".about__card-intro");
const contact = document.querySelector(".about__card-contact");
const skills = document.querySelector(".about__card-skills");
const weatherInput = document.querySelector(".about__card-skills");
const game = document.querySelector(".game-container");
const instruction = document.querySelector(".instruction-container");
const display = document.querySelector(".about__card-results");

introducingLink.addEventListener("click", () => {
    introducingLink.classList.add("active");
    contactLink.classList.remove("active");
    skillsLink.classList.remove("active");

    introducing.style.display = "block";
    contact.style.display = "none";
    skills.style.display = "none";
    weatherInput.style.display = "none";
    display.style.display = "none";
});

contactLink.addEventListener("click", () => {
    introducingLink.classList.remove("active");
    contactLink.classList.add("active");
    skillsLink.classList.remove("active");

    introducing.style.display = "none";
    contact.style.display = "block";
    skills.style.display = "none";
    weatherInput.style.display = "none";
    display.style.display = "none";
});

skillsLink.addEventListener("click", () => {
    introducingLink.classList.remove("active");
    contactLink.classList.remove("active");
    skillsLink.classList.add("active");

    introducing.style.display = "none";
    contact.style.display = "none";
    skills.style.display = "block";
    weatherInput.style.display = "block";
    display.style.display = "none";
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
}