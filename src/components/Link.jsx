import React from "react";
import styles from "./Link.module.css";

const Link = ({ link }) => {
  const { title, url } = link;
  return (
    <>
      <a className={styles.link} href={url}>
        {title}
      </a>
    </>
  );
};

export default Link;
