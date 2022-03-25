import React from "react";
import Card from "../card";
import "./styles.css";

export default function CardHolder() {
  const cardsInfo = [
    {
      title: "GREECE",
      flag: "https://cdn-icons-png.flaticon.com/512/330/330515.png",
      name: "FRAPPE",
      image:
        "https://www.dimitrasdishes.com/wp-content/uploads/2020/06/Frappe-scaled-720x720.jpeg",
      ingredients: ["foam", "ice cubes", "cold water", "instant coffee"],
      description: "It is also common in Cyprus.",
      color: "antiquewhite",
    },
    {
      title: "IRELAND",
      flag: "https://cdn-icons-png.flaticon.com/512/630/630682.png",
      name: "IRISH",
      image:
        "https://images.absolutdrinks.com/drink-images/Raw/Absolut/dde5b617-048f-4af0-8c7f-0b2818407acb.jpg?imwidth=500",
      ingredients: [
        "whipped heavy cream",
        "1 tbsp brown sugar",
        "2 tbsp irish whiskey",
        "1 cup   coffee",
      ],
      description: "This beverage is a coffee-cocktail hybrid.",
      color: "antiquewhite",
    },
    {
      title: "AUSTRIA",
      flag: "https://cdn-icons-png.flaticon.com/512/321/321212.png",
      name: "MELANGE",
      image:
        "https://media02.stockfood.com/largepreviews/MTEyOTg2NjM=/00364473-Wiener-Melange-Viennese-coffee-speciality-in-glass-cup.jpg",
      ingredients: [
        "whipped cream",
        "2 tbs brown sugar",
        "1 egg yolk",
        "1 cup espresso",
      ],
      description: "1683- the year coffee was introduced in Europe",
      color: "antiquewhite",
    },
    {
      title: "SPAIN",
      flag: "https://cdn-icons-png.flaticon.com/512/330/330557.png",
      name: "CAFÉ CON MIEL",
      image: "https://tiendacapsulas.com/modules/leoblog/views/img/b/b-32.jpg",
      ingredients: ["cinnamon", "steamed milk", "shot of espresso", "honey"],
      description:
        "Natural and mezcla- the two main blends found in Spanish coffee.",
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
