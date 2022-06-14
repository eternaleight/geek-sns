import React, { useState, useEffect } from 'react'
import Topbar from '../components/Topbar'
import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'
import Timeline from '../components/Timeline'

type Props = {
  button: boolean
  screenSize: number
}

const Home: React.FC<Props> = ({ button, screenSize }) => {
  return (
    <>
      <Topbar />
      <div className="flex">
        {screenSize < 768 ? (
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
