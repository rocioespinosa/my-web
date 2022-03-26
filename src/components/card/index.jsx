import React, { useState } from "react";
import "./styles.css";

export default function Card({ title, flag, info, color }) {
  function createIngredients(arr) {
    const ing_arr = [];

    for (let i = 0; i < arr.length; i++) {
      ing_arr.push(<li className="ingredients">{arr[i]}</li>);
    }
    return ing_arr;
  }

  const [selectedInfo, setSelectedInfo] = useState(0);

  const onRightArrowClicked = () => {
    setSelectedInfo((selectedInfo + 1) % info.length);
  };

  return (
    <div className="card" style={{ backgroundColor: color }}>
      <div className="title-name-flag-container">
        <div className="title"> {title} </div>
        <div>
          <img className="flag" src={flag} alt="flag" />
        </div>
        <div className="name">{info[selectedInfo].name}</div>
      </div>
      <div className="image-text-container">
        <img className="image" src={info[selectedInfo].image} alt="..." />
      </div>
      <ul className="ingredients">
        {createIngredients(info[selectedInfo].ingredients)}
      </ul>
      {info?.length > 1 && (
        <button onClick={onRightArrowClicked}>
          <img
            src="https://previews.123rf.com/images/eljanstock/eljanstock1811/eljanstock181109660/111791312-right-arrow-vector-icon-isolated-on-transparent-background-right-arrow-transparency-logo-concept.jpg"
            alt="right arrow"
            width="40px"
          />
        </button>
      )}
      <div className="belox-text-container">
        <span className="description">{info[selectedInfo].description}</span>
      </div>
    </div>
  );
}
