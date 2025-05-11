import viewNotes from "./viewNotes.js";
import addTodo from "./addTodo.js";
import addProject from "./addProject.js";

export function viewNotesEventListener(button){
    button.addEventListener("click", (e)=>{
        let taskID = e.target.dataset.id;
        viewNotes(taskID);
    });
}

export function addProjectEventListener(button){
    button.addEventListener("click", addProject);
}

export function addNewTaskEventListener(button){
    button.addEventListener("click", addTodo)
    
}