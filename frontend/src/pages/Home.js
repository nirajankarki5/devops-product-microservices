import React, { useEffect, useState } from "react";
import Product from "../components/Product";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchProducts = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:4002/products");
      const users = await response.json();
      setProducts(users);
      setIsLoading(false);
    } catch (err) {
      console.log("There was an error " + err);
    }
  };

  useEffect(() => {
    fetchProducts();

    if (localStorage.getItem("userId")) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  return (
    <>
      <div className="home-container">
        {isLoading && <h3>Loading...</h3>}
        {!isLoading &&
          products.map((product) => {
            return (
              <div key={product._id}>
                <Product product={product} />
              </div>
            );
          })}
      </div>
      {isLoggedIn && (
        <div className="btn-logout">
          <button
            onClick={() => {
              localStorage.clear();
              setIsLoggedIn(false);
            }}
          >
            Log Out
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
