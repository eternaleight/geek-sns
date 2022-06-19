import { useContext, useEffect, useState } from 'react'
import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import TimeLine from '../components/Timeline'
import { SizeContext } from '../utils/size-observer'
import axios from 'axios'

type User = {
  _id: string
  username: string
  email: string
  password: string
  followers: string
  followings: string
  isAdmin: boolean
  createdAt: string
  updatedAt: string
  __v: number
  desc?: string
}

const userInitial = {
  _id: "" ,
  username: "",
  email: "",
  password: "",
  followers: "",
  followings: "",
  isAdmin: false,
  createdAt: "",
  updatedAt: "",
  __v: 0,
  desc: "",
}

const Profile: React.FC = () => {
  const { innerWidth } = useContext(SizeContext)
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
  const [user, setUser] = useState<User>(userInitial)

  useEffect(() => {
    ;(async () => {
      const res = await axios.get(
        `/users/?username=eternaleight`
      )
      // console.log(res.data)
      setUser(res.data)
    })()
  }, [])

  return (
    <>
      {innerWidth < 868 ? (
        <>
          <Topbar />
          <div className="flex profile">
            <div className="profileRight flex-[10.5]">
              <div className="profileRightTop">
                <div className="profileCover h-[280px] relative">
                  <img
                    src={`${PUBLIC_FOLDER}/person/2.jpeg`}
                    alt=""
                    className="w-[100%] h-[210px] object-cover profileCoverImg"
                  />
                  <img
                    src={`${PUBLIC_FOLDER}/person/1.jpeg`}
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
                      {user.username}
                    </h4>
                    <span className="relative left-[-4px] profileInfoDesc">
                      {user.desc}
                    </span>
                  </div>
                </div>
                <div className="profilerightBottom"></div>
              </div>
              <div className="flex">
                <TimeLine />
                {innerWidth < 650 ? null : (
                  <Rightbar profile />
                )}
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
                    src={`${PUBLIC_FOLDER}/person/2.jpeg`}
                    alt=""
                    className="w-[100%] h-[210px] object-cover profileCoverImg"
                  />
                  <img
                    src={`${PUBLIC_FOLDER}/person/1.jpeg`}
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
                      {user.username}
                    </h4>
                    <span className="relative left-[-4px] profileInfoDesc">
                      {user.desc}
                    </span>
                  </div>
                </div>
                <div className="profilerightBottom"></div>
              </div>
              <div className="flex">
                <TimeLine username="eternaleight"/>
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
