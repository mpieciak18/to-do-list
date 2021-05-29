import { newProject } from './projects.js';
import { newTask } from './tasks.js';
import { topNavClick } from './tasks.js';
import { popupTask, popupProj } from './popups.js';

// pop-up code
const popTask = new popupTask();
const popProj = new popupProj();

const renderNavBar = function() {
   
    const main = document.querySelector('main');

    const navBar = document.createElement('div');
    navBar.id = 'navbar';

    const topNav = document.createElement('div');
    topNav.id = 'top-nav';

    const allTasks = document.createElement('div');
    allTasks.id = 'all-tasks';

    const allTasksImage = document.createElement('img');
    allTasksImage.id = 'all-tasks-img';
    allTasksImage.classList = 'icon';
    allTasksImage.src = 'images/inbox.png';

    const allTasksText = document.createElement('p');
    allTasksText.innerText = 'All Tasks';

    allTasks.appendChild(allTasksImage);
    allTasks.appendChild(allTasksText);
    allTasks.addEventListener('click', topNavClick);
    topNav.appendChild(allTasks);

    const dueToday = document.createElement('div');
    dueToday.id = 'due-today';

    const dueTodayImage = document.createElement('img');
    dueTodayImage.id = 'due-today-img';
    dueTodayImage.classList = 'icon';
    dueTodayImage.src = 'images/today.png';

    const dueTodayText = document.createElement('p');
    dueTodayText.innerText = 'Due Today';

    dueToday.appendChild(dueTodayImage);
    dueToday.appendChild(dueTodayText);
    dueToday.addEventListener('click', topNavClick);
    topNav.appendChild(dueToday);

    const dueWeek = document.createElement('div');
    dueWeek.id = 'due-this-week';

    const dueWeekImage = document.createElement('img');
    dueWeekImage.id = 'due-this-week-img';
    dueWeekImage.classList = 'icon';
    dueWeekImage.src = 'images/week.png';

    const dueWeekText = document.createElement('p');
    dueWeekText.innerText = 'Due This Week';

    dueWeek.appendChild(dueWeekImage);
    dueWeek.appendChild(dueWeekText);
    dueWeek.addEventListener('click', topNavClick);
    topNav.appendChild(dueWeek);

    const bottomNavTitle = document.createElement('div');
    bottomNavTitle.id = 'bottom-nav-title';
    bottomNavTitle.innerText = 'Projects';

    const bottomNav = document.createElement('div');
    bottomNav.id = 'bottom-nav';

    const newProjectContainer = document.createElement('div');
    newProjectContainer.id = 'new-project-container';
    const newProjectButton = document.createElement('div');
    newProjectButton.id = 'new-project';
    newProjectButton.innerText = '➕ New Project';
    newProjectContainer.appendChild(newProjectButton);
    // pop-up code
    newProjectContainer.addEventListener('click', popProj.open);
    popProj.pSubmit.addEventListener('click', newProjFromForm);

    navBar.appendChild(topNav);
    navBar.appendChild(bottomNavTitle);
    navBar.appendChild(bottomNav);
    navBar.appendChild(newProjectContainer);

    main.prepend(navBar);

};

// pop-up code
const newProjFromForm = function(event) {
    let descr = event.target.parentNode[0].value;
    newProject(descr);
    popProj.close();
};

const renderContent = function() {

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
    // pop-up code
    newTaskContainer.addEventListener('click', popTask.open);
    popTask.pSubmit.addEventListener('click', newTaskFromForm);

    content.appendChild(contentTitle);
    content.appendChild(taskList);
    content.appendChild(newTaskContainer);
    main.appendChild(content);

};
// pop-up code
const newTaskFromForm = function(event) {
    let descr = event.target.parentNode[0].value;
    let due = event.target.parentNode[1].value.split('-');
    due = `${due[1]}/${due[2]}/${due[0]}`;
    newTask(descr, due);
    popTask.close();
};

const renderMain = function() {

    const body = document.querySelector('body');

    const main = document.createElement('main');

    body.append(main);

    renderNavBar();
    renderContent();

};

export { renderMain };