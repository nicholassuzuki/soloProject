import React from 'react';
import asia from './../../Assets/img/asia.jpg'
import { Link } from 'react-router-dom'

export default function Asia() {
  return(
    <div id="asia"> 
      <h2>Asia!</h2>
      <Link to="/picButton">
        <button id="asiaButton">Back</button>
      </Link>

      <Link to="/">
      <button id="wayBack">Go Way Back</button>
    </Link>
    <img src={asia}/>
    </div>
    )
}