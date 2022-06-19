import Share from './Share'
import Post from './Post'
import { useEffect, useState } from 'react'
import axios from 'axios'
// import { Posts } from '../posts/postdata'

const apiInitial = [{
  config: {},
  data: [{
      createdAt: "",
      desc: "",
      img: "",
      likes: [""],
      updatedAt: "",
      userId: "",
      __v: "",
      _id: "",}],
  headers: {},
  request: {
    XMLHttpRequest: {}
  },
  status: 0,
  statusText: "",
}]

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
    useEffect(() => {
      ;(async () => {
        const res = username 
          ? await axios.get(`/posts/profile/${username}`)
          : await axios.get(
            '/posts/timeline/629b5b3484d1d2669e8d88f0'
          )
          // console.log(res)
          setPosts(res.data)
      })()
    }, [])

    return (
      <div className="timeline flex-[6]">
        <div className="timelineWrapper p-[20px]">
          <Share />
          {posts.map((post: any) => (
            <Post post={post} key={post._id} />
          ))}
        </div>
      </div>
    )
  }
  export default Timeline
