(()=>{"use strict";!function(){const e=document.querySelector("body"),t=document.createElement("header"),n=document.createElement("img");n.id="logo",n.src="/dist/images/checkbox.png";const d=document.createElement("p");d.innerText="To-Do List",t.appendChild(n),t.appendChild(d),e.prepend(t)}(),function(){const e=document.querySelector("body"),t=document.createElement("main");e.append(t),function(){const e=document.querySelector("main"),t=document.createElement("div");t.id="navbar";const n=document.createElement("div");n.id="top-nav";const d=document.createElement("div");d.id="all-tasks";const i=document.createElement("img");i.id="all-tasks-img",i.classList="icon",i.src="/dist/images/inbox.png";const c=document.createElement("p");c.innerText="All Tasks",d.appendChild(i),d.appendChild(c),n.appendChild(d);const o=document.createElement("div");o.id="due-today";const a=document.createElement("img");a.id="due-today-img",a.classList="icon",a.src="/dist/images/today.png";const s=document.createElement("p");s.innerText="Due Today",o.appendChild(a),o.appendChild(s),n.appendChild(o);const l=document.createElement("div");o.id="due-this-week";const m=document.createElement("img");m.id="due-this-week-img",m.classList="icon",m.src="/dist/images/week.png";const p=document.createElement("p");p.innerText="Due This Week",l.appendChild(m),l.appendChild(p),n.appendChild(l);const r=document.createElement("div");r.id="bottom-nav-title",r.innerText="Projects";const u=document.createElement("div");u.id="bottom-nav";const h=document.createElement("div");h.id="unassigned-tasks";const E=document.createElement("img");E.classList="icon",E.src="/dist/images/project.png";const g=document.createElement("p");g.innerText="Unassigned Tasks",h.appendChild(E),h.appendChild(g),u.appendChild(h),t.appendChild(n),t.appendChild(r),t.appendChild(u),e.prepend(t)}(),function(){const e=document.querySelector("main"),t=document.createElement("div");t.id="content";const n=document.createElement("div");n.id="content-title",n.innerText="All Tasks";const d=document.createElement("div");d.id="task-list";const i=document.createElement("div");i.id="new-task-container";const c=document.createElement("div");c.id="new-task",c.innerText="➕ New Task",i.appendChild(c),t.appendChild(n),t.appendChild(d),t.appendChild(i),e.appendChild(t);const o=document.createElement("div");o.classList="task";const a=document.createElement("div");a.classList="x-button",a.innerText="✕";const s=document.createElement("div");s.classList="task-title";const l=document.createElement("div");l.classList="ellipses";const m=document.createElement("div");m.classList="due-date";const p=function(e,t){s.innerText=e,m.innerText=t,o.appendChild(a.cloneNode(!0)),o.appendChild(s.cloneNode(!0)),o.appendChild(l.cloneNode(!0)),o.appendChild(m.cloneNode(!0)),d.appendChild(o.cloneNode(!0)),o.innerHTML="",s.innerText="",m.innerText=""};p("This is a task that I'm going to perform today, in a timely fashion.","Today"),p("Task Title","Today")}()}(),function(){const e=document.querySelector("body"),t=document.createElement("footer"),n=document.createElement("p");n.innerText="Developed by Mark Pieciak";const d=document.createElement("a");d.href="https://github.com/mpieciak18/to-do-list";const i=document.createElement("img");i.id="github-logo",i.src="/dist/images/github-logo.png",d.appendChild(i),t.appendChild(n),t.appendChild(d),e.appendChild(t)}()})();