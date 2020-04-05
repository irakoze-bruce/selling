/** @format */

import React from "react";
import style from "./Addresse.module.css";
import { FaAddressBook } from "react-icons";
import {
  FaFacebook,
  FaEmber,
  FaEnvelope,
  FaTelegram,
  FaPhone,
} from "react-icons/fa";

function Addresse() {
  return (
    <div className={style.Addresse}>
      <div className={style.number}>
        <a href='/'>
          <p className={style.icon}>
            <FaPhone className={style.faIcon} /> <span>+(257) 79 335 848</span>
          </p>
        </a>
      </div>

      <div className={style.email}>
        <a href='/'>
          <p className={style.icon}>
            <FaEnvelope className={style.faIcon} />
            <span>Selling20@gmail.com</span>
          </p>
        </a>
      </div>
    </div>
  );
}

export default Addresse;
