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

    const task = document.createElement('div');
    task.classList = 'task';
    
    const xButton = document.createElement('div');
    xButton.classList = 'x-button';
    xButton.innerText = '✕';

    const taskTitle = document.createElement('div');
    taskTitle.classList = 'task-title';

    const ellipses = document.createElement('div');
    ellipses.classList = 'ellipses';

    const dueDate = document.createElement('div');
    dueDate.classList = 'due-date';

    const buildTask = function(descr, due) {

        taskTitle.innerText = descr;
        dueDate.innerText = due;

        task.appendChild(xButton.cloneNode(true));
        task.appendChild(taskTitle.cloneNode(true));
        task.appendChild(ellipses.cloneNode(true));
        task.appendChild(dueDate.cloneNode(true));
        taskList.appendChild(task.cloneNode(true));

        task.innerHTML = '';
        taskTitle.innerText = '';
        dueDate.innerText = '';

    };

    buildTask('This is a task that I\'m going to perform today, in a timely fashion.', 'Today');
    buildTask('Task Title', 'Today');

};

export { render as renderContent };