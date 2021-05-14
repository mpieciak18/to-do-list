import { renderHeader } from './header.js'
import { renderFooter } from './footer.js'
import { renderMain } from './main-element'
import { newTask } from './main/newTask.js'
import { newProject } from './main/newProject.js';

renderHeader();
renderMain();
renderFooter();

newTask('This is a task that I\'m going to perform today, in a timely fashion.', 'Today');
newTask('Task Title', 'Today');

newProject('test number one');
newProject('test number two');