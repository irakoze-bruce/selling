/** @format */

import React from "react";
import style from "./Product.module.css";
import image1 from "../../images/model_1.png";
import image2 from "../../images/model_2.png";
import image3 from "../../images/model_3.png";
import { FaStar, FaHeart } from "react-icons/fa";
import image4 from "../../images/model_1.png";
import image5 from "../../images/product_1_bg.jpg";

function Product() {
  return (
    <div className={style.Product}>
      <div className={style.ProductText}>
        <h4>POPULAR PRODUCTS</h4>
        <h1>Our Products</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
          consequatur laboriosam ipsam.
        </p>
      </div>

      <div className={style.ProductContainer}>
        <div className={style.ProductBox}>
          <img src={image1} alt='image1' />

          <div className={style.ProductItem}>
            <p>Wild West Hoodie</p>
            <div className={style.ProductItemViews}>
              <span>
                <FaStar className={style.itemStart} /> 5.0
              </span>
              <span>
                <FaHeart className={style.itemsHeart} /> 29
              </span>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>

            <div className={style.ProductBtn}>
              <button>Cart</button>
              <button>View</button>
            </div>
          </div>
        </div>

        <div className={style.ProductBox}>
          <img src={image2} alt='image2' />

          <div className={style.ProductItem}>
            <p>Wild West Hoodie</p>
            <div className={style.ProductItemViews}>
              <span>
                <FaStar className={style.itemStart} /> 5.0
              </span>
              <span>
                <FaHeart className={style.itemsHeart} /> 29
              </span>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>

            <div className={style.ProductBtn}>
              <button>Cart</button>
              <button>View</button>
            </div>
          </div>
        </div>

        <div className={style.ProductBox}>
          <img src={image3} alt='image3' />

          <div className={style.ProductItem}>
            <p>Wild West Hoodie</p>
            <div className={style.ProductItemViews}>
              <span>
                <FaStar className={style.itemStart} /> 5.0
              </span>
              <span>
                <FaHeart className={style.itemsHeart} /> 29
              </span>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>

            <div className={style.ProductBtn}>
              <button>Cart</button>
              <button>View</button>
            </div>
          </div>
        </div>
      </div>

      <div className={style.ProductContainer}>
        <div className={style.ProductBox}>
          <img src={image3} alt='image3' />

          <div className={style.ProductItem}>
            <p>Wild West Hoodie</p>
            <div className={style.ProductItemViews}>
              <span>
                <FaStar className={style.itemStart} /> 5.0
              </span>
              <span>
                <FaHeart className={style.itemsHeart} /> 29
              </span>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>

            <div className={style.ProductBtn}>
              <button>Cart</button>
              <button>View</button>
            </div>
          </div>
        </div>

        <div className={style.ProductBox}>
          <img src={image2} alt='image2' />

          <div className={style.ProductItem}>
            <p>Wild West Hoodie</p>
            <div className={style.ProductItemViews}>
              <span>
                <FaStar className={style.itemStart} /> 5.0
              </span>
              <span>
                <FaHeart className={style.itemsHeart} /> 29
              </span>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>

            <div className={style.ProductBtn}>
              <button>Cart</button>
              <button>View</button>
            </div>
          </div>
        </div>
        <div className={style.ProductBox}>
          <img src={image1} alt='image1' />

          <div className={style.ProductItem}>
            <p>Wild West Hoodie</p>
            <div className={style.ProductItemViews}>
              <span>
                <FaStar className={style.itemStart} /> 5.0
              </span>
              <span>
                <FaHeart className={style.itemsHeart} /> 29
              </span>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>

            <div className={style.ProductBtn}>
              <button>Cart</button>
              <button>View</button>
            </div>
          </div>
        </div>
      </div>

      <div className={style.ProductText}>
        <h4>AWESOME PRODUCTS</h4>
        <h1>Featured Products</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
          consequatur laboriosam ipsam.
        </p>
      </div>

      <div className={style.ProductAbout}>
        <div className={style.ProductAboutBox}>
          <div className={style.ProductAboutText}>
            <h1>About This Product</h1>
            <p>
              Et tempora id nostrum saepe amet doloribus deserunt totam officiis
              cupiditate asperiores quasi accusantium voluptatum dolorem quae
              sapiente voluptatem ratione odio iure blanditiis earum fuga
              molestiae alias dicta perferendis inventore! Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Ducimus soluta assumenda sed
              optio, error at?
            </p>
            <h4>price</h4>
            <p>
              <span className={style.span_line}>$23305</span> <span>$7394</span>
            </p>
            <div className={style.ProductImg}>
              <img src={image4} alt='image4' />
            </div>

            <div className={style.ProductBtn}>
              <button>Cart</button>
              <button>View</button>
            </div>
          </div>
        </div>

        <div className={style.ProductAboutBox}>
          <div className={style.ProductImg}>
            <img src={image4} alt='image4' />
          </div>

          <div className={style.ProductAboutText}>
            <h1>About This Product</h1>
            <p>
              Et tempora id nostrum saepe amet doloribus deserunt totam officiis
              cupiditate asperiores quasi accusantium voluptatum dolorem quae
              sapiente voluptatem ratione odio iure blanditiis earum fuga
              molestiae alias dicta perferendis inventore! Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Ducimus soluta assumenda sed
              optio, error at?
            </p>
            <h4>price</h4>
            <p>
              <span className={style.span_line}>$23305</span> <span>$7394</span>
            </p>

            <div className={style.ProductBtn}>
              <button>Cart</button>
              <button>View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
