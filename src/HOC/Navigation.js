import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <nav>
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/contact">
        <li>Contact</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
    </ul>
  </nav>
);

export default Navigation;
