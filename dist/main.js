(()=>{"use strict";let e=[],t="0";const n=function(t){const n=t.target.parentNode;for(let t=0;t<e.length;t++)if(n==e[t]){e.splice(t,1);break}n.remove()},i=function(i,s){const p=document.getElementById("task-list"),o=document.createElement("div");o.classList="task",o.classList.add(t);const d=document.createElement("div");d.classList="x-button-task",d.innerText="✕",d.addEventListener("click",n),o.appendChild(d);const c=document.createElement("div");c.classList="task-title",c.innerText=i,o.appendChild(c);const a=document.createElement("div");a.classList="ellipses",o.appendChild(a);const l=document.createElement("div");l.classList="due-date",l.innerText=s,o.appendChild(l),p.appendChild(o),e.push(o)},s=function(n){if("x-button-project"==n.target.classList[0])return;t="project"==n.target.classList[0]?n.target.id:n.target.parentNode.id,d(t);const i=document.getElementById("task-list");i.innerHTML="";for(let n=0;n<e.length;n++){let s=e[n];s.classList[1]==t&&i.appendChild(s)}},p=function(e){t="0";let n="";n="DIV"==e.target.tagName?e.target.id:e.target.parentNode.id,o(n),d(n)},o=function(t){const n=document.getElementById("task-list");if(n.innerHTML="","all-tasks"==t)for(let t=0;t<e.length;t++){const i=e[t];n.appendChild(i)}else if("due-today"==t){const t=new Date;let i=t.getMonth()+1;i<10&&(i=`0${i}`);const s=`${i}/${t.getDate()}/${t.getFullYear()}`;for(let t=0;t<e.length;t++){const i=e[t];s==i.lastChild.innerText&&n.appendChild(i)}}else if("due-this-week"==t){const t=[...Array(7)].map(((e,t)=>{const n=new Date;n.setDate(n.getDate()+t);let i=n.getMonth()+1;return i<10&&(i=`0${i}`),`${i}/${n.getDate()}/${n.getFullYear()}`}));for(let i=0;i<e.length;i++){const s=e[i],p=s.lastChild.innerText;1==t.includes(p)&&n.appendChild(s)}}},d=function(e){const t=document.getElementById(e);document.getElementById("content-title").innerText=t.childNodes[1].innerText},c=function(t){const n=t.target.parentNode,i=n.id;let s=e.filter((function(e,t,n){if(e.classList[1]==i)return e})),p=e.filter((function(e,t,n){if(e.classList[1]!=i)return e}));e=p;for(let e=0;e<s.length;e++)s[e].remove();n.remove()};let a=[],l=0;const r=function(e){const t=document.getElementById("bottom-nav"),n=document.createElement("div");n.id=l,n.classList="project";const i=document.createElement("img");i.classList="icon",i.src="/dist/images/project.png";const p=document.createElement("p");if(p.innerText=e,n.appendChild(i),n.appendChild(p),0!=l){const e=document.createElement("div");e.classList="x-button-project",e.innerText="✕",e.addEventListener("click",c),n.appendChild(e)}n.addEventListener("click",s),t.appendChild(n).cloneNode(!0),a.push(n),l+=1},h=new class{constructor(){return this.pWrap=document.createElement("div"),this.pWrap.id="pop-up-task",document.body.appendChild(this.pWrap),this.pBox=document.createElement("div"),this.pBox.id="pop-box-task",this.pWrap.appendChild(this.pBox),this.pTitle=document.createElement("h1"),this.pTitle.id="pop-title-task",this.pTitle.innerHTML="Add a New Task",this.pBox.appendChild(this.pTitle),this.pForm=document.createElement("form"),this.pForm.action="",this.pForm.method="",this.pForm.setAttribute("autocomplete","off"),this.pLabelOne=document.createElement("LABEL"),this.pLabelOne.classList="pop-labels",this.pLabelOne.htmlFor="input-one",this.pLabelOne.innerHTML="Task Description:",this.pForm.appendChild(this.pLabelOne),this.pInputOne=document.createElement("INPUT"),this.pInputOne.classList="pop-inputs",this.pInputOne.id="input-one-task",this.pInputOne.name="input-one",this.pInputOne.placeholder="Enter the task's description.",this.pInputOne.setAttribute("type","text"),this.pInputOne.setAttribute("minlength","1"),this.pInputOne.setAttribute("required","true"),this.pForm.appendChild(this.pInputOne),this.pLabelTwo=document.createElement("LABEL"),this.pLabelTwo.classList="pop-labels",this.pLabelTwo.htmlFor="input-two",this.pLabelTwo.innerHTML="Due Date:",this.pForm.appendChild(this.pLabelTwo),this.pInputTwo=document.createElement("INPUT"),this.pInputTwo.classList="pop-inputs",this.pInputTwo.id="input-two-task",this.pInputTwo.name="input-two",this.pInputTwo.placeholder="Enter the task's due date",this.pInputTwo.setAttribute("type","date"),this.pInputTwo.setAttribute("required","true"),this.pForm.appendChild(this.pInputTwo),this.pSubmit=document.createElement("BUTTON"),this.pSubmit.id="button-task",this.pSubmit.innerText="Add New Task",this.pSubmit.setAttribute("type","button"),this.pForm.appendChild(this.pSubmit),this.pBox.appendChild(this.pForm),this.pClose=document.createElement("div"),this.pClose.id="pop-close-task",this.pClose.innerHTML="✕",this.pClose.onclick=this.close,this.pBox.appendChild(this.pClose),this}open=()=>{this.pWrap.classList.add("open")};close=()=>{this.pWrap.classList.remove("open")}},m=new class{constructor(){return this.pWrap=document.createElement("div"),this.pWrap.id="pop-up-proj",document.body.appendChild(this.pWrap),this.pBox=document.createElement("div"),this.pBox.id="pop-box-proj",this.pWrap.appendChild(this.pBox),this.pTitle=document.createElement("h1"),this.pTitle.id="pop-title-proj",this.pTitle.innerHTML="Add a New Project",this.pBox.appendChild(this.pTitle),this.pForm=document.createElement("form"),this.pForm.action="",this.pForm.method="",this.pForm.setAttribute("autocomplete","off"),this.pLabelOne=document.createElement("LABEL"),this.pLabelOne.classList="pop-labels",this.pLabelOne.htmlFor="input-one",this.pLabelOne.innerHTML="Project Description:",this.pForm.appendChild(this.pLabelOne),this.pInputOne=document.createElement("INPUT"),this.pInputOne.classList="pop-inputs",this.pInputOne.id="input-one-proj",this.pInputOne.name="input-one",this.pInputOne.placeholder="Enter the project's description.",this.pInputOne.setAttribute("type","text"),this.pInputOne.setAttribute("minlength","1"),this.pInputOne.setAttribute("required","true"),this.pForm.appendChild(this.pInputOne),this.pSubmit=document.createElement("BUTTON"),this.pSubmit.id="button-proj",this.pSubmit.innerText="Add New Project",this.pSubmit.setAttribute("type","button"),this.pForm.appendChild(this.pSubmit),this.pBox.appendChild(this.pForm),this.pClose=document.createElement("div"),this.pClose.id="pop-close-proj",this.pClose.innerHTML="✕",this.pClose.onclick=this.close,this.pBox.appendChild(this.pClose),this}open=()=>{this.pWrap.classList.add("open")};close=()=>{this.pWrap.classList.remove("open")}},u=function(e){let t=e.target.parentNode[0].value;r(t),m.close()},E=function(e){let t=e.target.parentNode[0].value,n=e.target.parentNode[1].value.split("-");n=`${n[1]}/${n[2]}/${n[0]}`,i(t,n),h.close()};!function(){const e=document.querySelector("body"),t=document.createElement("header"),n=document.createElement("img");n.id="logo",n.src="/dist/images/checkbox.png";const i=document.createElement("p");i.innerText="To-Do List",t.appendChild(n),t.appendChild(i),e.prepend(t)}(),function(){const e=document.querySelector("body"),t=document.createElement("main");e.append(t),function(){const e=document.querySelector("main"),t=document.createElement("div");t.id="navbar";const n=document.createElement("div");n.id="top-nav";const i=document.createElement("div");i.id="all-tasks";const s=document.createElement("img");s.id="all-tasks-img",s.classList="icon",s.src="/dist/images/inbox.png";const o=document.createElement("p");o.innerText="All Tasks",i.appendChild(s),i.appendChild(o),i.addEventListener("click",p),n.appendChild(i);const d=document.createElement("div");d.id="due-today";const c=document.createElement("img");c.id="due-today-img",c.classList="icon",c.src="/dist/images/today.png";const a=document.createElement("p");a.innerText="Due Today",d.appendChild(c),d.appendChild(a),d.addEventListener("click",p),n.appendChild(d);const l=document.createElement("div");l.id="due-this-week";const h=document.createElement("img");h.id="due-this-week-img",h.classList="icon",h.src="/dist/images/week.png";const E=document.createElement("p");E.innerText="Due This Week",l.appendChild(h),l.appendChild(E),l.addEventListener("click",p),n.appendChild(l);const T=document.createElement("div");T.id="bottom-nav-title",T.innerText="Projects";const b=document.createElement("div");b.id="bottom-nav";const C=document.createElement("div");C.id="new-project-container";const L=document.createElement("div");L.id="new-project",L.innerText="➕ New Project",C.appendChild(L),C.addEventListener("click",m.open),m.pSubmit.addEventListener("click",u),t.appendChild(n),t.appendChild(T),t.appendChild(b),t.appendChild(C),e.prepend(t),r("Unassigned Tasks")}(),function(){const e=document.querySelector("main"),t=document.createElement("div");t.id="content";const n=document.createElement("div");n.id="content-title",n.innerText="All Tasks";const i=document.createElement("div");i.id="task-list";const s=document.createElement("div");s.id="new-task-container";const p=document.createElement("div");p.id="new-task",p.innerText="➕ New Task",s.appendChild(p),s.addEventListener("click",h.open),h.pSubmit.addEventListener("click",E),t.appendChild(n),t.appendChild(i),t.appendChild(s),e.appendChild(t)}()}(),function(){const e=document.querySelector("body"),t=document.createElement("footer"),n=document.createElement("p");n.innerText="Developed by Mark Pieciak";const i=document.createElement("a");i.href="https://github.com/mpieciak18/to-do-list";const s=document.createElement("img");s.id="github-logo",s.src="/dist/images/github-logo.png",i.appendChild(s),t.appendChild(n),t.appendChild(i),e.appendChild(t)}(),i("This is a task that I'm going to perform today, in a timely fashion.","11/18/1992"),i("Task Title","05/22/2021"),r("test number one"),r("test number two")})();