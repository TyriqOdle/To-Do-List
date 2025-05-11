import { TodoItem } from "./todoItem.js"
import { renderTasks } from "./DOMstuff.js"
import {storeTodo,storeData} from "./storeData.js"

const newTodoModal = document.getElementById("addtoDoModal")
const closeTbn = document.getElementById("addTaskClose");


//Event Listener for the Add Todo Modal
const addTodoForm = document.getElementById("addToDoForm")

    addTodoForm.addEventListener("submit", (e) =>{
        e.preventDefault();

        let data = new FormData(addTodoForm);

        let title = data.get("Title")
        let project = data.get("Project")
        if(project == "1" ){
            project = "Home"
        }
        let priority = data.get("Priority")
        let dueDate = data.get("Due Date")
        let notes = data.get("Notes")

        let newTask = new TodoItem(title,dueDate,priority,project,notes)

        addTodoForm.reset();

        renderTasks(newTask);
        storeTodo(newTask);
        storeData();
        newTodoModal.classList.add("d-none")
    })

    closeTbn.addEventListener("click",() =>{
        newTodoModal.classList.add("d-none")
    })



export default function addTodo(){
     //Show modal
    newTodoModal.classList.remove("d-none")
    
}



