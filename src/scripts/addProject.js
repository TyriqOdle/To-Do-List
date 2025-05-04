import Project from "./project.js"
import {renderNewProject} from "./DOMstuff.js"
import {storeProject} from "./storeData.js"
 
const addProjectModal = document.getElementById("addProjectModal");
const addProjectForm = document.getElementById("addProject");
const addTaskClose = document.getElementById("addTaskClose");

addProjectForm.addEventListener("submit",(event)=>{
    event.preventDefault();

    let formData = new FormData(addProjectForm);
    console.log(formData)

    let projectName = formData.get("Project Name");
    let projectColor = formData.get("Project Color");

    let newProject = new Project(projectName, projectColor)

    addProjectForm.reset();

    renderNewProject(newProject);
    storeProject(newProject)

    addProjectModal.classList.add("d-none");


})

addProjectModalCloseBtn.addEventListener("click", () =>{
    addProjectModal.classList.add("d-none");
})



export default function addProject(){
    addProjectModal.classList.remove("d-none")
}