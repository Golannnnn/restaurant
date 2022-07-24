import './home.css';
import kitchen from './images/kitchen.jpg';
import restaurant from './images/restaurant.jpg';

const createHome = () => {
    /*
        > content
            > main
                > section
                    > imgWrap
                        > image
                    > textContainer
                        > heading
                        > paragraph
                > section2
                    > imgWrap2
                        > image2
                    > textContainer2
                        > heading2
                        > paragraph2
    */
    const content = document.querySelector('#content');
    const main = document.createElement('main');

    const section = document.createElement('section');
    const imgWrap = document.createElement('div');
    const image = document.createElement('img');
    const textContainer = document.createElement('div');
    const heading = document.createElement('h1');
    const paragraph = document.createElement('p');
    
    const section2 = document.createElement('section');
    const textContainer2 = document.createElement('div');
    const heading2 = document.createElement('h1');
    const paragraph2 = document.createElement('p');
    const imgWrap2 = document.createElement('div');
    const image2 = document.createElement('img');

    const desktopMediaQuery = window.matchMedia('(min-width: 800px)');
    const mobileMediaQuery = window.matchMedia('(max-width: 800px)');

    main.classList.add('home-main');
    section.classList.add('home-section');
    imgWrap.classList.add('home-img-wrap');
    image.src = kitchen;
    image.classList.add('home-img');
    textContainer.classList.add('home-text-container');
    heading.classList.add('home-heading');
    paragraph.classList.add('home-paragraph');

    section2.classList.add('home-section2');
    textContainer2.classList.add('home-text-container2');
    heading2.classList.add('home-heading');
    paragraph2.classList.add('home-paragraph');
    imgWrap2.classList.add('home-img-wrap2');
    image2.src = restaurant;
    image2.classList.add('home-img');

    heading.textContent = 'The kitchen.';
    paragraph.textContent = 'Where the magic happens.'
    heading2.textContent = 'The restaurant.';
    paragraph2.textContent = 'Experience the magic.'

    content.appendChild(main);
    main.append(section, section2);
    
    section.append(imgWrap, textContainer);
    imgWrap.append(image);
    textContainer.append(heading, paragraph);

    if (mobileMediaQuery.matches) section2.append(imgWrap2, textContainer2);
    else section2.append(textContainer2, imgWrap2);

    textContainer2.append(heading2, paragraph2);
    imgWrap2.append(image2);

    const handleDesktop = (e) => {
        if (e.matches) section2.append(textContainer2, imgWrap2);
    }
    
    const handleMobile = (e) => {
        if (e.matches) section2.append(imgWrap2, textContainer2);
    }

    mobileMediaQuery.addEventListener('change', handleMobile);
    desktopMediaQuery.addEventListener('change', handleDesktop);
};

export { createHome };