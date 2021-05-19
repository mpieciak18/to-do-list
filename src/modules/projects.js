import { renderTasks } from './tasks.js';

const deleteBar = function(event) {

    const deletedBar = event.target.parentNode;

    deletedBar.remove();

};

let projArr = [];

let projCounter = 0;

const newProject = function(name) {

    const bottomNav = document.getElementById('bottom-nav');

    const newProject = document.createElement('div');
    newProject.id = projCounter;
    projCounter += 1;
    newProject.classList = 'project';

    const projectImage = document.createElement('img');
    projectImage.classList = 'icon';
    projectImage.src = '/dist/images/project.png';

    const projectTitle = document.createElement('p');
    projectTitle.innerText = name;

    const xButton = document.createElement('div');
    xButton.classList = 'x-button-project';
    xButton.innerText = '✕';
    xButton.addEventListener('click', deleteBar);

    newProject.appendChild(projectImage);
    newProject.appendChild(projectTitle);
    newProject.appendChild(xButton);
    newProject.addEventListener('click', renderTasks);

    projArr.push(newProject);
    bottomNav.appendChild(newProject);

};

export { newProject };