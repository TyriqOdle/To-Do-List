import { switchProjects } from "./switchProjects.js";
import { viewNotesEventListener } from "./eventListeners.js";
import { todoList, projects } from "./storeData.js";
import { deletePrjocet } from "./deleteProject.js";

export function renderTasks(newTask){
    const taskList = document.querySelector(".todo-list");
    let newTodo = document.createElement("div");
    newTodo.classList.add("todo-item");

    let todoHeader = document.createElement("div");
    todoHeader.classList.add("todo-header");

    let todoLeft = document.createElement("div")
    todoLeft.classList.add("todo-left");

    let todoRight = document.createElement("div");
    todoRight.classList.add("todo-right");

    let viewNotesBtn = document.createElement("button")
    viewNotesBtn.classList.add("btn","btn-primary","view-notes-btn")
    viewNotesBtn.textContent = "View Notes"
    viewNotesBtn.setAttribute("data-id",newTask.id);


    //Adds event listener to the view notes button.
    viewNotesEventListener(viewNotesBtn);

    todoLeft.innerHTML = `<input id="${newTask.id}" type="checkbox" class="todo-checkbox"">
                            <label class="todo-title" for="${newTask.id}">${newTask.title}</label>`;
    todoRight.innerHTML = `<span class="todo-date">${newTask.dueDate} </span>
                            <span class="priority-badge priority-${newTask.priority.toLowerCase()}">${newTask.priority}</span>`;
    todoRight.appendChild(viewNotesBtn);

    todoHeader.appendChild(todoLeft);         
    todoHeader.appendChild(todoRight);  

    newTodo.appendChild(todoHeader);
    taskList.appendChild(newTodo);
    
    
}


export function renderNewProject(newProject){
    const projectList = document.querySelector(".project-list");
    let projectItem = document.createElement("div")

    projectItem.classList.add("project-item")

    let deletePrjocetdiv = document.createElement("div");
    let deletePrjocetBtn = document.createElement("button");

    deletePrjocetBtn.setAttribute("id", "deleteProjectBtn");
    deletePrjocetBtn.classList.add("btn" , "btn-close")
    deletePrjocetBtn.setAttribute("data-id",newProject.id)

    deletePrjocetBtn.addEventListener("click",(e)=>{
        deletePrjocet(e.target.dataset.id)
    });

    deletePrjocetdiv.appendChild(deletePrjocetBtn)

    projectItem.innerHTML = `<div class="left">
                        <div class="project-color" style="background-color:${newProject.color};"></div>
                            <h5>${newProject.name}</h5>
                        </div>`;
    projectItem.appendChild(deletePrjocetdiv);

    projectItem.setAttribute("data-id",newProject.id);
    projectItem.setAttribute("data-name",newProject.name);
    
    projectItem.addEventListener("click", (e)=>{
        switchProjects(e);
    });

    let lastElement = projectList.lastElementChild;

    projectList.insertBefore(projectItem, lastElement);
}

export function renderAllTasks(){
    todoList.forEach((task) =>{
        renderTasks(task)
    })
}

export function renderAllProjects(){
    projects.forEach((project)=>{
        renderNewProject(project);
    })
}