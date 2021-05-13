import { renderNavBar } from './main/navbar.js'
import { renderContent } from './main/content.js'

const render = function() {

    const body = document.querySelector('body');

    const main = document.createElement('main');
    
    body.append(main);

    renderNavBar();
    renderContent();

};

export { render as renderMain };