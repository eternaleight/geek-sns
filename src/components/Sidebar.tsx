import {
  Bookmark,
  Home,
  Notifications,
  Person,
  Search,
  Settings,
} from '@mui/icons-material'
import CloseFriend from './CloseFriend'
import { Users } from '../posts/postdata'
import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'
import { AuthContext } from '../state/AuthContext'
import {useContext} from 'react'

type UserType = {
  id?: number
  profilePicture?: string
  username?: string
}

const style = {
  sidebarWrapper: `p-[20px]`,
  sidebarList: ``,
  sidebarListItem: `bg-[#1e2028] border-[0.9px] hover:border-[0.9px] border-zinc-400 flex w-[10rem] items-center mb-[10px] px-[6px] py-[4px] cursor-pointer  hover:shadow-none  hover:rounded-[0px] hover:border-zinc-400 duration-[.15s] Btn `,
  sidebarListIcon: `absolute left-[5px]`,
  sidebarListText: `ml-7 Btn-Text`,
  transparent: `Btn-Text content-[""] after:bg-transparent after:w-[100%]`,
}

const Sidebar: React.FC = () => {

  const { user } = useContext<any>(AuthContext)
  // const username = useParams().username
  // const navigate = useNavigate()

  return (
    <div className="flex-[2.5] h-screen max-sm:hidden">
      <div className={style.sidebarWrapper}>
        <ul className={style.sidebarList}>
          <Link to="/">
          <li className={style.sidebarListItem}>
            <span className={style.sidebarListText}>
              <div className={style.transparent}></div>
              <Home className={style.sidebarListIcon} />
              ホーム
            </span>
          </li>
          </Link>
          <li className={style.sidebarListItem}>
            <span className={style.sidebarListText}>
              <div className={style.transparent}></div>
              <Search className={style.sidebarListIcon} />
              検索
            </span>
          </li>
          <li className={style.sidebarListItem}>
            <span className={style.sidebarListText}>
              <div className={style.transparent}></div>
              <Notifications
                className={style.sidebarListIcon}
              />
              通知
            </span>
          </li>
          <li className={style.sidebarListItem}>
            <span className={style.sidebarListText}>
              <div className={style.transparent}></div>
              <Bookmark className={style.sidebarListIcon} />
              ブックマーク
            </span>
          </li>
        <Link to={`/profile/${user?.username}`}>
          <li className={style.sidebarListItem}>
            <span className={style.sidebarListText}>
              <div className={style.transparent}></div>
              <Person className={style.sidebarListIcon} />
              プロフィール
            </span>
          </li>
          </Link>
          <li className={style.sidebarListItem}>
            <span className={style.sidebarListText}>
              <div className={style.transparent}></div>
              <Settings className={style.sidebarListIcon} />
              <button onClick={() => {
                localStorage.removeItem("user")
                window.location.reload();
                }}>
              ログアウト
              </button>
            </span>
          </li>
        </ul>
        <hr className="sidebarHr mt-9" />
        <ul className="sidebarFriendList">
          {Users.map((user: UserType) => (
            <CloseFriend user={user} key={user.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Sidebar
