import {
  Chat,
  Notifications,
  Search,
} from '@mui/icons-material'
import React from 'react'

const style = {
  topbarContainer: `bg-[#010103] flex w-full items-center sticky top-0 z-50`,
  topbarImg: `w-24 p-[1px] transtion-[radius] bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 duration-[.15s] parent hover:rounded-[50px] hover:cursor-pointer`,
}

const Topbar:React.FC = () => {
  return (
    <div className={style.topbarContainer}>
      <div className="topbarLeft flex-[3]">
        <span className="text-2xl font-bold font-alliance logo">Sns-App</span>
      </div>
      <div className="topbarCenter flex flex-[5]">
        <div className=" h-[30px] rounded-[2px] flex bg-white items-cernter searchbar">
          <Search className="searchIcon text-[20px] w-[80px]" />
          <input
            type="text"
            className="searchInput"
            placeholder="検索"
          />
        </div>
        <div className="topbarRight">
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <Notifications />
          <span className="topbarIconBadge">2</span>
        </div>
      </div>
      <img
        src="/assets/person/1.jpeg"
        alt=""
        className={style.topbarImg}
      />
    </div>
  )
}

export default Topbar
