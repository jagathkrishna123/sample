import React from 'react'
import Sidebar from './components/Sidebar'
import Home from './components/Home'

const App = () => {
  return (
    <div className='flex bg-gray-200'>
      <Sidebar/>
      <div className='flex-1 p-4'>
        <Home/>
      </div>
    </div>
  )
}

export default App