import React, { useEffect, useState } from "react";
import Product from "../components/Product";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
  }, []);

  return (
    <div className="home-container">
      {isLoading && <h3>Loading...</h3>}
      {!isLoading &&
        products.map((product) => {
          return (
            <div key={product.id}>
              <Product product={product} />
            </div>
          );
        })}
    </div>
  );
};

export default Home;
