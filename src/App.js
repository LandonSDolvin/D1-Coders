import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import JoinedGroups from "./components/pages/JoinedGroups";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home path="/" />
        <JoinedGroups path="/joinedgroups" />
      </Router>
    </>
  );
}

export default App;
