import { Grid } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import Filter from "../Components/Filter/Filter";
import Sorter from "../Components/Sorter/Sorter";
import Products from "../Components/Products/Products";
import { useLocation } from "react-router-dom";

function Search() {
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const nameSearch = queryParam.get("name");
  const categoryFilter = queryParam.get("category");
  const locationFilter = queryParam.get("location");
  const priceFilter = queryParam.get("price");

  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const [sortPrice, setSortPrice] = useState();
  const [sortSold, setSortSold] = useState();
  const [sortRating, setSortRating] = useState();

  const sortHandler = useCallback((sortMode, type) => {
    if (type === "Harga") {
      if (sortMode === "Harga Tertinggi") {
        setSortPrice("desc");
      } else {
        setSortPrice("asc");
      }
    } else if (type === "Terjual") {
      if (sortMode === "Paling Banyak Terjual") {
        setSortSold("asc");
      } else {
        setSortSold("desc");
      }
    } else if (type === "Rating") {
      if (sortMode === "Rating Tertinggi") {
        setSortRating("desc");
      } else {
        setSortRating("asc");
      }
    }
  }, []);

  // const buildLink = () => {};

  const fetchMore = () => {
    setLoadingMore(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts((prev) => [...prev, ...data]);
        setLoadingMore(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoadingMore(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    let link = "https://fakestoreapi.com/products";
    if (categoryFilter) {
      link += `/category/${categoryFilter}`;
    }
    if (nameSearch) {
      link += `?name=${nameSearch}&`;
    }
    if (locationFilter) {
    }
    if (sortPrice) {
      link += `sort=${sortPrice}&`;
    }
    // if (sortSold) {
    //   link += `sold=${sortSold}&`
    // }
    // if (sortRating) {
    //   link += `rating=${sortRating}&`
    // }
    if (link.charAt === "&") {
      link = link.substring(0, link.length - 1);
    }
    fetch(link)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setProducts(data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, [
    categoryFilter,
    locationFilter,
    priceFilter,
    nameSearch,
    sortPrice,
    sortSold,
    sortRating,
  ]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={3}>
        <Filter />
      </Grid>
      <Grid item xs={12} sm={9}>
        <Sorter onSort={sortHandler} />
        <Products
          error={error}
          loading={loading}
          fetchMore={fetchMore}
          moreLoading={loadingMore}
          itemPerline={4}
          products={products}
        />
      </Grid>
    </Grid>
  );
}

export default Search;
