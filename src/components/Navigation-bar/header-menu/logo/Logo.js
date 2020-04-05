/** @format */

import React from "react";
import style from "./Logo.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className={style.Logo}>
      <h1>
        <Link className={style.Link} to='/'>
          Selling<span></span>
        </Link>
      </h1>
    </div>
  );
}

export default Logo;
