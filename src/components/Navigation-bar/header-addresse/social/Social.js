/** @format */

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import style from "./Social.module.css";

function Social() {
  return (
    <div className={style.Social}>
      <p>
        <FaFacebook />
      </p>
      <p>
        <FaTwitter />
      </p>
      <p>
        <FaInstagram />
      </p>
      <p>
        <FaWhatsapp />
      </p>
    </div>
  );
}

export default Social;
