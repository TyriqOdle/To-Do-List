const editTodoModal = document.getElementById("editTodoModal")
const closeBtn = document.getElementById("editTaskClose");
const editForm = document.getElementById("editForm")


const title = document.getElementById("TaskTitleedit");
const project = document.getElementById("TaskProjecedit");
const date = document.getElementById("dueDateedit");
const priority = document.getElementById("taskPriorityedit");
const notes = document.getElementById("notesedit");
let gtaskID =""
import { renderTasks } from "./DOMstuff.js";
import { todoList } from "./storeData.js";
import {clearTasks} from "./clearTaskList.js";
import {renderAllTasks} from "./DOMstuff.js";
import {storeData} from "./storeData.js";


export function editTodo(taskID){
    editTodoModal.classList.remove("d-none");
    let task = getTaskData(taskID);
    gtaskID = taskID;

    title.value = task.title;
    project.value = task.project;
    date.value = task.dueDate;
    priority.value = task.priority;
    notes.value = task.notes;

}



editForm.addEventListener("submit", (e) =>{
        e.preventDefault();

        let data = new FormData(editForm);

        let title = data.get("Title")
        let project = data.get("Project")
        if(project == "1" || project == null ){
            project = "Home"
        }
        let priority = data.get("Priority")
        let dueDate = data.get("Due Date")
        let notes = data.get("Notes")


        saveEdit(title,project, priority, dueDate, notes)
        editForm.reset();

        editTodoModal.classList.add("d-none")
    })

closeBtn.addEventListener("click",() =>{
    editTodoModal.classList.add("d-none");
});

function getTaskData(taskID){
    let taskData = todoList.find((task) =>{
        if(task.id == taskID){
            return task;
        }   
    })

    return taskData;
}

function saveEdit(title,project, priority, dueDate, notes){
    let updatedTask = todoList.find((task)=>{
        if(task.id == gtaskID){
            task.title = title;
            task.project = project;
            task.priority = priority;
            task.dueDate = dueDate;
            task.notes = notes;

            return task;
        }

    })

    clearTasks();
    renderAllTasks();
    storeData();
}