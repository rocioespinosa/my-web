import React from "react";
import Card from "../card";
import "./styles.css";

export default function CardHolder() {
  const cardsInfo = [
    {
      title: "ITALY",
      flag: "https://cdn-icons-png.flaticon.com/512/321/321240.png",
      name: "MARROCHINO",
      image:
        "https://eltrebolcafe.com.ar/wp-content/uploads/2021/05/marocchino.adapt_.png",
      ingredients: ["cocoa powder", "1 part milk", "small shot espresso"],
      description:
        "It is customary to drink milky coffee in the morning, never after a meal.",
      color: "antiquewhite",
    },
    {
      title: "GERMANY",
      flag: "https://cdn-icons-png.flaticon.com/128/321/321233.png",
      name: "PHARISÄER",
      image:
        "https://i.pinimg.com/originals/4e/7b/d0/4e7bd06f6588518e15b1d46de04ffa79.jpg",
      ingredients: [
        "whipped cream",
        "1 cube sugar",
        "2 shots of rum",
        "1/4 cup black coffee",
      ],
      description:
        "Germany is the second highest importer in the world, behind the USA.",
      color: "antiquewhite",
    },
    {
      title: "PORTUGAL",
      flag: "https://cdn-icons-png.flaticon.com/512/321/321256.png",
      name: "GALãO",
      image:
        "https://cdn.tasteatlas.com/images/ingredients/2ae1a46180e942c4b1d9c962a5ee073e.jpg?w=600&h=450",
      ingredients: ["3 parts foamed milk", "1 part coffee", "1 TBSP SUGAR "],
      description: "Most coffee in Portugal comes from Brazil.",
      color: "antiquewhite",
    },
    {
      title: "FRANCE",
      flag: "https://cdn-icons-png.flaticon.com/512/330/330490.png",
      name: "CAFÉ AU LAIT",
      image:
        "https://caferecetas.com/wp-content/uploads/2021/03/Cafe-au-Lait.jpg",
      ingredients: ["1 part milk", "1 part espresso", "1 tbsp sugar"],
      description:
        "The trick here is to serve it in a big cup — to make for easy croissant dipping.",
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

  return (
    <div>
      <div className="cardHolder-container">{createCards(cardsInfo)}</div>
    </div>
  );
}
