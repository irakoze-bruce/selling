/** @format */

import React from "react";
import NavBar from "../components/Navigation-bar/NavBar";
import Logo from "../Logo";
import Shop from "../Shop";
import About from "../About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Banner from "../components/banner/Banner";
import Product from "../components/products/Product";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Banner />
        <Product />
      </Router>
    </div>
  );
}

export default App;
