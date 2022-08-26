import React from "react";
import styles from "./Header.module.css";
import Nav from "./Nav";

const Header = ({ title }) => {
  return (
    <div className={styles.masthead}>
      <h1>Company name</h1>
      <Nav title={title} />
    </div>
  );
};

export default Header;
