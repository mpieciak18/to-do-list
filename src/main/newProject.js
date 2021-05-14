const newProject = function(name) {

    const bottomNav = document.getElementById('bottom-nav');

    const newProject = document.createElement('div');
    // newProject.id = ???;
    // Above code needed for associated tasks later on
    newProject.classList = 'project';

    const projectImage = document.createElement('img');
    projectImage.classList = 'icon';
    projectImage.src = '/dist/images/project.png';

    const projectTitle = document.createElement('p');
    projectTitle.innerText = name;

    const xButton = document.createElement('div');
    xButton.classList = 'x-button-project';
    xButton.innerText = '✕';

    newProject.appendChild(projectImage);
    newProject.appendChild(projectTitle);
    newProject.appendChild(xButton);

    bottomNav.appendChild(newProject);

};

export { newProject };