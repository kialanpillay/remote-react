import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Coronavirus from "./pages/Coronavirus";
import Investing from "./pages/Investing";
import News from "./pages/News";
import Weather from "./pages/Weather";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/coronavirus">
            <Coronavirus />
          </Route>
          <Route exact path="/investing">
            <Investing />
          </Route>
          <Route exact path="/news">
            <News />
          </Route>

          <Route exact path="/weather">
            <Weather />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
