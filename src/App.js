import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import JoinedGroups from "./components/pages/JoinedGroups";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <JoinedGroups path="/joinedgroups" component={JoinedGroups} />
      </Router>
    </>
  );
}

export default App;
