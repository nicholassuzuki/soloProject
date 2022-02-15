// import './styles.scss';
import React from 'react';
import antarctica from './../../Assets/img/antarctica.jpg' 
import { Link } from 'react-router-dom'

export default function Antarctica() {
  return(
    <div id="antarctica">
      <h2>Antarctica!</h2>
      <Link to="/picButton">
        <button id="antarcticaButton">Back</button>
      </Link>

      <Link to="/">
      <button id="wayBack">Go Way Back</button>
      </Link>

      

    <img src={antarctica}/>
    </div>  


    )
}
