import React from "react";
import List from "./List";
import styles from "./SearchResults.module.css";

const SearchResults = ({ results, type }) => {
  const formattedData = results.map((item, idx) => {
    const obj = {
      original: item,
    };
    switch (type) {
      case "films":
        obj.ref = item.episode_id;
        obj.title = item.title;
        obj.txt = item.release_date;
        break;
      case "planets":
        break;
      case "people":
        break;
    }
    return obj;
  });

  return (
    <div className={styles.results}>
      <List data={formattedData} />
    </div>
  );
};

export default SearchResults;

/* 
<ul className={styles.results}>
      {results.map((item) => (
        <li key={item.episode_id}>{item.title}</li>
      ))}
    </ul> */
