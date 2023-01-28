import React from "react";
import "../sass/BannerProduct.scss";
import iphone1 from "../assets/images/Free Phone 14 Pro Mockup 1.svg";

const BannerProduct = () => {
  return (
    <div className="content">
      <div className="content__desc">
        <div className="content__desc__item">
          <div className="content__desc__item__left">
            <div className="content__desc__item__left__sales">
              <h4>SALE OFF</h4> <p>20%</p>
            </div>
            <p>The more you buy, the bigger the gift</p>
            <div className="content__desc__item__left__btn">Shop now</div>
          </div>
          <div className="content__desc__item__right">
            <div className="content__desc__item__right__a">
              <div className="content__desc__item__right__a__img">
                <img src={iphone1} alt="" />
              </div>
              <div className="content__desc__item__right__a__text">
                <h2>BLACK FRIDAY</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerProduct;
