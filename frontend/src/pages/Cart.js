import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "product1", price: 100, quantity: 1 },
    { id: 2, name: "product2", price: 102, quantity: 1 },
    { id: 3, name: "product3", price: 103, quantity: 1 },
    { id: 4, name: "product4", price: 104, quantity: 1 },
  ]);
  const [loading, setLoading] = useState(false);

  const calculateTotal = () => {
    let sum = 0;
    cartItems.forEach((item) => {
      sum += item.price;
    });
    return sum;
  };

  return (
    <div className="cart-container">
      <h2 className="cart-heading">My Cart</h2>

      {cartItems.map((cart) => (
        <div key={cart.id} className="cart-item">
          <h2 className="cart-name">{cart.name}</h2>
          <p className="cart-price">${cart.price}</p>
          <p className="cart-quantity">Quantity: {cart.quantity}</p>
        </div>
      ))}

      <div className="total-div">
        <h1>Total: </h1>
        <h1>${calculateTotal()}</h1>
      </div>
    </div>
  );
};

export default Cart;
