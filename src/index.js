import './style.css';
import { menuMessage } from './menu.js';
import { aboutMessage } from './about.js';

console.log('Helllooo');
menuMessage();
aboutMessage();

const createHeader = (() => {
    const content = document.querySelector('#content');
    const header = document.createElement('header');
    const home = document.createElement('div');
    const menu = document.createElement('div');
    const about = document.createElement('div');

    home.textContent = 'Home';
    menu.textContent = 'Menu';
    about.textContent = 'About';

    content.appendChild(header);
    header.append(home, menu, about);
})();