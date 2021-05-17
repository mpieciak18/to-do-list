import { deleteBar } from './x-button.js';

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

};

export { newTask };