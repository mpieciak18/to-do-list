const render = function() {

    const pageBody = document.querySelector('body');

    const header = document.createElement('header');

    const image = document.createElement('img');
    image.id = 'logo';
    image.src = '/dist/images/checkbox.png';

    const text = document.createElement('p');
    text.innerText = 'To-Do List';

    header.append(image);
    header.append(text);

    pageBody.prepend(header);

};

export { render as renderHeader };