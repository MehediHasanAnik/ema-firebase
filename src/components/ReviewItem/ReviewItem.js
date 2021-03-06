import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { name, img, price, shipping, quantity } = props.product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-detail-container">
        <div className="item-details">
          <p className="product-name">{name}</p>
          <p>
            Price: <span className="orange-color">{price}</span>
          </p>
          <p>
            <small>Shipping:{shipping}</small>
          </p>
          <p>
            <small>Quantity:{quantity}</small>
          </p>
        </div>
        <div className="delete-container">
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
