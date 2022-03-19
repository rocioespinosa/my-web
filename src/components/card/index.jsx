import React from "react";
import "./styles.css";

export default function Card({
  title,
  flag,
  name,
  image,
  ingredients,
  description,
}) {
  return (
    <div className="item1">
      <div className="title-mex-flag-container">
        <div className="title"> {title} </div>
        <div>
          <img className="flag" src={flag} alt="flag" />
        </div>
        <div className="name">{name}</div>
      </div>
      <div className="image-text-container1">
        <img className="image" src={image} alt="beans" />
        <ul className="ingredients">
          <li>cinnamon stick</li>
          <li> 1.5 cups water </li> <li>1.5 cups water </li>
          <li>1.5 tbsp piloncillo</li> <li>1 tbsp coffee</li>
        </ul>
      </div>
      <div className="belox-text-container-1">
        <span className="description">{description}</span>
      </div>
    </div>
  );
}
