import React, { useState } from 'react'

const AddandEdit = () => {


    const [taskData , setTaskData] = useState({  
      title:"",
      priority:"",
      status:"pending",
      dueDate:"",
      createdAt : new Date(),
      completedAt:""
      
     })
   console.log(taskData);

   const submitHandler =async(e)=>{
    // e.preventDefault()
    try{
      const res = await fetch('http://localhost:5000/tasks',{
      method:"POST",
      Headers: {
        "Content-Type" : "Application/JSON",
      },
      body:JSON.stringify(taskData),
      id:taskData.length+1
    
      })
      }catch(err){
        console.log(err.message)
      }
   }
  return (
    <>
    <div className='task-form'>
        <h2>Add New Task</h2>
        <form onSubmit={submitHandler}>
            <div className='form-group'>
            <label>Task:</label>
            <input type="text" value={taskData.title} onChange={(e)=>{setTaskData({...taskData,title:e.target.value})}} required/>
            </div>

             <div className='priority' required>
            <label>priority:</label>
            <select
             onChange={(e)=>{setTaskData({...taskData,priority:e.target.value})}}>
                <option value="Hight">Hight</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>

            </select>
            </div>
            <div className='form-group'>
            <label>Due Date:</label>
            <input type="date" value={taskData.dueDate}  onChange={(e)=>{setTaskData({...taskData,dueDate:e.target.value})}} required />
            </div>
            <button type='submit' >Add Task</button>
        </form>
    </div>
    </>
  )
}

export default AddandEdit