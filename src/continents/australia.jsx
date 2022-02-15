import React from 'react';
import australia from './../../Assets/img/australia.jpg'
import { Link } from 'react-router-dom'

export default function Australia() {
  return(
    <div id="australia"> 
      <h2>Australia!</h2>
      <Link to="/picButton">
        <button id="australiaButton">Back</button>
      </Link>

      <Link to="/">
      <button id="wayBack">Go Way Back</button>
      </Link>
    <img src={australia}/>
    </div>
    )
}