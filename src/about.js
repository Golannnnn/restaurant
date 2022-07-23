const createAbout = () => {
    const content = document.querySelector('#content');
    const main = document.createElement('main');
    const heading = document.createElement('h1');
    const paragraph = document.createElement('p');
    const section = document.createElement('section');
    const sectionHeading = document.createElement('h1');

    const historyContainer = document.createElement('div');
    const textContainer = document.createElement('div');
    const textHeading = document.createElement('h2');
    const textParagraph = document.createElement('p');
    const imgWrap = document.createElement('div');
    const img = document.createElement('img');

    const historyContainer2 = document.createElement('div');
    const textContainer2 = document.createElement('div');
    const textHeading2 = document.createElement('h2');
    const textParagraph2 = document.createElement('p');
    const imgWrap2 = document.createElement('div');
    const img2 = document.createElement('img');

    main.classList.add('about-main');
    heading.classList.add('about-heading');
    paragraph.classList.add('about-paragraph');

    section.classList.add('about-section');
    sectionHeading.classList.add('about-section-heading');

    historyContainer.classList.add('about-history-container');
    textContainer.classList.add('about-text-container');
    textHeading.classList.add('about-text-heading');
    textParagraph.classList.add('about-text-paragraph');
    imgWrap.classList.add('about-img-wrap');
    img.classList.add('about-img');
    img.setAttribute('src', './landscape.jpg');

    historyContainer2.classList.add('about-history-container2');
    textContainer2.classList.add('about-text-container2');
    textHeading2.classList.add('about-text-heading2');
    textParagraph2.classList.add('about-text-paragraph2');
    imgWrap2.classList.add('about-img-wrap2');
    img2.classList.add('about-img2');
    img2.setAttribute('src', './landscape.jpg');


    heading.textContent = 'This is where it all started.';
    paragraph.textContent = 'Scroll down to learn more.';

    sectionHeading.textContent = 'Our History.'

    textHeading.textContent = 'This is tiltle one.';
    textParagraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.';

    textHeading2.textContent = 'This is a tiltle two.';
    textParagraph2.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.';

    content.append(main, section);
    main.append(heading, paragraph);

    section.append(sectionHeading, historyContainer, historyContainer2);
    historyContainer.append(textContainer, imgWrap);
    textContainer.append(textHeading, textParagraph);
    imgWrap.append(img);

    historyContainer2.append(imgWrap2, textContainer2);
    textContainer2.append(textHeading2, textParagraph2);
    imgWrap2.append(img2);
};

export { createAbout };