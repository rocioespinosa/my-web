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
    <div>
      <div className="card">
        <h1 class="title">{title}</h1>
        <p class="flag">{flag}</p>
        <p class="name">{name}</p>
        <p class="image">{image}</p>
        <p class="ingredients">{ingredients}</p>
        <p class="description">{description}</p>
      </div>
    </div>
  );
}
