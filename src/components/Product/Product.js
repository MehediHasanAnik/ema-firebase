import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
const Product = ({ product, handleAddToCart }) => {
  // const { product, handleAddToCart } = props;
  const { name, img, seller, price, stock, ratings } = product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product_info">
        <p className="product-name">{name}</p>
        <p>Price:${price}</p>
        <p>seller:{seller}</p>
        <p>Rating:{ratings} stars</p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="button">
        <p className="text">Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
