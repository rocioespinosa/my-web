import React from "react";
import "./styles.css";

export default function index() {
  const handleClick = (scrollToId) => {
    document.getElementById(scrollToId).scrollIntoView({
      behavior: "smooth", // gives an ease-in-out effect to our scroll
    });
  };

  return (
    <div className="topNav">
      <span onClick={() => handleClick("landing")}>Home</span>
      &nbsp;
      <span onClick={() => handleClick("men")}>Men</span> &nbsp;
      <span onClick={() => handleClick("women")}>Women</span>&nbsp;
      <span onClick={() => handleClick("inspiration")}>Inspiration</span>
    </div>
  );
}
