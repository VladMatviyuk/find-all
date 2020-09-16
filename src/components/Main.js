import React from "react";
import koko from "../img/koko.jpg";

const Main = ({ win, count, newGame, testClick }) => {
  return (
    <div className="Main">
      <h1 className="text-center">
        Узнай что скрывается под карточкой, собери все маски!
      </h1>
      <div className="main-icon">{win ? <img src={koko} alt="" /> : "?"}</div>
      {win ? (
        <div className="main-btn" onClick={newGame}>
          Еще раз!
        </div>
      ) : (
        <div className="main-btn" onClick={testClick}>
          Кнопка ({`${count}`})
        </div>
      )}
    </div>
  );
};

export default Main;
