/** @format */

import React from "react";
import style from "./HeaderMenu.module.css";
import Logo from "./logo/Logo";
import Menu from "./menu/Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./menu/About";
import Products from "./menu/Products";

function HeaderMenu() {
  return (
    <div className={style.HeaderMenu}>
      <Router>
        <Logo />
        <Menu />
      </Router>

      <div></div>
    </div>
  );
}

export default HeaderMenu;
