import React from 'react';
import africa from './../../Assets/img/africa.jpg'
import { Link } from 'react-router-dom'

export default function Africa() {
  return(
    <div id="africa"> 
      <h2>Africa!</h2>
      <Link to="/picButton">
        <button id="africaButton">Back</button>
      </Link>

      <Link to="/">
        <button id="wayBack">Go Way Back</button>
      </Link>
    <img src={africa}/>
    </div>
    )
}