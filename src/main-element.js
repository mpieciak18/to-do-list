import { renderNavBar } from './navbar.js'
import { renderContent } from './content.js'

const render = function() {

    const body = document.querySelector('body');

    const main = document.createElement('main');
    
    body.append(main);

    renderNavBar();
    renderContent();

};

export { render as renderMain };