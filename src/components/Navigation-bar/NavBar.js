/** @format */

import React from "react";
import HeaderAddresse from "./header-addresse/HeaderAddresse";
import style from "./Navbar.module.css";
import HeaderMenu from "./header-menu/HeaderMenu";

function NavBar() {
  return (
    <div className={style.NavBar}>
      <HeaderAddresse />
      <HeaderMenu />
    </div>
  );
}

export default NavBar;
