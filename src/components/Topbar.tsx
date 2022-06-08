import {
  Chat,
  Notifications,
  Search,
} from '@mui/icons-material'
import React, {useState, useEffect} from 'react'

const style = {
  topbarContainerBlur: `backdrop-blur duration-700 bg-[#161B2100] flex w-full items-center sticky top-0 z-50`,
  topbarContainer: `backdrop-blur bg-[#161B21] flex w-full items-center duration-700 sticky top-0 z-50`,
  topbarIconBadge: `flex items-center w-[1rem] h-[1rem] bg-gradient-to-br from-red-800 via-red-700 to-red-400 rounded-full justify-center topbarIconBadge`,
}

const Topbar: React.FC = () => {
  const [show, handleShow] = useState<boolean>(false)

  const transitionNavBar = () => {
    if (window.scrollY > 10) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={show ? style.topbarContainerBlur : style.topbarContainer}>
      <div className="topbarLeft flex-[3]">
        <span className="absolute ml-5 text-2xl font-bold top-[18px] font-alliance logo">
          Sns-App
        </span>
      </div>
      <div className="relative top-[20pd]topbarCenter flex flex-[5]">
        <div className=" h-[30px] rounded-[2px] flex bg-white items-cernter searchbar">
          <Search className="searchIcon max-xs:w-0 mt-[6px] text-[20px] w-[30px]" />
          <input
            type="text"
            className="searchInput max-xs:w-0 w-[80%] focus:outline-none text-black"
            placeholder="検索"
          />
        </div>
      </div>
      <div className="flex topbarRight">
        <div className="topbarIconItem">
          <div className="pt-[2rem]"></div>
          <div className="flex">
            <Chat className="hover:text-blue-500 transition hover:cursor-pointer hover:scale-[1.2]" />
            <span className={style.topbarIconBadge}>1</span>
            <Notifications className="hover:text-blue-500 transition hover:scale-[1.2] hover:cursor-pointer" />
            <span className={style.topbarIconBadge}>2</span>
          </div>
        </div>
        <img
          src="/assets/person/1.jpeg"
          alt=""
          className="topbarImg w-14 h-14 m-1 mr-1 p-[1px] transtion-[radius] to-gray-400 duration-[.15s] parent rounded-[50px] hover:cursor-pointer"
        />
      </div>
    </div>
  )
}

export default Topbar
