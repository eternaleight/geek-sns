import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import TimeLine from '../components/Timeline'

const Profile: React.FC = () => {
  return (
    <>
      <Topbar />
      <div className="profile"></div>
      <Sidebar />
      <TimeLine />
      <Rightbar />
    </>
  )
}
export default Profile
