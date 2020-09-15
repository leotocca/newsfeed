import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import News from "./views/News";

const Routes = () => (
  <Switch>
    <Route path="/news">
      <News />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default Routes;
