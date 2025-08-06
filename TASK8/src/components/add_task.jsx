import React from "react";
import '../App.css'


function AddTask({taskName,deletetask,completedTask}){
    return(
            <div>
            <p id='text_task'>{taskName}</p>
            <button id='completed_button'onClick={()=>{completedTask(taskName)}}>Completed</button>
            <button id='delete_button'onClick={()=>{deletetask(taskName)}}>Delete</button>
            </div>
    )
}
export default AddTask;