import "./styles.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
home.showHome();
const homeBtn = document.querySelector('.home-btn');
homeBtn.addEventListener('click', () => {
    document.querySelector('#content').replaceChildren();
    home.showHome();
});

const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', () => {
    document.querySelector('#content').replaceChildren();
    menu.showMenu();
})