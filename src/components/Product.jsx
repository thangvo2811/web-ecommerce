import React from "react";
import Rating from "@mui/material/Rating";
import "../sass/Product.scss";
import iphone1 from "../assets/images/Free Phone 14 Pro Mockup 1.svg";
const Product = (props) => {
  return (
    <>
      <div className="product">
        <div className="product-card">
          <div className="product-card__img">
            <img src={props.img} alt="" />
          </div>
          <div className="product-card__title">{props.name}</div>
          <div className="product-card__rate">
            <Rating name="half-rating" defaultValue={5} precision={5} />
          </div>
          <div className="product-card__price">
            <p>{props.price}</p> <span>{props.salesPrice}</span>
          </div>
          <div className="product-card__btn">
            <button className="product-card__btn__add">ADD TO CART</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
