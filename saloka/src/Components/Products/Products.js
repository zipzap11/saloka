import React from "react";
import { LinearProgress } from "@material-ui/core";
import Product from "./Product";
import { useSelector } from "react-redux";
import LinearLoading from "../LinearLoading";
import { Alert } from "@material-ui/lab";
import styles from "./Products.module.css";

function Products({
  products,
  itemPerline,
  loading,
  error,
  moreLoading,
  fetchMore,
}) {
  const status = useSelector((state) => state.products.status);
  const scrollHandler = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      fetchMore();
    }
  };

  if (status === "loading") {
    return <LinearLoading />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  if (loading) {
    return <LinearLoading />;
  }
  return (
    <div>
      <div
        className={styles.scroll}
        style={{ gridTemplateColumns: `repeat(${itemPerline}, 1fr)` }}
        onScroll={scrollHandler}
      >
        {products &&
          products.map((product, idx) => {
            return (
              <Product
                id={product.id}
                grid={12 / itemPerline}
                key={idx}
                img={product.image}
                name={product.title}
                price={product.price}
                sold={product.sold}
                link={`/product-detail/${product.id}`}
              />
            );
          })}
      </div>
      {moreLoading && <LinearProgress className={styles.loader} />}
    </div>
  );
}

export default Products;
