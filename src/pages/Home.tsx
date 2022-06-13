import React, { useState, useEffect } from 'react'
import Topbar from '../components/Topbar'
import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'
import Timeline from '../components/Timeline'

type Props = {
  button: boolean
}

const Home: React.FC<Props> = ({ button }) => {
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth < 768 ? 767 : 769)

  const windowWidth = () => {
    setScreenSize(window.innerWidth)
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
        {(screenSize < 768) ? (
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
