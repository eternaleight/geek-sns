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
  shareOptions: `flex xs:ml-[10px] items-center` ,
  shareOptionText: `flex items-center mr-[15px] max-md:text-[14px] max-xs:text-[12px] cursor-pointer font-bold`,
  shareIcon: `mr-[3px] max-xs:w-[20px]`,
  shareButton: `text-[14px] py-[6px] max-xs:px-[12px] px-[17px] bg-zinc-900 rounded-[5px]`,
}

const Share = () => {
  return (
    <div className={style.share}>
      <div className={style.shareWrapper}>
        <div className={style.shareTop}>
          <img
            src="/assets/person/1.jpeg"
            alt=""
            className="w-[50px] h-[50px] mb-1 mr-[10px] object-cover rounded-full shareProfileImg"
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
              <Image className={style.shareIcon} htmlColor="" />
              <span className={style.shareOptionText}>写真</span>
            </div>
            <div className={style.shareOptions}>
              <Gif className={style.shareIcon} />
              <span className={style.shareOptionText}>GIF</span>
            </div>
            <div className={style.shareOptions}>
              <Face className={style.shareIcon} />
              <span className={style.shareOptionText}>気持ち</span>
            </div>
            <div className={style.shareOptions}>
              <Analytics className={style.shareIcon} />
              <span className={style.shareOptionText}>投票</span>
            </div>
          </div>
          <button className={style.shareButton}>投稿</button>
        </div>
      </div>
    </div>
  )
}
export default Share
