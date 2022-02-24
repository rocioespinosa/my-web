import React from "react";
import "./styles.css";

export default function index() {
  const handleClick = (scrollToId) => {
    document.getElementById(scrollToId).scrollIntoView({
      behavior: "smooth", 
    });
  };

  return (
    <div className="topNav">
      <span onClick={() => handleClick("landing")}>Home</span>
      &nbsp;
      <span onClick={() => handleClick("about")}>About</span> &nbsp;
      <span onClick={() => handleClick("women")}>Women</span>&nbsp;
      <span onClick={() => handleClick("inspiration")}>Inspiration</span>
    </div>
  );
}
