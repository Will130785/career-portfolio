import "../scss/main.scss";
import { scrollEffect } from "./navbar-scroll";
import { animation } from "./animation";
import { tabs } from "./tabs";
import { hamburger } from "./hamburger";
import { modal } from "./modal";
import { colorGame } from "./color-game";
import { closeMobNav } from "./mobile-nav-links";
import { getWeather } from "./weather";

//Execute navbar scrolling effect
scrollEffect();
//Execute landing section animation
animation();
//Execute event listeners for tabs
tabs();
//Execute event listeners for hamburger
hamburger();
//Execute event listener on mobile nav links
closeMobNav();
//Execute event listeners for modal
modal();
//Execute get weather function
getWeather();
//Initiate color game
colorGame();