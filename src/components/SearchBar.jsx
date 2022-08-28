import React, { useEffect, useRef } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ term, addTerm }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTerm(e.target["keyword"].value);
  };

  return (
    <section className={styles.searchBar}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="keyword"
          ref={inputRef}
          name="keyword"
          className={styles.searchText}
        />
        <button className={styles.searchBtn}>Search</button>
      </form>
      {term && <p>Last search: {term}</p>}
    </section>
  );
};

export default SearchBar;
