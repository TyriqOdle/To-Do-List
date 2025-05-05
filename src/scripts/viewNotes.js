const viewNotesModal = document.getElementById("viewNotesModal")
const closeBtn = document.getElementById("viewNotesCloseBtn");
const title = document.getElementById("viewNotesTitle");
const project = document.getElementById("viewNotesProject");
const date = document.getElementById("viewNotesDueDate");
const priority = document.getElementById("viewNotesPriority");
const status = document.getElementById("viewNotesStatus");
const notes = document.getElementById("viewNotes-notes");
const notesInput = document.getElementById("addNotesinput");
const saveNotes = document.getElementById("saveNotesBtn");
import {todoList} from "./storeData.js"

closeBtn.addEventListener("click",() =>{
    viewNotesModal.classList.add("d-none");
})


export default function viewNotes(taskID){
    viewNotesModal.classList.remove("d-none");

    let task = getTaskData(taskID);

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