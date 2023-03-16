import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import fetchHandler from "../../utils/fetchHandler";

const ProductPage = (props) => {
  const { productId } = useParams();
  const [singleProduct, setSingleProduct] = useState({});

  const loadSingleProduct = async () => {
    const productResponse = await fetchHandler(
      `https://dummyjson.com/products/${productId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setSingleProduct(productResponse);
  };

  useEffect(() => {
    loadSingleProduct();
  }, []);

  return (
    <div>
      <Link to="/">Back to Home</Link>
      <h1>Product Page</h1>
      <p>Product page body content</p>
      {singleProduct && (
        <div>
          <h2>{singleProduct.title}</h2>
          <p>{singleProduct.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
