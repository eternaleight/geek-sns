import { Favorite, MoreVert } from '@mui/icons-material'
import { useCallback, useEffect } from 'react'
import { Users } from '../Posts/dummydata'

type PostsArray = {
  id?: number
  desc?: string
  photo?: string
  date?: string
  userId?: number
  like?: number
  comment?: number
}

type Props = {
  post: PostsArray
}

const Post: React.FC<Props> = ({ post }) => {
  useEffect(() => {
    console.log(post)
  }, [])

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
              {post.date}
            </span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter mx-[20px]">
          <span className="postText">{post.desc}</span>
          <img
            className="postImg my-[20px] w-full max-h-[500px] object-contain"
            src={post.photo}
            alt=""
          />
        </div>
        <div className="flex items-center justify-between postBottom">
          <div className="flex postBottomLeft">
            <Favorite className="text-[#F61980] w-[20px]" />
            <span className="postLikeCounter text-[15px]">
              {post.like}
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText cursor-pointer border-b-[0.9px] border-gray-500 text-[15px] mr-[3px]">
              {post.comment}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Post
