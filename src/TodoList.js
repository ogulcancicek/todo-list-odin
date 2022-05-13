import Project from "./Project";
import Task from "./Task";

class TodoList {
    constructor (){
        this.projects = [];
        this.projects.push(new Project('Inbox'));
        this.projects.push(new Project('Today'));
        this.projects.push(new Project('This Week'));        
    }

    setProjects(projects){
        this.projects = projects;
    }

    getProjects(){
        return this.projects;
    }

    addProject(newProject){
        if (this.projects.find( (project) => project.name === newProject.name))
            return
        this.projects.push(newProject);
    }

    deleteProject (projectName){
        const projectToDelete = this.projects.find( (project) => project.name === projectName);

        this.projects.splice(this.projects.splice(this.projects.indexOf(projectToDelete), 1));
    }

    contains (projectName) {
        return this.projects.find( (project) => project.name === projectName);
    }

    getProject(projectName){
        return this.projects.find( (project) => project.name === projectName);
    }

}

export default TodoList;