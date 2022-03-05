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
      <span onClick={() => handleClick("landing")}>Home</span> &nbsp;
      <span onClick={() => handleClick("AboutPage")}> About </span> &nbsp;
      <span onClick={() => handleClick("Women")}>Women</span>&nbsp;
      <span onClick={() => handleClick("Inspiration")}>Inspiration</span>
      &nbsp;
    </div>
  );
}
