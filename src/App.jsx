import React from 'react'
import CurrenTasks from './Components/CurrenTasks'
import AddandEdit from './Components/AddandEdit'

const App = () => {
  return (
    <div>
      <div className='main-content'>
      {/* currentTasks */}
      <CurrenTasks/>
      <AddandEdit/>
      </div>
    </div>
  )
}

export default App