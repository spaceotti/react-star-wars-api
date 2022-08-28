import React from "react";
import styles from "./Main.module.css";
import { Switch, Route } from "react-router-dom";
import Films from "./Films";
import People from "./People";
import Planets from "./Planets";
import Home from "./Home";

const Main = () => {
  return (
    <div className={styles.mainContent}>
      <Switch>
        <Route path="/films">
          <Films />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/planets">
          <Planets />
        </Route>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
};

export default Main;
