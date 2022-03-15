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
            src="https://laroussecocina.mx/wp-content/uploads/2018/01/Cafe-de-olla-001-Larousse-Cocina.jpg"
            alt="beans"
          />
          <ul className="mexico-text-right">
            <li>cinnamon stick</li>
            <li> 1.5 cups water </li> <li>1.5 cups water </li>
            <li>1.5 tbsp piloncillo</li> <li>1 tbsp coffee</li>
          </ul>
        </div>
        <span className="mexico-text-below">
          Mexico is one of the largest exporters of organic certified coffee
        </span>
      </div>
      <div className="item2">Item 2</div>
      <div className="item3">Item 3</div>
      <div className="item4">Item 4</div>
    </div>
  );
}
