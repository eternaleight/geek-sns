type UserType = {
  id?: number
  profilePicture?: string
  username?: string
}
type Props = {
  user: UserType
}

const CloseFriend: React.FC<Props> = ({ user }) => {
  return (
    <>
      <li className="sidebarFriend">
        <img
          src="/assets/person/2.jpeg"
          alt=""
          className="hover:opacity-[0.85] cursor-pointer duration-[0.15s] w-[3rem] h-[3rem] rounded-full mt-2 sidebarFriendImg"
        />
        <span className="sidebarFriendName">
          {user.username}
        </span>
      </li>
    </>
  )
}

export default CloseFriend
