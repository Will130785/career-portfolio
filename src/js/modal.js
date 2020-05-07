export const modal = () => {
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
}