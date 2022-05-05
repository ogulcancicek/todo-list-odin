class Project {
    constructor (name){
        this.name = name;
        this.tasks = [];
    }

    get getProjectTasks(){
        return this.tasks;
    }

    appendNewTask(task){
        this.tasks.push(task);
    }

    removeTask(task){
        this.tasks.pop(task);
    }

}


export default Project;