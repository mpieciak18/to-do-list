import { renderTasksFromBottomNav, taskArr } from './tasks.js';

let projArr = [];

let projCounter = 0;

const deleteProj = function(event) {

    const deletedProj = event.target.parentNode;
    const projId = deletedProj.id;

    let delItems = taskArr.filter(function(value, index, arr){ 
        if (value.classList[1] == projId) {
              return value;
        };
    });
    let leaveItems = taskArr.filter(function(value, index, arr){ 
        if (value.classList[1] != projId) {
              return value;
        };
    });

    for (let i = 0; i < delItems.length; i++) {
        delItems[i].remove()
    };

    taskArr = leaveItems;

    for (let i = 0; i < projArr.length; i++) {
        if (deletedProj == taskArr[i]) {
            projArr.splice(i, 1);
            break;
        } else {
            continue
        };
    };

    deletedProj.remove();

    console.log(projArr);

};

const newProject = function(descr) {

    const bottomNav = document.getElementById('bottom-nav');

    const newProj = document.createElement('div');
    newProj.id = projCounter;
    newProj.classList = 'project';

    const projectImage = document.createElement('img');
    projectImage.classList = 'icon';
    projectImage.src = '/dist/images/project.png';

    const projectTitle = document.createElement('p');
    projectTitle.innerText = descr;

    newProj.appendChild(projectImage);
    newProj.appendChild(projectTitle);

    if (projCounter != 0) {
        const xButton = document.createElement('div');
        xButton.classList = 'x-button-project';
        xButton.innerText = '✕';
        xButton.addEventListener('click', deleteProj);
        newProj.appendChild(xButton);
    };

    newProj.addEventListener('click', renderTasksFromBottomNav);

    bottomNav.appendChild(newProj).cloneNode(true);

    projArr.push(newProj);

    projCounter += 1;

};

export { newProject };