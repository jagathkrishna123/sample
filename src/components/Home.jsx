import React from 'react'
import Content from './Content'
import ListItem from './ListItem'

const Home = () => {
  return (
    <div className="bg-white pl-2 h-[96vh] rounded-md overflow-hidden">
        <Content/>
        <ListItem/>
    </div>
  )
}

export default Home