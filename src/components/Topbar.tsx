import {
  Chat,
  Notifications,
  Search,
} from '@mui/icons-material'
import React from 'react'

const style = {
  topbarContainer: `bg-[#010103] flex w-full items-center sticky top-0 z-50`,
  topbarImg: `w-24 m-1 p-[1px] transtion-[radius] bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 duration-[.15s] parent rounded-[50px] hover:rounded-[12px] hover:cursor-pointer`,
}

const Topbar: React.FC = () => {
  return (
    <div className={style.topbarContainer}>
      <div className="topbarLeft flex-[3]">
        <span className="absolute m-1 text-2xl font-bold top-[26px] font-alliance logo">
          Sns-App
        </span>
      </div>
      <div className="relative top-[20pd]topbarCenter flex flex-[5]">
        <div className=" h-[30px] rounded-[2px] flex bg-white items-cernter searchbar">
          <Search className="searchIcon mt-[6px] text-[20px] w-[30px]" />
          <input
            type="text"
            className="searchInput w-[80%] focus:outline-none text-black"
            placeholder="検索"
          />
        </div>
        </div>
        <div className="flex topbarRight">
          <div className="topbarIconItem">
          <div className="pt-2">
          </div>
            <Chat className="hover:text-blue-500 transition hover:cursor-pointer" />
            <span className="topbarIconBadge">1</span>
          <Notifications className="hover:text-blue-500 transition hover:cursor-pointer" />
          <span className="topbarIconBadge">2</span>
      </div>
      <img
        src="/assets/person/1.jpeg"
        alt=""
        className={style.topbarImg}
      />
      </div>
    </div>
  )
}

export default Topbar
