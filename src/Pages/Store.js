import React, { useCallback, useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import ProfileHeader from "../Components/Store/ProfileHeader";
import Etalase from "../Components/Store/Etalase";
import Sorter from "../Components/Sorter/Sorter";
import Products from "../Components/Products/Products";
import { useParams } from "react-router-dom";
import LinearLoading from "../Components/LinearLoading";
import { Alert } from "@material-ui/lab";
import avatar from "../Assets/avatar.png";
import banner from "../Assets/banner.png";
import FilterSorter from "../Components/FilterSorter/FilterSorter";

const DUMMY = {
  banner: banner,
  avatar: avatar,
  namaToko: "Cud Store",
  adderss: "Jakarta Pusat",
  followers: "5400",
  stars: 4.5,
  sold: 2000,
};

function Store() {
  const { storeId } = useParams();
  const [data, setData] = useState();
  const [products, setProducts] = useState([]);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 965);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const [error, setError] = useState("");
  const [errorProducts, setErrorProducts] = useState("");

  const [sortPrice, setSortPrice] = useState();
  const [sortSold, setSortSold] = useState();
  const [sortRating, setSortRating] = useState();

  const [etalase, setEtalase] = useState();

  window.addEventListener("resize", () => {
    setIsMobile(window.innerWidth < 965);
  });

  const fetchMore = () => {
    setIsLoadingMore(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts((prev) => [...prev, ...data]);
        setIsLoadingMore(false);
      })
      .catch((err) => {
        setErrorProducts(err.message);
        setIsLoadingMore(false);
      });
  };

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

  const etalaseChangeHandler = (etal) => {
    setEtalase(etal);
  };

  useEffect(() => {
    // fetch data toko
    setIsLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    // fetch produk toko
    // tambah query sorting
    let link = "https://fakestoreapi.com/products?";
    // tambah query etalase
    // if (etalase !== "") link += "/etalase"
    if (sortPrice) {
      link += "sort=" + sortPrice + "&";
    }
    // if (sortSold) {
    //   link += "sold=" + sortSold + "&";
    // }
    // if (sortRating) {
    //   link += "sold" + sortRating + "&";
    // }
    link = link.substring(0, link.length - 1);

    setIsLoadingProducts(true);

    fetch(link)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoadingProducts(false);
      })
      .catch((err) => {
        setErrorProducts(err.message);
        setIsLoadingProducts(false);
      });
  }, [sortPrice, sortRating, sortSold, etalase]);

  if (isLoading) {
    return <LinearLoading />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <Grid container spacing={3}>
      <Grid item md={12}>
        <ProfileHeader data={DUMMY} />
      </Grid>
      {!isMobile && (
        <Grid item md={3}>
          <Etalase onChange={etalaseChangeHandler} data={DUMMY} />
        </Grid>
      )}
      <Grid container item md={isMobile ? 12 : 9}>
        {!isMobile && <Sorter onSort={sortHandler} />}
        {isMobile && (
          <Grid item sm={12} style={{ marginBottom: "1rem" }}>
            <FilterSorter />
          </Grid>
        )}
        <Products
          loading={isLoadingProducts}
          error={errorProducts}
          products={products}
          moreLoading={isLoadingMore}
          fetchMore={fetchMore}
          type="filter"
        />
      </Grid>
    </Grid>
  );
}

export default Store;
