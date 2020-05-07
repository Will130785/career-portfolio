export const scrollEffect = () => {
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

}

