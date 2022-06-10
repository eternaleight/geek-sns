import { MoreVert } from '@mui/icons-material'

const Post = () => {
  return (
    <div className="post w-full border-[0.9px] border-gray-500 h-full shadow-[3px_7px_13px_-22px] rounded-[10px]">
      <div className="postWrapper p-[10px]">
        <div className="flex justify-center justify-between postTop">
          <div className="flex items-center postTopLeft">
            <img
              src="./assets/person/1.jpeg"
              alt=""
              className="postProfileImg w-[32px] h-[32px] rounded-full object-cover"
            />
            <span className="postUserName text-[15px] font-semibold mx-[10px]">
              eternaleight
            </span>
            <span className="postData">5分前</span>
          </div>
        </div>
        <div className="postTopRight">
          <MoreVert />
        </div>
        <div className="postCenter">
          <span className="postText">SNS</span>
          <img
            className="postImg"
            src="./assets/post/3.png"
            alt=""
          />
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
