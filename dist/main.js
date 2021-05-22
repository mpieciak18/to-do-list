(()=>{"use strict";let e=[],t="0";const n=function(t){const n=t.target.parentNode;for(let t=0;t<e.length;t++)if(n==e[t]){e.splice(t,1);break}n.remove()},i=function(i,s){const d=document.getElementById("task-list"),o=document.createElement("div");o.classList="task",o.classList.add(t);const p=document.createElement("div");p.classList="x-button-task",p.innerText="✕",p.addEventListener("click",n),o.appendChild(p);const a=document.createElement("div");a.classList="task-title",a.innerText=i,o.appendChild(a);const c=document.createElement("div");c.classList="ellipses",o.appendChild(c);const l=document.createElement("div");l.classList="due-date",l.innerText=s,o.appendChild(l),d.appendChild(o),e.push(o)},s=function(n){if("x-button-project"==n.target.classList[0])return;t="project"==n.target.classList[0]?n.target.id:n.target.parentNode.id;const i=document.getElementById("task-list");i.innerHTML="";for(let n=0;n<e.length;n++){let s=e[n];s.classList[1]==t&&i.appendChild(s)}},d=function(e){t="0";let n="";n="DIV"==e.target.tagName?e.target.id:e.target.parentNode.id,o(n)},o=function(t){const n=document.getElementById("task-list");if(n.innerHTML="","all-tasks"==t)for(let t=0;t<e.length;t++){const i=e[t];n.appendChild(i)}else if("due-today"==t){const t=new Date;let i=t.getMonth()+1;i<10&&(i=`0${i}`);const s=`${i}/${t.getDate()}/${t.getFullYear()}`;for(let t=0;t<e.length;t++){const i=e[t];s==i.lastChild.innerText&&n.appendChild(i)}}else if("due-this-week"==t){const t=[...Array(7)].map(((e,t)=>{const n=new Date;n.setDate(n.getDate()+t);let i=n.getMonth()+1;return i<10&&(i=`0${i}`),`${i}/${n.getDate()}/${n.getFullYear()}`}));for(let i=0;i<e.length;i++){const s=e[i],d=s.lastChild.innerText;1==t.includes(d)&&n.appendChild(s)}}},p=function(e){e.target.parentNode.remove()};let a=0;const c=function(e){const t=document.getElementById("bottom-nav"),n=document.createElement("div");n.id=a,n.classList="project";const i=document.createElement("img");i.classList="icon",i.src="/dist/images/project.png";const d=document.createElement("p");if(d.innerText=e,n.appendChild(i),n.appendChild(d),0!=a){const e=document.createElement("div");e.classList="x-button-project",e.innerText="✕",e.addEventListener("click",p),n.appendChild(e)}n.addEventListener("click",s),t.appendChild(n).cloneNode(!0),a+=1},l=new class{constructor(){return this.pWrap=document.createElement("div"),this.pWrap.id="pop-up-task",document.body.appendChild(this.pWrap),this.pBox=document.createElement("div"),this.pBox.id="pop-box-task",this.pWrap.appendChild(this.pBox),this.pTitle=document.createElement("h1"),this.pTitle.id="pop-title-task",this.pTitle.innerHTML="Add a New Task",this.pBox.appendChild(this.pTitle),this.pForm=document.createElement("form"),this.pForm.action="",this.pForm.method="",this.pForm.setAttribute("autocomplete","off"),this.pLabelOne=document.createElement("LABEL"),this.pLabelOne.classList="pop-labels",this.pLabelOne.htmlFor="input-one",this.pLabelOne.innerHTML="Task Description:",this.pForm.appendChild(this.pLabelOne),this.pInputOne=document.createElement("INPUT"),this.pInputOne.classList="pop-inputs",this.pInputOne.id="input-one-task",this.pInputOne.name="input-one",this.pInputOne.placeholder="Enter the task's description.",this.pInputOne.setAttribute("type","text"),this.pInputOne.setAttribute("minlength","1"),this.pInputOne.setAttribute("required","true"),this.pForm.appendChild(this.pInputOne),this.pLabelTwo=document.createElement("LABEL"),this.pLabelTwo.classList="pop-labels",this.pLabelTwo.htmlFor="input-two",this.pLabelTwo.innerHTML="Due Date:",this.pForm.appendChild(this.pLabelTwo),this.pInputTwo=document.createElement("INPUT"),this.pInputTwo.classList="pop-inputs",this.pInputTwo.id="input-two-task",this.pInputTwo.name="input-two",this.pInputTwo.placeholder="Enter the task's due date",this.pInputTwo.setAttribute("type","date"),this.pInputTwo.setAttribute("required","true"),this.pForm.appendChild(this.pInputTwo),this.pSubmit=document.createElement("BUTTON"),this.pSubmit.id="button-task",this.pSubmit.innerText="Add New Task",this.pSubmit.setAttribute("type","button"),this.pForm.appendChild(this.pSubmit),this.pBox.appendChild(this.pForm),this.pClose=document.createElement("div"),this.pClose.id="pop-close-task",this.pClose.innerHTML="✕",this.pClose.onclick=this.close,this.pBox.appendChild(this.pClose),this}open=()=>{this.pWrap.classList.add("open")};close=()=>{this.pWrap.classList.remove("open")}},r=function(e){let t=e.target.parentNode[0].value,n=e.target.parentNode[1].value.split("-");n=`${n[1]}/${n[2]}/${n[0]}`,i(t,n),l.close()};!function(){const e=document.querySelector("body"),t=document.createElement("header"),n=document.createElement("img");n.id="logo",n.src="/dist/images/checkbox.png";const i=document.createElement("p");i.innerText="To-Do List",t.appendChild(n),t.appendChild(i),e.prepend(t)}(),function(){const e=document.querySelector("body"),t=document.createElement("main");e.append(t),function(){const e=document.querySelector("main"),t=document.createElement("div");t.id="navbar";const n=document.createElement("div");n.id="top-nav";const i=document.createElement("div");i.id="all-tasks";const s=document.createElement("img");s.id="all-tasks-img",s.classList="icon",s.src="/dist/images/inbox.png";const o=document.createElement("p");o.innerText="All Tasks",i.appendChild(s),i.appendChild(o),i.addEventListener("click",d),n.appendChild(i);const p=document.createElement("div");p.id="due-today";const a=document.createElement("img");a.id="due-today-img",a.classList="icon",a.src="/dist/images/today.png";const l=document.createElement("p");l.innerText="Due Today",p.appendChild(a),p.appendChild(l),p.addEventListener("click",d),n.appendChild(p);const r=document.createElement("div");r.id="due-this-week";const m=document.createElement("img");m.id="due-this-week-img",m.classList="icon",m.src="/dist/images/week.png";const u=document.createElement("p");u.innerText="Due This Week",r.appendChild(m),r.appendChild(u),r.addEventListener("click",d),n.appendChild(r);const h=document.createElement("div");h.id="bottom-nav-title",h.innerText="Projects";const E=document.createElement("div");E.id="bottom-nav";const g=document.createElement("div");g.id="new-project-container";const T=document.createElement("div");T.id="new-project",T.innerText="➕ New Project",g.appendChild(T),t.appendChild(n),t.appendChild(h),t.appendChild(E),t.appendChild(g),e.prepend(t),c("Unassigned Tasks")}(),function(){const e=document.querySelector("main"),t=document.createElement("div");t.id="content";const n=document.createElement("div");n.id="content-title",n.innerText="All Tasks";const i=document.createElement("div");i.id="task-list";const s=document.createElement("div");s.id="new-task-container";const d=document.createElement("div");d.id="new-task",d.innerText="➕ New Task",s.appendChild(d),s.addEventListener("click",l.open),l.pSubmit.addEventListener("click",r),t.appendChild(n),t.appendChild(i),t.appendChild(s),e.appendChild(t)}()}(),function(){const e=document.querySelector("body"),t=document.createElement("footer"),n=document.createElement("p");n.innerText="Developed by Mark Pieciak";const i=document.createElement("a");i.href="https://github.com/mpieciak18/to-do-list";const s=document.createElement("img");s.id="github-logo",s.src="/dist/images/github-logo.png",i.appendChild(s),t.appendChild(n),t.appendChild(i),e.appendChild(t)}(),i("This is a task that I'm going to perform today, in a timely fashion.","11/18/1992"),i("Task Title","05/22/2021"),c("test number one"),c("test number two")})();