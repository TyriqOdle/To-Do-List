import { addProjectEventListener,addNewTaskEventListener } from "./scripts/eventListeners.js"
import {retrieveData} from "./scripts/storeData.js";
import { renderAllTasks,renderAllProjects } from "./scripts/DOMstuff.js";
import { switchProjects } from "./scripts/switchProjects.js";

const addTodoBtn = document.getElementById("addToDOBtn")
addNewTaskEventListener(addTodoBtn);

const addProjectBtn = document.getElementById("addProjectBtn");
addProjectEventListener(addProjectBtn);


retrieveData();
renderAllTasks();
renderAllProjects();