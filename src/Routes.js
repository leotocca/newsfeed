import React from "react";
import { Switch, Route } from "react-router-dom";
import News from "./views/News";

const Routes = () => (
  <Switch>
    <Route path="/:id" children={<News />} />
    <Route exact path="/">
      <News />
    </Route>
  </Switch>
);

export default Routes;
