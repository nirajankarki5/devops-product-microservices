import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCart = async () => {
    if (!localStorage.getItem("userId")) {
      alert("Please login first");
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:4003/carts/${JSON.parse(
          localStorage.getItem("userId")
        )}`
      );
      const data = await response.json();
      setCartItems(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const calculateTotal = () => {
    let sum = 0;
    cartItems.forEach((item) => {
      sum += item.product.price;
    });
    return sum;
  };

  return (
    <div className="cart-container">
      <h2 className="cart-heading">My Cart</h2>
      {isLoading && <h3>Loading...</h3>}
      {!isLoading &&
        cartItems.map((cart) => (
          <div key={cart.id} className="cart-item">
            <h2 className="cart-name">{cart.product.name}</h2>
            <p className="cart-price">${cart.product.price}</p>
            <p className="cart-quantity">Quantity: 1</p>
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
