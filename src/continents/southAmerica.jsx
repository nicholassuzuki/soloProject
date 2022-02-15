// import './styles.scss';
import React from 'react';
import Murica from './../../Assets/img/southMurica.jpg' 
import { Link } from 'react-router-dom'

export default function SouthAmerica() {
  return(
    <div id="southMurica">
      <h2>South Murica</h2>
    <Link to="/picButton">
      <button id="smuricabutton">Back</button>
    </Link>

    <Link to="/">
      <button id="wayBack">Go Way Back</button>
    </Link>

    <img src={Murica}/>
    </div>  
    )
}