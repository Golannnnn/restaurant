const createMenu = () => {
    /* 
        > content
            > main 
                > menu
                    > menuHeading
                    > menuTitle
                    > menuParagraph
                > asideContainer
                    > asideHeading
                    > asideParagraph
                    > asideImgWrap
                        > image
    */
    const content = document.querySelector('#content');
    const main = document.createElement('main');
    const menu = document.createElement('div');
    const menuHeading = document.createElement('h1');
    const asideContainer = document.createElement('div');
    const asideHeading = document.createElement('h1');
    const asideParagraph = document.createElement('p');
    const asideImgWrap = document.createElement('div');

    main.classList.add('menu-main');
    menu.classList.add('menu-container');
    menuHeading.classList.add('menu-heading');
    asideContainer.classList.add('menu-aside-container');
    asideHeading.classList.add('menu-aside-heading');
    asideParagraph.classList.add('menu-aside-para');
    asideImgWrap.classList.add('aside-img-wrap');

    menuHeading.textContent = 'Mains';
    asideHeading.textContent = 'We create art.';
    asideParagraph.textContent = 'and we serve it with love.';

    content.appendChild(main);
    main.append(menu, asideContainer);
    menu.append(menuHeading);
    asideContainer.append(asideHeading, asideParagraph, asideImgWrap);

    const dishes = ['Rissotto', 'Lagasna', 'Spagetti', 'Pasta salad', 'Pizza margarita', 'Kids menu', 'Sides'];

    const descriptions = [
        'Freshly made pasta with home-made ingredients.',
        'Freshly made pasta with home-made ingredients.',
        'Freshly made pasta with home-made ingredients.',
        'Freshly made pasta with home-made ingredients.',
        'Freshly made pasta with home-made ingredients.',
        'Freshly made pasta with home-made ingredients.',
        'Freshly made pasta with home-made ingredients.',
    ]

    for (let i = 0; i < 7; i++) {
        let menuTitle = document.createElement('p');
        let menuParagraph = document.createElement('p');

        menuTitle.classList.add('menu-title');
        menuParagraph.classList.add('menu-para');

        menuTitle.textContent = dishes[i];
        menuParagraph.textContent = descriptions[i];

        menu.append(menuTitle, menuParagraph);
    }

    for (let i = 0; i < 6; i++) {
        let image = document.createElement('img');
        image.classList.add('aside-img');
        image.setAttribute('src', `./image${[i]}.jpg`);
        asideImgWrap.append(image);
    }
};

export { createMenu };