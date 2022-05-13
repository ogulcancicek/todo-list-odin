class Project {
    constructor (name){
        this.name = name;
        this.tasks = [];
    }

    getTasks(){
        return this.tasks;
    }

    setTasks(tasks){
        this.tasks = tasks;
    }

    getTask(taskName){
        return this.tasks.find((task) => task.getTaskTitle === taskName);
    }

    addTask(newTask){
        if (this.tasks.find( (task) => task.getTaskTitle === newTask.name)) return;
        this.tasks.push(newTask);
    }

    deleteTask(task){
        this.tasks.pop(task);
    }

    contains (taskName){
        return this.tasks.find( (task) => task.getTaskTitle === taskName);
    }

}


export default Project;