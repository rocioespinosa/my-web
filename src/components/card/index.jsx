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

  const onLeftArrowClicked = () => {
    setSelectedInfo((selectedInfo - 1) % info.length);
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
        <img className="image" src={info[selectedInfo].image} alt="coffee" />
      </div>
      <ul className="ingredients">
        {createIngredients(info[selectedInfo].ingredients)}
      </ul>
      {info?.length > 1 && (
        <button className="right-arrow" onClick={onRightArrowClicked}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/7180/7180224.png"
            alt="right arrow"
            width="30px"
          />
        </button>
      )}

      {selectedInfo !== 0 && (
        <button className="left-arrow" onClick={onLeftArrowClicked}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/7180/7180213.png"
            alt="right arrow"
            width="30px"
          />
        </button>
      )}

      <div className="belox-text-container">
        <span className="description">{info[selectedInfo].description}</span>
      </div>
    </div>
  );
}
