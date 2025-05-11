import { projects, storeData } from "./storeData.js";
import { renderAllProjects } from "./DOMstuff.js";
import {clearProjects} from "./clearTaskList.js"


export function deletePrjocet(projectID){
    let projecttoDelete = projects.find((project)=>{
                if(project.id == projectID){
                    return project;
                }
            })
    
        let index = projects.indexOf(projecttoDelete)
        
        projects.splice(index,1);
    
        clearProjects();
        renderAllProjects();
        storeData();
}