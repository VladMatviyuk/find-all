import React from "react";
import koko from "../img/koko.jpg";

const Main = (props) => {
  return (
    <div className="Main">
      <h1 className="text-center">
        Узнай что скрывается под карточкой, собери все маски!
      </h1>
      <div className="main-icon">
        {props.win ? <img src={koko} alt="" /> : "?"}
      </div>
      <div className="main-btn" onClick={props.testClick}>
        Поиск {`+ ${props.count}`}
      </div>
    </div>
  );
};

export default Main;
