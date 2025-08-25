import React from 'react'
import CurrenTasks from './Components/CurrenTasks'
import AddandEdit from './Components/AddandEdit'
import CompletedTasks from './Components/CompletedTasks'

const App = () => {
  return (

    <div className='container'>
    <h1>Task management</h1>
    <div className='main-content'>
      <CurrenTasks/>
      <AddandEdit/> 
      </div>
      <CompletedTasks/>
    </div>
  )
}

export default App