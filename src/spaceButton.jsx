import React from 'react';

import { Link } from 'react-router-dom';

export default function SpaceButton() {
  return(
    <div>
      <Link to="/spaceMan">
        <button>Space Man</button>
      </Link>

      <Link to="/faceOnSpaceMan">
        <button>Space Man staring at us</button>
      </Link>

    </div>
  )}