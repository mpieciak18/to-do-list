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

    for (let i = 0; i < taskArr.length; i++) {
        if (deletedProj == taskArr[i]) {
            projArr.splice(i, 1);
            localStorage.setObj(0, projArr);
            break;
        } else {
            continue
        };
    };

    deletedProj.remove();

};

const newProject = function(descr, id = null) {

    const bottomNav = document.getElementById('bottom-nav');

    const newProj = document.createElement('div');
    if (id == null) {
        newProj.id = projCounter;
        projCounter += 1;
    } else {
        newProj.id = id;
        projCounter = id + 1;
    };
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

    addProjToStorage(descr, newProj.id, id);

};

const addProjToStorage = function(projDescr, projId, nullIfNew) {

    let projObj = {
        descr: projDescr,
        id: projId
    };

    if (projObj.id != 0) {
        projArr.push(projObj);
    };

    if (nullIfNew == null) {
        localStorage.setObj(0, projArr);
    };

};

export { newProject };