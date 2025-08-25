import React from 'react'

const CompletedTasks = () => {
  return (
    <div className='completed-tasks'>
        <table>
        <thead>
            <tr>
                <th></th>
                <th>Task</th>
                <th>Completed At</th>
                <th>priority</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><input type="checkbox" /></td>
                <td>jwp authentcation</td>
                <td>01-01-5</td>
                <td className='priority-medium'>Medum</td>
                <td></td>
            </tr>
        </tbody>
        </table>
    </div>
)
}

export default CompletedTasks