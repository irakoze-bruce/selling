/** @format */

import React, { useEffect } from "react";
import style from "./ProductAbout.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function ProductAbout() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div>
      <h1>hello</h1>
      <div
        className={style.box}
        data-aos='fade-left'
        data-aos-easing='linear'
        data-aos-duration='5500'
      >
        1
      </div>
      <div
        className={style.box}
        data-aos='fade-up'
        data-aos-anchor-placement='top-center'
      >
        2
      </div>
      <div className={style.box} data-aos='fade-up'>
        3
      </div>
      <div className={style.box}>4</div>
      <div className={style.box}>5</div>
      <div className={style.box}>6</div>
      <div className={style.box} data-aos='fade-up-right'>
        7
      </div>
    </div>
  );
}

export default ProductAbout;
