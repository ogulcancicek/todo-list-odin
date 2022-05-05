class Task{
    constructor(title,dueDate){
        this.title = title;
        this.dueDate = dueDate;
    }

    get getTaskTitle(){
        return this.title;
    }

    get getDueDate(){
        return this.dueDate;
    }

    setTaskTitle(newTitle){
        this.title = newTitle;
    }

    setDueDate(newDueDate){
        this.dueDate = newDueDate;
    }
}

export default Task;