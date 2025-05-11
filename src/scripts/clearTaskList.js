const todoListContainer = document.querySelector(".todo-list");
const projectsContainer = document.querySelector(".project-list")

export  function clearTasks(){
    while (todoListContainer.firstChild) {
        todoListContainer.removeChild(todoListContainer.firstChild);
    }
}

export function clearProjects(){
    while(projectsContainer.firstChild){
        projectsContainer.removeChild(todoListContainer.lastChild)
    }
}