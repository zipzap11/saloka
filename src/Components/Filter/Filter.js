import { Card } from "@material-ui/core";
import React from "react";
import FilterListIcon from "@material-ui/icons/FilterList";
import LocationFilter from "./LocationFilter";
import style from "./Filter.module.css";
import CategoryFilter from "./CategoryFilter";
import PriceFIlter from "./PriceFilter";

function Filter() {
  return (
    <aside className={style.contain}>
      <Card className={style.card}>
        <h3>
          <FilterListIcon />
          Filter
        </h3>
        <LocationFilter />
        <CategoryFilter />
        <PriceFIlter />
      </Card>
    </aside>
  );
}

export default Filter;
