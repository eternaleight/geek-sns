const Post = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="/assets/person"
            alt=""
            className="shareProfileImg"
          />
          <input
            type="text"
            className="shareInput"
            placeholder="今何してるの？"
          ></input>
        </div>
      </div>
    </div>
  )
}
export default Post
