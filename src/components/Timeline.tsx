import Share from './Share'
import Post from './Post'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../state/AuthContext'

const apiInitial = [
  {
    config: {},
    data: [
      {
        createdAt: '',
        desc: '',
        img: '',
        likes: [''],
        updatedAt: '',
        userId: '',
        __v: '',
        _id: '',
      },
    ],
    headers: {},
    request: {
      XMLHttpRequest: {},
    },
    status: 0,
    statusText: '',
  },
]

type Api = typeof apiInitial

type PostsArray = {
  _id: number
  desc?: string
  photo?: string
  date: string
  userId: number
  likes?: string[]
  comment: number
  img?: string
  createdAt: string
}

type Props = {
  username?: string
}

const Timeline: React.FC<Props> = ({ username }) => {
  const [posts, setPosts] = useState<Api>(apiInitial)
  const { user } = useContext(AuthContext)
  const PUBLIC_HEROKU = process.env.REACT_APP_HEROKU
  useEffect(() => {
    ;(async () => {
      const res = username
        ? await axios.get(`${PUBLIC_HEROKU}/posts/profile/${username}`)
        : await axios.get(`${PUBLIC_HEROKU}/posts/timeline/${user._id}`)
      setPosts(
        res.data.sort((post1: any, post2: any) => {
          return (
            new Date(post2.createdAt).valueOf() -
            new Date(post1.createdAt).valueOf()
          )
        })
      )
  // console.log(user)
    })()
  }, [username, user._id])

  return (
    <div className="timeline flex-[6]">
      <div className="timelineWrapper p-[20px]">
        <Share />
        {posts.map((post: any, id) => (
          <Post post={post} key={id} />
        ))}
      </div>
    </div>
  )
}
export default Timeline
