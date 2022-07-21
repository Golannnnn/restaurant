const createHome = () => {
    const content = document.querySelector('#content');
    const container = document.createElement('main');
    const heading = document.createElement('h1');

    container.classList.add('home-container');
    heading.classList.add('home-heading');

    heading.textContent = 'This is the home!';

    content.appendChild(container);
    container.append(heading);
};

export { createHome };