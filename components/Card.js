import React from 'react'
import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'
import { supabase } from '../client'

const Card = (props) =>  {

  const [count, setCount] = useState(0)
  const updateCount = async (event) => {
    await supabase
    .from('Posts')
    .update({ likes: count + 1})
    .eq('id', props.id)

    // Update State Variable
    setCount((count) => count + 1);
  }

  const [count2, setCount2] = useState(0)
  const updateCount2 = async (event) => {
    await supabase
    .from('Posts')
    .update({ dislikes: count + 1})
    .eq('id', props.id)

    // Update State Variable
    setCount2((count2) => count2 + 1);
  }

  return (
      <div className="Card">
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <h2 className="title">{props.title}</h2>
          <h3 className="author">{"by " + props.author}</h3>
          <p className="description">{props.description}</p>
          <button className="betButton" onClick={updateCount} >❤️ Likes: {count}</button>
          <button className="dislike" onClick={updateCount2} >💔 Dislikes: {count2}</button>
      </div>
  );
};

export default Card;