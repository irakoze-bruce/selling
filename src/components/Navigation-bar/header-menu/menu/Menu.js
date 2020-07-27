/** @format */

import React from "react";
import { Link as NavLink } from "react-router-dom";
import style from "./Menu.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Menu() {
  return (
    <div className={style.Menu}>
      <nav>
        <NavLink to='/' className={style.Link}>
          <li>home</li>
        </NavLink>
        <NavLink to='/product' className={style.Link}>
          <li>Products</li>
        </NavLink>
        <NavLink to='/about' className={style.Link}>
          <li>About us</li>
        </NavLink>
        <NavLink to='' className={style.Link}>
          <li>special</li>
        </NavLink>
        <NavLink to='' className={style.Link}>
          <li>Testimonials</li>
        </NavLink>
        <NavLink to='' className={style.Link}>
          <li>blog</li>
        </NavLink>
        <NavLink to='' className={style.Link}>
          <li>contact</li>
        </NavLink>
      </nav>
    </div>
  );
}

export default Menu;
