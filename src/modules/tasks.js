const deleteBar = function(event) {

    const deletedBar = event.target.parentNode;

    deletedBar.remove();

};

let taskArr = [];

const newTask = function(descr, due) {

    const taskList = document.getElementById('task-list');

    const task = document.createElement('div');
    task.classList = 'task';
    
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

const renderTasks = function() {

    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    for (let i = 0; i < taskArr.length; i++) {

        taskList.appendChild(taskArr[i]);

    };

};

export { newTask, renderTasks };