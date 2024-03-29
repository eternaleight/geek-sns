  // const Button = () => {
import { Chat, Notifications, Search } from '@mui/icons-material'
import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../state/AuthContext'

const style = {
  topbarContainerBlur: `backdrop-blur duration-700 bg-[#161B2100] flex w-full items-center sticky top-0 z-50`,
  topbarContainer: `backdrop-blur bg-zinc-900 flex w-full items-center duration-700 sticky top-0 z-50`,
  topbarIconBadge: `flex pb-[2px] items-center w-[1rem] h-[1rem] bg-gradient-to-br from-red-800 via-red-700 to-red-400 rounded-full justify-center topbarIconBadge`,
}

const Topbar: React.FC = () => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
  const [show, handleShow] = useState<boolean>(false)
  const { user } = useContext<any>(AuthContext)

  const transitionNavBar = () => {
    if (window.scrollY < 10) return handleShow(false)
    return handleShow(true)
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar)
    return () => window.removeEventListener('scroll', transitionNavBar)
  }, [])

  return (
    <div className={show ? style.topbarContainerBlur : style.topbarContainer}>
      <div className="topbarLeft flex-[3]">
        <span
          onClick={() => window.scrollTo(0, 0)}
          className="absolute cursor-pointer ml-5 text-2xl font-bold top-[18px] font-sans logo"
        >
          <Link to="/">Geek-SNS</Link>
        </span>
      </div>
      <div className="topbarCenter flex flex-[5]">
        {!show ? (
          <>
            <div className="bg-[#4C505C52] duration-700 h-[40px] rounded-[12px] flex  items-cernter searchbar transition-none hover:bg-[#4C505C99]">
              <Search className="searchIcon max-xs:w-0 mt-[10px] text-[20px] w-[30px] text-gray-500" />
              <input
                type="text"
                className="bg-[#00000000] searchInput max-xs:w-0 w-[80%] outline-none text-gray-300"
                placeholder="Search"
              />
            </div>
          </>
        ) : (
          <>
            <div className="bg-[#4C505C52] duration-700 h-[30px] rounded-[12px] flex  items-cernter searchbar transition-none hover:bg-[#4C505C99]">
              <Search className="duration-700 searchIcon max-xs:w-0 mt-[5px] text-[20px] w-[30px] text-gray-500" />
              <input
                type="text"
                className="duration-700 bg-[#00000000] searchInput max-xs:w-0 w-[80%] outline-none text-gray-300"
                placeholder="Search"
              />
            </div>
          </>
        )}
      </div>
      <div className="flex topbarRight">
        <div className="topbarIconItem">
          <div className="pt-[2rem]"></div>
          <div className="flex">
            <div className="groupButton w-[24px] h-[25px] bg-transparent cursor-pointer left-[23px] relative bg-transparent"></div>
            <Chat className="cursor-pointer upAnime hover:text-blue-500 transition" />
            <span className={style.topbarIconBadge}>2</span>
            <Notifications className="cursor-pointer buruburuAnime hover:text-blue-500 transition" />
            <span className={style.topbarIconBadge}>8</span>
          </div>
        </div>
        <Link to={`/profile/${user?.username}`}>
          <img
            src={
              user?.profilePicuture
                ? PUBLIC_FOLDER + user?.profilePicuture
                : PUBLIC_FOLDER + '/person/2.jpeg'
            }
            alt=""
            className="hover:opacity-[0.85] topbarImg w-14 h-14 m-1 mr-1 p-[1px] transtion-[radius] to-gray-400 duration-[.15s] parent rounded-[50px] cursor-pointer"
          />
        </Link>
      </div>
    </div>
  )
}

export default Topbar
