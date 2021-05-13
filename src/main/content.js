const render = function() {

    const main = document.querySelector('main');

    const content = document.createElement('div');
    content.id = 'content';

    const contentTitle = document.createElement('div');
    contentTitle.id = 'content-title';
    contentTitle.innerText = 'All Tasks';

    const taskList = document.createElement('div');
    taskList.id = 'task-list';

    const newTaskContainer = document.createElement('div');
    newTaskContainer.id = 'new-task-container';
    const newTask = document.createElement('div');
    newTask.id = 'new-task';
    newTask.innerText = '➕ New Task';
    newTaskContainer.appendChild(newTask);

    content.appendChild(contentTitle);
    content.appendChild(taskList);
    content.appendChild(newTaskContainer);
    main.appendChild(content);

};

export { render as renderContent };