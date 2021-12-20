import React from 'react' 
import { Link } from 'react-router-dom'

const PostInfo = (props) => {

  const allTags = props.post.tags.map((tag) => (
    <h3>{tag.tagName}</h3>
  ))
  
  console.log(props.post.image)
  return (
    <div className="postInfo">
      <div className="postImage">
        <img src={props.post.image} alt="User Uploaded Img"/>
      </div>
      <div className="postTitle">
        <h1>{props.post.title}</h1>
      </div>
      <div className="postBody">
        <h1>{props.post.body}</h1>
      </div>
      <div className="postUser">
        <img src={props.post.added_by.avatar} alt="user avatar"/>
        <Link to={`/profile/${props.post.added_by._id}`}><h2>{props.post.added_by.name}</h2></Link>
        <button><Link to={`/posts/${props.post._id}/edit`}>Edit Post</Link></button>
      </div>
      <div className="postTags">
        {allTags}
      </div>
    </div>
  )

}

export default PostInfo