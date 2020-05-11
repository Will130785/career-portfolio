//Function to repeat landing section animation
export const animation = () => {
    //Interval to carry out lightning animation effect
    setInterval(() => {
        document.querySelector(".landing__title").classList.toggle("title-animation");
        document.querySelector(".landing__sub").classList.toggle("sub-animation");
    }, 4000);


    //run through initial order of headings
    setTimeout(() => {

    
        setTimeout(() => {
            document.querySelector(".landing__title").innerHTML = "Software Developer";
            document.querySelector(".landing__sub").innerHTML = "Will Constable";
        }, 6000);
    
        setTimeout(() => {
            document.querySelector(".landing__title").innerHTML = "Web Developer";
            document.querySelector(".landing__sub").innerHTML = "Based in London";
        }, 12000);
    
        setTimeout(() => {
            document.querySelector(".landing__title").innerHTML = "Hi, I'm Will";
            document.querySelector(".landing__sub").innerHTML = "Full Stack Web Developer";
        }, 18000);


    }, 6000)

    //After initial run through, continue to run through every 24 secs
    setInterval(() => {

    
        setTimeout(() => {
            document.querySelector(".landing__title").innerHTML = "Software Developer";
            document.querySelector(".landing__sub").innerHTML = "Will Constable";
        }, 6000);
    
        setTimeout(() => {
            document.querySelector(".landing__title").innerHTML = "Web Developer";
            document.querySelector(".landing__sub").innerHTML = "Based in London";
        }, 12000);
    
        setTimeout(() => {
            document.querySelector(".landing__title").innerHTML = "Hi, I'm Will";
            document.querySelector(".landing__sub").innerHTML = "Full Stack Web Developer";
        }, 18000);


    }, 24000)

}