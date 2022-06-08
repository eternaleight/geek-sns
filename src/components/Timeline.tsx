import Share from './Share'

const Timeline: React.FC = () => {
  return (
    <div className="timeline flex-[6]">
      <div className="timelineWrapper p-[20px]">
        <Share />
        {/* <Post/> */}
      </div>
    </div>
  )
}
export default Timeline
