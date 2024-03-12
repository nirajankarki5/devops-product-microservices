import React from "react";
import { FaImage } from "react-icons/fa";

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-img">
        <FaImage />
      </div>
      <h2 className="product-name">{product.name}</h2>
      <h2 className="product-price">${product.price}</h2>

      <button className="add-to-cart-btn">Add to cart</button>
    </div>
  );
};

export default Product;