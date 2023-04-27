import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css';

const EditPost = ({ data }) => {
  const { id } = useParams();
  const post = data.filter(item => item.id === id)[0];

  const [title, setTitle] = useState(post.title);
  const [author, setAuthor] = useState(post.author);
  const [description, setDescription] = useState(post.description);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor="title">Title</label> <br />
        <input type="text" id="title" name="title" value={title} onChange={handleTitleChange} /><br />
        <br />

        <label htmlFor="author">Author</label><br />
        <input type="text" id="author" name="author" value={author} onChange={handleAuthorChange} /><br />
        <br />

        <label htmlFor="description">Description</label><br />
        <textarea rows="5" cols="50" id="description" value={description} onChange={handleDescriptionChange} >
        </textarea>
        <br />
        <input type="submit" value="Submit" />
        <button className="deleteButton">Delete</button>
      </form>
    </div>
  )
}

export default EditPost;
