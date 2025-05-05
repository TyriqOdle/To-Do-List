export class TodoItem{
    constructor(title, dueDate, priority,project, notes){
        this.id = crypto.randomUUID();
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority
        this.project = project
        this.notes = notes
        this.status = "Not Completed"
    }

    updateStatus(){
        this.status = !this.status
    }
}