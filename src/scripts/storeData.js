let todoList = []
let projects = []

export function storeTodo(newTodo){
    todoList.push(newTodo)
}

export function storeProject(newProject){
    projects.push(newProject);
    console.log(projects)
}