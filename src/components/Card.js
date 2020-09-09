import React from "react";
import q from "../img/q.jpg";
import koko from "../img/koko.jpg";

const Card = (props) => {
  return (
    <div className="card">
      {props.item.status ? <img src={koko} alt="" /> : <img src={q} alt="" />}
      {props.item.status ? <span>{props.item.title}</span> : <span> ??? </span>}
    </div>
  );
};

export default Card;
