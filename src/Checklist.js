import React, { useEffect, useState } from "react";
import List from "./components/List";
import Form from "./components/Form";
import Item from "./components/Item";
import "./Checklist.css";
import Modal from "./components/Modal";
import { createStore } from "redux";
import { Provider } from "react-redux";
import listReducer from "./reducers/listReducer";

const store = createStore(listReducer);

const SAVED_ITEMS = "savedItems";

function Checklist() {
  const [showModal, setShowModal] = useState(false);
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
  //   if (savedItems) {
  //     setItems(savedItems);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
  // }, [items]);

  // function onAddItem(text) {
  //   let item = new Item(text);

  //   setItems([...items, item]);
  //   onHideModal();
  // }

  // function onItemDeleted(item) {
  //   let filteredItems = items.filter((it) => it.id != item.id);
  //   setItems(filteredItems);
  // }

  // function onDone(item) {
  //   let updatedItems = items.map((it) => {
  //     if (it.id === item.id) {
  //       it.done = !it.done;
  //     }
  //     return it;
  //   });
  //   setItems(updatedItems);

  // }

  function onHideModal() {
    setShowModal(false);
  }

  return (
    <div className="container">
      <Provider store={store}>
        <header className="header">
          <h1>Cheklist</h1>
          <button
            className="addButton"
            onClick={() => {
              setShowModal(true);
            }}
          >
            +
          </button>
        </header>

        <List></List>
        <Modal show={showModal} onHideModal={onHideModal}>
          <Form show={showModal} onHideModal={onHideModal}></Form>
        </Modal>
      </Provider>
    </div>
  );
}

export default Checklist;
