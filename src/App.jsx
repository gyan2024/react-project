import {  useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Column from "./components/Column.jsx";

// const endPoint=fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
// const jsonObj=endPoint.json();
//Api raising error

function App() {
  const [group, setGroup] = useState("status");
  const [order, setOrder] = useState("priority");

  function handleGroupUpdate(option) {
    setGroup(option);
  }
  function handleOrderUpdate(option) {
    setOrder(option);
  }

  return (
    <>
      <Header
        onUpdateGroup={handleGroupUpdate}
        onUpdateOrder={handleOrderUpdate}
        group={group}
        order={order}
      />
      <Body group={group} order={order}/>

    </>
  );
}

export default App;
