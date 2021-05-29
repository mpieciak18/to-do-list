import { renderTasksFromBottomNav, taskArr } from './tasks.js';

let projArr = [];

const deleteProj = function(event) {
    // deletes tasks from DOM
    const deletedProj = event.target.parentNode;
    const projId = deletedProj.id;
    const taskList = document.getElementById('task-list');
    for (let i = 0; i < taskList.childNodes.length; i++) {
        if (taskList.childNodes[i].classList[1] == projId) {
            taskList.childNodes[i].remove();
        } else {
            continue;
        };
    };
    // updates taskArr & local storage
    let newArr = taskArr.filter(function(value, index, arr){ 
        if (value.projId != projId) {
              return value;
        };
    });
    taskArr = newArr;
    localStorage.setObj(1, taskArr);
    // updates projArr & local storage
    for (let i = 0; i < taskArr.length; i++) {
        if (deletedProj == taskArr[i]) {
            projArr.splice(i, 1);
            localStorage.setObj(0, projArr);
            break;
        } else {
            continue
        };
    };
    // deletes project from DOM
    deletedProj.remove();

};

const newProject = function(descr, id = null) {

    const bottomNav = document.getElementById('bottom-nav');

    const newProj = document.createElement('div');
    if (id == null && projArr.length == 0) {
        newProj.id = 0;
    } else if (id == null && projArr.length > 0) {
        newProj.id = Number(projArr[projArr.length - 1].id) + 1
    } else {
        newProj.id = id;
    };
    newProj.classList = 'project';

    const projectImage = document.createElement('img');
    projectImage.classList = 'icon';
    projectImage.src = './dist/images/project.png';

    const projectTitle = document.createElement('p');
    projectTitle.innerText = descr;

    newProj.appendChild(projectImage);
    newProj.appendChild(projectTitle);

    if (newProj.id != 0) {
        const ellipses = document.createElement('div');
        ellipses.classList = 'ellipses';
        ellipses.classList.add('proj-ellipses');
        newProj.appendChild(ellipses);
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

    if (nullIfNew == null) {
        projArr.push(projObj);
        localStorage.setObj(0, projArr);
    };

};

export { newProject };