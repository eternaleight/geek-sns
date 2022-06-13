import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import TimeLine from '../components/Timeline'

const Profile: React.FC = () => {
  return (
    <>
      <Topbar />
      <div className="flex profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="assets/person/2.jpeg"
                alt=""
                className="w-[100%] h-[30vh] profileCoverImg"
              />
              <img
                src="assets/person/1.jpeg"
                alt=""
                className="w-24 rounded-full profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">eternaleight</h4>
              <span className="profileInfoDesc">個人開発/nvim</span>
            </div>
            <div className="profilerightBottom"></div>
          </div>
          <TimeLine />
          <Rightbar />
        </div>
      </div>
    </>
  )
}
export default Profile
