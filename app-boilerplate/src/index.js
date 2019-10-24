import ReactDOM from "react-dom";
import React from "react";
import { Route, Router } from "react-router-dom";

import "./styles/App.css";

import history from "./utils/history";
import Login from "./components/Auth/Login";

const mainRoutes = (
  <Router history={history}>
    <Route
      path="/"
      render={props => (<Login {...props} />)}
    />
  </Router>
);

ReactDOM.render(mainRoutes, document.getElementById("root"));
