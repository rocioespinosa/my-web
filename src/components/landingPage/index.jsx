import React from "react";
import "./styles.css";

export default function index() {
  return (
    <div className="home-container">
      <div className="left-h-container">
        <h1> Coffee from the world</h1>
        <div className="line"></div>
        <h2>
          Explore the different kinds of coffee from all around the world and
          how each country prepares it.
        </h2>
      </div>
      <div className="right-h-container">
        <div className="half-h-containers"></div>
      </div>
    </div>
  );
}
