const render = function() {

    const body = document.querySelector('body');

    const header = document.createElement('header');

    const logo = document.createElement('img');
    logo.id = 'logo';
    logo.src = '/dist/images/checkbox.png';

    const text = document.createElement('p');
    text.innerText = 'To-Do List';

    const bars = document.createElement('img');
    bars.id = 'bars';
    bars.src = '/dist/images/bars.png';
    bars.addEventListener('click', displayNav);

    header.appendChild(logo);
    header.appendChild(text);
    header.appendChild(bars);

    body.prepend(header);

};

const displayNav = function() {

    const navbar = document.getElementById('navbar');

    if (navbar.style.visibility == 'visible') {
        navbar.style.visibility = 'hidden';
        navbar.style.padding = '0px';
        navbar.style.height = '0px';
    } else {
        navbar.style.visibility = 'visible';
        navbar.style.padding = '30px 15px';
        navbar.style.height = 'auto';
    };

}

export { render as renderHeader };