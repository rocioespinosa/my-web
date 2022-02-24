import React from "react";
import "./styles.css";

export default function index() {
  return (
    <div className="landing-container" id="landing">
      <div className="main-content">
        <div className="heading">
          <h1 id="heading1">Fall 2022 </h1>
          <h2 id="heading2">The Row</h2>

          <div className="short-bio">
            <p>
              Focusing on exceptional fabrics, impeccable details, and precise
              tailoring, the house combines a timeless perspective with subtle
              attitudes which form an irreverent classic signature. The Row’s
              collections also explore the strength of simplistic shapes that
              speak to discretion and are based on uncompromising quality.
            </p>
            {/* Text taken from The Row's official website*/}
          </div>
        </div>

        <img
          className="outfit-image"
          src="https://www.therow.com/cloud/therowwp/uploads/2022/01/Look_8_The_Row_FW22_WRTW-scaled.jpg?imdensity=1&imwidth=654&impolicy=therow"
          alt="The Row Fall 2022 outfit."
        />

        {/* Image taken from The Row's official website*/}
      </div>
    </div>
  );
}
