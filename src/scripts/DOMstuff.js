import viewNotes from "./viewNotes.js";

export function renderNewTasks(newTask){
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
    viewNotesBtn.addEventListener("click", (e) =>{
        let taskID = e.target.dataset.id;
        viewNotes(taskID);
    });

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

    projectItem.innerHTML = `<span class="project-color" style="background-color:${newProject.color};"></span>
                    <span>${newProject.name}</span>`;

    let lastElement = projectList.lastElementChild;

    projectList.insertBefore(projectItem, lastElement);
}
