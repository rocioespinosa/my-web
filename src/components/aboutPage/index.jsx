import React from "react";
import "./styles.css";

export default function AboutPage() {
  return (
    <div>
      <div className="about-container" id="about">
        About Page
      </div>

      <div class="image-container">
        <img
          className="image"
          src="https://cdn1.savoirflair.com/pictures/w/450/1/95/ffffff/wp-content/uploads/2020/06/Mary-Kate-Ashley-Olsen-The-ROW-NAP.jpg?x88026"
          alt="olsenTwins"
        ></img>
        {/*Photo: Courtesy of Net-a-Porter*/}
      </div>
      <div className="description">
        {" "}
        <span>
          {" "}
          The Row was established in 2006 by Ashley Olsen and Mary-Kate Olsen.
          The idea for the brand started as a personal project in 2005 when
          Ashley Olsen challenged herself to create a perfect T-shirt. She
          tested the design on a variety of women of all body shapes and ages in
          an attempt to find a "commonality in fit and attitude".
        </span>
      </div>
    </div>
  );
}
