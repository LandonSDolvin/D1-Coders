import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { render } from "@testing-library/react";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home path="/" />
      </Router>
    </>
  );
}

export default App;
