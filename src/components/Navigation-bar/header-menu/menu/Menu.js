/** @format */

import React from "react";
import { Link } from "react-router-dom";
import style from "./Menu.module.css";

function Menu() {
  return (
    <div className={style.Menu}>
      <nav>
        <Link to='' className={style.Link}>
          <li>home</li>
        </Link>
        <Link to='' className={style.Link}>
          <li>Products</li>
        </Link>
        <Link to='' className={style.Link}>
          <li>About us</li>
        </Link>
        <Link to='' className={style.Link}>
          <li>special</li>
        </Link>
        <Link to='' className={style.Link}>
          <li>Testimonials</li>
        </Link>
        <Link to='' className={style.Link}>
          <li>blog</li>
        </Link>
        <Link to='' className={style.Link}>
          <li>contact</li>
        </Link>
      </nav>
    </div>
  );
}

export default Menu;
