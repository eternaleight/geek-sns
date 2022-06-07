import {
  Chat,
  Notifications,
  Search,
} from '@mui/icons-material'
import React from 'react'

const style = {
  topbarContainer: `bg-[#010103] flex w-full items-center sticky top-0 z-50`,
  topbarImg: `w-24 m-1 p-[1px] transtion-[radius] to-gray-400 duration-[.15s] parent rounded-[50px] hover:cursor-pointer`,
  topbarIconBadge: `flex items-center w-[1rem] h-[1rem] bg-gradient-to-br from-red-800 via-red-700 to-red-400 rounded-full justify-center topbarIconBadge`
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
            <Chat className="hover:text-blue-500 transition hover:cursor-pointer hover:scale-[1.2]" />
            <span className={style.topbarIconBadge}>1</span>
            <Notifications className="hover:text-blue-500 transition hover:scale-[1.2] hover:cursor-pointer" />
          <span className={style.topbarIconBadge}>2</span>
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
