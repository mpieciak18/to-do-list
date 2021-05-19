const render = function() {
    
    const body = document.querySelector('body');

    const footer = document.createElement('footer');

    const text = document.createElement('p');
    text.innerText = 'Developed by Mark Pieciak';

    const link = document.createElement('a');
    link.href = 'https://github.com/mpieciak18/to-do-list';

    const image = document.createElement('img');
    image.id = 'github-logo';
    image.src = '/dist/images/github-logo.png';

    link.appendChild(image);
    footer.appendChild(text);
    footer.appendChild(link);
    body.appendChild(footer);

};

export { render as renderFooter };