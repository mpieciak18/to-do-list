let taskArr = [];

let currProj = 0;

const deleteBar = function(event) {

    const deletedBar = event.target.parentNode;

    for (let i = 0; i < taskArr.length; i++) {
        if (deletedBar == taskArr[i]) {
            taskArr.splice(i, 1);
            break;
        } else {
            continue
        };
    };

    deletedBar.remove();

};

const newTask = function(descr, due) {

    const taskList = document.getElementById('task-list');

    const task = document.createElement('div');
    task.classList = 'task';
    task.classList.add(currProj.toString());
    
    const xButton = document.createElement('div');
    xButton.classList = 'x-button-task';
    xButton.innerText = '✕';
    xButton.addEventListener('click', deleteBar);
    task.appendChild(xButton);

    const taskTitle = document.createElement('div');
    taskTitle.classList = 'task-title';
    taskTitle.innerText = descr;
    task.appendChild(taskTitle);

    const ellipses = document.createElement('div');
    ellipses.classList = 'ellipses';
    task.appendChild(ellipses);

    const dueDate = document.createElement('div');
    dueDate.classList = 'due-date';
    dueDate.innerText = due;
    task.appendChild(dueDate);
    
    taskList.appendChild(task);
    taskArr.push(task);

};

const renderTasks = function(event) {

    projectId = '';

    if (event.target.classList[0] == 'x-button-project') {
        return;
    } else if (event.target.classList[0] == 'project') {
        projectId = event.target.classList[0];
    } else {
        projectId = event.target.parentNode.classList[0];
    };

    currProj = projectId;

    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    for (let i = 0; i < taskArr.length; i++) {
        task = taskArr[i];
        if (task.classList[1] = projectId) {
            taskList.appendChild(taskArr[i]);
        } else {
            continue;
        };
    };

};

export { newTask, renderTasks };