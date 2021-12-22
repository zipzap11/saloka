import React, { useEffect, useState } from "react";
import style from "./Recommendation.module.css";
import { useDispatch } from "react-redux";
import { Alert } from "@material-ui/lab";
import { productsActions } from "../../Redux/products-slice";
import Products from "../Products/Products";

function Recommendations() {
  const dispatch = useDispatch();
  dispatch(productsActions.setErorr(""));
  const [moreLoading, setMoreLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  function fetchMore() {
    setMoreLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts((prev) => [...prev, ...data]);
        setMoreLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setMoreLoading(false);
      });
  }

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProducts(data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, [dispatch]);

  if (error) {
    return (
      <div className={style.contain}>
        <Alert severity="error">Something went wrong</Alert>
      </div>
    );
  }

  return (
    <div className={style.contain}>
      <h2>Rekomendasi</h2>
      <Products
        loading={loading}
        fetchMore={fetchMore}
        moreLoading={moreLoading}
        products={products}
        itemPerline={6}
      />
    </div>
  );
}

export default Recommendations;
