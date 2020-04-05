/** @format */

import React from "react";
import Social from "./social/Social";
import Addresse from "./addresse/Addresse";
import style from "./HeaderAddresse.module.css";

function HeaderAddresse() {
  return (
    <div className={style.HeaderAddresse}>
      <Social />
      <Addresse />
    </div>
  );
}

export default HeaderAddresse;
