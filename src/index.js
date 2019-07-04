import React from "react";
import ReactDOM from "react-dom";
import Home from "./Components/Home.js";
import Contact from "./Components/Contact.js";
import About from "./Components/About";
import Error from "./Components/Error";
import Navigation from "./HOC/Navigation.js";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
