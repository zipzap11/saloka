import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import productImg from "../Assets/product.png";
import LinearLoading from "../Components/LinearLoading";
import Product from "../Components/ProductDetail/Product";
import ProductInfo from "../Components/ProductDetail/ProductInfo";
import ProductReview from "../Components/ProductDetail/ProductReview";
import StoreInfo from "../Components/ProductDetail/StoreInfo";

// const DUMMY = {
//   img: [productImg, productImg, productImg],
//   name: "Morbi in sed mattis enim nam sit dui sit eu.",
//   price: 9.99,
// };

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + productId)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setProduct(data);
      });
  }, [productId]);

  if (isLoading) {
    return <LinearLoading />;
  }
  return (
    <>
      <Product data={product} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "1.5rem",
        }}
      >
        <ProductInfo data={product} />
        <StoreInfo data={product} />
      </div>
      <ProductReview />
    </>
  );
}

export default ProductDetail;
