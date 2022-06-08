import React from 'react'
import Topbar from '../components/Topbar'
import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'
import Timeline from '../components/Timeline'

const Home: React.FC = () => {
  return (
    <>
      <Topbar />
    <div className='flex'>
      <Sidebar />
      <Timeline />
      <Rightbar />
    </div>
    </>
  )
}

export default Home
