import { todoList,storeData } from "./storeData.js";
import {clearTasks} from "./clearTaskList.js"
import { renderAllTasks } from "./DOMstuff.js";

export default function deleteTask(taskID){
    let tasktoDelete = todoList.find((task)=>{
            if(task.id == taskID){
                return task;
            }
        })

    let index = todoList.indexOf(tasktoDelete)
    
    todoList.splice(index,1);

    clearTasks();
    renderAllTasks();
    storeData();

}