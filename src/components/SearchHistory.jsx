import React from "react";
import List from "./List";
import styles from "./SearchHistory.module.css";

const SearchHistory = ({ terms }) => {
  const formattedData = terms.map((item, idx) => {
    return {
      ref: idx + 1,
      title: item,
      txt: null,
    };
  });
  return (
    <div className={styles.history}>
      <List data={formattedData} />
    </div>
  );
};

export default SearchHistory;

{
  /* <ul className={styles.history}>
      {terms.map((term, idx) => (
        <li key={idx}>{term}</li>
      ))}
    </ul> */
}
