import React from "react";
import Header from "../components/Global/Header";
import { Route, Router, Switch } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header />
      <Router>
        <Route exact path="/" component={Header} />
      </Router>
    </div>
  );
};

export default Main;
