(()=>{"use strict";var e;(e=(e=>{const t=e.querySelector("#content"),n=()=>{const t=e.createElement("div");t.classList.add("input-popup","project-popup");const n=e.createElement("input");n.setAttribute("type","text"),n.setAttribute("placeholder","New Project"),n.setAttribute("maxlength","16"),t.appendChild(n);const a=e.createElement("div");a.classList.add("input-buttons");const c=e.createElement("button");c.setAttribute("id","add-btn"),c.textContent="Add";const i=e.createElement("button");return i.textContent="Cancel",i.setAttribute("id","cancel-btn"),c.addEventListener("click",s),i.addEventListener("click",p),a.appendChild(c),a.appendChild(i),t.appendChild(a),t},a=()=>{const t=e.createElement("div");t.classList.add("input-popup","task-popup");const n=e.createElement("input");n.setAttribute("type","text"),n.setAttribute("placeholder","New Task"),n.setAttribute("maxlength","128"),t.appendChild(n);const a=e.createElement("div");a.classList.add("input-buttons");const s=e.createElement("button");s.setAttribute("id","add-btn"),s.textContent="Add";const i=e.createElement("button");return i.textContent="Cancel",i.setAttribute("id","cancel-btn"),s.addEventListener("click",c),i.addEventListener("click",b),a.appendChild(s),a.appendChild(i),t.appendChild(a),t},s=()=>{const t=e.querySelector(".user-projects"),n=e.querySelector(".project-add-btn"),a=e.querySelector(".project-popup > input").value;return""===a?(alert("Project name can't be empty"),!1):(new class{constructor(e){this.name=e,this.tasks=[]}get getProjectTasks(){return this.tasks}appendNewTask(e){this.tasks.push(e)}removeTask(e){this.tasks.pop(e)}}(a),t.insertBefore((t=>{const n=e.createElement("button");return n.classList.add("sidebar-item","project-item"),n.textContent=t,n})(a),n),p(),!0)},c=()=>{const t=e.querySelector(".todo-content-container"),n=e.querySelector(".task-add-btn"),a=e.querySelector(".task-popup > input").value;return""===a?(alert("Task title can't be empty"),!1):(new class{constructor(e,t){this.title=e,this.dueDate=t}get getTaskTitle(){return this.title}get getDueDate(){return this.dueDate}setTaskTitle(e){this.title=e}setDueDate(e){this.dueDate=e}}(a,""),t.insertBefore((t=>{const n=e.createElement("div");n.classList.add("task-container");const a=e.createElement("p");a.classList.add("task-title"),a.textContent=t;const s=e.createElement("div");s.classList.add("task-option-container");const c=e.createElement("button");c.classList.add("task-setting-button"),c.innerHTML='<i class="fa-solid fa-gear"></i>',c.addEventListener("click",h);const i=e.createElement("button");return i.classList.add("task-remove-button"),i.textContent="X",i.addEventListener("click",L,!1),s.appendChild(c),s.appendChild(i),n.appendChild(a),n.appendChild(s),n})(a),n),b(),!0)},i=()=>{e.querySelector(".app-container").appendChild((()=>{const t=e.createElement("div");return t.classList.add("sidebar","active"),(t=>{const a=e.createElement("div");a.classList.add("sidebar-item-container");const s=["Inbox","Today","This Week"];for(let t of s){const n=e.createElement("button");n.classList.add("sidebar-item"),n.textContent=t,a.appendChild(n)}t.append(a);const c=e.createElement("div");c.classList.add("user-projects");const i=e.createElement("h1");i.textContent="Projects",i.classList.add("user-projects-title");const d=e.createElement("button");d.classList.add("sidebar-item","project-add-btn"),d.innerHTML='<i class="fa-solid fa-plus"></i>  Add Project',c.appendChild(i),c.appendChild(d),c.append(n()),t.appendChild(c)})(t),t})()),m()},d=()=>{const t=e.querySelector(".app-container"),n=(()=>{const t=e.createElement("div");return t.classList.add("todo-container"),t})();r(n),t.appendChild(n),v()},r=t=>{const n=((t,n=[])=>{const s=e.createElement("div");s.classList.add("todo-content-container");const c=e.createElement("h1");c.classList.add("todo-list-title"),c.textContent=t;const i=e.createElement("button");return i.classList.add("task-add-btn"),i.addEventListener("click",a),i.innerHTML='<i class="fa-solid fa-plus"></i>  Add Task',s.appendChild(c),s.appendChild(i),s})("Inbox");n.appendChild(a()),t.appendChild(n)},o=()=>{e.querySelector(".sidebar").classList.toggle("active")},l=()=>{e.querySelector(".project-add-btn").classList.add("active"),e.querySelector(".project-popup").classList.add("active")},p=()=>{e.querySelector(".project-add-btn").classList.remove("active"),e.querySelector(".project-popup").classList.remove("active"),e.querySelector(".project-popup > input").value=""},u=()=>{e.querySelector(".task-add-btn").classList.add("active"),e.querySelector(".task-popup").classList.add("active")},b=()=>{e.querySelector(".task-add-btn").classList.remove("active"),e.querySelector(".task-popup").classList.remove("active"),e.querySelector(".task-popup > input").value=""},h=()=>{console.log("AA")},L=t=>{const n=e.querySelector(".todo-content-container"),a=t.target.parentNode.parentNode;n.removeChild(a)},m=()=>{e.querySelector(".sidebar-item-container").querySelectorAll(".sidebar-item").forEach((e=>{e.addEventListener("click",(()=>{console.log("aa")}))})),e.querySelector(".project-add-btn").addEventListener("click",l)},v=()=>{e.querySelector(".task-add-btn").addEventListener("click",u)};return{InitializeWebsiteLayout:()=>{t.appendChild((()=>{const t=e.createElement("nav"),n=e.createElement("div");return n.classList.add("container","nav-content"),t.appendChild(n),t})()),e.querySelector(".nav-content").appendChild((()=>{const t=e.createElement("button");return t.classList.add("toggle-btn"),t.innerHTML='<i class="fa-solid fa-bars"></i>',t.addEventListener("click",o),t})()),e.querySelector(".nav-content").appendChild((()=>{const t=e.createElement("h4");return t.classList.add("text-logo"),t.innerHTML='<i class="fa-solid fa-list-check"></i> Todo App',t})()),(()=>{const t=e.querySelector(".nav-content"),n=(()=>{const t=e.createElement("div");t.classList.add("checkbox-con");const n=e.createElement("input");n.setAttribute("id","checkbox"),n.setAttribute("type","checkbox"),n.classList.add("checkbox");const a=e.createElement("label");a.setAttribute("for","checkbox"),a.classList.add("label");const s=e.createElement("i");s.classList.add("fas","fa-moon");const c=e.createElement("i");c.classList.add("fas","fa-sun");const i=e.createElement("div");return i.classList.add("ball"),a.appendChild(s),a.appendChild(c),a.appendChild(i),t.appendChild(n),t.appendChild(a),t})();n.addEventListener("change",(()=>{e.body.classList.toggle("dark"),e.querySelector(".toggle-btn").classList.toggle("dark"),e.querySelectorAll(".sidebar-item").forEach((e=>{e.classList.toggle("dark")})),e.querySelector(".task-add-btn").classList.toggle("dark")})),t.appendChild(n)})(),t.appendChild((()=>{const t=e.createElement("div");return t.classList.add("app-container"),t})()),i(),d(),t.appendChild((()=>{const t=e.createElement("footer");return t.innerHTML='<p class="footer-text">Copyright © 2022 ogulcancicek</p>',t})())}}})(document),{initializeWebsite:()=>{e.InitializeWebsiteLayout()}}).initializeWebsite()})();