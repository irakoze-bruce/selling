/** @format */

import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <h1>Logo</h1>
      <nav>
        <ul>
          <Link to='/shop'>
            <li>shop</li>
          </Link>

          <Link to='/about'>
            <li>about</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Logo;
