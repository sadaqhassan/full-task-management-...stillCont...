import React from 'react'

const AddandEdit = () => {
  return (
    <>
    <div className='task-form'>
        <h2>Add New Task</h2>
        <form >
            <div className='form-group'>
            <label>Task:</label>
            <input type="text" required/>
            </div>

             <div className='priority' required>
            <label>priority</label>
            <select>
                <option value="Hight">Hight</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>

            </select>
            </div>

               <div className='form-group'>
            <label>Due Date:</label>
            <input type="date" required />
            </div>
            <button type='submit'>Add Task </button>
        </form>
    </div>
    </>
  )
}

export default AddandEdit