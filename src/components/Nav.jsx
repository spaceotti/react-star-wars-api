import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = ({ title }) => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} to="/films">
        Films
      </Link>
      <Link className={styles.link} to="/people">
        People
      </Link>
      <Link className={styles.link} to="/planets">
        Planets
      </Link>
    </nav>
  );
};

export default Nav;
