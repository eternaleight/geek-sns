import React, {
  useState,
  useEffect,
  useContext,
} from 'react'
import Topbar from '../components/Topbar'
import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'
import Timeline from '../components/Timeline'
import { SizeContext } from '../utils/size-observer'

const Home: React.FC = () => {
  const { innerWidth } = useContext(SizeContext)
  return (
    <>
      <Topbar />
      <div className="flex">
        {innerWidth < 768 ? (
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
