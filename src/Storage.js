import Project from "./Project";
import Task from "./Task";
import TodoList from "./TodoList";

class Storage{
    static saveTodoList(data){
        localStorage.setItem('todolist', JSON.stringify(data));
    }

    static getTodoList(){
        let todoList;
        try{
            todoList = Object.assign(new TodoList(), JSON.parse(localStorage.getItem('todolist')));
        }catch (err){
            todoList = new TodoList();
        }
        
        
        todoList.setProjects(todoList.getProjects().map((project) => Object.assign(new Project(), project)))
        todoList.getProjects().forEach( (project) => project.setTasks(
            project.getTasks().map( (task) => Object.assign(new Task(), task)))
        )
    
        return todoList;
    }

    static addProject(project){
        const todolist = Storage.getTodoList();
        todolist.addProject(project);
        Storage.saveTodoList(todolist);
    }

    static deleteProject(projectName){
        const todoList = Storage.getTodoList();
        todoList.deleteProject(projectName);
        Storage.saveTodoList(todoList);
    }

    static addTask(projectName, task){
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).addTask(task);
        Storage.saveTodoList(todoList);
    }

    static deleteTask(projectName, task){
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).deleteTask(task);
        Storage.saveTodoList(todoList);
    }

    static renameTask(projectName, taskName, newTaskName){
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).getTask(taskName).setTaskTitle(newTaskName);
        Storage.saveTodoList(todoList);
    }

    static setTaskDate(projectName, taskName, newDueDate){
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).getTask(taskName).setDueDate(newDueDate);
        Storage.saveTodoList(todoList);
    }
}

export default Storage;