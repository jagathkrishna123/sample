import React from 'react'
import Content from './Content'
import ListItem from './ListItem'

const Home = () => {
  return (
    <div className="bg-white pl-2 h-full w-[1250px] rounded-md overflow-hidden flex flex-col">
        <Content/>
        <div className='h-[80%]'>
          <ListItem/>
        </div>
    </div>
  )
}

export default Home


// check flex flex-col remove