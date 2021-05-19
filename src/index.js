import { renderHeader } from './modules/header'
import { renderFooter } from './modules/footer.js'
import { renderMain } from './modules/main-section.js'
import { newTask } from './modules/tasks.js'
import { newProject } from './modules/projects.js';

renderHeader();
renderMain();
renderFooter();

newTask('This is a task that I\'m going to perform today, in a timely fashion.', '11/18/1992');
newTask('Task Title', '05/22/2021');

newProject('test number one');
newProject('test number two');