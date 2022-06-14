import { useState, useEffect, useContext } from 'react'
import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import TimeLine from '../components/Timeline'
import { SizeContext } from '../utils/size-observer'

const Profile: React.FC = () => {
  const { innerWidth } = useContext(SizeContext)
  return (
    <>
      {innerWidth < 768 ? (
        <>
          <Topbar />
          <div className="flex profile">
            <div className="profileRight flex-[10.5]">
              <div className="profileRightTop">
                <div className="profileCover h-[280px] relative">
                  <img
                    src="assets/person/2.jpeg"
                    alt=""
                    className="w-[100%] h-[210px] object-cover profileCoverImg"
                  />
                  <img
                    src="assets/person/1.jpeg"
                    alt=""
                    className="absolute top-[150px] left-0 right-0 object-cover w-[130px] m-auto rounded-full p-3 border-[#202023] profileUserImg border-[1px]"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="font-bold text-[50px] titileName">
                    Ryoya Itabashi
                  </h2>
                  <div className="profileInfo">
                    <h4 className="profileInfoName">
                      eternaleight
                    </h4>
                    <span className="relative left-[-4px] profileInfoDesc">
                      個人開発/nvim
                    </span>
                  </div>
                </div>
                <div className="profilerightBottom"></div>
              </div>
              <div className="flex">
                <TimeLine />
                <Rightbar profile />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Topbar />
          <div className="flex profile">
            <Sidebar />
            <div className="profileRight flex-[10.5]">
              <div className="profileRightTop">
                <div className="profileCover h-[280px] relative">
                  <img
                    src="assets/person/2.jpeg"
                    alt=""
                    className="w-[100%] h-[210px] object-cover profileCoverImg"
                  />
                  <img
                    src="assets/person/1.jpeg"
                    alt=""
                    className="absolute top-[150px] left-0 right-0 object-cover w-[130px] m-auto rounded-full p-3 border-[#202023] profileUserImg border-[1px]"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="font-bold text-[50px] titileName">
                    Ryoya Itabashi
                  </h2>
                  <div className="profileInfo">
                    <h4 className="profileInfoName">
                      eternaleight
                    </h4>
                    <span className="relative left-[-4px] profileInfoDesc">
                      個人開発/nvim
                    </span>
                  </div>
                </div>
                <div className="profilerightBottom"></div>
              </div>
              <div className="flex">
                <TimeLine />
                <Rightbar profile />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
export default Profile
