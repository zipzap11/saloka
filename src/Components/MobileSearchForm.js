import React, { useRef } from "react";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./Header.module.css";

function MobileSearchForm({ onSearch }) {
  const searchRef = useRef();
  function submitHandler(e) {
    e.preventDefault();
    onSearch(searchRef.current.value);
  }
  return (
    <form onSubmit={submitHandler} className={styles["mobileSearch"]}>
      <input ref={searchRef} type="text" placeholder="Search" />
      <SearchIcon className={styles.searchIcon} onClick={submitHandler} />
    </form>
  );
}

export default MobileSearchForm;
