import React from "react";
import ReactDOM from "react-dom";
import Home from "./Components/Home.js";
import Layout from "./HOC/Layout.js";

import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
