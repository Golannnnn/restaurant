import './index.css';
import { createHome } from './home.js';
import { createMenu } from './menu.js';
import { createAbout } from './about.js';

const createHeader = (() => {
    const content = document.createElement('div');
    const header = document.createElement('header');
    const logo = document.createElement('p');
    const linkContainer = document.createElement('div');
    const home = document.createElement('p');
    const menu = document.createElement('p');
    const about = document.createElement('p');

    content.setAttribute('id', 'content');
    logo.classList.add('logo');
    linkContainer.classList.add('link-container');
    home.classList.add('home-link');
    menu.classList.add('menu-link');
    about.classList.add('about-link');

    logo.textContent = 'Golannnnn'
    home.textContent = 'Home';
    menu.textContent = 'Menu';
    about.textContent = 'About';

    document.body.append(content);
    content.appendChild(header);
    header.appendChild(logo);
    header.appendChild(linkContainer);
    linkContainer.append(home, menu, about);

    return { content, header, linkContainer, home, menu, about };
})();

const handlePageSwitch = (() => {
    const { content, header, linkContainer, home, menu, about } = createHeader;

    const removeModule = () => {
            // remove all child elements of content except for header
            while (content.childNodes.length > 1) {
                content.removeChild(content.lastChild);
            };
    };

    const activeModule = (module) => {
        const children = linkContainer.children;

        for (let i = 0; i < children.length; i++) {
            if (children[i] === module) {
                children[i].classList.add('active-module');
            };
            if (children[i] !== module) {
                children[i].classList.remove('active-module');
            };
        };
    };

    const handleHeaderClicks = (e) => {
        const homeContainer = document.querySelector('.home-main');
        const menuContainer = document.querySelector('.menu-main');
        const aboutContainer = document.querySelector('.about-main');

        switch (e.target) {
            case home:
                // if the module isn't already rendered
                if (!content.contains(homeContainer)) {
                    removeModule();
                    createHome();
                    activeModule(home);
                };
                break;
            case menu:
                if (!content.contains(menuContainer)) {
                    removeModule();
                    createMenu();
                    activeModule(menu);
                };
                break;
            case about:
                if (!content.contains(aboutContainer)) {
                    removeModule();
                    createAbout();
                    activeModule(about);
                };
                break;
        };
    };

    // display createHome on default 
    createHome();
    home.classList.add('active-module');
    header.addEventListener('click', handleHeaderClicks);
})();