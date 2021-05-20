import { renderTasks } from './tasks.js';

const deleteBar = function(event) {

    const deletedBar = event.target.parentNode;

    deletedBar.remove();

};

let projCounter = 0;

const newProject = function(name) {

    const bottomNav = document.getElementById('bottom-nav');

    const newProject = document.createElement('div');
    newProject.id = projCounter;
    newProject.classList = 'project';

    const projectImage = document.createElement('img');
    projectImage.classList = 'icon';
    projectImage.src = '/dist/images/project.png';

    const projectTitle = document.createElement('p');
    projectTitle.innerText = name;

    newProject.appendChild(projectImage);
    newProject.appendChild(projectTitle);

    if (projCounter != 0) {
        const xButton = document.createElement('div');
        xButton.classList = 'x-button-project';
        xButton.innerText = '✕';
        xButton.addEventListener('click', deleteBar);
        newProject.appendChild(xButton);
    };

    newProject.addEventListener('click', renderTasks);

    bottomNav.appendChild(newProject).cloneNode(true);

    projCounter += 1;

};

export { newProject };