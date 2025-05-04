import { TodoItem } from "./todoItem.js"
import { renderNewTasks } from "./DOMstuff.js"
const newTodoModal = document.getElementById("addtoDoModal")
const closeTbn = document.getElementById("addTaskClose");

//Event Listener for the Add Todo Modal
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
        newTodoModal.classList.add("d-none")
    })

    closeTbn.addEventListener("click",() =>{
        newTodoModal.classList.add("d-none")
    })



export default function addTodo(){
     //Show modal
    
    newTodoModal.classList.remove("d-none")
}

