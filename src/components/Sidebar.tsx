import {
  Bookmark,
  Home,
  Notifications,
  Person,
  Search,
  Settings,
} from '@mui/icons-material'

const style = {
  sidebarWrapper: `p-[20px]`,
  sidebarList: ``,
  sidebarListItem: `hover:bg-zinc-800 bg-zinc-900 border-[0.9px] border-zinc-400 flex w-[10rem] items-center mb-[10px] px-[6px] py-[4px] cursor-pointer shadow-[2px_2px_3px_-3px_#b0b5b5aa] hover:shadow-none  rounded-[4px] hover:rounded-[20px] duration-[.15s]`,
  sidebarListIcon: ``,
  sidebarListText: ``,
}

const Sidebar: React.FC = () => (
  <div className="flex-[2.5] h-screen">
    <div className={style.sidebarWrapper}>
      <ul className={style.sidebarList}>
        <li className={style.sidebarListItem}>
          <Home className={style.sidebarListIcon} />
          <span className={style.sidebarListText}>
            ホーム
          </span>
        </li>
        <li className={style.sidebarListItem}>
          <Search className={style.sidebarListIcon} />
          <span className={style.sidebarListText}>
            検索
          </span>
        </li>
        <li className={style.sidebarListItem}>
          <Notifications
            className={style.sidebarListIcon}
          />
          <span className={style.sidebarListText}>
            通知
          </span>
        </li>
        <li className={style.sidebarListItem}>
          <Bookmark className={style.sidebarListIcon} />
          <span className={style.sidebarListText}>
            ブックマーク
          </span>
        </li>
        <li className={style.sidebarListItem}>
          <Person className={style.sidebarListIcon} />
          <span className={style.sidebarListText}>
            プロフィール
          </span>
        </li>
        <li className={style.sidebarListItem}>
          <Settings className={style.sidebarListIcon} />
          <span className={style.sidebarListText}>
            設定
          </span>
        </li>
      </ul>
      <hr className="sidebarHr mt-9" />
      <ul className="sidebarFriendList">
        <li className="sidebarFriend">
          <img
            src="/assets/person/2.jpeg"
            alt=""
            className="w-[3rem] h-[3rem] mt-2 sidebarFriendImg"
          />
          <span className="sidebarFriendName">
            eternaleight
          </span>
        </li>
      </ul>
    </div>
  </div>
)

export default Sidebar
