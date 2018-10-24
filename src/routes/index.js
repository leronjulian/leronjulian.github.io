import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Hompage from "/Users/leronjulian 1/Desktop/updatedWebsite/src/components/Layouts.js";

export default () => (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Hompage} />
      </Switch>
    </HashRouter>
  );