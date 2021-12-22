import {
  Backdrop,
  Button,
  Fade,
  makeStyles,
  Modal,
  Paper,
} from "@material-ui/core";
import React, { useState } from "react";
import FilterListIcon from "@material-ui/icons/FilterList";
import SortIcon from "@material-ui/icons/Sort";
import style from "./FilterSorter.module.css";
import CategoryFilter from "../Filter/CategoryFilter";
import LocationFilter from "../Filter/LocationFilter";
import PriceFilter from "../Filter/PriceFilter";
import Sorter from "../Sorter/Sorter";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxWidth: "80%",
    minWidth: "100px",
    display: "flex",
    flexDirection: "column",
  },
}));

function FilterSorter({ onSort }) {
  const classes = useStyles();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  function handleFilterOpen() {
    setFilterOpen(true);
  }
  function handleFilterClose() {
    setFilterOpen(false);
  }
  function handleSortOpen() {
    setSortOpen(true);
  }
  function handleSortClose() {
    setSortOpen(false);
  }

  return (
    <div className={style.btnWrapper}>
      <Button
        onClick={handleFilterOpen}
        startIcon={<FilterListIcon />}
        variant="outlined"
      >
        Filter
      </Button>
      <Button
        onClick={handleSortOpen}
        startIcon={<SortIcon />}
        variant="outlined"
      >
        Sort
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={filterOpen}
        className={classes.modal}
        onClose={handleFilterClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
        }}
      >
        <Fade in={filterOpen}>
          <Paper className={classes.paper}>
            <LocationFilter onClose={handleFilterClose} />
            <CategoryFilter onClose={handleFilterClose} />
            <PriceFilter onClose={handleFilterClose} />
          </Paper>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={sortOpen}
        className={classes.modal}
        onClose={handleSortClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
        }}
      >
        <Fade in={sortOpen}>
          <Paper className={classes.paper}>
            <Sorter onClose={handleSortClose} onSort={onSort} />
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}

export default FilterSorter;
