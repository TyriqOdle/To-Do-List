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

    //Come Back and add btn event listener

    todoLeft.innerHTML = `<input type="checkbox" class="todo-checkbox"">
                            <label class="todo-title" for="todo1">${newTask.title}</label>`;
    todoRight.innerHTML = `<span class="todo-date">${newTask.dueDate} </span>
                            <span class="priority-badge priority-${newTask.priority.toLowerCase()}">${newTask.priority}</span>;`
    todoRight.appendChild(viewNotesBtn);

    todoHeader.appendChild(todoLeft);         
    todoHeader.appendChild(todoRight);  

    newTodo.appendChild(todoHeader);
    taskList.appendChild(newTodo);
    
    
}
