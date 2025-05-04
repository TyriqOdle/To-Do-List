import addTodo from "./scripts/addTodo.js"
import addProject from "./scripts/addProject.js"


const addTodoBtn = document.getElementById("addToDOBtn")
addTodoBtn.addEventListener("click", addTodo)

const addProjectBtn = document.getElementById("addProjectBtn");
addProjectBtn.addEventListener("click", addProject)