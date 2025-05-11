import Project from "./project.js"
import {renderNewProject} from "./DOMstuff.js"
import {storeProject,storeData, projects} from "./storeData.js"


const addProjectModal = document.getElementById("addProjectModal");
const addProjectForm = document.getElementById("addProject");
const addTaskClose = document.getElementById("addTaskClose");

addProjectForm.addEventListener("submit",(event)=>{
    event.preventDefault();

    let formData = new FormData(addProjectForm);

    let projectName = formData.get("Project Name");
    let projectColor = formData.get("Project Color");

    let newProject = new Project(projectName, projectColor)

    addProjectForm.reset();

    renderNewProject(newProject);
    storeProject(newProject);
    storeData();
    loadProjectOptions();

    addProjectModal.classList.add("d-none");


})

addProjectModalCloseBtn.addEventListener("click", () =>{
    addProjectModal.classList.add("d-none");
})



export default function addProject(){
    addProjectModal.classList.remove("d-none")
}
function loadProjectOptions(){
    const projectDropdown = document.getElementById("TaskProject");
    const projectDropdownEdit = document.getElementById("TaskProjecedit");

    projectDropdown.innerHTML = "";
    projectDropdownEdit.innerHTML = "";

    projects.forEach((project) => {
        // Create one option for each dropdown
        let option1 = document.createElement("option");
        option1.value = project.name;
        option1.text = project.name;

        let option2 = document.createElement("option");
        option2.value = project.name;
        option2.text = project.name;

        projectDropdown.appendChild(option1);
        projectDropdownEdit.appendChild(option2);
    });
}
