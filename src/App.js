import React from "react";
import Main from "./components/Main";
import CardsList from "./components/CardsList";
import Modal from "./components/Modal/Modal";
import Counter from "./components/Counter";

const { regulations, winInfo } = require("./data/templatesModal.js");

const App = () => {

  const [items, setItem] = React.useState([
    { id: 1, image: "1.png", title: "Richard", status: false },
    { id: 2, image: "2.png", title: "Tony", status: false },
    { id: 3, image: "3.png", title: "Zack", status: false },
    { id: 4, image: "4.png", title: "George", status: false },
    { id: 5, image: "5.png", title: "Rasmus", status: false },
    { id: 6, image: "6.png", title: "Don Juan ", status: false },
    { id: 7, image: "7.png", title: " Aubrey", status: false },
    { id: 8, image: "8.png", title: "Richter", status: false },
    { id: 9, image: "9.png", title: "Peter", status: false },
    { id: 10, image: "10.png", title: "Rufus", status: false },
  ]);

  const [count, setCount] = React.useState(0);
  const [win, setWin] = React.useState(false);
  const [modal, setModal] = React.useState(false);

  React.useEffect(() => {
    modalTarget();
  }, []);

  const checkWin = (items) => {
    let winCount = 0;
    items.map((i) => {
      if (i.status) {
        winCount += 1;
      }
    });
    if (winCount === 10) {
      setWin(true);
      modalTarget();
    }
  };

  const testYourLuck = () => {
    let randomNumber = Math.floor(Math.random() * 10);

    let newArray = [...items];

    newArray[randomNumber] = {
      ...newArray[randomNumber],
      status: !newArray[randomNumber].status,
    };

    setItem(newArray);
    checkWin(newArray);
    setCount(count + 1);
  };

  const newGame = () => {
    items.map((i) => {
      i.status = false;
    });
    setCount(0);
    setWin(false);
  };

  const modalTarget = () => {
    setModal(!modal);
  };

  // const wintarget = () => {
  //   setCount(0);
  //   setWin(true);
  //   modalTarget();
  // };

  return (
    <div className="App">
      {modal && ( <Modal info={win ? winInfo : regulations} modalTarget={modalTarget} /> )}
      <Main
        testClick={testYourLuck}
        win={win}
        newGame={newGame}
      />
      <CardsList items={items} />
      <Counter count={count}/>
    </div>
  );
};

export default App;
