import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Hompage from "./Layout.js";

export default () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Hompage} />
        
      </Switch>
    </BrowserRouter>
  );