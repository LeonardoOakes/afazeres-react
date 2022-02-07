import React, { useState } from "react";
import List from "./List";
import Form from "./Form";
import Item from "./Item";
import "./Afazeres.css";

function Afazeres() {
  const [items, setItems] = useState([]);

  function onAddItem(text) {
    let item = new Item(text);

    setItems([...items, item]);
  }

  function onItemDeleted(item) {
    let filteredItems = items.filter((it) => it.id != item.id);
    setItems(filteredItems)
  }

  return (
    <div className="container">
      <h1>Afazeres</h1>

      <Form onAddItem={onAddItem}></Form>
      <List onItemDeleted={onItemDeleted} items={items}></List>
    </div>
  );
}

export default Afazeres;
