const viewNotesModal = document.getElementById("viewNotesModal")
const closeBtn = document.getElementById("viewNotesCloseBtn");
const title = document.getElementById("viewNotesTitle");
const project = document.getElementById("viewNotesProject");
const date = document.getElementById("viewNotesDueDate");
const priority = document.getElementById("viewNotesPriority");
const status = document.getElementById("viewNotesStatus");
const notes = document.getElementById("viewNotes-notes");
const editBtn = document.getElementById("editTaskBtn");
const deleteBtm = document.getElementById("deleteNotesBtn");
let taskID = ""
import { editTodo } from "./editTask.js";
import {todoList} from "./storeData.js";
import deleteTask from "./deleteTask.js";

closeBtn.addEventListener("click",() =>{
    viewNotesModal.classList.add("d-none");
});

editBtn.addEventListener("click", ()=>{
    viewNotesModal.classList.add("d-none");
    editTodo(taskID);
});

deleteBtm.addEventListener("click",(e)=>{
    viewNotesModal.classList.add("d-none");
    deleteTask(taskID)
});


export default function viewNotes(task_ID){
    viewNotesModal.classList.remove("d-none");

    taskID = task_ID
    let task = getTaskData(task_ID);

    title.innerHTML = `<h4 class="todo-title" id="viewNotesTitle">Todo Details: ${task.title}</h4>`;
    project.innerHTML = `<h6>Project:</h6> <span> ${task.project}</span>`;
    date.innerHTML = `<h6>Due Date:</h6> <span> ${task.dueDate} </span>`;
    priority.innerHTML = `<h6>Priority:</h6> <span>${task.priority} </span>`;
    status.innerHTML = `<h6>Status: </h6> <span>${task.status} </span>`;
    notes.textContent = task.notes;


}

function getTaskData(taskID){
    let taskData = todoList.find((task) =>{
        if(task.id == taskID){
            return task;
        }
    })

    return taskData;
}