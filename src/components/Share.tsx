import {
  Analytics,
  Gif,
  Image,
  SentimentVerySatisfied,
} from '@mui/icons-material'
import { useRef, useContext, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../state/AuthContext'

const style = {
  share: `border-[0.9px] w-full max-xs:h-[150px] h-[170px] shadow-[3px_7px_13px_-22px] mb-2 rounded-[10px]`,
  shareWrapper: `p-[10px]`,
  shareTop: `flex items-center`,
  shareInput: ` border-none w-full focus:outline-none text-white`,
  shareHr: `m-[20px]`,
  shareButtons: `flex justify-between`,
  shareOptions: `flex xs:ml-[10px] items-center`,
  shareOptionText: `flex items-center mr-[15px] max-md:text-[14px] max-xs:text-[12px] cursor-pointer font-bold`,
  shareOptionText2: `delay-200 flex items-center mr-[15px] text-[12px] max-xs:text-[10px] cursor-default mediaButton2 absolute bg-[#33415599]  w-[28px] justify-center h-[20px] rounded-[2px] top-7 left-1 `,
  mediaDiv: `absolute top-0 left-[-26px] w-[78px] cursor-pointer h-[24px] bg-[#00000000] mediaButton`,
  shareIcon: `mr-[3px] max-xs:w-[20px] cursor-pointer`,
  shareButton: `mediaButton text-[14px] py-[6px] max-xs:px-[12px] px-[17px] bg-zinc-900 rounded-[5px]`,
}

const Share = () => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
  const PUBLIC_HEROKU = process.env.REACT_APP_HEROKU
  const { user } = useContext(AuthContext)
  const desc = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<any>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newPost = {
      userId: user._id,
      desc: desc.current?.value,
      img: null
    }

    if (file) {
      try {
        const data = new FormData()
        const fileName = Date.now() + file.name
        data.append('name', fileName)
        data.append('file', file)
        newPost.img = fileName
        //画像APIを叩く
        await axios.post(`${PUBLIC_HEROKU}/upload`, data)
      } catch (err) {
        console.log(err)
      }
    }

    try {
      await axios.post(`${PUBLIC_HEROKU}/posts`, newPost )
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={style.share}>
      <div className={style.shareWrapper}>
        <div className={style.shareTop}>
          <img
            src={
              user.profilePicuture
                ? PUBLIC_FOLDER + user.profilePicuture
                : PUBLIC_FOLDER + '/person/2.jpeg'
            }
            alt=""
            className="hover:opacity-[0.85] cursor-pointer duration-[0.15s] w-[50px] h-[50px] mb-1 mr-[10px] object-cover rounded-full shareProfileImg"
          />
          <input
            ref={desc}
            type="text"
            className={`${style.shareInput} bg-[#383a59]`}
            placeholder="what's happening?"
          />
        </div>
        <hr className={style.shareHr} />

        <form onSubmit={(e) => handleSubmit(e)} className={style.shareButtons}>
          <label className={style.shareOptions} htmlFor="file">
            <Image className={style.shareIcon} htmlColor="" />
            <div className="relative flex flex-col mr-[-6px]">
              <span className={`${style.shareOptionText}`}>Media</span>
              <div className={style.mediaDiv}></div>
              <span className={`${style.shareOptionText2}`}>写真</span>
              <input
                type="file"
                id="file"
                accept=".png, .jpeg, .jpg"
                style={{
                  display: 'none',
                }}
                onChange={(e: any) => setFile(e.target.files[0])}
              />
            </div>
            <div className={style.shareOptions}>
              <Gif className={style.shareIcon} />
              <div className="relative flex flex-col">
                <span className={`${style.shareOptionText}`}>GIF</span>
                <div className={style.mediaDiv}></div>
                <span
                  className={`${style.shareOptionText2} left-[-2px] h-[15px]`}
                >
                  gif
                </span>
              </div>
            </div>
            <div className={style.shareOptions}>
              <SentimentVerySatisfied className={style.shareIcon} />
              <div className="relative flex flex-col">
                <span className={style.shareOptionText}>Emoji</span>
                <div className={style.mediaDiv}></div>
                <span
                  className={`${style.shareOptionText2} w-[43px] left-[-2px]`}
                >
                  絵文字
                </span>
              </div>
            </div>
            <div className={style.shareOptions}>
              <Analytics className={`${style.shareIcon}`} />
              <div className="relative flex flex-col">
                <span className={style.shareOptionText}>Poll</span>
                <div className="absolute top-0 left-[-26px] w-[58px] cursor-pointer h-[24px] bg-[#00000000] mediaButton"></div>
                <span className={`${style.shareOptionText2} left-[-2px]`}>
                  投票
                </span>
              </div>
            </div>
          </label>
          <div className="relative flex flex-col">
            <button type="submit" className={style.shareButton}>
              Post
            </button>
            <span
              className={`${style.shareOptionText2} top-[38px] left-[16px]`}
            >
              投稿
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Share
