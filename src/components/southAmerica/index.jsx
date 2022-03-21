import React from "react";
import Card from "../card";
import "./styles.css";

export default function CardHolder() {
  const cardsInfo = [
    {
      title: "MEXICO",
      flag: "https://cdn-icons-png.flaticon.com/512/390/390142.png",
      name: "café de olla",
      image:
        "https://laroussecocina.mx/wp-content/uploads/2018/01/Cafe-de-olla-001-Larousse-Cocina.jpg",
      ingredients: "1 tsp espresso",
      description: "..",
      color: "red",
    },
    {
      title: "CUBA",
      flag: "https://cdn-icons-png.flaticon.com/512/390/390142.png",
      name: "café de",
      image:
        "https://laroussecocina.mx/wp-content/uploads/2018/01/Cafe-de-olla-001-Larousse-Cocina.jpg",
      ingredients: "1 tsp espresso",
      description: "..",
      color: "red",
    },
    {
      title: "COLOMBIA",
      flag: "https://cdn-icons-png.flaticon.com/512/390/390142.png",
      name: "café de",
      image:
        "https://laroussecocina.mx/wp-content/uploads/2018/01/Cafe-de-olla-001-Larousse-Cocina.jpg",
      ingredients: "1 tsp espresso",
      description: "..",
      color: "red",
    },
    {
      title: "BRAZIL",
      flag: "https://cdn-icons-png.flaticon.com/512/390/390142.png",
      name: "café de",
      image:
        "https://laroussecocina.mx/wp-content/uploads/2018/01/Cafe-de-olla-001-Larousse-Cocina.jpg",
      ingredients: "1 tsp espresso",
      description: "..",
      color: "red",
    },
  ];

  function createCards(arr) {
    const new_arr = [];

    for (let i = 0; i < arr.length; i++) {
      new_arr.push(
        <Card
          className="cardHolder-card"
          title={cardsInfo[i].title}
          flag={cardsInfo[i].flag}
          name={cardsInfo[i].name}
          image={cardsInfo[i].image}
          ingredients={cardsInfo[i].ingredients}
          description={cardsInfo[i].description}
          color={cardsInfo[i].color}
        />
      );
    }

    return new_arr;
  }

  return <div className="cardHolder-container">{createCards(cardsInfo)}</div>;
}
