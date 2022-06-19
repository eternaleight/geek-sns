import { useContext, useEffect, useState } from 'react'
import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import TimeLine from '../components/Timeline'
import { SizeContext } from '../utils/size-observer'
import axios from 'axios'
import { useParams } from 'react-router-dom'

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
  _id: "_id",
  username: "username",
  email: "email",
  password: "password",
  followers: "followers",
  followings: "followings",
  isAdmin: false,
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  __v: 0,
  desc: "desc",
}

const Profile: React.FC = () => {
  const { innerWidth } = useContext(SizeContext)
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
  const [user, setUser] = useState<User>(userInitial)
  const username = useParams().username

  useEffect(() => {
    ;(async () => {
      const res = await axios.get(`/users?username=${username}`)
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
                    {user.username}
                  </h2>
                  <div className="profileInfo">
                    <h4 className="profileInfoName">{user.desc}</h4>
                    <span className="relative profileInfoDesc">
                      {/* {user.desc} */}
                    </span>
                  </div>
                </div>
                <div className="profilerightBottom"></div>
              </div>
              <div className="flex">
                <TimeLine username={username} />
                {innerWidth < 650 ? null : <Rightbar user />}
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
                    src={username === "eternaleight" ? `${PUBLIC_FOLDER}/person/1.jpeg` : "/assets/person/2.jpeg" }
                    alt=""
                    className="absolute top-[150px] left-0 right-0 object-cover w-[130px] m-auto rounded-full p-3 border-[#202023] profileUserImg border-[1px]"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="font-bold text-[50px] titileName">
                    {user.username}
                  </h2>
                  <div className="profileInfo">
                    <h4 className="profileInfoName">{user.desc}</h4>
                    <span className="relative profileInfoDesc">
                      {/* {user.desc} */}
                    </span>
                  </div>
                </div>
                <div className="profilerightBottom"></div>
              </div>
              <div className="flex">
                <TimeLine username={username} />
                <Rightbar user />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
export default Profile
