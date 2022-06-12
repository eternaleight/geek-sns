import { Star } from '@mui/icons-material'

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
const Rightbar: React.FC = () => (
  <div className="flex-[2.5] rightbar">
    <div className="rightbarWrapper pt-[20px] pr-[20px]">
      <div className="flex items-center eventContainer">
        <Star className="StarImg w-[18px] mt-[2px] mr-[3px]" />
        <span className="eventText font-[300] text-[15px]">
          <b>フォロワー限定</b>イベント開催予定
        </span>
      </div>
      <img
        src="assets/post/hakusan-bubble-01.png"
        alt=""
        className="w-full eventImg rounded-[10px] my-[25px]"
      />
      <h4 className="rightTItle mb-[20px]">
        オンラインの友達
      </h4>
      <ul className="rightbarFriendList">
        <li className={style.rightbarFriend}>
          <div className={style.rightbarFriendImgContainer}>
            <img
              src="assets/person/1.jpeg"
              alt=""
              className={style.rightbarProfileImg}
            />
            <span className={style.rightbarOnline}></span>
          </div>
          <span className={style.rightbarUserName}>
            Ryoya Itabashi
          </span>
        </li>
        <li className={style.rightbarFriend}>
          <div className={style.rightbarFriendImgContainer}>
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
      <p className={style.promotionTitle}>
      </p>
      <a href="https://high-speed-holodule.vercel.app/" target="_blank">
        <div className='card-box'>
      <img
        className={style.promotionTitleImg}
        alt=""
        src="assets/post/high-speed-holodule.png"
      />
          <div className='caption'>high-speed-holodule</div>
        </div>
      </a>
      <p className={`${style.promotionName}`}>
      </p>
      <a href="https://github.com/eternaleight/bubblegum-colorscheme" target="_blank">
        <div className='card-box'>
        <img
          className={style.promotionTitleImg}
          alt=""
          src="assets/post/hakusan-bubble-01.png"
        />
          <div className='caption'>bubblegum-colorscheme</div>
        </div>
      </a>
      <p className={`${style.promotionName}`}>
      </p>
      <a href="https://www.youtube.com/channel/UCg4XFdvhe7Zvttz4yZLh33A" target="_blank">
        <div className='card-box'>
      <img
        className={style.promotionTitleImg}
        alt=""
        src="assets/post/initialcommit01.png"
      />
          <div className='caption'>initial commit</div>
        </div>
      </a>
      <p className={`${style.promotionName}`}>
      </p>
    </div>
  </div>
)
export default Rightbar
