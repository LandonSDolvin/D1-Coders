import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1 className="prospect">PROSPECT</h1>
      <p className="innovative">An Innovative Way to Manage Candidate Pools</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          ABOUT
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          HAVE A CODE?
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
