import React from "react";
import Link from "./Link";
import styles from "./Nav.module.css";

const Nav = ({ title }) => {
  const links = [
    { title: "Films", url: "https://swapi.dev/api/films/" },
    { title: "People", url: "https://swapi.dev/api/people/" },
    { title: "Planets", url: "https://swapi.dev/api/planets/" },
  ];

  return (
    <nav className={styles.nav}>
      {links.map((link) => (
        <Link key={link.title} link={link} />
      ))}
    </nav>
  );
};

export default Nav;
