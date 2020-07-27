/** @format */

import React from "react";
import NavBar from "../components/Navigation-bar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Banner from "../components/banner/Banner";
import Product from "../components/products/Product";
import ProductAbout from "../components/products/productAbout/ProductAbout";
import Menu from "../components/Navigation-bar/header-menu/menu/Menu";
import About from "../components/Navigation-bar/header-menu/menu/About";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Banner />
        <Product />
        <ProductAbout />
      </Router>
    </div>
  );
}

export default App;
