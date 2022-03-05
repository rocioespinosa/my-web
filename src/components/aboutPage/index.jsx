import React from "react";
import "./styles.css";

export default function index() {
  return (
    <div className="about-container">
      <div className="item1">
        <div className="mexico">MEXICO</div>
        <img
          className="cafe1"
          src="https://dam.cocinafacil.com.mx/wp-content/uploads/2019/08/cafe-de-olla.jpg"
          alt="cafe1"
        ></img>
      </div>
      <div className="item2">Item 2</div>
      <div className="item3">Item 3</div>
      <div className="item4">Item 4</div>
    </div>
  );
}
