import Project from "./Project";
import Task from "./Task";
import Storage from "./Storage";


const displayController = ((doc) => {
    const CONTENT_COTNAINER = doc.querySelector('#content');

    const loadProjects = () => {
        const userPorjectsContainer = doc.querySelector('.user-projects');
        const projectAddBtn = doc.querySelector('.project-add-btn');

        Storage.getTodoList().getProjects().forEach ( (project) => {
            if (project.name !== 'Inbox' && project.name !== 'Today' && project.name !== 'This Week'){
                userPorjectsContainer.insertBefore(createNewProjectContainer(project.name),projectAddBtn);
            }

        });
       
    }

    const loadTasks = (projectName) => {
        const userPorjectsContainer = doc.querySelector('.todo-content-container');
        const taskAddBtn = doc.querySelector('.task-add-btn');

        clearCurrentProjectDisplay();
        Storage.getTodoList().getProject(projectName).getTasks().forEach( (task) => {
            userPorjectsContainer.insertBefore(createNewTaskContainer(task.getTaskTitle, task.getDueDate), taskAddBtn);
        })
    }

    const createNavBar = () => {
        const navbar = doc.createElement('nav');
        const navbarContent = doc.createElement('div');
        navbarContent.classList.add('container','nav-content');
        navbar.appendChild(navbarContent)
        return navbar;
    }

    const createThemeToggleBtn = () => {
        const inputContainer = doc.createElement('div');
        inputContainer.classList.add('checkbox-con');

        const input = doc.createElement('input');
        input.setAttribute('id','checkbox');
        input.setAttribute('type','checkbox');
        input.classList.add('checkbox');

        const label = doc.createElement("label");
        label.setAttribute('for','checkbox');
        label.classList.add('label');
        const icon1 = doc.createElement('i');
        icon1.classList.add('fas', 'fa-moon');
        const icon2 = doc.createElement('i');
        icon2.classList.add('fas', 'fa-sun');
        const ballDiv = doc.createElement('div');
        ballDiv.classList.add('ball');

        label.appendChild(icon1);
        label.appendChild(icon2);
        label.appendChild(ballDiv);

        inputContainer.appendChild(input);
        inputContainer.appendChild(label);
        
        return inputContainer;
    }

    const createNavBarLogo = () => {
        const logo = doc.createElement('h4');
        logo.classList.add('text-logo');
        logo.innerHTML = `<i class="fa-solid fa-list-check"></i> Todo App`;

        return logo;
    }

    const createSidebarToggleBtn = () => {
        const btn = doc.createElement('button');
        btn.classList.add('toggle-btn');
        btn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        btn.addEventListener('click', controlSidebar);
        return btn;
    }

    const createApplicationContainer = () => {
        const appContainer = doc.createElement('div');
        appContainer.classList.add('app-container');
        return appContainer;
    }

    const createSideBar = () => {
        const sidebar = doc.createElement('div');
        sidebar.classList.add('sidebar');
        
        // Append sidebar content into sidebar
        createSidebarContent(sidebar);

        return sidebar;
    }

    const createToDoContainer = () => {
        const todoContainer = doc.createElement('div');
        todoContainer.classList.add('todo-container');
        return todoContainer;
    }

    const createFooter = () => {
        const footer = doc.createElement('footer');
        footer.innerHTML = `<p class="footer-text">Copyright © 2022 ogulcancicek</p>`;

        return footer;
    }

    const createSidebarContent = (sidebar) => {
        // Create sidebar buttons
        const itemContainer = doc.createElement('div');
        itemContainer.classList.add('sidebar-item-container');
        const sidebarItems = ['Inbox', 'Today', 'This Week'];
        for (let item of sidebarItems){
            const sideItem = doc.createElement('button');
            sideItem.classList.add('sidebar-item');
            sideItem.textContent = item;
            itemContainer.appendChild(sideItem);
        }
        sidebar.append(itemContainer);

        // Create user project buttons
        const userPorjectsContainer = doc.createElement('div');
        userPorjectsContainer.classList.add('user-projects');

        const projectTitle = doc.createElement('h1');
        projectTitle.textContent = "Projects";
        projectTitle.classList.add('user-projects-title');

        const projectAddBtn = doc.createElement('button');
        projectAddBtn.classList.add('sidebar-item','project-add-btn');
        projectAddBtn.innerHTML = '<i class="fa-solid fa-plus"></i>  Add Project';

        userPorjectsContainer.appendChild(projectTitle);
        userPorjectsContainer.appendChild(projectAddBtn);
        userPorjectsContainer.append(createNewProjectPopup());
        sidebar.appendChild(userPorjectsContainer);
    }

    const createTodoAppContent = (currentListTitle, content = []) => {
        const contentContainer = doc.createElement('div');
        contentContainer.classList.add('todo-content-container');

        const listTitle = doc.createElement('h1');
        listTitle.classList.add('todo-list-title');
        listTitle.textContent = currentListTitle;

        const taskAddBtn = doc.createElement('button');
        taskAddBtn.classList.add('task-add-btn');
        taskAddBtn.addEventListener('click', createNewTaskPopup);
        taskAddBtn.innerHTML = '<i class="fa-solid fa-plus"></i>  Add Task';
        

        contentContainer.appendChild(listTitle);
        contentContainer.appendChild(taskAddBtn);

        return contentContainer;
    }

    const createNewProjectPopup = () => {
        const newProjectPopupContainer = doc.createElement('div');
        newProjectPopupContainer.classList.add('input-popup','project-popup');

        const newProjectInput = doc.createElement('input');
        newProjectInput.setAttribute('type', 'text');
        newProjectInput.setAttribute('placeholder', 'New Project');
        newProjectInput.setAttribute('maxlength', '16');

        newProjectPopupContainer.appendChild(newProjectInput);

        const inputButtons = doc.createElement('div');
        inputButtons.classList.add('input-buttons');

        const addBtn = doc.createElement('button');
        addBtn.setAttribute('id','add-btn');
        addBtn.textContent = 'Add';

        const cancelBtn = doc.createElement('button');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.setAttribute('id','cancel-btn');

        addBtn.addEventListener('click', createNewProject);
        cancelBtn.addEventListener('click', closeNewProjectPopup);

        inputButtons.appendChild(addBtn);
        inputButtons.appendChild(cancelBtn);

        newProjectPopupContainer.appendChild(inputButtons);
        return newProjectPopupContainer;
    }

    const createNewTaskPopup = () => {
        const newProjectPopupContainer = doc.createElement('div');
        newProjectPopupContainer.classList.add('input-popup','task-popup');

        const newProjectInput = doc.createElement('input');
        newProjectInput.setAttribute('type', 'text');
        newProjectInput.setAttribute('placeholder', 'New Task');
        newProjectInput.setAttribute('maxlength', '64');

        newProjectPopupContainer.appendChild(newProjectInput);

        const inputButtons = doc.createElement('div');
        inputButtons.classList.add('input-buttons');

        const addBtn = doc.createElement('button');
        addBtn.setAttribute('id','add-btn');
        addBtn.textContent = 'Add';

        const cancelBtn = doc.createElement('button');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.setAttribute('id','cancel-btn');

        addBtn.addEventListener('click', createNewTask);
        cancelBtn.addEventListener('click', closeNewTaskPopup);

        inputButtons.appendChild(addBtn);
        inputButtons.appendChild(cancelBtn);

        newProjectPopupContainer.appendChild(inputButtons);
        return newProjectPopupContainer;
    }

    const createNewProjectContainer = (projectName) => {
        const projectBtn = doc.createElement('button');
        projectBtn.classList.add('sidebar-item', 'project-item');
        projectBtn.textContent = projectName;
        projectBtn.addEventListener('click', changeCurrentProject);

        return projectBtn;
    }

    const createNewTaskContainer = (newTaskTitle, taskDueDate) => {
        const singleTaskContainer = doc.createElement('div');
        singleTaskContainer.classList.add('task-container');

        const taskTitleContainer = doc.createElement('div');
        taskTitleContainer.classList.add('task-title-container');
        
        const taskTitle = doc.createElement('p');
        taskTitle.classList.add('task-title');
        taskTitle.textContent = newTaskTitle;

        taskTitle.addEventListener('click', openTaskTitleInput);
        taskTitleContainer.appendChild(taskTitle);

        const taskTitleInput = doc.createElement('input');
        taskTitleInput.setAttribute('id','set-task-title');
        taskTitleInput.setAttribute('type','text');
        taskTitleInput.classList.add('task-title-input');

        taskTitleInput.addEventListener('keypress', setTaskTitle)
        taskTitleContainer.appendChild(taskTitleInput);

        const optionContainer = doc.createElement('div');
        optionContainer.classList.add('task-option-container');

        const dueDateContainer = doc.createElement('div');
        dueDateContainer.classList.add('due-date-container');
        const dueDate = doc.createElement('p');
        dueDate.classList.add('due-date');
        if (taskDueDate === ''){
            dueDate.textContent = "No date";
        }else{
            dueDate.textContent = taskDueDate;
        }
        
        dueDate.addEventListener('click',openDuedateInput,false);
        dueDateContainer.appendChild(dueDate);

        const dateInput = doc.createElement('input');
        dateInput.setAttribute('id','dateInput');
        dateInput.setAttribute('type','date');
        dateInput.classList.add('task-date-input');
        
        dateInput.addEventListener('change', setTaskDate, false);
        dueDateContainer.appendChild(dateInput);

        const removeBtn = doc.createElement('button');
        removeBtn.classList.add('task-remove-button');
        removeBtn.textContent = 'X';
        removeBtn.addEventListener('click',removeCurrentTask, false);

        optionContainer.appendChild(dueDateContainer);
        optionContainer.appendChild(removeBtn);

        singleTaskContainer.appendChild(taskTitleContainer);
        singleTaskContainer.appendChild(optionContainer);

        return singleTaskContainer;
    }

    // Creating content

    const createNewProject = () => {
        const userPorjectsContainer = doc.querySelector('.user-projects');
        const projectAddBtn = doc.querySelector('.project-add-btn');

        const inputContainer = doc.querySelector('.project-popup > input');
        const projectName = inputContainer.value;
        
        if (projectName === ''){
            alert("Project name can't be empty");
            return;
        }

        if (Storage.getTodoList().contains(projectName)){
            inputContainer.value = ""
            alert('Project names must be different!');
            return;
        }
        Storage.addProject(new Project(projectName));
        userPorjectsContainer.insertBefore(createNewProjectContainer(projectName), projectAddBtn);
        closeNewProjectPopup();
        return;
    }

    const createNewTask = () => {
        const projectName = doc.querySelector('.todo-list-title').textContent;
        const userPorjectsContainer = doc.querySelector('.todo-content-container');
        const taskAddBtn = doc.querySelector('.task-add-btn');

        const inputContainer = doc.querySelector('.task-popup > input');
        const taskTitle = inputContainer.value;
        
        if (taskTitle === ''){
            alert("Task title can't be empty");
            return;
        }

        if (Storage.getTodoList().getProject(projectName).contains(taskTitle)){
            alert('Task names must be different!');
            inputContainer.value = '';
            return;
        }

        Storage.addTask(projectName, new Task(taskTitle, ''))
        userPorjectsContainer.insertBefore(createNewTaskContainer(taskTitle), taskAddBtn);
        closeNewTaskPopup();
        return;
        
    }

    // Display Functions

    const displayNavBar = () => CONTENT_COTNAINER.appendChild(createNavBar());
    const displayThemeCheckbox = () => {
        const navbarContent = doc.querySelector('.nav-content');
        const themeToggleBtn = createThemeToggleBtn();

        themeToggleBtn.addEventListener('change', ()=>{
            doc.body.classList.toggle('dark');
            doc.querySelector('.toggle-btn').classList.toggle('dark');
            doc.querySelectorAll('.sidebar-item').forEach((sideItem) => {
                sideItem.classList.toggle('dark');
            });
            doc.querySelector('.task-add-btn').classList.toggle('dark');
            doc.querySelector('.sidebar').classList.toggle('dark');
        });
        
        navbarContent.appendChild(themeToggleBtn);
    }
    const displayNavLogo = () => {
        const navbarContent = doc.querySelector('.nav-content');
        navbarContent.appendChild(createNavBarLogo());
    }
    const displayToggleBtn = () => {
        const navbarContent = doc.querySelector('.nav-content');
        navbarContent.appendChild(createSidebarToggleBtn());
    }

    const displayAppLayout = () => {
        CONTENT_COTNAINER.appendChild(createApplicationContainer());
        displaySidebar();
        displayTodoApp();
    };

    const displaySidebar = () => {
        const appContainer = doc.querySelector('.app-container');
        appContainer.appendChild(createSideBar());
        setEventListenersSidebar();
    }

    const displayTodoApp = () => {
        const appContainer = doc.querySelector('.app-container');
        const todoContainer = createToDoContainer();
        displayTodoAppContent(todoContainer);
        appContainer.appendChild(todoContainer);
        setEventListenersTodoApp();
    }

    const displayTodoAppContent = (todoContainer) => {
        const todoContentContainer = createTodoAppContent("Inbox");
        todoContentContainer.appendChild(createNewTaskPopup());
        todoContainer.appendChild(todoContentContainer);
    }

    const setTaskDate = (e) => {
        const duedateInput = e.target;
        const newDueDate = duedateInput.value;

        const currentProjectName = doc.querySelector('.todo-list-title').textContent;
        const taskTitle = duedateInput.parentNode.parentNode.parentNode.querySelector('.task-title').textContent;
        
        duedateInput.classList.toggle('active'); // display: none
        const dueDate = e.target.parentNode.querySelector('.due-date');
        dueDate.classList.toggle('active'); // display: inline

        Storage.setTaskDate(currentProjectName, taskTitle, newDueDate);
        dueDate.textContent = newDueDate;
    }

    const setTaskTitle = (e) => {
        const currentProjectName = doc.querySelector('.todo-list-title').textContent;
        const newTaskTitle = e.target.value;
        if (e.key !== "Enter") return;
        if (e.target.value === ""){
            alert("Task title can't be empty");
            return
        }
        e.target.classList.toggle('active'); // display: none
        const taskTitle = e.target.parentNode.querySelector('.task-title');
        taskTitle.classList.toggle('active'); // display: inline
        Storage.renameTask(currentProjectName, taskTitle.textContent, newTaskTitle);
        taskTitle.textContent = newTaskTitle;
    }

    const displayFooter = () => CONTENT_COTNAINER.appendChild(createFooter());

    const controlSidebar = () => {
        const sidebar = doc.querySelector('.sidebar');
        sidebar.classList.toggle('active');
    }

    const openNewProjectPopup = () => {
        doc.querySelector('.project-add-btn').classList.add('active');
        doc.querySelector('.project-popup').classList.add('active');
    }

    const closeNewProjectPopup = () => {
        doc.querySelector('.project-add-btn').classList.remove('active');
        doc.querySelector('.project-popup').classList.remove('active');
        doc.querySelector('.project-popup > input').value = "";
    }

    const openNewTaskPopup = () => {
        doc.querySelector('.task-add-btn').classList.add('active');
        doc.querySelector('.task-popup').classList.add('active');
    }

    const closeNewTaskPopup = () => {
        doc.querySelector('.task-add-btn').classList.remove('active');
        doc.querySelector('.task-popup').classList.remove('active');
        doc.querySelector('.task-popup > input').value = "";
    }

    const openDuedateInput = (e) => {
        e.target.classList.toggle('active');
        e.target.parentNode.querySelector(".task-date-input").classList.toggle('active');
    }

    const openTaskTitleInput = (e) => {
        e.target.classList.toggle('active');
        e.target.parentNode.querySelector(".task-title-input").classList.toggle('active');
        e.target.parentNode.querySelector(".task-title-input").value = e.target.textContent;
    }

    const removeCurrentTask = (e) => {
        const todoContainer = doc.querySelector('.todo-content-container');
        const parentNode = e.target.parentNode.parentNode;

        todoContainer.removeChild(parentNode);
    }

    const changeCurrentProject = (e) => {
        const currentProjectName = doc.querySelector('.todo-list-title');
        const selectedProjectName = e.target.textContent;
        currentProjectName.textContent = selectedProjectName;
        loadTasks(selectedProjectName);

        if (window.outerWidth <= 650){
            controlSidebar();
        }
    }

    const clearCurrentProjectDisplay = () => {
        const userPorjectsContainer = doc.querySelector('.todo-content-container');
        const taskContainers = doc.querySelectorAll('.task-container');

        taskContainers.forEach( (taskContainer) => {
            userPorjectsContainer.removeChild(taskContainer);
        })
    }


    // Display whole website UI
    const InitializeWebsiteLayout = (currentProject = 'Inbox') => {
        displayNavBar();
        displayToggleBtn();
        displayNavLogo();
        displayThemeCheckbox();
        displayAppLayout();
        displayFooter();
        loadProjects();
        loadTasks(currentProject);
    }

    // Setting Event Listeners
    const setEventListenersSidebar = () => {
        const sidebarItems = doc.querySelector('.sidebar-item-container');
        sidebarItems.querySelectorAll('.sidebar-item').forEach( (sidebarItem) => {
            sidebarItem.addEventListener('click', changeCurrentProject);
        });

        // Must open object creating popout !!!!!
        doc.querySelector('.project-add-btn').addEventListener('click', openNewProjectPopup);
    }

    const setEventListenersTodoApp = () => {
        const taskAddBtn = doc.querySelector('.task-add-btn');
        taskAddBtn.addEventListener('click',openNewTaskPopup);
    }


    return {InitializeWebsiteLayout}
})(document);

export default displayController;