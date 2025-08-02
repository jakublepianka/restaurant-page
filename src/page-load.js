import logo from "./logo.png";
import michelinStar from "./michelinstar.png";
import badge from "./badge.png";
import vege from "./vege.png";

export const pageLoad = (function(){
const content = document.getElementById('content');
    const mainContainer = document.createElement('div');
    const mainHeader = document.createElement('div');
    const mainInfo = document.createElement('div');
    const mainFooter = document.createElement('div');

    const imgLogo = document.createElement('img');
    const imgMichelin = document.createElement('img');
    const imgBadge = document.createElement('img');
    const imgVege = document.createElement('img');

    mainContainer.classList.add('main-container');
    mainHeader.classList.add('main-header');
    mainInfo.classList.add('main-info');
    mainFooter.classList.add('main-footer');

    mainInfo.textContent = "Lorem ipsum dolor sit amet, \
                consectetur adipiscing elit, \
                sed do eiusmod tempor incididunt \
                ut labore et dolore magna aliqua.";

    imgLogo.classList.add('logo');
    imgMichelin.classList.add('footer-image');
    imgBadge.classList.add('footer-image');
    imgVege.classList.add('footer-image');

    imgLogo.src = logo;

    imgMichelin.src = michelinStar;
    imgBadge.src = badge;
    imgVege.src = vege;

    content.appendChild(mainContainer);
    mainContainer.appendChild(mainHeader);
    mainContainer.appendChild(mainInfo);
    mainContainer.appendChild(mainFooter);

    mainHeader.appendChild(imgLogo);
    
    mainFooter.appendChild(imgMichelin);    
    mainFooter.appendChild(imgBadge);
    mainFooter.appendChild(imgVege);
    })();