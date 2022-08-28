import React from "react";
import styles from "./List.module.css";
import ListItem from "./ListItem";

const List = ({ data }) => {
  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <ListItem key={item.ref} data={item} />
      ))}
    </ul>
  );
};

export default List;
