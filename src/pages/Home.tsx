import React, { useState, useEffect } from 'react'
import Topbar from '../components/Topbar'
import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'
import Timeline from '../components/Timeline'

const Home: React.FC = () => {
  const [show, handleShow] = useState<number>(0)

  const windowWidth = () => {
    handleShow(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', windowWidth)
    return () =>
      window.removeEventListener('resize', windowWidth)
  }, [])

  return (
    <>
      <Topbar />
      <div className="flex">
        {show < 768 ? (
          <Timeline />
        ) : (
          <>
            <Sidebar />
            <Timeline />
            <Rightbar />
          </>
        )}
      </div>
    </>
  )
}

export default Home
