const displayController = ((doc) => {
    const CONTENT_COTNAINER = doc.querySelector('#content');
    
    


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


    const displayNavBar = () => CONTENT_COTNAINER.appendChild(createNavBar());
    const displayThemeCheckbox = () => {
        const navbarContent = doc.querySelector('.nav-content');
        const themeToggleBtn = createThemeToggleBtn();

        themeToggleBtn.addEventListener('change', ()=>{
            doc.body.classList.toggle('dark');
            doc.querySelector('toggle-btn').classList.toggle('dark');
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

    const displayAppContainer = () => CONTENT_COTNAINER.appendChild(createApplicationContainer());

    const displaySidebar = () => {
        displayAppContainer();
        const appContainer = doc.querySelector('.app-container');
        appContainer.appendChild(createSideBar());
        displayTodoApp();
    }

    const displayTodoApp = () => {
        const appContainer = doc.querySelector('.app-container');
        appContainer.appendChild(createToDoContainer());
    }

    const displayFooter = () => CONTENT_COTNAINER.appendChild(createFooter());

    const controlSidebar = () => {
        const sidebar = doc.querySelector('.sidebar');
        sidebar.classList.toggle('active');
    }

    



    return {displayNavBar, displayThemeCheckbox, displayNavLogo, displayToggleBtn, displaySidebar, displayFooter}
})(document);

export default displayController;