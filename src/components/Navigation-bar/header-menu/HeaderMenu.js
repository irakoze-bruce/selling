/** @format */

import React from "react";
import style from "./HeaderMenu.module.css";
import Logo from "./logo/Logo";
import Menu from "./menu/Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function HeaderMenu() {
  return (
    <div className={style.HeaderMenu}>
      <Logo />
      <Menu />

      <div></div>
    </div>
  );
}

export default HeaderMenu;
