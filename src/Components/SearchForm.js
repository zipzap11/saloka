import React, { useRef } from "react";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./Header.module.css";

function SearchForm({ onSearch }) {
  const searchRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    onSearch(searchRef.current.value);
  }

  return (
    <form onSubmit={submitHandler} className={styles["search-bar"]}>
      <input ref={searchRef} type="text" placeholder="Search" />
      <SearchIcon className={styles.searchIcon} onClick={submitHandler} />
    </form>
  );
}

export default SearchForm;
