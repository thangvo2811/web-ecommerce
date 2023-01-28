import React from "react";
import phone1 from "../assets/images/phone.svg";
import keyboard1 from "../assets/images/keyboard.svg";
import macbook1 from "../assets/images/banner-laptop.svg";
import "../sass/Banner.scss";

const Banner = () => {
  return (
    <div className="container">
      <div className="items">
        <div className="items__phone">
          <div className="items__phone__text">
            <p>Listen </p>
            <span>to the beat</span>
            <h4>HEAD PHONE</h4>
          </div>
          <div className="items__phone__img">
            <img src={phone1} alt="" />
          </div>
        </div>
        <div className="items__keyboard">
          <div className="items__keyboard__img">
            <img src={keyboard1} alt="" />
          </div>
          <div className="items__keyboard__text">
            <p>Alway</p>
            <span>Choose your</span>
            <h4>KEY BOARD</h4>
          </div>
        </div>
        <div className="items__macbook">
          <div className="items__macbook__text">
            <p>New Device</p>
            <span>SCREEN</span>
          </div>
          <div className="items__macbook__img">
            <img src={macbook1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
