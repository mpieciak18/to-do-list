let taskArr = [];

let currProj = '0';

const deleteBar = function(event) {

    const deletedBar = event.target.parentNode;

    for (let i = 0; i < taskArr.length; i++) {
        if (deletedBar == taskArr[i]) {
            taskArr.splice(i, 1);
            localStorage.setObj(1, taskArr);
            break;
        } else {
            continue
        };
    };

    deletedBar.remove();

};

const newTask = function(descr, due, id = null) {

    const taskList = document.getElementById('task-list');

    const task = document.createElement('div');
    task.classList = 'task';
    if (id == null) {
        task.classList.add(currProj);
    } else {
        task.classList.add(id)
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
    addTaskToStorage(descr, due, task.classList[1], id);

};

const addTaskToStorage = function(taskDescr, taskDate, taskId, nullIfNew) {

    let taskObj = {
        descr: taskDescr,
        date: taskDate,
        id: taskId
    };

    taskArr.push(taskObj);

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
        if (task.id == currProj) {
            renderTask(task, taskList);
        } else {
            continue;
        };
    };

};

const renderTask = function(taskArrItem, taskList) {

    const task = document.createElement('div');
    task.classList = 'task';
    task.classList.add(taskArrItem.id);
    
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
            console.log(task);
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
            if (dateToday == taskDate)
                renderTask(task, taskList);
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
            const taskDate = task.date;
            if (datesThisWeek.includes(taskDate) == true)
                renderTask(task, taskList);;
        };
    };

};

const renderTitle = function(id) {

    const projBar = document.getElementById(id);
    const title = document.getElementById('content-title');

    title.innerText = projBar.childNodes[1].innerText;

};

export { newTask, renderTasksFromBottomNav , topNavClick, taskArr };