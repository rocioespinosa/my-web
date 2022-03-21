import React from "react";
import Card from "../card";
import "./styles.css";

export default function CardHolder() {
  const cardsInfo = [
    {
      title: "MEXICO",
      flag: "https://cdn-icons-png.flaticon.com/512/390/390142.png",
      name: "CAFÉ DE OLLA",
      image:
        "https://laroussecocina.mx/wp-content/uploads/2018/01/Cafe-de-olla-001-Larousse-Cocina.jpg",
      ingredients: "1 tsp espresso",
      description:
        "Mexico is one of the largest exporters of organic certified coffee",
      color: "antiquewhite",
    },
    {
      title: "CUBA",
      flag: "https://cdn-icons.flaticon.com/png/512/5344/premium/5344491.png?token=exp=1647471516~hmac=76d50e2d3039f2e203970b226cc55d88",
      name: "CAFÉ CUBANO",
      image:
        "https://recetacubana.com/wp-content/uploads/2019/08/cafe-cubano-1024x1024.jpg",
      ingredients: "1 tsp espresso",
      description:
        " Drinking cortado is also common in other countries like Spain and Portugal.",
      color: "antiquewhite",
    },
    {
      title: "COLOMBIA",
      flag: "https://cdn-icons-png.flaticon.com/512/317/317153.png",
      name: "CORTADO",
      image:
        "https://perfectdailygrind.com/es/wp-content/uploads/sites/2/2020/03/Cortadito-1.png",
      ingredients: "1 tsp espresso",
      description:
        "  Eje Cafetero, also known as the Coffee Triangle, is Colombia's main coffee-growing region.",
      color: "antiquewhite",
    },
    {
      title: "BRAZIL",
      flag: "https://cdn-icons-png.flaticon.com/512/630/630591.png",
      name: "CAFEZINHO",
      image:
        "https://twigscafe.com/wp-content/uploads/2021/07/cup-of-black-coffee.jpg",
      ingredients: "1 tsp espresso",
      description: "..",
      color: "antiquewhite",
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

  function createIngredients(arr) {
    const ing_arr = [];

    for (let i = 0; i < arr.length; i++) {
      ing_arr.push(<li className="ingredients">.(...)</li>);
    }
    return ing_arr;
  }
  return (
    <div>
      {" "}
      <li className="ingredients">{createIngredients(cardsInfo)}</li>{" "}
      <div className="cardHolder-container">{createCards(cardsInfo)}</div>
    </div>
  );
}

