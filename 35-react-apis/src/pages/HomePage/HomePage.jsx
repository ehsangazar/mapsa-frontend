import { useEffect, useState } from "react";
import fetchHandler from "../../utils/fetchHandler";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);

  const loadProducts = async () => {
    const response = await fetchHandler("https://dummyjson.com/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setProducts(response.products);
    setTotal(response.total);
    setSkip(response.skip);
    setLimit(response.limit);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Home page body content</p>
      <Link to="/login">Login</Link>

      <h2>Product Lists</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <Link to={`/product/${product.id}`}>View Product</Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
