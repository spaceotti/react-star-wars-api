import React from "react";
import styles from "./ListItem.module.css";

const ListItem = ({ data }) => {
  return (
    <li className={styles.listitem} data-ref={data.ref}>
      <h2 className={styles.title}>{data.title}</h2>
      {data.txt && <p>{data.txt}</p>}
    </li>
  );
};

export default ListItem;
