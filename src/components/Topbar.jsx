import { Chat, Notifications, Search } from '@mui/icons-material'
import React from 'react'
import './Topbar.scss'

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Sns-App</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
      <Search className="searchIcon" />
          <input
            type="text"
            className="searchbar"
            placeholder="検索"
          />
        </div>
        <div className="topbarRight">
          <div className="topbarIconItem">
      <Chat/>
      <span className="topbarIconBadge">1</span>
          </div>
      <Notifications/>
      <span className="topbarIconBadge">2</span>
        </div>
      </div>
      <img
        src="/assets/person/1.jpeg"
        alt=""
        className="w-24 rounded-full topbarImg"
      />
    </div>
  )
}

export default Topbar
