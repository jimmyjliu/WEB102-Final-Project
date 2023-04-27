import React, { useState } from 'react';
import './CreatePost.css';
import { supabase } from '../client';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    await supabase
      .from('Posts')
      .insert({ title, author, description })
      .select();

    window.location = '/';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" id="title" name="title" value={title} onChange={(event) => setTitle(event.target.value)} />
        <br />
        <br />

        <label htmlFor="author">Author</label>
        <br />
        <input type="text" id="author" name="author" value={author} onChange={(event) => setAuthor(event.target.value)} />
        <br />
        <br />

        <label htmlFor="description">Description</label>
        <br />
        <textarea rows="5" cols="50" id="description" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CreatePost;
