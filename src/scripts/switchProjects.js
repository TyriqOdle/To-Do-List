import {renderTasks} from "./DOMstuff.js"
import {todoList} from "./storeData.js";
import {clearTasks} from "./clearTaskList.js"

export function switchProjects(e) {
    const activeProject = document.querySelector(".active");
    const todoListContainer = document.querySelector(".todo-list");
    const contentHeader = document.querySelector(".content-header h2");
    

    clearTasks();
    // Update active project
    activeProject.classList.remove("active");
    e.currentTarget.classList.add("active");

    // Update header with project name
    const projectName = e.currentTarget.dataset.name;
    contentHeader.textContent = projectName;

    // Render tasks that belong to this project
    todoList.forEach((task) => {
        if(task.project == projectName) {
            renderTasks(task);
        }
    });
}