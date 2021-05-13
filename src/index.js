import { renderHeader } from './header.js'
import { renderFooter } from './footer.js'
import { renderMain } from './main-element'
import { newTask } from './main/newTask.js'

renderHeader();
renderMain();
renderFooter();

newTask('This is a task that I\'m going to perform today, in a timely fashion.', 'Today');
newTask('Task Title', 'Today');