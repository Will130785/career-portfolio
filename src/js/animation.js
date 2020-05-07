//Function to repeat landing section animation
export const animation = () => {
    setInterval(() => {
        document.querySelector(".landing__title").classList.toggle("title-animation");
        document.querySelector(".landing__sub").classList.toggle("sub-animation");
    }, 4000);

}