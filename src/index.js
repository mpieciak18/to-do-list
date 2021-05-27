import { renderHeader } from './modules/header'
import { renderFooter } from './modules/footer.js'
import { renderMain } from './modules/main-section.js'
import { newTask } from './modules/tasks.js'
import { newProject } from './modules/projects.js';

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}

Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

renderHeader();
renderMain();
renderFooter();

if (localStorage.getObj(0) != null && localStorage.getObj(0).length != 0 || 
    localStorage.getObj(1) != null && localStorage.getObj(1).length != 0) {

    let projs = localStorage.getObj(0);

    for (let i = 0; i < projs.length; i++) {
        newProject(projs[i].descr, projs[i].id);
    };

    let tasks = localStorage.getObj(1);

    for (let i = 0; i < tasks.length; i++) {
        newTask(tasks[i].descr, tasks[i].date, tasks[i].id);
    };

} else {

    newTask('This is a task that I\'m going to perform today, in a timely fashion.', '11/18/1992');
    newTask('Task Title', '05/22/2021');
    newProject('test number one');
    newProject('test number two');

};