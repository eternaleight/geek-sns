type UserType = {
  id?: number
  profilePicture?: string
  username?: string
}

type Props = {
  user: UserType
}

const Online: React.FC<Props> = ({ user }) => {
  const style = {
    rightbarProfileImg: `w-[40px] h-[40px] rounded-full object-cover duration-[.15s] hover:opacity-[0.85] cursor-pointer`,
    rightbarFriend: `flex items-center rightbarFriend mb-[15px]`,
    rightbarFriendImgContainer: `mr-[10px] relative`,
    rightbarOnline: `bg-[#2776F2] absolute w-[14px] h-[14px] rounded-full top-[27px] left-[27px] border-[#202023] border-[2.5px]`,
    rightbarUserName: ``,
  }

  return (
    <>
      <li className={style.rightbarFriend}>
        <div className={style.rightbarFriendImgContainer}>
          <img
            src={user.profilePicture}
            alt=""
            className={style.rightbarProfileImg}
          />
          <span className={style.rightbarOnline}></span>
        </div>
        <span className={style.rightbarUserName}>
          Ryoya Itabashi
        </span>
      </li>
    </>
  )
}

export default Online
