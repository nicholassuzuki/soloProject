// import './styles.scss';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
//next step is turning this into a button that will invoke a function


export default function PicsButton() {
  return(
    <div>
      <Link to="/nmurica">
        <button>North America!</button>
      </Link>
      
      <Link to="/smurica">
        <button>South America!</button>
      </Link>

      <Link to="/europe">
        <button>Europe!</button>
      </Link>
      
      <Link to="/asia">
        <button>Asia!</button>
      </Link>

      <Link to="/africa">
        <button>Africa!</button>
      </Link>

      <Link to="/australia">
        <button>Australia!</button>
      </Link>

      <Link to="/antarctica">
        <button>Antarctica!</button>
      </Link>

      



    </div> 




  );
}


