import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Hompage from "./Layout.js";

export default () => (
    <HashRouter>
      <Switch>
        <Route exact path="/leronjulian.github.io" component={Hompage} />
      </Switch>
    </HashRouter>
  );