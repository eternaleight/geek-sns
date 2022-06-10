import {
  Analytics,
  Face,
  Gif,
  Image,
} from '@mui/icons-material'

const style = {
  share: `border-[0.9px] border-gray-500 w-full max-xs:h-[150px] h-[170px] shadow-[3px_7px_13px_-22px] mb-2 rounded-[10px]`,
  shareWrapper: `p-[10px]`,
  shareTop: `flex items-center`,
  shareInput: ` border-none w-full focus:outline-none text-white bg-[#202023]`,
  shareHr: `m-[20px]`,
  shareButtons: `flex justify-between`,
  shareOptions: `flex xs:ml-[10px] items-center`,
  shareOptionText: `flex items-center mr-[15px] max-md:text-[14px] max-xs:text-[12px] cursor-pointer font-bold mediaButton`,
  shareOptionText2: `delay-200 flex items-center mr-[15px] text-[12px] max-xs:text-[10px] cursor-pointer mediaButton2 absolute bg-[#33415599]  w-[28px] justify-center h-[20px] rounded-[2px] top-7 left-1 `,
  shareIcon: `mr-[3px] max-xs:w-[20px]`,
  shareButton: `mediaButton text-[14px] py-[6px] max-xs:px-[12px] px-[17px] bg-zinc-900 rounded-[5px]`,
}

const Share = () => {
  return (
    <div className={style.share}>
      <div className={style.shareWrapper}>
        <div className={style.shareTop}>
          <img
            src="/assets/person/1.jpeg"
            alt=""
            className="hover:opacity-[0.85] cursor-pointer duration-[0.15s] w-[50px] h-[50px] mb-1 mr-[10px] object-cover rounded-full shareProfileImg"
          />
          <input
            type="text"
            className={style.shareInput}
            placeholder="今何してる？"
          />
        </div>
        <hr className={style.shareHr} />
        <div className={style.shareButtons}>
          <div className={style.shareOptions}>
            <div className={style.shareOptions}>
              <Image
                className={style.shareIcon}
                htmlColor=""
              />
              <div className="relative flex flex-col mr-[-6px]">
                <span
                  className={`${style.shareOptionText}`}
                >
                  Media
                </span>
                <span
                  className={`${style.shareOptionText2}`}
                >
                  写真
                </span>
              </div>
            </div>
            <div className={style.shareOptions}>
              <Gif className={style.shareIcon} />
              <div className="relative flex flex-col">
                <span className={`${style.shareOptionText}`}>
                  GIF
                </span>
                <span
                  className={`${style.shareOptionText2} left-[-2px] h-[15px]`}
                >
                  gif
                </span>
              </div>
            </div>
            <div className={style.shareOptions}>
              <Face className={style.shareIcon} />
              <div className="relative flex flex-col">
                <span className={style.shareOptionText}>
                  Emoji
                </span>
                <span
                  className={`${style.shareOptionText2} w-[40px] left-[-2px]`}
                >
                  絵文字
                </span>
              </div>
            </div>
            <div className={style.shareOptions}>
              <Analytics className={style.shareIcon} />
              <div className="relative flex flex-col">
                <span className={style.shareOptionText}>
                  Poll
                </span>
                <span
                  className={`${style.shareOptionText2} left-[-2px]`}
                >
                  投票
                </span>
              </div>
            </div>
          </div>
              <div className="relative flex flex-col">
          <button className={style.shareButton}>
            Post
          </button>
                <span
                  className={`${style.shareOptionText2} top-[38px] left-[16px]`}
                >
                  投稿
                </span>
        </div>
        </div>
      </div>
    </div>
  )
}
export default Share
