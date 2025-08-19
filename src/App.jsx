import React from 'react'
import Sidebar from './components/Sidebar'
import Home from './components/Home'

const App = () => {
  return (
    <div className='flex bg-gray-100 h-screen w-screen overflow-hidden'>
      <Sidebar/>
      <div className='flex-1 p-4 h-screen overflow-hidden'>
        <Home/>
      </div>
    </div>
  )
}

export default App