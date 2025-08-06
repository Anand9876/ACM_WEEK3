import { useState } from 'react'
import './App.css'
import AddTask from './components/add_task'

function App() {
  const [newTask,setNewTask]=useState("")
  const [myTasks,setMyTasks]=useState(["Eat","Sleep","Study"])
  const [completedtasks,setCompletedtasks]=useState([])


  function handleInput(e){
      let newValue=e.target.value
      setNewTask(newValue);
      //console.log(newTask)
  }
  function add_tasks()
  {
    console.log("Added")
    setMyTasks(prev=>[...prev,newTask])
    console.log(myTasks)
    setNewTask("")
  }
  function deleteTask(task_name)
  {
    let newmyTasks=myTasks.filter(item=>item!==task_name)
    setMyTasks(newmyTasks)
  }
  function completedTask(task_name){
    let completedtasks=myTasks.filter(item=>item===task_name)
    console.log(completedtasks[0])
    setCompletedtasks(prev=>[...prev,completedtasks])
    let afterFiltering=myTasks.filter(item=>item!==task_name)
    setMyTasks(afterFiltering)
  }

  return (
      <div className='main_body'>
        <div className='container'>
            <h1>To Do List</h1>
            <label className='label_input'>Enter the task:</label>
            <input type='text' onChange={(e)=>{
              handleInput(e)
            }} id='input_txt' value={newTask}></input>
            <button  id='button' onClick={()=>{
              add_tasks(newTask)
            }}>+</button>
            <p>completed tasks:</p>

            <ul>
   {
              completedtasks.map((task)=>{
                  return <AddTask taskName={task} deletetask={deleteTask} completedTask={completedTask}/>
              })
            }
</ul>
            <hr/>
                        <p>tasks to be completed:</p>
<ul>
   {
              myTasks.map((task)=>{
                  return <AddTask taskName={task} deletetask={deleteTask} completedTask={completedTask}/>
              })
            }
</ul>
           

        </div>
      </div>
  )
}

export default App
