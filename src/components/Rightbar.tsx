import Online from './Online'
import { Users } from '../posts/postdata'

const style = {
  rightbarProfileImg: `w-[40px] h-[40px] rounded-full object-cover duration-[.15s] hover:opacity-[0.85] cursor-pointer`,
  rightbarFriend: `flex items-center rightbarFriend mb-[15px]`,
  rightbarFriendImgContainer: `mr-[10px] relative`,
  rightbarOnline: `bg-[#2776F2] absolute w-[14px] h-[14px] rounded-full top-[27px] left-[27px] border-[#202023] border-[2.5px]`,
  rightbarUserName: ``,
  promotionTitle: `text-[18px] font-[600] mb-[10px]`,
  promotionName: `text-[18px] font-[300] text-[#999ea6] mt-[-20px]`,
  promotionTitleImg: `duration-500 card w-[300px] h-[250px] rounded-[10px] object-cover cursor-pointer my-[25px]`,
}

// type User = {
//   _id: string
//   username: string
//   email: string
//   password: string
//   followers: string
//   followings: string
//   isAdmin: boolean
//   createdAt: string
//   updatedAt: string
//   __v: number
//   desc?: string
// }

const Rightbar = ({ user }:any) => {
  const HomeRightBar = () => {
    return (
      <div className="max-sm:hidden">
        <div className="flex items-center eventContainer">
        </div>
        <h4 className="rightTItle mb-[20px]">
          オンラインの友達
        </h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online user={user} key={user.id} />
          ))}
          <li className={style.rightbarFriend}>
            <div
              className={style.rightbarFriendImgContainer}
            >
              <img
                src="assets/person/2.jpeg"
                alt=""
                className={style.rightbarProfileImg}
              />
              <span className={style.rightbarOnline}></span>
            </div>
            <span className={style.rightbarUserName}>
              eternaleight
            </span>
          </li>
        </ul>
        <p className={style.promotionTitle}></p>
        <a
          href="https://high-speed-holodule.vercel.app/"
          target="_blank"
        >
          <div className="card-box">
            <img
              className={style.promotionTitleImg}
              alt=""
              src="assets/post/high-speed-holodule.png"
            />
            <div className="caption">
              high-speed-holodule
            </div>
          </div>
        </a>
        <p className={`${style.promotionName}`}></p>
        <a
          href="https://github.com/eternaleight/bubblegum-colorscheme"
          target="_blank"
        >
          <div className="card-box">
            <img
              className={style.promotionTitleImg}
              alt=""
              src="assets/post/hakusan-bubble-01.png"
            />
            <div className="caption">
              bubblegum-colorscheme
            </div>
          </div>
        </a>
        <p className={`${style.promotionName}`}></p>
        <a
          href="https://www.youtube.com/channel/UCg4XFdvhe7Zvttz4yZLh33A"
          target="_blank"
        >
          <div className="card-box">
            <img
              className={style.promotionTitleImg}
              alt=""
              src="assets/post/initialcommit01.png"
            />
            <div className="caption">initial commit</div>
          </div>
        </a>
        <p className={`${style.promotionName}`}></p>
      </div>
    )
  }

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle text-[16px] mb-[10px]">
          ユーザー情報
          <div className="rihgtbarInfo mb-[30px]">
            <div className="rightbarInfoItem mb-[10px]">
              <span className="rihgtbarInfoKey mr-[5px]">
                拠点:
              </span>
              <span className="rightbarInfoKey">福岡</span>
            </div>
            <h4 className="rightbarTitle">フォロワー</h4>
            <div className="flex max-w-[350px] flex-wrap items-center xl:justify-around justify-center rightbarFollwings">
              {Users.map((user) => (
                <div key={user.id}>
                  <div className="flex flex-col max-w-[200px] items-center rightbarFollwing mb-[20px]">
                    <img
                      src={user.profilePicture}
                      alt=""
                      className="object-cover w-36 h-36 rounded-full cursor-pointer hover:opacity-[0.85] duration-[0.15] rightbarFollowingImg mx-4"
                    />
                    <span className="rightbarFollowingName">
                      {user.username}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </h4>
      </>
    )
  }

  return (
    <div className="flex-[2.5] rightbar">
      <div className="rightbarWrapper pt-[20px] pr-[20px]">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  )
}

export default Rightbar
