import React, { useState } from "react";
import List from "./List";
import Form from "./Form";
import "./Afazeres.css";

function Afazeres() {
  const [items, setItems] = useState([]);

  function onAddItem(item) {
    setItems([...items, item]);
  }

  return (
    <div className="container">
      <h1>Afazeres</h1>

      <Form onAddItem={onAddItem}></Form>
      <List items={items}></List>
    </div>
  );
}

export default Afazeres;
