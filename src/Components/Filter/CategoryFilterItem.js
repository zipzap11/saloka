import React from "react";
import { Divider, ListItem, ListItemText } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import styles from "./Filter.module.css";

function CategoryFilterItem({ cat, onClose }) {
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const nameFilter = queryParam.get("name");
  const locationFilter = queryParam.getAll("location");
  const priceFilter = queryParam.get("price");
  let link = location.pathname;

  if (location.search !== "") {
    link += "?";
    if (nameFilter !== "") {
      link += "name=" + nameFilter + "&";
    }
    if (locationFilter) {
      locationFilter.forEach((location) => {
        link += "location=" + location + "&";
      });
    }
    if (priceFilter) {
      link += "price=" + priceFilter + "&";
    }
    link += `category=${cat}`;
  } else {
    link += `?category=${cat}`;
  }
  return (
    <>
      <Link onClick={onClose} className={styles.link} to={link}>
        <ListItem button>
          <ListItemText primary={cat} />
        </ListItem>
        <Divider />
      </Link>
    </>
  );
}

export default CategoryFilterItem;
