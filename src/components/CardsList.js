import React from "react";
import Card from "./Card";

const CardsList = (items) => {
  return (
    <div className="cards-list">
      {items.items.map((item, key) => {
        return <Card item={item} key={key} />;
      })}
    </div>
  );
};

export default CardsList;
