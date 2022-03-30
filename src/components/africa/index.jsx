import React from "react";
import Card from "../card";
import "./styles.css";

export default function CardHolder() {
  const cardsInfo = [
    {
      title: "SENEGAL",
      flag: "https://cdn-icons-png.flaticon.com/512/321/321259.png",
      info: [
        {
          name: "CAFE TOUBA",
          image:
            "https://i.insider.com/579b8e3fdd0895e4518b4da3?width=700&format=jpeg&auto=webp",
          ingredients: ["african black pepper", "sugar", "ground coffee beans"],
          description:
            "This drink is flavored with Guinea pepper and occasionally cloves.",
        },
      ],
      color: "antiquewhite",
    },
    {
      title: "INDIA",
      flag: "https://cdn-icons-png.flaticon.com/512/330/330439.png",
      info: [
        {
          name: "FILTER COFFEE",
          image:
            "https://www.vegrecipesofindia.com/wp-content/uploads/2016/09/filter-coffee-recipe-1-500x500.jpg",
          ingredients: [
            "1 tsp sugar",
            "1 cup milk",
            "3/4 cup water",
            "2 tsp coffee powder",
          ],
          description:
            "Baba Budan is credited with bringing coffee to India in the 17th century.",
        },
      ],
      color: "antiquewhite",
    },
    {
      title: "MOROCCO",
      flag: "https://cdn-icons-png.flaticon.com/512/630/630616.png",
      info: [
        {
          name: "SPICED COFFEE",
          image:
            "https://i.etsystatic.com/7670566/r/il/479c87/591897711/il_570xN.591897711_br5w.jpg",
          ingredients: [
            "1/2 cup coffee beans",
            "cinnamon, ginger",
            "cardamom, salt",
          ],
          description:
            "This fragrant blend of dark coffee melds together warm spices like cardamom, black pepper, cinnamon, clove, and nutmeg.",
        },
      ],
      color: "antiquewhite",
    },
    {
      title: "ALGERIA",
      flag: "https://cdn-icons-png.flaticon.com/512/330/330541.png",
      info: [
        {
          name: "MAZAGRAN",
          image:
            "https://coffeeaffection.com/wp-content/uploads/2021/01/mazagran-lemon-coffee-recipe.jpg",
          ingredients: [
            "ice",
            "black coffee",
            "2 tbsp lemon juice",
            "2 tbsp sugar",
          ],
          description: "Mazagran can be served hot or cold.",
        },
      ],
      color: "antiquewhite",
    },
  ];

  function createCards(arr) {
    const new_arr = [];

    for (let i = 0; i < arr.length; i++) {
      new_arr.push(<Card className="cardHolder-card" {...cardsInfo[i]} />);
    }

    return new_arr;
  }

  return (
    <div>
      <div className="cardHolder-container">{createCards(cardsInfo)}</div>
    </div>
  );
}
