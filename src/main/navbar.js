const render = function() {
   
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
    allTasksImage.src = '/dist/images/inbox.png';

    const allTasksText = document.createElement('p');
    allTasksText.innerText = 'All Tasks';

    allTasks.appendChild(allTasksImage);
    allTasks.appendChild(allTasksText);
    topNav.appendChild(allTasks);

    const dueToday = document.createElement('div');
    dueToday.id = 'due-today';

    const dueTodayImage = document.createElement('img');
    dueTodayImage.id = 'due-today-img';
    dueTodayImage.classList = 'icon';
    dueTodayImage.src = '/dist/images/today.png';

    const dueTodayText = document.createElement('p');
    dueTodayText.innerText = 'Due Today';

    dueToday.appendChild(dueTodayImage);
    dueToday.appendChild(dueTodayText);
    topNav.appendChild(dueToday);

    const dueWeek = document.createElement('div');
    dueToday.id = 'due-this-week';

    const dueWeekImage = document.createElement('img');
    dueWeekImage.id = 'due-this-week-img';
    dueWeekImage.classList = 'icon';
    dueWeekImage.src = '/dist/images/week.png';

    const dueWeekText = document.createElement('p');
    dueWeekText.innerText = 'Due This Week';

    dueWeek.appendChild(dueWeekImage);
    dueWeek.appendChild(dueWeekText);
    topNav.appendChild(dueWeek);

    const bottomNavTitle = document.createElement('div');
    bottomNavTitle.id = 'bottom-nav-title';
    bottomNavTitle.innerText = 'Projects';

    const bottomNav = document.createElement('div');
    bottomNav.id = 'bottom-nav';

    const unassignedTasks = document.createElement('div');
    unassignedTasks.id = 'unassigned-tasks';
    unassignedTasks.classList = 'project';

    const projectImage = document.createElement('img');
    projectImage.classList = 'icon';
    projectImage.src = '/dist/images/project.png';

    const projectTitle = document.createElement('p');
    projectTitle.innerText = 'Unassigned Tasks';

    unassignedTasks.appendChild(projectImage);
    unassignedTasks.appendChild(projectTitle);
    bottomNav.appendChild(unassignedTasks);

    const newProjectContainer = document.createElement('div');
    newProjectContainer.id = 'new-project-container';
    const newProject = document.createElement('div');
    newProject.id = 'new-project';
    newProject.innerText = '➕ New Project';
    newProjectContainer.appendChild(newProject);

    navBar.appendChild(topNav);
    navBar.appendChild(bottomNavTitle);
    navBar.appendChild(bottomNav);
    navBar.appendChild(newProjectContainer);

    main.prepend(navBar);

};

export { render as renderNavBar };