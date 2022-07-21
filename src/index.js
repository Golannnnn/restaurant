import './style.css';
import { createHome } from './home.js';
import { createMenu } from './menu.js';
import { createAbout } from './about.js';

const createHeader = (() => {
    const content = document.querySelector('#content');
    const header = document.createElement('header');
    const home = document.createElement('div');
    const menu = document.createElement('div');
    const about = document.createElement('div');

    home.classList.add('home-link');
    menu.classList.add('menu-link');
    about.classList.add('about-link');

    home.textContent = 'Home';
    menu.textContent = 'Menu';
    about.textContent = 'About';

    content.appendChild(header);
    header.append(home, menu, about);

    return { content, header, home, menu, about };
})();

const handlePageSwitch = (() => {
    const { content, header, home, menu, about } = createHeader;
    const homeContainer = document.querySelector('.home-container');
    const menuContainer = document.querySelector('.menu-container');
    const aboutContainer = document.querySelector('.about-container')

    const removeModule = () => {
            // remove all child elements of content except for header
            while (content.childNodes.length > 1) {
                content.removeChild(content.lastChild);
            };
    };

    const handleHeaderClicks = (e) => {
        switch (e.target) {
            case home:
                // if the module isn't already rendered
                if (!content.contains(homeContainer)) {
                    removeModule();
                    createHome();
                }
                break;
            case menu:
                if (!content.contains(menuContainer)) {
                    removeModule();
                    createMenu();
                }
                break;
            case about:
                if (!content.contains(aboutContainer)) {
                    removeModule();
                    createAbout();
                }
                break;
        }
    }

    header.addEventListener('click', handleHeaderClicks);
})();