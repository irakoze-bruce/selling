/** @format */

import React from "react";
import style from "./Button.module.css";

function Button() {
  return (
    <div className={style.Button}>
      <button className={style.btn}>shop Now</button>
      <button className={style.btn}>club Membership</button>
    </div>
  );
}

export default Button;
