import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from './form.jsx';

export default function ButtonPage() {
  return(
    <div id="home">
    <h2>Welcome to Justin</h2>
      <Link to="/picButton">
        <button>Go see some Maps!!! </button>
      </Link>

      <Link to="/spaceButton">
        <button>Go see some Space!!!</button>
      </Link>

      <Form/>

    </div>
    




    

  )
}

