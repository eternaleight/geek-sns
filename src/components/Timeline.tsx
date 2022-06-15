import Share from './Share'
import Post from './Post'
import { Posts } from '../Posts/postdata'

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
  return (
    <div className="timeline flex-[6]">
      <div className="timelineWrapper p-[20px]">
        <Share />
        {Posts.map((post: PostsArray) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  )
}
export default Timeline
