import React from "react";
import "./styles.scss";

export default function index() {
  return (
    <div class="container" id="landing">
      <div class="container-inner">
        <div class="main-content">
          <div class="main-headings" id="main-headings-js">
            <div class="heading">
              <h3 id="heading1">Fall 2022 </h3>
              <h1 id="heading2">The Row</h1>
            </div>
            <div class="short-bio">
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
        </div>

        <div class="image-wrapper">
          <div class="image-container">
            <img
              class="image"
              src="https://www.therow.com/cloud/therowwp/uploads/2022/01/Look_8_The_Row_FW22_WRTW-scaled.jpg?imdensity=1&imwidth=654&impolicy=therow"
              alt="The Row Fall 2022 outfit."
            />

            {/* Image taken from The Row's official website*/}
          </div>
        </div>
      </div>
    </div>
  );
}
