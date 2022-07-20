const createMenu = () => {
    const content = document.querySelector('#content');
    const container = document.createElement('main');
    const heading = document.createElement('h1');

    container.classList.add('menu-container');
    heading.classList.add('menu-heading');

    heading.textContent = 'This is the menu!';

    content.appendChild(container);
    container.append(heading);
};

export { createMenu };