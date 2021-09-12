import React from "react";
import './Main.css'
import koko from "../img/koko.jpg";
import q from '../img/q.png';

const Main = ({ win, newGame, testClick }) => {
  return (
    <div className="Main">
      
      <h1 className="text-center"> Just Click on the button! </h1>
      
      <div className="main-icon">{win ? <img src={koko} alt="" /> : <img src={q} alt="" />}</div>

      {win ? (
        <div className="main-btn" onClick={newGame}>restart</div>
      ) : (
        <div className="main-btn" onClick={testClick}>Button</div>
      )}
    </div>
  );
};

export default Main;
