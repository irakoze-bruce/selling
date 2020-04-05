/** @format */

import React from "react";
import style from "./Banner.module.css";
import Button from "./button/Button";

function Banner() {
  return (
    <div className={style.Banner}>
      <h1>shop with us</h1>
      <div className={style.container}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          assumenda ea quo cupiditate facere deleniti fuga officia.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          assumenda ea quo cupiditate facere deleniti fuga officia.
        </p>
      </div>

      <Button />
    </div>
  );
}

export default Banner;
