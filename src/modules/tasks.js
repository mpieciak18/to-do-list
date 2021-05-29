let taskArr = [];

let currProj = 0;

const deleteBar = function(event) {
    // delete task from array & local storage
    const deletedBar = event.target.parentNode;
    for (let i = 0; i < taskArr.length; i++) {
        if (deletedBar.id == taskArr[i].taskId) {
            taskArr.splice(i, 1);
            localStorage.setObj(1, taskArr);
            break;
        } else {
            continue
        };
    };
    // delete task from DOM
    deletedBar.remove();

};

const newTask = function(descr, due, projId = null, taskId = null) {

    const taskList = document.getElementById('task-list');

    const task = document.createElement('div');
    task.classList = 'task';

    if (projId == null) {
        task.classList.add(currProj);
    } else {
        task.classList.add(projId)
    };

    if (taskId == null && taskArr.length == 0) {
        task.id = 0;
    } else if (taskId == null && taskArr.length > 0) {
        let lastTaskId = taskArr[taskArr.length - 1].taskId;
        let newTaskId = Number(lastTaskId) + 1;
        task.id = newTaskId;
    } else {
        task.id = taskId;
    };
    
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
    addTaskToStorage(descr, due, task.classList[1], task.id, projId);

};

const addTaskToStorage = function(taskDescr, taskDate, taskClass, taskID, nullIfNew = null) {
    // create task object
    let taskObj = {
        descr: taskDescr,
        date: taskDate,
        projId: taskClass,
        taskId: taskID
    };
    // add task to task array
    taskArr.push(taskObj);
    // add new task object local storage
    if (nullIfNew == null) {
        localStorage.setObj(1, taskArr);
    };

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
        if (task.projId == currProj) {
            renderTask(task, taskList);
        } else {
            continue;
        };
    };

};

const renderTask = function(taskArrItem, taskList) {

    const task = document.createElement('div');
    task.classList = 'task';
    task.classList.add(taskArrItem.projId);
    task.id = taskArrItem.taskId;
    
    const xButton = document.createElement('div');
    xButton.classList = 'x-button-task';
    xButton.innerText = '✕';
    xButton.addEventListener('click', deleteBar);
    task.appendChild(xButton);

    const taskTitle = document.createElement('div');
    taskTitle.classList = 'task-title';
    taskTitle.innerText = taskArrItem.descr;
    task.appendChild(taskTitle);

    const ellipses = document.createElement('div');
    ellipses.classList = 'ellipses';
    task.appendChild(ellipses);

    const dueDate = document.createElement('div');
    dueDate.classList = 'due-date';
    dueDate.innerText = taskArrItem.date;
    task.appendChild(dueDate);
    
    taskList.appendChild(task);

};

const topNavClick = function(event) {

    currProj = 0;
    let projId = '';

    if (event.target.tagName == 'DIV') {
        projId = event.target.id;
    } else {
        projId = event.target.parentNode.id;
    };
    renderTasksFromTopNav(projId);
    renderTitle(projId);

};

const renderTasksFromTopNav = function(id) {

    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    if (id == 'all-tasks') {
        for (let i = 0; i < taskArr.length; i++) {
            const task = taskArr[i];
            renderTask(task, taskList);
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
            const taskDate = task.date;
            if (dateToday == taskDate) {
                renderTask(task, taskList);
            };
        };
    } else if (id == 'due-this-week') {
        const datesThisWeek  = [...Array(7)].map((_, i) => {
            const d = new Date()
            d.setDate(d.getDate() + i)
            let thisMonth = d.getMonth() + 1;
            let thisDay = d.getDate();
            let thisYear = d.getFullYear();
            if (thisMonth < 10) {
                thisMonth = `0${thisMonth}`;
            };
            if (thisDay < 10) {
                thisDay = `0${thisDay}`;
            };
            return `${thisMonth}/${thisDay}/${thisYear}`
        });
        for (let i = 0; i < taskArr.length; i++) {
            const task = taskArr[i];
            const taskDate = task.date;
            if (datesThisWeek.includes(taskDate) == true) {
                renderTask(task, taskList);
            };
        };
    };

};

const renderTitle = function(id) {

    const projBar = document.getElementById(id);
    const title = document.getElementById('content-title');

    title.innerText = projBar.childNodes[1].innerText;

};

export { newTask, renderTasksFromBottomNav , topNavClick, taskArr };