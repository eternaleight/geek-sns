import {
  Favorite,
  FavoriteBorder,
  MoreVert,
} from '@mui/icons-material'
import axios from 'axios'
import { useEffect, useState } from 'react'
// import { Users } from '../posts/postdata'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'

type PostsArray = {
  id?: number
  desc?: string
  photo?: string
  date?: string
  userId?: number
  likes?: string[]
  comment?: number
  img?: string
  createdAt: string
}

type Props = {
  post: PostsArray
}

type User = {
  _id: string
  username: string
  email: string
  password: string
  followers: string
  followings: string
  isAdmin: boolean
  createdAt: string
  updatedAt: string
  __v: number
  desc?: string
  profilePicture: string
}

const userInitial = {
  _id: "" ,
  username: "",
  email: "",
  password: "",
  followers: "",
  followings: "",
  isAdmin: false,
  createdAt: "",
  updatedAt: "",
  __v: 0,
  desc: "",
  profilePicture: "",
}

const Post: React.FC<Props> = ({ post }) => {
  const [likeNum, setLikeNum] = useState<number|undefined>(
    post?.likes?.length
)
  const [likeBool, setLikeBool] = useState<boolean>(false)
  const [user, setUser] = useState<User>(userInitial)

  useEffect(() => {
    ;(async () => {
      const res = await axios.get(
        `/users?userId=${post.userId}`
      )
      // console.log(res.data)
      setUser(res.data)
    })()
  }, [post.userId])

  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER

  // const user = Users.filter((user) => user.id === 1)
  // useEffect(() => {
  //   console.log(user)
  // }, [])

  const handleLike = () => {
    if (likeNum !== undefined) {
      setLikeNum(likeBool ? likeNum - 1 : likeNum + 1)
    }
    setLikeBool(!likeBool)
  }

  return (
    <div className="post w-full border-[0.9px] border-gray-500 h-full shadow-[3px_7px_13px_-22px] rounded-[10px] mb-1">
      <div className="postWrapper p-[10px]">
        <div className="flex justify-center justify-between postTop">
          <div className="flex items-center postTopLeft">
            <Link onClick={() => window.scrollTo(0,0)} to={`/profile/${user.username}`}>
            <img
              src={user.profilePicture || "/assets/person/2.jpeg"}
              alt=""
              className="hover:opacity-[0.85] cursor-pointer duration-[0.15s] ease-out postProfileImg w-[32px] h-[32px] rounded-full object-cover"
            />
            </Link>
            <span className="postUserName text-[15px] font-semibold mx-[10px]">
              {user.username}
            </span>
            <span className="postData text-[12px]">
              {format(post.createdAt)}
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
            src={`${PUBLIC_FOLDER}${post.img}`}
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
                  {post?.likes?.length}
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
