export let todoList = []
export let projects = []

export function storeTodo(newTodo){
    todoList.push(newTodo)
}

export function storeProject(newProject){
    projects.push(newProject);
    
}


export function retrieveData() {
    const storedProjects = localStorage.getItem("projects");
    const storedTodoList = localStorage.getItem("todoList");

    if (storedProjects) {
        projects = JSON.parse(storedProjects);
    } else {
        projects = [];
    }

    if (storedTodoList) {
        todoList = JSON.parse(storedTodoList);
    } else {
        todoList = [];
    }
}

export function storeData() {
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("todoList", JSON.stringify(todoList));
}


