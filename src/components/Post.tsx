import { MoreVert } from '@mui/icons-material'

const Post = () => {
  return (
    <div className="post w-full max-xs:h-[150px] h-[170px] shadow-[3px_7px_13px_-10px_#65789f] rounded-[10px]">
      <div className="postWrapper p-[10px]">
        <div className="postTop">
          <img
            src="./assets/person/1.jpg"
            alt=""
            className="postProfileInput"
          />
          <span className="postUserName">eternaleight</span>
          <span className="postData">5分前</span>
        </div>
        <div className="postRight">
          <MoreVert />
        </div>
        <div className="postCenter">
          <span className="postText">SNS</span>
          <img className="postImg" src="./assets/post/1.jpg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="./assets/heart.png"
              alt=""
              className="likeIcon"
            />
            <span className="postLikeCounter">
              5人がいいねを押しました
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postConmmentText">
              4:コメント
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Post
