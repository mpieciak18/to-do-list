let taskArr = [];

let currProj = '0';

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
    task.classList.add(currProj);
    
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

const renderTasksFromBottomNav = function(event) {

    if (event.target.classList[0] == 'x-button-project') {
        return;
    } else if (event.target.classList[0] == 'project') {
        currProj = event.target.id;
    } else {
        currProj = event.target.parentNode.id;
    };

    renderTitle(currProj);
    
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    for (let i = 0; i < taskArr.length; i++) {
        let task = taskArr[i];
        if (task.classList[1] == currProj) {
            taskList.appendChild(task);
        } else {
            continue;
        };
    };

};

const topNavClick = function(event) {

    currProj = '0';
    let id = '';

    if (event.target.tagName == 'DIV') {
        id = event.target.id;
    } else {
        id = event.target.parentNode.id;
    };
    renderTasksFromTopNav(id);
    renderTitle(id);

};

const renderTasksFromTopNav = function(id) {

    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    if (id == 'all-tasks') {
        for (let i = 0; i < taskArr.length; i++) {
            const task = taskArr[i];
            taskList.appendChild(task);
        };
    } else if (id == 'due-today') {
        const d = new Date();
        let thisMonth = d.getMonth() + 1;
        if (thisMonth < 10) {
            thisMonth = `0${thisMonth}`;
        };
        const dateToday = `${thisMonth}/${d.getDate()}/${d.getFullYear()}`;
        for (let i = 0; i < taskArr.length; i++) {
            const task = taskArr[i];
            const taskDate = task.lastChild.innerText;
            if (dateToday == taskDate)
                taskList.appendChild(task);
        };
    } else if (id == 'due-this-week') {
        const datesThisWeek  = [...Array(7)].map((_, i) => {
            const d = new Date()
            d.setDate(d.getDate() + i)
            let thisMonth = d.getMonth() + 1;
            if (thisMonth < 10) {
                thisMonth = `0${thisMonth}`;
            };
            return `${thisMonth}/${d.getDate()}/${d.getFullYear()}`
        });
        for (let i = 0; i < taskArr.length; i++) {
            const task = taskArr[i];
            const taskDate = task.lastChild.innerText;
            if (datesThisWeek.includes(taskDate) == true)
                taskList.appendChild(task);
        };
    };

};

const renderTitle = function(id) {

    const projBar = document.getElementById(id);
    const title = document.getElementById('content-title');

    title.innerText = projBar.childNodes[1].innerText;

};

export { newTask, renderTasksFromBottomNav , topNavClick, taskArr };