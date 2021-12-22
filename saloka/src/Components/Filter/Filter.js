import { Card } from "@material-ui/core";
import React from "react";
import { ReactComponent as FilterIcon } from "../../Assets/filter.svg";
import LocationFilter from "./LocationFilter";
import style from "./Filter.module.css";
import CategoryFilter from "./CategoryFilter";
import PriceFIlter from "./PriceFIlter";

function Filter() {
  return (
    <aside className={style.contain}>
      <Card className={style.card}>
        <h3>
          <FilterIcon />
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
