export const hamburger = () => {
    //Event listener for hamburger
const hamburger = document.querySelector(".hamburger");
const mobileNavContent = document.querySelector(".mobile-nav__list");
const mobileNavLinks = document.querySelectorAll(".mobile-nav__list--link");
const navBrand = document.querySelector(".navbar__navbrand--link");

//Track navbar status
let navbarActive = 0; //0 = innactive, 1 = active

    //Add event listener to hamburger
    hamburger.addEventListener("click", e => {
        //Check status of navbar when user clicks hamburger
        if(navbarActive === 0) {
            //if not currently open set the height
            mobileNavContent.style.height = "25rem";
            //loop through links and display
            mobileNavLinks.forEach(link => {
            link.style.display = "block";
        });

        //Set status to active
        navbarActive = 1;
            
        } else if(navbarActive === 1) {
            //If navbar is active change the height to 0
            mobileNavContent.style.height = "0";

            //Loop through links and hide
            mobileNavLinks.forEach(link => {
                link.style.display = "none";
            });

            //Set navbar back to inactive
            navbarActive = 0;
        }

    });


    //When user clicks on a link
    mobileNavLinks.forEach(link => {
        //loop through links and add event listener
        link.addEventListener("click", () => {
            //Set height to 0
            mobileNavContent.style.height = "0";
            //Loop through and hide links
            mobileNavLinks.forEach(link => {
                link.style.display = "none";
        });
        //Set navbat to inactive
        navbarActive = 0;

        });
    });

    //If user clicks on the navbrand/home link
    navBrand.addEventListener("click", () => {
        //set height to 0
        mobileNavContent.style.height = "0";
        //Loop through links and hide
        mobileNavLinks.forEach(link => {
            link.style.display = "none";
        });
        //Set navbar to inactive
        navbarActive = 0;

    });

};

