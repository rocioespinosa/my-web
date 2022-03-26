import React from "react";
import Card from "../card";
import "./styles.css";

export default function CardHolder() {
  const cardsInfo = [
    {
      title: "MEXICO",
      flag: "https://cdn-icons-png.flaticon.com/512/330/330433.png",
      info: [
        {
          name: "CAFÉ DE OLLA",
          image:
            "https://laroussecocina.mx/wp-content/uploads/2018/01/Cafe-de-olla-001-Larousse-Cocina.jpg",
          ingredients: [
            "Cinnamon stick",
            "1.5 cups water",
            "1 tbsp coffee",
            "1.5 tbsp piloncillo",
          ],
          description:
            "Mexico is one of the largest exporters of organic certified coffee",
        },
      ],
      color: "antiquewhite",
    },
    {
      title: "CUBA",
      flag: "https://cdn-icons-png.flaticon.com/512/330/330532.png",
      info: [
        {
          name: "CAFÉ CUBANO",
          image:
            "https://recetacubana.com/wp-content/uploads/2019/08/cafe-cubano-1024x1024.jpg",
          ingredients: ["1 tbsp sugar", "espresso", "small but strong"],
          description:
            "Coffee cultivated in Sierra Maestra is done so without chemical fertilisers",
        },
      ],
      color: "antiquewhite",
    },
    {
      title: "COLOMBIA",
      flag: "https://cdn-icons-png.flaticon.com/512/317/317153.png",
      info: [
        {
          name: "CORTADO",
          image:
            "https://perfectdailygrind.com/es/wp-content/uploads/sites/2/2020/03/Cortadito-1.png",
          ingredients: [" 1 part milk", "1 part espresso", "1 TBSP SUGAR "],
          description: "Eje Cafetero is Colombia's main coffee-growing region.",
        },
      ],
      color: "antiquewhite",
    },
    {
      title: "BRAZIL",
      flag: "https://cdn-icons-png.flaticon.com/512/630/630591.png",
      info: [
        {
          name: "CAFEZINHO",
          image:
            "https://twigscafe.com/wp-content/uploads/2021/07/cup-of-black-coffee.jpg",
          ingredients: ["1 tbsp sugar", "espresso", "paper flannel filter"],
          description:
            "Similar to an espresso, cafezinhos are small, strong cups of java.",
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
