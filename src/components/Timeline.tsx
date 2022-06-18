import Share from './Share'
import Post from './Post'
import { useEffect, useState } from 'react'
import axios from 'axios'
// import { Posts } from '../posts/postdata'

type PostsArray = {
  id?: number
  desc?: string
  photo?: string
  date?: string
  userId?: number
  like?: number
  comment?: number
}

const Timeline: React.FC = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    ;(async () => {
      const res = await axios.get(
        '/posts/timeline/629b5b3484d1d2669e8d88f0'
      )
      console.log(res)
    })()
  }, [])

  return (
    <div className="timeline flex-[6]">
      <div className="timelineWrapper p-[20px]">
        <Share />
        {/* {Posts.map((post: PostsArray) => ( */}
        {/*   <Post post={post} key={post.id} /> */}
        {/* ))} */}
      </div>
    </div>
  )
}
export default Timeline
