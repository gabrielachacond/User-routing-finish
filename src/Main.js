import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";

const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route path="/users" component={Users} />
        <Route exact path="/" component={Home} />
      </Switch>
    </main>
  );
};

export default Main;
