import React from "react";
import "./styles.css";

export default function index() {
  const handleClick = (scrollToId) => {
    document.getElementById(scrollToId).scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  };

  return (
    <div className="topNav">
      <div
        id="landingPage"
        className="navstyle"
        onClick={() => handleClick("landingPage")}
      >
        Home
      </div>
      &nbsp;
      <div
        id="america"
        className="navstyle"
        onClick={() => handleClick("america")}
      >
        America
      </div>
      &nbsp;
      <div
        id="europe"
        className="navstyle"
        onClick={() => handleClick("europe")}
      >
        Europe
      </div>
      &nbsp;
      <div
        id="africa"
        className="navstyle"
        onClick={() => handleClick("africa")}
      >
        Africa
      </div>
      &nbsp;
      <div id="asia" className="navstyle" onClick={() => handleClick("asia")}>
        Asia
      </div>
    </div>
  );
}
