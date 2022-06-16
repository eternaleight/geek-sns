import React, {
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
        {innerWidth > 840 ? (
          <>
            <Sidebar />
            <Timeline />
            <Rightbar />
          </>
        ) : innerWidth > 700 ? (
          <>
            <Timeline />
            <Rightbar />
          </>
        ) : (
          <>
            <Timeline />
          </>
        )}
      </div>
    </>
  )
}

export default Home
