import { hometabLoad } from "./hometab.js";
import { menutabLoad } from "./menutab.js";
import "./styles.css";

let counter = 0;

const navBar = (function(){
    
    const content = document.getElementById('content');

    const homeBtn = document.querySelector('#home-button');
    const menuBtn = document.querySelector('#menu-button');
    const aboutBtn = document.querySelector('#about-button');
    const newsBtn = document.querySelector('#news-button');
    const contactBtn = document.querySelector('#contact-button');

    function changeToHome(){
        homeBtn.addEventListener("click", () => {
            hometabLoad.content.replaceChildren();
            hometabLoad.setTab();
        });
    }

    const changeToMenu = function(){
        menuBtn.addEventListener("click", () => {
            hometabLoad.content.replaceChildren();
            menutabLoad.setTab();
            //Call for function which applies Menu view
        })
    }

    function changeToAbout(){

    }

    function changeToNews(){

    }

    function changeToContact(){

    }

    function initButtons(){
        changeToHome();
        changeToMenu();
        changeToAbout();
        changeToNews();
        changeToContact();
    }

    return {
        initButtons,
    }

})();

hometabLoad.setTab();
navBar.initButtons();

counter++;
console.log(counter);