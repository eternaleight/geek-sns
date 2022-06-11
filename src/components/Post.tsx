import { Favorite, MoreVert } from '@mui/icons-material'

const Post = () => {
  return (
    <div className="post w-full border-[0.9px] border-gray-500 h-full shadow-[3px_7px_13px_-22px] rounded-[10px] mb-1">
      <div className="postWrapper p-[10px]">
        <div className="flex justify-center justify-between postTop">
          <div className="flex items-center postTopLeft">
            <img
              src="./assets/person/1.jpeg"
              alt=""
              className="hover:opacity-[0.85] cursor-pointer duration-[0.15s] ease-out postProfileImg w-[32px] h-[32px] rounded-full object-cover"
            />
            <span className="postUserName text-[15px] font-semibold mx-[10px]">
              eternaleight
            </span>
            <span className="postData text-[12px]">
              5分前
            </span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter mx-[20px]">
          <span className="postText">SNS</span>
          <img
            className="postImg my-[20px] w-full max-h-[500px] object-contain"
            src="./assets/post/3.png"
            alt=""
          />
        </div>
        <div className="flex items-center justify-between postBottom">
          <div className="flex postBottomLeft">
            <Favorite className="text-[#F61980] w-[20px]" />
            <span className="postLikeCounter text-[15px]">
              5人がいいねを押しました
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText cursor-pointer border-b-[0.9px] border-gray-500 text-[15px] mr-[3px]">
              4:コメント
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Post
