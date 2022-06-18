import {
  Favorite,
  FavoriteBorder,
  MoreVert,
} from '@mui/icons-material'
import { useState } from 'react'
import { Users } from '../posts/postdata'

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
  const [likeNum, setLikeNum] = useState<number | any>(
    post.like
  )
  const [likeBool, setLikeBool] = useState<boolean>(false)

  // const user = Users.filter((user) => user.id === 1)
  // useEffect(() => {
  //   console.log(user)
  // }, [])
  //
  const handleLike = () => {
    setLikeNum(likeBool ? likeNum - 1 : likeNum + 1)
    setLikeBool(!likeBool)
  }

  return (
    <div className="post w-full border-[0.9px] border-gray-500 h-full shadow-[3px_7px_13px_-22px] rounded-[10px] mb-1">
      <div className="postWrapper p-[10px]">
        <div className="flex justify-center justify-between postTop">
          <div className="flex items-center postTopLeft">
            <img
              src="/assets/person/1.jpeg"
              alt=""
              className="hover:opacity-[0.85] cursor-pointer duration-[0.15s] ease-out postProfileImg w-[32px] h-[32px] rounded-full object-cover"
            />
            <span className="postUserName text-[15px] font-semibold mx-[10px]">
              {
                Users.filter(
                  (user) => user.id === post.id
                )[0].username
              }
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
            {likeBool ? (
              <>
                <Favorite
                  onClick={() => handleLike()}
                  className="cursor-pointer text-[#F61980f0] w-[20px]"
                />
                <span className="postLikeCounter text-[#F61980aa] text-[14px] mt-[1px] ml-1">
                  {likeNum}
                </span>
              </>
            ) : (
              <div className="relative my-[-2px] flex">
                <FavoriteBorder
                  onClick={() => handleLike()}
                  className="like cursor-pointer mb-[0px] text-zinc-500 w-[20px]"
                />
                <div className="likeCircle"></div>
                <span className="postLikeCounter text-[14px] mt-[1px] ml-1">
                  {likeNum}
                </span>
              </div>
            )}
          </div>
          <div className="postBottomRight">
            <span className="postCommentText  cursor-pointer border-b-[0.9px] border-gray-500 text-[15px] mr-[3px]">
              {post.comment}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Post
