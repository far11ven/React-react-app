import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import Main from "./components/main";
import Cart from "./components/cart";
import Counters from "./components/counters";
import Counter from "./components/counter";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

const rootElement = document.getElementById("root");
const routing = (
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/cart" component={App} />
    <Route path="/items" component={App} />
    <Route path="/items/:id" component={App} />
  </Router>
);

ReactDOM.render(routing, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
