import home from './home.js'
import menu from './menu.js'
import about from './about.js'

const mainContent = document.getElementById("content");
mainContent.append(...home);

const navHome = document.getElementById('Home');
navHome.addEventListener('click', ()=>{
    mainContent.replaceChildren(...home);
})

const navMenu = document.getElementById('Menu');
navMenu.addEventListener('click', ()=>{
    mainContent.replaceChildren(...menu);
})

const navAbout = document.getElementById('About');
navAbout.addEventListener('click', ()=>{
    mainContent.replaceChildren(...about);
})