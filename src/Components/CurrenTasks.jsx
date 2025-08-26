import React,{ useEffect, useState} from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import moment from 'moment';

const CurrenTasks = () => {
     const [tasks ,setTasks]= useState([])
    const fetchTasks = async()=>{
       try{
        const res =  await fetch('http://localhost:5000/tasks')
        const Data =  await res.json()
        setTasks(Data)
       }catch(err){
        console.log(err.message)
       }
    }
    useEffect(()=>{
        fetchTasks();
    },[]);
    console.log(tasks)
  return (
    <div className='tasks-column'>
          
          <div >
            <h2>Current tasks</h2>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Tasks</th>
                <th>Created at</th>
                <th>Due Date</th>
                <th className='priority'>priority</th>
                <th>Actions</th>
              </tr>
            </thead>
             
            <tbody>
            {tasks && tasks.filter((task)=>task.status!=="completed").map((task,index)=>(
              <tr>
                <td><input type="checkbox" /></td>
                <td>{task.title}</td>
                <td>{moment(task.createdAt).format('DD/MM/YY')}</td>
                <td>{moment(task.dueDate).format('DD/MM/YY')}</td>
                <td className={task.priority==="High" ? "priority-high":task.priority==="Low"?"priority-low":"priority-medium"}>{task.priority}</td>
                <td>
                  <button className='btn-edit'><FaEdit /></button>
                  <button className='btn-delete'><MdDelete/></button>
                </td>
                </tr>
            ))}
              
              </tbody>
            
          </table>
        </div>

      </div>
      
 
  )
}

export default CurrenTasks