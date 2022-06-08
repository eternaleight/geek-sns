import {
  Analytics,
  Face,
  Gif,
  Image,
} from '@mui/icons-material'

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="/assets/person/1.jpeg"
            alt=""
            className="w-12 mb-1 rounded-full shareProfileImg"
          />
          <input
            type="text"
            className="shareInput"
            placeholder="今何してる？"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareButtons">
          <div className="shareOptions">
            <div className="shareOptions">
              <Image className="shareIcon" />
              <span className="shareOptionText">写真</span>
            </div>
            <div className="shareOptions">
              <Gif className="shareIcon" />
              <span className="shareOptionText">GIF</span>
            </div>
            <div className="shareOptions">
              <Face className="shareIcon" />
              <span className="shareOptionText">気持ち</span>
            </div>
            <div className="shareOptions">
              <Analytics className="shareIcon" />
              <span className="shareOptionText">投票</span>
            </div>
          </div>
          <button className='shareButton'>投稿</button>
        </div>
      </div>
    </div>
  )
}
export default Share
