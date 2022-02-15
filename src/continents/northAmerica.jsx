// import './styles.scss';
import React from 'react';
import Murica from './../../Assets/img/northMurica.jpg' 
import { Link } from 'react-router-dom'

export default function NorthAmerica() {
  return(
    <div id="northMurica">
      <h2>North Murica</h2>
      <Link to="/picButton">
        <button id="nMuricaButton">Back</button>
      </Link>

      <Link to="/">
      <button id="wayBack">Go Way Back</button>
      </Link>

    <img src={Murica}/>
    </div>  
    )
}
