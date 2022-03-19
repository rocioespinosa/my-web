import React from "react";
import Card from "../card";
import "./styles.css";

export default function CardHolder() {
  const cardsInfo = [
    {
      title:
        "https://tmssl.akamaized.net/images/foto/galerie/alfredo-di-stefano-legende-von-real-madrid-1543500967-19025.jpg?lm=1543500978",
      flag: "https://cdn-icons-png.flaticon.com/512/390/390142.png",
      name: "café de olla",
      image:
        "https://laroussecocina.mx/wp-content/uploads/2018/01/Cafe-de-olla-001-Larousse-Cocina.jpg",
      ingredients: "1 tsp espresso",
      description: "..",
    },
    {
      title:
        "https://tmssl.akamaized.net/images/foto/galerie/alfredo-di-stefano-legende-von-real-madrid-1543500967-19025.jpg?lm=1543500978",
      flag: "https://cdn-icons-png.flaticon.com/512/390/390142.png",
      name: "café de",
      image:
        "https://laroussecocina.mx/wp-content/uploads/2018/01/Cafe-de-olla-001-Larousse-Cocina.jpg",
      ingredients: "1 tsp espresso",
      description: "..",
    },
    {
      title:
        "https://tmssl.akamaized.net/images/foto/galerie/alfredo-di-stefano-legende-von-real-madrid-1543500967-19025.jpg?lm=1543500978",
      flag: "https://cdn-icons-png.flaticon.com/512/390/390142.png",
      name: "café de",
      image:
        "https://laroussecocina.mx/wp-content/uploads/2018/01/Cafe-de-olla-001-Larousse-Cocina.jpg",
      ingredients: "1 tsp espresso",
      description: "..",
    },
    {
      title:
        "https://tmssl.akamaized.net/images/foto/galerie/alfredo-di-stefano-legende-von-real-madrid-1543500967-19025.jpg?lm=1543500978",
      flag: "https://cdn-icons-png.flaticon.com/512/390/390142.png",
      name: "café de",
      image:
        "https://laroussecocina.mx/wp-content/uploads/2018/01/Cafe-de-olla-001-Larousse-Cocina.jpg",
      ingredients: "1 tsp espresso",
      description: "..",
    },
  ];

  return (
    <div className="cardHolder-container">
      <Card
        className="cardHolder-card"
        title={cardsInfo[0].title}
        flag={cardsInfo[0].flag}
        name={cardsInfo[0].name}
        image={cardsInfo[0].image}
        ingredients={cardsInfo[0].ingredients}
        description={cardsInfo[0].description}
      />
    </div>
  );
}