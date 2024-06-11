import AddTask from "./AddTask";
import TaskList from "./TaskList";

import { initialTasks } from "../data/tasks";
import { useState } from "react";

export default function ParentTodo() {

    const [tasks,setTasks]= useState(initialTasks);

    const getNextId =(data)=>{
      const maxId= data.reduce((prev,curr)=> prev && prev.id >curr.id ? prev.id : curr.id)
      return maxId+1;
    }

    const handleAddTsk =(text)=>{
      setTasks([
        ...tasks,
        {
          id:getNextId(tasks),
          text,
          done: false
        }
      ])
    }

    const handleChangeTask =(task)=>{
      const newTasks = tasks.map((t)=>{
        if(t.id === task.id){
          return task;
        }else{
          return t;
        }
      })
      setTasks(newTasks);
    }

    const handleDeleteTask =(taskId)=>{
      setTasks(tasks.filter((t)=>t.id!==taskId))
    }

  return (
    <div>
        <h1>Todo App</h1>

        <AddTask onAdd={handleAddTsk}/>

        <TaskList tasks={tasks} onChange={handleChangeTask} onDelete={handleDeleteTask} />

    </div>
  )
}
