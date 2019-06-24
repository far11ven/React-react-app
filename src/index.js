import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import CounterInfo from "./components/counterInfo";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

const rootElement = document.getElementById("root");
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/items/:counterId" component={CounterInfo} />
    </div>
  </Router>
);

ReactDOM.render(routing, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
