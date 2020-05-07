export const colorGame = () => {
    //UI variables
    const colorDisplay = document.querySelector("#color-display");
    const newColors = document.querySelector(".new-colors");
    const circles = document.querySelectorAll(".circle");
    const gameContainer = document.querySelector(".education__game");

    //Gameplay variables
    let colors = [];
    let pickedColor;
    let gameover = false;

    //Place colors on circles
    const placeColors = () => {
        circles.forEach((circle, index) => {
            circle.style.backgroundColor = colors[index];
        });
    };

    //Function to generate random colors
    const generateRandomColors = () => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        return `rgb(${r}, ${g}, ${b})`;
    }

    //Function to get 6 random colors;
    const getRandomColors = () => {
        for(let i = 0; i < circles.length; i++) {
            colors.push(generateRandomColors());
        }

        let random = Math.floor(Math.random() * circles.length);
        pickedColor = colors[random];

        colorDisplay.textContent = pickedColor;

        placeColors();
    };



    //Event listener for circles
    circles.forEach((circle, index) => {
        getRandomColors();
        circle.addEventListener("click", () => {

            if(!gameover) {
                let clickedColor = colors[index];
                if(clickedColor !== pickedColor) {
                    circle.style.backgroundColor = "black";
                } else {
                    gameContainer.style.backgroundColor = pickedColor;
                    gameover = true;
                }

            }
        });
    });

    //Event listner for new colors button
    newColors.addEventListener("click", () => {
        colors = [];
        gameover = false;
        getRandomColors();
        gameContainer.style.backgroundColor = "black";
    });
};