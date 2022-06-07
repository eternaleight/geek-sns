import {
  Bookmark,
  Home,
  Notifications,
  Person,
  Search,
  Settings,
} from '@mui/icons-material'

const Sidebar: React.FC = () => (
  <>
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Home className="sidebarListIcon" />
            <span className="sidebarListText">ホーム</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Search className="sidebarListIcon" />
            <span className="sidebarListText">検索</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Notifications className="sidebarListIcon" />
            <span className="sidebarListText">通知</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Bookmark className="sidebarListIcon" />
            <span className="sidebarListText">
              ブックマーク
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Person className="sidebarListIcon" />
            <span className="sidebarListText">
              プロフィール
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Settings className="sidebarListIcon" />
            <span className="sidebarListText">設定</span>
          </li>
        </ul>
        <hr className="sidebarHr mt-9" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="m-auto w-full h-[20rem] mt-2 sidebarFriendImg"
            />
            <span className="sidebarFriendName">eternaleight</span>
          </li>
        </ul>
      </div>
    </div>
  </>
)

export default Sidebar
