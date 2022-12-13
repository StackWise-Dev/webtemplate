import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contatct from "./components/Contatct";
import Footer from "./components/Footer";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/components/services" element={<Services />} />
          <Route exact path="/components/about" element={<About />} />
          <Route exact path="/components/contact" element={<Contatct />} />
          <Route path="*" element={<Home />}></Route>
        </Routes>
        <Footer />
    </>
  );
}

export default App;
