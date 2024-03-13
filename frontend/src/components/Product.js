import React from "react";
import { FaImage } from "react-icons/fa";

const Product = ({ product }) => {
  const addToCart = async (name, price) => {
    if (!localStorage.getItem("userId")) {
      alert("Please login first");
      return;
    }

    const product = {
      name: name,
      price: price,
    };
    const response = await fetch("http://localhost:4003/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: JSON.parse(localStorage.getItem("userId")),
        product,
      }),
    });

    const data = await response.json();
    console.log(response.status);

    if (response.status === 201) {
      alert("Item added to cart");
    }
  };

  return (
    <div className="product-card">
      <div className="product-img">
        <FaImage />
      </div>
      <h2 className="product-name">{product.name}</h2>
      <h2 className="product-price">${product.price}</h2>

      <button
        onClick={() => addToCart(product.name, product.price)}
        className="add-to-cart-btn"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
