import React from "react";
import q from "../img/q.png";
import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      {props.item.status ? <img src={props.item.image} alt="" /> : <img src={q} alt="" />}
      {props.item.status ? <span>{props.item.title}</span> : <span> ??? </span>}
    </div>
  );
};

export default Card;
