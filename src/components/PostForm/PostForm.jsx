import React from 'react'
import Tag from '../Tag.jsx'

import '../../components/PostForm/CreatePost.css'


const PostForm = (props) => {
  return (
    <form className="create-post-form" onSubmit={props.handleSubmit}>
      <div className='form-header'>
      <h1 className='create-title'>Create A Post</h1>
      </div>      

      <div className='form-body'>
        <div className='horizontal-group'>
          <div className='form-group left'>            
              <label className='label-title'>Add Title: </label>            
              <input className="form-input"
                required
                name="title"
                autoComplete='off'
                placeholder="Enter title here"
                value={props.title}
                onChange={(e) => props.setTitle(e.target.value)}
              />
          </div>
          <div className='form-group right'>
          <label className='label-title'>Add an Image: </label>
          <input className="form-input"
            required
            type='file'
            name="image"
            onChange={(e) => props.setImage(e.target.files[0])}
          />
          </div>
        </div>
        
        <div className='form-group description'>          
            <label className='label-title'>Add Description: </label>
            <textarea className="form-input body"
              required
              name="body"
              autoComplete='off'
              placeholder="Enter description here"
              value={props.body}
              onChange={(e) => props.setBody(e.target.value)}
            />            
          </div>          

        <div className='form-group tags'>
            
            <input id='new-tag' type='text' className='form-input tags'
              required
              name="new-tag"
              autoComplete='off'
              placeholder="Ex: apple, pear, tiger"
              // value={props.tags}
              // onChange={(e) => props.setTags(e.target.value)}
            />
            <button className="add-tag-button" onClick={props.addNewTag}>+</button>
            <ul>
              {props.tags.map((tag, index) => (
                <li>
                  <Tag tag={tag} key={tag+index}/>
                </li>
              ))}
            </ul>
            <ul>
            </ul>
        </div>
      </div>
          <div className='createBtn-wrapper'>
            <button type="submit" className='createBtn'>Create Post</button>
          </div>
    </form>
  )
}

export default PostForm