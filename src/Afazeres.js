import React, { useEffect, useState } from "react";
import List from "./components/List";
import Form from "./components/Form";
import Item from "./components/Item";
import "./Afazeres.css";
import Modal from "./components/Modal";

const SAVED_ITEMS = "savedItems";

function Afazeres() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
  }, [items]);

  function onAddItem(text) {
    let item = new Item(text);

    setItems([...items, item]);
  }

  function onItemDeleted(item) {
    let filteredItems = items.filter((it) => it.id != item.id);
    setItems(filteredItems);
  }

  function onDone(item) {
    let updatedItems = items.map((it) => {
      if (it.id === item.id) {
        it.done = !it.done;
      }
      return it;
    });
    setItems(updatedItems);
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Afazeres</h1>
        <button className="addButton">+</button>
      </header>

      <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
      <Modal>
        <Form onAddItem={onAddItem}></Form>
      </Modal>
    </div>
  );
}

export default Afazeres;
