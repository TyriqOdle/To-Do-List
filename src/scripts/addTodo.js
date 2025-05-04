import { TodoItem } from "./todoItem.js"
import { renderNewTasks } from "./DOMstuff.js"

export default function addTodo(){
     //Show modal
    const newTodoModal = document.getElementById("addtoDoModal")
    newTodoModal.classList.remove("d-none")

    const addTodoForm = document.getElementById("addToDoForm")

    addTodoForm.addEventListener("submit", (e) =>{
        e.preventDefault();

        let data = new FormData(addTodoForm);

        let title = data.get("Title")
        let project = data.get("Project")
        let priority = data.get("Priority")
        let dueDate = data.get("Due Date")
        let notes = data.get("Notes")

        let newTask = new TodoItem(title,dueDate,priority,project,notes)

        console.log(title, project, dueDate, notes)
        console.log(data)

        addTodoForm.reset();

        newTodoModal.classList.add("d-none")

        renderNewTasks(newTask);

    })


}

