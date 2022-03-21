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
      </div>
      <div className="ingredients">{ingredients}</div>
      <div className="belox-text-container">
        <span className="description">{description}</span>
      </div>
    </div>
  );
}
