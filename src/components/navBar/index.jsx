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
      <span className="navstyle" onClick={() => handleClick("landing")}>
        Home
      </span>{" "}
      &nbsp;
      <span className="navstyle" onClick={() => handleClick("SouthAmerica")}>
        {" "}
        South America{" "}
      </span>{" "}
      &nbsp;
      <span className="navstyle" onClick={() => handleClick("Europe")}>
        Europe
      </span>
      &nbsp;
      <span className="navstyle" onClick={() => handleClick("Africa")}>
        Africa
      </span>
      &nbsp;
      <span className="navstyle" onClick={() => handleClick("Asia")}>
        Asia
      </span>
    </div>
  );
}
