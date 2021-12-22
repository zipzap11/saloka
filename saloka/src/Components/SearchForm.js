import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./Header.module.css";

function SearchForm() {
  const serachRef = useRef();
  const history = useHistory();
  function submitHandler(e) {
    e.preventDefault();
    const searchQuery = serachRef.current.value;
    if (searchQuery.trim().length === 0) return;
    history.push("/search?name=" + searchQuery);
  }
  return (
    <form onSubmit={submitHandler} className={styles["search-bar"]}>
      <input ref={serachRef} type="text" placeholder="Search" />
      <SearchIcon className={styles.searchIcon} onClick={submitHandler} />
    </form>
  );
}

export default SearchForm;
