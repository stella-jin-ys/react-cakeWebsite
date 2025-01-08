import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products, { Product } from "./pages/Products";
import Contact from "./pages/Contact";
import Payment from "./pages/Payment";
import { useState } from "react";

export default function App() {
  return (
    <Router>
      <div id="home">
        <Home />
      </div>
      <div id="products">
        <Products />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </Router>
  );
}
