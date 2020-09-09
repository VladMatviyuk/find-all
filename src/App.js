import React from "react";
import Main from "./components/Main";
import CardsList from "./components/CardsList";

const App = () => {
  const [items, setItem] = React.useState([
    { id: 1, image: "koko.jpg", title: "Item 1", status: false },
    { id: 2, image: "koko.jpg", title: "Item 2", status: false },
    { id: 3, image: "koko.jpg", title: "Item 3", status: false },
    { id: 4, image: "koko.jpg", title: "Item 4", status: false },
    { id: 5, image: "koko.jpg", title: "Item 5", status: false },
    { id: 6, image: "koko.jpg", title: "Item 6", status: false },
    { id: 7, image: "koko.jpg", title: "Item 6", status: false },
    { id: 8, image: "koko.jpg", title: "Item 6", status: false },
    { id: 9, image: "koko.jpg", title: "Item 6", status: false },
    { id: 10, image: "koko.jpg", title: "Item 10", status: false },
  ]);

  const [count, setCount] = React.useState(0);
  const [win, setWin] = React.useState(false);

  function checkWin(items) {
    let winCount = 0;
    // eslint-disable-next-line
    items.map((i) => {
      if (i.status) {
        winCount += 1;
      }
    });
    if (winCount === 10) {
      setWin(true);
    }
  }

  function testYourLuck() {
    let randomNumber = Math.floor(Math.random() * 10);

    let newArray = [...items];
    newArray[randomNumber] = {
      ...newArray[randomNumber],
      status: !newArray[randomNumber].status,
    };

    setItem(newArray);
    checkWin(newArray);
    setCount(count + 1);
  }

  return (
    <div className="App">
      <Main testClick={testYourLuck} count={count} win={win} />
      <CardsList items={items} />
    </div>
  );
};

export default App;
