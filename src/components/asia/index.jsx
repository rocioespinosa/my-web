import React from "react";
import Card from "../card";
import "./styles.css";

export default function CardHolder() {
  const cardsInfo = [
    {
      title: "TURKEY",
      flag: "https://cdn-icons-png.flaticon.com/512/330/330467.png",
      info: [
        {
          name: "TURKISH COFFEE",
          image:
            "https://i.insider.com/579b8e3fdd0895e4518b4da3?width=700&format=jpeg&auto=webp",
          ingredients: [
            "1 cardamom pod",
            "1 cup water",
            "1 tbsp ground coffee",
          ],
          description:
            "Turkish coffee is special in that it is prepared unfiltered, and so the grounds settle to the bottom.",
        },
      ],
      color: "antiquewhite",
    },
    {
      title: "VIETNAM",
      flag: "https://cdn-icons-png.flaticon.com/512/330/330465.png",
      info: [
        {
          name: "CA PHE DA",
          image:
            "https://www.196flavors.com/wp-content/uploads/2019/02/ca-phe-sua-da-4.jpg",
          ingredients: [
            "ice",
            "160ml boiling water",
            "2 tbsp condensed milk",
            "15gm ground coffee",
          ],
          description:
            "Vietnam is the second largest coffee producer in the world, after Brazil.",
        },
      ],
      color: "antiquewhite",
    },
    {
      title: "HONG KONG",
      flag: "https://cdn-icons-png.flaticon.com/512/330/330502.png",
      info: [
        {
          name: "YUANYANG",
          image:
            "https://www.gourmet4life.com/image0428/e4/e4cf26c012f2a2724b606ca57be66fb1.jpg",
          ingredients: ["Condensed milk", "Black tea", "coffee"],
          description:
            "Starbucks plan to replace Canada and China as its second largest market.",
        },
      ],
      color: "antiquewhite",
    },
    {
      title: "MALAYSIA",
      flag: "https://cdn-icons-png.flaticon.com/512/330/330541.png",
      info: [
        {
          name: "KOPU SUSU PANAS",
          image:
            "https://coffeeaffection.com/wp-content/uploads/2021/01/mazagran-lemon-coffee-recipe.jpg",
          ingredients: [
            "1 part ground coffee",
            "1 part condensed milk",
            "sugar",
          ],
          description:
            "British colonists introduced coffee to Malaysia in the 1800s, where local tastes influenced it to be served thick and sweet with condensed milk.",
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
