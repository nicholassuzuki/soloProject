import React from 'react';
import europe from './../../Assets/img/europe.jpg'
import { Link } from 'react-router-dom'

export default function Europe() {
  return(
    <div id="europe"> 
      <h2>Europe!</h2>
      <Link to="/picButton">
        <button id="europeButton">Back</button>
      </Link>

      <Link to="/">
      <button id="wayBack">Go Way Back</button>
      </Link>

    <img src={europe}/>
    </div>
    )
}