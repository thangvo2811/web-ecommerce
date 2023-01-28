import React from "react";
import logo from "../assets/images/logo.svg";
import logo1 from "../assets/images/banner-laptop.svg";
import { FaShoppingCart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import "../sass/NavBar.scss";

const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        {/* start menu */}
        <div className="navbar__content">
          <div className="navbar__content__left">
            <div className="navbar__content__left__img">
              <img src={logo} alt="" />
            </div>
            <ul className="navbar__content__left__menu">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="navbar__content__right">
            <ul className="navbar__content__right__item">
              <li>
                <FaShoppingCart />
              </li>
              <li>Login</li>
              <li>Register</li>
            </ul>
          </div>
        </div>
        {/* end menu */}

        {/* start content text */}
        <div className="navbar__desc">
          {/* start desc left */}
          <div className="navbar__desc__left">
            <div className="navbar__desc__left__text">
              <h3>Macbook M2</h3>
              <p>Become a Macbook M2 owner with many attractive giffts</p>
              <div className="navbar__desc__left__text__price">
                <div className="navbar__desc__left__text__price__count">
                  2000$
                </div>
                <div className="navbar__desc__left__text__price__sales">
                  1800$
                </div>
              </div>
            </div>
            <div className="navbar__desc__left__add">
              <div className="navbar__desc__left__add__features">
                <span>
                  <FaPlus />
                </span>
                <div className="navbar__desc__left__add__features__btn">
                  ADD TO CART
                </div>
              </div>
            </div>
          </div>
          {/* end desc left */}

          {/* start desc right */}
          <div className="navbar__desc__right">
            <div className="navbar__desc__right__img">
              <img src={logo1} alt="" />
            </div>
          </div>
          {/* end desc right */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
