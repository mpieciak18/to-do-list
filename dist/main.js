(()=>{"use strict";!function(){const e=document.querySelector("body"),t=document.createElement("header"),n=document.createElement("img");n.id="logo",n.src="/dist/images/checkbox.png";const d=document.createElement("p");d.innerText="To-Do List",t.appendChild(n),t.appendChild(d),e.prepend(t)}(),function(){const e=document.querySelector("body"),t=document.createElement("footer"),n=document.createElement("p");n.innerText="Developed by Mark Pieciak";const d=document.createElement("a");d.href="https://github.com/mpieciak18/to-do-list";const c=document.createElement("img");c.id="github-logo",c.src="/dist/images/github-logo.png",d.appendChild(c),t.appendChild(n),t.appendChild(d),e.appendChild(t)}(),function(){const e=document.querySelector("main"),t=document.createElement("div");t.id="navbar";const n=document.createElement("div");n.id="top-nav";const d=document.createElement("div");d.id="all-tasks";const c=document.createElement("img");c.id="all-tasks-img",c.classList="icon",c.src="/dist/images/inbox.png";const i=document.createElement("p");i.innerText="All Tasks",d.appendChild(c),d.appendChild(i),n.appendChild(d);const o=document.createElement("div");o.id="due-today";const a=document.createElement("img");a.id="due-today-img",a.classList="icon",a.src="/dist/images/today.png";const s=document.createElement("p");s.innerText="Due Today",o.appendChild(a),o.appendChild(s),n.appendChild(o);const m=document.createElement("div");o.id="due-this-week";const l=document.createElement("img");l.id="due-this-week-img",l.classList="icon",l.src="/dist/images/week.png";const p=document.createElement("p");p.innerText="Due This Week",m.appendChild(l),m.appendChild(p),n.appendChild(m);const r=document.createElement("div");r.id="bottom-nav-title",r.innerText="Projects";const u=document.createElement("div");u.id="bottom-nav";const h=document.createElement("div");h.id="unassigned-tasks";const g=document.createElement("img");g.classList="icon",g.src="/dist/images/project.png";const E=document.createElement("p");E.innerText="Unassigned Tasks",h.appendChild(g),h.appendChild(E),u.appendChild(h),t.appendChild(n),t.appendChild(r),t.appendChild(u),e.prepend(t),console.log(t,e)}()})();