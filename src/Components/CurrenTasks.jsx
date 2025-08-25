import React from 'react'

const CurrenTasks = () => {
  return (
    <div>
        <h1>Task management</h1>
      
        {/* current tasks */}
        <div className='tasks-column'>
          <h2>Curret tasks</h2>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Tasks</th>
                <th>Created at</th>
                <th>Due Date</th>
                <th>periority</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="checkbox" /></td>
                <td>practice web</td>
                <td>01-08-2025</td>
                <td>05-08-2025</td>
                <td>Low</td>
                <td>
                  <button className='btn-edit'>Edit</button>
                  <button className='btn-delete'>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
      
 
  )
}

export default CurrenTasks