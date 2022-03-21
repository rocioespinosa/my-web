import React from "react";
import "./styles.css";

export default function Card({
  title,
  flag,
  name,
  image,
  ingredients,
  description,
  color,
}) {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <div className="title-name-flag-container">
        <div className="title"> {title} </div>
        <div>
          <img className="flag" src={flag} alt="flag" />
        </div>
        <div className="name">{name}</div>
      </div>
      <div className="image-text-container">
        <img className="image" src={image} alt="beans" />
        <ul className="ingredients">
          <li>cinnamon stick</li>
          <li> 1.5 cups water </li> <li>1.5 cups water </li>
          <li>1.5 tbsp piloncillo</li> <li>1 tbsp coffee</li>
        </ul>
      </div>
      <div className="belox-text-container">
        <span className="description">{description}</span>
      </div>
    </div>
  );
}
