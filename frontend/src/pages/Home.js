import React, { useEffect, useState } from "react";
import Product from "../components/Product";

const Home = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "product1", price: 100 },
    { id: 2, name: "product2", price: 102 },
    { id: 3, name: "product3", price: 103 },
    { id: 4, name: "product4", price: 104 },
    { id: 5, name: "product5", price: 105 },
    { id: 6, name: "product6", price: 106 },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("https://localhost");
      const users = await response.json();
      setProducts(users);
      setIsLoading(false);
    } catch (err) {
      console.log("There was an error " + err);
    }
  };

  useEffect(() => {
    // fetchProducts();
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
