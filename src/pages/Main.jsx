import React from "react";
import Header from "../components/Global/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Header} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default Main;
