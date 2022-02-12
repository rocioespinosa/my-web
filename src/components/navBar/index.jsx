import React from "react";
import "./styles.css";

export default function index() {
  return (
    <div>
      <div className="topNav">
        <a className="active" href="#home">
          Home
        </a>
        &nbsp;
        <a href="#news">Men</a> &nbsp;
        <a href="#contact">Women</a>&nbsp;
        <a href="#about">Inspiration</a>
      </div>
    </div>
  );
}
