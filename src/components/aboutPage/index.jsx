import React from "react";
import "./styles.css";

export default function index() {
  return (
    <div className="about-container">
      <div className="item1">
        <div className="mexico">MEXICO</div>

        <div className="image-text-container">
          <img
            className="mexico-image"
            src="https://www.littlecoffeeplace.com/wp-content/uploads/2020/07/Mexican-Coffee.jpg"
            alt="beans"
          />
          <span>texto provisorio</span>
        </div>
        <span>texto provisorio</span>
      </div>
      <div className="item2">Item 2</div>
      <div className="item3">Item 3</div>
      <div className="item4">Item 4</div>
    </div>
  );
}
